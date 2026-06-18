using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Events;

public enum ItemType
{
    DragAndDrop,
    ClickOnly,
    Pickable // Dành cho các vật phẩm chỉ có thể dùng công cụ (như kẹp) để gắp
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

    [Header("Events")]
    public UnityEvent onClick;
    public UnityEvent onDrop;
    public UnityEvent onDragStart;
    public UnityEvent onReturn;
    [Tooltip("Sự kiện kích hoạt sau khi TẤT CẢ các Animation của Item đã chạy xong")]
    public UnityEvent onAnimFinished;

    [Header("Animation Setup")]
    public List<AnimObjectData> animationObjects = new List<AnimObjectData>();

    [Header("Audio")]
    [Tooltip("Danh sách âm thanh FX sẽ phát NGAY LẬP TỨC khi chơi thành công")]
    public List<FxType> fxSoundsStartAnim = new List<FxType>();
    [Tooltip("Danh sách âm thanh sẽ phát sau khi TẤT CẢ animation chạy xong")]
    public List<FxType> fxSoundsAfterAnim = new List<FxType>();

    public void PlayDropAnimations()
    {
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

        // Ẩn hiển thị của ItemGraphic đi để các object animation chạy
        if (hideSpriteOnDrop)
        {
            ItemGraphic graphic = GetComponent<ItemGraphic>();
            if (graphic != null)
            {
                for (int i = 0; i < graphic.spriteRenderers.Count; i++)
                {
                    graphic.spriteRenderers[i].enabled = false;
                }
            }
        }

        // Tắt collider để tránh tương tác kéo thả nữa
        Collider col = GetComponent<Collider>();
        if (col != null)
        {
            col.enabled = false;
        }

        float maxDuration = 0f;
        for (int i = 0; i < animationObjects.Count; i++)
        {
            float duration = animationObjects[i].delayFromStart + animationObjects[i].durationToDeactivate;
            if (duration > maxDuration)
            {
                maxDuration = duration;
            }
            StartCoroutine(ActivateObjectWithDelay(animationObjects[i]));
        }

        if (InputManager.Instance != null)
        {
            InputManager.Instance.BlockInputFor(maxDuration);
        }
        
        if (HandHintMmanager.Instance != null)
        {
            HandHintMmanager.Instance.OnItemCompleted(this, maxDuration);
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

    private IEnumerator InvokeAnimFinished(float delay)
    {
        if (delay > 0f)
        {
            yield return new WaitForSeconds(delay);
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
}
