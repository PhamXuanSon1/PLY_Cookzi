using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[Serializable]
public class ActiveEventGroup
{
	[Tooltip("Tên gợi nhớ cho nhóm này (không ảnh hưởng logic, chỉ để dễ nhìn)")]
	public string groupName = "Nhóm Event 1";

	[Tooltip("Danh sách các object cần phải được bật (active) ĐỒNG THỜI")]
	public List<GameObject> targetObjects = new List<GameObject>();

	[Tooltip("Thời gian chờ (giây) sau khi tất cả các object trên đã được bật")]
	public float delayTime = 1f;

	[Tooltip("Hủy sự kiện nếu trong lúc đang chờ có object bị tắt đi?")]
	public bool cancelIfAnyDeactivatedDuringDelay = false;

	[Tooltip("Sự kiện sẽ gọi ra của riêng nhóm này")]
	public UnityEvent onAllActive;

	[HideInInspector]
	public bool isWaiting = false;

	[HideInInspector]
	public bool hasTriggered = false;
}
