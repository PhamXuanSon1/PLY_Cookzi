using System.Collections;
using System.Collections.Generic;
using UnityEngine;

#if UNITY_EDITOR
using UnityEditor;
#endif

public enum FxType
{
    None,
    Click,
    StartVoice,
    voice_lv52_bottle,
    voice_lv52_fruit,
    voice_lv52_icecup,
    voice_lv52_icream,
    voice_lv52_ladle,
    voice_lv52_milk,
    voice_lv52_shirt,
    voice_lv52_tofu,
    voice_lv52_water,
    Correct,
    FridgeOpen,
    water,
    mouse,
    wrong,
    haa

}

[System.Serializable]
public class SoundData
{
    public AudioClip clip;
    public int repeatCount = 1;
}

[System.Serializable]
public class FxAudio
{
    public SoundData None;
    public SoundData ClickBox;
    public SoundData StartVoice;
    public SoundData voice_lv52_bottle;
    public SoundData voice_lv52_fruit;  
    public SoundData voice_lv52_icecup;
    public SoundData voice_lv52_icream;
    public SoundData voice_lv52_ladle;
    public SoundData voice_lv52_milk;
    public SoundData voice_lv52_shirt;
    public SoundData voice_lv52_tofu;
    public SoundData voice_lv52_water;
    public SoundData Correct;
    public SoundData FridgeOpen;
    public SoundData water;
    public SoundData mouse;
    public SoundData wrong;
    public SoundData haa;
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    public FxAudio fxAudio;
    public AudioSource bgm1;
    // Tăng kích thước mảng lên 50 để tránh lỗi khi bạn thêm nhiều FxType mới
    private AudioSource[] fx = new AudioSource[50];

    bool isMute = false;

    public void PlayFx(FxType fxType)
    {
        if (!isMute)
        {
            SoundData data = GetSoundData(fxType);
            if (data == null || data.clip == null) return;

            int index = (int)fxType;
            if (fx[index] == null)
            {
                fx[index] = new GameObject("SoundFX_" + fxType).AddComponent<AudioSource>();
            }

            // Gán clip và dùng Play() để phát ngay lập tức (sẽ tự ngắt âm thanh cũ nếu đang phát dở và phát lại từ đầu)
            fx[index].clip = data.clip;
            fx[index].Play();

            // Tự động lặp theo số lần đã cấu hình trong Inspector (chạy đè thêm để tăng âm lượng nếu repeatCount > 1)
            for (int i = 1; i < data.repeatCount; i++)
            {
                fx[index].PlayOneShot(data.clip);
            }
        }
    }

    public void PlayLoopFx(FxType fxType)
    {
        if (isMute) return;
        SoundData data = GetSoundData(fxType);
        if (data == null || data.clip == null) return;

        int index = (int)fxType;
        if (fx[index] == null)
        {
            fx[index] = new GameObject("SoundFX_Loop_" + fxType).AddComponent<AudioSource>();
        }

        fx[index].clip = data.clip;
        fx[index].loop = true;
        fx[index].Play();
    }

    public void StopFx(FxType fxType)
    {
        int index = (int)fxType;
        if (index >= 0 && index < fx.Length && fx[index] != null)
        {
            fx[index].Stop();
        }
    }

    public void PlayBGM1()
    {
        if (isMute) return;
        if (bgm1 != null && !bgm1.isPlaying) bgm1.Play();
    }

    public void PlayBGM2()
    {
        PlayBGM1();
    }

    private SoundData GetSoundData(FxType type)
    {
        switch (type)
        {
            case FxType.None: return fxAudio.None;
            case FxType.Click: return fxAudio.ClickBox;
            case FxType.StartVoice: return fxAudio.StartVoice;
            case FxType.voice_lv52_bottle: return fxAudio.voice_lv52_bottle;
            case FxType.voice_lv52_fruit: return fxAudio.voice_lv52_fruit;
            case FxType.voice_lv52_icecup: return fxAudio.voice_lv52_icecup;
            case FxType.voice_lv52_icream: return fxAudio.voice_lv52_icream;
            case FxType.voice_lv52_ladle: return fxAudio.voice_lv52_ladle;
            case FxType.voice_lv52_milk: return fxAudio.voice_lv52_milk;
            case FxType.voice_lv52_shirt: return fxAudio.voice_lv52_shirt;
            case FxType.voice_lv52_tofu: return fxAudio.voice_lv52_tofu;
            case FxType.voice_lv52_water: return fxAudio.voice_lv52_water;
            case FxType.Correct: return fxAudio.Correct;
            case FxType.FridgeOpen: return fxAudio.FridgeOpen;
            case FxType.water: return fxAudio.water;
            case FxType.mouse: return fxAudio.mouse;
            case FxType.wrong: return fxAudio.wrong;
            case FxType.haa: return fxAudio.haa;
            default: return null;
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
        if (bgm1 != null) bgm1.Stop();
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
        }
    }
}

#if UNITY_EDITOR
[CustomPropertyDrawer(typeof(SoundData))]
public class SoundDataDrawer : PropertyDrawer
{
    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
    {
        EditorGUI.BeginProperty(position, label, property);

        // Vẽ Label của biến (ví dụ: ClickBox, Pepper...)
        position = EditorGUI.PrefixLabel(position, GUIUtility.GetControlID(FocusType.Passive), label);

        var indent = EditorGUI.indentLevel;
        EditorGUI.indentLevel = 0;

        // Tính toán độ rộng: Clip chiếm 70%, RepeatCount chiếm 25%, còn lại là khoảng cách
        float clipWidth = position.width * 0.7f;
        float countWidth = position.width * 0.25f;
        float spacing = position.width * 0.05f;

        Rect clipRect = new Rect(position.x, position.y, clipWidth, position.height);
        Rect countRect = new Rect(position.x + clipWidth + spacing, position.y, countWidth, position.height);

        // Vẽ các ô input mà không hiện thêm label phụ bên trong
        EditorGUI.PropertyField(clipRect, property.FindPropertyRelative("clip"), GUIContent.none);
        EditorGUI.PropertyField(countRect, property.FindPropertyRelative("repeatCount"), GUIContent.none);

        EditorGUI.indentLevel = indent;
        EditorGUI.EndProperty();
    }
}
#endif
