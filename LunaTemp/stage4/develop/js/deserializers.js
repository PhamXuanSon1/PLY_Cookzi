var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4914 = root || request.c( 'UnityEngine.JointSpring' )
  var i4915 = data
  i4914.spring = i4915[0]
  i4914.damper = i4915[1]
  i4914.targetPosition = i4915[2]
  return i4914
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4916 = root || request.c( 'UnityEngine.JointMotor' )
  var i4917 = data
  i4916.m_TargetVelocity = i4917[0]
  i4916.m_Force = i4917[1]
  i4916.m_FreeSpin = i4917[2]
  return i4916
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4918 = root || request.c( 'UnityEngine.JointLimits' )
  var i4919 = data
  i4918.m_Min = i4919[0]
  i4918.m_Max = i4919[1]
  i4918.m_Bounciness = i4919[2]
  i4918.m_BounceMinVelocity = i4919[3]
  i4918.m_ContactDistance = i4919[4]
  i4918.minBounce = i4919[5]
  i4918.maxBounce = i4919[6]
  return i4918
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4920 = root || request.c( 'UnityEngine.JointDrive' )
  var i4921 = data
  i4920.m_PositionSpring = i4921[0]
  i4920.m_PositionDamper = i4921[1]
  i4920.m_MaximumForce = i4921[2]
  i4920.m_UseAcceleration = i4921[3]
  return i4920
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4922 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4923 = data
  i4922.m_Spring = i4923[0]
  i4922.m_Damper = i4923[1]
  return i4922
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4924 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4925 = data
  i4924.m_Limit = i4925[0]
  i4924.m_Bounciness = i4925[1]
  i4924.m_ContactDistance = i4925[2]
  return i4924
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4926 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4927 = data
  i4926.m_ExtremumSlip = i4927[0]
  i4926.m_ExtremumValue = i4927[1]
  i4926.m_AsymptoteSlip = i4927[2]
  i4926.m_AsymptoteValue = i4927[3]
  i4926.m_Stiffness = i4927[4]
  return i4926
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4928 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4929 = data
  i4928.m_LowerAngle = i4929[0]
  i4928.m_UpperAngle = i4929[1]
  return i4928
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4930 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4931 = data
  i4930.m_MotorSpeed = i4931[0]
  i4930.m_MaximumMotorTorque = i4931[1]
  return i4930
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4932 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4933 = data
  i4932.m_DampingRatio = i4933[0]
  i4932.m_Frequency = i4933[1]
  i4932.m_Angle = i4933[2]
  return i4932
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4934 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4935 = data
  i4934.m_LowerTranslation = i4935[0]
  i4934.m_UpperTranslation = i4935[1]
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4936 = root || new pc.UnityMaterial()
  var i4937 = data
  i4936.name = i4937[0]
  request.r(i4937[1], i4937[2], 0, i4936, 'shader')
  i4936.renderQueue = i4937[3]
  i4936.enableInstancing = !!i4937[4]
  var i4939 = i4937[5]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4939[i + 0]) );
  }
  i4936.floatParameters = i4938
  var i4941 = i4937[6]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4941[i + 0]) );
  }
  i4936.colorParameters = i4940
  var i4943 = i4937[7]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4943[i + 0]) );
  }
  i4936.vectorParameters = i4942
  var i4945 = i4937[8]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4945[i + 0]) );
  }
  i4936.textureParameters = i4944
  var i4947 = i4937[9]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4947[i + 0]) );
  }
  i4936.materialFlags = i4946
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4951 = data
  i4950.name = i4951[0]
  i4950.value = i4951[1]
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4955 = data
  i4954.name = i4955[0]
  i4954.value = new pc.Color(i4955[1], i4955[2], i4955[3], i4955[4])
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4959 = data
  i4958.name = i4959[0]
  i4958.value = new pc.Vec4( i4959[1], i4959[2], i4959[3], i4959[4] )
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4963 = data
  i4962.name = i4963[0]
  request.r(i4963[1], i4963[2], 0, i4962, 'value')
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4967 = data
  i4966.name = i4967[0]
  i4966.enabled = !!i4967[1]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4969 = data
  i4968.name = i4969[0]
  i4968.width = i4969[1]
  i4968.height = i4969[2]
  i4968.mipmapCount = i4969[3]
  i4968.anisoLevel = i4969[4]
  i4968.filterMode = i4969[5]
  i4968.hdr = !!i4969[6]
  i4968.format = i4969[7]
  i4968.wrapMode = i4969[8]
  i4968.alphaIsTransparency = !!i4969[9]
  i4968.alphaSource = i4969[10]
  i4968.graphicsFormat = i4969[11]
  i4968.sRGBTexture = !!i4969[12]
  i4968.desiredColorSpace = i4969[13]
  i4968.wrapU = i4969[14]
  i4968.wrapV = i4969[15]
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4971 = data
  i4970.position = new pc.Vec3( i4971[0], i4971[1], i4971[2] )
  i4970.scale = new pc.Vec3( i4971[3], i4971[4], i4971[5] )
  i4970.rotation = new pc.Quat(i4971[6], i4971[7], i4971[8], i4971[9])
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4973 = data
  i4972.center = new pc.Vec3( i4973[0], i4973[1], i4973[2] )
  i4972.size = new pc.Vec3( i4973[3], i4973[4], i4973[5] )
  i4972.enabled = !!i4973[6]
  i4972.isTrigger = !!i4973[7]
  request.r(i4973[8], i4973[9], 0, i4972, 'material')
  return i4972
}

Deserializers["ItemController"] = function (request, data, root) {
  var i4974 = root || request.c( 'ItemController' )
  var i4975 = data
  i4974.itemType = i4975[0]
  request.r(i4975[1], i4975[2], 0, i4974, 'dropTarget')
  i4974.dropDistanceThreshold = i4975[3]
  i4974.hideSpriteOnDrop = !!i4975[4]
  i4974.disableColliderOnComplete = !!i4975[5]
  i4974.isTool = !!i4975[6]
  request.r(i4975[7], i4975[8], 0, i4974, 'customDragBounds')
  i4974.increaseSortingLayerOnDrag = !!i4975[9]
  i4974.isLocked = !!i4975[10]
  i4974.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i4975[11], i4974.onInteractWhileLocked)
  i4974.onClick = request.d('UnityEngine.Events.UnityEvent', i4975[12], i4974.onClick)
  i4974.onDrop = request.d('UnityEngine.Events.UnityEvent', i4975[13], i4974.onDrop)
  i4974.onDragStart = request.d('UnityEngine.Events.UnityEvent', i4975[14], i4974.onDragStart)
  i4974.onReturn = request.d('UnityEngine.Events.UnityEvent', i4975[15], i4974.onReturn)
  i4974.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i4975[16], i4974.onAnimFinished)
  i4974.isSequentialClick = !!i4975[17]
  var i4977 = i4975[18]
  var i4976 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i4977.length; i += 1) {
    i4976.add(request.d('AnimObjectData', i4977[i + 0]));
  }
  i4974.animationObjects = i4976
  i4974.interactSound = i4975[19]
  i4974.sequenceLoopSound = i4975[20]
  var i4979 = i4975[21]
  var i4978 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.add(i4979[i + 0]);
  }
  i4974.fxSoundsStartAnim = i4978
  var i4981 = i4975[22]
  var i4980 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.add(i4981[i + 0]);
  }
  i4974.fxSoundsAfterAnim = i4980
  return i4974
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4982 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4983 = data
  i4982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4983[0], i4982.m_PersistentCalls)
  return i4982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4985 = data
  var i4987 = i4985[0]
  var i4986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.add(request.d('UnityEngine.Events.PersistentCall', i4987[i + 0]));
  }
  i4984.m_Calls = i4986
  return i4984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4991 = data
  request.r(i4991[0], i4991[1], 0, i4990, 'm_Target')
  i4990.m_TargetAssemblyTypeName = i4991[2]
  i4990.m_MethodName = i4991[3]
  i4990.m_Mode = i4991[4]
  i4990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4991[5], i4990.m_Arguments)
  i4990.m_CallState = i4991[6]
  return i4990
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4992 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4993 = data
  request.r(i4993[0], i4993[1], 0, i4992, 'm_ObjectArgument')
  i4992.m_ObjectArgumentAssemblyTypeName = i4993[2]
  i4992.m_IntArgument = i4993[3]
  i4992.m_FloatArgument = i4993[4]
  i4992.m_StringArgument = i4993[5]
  i4992.m_BoolArgument = !!i4993[6]
  return i4992
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i4996 = root || request.c( 'AnimObjectData' )
  var i4997 = data
  request.r(i4997[0], i4997[1], 0, i4996, 'animObj')
  i4996.delayFromStart = i4997[2]
  i4996.durationToDeactivate = i4997[3]
  i4996.triggerName = i4997[4]
  return i4996
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i5000 = root || request.c( 'ItemMovement' )
  var i5001 = data
  return i5000
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i5002 = root || request.c( 'ItemGraphic' )
  var i5003 = data
  var i5005 = i5003[0]
  var i5004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i5005.length; i += 2) {
  request.r(i5005[i + 0], i5005[i + 1], 1, i5004, '')
  }
  i5002.spriteRenderers = i5004
  i5002.rotateOnDrag = !!i5003[1]
  i5002.dragRotationAngle = new pc.Vec3( i5003[2], i5003[3], i5003[4] )
  i5002.rotationDuration = i5003[5]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5009 = data
  i5008.color = new pc.Color(i5009[0], i5009[1], i5009[2], i5009[3])
  request.r(i5009[4], i5009[5], 0, i5008, 'sprite')
  i5008.flipX = !!i5009[6]
  i5008.flipY = !!i5009[7]
  i5008.drawMode = i5009[8]
  i5008.size = new pc.Vec2( i5009[9], i5009[10] )
  i5008.tileMode = i5009[11]
  i5008.adaptiveModeThreshold = i5009[12]
  i5008.maskInteraction = i5009[13]
  i5008.spriteSortPoint = i5009[14]
  i5008.enabled = !!i5009[15]
  request.r(i5009[16], i5009[17], 0, i5008, 'sharedMaterial')
  var i5011 = i5009[18]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 2) {
  request.r(i5011[i + 0], i5011[i + 1], 2, i5010, '')
  }
  i5008.sharedMaterials = i5010
  i5008.receiveShadows = !!i5009[19]
  i5008.shadowCastingMode = i5009[20]
  i5008.sortingLayerID = i5009[21]
  i5008.sortingOrder = i5009[22]
  i5008.lightmapIndex = i5009[23]
  i5008.lightmapSceneIndex = i5009[24]
  i5008.lightmapScaleOffset = new pc.Vec4( i5009[25], i5009[26], i5009[27], i5009[28] )
  i5008.lightProbeUsage = i5009[29]
  i5008.reflectionProbeUsage = i5009[30]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5015 = data
  i5014.name = i5015[0]
  i5014.tagId = i5015[1]
  i5014.enabled = !!i5015[2]
  i5014.isStatic = !!i5015[3]
  i5014.layer = i5015[4]
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5017 = data
  i5016.name = i5017[0]
  i5016.index = i5017[1]
  i5016.startup = !!i5017[2]
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5019 = data
  i5018.aspect = i5019[0]
  i5018.orthographic = !!i5019[1]
  i5018.orthographicSize = i5019[2]
  i5018.backgroundColor = new pc.Color(i5019[3], i5019[4], i5019[5], i5019[6])
  i5018.nearClipPlane = i5019[7]
  i5018.farClipPlane = i5019[8]
  i5018.fieldOfView = i5019[9]
  i5018.depth = i5019[10]
  i5018.clearFlags = i5019[11]
  i5018.cullingMask = i5019[12]
  i5018.rect = i5019[13]
  request.r(i5019[14], i5019[15], 0, i5018, 'targetTexture')
  i5018.usePhysicalProperties = !!i5019[16]
  i5018.focalLength = i5019[17]
  i5018.sensorSize = new pc.Vec2( i5019[18], i5019[19] )
  i5018.lensShift = new pc.Vec2( i5019[20], i5019[21] )
  i5018.gateFit = i5019[22]
  i5018.commandBufferCount = i5019[23]
  i5018.cameraType = i5019[24]
  i5018.enabled = !!i5019[25]
  return i5018
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i5020 = root || request.c( 'AutoCameraFit' )
  var i5021 = data
  request.r(i5021[0], i5021[1], 0, i5020, 'canvasBtn')
  request.r(i5021[2], i5021[3], 0, i5020, 'targetArea')
  i5020.paddingLandscape = i5021[4]
  i5020.paddingPortrait = i5021[5]
  i5020.extraPaddingSmallScreen = i5021[6]
  i5020.smallScreenThreshold = i5021[7]
  i5020.autoUpdateOnResize = !!i5021[8]
  i5020.adjustInEditMode = !!i5021[9]
  return i5020
}

Deserializers["InputManager"] = function (request, data, root) {
  var i5022 = root || request.c( 'InputManager' )
  var i5023 = data
  request.r(i5023[0], i5023[1], 0, i5022, 'mainCamera')
  i5022.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i5023[2] )
  i5022.installLayer = UnityEngine.LayerMask.FromIntegerValue( i5023[3] )
  i5022.maxDistance = i5023[4]
  i5022.itemsToGotoStore = i5023[5]
  i5022.dragSortingOffset = i5023[6]
  i5022.useDragBounds = !!i5023[7]
  request.r(i5023[8], i5023[9], 0, i5022, 'dragBounds')
  return i5022
}

