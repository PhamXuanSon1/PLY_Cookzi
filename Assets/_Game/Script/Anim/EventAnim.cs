using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

public class EventAnim : MonoBehaviour
{
    [Tooltip("Danh sách các Event. Bạn có thể kéo thả các script, object vào đây để gọi hàm tương ứng.")]
    public List<UnityEvent> animEvents = new List<UnityEvent>();

    /// <summary>
    /// Hàm này dùng để gọi từ trong cửa sổ Animation (Animation Event).
    /// </summary>
    /// <param name="index">Vị trí của Event trong list (bắt đầu từ 0)</param>
    public void TriggerEvent(int index)
    {
        if (index >= 0 && index < animEvents.Count)
        {
            if (animEvents[index] != null)
            {
                animEvents[index].Invoke();
            }
        }
        else
        {
            Debug.LogWarning($"[EventAnim] Không tìm thấy event ở index {index} trên object {gameObject.name}!");
        }
    }

    [System.Serializable]
    public class MoveSequence
    {
        [Tooltip("Danh sách các vật phẩm cần di chuyển")]
        public List<Transform> itemsToMove = new List<Transform>();
        [Tooltip("Danh sách các vị trí đích tương ứng với từng vật phẩm")]
        public List<Transform> targetPositions = new List<Transform>();
        
        [Tooltip("Thời gian bay của mỗi vật phẩm")]
        public float moveDuration = 0.5f;
        [Tooltip("Khoảng thời gian chờ giữa 2 vật phẩm bay liên tiếp (Để bay lần lượt)")]
        public float delayBetweenItems = 0.2f;
        
        [Tooltip("Nếu tích chọn, sẽ bay vòng cung giống như gắp đồ")]
        public bool isJump = true;
        public float jumpPower = 1.5f;

        [Header("Sorting Order Options")]
        [Tooltip("Bật nếu bạn muốn tự động đổi Sorting Order khi vật bay được 1 nửa đường")]
        public bool changeSortingOrder = false;
        [Tooltip("Giá trị Sorting Order mới sẽ được áp dụng")]
        public int targetSortingOrder = 50;

        [Header("On Complete Options")]
        [Tooltip("Danh sách các SpriteRenderer sẽ tự động bị ẩn đi sau khi món đồ cuối cùng bay xong")]
        public List<SpriteRenderer> spritesToHideOnComplete = new List<SpriteRenderer>();
        [Tooltip("Danh sách các GameObject sẽ tự động được BẬT lên sau khi món đồ cuối cùng bay xong")]
        public List<GameObject> objectsToEnableOnComplete = new List<GameObject>();
    }

    [Header("Move Sequences")]
    [Tooltip("Danh sách các kịch bản di chuyển nhiều vật phẩm. Gọi hàm TriggerMoveSequence(int) để chạy.")]
    public List<MoveSequence> moveSequences = new List<MoveSequence>();

    /// <summary>
    /// Gọi kịch bản di chuyển một danh sách vật phẩm. Gọi từ Animation Event.
    /// </summary>
    public void TriggerMoveSequence(int index)
    {
        if (index >= 0 && index < moveSequences.Count)
        {
            StartCoroutine(MoveSequenceRoutine(moveSequences[index]));
        }
        else
        {
            Debug.LogWarning($"[EventAnim] Không tìm thấy Move Sequence ở index {index} trên object {gameObject.name}!");
        }
    }

    private System.Collections.IEnumerator MoveSequenceRoutine(MoveSequence seq)
    {
        int count = Mathf.Min(seq.itemsToMove.Count, seq.targetPositions.Count);
        
        // Nếu không có đồ vật nào cần bay, thì chờ hết MoveDuration rồi thực thi lệnh OnComplete luôn
        if (count == 0)
        {
            if (seq.moveDuration > 0f) yield return new WaitForSeconds(seq.moveDuration);
            foreach (var sr in seq.spritesToHideOnComplete) { if (sr != null) sr.enabled = false; }
            foreach (var obj in seq.objectsToEnableOnComplete) { if (obj != null) obj.SetActive(true); }
            yield break;
        }

        for (int i = 0; i < count; i++)
        {
            Transform item = seq.itemsToMove[i];
            Transform target = seq.targetPositions[i];
            
            Tween tween = null;
            if (item != null && target != null)
            {
                if (seq.isJump)
                {
                    tween = item.DOJump(target.position, seq.jumpPower, 1, seq.moveDuration).SetEase(Ease.OutQuad);
                }
                else
                {
                    tween = item.DOMove(target.position, seq.moveDuration).SetEase(Ease.OutQuad);
                }

                // Logic đổi Layer khi bay được nửa đường
                if (seq.changeSortingOrder)
                {
                    DOVirtual.DelayedCall(seq.moveDuration / 2f, () => 
                    {
                        if (item != null)
                        {
                            ItemGraphic graphic = item.GetComponent<ItemGraphic>();
                            if (graphic != null)
                            {
                                graphic.SetSortingLayerExact(seq.targetSortingOrder);
                            }
                            else
                            {
                                // Nếu không có ItemGraphic, tự tìm và đổi trực tiếp SpriteRenderer
                                SpriteRenderer[] srs = item.GetComponentsInChildren<SpriteRenderer>(true);
                                foreach(var sr in srs) sr.sortingOrder = seq.targetSortingOrder;
                            }
                        }
                    });
                }
            }

            // Gắn sự kiện tắt Sprite vào món đồ cuối cùng của list
            if (i == count - 1 && tween != null)
            {
                tween.OnComplete(() => 
                {
                    foreach (var sr in seq.spritesToHideOnComplete)
                    {
                        if (sr != null) sr.enabled = false;
                    }
                    foreach (var obj in seq.objectsToEnableOnComplete)
                    {
                        if (obj != null) obj.SetActive(true);
                    }
                });
            }
            
            if (seq.delayBetweenItems > 0f)
            {
                yield return new WaitForSeconds(seq.delayBetweenItems);
            }
        }
    }
}
