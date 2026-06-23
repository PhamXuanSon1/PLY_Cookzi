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
        // Ply_SoundManager.Ins.PlayFx(fxStartVoice);
        isTimerRunning = true;
    }

    private void Update()
    {
        if (isGameEnded || !isTimerRunning) return;

        timeLimit -= Time.deltaTime;
        
        if (timeLimit <= 0f)
        {
            timeLimit = 0f;
            LoseGame();
        }
    }

    public void GotoStore()
    {
        LifeCycle.GameEnded();

        Playable.InstallFullGame();
    }

    [Header("UI Canvas")]
    public GameObject winCanvas;
    public GameObject loseCanvas;

    [Header("Timer Settings")]
    public float timeLimit = 60f;
    private bool isTimerRunning = false;

    [Header("Game State")]
    public UnityEngine.Events.UnityEvent onWinGame;
    public UnityEngine.Events.UnityEvent onLoseGame;
    [HideInInspector] public bool isGameEnded = false;

    public void WinGame()
    {
        if (isGameEnded) return;

        isGameEnded = true;
        isTimerRunning = false;

        if (winCanvas != null) winCanvas.SetActive(true);
        
        onWinGame?.Invoke();
    }

    public void LoseGame()
    {
        if (isGameEnded) return;

        isGameEnded = true;
        isTimerRunning = false;

        if (loseCanvas != null) loseCanvas.SetActive(true);
        
        onLoseGame?.Invoke();
    }
}
