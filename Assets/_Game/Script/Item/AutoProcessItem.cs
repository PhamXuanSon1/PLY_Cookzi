using UnityEngine;
using UnityEngine.Events;
using System.Collections;

/// <summary>
/// Gắn script này lên Món Đặc Biệt (Ví dụ món cần nấu, xay, gọt tự động theo thời gian).
/// Khi người chơi thả Dao 1 vào thớt, nó sẽ tự động chạy tiến trình này.
/// </summary>
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

    /// <summary>
    /// Hàm này được Thớt tự động gọi khi người chơi thả Dao 1 vào thớt.
    /// </summary>
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
        // 1. Bật công cụ lên (Ví dụ: bật Dao 3)
        if (toolToActivate != null)
        {
            toolToActivate.SetActive(true);
        }

        // 2. Gọi event bắt đầu
        onProcessStarted?.Invoke();

        // 3. Đợi một khoảng thời gian
        yield return new WaitForSeconds(processTime);

        // 4. Tắt công cụ đi
        if (toolToActivate != null)
        {
            toolToActivate.SetActive(false);
        }

        // 5. Gọi event hoàn thành
        onProcessCompleted?.Invoke();
    }
}