Deserializers["TriggerOnAllActive"] = function (request, data, root) {
  var i5024 = root || request.c( 'TriggerOnAllActive' )
  var i5025 = data
  var i5027 = i5025[0]
  var i5026 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveEventGroup')))
  for(var i = 0; i < i5027.length; i += 1) {
    i5026.add(request.d('ActiveEventGroup', i5027[i + 0]));
  }
  i5024.eventGroups = i5026
  return i5024
}

Deserializers["ActiveEventGroup"] = function (request, data, root) {
  var i5030 = root || request.c( 'ActiveEventGroup' )
  var i5031 = data
  i5030.groupName = i5031[0]
  var i5033 = i5031[1]
  var i5032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 1, i5032, '')
  }
  i5030.targetObjects = i5032
  i5030.delayTime = i5031[2]
  i5030.cancelIfAnyDeactivatedDuringDelay = !!i5031[3]
  i5030.onAllActive = request.d('UnityEngine.Events.UnityEvent', i5031[4], i5030.onAllActive)
  i5030.isWaiting = !!i5031[5]
  i5030.hasTriggered = !!i5031[6]
  return i5030
}

Deserializers["HandHintManager"] = function (request, data, root) {
  var i5036 = root || request.c( 'HandHintManager' )
  var i5037 = data
  var i5039 = i5037[0]
  var i5038 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i5039.length; i += 2) {
  request.r(i5039[i + 0], i5039[i + 1], 1, i5038, '')
  }
  i5036.hintItems = i5038
  request.r(i5037[1], i5037[2], 0, i5036, 'handHintObject')
  request.r(i5037[3], i5037[4], 0, i5036, 'handAnimator')
  request.r(i5037[5], i5037[6], 0, i5036, 'swipeArrow')
  i5036.idleTimeToHint = i5037[7]
  i5036.dragAnimDuration = i5037[8]
  request.r(i5037[9], i5037[10], 0, i5036, 'startHintPos')
  request.r(i5037[11], i5037[12], 0, i5036, 'endHintPos')
  return i5036
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5042 = root || request.c( 'GameManager' )
  var i5043 = data
  request.r(i5043[0], i5043[1], 0, i5042, 'winCanvas')
  request.r(i5043[2], i5043[3], 0, i5042, 'loseCanvas')
  i5042.timeLimit = i5043[4]
  i5042.onWinGame = request.d('UnityEngine.Events.UnityEvent', i5043[5], i5042.onWinGame)
  i5042.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i5043[6], i5042.onLoseGame)
  i5042.isGameEnded = !!i5043[7]
  return i5042
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i5044 = root || request.c( 'Ply_SoundManager' )
  var i5045 = data
  i5044.fxAudio = request.d('FxAudio', i5045[0], i5044.fxAudio)
  request.r(i5045[1], i5045[2], 0, i5044, 'bgm1')
  return i5044
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i5046 = root || request.c( 'FxAudio' )
  var i5047 = data
  i5046.None = request.d('SoundData', i5047[0], i5046.None)
  i5046.PickableItemPickSound = request.d('SoundData', i5047[1], i5046.PickableItemPickSound)
  i5046.PickableItemDropSound = request.d('SoundData', i5047[2], i5046.PickableItemDropSound)
  i5046.WaterBottle = request.d('SoundData', i5047[3], i5046.WaterBottle)
  i5046.WaterDrop = request.d('SoundData', i5047[4], i5046.WaterDrop)
  i5046.GasClick = request.d('SoundData', i5047[5], i5046.GasClick)
  i5046.Heart = request.d('SoundData', i5047[6], i5046.Heart)
  i5046.Boil = request.d('SoundData', i5047[7], i5046.Boil)
  i5046.Put2 = request.d('SoundData', i5047[8], i5046.Put2)
  i5046.Knife = request.d('SoundData', i5047[9], i5046.Knife)
  i5046.Cutting = request.d('SoundData', i5047[10], i5046.Cutting)
  i5046.KnifeWing = request.d('SoundData', i5047[11], i5046.KnifeWing)
  i5046.SaltDrop = request.d('SoundData', i5047[12], i5046.SaltDrop)
  i5046.Cookin_Pan_Fryin_003_01 = request.d('SoundData', i5047[13], i5046.Cookin_Pan_Fryin_003_01)
  return i5046
}

Deserializers["SoundData"] = function (request, data, root) {
  var i5048 = root || request.c( 'SoundData' )
  var i5049 = data
  request.r(i5049[0], i5049[1], 0, i5048, 'clip')
  i5048.repeatCount = i5049[2]
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, 'clip')
  request.r(i5051[2], i5051[3], 0, i5050, 'outputAudioMixerGroup')
  i5050.playOnAwake = !!i5051[4]
  i5050.loop = !!i5051[5]
  i5050.time = i5051[6]
  i5050.volume = i5051[7]
  i5050.pitch = i5051[8]
  i5050.enabled = !!i5051[9]
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5053 = data
  i5052.pivot = new pc.Vec2( i5053[0], i5053[1] )
  i5052.anchorMin = new pc.Vec2( i5053[2], i5053[3] )
  i5052.anchorMax = new pc.Vec2( i5053[4], i5053[5] )
  i5052.sizeDelta = new pc.Vec2( i5053[6], i5053[7] )
  i5052.anchoredPosition3D = new pc.Vec3( i5053[8], i5053[9], i5053[10] )
  i5052.rotation = new pc.Quat(i5053[11], i5053[12], i5053[13], i5053[14])
  i5052.scale = new pc.Vec3( i5053[15], i5053[16], i5053[17] )
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5055 = data
  i5054.planeDistance = i5055[0]
  i5054.referencePixelsPerUnit = i5055[1]
  i5054.isFallbackOverlay = !!i5055[2]
  i5054.renderMode = i5055[3]
  i5054.renderOrder = i5055[4]
  i5054.sortingLayerName = i5055[5]
  i5054.sortingOrder = i5055[6]
  i5054.scaleFactor = i5055[7]
  request.r(i5055[8], i5055[9], 0, i5054, 'worldCamera')
  i5054.overrideSorting = !!i5055[10]
  i5054.pixelPerfect = !!i5055[11]
  i5054.targetDisplay = i5055[12]
  i5054.overridePixelPerfect = !!i5055[13]
  i5054.enabled = !!i5055[14]
  return i5054
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5056 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5057 = data
  i5056.m_UiScaleMode = i5057[0]
  i5056.m_ReferencePixelsPerUnit = i5057[1]
  i5056.m_ScaleFactor = i5057[2]
  i5056.m_ReferenceResolution = new pc.Vec2( i5057[3], i5057[4] )
  i5056.m_ScreenMatchMode = i5057[5]
  i5056.m_MatchWidthOrHeight = i5057[6]
  i5056.m_PhysicalUnit = i5057[7]
  i5056.m_FallbackScreenDPI = i5057[8]
  i5056.m_DefaultSpriteDPI = i5057[9]
  i5056.m_DynamicPixelsPerUnit = i5057[10]
  i5056.m_PresetInfoIsWorld = !!i5057[11]
  return i5056
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5058 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5059 = data
  i5058.m_IgnoreReversedGraphics = !!i5059[0]
  i5058.m_BlockingObjects = i5059[1]
  i5058.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5059[2] )
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5061 = data
  i5060.cullTransparentMesh = !!i5061[0]
  return i5060
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5062 = root || request.c( 'UnityEngine.UI.Image' )
  var i5063 = data
  request.r(i5063[0], i5063[1], 0, i5062, 'm_Sprite')
  i5062.m_Type = i5063[2]
  i5062.m_PreserveAspect = !!i5063[3]
  i5062.m_FillCenter = !!i5063[4]
  i5062.m_FillMethod = i5063[5]
  i5062.m_FillAmount = i5063[6]
  i5062.m_FillClockwise = !!i5063[7]
  i5062.m_FillOrigin = i5063[8]
  i5062.m_UseSpriteMesh = !!i5063[9]
  i5062.m_PixelsPerUnitMultiplier = i5063[10]
  request.r(i5063[11], i5063[12], 0, i5062, 'm_Material')
  i5062.m_Maskable = !!i5063[13]
  i5062.m_Color = new pc.Color(i5063[14], i5063[15], i5063[16], i5063[17])
  i5062.m_RaycastTarget = !!i5063[18]
  i5062.m_RaycastPadding = new pc.Vec4( i5063[19], i5063[20], i5063[21], i5063[22] )
  return i5062
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5064 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5065 = data
  i5064.m_hasFontAssetChanged = !!i5065[0]
  request.r(i5065[1], i5065[2], 0, i5064, 'm_baseMaterial')
  i5064.m_maskOffset = new pc.Vec4( i5065[3], i5065[4], i5065[5], i5065[6] )
  i5064.m_text = i5065[7]
  i5064.m_isRightToLeft = !!i5065[8]
  request.r(i5065[9], i5065[10], 0, i5064, 'm_fontAsset')
  request.r(i5065[11], i5065[12], 0, i5064, 'm_sharedMaterial')
  var i5067 = i5065[13]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 2) {
  request.r(i5067[i + 0], i5067[i + 1], 2, i5066, '')
  }
  i5064.m_fontSharedMaterials = i5066
  request.r(i5065[14], i5065[15], 0, i5064, 'm_fontMaterial')
  var i5069 = i5065[16]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 2) {
  request.r(i5069[i + 0], i5069[i + 1], 2, i5068, '')
  }
  i5064.m_fontMaterials = i5068
  i5064.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5065[17], i5065[18], i5065[19], i5065[20])
  i5064.m_fontColor = new pc.Color(i5065[21], i5065[22], i5065[23], i5065[24])
  i5064.m_enableVertexGradient = !!i5065[25]
  i5064.m_colorMode = i5065[26]
  i5064.m_fontColorGradient = request.d('TMPro.VertexGradient', i5065[27], i5064.m_fontColorGradient)
  request.r(i5065[28], i5065[29], 0, i5064, 'm_fontColorGradientPreset')
  request.r(i5065[30], i5065[31], 0, i5064, 'm_spriteAsset')
  i5064.m_tintAllSprites = !!i5065[32]
  request.r(i5065[33], i5065[34], 0, i5064, 'm_StyleSheet')
  i5064.m_TextStyleHashCode = i5065[35]
  i5064.m_overrideHtmlColors = !!i5065[36]
  i5064.m_faceColor = UnityEngine.Color32.ConstructColor(i5065[37], i5065[38], i5065[39], i5065[40])
  i5064.m_fontSize = i5065[41]
  i5064.m_fontSizeBase = i5065[42]
  i5064.m_fontWeight = i5065[43]
  i5064.m_enableAutoSizing = !!i5065[44]
  i5064.m_fontSizeMin = i5065[45]
  i5064.m_fontSizeMax = i5065[46]
  i5064.m_fontStyle = i5065[47]
  i5064.m_HorizontalAlignment = i5065[48]
  i5064.m_VerticalAlignment = i5065[49]
  i5064.m_textAlignment = i5065[50]
  i5064.m_characterSpacing = i5065[51]
  i5064.m_wordSpacing = i5065[52]
  i5064.m_lineSpacing = i5065[53]
  i5064.m_lineSpacingMax = i5065[54]
  i5064.m_paragraphSpacing = i5065[55]
  i5064.m_charWidthMaxAdj = i5065[56]
  i5064.m_TextWrappingMode = i5065[57]
  i5064.m_wordWrappingRatios = i5065[58]
  i5064.m_overflowMode = i5065[59]
  request.r(i5065[60], i5065[61], 0, i5064, 'm_linkedTextComponent')
  request.r(i5065[62], i5065[63], 0, i5064, 'parentLinkedComponent')
  i5064.m_enableKerning = !!i5065[64]
  var i5071 = i5065[65]
  var i5070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.add(i5071[i + 0]);
  }
  i5064.m_ActiveFontFeatures = i5070
  i5064.m_enableExtraPadding = !!i5065[66]
  i5064.checkPaddingRequired = !!i5065[67]
  i5064.m_isRichText = !!i5065[68]
  i5064.m_parseCtrlCharacters = !!i5065[69]
  i5064.m_isOrthographic = !!i5065[70]
  i5064.m_isCullingEnabled = !!i5065[71]
  i5064.m_horizontalMapping = i5065[72]
  i5064.m_verticalMapping = i5065[73]
  i5064.m_uvLineOffset = i5065[74]
  i5064.m_geometrySortingOrder = i5065[75]
  i5064.m_IsTextObjectScaleStatic = !!i5065[76]
  i5064.m_VertexBufferAutoSizeReduction = !!i5065[77]
  i5064.m_useMaxVisibleDescender = !!i5065[78]
  i5064.m_pageToDisplay = i5065[79]
  i5064.m_margin = new pc.Vec4( i5065[80], i5065[81], i5065[82], i5065[83] )
  i5064.m_isUsingLegacyAnimationComponent = !!i5065[84]
  i5064.m_isVolumetricText = !!i5065[85]
  request.r(i5065[86], i5065[87], 0, i5064, 'm_Material')
  i5064.m_EmojiFallbackSupport = !!i5065[88]
  i5064.m_Maskable = !!i5065[89]
  i5064.m_Color = new pc.Color(i5065[90], i5065[91], i5065[92], i5065[93])
  i5064.m_RaycastTarget = !!i5065[94]
  i5064.m_RaycastPadding = new pc.Vec4( i5065[95], i5065[96], i5065[97], i5065[98] )
  return i5064
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5072 = root || request.c( 'TMPro.VertexGradient' )
  var i5073 = data
  i5072.topLeft = new pc.Color(i5073[0], i5073[1], i5073[2], i5073[3])
  i5072.topRight = new pc.Color(i5073[4], i5073[5], i5073[6], i5073[7])
  i5072.bottomLeft = new pc.Color(i5073[8], i5073[9], i5073[10], i5073[11])
  i5072.bottomRight = new pc.Color(i5073[12], i5073[13], i5073[14], i5073[15])
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5077 = data
  i5076.center = new pc.Vec3( i5077[0], i5077[1], i5077[2] )
  i5076.radius = i5077[3]
  i5076.enabled = !!i5077[4]
  i5076.isTrigger = !!i5077[5]
  request.r(i5077[6], i5077[7], 0, i5076, 'material')
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5079 = data
  request.r(i5079[0], i5079[1], 0, i5078, 'animatorController')
  request.r(i5079[2], i5079[3], 0, i5078, 'avatar')
  i5078.updateMode = i5079[4]
  i5078.hasTransformHierarchy = !!i5079[5]
  i5078.applyRootMotion = !!i5079[6]
  var i5081 = i5079[7]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 2) {
  request.r(i5081[i + 0], i5081[i + 1], 2, i5080, '')
  }
  i5078.humanBones = i5080
  i5078.enabled = !!i5079[8]
  return i5078
}

