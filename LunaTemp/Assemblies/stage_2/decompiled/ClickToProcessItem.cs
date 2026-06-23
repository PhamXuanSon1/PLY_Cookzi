using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(ItemController))]
public class ClickToProcessItem : MonoBehaviour
{
	[Tooltip("Số lần click cần thiết để băm xong (vd: 20 nhát dao)")]
	public int requiredClicks = 20;

	[Tooltip("Sự kiện gọi mỗi khi click 1 cái (Gán Anim con dao chém xuống vào đây)")]
	public UnityEvent onSingleClick;

	[Tooltip("Sự kiện gọi khi băm đủ số lần")]
	public UnityEvent onCompleted;

	[Header("Sprite Mask Dịch Chuyển Dần (Tùy chọn)")]
	[Tooltip("Kéo Transform của Sprite Mask vào đây")]
	public Transform maskTransform;

	[Tooltip("Vị trí của Mask lúc chưa cắt gì (0%)")]
	public Vector3 maskStartPos;

	[Tooltip("Vị trí của Mask lúc cắt xong hoàn toàn (100%)")]
	public Vector3 maskEndPos;

	[Header("Vật Thể Dịch Chuyển Dần (Tùy chọn)")]
	[Tooltip("Ví dụ: Kéo con dao vào đây để nó nhích dần theo từng nhát chém")]
	public Transform moveObject;

	public Vector3 moveStartPos;

	public Vector3 moveEndPos;

	private int currentClicks = 0;

	private ItemController itemController;

	private void Awake()
	{
		itemController = GetComponent<ItemController>();
		if (itemController != null)
		{
			itemController.onClick.AddListener(ProcessClick);
		}
		if (maskTransform != null)
		{
			maskTransform.localPosition = maskStartPos;
		}
		if (moveObject != null)
		{
			moveObject.localPosition = moveStartPos;
		}
	}

	private void ProcessClick()
	{
		if ((!(itemController != null) || itemController.itemType == ItemType.ClickOnly) && currentClicks < requiredClicks)
		{
			currentClicks++;
			onSingleClick?.Invoke();
			float percent = (float)currentClicks / (float)requiredClicks;
			if (maskTransform != null)
			{
				maskTransform.localPosition = Vector3.Lerp(maskStartPos, maskEndPos, percent);
			}
			if (moveObject != null)
			{
				moveObject.localPosition = Vector3.Lerp(moveStartPos, moveEndPos, percent);
			}
			if (currentClicks >= requiredClicks)
			{
				onCompleted?.Invoke();
			}
		}
	}

	public void ResetProcess()
	{
		currentClicks = 0;
		if (maskTransform != null)
		{
			maskTransform.localPosition = maskStartPos;
		}
		if (moveObject != null)
		{
			moveObject.localPosition = moveStartPos;
		}
	}

	[ContextMenu("Save Current Mask Pos as START")]
	private void SaveStartPos()
	{
		if (maskTransform != null)
		{
			maskStartPos = maskTransform.localPosition;
		}
		if (moveObject != null)
		{
			moveStartPos = moveObject.localPosition;
		}
	}

	[ContextMenu("Save Current Mask Pos as END")]
	private void SaveEndPos()
	{
		if (maskTransform != null)
		{
			maskEndPos = maskTransform.localPosition;
		}
		if (moveObject != null)
		{
			moveEndPos = moveObject.localPosition;
		}
	}
}
