using UnityEngine;

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
	public FxAudio fxAudio;

	public AudioSource bgm1;

	private AudioSource[] fx = new AudioSource[50];

	private bool isMute = false;

	public void PlayFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			int index = (int)fxType;
			if (fx[index] == null)
			{
				fx[index] = new GameObject("SoundFX_" + fxType).AddComponent<AudioSource>();
			}
			fx[index].clip = data.clip;
			fx[index].Play();
			for (int i = 1; i < data.repeatCount; i++)
			{
				fx[index].PlayOneShot(data.clip);
			}
		}
	}

	public void PlayLoopFx(FxType fxType)
	{
		if (isMute)
		{
			return;
		}
		SoundData data = GetSoundData(fxType);
		if (data != null && !(data.clip == null))
		{
			int index = (int)fxType;
			if (fx[index] == null)
			{
				fx[index] = new GameObject("SoundFX_Loop_" + fxType).AddComponent<AudioSource>();
			}
			fx[index].clip = data.clip;
			fx[index].loop = true;
			fx[index].Play();
		}
	}

	public void StopFx(FxType fxType)
	{
		if (fxType >= FxType.None && (int)fxType < fx.Length && fx[(int)fxType] != null)
		{
			fx[(int)fxType].Stop();
		}
	}

	public void PlayBGM1()
	{
		if (!isMute && bgm1 != null && !bgm1.isPlaying)
		{
			bgm1.Play();
		}
	}

	public void PlayBGM2()
	{
		PlayBGM1();
	}

	private SoundData GetSoundData(FxType type)
	{
		switch (type)
		{
		case FxType.None:
			return fxAudio.None;
		case FxType.Click:
			return fxAudio.ClickBox;
		case FxType.StartVoice:
			return fxAudio.StartVoice;
		case FxType.voice_lv52_bottle:
			return fxAudio.voice_lv52_bottle;
		case FxType.voice_lv52_fruit:
			return fxAudio.voice_lv52_fruit;
		case FxType.voice_lv52_icecup:
			return fxAudio.voice_lv52_icecup;
		case FxType.voice_lv52_icream:
			return fxAudio.voice_lv52_icream;
		case FxType.voice_lv52_ladle:
			return fxAudio.voice_lv52_ladle;
		case FxType.voice_lv52_milk:
			return fxAudio.voice_lv52_milk;
		case FxType.voice_lv52_shirt:
			return fxAudio.voice_lv52_shirt;
		case FxType.voice_lv52_tofu:
			return fxAudio.voice_lv52_tofu;
		case FxType.voice_lv52_water:
			return fxAudio.voice_lv52_water;
		case FxType.Correct:
			return fxAudio.Correct;
		case FxType.FridgeOpen:
			return fxAudio.FridgeOpen;
		case FxType.water:
			return fxAudio.water;
		case FxType.mouse:
			return fxAudio.mouse;
		case FxType.wrong:
			return fxAudio.wrong;
		case FxType.haa:
			return fxAudio.haa;
		default:
			return null;
		}
	}

	public void MuteFx()
	{
		isMute = true;
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}

	public void Mute()
	{
		if (bgm1 != null)
		{
			bgm1.Stop();
		}
		for (int i = 0; i < fx.Length; i++)
		{
			if (fx[i] != null)
			{
				fx[i].Stop();
			}
		}
	}
}
