using UnityEngine;
using System.Collections.Generic;
using DG.Tweening;

public class TongItem : ItemController
{
    [Header("--- Tong Settings ---")]
    [Tooltip("Điểm trên cái kẹp mà vật sẽ bay tới và dính vào")]
    public Transform holdPoint;
    
    [Space(10)]
    [Tooltip("Layer của những vật thể có thể dùng kẹp để gắp")]
    public LayerMask pickableLayer;
    
    [Tooltip("Layer của rổ/đích đến dành riêng cho cái kẹp")]
    public LayerMask basketLayer;

    [Space(10)]
    [Tooltip("Bán kính vùng quét (Raycast hình cầu) xung quanh Hold Point")]
    public float detectRadius = 0.5f;

    [Tooltip("Khoảng góc xoay Random (Z) khi vật bay vào rổ. X = Min, Y = Max")]
    public Vector2 randomRotateRange = new Vector2(180f, 240f);

    [Header("--- Tween Settings ---")]
    public float flyToTongDuration = 0.2f;
    public float flyToBasketDuration = 0.5f;
    
    [Tooltip("Độ cao của vòng cung khi vật nhảy vào rổ")]
    public float jumpPower = 1.5f;

    [Tooltip("Order in Layer tuyệt đối sẽ được gán cho vật sau khi rớt vào rổ")]
    public int finalSortingOrder = 61;

    [Header("--- Audio Settings ---")]
    public FxType pickSound = FxType.None;
    public FxType dropIntoBasketSound = FxType.None;

    [Header("--- Objective Settings ---")]
    [Tooltip("Danh sách đồ ăn cần gắp. Khi gắp ĐỦ đồ ăn trong list này vào rổ, cái Kẹp sẽ tự động chạy Anim List và OnAnimFinished!")]
    public List<GameObject> requiredPickables = new List<GameObject>();

    // Biến lưu trữ vật đang được gắp
    private Transform currentHeldItem;
    private Collider currentHeldCollider;

    public bool IsHoldingItem => currentHeldItem != null;
    public Transform CurrentHeldItem => currentHeldItem;

    // Khóa kẹp tạm thời trong lúc vật đang bay/xoay để tránh lỗi
    private float actionLockTime = 0f;

    /// <summary>
    /// Hàm dành cho Hand Hint để biết Kẹp đang cần bay tới đâu (Đồ ăn hay Rổ)
    /// </summary>
    public Transform GetHintTarget()
    {
        if (currentHeldItem != null)
        {
            return dropTarget;
        }

        for (int i = 0; i < requiredPickables.Count; i++)
        {
            if (requiredPickables[i] != null && requiredPickables[i].activeInHierarchy)
            {
                Collider col = requiredPickables[i].GetComponent<Collider>();
                if (col != null && col.enabled)
                {
                    return requiredPickables[i].transform;
                }
            }
        }
        return null;
    }

    private void Start()
    {
        // Mặc định đối với cái Kẹp (Tong), khi hoàn thành nhiệm vụ gắp xong thì KHÔNG ẩn cái kẹp đi
        hideSpriteOnDrop = false;

        // Bắt sự kiện khi kẹp được kéo đi và thả ra
        if (onDragStart == null) onDragStart = new UnityEngine.Events.UnityEvent();
        if (onReturn == null) onReturn = new UnityEngine.Events.UnityEvent();

        onDragStart.AddListener(OnTongDragStart);
        onReturn.AddListener(OnTongReturn);
    }

    private void OnTongDragStart()
    {
        // Nếu kẹp đang giữ đồ ăn, nâng layer của đồ ăn lên khi bắt đầu kéo
        if (currentHeldItem != null)
        {
            ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
            if (graphic != null) graphic.SetSortingLayerToTop();
        }
    }

    private void OnTongReturn()
    {
        // Nếu kẹp đang giữ đồ ăn, hạ layer của đồ ăn xuống ngay khi nhả chuột ra (kẹp bay về)
        if (currentHeldItem != null)
        {
            ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
            if (graphic != null) graphic.ResetSortingLayer();
        }
    }

    // Thay vì dùng OnTriggerEnter, ta dùng Update để bắn tia dò tìm
    private void Update()
    {
        if (holdPoint == null) return;

        // Nếu đang trong thời gian chờ (vật đang bay vào kẹp hoặc bay vào rổ) thì kẹp không làm gì cả
        if (Time.time < actionLockTime) return;

        Collider[] hits = Physics.OverlapSphere(holdPoint.position, detectRadius);

        foreach (Collider hit in hits)
        {
            // Kiểm tra Pickable
            if (currentHeldItem == null && IsInLayerMask(hit.gameObject, pickableLayer))
            {
                PickUpItem(hit);
                break; // Gắp được 1 cái thì dừng vòng lặp ngay
            }

            // Kiểm tra Basket
            if (currentHeldItem != null && IsInLayerMask(hit.gameObject, basketLayer))
            {
                DropItemIntoBasket();
                break; // Thả xong thì dừng vòng lặp
            }
        }
    }

