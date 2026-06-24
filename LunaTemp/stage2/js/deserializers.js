var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSpring' )
  var i703 = data
  i702.spring = i703[0]
  i702.damper = i703[1]
  i702.targetPosition = i703[2]
  return i702
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointMotor' )
  var i705 = data
  i704.m_TargetVelocity = i705[0]
  i704.m_Force = i705[1]
  i704.m_FreeSpin = i705[2]
  return i704
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointLimits' )
  var i707 = data
  i706.m_Min = i707[0]
  i706.m_Max = i707[1]
  i706.m_Bounciness = i707[2]
  i706.m_BounceMinVelocity = i707[3]
  i706.m_ContactDistance = i707[4]
  i706.minBounce = i707[5]
  i706.maxBounce = i707[6]
  return i706
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointDrive' )
  var i709 = data
  i708.m_PositionSpring = i709[0]
  i708.m_PositionDamper = i709[1]
  i708.m_MaximumForce = i709[2]
  i708.m_UseAcceleration = i709[3]
  return i708
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i711 = data
  i710.m_Spring = i711[0]
  i710.m_Damper = i711[1]
  return i710
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i713 = data
  i712.m_Limit = i713[0]
  i712.m_Bounciness = i713[1]
  i712.m_ContactDistance = i713[2]
  return i712
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i715 = data
  i714.m_ExtremumSlip = i715[0]
  i714.m_ExtremumValue = i715[1]
  i714.m_AsymptoteSlip = i715[2]
  i714.m_AsymptoteValue = i715[3]
  i714.m_Stiffness = i715[4]
  return i714
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i717 = data
  i716.m_LowerAngle = i717[0]
  i716.m_UpperAngle = i717[1]
  return i716
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i719 = data
  i718.m_MotorSpeed = i719[0]
  i718.m_MaximumMotorTorque = i719[1]
  return i718
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i721 = data
  i720.m_DampingRatio = i721[0]
  i720.m_Frequency = i721[1]
  i720.m_Angle = i721[2]
  return i720
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i723 = data
  i722.m_LowerTranslation = i723[0]
  i722.m_UpperTranslation = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i724 = root || new pc.UnityMaterial()
  var i725 = data
  i724.name = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'shader')
  i724.renderQueue = i725[3]
  i724.enableInstancing = !!i725[4]
  var i727 = i725[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i727[i + 0]) );
  }
  i724.floatParameters = i726
  var i729 = i725[6]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i729[i + 0]) );
  }
  i724.colorParameters = i728
  var i731 = i725[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i731[i + 0]) );
  }
  i724.vectorParameters = i730
  var i733 = i725[8]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i733[i + 0]) );
  }
  i724.textureParameters = i732
  var i735 = i725[9]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i735[i + 0]) );
  }
  i724.materialFlags = i734
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Color(i743[1], i743[2], i743[3], i743[4])
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = new pc.Vec4( i747[1], i747[2], i747[3], i747[4] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'value')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i755 = data
  i754.name = i755[0]
  i754.enabled = !!i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i757 = data
  i756.name = i757[0]
  i756.width = i757[1]
  i756.height = i757[2]
  i756.mipmapCount = i757[3]
  i756.anisoLevel = i757[4]
  i756.filterMode = i757[5]
  i756.hdr = !!i757[6]
  i756.format = i757[7]
  i756.wrapMode = i757[8]
  i756.alphaIsTransparency = !!i757[9]
  i756.alphaSource = i757[10]
  i756.graphicsFormat = i757[11]
  i756.sRGBTexture = !!i757[12]
  i756.desiredColorSpace = i757[13]
  i756.wrapU = i757[14]
  i756.wrapV = i757[15]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i759 = data
  i758.position = new pc.Vec3( i759[0], i759[1], i759[2] )
  i758.scale = new pc.Vec3( i759[3], i759[4], i759[5] )
  i758.rotation = new pc.Quat(i759[6], i759[7], i759[8], i759[9])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i761 = data
  i760.center = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.size = new pc.Vec3( i761[3], i761[4], i761[5] )
  i760.enabled = !!i761[6]
  i760.isTrigger = !!i761[7]
  request.r(i761[8], i761[9], 0, i760, 'material')
  return i760
}

Deserializers["ItemController"] = function (request, data, root) {
  var i762 = root || request.c( 'ItemController' )
  var i763 = data
  i762.itemType = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'dropTarget')
  i762.dropDistanceThreshold = i763[3]
  i762.hideSpriteOnDrop = !!i763[4]
  i762.disableColliderOnComplete = !!i763[5]
  i762.isTool = !!i763[6]
  request.r(i763[7], i763[8], 0, i762, 'customDragBounds')
  i762.increaseSortingLayerOnDrag = !!i763[9]
  i762.isLocked = !!i763[10]
  i762.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i763[11], i762.onInteractWhileLocked)
  i762.onClick = request.d('UnityEngine.Events.UnityEvent', i763[12], i762.onClick)
  i762.onDrop = request.d('UnityEngine.Events.UnityEvent', i763[13], i762.onDrop)
  i762.onDragStart = request.d('UnityEngine.Events.UnityEvent', i763[14], i762.onDragStart)
  i762.onReturn = request.d('UnityEngine.Events.UnityEvent', i763[15], i762.onReturn)
  i762.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i763[16], i762.onAnimFinished)
  i762.isSequentialClick = !!i763[17]
  var i765 = i763[18]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('AnimObjectData', i765[i + 0]));
  }
  i762.animationObjects = i764
  i762.interactSound = i763[19]
  i762.sequenceLoopSound = i763[20]
  var i767 = i763[21]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(i767[i + 0]);
  }
  i762.fxSoundsStartAnim = i766
  var i769 = i763[22]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(i769[i + 0]);
  }
  i762.fxSoundsAfterAnim = i768
  return i762
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i771 = data
  i770.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i771[0], i770.m_PersistentCalls)
  return i770
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.Events.PersistentCall', i775[i + 0]));
  }
  i772.m_Calls = i774
  return i772
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_Target')
  i778.m_TargetAssemblyTypeName = i779[2]
  i778.m_MethodName = i779[3]
  i778.m_Mode = i779[4]
  i778.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i779[5], i778.m_Arguments)
  i778.m_CallState = i779[6]
  return i778
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_ObjectArgument')
  i780.m_ObjectArgumentAssemblyTypeName = i781[2]
  i780.m_IntArgument = i781[3]
  i780.m_FloatArgument = i781[4]
  i780.m_StringArgument = i781[5]
  i780.m_BoolArgument = !!i781[6]
  return i780
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i784 = root || request.c( 'AnimObjectData' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'animObj')
  i784.delayFromStart = i785[2]
  i784.durationToDeactivate = i785[3]
  i784.triggerName = i785[4]
  return i784
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i788 = root || request.c( 'ItemMovement' )
  var i789 = data
  return i788
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i790 = root || request.c( 'ItemGraphic' )
  var i791 = data
  var i793 = i791[0]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i790.spriteRenderers = i792
  i790.rotateOnDrag = !!i791[1]
  i790.dragRotationAngle = new pc.Vec3( i791[2], i791[3], i791[4] )
  i790.rotationDuration = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i797 = data
  i796.color = new pc.Color(i797[0], i797[1], i797[2], i797[3])
  request.r(i797[4], i797[5], 0, i796, 'sprite')
  i796.flipX = !!i797[6]
  i796.flipY = !!i797[7]
  i796.drawMode = i797[8]
  i796.size = new pc.Vec2( i797[9], i797[10] )
  i796.tileMode = i797[11]
  i796.adaptiveModeThreshold = i797[12]
  i796.maskInteraction = i797[13]
  i796.spriteSortPoint = i797[14]
  i796.enabled = !!i797[15]
  request.r(i797[16], i797[17], 0, i796, 'sharedMaterial')
  var i799 = i797[18]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sharedMaterials = i798
  i796.receiveShadows = !!i797[19]
  i796.shadowCastingMode = i797[20]
  i796.sortingLayerID = i797[21]
  i796.sortingOrder = i797[22]
  i796.lightmapIndex = i797[23]
  i796.lightmapSceneIndex = i797[24]
  i796.lightmapScaleOffset = new pc.Vec4( i797[25], i797[26], i797[27], i797[28] )
  i796.lightProbeUsage = i797[29]
  i796.reflectionProbeUsage = i797[30]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i803 = data
  i802.name = i803[0]
  i802.tagId = i803[1]
  i802.enabled = !!i803[2]
  i802.isStatic = !!i803[3]
  i802.layer = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i805 = data
  i804.name = i805[0]
  i804.index = i805[1]
  i804.startup = !!i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i807 = data
  i806.aspect = i807[0]
  i806.orthographic = !!i807[1]
  i806.orthographicSize = i807[2]
  i806.backgroundColor = new pc.Color(i807[3], i807[4], i807[5], i807[6])
  i806.nearClipPlane = i807[7]
  i806.farClipPlane = i807[8]
  i806.fieldOfView = i807[9]
  i806.depth = i807[10]
  i806.clearFlags = i807[11]
  i806.cullingMask = i807[12]
  i806.rect = i807[13]
  request.r(i807[14], i807[15], 0, i806, 'targetTexture')
  i806.usePhysicalProperties = !!i807[16]
  i806.focalLength = i807[17]
  i806.sensorSize = new pc.Vec2( i807[18], i807[19] )
  i806.lensShift = new pc.Vec2( i807[20], i807[21] )
  i806.gateFit = i807[22]
  i806.commandBufferCount = i807[23]
  i806.cameraType = i807[24]
  i806.enabled = !!i807[25]
  return i806
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i808 = root || request.c( 'AutoCameraFit' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'canvasBtn')
  request.r(i809[2], i809[3], 0, i808, 'targetArea')
  i808.paddingLandscape = i809[4]
  i808.paddingPortrait = i809[5]
  i808.extraPaddingSmallScreen = i809[6]
  i808.smallScreenThreshold = i809[7]
  i808.autoUpdateOnResize = !!i809[8]
  i808.adjustInEditMode = !!i809[9]
  return i808
}

Deserializers["InputManager"] = function (request, data, root) {
  var i810 = root || request.c( 'InputManager' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'mainCamera')
  i810.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i811[2] )
  i810.installLayer = UnityEngine.LayerMask.FromIntegerValue( i811[3] )
  i810.maxDistance = i811[4]
  i810.itemsToGotoStore = i811[5]
  i810.dragSortingOffset = i811[6]
  i810.useDragBounds = !!i811[7]
  request.r(i811[8], i811[9], 0, i810, 'dragBounds')
  return i810
}

Deserializers["TriggerOnAllActive"] = function (request, data, root) {
  var i812 = root || request.c( 'TriggerOnAllActive' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveEventGroup')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('ActiveEventGroup', i815[i + 0]));
  }
  i812.eventGroups = i814
  return i812
}

