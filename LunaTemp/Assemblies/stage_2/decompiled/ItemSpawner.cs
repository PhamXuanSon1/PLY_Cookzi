using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class ItemSpawner : MonoBehaviour
{
	[Tooltip("Prefab của vật phẩm muốn sinh ra (Ví dụ: Prefab Lá chanh)")]
	public GameObject prefabToSpawn;

	[Tooltip("Số lượng tối đa có thể sinh ra. Giới hạn 2 cái thì điền 2.")]
	public int maxSpawnCount = 2;

	private int currentSpawnCount = 0;

	[Tooltip("Sự kiện gọi khi sinh ra thành công (để chạy âm thanh, tắt bật lá chanh trên cây)")]
	public UnityEvent onSpawn;

	[Header("Auto Setup (Tùy chọn)")]
	[Tooltip("Vì Prefab không lưu được vật thể trong Scene. Kéo cái Nồi/Đĩa vào đây, Spawner sẽ tự gán Đích Đến cho lá chanh vừa được sinh ra!")]
	public Transform dropTargetForSpawnedItem;

	[Tooltip("Bật chế độ này để khi vừa Click sinh ra đồ, đồ vật đó sẽ tự động dính vào chuột và bạn có thể kéo đi luôn mà không cần nhả tay ra!")]
	public bool autoStartDrag = true;

	[Header("Progressive Visuals")]
	[Tooltip("Danh sách các vật thể trong Scene sẽ được BẬT lên LẦN LƯỢT mỗi khi một món đồ được thả thành công vào đích.")]
	public List<GameObject> objectsToEnableOnSuccess = new List<GameObject>();

	private int successCount = 0;

	[Tooltip("Sự kiện được gọi MỖI KHI 1 cái lá (vật sinh ra) được thả thành công và chạy xong hoạt ảnh. (Dùng cái này để nối với UnlockCondition.AddProgress)")]
	public UnityEvent onSpawnedItemSuccess;

	public void SpawnAtMouse()
	{
		if (currentSpawnCount >= maxSpawnCount)
		{
			Debug.Log("[ItemSpawner] Đã hết lượt lấy đồ!");
		}
		else
		{
			if (!(prefabToSpawn != null))
			{
				return;
			}
			Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			mousePos.z = 0f;
			GameObject newObj = Object.Instantiate(prefabToSpawn, mousePos, Quaternion.identity);
			ItemController itemCtrl = newObj.GetComponent<ItemController>();
			if (itemCtrl != null)
			{
				if (dropTargetForSpawnedItem != null)
				{
					itemCtrl.dropTarget = dropTargetForSpawnedItem;
				}
				itemCtrl.onReturn.AddListener(delegate
				{
					RefundSpawn();
					Object.Destroy(newObj);
				});
				itemCtrl.onAnimFinished.AddListener(delegate
				{
					if (successCount < objectsToEnableOnSuccess.Count)
					{
						GameObject gameObject = objectsToEnableOnSuccess[successCount];
						if (gameObject != null)
						{
							gameObject.SetActive(true);
						}
						successCount++;
					}
					onSpawnedItemSuccess?.Invoke();
				});
			}
			newObj.name = prefabToSpawn.name;
			currentSpawnCount++;
			onSpawn?.Invoke();
			if (currentSpawnCount >= maxSpawnCount)
			{
				Collider col = GetComponent<Collider>();
				if (col != null)
				{
					col.enabled = false;
				}
			}
			if (autoStartDrag && InputManager.Instance != null)
			{
				InputManager.Instance.ForceStartDrag(newObj.transform);
			}
		}
	}

	public void RefundSpawn()
	{
		if (currentSpawnCount > 0)
		{
			currentSpawnCount--;
			Collider col = GetComponent<Collider>();
			if (col != null)
			{
				col.enabled = true;
			}
		}
	}
}
