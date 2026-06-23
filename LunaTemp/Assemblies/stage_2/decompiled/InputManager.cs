using UnityEngine;
using UnityEngine.Serialization;

public class InputManager : MonoBehaviour
{
	public Camera mainCamera;

	public LayerMask itemLayer;

	[Tooltip("Layer dành cho các Object mà khi click vào sẽ bay ra Store")]
	public LayerMask installLayer;

	public float maxDistance = 100f;

	public static InputManager Instance;

	private Transform draggedObject;

	private ItemType draggedItemType;

	private Vector3 offset;

	private float dragDepth;

	private float blockInputUntilTime = 0f;

	private Vector3 mouseDownPos;

	private const float clickDragThreshold = 10f;

	[Header("Store Settings")]
	[Tooltip("Số lượng Item thả trúng đích để kích hoạt tính năng Click bất kỳ đâu cũng đi Store")]
	[FormerlySerializedAs("curtainsToGotoStore")]
	public int itemsToGotoStore = 7;

	[Header("Drag Settings")]
	[Tooltip("Số lượng layer cộng thêm khi nhấc Item lên (để nó đè lên UI/đồ vật khác)")]
	public int dragSortingOffset = 100;

	[Header("Drag Bounds Settings")]
	[Tooltip("Bật/Tắt tính năng giới hạn di chuyển")]
	public bool useDragBounds = true;

	[Tooltip("Khung giới hạn kéo thả (Kéo thả 1 BoxCollider vào đây, hoặc để trống nếu không cần giới hạn)")]
	public BoxCollider dragBounds;

