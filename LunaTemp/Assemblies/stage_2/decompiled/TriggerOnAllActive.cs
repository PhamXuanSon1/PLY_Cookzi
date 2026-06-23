using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerOnAllActive : MonoBehaviour
{
	[Header("Cấu hình nhiều nhóm theo dõi")]
	public List<ActiveEventGroup> eventGroups = new List<ActiveEventGroup>();

	private void Update()
	{
		foreach (ActiveEventGroup group in eventGroups)
		{
			if (!group.hasTriggered && !group.isWaiting && group.targetObjects != null && group.targetObjects.Count != 0 && CheckAllActive(group))
			{
				group.isWaiting = true;
				StartCoroutine(WaitAndFireEvent(group));
			}
		}
	}

	private bool CheckAllActive(ActiveEventGroup group)
	{
		foreach (GameObject obj in group.targetObjects)
		{
			if (obj == null || !obj.activeInHierarchy)
			{
				return false;
			}
		}
		return true;
	}

	private IEnumerator WaitAndFireEvent(ActiveEventGroup group)
	{
		yield return new WaitForSeconds(group.delayTime);
		if (group.cancelIfAnyDeactivatedDuringDelay && !CheckAllActive(group))
		{
			group.isWaiting = false;
			yield break;
		}
		group.hasTriggered = true;
		group.onAllActive?.Invoke();
	}

	public void ResetAllTriggers()
	{
		StopAllCoroutines();
		foreach (ActiveEventGroup group in eventGroups)
		{
			group.hasTriggered = false;
			group.isWaiting = false;
		}
	}
}