Deserializers["ActiveEventGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'ActiveEventGroup' )
  var i819 = data
  i818.groupName = i819[0]
  var i821 = i819[1]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i818.targetObjects = i820
  i818.delayTime = i819[2]
  i818.cancelIfAnyDeactivatedDuringDelay = !!i819[3]
  i818.onAllActive = request.d('UnityEngine.Events.UnityEvent', i819[4], i818.onAllActive)
  i818.isWaiting = !!i819[5]
  i818.hasTriggered = !!i819[6]
  return i818
}

Deserializers["HandHintManager"] = function (request, data, root) {
  var i824 = root || request.c( 'HandHintManager' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i824.hintItems = i826
  request.r(i825[1], i825[2], 0, i824, 'handHintObject')
  request.r(i825[3], i825[4], 0, i824, 'handAnimator')
  request.r(i825[5], i825[6], 0, i824, 'swipeArrow')
  i824.idleTimeToHint = i825[7]
  i824.dragAnimDuration = i825[8]
  request.r(i825[9], i825[10], 0, i824, 'startHintPos')
  request.r(i825[11], i825[12], 0, i824, 'endHintPos')
  return i824
}

Deserializers["GameManager"] = function (request, data, root) {
  var i830 = root || request.c( 'GameManager' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'winCanvas')
  request.r(i831[2], i831[3], 0, i830, 'loseCanvas')
  i830.timeLimit = i831[4]
  i830.onWinGame = request.d('UnityEngine.Events.UnityEvent', i831[5], i830.onWinGame)
  i830.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i831[6], i830.onLoseGame)
  i830.isGameEnded = !!i831[7]
  return i830
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i832 = root || request.c( 'Ply_SoundManager' )
  var i833 = data
  i832.fxAudio = request.d('FxAudio', i833[0], i832.fxAudio)
  request.r(i833[1], i833[2], 0, i832, 'bgm1')
  return i832
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i834 = root || request.c( 'FxAudio' )
  var i835 = data
  i834.None = request.d('SoundData', i835[0], i834.None)
  i834.PickableItemPickSound = request.d('SoundData', i835[1], i834.PickableItemPickSound)
  i834.PickableItemDropSound = request.d('SoundData', i835[2], i834.PickableItemDropSound)
  i834.WaterBottle = request.d('SoundData', i835[3], i834.WaterBottle)
  i834.WaterDrop = request.d('SoundData', i835[4], i834.WaterDrop)
  i834.GasClick = request.d('SoundData', i835[5], i834.GasClick)
  i834.Heart = request.d('SoundData', i835[6], i834.Heart)
  i834.Boil = request.d('SoundData', i835[7], i834.Boil)
  i834.Put2 = request.d('SoundData', i835[8], i834.Put2)
  i834.Knife = request.d('SoundData', i835[9], i834.Knife)
  i834.Cutting = request.d('SoundData', i835[10], i834.Cutting)
  i834.KnifeWing = request.d('SoundData', i835[11], i834.KnifeWing)
  i834.SaltDrop = request.d('SoundData', i835[12], i834.SaltDrop)
  i834.Cookin_Pan_Fryin_003_01 = request.d('SoundData', i835[13], i834.Cookin_Pan_Fryin_003_01)
  return i834
}

Deserializers["SoundData"] = function (request, data, root) {
  var i836 = root || request.c( 'SoundData' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'clip')
  i836.repeatCount = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'clip')
  request.r(i839[2], i839[3], 0, i838, 'outputAudioMixerGroup')
  i838.playOnAwake = !!i839[4]
  i838.loop = !!i839[5]
  i838.time = i839[6]
  i838.volume = i839[7]
  i838.pitch = i839[8]
  i838.enabled = !!i839[9]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i841 = data
  i840.pivot = new pc.Vec2( i841[0], i841[1] )
  i840.anchorMin = new pc.Vec2( i841[2], i841[3] )
  i840.anchorMax = new pc.Vec2( i841[4], i841[5] )
  i840.sizeDelta = new pc.Vec2( i841[6], i841[7] )
  i840.anchoredPosition3D = new pc.Vec3( i841[8], i841[9], i841[10] )
  i840.rotation = new pc.Quat(i841[11], i841[12], i841[13], i841[14])
  i840.scale = new pc.Vec3( i841[15], i841[16], i841[17] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i843 = data
  i842.planeDistance = i843[0]
  i842.referencePixelsPerUnit = i843[1]
  i842.isFallbackOverlay = !!i843[2]
  i842.renderMode = i843[3]
  i842.renderOrder = i843[4]
  i842.sortingLayerName = i843[5]
  i842.sortingOrder = i843[6]
  i842.scaleFactor = i843[7]
  request.r(i843[8], i843[9], 0, i842, 'worldCamera')
  i842.overrideSorting = !!i843[10]
  i842.pixelPerfect = !!i843[11]
  i842.targetDisplay = i843[12]
  i842.overridePixelPerfect = !!i843[13]
  i842.enabled = !!i843[14]
  return i842
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i845 = data
  i844.m_UiScaleMode = i845[0]
  i844.m_ReferencePixelsPerUnit = i845[1]
  i844.m_ScaleFactor = i845[2]
  i844.m_ReferenceResolution = new pc.Vec2( i845[3], i845[4] )
  i844.m_ScreenMatchMode = i845[5]
  i844.m_MatchWidthOrHeight = i845[6]
  i844.m_PhysicalUnit = i845[7]
  i844.m_FallbackScreenDPI = i845[8]
  i844.m_DefaultSpriteDPI = i845[9]
  i844.m_DynamicPixelsPerUnit = i845[10]
  i844.m_PresetInfoIsWorld = !!i845[11]
  return i844
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i847 = data
  i846.m_IgnoreReversedGraphics = !!i847[0]
  i846.m_BlockingObjects = i847[1]
  i846.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i847[2] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i849 = data
  i848.cullTransparentMesh = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Image' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Sprite')
  i850.m_Type = i851[2]
  i850.m_PreserveAspect = !!i851[3]
  i850.m_FillCenter = !!i851[4]
  i850.m_FillMethod = i851[5]
  i850.m_FillAmount = i851[6]
  i850.m_FillClockwise = !!i851[7]
  i850.m_FillOrigin = i851[8]
  i850.m_UseSpriteMesh = !!i851[9]
  i850.m_PixelsPerUnitMultiplier = i851[10]
  request.r(i851[11], i851[12], 0, i850, 'm_Material')
  i850.m_Maskable = !!i851[13]
  i850.m_Color = new pc.Color(i851[14], i851[15], i851[16], i851[17])
  i850.m_RaycastTarget = !!i851[18]
  i850.m_RaycastPadding = new pc.Vec4( i851[19], i851[20], i851[21], i851[22] )
  return i850
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i853 = data
  i852.m_hasFontAssetChanged = !!i853[0]
  request.r(i853[1], i853[2], 0, i852, 'm_baseMaterial')
  i852.m_maskOffset = new pc.Vec4( i853[3], i853[4], i853[5], i853[6] )
  i852.m_text = i853[7]
  i852.m_isRightToLeft = !!i853[8]
  request.r(i853[9], i853[10], 0, i852, 'm_fontAsset')
  request.r(i853[11], i853[12], 0, i852, 'm_sharedMaterial')
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.m_fontSharedMaterials = i854
  request.r(i853[14], i853[15], 0, i852, 'm_fontMaterial')
  var i857 = i853[16]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i852.m_fontMaterials = i856
  i852.m_fontColor32 = UnityEngine.Color32.ConstructColor(i853[17], i853[18], i853[19], i853[20])
  i852.m_fontColor = new pc.Color(i853[21], i853[22], i853[23], i853[24])
  i852.m_enableVertexGradient = !!i853[25]
  i852.m_colorMode = i853[26]
  i852.m_fontColorGradient = request.d('TMPro.VertexGradient', i853[27], i852.m_fontColorGradient)
  request.r(i853[28], i853[29], 0, i852, 'm_fontColorGradientPreset')
  request.r(i853[30], i853[31], 0, i852, 'm_spriteAsset')
  i852.m_tintAllSprites = !!i853[32]
  request.r(i853[33], i853[34], 0, i852, 'm_StyleSheet')
  i852.m_TextStyleHashCode = i853[35]
  i852.m_overrideHtmlColors = !!i853[36]
  i852.m_faceColor = UnityEngine.Color32.ConstructColor(i853[37], i853[38], i853[39], i853[40])
  i852.m_fontSize = i853[41]
  i852.m_fontSizeBase = i853[42]
  i852.m_fontWeight = i853[43]
  i852.m_enableAutoSizing = !!i853[44]
  i852.m_fontSizeMin = i853[45]
  i852.m_fontSizeMax = i853[46]
  i852.m_fontStyle = i853[47]
  i852.m_HorizontalAlignment = i853[48]
  i852.m_VerticalAlignment = i853[49]
  i852.m_textAlignment = i853[50]
  i852.m_characterSpacing = i853[51]
  i852.m_wordSpacing = i853[52]
  i852.m_lineSpacing = i853[53]
  i852.m_lineSpacingMax = i853[54]
  i852.m_paragraphSpacing = i853[55]
  i852.m_charWidthMaxAdj = i853[56]
  i852.m_TextWrappingMode = i853[57]
  i852.m_wordWrappingRatios = i853[58]
  i852.m_overflowMode = i853[59]
  request.r(i853[60], i853[61], 0, i852, 'm_linkedTextComponent')
  request.r(i853[62], i853[63], 0, i852, 'parentLinkedComponent')
  i852.m_enableKerning = !!i853[64]
  var i859 = i853[65]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(i859[i + 0]);
  }
  i852.m_ActiveFontFeatures = i858
  i852.m_enableExtraPadding = !!i853[66]
  i852.checkPaddingRequired = !!i853[67]
  i852.m_isRichText = !!i853[68]
  i852.m_parseCtrlCharacters = !!i853[69]
  i852.m_isOrthographic = !!i853[70]
  i852.m_isCullingEnabled = !!i853[71]
  i852.m_horizontalMapping = i853[72]
  i852.m_verticalMapping = i853[73]
  i852.m_uvLineOffset = i853[74]
  i852.m_geometrySortingOrder = i853[75]
  i852.m_IsTextObjectScaleStatic = !!i853[76]
  i852.m_VertexBufferAutoSizeReduction = !!i853[77]
  i852.m_useMaxVisibleDescender = !!i853[78]
  i852.m_pageToDisplay = i853[79]
  i852.m_margin = new pc.Vec4( i853[80], i853[81], i853[82], i853[83] )
  i852.m_isUsingLegacyAnimationComponent = !!i853[84]
  i852.m_isVolumetricText = !!i853[85]
  request.r(i853[86], i853[87], 0, i852, 'm_Material')
  i852.m_EmojiFallbackSupport = !!i853[88]
  i852.m_Maskable = !!i853[89]
  i852.m_Color = new pc.Color(i853[90], i853[91], i853[92], i853[93])
  i852.m_RaycastTarget = !!i853[94]
  i852.m_RaycastPadding = new pc.Vec4( i853[95], i853[96], i853[97], i853[98] )
  return i852
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.VertexGradient' )
  var i861 = data
  i860.topLeft = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  i860.topRight = new pc.Color(i861[4], i861[5], i861[6], i861[7])
  i860.bottomLeft = new pc.Color(i861[8], i861[9], i861[10], i861[11])
  i860.bottomRight = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.radius = i865[3]
  i864.enabled = !!i865[4]
  i864.isTrigger = !!i865[5]
  request.r(i865[6], i865[7], 0, i864, 'material')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'animatorController')
  request.r(i867[2], i867[3], 0, i866, 'avatar')
  i866.updateMode = i867[4]
  i866.hasTransformHierarchy = !!i867[5]
  i866.applyRootMotion = !!i867[6]
  var i869 = i867[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.humanBones = i868
  i866.enabled = !!i867[8]
  return i866
}

