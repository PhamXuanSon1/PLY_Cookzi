using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(ItemController))]
public class DragBetweenBoundsToProcess : MonoBehaviour
{
	[Header("Giới hạn Trái / Phải")]
	[Tooltip("Tạo 1 Empty GameObject làm điểm cực Trái và kéo vào đây")]
	public Transform leftPoint;

	[Tooltip("Tạo 1 Empty GameObject làm điểm cực Phải và kéo vào đây")]
	public Transform rightPoint;

	[Tooltip("Khoảng cách (bán kính) tối đa để tính là chạm vào điểm cực (ví dụ: 0.5)")]
	public float hitThreshold = 0.5f;

	[Header("Tiến độ")]
	[Tooltip("Tổng số lần chạm cực (trái hoặc phải) cần thiết để hoàn thành")]
	public int requiredHits = 6;

	[Header("Sự kiện")]
	[Tooltip("Sự kiện gọi mỗi khi vật chạm vào cực (Dùng để phát âm thanh chà/cưa)")]
	public UnityEvent onHitBound;

	[Tooltip("Sự kiện gọi khi chạm ĐỦ số lần (Hoàn thành)")]
	public UnityEvent onCompleted;

	[Header("Progress Bar (Tùy chọn)")]
	[Tooltip("Kéo Transform của thanh màu (Progress Bar) vào đây")]
	public Transform progressBarTransform;

	[Tooltip("Tích vào đây nếu thanh Bar chạy dọc")]
	public bool isVerticalBar = false;

	[Header("Visual Toggle (Tùy chọn)")]
	[Tooltip("Object hiển thị khi kéo chạm mép TRÁI")]
	public GameObject toggleObjectA;

	[Tooltip("Object hiển thị khi kéo chạm mép PHẢI")]
	public GameObject toggleObjectB;

	private int currentHits = 0;

	private bool lastHitWasLeft = false;

	private bool lastHitWasRight = false;

	private Vector3 initialBarScale;

	private void Start()
	{
		if (progressBarTransform != null)
		{
			initialBarScale = progressBarTransform.localScale;
			UpdateProgressBar();
		}
		if (leftPoint != null && Vector3.Distance(base.transform.position, leftPoint.position) <= hitThreshold)
		{
			lastHitWasLeft = true;
		}
		else if (rightPoint != null && Vector3.Distance(base.transform.position, rightPoint.position) <= hitThreshold)
		{
			lastHitWasRight = true;
		}
	}

	private void Update()
	{
		if (currentHits >= requiredHits || leftPoint == null || rightPoint == null)
		{
			return;
		}
		float distToLeft = Vector3.Distance(base.transform.position, leftPoint.position);
		float distToRight = Vector3.Distance(base.transform.position, rightPoint.position);
		if (distToLeft <= hitThreshold)
		{
			if (!lastHitWasLeft)
			{
				lastHitWasLeft = true;
				lastHitWasRight = false;
				AddProgress();
			}
		}
		else if (distToRight <= hitThreshold && !lastHitWasRight)
		{
			lastHitWasRight = true;
			lastHitWasLeft = false;
			AddProgress();
		}
	}

	private void AddProgress()
	{
		currentHits++;
		if (lastHitWasLeft)
		{
			if (toggleObjectA != null)
			{
				toggleObjectA.SetActive(true);
			}
			if (toggleObjectB != null)
			{
				toggleObjectB.SetActive(false);
			}
		}
		else if (lastHitWasRight)
		{
			if (toggleObjectA != null)
			{
				toggleObjectA.SetActive(false);
			}
			if (toggleObjectB != null)
			{
				toggleObjectB.SetActive(true);
			}
		}
		onHitBound?.Invoke();
		UpdateProgressBar();
		if (currentHits >= requiredHits)
		{
			Collider col = GetComponent<Collider>();
			if (col != null)
			{
				col.enabled = false;
			}
			onCompleted?.Invoke();
		}
	}

	private void UpdateProgressBar()
	{
		if (progressBarTransform != null)
		{
			float percent = Mathf.Clamp01((float)currentHits / (float)requiredHits);
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

	private void OnDrawGizmos()
	{
		if (leftPoint != null)
		{
			Gizmos.color = Color.blue;
			Gizmos.DrawWireSphere(leftPoint.position, hitThreshold);
		}
		if (rightPoint != null)
		{
			Gizmos.color = Color.red;
			Gizmos.DrawWireSphere(rightPoint.position, hitThreshold);
		}
	}
}
