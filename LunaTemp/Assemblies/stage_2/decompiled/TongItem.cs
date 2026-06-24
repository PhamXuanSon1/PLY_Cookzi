using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class TongItem : ItemController
{
	[Header("--- Tong Settings ---")]
	[Tooltip("Điểm trên cái kẹp mà vật sẽ bay tới và dính vào")]
	public Transform holdPoint;

	[Space(10f)]
	[Tooltip("Layer của những vật thể có thể dùng kẹp để gắp")]
	public LayerMask pickableLayer;

	[Tooltip("Layer của rổ/đích đến dành riêng cho cái kẹp")]
	public LayerMask basketLayer;

	[Space(10f)]
	[Tooltip("Bán kính vùng quét (Raycast hình cầu) xung quanh Hold Point")]
	public float detectRadius = 0.5f;

	[Tooltip("Khoảng góc xoay Random (Z) khi vật bay vào rổ. X = Min, Y = Max")]
	public Vector2 randomRotateRange = new Vector2(180f, 240f);

	[Header("--- Tween Settings ---")]
	public float flyToTongDuration = 0.2f;

	public float flyToBasketDuration = 0.5f;

	[Tooltip("Độ cao của vòng cung khi vật nhảy vào rổ")]
	public float jumpPower = 1.5f;

	[Tooltip("Order in Layer tuyệt đối sẽ được gán cho vật sau khi rớt vào rổ")]
	public int finalSortingOrder = 61;

	[Header("--- Audio Settings ---")]
	public FxType pickSound = FxType.None;

	public FxType dropIntoBasketSound = FxType.None;

	[Header("--- Objective Settings ---")]
	[Tooltip("Danh sách đồ ăn cần gắp. Khi gắp ĐỦ đồ ăn trong list này vào rổ, cái Kẹp sẽ tự động chạy Anim List và OnAnimFinished!")]
	public List<GameObject> requiredPickables = new List<GameObject>();

	private Transform currentHeldItem;

	private Collider currentHeldCollider;

	private float actionLockTime = 0f;

	public bool IsHoldingItem => currentHeldItem != null;

	public Transform CurrentHeldItem => currentHeldItem;

	public Transform GetHintTarget()
	{
		if (currentHeldItem != null)
		{
			return dropTarget;
		}
		for (int i = 0; i < requiredPickables.Count; i++)
		{
			if (requiredPickables[i] != null && requiredPickables[i].activeInHierarchy)
			{
				Collider col = requiredPickables[i].GetComponent<Collider>();
				if (col != null && col.enabled)
				{
					return requiredPickables[i].transform;
				}
			}
		}
		return null;
	}

	private void Start()
	{
		hideSpriteOnDrop = false;
		if (onDragStart == null)
		{
			onDragStart = new UnityEvent();
		}
		if (onReturn == null)
		{
			onReturn = new UnityEvent();
		}
		onDragStart.AddListener(OnTongDragStart);
		onReturn.AddListener(OnTongReturn);
	}

	private void OnTongDragStart()
	{
		if (currentHeldItem != null)
		{
			ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
			if (graphic != null)
			{
				graphic.SetSortingLayerToTop();
			}
		}
	}

	private void OnTongReturn()
	{
		if (currentHeldItem != null)
		{
			ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
			if (graphic != null)
			{
				graphic.ResetSortingLayer();
			}
		}
	}

	private void Update()
	{
		if (holdPoint == null || Time.time < actionLockTime)
		{
			return;
		}
		Collider[] hits = Physics.OverlapSphere(holdPoint.position, detectRadius);
		Collider[] array = hits;
		foreach (Collider hit in array)
		{
			if (currentHeldItem == null && IsInLayerMask(hit.gameObject, pickableLayer))
			{
				PickUpItem(hit);
				break;
			}
			if (currentHeldItem != null && IsInLayerMask(hit.gameObject, basketLayer))
			{
				DropItemIntoBasket();
				break;
			}
		}
	}

	private void OnDrawGizmosSelected()
	{
		if (holdPoint != null)
		{
			Gizmos.color = Color.red;
			Gizmos.DrawWireSphere(holdPoint.position, detectRadius);
		}
	}

	private void PickUpItem(Collider itemCollider)
	{
		currentHeldItem = itemCollider.transform;
		currentHeldCollider = itemCollider;
		if (pickSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(pickSound);
		}
		if (currentHeldCollider != null)
		{
			currentHeldCollider.enabled = false;
		}
		currentHeldItem.DOKill();
		currentHeldItem.SetParent(holdPoint);
		ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
		if (graphic != null)
		{
			graphic.SetSortingLayerToTop();
		}
		actionLockTime = Time.time + flyToTongDuration;
		currentHeldItem.DOLocalMove(Vector3.zero, flyToTongDuration).SetEase(Ease.OutQuad);
	}

	private void DropItemIntoBasket()
	{
		Transform itemToDrop = currentHeldItem;
		itemToDrop.SetParent(null);
		currentHeldItem = null;
		currentHeldCollider = null;
		itemToDrop.DOKill();
		ItemController itemCtrl = itemToDrop.GetComponent<ItemController>();
		bool isLastItem = false;
		if (requiredPickables.Contains(itemToDrop.gameObject))
		{
			requiredPickables.Remove(itemToDrop.gameObject);
			if (requiredPickables.Count == 0)
			{
				isLastItem = true;
			}
		}
		actionLockTime = Time.time + flyToBasketDuration;
		float randomZ = Random.Range(randomRotateRange.x, randomRotateRange.y);
		Vector3 addRot = new Vector3(0f, 0f, randomZ);
		ItemGraphic graphic = itemToDrop.GetComponent<ItemGraphic>();
		if (itemCtrl != null && itemCtrl.dropTarget != null)
		{
			itemToDrop.SetParent(itemCtrl.dropTarget);
			itemToDrop.DOLocalJump(Vector3.zero, jumpPower, 1, flyToBasketDuration).SetEase(Ease.OutQuad).OnComplete(delegate
			{
				if (dropIntoBasketSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(dropIntoBasketSound);
				}
				if (graphic != null)
				{
					graphic.SetSortingLayerExact(finalSortingOrder);
				}
				if (isLastItem)
				{
					PlayDropAnimations();
					if (InputManager.Instance != null)
					{
						InputManager.Instance.ForceDrop();
					}
				}
			});
		}
		else
		{
			Vector3 finalPos = itemToDrop.position;
			itemToDrop.DOJump(finalPos, jumpPower, 1, flyToBasketDuration).SetEase(Ease.OutQuad).OnComplete(delegate
			{
				if (dropIntoBasketSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(dropIntoBasketSound);
				}
				if (graphic != null)
				{
					graphic.SetSortingLayerExact(finalSortingOrder);
				}
				if (isLastItem)
				{
					PlayDropAnimations();
					if (InputManager.Instance != null)
					{
						InputManager.Instance.ForceDrop();
					}
				}
			});
		}
		itemToDrop.DORotate(addRot, flyToBasketDuration, RotateMode.WorldAxisAdd).SetEase(Ease.OutQuad);
	}

	private bool IsInLayerMask(GameObject obj, LayerMask layerMask)
	{
		return (layerMask.value & (1 << obj.layer)) > 0;
	}
}
