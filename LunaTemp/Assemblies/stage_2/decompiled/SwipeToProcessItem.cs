using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(ItemController))]
public class SwipeToProcessItem : MonoBehaviour
{
	[Tooltip("Quãng đường rê chuột cần thiết để lật 1 lần (tính bằng đơn vị World Space, ví dụ: 1.5f hoặc 2f)")]
	public float swipeDistanceRequired = 2f;

	[Tooltip("Số lần lật cần thiết để hoàn thành")]
	public int requiredFlips = 3;

	[Tooltip("Sự kiện gọi mỗi khi lật 1 lần. (Hãy gán hàm ItemController -> PlayDropAnimations vào đây)")]
	public UnityEvent onSingleFlip;

	[Tooltip("Sự kiện gọi ngay khoảnh khắc quẹt đủ số lần lật")]
	public UnityEvent onCompleted;

	[Tooltip("Sự kiện gọi khi ĐÃ HOÀN THÀNH và người chơi VỪA NHẢ CHUỘT ra (Gán SetToDragAndDrop vào đây)")]
	public UnityEvent onCompletedAndReleased;

	[Header("Manual Setup Events")]
	[Tooltip("Sự kiện gọi khi BẮT ĐẦU ấn giữ chuột vào đồ vật (Dùng để BẬT GameObject chứa thanh Bar)")]
	public UnityEvent onBeginSwipe;

	[Tooltip("Sự kiện gọi khi NHẢ chuột ra (Dùng để TẮT GameObject chứa thanh Bar)")]
	public UnityEvent onEndSwipe;

	[Header("Visual Toggle (Tùy chọn)")]
	[Tooltip("Object hiển thị mặt A (Ví dụ: Mặt sống)")]
	public GameObject sideAObject;

	[Tooltip("Object hiển thị mặt B (Ví dụ: Mặt chín)")]
	public GameObject sideBObject;

	private bool isShowingSideA = true;

	[Header("Progress Bar (Tùy chọn)")]
	[Tooltip("Kéo Transform của 1 thanh màu. Scale của nó sẽ tự động chạy từ 0 đến 1 theo tiến trình.")]
	public Transform progressBarTransform;

	[Tooltip("Tích vào đây nếu bạn muốn thanh Bar chạy dọc (Scale Y) thay vì chạy ngang (Scale X)")]
	public bool isVerticalBar = false;

	private Vector3 lastWorldPos;

	private float currentSwipeDistance = 0f;

	private int currentFlips = 0;

	private bool isDragging = false;

	private Vector3 initialBarScale;

	private ItemController itemController;

	private void Awake()
	{
		itemController = GetComponent<ItemController>();
	}

	private void Start()
	{
		if (progressBarTransform != null)
		{
			initialBarScale = progressBarTransform.localScale;
			Vector3 scale = initialBarScale;
			if (isVerticalBar)
			{
				scale.y = 0f;
			}
			else
			{
				scale.x = 0f;
			}
			progressBarTransform.localScale = scale;
		}
	}

	private void OnDisable()
	{
		if (isDragging)
		{
			isDragging = false;
			if (itemController != null && itemController.sequenceLoopSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.StopFx(itemController.sequenceLoopSound);
			}
		}
	}

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			mousePos.z = 0f;
			bool isHit = false;
			RaycastHit2D hit2D = Physics2D.Raycast(mousePos, Vector2.zero);
			if (hit2D.collider != null && hit2D.collider.gameObject == base.gameObject)
			{
				isHit = true;
			}
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit3D) && hit3D.collider != null && hit3D.collider.gameObject == base.gameObject)
			{
				isHit = true;
			}
			if (isHit && currentFlips < requiredFlips)
			{
				isDragging = true;
				lastWorldPos = mousePos;
				onBeginSwipe?.Invoke();
				if (itemController != null && itemController.sequenceLoopSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
				{
					Ply_Singleton<Ply_SoundManager>.Ins.PlayLoopFx(itemController.sequenceLoopSound);
				}
			}
		}
		if (Input.GetMouseButtonUp(0) && isDragging)
		{
			isDragging = false;
			onEndSwipe?.Invoke();
			if (itemController != null && itemController.sequenceLoopSound != 0 && Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.StopFx(itemController.sequenceLoopSound);
			}
			if (currentFlips >= requiredFlips)
			{
				onCompletedAndReleased?.Invoke();
			}
		}
		if (isDragging && currentFlips < requiredFlips)
		{
			Vector3 currentWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			currentWorldPos.z = 0f;
			float dist = Vector3.Distance(currentWorldPos, lastWorldPos);
			currentSwipeDistance += dist;
			lastWorldPos = currentWorldPos;
			if (currentSwipeDistance >= swipeDistanceRequired)
			{
				currentSwipeDistance = 0f;
				currentFlips++;
				isShowingSideA = !isShowingSideA;
				if (sideAObject != null)
				{
					sideAObject.SetActive(isShowingSideA);
				}
				if (sideBObject != null)
				{
					sideBObject.SetActive(!isShowingSideA);
				}
				onSingleFlip?.Invoke();
				if (currentFlips >= requiredFlips)
				{
					onCompleted?.Invoke();
				}
			}
		}
		if (progressBarTransform != null)
		{
			float totalRequired = (float)requiredFlips * swipeDistanceRequired;
			float currentTotal = (float)currentFlips * swipeDistanceRequired + currentSwipeDistance;
			float percent = Mathf.Clamp01(currentTotal / totalRequired);
			Vector3 scale = progressBarTransform.localScale;
			if (isVerticalBar)
			{
				scale.y = percent * initialBarScale.y;
			}
			else
			{
				scale.x = percent * initialBarScale.x;
			}
			progressBarTransform.localScale = scale;
		}
	}
}
