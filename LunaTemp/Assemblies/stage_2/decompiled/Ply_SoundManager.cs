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
		case FxType.PickableItemPickSound:
			return fxAudio.PickableItemPickSound;
		case FxType.PickableItemDropSound:
			return fxAudio.PickableItemDropSound;
		case FxType.WaterBottle:
			return fxAudio.WaterBottle;
		case FxType.WaterDrop:
			return fxAudio.WaterDrop;
		case FxType.GasClick:
			return fxAudio.GasClick;
		case FxType.Heart:
			return fxAudio.Heart;
		case FxType.Boil:
			return fxAudio.Boil;
		case FxType.Put2:
			return fxAudio.Put2;
		case FxType.Knife:
			return fxAudio.Knife;
		case FxType.Cutting:
			return fxAudio.Cutting;
		case FxType.KnifeWing:
			return fxAudio.KnifeWing;
		case FxType.SaltDrop:
			return fxAudio.SaltDrop;
		case FxType.Cookin_Pan_Fryin_003_01:
			return fxAudio.Cookin_Pan_Fryin_003_01;
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
