using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class DelayEventOnEnable : MonoBehaviour
{
	[Tooltip("Thời gian chờ (giây) tính từ lúc Object này được bật lên (SetActive(true))")]
	public float delayTime = 1f;

	[Tooltip("Sự kiện sẽ được gọi sau khi hết thời gian chờ")]
	public UnityEvent onDelayFinished;

	private void OnEnable()
	{
		StartCoroutine(WaitAndFireEvent());
	}

	private void OnDisable()
	{
		StopAllCoroutines();
	}

	private IEnumerator WaitAndFireEvent()
	{
		yield return new WaitForSeconds(delayTime);
		onDelayFinished?.Invoke();
	}
}
