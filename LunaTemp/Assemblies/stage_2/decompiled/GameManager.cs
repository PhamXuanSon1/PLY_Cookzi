using Luna.Unity;
using UnityEngine;
using UnityEngine.Events;

public class GameManager : MonoBehaviour
{
	public static GameManager Instance;

	[Header("UI Canvas")]
	public GameObject winCanvas;

	public GameObject loseCanvas;

	[Header("Timer Settings")]
	public float timeLimit = 60f;

	private bool isTimerRunning = false;

	[Header("Game State")]
	public UnityEvent onWinGame;

	public UnityEvent onLoseGame;

	[HideInInspector]
	public bool isGameEnded = false;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
	}

	private void Start()
	{
		isTimerRunning = true;
	}

	private void Update()
	{
		if (!isGameEnded && isTimerRunning)
		{
			timeLimit -= Time.deltaTime;
			if (timeLimit <= 0f)
			{
				timeLimit = 0f;
				LoseGame();
			}
		}
	}

	public void GotoStore()
	{
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}

	public void WinGame()
	{
		if (!isGameEnded)
		{
			isGameEnded = true;
			isTimerRunning = false;
			if (winCanvas != null)
			{
				winCanvas.SetActive(true);
			}
			onWinGame?.Invoke();
		}
	}

	public void LoseGame()
	{
		if (!isGameEnded)
		{
			isGameEnded = true;
			isTimerRunning = false;
			if (loseCanvas != null)
			{
				loseCanvas.SetActive(true);
			}
			onLoseGame?.Invoke();
		}
	}
}
