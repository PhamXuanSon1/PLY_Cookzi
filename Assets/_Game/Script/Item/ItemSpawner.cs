using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;

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

    /// <summary>
    /// Hàm này dùng để gọi từ sự kiện OnClick của ItemController
    /// </summary>
    public void SpawnAtMouse()
    {
        if (currentSpawnCount >= maxSpawnCount) 
        {
            Debug.Log("[ItemSpawner] Đã hết lượt lấy đồ!");
            return;
        }

        if (prefabToSpawn != null)
        {
            // Lấy vị trí chuột hiện tại (tọa độ thế giới)
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            mousePos.z = 0f; // Ép về trục Z = 0 cho game 2D

            // Sinh ra vật phẩm tại ngay đúng đầu chuột
            GameObject newObj = Instantiate(prefabToSpawn, mousePos, Quaternion.identity);
            
            // Tự động truyền Đích Đến (Drop Target) cho cái lá vừa sinh ra
            ItemController itemCtrl = newObj.GetComponent<ItemController>();
            if (itemCtrl != null)
            {
                if (dropTargetForSpawnedItem != null)
                {
                    itemCtrl.dropTarget = dropTargetForSpawnedItem;
                }

                // Tự động hoàn trả lượt và Xóa cái lá nếu bị thả sai vị trí
                itemCtrl.onReturn.AddListener(() => {
                    this.RefundSpawn();
                    Destroy(newObj);
                });

                // Tự động BẬT các Object tuần tự khi cái lá thả thành công và chạy xong Anim
                itemCtrl.onAnimFinished.AddListener(() => {
                    if (successCount < objectsToEnableOnSuccess.Count)
                    {
                        GameObject objToEnable = objectsToEnableOnSuccess[successCount];
                        if (objToEnable != null)
                        {
                            objToEnable.SetActive(true);
                        }
                        successCount++;
                    }

                    // Phát tín hiệu ra ngoài để UnlockCondition có thể nhận được
                    onSpawnedItemSuccess?.Invoke();
                });
            }

            // Xóa chữ (Clone) ở đuôi tên để code nhận diện Target chuẩn hơn nếu cần
            newObj.name = prefabToSpawn.name; 

            currentSpawnCount++;
            onSpawn?.Invoke();

            // Nếu đã hết lượt, tắt Collider để HandHint biết là đã làm xong
            if (currentSpawnCount >= maxSpawnCount)
            {
                Collider col = GetComponent<Collider>();
                if (col != null) col.enabled = false;
            }

            // Ép hệ thống chuyển quyền điều khiển chuột sang cho cái lá vừa sinh ra
            if (autoStartDrag && InputManager.Instance != null)
            {
                InputManager.Instance.ForceStartDrag(newObj.transform);
            }
        }
    }

    /// <summary>
    /// Hoàn trả lại 1 lượt lấy đồ (Dùng khi người chơi thả sai chỗ, làm mất đồ)
    /// </summary>
    public void RefundSpawn()
    {
        if (currentSpawnCount > 0)
        {
            currentSpawnCount--;

            // Bật lại Collider nếu có lượt
            Collider col = GetComponent<Collider>();
            if (col != null) col.enabled = true;
        }
    }
}