Deserializers["EventAnim"] = function (request, data, root) {
  var i5084 = root || request.c( 'EventAnim' )
  var i5085 = data
  var i5087 = i5085[0]
  var i5086 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.add(request.d('UnityEngine.Events.UnityEvent', i5087[i + 0]));
  }
  i5084.animEvents = i5086
  var i5089 = i5085[1]
  var i5088 = new (System.Collections.Generic.List$1(Bridge.ns('EventAnim+MoveSequence')))
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.add(request.d('EventAnim+MoveSequence', i5089[i + 0]));
  }
  i5084.moveSequences = i5088
  return i5084
}

Deserializers["EventAnim+MoveSequence"] = function (request, data, root) {
  var i5094 = root || request.c( 'EventAnim+MoveSequence' )
  var i5095 = data
  var i5097 = i5095[0]
  var i5096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5097.length; i += 2) {
  request.r(i5097[i + 0], i5097[i + 1], 1, i5096, '')
  }
  i5094.itemsToMove = i5096
  var i5099 = i5095[1]
  var i5098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5099.length; i += 2) {
  request.r(i5099[i + 0], i5099[i + 1], 1, i5098, '')
  }
  i5094.targetPositions = i5098
  i5094.moveDuration = i5095[2]
  i5094.delayBetweenItems = i5095[3]
  i5094.isJump = !!i5095[4]
  i5094.jumpPower = i5095[5]
  i5094.changeSortingOrder = !!i5095[6]
  i5094.targetSortingOrder = i5095[7]
  var i5101 = i5095[8]
  var i5100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i5101.length; i += 2) {
  request.r(i5101[i + 0], i5101[i + 1], 1, i5100, '')
  }
  i5094.spritesToHideOnComplete = i5100
  var i5103 = i5095[9]
  var i5102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5103.length; i += 2) {
  request.r(i5103[i + 0], i5103[i + 1], 1, i5102, '')
  }
  i5094.objectsToEnableOnComplete = i5102
  return i5094
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i5106 = root || request.c( 'PlaySound' )
  var i5107 = data
  i5106.sound1 = i5107[0]
  i5106.sound2 = i5107[1]
  i5106.sound3 = i5107[2]
  return i5106
}

Deserializers["TongItem"] = function (request, data, root) {
  var i5108 = root || request.c( 'TongItem' )
  var i5109 = data
  request.r(i5109[0], i5109[1], 0, i5108, 'holdPoint')
  i5108.pickableLayer = UnityEngine.LayerMask.FromIntegerValue( i5109[2] )
  i5108.basketLayer = UnityEngine.LayerMask.FromIntegerValue( i5109[3] )
  i5108.detectRadius = i5109[4]
  i5108.randomRotateRange = new pc.Vec2( i5109[5], i5109[6] )
  i5108.flyToTongDuration = i5109[7]
  i5108.flyToBasketDuration = i5109[8]
  i5108.jumpPower = i5109[9]
  i5108.finalSortingOrder = i5109[10]
  i5108.pickSound = i5109[11]
  i5108.dropIntoBasketSound = i5109[12]
  var i5111 = i5109[13]
  var i5110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5111.length; i += 2) {
  request.r(i5111[i + 0], i5111[i + 1], 1, i5110, '')
  }
  i5108.requiredPickables = i5110
  i5108.itemType = i5109[14]
  request.r(i5109[15], i5109[16], 0, i5108, 'dropTarget')
  i5108.dropDistanceThreshold = i5109[17]
  i5108.hideSpriteOnDrop = !!i5109[18]
  i5108.disableColliderOnComplete = !!i5109[19]
  i5108.isTool = !!i5109[20]
  request.r(i5109[21], i5109[22], 0, i5108, 'customDragBounds')
  i5108.increaseSortingLayerOnDrag = !!i5109[23]
  i5108.isLocked = !!i5109[24]
  i5108.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i5109[25], i5108.onInteractWhileLocked)
  i5108.onClick = request.d('UnityEngine.Events.UnityEvent', i5109[26], i5108.onClick)
  i5108.onDrop = request.d('UnityEngine.Events.UnityEvent', i5109[27], i5108.onDrop)
  i5108.onDragStart = request.d('UnityEngine.Events.UnityEvent', i5109[28], i5108.onDragStart)
  i5108.onReturn = request.d('UnityEngine.Events.UnityEvent', i5109[29], i5108.onReturn)
  i5108.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i5109[30], i5108.onAnimFinished)
  i5108.isSequentialClick = !!i5109[31]
  var i5113 = i5109[32]
  var i5112 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i5113.length; i += 1) {
    i5112.add(request.d('AnimObjectData', i5113[i + 0]));
  }
  i5108.animationObjects = i5112
  i5108.interactSound = i5109[33]
  i5108.sequenceLoopSound = i5109[34]
  var i5115 = i5109[35]
  var i5114 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.add(i5115[i + 0]);
  }
  i5108.fxSoundsStartAnim = i5114
  var i5117 = i5109[36]
  var i5116 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.add(i5117[i + 0]);
  }
  i5108.fxSoundsAfterAnim = i5116
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i5119 = data
  i5118.frontSortingLayerID = i5119[0]
  i5118.frontSortingOrder = i5119[1]
  i5118.backSortingLayerID = i5119[2]
  i5118.backSortingOrder = i5119[3]
  i5118.alphaCutoff = i5119[4]
  request.r(i5119[5], i5119[6], 0, i5118, 'sprite')
  i5118.tileMode = i5119[7]
  i5118.isCustomRangeActive = !!i5119[8]
  i5118.spriteSortPoint = i5119[9]
  i5118.enabled = !!i5119[10]
  request.r(i5119[11], i5119[12], 0, i5118, 'sharedMaterial')
  var i5121 = i5119[13]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 2) {
  request.r(i5121[i + 0], i5121[i + 1], 2, i5120, '')
  }
  i5118.sharedMaterials = i5120
  i5118.receiveShadows = !!i5119[14]
  i5118.shadowCastingMode = i5119[15]
  i5118.sortingLayerID = i5119[16]
  i5118.sortingOrder = i5119[17]
  i5118.lightmapIndex = i5119[18]
  i5118.lightmapSceneIndex = i5119[19]
  i5118.lightmapScaleOffset = new pc.Vec4( i5119[20], i5119[21], i5119[22], i5119[23] )
  i5118.lightProbeUsage = i5119[24]
  i5118.reflectionProbeUsage = i5119[25]
  return i5118
}

