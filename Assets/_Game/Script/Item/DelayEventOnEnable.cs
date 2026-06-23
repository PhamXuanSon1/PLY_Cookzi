using UnityEngine;
using UnityEngine.Events;
using System.Collections;

public class DelayEventOnEnable : MonoBehaviour
{
    [Tooltip("Thời gian chờ (giây) tính từ lúc Object này được bật lên (SetActive(true))")]
    public float delayTime = 1.0f;

    [Tooltip("Sự kiện sẽ được gọi sau khi hết thời gian chờ")]
    public UnityEvent onDelayFinished;

    private void OnEnable()
    {
        // Mỗi khi object này được bật (SetActive(true)), Coroutine này sẽ chạy
        StartCoroutine(WaitAndFireEvent());
    }

    private void OnDisable()
    {
        // Nếu object bị tắt trước khi đếm xong, ta nên dừng bộ đếm lại để tránh lỗi kích hoạt sai
        StopAllCoroutines();
    }

    private IEnumerator WaitAndFireEvent()
    {
        // Chờ delayTime giây
        yield return new WaitForSeconds(delayTime);

        // Gọi sự kiện
        onDelayFinished?.Invoke();
    }
}
