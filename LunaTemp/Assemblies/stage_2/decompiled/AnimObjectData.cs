using System;
using UnityEngine;

[Serializable]
public class AnimObjectData
{
	public GameObject animObj;

	public float delayFromStart;

	public float durationToDeactivate;

	[Tooltip("Tên Trigger của Animator (nếu có). Để trống sẽ tự hiểu là 'default'")]
	public string triggerName = "";
}
