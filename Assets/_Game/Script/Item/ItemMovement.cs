using UnityEngine;
using DG.Tweening;

public class ItemMovement : MonoBehaviour
{
    private Vector3 SpawnPos;
    private bool isReturning = false;

    private void Start()
    {
        SpawnPos = transform.position;
    }

    public void UpdateSpawnPos()
    {
        // Chỉ lưu lại vị trí mới nếu vật đang đứng im, không lưu khi đang trên đường bay về (tránh lỗi bấm liên tục)
        if (!isReturning)
        {
            SpawnPos = transform.position;
        }
    }

    public void ReturnToSpawn()
    {
        isReturning = true;
        transform.DOKill(); // Dừng tween cũ nếu có để tránh lỗi spam click
        transform.DOMove(SpawnPos, 0.25f).SetEase(Ease.OutQuad).OnComplete(() =>
        {
            isReturning = false;
            ItemGraphic itemGraphic = GetComponent<ItemGraphic>();
            if (itemGraphic != null)
            {
                itemGraphic.ResetSortingLayer();
            }
        });
    }
}
