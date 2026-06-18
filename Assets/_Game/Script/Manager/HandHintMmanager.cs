using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class HandHintMmanager : MonoBehaviour
{
    public List<ItemController> hintItems = new List<ItemController>();

    public static HandHintMmanager Instance;

    [Header("Hand Hint Settings")]
    public GameObject handHintObject;
    public Animator handAnimator;
    public float idleTimeToHint = 5f;
    public float dragAnimDuration = 1.5f;

    [Header("Fallback Hint Settings")]
    [Tooltip("Vị trí bắt đầu của Hint khi danh sách hintItems đã hoàn thành hết")]
    public Transform startHintPos;
    [Tooltip("Vị trí kết thúc của Hint khi danh sách hintItems đã hoàn thành hết")]
    public Transform endHintPos;

    private float idleTimer = 0f;
    private bool isWaitingForAnim = false;
    private Tween currentDragTween;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }

    private void Start()
    {
        // Khi mới vào game, bật hand tutorial luôn lập tức
        ShowHandHintForCurrentItem();
    }

    private void Update()
    {
        // Không đếm thời gian nếu đang chờ anim chạy xong
        if (isWaitingForAnim)
            return;

        bool isFallbackMode = GetNextActiveItem() == null;

        if (isFallbackMode)
        {
            // Nếu đã hết item (Fallback Mode), luôn luôn hiển thị bàn tay không cần đợi
            if (!handHintObject.activeInHierarchy)
            {
                ShowHandHintForCurrentItem();
            }
        }
        else
        {
            // Nếu đang trong game bình thường, đợi đủ idleTimer mới hiện
            idleTimer += Time.deltaTime;

            if (idleTimer >= idleTimeToHint && !handHintObject.activeInHierarchy)
            {
                ShowHandHintForCurrentItem();
            }
        }
    }

    public void HideAndResetTimer()
    {
        idleTimer = 0f;
        HideHandHint();
    }

    private ItemController GetNextActiveItem()
    {
        for (int i = 0; i < hintItems.Count; i++)
        {
            if (hintItems[i] != null && hintItems[i].gameObject.activeInHierarchy)
            {
                Collider col = hintItems[i].GetComponent<Collider>();
                // Nếu Item chưa bị chơi (Collider vẫn đang bật) thì đây là item cần hint
                if (col != null && col.enabled)
                {
                    return hintItems[i];
                }
            }
        }
        return null;
    }

    private void ShowHandHintForCurrentItem()
    {
        handHintObject.SetActive(true);

        // Xóa các hiệu ứng kéo trước đó
        currentDragTween?.Kill();

        ItemController currentItem = GetNextActiveItem();

        if (currentItem != null)
        {
            if (currentItem.itemType == ItemType.ClickOnly)
            {
                // Click
                handHintObject.transform.position = currentItem.transform.position;
                if (handAnimator != null)
                {
                    handAnimator.SetTrigger("Click");
                }
            }
            else if (currentItem.itemType == ItemType.DragAndDrop)
            {
                // Đưa tay về vị trí Item
                handHintObject.transform.position = currentItem.transform.position;
                
                // Target
                Vector3 targetPos = currentItem.dropTarget != null ? currentItem.dropTarget.position : currentItem.transform.position + Vector3.up * 2f;

                // Kéo thả từ spawn đến target, lặp đi lặp lại
                currentDragTween = handHintObject.transform.DOMove(targetPos, dragAnimDuration)
                    .SetEase(Ease.InOutSine)
                    .SetLoops(-1, LoopType.Restart);
            }
        }
        else
        {
            // Fallback logic khi đã hết item
            if (startHintPos != null && endHintPos != null)
            {
                handHintObject.transform.position = startHintPos.position;
                currentDragTween = handHintObject.transform.DOMove(endHintPos.position, dragAnimDuration)
                    .SetEase(Ease.InOutSine)
                    .SetLoops(-1, LoopType.Restart);
            }
            else
            {
                handHintObject.SetActive(false); // Ẩn nếu chưa config fallback
            }
        }
    }

    public void HideHandHint()
    {
        if (handHintObject != null && handHintObject.activeInHierarchy)
        {
            handHintObject.SetActive(false);
            currentDragTween?.Kill();
        }
    }

    public void OnItemCompleted(ItemController item, float duration)
    {
        StartCoroutine(WaitAndAdvanceItem(duration));
    }

    private IEnumerator WaitAndAdvanceItem(float duration)
    {
        isWaitingForAnim = true;
        HideHandHint(); 
        
        // Đợi cho đến khi anim của Item chạy xong
        yield return new WaitForSeconds(duration);

        idleTimer = 0f; // Bắt đầu đếm lại 5s cho item mới (hoặc fallback)
        isWaitingForAnim = false;
    }
}
