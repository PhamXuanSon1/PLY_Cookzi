using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class ItemGraphic : MonoBehaviour
{
	public List<SpriteRenderer> spriteRenderers = new List<SpriteRenderer>();

	[Header("Drag Rotation Options")]
	[Tooltip("Bật tính năng xoay khi kéo")]
	public bool rotateOnDrag = false;

	[Tooltip("Góc sẽ xoay thêm (n độ) khi kéo. VD: X=0, Y=0, Z=0")]
	public Vector3 dragRotationAngle = new Vector3(0f, 0f, 0f);

	public float rotationDuration = 0.2f;

	private Quaternion originRotation;

	private bool isLayerIncreased = false;

	private void Start()
	{
		originRotation = base.transform.rotation;
		GetSpriteRenderers();
	}

	public void GetSpriteRenderers()
	{
		spriteRenderers.Clear();
		SpriteRenderer[] renderers = GetComponentsInChildren<SpriteRenderer>(true);
		spriteRenderers.AddRange(renderers);
	}

	public void SetSortingLayerToTop()
	{
		if (!isLayerIncreased)
		{
			isLayerIncreased = true;
			int offset = ((InputManager.Instance != null) ? InputManager.Instance.dragSortingOffset : 100);
			for (int i = 0; i < spriteRenderers.Count; i++)
			{
				spriteRenderers[i].sortingOrder += offset;
			}
			if (rotateOnDrag)
			{
				base.transform.DORotate(originRotation.eulerAngles + dragRotationAngle, rotationDuration).SetEase(Ease.OutQuad);
			}
		}
	}

	public void ResetSortingLayer(int customRestore = -1)
	{
		if (isLayerIncreased)
		{
			isLayerIncreased = false;
			int offset = ((customRestore >= 0) ? customRestore : ((InputManager.Instance != null) ? InputManager.Instance.dragSortingOffset : 100));
			for (int i = 0; i < spriteRenderers.Count; i++)
			{
				spriteRenderers[i].sortingOrder -= offset;
			}
			if (rotateOnDrag)
			{
				base.transform.DORotate(originRotation.eulerAngles, rotationDuration).SetEase(Ease.OutQuad);
			}
		}
	}

	public void SetSortingLayerExact(int exactOrder)
	{
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			spriteRenderers[i].sortingOrder = exactOrder;
		}
		if (rotateOnDrag)
		{
			base.transform.DORotate(originRotation.eulerAngles, rotationDuration).SetEase(Ease.OutQuad);
		}
	}

	public void ResetMaskInteraction()
	{
		for (int i = 0; i < spriteRenderers.Count; i++)
		{
			if (spriteRenderers[i] != null)
			{
				spriteRenderers[i].maskInteraction = SpriteMaskInteraction.None;
			}
		}
	}
}