    // Vẽ một vòng tròn đỏ trong tab Scene để bạn dễ hình dung kích thước vùng quét (detectRadius)
    private void OnDrawGizmosSelected()
    {
        if (holdPoint != null)
        {
            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(holdPoint.position, detectRadius);
        }
    }

    private void PickUpItem(Collider itemCollider)
    {
        currentHeldItem = itemCollider.transform;
        currentHeldCollider = itemCollider;

        if (pickSound != FxType.None && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFx(pickSound);
        }

        // Tắt collider của vật để tránh va chạm lung tung trong lúc đang di chuyển cùng kẹp
        if (currentHeldCollider != null)
        {
            currentHeldCollider.enabled = false;
        }

        // Kill các tween cũ (nếu có) để tránh xung đột
        currentHeldItem.DOKill();

        // Đưa vật thành con của holdPoint để nó di chuyển theo kẹp
        currentHeldItem.SetParent(holdPoint);

        // Nâng layer của vật phẩm lên trên cùng bằng dragSortingOffset
        ItemGraphic graphic = currentHeldItem.GetComponent<ItemGraphic>();
        if (graphic != null)
        {
            graphic.SetSortingLayerToTop();
        }

        // Khóa kẹp không cho thả trong lúc vật đang hút về kẹp
        actionLockTime = Time.time + flyToTongDuration;

        // Dùng DOTween bay vật vào holdPoint của kẹp
        currentHeldItem.DOLocalMove(Vector3.zero, flyToTongDuration).SetEase(Ease.OutQuad);
    }

    private void DropItemIntoBasket()
    {
        Transform itemToDrop = currentHeldItem;
        
        // Giải phóng vật khỏi kẹp ngay lập tức để kẹp rỗng
        itemToDrop.SetParent(null);
        currentHeldItem = null;
        currentHeldCollider = null;

        // Kill các tween cũ
        itemToDrop.DOKill();

        ItemController itemCtrl = itemToDrop.GetComponent<ItemController>();

        // Kiểm tra xem vật này có nằm trong danh sách yêu cầu không
        bool isLastItem = false;
        if (requiredPickables.Contains(itemToDrop.gameObject))
        {
            requiredPickables.Remove(itemToDrop.gameObject);
            if (requiredPickables.Count == 0)
            {
                isLastItem = true; // Đánh dấu đây là vật cuối cùng hoàn thành nhiệm vụ
            }
        }

        // Khóa kẹp không cho gắp vật khác trong lúc vật cũ đang bay vào rổ và xoay
        actionLockTime = Time.time + flyToBasketDuration;

        // Random góc xoay (chỉ xoay thêm quanh trục Z)
        float randomZ = Random.Range(randomRotateRange.x, randomRotateRange.y);
        Vector3 addRot = new Vector3(0, 0, randomZ);

        // Lấy ItemGraphic để reset layer sau khi bay xong
        ItemGraphic graphic = itemToDrop.GetComponent<ItemGraphic>();

        if (itemCtrl != null && itemCtrl.dropTarget != null)
        {
            // Set parent vào target để nó dính liền với Rổ (di chuyển theo rổ)
            itemToDrop.SetParent(itemCtrl.dropTarget);

            // Dùng DOLocalJump về 0,0,0 để nhảy chính xác vào tâm Target, tự động bám theo Target dù rổ có di chuyển
            itemToDrop.DOLocalJump(Vector3.zero, jumpPower, 1, flyToBasketDuration).SetEase(Ease.OutQuad).OnComplete(() => 
            {
                if (dropIntoBasketSound != FxType.None && Ply_SoundManager.Ins != null)
                {
                    Ply_SoundManager.Ins.PlayFx(dropIntoBasketSound);
                }
                
                if (graphic != null) graphic.SetSortingLayerExact(finalSortingOrder);
                if (isLastItem) 
                {
                    PlayDropAnimations();
                    if (InputManager.Instance != null) InputManager.Instance.ForceDrop();
                }
            });
        }
        else
        {
            // Fallback nếu không có target
            Vector3 finalPos = itemToDrop.position;
            itemToDrop.DOJump(finalPos, jumpPower, 1, flyToBasketDuration).SetEase(Ease.OutQuad).OnComplete(() => 
            {
                if (dropIntoBasketSound != FxType.None && Ply_SoundManager.Ins != null)
                {
                    Ply_SoundManager.Ins.PlayFx(dropIntoBasketSound);
                }

                if (graphic != null) graphic.SetSortingLayerExact(finalSortingOrder);
                if (isLastItem) 
                {
                    PlayDropAnimations();
                    if (InputManager.Instance != null) InputManager.Instance.ForceDrop();
                }
            });
        }
        
        // Xoay CỘNG THÊM vào trục Z trong lúc bay (giữ nguyên X, Y cũ)
        itemToDrop.DORotate(addRot, flyToBasketDuration, RotateMode.WorldAxisAdd).SetEase(Ease.OutQuad);
    }

    // Hàm tiện ích để kiểm tra xem GameObject có nằm trong LayerMask hay không
    private bool IsInLayerMask(GameObject obj, LayerMask layerMask)
    {
        return ((layerMask.value & (1 << obj.layer)) > 0);
    }
}
