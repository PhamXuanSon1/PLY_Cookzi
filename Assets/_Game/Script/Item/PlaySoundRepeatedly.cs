using UnityEngine;
using System.Collections;

public class PlaySoundRepeatedly : MonoBehaviour
{
    [Header("Sound Settings")]
    public FxType soundToPlay = FxType.None;
    
    [Tooltip("Số lần phát âm thanh liên tục")]
    public int repeatCount = 3;
    
    [Tooltip("Khoảng thời gian chờ (giây) giữa mỗi lần phát")]
    public float delayBetweenPlays = 0.3f;

    [Tooltip("Tự động phát ngay khi script này được bật (OnEnable)")]
    public bool playOnEnable = false;

    private Coroutine playCoroutine;

    private void OnEnable()
    {
        if (playOnEnable)
        {
            PlaySound();
        }
    }

    private void OnDisable()
    {
        StopSound();
    }

    /// <summary>
    /// Gọi hàm này từ UnityEvent (như onClick, onDrop, onAnimFinished...) để bắt đầu phát âm thanh
    /// </summary>
    public void PlaySound()
    {
        if (soundToPlay == FxType.None) return;

        if (playCoroutine != null)
        {
            StopCoroutine(playCoroutine);
        }
        playCoroutine = StartCoroutine(PlayRoutine());
    }

    /// <summary>
    /// Gọi hàm này để chủ động dừng việc phát âm thanh giữa chừng nếu cần
    /// </summary>
    public void StopSound()
    {
        if (playCoroutine != null)
        {
            StopCoroutine(playCoroutine);
            playCoroutine = null;
        }
    }

    private IEnumerator PlayRoutine()
    {
        for (int i = 0; i < repeatCount; i++)
        {
            if (Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayFx(soundToPlay);
            }
            
            // Đợi một khoảng thời gian trước khi phát lần tiếp theo (nếu chưa phải lần cuối)
            if (i < repeatCount - 1)
            {
                yield return new WaitForSeconds(delayBetweenPlays);
            }
        }
    }
}