Deserializers["EventAnim"] = function (request, data, root) {
  var i872 = root || request.c( 'EventAnim' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('UnityEngine.Events.UnityEvent', i875[i + 0]));
  }
  i872.animEvents = i874
  var i877 = i873[1]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('EventAnim+MoveSequence')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('EventAnim+MoveSequence', i877[i + 0]));
  }
  i872.moveSequences = i876
  return i872
}

Deserializers["EventAnim+MoveSequence"] = function (request, data, root) {
  var i882 = root || request.c( 'EventAnim+MoveSequence' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i882.itemsToMove = i884
  var i887 = i883[1]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i882.targetPositions = i886
  i882.moveDuration = i883[2]
  i882.delayBetweenItems = i883[3]
  i882.isJump = !!i883[4]
  i882.jumpPower = i883[5]
  i882.changeSortingOrder = !!i883[6]
  i882.targetSortingOrder = i883[7]
  var i889 = i883[8]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i882.spritesToHideOnComplete = i888
  var i891 = i883[9]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i882.objectsToEnableOnComplete = i890
  return i882
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i894 = root || request.c( 'PlaySound' )
  var i895 = data
  i894.sound1 = i895[0]
  i894.sound2 = i895[1]
  i894.sound3 = i895[2]
  return i894
}

Deserializers["TongItem"] = function (request, data, root) {
  var i896 = root || request.c( 'TongItem' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'holdPoint')
  i896.pickableLayer = UnityEngine.LayerMask.FromIntegerValue( i897[2] )
  i896.basketLayer = UnityEngine.LayerMask.FromIntegerValue( i897[3] )
  i896.detectRadius = i897[4]
  i896.randomRotateRange = new pc.Vec2( i897[5], i897[6] )
  i896.flyToTongDuration = i897[7]
  i896.flyToBasketDuration = i897[8]
  i896.jumpPower = i897[9]
  i896.finalSortingOrder = i897[10]
  i896.pickSound = i897[11]
  i896.dropIntoBasketSound = i897[12]
  var i899 = i897[13]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i896.requiredPickables = i898
  i896.itemType = i897[14]
  request.r(i897[15], i897[16], 0, i896, 'dropTarget')
  i896.dropDistanceThreshold = i897[17]
  i896.hideSpriteOnDrop = !!i897[18]
  i896.disableColliderOnComplete = !!i897[19]
  i896.isTool = !!i897[20]
  request.r(i897[21], i897[22], 0, i896, 'customDragBounds')
  i896.increaseSortingLayerOnDrag = !!i897[23]
  i896.isLocked = !!i897[24]
  i896.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i897[25], i896.onInteractWhileLocked)
  i896.onClick = request.d('UnityEngine.Events.UnityEvent', i897[26], i896.onClick)
  i896.onDrop = request.d('UnityEngine.Events.UnityEvent', i897[27], i896.onDrop)
  i896.onDragStart = request.d('UnityEngine.Events.UnityEvent', i897[28], i896.onDragStart)
  i896.onReturn = request.d('UnityEngine.Events.UnityEvent', i897[29], i896.onReturn)
  i896.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i897[30], i896.onAnimFinished)
  i896.isSequentialClick = !!i897[31]
  var i901 = i897[32]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('AnimObjectData', i901[i + 0]));
  }
  i896.animationObjects = i900
  i896.interactSound = i897[33]
  i896.sequenceLoopSound = i897[34]
  var i903 = i897[35]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(i903[i + 0]);
  }
  i896.fxSoundsStartAnim = i902
  var i905 = i897[36]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(i905[i + 0]);
  }
  i896.fxSoundsAfterAnim = i904
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i907 = data
  i906.frontSortingLayerID = i907[0]
  i906.frontSortingOrder = i907[1]
  i906.backSortingLayerID = i907[2]
  i906.backSortingOrder = i907[3]
  i906.alphaCutoff = i907[4]
  request.r(i907[5], i907[6], 0, i906, 'sprite')
  i906.tileMode = i907[7]
  i906.isCustomRangeActive = !!i907[8]
  i906.spriteSortPoint = i907[9]
  i906.enabled = !!i907[10]
  request.r(i907[11], i907[12], 0, i906, 'sharedMaterial')
  var i909 = i907[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.sharedMaterials = i908
  i906.receiveShadows = !!i907[14]
  i906.shadowCastingMode = i907[15]
  i906.sortingLayerID = i907[16]
  i906.sortingOrder = i907[17]
  i906.lightmapIndex = i907[18]
  i906.lightmapSceneIndex = i907[19]
  i906.lightmapScaleOffset = new pc.Vec4( i907[20], i907[21], i907[22], i907[23] )
  i906.lightProbeUsage = i907[24]
  i906.reflectionProbeUsage = i907[25]
  return i906
}

Deserializers["BasketAnim"] = function (request, data, root) {
  var i910 = root || request.c( 'BasketAnim' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'activeObject')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i913 = data
  i912.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i913[0], i912.main)
  i912.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i913[1], i912.colorBySpeed)
  i912.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i913[2], i912.colorOverLifetime)
  i912.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i913[3], i912.emission)
  i912.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i913[4], i912.rotationBySpeed)
  i912.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i913[5], i912.rotationOverLifetime)
  i912.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i913[6], i912.shape)
  i912.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i913[7], i912.sizeBySpeed)
  i912.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i913[8], i912.sizeOverLifetime)
  i912.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i913[9], i912.textureSheetAnimation)
  i912.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i913[10], i912.velocityOverLifetime)
  i912.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i913[11], i912.noise)
  i912.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i913[12], i912.inheritVelocity)
  i912.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i913[13], i912.forceOverLifetime)
  i912.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i913[14], i912.limitVelocityOverLifetime)
  i912.useAutoRandomSeed = !!i913[15]
  i912.randomSeed = i913[16]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemMain()
  var i915 = data
  i914.duration = i915[0]
  i914.loop = !!i915[1]
  i914.prewarm = !!i915[2]
  i914.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.startDelay)
  i914.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[4], i914.startLifetime)
  i914.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[5], i914.startSpeed)
  i914.startSize3D = !!i915[6]
  i914.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[7], i914.startSizeX)
  i914.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[8], i914.startSizeY)
  i914.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[9], i914.startSizeZ)
  i914.startRotation3D = !!i915[10]
  i914.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[11], i914.startRotationX)
  i914.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[12], i914.startRotationY)
  i914.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[13], i914.startRotationZ)
  i914.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i915[14], i914.startColor)
  i914.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[15], i914.gravityModifier)
  i914.simulationSpace = i915[16]
  request.r(i915[17], i915[18], 0, i914, 'customSimulationSpace')
  i914.simulationSpeed = i915[19]
  i914.useUnscaledTime = !!i915[20]
  i914.scalingMode = i915[21]
  i914.playOnAwake = !!i915[22]
  i914.maxParticles = i915[23]
  i914.emitterVelocityMode = i915[24]
  i914.stopAction = i915[25]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i916 = root || new pc.MinMaxCurve()
  var i917 = data
  i916.mode = i917[0]
  i916.curveMin = new pc.AnimationCurve( { keys_flow: i917[1] } )
  i916.curveMax = new pc.AnimationCurve( { keys_flow: i917[2] } )
  i916.curveMultiplier = i917[3]
  i916.constantMin = i917[4]
  i916.constantMax = i917[5]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i918 = root || new pc.MinMaxGradient()
  var i919 = data
  i918.mode = i919[0]
  i918.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i919[1], i918.gradientMin)
  i918.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i919[2], i918.gradientMax)
  i918.colorMin = new pc.Color(i919[3], i919[4], i919[5], i919[6])
  i918.colorMax = new pc.Color(i919[7], i919[8], i919[9], i919[10])
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i921 = data
  i920.mode = i921[0]
  var i923 = i921[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i923[i + 0]) );
  }
  i920.colorKeys = i922
  var i925 = i921[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i925[i + 0]) );
  }
  i920.alphaKeys = i924
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemColorBySpeed()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i927[1], i926.color)
  i926.range = new pc.Vec2( i927[2], i927[3] )
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i931 = data
  i930.color = new pc.Color(i931[0], i931[1], i931[2], i931[3])
  i930.time = i931[4]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i935 = data
  i934.alpha = i935[0]
  i934.time = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemColorOverLifetime()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i937[1], i936.color)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemEmitter()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[1], i938.rateOverTime)
  i938.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.rateOverDistance)
  var i941 = i939[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i941[i + 0]) );
  }
  i938.bursts = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemBurst()
  var i945 = data
  i944.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[0], i944.count)
  i944.cycleCount = i945[1]
  i944.minCount = i945[2]
  i944.maxCount = i945[3]
  i944.repeatInterval = i945[4]
  i944.time = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemRotationBySpeed()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.x)
  i946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.y)
  i946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.z)
  i946.separateAxes = !!i947[4]
  i946.range = new pc.Vec2( i947[5], i947[6] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemRotationOverLifetime()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[1], i948.x)
  i948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.y)
  i948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[3], i948.z)
  i948.separateAxes = !!i949[4]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemShape()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.shapeType = i951[1]
  i950.randomDirectionAmount = i951[2]
  i950.sphericalDirectionAmount = i951[3]
  i950.randomPositionAmount = i951[4]
  i950.alignToDirection = !!i951[5]
  i950.radius = i951[6]
  i950.radiusMode = i951[7]
  i950.radiusSpread = i951[8]
  i950.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[9], i950.radiusSpeed)
  i950.radiusThickness = i951[10]
  i950.angle = i951[11]
  i950.length = i951[12]
  i950.boxThickness = new pc.Vec3( i951[13], i951[14], i951[15] )
  i950.meshShapeType = i951[16]
  request.r(i951[17], i951[18], 0, i950, 'mesh')
  request.r(i951[19], i951[20], 0, i950, 'meshRenderer')
  request.r(i951[21], i951[22], 0, i950, 'skinnedMeshRenderer')
  i950.useMeshMaterialIndex = !!i951[23]
  i950.meshMaterialIndex = i951[24]
  i950.useMeshColors = !!i951[25]
  i950.normalOffset = i951[26]
  i950.arc = i951[27]
  i950.arcMode = i951[28]
  i950.arcSpread = i951[29]
  i950.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[30], i950.arcSpeed)
  i950.donutRadius = i951[31]
  i950.position = new pc.Vec3( i951[32], i951[33], i951[34] )
  i950.rotation = new pc.Vec3( i951[35], i951[36], i951[37] )
  i950.scale = new pc.Vec3( i951[38], i951[39], i951[40] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemSizeBySpeed()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.separateAxes = !!i953[4]
  i952.range = new pc.Vec2( i953[5], i953[6] )
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemSizeOverLifetime()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[1], i954.x)
  i954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[2], i954.y)
  i954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[3], i954.z)
  i954.separateAxes = !!i955[4]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.mode = i957[1]
  i956.animation = i957[2]
  i956.numTilesX = i957[3]
  i956.numTilesY = i957[4]
  i956.useRandomRow = !!i957[5]
  i956.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[6], i956.frameOverTime)
  i956.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[7], i956.startFrame)
  i956.cycleCount = i957[8]
  i956.rowIndex = i957[9]
  i956.flipU = i957[10]
  i956.flipV = i957[11]
  i956.spriteCount = i957[12]
  var i959 = i957[13]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.sprites = i958
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[4], i962.radial)
  i962.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[5], i962.speedModifier)
  i962.space = i963[6]
  i962.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[7], i962.orbitalX)
  i962.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[8], i962.orbitalY)
  i962.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[9], i962.orbitalZ)
  i962.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[10], i962.orbitalOffsetX)
  i962.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[11], i962.orbitalOffsetY)
  i962.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[12], i962.orbitalOffsetZ)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemNoise()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.separateAxes = !!i965[1]
  i964.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.strengthX)
  i964.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.strengthY)
  i964.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[4], i964.strengthZ)
  i964.frequency = i965[5]
  i964.damping = !!i965[6]
  i964.octaveCount = i965[7]
  i964.octaveMultiplier = i965[8]
  i964.octaveScale = i965[9]
  i964.quality = i965[10]
  i964.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[11], i964.scrollSpeed)
  i964.scrollSpeedMultiplier = i965[12]
  i964.remapEnabled = !!i965[13]
  i964.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[14], i964.remapX)
  i964.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[15], i964.remapY)
  i964.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[16], i964.remapZ)
  i964.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[17], i964.positionAmount)
  i964.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[18], i964.rotationAmount)
  i964.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[19], i964.sizeAmount)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemInheritVelocity()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.mode = i967[1]
  i966.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.curve)
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemForceOverLifetime()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[1], i968.x)
  i968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.y)
  i968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.z)
  i968.space = i969[4]
  i968.randomized = !!i969[5]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[1], i970.limit)
  i970.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.limitX)
  i970.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[3], i970.limitY)
  i970.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[4], i970.limitZ)
  i970.dampen = i971[5]
  i970.separateAxes = !!i971[6]
  i970.space = i971[7]
  i970.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[8], i970.drag)
  i970.multiplyDragByParticleSize = !!i971[9]
  i970.multiplyDragByParticleVelocity = !!i971[10]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'mesh')
  i972.meshCount = i973[2]
  i972.activeVertexStreamsCount = i973[3]
  i972.alignment = i973[4]
  i972.renderMode = i973[5]
  i972.sortMode = i973[6]
  i972.lengthScale = i973[7]
  i972.velocityScale = i973[8]
  i972.cameraVelocityScale = i973[9]
  i972.normalDirection = i973[10]
  i972.sortingFudge = i973[11]
  i972.minParticleSize = i973[12]
  i972.maxParticleSize = i973[13]
  i972.pivot = new pc.Vec3( i973[14], i973[15], i973[16] )
  request.r(i973[17], i973[18], 0, i972, 'trailMaterial')
  i972.applyActiveColorSpace = !!i973[19]
  i972.enabled = !!i973[20]
  request.r(i973[21], i973[22], 0, i972, 'sharedMaterial')
  var i975 = i973[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.sharedMaterials = i974
  i972.receiveShadows = !!i973[24]
  i972.shadowCastingMode = i973[25]
  i972.sortingLayerID = i973[26]
  i972.sortingOrder = i973[27]
  i972.lightmapIndex = i973[28]
  i972.lightmapSceneIndex = i973[29]
  i972.lightmapScaleOffset = new pc.Vec4( i973[30], i973[31], i973[32], i973[33] )
  i972.lightProbeUsage = i973[34]
  i972.reflectionProbeUsage = i973[35]
  return i972
}

