using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;

public enum ItemType
{
    DragAndDrop,
    ClickOnly,
    Pickable, // Dành cho các vật phẩm chỉ có thể dùng công cụ (như kẹp) để gắp
    SwipeInPlace // Dành cho vật phẩm đứng yên, yêu cầu người chơi chà xát/quẹt để hoàn thành
}

[System.Serializable]
public class AnimObjectData
{
    public GameObject animObj;
    public float delayFromStart;
    public float durationToDeactivate;
    [Tooltip("Tên Trigger của Animator (nếu có). Để trống sẽ tự hiểu là 'default'")]
    public string triggerName = "";
}

public class ItemController : MonoBehaviour
{
    public ItemType itemType = ItemType.DragAndDrop;
    [Tooltip("Vị trí đích mà Item cần được kéo thả vào")]
    public Transform dropTarget;
    [Tooltip("Khoảng cách tối đa (bán kính) để tính là thả trúng đích")]
    public float dropDistanceThreshold = 1f;
    [Tooltip("Bật tắt tính năng tự động ẩn hình ảnh Item khi thả trúng đích")]
    public bool hideSpriteOnDrop = true;
    [Tooltip("Tự động tắt Collider (ngăn tương tác) sau khi hoàn thành nhiệm vụ (Click xong / Thả trúng đích)")]
    public bool disableColliderOnComplete = true;

    [Tooltip("Đánh dấu nếu đây là Công Cụ (như Dao). Công cụ chỉ có thể thả vào Thớt khi Thớt ĐÃ CÓ nguyên liệu nằm trên đó.")]
    public bool isTool = false;

    [Header("Custom Drag Bounds (Tùy chọn)")]
    [Tooltip("Nếu kéo BoxCollider vào đây, vật phẩm này CHỈ có thể kéo thả trong giới hạn của Box này (Ghi đè giới hạn chung của InputManager).")]
    public BoxCollider customDragBounds;

    [Tooltip("Khi kéo thả, có tự động nổi hình ảnh lên trên cùng không? (Tắt đi nếu không muốn hình ảnh bị nhảy đè lên các vật khác)")]
    public bool increaseSortingLayerOnDrag = true;

    [Header("Khóa Item (Condition)")]
    [Tooltip("Nếu bật (True), người chơi không thể kéo hoặc click item này cho đến khi nó được Unlock()")]
    public bool isLocked = false;

    [Tooltip("Sự kiện gọi khi cố tình tương tác lúc Item đang bị khóa (vd: phát âm thanh lỗi, báo đỏ...)")]
    public UnityEvent onInteractWhileLocked;

    [Header("Events")]
    public UnityEvent onClick;
    public UnityEvent onDrop;
    public UnityEvent onDragStart;
    public UnityEvent onReturn;
    [Tooltip("Sự kiện kích hoạt sau khi TẤT CẢ các Animation của Item đã chạy xong")]
    public UnityEvent onAnimFinished;

    [Header("Animation Setup")]
    [Tooltip("Bật chế độ Click tuần tự: Mỗi lần click/thả chỉ phát 1 Anim trong list. Khi phát hết Anim cuối cùng mới tính là hoàn thành nhiệm vụ.")]
    public bool isSequentialClick = false;
    private int currentClickIndex = 0;
    
    public List<AnimObjectData> animationObjects = new List<AnimObjectData>();

    [Header("Audio")]
    [Tooltip("Âm thanh phát ra khi người chơi bắt đầu Click hoặc Kéo vật phẩm này")]
    public FxType interactSound = FxType.None;
    
    [Tooltip("Âm thanh sẽ phát lặp đi lặp lại trong suốt quá trình Click tuần tự (từ lần click đầu tiên đến khi kết thúc)")]
    public FxType sequenceLoopSound = FxType.None;

    [Tooltip("Danh sách âm thanh FX sẽ phát NGAY LẬP TỨC khi chơi thành công")]
    public List<FxType> fxSoundsStartAnim = new List<FxType>();
    [Tooltip("Danh sách âm thanh sẽ phát sau khi TẤT CẢ animation chạy xong")]
    public List<FxType> fxSoundsAfterAnim = new List<FxType>();

