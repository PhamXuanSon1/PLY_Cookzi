using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ItemGraphic : MonoBehaviour
{
    public List<SpriteRenderer> spriteRenderers = new List<SpriteRenderer>();

    [Header("Drag Rotation Options")]
    [Tooltip("Bật tính năng xoay khi kéo")]
    public bool rotateOnDrag = false;
    [Tooltip("Góc sẽ xoay thêm (n độ) khi kéo. VD: X=0, Y=0, Z=0")]
    public Vector3 dragRotationAngle = new Vector3(0, 0, 0f);
    public float rotationDuration = 0.2f;

    private Quaternion originRotation;

    // lấy tất cả SpriteRenderer của nó và con của đối tượng này và lưu vào danh sách
    void Start()
    {
        originRotation = transform.rotation;
        GetSpriteRenderers();   
    }
    public void GetSpriteRenderers()
    {
        spriteRenderers.Clear();
        SpriteRenderer[] renderers = GetComponentsInChildren<SpriteRenderer>(true);
        spriteRenderers.AddRange(renderers);
    }

    // tăng tất cả order in layer của tất cả SpriteRenderer lên và xoay
    public void SetSortingLayerToTop()
    {
        int offset = InputManager.Instance != null ? InputManager.Instance.dragSortingOffset : 100;
        for(int i = 0; i < spriteRenderers.Count; i++)
        {
            SpriteRenderer sr = spriteRenderers[i];
            sr.sortingOrder += offset;
        }

        if (rotateOnDrag)
        {
            // Xoay từ góc gốc cộng thêm dragRotationAngle
            transform.DORotate((originRotation.eulerAngles + dragRotationAngle), rotationDuration).SetEase(Ease.OutQuad);
        }
    }

    // trả về order in layer ban đầu và trả về góc xoay cũ
    public void ResetSortingLayer(int customRestore = -1)
    {
        int offset = customRestore >= 0 ? customRestore : (InputManager.Instance != null ? InputManager.Instance.dragSortingOffset : 100);
        for (int i = 0; i < spriteRenderers.Count; i++)
        {
            SpriteRenderer sr = spriteRenderers[i];
            sr.sortingOrder -= offset;
        }

        if (rotateOnDrag)
        {
            // Trả về góc quay ban đầu
            transform.DORotate(originRotation.eulerAngles, rotationDuration).SetEase(Ease.OutQuad);
        }
    }

    // Gán cứng order in layer về một con số chính xác
    public void SetSortingLayerExact(int exactOrder)
    {
        for (int i = 0; i < spriteRenderers.Count; i++)
        {
            spriteRenderers[i].sortingOrder = exactOrder;
        }

        if (rotateOnDrag)
        {
            // Trả về góc quay ban đầu
            transform.DORotate(originRotation.eulerAngles, rotationDuration).SetEase(Ease.OutQuad);
        }
    }

    /// <summary>
    /// Trả tất cả các ảnh về trạng thái không dùng Mask (None).
    /// Rất hữu ích khi kéo nguyên liệu đã thái ra khỏi thớt để nó không bị tàng hình.
    /// </summary>
    public void ResetMaskInteraction()
    {
        for (int i = 0; i < spriteRenderers.Count; i++)
        {
            if (spriteRenderers[i] != null)
            {
                spriteRenderers[i].maskInteraction = SpriteMaskInteraction.None;
            }
        }
    }
}
