using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

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
		ShowHandHintForCurrentItem();
	}

	private void Update()
	{
		if (isWaitingForAnim)
		{
			return;
		}
		if (GetNextActiveItem() == null)
		{
			if (!handHintObject.activeInHierarchy)
			{
				ShowHandHintForCurrentItem();
			}
			return;
		}
		idleTimer += Time.deltaTime;
		if (idleTimer >= idleTimeToHint && !handHintObject.activeInHierarchy)
		{
			ShowHandHintForCurrentItem();
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
			if (!(hintItems[i] != null) || !hintItems[i].gameObject.activeInHierarchy)
			{
				continue;
			}
			Collider col = hintItems[i].GetComponent<Collider>();
			if (col != null && col.enabled)
			{
				if (hintItems[i].itemType == ItemType.DragAndDrop && hintItems[i].dropTarget != null)
				{
					DropTargetSlot slot = hintItems[i].dropTarget.GetComponent<DropTargetSlot>();
					if (slot != null && slot.isOccupied && slot.currentItem != null && slot.currentItem != hintItems[i].gameObject)
					{
						if (hintItems[i].isTool)
						{
							return hintItems[i];
						}
						CuttingSetup cuttingSetup2 = slot.currentItem.GetComponent<CuttingSetup>();
						if (cuttingSetup2 != null && cuttingSetup2.knifeProcessor != null && cuttingSetup2.knifeProcessor.gameObject.activeInHierarchy)
						{
							ItemController knifeCtrl2 = cuttingSetup2.knifeProcessor.GetComponent<ItemController>();
							if (knifeCtrl2 != null && knifeCtrl2.GetComponent<Collider>() != null && knifeCtrl2.GetComponent<Collider>().enabled)
							{
								return knifeCtrl2;
							}
						}
						continue;
					}
				}
				return hintItems[i];
			}
			if (hintItems[i].itemType != 0 || !(hintItems[i].dropTarget != null))
			{
				continue;
			}
			DropTargetSlot slot2 = hintItems[i].dropTarget.GetComponent<DropTargetSlot>();
			if (!(slot2 != null) || !slot2.isOccupied || !(slot2.currentItem == hintItems[i].gameObject))
			{
				continue;
			}
			CuttingSetup cuttingSetup = slot2.currentItem.GetComponent<CuttingSetup>();
			if (cuttingSetup != null && cuttingSetup.knifeProcessor != null && cuttingSetup.knifeProcessor.gameObject.activeInHierarchy)
			{
				ItemController knifeCtrl = cuttingSetup.knifeProcessor.GetComponent<ItemController>();
				if (knifeCtrl != null && knifeCtrl.GetComponent<Collider>() != null && knifeCtrl.GetComponent<Collider>().enabled)
				{
					return knifeCtrl;
				}
			}
		}
		return null;
	}

	private void ShowHandHintForCurrentItem()
	{
		handHintObject.SetActive(true);
		currentDragTween?.Kill();
		ItemController currentItem = GetNextActiveItem();
		if (currentItem != null)
		{
			if (currentItem is TongItem tongItem)
			{
				handHintObject.transform.position = currentItem.transform.position;
				Transform target = tongItem.GetHintTarget();
				if (target != null)
				{
					if (target != tongItem.dropTarget && tongItem.dropTarget != null)
					{
						Sequence seq = DOTween.Sequence();
						seq.Append(handHintObject.transform.DOMove(target.position, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine));
						seq.Append(handHintObject.transform.DOMove(tongItem.dropTarget.position, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine));
						seq.SetLoops(-1, LoopType.Restart);
						currentDragTween = seq;
					}
					else
					{
						currentDragTween = handHintObject.transform.DOMove(target.position, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
					}
				}
				return;
			}
			DragBetweenBoundsToProcess dragBounds = currentItem.GetComponent<DragBetweenBoundsToProcess>();
			if (dragBounds != null && dragBounds.leftPoint != null && dragBounds.rightPoint != null)
			{
				handHintObject.transform.position = dragBounds.leftPoint.position;
				currentDragTween = handHintObject.transform.DOMove(dragBounds.rightPoint.position, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
				return;
			}
			if (currentItem.itemType == ItemType.SwipeInPlace)
			{
				handHintObject.transform.position = currentItem.transform.position + Vector3.left * 0.5f;
				currentDragTween = handHintObject.transform.DOMove(currentItem.transform.position + Vector3.right * 0.5f, dragAnimDuration * 0.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
				return;
			}
			ItemSpawner spawner = currentItem.GetComponent<ItemSpawner>();
			if (spawner != null && spawner.dropTargetForSpawnedItem != null)
			{
				handHintObject.transform.position = currentItem.transform.position;
				currentDragTween = handHintObject.transform.DOMove(spawner.dropTargetForSpawnedItem.position, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
			}
			else if (currentItem.itemType == ItemType.ClickOnly)
			{
				handHintObject.transform.position = currentItem.transform.position;
				if (handAnimator != null)
				{
					handAnimator.SetTrigger("Click");
				}
			}
			else if (currentItem.itemType == ItemType.DragAndDrop)
			{
				handHintObject.transform.position = currentItem.transform.position;
				Vector3 targetPos = ((currentItem.dropTarget != null) ? currentItem.dropTarget.position : (currentItem.transform.position + Vector3.up * 2f));
				currentDragTween = handHintObject.transform.DOMove(targetPos, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
			}
		}
		else if (startHintPos != null && endHintPos != null)
		{
			handHintObject.transform.position = startHintPos.position;
			currentDragTween = handHintObject.transform.DOMove(endHintPos.position, dragAnimDuration).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Restart);
		}
		else
		{
			handHintObject.SetActive(false);
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
		yield return new WaitForSeconds(duration);
		idleTimer = 0f;
		isWaitingForAnim = false;
	}
}