Deserializers["CuttingSetup"] = function (request, data, root) {
  var i976 = root || request.c( 'CuttingSetup' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'knifeProcessor')
  i976.requiredClicks = i977[2]
  request.r(i977[3], i977[4], 0, i976, 'maskTransform')
  i976.maskStartPos = new pc.Vec3( i977[5], i977[6], i977[7] )
  i976.maskEndPos = new pc.Vec3( i977[8], i977[9], i977[10] )
  i976.knifeStartPos = new pc.Vec3( i977[11], i977[12], i977[13] )
  i976.knifeEndPos = new pc.Vec3( i977[14], i977[15], i977[16] )
  i976.onCuttingCompleted = request.d('UnityEngine.Events.UnityEvent', i977[17], i976.onCuttingCompleted)
  return i976
}

Deserializers["AutoProcessItem"] = function (request, data, root) {
  var i978 = root || request.c( 'AutoProcessItem' )
  var i979 = data
  i978.processTime = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'toolToActivate')
  i978.onProcessStarted = request.d('UnityEngine.Events.UnityEvent', i979[3], i978.onProcessStarted)
  i978.onProcessCompleted = request.d('UnityEngine.Events.UnityEvent', i979[4], i978.onProcessCompleted)
  return i978
}

Deserializers["UnlockCondition"] = function (request, data, root) {
  var i980 = root || request.c( 'UnlockCondition' )
  var i981 = data
  i980.conditionsToMeet = i981[0]
  i980.delayBeforeUnlock = i981[1]
  var i983 = i981[2]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i980.collidersToEnable = i982
  var i985 = i981[3]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 1, i984, '')
  }
  i980.objectsToEnable = i984
  i980.onUnlocked = request.d('UnityEngine.Events.UnityEvent', i981[4], i980.onUnlocked)
  return i980
}

Deserializers["SwipeToProcessItem"] = function (request, data, root) {
  var i988 = root || request.c( 'SwipeToProcessItem' )
  var i989 = data
  i988.swipeDistanceRequired = i989[0]
  i988.requiredFlips = i989[1]
  i988.onSingleFlip = request.d('UnityEngine.Events.UnityEvent', i989[2], i988.onSingleFlip)
  i988.onCompleted = request.d('UnityEngine.Events.UnityEvent', i989[3], i988.onCompleted)
  i988.onCompletedAndReleased = request.d('UnityEngine.Events.UnityEvent', i989[4], i988.onCompletedAndReleased)
  i988.onBeginSwipe = request.d('UnityEngine.Events.UnityEvent', i989[5], i988.onBeginSwipe)
  i988.onEndSwipe = request.d('UnityEngine.Events.UnityEvent', i989[6], i988.onEndSwipe)
  request.r(i989[7], i989[8], 0, i988, 'sideAObject')
  request.r(i989[9], i989[10], 0, i988, 'sideBObject')
  request.r(i989[11], i989[12], 0, i988, 'progressBarTransform')
  i988.isVerticalBar = !!i989[13]
  return i988
}

Deserializers["DropTargetSlot"] = function (request, data, root) {
  var i990 = root || request.c( 'DropTargetSlot' )
  var i991 = data
  i990.isOccupied = !!i991[0]
  request.r(i991[1], i991[2], 0, i990, 'currentItem')
  return i990
}

Deserializers["ClickToProcessItem"] = function (request, data, root) {
  var i992 = root || request.c( 'ClickToProcessItem' )
  var i993 = data
  i992.requiredClicks = i993[0]
  i992.onSingleClick = request.d('UnityEngine.Events.UnityEvent', i993[1], i992.onSingleClick)
  i992.onCompleted = request.d('UnityEngine.Events.UnityEvent', i993[2], i992.onCompleted)
  request.r(i993[3], i993[4], 0, i992, 'maskTransform')
  i992.maskStartPos = new pc.Vec3( i993[5], i993[6], i993[7] )
  i992.maskEndPos = new pc.Vec3( i993[8], i993[9], i993[10] )
  request.r(i993[11], i993[12], 0, i992, 'moveObject')
  i992.moveStartPos = new pc.Vec3( i993[13], i993[14], i993[15] )
  i992.moveEndPos = new pc.Vec3( i993[16], i993[17], i993[18] )
  return i992
}

Deserializers["DragBetweenBoundsToProcess"] = function (request, data, root) {
  var i994 = root || request.c( 'DragBetweenBoundsToProcess' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'leftPoint')
  request.r(i995[2], i995[3], 0, i994, 'rightPoint')
  i994.hitThreshold = i995[4]
  i994.requiredHits = i995[5]
  i994.onHitBound = request.d('UnityEngine.Events.UnityEvent', i995[6], i994.onHitBound)
  i994.onCompleted = request.d('UnityEngine.Events.UnityEvent', i995[7], i994.onCompleted)
  request.r(i995[8], i995[9], 0, i994, 'progressBarTransform')
  i994.isVerticalBar = !!i995[10]
  request.r(i995[11], i995[12], 0, i994, 'toggleObjectA')
  request.r(i995[13], i995[14], 0, i994, 'toggleObjectB')
  return i994
}

