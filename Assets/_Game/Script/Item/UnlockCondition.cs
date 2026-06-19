using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;

public class UnlockCondition : MonoBehaviour
{
    [Tooltip("Số lượng nhiệm vụ/đồ vật cần hoàn thành trước khi mở khóa")]
    public int conditionsToMeet = 3;
    
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

    /// <summary>
    /// Gọi hàm này mỗi khi người chơi chơi xong 1 món đồ.
    /// </summary>
    public void AddProgress()
    {
        if (isUnlocked) return;

        currentProgress++;
        
        if (currentProgress >= conditionsToMeet)
        {
            isUnlocked = true;
            UnlockNow();
        }
    }

    private void UnlockNow()
    {
        // Bật các Collider đang bị tắt
        foreach (Collider col in collidersToEnable)
        {
            if (col != null) col.enabled = true;
        }

        // Bật các GameObject đang bị ẩn
        foreach (GameObject obj in objectsToEnable)
        {
            if (obj != null) obj.SetActive(true);
        }

        // Gọi các event tùy chọn
        onUnlocked?.Invoke();
    }
}
