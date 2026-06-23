using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;
using System.Collections;

[System.Serializable]
public class ActiveEventGroup
{
    [Tooltip("Tên gợi nhớ cho nhóm này (không ảnh hưởng logic, chỉ để dễ nhìn)")]
    public string groupName = "Nhóm Event 1";

    [Tooltip("Danh sách các object cần phải được bật (active) ĐỒNG THỜI")]
    public List<GameObject> targetObjects = new List<GameObject>();

    [Tooltip("Thời gian chờ (giây) sau khi tất cả các object trên đã được bật")]
    public float delayTime = 1.0f;

    [Tooltip("Hủy sự kiện nếu trong lúc đang chờ có object bị tắt đi?")]
    public bool cancelIfAnyDeactivatedDuringDelay = false;

    [Tooltip("Sự kiện sẽ gọi ra của riêng nhóm này")]
    public UnityEvent onAllActive;

    // Biến nội bộ để theo dõi trạng thái của nhóm
    [HideInInspector] public bool isWaiting = false;
    [HideInInspector] public bool hasTriggered = false;
}

public class TriggerOnAllActive : MonoBehaviour
{
    [Header("Cấu hình nhiều nhóm theo dõi")]
    public List<ActiveEventGroup> eventGroups = new List<ActiveEventGroup>();

    private void Update()
    {
        // Duyệt qua từng nhóm để kiểm tra độc lập
        foreach (ActiveEventGroup group in eventGroups)
        {
            if (group.hasTriggered || group.isWaiting) continue;

            if (group.targetObjects == null || group.targetObjects.Count == 0) continue;

            if (CheckAllActive(group))
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
        
        if (group.cancelIfAnyDeactivatedDuringDelay)
        {
            if (!CheckAllActive(group))
            {
                group.isWaiting = false;
                yield break;
            }
        }

        group.hasTriggered = true;
        group.onAllActive?.Invoke();
    }

    /// <summary>
    /// Reset lại toàn bộ các nhóm để có thể kích hoạt lại từ đầu
    /// </summary>
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
