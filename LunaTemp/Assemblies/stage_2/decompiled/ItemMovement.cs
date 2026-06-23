using DG.Tweening;
using UnityEngine;

public class ItemMovement : MonoBehaviour
{
	private Vector3 SpawnPos;

	private bool isReturning = false;

	private void Start()
	{
		SpawnPos = base.transform.position;
	}

	public void UpdateSpawnPos()
	{
		if (!isReturning)
		{
			SpawnPos = base.transform.position;
		}
	}

	public void ReturnToSpawn()
	{
		isReturning = true;
		base.transform.DOKill();
		base.transform.DOMove(SpawnPos, 0.25f).SetEase(Ease.OutQuad).OnComplete(delegate
		{
			isReturning = false;
			ItemGraphic component = GetComponent<ItemGraphic>();
			if (component != null)
			{
				component.ResetSortingLayer();
			}
		});
	}

	public void SnapToSpawn()
	{
		base.transform.DOKill();
		isReturning = false;
		base.transform.position = SpawnPos;
	}
}
