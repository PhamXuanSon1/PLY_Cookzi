using UnityEngine;
using Luna.Unity;

public class GameManager : MonoBehaviour
{
    public FxType fxStartVoice = FxType.StartVoice;
    public static GameManager Instance;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }
    void Start()
    {
        Ply_SoundManager.Ins.PlayFx(fxStartVoice);
    }

    public void GotoStore()
    {
        LifeCycle.GameEnded();

        Playable.InstallFullGame();
    }

    [Header("Game State")]
    public UnityEngine.Events.UnityEvent onLoseGame;
    [HideInInspector] public bool isGameEnded = false;

    // Hàm này dùng để gọi từ Unity Event (ví dụ OnReturn của ItemController)
    public void LoseGame()
    {
        isGameEnded = true;
        
        // Kích hoạt các hàm (Bật UI Thua, Phát âm thanh...) mà bạn kéo thả trên Inspector
        onLoseGame?.Invoke();
    }
}
