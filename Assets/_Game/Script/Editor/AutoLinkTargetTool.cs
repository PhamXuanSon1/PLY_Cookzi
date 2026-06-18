
#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;
using System.Text.RegularExpressions;

public class AutoLinkTargetTool : EditorWindow
{
    private int selectedTab = 0;
    private string[] tabs = { "1. Dò Theo Số (VD: Item1 -> Target1)", "2. Ghép Theo Thứ Tự Của Parent" };

    // Biến cho Cách 1
    private string targetPrefix = "Target";

    // Biến cho Cách 2
    private Transform itemsParent;
    private Transform targetsParent;

    [MenuItem("Tools/Auto Link Targets")]
    public static void ShowWindow()
    {
        GetWindow<AutoLinkTargetTool>("Auto Link Targets");
    }

    private void OnGUI()
    {
        GUILayout.Label("Tool Tự Động Gán Drop Target", EditorStyles.boldLabel);
        GUILayout.Space(10);

        // Thanh chọn Tab
        selectedTab = GUILayout.Toolbar(selectedTab, tabs);
        GUILayout.Space(10);

        if (selectedTab == 0)
        {
            DrawMode1();
        }
        else
        {
            DrawMode2();
        }
    }

    private void DrawMode1()
    {
        GUILayout.Label("Cách 1: Tự quét số ở cuối tên của Item đang chọn.", EditorStyles.helpBox);
        GUILayout.Label("Bạn bôi đen các đồ ăn (VD: Food1, Food2...). Tool sẽ tự tìm trong Scene các đích đến có tên tương ứng (Target1, Target2...) để gán vào.", EditorStyles.wordWrappedLabel);
        GUILayout.Space(5);

        targetPrefix = EditorGUILayout.TextField("Tên Đích (Prefix):", targetPrefix);

        GUILayout.Space(10);
        if (GUILayout.Button("Link Các Item Đang Bôi Đen", GUILayout.Height(30)))
        {
            LinkByNumber();
        }
    }

    private void DrawMode2()
    {
        GUILayout.Label("Cách 2: Ghép đôi tự động từ trên xuống dưới.", EditorStyles.helpBox);
        GUILayout.Label("Bạn kéo 1 thư mục chứa toàn bộ đồ ăn, và 1 thư mục chứa toàn bộ Target vào đây. Nó sẽ lấy đứa con thứ nhất của kho Đồ ăn gán vào đứa con thứ nhất của kho Target.", EditorStyles.wordWrappedLabel);
        GUILayout.Space(5);

        itemsParent = (Transform)EditorGUILayout.ObjectField("Thư Mục Chứa Đồ Ăn", itemsParent, typeof(Transform), true);
        targetsParent = (Transform)EditorGUILayout.ObjectField("Thư Mục Chứa Target", targetsParent, typeof(Transform), true);

        GUILayout.Space(10);
        if (GUILayout.Button("Link Theo Thứ Tự", GUILayout.Height(30)))
        {
            LinkByParentOrder();
        }
    }

    private void LinkByNumber()
    {
        GameObject[] selectedObjects = Selection.gameObjects;
        if (selectedObjects == null || selectedObjects.Length == 0)
        {
            EditorUtility.DisplayDialog("Lỗi", "Bạn chưa chọn Item nào trong thẻ Hierarchy cả!", "OK");
            return;
        }

        int successCount = 0;
        foreach (GameObject obj in selectedObjects)
        {
            ItemController itemCtrl = obj.GetComponent<ItemController>();
            if (itemCtrl == null) continue;

            // Tìm dãy số ở đuôi của tên (Regex \d+$)
            Match match = Regex.Match(obj.name, @"\d+$");
            if (match.Success)
            {
                string targetName = targetPrefix + match.Value; // Nối thành Target1, Target2...
                GameObject targetObj = GameObject.Find(targetName);
                
                if (targetObj != null)
                {
                    Undo.RecordObject(itemCtrl, "Auto Link Target");
                    itemCtrl.dropTarget = targetObj.transform;
                    EditorUtility.SetDirty(itemCtrl);
                    successCount++;
                }
                else
                {
                    Debug.LogWarning($"[Auto Link] Cảnh báo: Không tìm thấy object nào tên là '{targetName}' trong Scene để gán cho '{obj.name}'.");
                }
            }
            else
            {
                Debug.LogWarning($"[Auto Link] Item '{obj.name}' không có số ở cuối tên, bị bỏ qua.");
            }
        }
        
        EditorUtility.DisplayDialog("Thành công", $"Đã tự động gán xong {successCount} Drop Targets!", "OK");
    }

    private void LinkByParentOrder()
    {
        if (itemsParent == null || targetsParent == null)
        {
            EditorUtility.DisplayDialog("Lỗi", "Vui lòng kéo đủ 2 cái Parent vào 2 ô trống!", "OK");
            return;
        }

        if (itemsParent.childCount != targetsParent.childCount)
        {
            bool proceed = EditorUtility.DisplayDialog("Cảnh báo", 
                $"Số lượng không khớp nhau!\nKho Đồ Ăn có: {itemsParent.childCount} món\nKho Target có: {targetsParent.childCount} đích đến.\n\nBạn có muốn tiếp tục ghép tới mức tối đa không?", 
                "Tiếp tục", "Hủy");
            if (!proceed) return;
        }

        int count = Mathf.Min(itemsParent.childCount, targetsParent.childCount);
        int successCount = 0;

        for (int i = 0; i < count; i++)
        {
            Transform itemTransform = itemsParent.GetChild(i);
            Transform targetTransform = targetsParent.GetChild(i);

            ItemController itemCtrl = itemTransform.GetComponent<ItemController>();
            if (itemCtrl != null)
            {
                Undo.RecordObject(itemCtrl, "Auto Link Target");
                itemCtrl.dropTarget = targetTransform;
                EditorUtility.SetDirty(itemCtrl);
                successCount++;
            }
        }
        
        EditorUtility.DisplayDialog("Thành công", $"Đã tự động ghép nối xong {successCount} cặp!", "OK");
    }
}
#endif