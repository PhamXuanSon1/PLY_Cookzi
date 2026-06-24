using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class UnlockCondition : MonoBehaviour
{
	[Tooltip("Số lượng nhiệm vụ/đồ vật cần hoàn thành trước khi mở khóa")]
	public int conditionsToMeet = 3;

	[Tooltip("Thời gian chờ (giây) trước khi thực sự mở khóa (tính từ lúc chơi xong món cuối cùng)")]
	public float delayBeforeUnlock = 0f;

	private int currentProgress = 0;

	private bool isUnlocked = false;

	[Header("Auto Unlock Setup")]
	[Tooltip("Danh sách các Collider sẽ tự động ĐƯỢC BẬT khi đã thu thập đủ số lượng")]
	public List<Collider> collidersToEnable = new List<Collider>();

	[Tooltip("Danh sách các GameObject sẽ tự động ĐƯỢC BẬT (SetActive) khi đủ số lượng")]
	public List<GameObject> objectsToEnable = new List<GameObject>();

	[Header("Extra Events")]
	[Tooltip("Sự kiện gọi thêm khi mở khóa thành công (nếu muốn gọi thêm âm thanh, hiệu ứng...)")]
	public UnityEvent onUnlocked;

	public void AddProgress()
	{
		if (isUnlocked)
		{
			return;
		}
		currentProgress++;
		if (currentProgress >= conditionsToMeet)
		{
			isUnlocked = true;
			if (delayBeforeUnlock > 0f)
			{
				StartCoroutine(WaitAndUnlock());
			}
			else
			{
				UnlockNow();
			}
		}
	}

	private IEnumerator WaitAndUnlock()
	{
		yield return new WaitForSeconds(delayBeforeUnlock);
		UnlockNow();
	}

	private void UnlockNow()
	{
		foreach (Collider col in collidersToEnable)
		{
			if (col != null)
			{
				col.enabled = true;
				if (col.gameObject.activeSelf)
				{
					col.gameObject.SetActive(false);
					col.gameObject.SetActive(true);
				}
			}
		}
		foreach (GameObject obj in objectsToEnable)
		{
			if (obj != null)
			{
				obj.SetActive(true);
			}
		}
		onUnlocked?.Invoke();
	}
}
