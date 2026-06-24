using UnityEngine;

public class PlaySound : MonoBehaviour
{
	public FxType sound1;

	public FxType sound2;

	public FxType sound3;

	public void Sound1()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound1);
		}
	}

	public void Sound2()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound2);
		}
	}

	public void Sound3()
	{
		if (Ply_Singleton<Ply_SoundManager>.Ins != null)
		{
			Ply_Singleton<Ply_SoundManager>.Ins.PlayFx(sound3);
		}
	}
}
