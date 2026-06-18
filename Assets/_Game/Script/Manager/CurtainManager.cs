using UnityEngine;
using System.Collections.Generic;

public class CurtainManager : MonoBehaviour
{
    public static CurtainManager Instance;

    [Header("List of Curtains (Bottom to Top)")]
    [Tooltip("Kéo thả 8 cái rèm vào đây theo thứ tự từ dưới cùng (index 0) lên trên cùng (index cuối)")]
    public List<SpriteRenderer> curtains = new List<SpriteRenderer>();

    private int currentTopIndex;

    private void Awake()
    {
        if (Instance == null)
            Instance = this;

        // Rèm trên cùng bắt đầu là rèm cuối cùng trong danh sách
        currentTopIndex = curtains.Count - 1;
    }

    // Hàm lấy màu rèm hiện tại trên cùng
    public Color GetTopCurtainColor()
    {
        if (currentTopIndex >= 0 && currentTopIndex < curtains.Count)
        {
            return curtains[currentTopIndex].color;
        }
        return Color.white; // Màu mặc định nếu hết rèm
    }

    [Header("Events")]
    public UnityEngine.Events.UnityEvent onCurtainRemoved;

    // Lấy số lượng rèm đã bị gỡ
    public int GetRemovedCurtainCount()
    {
        return curtains.Count - 1 - currentTopIndex;
    }

    // Gọi hàm này để xóa rèm trên cùng
    public void RemoveTopCurtain()
    {
        if (currentTopIndex >= 0)
        {
            curtains[currentTopIndex].gameObject.SetActive(false); // Ẩn rèm
            currentTopIndex--; // Giảm đi 1 để rèm bên dưới thành rèm trên cùng 
            onCurtainRemoved?.Invoke();
        }
    }

    // Hàm mở rộng: Xóa rèm có delay thời gian (tính bằng giây)
    public void RemoveTopCurtainWithDelay(float delaySeconds)
    {
        StartCoroutine(RemoveCurtainCoroutine(delaySeconds));
    }
    private System.Collections.IEnumerator RemoveCurtainCoroutine(float delay)
    {
        yield return new WaitForSeconds(delay);
        RemoveTopCurtain();
    }
}
