using System.Collections.Generic;
using UnityEngine;

public class InputManager : MonoBehaviour
{
    public Camera mainCamera;
    public LayerMask itemLayer;
    [Tooltip("Layer dành cho các Object mà khi click vào sẽ bay ra Store")]
    public LayerMask installLayer;
    public float maxDistance = 100f;


    public static InputManager Instance;

    private Transform draggedObject;
    private ItemType draggedItemType;
    private Vector3 offset;
    private float dragDepth;
    private float blockInputUntilTime = 0f;
    private Vector3 mouseDownPos;
    private const float clickDragThreshold = 10f;

    public void BlockInputFor(float duration)
    {
        float targetTime = Time.time + duration;
        if (targetTime > blockInputUntilTime)
        {
            blockInputUntilTime = targetTime;
        }
    }


    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }

        if (mainCamera == null)
        {
            mainCamera = Camera.main;
        }
    }


    [Header("Store Settings")]
    [Tooltip("Số lượng Item thả trúng đích để kích hoạt tính năng Click bất kỳ đâu cũng đi Store")]
    [UnityEngine.Serialization.FormerlySerializedAs("curtainsToGotoStore")]
    public int itemsToGotoStore = 7;

    private void Update()
    {
        // Khi hệ thống đang bị block (vd: đang chạy animation hoàn thành)
        if (Time.time < blockInputUntilTime)
        {
            // Vẫn cho phép nhả chuột (để thả kẹp ra bay về vị trí cũ) tránh lỗi kẹp đứng im trên không
            if (Input.GetMouseButtonUp(0))
            {
                MouseUp();
            }
            return;
        }

        if (Input.GetMouseButton(0) || Input.GetMouseButtonDown(0))
        {
            if (HandHintManager.Instance != null)
            {
                HandHintManager.Instance.HideAndResetTimer();
            }
        }

        if (Input.GetMouseButtonDown(0))
        {
            // Kiểm tra xem game đã kết thúc (do gọi LoseGame) chưa, nếu rồi thì click đâu cũng ra store
            if (GameManager.Instance != null && GameManager.Instance.isGameEnded)
            {
                GameManager.Instance.GotoStore();
                return;
            }

            // Kiểm tra xem người dùng có click vào Layer Install hay không
            Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, installLayer))
            {
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.GotoStore();
                }
                return; // Kết thúc thao tác
            }

            // Nếu đã thả đủ số lượng Item, bất kỳ cú click nào cũng đi đến Store
            if (ItemManager.Instance != null && ItemManager.Instance.totalItemsDropped >= itemsToGotoStore)
            {
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.GotoStore();
                }
                return; // Kết thúc không cho tương tác kéo thả nữa
            }

            MouseDown();
        }

        if (Input.GetMouseButton(0))
            MouseDrag();

        if (Input.GetMouseButtonUp(0))
            MouseUp();
    }

    private void MouseDown()
    {
        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);

        if (Physics.Raycast(ray, out RaycastHit hit, maxDistance, itemLayer))
        {
            mouseDownPos = Input.mousePosition;

            ItemController itemController = hit.transform.GetComponent<ItemController>();
            if (itemController != null)
            {
                if (itemController.interactSound != FxType.None && Ply_SoundManager.Ins != null)
                {
                    Ply_SoundManager.Ins.PlayFx(itemController.interactSound);
                }

                if (itemController.itemType == ItemType.Pickable)
                {
                    return; // Ngăn chặn việc click/kéo thả trực tiếp bằng chuột
                }
                else if (itemController.itemType == ItemType.ClickOnly)
                {
                    itemController.onClick?.Invoke();
                    // Logic cho ClickOnly
                    itemController.PlayDropAnimations();
                    return;
                }
                else
                {
                    itemController.onDragStart?.Invoke();
                }
            }

            draggedObject = hit.transform;
            draggedItemType = itemController != null ? itemController.itemType : ItemType.DragAndDrop;
            
            ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
            if (itemGraphic != null)
            {
                bool shouldIncrease = true;
                if (itemController != null)
                {
                    if (itemController.itemType == ItemType.SwipeInPlace || !itemController.increaseSortingLayerOnDrag)
                    {
                        shouldIncrease = false;
                    }
                }

                if (shouldIncrease)
                {
                    itemGraphic.SetSortingLayerToTop();
                }
            }

            ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
            if (itemMovement != null)
            {
                itemMovement.UpdateSpawnPos();
            }

            dragDepth = mainCamera.WorldToScreenPoint(draggedObject.position).z;

            Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
            offset = draggedObject.position - mouseWorldPos;
        }
    }

    [Header("Drag Settings")]
    [Tooltip("Số lượng layer cộng thêm khi nhấc Item lên (để nó đè lên UI/đồ vật khác)")]
    public int dragSortingOffset = 100;

    [Header("Drag Bounds Settings")]
    [Tooltip("Bật/Tắt tính năng giới hạn di chuyển")]
    public bool useDragBounds = true;
    [Tooltip("Khung giới hạn kéo thả (Kéo thả 1 BoxCollider vào đây, hoặc để trống nếu không cần giới hạn)")]
    public BoxCollider dragBounds;

    private void MouseDrag()
    {
        if (draggedObject != null)
        {
            ItemController itemController = draggedObject.GetComponent<ItemController>();
            if (itemController != null && itemController.itemType == ItemType.SwipeInPlace)
            {
                // Bỏ qua bước di chuyển vị trí, giữ nguyên đồ vật tại chỗ
                return;
            }

            Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
            Vector3 targetPos = mouseWorldPos + offset;

            // Xác định xem dùng giới hạn riêng của vật phẩm hay giới hạn chung
            BoxCollider currentBounds = null;
            if (itemController != null && itemController.customDragBounds != null)
            {
                currentBounds = itemController.customDragBounds;
            }
            else if (useDragBounds && dragBounds != null)
            {
                currentBounds = dragBounds;
            }

            // Nếu có cài đặt khung giới hạn, ép vị trí Item phải nằm trong khung đó
            if (currentBounds != null)
            {
                Bounds b = currentBounds.bounds;
                targetPos.x = Mathf.Clamp(targetPos.x, b.min.x, b.max.x);
                targetPos.y = Mathf.Clamp(targetPos.y, b.min.y, b.max.y);
            }

            draggedObject.position = targetPos;
        }
    }

    public void ForceStartDrag(Transform targetObj)
    {
        draggedObject = targetObj;
        draggedItemType = draggedObject.GetComponent<ItemController>()?.itemType ?? ItemType.DragAndDrop;
        mouseDownPos = Input.mousePosition;

        ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
        ItemController itemCtrl = draggedObject.GetComponent<ItemController>();

        if (itemCtrl != null && itemCtrl.interactSound != FxType.None && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(itemCtrl.interactSound);
        }

        if (itemGraphic != null)
        {
            bool shouldIncrease = true;
            if (itemCtrl != null)
            {
                if (itemCtrl.itemType == ItemType.SwipeInPlace || !itemCtrl.increaseSortingLayerOnDrag)
                {
                    shouldIncrease = false;
                }
            }

            if (shouldIncrease)
            {
                itemGraphic.SetSortingLayerToTop();
            }
        }

        ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
        if (itemMovement != null)
        {
            itemMovement.UpdateSpawnPos();
        }

        if (itemCtrl != null)
        {
            itemCtrl.onDragStart?.Invoke();
        }

        dragDepth = mainCamera.WorldToScreenPoint(draggedObject.position).z;
        Vector3 mouseWorldPos = mainCamera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, dragDepth));
        
        // Vì vật phẩm sinh ra ngay tại đầu chuột, nên offset = 0
        offset = Vector3.zero; 
    }

    public void ForceDrop()
    {
        MouseUp();
    }

    private void MouseUp()
    {
        if (draggedObject != null)
        {
            bool isClick = Vector3.Distance(Input.mousePosition, mouseDownPos) <= clickDragThreshold;

            ItemGraphic itemGraphic = draggedObject.GetComponent<ItemGraphic>();
            ItemMovement itemMovement = draggedObject.GetComponent<ItemMovement>();
            ItemController itemController = draggedObject.GetComponent<ItemController>();

            if (isClick && itemController != null)
            {
                itemController.onClick?.Invoke();
            }

            if (draggedItemType == ItemType.SwipeInPlace)
            {
                // Với dạng Swipe, kết thúc tại đây, không xét chuyện rớt hay nảy về
                draggedObject = null;
                return;
            }

            bool dropSuccess = false;

            if (itemController != null && itemController.dropTarget != null)
            {
                float distance = Vector3.Distance(draggedObject.position, itemController.dropTarget.position);
                if (distance <= itemController.dropDistanceThreshold)
                {
                    // Kiểm tra xem Item có đang bị khóa không
                    if (itemController.isLocked)
                    {
                        itemController.onInteractWhileLocked?.Invoke();
                        // Không xử lý thả thành công, để nó tự bay về
                    }
                    else
                    {
                        // Kiểm tra xem Drop Target có bị khóa không (chỉ nhận 1 item)
                        DropTargetSlot slot = itemController.dropTarget.GetComponent<DropTargetSlot>();
                        if (slot != null)
                        {
                            if (itemController.isTool)
                            {
                                // Dao chỉ được kéo vào khi thớt ĐÃ BỊ CHIẾM (Có đồ trên thớt)
                                if (slot.isOccupied)
                                {
                                    dropSuccess = true;
                                    slot.ApplyToolToCurrentItem(); // Tự động bắt nguyên liệu hoạt động
                                }
                            }
                            else
                            {
                                // Nguyên liệu chỉ được kéo vào khi thớt TRỐNG
                                if (!slot.isOccupied)
                                {
                                    dropSuccess = true;
                                    slot.SetCurrentItem(itemController.gameObject); // Tự động đăng ký nguyên liệu vào thớt
                                }
                            }
                        }
                        else
                        {
                            dropSuccess = true;
                        }
                    }
                }
            }

            if (dropSuccess)
            {
                if (itemGraphic != null) itemGraphic.ResetSortingLayer();
                itemController.PlayDropAnimations();
            }
            else
            {
                // Thả quá xa đích hoặc không set đích (như cái kẹp) thì bắt bay về chỗ cũ
                if (itemMovement != null)
                {
                    itemMovement.ReturnToSpawn();
                }
                else
                {
                    // Nếu không có script tự bay về thì phải tự reset layer ngay lập tức
                    if (itemGraphic != null) itemGraphic.ResetSortingLayer();
                }
                
                if (itemController != null)
                {
                    itemController.onReturn?.Invoke();
                }
            }


            draggedObject = null;
        }
    }
}
