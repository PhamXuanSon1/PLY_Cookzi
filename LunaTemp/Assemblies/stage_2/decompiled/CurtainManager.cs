using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class CurtainManager : MonoBehaviour
{
	public static CurtainManager Instance;

	[Header("List of Curtains (Bottom to Top)")]
	[Tooltip("Kéo thả 8 cái rèm vào đây theo thứ tự từ dưới cùng (index 0) lên trên cùng (index cuối)")]
	public List<SpriteRenderer> curtains = new List<SpriteRenderer>();

	private int currentTopIndex;

	[Header("Events")]
	public UnityEvent onCurtainRemoved;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
		currentTopIndex = curtains.Count - 1;
	}

	public Color GetTopCurtainColor()
	{
		if (currentTopIndex >= 0 && currentTopIndex < curtains.Count)
		{
			return curtains[currentTopIndex].color;
		}
		return Color.white;
	}

	public int GetRemovedCurtainCount()
	{
		return curtains.Count - 1 - currentTopIndex;
	}

	public void RemoveTopCurtain()
	{
		if (currentTopIndex >= 0)
		{
			curtains[currentTopIndex].gameObject.SetActive(false);
			currentTopIndex--;
			onCurtainRemoved?.Invoke();
		}
	}

	public void RemoveTopCurtainWithDelay(float delaySeconds)
	{
		StartCoroutine(RemoveCurtainCoroutine(delaySeconds));
	}

	private IEnumerator RemoveCurtainCoroutine(float delay)
	{
		yield return new WaitForSeconds(delay);
		RemoveTopCurtain();
	}
}
