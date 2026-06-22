using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(ItemController))]
public class ClickToProcessItem : MonoBehaviour
{
    [Tooltip("Số lần click cần thiết để băm xong (vd: 20 nhát dao)")]
    public int requiredClicks = 20;

    [Tooltip("Sự kiện gọi mỗi khi click 1 cái (Gán Anim con dao chém xuống vào đây)")]
    public UnityEvent onSingleClick;

    [Tooltip("Sự kiện gọi khi băm đủ số lần")]
    public UnityEvent onCompleted;

    [Header("Sprite Mask Dịch Chuyển Dần (Tùy chọn)")]
    [Tooltip("Kéo Transform của Sprite Mask vào đây")]
    public Transform maskTransform;
    [Tooltip("Vị trí của Mask lúc chưa cắt gì (0%)")]
    public Vector3 maskStartPos;
    [Tooltip("Vị trí của Mask lúc cắt xong hoàn toàn (100%)")]
    public Vector3 maskEndPos;

    private int currentClicks = 0;
    private ItemController itemController;

    private void Awake()
    {
        itemController = GetComponent<ItemController>();
        if (itemController != null)
        {
            // Tự động gán sự kiện onClick của ItemController vào script này
            itemController.onClick.AddListener(ProcessClick);
        }

        if (maskTransform != null)
        {
            maskTransform.localPosition = maskStartPos;
        }
    }

    private void ProcessClick()
    {
        // CHỈ CHOP KHI DAO ĐANG Ở TRẠNG THÁI CLICK ONLY (Tức là đã kéo vào thớt)
        if (itemController != null && itemController.itemType != ItemType.ClickOnly) return;

        if (currentClicks >= requiredClicks) return;

        currentClicks++;
        onSingleClick?.Invoke();

        // Tịnh tiến Sprite Mask
        if (maskTransform != null)
        {
            float percent = (float)currentClicks / requiredClicks;
            maskTransform.localPosition = Vector3.Lerp(maskStartPos, maskEndPos, percent);
        }

        if (currentClicks >= requiredClicks)
        {
            onCompleted?.Invoke();
        }
    }

    /// <summary>
    /// Gọi hàm này để reset lại dao (vd: khi chuẩn bị băm quả ớt khác)
    /// </summary>
    public void ResetProcess()
    {
        currentClicks = 0;
        if (maskTransform != null)
        {
            maskTransform.localPosition = maskStartPos;
        }
    }

    // --- CÁC NÚT HỖ TRỢ TRONG EDITOR ---
    [ContextMenu("Save Current Mask Pos as START")]
    private void SaveStartPos() 
    { 
        if(maskTransform != null) maskStartPos = maskTransform.localPosition; 
    }
    
    [ContextMenu("Save Current Mask Pos as END")]
    private void SaveEndPos() 
    { 
        if(maskTransform != null) maskEndPos = maskTransform.localPosition; 
    }
}
