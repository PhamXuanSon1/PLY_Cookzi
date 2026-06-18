#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;

public class BatchRenameTool : EditorWindow
{
    private string baseName = "Target";
    private int startIndex = 1;

    // Tạo menu "Tools > Batch Rename" trên thanh công cụ của Unity
    [MenuItem("Tools/Batch Rename")]
    public static void ShowWindow()
    {
        GetWindow<BatchRenameTool>("Batch Rename");
    }

    private void OnGUI()
    {
        GUILayout.Label("Đổi tên hàng loạt object", EditorStyles.boldLabel);
        GUILayout.Space(5);

        // Ô nhập chữ (base name)
        baseName = EditorGUILayout.TextField("Tên gốc (VD: Target):", baseName);
        
        // Ô nhập số bắt đầu (thường là 1)
        startIndex = EditorGUILayout.IntField("Số bắt đầu:", startIndex);

        GUILayout.Space(10);

        if (GUILayout.Button("Đổi Tên Các Object Đang Chọn", GUILayout.Height(30)))
        {
            RenameSelected();
        }
    }

    private void RenameSelected()
    {
        // Lấy danh sách các object đang được bôi đen (chọn) trong thẻ Hierarchy
        GameObject[] selectedObjects = Selection.gameObjects;

        if (selectedObjects == null || selectedObjects.Length == 0)
        {
            EditorUtility.DisplayDialog("Lỗi", "Bạn chưa chọn object nào trong Hierarchy cả!", "OK");
            return;
        }

        // Lưu lại trạng thái để có thể bấm Ctrl + Z (Undo) nếu lỡ đổi tên sai
        Undo.RecordObjects(selectedObjects, "Batch Rename Objects");

        // Tùy chọn: Sắp xếp thứ tự các object được chọn từ trên xuống dưới theo thứ tự trong Hierarchy
        System.Array.Sort(selectedObjects, (a, b) => a.transform.GetSiblingIndex().CompareTo(b.transform.GetSiblingIndex()));

        for (int i = 0; i < selectedObjects.Length; i++)
        {
            // Đổi tên thành Tên Gốc + Số thứ tự
            selectedObjects[i].name = baseName + (startIndex + i).ToString();
            
            // Đánh dấu là object đã bị thay đổi để Unity nhớ mà save lại
            EditorUtility.SetDirty(selectedObjects[i]);
        }
        
        Debug.Log($"[Batch Rename] Đã đổi tên thành công {selectedObjects.Length} objects!");
    }
}
#endif
