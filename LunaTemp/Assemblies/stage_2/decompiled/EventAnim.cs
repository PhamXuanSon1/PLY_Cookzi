using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class EventAnim : MonoBehaviour
{
	[Serializable]
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

	[Tooltip("Danh sách các Event. Bạn có thể kéo thả các script, object vào đây để gọi hàm tương ứng.")]
	public List<UnityEvent> animEvents = new List<UnityEvent>();

	[Header("Move Sequences")]
	[Tooltip("Danh sách các kịch bản di chuyển nhiều vật phẩm. Gọi hàm TriggerMoveSequence(int) để chạy.")]
	public List<MoveSequence> moveSequences = new List<MoveSequence>();

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
			Debug.LogWarning($"[EventAnim] Không tìm thấy event ở index {index} trên object {base.gameObject.name}!");
		}
	}

	public void TriggerMoveSequence(int index)
	{
		if (index >= 0 && index < moveSequences.Count)
		{
			StartCoroutine(MoveSequenceRoutine(moveSequences[index]));
		}
		else
		{
			Debug.LogWarning($"[EventAnim] Không tìm thấy Move Sequence ở index {index} trên object {base.gameObject.name}!");
		}
	}

	private IEnumerator MoveSequenceRoutine(MoveSequence seq)
	{
		int count = Mathf.Min(seq.itemsToMove.Count, seq.targetPositions.Count);
		if (count == 0)
		{
			if (seq.moveDuration > 0f)
			{
				yield return new WaitForSeconds(seq.moveDuration);
			}
			foreach (SpriteRenderer sr in seq.spritesToHideOnComplete)
			{
				if (sr != null)
				{
					sr.enabled = false;
				}
			}
			foreach (GameObject obj in seq.objectsToEnableOnComplete)
			{
				if (obj != null)
				{
					obj.SetActive(true);
				}
			}
			yield break;
		}
		for (int i = 0; i < count; i++)
		{
			Transform item = seq.itemsToMove[i];
			Transform target = seq.targetPositions[i];
			Tween tween = null;
			if (item != null && target != null)
			{
				tween = ((!seq.isJump) ? ((Tween)item.DOMove(target.position, seq.moveDuration).SetEase(Ease.OutQuad)) : ((Tween)item.DOJump(target.position, seq.jumpPower, 1, seq.moveDuration).SetEase(Ease.OutQuad)));
				if (seq.changeSortingOrder)
				{
					DOVirtual.DelayedCall(seq.moveDuration / 2f, delegate
					{
						if (item != null)
						{
							ItemGraphic component = item.GetComponent<ItemGraphic>();
							if (component != null)
							{
								component.SetSortingLayerExact(seq.targetSortingOrder);
							}
							else
							{
								SpriteRenderer[] componentsInChildren = item.GetComponentsInChildren<SpriteRenderer>(true);
								SpriteRenderer[] array = componentsInChildren;
								foreach (SpriteRenderer spriteRenderer in array)
								{
									spriteRenderer.sortingOrder = seq.targetSortingOrder;
								}
							}
						}
					});
				}
			}
			if (i == count - 1 && tween != null)
			{
				tween.OnComplete(delegate
				{
					foreach (SpriteRenderer current in seq.spritesToHideOnComplete)
					{
						if (current != null)
						{
							current.enabled = false;
						}
					}
					foreach (GameObject current2 in seq.objectsToEnableOnComplete)
					{
						if (current2 != null)
						{
							current2.SetActive(true);
						}
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
