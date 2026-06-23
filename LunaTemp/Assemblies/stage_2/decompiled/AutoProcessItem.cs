using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class AutoProcessItem : MonoBehaviour
{
	[Header("Thiết lập thời gian")]
	[Tooltip("Thời gian chờ xử lý xong (Giây)")]
	public float processTime = 3f;

	[Header("Công cụ tương ứng (Ví dụ: Máy xay, Dao tự động)")]
	[Tooltip("Kéo công cụ (Dao 3, Máy xay...) vào đây để nó tự hiện lên khi bắt đầu làm")]
	public GameObject toolToActivate;

	[Header("Events")]
	[Tooltip("Sự kiện gọi ngay khi bắt đầu (Thường để chạy Anim, đổi trạng thái...)")]
	public UnityEvent onProcessStarted;

	[Tooltip("Sự kiện gọi khi xử lý XONG (Tắt Dao 3, Bật món mới...)")]
	public UnityEvent onProcessCompleted;

	private Coroutine processRoutine;

	public void StartProcessing()
	{
		if (processRoutine != null)
		{
			StopCoroutine(processRoutine);
		}
		processRoutine = StartCoroutine(ProcessRoutine());
	}

	private IEnumerator ProcessRoutine()
	{
		if (toolToActivate != null)
		{
			toolToActivate.SetActive(true);
		}
		onProcessStarted?.Invoke();
		yield return new WaitForSeconds(processTime);
		if (toolToActivate != null)
		{
			toolToActivate.SetActive(false);
		}
		onProcessCompleted?.Invoke();
	}
}
