using System.Collections;
using UnityEngine;

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

	public void PlaySound()
	{
		if (soundToPlay != 0)
		{
			if (playCoroutine != null)
			{
				StopCoroutine(playCoroutine);
			}
			playCoroutine = StartCoroutine(PlayRoutine());
		}
	}

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
			if (Ply_Singleton<Ply_SoundManager>.Ins != null)
			{
				Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(soundToPlay);
			}
			if (i < repeatCount - 1)
			{
				yield return new WaitForSeconds(delayBetweenPlays);
			}
		}
	}
}