Deserializers["BasketAnim"] = function (request, data, root) {
  var i5122 = root || request.c( 'BasketAnim' )
  var i5123 = data
  request.r(i5123[0], i5123[1], 0, i5122, 'activeObject')
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5125 = data
  i5124.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5125[0], i5124.main)
  i5124.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5125[1], i5124.colorBySpeed)
  i5124.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5125[2], i5124.colorOverLifetime)
  i5124.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5125[3], i5124.emission)
  i5124.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5125[4], i5124.rotationBySpeed)
  i5124.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5125[5], i5124.rotationOverLifetime)
  i5124.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5125[6], i5124.shape)
  i5124.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5125[7], i5124.sizeBySpeed)
  i5124.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5125[8], i5124.sizeOverLifetime)
  i5124.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5125[9], i5124.textureSheetAnimation)
  i5124.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5125[10], i5124.velocityOverLifetime)
  i5124.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5125[11], i5124.noise)
  i5124.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5125[12], i5124.inheritVelocity)
  i5124.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5125[13], i5124.forceOverLifetime)
  i5124.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5125[14], i5124.limitVelocityOverLifetime)
  i5124.useAutoRandomSeed = !!i5125[15]
  i5124.randomSeed = i5125[16]
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5126 = root || new pc.ParticleSystemMain()
  var i5127 = data
  i5126.duration = i5127[0]
  i5126.loop = !!i5127[1]
  i5126.prewarm = !!i5127[2]
  i5126.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[3], i5126.startDelay)
  i5126.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[4], i5126.startLifetime)
  i5126.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[5], i5126.startSpeed)
  i5126.startSize3D = !!i5127[6]
  i5126.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[7], i5126.startSizeX)
  i5126.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[8], i5126.startSizeY)
  i5126.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[9], i5126.startSizeZ)
  i5126.startRotation3D = !!i5127[10]
  i5126.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[11], i5126.startRotationX)
  i5126.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[12], i5126.startRotationY)
  i5126.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[13], i5126.startRotationZ)
  i5126.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5127[14], i5126.startColor)
  i5126.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5127[15], i5126.gravityModifier)
  i5126.simulationSpace = i5127[16]
  request.r(i5127[17], i5127[18], 0, i5126, 'customSimulationSpace')
  i5126.simulationSpeed = i5127[19]
  i5126.useUnscaledTime = !!i5127[20]
  i5126.scalingMode = i5127[21]
  i5126.playOnAwake = !!i5127[22]
  i5126.maxParticles = i5127[23]
  i5126.emitterVelocityMode = i5127[24]
  i5126.stopAction = i5127[25]
  return i5126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5128 = root || new pc.MinMaxCurve()
  var i5129 = data
  i5128.mode = i5129[0]
  i5128.curveMin = new pc.AnimationCurve( { keys_flow: i5129[1] } )
  i5128.curveMax = new pc.AnimationCurve( { keys_flow: i5129[2] } )
  i5128.curveMultiplier = i5129[3]
  i5128.constantMin = i5129[4]
  i5128.constantMax = i5129[5]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5130 = root || new pc.MinMaxGradient()
  var i5131 = data
  i5130.mode = i5131[0]
  i5130.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5131[1], i5130.gradientMin)
  i5130.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5131[2], i5130.gradientMax)
  i5130.colorMin = new pc.Color(i5131[3], i5131[4], i5131[5], i5131[6])
  i5130.colorMax = new pc.Color(i5131[7], i5131[8], i5131[9], i5131[10])
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5133 = data
  i5132.mode = i5133[0]
  var i5135 = i5133[1]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5135[i + 0]) );
  }
  i5132.colorKeys = i5134
  var i5137 = i5133[2]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5137[i + 0]) );
  }
  i5132.alphaKeys = i5136
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5138 = root || new pc.ParticleSystemColorBySpeed()
  var i5139 = data
  i5138.enabled = !!i5139[0]
  i5138.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5139[1], i5138.color)
  i5138.range = new pc.Vec2( i5139[2], i5139[3] )
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5143 = data
  i5142.color = new pc.Color(i5143[0], i5143[1], i5143[2], i5143[3])
  i5142.time = i5143[4]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5147 = data
  i5146.alpha = i5147[0]
  i5146.time = i5147[1]
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5148 = root || new pc.ParticleSystemColorOverLifetime()
  var i5149 = data
  i5148.enabled = !!i5149[0]
  i5148.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5149[1], i5148.color)
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5150 = root || new pc.ParticleSystemEmitter()
  var i5151 = data
  i5150.enabled = !!i5151[0]
  i5150.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[1], i5150.rateOverTime)
  i5150.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[2], i5150.rateOverDistance)
  var i5153 = i5151[3]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5153[i + 0]) );
  }
  i5150.bursts = i5152
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5156 = root || new pc.ParticleSystemBurst()
  var i5157 = data
  i5156.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[0], i5156.count)
  i5156.cycleCount = i5157[1]
  i5156.minCount = i5157[2]
  i5156.maxCount = i5157[3]
  i5156.repeatInterval = i5157[4]
  i5156.time = i5157[5]
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5158 = root || new pc.ParticleSystemRotationBySpeed()
  var i5159 = data
  i5158.enabled = !!i5159[0]
  i5158.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[1], i5158.x)
  i5158.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[2], i5158.y)
  i5158.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[3], i5158.z)
  i5158.separateAxes = !!i5159[4]
  i5158.range = new pc.Vec2( i5159[5], i5159[6] )
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5160 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5161 = data
  i5160.enabled = !!i5161[0]
  i5160.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5161[1], i5160.x)
  i5160.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5161[2], i5160.y)
  i5160.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5161[3], i5160.z)
  i5160.separateAxes = !!i5161[4]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5162 = root || new pc.ParticleSystemShape()
  var i5163 = data
  i5162.enabled = !!i5163[0]
  i5162.shapeType = i5163[1]
  i5162.randomDirectionAmount = i5163[2]
  i5162.sphericalDirectionAmount = i5163[3]
  i5162.randomPositionAmount = i5163[4]
  i5162.alignToDirection = !!i5163[5]
  i5162.radius = i5163[6]
  i5162.radiusMode = i5163[7]
  i5162.radiusSpread = i5163[8]
  i5162.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5163[9], i5162.radiusSpeed)
  i5162.radiusThickness = i5163[10]
  i5162.angle = i5163[11]
  i5162.length = i5163[12]
  i5162.boxThickness = new pc.Vec3( i5163[13], i5163[14], i5163[15] )
  i5162.meshShapeType = i5163[16]
  request.r(i5163[17], i5163[18], 0, i5162, 'mesh')
  request.r(i5163[19], i5163[20], 0, i5162, 'meshRenderer')
  request.r(i5163[21], i5163[22], 0, i5162, 'skinnedMeshRenderer')
  i5162.useMeshMaterialIndex = !!i5163[23]
  i5162.meshMaterialIndex = i5163[24]
  i5162.useMeshColors = !!i5163[25]
  i5162.normalOffset = i5163[26]
  i5162.arc = i5163[27]
  i5162.arcMode = i5163[28]
  i5162.arcSpread = i5163[29]
  i5162.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5163[30], i5162.arcSpeed)
  i5162.donutRadius = i5163[31]
  i5162.position = new pc.Vec3( i5163[32], i5163[33], i5163[34] )
  i5162.rotation = new pc.Vec3( i5163[35], i5163[36], i5163[37] )
  i5162.scale = new pc.Vec3( i5163[38], i5163[39], i5163[40] )
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5164 = root || new pc.ParticleSystemSizeBySpeed()
  var i5165 = data
  i5164.enabled = !!i5165[0]
  i5164.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[1], i5164.x)
  i5164.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[2], i5164.y)
  i5164.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[3], i5164.z)
  i5164.separateAxes = !!i5165[4]
  i5164.range = new pc.Vec2( i5165[5], i5165[6] )
  return i5164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5166 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5167 = data
  i5166.enabled = !!i5167[0]
  i5166.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5167[1], i5166.x)
  i5166.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5167[2], i5166.y)
  i5166.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5167[3], i5166.z)
  i5166.separateAxes = !!i5167[4]
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5168 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5169 = data
  i5168.enabled = !!i5169[0]
  i5168.mode = i5169[1]
  i5168.animation = i5169[2]
  i5168.numTilesX = i5169[3]
  i5168.numTilesY = i5169[4]
  i5168.useRandomRow = !!i5169[5]
  i5168.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5169[6], i5168.frameOverTime)
  i5168.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5169[7], i5168.startFrame)
  i5168.cycleCount = i5169[8]
  i5168.rowIndex = i5169[9]
  i5168.flipU = i5169[10]
  i5168.flipV = i5169[11]
  i5168.spriteCount = i5169[12]
  var i5171 = i5169[13]
  var i5170 = []
  for(var i = 0; i < i5171.length; i += 2) {
  request.r(i5171[i + 0], i5171[i + 1], 2, i5170, '')
  }
  i5168.sprites = i5170
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5174 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5175 = data
  i5174.enabled = !!i5175[0]
  i5174.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[1], i5174.x)
  i5174.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[2], i5174.y)
  i5174.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[3], i5174.z)
  i5174.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[4], i5174.radial)
  i5174.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[5], i5174.speedModifier)
  i5174.space = i5175[6]
  i5174.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[7], i5174.orbitalX)
  i5174.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[8], i5174.orbitalY)
  i5174.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[9], i5174.orbitalZ)
  i5174.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[10], i5174.orbitalOffsetX)
  i5174.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[11], i5174.orbitalOffsetY)
  i5174.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5175[12], i5174.orbitalOffsetZ)
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5176 = root || new pc.ParticleSystemNoise()
  var i5177 = data
  i5176.enabled = !!i5177[0]
  i5176.separateAxes = !!i5177[1]
  i5176.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[2], i5176.strengthX)
  i5176.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[3], i5176.strengthY)
  i5176.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[4], i5176.strengthZ)
  i5176.frequency = i5177[5]
  i5176.damping = !!i5177[6]
  i5176.octaveCount = i5177[7]
  i5176.octaveMultiplier = i5177[8]
  i5176.octaveScale = i5177[9]
  i5176.quality = i5177[10]
  i5176.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[11], i5176.scrollSpeed)
  i5176.scrollSpeedMultiplier = i5177[12]
  i5176.remapEnabled = !!i5177[13]
  i5176.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[14], i5176.remapX)
  i5176.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[15], i5176.remapY)
  i5176.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[16], i5176.remapZ)
  i5176.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[17], i5176.positionAmount)
  i5176.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[18], i5176.rotationAmount)
  i5176.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5177[19], i5176.sizeAmount)
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5178 = root || new pc.ParticleSystemInheritVelocity()
  var i5179 = data
  i5178.enabled = !!i5179[0]
  i5178.mode = i5179[1]
  i5178.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5179[2], i5178.curve)
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5180 = root || new pc.ParticleSystemForceOverLifetime()
  var i5181 = data
  i5180.enabled = !!i5181[0]
  i5180.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[1], i5180.x)
  i5180.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[2], i5180.y)
  i5180.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5181[3], i5180.z)
  i5180.space = i5181[4]
  i5180.randomized = !!i5181[5]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5182 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5183 = data
  i5182.enabled = !!i5183[0]
  i5182.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5183[1], i5182.limit)
  i5182.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5183[2], i5182.limitX)
  i5182.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5183[3], i5182.limitY)
  i5182.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5183[4], i5182.limitZ)
  i5182.dampen = i5183[5]
  i5182.separateAxes = !!i5183[6]
  i5182.space = i5183[7]
  i5182.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5183[8], i5182.drag)
  i5182.multiplyDragByParticleSize = !!i5183[9]
  i5182.multiplyDragByParticleVelocity = !!i5183[10]
  return i5182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5185 = data
  request.r(i5185[0], i5185[1], 0, i5184, 'mesh')
  i5184.meshCount = i5185[2]
  i5184.activeVertexStreamsCount = i5185[3]
  i5184.alignment = i5185[4]
  i5184.renderMode = i5185[5]
  i5184.sortMode = i5185[6]
  i5184.lengthScale = i5185[7]
  i5184.velocityScale = i5185[8]
  i5184.cameraVelocityScale = i5185[9]
  i5184.normalDirection = i5185[10]
  i5184.sortingFudge = i5185[11]
  i5184.minParticleSize = i5185[12]
  i5184.maxParticleSize = i5185[13]
  i5184.pivot = new pc.Vec3( i5185[14], i5185[15], i5185[16] )
  request.r(i5185[17], i5185[18], 0, i5184, 'trailMaterial')
  i5184.applyActiveColorSpace = !!i5185[19]
  i5184.enabled = !!i5185[20]
  request.r(i5185[21], i5185[22], 0, i5184, 'sharedMaterial')
  var i5187 = i5185[23]
  var i5186 = []
  for(var i = 0; i < i5187.length; i += 2) {
  request.r(i5187[i + 0], i5187[i + 1], 2, i5186, '')
  }
  i5184.sharedMaterials = i5186
  i5184.receiveShadows = !!i5185[24]
  i5184.shadowCastingMode = i5185[25]
  i5184.sortingLayerID = i5185[26]
  i5184.sortingOrder = i5185[27]
  i5184.lightmapIndex = i5185[28]
  i5184.lightmapSceneIndex = i5185[29]
  i5184.lightmapScaleOffset = new pc.Vec4( i5185[30], i5185[31], i5185[32], i5185[33] )
  i5184.lightProbeUsage = i5185[34]
  i5184.reflectionProbeUsage = i5185[35]
  return i5184
}

Deserializers["CuttingSetup"] = function (request, data, root) {
  var i5188 = root || request.c( 'CuttingSetup' )
  var i5189 = data
  request.r(i5189[0], i5189[1], 0, i5188, 'knifeProcessor')
  i5188.requiredClicks = i5189[2]
  request.r(i5189[3], i5189[4], 0, i5188, 'maskTransform')
  i5188.maskStartPos = new pc.Vec3( i5189[5], i5189[6], i5189[7] )
  i5188.maskEndPos = new pc.Vec3( i5189[8], i5189[9], i5189[10] )
  i5188.knifeStartPos = new pc.Vec3( i5189[11], i5189[12], i5189[13] )
  i5188.knifeEndPos = new pc.Vec3( i5189[14], i5189[15], i5189[16] )
  i5188.onCuttingCompleted = request.d('UnityEngine.Events.UnityEvent', i5189[17], i5188.onCuttingCompleted)
  return i5188
}

Deserializers["AutoProcessItem"] = function (request, data, root) {
  var i5190 = root || request.c( 'AutoProcessItem' )
  var i5191 = data
  i5190.processTime = i5191[0]
  request.r(i5191[1], i5191[2], 0, i5190, 'toolToActivate')
  i5190.onProcessStarted = request.d('UnityEngine.Events.UnityEvent', i5191[3], i5190.onProcessStarted)
  i5190.onProcessCompleted = request.d('UnityEngine.Events.UnityEvent', i5191[4], i5190.onProcessCompleted)
  return i5190
}

Deserializers["UnlockCondition"] = function (request, data, root) {
  var i5192 = root || request.c( 'UnlockCondition' )
  var i5193 = data
  i5192.conditionsToMeet = i5193[0]
  i5192.delayBeforeUnlock = i5193[1]
  var i5195 = i5193[2]
  var i5194 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i5195.length; i += 2) {
  request.r(i5195[i + 0], i5195[i + 1], 1, i5194, '')
  }
  i5192.collidersToEnable = i5194
  var i5197 = i5193[3]
  var i5196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5197.length; i += 2) {
  request.r(i5197[i + 0], i5197[i + 1], 1, i5196, '')
  }
  i5192.objectsToEnable = i5196
  i5192.onUnlocked = request.d('UnityEngine.Events.UnityEvent', i5193[4], i5192.onUnlocked)
  return i5192
}

Deserializers["SwipeToProcessItem"] = function (request, data, root) {
  var i5200 = root || request.c( 'SwipeToProcessItem' )
  var i5201 = data
  i5200.swipeDistanceRequired = i5201[0]
  i5200.requiredFlips = i5201[1]
  i5200.onSingleFlip = request.d('UnityEngine.Events.UnityEvent', i5201[2], i5200.onSingleFlip)
  i5200.onCompleted = request.d('UnityEngine.Events.UnityEvent', i5201[3], i5200.onCompleted)
  i5200.onCompletedAndReleased = request.d('UnityEngine.Events.UnityEvent', i5201[4], i5200.onCompletedAndReleased)
  i5200.onBeginSwipe = request.d('UnityEngine.Events.UnityEvent', i5201[5], i5200.onBeginSwipe)
  i5200.onEndSwipe = request.d('UnityEngine.Events.UnityEvent', i5201[6], i5200.onEndSwipe)
  request.r(i5201[7], i5201[8], 0, i5200, 'sideAObject')
  request.r(i5201[9], i5201[10], 0, i5200, 'sideBObject')
  request.r(i5201[11], i5201[12], 0, i5200, 'progressBarTransform')
  i5200.isVerticalBar = !!i5201[13]
  return i5200
}

Deserializers["DropTargetSlot"] = function (request, data, root) {
  var i5202 = root || request.c( 'DropTargetSlot' )
  var i5203 = data
  i5202.isOccupied = !!i5203[0]
  request.r(i5203[1], i5203[2], 0, i5202, 'currentItem')
  return i5202
}

Deserializers["ClickToProcessItem"] = function (request, data, root) {
  var i5204 = root || request.c( 'ClickToProcessItem' )
  var i5205 = data
  i5204.requiredClicks = i5205[0]
  i5204.onSingleClick = request.d('UnityEngine.Events.UnityEvent', i5205[1], i5204.onSingleClick)
  i5204.onCompleted = request.d('UnityEngine.Events.UnityEvent', i5205[2], i5204.onCompleted)
  request.r(i5205[3], i5205[4], 0, i5204, 'maskTransform')
  i5204.maskStartPos = new pc.Vec3( i5205[5], i5205[6], i5205[7] )
  i5204.maskEndPos = new pc.Vec3( i5205[8], i5205[9], i5205[10] )
  request.r(i5205[11], i5205[12], 0, i5204, 'moveObject')
  i5204.moveStartPos = new pc.Vec3( i5205[13], i5205[14], i5205[15] )
  i5204.moveEndPos = new pc.Vec3( i5205[16], i5205[17], i5205[18] )
  return i5204
}