	public void BlockInputFor(float duration)
	{
		float targetTime = Time.time + duration;
		if (targetTime > blockInputUntilTime)
		{
			blockInputUntilTime = targetTime;
		}
	}

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		if (mainCamera == null)
		{
			mainCamera = Camera.main;
		}
	}

	private void Update()
	{
		if (Time.time < blockInputUntilTime)
		{
			if (Input.GetMouseButtonUp(0))
			{
				MouseUp();
			}
			return;
		}
		if ((Input.GetMouseButton(0) || Input.GetMouseButtonDown(0)) && HandHintManager.Instance != null)
		{
			HandHintManager.Instance.HideAndResetTimer();
		}
		if (Input.GetMouseButtonDown(0))
		{
			if (GameManager.Instance != null && GameManager.Instance.isGameEnded)
			{
				GameManager.Instance.GotoStore();
				return;
			}
			Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var _, maxDistance, installLayer))
			{
				if (GameManager.Instance != null)
				{
					GameManager.Instance.GotoStore();
				}
				return;
			}
			if (ItemManager.Instance != null && ItemManager.Instance.totalItemsDropped >= itemsToGotoStore)
			{
				if (GameManager.Instance != null)
				{
					GameManager.Instance.GotoStore();
				}
				return;
			}
			MouseDown();
		}
		if (Input.GetMouseButton(0))
		{
			MouseDrag();
		}
		if (Input.GetMouseButtonUp(0))
		{
			MouseUp();
		}
	}

	private void MouseDown()
	{
		Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
		if (!Physics.Raycast(ray, out var hit, maxDistance, itemLayer))
		{
			return;
		}
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(FxType.Click);
		}
		mouseDownPos = Input.mousePosition;
		ItemController itemController = hit.transform.GetComponent<ItemController>();
		if (itemController != null)
		{
			if (itemController.itemType == ItemType.Pickable)
			{
				return;
			}
			if (itemController.itemType == ItemType.ClickOnly)
			{
				itemController.onClick?.Invoke();
				itemController.PlayDropAnimations();
				return;
			}
			itemController.onDragStart?.Invoke();
		}
		draggedObject = hit.transform;
		draggedItemType = ((itemController != null) ? itemController.itemType : ItemType.DragAndDrop);
		ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
		if (itemGraphic != null)
		{
			bool shouldIncrease = true;
			if (itemController != null && (itemController.itemType == ItemType.SwipeInPlace || !itemController.increaseSortingLayerOnDrag))
			{
				shouldIncrease = false;
			}
			if (shouldIncrease)
			{
				itemGraphic.SetSortingLayerToTop();
			}
		}
		ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
		if (itemMovement != null)
		{
			itemMovement.UpdateSpawnPos();
		}
		dragDepth = mainCamera.WorldToScreenPoint(draggedObject.position).z;
		Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
		offset = draggedObject.position - mouseWorldPos;
	}

	private void MouseDrag()
	{
		if (!(draggedObject != null))
		{
			return;
		}
		ItemController itemController = draggedObject.GetComponent<ItemController>();
		if (!(itemController != null) || itemController.itemType != ItemType.SwipeInPlace)
		{
			Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
			Vector3 targetPos = mouseWorldPos + offset;
			BoxCollider currentBounds = null;
			if (itemController != null && itemController.customDragBounds != null)
			{
				currentBounds = itemController.customDragBounds;
			}
			else if (useDragBounds && dragBounds != null)
			{
				currentBounds = dragBounds;
			}
			if (currentBounds != null)
			{
				Bounds b = currentBounds.bounds;
				targetPos.x = Mathf.Clamp(targetPos.x, b.min.x, b.max.x);
				targetPos.y = Mathf.Clamp(targetPos.y, b.min.y, b.max.y);
			}
			draggedObject.position = targetPos;
		}
	}

	public void ForceStartDrag(Transform targetObj)
	{
		draggedObject = targetObj;
		draggedItemType = draggedObject.GetComponent<ItemController>()?.itemType ?? ItemType.DragAndDrop;
		mouseDownPos = Input.mousePosition;
		ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
		ItemController itemCtrl = draggedObject.GetComponent<ItemController>();
		if (itemGraphic != null)
		{
			bool shouldIncrease = true;
			if (itemCtrl != null && (itemCtrl.itemType == ItemType.SwipeInPlace || !itemCtrl.increaseSortingLayerOnDrag))
			{
				shouldIncrease = false;
			}
			if (shouldIncrease)
			{
				itemGraphic.SetSortingLayerToTop();
			}
		}
		ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
		if (itemMovement != null)
		{
			itemMovement.UpdateSpawnPos();
		}
		if (itemCtrl != null)
		{
			itemCtrl.onDragStart?.Invoke();
		}
		dragDepth = mainCamera.WorldToScreenPoint(draggedObject.position).z;
		Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
		offset = Vector3.zero;
	}

	public void ForceDrop()
	{
		MouseUp();
	}

	private void MouseUp()
	{
		if (!(draggedObject != null))
		{
			return;
		}
		bool isClick = Vector3.Distance(Input.mousePosition, mouseDownPos) <= 10f;
		ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
		ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
		ItemController itemController = draggedObject.GetComponent<ItemController>();
		if (isClick && itemController != null)
		{
			itemController.onClick?.Invoke();
		}
		if (draggedItemType == ItemType.SwipeInPlace)
		{
			draggedObject = null;
			return;
		}
		bool dropSuccess = false;
		if (itemController != null && itemController.dropTarget != null)
		{
			float distance = Vector3.Distance(draggedObject.position, itemController.dropTarget.position);
			if (distance <= itemController.dropDistanceThreshold)
			{
				if (itemController.isLocked)
				{
					itemController.onInteractWhileLocked?.Invoke();
				}
				else
				{
					DropTargetSlot slot = itemController.dropTarget.GetComponent<DropTargetSlot>();
					if (slot != null)
					{
						if (itemController.isTool)
						{
							if (slot.isOccupied)
							{
								dropSuccess = true;
								slot.ApplyToolToCurrentItem();
							}
						}
						else if (!slot.isOccupied)
						{
							dropSuccess = true;
							slot.SetCurrentItem(itemController.gameObject);
						}
					}
					else
					{
						dropSuccess = true;
					}
				}
			}
		}
		if (dropSuccess)
		{
			if (itemGraphic != null)
			{
				itemGraphic.ResetSortingLayer();
			}
			itemController.PlayDropAnimations();
		}
		else
		{
			if (itemMovement != null)
			{
				itemMovement.ReturnToSpawn();
			}
			else if (itemGraphic != null)
			{
				itemGraphic.ResetSortingLayer();
			}
			if (itemController != null)
			{
				itemController.onReturn?.Invoke();
			}
		}
		draggedObject = null;
	}
}
