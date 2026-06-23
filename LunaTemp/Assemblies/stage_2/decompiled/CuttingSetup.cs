using UnityEngine;
using UnityEngine.Events;

public class CuttingSetup : MonoBehaviour
{
	[Header("Tham chiếu đến Dao 2 (Dao băm)")]
	[Tooltip("Kéo con Dao 2 (có chứa ClickToProcessItem) vào đây")]
	public ClickToProcessItem knifeProcessor;

	[Header("Thông tin cắt riêng của nguyên liệu này")]
	[Tooltip("Số lần cắt cần thiết cho nguyên liệu này")]
	public int requiredClicks = 20;

	[Tooltip("Sprite Mask riêng của nguyên liệu này")]
	public Transform maskTransform;

	public Vector3 maskStartPos;

	public Vector3 maskEndPos;

	[Tooltip("Vị trí bắt đầu và kết thúc của dao khi cắt nguyên liệu này")]
	public Vector3 knifeStartPos;

	public Vector3 knifeEndPos;

	[Header("Events")]
	[Tooltip("Sự kiện riêng khi CẮT XONG nguyên liệu này (VD: Ẩn ớt, mở khóa thớt, bật đĩa...)")]
	public UnityEvent onCuttingCompleted;

	public void ApplySetupToKnife()
	{
		if (!(knifeProcessor == null))
		{
			knifeProcessor.onCompleted.RemoveListener(FireCuttingCompleted);
			knifeProcessor.requiredClicks = requiredClicks;
			knifeProcessor.maskTransform = maskTransform;
			knifeProcessor.maskStartPos = maskStartPos;
			knifeProcessor.maskEndPos = maskEndPos;
			knifeProcessor.moveStartPos = knifeStartPos;
			knifeProcessor.moveEndPos = knifeEndPos;
			knifeProcessor.ResetProcess();
			knifeProcessor.gameObject.SetActive(true);
			Collider col = knifeProcessor.GetComponent<Collider>();
			if (col != null)
			{
				col.enabled = true;
			}
			knifeProcessor.onCompleted.AddListener(FireCuttingCompleted);
		}
	}

	private void FireCuttingCompleted()
	{
		if (knifeProcessor != null)
		{
			knifeProcessor.onCompleted.RemoveListener(FireCuttingCompleted);
		}
		onCuttingCompleted?.Invoke();
	}

	[ContextMenu("Save Current Pos as START")]
	private void SaveStartPos()
	{
		if (maskTransform != null)
		{
			maskStartPos = maskTransform.localPosition;
		}
		if (knifeProcessor != null && knifeProcessor.moveObject != null)
		{
			knifeStartPos = knifeProcessor.moveObject.localPosition;
		}
	}

	[ContextMenu("Save Current Pos as END")]
	private void SaveEndPos()
	{
		if (maskTransform != null)
		{
			maskEndPos = maskTransform.localPosition;
		}
		if (knifeProcessor != null && knifeProcessor.moveObject != null)
		{
			knifeEndPos = knifeProcessor.moveObject.localPosition;
		}
	}
}