    public void PlayDropAnimations()
    {
        bool isLastAnim = true;
        List<AnimObjectData> animsToPlay = animationObjects;

        // Nếu bật chế độ tuần tự, chỉ lấy 1 anim tương ứng với số lần click hiện tại
        if (isSequentialClick && animationObjects.Count > 0)
        {
            if (currentClickIndex == 0 && sequenceLoopSound != FxType.None && Ply_SoundManager.Ins != null)
            {
                Ply_SoundManager.Ins.PlayLoopFx(sequenceLoopSound);
            }

            if (currentClickIndex < animationObjects.Count)
            {
                animsToPlay = new List<AnimObjectData>() { animationObjects[currentClickIndex] };
                currentClickIndex++;
                if (currentClickIndex < animationObjects.Count)
                {
                    isLastAnim = false;
                }
            }
        }

        if (Ply_SoundManager.Ins != null && fxSoundsStartAnim != null)
        {
            foreach (FxType sound in fxSoundsStartAnim)
            {
                if (sound != FxType.None)
                {
                    Ply_SoundManager.Ins.PlayFx(sound);
                }
            }
        }

        onDrop?.Invoke();

        if (!gameObject.activeInHierarchy) return;

        // Ẩn hiển thị của ItemGraphic đi để các object animation chạy (Chỉ chạy ở lần click cuối)
        if (isLastAnim && hideSpriteOnDrop)
        {
            HideSprite();
        }

        // Tắt collider để tránh tương tác kéo thả nữa (Chỉ tắt ở lần click cuối)
        if (isLastAnim && disableColliderOnComplete)
        {
            Collider col = GetComponent<Collider>();
            if (col != null)
            {
                col.enabled = false;
            }
        }

        float maxDuration = 0f;
        for (int i = 0; i < animsToPlay.Count; i++)
        {
            float duration = animsToPlay[i].delayFromStart + animsToPlay[i].durationToDeactivate;
            if (duration > maxDuration)
            {
                maxDuration = duration;
            }
            StartCoroutine(ActivateObjectWithDelay(animsToPlay[i]));
        }

        if (InputManager.Instance != null)
        {
            InputManager.Instance.BlockInputFor(maxDuration);
        }
        
        // Các logic hoàn thành Game chỉ chạy ở lần click cuối cùng
        if (isLastAnim)
        {
            if (HandHintManager.Instance != null)
            {
                HandHintManager.Instance.OnItemCompleted(this, maxDuration);
            }

            if (ItemManager.Instance != null)
            {
                ItemManager.Instance.AddDroppedItem(this);
            }

            if (fxSoundsAfterAnim != null && fxSoundsAfterAnim.Count > 0)
            {
                StartCoroutine(PlaySoundsAfterDelay(fxSoundsAfterAnim, maxDuration));
            }

            StartCoroutine(InvokeAnimFinished(maxDuration));
        }
    }

    private IEnumerator InvokeAnimFinished(float delay)
    {
        if (delay > 0f)
        {
            yield return new WaitForSeconds(delay);
        }

        if (sequenceLoopSound != FxType.None && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.StopFx(sequenceLoopSound);
        }

        onAnimFinished?.Invoke();
    }

    private IEnumerator ActivateObjectWithDelay(AnimObjectData data)
    {
        if (data != null && data.animObj != null)
        {
            if (data.delayFromStart > 0f)
            {
                yield return new WaitForSeconds(data.delayFromStart);
            }
            data.animObj.SetActive(true);

            // Bắn Trigger cho Animator (nếu có)
            Animator anim = data.animObj.GetComponent<Animator>();
            if (anim != null)
            {
                string tName = string.IsNullOrEmpty(data.triggerName) ? "default" : data.triggerName;
                anim.SetTrigger(tName);
            }

            if (data.durationToDeactivate > 0f)
            {
                yield return new WaitForSeconds(data.durationToDeactivate);
                if (data.animObj != null)
                {
                    data.animObj.SetActive(false);
                }
            }
        }
    }

    private IEnumerator PlaySoundsAfterDelay(List<FxType> soundTypes, float delay)
    {
        if (delay > 0f)
        {
            yield return new WaitForSeconds(delay);
        }
        if (Ply_SoundManager.Ins != null)
        {
            foreach (FxType sound in soundTypes)
            {
                if (sound != FxType.None)
                {
                    Ply_SoundManager.Ins.PlayFx(sound);
                }
            }
        }
    }

    /// <summary>
    /// Chuyển đổi Item thành dạng Kéo Thả (Dùng để gọi trong Unity Event)
    /// </summary>
    public void SetToDragAndDrop()
    {
        itemType = ItemType.DragAndDrop;
    }

    /// <summary>
    /// Chuyển đổi Item thành dạng Bấm (Dùng để gọi trong Unity Event)
    /// </summary>
    public void SetToClickOnly()
    {
        itemType = ItemType.ClickOnly;
    }

    /// <summary>
    /// Mở khóa Item (gọi từ UnityEvent của Item khác khi hoàn thành)
    /// </summary>
    public void UnlockItem()
    {
        isLocked = false;
    }

    /// <summary>
    /// Khóa Item lại
    /// </summary>
    public void LockItem()
    {
        isLocked = true;
    }

    private void HideSprite()
    {
        // Tắt SpriteRenderer
        SpriteRenderer[] srs = GetComponentsInChildren<SpriteRenderer>(true);
        foreach (var sr in srs)
        {
            if (sr != null) sr.enabled = false;
        }

        // Tắt luôn Animator (Vì nếu Animator đang chạy animation nhàn rỗi, nó sẽ tự bật lại SpriteRenderer)
        Animator[] anims = GetComponentsInChildren<Animator>(true);
        foreach (var anim in anims)
        {
            if (anim != null) anim.enabled = false;
        }
    }
}
