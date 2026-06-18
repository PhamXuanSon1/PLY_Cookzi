using System.Collections.Generic;
using UnityEngine;

public class BasketAnim : MonoBehaviour
{
    public GameObject activeObject;

    public void SetActiveObject()
    {
        activeObject.SetActive(true);
    }
}
