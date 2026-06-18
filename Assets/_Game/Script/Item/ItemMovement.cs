using UnityEngine;
using DG.Tweening;

public class ItemMovement : MonoBehaviour
{
    private Vector3 SpawnPos;

    private void Start()
    {
        SpawnPos = transform.position;
    }

    public void ReturnToSpawn()
    {
        if (SpawnPos != null)
        {
            transform.DOKill(); // Dừng tween cũ nếu có để tránh lỗi spam click
            transform.DOMove(SpawnPos, 0.25f).SetEase(Ease.OutQuad).OnComplete(() =>
            {
                ItemGraphic itemGraphic = GetComponent<ItemGraphic>();
                if (itemGraphic != null)
                {
                    itemGraphic.ResetSortingLayer();
                }
            });
        }
    }
}
