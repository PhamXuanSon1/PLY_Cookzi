using UnityEngine;

public class DropTargetSlot : MonoBehaviour
{
	[HideInInspector]
	public bool isOccupied = false;

	[HideInInspector]
	public GameObject currentItem = null;

	public void SetCurrentItem(GameObject item)
	{
		currentItem = item;
		isOccupied = item != null;
	}

	public void ClearItem()
	{
		currentItem = null;
		isOccupied = false;
	}

	public void ApplyToolToCurrentItem()
	{
		if (currentItem == null)
		{
			return;
		}
		CuttingSetup cuttingSetup = currentItem.GetComponent<CuttingSetup>();
		if (cuttingSetup != null)
		{
			cuttingSetup.ApplySetupToKnife();
			return;
		}
		AutoProcessItem autoProcess = currentItem.GetComponent<AutoProcessItem>();
		if (autoProcess != null)
		{
			autoProcess.StartProcessing();
		}
	}

	public void Occupy()
	{
		isOccupied = true;
	}

	public void Release()
	{
		isOccupied = false;
		currentItem = null;
	}
}
