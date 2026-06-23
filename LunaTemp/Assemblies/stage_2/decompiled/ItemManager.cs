using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ItemManager : MonoBehaviour
{
	public static ItemManager Instance;

	public List<ItemController> items = new List<ItemController>();

	[Header("Progress")]
	[Tooltip("Tổng số Item đã được thả trúng đích thành công")]
	public int totalItemsDropped = 0;

	[Header("Events")]
	public UnityEvent onItemDropped;

	private void Awake()
	{
		if (Instance == null)
		{
			Instance = this;
		}
	}

	public void AddDroppedItem(ItemController item)
	{
		if (items.Contains(item))
		{
			totalItemsDropped++;
			onItemDropped?.Invoke();
		}
	}
}
