using UnityEngine;

/// <summary>
/// Gắn lên Drop Target (Ví dụ: Thớt, Nồi, Đĩa...) để giới hạn chỉ nhận 1 item tại 1 thời điểm.
/// Khi đã có đồ trên thớt, các item khác sẽ không thể thả vào được nữa.
/// </summary>
public class DropTargetSlot : MonoBehaviour
{
    [HideInInspector]
    public bool isOccupied = false;

    [HideInInspector]
    public GameObject currentItem = null; // Lưu món ăn hiện tại trên thớt

    /// <summary>
    /// Gắn món ăn vào thớt
    /// </summary>
    public void SetCurrentItem(GameObject item)
    {
        currentItem = item;
        isOccupied = (item != null);
    }

    /// <summary>
    /// Xóa món ăn khỏi thớt (Khi bị lấy đi)
    /// </summary>
    public void ClearItem()
    {
        currentItem = null;
        isOccupied = false;
    }

    /// <summary>
    /// Hàm này được InputManager tự động gọi khi người chơi thả Công Cụ (Dao) vào thớt.
    /// Nó sẽ tự tìm xem món ăn trên thớt xài loại chế biến nào (Click hay Tự động).
    /// </summary>
    public void ApplyToolToCurrentItem()
    {
        if (currentItem == null) return;

        // 1. Nếu là món ăn kiểu Thái (Click)
        CuttingSetup cuttingSetup = currentItem.GetComponent<CuttingSetup>();
        if (cuttingSetup != null)
        {
            cuttingSetup.ApplySetupToKnife();
            return;
        }

        // 2. Nếu là món ăn kiểu Tự Động (Thời gian)
        AutoProcessItem autoProcess = currentItem.GetComponent<AutoProcessItem>();
        if (autoProcess != null)
        {
            autoProcess.StartProcessing();
            return;
        }
    }

    // Giữ lại 2 hàm cũ để không bị lỗi file cũ (nếu có dùng ở Event)
    public void Occupy() { isOccupied = true; }
    public void Release() { isOccupied = false; currentItem = null; }
}
