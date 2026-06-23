using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class HandHintManager : MonoBehaviour
{
    public List<ItemController> hintItems = new List<ItemController>();

    public static HandHintManager Instance;

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
                
                // Trường hợp 1: Item chưa bị kéo đi (Collider vẫn đang bật)
                if (col != null && col.enabled)
                {
                    if (hintItems[i].itemType == ItemType.DragAndDrop && hintItems[i].dropTarget != null)
                    {
                        DropTargetSlot slot = hintItems[i].dropTarget.GetComponent<DropTargetSlot>();
                        
                        // Nếu thớt ĐANG BỊ CHIẾM BỞI MỘT MÓN KHÁC
                        if (slot != null && slot.isOccupied && slot.currentItem != null && slot.currentItem != hintItems[i].gameObject)
                        {
                            // ĐẶC CÁCH: Nếu vật phẩm đang xét là Công Cụ (Dao) thì ĐƯỢC PHÉP trỏ vào thớt đang bận!
                            if (hintItems[i].isTool)
                            {
                                return hintItems[i];
                            }

                            CuttingSetup cuttingSetup = slot.currentItem.GetComponent<CuttingSetup>();
                            if (cuttingSetup != null && cuttingSetup.knifeProcessor != null && cuttingSetup.knifeProcessor.gameObject.activeInHierarchy)
                            {
                                ItemController knifeCtrl = cuttingSetup.knifeProcessor.GetComponent<ItemController>();
                                if (knifeCtrl != null && knifeCtrl.GetComponent<Collider>() != null && knifeCtrl.GetComponent<Collider>().enabled)
                                    return knifeCtrl;
                            }
                            continue; // Bỏ qua món này, chờ thớt rảnh
                        }
                    }
                    return hintItems[i]; // Nếu thớt rảnh, trả về món này
                }
                else
                {
                    // Trường hợp 2: Item đã bị tắt Collider (Thường là đã kéo lên thớt rồi)
                    // Kiểm tra xem nó có đang nằm chình ình trên thớt chờ cắt không?
                    if (hintItems[i].itemType == ItemType.DragAndDrop && hintItems[i].dropTarget != null)
                    {
                        DropTargetSlot slot = hintItems[i].dropTarget.GetComponent<DropTargetSlot>();
                        if (slot != null && slot.isOccupied && slot.currentItem == hintItems[i].gameObject)
                        {
                            // Nó đang nằm trên thớt! Ưu tiên chỉ tay vào con Dao của nó!
                            CuttingSetup cuttingSetup = slot.currentItem.GetComponent<CuttingSetup>();
                            if (cuttingSetup != null && cuttingSetup.knifeProcessor != null && cuttingSetup.knifeProcessor.gameObject.activeInHierarchy)
                            {
                                ItemController knifeCtrl = cuttingSetup.knifeProcessor.GetComponent<ItemController>();
                                if (knifeCtrl != null && knifeCtrl.GetComponent<Collider>() != null && knifeCtrl.GetComponent<Collider>().enabled)
                                {
                                    return knifeCtrl; // Trả về con dao ngay lập tức!
                                }
                            }
                        }
                    }
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
            // 1. Nếu là cái Kẹp (TongItem)
            if (currentItem is TongItem tongItem)
            {
                Debug.Log("[HandHint] Enter TongItem hint logic! currentItem: " + tongItem.name);
                handHintObject.transform.position = currentItem.transform.position;
                Transform target = tongItem.GetHintTarget();
                
                Debug.Log("[HandHint] Target from GetHintTarget: " + (target != null ? target.name : "NULL"));
                Debug.Log("[HandHint] Tong dropTarget: " + (tongItem.dropTarget != null ? tongItem.dropTarget.name : "NULL"));

                if (target != null)
                {
                    // Nếu mục tiêu hiện tại KHÁC cái rổ (tức là Kẹp đang trống, mục tiêu là đồ ăn)
                    if (target != tongItem.dropTarget)
                    {
                        Transform finalDropTarget = tongItem.dropTarget;

                        // Tìm drop target của đồ ăn (Nhộng)
                        ItemController foodItem = target.GetComponent<ItemController>();
                        if (foodItem != null && foodItem.dropTarget != null)
                        {
                            finalDropTarget = foodItem.dropTarget;
                        }

                        // Kiểm tra nếu finalDropTarget trùng với target thì mượn dropTarget của Tong
                        if (finalDropTarget == target) 
                        {
                            finalDropTarget = tongItem.dropTarget;
                        }

                        if (finalDropTarget != null && finalDropTarget != target)
                        {
                            // Tạo chuỗi hoạt ảnh bay 3 điểm: Kẹp -> Đồ ăn -> Rổ
                            Sequence seq = DOTween.Sequence();
                            seq.Append(handHintObject.transform.DOMove(target.position, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine));
                            seq.Append(handHintObject.transform.DOMove(finalDropTarget.position, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine));
                            seq.SetLoops(-1, LoopType.Restart);
                            currentDragTween = seq;
                        }
                        else
                        {
                            // Fallback: Nếu không tìm thấy target cuối, chỉ bay đến đồ ăn
                            currentDragTween = handHintObject.transform.DOMove(target.position, dragAnimDuration)
                                .SetEase(Ease.InOutSine)
                                .SetLoops(-1, LoopType.Restart);
                        }
                    }
                    else // Nếu mục tiêu LÀ cái rổ (Kẹp đang ngậm đồ ăn)
                    {
                        currentDragTween = handHintObject.transform.DOMove(target.position, dragAnimDuration)
                            .SetEase(Ease.InOutSine)
                            .SetLoops(-1, LoopType.Restart);
                    }
                }
                return;
            }

            // 2. Nếu là vật phẩm chà xát qua lại giữa 2 điểm
            DragBetweenBoundsToProcess dragBounds = currentItem.GetComponent<DragBetweenBoundsToProcess>();
            if (dragBounds != null && dragBounds.leftPoint != null && dragBounds.rightPoint != null)
            {
                handHintObject.transform.position = dragBounds.leftPoint.position;
                // Chà qua chà lại (Yoyo)
                currentDragTween = handHintObject.transform.DOMove(dragBounds.rightPoint.position, dragAnimDuration * 0.5f)
                    .SetEase(Ease.InOutSine)
                    .SetLoops(-1, LoopType.Yoyo);
                return;
            }

            // 3. Nếu là vật phẩm chà xát tại chỗ (SwipeInPlace)
            if (currentItem.itemType == ItemType.SwipeInPlace)
            {
                handHintObject.transform.position = currentItem.transform.position + Vector3.left * 0.5f;
                currentDragTween = handHintObject.transform.DOMove(currentItem.transform.position + Vector3.right * 0.5f, dragAnimDuration * 0.5f)
                    .SetEase(Ease.InOutSine)
                    .SetLoops(-1, LoopType.Yoyo);
                return;
            }

            // 4. Nếu là vật phẩm Spawner (Tạo ra đồ vật để kéo)
            ItemSpawner spawner = currentItem.GetComponent<ItemSpawner>();
            if (spawner != null && spawner.dropTargetForSpawnedItem != null)
            {
                handHintObject.transform.position = currentItem.transform.position;
                currentDragTween = handHintObject.transform.DOMove(spawner.dropTargetForSpawnedItem.position, dragAnimDuration)
                    .SetEase(Ease.InOutSine)
                    .SetLoops(-1, LoopType.Restart);
                return;
            }

            // 5. Nếu là vật phẩm Click bình thường
            if (currentItem.itemType == ItemType.ClickOnly)
            {
                handHintObject.transform.position = currentItem.transform.position;
                if (handAnimator != null)
                {
                    handAnimator.SetTrigger("Click");
                }
            }
            // 6. Nếu là vật phẩm Kéo Thả bình thường
            else if (currentItem.itemType == ItemType.DragAndDrop)
            {
                handHintObject.transform.position = currentItem.transform.position;
                Vector3 targetPos = currentItem.dropTarget != null ? currentItem.dropTarget.position : currentItem.transform.position + Vector3.up * 2f;

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