Deserializers["ItemSpawner"] = function (request, data, root) {
  var i996 = root || request.c( 'ItemSpawner' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'prefabToSpawn')
  i996.maxSpawnCount = i997[2]
  i996.onSpawn = request.d('UnityEngine.Events.UnityEvent', i997[3], i996.onSpawn)
  request.r(i997[4], i997[5], 0, i996, 'dropTargetForSpawnedItem')
  i996.autoStartDrag = !!i997[6]
  var i999 = i997[7]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i996.objectsToEnableOnSuccess = i998
  i996.onSpawnedItemSuccess = request.d('UnityEngine.Events.UnityEvent', i997[8], i996.onSpawnedItemSuccess)
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'additionalVertexStreams')
  i1000.enabled = !!i1001[2]
  request.r(i1001[3], i1001[4], 0, i1000, 'sharedMaterial')
  var i1003 = i1001[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.sharedMaterials = i1002
  i1000.receiveShadows = !!i1001[6]
  i1000.shadowCastingMode = i1001[7]
  i1000.sortingLayerID = i1001[8]
  i1000.sortingOrder = i1001[9]
  i1000.lightmapIndex = i1001[10]
  i1000.lightmapSceneIndex = i1001[11]
  i1000.lightmapScaleOffset = new pc.Vec4( i1001[12], i1001[13], i1001[14], i1001[15] )
  i1000.lightProbeUsage = i1001[16]
  i1000.reflectionProbeUsage = i1001[17]
  return i1000
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TextMeshPro' )
  var i1005 = data
  i1004._SortingLayer = i1005[0]
  i1004._SortingLayerID = i1005[1]
  i1004._SortingOrder = i1005[2]
  i1004.m_hasFontAssetChanged = !!i1005[3]
  request.r(i1005[4], i1005[5], 0, i1004, 'm_renderer')
  i1004.m_maskType = i1005[6]
  i1004.m_text = i1005[7]
  i1004.m_isRightToLeft = !!i1005[8]
  request.r(i1005[9], i1005[10], 0, i1004, 'm_fontAsset')
  request.r(i1005[11], i1005[12], 0, i1004, 'm_sharedMaterial')
  var i1007 = i1005[13]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.m_fontSharedMaterials = i1006
  request.r(i1005[14], i1005[15], 0, i1004, 'm_fontMaterial')
  var i1009 = i1005[16]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1004.m_fontMaterials = i1008
  i1004.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1005[17], i1005[18], i1005[19], i1005[20])
  i1004.m_fontColor = new pc.Color(i1005[21], i1005[22], i1005[23], i1005[24])
  i1004.m_enableVertexGradient = !!i1005[25]
  i1004.m_colorMode = i1005[26]
  i1004.m_fontColorGradient = request.d('TMPro.VertexGradient', i1005[27], i1004.m_fontColorGradient)
  request.r(i1005[28], i1005[29], 0, i1004, 'm_fontColorGradientPreset')
  request.r(i1005[30], i1005[31], 0, i1004, 'm_spriteAsset')
  i1004.m_tintAllSprites = !!i1005[32]
  request.r(i1005[33], i1005[34], 0, i1004, 'm_StyleSheet')
  i1004.m_TextStyleHashCode = i1005[35]
  i1004.m_overrideHtmlColors = !!i1005[36]
  i1004.m_faceColor = UnityEngine.Color32.ConstructColor(i1005[37], i1005[38], i1005[39], i1005[40])
  i1004.m_fontSize = i1005[41]
  i1004.m_fontSizeBase = i1005[42]
  i1004.m_fontWeight = i1005[43]
  i1004.m_enableAutoSizing = !!i1005[44]
  i1004.m_fontSizeMin = i1005[45]
  i1004.m_fontSizeMax = i1005[46]
  i1004.m_fontStyle = i1005[47]
  i1004.m_HorizontalAlignment = i1005[48]
  i1004.m_VerticalAlignment = i1005[49]
  i1004.m_textAlignment = i1005[50]
  i1004.m_characterSpacing = i1005[51]
  i1004.m_wordSpacing = i1005[52]
  i1004.m_lineSpacing = i1005[53]
  i1004.m_lineSpacingMax = i1005[54]
  i1004.m_paragraphSpacing = i1005[55]
  i1004.m_charWidthMaxAdj = i1005[56]
  i1004.m_TextWrappingMode = i1005[57]
  i1004.m_wordWrappingRatios = i1005[58]
  i1004.m_overflowMode = i1005[59]
  request.r(i1005[60], i1005[61], 0, i1004, 'm_linkedTextComponent')
  request.r(i1005[62], i1005[63], 0, i1004, 'parentLinkedComponent')
  i1004.m_enableKerning = !!i1005[64]
  var i1011 = i1005[65]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(i1011[i + 0]);
  }
  i1004.m_ActiveFontFeatures = i1010
  i1004.m_enableExtraPadding = !!i1005[66]
  i1004.checkPaddingRequired = !!i1005[67]
  i1004.m_isRichText = !!i1005[68]
  i1004.m_parseCtrlCharacters = !!i1005[69]
  i1004.m_isOrthographic = !!i1005[70]
  i1004.m_isCullingEnabled = !!i1005[71]
  i1004.m_horizontalMapping = i1005[72]
  i1004.m_verticalMapping = i1005[73]
  i1004.m_uvLineOffset = i1005[74]
  i1004.m_geometrySortingOrder = i1005[75]
  i1004.m_IsTextObjectScaleStatic = !!i1005[76]
  i1004.m_VertexBufferAutoSizeReduction = !!i1005[77]
  i1004.m_useMaxVisibleDescender = !!i1005[78]
  i1004.m_pageToDisplay = i1005[79]
  i1004.m_margin = new pc.Vec4( i1005[80], i1005[81], i1005[82], i1005[83] )
  i1004.m_isUsingLegacyAnimationComponent = !!i1005[84]
  i1004.m_isVolumetricText = !!i1005[85]
  request.r(i1005[86], i1005[87], 0, i1004, 'm_Material')
  i1004.m_EmojiFallbackSupport = !!i1005[88]
  i1004.m_Maskable = !!i1005[89]
  i1004.m_Color = new pc.Color(i1005[90], i1005[91], i1005[92], i1005[93])
  i1004.m_RaycastTarget = !!i1005[94]
  i1004.m_RaycastPadding = new pc.Vec4( i1005[95], i1005[96], i1005[97], i1005[98] )
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'sharedMesh')
  return i1012
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_FirstSelected')
  i1014.m_sendNavigationEvents = !!i1015[2]
  i1014.m_DragThreshold = i1015[3]
  return i1014
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1017 = data
  i1016.m_HorizontalAxis = i1017[0]
  i1016.m_VerticalAxis = i1017[1]
  i1016.m_SubmitButton = i1017[2]
  i1016.m_CancelButton = i1017[3]
  i1016.m_InputActionsPerSecond = i1017[4]
  i1016.m_RepeatDelay = i1017[5]
  i1016.m_ForceModuleActive = !!i1017[6]
  i1016.m_SendPointerHoverToParent = !!i1017[7]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1019 = data
  i1018.ambientIntensity = i1019[0]
  i1018.reflectionIntensity = i1019[1]
  i1018.ambientMode = i1019[2]
  i1018.ambientLight = new pc.Color(i1019[3], i1019[4], i1019[5], i1019[6])
  i1018.ambientSkyColor = new pc.Color(i1019[7], i1019[8], i1019[9], i1019[10])
  i1018.ambientGroundColor = new pc.Color(i1019[11], i1019[12], i1019[13], i1019[14])
  i1018.ambientEquatorColor = new pc.Color(i1019[15], i1019[16], i1019[17], i1019[18])
  i1018.fogColor = new pc.Color(i1019[19], i1019[20], i1019[21], i1019[22])
  i1018.fogEndDistance = i1019[23]
  i1018.fogStartDistance = i1019[24]
  i1018.fogDensity = i1019[25]
  i1018.fog = !!i1019[26]
  request.r(i1019[27], i1019[28], 0, i1018, 'skybox')
  i1018.fogMode = i1019[29]
  var i1021 = i1019[30]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1021[i + 0]) );
  }
  i1018.lightmaps = i1020
  i1018.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1019[31], i1018.lightProbes)
  i1018.lightmapsMode = i1019[32]
  i1018.mixedBakeMode = i1019[33]
  i1018.environmentLightingMode = i1019[34]
  i1018.ambientProbe = new pc.SphericalHarmonicsL2(i1019[35])
  i1018.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1019[36])
  i1018.useReferenceAmbientProbe = !!i1019[37]
  request.r(i1019[38], i1019[39], 0, i1018, 'customReflection')
  request.r(i1019[40], i1019[41], 0, i1018, 'defaultReflection')
  i1018.defaultReflectionMode = i1019[42]
  i1018.defaultReflectionResolution = i1019[43]
  i1018.sunLightObjectId = i1019[44]
  i1018.pixelLightCount = i1019[45]
  i1018.defaultReflectionHDR = !!i1019[46]
  i1018.hasLightDataAsset = !!i1019[47]
  i1018.hasManualGenerate = !!i1019[48]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'lightmapColor')
  request.r(i1025[2], i1025[3], 0, i1024, 'lightmapDirection')
  request.r(i1025[4], i1025[5], 0, i1024, 'shadowMask')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1026 = root || new UnityEngine.LightProbes()
  var i1027 = data
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1037[i + 0]));
  }
  i1034.ShaderCompilationErrors = i1036
  i1034.name = i1035[1]
  i1034.guid = i1035[2]
  var i1039 = i1035[3]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.shaderDefinedKeywords = i1038
  var i1041 = i1035[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1041[i + 0]) );
  }
  i1034.passes = i1040
  var i1043 = i1035[5]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1043[i + 0]) );
  }
  i1034.usePasses = i1042
  var i1045 = i1035[6]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1045[i + 0]) );
  }
  i1034.defaultParameterValues = i1044
  request.r(i1035[7], i1035[8], 0, i1034, 'unityFallbackShader')
  i1034.readDepth = !!i1035[9]
  i1034.hasDepthOnlyPass = !!i1035[10]
  i1034.isCreatedByShaderGraph = !!i1035[11]
  i1034.disableBatching = !!i1035[12]
  i1034.compiled = !!i1035[13]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1049 = data
  i1048.shaderName = i1049[0]
  i1048.errorMessage = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1054 = root || new pc.UnityShaderPass()
  var i1055 = data
  i1054.id = i1055[0]
  i1054.subShaderIndex = i1055[1]
  i1054.name = i1055[2]
  i1054.passType = i1055[3]
  i1054.grabPassTextureName = i1055[4]
  i1054.usePass = !!i1055[5]
  i1054.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[6], i1054.zTest)
  i1054.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[7], i1054.zWrite)
  i1054.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[8], i1054.culling)
  i1054.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[9], i1054.blending)
  i1054.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1055[10], i1054.alphaBlending)
  i1054.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[11], i1054.colorWriteMask)
  i1054.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[12], i1054.offsetUnits)
  i1054.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[13], i1054.offsetFactor)
  i1054.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[14], i1054.stencilRef)
  i1054.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[15], i1054.stencilReadMask)
  i1054.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[16], i1054.stencilWriteMask)
  i1054.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[17], i1054.stencilOp)
  i1054.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[18], i1054.stencilOpFront)
  i1054.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1055[19], i1054.stencilOpBack)
  var i1057 = i1055[20]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1057[i + 0]) );
  }
  i1054.tags = i1056
  var i1059 = i1055[21]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.passDefinedKeywords = i1058
  var i1061 = i1055[22]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1061[i + 0]) );
  }
  i1054.passDefinedKeywordGroups = i1060
  var i1063 = i1055[23]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1063[i + 0]) );
  }
  i1054.variants = i1062
  var i1065 = i1055[24]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1065[i + 0]) );
  }
  i1054.excludedVariants = i1064
  i1054.hasDepthReader = !!i1055[25]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1067 = data
  i1066.val = i1067[0]
  i1066.name = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1069 = data
  i1068.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[0], i1068.src)
  i1068.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[1], i1068.dst)
  i1068.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1069[2], i1068.op)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1071 = data
  i1070.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[0], i1070.pass)
  i1070.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[1], i1070.fail)
  i1070.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[2], i1070.zFail)
  i1070.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[3], i1070.comp)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.value = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.keywords = i1080
  i1078.hasDiscard = !!i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1085 = data
  i1084.passId = i1085[0]
  i1084.subShaderIndex = i1085[1]
  var i1087 = i1085[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1084.keywords = i1086
  i1084.vertexProgram = i1085[3]
  i1084.fragmentProgram = i1085[4]
  i1084.exportedForWebGl2 = !!i1085[5]
  i1084.readDepth = !!i1085[6]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'shader')
  i1090.pass = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.type = i1095[1]
  i1094.value = new pc.Vec4( i1095[2], i1095[3], i1095[4], i1095[5] )
  i1094.textureValue = i1095[6]
  i1094.shaderPropertyFlag = i1095[7]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1097 = data
  i1096.name = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'texture')
  i1096.aabb = i1097[3]
  i1096.vertices = i1097[4]
  i1096.triangles = i1097[5]
  i1096.textureRect = UnityEngine.Rect.MinMaxRect(i1097[6], i1097[7], i1097[8], i1097[9])
  i1096.packedRect = UnityEngine.Rect.MinMaxRect(i1097[10], i1097[11], i1097[12], i1097[13])
  i1096.border = new pc.Vec4( i1097[14], i1097[15], i1097[16], i1097[17] )
  i1096.transparency = i1097[18]
  i1096.bounds = i1097[19]
  i1096.pixelsPerUnit = i1097[20]
  i1096.textureWidth = i1097[21]
  i1096.textureHeight = i1097[22]
  i1096.nativeSize = new pc.Vec2( i1097[23], i1097[24] )
  i1096.pivot = new pc.Vec2( i1097[25], i1097[26] )
  i1096.textureRectOffset = new pc.Vec2( i1097[27], i1097[28] )
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1099 = data
  i1098.name = i1099[0]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.wrapMode = i1101[1]
  i1100.isLooping = !!i1101[2]
  i1100.length = i1101[3]
  var i1103 = i1101[4]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1103[i + 0]) );
  }
  i1100.curves = i1102
  var i1105 = i1101[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1105[i + 0]) );
  }
  i1100.events = i1104
  i1100.halfPrecision = !!i1101[6]
  i1100._frameRate = i1101[7]
  i1100.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1101[8], i1100.localBounds)
  i1100.hasMuscleCurves = !!i1101[9]
  var i1107 = i1101[10]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1100.clipMuscleConstant = i1106
  i1100.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1101[11], i1100.clipBindingConstant)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1111 = data
  i1110.path = i1111[0]
  i1110.hash = i1111[1]
  i1110.componentType = i1111[2]
  i1110.property = i1111[3]
  i1110.keys = i1111[4]
  var i1113 = i1111[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1113[i + 0]) );
  }
  i1110.objectReferenceKeys = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1117 = data
  i1116.time = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'value')
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1121 = data
  i1120.functionName = i1121[0]
  i1120.floatParameter = i1121[1]
  i1120.intParameter = i1121[2]
  i1120.stringParameter = i1121[3]
  request.r(i1121[4], i1121[5], 0, i1120, 'objectReferenceParameter')
  i1120.time = i1121[6]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1123 = data
  i1122.center = new pc.Vec3( i1123[0], i1123[1], i1123[2] )
  i1122.extends = new pc.Vec3( i1123[3], i1123[4], i1123[5] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.genericBindings = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.pptrCurveMapping = i1130
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.ascent = i1133[1]
  i1132.originalLineHeight = i1133[2]
  i1132.fontSize = i1133[3]
  var i1135 = i1133[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1135[i + 0]) );
  }
  i1132.characterInfo = i1134
  request.r(i1133[5], i1133[6], 0, i1132, 'texture')
  i1132.originalFontSize = i1133[7]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1139 = data
  i1138.index = i1139[0]
  i1138.advance = i1139[1]
  i1138.bearing = i1139[2]
  i1138.glyphWidth = i1139[3]
  i1138.glyphHeight = i1139[4]
  i1138.minX = i1139[5]
  i1138.maxX = i1139[6]
  i1138.minY = i1139[7]
  i1138.maxY = i1139[8]
  i1138.uvBottomLeftX = i1139[9]
  i1138.uvBottomLeftY = i1139[10]
  i1138.uvBottomRightX = i1139[11]
  i1138.uvBottomRightY = i1139[12]
  i1138.uvTopLeftX = i1139[13]
  i1138.uvTopLeftY = i1139[14]
  i1138.uvTopRightX = i1139[15]
  i1138.uvTopRightY = i1139[16]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1141 = data
  i1140.name = i1141[0]
  var i1143 = i1141[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1143[i + 0]) );
  }
  i1140.layers = i1142
  var i1145 = i1141[2]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1145[i + 0]) );
  }
  i1140.parameters = i1144
  i1140.animationClips = i1141[3]
  i1140.avatarUnsupported = i1141[4]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.defaultWeight = i1149[1]
  i1148.blendingMode = i1149[2]
  i1148.avatarMask = i1149[3]
  i1148.syncedLayerIndex = i1149[4]
  i1148.syncedLayerAffectsTiming = !!i1149[5]
  i1148.syncedLayers = i1149[6]
  i1148.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1149[7], i1148.stateMachine)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  i1150.path = i1151[2]
  var i1153 = i1151[3]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1153[i + 0]) );
  }
  i1150.states = i1152
  var i1155 = i1151[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1155[i + 0]) );
  }
  i1150.machines = i1154
  var i1157 = i1151[5]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1157[i + 0]) );
  }
  i1150.entryStateTransitions = i1156
  var i1159 = i1151[6]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1159[i + 0]) );
  }
  i1150.exitStateTransitions = i1158
  var i1161 = i1151[7]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1161[i + 0]) );
  }
  i1150.anyStateTransitions = i1160
  i1150.defaultStateId = i1151[8]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  i1164.cycleOffset = i1165[2]
  i1164.cycleOffsetParameter = i1165[3]
  i1164.cycleOffsetParameterActive = !!i1165[4]
  i1164.mirror = !!i1165[5]
  i1164.mirrorParameter = i1165[6]
  i1164.mirrorParameterActive = !!i1165[7]
  i1164.motionId = i1165[8]
  i1164.nameHash = i1165[9]
  i1164.fullPathHash = i1165[10]
  i1164.speed = i1165[11]
  i1164.speedParameter = i1165[12]
  i1164.speedParameterActive = !!i1165[13]
  i1164.tag = i1165[14]
  i1164.tagHash = i1165[15]
  i1164.writeDefaultValues = !!i1165[16]
  var i1167 = i1165[17]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 2, i1166, '')
  }
  i1164.behaviours = i1166
  var i1169 = i1165[18]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1169[i + 0]) );
  }
  i1164.transitions = i1168
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1175 = data
  i1174.fullPath = i1175[0]
  i1174.canTransitionToSelf = !!i1175[1]
  i1174.duration = i1175[2]
  i1174.exitTime = i1175[3]
  i1174.hasExitTime = !!i1175[4]
  i1174.hasFixedDuration = !!i1175[5]
  i1174.interruptionSource = i1175[6]
  i1174.offset = i1175[7]
  i1174.orderedInterruption = !!i1175[8]
  i1174.destinationStateId = i1175[9]
  i1174.isExit = !!i1175[10]
  i1174.mute = !!i1175[11]
  i1174.solo = !!i1175[12]
  var i1177 = i1175[13]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1177[i + 0]) );
  }
  i1174.conditions = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1183 = data
  i1182.destinationStateId = i1183[0]
  i1182.isExit = !!i1183[1]
  i1182.mute = !!i1183[2]
  i1182.solo = !!i1183[3]
  var i1185 = i1183[4]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1185[i + 0]) );
  }
  i1182.conditions = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1189 = data
  i1188.mode = i1189[0]
  i1188.parameter = i1189[1]
  i1188.threshold = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1193 = data
  i1192.defaultBool = !!i1193[0]
  i1192.defaultFloat = i1193[1]
  i1192.defaultInt = i1193[2]
  i1192.name = i1193[3]
  i1192.nameHash = i1193[4]
  i1192.type = i1193[5]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.bytes64 = i1195[1]
  i1194.data = i1195[2]
  return i1194
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1197 = data
  i1196.normalStyle = i1197[0]
  i1196.normalSpacingOffset = i1197[1]
  i1196.boldStyle = i1197[2]
  i1196.boldSpacing = i1197[3]
  i1196.italicStyle = i1197[4]
  i1196.tabSize = i1197[5]
  request.r(i1197[6], i1197[7], 0, i1196, 'atlas')
  i1196.m_SourceFontFileGUID = i1197[8]
  i1196.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1197[9], i1196.m_CreationSettings)
  request.r(i1197[10], i1197[11], 0, i1196, 'm_SourceFontFile')
  i1196.m_SourceFontFilePath = i1197[12]
  i1196.m_AtlasPopulationMode = i1197[13]
  i1196.InternalDynamicOS = !!i1197[14]
  var i1199 = i1197[15]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.Glyph', i1199[i + 0]));
  }
  i1196.m_GlyphTable = i1198
  var i1201 = i1197[16]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('TMPro.TMP_Character', i1201[i + 0]));
  }
  i1196.m_CharacterTable = i1200
  var i1203 = i1197[17]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1196.m_AtlasTextures = i1202
  i1196.m_AtlasTextureIndex = i1197[18]
  i1196.m_IsMultiAtlasTexturesEnabled = !!i1197[19]
  i1196.m_GetFontFeatures = !!i1197[20]
  i1196.m_ClearDynamicDataOnBuild = !!i1197[21]
  i1196.m_AtlasWidth = i1197[22]
  i1196.m_AtlasHeight = i1197[23]
  i1196.m_AtlasPadding = i1197[24]
  i1196.m_AtlasRenderMode = i1197[25]
  var i1205 = i1197[26]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('UnityEngine.TextCore.GlyphRect', i1205[i + 0]));
  }
  i1196.m_UsedGlyphRects = i1204
  var i1207 = i1197[27]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('UnityEngine.TextCore.GlyphRect', i1207[i + 0]));
  }
  i1196.m_FreeGlyphRects = i1206
  i1196.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1197[28], i1196.m_FontFeatureTable)
  i1196.m_ShouldReimportFontFeatures = !!i1197[29]
  var i1209 = i1197[30]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 1, i1208, '')
  }
  i1196.m_FallbackFontAssetTable = i1208
  var i1211 = i1197[31]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('TMPro.TMP_FontWeightPair', i1211[i + 0]) );
  }
  i1196.m_FontWeightTable = i1210
  var i1213 = i1197[32]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('TMPro.TMP_FontWeightPair', i1213[i + 0]) );
  }
  i1196.fontWeights = i1212
  i1196.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1197[33], i1196.m_fontInfo)
  var i1215 = i1197[34]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_Glyph', i1215[i + 0]));
  }
  i1196.m_glyphInfoList = i1214
  i1196.m_KerningTable = request.d('TMPro.KerningTable', i1197[35], i1196.m_KerningTable)
  var i1217 = i1197[36]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 1, i1216, '')
  }
  i1196.fallbackFontAssets = i1216
  i1196.m_Version = i1197[37]
  i1196.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1197[38], i1196.m_FaceInfo)
  request.r(i1197[39], i1197[40], 0, i1196, 'm_Material')
  return i1196
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1219 = data
  i1218.sourceFontFileName = i1219[0]
  i1218.sourceFontFileGUID = i1219[1]
  i1218.faceIndex = i1219[2]
  i1218.pointSizeSamplingMode = i1219[3]
  i1218.pointSize = i1219[4]
  i1218.padding = i1219[5]
  i1218.paddingMode = i1219[6]
  i1218.packingMode = i1219[7]
  i1218.atlasWidth = i1219[8]
  i1218.atlasHeight = i1219[9]
  i1218.characterSetSelectionMode = i1219[10]
  i1218.characterSequence = i1219[11]
  i1218.referencedFontAssetGUID = i1219[12]
  i1218.referencedTextAssetGUID = i1219[13]
  i1218.fontStyle = i1219[14]
  i1218.fontStyleModifier = i1219[15]
  i1218.renderMode = i1219[16]
  i1218.includeFontFeatures = !!i1219[17]
  return i1218
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1223 = data
  i1222.m_Index = i1223[0]
  i1222.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1223[1], i1222.m_Metrics)
  i1222.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1223[2], i1222.m_GlyphRect)
  i1222.m_Scale = i1223[3]
  i1222.m_AtlasIndex = i1223[4]
  i1222.m_ClassDefinitionType = i1223[5]
  return i1222
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1225 = data
  i1224.m_Width = i1225[0]
  i1224.m_Height = i1225[1]
  i1224.m_HorizontalBearingX = i1225[2]
  i1224.m_HorizontalBearingY = i1225[3]
  i1224.m_HorizontalAdvance = i1225[4]
  return i1224
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1227 = data
  i1226.m_X = i1227[0]
  i1226.m_Y = i1227[1]
  i1226.m_Width = i1227[2]
  i1226.m_Height = i1227[3]
  return i1226
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_Character' )
  var i1231 = data
  i1230.m_ElementType = i1231[0]
  i1230.m_Unicode = i1231[1]
  i1230.m_GlyphIndex = i1231[2]
  i1230.m_Scale = i1231[3]
  return i1230
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.MultipleSubstitutionRecord', i1239[i + 0]));
  }
  i1236.m_MultipleSubstitutionRecords = i1238
  var i1241 = i1237[1]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.LigatureSubstitutionRecord', i1241[i + 0]));
  }
  i1236.m_LigatureSubstitutionRecords = i1240
  var i1243 = i1237[2]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1243[i + 0]));
  }
  i1236.m_GlyphPairAdjustmentRecords = i1242
  var i1245 = i1237[3]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1245[i + 0]));
  }
  i1236.m_MarkToBaseAdjustmentRecords = i1244
  var i1247 = i1237[4]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1247[i + 0]));
  }
  i1236.m_MarkToMarkAdjustmentRecords = i1246
  return i1236
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1251 = data
  i1250.m_TargetGlyphID = i1251[0]
  i1250.m_SubstituteGlyphIDs = i1251[1]
  return i1250
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1255 = data
  i1254.m_ComponentGlyphIDs = i1255[0]
  i1254.m_LigatureGlyphID = i1255[1]
  return i1254
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1259 = data
  i1258.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1259[0], i1258.m_FirstAdjustmentRecord)
  i1258.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1259[1], i1258.m_SecondAdjustmentRecord)
  i1258.m_FeatureLookupFlags = i1259[2]
  return i1258
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1261 = data
  i1260.m_GlyphIndex = i1261[0]
  i1260.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1261[1], i1260.m_GlyphValueRecord)
  return i1260
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1263 = data
  i1262.m_XPlacement = i1263[0]
  i1262.m_YPlacement = i1263[1]
  i1262.m_XAdvance = i1263[2]
  i1262.m_YAdvance = i1263[3]
  return i1262
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1267 = data
  i1266.m_BaseGlyphID = i1267[0]
  i1266.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1267[1], i1266.m_BaseGlyphAnchorPoint)
  i1266.m_MarkGlyphID = i1267[2]
  i1266.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1267[3], i1266.m_MarkPositionAdjustment)
  return i1266
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1271 = data
  i1270.m_BaseMarkGlyphID = i1271[0]
  i1270.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1271[1], i1270.m_BaseMarkGlyphAnchorPoint)
  i1270.m_CombiningMarkGlyphID = i1271[2]
  i1270.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1271[3], i1270.m_CombiningMarkPositionAdjustment)
  return i1270
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'regularTypeface')
  request.r(i1277[2], i1277[3], 0, i1276, 'italicTypeface')
  return i1276
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1279 = data
  i1278.Name = i1279[0]
  i1278.PointSize = i1279[1]
  i1278.Scale = i1279[2]
  i1278.CharacterCount = i1279[3]
  i1278.LineHeight = i1279[4]
  i1278.Baseline = i1279[5]
  i1278.Ascender = i1279[6]
  i1278.CapHeight = i1279[7]
  i1278.Descender = i1279[8]
  i1278.CenterLine = i1279[9]
  i1278.SuperscriptOffset = i1279[10]
  i1278.SubscriptOffset = i1279[11]
  i1278.SubSize = i1279[12]
  i1278.Underline = i1279[13]
  i1278.UnderlineThickness = i1279[14]
  i1278.strikethrough = i1279[15]
  i1278.strikethroughThickness = i1279[16]
  i1278.TabWidth = i1279[17]
  i1278.Padding = i1279[18]
  i1278.AtlasWidth = i1279[19]
  i1278.AtlasHeight = i1279[20]
  return i1278
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1283 = data
  i1282.id = i1283[0]
  i1282.x = i1283[1]
  i1282.y = i1283[2]
  i1282.width = i1283[3]
  i1282.height = i1283[4]
  i1282.xOffset = i1283[5]
  i1282.yOffset = i1283[6]
  i1282.xAdvance = i1283[7]
  i1282.scale = i1283[8]
  return i1282
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.KerningTable' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.KerningPair', i1287[i + 0]));
  }
  i1284.kerningPairs = i1286
  return i1284
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.KerningPair' )
  var i1291 = data
  i1290.xOffset = i1291[0]
  i1290.m_FirstGlyph = i1291[1]
  i1290.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1291[2], i1290.m_FirstGlyphAdjustments)
  i1290.m_SecondGlyph = i1291[3]
  i1290.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1291[4], i1290.m_SecondGlyphAdjustments)
  i1290.m_IgnoreSpacingAdjustments = !!i1291[5]
  return i1290
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1293 = data
  i1292.m_FaceIndex = i1293[0]
  i1292.m_FamilyName = i1293[1]
  i1292.m_StyleName = i1293[2]
  i1292.m_PointSize = i1293[3]
  i1292.m_Scale = i1293[4]
  i1292.m_UnitsPerEM = i1293[5]
  i1292.m_LineHeight = i1293[6]
  i1292.m_AscentLine = i1293[7]
  i1292.m_CapLine = i1293[8]
  i1292.m_MeanLine = i1293[9]
  i1292.m_Baseline = i1293[10]
  i1292.m_DescentLine = i1293[11]
  i1292.m_SuperscriptOffset = i1293[12]
  i1292.m_SuperscriptSize = i1293[13]
  i1292.m_SubscriptOffset = i1293[14]
  i1292.m_SubscriptSize = i1293[15]
  i1292.m_UnderlineOffset = i1293[16]
  i1292.m_UnderlineThickness = i1293[17]
  i1292.m_StrikethroughOffset = i1293[18]
  i1292.m_StrikethroughThickness = i1293[19]
  i1292.m_TabWidth = i1293[20]
  return i1292
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1295 = data
  i1294.useSafeMode = !!i1295[0]
  i1294.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1295[1], i1294.safeModeOptions)
  i1294.timeScale = i1295[2]
  i1294.unscaledTimeScale = i1295[3]
  i1294.useSmoothDeltaTime = !!i1295[4]
  i1294.maxSmoothUnscaledTime = i1295[5]
  i1294.rewindCallbackMode = i1295[6]
  i1294.showUnityEditorReport = !!i1295[7]
  i1294.logBehaviour = i1295[8]
  i1294.drawGizmos = !!i1295[9]
  i1294.defaultRecyclable = !!i1295[10]
  i1294.defaultAutoPlay = i1295[11]
  i1294.defaultUpdateType = i1295[12]
  i1294.defaultTimeScaleIndependent = !!i1295[13]
  i1294.defaultEaseType = i1295[14]
  i1294.defaultEaseOvershootOrAmplitude = i1295[15]
  i1294.defaultEasePeriod = i1295[16]
  i1294.defaultAutoKill = !!i1295[17]
  i1294.defaultLoopType = i1295[18]
  i1294.debugMode = !!i1295[19]
  i1294.debugStoreTargetId = !!i1295[20]
  i1294.showPreviewPanel = !!i1295[21]
  i1294.storeSettingsLocation = i1295[22]
  i1294.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1295[23], i1294.modules)
  i1294.createASMDEF = !!i1295[24]
  i1294.showPlayingTweens = !!i1295[25]
  i1294.showPausedTweens = !!i1295[26]
  return i1294
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1296 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1297 = data
  i1296.logBehaviour = i1297[0]
  i1296.nestedTweenFailureBehaviour = i1297[1]
  return i1296
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1298 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1299 = data
  i1298.showPanel = !!i1299[0]
  i1298.audioEnabled = !!i1299[1]
  i1298.physicsEnabled = !!i1299[2]
  i1298.physics2DEnabled = !!i1299[3]
  i1298.spriteEnabled = !!i1299[4]
  i1298.uiEnabled = !!i1299[5]
  i1298.uiToolkitEnabled = !!i1299[6]
  i1298.textMeshProEnabled = !!i1299[7]
  i1298.tk2DEnabled = !!i1299[8]
  i1298.deAudioEnabled = !!i1299[9]
  i1298.deUnityExtendedEnabled = !!i1299[10]
  i1298.epoOutlineEnabled = !!i1299[11]
  return i1298
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Settings' )
  var i1301 = data
  i1300.assetVersion = i1301[0]
  i1300.m_TextWrappingMode = i1301[1]
  i1300.m_enableKerning = !!i1301[2]
  var i1303 = i1301[3]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(i1303[i + 0]);
  }
  i1300.m_ActiveFontFeatures = i1302
  i1300.m_enableExtraPadding = !!i1301[4]
  i1300.m_enableTintAllSprites = !!i1301[5]
  i1300.m_enableParseEscapeCharacters = !!i1301[6]
  i1300.m_EnableRaycastTarget = !!i1301[7]
  i1300.m_GetFontFeaturesAtRuntime = !!i1301[8]
  i1300.m_missingGlyphCharacter = i1301[9]
  i1300.m_ClearDynamicDataOnBuild = !!i1301[10]
  i1300.m_warningsDisabled = !!i1301[11]
  request.r(i1301[12], i1301[13], 0, i1300, 'm_defaultFontAsset')
  i1300.m_defaultFontAssetPath = i1301[14]
  i1300.m_defaultFontSize = i1301[15]
  i1300.m_defaultAutoSizeMinRatio = i1301[16]
  i1300.m_defaultAutoSizeMaxRatio = i1301[17]
  i1300.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1301[18], i1301[19] )
  i1300.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1301[20], i1301[21] )
  i1300.m_autoSizeTextContainer = !!i1301[22]
  i1300.m_IsTextObjectScaleStatic = !!i1301[23]
  var i1305 = i1301[24]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 1, i1304, '')
  }
  i1300.m_fallbackFontAssets = i1304
  i1300.m_matchMaterialPreset = !!i1301[25]
  i1300.m_HideSubTextObjects = !!i1301[26]
  request.r(i1301[27], i1301[28], 0, i1300, 'm_defaultSpriteAsset')
  i1300.m_defaultSpriteAssetPath = i1301[29]
  i1300.m_enableEmojiSupport = !!i1301[30]
  i1300.m_MissingCharacterSpriteUnicode = i1301[31]
  var i1307 = i1301[32]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 1, i1306, '')
  }
  i1300.m_EmojiFallbackTextAssets = i1306
  i1300.m_defaultColorGradientPresetsPath = i1301[33]
  request.r(i1301[34], i1301[35], 0, i1300, 'm_defaultStyleSheet')
  i1300.m_StyleSheetsResourcePath = i1301[36]
  request.r(i1301[37], i1301[38], 0, i1300, 'm_leadingCharacters')
  request.r(i1301[39], i1301[40], 0, i1300, 'm_followingCharacters')
  i1300.m_UseModernHangulLineBreakingRules = !!i1301[41]
  return i1300
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'spriteSheet')
  var i1313 = i1311[2]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Sprite', i1313[i + 0]));
  }
  i1310.spriteInfoList = i1312
  var i1315 = i1311[3]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 1, i1314, '')
  }
  i1310.fallbackSpriteAssets = i1314
  var i1317 = i1311[4]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_SpriteCharacter', i1317[i + 0]));
  }
  i1310.m_SpriteCharacterTable = i1316
  var i1319 = i1311[5]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.TMP_SpriteGlyph', i1319[i + 0]));
  }
  i1310.m_GlyphTable = i1318
  i1310.m_Version = i1311[6]
  i1310.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1311[7], i1310.m_FaceInfo)
  request.r(i1311[8], i1311[9], 0, i1310, 'm_Material')
  return i1310
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.hashCode = i1323[1]
  i1322.unicode = i1323[2]
  i1322.pivot = new pc.Vec2( i1323[3], i1323[4] )
  request.r(i1323[5], i1323[6], 0, i1322, 'sprite')
  i1322.id = i1323[7]
  i1322.x = i1323[8]
  i1322.y = i1323[9]
  i1322.width = i1323[10]
  i1322.height = i1323[11]
  i1322.xOffset = i1323[12]
  i1322.yOffset = i1323[13]
  i1322.xAdvance = i1323[14]
  i1322.scale = i1323[15]
  return i1322
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1329 = data
  i1328.m_Name = i1329[0]
  i1328.m_ElementType = i1329[1]
  i1328.m_Unicode = i1329[2]
  i1328.m_GlyphIndex = i1329[3]
  i1328.m_Scale = i1329[4]
  return i1328
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'sprite')
  i1332.m_Index = i1333[2]
  i1332.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1333[3], i1332.m_Metrics)
  i1332.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1333[4], i1332.m_GlyphRect)
  i1332.m_Scale = i1333[5]
  i1332.m_AtlasIndex = i1333[6]
  i1332.m_ClassDefinitionType = i1333[7]
  return i1332
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Style', i1337[i + 0]));
  }
  i1334.m_StyleList = i1336
  return i1334
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Style' )
  var i1341 = data
  i1340.m_Name = i1341[0]
  i1340.m_HashCode = i1341[1]
  i1340.m_OpeningDefinition = i1341[2]
  i1340.m_ClosingDefinition = i1341[3]
  i1340.m_OpeningTagArray = i1341[4]
  i1340.m_ClosingTagArray = i1341[5]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1343 = data
  var i1345 = i1343[0]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1345[i + 0]) );
  }
  i1342.files = i1344
  i1342.componentToPrefabIds = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1349 = data
  i1348.path = i1349[0]
  request.r(i1349[1], i1349[2], 0, i1348, 'unityObject')
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1353[i + 0]) );
  }
  i1350.scriptsExecutionOrder = i1352
  var i1355 = i1351[1]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1355[i + 0]) );
  }
  i1350.sortingLayers = i1354
  var i1357 = i1351[2]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1357[i + 0]) );
  }
  i1350.cullingLayers = i1356
  i1350.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1351[3], i1350.timeSettings)
  i1350.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1351[4], i1350.physicsSettings)
  i1350.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1351[5], i1350.physics2DSettings)
  i1350.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1351[6], i1350.qualitySettings)
  i1350.enableRealtimeShadows = !!i1351[7]
  i1350.enableAutoInstancing = !!i1351[8]
  i1350.enableStaticBatching = !!i1351[9]
  i1350.enableDynamicBatching = !!i1351[10]
  i1350.lightmapEncodingQuality = i1351[11]
  i1350.desiredColorSpace = i1351[12]
  var i1359 = i1351[13]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( i1359[i + 0] );
  }
  i1350.allTags = i1358
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.value = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.name = i1367[1]
  i1366.value = i1367[2]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1371 = data
  i1370.id = i1371[0]
  i1370.name = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1373 = data
  i1372.fixedDeltaTime = i1373[0]
  i1372.maximumDeltaTime = i1373[1]
  i1372.timeScale = i1373[2]
  i1372.maximumParticleTimestep = i1373[3]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1375 = data
  i1374.gravity = new pc.Vec3( i1375[0], i1375[1], i1375[2] )
  i1374.defaultSolverIterations = i1375[3]
  i1374.bounceThreshold = i1375[4]
  i1374.autoSyncTransforms = !!i1375[5]
  i1374.autoSimulation = !!i1375[6]
  var i1377 = i1375[7]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1377[i + 0]) );
  }
  i1374.collisionMatrix = i1376
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1381 = data
  i1380.enabled = !!i1381[0]
  i1380.layerId = i1381[1]
  i1380.otherLayerId = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'material')
  i1382.gravity = new pc.Vec2( i1383[2], i1383[3] )
  i1382.positionIterations = i1383[4]
  i1382.velocityIterations = i1383[5]
  i1382.velocityThreshold = i1383[6]
  i1382.maxLinearCorrection = i1383[7]
  i1382.maxAngularCorrection = i1383[8]
  i1382.maxTranslationSpeed = i1383[9]
  i1382.maxRotationSpeed = i1383[10]
  i1382.baumgarteScale = i1383[11]
  i1382.baumgarteTOIScale = i1383[12]
  i1382.timeToSleep = i1383[13]
  i1382.linearSleepTolerance = i1383[14]
  i1382.angularSleepTolerance = i1383[15]
  i1382.defaultContactOffset = i1383[16]
  i1382.autoSimulation = !!i1383[17]
  i1382.queriesHitTriggers = !!i1383[18]
  i1382.queriesStartInColliders = !!i1383[19]
  i1382.callbacksOnDisable = !!i1383[20]
  i1382.reuseCollisionCallbacks = !!i1383[21]
  i1382.autoSyncTransforms = !!i1383[22]
  var i1385 = i1383[23]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1385[i + 0]) );
  }
  i1382.collisionMatrix = i1384
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1389 = data
  i1388.enabled = !!i1389[0]
  i1388.layerId = i1389[1]
  i1388.otherLayerId = i1389[2]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1393[i + 0]) );
  }
  i1390.qualityLevels = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( i1395[i + 0] );
  }
  i1390.names = i1394
  i1390.shadows = i1391[2]
  i1390.anisotropicFiltering = i1391[3]
  i1390.antiAliasing = i1391[4]
  i1390.lodBias = i1391[5]
  i1390.shadowCascades = i1391[6]
  i1390.shadowDistance = i1391[7]
  i1390.shadowmaskMode = i1391[8]
  i1390.shadowProjection = i1391[9]
  i1390.shadowResolution = i1391[10]
  i1390.softParticles = !!i1391[11]
  i1390.softVegetation = !!i1391[12]
  i1390.activeColorSpace = i1391[13]
  i1390.desiredColorSpace = i1391[14]
  i1390.masterTextureLimit = i1391[15]
  i1390.maxQueuedFrames = i1391[16]
  i1390.particleRaycastBudget = i1391[17]
  i1390.pixelLightCount = i1391[18]
  i1390.realtimeReflectionProbes = !!i1391[19]
  i1390.shadowCascade2Split = i1391[20]
  i1390.shadowCascade4Split = new pc.Vec3( i1391[21], i1391[22], i1391[23] )
  i1390.streamingMipmapsActive = !!i1391[24]
  i1390.vSyncCount = i1391[25]
  i1390.asyncUploadBufferSize = i1391[26]
  i1390.asyncUploadTimeSlice = i1391[27]
  i1390.billboardsFaceCameraPosition = !!i1391[28]
  i1390.shadowNearPlaneOffset = i1391[29]
  i1390.streamingMipmapsMemoryBudget = i1391[30]
  i1390.maximumLODLevel = i1391[31]
  i1390.streamingMipmapsAddAllCameras = !!i1391[32]
  i1390.streamingMipmapsMaxLevelReduction = i1391[33]
  i1390.streamingMipmapsRenderersPerFrame = i1391[34]
  i1390.resolutionScalingFixedDPIFactor = i1391[35]
  i1390.streamingMipmapsMaxFileIORequests = i1391[36]
  i1390.currentQualityLevel = i1391[37]
  return i1390
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1399 = data
  i1398.m_XCoordinate = i1399[0]
  i1398.m_YCoordinate = i1399[1]
  return i1398
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1401 = data
  i1400.m_XPositionAdjustment = i1401[0]
  i1400.m_YPositionAdjustment = i1401[1]
  return i1400
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1403 = data
  i1402.xPlacement = i1403[0]
  i1402.yPlacement = i1403[1]
  i1402.xAdvance = i1403[2]
  i1402.yAdvance = i1403[3]
  return i1402
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[12],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[12],"92":[49],"93":[94],"95":[94],"25":[24],"14":[12],"42":[5],"47":[5],"45":[5],"96":[9],"97":[12],"98":[99],"100":[52],"101":[25],"102":[24],"50":[49,24],"31":[24,29],"103":[24],"104":[29,24],"105":[49],"106":[29,24],"107":[24],"108":[109],"110":[109],"111":[109],"112":[113],"114":[24],"115":[24],"28":[25],"30":[29,24],"116":[24],"27":[25],"117":[24],"118":[24],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"126":[29,24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[29,24],"132":[24],"133":[52],"134":[52],"53":[52],"135":[52],"136":[12],"137":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","ItemController","UnityEngine.GameObject","ItemMovement","ItemGraphic","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","AutoCameraFit","InputManager","TriggerOnAllActive","HandHintManager","TongItem","UnityEngine.Animator","GameManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.SphereCollider","UnityEditor.Animations.AnimatorController","EventAnim","PlaySound","UnityEngine.SpriteMask","BasketAnim","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CuttingSetup","ClickToProcessItem","AutoProcessItem","UnlockCondition","SwipeToProcessItem","DropTargetSlot","DragBetweenBoundsToProcess","ItemSpawner","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_Cookzi";

Deserializers.lunaInitializationTime = "06/23/2026 10:40:28";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookzy_V27";

Deserializers.lunaAppID = "30475";

Deserializers.projectId = "e178f90c7f9e46c47826ac405889c8ef";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1732";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4823";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.PLY-Cookzi";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1950616c-a1ae-48e7-a634-d74e419ec7a7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