Deserializers["DragBetweenBoundsToProcess"] = function (request, data, root) {
  var i5206 = root || request.c( 'DragBetweenBoundsToProcess' )
  var i5207 = data
  request.r(i5207[0], i5207[1], 0, i5206, 'leftPoint')
  request.r(i5207[2], i5207[3], 0, i5206, 'rightPoint')
  i5206.hitThreshold = i5207[4]
  i5206.requiredHits = i5207[5]
  i5206.onHitBound = request.d('UnityEngine.Events.UnityEvent', i5207[6], i5206.onHitBound)
  i5206.onCompleted = request.d('UnityEngine.Events.UnityEvent', i5207[7], i5206.onCompleted)
  request.r(i5207[8], i5207[9], 0, i5206, 'progressBarTransform')
  i5206.isVerticalBar = !!i5207[10]
  request.r(i5207[11], i5207[12], 0, i5206, 'toggleObjectA')
  request.r(i5207[13], i5207[14], 0, i5206, 'toggleObjectB')
  return i5206
}

Deserializers["ItemSpawner"] = function (request, data, root) {
  var i5208 = root || request.c( 'ItemSpawner' )
  var i5209 = data
  request.r(i5209[0], i5209[1], 0, i5208, 'prefabToSpawn')
  i5208.maxSpawnCount = i5209[2]
  i5208.onSpawn = request.d('UnityEngine.Events.UnityEvent', i5209[3], i5208.onSpawn)
  request.r(i5209[4], i5209[5], 0, i5208, 'dropTargetForSpawnedItem')
  i5208.autoStartDrag = !!i5209[6]
  var i5211 = i5209[7]
  var i5210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5211.length; i += 2) {
  request.r(i5211[i + 0], i5211[i + 1], 1, i5210, '')
  }
  i5208.objectsToEnableOnSuccess = i5210
  i5208.onSpawnedItemSuccess = request.d('UnityEngine.Events.UnityEvent', i5209[8], i5208.onSpawnedItemSuccess)
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5213 = data
  request.r(i5213[0], i5213[1], 0, i5212, 'additionalVertexStreams')
  i5212.enabled = !!i5213[2]
  request.r(i5213[3], i5213[4], 0, i5212, 'sharedMaterial')
  var i5215 = i5213[5]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 2) {
  request.r(i5215[i + 0], i5215[i + 1], 2, i5214, '')
  }
  i5212.sharedMaterials = i5214
  i5212.receiveShadows = !!i5213[6]
  i5212.shadowCastingMode = i5213[7]
  i5212.sortingLayerID = i5213[8]
  i5212.sortingOrder = i5213[9]
  i5212.lightmapIndex = i5213[10]
  i5212.lightmapSceneIndex = i5213[11]
  i5212.lightmapScaleOffset = new pc.Vec4( i5213[12], i5213[13], i5213[14], i5213[15] )
  i5212.lightProbeUsage = i5213[16]
  i5212.reflectionProbeUsage = i5213[17]
  return i5212
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i5216 = root || request.c( 'TMPro.TextMeshPro' )
  var i5217 = data
  i5216._SortingLayer = i5217[0]
  i5216._SortingLayerID = i5217[1]
  i5216._SortingOrder = i5217[2]
  i5216.m_hasFontAssetChanged = !!i5217[3]
  request.r(i5217[4], i5217[5], 0, i5216, 'm_renderer')
  i5216.m_maskType = i5217[6]
  i5216.m_text = i5217[7]
  i5216.m_isRightToLeft = !!i5217[8]
  request.r(i5217[9], i5217[10], 0, i5216, 'm_fontAsset')
  request.r(i5217[11], i5217[12], 0, i5216, 'm_sharedMaterial')
  var i5219 = i5217[13]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 2) {
  request.r(i5219[i + 0], i5219[i + 1], 2, i5218, '')
  }
  i5216.m_fontSharedMaterials = i5218
  request.r(i5217[14], i5217[15], 0, i5216, 'm_fontMaterial')
  var i5221 = i5217[16]
  var i5220 = []
  for(var i = 0; i < i5221.length; i += 2) {
  request.r(i5221[i + 0], i5221[i + 1], 2, i5220, '')
  }
  i5216.m_fontMaterials = i5220
  i5216.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5217[17], i5217[18], i5217[19], i5217[20])
  i5216.m_fontColor = new pc.Color(i5217[21], i5217[22], i5217[23], i5217[24])
  i5216.m_enableVertexGradient = !!i5217[25]
  i5216.m_colorMode = i5217[26]
  i5216.m_fontColorGradient = request.d('TMPro.VertexGradient', i5217[27], i5216.m_fontColorGradient)
  request.r(i5217[28], i5217[29], 0, i5216, 'm_fontColorGradientPreset')
  request.r(i5217[30], i5217[31], 0, i5216, 'm_spriteAsset')
  i5216.m_tintAllSprites = !!i5217[32]
  request.r(i5217[33], i5217[34], 0, i5216, 'm_StyleSheet')
  i5216.m_TextStyleHashCode = i5217[35]
  i5216.m_overrideHtmlColors = !!i5217[36]
  i5216.m_faceColor = UnityEngine.Color32.ConstructColor(i5217[37], i5217[38], i5217[39], i5217[40])
  i5216.m_fontSize = i5217[41]
  i5216.m_fontSizeBase = i5217[42]
  i5216.m_fontWeight = i5217[43]
  i5216.m_enableAutoSizing = !!i5217[44]
  i5216.m_fontSizeMin = i5217[45]
  i5216.m_fontSizeMax = i5217[46]
  i5216.m_fontStyle = i5217[47]
  i5216.m_HorizontalAlignment = i5217[48]
  i5216.m_VerticalAlignment = i5217[49]
  i5216.m_textAlignment = i5217[50]
  i5216.m_characterSpacing = i5217[51]
  i5216.m_wordSpacing = i5217[52]
  i5216.m_lineSpacing = i5217[53]
  i5216.m_lineSpacingMax = i5217[54]
  i5216.m_paragraphSpacing = i5217[55]
  i5216.m_charWidthMaxAdj = i5217[56]
  i5216.m_TextWrappingMode = i5217[57]
  i5216.m_wordWrappingRatios = i5217[58]
  i5216.m_overflowMode = i5217[59]
  request.r(i5217[60], i5217[61], 0, i5216, 'm_linkedTextComponent')
  request.r(i5217[62], i5217[63], 0, i5216, 'parentLinkedComponent')
  i5216.m_enableKerning = !!i5217[64]
  var i5223 = i5217[65]
  var i5222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5223.length; i += 1) {
    i5222.add(i5223[i + 0]);
  }
  i5216.m_ActiveFontFeatures = i5222
  i5216.m_enableExtraPadding = !!i5217[66]
  i5216.checkPaddingRequired = !!i5217[67]
  i5216.m_isRichText = !!i5217[68]
  i5216.m_parseCtrlCharacters = !!i5217[69]
  i5216.m_isOrthographic = !!i5217[70]
  i5216.m_isCullingEnabled = !!i5217[71]
  i5216.m_horizontalMapping = i5217[72]
  i5216.m_verticalMapping = i5217[73]
  i5216.m_uvLineOffset = i5217[74]
  i5216.m_geometrySortingOrder = i5217[75]
  i5216.m_IsTextObjectScaleStatic = !!i5217[76]
  i5216.m_VertexBufferAutoSizeReduction = !!i5217[77]
  i5216.m_useMaxVisibleDescender = !!i5217[78]
  i5216.m_pageToDisplay = i5217[79]
  i5216.m_margin = new pc.Vec4( i5217[80], i5217[81], i5217[82], i5217[83] )
  i5216.m_isUsingLegacyAnimationComponent = !!i5217[84]
  i5216.m_isVolumetricText = !!i5217[85]
  request.r(i5217[86], i5217[87], 0, i5216, 'm_Material')
  i5216.m_EmojiFallbackSupport = !!i5217[88]
  i5216.m_Maskable = !!i5217[89]
  i5216.m_Color = new pc.Color(i5217[90], i5217[91], i5217[92], i5217[93])
  i5216.m_RaycastTarget = !!i5217[94]
  i5216.m_RaycastPadding = new pc.Vec4( i5217[95], i5217[96], i5217[97], i5217[98] )
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5225 = data
  request.r(i5225[0], i5225[1], 0, i5224, 'sharedMesh')
  return i5224
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5226 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5227 = data
  request.r(i5227[0], i5227[1], 0, i5226, 'm_FirstSelected')
  i5226.m_sendNavigationEvents = !!i5227[2]
  i5226.m_DragThreshold = i5227[3]
  return i5226
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5228 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5229 = data
  i5228.m_HorizontalAxis = i5229[0]
  i5228.m_VerticalAxis = i5229[1]
  i5228.m_SubmitButton = i5229[2]
  i5228.m_CancelButton = i5229[3]
  i5228.m_InputActionsPerSecond = i5229[4]
  i5228.m_RepeatDelay = i5229[5]
  i5228.m_ForceModuleActive = !!i5229[6]
  i5228.m_SendPointerHoverToParent = !!i5229[7]
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5231 = data
  i5230.ambientIntensity = i5231[0]
  i5230.reflectionIntensity = i5231[1]
  i5230.ambientMode = i5231[2]
  i5230.ambientLight = new pc.Color(i5231[3], i5231[4], i5231[5], i5231[6])
  i5230.ambientSkyColor = new pc.Color(i5231[7], i5231[8], i5231[9], i5231[10])
  i5230.ambientGroundColor = new pc.Color(i5231[11], i5231[12], i5231[13], i5231[14])
  i5230.ambientEquatorColor = new pc.Color(i5231[15], i5231[16], i5231[17], i5231[18])
  i5230.fogColor = new pc.Color(i5231[19], i5231[20], i5231[21], i5231[22])
  i5230.fogEndDistance = i5231[23]
  i5230.fogStartDistance = i5231[24]
  i5230.fogDensity = i5231[25]
  i5230.fog = !!i5231[26]
  request.r(i5231[27], i5231[28], 0, i5230, 'skybox')
  i5230.fogMode = i5231[29]
  var i5233 = i5231[30]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5233[i + 0]) );
  }
  i5230.lightmaps = i5232
  i5230.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5231[31], i5230.lightProbes)
  i5230.lightmapsMode = i5231[32]
  i5230.mixedBakeMode = i5231[33]
  i5230.environmentLightingMode = i5231[34]
  i5230.ambientProbe = new pc.SphericalHarmonicsL2(i5231[35])
  i5230.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5231[36])
  i5230.useReferenceAmbientProbe = !!i5231[37]
  request.r(i5231[38], i5231[39], 0, i5230, 'customReflection')
  request.r(i5231[40], i5231[41], 0, i5230, 'defaultReflection')
  i5230.defaultReflectionMode = i5231[42]
  i5230.defaultReflectionResolution = i5231[43]
  i5230.sunLightObjectId = i5231[44]
  i5230.pixelLightCount = i5231[45]
  i5230.defaultReflectionHDR = !!i5231[46]
  i5230.hasLightDataAsset = !!i5231[47]
  i5230.hasManualGenerate = !!i5231[48]
  return i5230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5237 = data
  request.r(i5237[0], i5237[1], 0, i5236, 'lightmapColor')
  request.r(i5237[2], i5237[3], 0, i5236, 'lightmapDirection')
  request.r(i5237[4], i5237[5], 0, i5236, 'shadowMask')
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5238 = root || new UnityEngine.LightProbes()
  var i5239 = data
  return i5238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5247 = data
  var i5249 = i5247[0]
  var i5248 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5249.length; i += 1) {
    i5248.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5249[i + 0]));
  }
  i5246.ShaderCompilationErrors = i5248
  i5246.name = i5247[1]
  i5246.guid = i5247[2]
  var i5251 = i5247[3]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.push( i5251[i + 0] );
  }
  i5246.shaderDefinedKeywords = i5250
  var i5253 = i5247[4]
  var i5252 = []
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5253[i + 0]) );
  }
  i5246.passes = i5252
  var i5255 = i5247[5]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5255[i + 0]) );
  }
  i5246.usePasses = i5254
  var i5257 = i5247[6]
  var i5256 = []
  for(var i = 0; i < i5257.length; i += 1) {
    i5256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5257[i + 0]) );
  }
  i5246.defaultParameterValues = i5256
  request.r(i5247[7], i5247[8], 0, i5246, 'unityFallbackShader')
  i5246.readDepth = !!i5247[9]
  i5246.hasDepthOnlyPass = !!i5247[10]
  i5246.isCreatedByShaderGraph = !!i5247[11]
  i5246.disableBatching = !!i5247[12]
  i5246.compiled = !!i5247[13]
  return i5246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5261 = data
  i5260.shaderName = i5261[0]
  i5260.errorMessage = i5261[1]
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5266 = root || new pc.UnityShaderPass()
  var i5267 = data
  i5266.id = i5267[0]
  i5266.subShaderIndex = i5267[1]
  i5266.name = i5267[2]
  i5266.passType = i5267[3]
  i5266.grabPassTextureName = i5267[4]
  i5266.usePass = !!i5267[5]
  i5266.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[6], i5266.zTest)
  i5266.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[7], i5266.zWrite)
  i5266.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[8], i5266.culling)
  i5266.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5267[9], i5266.blending)
  i5266.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5267[10], i5266.alphaBlending)
  i5266.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[11], i5266.colorWriteMask)
  i5266.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[12], i5266.offsetUnits)
  i5266.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[13], i5266.offsetFactor)
  i5266.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[14], i5266.stencilRef)
  i5266.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[15], i5266.stencilReadMask)
  i5266.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5267[16], i5266.stencilWriteMask)
  i5266.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5267[17], i5266.stencilOp)
  i5266.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5267[18], i5266.stencilOpFront)
  i5266.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5267[19], i5266.stencilOpBack)
  var i5269 = i5267[20]
  var i5268 = []
  for(var i = 0; i < i5269.length; i += 1) {
    i5268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5269[i + 0]) );
  }
  i5266.tags = i5268
  var i5271 = i5267[21]
  var i5270 = []
  for(var i = 0; i < i5271.length; i += 1) {
    i5270.push( i5271[i + 0] );
  }
  i5266.passDefinedKeywords = i5270
  var i5273 = i5267[22]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 1) {
    i5272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5273[i + 0]) );
  }
  i5266.passDefinedKeywordGroups = i5272
  var i5275 = i5267[23]
  var i5274 = []
  for(var i = 0; i < i5275.length; i += 1) {
    i5274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5275[i + 0]) );
  }
  i5266.variants = i5274
  var i5277 = i5267[24]
  var i5276 = []
  for(var i = 0; i < i5277.length; i += 1) {
    i5276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5277[i + 0]) );
  }
  i5266.excludedVariants = i5276
  i5266.hasDepthReader = !!i5267[25]
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5279 = data
  i5278.val = i5279[0]
  i5278.name = i5279[1]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5281 = data
  i5280.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5281[0], i5280.src)
  i5280.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5281[1], i5280.dst)
  i5280.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5281[2], i5280.op)
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5283 = data
  i5282.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5283[0], i5282.pass)
  i5282.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5283[1], i5282.fail)
  i5282.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5283[2], i5282.zFail)
  i5282.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5283[3], i5282.comp)
  return i5282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5287 = data
  i5286.name = i5287[0]
  i5286.value = i5287[1]
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5291 = data
  var i5293 = i5291[0]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( i5293[i + 0] );
  }
  i5290.keywords = i5292
  i5290.hasDiscard = !!i5291[1]
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5297 = data
  i5296.passId = i5297[0]
  i5296.subShaderIndex = i5297[1]
  var i5299 = i5297[2]
  var i5298 = []
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.push( i5299[i + 0] );
  }
  i5296.keywords = i5298
  i5296.vertexProgram = i5297[3]
  i5296.fragmentProgram = i5297[4]
  i5296.exportedForWebGl2 = !!i5297[5]
  i5296.readDepth = !!i5297[6]
  return i5296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5303 = data
  request.r(i5303[0], i5303[1], 0, i5302, 'shader')
  i5302.pass = i5303[2]
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5307 = data
  i5306.name = i5307[0]
  i5306.type = i5307[1]
  i5306.value = new pc.Vec4( i5307[2], i5307[3], i5307[4], i5307[5] )
  i5306.textureValue = i5307[6]
  i5306.shaderPropertyFlag = i5307[7]
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5309 = data
  i5308.name = i5309[0]
  request.r(i5309[1], i5309[2], 0, i5308, 'texture')
  i5308.aabb = i5309[3]
  i5308.vertices = i5309[4]
  i5308.triangles = i5309[5]
  i5308.textureRect = UnityEngine.Rect.MinMaxRect(i5309[6], i5309[7], i5309[8], i5309[9])
  i5308.packedRect = UnityEngine.Rect.MinMaxRect(i5309[10], i5309[11], i5309[12], i5309[13])
  i5308.border = new pc.Vec4( i5309[14], i5309[15], i5309[16], i5309[17] )
  i5308.transparency = i5309[18]
  i5308.bounds = i5309[19]
  i5308.pixelsPerUnit = i5309[20]
  i5308.textureWidth = i5309[21]
  i5308.textureHeight = i5309[22]
  i5308.nativeSize = new pc.Vec2( i5309[23], i5309[24] )
  i5308.pivot = new pc.Vec2( i5309[25], i5309[26] )
  i5308.textureRectOffset = new pc.Vec2( i5309[27], i5309[28] )
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5311 = data
  i5310.name = i5311[0]
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5313 = data
  i5312.name = i5313[0]
  i5312.wrapMode = i5313[1]
  i5312.isLooping = !!i5313[2]
  i5312.length = i5313[3]
  var i5315 = i5313[4]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5315[i + 0]) );
  }
  i5312.curves = i5314
  var i5317 = i5313[5]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5317[i + 0]) );
  }
  i5312.events = i5316
  i5312.halfPrecision = !!i5313[6]
  i5312._frameRate = i5313[7]
  i5312.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5313[8], i5312.localBounds)
  i5312.hasMuscleCurves = !!i5313[9]
  var i5319 = i5313[10]
  var i5318 = []
  for(var i = 0; i < i5319.length; i += 1) {
    i5318.push( i5319[i + 0] );
  }
  i5312.clipMuscleConstant = i5318
  i5312.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5313[11], i5312.clipBindingConstant)
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5323 = data
  i5322.path = i5323[0]
  i5322.hash = i5323[1]
  i5322.componentType = i5323[2]
  i5322.property = i5323[3]
  i5322.keys = i5323[4]
  var i5325 = i5323[5]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5325[i + 0]) );
  }
  i5322.objectReferenceKeys = i5324
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5329 = data
  i5328.time = i5329[0]
  request.r(i5329[1], i5329[2], 0, i5328, 'value')
  return i5328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5333 = data
  i5332.functionName = i5333[0]
  i5332.floatParameter = i5333[1]
  i5332.intParameter = i5333[2]
  i5332.stringParameter = i5333[3]
  request.r(i5333[4], i5333[5], 0, i5332, 'objectReferenceParameter')
  i5332.time = i5333[6]
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5335 = data
  i5334.center = new pc.Vec3( i5335[0], i5335[1], i5335[2] )
  i5334.extends = new pc.Vec3( i5335[3], i5335[4], i5335[5] )
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5339 = data
  var i5341 = i5339[0]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 1) {
    i5340.push( i5341[i + 0] );
  }
  i5338.genericBindings = i5340
  var i5343 = i5339[1]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 1) {
    i5342.push( i5343[i + 0] );
  }
  i5338.pptrCurveMapping = i5342
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5345 = data
  i5344.name = i5345[0]
  i5344.ascent = i5345[1]
  i5344.originalLineHeight = i5345[2]
  i5344.fontSize = i5345[3]
  var i5347 = i5345[4]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 1) {
    i5346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5347[i + 0]) );
  }
  i5344.characterInfo = i5346
  request.r(i5345[5], i5345[6], 0, i5344, 'texture')
  i5344.originalFontSize = i5345[7]
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5351 = data
  i5350.index = i5351[0]
  i5350.advance = i5351[1]
  i5350.bearing = i5351[2]
  i5350.glyphWidth = i5351[3]
  i5350.glyphHeight = i5351[4]
  i5350.minX = i5351[5]
  i5350.maxX = i5351[6]
  i5350.minY = i5351[7]
  i5350.maxY = i5351[8]
  i5350.uvBottomLeftX = i5351[9]
  i5350.uvBottomLeftY = i5351[10]
  i5350.uvBottomRightX = i5351[11]
  i5350.uvBottomRightY = i5351[12]
  i5350.uvTopLeftX = i5351[13]
  i5350.uvTopLeftY = i5351[14]
  i5350.uvTopRightX = i5351[15]
  i5350.uvTopRightY = i5351[16]
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5353 = data
  i5352.name = i5353[0]
  var i5355 = i5353[1]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 1) {
    i5354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5355[i + 0]) );
  }
  i5352.layers = i5354
  var i5357 = i5353[2]
  var i5356 = []
  for(var i = 0; i < i5357.length; i += 1) {
    i5356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5357[i + 0]) );
  }
  i5352.parameters = i5356
  i5352.animationClips = i5353[3]
  i5352.avatarUnsupported = i5353[4]
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5361 = data
  i5360.name = i5361[0]
  i5360.defaultWeight = i5361[1]
  i5360.blendingMode = i5361[2]
  i5360.avatarMask = i5361[3]
  i5360.syncedLayerIndex = i5361[4]
  i5360.syncedLayerAffectsTiming = !!i5361[5]
  i5360.syncedLayers = i5361[6]
  i5360.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5361[7], i5360.stateMachine)
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5363 = data
  i5362.id = i5363[0]
  i5362.name = i5363[1]
  i5362.path = i5363[2]
  var i5365 = i5363[3]
  var i5364 = []
  for(var i = 0; i < i5365.length; i += 1) {
    i5364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5365[i + 0]) );
  }
  i5362.states = i5364
  var i5367 = i5363[4]
  var i5366 = []
  for(var i = 0; i < i5367.length; i += 1) {
    i5366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5367[i + 0]) );
  }
  i5362.machines = i5366
  var i5369 = i5363[5]
  var i5368 = []
  for(var i = 0; i < i5369.length; i += 1) {
    i5368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5369[i + 0]) );
  }
  i5362.entryStateTransitions = i5368
  var i5371 = i5363[6]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5371[i + 0]) );
  }
  i5362.exitStateTransitions = i5370
  var i5373 = i5363[7]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5373[i + 0]) );
  }
  i5362.anyStateTransitions = i5372
  i5362.defaultStateId = i5363[8]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5377 = data
  i5376.id = i5377[0]
  i5376.name = i5377[1]
  i5376.cycleOffset = i5377[2]
  i5376.cycleOffsetParameter = i5377[3]
  i5376.cycleOffsetParameterActive = !!i5377[4]
  i5376.mirror = !!i5377[5]
  i5376.mirrorParameter = i5377[6]
  i5376.mirrorParameterActive = !!i5377[7]
  i5376.motionId = i5377[8]
  i5376.nameHash = i5377[9]
  i5376.fullPathHash = i5377[10]
  i5376.speed = i5377[11]
  i5376.speedParameter = i5377[12]
  i5376.speedParameterActive = !!i5377[13]
  i5376.tag = i5377[14]
  i5376.tagHash = i5377[15]
  i5376.writeDefaultValues = !!i5377[16]
  var i5379 = i5377[17]
  var i5378 = []
  for(var i = 0; i < i5379.length; i += 2) {
  request.r(i5379[i + 0], i5379[i + 1], 2, i5378, '')
  }
  i5376.behaviours = i5378
  var i5381 = i5377[18]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 1) {
    i5380.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5381[i + 0]) );
  }
  i5376.transitions = i5380
  return i5376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5387 = data
  i5386.fullPath = i5387[0]
  i5386.canTransitionToSelf = !!i5387[1]
  i5386.duration = i5387[2]
  i5386.exitTime = i5387[3]
  i5386.hasExitTime = !!i5387[4]
  i5386.hasFixedDuration = !!i5387[5]
  i5386.interruptionSource = i5387[6]
  i5386.offset = i5387[7]
  i5386.orderedInterruption = !!i5387[8]
  i5386.destinationStateId = i5387[9]
  i5386.isExit = !!i5387[10]
  i5386.mute = !!i5387[11]
  i5386.solo = !!i5387[12]
  var i5389 = i5387[13]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 1) {
    i5388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5389[i + 0]) );
  }
  i5386.conditions = i5388
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5395 = data
  i5394.destinationStateId = i5395[0]
  i5394.isExit = !!i5395[1]
  i5394.mute = !!i5395[2]
  i5394.solo = !!i5395[3]
  var i5397 = i5395[4]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 1) {
    i5396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5397[i + 0]) );
  }
  i5394.conditions = i5396
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5401 = data
  i5400.mode = i5401[0]
  i5400.parameter = i5401[1]
  i5400.threshold = i5401[2]
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5405 = data
  i5404.defaultBool = !!i5405[0]
  i5404.defaultFloat = i5405[1]
  i5404.defaultInt = i5405[2]
  i5404.name = i5405[3]
  i5404.nameHash = i5405[4]
  i5404.type = i5405[5]
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5407 = data
  i5406.name = i5407[0]
  i5406.bytes64 = i5407[1]
  i5406.data = i5407[2]
  return i5406
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5408 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5409 = data
  i5408.normalStyle = i5409[0]
  i5408.normalSpacingOffset = i5409[1]
  i5408.boldStyle = i5409[2]
  i5408.boldSpacing = i5409[3]
  i5408.italicStyle = i5409[4]
  i5408.tabSize = i5409[5]
  request.r(i5409[6], i5409[7], 0, i5408, 'atlas')
  i5408.m_SourceFontFileGUID = i5409[8]
  i5408.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5409[9], i5408.m_CreationSettings)
  request.r(i5409[10], i5409[11], 0, i5408, 'm_SourceFontFile')
  i5408.m_SourceFontFilePath = i5409[12]
  i5408.m_AtlasPopulationMode = i5409[13]
  i5408.InternalDynamicOS = !!i5409[14]
  var i5411 = i5409[15]
  var i5410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.add(request.d('UnityEngine.TextCore.Glyph', i5411[i + 0]));
  }
  i5408.m_GlyphTable = i5410
  var i5413 = i5409[16]
  var i5412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.add(request.d('TMPro.TMP_Character', i5413[i + 0]));
  }
  i5408.m_CharacterTable = i5412
  var i5415 = i5409[17]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 2) {
  request.r(i5415[i + 0], i5415[i + 1], 2, i5414, '')
  }
  i5408.m_AtlasTextures = i5414
  i5408.m_AtlasTextureIndex = i5409[18]
  i5408.m_IsMultiAtlasTexturesEnabled = !!i5409[19]
  i5408.m_GetFontFeatures = !!i5409[20]
  i5408.m_ClearDynamicDataOnBuild = !!i5409[21]
  i5408.m_AtlasWidth = i5409[22]
  i5408.m_AtlasHeight = i5409[23]
  i5408.m_AtlasPadding = i5409[24]
  i5408.m_AtlasRenderMode = i5409[25]
  var i5417 = i5409[26]
  var i5416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.add(request.d('UnityEngine.TextCore.GlyphRect', i5417[i + 0]));
  }
  i5408.m_UsedGlyphRects = i5416
  var i5419 = i5409[27]
  var i5418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5419.length; i += 1) {
    i5418.add(request.d('UnityEngine.TextCore.GlyphRect', i5419[i + 0]));
  }
  i5408.m_FreeGlyphRects = i5418
  i5408.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5409[28], i5408.m_FontFeatureTable)
  i5408.m_ShouldReimportFontFeatures = !!i5409[29]
  var i5421 = i5409[30]
  var i5420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5421.length; i += 2) {
  request.r(i5421[i + 0], i5421[i + 1], 1, i5420, '')
  }
  i5408.m_FallbackFontAssetTable = i5420
  var i5423 = i5409[31]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 1) {
    i5422.push( request.d('TMPro.TMP_FontWeightPair', i5423[i + 0]) );
  }
  i5408.m_FontWeightTable = i5422
  var i5425 = i5409[32]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.push( request.d('TMPro.TMP_FontWeightPair', i5425[i + 0]) );
  }
  i5408.fontWeights = i5424
  i5408.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5409[33], i5408.m_fontInfo)
  var i5427 = i5409[34]
  var i5426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5427.length; i += 1) {
    i5426.add(request.d('TMPro.TMP_Glyph', i5427[i + 0]));
  }
  i5408.m_glyphInfoList = i5426
  i5408.m_KerningTable = request.d('TMPro.KerningTable', i5409[35], i5408.m_KerningTable)
  var i5429 = i5409[36]
  var i5428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5429.length; i += 2) {
  request.r(i5429[i + 0], i5429[i + 1], 1, i5428, '')
  }
  i5408.fallbackFontAssets = i5428
  i5408.m_Version = i5409[37]
  i5408.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5409[38], i5408.m_FaceInfo)
  request.r(i5409[39], i5409[40], 0, i5408, 'm_Material')
  return i5408
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5430 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5431 = data
  i5430.sourceFontFileName = i5431[0]
  i5430.sourceFontFileGUID = i5431[1]
  i5430.faceIndex = i5431[2]
  i5430.pointSizeSamplingMode = i5431[3]
  i5430.pointSize = i5431[4]
  i5430.padding = i5431[5]
  i5430.paddingMode = i5431[6]
  i5430.packingMode = i5431[7]
  i5430.atlasWidth = i5431[8]
  i5430.atlasHeight = i5431[9]
  i5430.characterSetSelectionMode = i5431[10]
  i5430.characterSequence = i5431[11]
  i5430.referencedFontAssetGUID = i5431[12]
  i5430.referencedTextAssetGUID = i5431[13]
  i5430.fontStyle = i5431[14]
  i5430.fontStyleModifier = i5431[15]
  i5430.renderMode = i5431[16]
  i5430.includeFontFeatures = !!i5431[17]
  return i5430
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5434 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5435 = data
  i5434.m_Index = i5435[0]
  i5434.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5435[1], i5434.m_Metrics)
  i5434.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5435[2], i5434.m_GlyphRect)
  i5434.m_Scale = i5435[3]
  i5434.m_AtlasIndex = i5435[4]
  i5434.m_ClassDefinitionType = i5435[5]
  return i5434
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5436 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5437 = data
  i5436.m_Width = i5437[0]
  i5436.m_Height = i5437[1]
  i5436.m_HorizontalBearingX = i5437[2]
  i5436.m_HorizontalBearingY = i5437[3]
  i5436.m_HorizontalAdvance = i5437[4]
  return i5436
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5438 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5439 = data
  i5438.m_X = i5439[0]
  i5438.m_Y = i5439[1]
  i5438.m_Width = i5439[2]
  i5438.m_Height = i5439[3]
  return i5438
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5442 = root || request.c( 'TMPro.TMP_Character' )
  var i5443 = data
  i5442.m_ElementType = i5443[0]
  i5442.m_Unicode = i5443[1]
  i5442.m_GlyphIndex = i5443[2]
  i5442.m_Scale = i5443[3]
  return i5442
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5448 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5449 = data
  var i5451 = i5449[0]
  var i5450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i5451.length; i += 1) {
    i5450.add(request.d('TMPro.MultipleSubstitutionRecord', i5451[i + 0]));
  }
  i5448.m_MultipleSubstitutionRecords = i5450
  var i5453 = i5449[1]
  var i5452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.add(request.d('TMPro.LigatureSubstitutionRecord', i5453[i + 0]));
  }
  i5448.m_LigatureSubstitutionRecords = i5452
  var i5455 = i5449[2]
  var i5454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i5455[i + 0]));
  }
  i5448.m_GlyphPairAdjustmentRecords = i5454
  var i5457 = i5449[3]
  var i5456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i5457[i + 0]));
  }
  i5448.m_MarkToBaseAdjustmentRecords = i5456
  var i5459 = i5449[4]
  var i5458 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i5459.length; i += 1) {
    i5458.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i5459[i + 0]));
  }
  i5448.m_MarkToMarkAdjustmentRecords = i5458
  return i5448
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i5462 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i5463 = data
  i5462.m_TargetGlyphID = i5463[0]
  i5462.m_SubstituteGlyphIDs = i5463[1]
  return i5462
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i5466 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i5467 = data
  i5466.m_ComponentGlyphIDs = i5467[0]
  i5466.m_LigatureGlyphID = i5467[1]
  return i5466
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5470 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i5471 = data
  i5470.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5471[0], i5470.m_FirstAdjustmentRecord)
  i5470.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i5471[1], i5470.m_SecondAdjustmentRecord)
  i5470.m_FeatureLookupFlags = i5471[2]
  return i5470
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5472 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i5473 = data
  i5472.m_GlyphIndex = i5473[0]
  i5472.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i5473[1], i5472.m_GlyphValueRecord)
  return i5472
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i5474 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i5475 = data
  i5474.m_XPlacement = i5475[0]
  i5474.m_YPlacement = i5475[1]
  i5474.m_XAdvance = i5475[2]
  i5474.m_YAdvance = i5475[3]
  return i5474
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i5478 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i5479 = data
  i5478.m_BaseGlyphID = i5479[0]
  i5478.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5479[1], i5478.m_BaseGlyphAnchorPoint)
  i5478.m_MarkGlyphID = i5479[2]
  i5478.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5479[3], i5478.m_MarkPositionAdjustment)
  return i5478
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i5482 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i5483 = data
  i5482.m_BaseMarkGlyphID = i5483[0]
  i5482.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i5483[1], i5482.m_BaseMarkGlyphAnchorPoint)
  i5482.m_CombiningMarkGlyphID = i5483[2]
  i5482.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i5483[3], i5482.m_CombiningMarkPositionAdjustment)
  return i5482
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5488 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5489 = data
  request.r(i5489[0], i5489[1], 0, i5488, 'regularTypeface')
  request.r(i5489[2], i5489[3], 0, i5488, 'italicTypeface')
  return i5488
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5490 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5491 = data
  i5490.Name = i5491[0]
  i5490.PointSize = i5491[1]
  i5490.Scale = i5491[2]
  i5490.CharacterCount = i5491[3]
  i5490.LineHeight = i5491[4]
  i5490.Baseline = i5491[5]
  i5490.Ascender = i5491[6]
  i5490.CapHeight = i5491[7]
  i5490.Descender = i5491[8]
  i5490.CenterLine = i5491[9]
  i5490.SuperscriptOffset = i5491[10]
  i5490.SubscriptOffset = i5491[11]
  i5490.SubSize = i5491[12]
  i5490.Underline = i5491[13]
  i5490.UnderlineThickness = i5491[14]
  i5490.strikethrough = i5491[15]
  i5490.strikethroughThickness = i5491[16]
  i5490.TabWidth = i5491[17]
  i5490.Padding = i5491[18]
  i5490.AtlasWidth = i5491[19]
  i5490.AtlasHeight = i5491[20]
  return i5490
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5494 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5495 = data
  i5494.id = i5495[0]
  i5494.x = i5495[1]
  i5494.y = i5495[2]
  i5494.width = i5495[3]
  i5494.height = i5495[4]
  i5494.xOffset = i5495[5]
  i5494.yOffset = i5495[6]
  i5494.xAdvance = i5495[7]
  i5494.scale = i5495[8]
  return i5494
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5496 = root || request.c( 'TMPro.KerningTable' )
  var i5497 = data
  var i5499 = i5497[0]
  var i5498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5499.length; i += 1) {
    i5498.add(request.d('TMPro.KerningPair', i5499[i + 0]));
  }
  i5496.kerningPairs = i5498
  return i5496
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5502 = root || request.c( 'TMPro.KerningPair' )
  var i5503 = data
  i5502.xOffset = i5503[0]
  i5502.m_FirstGlyph = i5503[1]
  i5502.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5503[2], i5502.m_FirstGlyphAdjustments)
  i5502.m_SecondGlyph = i5503[3]
  i5502.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5503[4], i5502.m_SecondGlyphAdjustments)
  i5502.m_IgnoreSpacingAdjustments = !!i5503[5]
  return i5502
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5504 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5505 = data
  i5504.m_FaceIndex = i5505[0]
  i5504.m_FamilyName = i5505[1]
  i5504.m_StyleName = i5505[2]
  i5504.m_PointSize = i5505[3]
  i5504.m_Scale = i5505[4]
  i5504.m_UnitsPerEM = i5505[5]
  i5504.m_LineHeight = i5505[6]
  i5504.m_AscentLine = i5505[7]
  i5504.m_CapLine = i5505[8]
  i5504.m_MeanLine = i5505[9]
  i5504.m_Baseline = i5505[10]
  i5504.m_DescentLine = i5505[11]
  i5504.m_SuperscriptOffset = i5505[12]
  i5504.m_SuperscriptSize = i5505[13]
  i5504.m_SubscriptOffset = i5505[14]
  i5504.m_SubscriptSize = i5505[15]
  i5504.m_UnderlineOffset = i5505[16]
  i5504.m_UnderlineThickness = i5505[17]
  i5504.m_StrikethroughOffset = i5505[18]
  i5504.m_StrikethroughThickness = i5505[19]
  i5504.m_TabWidth = i5505[20]
  return i5504
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5507 = data
  i5506.useSafeMode = !!i5507[0]
  i5506.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5507[1], i5506.safeModeOptions)
  i5506.timeScale = i5507[2]
  i5506.unscaledTimeScale = i5507[3]
  i5506.useSmoothDeltaTime = !!i5507[4]
  i5506.maxSmoothUnscaledTime = i5507[5]
  i5506.rewindCallbackMode = i5507[6]
  i5506.showUnityEditorReport = !!i5507[7]
  i5506.logBehaviour = i5507[8]
  i5506.drawGizmos = !!i5507[9]
  i5506.defaultRecyclable = !!i5507[10]
  i5506.defaultAutoPlay = i5507[11]
  i5506.defaultUpdateType = i5507[12]
  i5506.defaultTimeScaleIndependent = !!i5507[13]
  i5506.defaultEaseType = i5507[14]
  i5506.defaultEaseOvershootOrAmplitude = i5507[15]
  i5506.defaultEasePeriod = i5507[16]
  i5506.defaultAutoKill = !!i5507[17]
  i5506.defaultLoopType = i5507[18]
  i5506.debugMode = !!i5507[19]
  i5506.debugStoreTargetId = !!i5507[20]
  i5506.showPreviewPanel = !!i5507[21]
  i5506.storeSettingsLocation = i5507[22]
  i5506.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5507[23], i5506.modules)
  i5506.createASMDEF = !!i5507[24]
  i5506.showPlayingTweens = !!i5507[25]
  i5506.showPausedTweens = !!i5507[26]
  return i5506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5509 = data
  i5508.logBehaviour = i5509[0]
  i5508.nestedTweenFailureBehaviour = i5509[1]
  return i5508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5511 = data
  i5510.showPanel = !!i5511[0]
  i5510.audioEnabled = !!i5511[1]
  i5510.physicsEnabled = !!i5511[2]
  i5510.physics2DEnabled = !!i5511[3]
  i5510.spriteEnabled = !!i5511[4]
  i5510.uiEnabled = !!i5511[5]
  i5510.uiToolkitEnabled = !!i5511[6]
  i5510.textMeshProEnabled = !!i5511[7]
  i5510.tk2DEnabled = !!i5511[8]
  i5510.deAudioEnabled = !!i5511[9]
  i5510.deUnityExtendedEnabled = !!i5511[10]
  i5510.epoOutlineEnabled = !!i5511[11]
  return i5510
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5512 = root || request.c( 'TMPro.TMP_Settings' )
  var i5513 = data
  i5512.assetVersion = i5513[0]
  i5512.m_TextWrappingMode = i5513[1]
  i5512.m_enableKerning = !!i5513[2]
  var i5515 = i5513[3]
  var i5514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i5515.length; i += 1) {
    i5514.add(i5515[i + 0]);
  }
  i5512.m_ActiveFontFeatures = i5514
  i5512.m_enableExtraPadding = !!i5513[4]
  i5512.m_enableTintAllSprites = !!i5513[5]
  i5512.m_enableParseEscapeCharacters = !!i5513[6]
  i5512.m_EnableRaycastTarget = !!i5513[7]
  i5512.m_GetFontFeaturesAtRuntime = !!i5513[8]
  i5512.m_missingGlyphCharacter = i5513[9]
  i5512.m_ClearDynamicDataOnBuild = !!i5513[10]
  i5512.m_warningsDisabled = !!i5513[11]
  request.r(i5513[12], i5513[13], 0, i5512, 'm_defaultFontAsset')
  i5512.m_defaultFontAssetPath = i5513[14]
  i5512.m_defaultFontSize = i5513[15]
  i5512.m_defaultAutoSizeMinRatio = i5513[16]
  i5512.m_defaultAutoSizeMaxRatio = i5513[17]
  i5512.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5513[18], i5513[19] )
  i5512.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5513[20], i5513[21] )
  i5512.m_autoSizeTextContainer = !!i5513[22]
  i5512.m_IsTextObjectScaleStatic = !!i5513[23]
  var i5517 = i5513[24]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5517.length; i += 2) {
  request.r(i5517[i + 0], i5517[i + 1], 1, i5516, '')
  }
  i5512.m_fallbackFontAssets = i5516
  i5512.m_matchMaterialPreset = !!i5513[25]
  i5512.m_HideSubTextObjects = !!i5513[26]
  request.r(i5513[27], i5513[28], 0, i5512, 'm_defaultSpriteAsset')
  i5512.m_defaultSpriteAssetPath = i5513[29]
  i5512.m_enableEmojiSupport = !!i5513[30]
  i5512.m_MissingCharacterSpriteUnicode = i5513[31]
  var i5519 = i5513[32]
  var i5518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i5519.length; i += 2) {
  request.r(i5519[i + 0], i5519[i + 1], 1, i5518, '')
  }
  i5512.m_EmojiFallbackTextAssets = i5518
  i5512.m_defaultColorGradientPresetsPath = i5513[33]
  request.r(i5513[34], i5513[35], 0, i5512, 'm_defaultStyleSheet')
  i5512.m_StyleSheetsResourcePath = i5513[36]
  request.r(i5513[37], i5513[38], 0, i5512, 'm_leadingCharacters')
  request.r(i5513[39], i5513[40], 0, i5512, 'm_followingCharacters')
  i5512.m_UseModernHangulLineBreakingRules = !!i5513[41]
  return i5512
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5522 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'spriteSheet')
  var i5525 = i5523[2]
  var i5524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.add(request.d('TMPro.TMP_Sprite', i5525[i + 0]));
  }
  i5522.spriteInfoList = i5524
  var i5527 = i5523[3]
  var i5526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5527.length; i += 2) {
  request.r(i5527[i + 0], i5527[i + 1], 1, i5526, '')
  }
  i5522.fallbackSpriteAssets = i5526
  var i5529 = i5523[4]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5529.length; i += 1) {
    i5528.add(request.d('TMPro.TMP_SpriteCharacter', i5529[i + 0]));
  }
  i5522.m_SpriteCharacterTable = i5528
  var i5531 = i5523[5]
  var i5530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5531.length; i += 1) {
    i5530.add(request.d('TMPro.TMP_SpriteGlyph', i5531[i + 0]));
  }
  i5522.m_GlyphTable = i5530
  i5522.m_Version = i5523[6]
  i5522.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5523[7], i5522.m_FaceInfo)
  request.r(i5523[8], i5523[9], 0, i5522, 'm_Material')
  return i5522
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5534 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5535 = data
  i5534.name = i5535[0]
  i5534.hashCode = i5535[1]
  i5534.unicode = i5535[2]
  i5534.pivot = new pc.Vec2( i5535[3], i5535[4] )
  request.r(i5535[5], i5535[6], 0, i5534, 'sprite')
  i5534.id = i5535[7]
  i5534.x = i5535[8]
  i5534.y = i5535[9]
  i5534.width = i5535[10]
  i5534.height = i5535[11]
  i5534.xOffset = i5535[12]
  i5534.yOffset = i5535[13]
  i5534.xAdvance = i5535[14]
  i5534.scale = i5535[15]
  return i5534
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5540 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5541 = data
  i5540.m_Name = i5541[0]
  i5540.m_ElementType = i5541[1]
  i5540.m_Unicode = i5541[2]
  i5540.m_GlyphIndex = i5541[3]
  i5540.m_Scale = i5541[4]
  return i5540
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5544 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5545 = data
  request.r(i5545[0], i5545[1], 0, i5544, 'sprite')
  i5544.m_Index = i5545[2]
  i5544.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5545[3], i5544.m_Metrics)
  i5544.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5545[4], i5544.m_GlyphRect)
  i5544.m_Scale = i5545[5]
  i5544.m_AtlasIndex = i5545[6]
  i5544.m_ClassDefinitionType = i5545[7]
  return i5544
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5546 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5547 = data
  var i5549 = i5547[0]
  var i5548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.add(request.d('TMPro.TMP_Style', i5549[i + 0]));
  }
  i5546.m_StyleList = i5548
  return i5546
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5552 = root || request.c( 'TMPro.TMP_Style' )
  var i5553 = data
  i5552.m_Name = i5553[0]
  i5552.m_HashCode = i5553[1]
  i5552.m_OpeningDefinition = i5553[2]
  i5552.m_ClosingDefinition = i5553[3]
  i5552.m_OpeningTagArray = i5553[4]
  i5552.m_ClosingTagArray = i5553[5]
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5555 = data
  var i5557 = i5555[0]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5557[i + 0]) );
  }
  i5554.files = i5556
  i5554.componentToPrefabIds = i5555[1]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5561 = data
  i5560.path = i5561[0]
  request.r(i5561[1], i5561[2], 0, i5560, 'unityObject')
  return i5560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5563 = data
  var i5565 = i5563[0]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5565[i + 0]) );
  }
  i5562.scriptsExecutionOrder = i5564
  var i5567 = i5563[1]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5567[i + 0]) );
  }
  i5562.sortingLayers = i5566
  var i5569 = i5563[2]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5569[i + 0]) );
  }
  i5562.cullingLayers = i5568
  i5562.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5563[3], i5562.timeSettings)
  i5562.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5563[4], i5562.physicsSettings)
  i5562.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5563[5], i5562.physics2DSettings)
  i5562.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5563[6], i5562.qualitySettings)
  i5562.enableRealtimeShadows = !!i5563[7]
  i5562.enableAutoInstancing = !!i5563[8]
  i5562.enableStaticBatching = !!i5563[9]
  i5562.enableDynamicBatching = !!i5563[10]
  i5562.lightmapEncodingQuality = i5563[11]
  i5562.desiredColorSpace = i5563[12]
  var i5571 = i5563[13]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.push( i5571[i + 0] );
  }
  i5562.allTags = i5570
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5575 = data
  i5574.name = i5575[0]
  i5574.value = i5575[1]
  return i5574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5579 = data
  i5578.id = i5579[0]
  i5578.name = i5579[1]
  i5578.value = i5579[2]
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5583 = data
  i5582.id = i5583[0]
  i5582.name = i5583[1]
  return i5582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5585 = data
  i5584.fixedDeltaTime = i5585[0]
  i5584.maximumDeltaTime = i5585[1]
  i5584.timeScale = i5585[2]
  i5584.maximumParticleTimestep = i5585[3]
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5587 = data
  i5586.gravity = new pc.Vec3( i5587[0], i5587[1], i5587[2] )
  i5586.defaultSolverIterations = i5587[3]
  i5586.bounceThreshold = i5587[4]
  i5586.autoSyncTransforms = !!i5587[5]
  i5586.autoSimulation = !!i5587[6]
  var i5589 = i5587[7]
  var i5588 = []
  for(var i = 0; i < i5589.length; i += 1) {
    i5588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5589[i + 0]) );
  }
  i5586.collisionMatrix = i5588
  return i5586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5593 = data
  i5592.enabled = !!i5593[0]
  i5592.layerId = i5593[1]
  i5592.otherLayerId = i5593[2]
  return i5592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5595 = data
  request.r(i5595[0], i5595[1], 0, i5594, 'material')
  i5594.gravity = new pc.Vec2( i5595[2], i5595[3] )
  i5594.positionIterations = i5595[4]
  i5594.velocityIterations = i5595[5]
  i5594.velocityThreshold = i5595[6]
  i5594.maxLinearCorrection = i5595[7]
  i5594.maxAngularCorrection = i5595[8]
  i5594.maxTranslationSpeed = i5595[9]
  i5594.maxRotationSpeed = i5595[10]
  i5594.baumgarteScale = i5595[11]
  i5594.baumgarteTOIScale = i5595[12]
  i5594.timeToSleep = i5595[13]
  i5594.linearSleepTolerance = i5595[14]
  i5594.angularSleepTolerance = i5595[15]
  i5594.defaultContactOffset = i5595[16]
  i5594.autoSimulation = !!i5595[17]
  i5594.queriesHitTriggers = !!i5595[18]
  i5594.queriesStartInColliders = !!i5595[19]
  i5594.callbacksOnDisable = !!i5595[20]
  i5594.reuseCollisionCallbacks = !!i5595[21]
  i5594.autoSyncTransforms = !!i5595[22]
  var i5597 = i5595[23]
  var i5596 = []
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5597[i + 0]) );
  }
  i5594.collisionMatrix = i5596
  return i5594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5601 = data
  i5600.enabled = !!i5601[0]
  i5600.layerId = i5601[1]
  i5600.otherLayerId = i5601[2]
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5603 = data
  var i5605 = i5603[0]
  var i5604 = []
  for(var i = 0; i < i5605.length; i += 1) {
    i5604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5605[i + 0]) );
  }
  i5602.qualityLevels = i5604
  var i5607 = i5603[1]
  var i5606 = []
  for(var i = 0; i < i5607.length; i += 1) {
    i5606.push( i5607[i + 0] );
  }
  i5602.names = i5606
  i5602.shadows = i5603[2]
  i5602.anisotropicFiltering = i5603[3]
  i5602.antiAliasing = i5603[4]
  i5602.lodBias = i5603[5]
  i5602.shadowCascades = i5603[6]
  i5602.shadowDistance = i5603[7]
  i5602.shadowmaskMode = i5603[8]
  i5602.shadowProjection = i5603[9]
  i5602.shadowResolution = i5603[10]
  i5602.softParticles = !!i5603[11]
  i5602.softVegetation = !!i5603[12]
  i5602.activeColorSpace = i5603[13]
  i5602.desiredColorSpace = i5603[14]
  i5602.masterTextureLimit = i5603[15]
  i5602.maxQueuedFrames = i5603[16]
  i5602.particleRaycastBudget = i5603[17]
  i5602.pixelLightCount = i5603[18]
  i5602.realtimeReflectionProbes = !!i5603[19]
  i5602.shadowCascade2Split = i5603[20]
  i5602.shadowCascade4Split = new pc.Vec3( i5603[21], i5603[22], i5603[23] )
  i5602.streamingMipmapsActive = !!i5603[24]
  i5602.vSyncCount = i5603[25]
  i5602.asyncUploadBufferSize = i5603[26]
  i5602.asyncUploadTimeSlice = i5603[27]
  i5602.billboardsFaceCameraPosition = !!i5603[28]
  i5602.shadowNearPlaneOffset = i5603[29]
  i5602.streamingMipmapsMemoryBudget = i5603[30]
  i5602.maximumLODLevel = i5603[31]
  i5602.streamingMipmapsAddAllCameras = !!i5603[32]
  i5602.streamingMipmapsMaxLevelReduction = i5603[33]
  i5602.streamingMipmapsRenderersPerFrame = i5603[34]
  i5602.resolutionScalingFixedDPIFactor = i5603[35]
  i5602.streamingMipmapsMaxFileIORequests = i5603[36]
  i5602.currentQualityLevel = i5603[37]
  return i5602
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i5610 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i5611 = data
  i5610.m_XCoordinate = i5611[0]
  i5610.m_YCoordinate = i5611[1]
  return i5610
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i5612 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i5613 = data
  i5612.m_XPositionAdjustment = i5613[0]
  i5612.m_YPositionAdjustment = i5613[1]
  return i5612
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5614 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5615 = data
  i5614.xPlacement = i5615[0]
  i5614.yPlacement = i5615[1]
  i5614.xAdvance = i5615[2]
  i5614.yAdvance = i5615[3]
  return i5614
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1731";

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

Deserializers.buildID = "28a690c9-6204-453e-9f1b-ed69f4aaf508";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

