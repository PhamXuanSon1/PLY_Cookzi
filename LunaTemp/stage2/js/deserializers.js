var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSpring' )
  var i2071 = data
  i2070.spring = i2071[0]
  i2070.damper = i2071[1]
  i2070.targetPosition = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointMotor' )
  var i2073 = data
  i2072.m_TargetVelocity = i2073[0]
  i2072.m_Force = i2073[1]
  i2072.m_FreeSpin = i2073[2]
  return i2072
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.JointLimits' )
  var i2075 = data
  i2074.m_Min = i2075[0]
  i2074.m_Max = i2075[1]
  i2074.m_Bounciness = i2075[2]
  i2074.m_BounceMinVelocity = i2075[3]
  i2074.m_ContactDistance = i2075[4]
  i2074.minBounce = i2075[5]
  i2074.maxBounce = i2075[6]
  return i2074
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.JointDrive' )
  var i2077 = data
  i2076.m_PositionSpring = i2077[0]
  i2076.m_PositionDamper = i2077[1]
  i2076.m_MaximumForce = i2077[2]
  i2076.m_UseAcceleration = i2077[3]
  return i2076
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2079 = data
  i2078.m_Spring = i2079[0]
  i2078.m_Damper = i2079[1]
  return i2078
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2081 = data
  i2080.m_Limit = i2081[0]
  i2080.m_Bounciness = i2081[1]
  i2080.m_ContactDistance = i2081[2]
  return i2080
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2083 = data
  i2082.m_ExtremumSlip = i2083[0]
  i2082.m_ExtremumValue = i2083[1]
  i2082.m_AsymptoteSlip = i2083[2]
  i2082.m_AsymptoteValue = i2083[3]
  i2082.m_Stiffness = i2083[4]
  return i2082
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2085 = data
  i2084.m_LowerAngle = i2085[0]
  i2084.m_UpperAngle = i2085[1]
  return i2084
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2087 = data
  i2086.m_MotorSpeed = i2087[0]
  i2086.m_MaximumMotorTorque = i2087[1]
  return i2086
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2089 = data
  i2088.m_DampingRatio = i2089[0]
  i2088.m_Frequency = i2089[1]
  i2088.m_Angle = i2089[2]
  return i2088
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2091 = data
  i2090.m_LowerTranslation = i2091[0]
  i2090.m_UpperTranslation = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2092 = root || new pc.UnityMaterial()
  var i2093 = data
  i2092.name = i2093[0]
  request.r(i2093[1], i2093[2], 0, i2092, 'shader')
  i2092.renderQueue = i2093[3]
  i2092.enableInstancing = !!i2093[4]
  var i2095 = i2093[5]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2095[i + 0]) );
  }
  i2092.floatParameters = i2094
  var i2097 = i2093[6]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2097[i + 0]) );
  }
  i2092.colorParameters = i2096
  var i2099 = i2093[7]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2099[i + 0]) );
  }
  i2092.vectorParameters = i2098
  var i2101 = i2093[8]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2101[i + 0]) );
  }
  i2092.textureParameters = i2100
  var i2103 = i2093[9]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2103[i + 0]) );
  }
  i2092.materialFlags = i2102
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.value = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.value = new pc.Color(i2111[1], i2111[2], i2111[3], i2111[4])
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2115 = data
  i2114.name = i2115[0]
  i2114.value = new pc.Vec4( i2115[1], i2115[2], i2115[3], i2115[4] )
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, 'value')
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.enabled = !!i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.width = i2125[1]
  i2124.height = i2125[2]
  i2124.mipmapCount = i2125[3]
  i2124.anisoLevel = i2125[4]
  i2124.filterMode = i2125[5]
  i2124.hdr = !!i2125[6]
  i2124.format = i2125[7]
  i2124.wrapMode = i2125[8]
  i2124.alphaIsTransparency = !!i2125[9]
  i2124.alphaSource = i2125[10]
  i2124.graphicsFormat = i2125[11]
  i2124.sRGBTexture = !!i2125[12]
  i2124.desiredColorSpace = i2125[13]
  i2124.wrapU = i2125[14]
  i2124.wrapV = i2125[15]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2127 = data
  i2126.position = new pc.Vec3( i2127[0], i2127[1], i2127[2] )
  i2126.scale = new pc.Vec3( i2127[3], i2127[4], i2127[5] )
  i2126.rotation = new pc.Quat(i2127[6], i2127[7], i2127[8], i2127[9])
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2129 = data
  i2128.center = new pc.Vec3( i2129[0], i2129[1], i2129[2] )
  i2128.size = new pc.Vec3( i2129[3], i2129[4], i2129[5] )
  i2128.enabled = !!i2129[6]
  i2128.isTrigger = !!i2129[7]
  request.r(i2129[8], i2129[9], 0, i2128, 'material')
  return i2128
}

Deserializers["ItemController"] = function (request, data, root) {
  var i2130 = root || request.c( 'ItemController' )
  var i2131 = data
  i2130.itemType = i2131[0]
  request.r(i2131[1], i2131[2], 0, i2130, 'dropTarget')
  i2130.dropDistanceThreshold = i2131[3]
  i2130.hideSpriteOnDrop = !!i2131[4]
  i2130.disableColliderOnComplete = !!i2131[5]
  i2130.isTool = !!i2131[6]
  request.r(i2131[7], i2131[8], 0, i2130, 'customDragBounds')
  i2130.increaseSortingLayerOnDrag = !!i2131[9]
  i2130.isLocked = !!i2131[10]
  i2130.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i2131[11], i2130.onInteractWhileLocked)
  i2130.onClick = request.d('UnityEngine.Events.UnityEvent', i2131[12], i2130.onClick)
  i2130.onDrop = request.d('UnityEngine.Events.UnityEvent', i2131[13], i2130.onDrop)
  i2130.onDragStart = request.d('UnityEngine.Events.UnityEvent', i2131[14], i2130.onDragStart)
  i2130.onReturn = request.d('UnityEngine.Events.UnityEvent', i2131[15], i2130.onReturn)
  i2130.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i2131[16], i2130.onAnimFinished)
  i2130.isSequentialClick = !!i2131[17]
  var i2133 = i2131[18]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('AnimObjectData', i2133[i + 0]));
  }
  i2130.animationObjects = i2132
  var i2135 = i2131[19]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(i2135[i + 0]);
  }
  i2130.fxSoundsStartAnim = i2134
  var i2137 = i2131[20]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.add(i2137[i + 0]);
  }
  i2130.fxSoundsAfterAnim = i2136
  return i2130
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2139 = data
  i2138.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2139[0], i2138.m_PersistentCalls)
  return i2138
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.add(request.d('UnityEngine.Events.PersistentCall', i2143[i + 0]));
  }
  i2140.m_Calls = i2142
  return i2140
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'm_Target')
  i2146.m_TargetAssemblyTypeName = i2147[2]
  i2146.m_MethodName = i2147[3]
  i2146.m_Mode = i2147[4]
  i2146.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2147[5], i2146.m_Arguments)
  i2146.m_CallState = i2147[6]
  return i2146
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'm_ObjectArgument')
  i2148.m_ObjectArgumentAssemblyTypeName = i2149[2]
  i2148.m_IntArgument = i2149[3]
  i2148.m_FloatArgument = i2149[4]
  i2148.m_StringArgument = i2149[5]
  i2148.m_BoolArgument = !!i2149[6]
  return i2148
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i2152 = root || request.c( 'AnimObjectData' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'animObj')
  i2152.delayFromStart = i2153[2]
  i2152.durationToDeactivate = i2153[3]
  i2152.triggerName = i2153[4]
  return i2152
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i2156 = root || request.c( 'ItemMovement' )
  var i2157 = data
  return i2156
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i2158 = root || request.c( 'ItemGraphic' )
  var i2159 = data
  var i2161 = i2159[0]
  var i2160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 1, i2160, '')
  }
  i2158.spriteRenderers = i2160
  i2158.rotateOnDrag = !!i2159[1]
  i2158.dragRotationAngle = new pc.Vec3( i2159[2], i2159[3], i2159[4] )
  i2158.rotationDuration = i2159[5]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2165 = data
  i2164.color = new pc.Color(i2165[0], i2165[1], i2165[2], i2165[3])
  request.r(i2165[4], i2165[5], 0, i2164, 'sprite')
  i2164.flipX = !!i2165[6]
  i2164.flipY = !!i2165[7]
  i2164.drawMode = i2165[8]
  i2164.size = new pc.Vec2( i2165[9], i2165[10] )
  i2164.tileMode = i2165[11]
  i2164.adaptiveModeThreshold = i2165[12]
  i2164.maskInteraction = i2165[13]
  i2164.spriteSortPoint = i2165[14]
  i2164.enabled = !!i2165[15]
  request.r(i2165[16], i2165[17], 0, i2164, 'sharedMaterial')
  var i2167 = i2165[18]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.sharedMaterials = i2166
  i2164.receiveShadows = !!i2165[19]
  i2164.shadowCastingMode = i2165[20]
  i2164.sortingLayerID = i2165[21]
  i2164.sortingOrder = i2165[22]
  i2164.lightmapIndex = i2165[23]
  i2164.lightmapSceneIndex = i2165[24]
  i2164.lightmapScaleOffset = new pc.Vec4( i2165[25], i2165[26], i2165[27], i2165[28] )
  i2164.lightProbeUsage = i2165[29]
  i2164.reflectionProbeUsage = i2165[30]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.tagId = i2171[1]
  i2170.enabled = !!i2171[2]
  i2170.isStatic = !!i2171[3]
  i2170.layer = i2171[4]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.index = i2173[1]
  i2172.startup = !!i2173[2]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2175 = data
  i2174.aspect = i2175[0]
  i2174.orthographic = !!i2175[1]
  i2174.orthographicSize = i2175[2]
  i2174.backgroundColor = new pc.Color(i2175[3], i2175[4], i2175[5], i2175[6])
  i2174.nearClipPlane = i2175[7]
  i2174.farClipPlane = i2175[8]
  i2174.fieldOfView = i2175[9]
  i2174.depth = i2175[10]
  i2174.clearFlags = i2175[11]
  i2174.cullingMask = i2175[12]
  i2174.rect = i2175[13]
  request.r(i2175[14], i2175[15], 0, i2174, 'targetTexture')
  i2174.usePhysicalProperties = !!i2175[16]
  i2174.focalLength = i2175[17]
  i2174.sensorSize = new pc.Vec2( i2175[18], i2175[19] )
  i2174.lensShift = new pc.Vec2( i2175[20], i2175[21] )
  i2174.gateFit = i2175[22]
  i2174.commandBufferCount = i2175[23]
  i2174.cameraType = i2175[24]
  i2174.enabled = !!i2175[25]
  return i2174
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2176 = root || request.c( 'AutoCameraFit' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'canvasBtn')
  request.r(i2177[2], i2177[3], 0, i2176, 'targetArea')
  i2176.paddingLandscape = i2177[4]
  i2176.paddingPortrait = i2177[5]
  i2176.extraPaddingSmallScreen = i2177[6]
  i2176.smallScreenThreshold = i2177[7]
  i2176.autoUpdateOnResize = !!i2177[8]
  i2176.adjustInEditMode = !!i2177[9]
  return i2176
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2178 = root || request.c( 'InputManager' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'mainCamera')
  i2178.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2179[2] )
  i2178.installLayer = UnityEngine.LayerMask.FromIntegerValue( i2179[3] )
  i2178.maxDistance = i2179[4]
  i2178.itemsToGotoStore = i2179[5]
  i2178.dragSortingOffset = i2179[6]
  i2178.useDragBounds = !!i2179[7]
  request.r(i2179[8], i2179[9], 0, i2178, 'dragBounds')
  return i2178
}

Deserializers["TriggerOnAllActive"] = function (request, data, root) {
  var i2180 = root || request.c( 'TriggerOnAllActive' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveEventGroup')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('ActiveEventGroup', i2183[i + 0]));
  }
  i2180.eventGroups = i2182
  return i2180
}

Deserializers["ActiveEventGroup"] = function (request, data, root) {
  var i2186 = root || request.c( 'ActiveEventGroup' )
  var i2187 = data
  i2186.groupName = i2187[0]
  var i2189 = i2187[1]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 1, i2188, '')
  }
  i2186.targetObjects = i2188
  i2186.delayTime = i2187[2]
  i2186.cancelIfAnyDeactivatedDuringDelay = !!i2187[3]
  i2186.onAllActive = request.d('UnityEngine.Events.UnityEvent', i2187[4], i2186.onAllActive)
  i2186.isWaiting = !!i2187[5]
  i2186.hasTriggered = !!i2187[6]
  return i2186
}

Deserializers["HandHintManager"] = function (request, data, root) {
  var i2192 = root || request.c( 'HandHintManager' )
  var i2193 = data
  var i2195 = i2193[0]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 1, i2194, '')
  }
  i2192.hintItems = i2194
  request.r(i2193[1], i2193[2], 0, i2192, 'handHintObject')
  request.r(i2193[3], i2193[4], 0, i2192, 'handAnimator')
  i2192.idleTimeToHint = i2193[5]
  i2192.dragAnimDuration = i2193[6]
  request.r(i2193[7], i2193[8], 0, i2192, 'startHintPos')
  request.r(i2193[9], i2193[10], 0, i2192, 'endHintPos')
  return i2192
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2198 = root || request.c( 'GameManager' )
  var i2199 = data
  i2198.fxStartVoice = i2199[0]
  request.r(i2199[1], i2199[2], 0, i2198, 'winCanvas')
  request.r(i2199[3], i2199[4], 0, i2198, 'loseCanvas')
  i2198.timeLimit = i2199[5]
  i2198.onWinGame = request.d('UnityEngine.Events.UnityEvent', i2199[6], i2198.onWinGame)
  i2198.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i2199[7], i2198.onLoseGame)
  i2198.isGameEnded = !!i2199[8]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2201 = data
  i2200.pivot = new pc.Vec2( i2201[0], i2201[1] )
  i2200.anchorMin = new pc.Vec2( i2201[2], i2201[3] )
  i2200.anchorMax = new pc.Vec2( i2201[4], i2201[5] )
  i2200.sizeDelta = new pc.Vec2( i2201[6], i2201[7] )
  i2200.anchoredPosition3D = new pc.Vec3( i2201[8], i2201[9], i2201[10] )
  i2200.rotation = new pc.Quat(i2201[11], i2201[12], i2201[13], i2201[14])
  i2200.scale = new pc.Vec3( i2201[15], i2201[16], i2201[17] )
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2203 = data
  i2202.planeDistance = i2203[0]
  i2202.referencePixelsPerUnit = i2203[1]
  i2202.isFallbackOverlay = !!i2203[2]
  i2202.renderMode = i2203[3]
  i2202.renderOrder = i2203[4]
  i2202.sortingLayerName = i2203[5]
  i2202.sortingOrder = i2203[6]
  i2202.scaleFactor = i2203[7]
  request.r(i2203[8], i2203[9], 0, i2202, 'worldCamera')
  i2202.overrideSorting = !!i2203[10]
  i2202.pixelPerfect = !!i2203[11]
  i2202.targetDisplay = i2203[12]
  i2202.overridePixelPerfect = !!i2203[13]
  i2202.enabled = !!i2203[14]
  return i2202
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2205 = data
  i2204.m_UiScaleMode = i2205[0]
  i2204.m_ReferencePixelsPerUnit = i2205[1]
  i2204.m_ScaleFactor = i2205[2]
  i2204.m_ReferenceResolution = new pc.Vec2( i2205[3], i2205[4] )
  i2204.m_ScreenMatchMode = i2205[5]
  i2204.m_MatchWidthOrHeight = i2205[6]
  i2204.m_PhysicalUnit = i2205[7]
  i2204.m_FallbackScreenDPI = i2205[8]
  i2204.m_DefaultSpriteDPI = i2205[9]
  i2204.m_DynamicPixelsPerUnit = i2205[10]
  i2204.m_PresetInfoIsWorld = !!i2205[11]
  return i2204
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2207 = data
  i2206.m_IgnoreReversedGraphics = !!i2207[0]
  i2206.m_BlockingObjects = i2207[1]
  i2206.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2207[2] )
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2209 = data
  i2208.cullTransparentMesh = !!i2209[0]
  return i2208
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.UI.Image' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'm_Sprite')
  i2210.m_Type = i2211[2]
  i2210.m_PreserveAspect = !!i2211[3]
  i2210.m_FillCenter = !!i2211[4]
  i2210.m_FillMethod = i2211[5]
  i2210.m_FillAmount = i2211[6]
  i2210.m_FillClockwise = !!i2211[7]
  i2210.m_FillOrigin = i2211[8]
  i2210.m_UseSpriteMesh = !!i2211[9]
  i2210.m_PixelsPerUnitMultiplier = i2211[10]
  request.r(i2211[11], i2211[12], 0, i2210, 'm_Material')
  i2210.m_Maskable = !!i2211[13]
  i2210.m_Color = new pc.Color(i2211[14], i2211[15], i2211[16], i2211[17])
  i2210.m_RaycastTarget = !!i2211[18]
  i2210.m_RaycastPadding = new pc.Vec4( i2211[19], i2211[20], i2211[21], i2211[22] )
  return i2210
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2212 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2213 = data
  i2212.m_hasFontAssetChanged = !!i2213[0]
  request.r(i2213[1], i2213[2], 0, i2212, 'm_baseMaterial')
  i2212.m_maskOffset = new pc.Vec4( i2213[3], i2213[4], i2213[5], i2213[6] )
  i2212.m_text = i2213[7]
  i2212.m_isRightToLeft = !!i2213[8]
  request.r(i2213[9], i2213[10], 0, i2212, 'm_fontAsset')
  request.r(i2213[11], i2213[12], 0, i2212, 'm_sharedMaterial')
  var i2215 = i2213[13]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 2, i2214, '')
  }
  i2212.m_fontSharedMaterials = i2214
  request.r(i2213[14], i2213[15], 0, i2212, 'm_fontMaterial')
  var i2217 = i2213[16]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2212.m_fontMaterials = i2216
  i2212.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2213[17], i2213[18], i2213[19], i2213[20])
  i2212.m_fontColor = new pc.Color(i2213[21], i2213[22], i2213[23], i2213[24])
  i2212.m_enableVertexGradient = !!i2213[25]
  i2212.m_colorMode = i2213[26]
  i2212.m_fontColorGradient = request.d('TMPro.VertexGradient', i2213[27], i2212.m_fontColorGradient)
  request.r(i2213[28], i2213[29], 0, i2212, 'm_fontColorGradientPreset')
  request.r(i2213[30], i2213[31], 0, i2212, 'm_spriteAsset')
  i2212.m_tintAllSprites = !!i2213[32]
  request.r(i2213[33], i2213[34], 0, i2212, 'm_StyleSheet')
  i2212.m_TextStyleHashCode = i2213[35]
  i2212.m_overrideHtmlColors = !!i2213[36]
  i2212.m_faceColor = UnityEngine.Color32.ConstructColor(i2213[37], i2213[38], i2213[39], i2213[40])
  i2212.m_fontSize = i2213[41]
  i2212.m_fontSizeBase = i2213[42]
  i2212.m_fontWeight = i2213[43]
  i2212.m_enableAutoSizing = !!i2213[44]
  i2212.m_fontSizeMin = i2213[45]
  i2212.m_fontSizeMax = i2213[46]
  i2212.m_fontStyle = i2213[47]
  i2212.m_HorizontalAlignment = i2213[48]
  i2212.m_VerticalAlignment = i2213[49]
  i2212.m_textAlignment = i2213[50]
  i2212.m_characterSpacing = i2213[51]
  i2212.m_wordSpacing = i2213[52]
  i2212.m_lineSpacing = i2213[53]
  i2212.m_lineSpacingMax = i2213[54]
  i2212.m_paragraphSpacing = i2213[55]
  i2212.m_charWidthMaxAdj = i2213[56]
  i2212.m_TextWrappingMode = i2213[57]
  i2212.m_wordWrappingRatios = i2213[58]
  i2212.m_overflowMode = i2213[59]
  request.r(i2213[60], i2213[61], 0, i2212, 'm_linkedTextComponent')
  request.r(i2213[62], i2213[63], 0, i2212, 'parentLinkedComponent')
  i2212.m_enableKerning = !!i2213[64]
  var i2219 = i2213[65]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(i2219[i + 0]);
  }
  i2212.m_ActiveFontFeatures = i2218
  i2212.m_enableExtraPadding = !!i2213[66]
  i2212.checkPaddingRequired = !!i2213[67]
  i2212.m_isRichText = !!i2213[68]
  i2212.m_parseCtrlCharacters = !!i2213[69]
  i2212.m_isOrthographic = !!i2213[70]
  i2212.m_isCullingEnabled = !!i2213[71]
  i2212.m_horizontalMapping = i2213[72]
  i2212.m_verticalMapping = i2213[73]
  i2212.m_uvLineOffset = i2213[74]
  i2212.m_geometrySortingOrder = i2213[75]
  i2212.m_IsTextObjectScaleStatic = !!i2213[76]
  i2212.m_VertexBufferAutoSizeReduction = !!i2213[77]
  i2212.m_useMaxVisibleDescender = !!i2213[78]
  i2212.m_pageToDisplay = i2213[79]
  i2212.m_margin = new pc.Vec4( i2213[80], i2213[81], i2213[82], i2213[83] )
  i2212.m_isUsingLegacyAnimationComponent = !!i2213[84]
  i2212.m_isVolumetricText = !!i2213[85]
  request.r(i2213[86], i2213[87], 0, i2212, 'm_Material')
  i2212.m_EmojiFallbackSupport = !!i2213[88]
  i2212.m_Maskable = !!i2213[89]
  i2212.m_Color = new pc.Color(i2213[90], i2213[91], i2213[92], i2213[93])
  i2212.m_RaycastTarget = !!i2213[94]
  i2212.m_RaycastPadding = new pc.Vec4( i2213[95], i2213[96], i2213[97], i2213[98] )
  return i2212
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2220 = root || request.c( 'TMPro.VertexGradient' )
  var i2221 = data
  i2220.topLeft = new pc.Color(i2221[0], i2221[1], i2221[2], i2221[3])
  i2220.topRight = new pc.Color(i2221[4], i2221[5], i2221[6], i2221[7])
  i2220.bottomLeft = new pc.Color(i2221[8], i2221[9], i2221[10], i2221[11])
  i2220.bottomRight = new pc.Color(i2221[12], i2221[13], i2221[14], i2221[15])
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2225 = data
  i2224.center = new pc.Vec3( i2225[0], i2225[1], i2225[2] )
  i2224.radius = i2225[3]
  i2224.enabled = !!i2225[4]
  i2224.isTrigger = !!i2225[5]
  request.r(i2225[6], i2225[7], 0, i2224, 'material')
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'animatorController')
  request.r(i2227[2], i2227[3], 0, i2226, 'avatar')
  i2226.updateMode = i2227[4]
  i2226.hasTransformHierarchy = !!i2227[5]
  i2226.applyRootMotion = !!i2227[6]
  var i2229 = i2227[7]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2226.humanBones = i2228
  i2226.enabled = !!i2227[8]
  return i2226
}

Deserializers["EventAnim"] = function (request, data, root) {
  var i2232 = root || request.c( 'EventAnim' )
  var i2233 = data
  var i2235 = i2233[0]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.add(request.d('UnityEngine.Events.UnityEvent', i2235[i + 0]));
  }
  i2232.animEvents = i2234
  var i2237 = i2233[1]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('EventAnim+MoveSequence')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('EventAnim+MoveSequence', i2237[i + 0]));
  }
  i2232.moveSequences = i2236
  return i2232
}

Deserializers["EventAnim+MoveSequence"] = function (request, data, root) {
  var i2242 = root || request.c( 'EventAnim+MoveSequence' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 1, i2244, '')
  }
  i2242.itemsToMove = i2244
  var i2247 = i2243[1]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 1, i2246, '')
  }
  i2242.targetPositions = i2246
  i2242.moveDuration = i2243[2]
  i2242.delayBetweenItems = i2243[3]
  i2242.isJump = !!i2243[4]
  i2242.jumpPower = i2243[5]
  i2242.changeSortingOrder = !!i2243[6]
  i2242.targetSortingOrder = i2243[7]
  var i2249 = i2243[8]
  var i2248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 1, i2248, '')
  }
  i2242.spritesToHideOnComplete = i2248
  var i2251 = i2243[9]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 1, i2250, '')
  }
  i2242.objectsToEnableOnComplete = i2250
  return i2242
}

Deserializers["TongItem"] = function (request, data, root) {
  var i2254 = root || request.c( 'TongItem' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'holdPoint')
  i2254.pickableLayer = UnityEngine.LayerMask.FromIntegerValue( i2255[2] )
  i2254.basketLayer = UnityEngine.LayerMask.FromIntegerValue( i2255[3] )
  i2254.detectRadius = i2255[4]
  i2254.randomRotateRange = new pc.Vec2( i2255[5], i2255[6] )
  i2254.flyToTongDuration = i2255[7]
  i2254.flyToBasketDuration = i2255[8]
  i2254.jumpPower = i2255[9]
  i2254.finalSortingOrder = i2255[10]
  var i2257 = i2255[11]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 1, i2256, '')
  }
  i2254.requiredPickables = i2256
  i2254.itemType = i2255[12]
  request.r(i2255[13], i2255[14], 0, i2254, 'dropTarget')
  i2254.dropDistanceThreshold = i2255[15]
  i2254.hideSpriteOnDrop = !!i2255[16]
  i2254.disableColliderOnComplete = !!i2255[17]
  i2254.isTool = !!i2255[18]
  request.r(i2255[19], i2255[20], 0, i2254, 'customDragBounds')
  i2254.increaseSortingLayerOnDrag = !!i2255[21]
  i2254.isLocked = !!i2255[22]
  i2254.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i2255[23], i2254.onInteractWhileLocked)
  i2254.onClick = request.d('UnityEngine.Events.UnityEvent', i2255[24], i2254.onClick)
  i2254.onDrop = request.d('UnityEngine.Events.UnityEvent', i2255[25], i2254.onDrop)
  i2254.onDragStart = request.d('UnityEngine.Events.UnityEvent', i2255[26], i2254.onDragStart)
  i2254.onReturn = request.d('UnityEngine.Events.UnityEvent', i2255[27], i2254.onReturn)
  i2254.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i2255[28], i2254.onAnimFinished)
  i2254.isSequentialClick = !!i2255[29]
  var i2259 = i2255[30]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.add(request.d('AnimObjectData', i2259[i + 0]));
  }
  i2254.animationObjects = i2258
  var i2261 = i2255[31]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.add(i2261[i + 0]);
  }
  i2254.fxSoundsStartAnim = i2260
  var i2263 = i2255[32]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(i2263[i + 0]);
  }
  i2254.fxSoundsAfterAnim = i2262
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2265 = data
  i2264.frontSortingLayerID = i2265[0]
  i2264.frontSortingOrder = i2265[1]
  i2264.backSortingLayerID = i2265[2]
  i2264.backSortingOrder = i2265[3]
  i2264.alphaCutoff = i2265[4]
  request.r(i2265[5], i2265[6], 0, i2264, 'sprite')
  i2264.tileMode = i2265[7]
  i2264.isCustomRangeActive = !!i2265[8]
  i2264.spriteSortPoint = i2265[9]
  i2264.enabled = !!i2265[10]
  request.r(i2265[11], i2265[12], 0, i2264, 'sharedMaterial')
  var i2267 = i2265[13]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 2, i2266, '')
  }
  i2264.sharedMaterials = i2266
  i2264.receiveShadows = !!i2265[14]
  i2264.shadowCastingMode = i2265[15]
  i2264.sortingLayerID = i2265[16]
  i2264.sortingOrder = i2265[17]
  i2264.lightmapIndex = i2265[18]
  i2264.lightmapSceneIndex = i2265[19]
  i2264.lightmapScaleOffset = new pc.Vec4( i2265[20], i2265[21], i2265[22], i2265[23] )
  i2264.lightProbeUsage = i2265[24]
  i2264.reflectionProbeUsage = i2265[25]
  return i2264
}

Deserializers["BasketAnim"] = function (request, data, root) {
  var i2268 = root || request.c( 'BasketAnim' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'activeObject')
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2271 = data
  i2270.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2271[0], i2270.main)
  i2270.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2271[1], i2270.colorBySpeed)
  i2270.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2271[2], i2270.colorOverLifetime)
  i2270.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2271[3], i2270.emission)
  i2270.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2271[4], i2270.rotationBySpeed)
  i2270.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2271[5], i2270.rotationOverLifetime)
  i2270.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2271[6], i2270.shape)
  i2270.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2271[7], i2270.sizeBySpeed)
  i2270.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2271[8], i2270.sizeOverLifetime)
  i2270.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2271[9], i2270.textureSheetAnimation)
  i2270.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2271[10], i2270.velocityOverLifetime)
  i2270.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2271[11], i2270.noise)
  i2270.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2271[12], i2270.inheritVelocity)
  i2270.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2271[13], i2270.forceOverLifetime)
  i2270.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2271[14], i2270.limitVelocityOverLifetime)
  i2270.useAutoRandomSeed = !!i2271[15]
  i2270.randomSeed = i2271[16]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2272 = root || new pc.ParticleSystemMain()
  var i2273 = data
  i2272.duration = i2273[0]
  i2272.loop = !!i2273[1]
  i2272.prewarm = !!i2273[2]
  i2272.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[3], i2272.startDelay)
  i2272.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[4], i2272.startLifetime)
  i2272.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[5], i2272.startSpeed)
  i2272.startSize3D = !!i2273[6]
  i2272.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[7], i2272.startSizeX)
  i2272.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[8], i2272.startSizeY)
  i2272.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[9], i2272.startSizeZ)
  i2272.startRotation3D = !!i2273[10]
  i2272.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[11], i2272.startRotationX)
  i2272.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[12], i2272.startRotationY)
  i2272.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[13], i2272.startRotationZ)
  i2272.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2273[14], i2272.startColor)
  i2272.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[15], i2272.gravityModifier)
  i2272.simulationSpace = i2273[16]
  request.r(i2273[17], i2273[18], 0, i2272, 'customSimulationSpace')
  i2272.simulationSpeed = i2273[19]
  i2272.useUnscaledTime = !!i2273[20]
  i2272.scalingMode = i2273[21]
  i2272.playOnAwake = !!i2273[22]
  i2272.maxParticles = i2273[23]
  i2272.emitterVelocityMode = i2273[24]
  i2272.stopAction = i2273[25]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2274 = root || new pc.MinMaxCurve()
  var i2275 = data
  i2274.mode = i2275[0]
  i2274.curveMin = new pc.AnimationCurve( { keys_flow: i2275[1] } )
  i2274.curveMax = new pc.AnimationCurve( { keys_flow: i2275[2] } )
  i2274.curveMultiplier = i2275[3]
  i2274.constantMin = i2275[4]
  i2274.constantMax = i2275[5]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2276 = root || new pc.MinMaxGradient()
  var i2277 = data
  i2276.mode = i2277[0]
  i2276.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2277[1], i2276.gradientMin)
  i2276.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2277[2], i2276.gradientMax)
  i2276.colorMin = new pc.Color(i2277[3], i2277[4], i2277[5], i2277[6])
  i2276.colorMax = new pc.Color(i2277[7], i2277[8], i2277[9], i2277[10])
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2279 = data
  i2278.mode = i2279[0]
  var i2281 = i2279[1]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2281[i + 0]) );
  }
  i2278.colorKeys = i2280
  var i2283 = i2279[2]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2283[i + 0]) );
  }
  i2278.alphaKeys = i2282
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemColorBySpeed()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2285[1], i2284.color)
  i2284.range = new pc.Vec2( i2285[2], i2285[3] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2289 = data
  i2288.color = new pc.Color(i2289[0], i2289[1], i2289[2], i2289[3])
  i2288.time = i2289[4]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2293 = data
  i2292.alpha = i2293[0]
  i2292.time = i2293[1]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemColorOverLifetime()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2295[1], i2294.color)
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemEmitter()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[1], i2296.rateOverTime)
  i2296.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.rateOverDistance)
  var i2299 = i2297[3]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2299[i + 0]) );
  }
  i2296.bursts = i2298
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemBurst()
  var i2303 = data
  i2302.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[0], i2302.count)
  i2302.cycleCount = i2303[1]
  i2302.minCount = i2303[2]
  i2302.maxCount = i2303[3]
  i2302.repeatInterval = i2303[4]
  i2302.time = i2303[5]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemRotationBySpeed()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.x)
  i2304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.y)
  i2304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.z)
  i2304.separateAxes = !!i2305[4]
  i2304.range = new pc.Vec2( i2305[5], i2305[6] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.separateAxes = !!i2307[4]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemShape()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.shapeType = i2309[1]
  i2308.randomDirectionAmount = i2309[2]
  i2308.sphericalDirectionAmount = i2309[3]
  i2308.randomPositionAmount = i2309[4]
  i2308.alignToDirection = !!i2309[5]
  i2308.radius = i2309[6]
  i2308.radiusMode = i2309[7]
  i2308.radiusSpread = i2309[8]
  i2308.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[9], i2308.radiusSpeed)
  i2308.radiusThickness = i2309[10]
  i2308.angle = i2309[11]
  i2308.length = i2309[12]
  i2308.boxThickness = new pc.Vec3( i2309[13], i2309[14], i2309[15] )
  i2308.meshShapeType = i2309[16]
  request.r(i2309[17], i2309[18], 0, i2308, 'mesh')
  request.r(i2309[19], i2309[20], 0, i2308, 'meshRenderer')
  request.r(i2309[21], i2309[22], 0, i2308, 'skinnedMeshRenderer')
  i2308.useMeshMaterialIndex = !!i2309[23]
  i2308.meshMaterialIndex = i2309[24]
  i2308.useMeshColors = !!i2309[25]
  i2308.normalOffset = i2309[26]
  i2308.arc = i2309[27]
  i2308.arcMode = i2309[28]
  i2308.arcSpread = i2309[29]
  i2308.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[30], i2308.arcSpeed)
  i2308.donutRadius = i2309[31]
  i2308.position = new pc.Vec3( i2309[32], i2309[33], i2309[34] )
  i2308.rotation = new pc.Vec3( i2309[35], i2309[36], i2309[37] )
  i2308.scale = new pc.Vec3( i2309[38], i2309[39], i2309[40] )
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemSizeBySpeed()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[1], i2310.x)
  i2310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[2], i2310.y)
  i2310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[3], i2310.z)
  i2310.separateAxes = !!i2311[4]
  i2310.range = new pc.Vec2( i2311[5], i2311[6] )
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.x)
  i2312.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.y)
  i2312.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.z)
  i2312.separateAxes = !!i2313[4]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.mode = i2315[1]
  i2314.animation = i2315[2]
  i2314.numTilesX = i2315[3]
  i2314.numTilesY = i2315[4]
  i2314.useRandomRow = !!i2315[5]
  i2314.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[6], i2314.frameOverTime)
  i2314.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[7], i2314.startFrame)
  i2314.cycleCount = i2315[8]
  i2314.rowIndex = i2315[9]
  i2314.flipU = i2315[10]
  i2314.flipV = i2315[11]
  i2314.spriteCount = i2315[12]
  var i2317 = i2315[13]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.sprites = i2316
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2320 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2321 = data
  i2320.enabled = !!i2321[0]
  i2320.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[1], i2320.x)
  i2320.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[2], i2320.y)
  i2320.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[3], i2320.z)
  i2320.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[4], i2320.radial)
  i2320.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[5], i2320.speedModifier)
  i2320.space = i2321[6]
  i2320.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[7], i2320.orbitalX)
  i2320.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[8], i2320.orbitalY)
  i2320.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[9], i2320.orbitalZ)
  i2320.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[10], i2320.orbitalOffsetX)
  i2320.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[11], i2320.orbitalOffsetY)
  i2320.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[12], i2320.orbitalOffsetZ)
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemNoise()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.separateAxes = !!i2323[1]
  i2322.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[2], i2322.strengthX)
  i2322.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[3], i2322.strengthY)
  i2322.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[4], i2322.strengthZ)
  i2322.frequency = i2323[5]
  i2322.damping = !!i2323[6]
  i2322.octaveCount = i2323[7]
  i2322.octaveMultiplier = i2323[8]
  i2322.octaveScale = i2323[9]
  i2322.quality = i2323[10]
  i2322.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[11], i2322.scrollSpeed)
  i2322.scrollSpeedMultiplier = i2323[12]
  i2322.remapEnabled = !!i2323[13]
  i2322.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[14], i2322.remapX)
  i2322.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[15], i2322.remapY)
  i2322.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[16], i2322.remapZ)
  i2322.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[17], i2322.positionAmount)
  i2322.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[18], i2322.rotationAmount)
  i2322.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[19], i2322.sizeAmount)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemInheritVelocity()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.mode = i2325[1]
  i2324.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[2], i2324.curve)
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2326 = root || new pc.ParticleSystemForceOverLifetime()
  var i2327 = data
  i2326.enabled = !!i2327[0]
  i2326.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[1], i2326.x)
  i2326.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[2], i2326.y)
  i2326.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[3], i2326.z)
  i2326.space = i2327[4]
  i2326.randomized = !!i2327[5]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2328 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2329 = data
  i2328.enabled = !!i2329[0]
  i2328.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[1], i2328.limit)
  i2328.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[2], i2328.limitX)
  i2328.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[3], i2328.limitY)
  i2328.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[4], i2328.limitZ)
  i2328.dampen = i2329[5]
  i2328.separateAxes = !!i2329[6]
  i2328.space = i2329[7]
  i2328.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[8], i2328.drag)
  i2328.multiplyDragByParticleSize = !!i2329[9]
  i2328.multiplyDragByParticleVelocity = !!i2329[10]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'mesh')
  i2330.meshCount = i2331[2]
  i2330.activeVertexStreamsCount = i2331[3]
  i2330.alignment = i2331[4]
  i2330.renderMode = i2331[5]
  i2330.sortMode = i2331[6]
  i2330.lengthScale = i2331[7]
  i2330.velocityScale = i2331[8]
  i2330.cameraVelocityScale = i2331[9]
  i2330.normalDirection = i2331[10]
  i2330.sortingFudge = i2331[11]
  i2330.minParticleSize = i2331[12]
  i2330.maxParticleSize = i2331[13]
  i2330.pivot = new pc.Vec3( i2331[14], i2331[15], i2331[16] )
  request.r(i2331[17], i2331[18], 0, i2330, 'trailMaterial')
  i2330.applyActiveColorSpace = !!i2331[19]
  i2330.enabled = !!i2331[20]
  request.r(i2331[21], i2331[22], 0, i2330, 'sharedMaterial')
  var i2333 = i2331[23]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2330.sharedMaterials = i2332
  i2330.receiveShadows = !!i2331[24]
  i2330.shadowCastingMode = i2331[25]
  i2330.sortingLayerID = i2331[26]
  i2330.sortingOrder = i2331[27]
  i2330.lightmapIndex = i2331[28]
  i2330.lightmapSceneIndex = i2331[29]
  i2330.lightmapScaleOffset = new pc.Vec4( i2331[30], i2331[31], i2331[32], i2331[33] )
  i2330.lightProbeUsage = i2331[34]
  i2330.reflectionProbeUsage = i2331[35]
  return i2330
}

Deserializers["CuttingSetup"] = function (request, data, root) {
  var i2334 = root || request.c( 'CuttingSetup' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'knifeProcessor')
  i2334.requiredClicks = i2335[2]
  request.r(i2335[3], i2335[4], 0, i2334, 'maskTransform')
  i2334.maskStartPos = new pc.Vec3( i2335[5], i2335[6], i2335[7] )
  i2334.maskEndPos = new pc.Vec3( i2335[8], i2335[9], i2335[10] )
  i2334.knifeStartPos = new pc.Vec3( i2335[11], i2335[12], i2335[13] )
  i2334.knifeEndPos = new pc.Vec3( i2335[14], i2335[15], i2335[16] )
  i2334.onCuttingCompleted = request.d('UnityEngine.Events.UnityEvent', i2335[17], i2334.onCuttingCompleted)
  return i2334
}

Deserializers["AutoProcessItem"] = function (request, data, root) {
  var i2336 = root || request.c( 'AutoProcessItem' )
  var i2337 = data
  i2336.processTime = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'toolToActivate')
  i2336.onProcessStarted = request.d('UnityEngine.Events.UnityEvent', i2337[3], i2336.onProcessStarted)
  i2336.onProcessCompleted = request.d('UnityEngine.Events.UnityEvent', i2337[4], i2336.onProcessCompleted)
  return i2336
}

Deserializers["UnlockCondition"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnlockCondition' )
  var i2339 = data
  i2338.conditionsToMeet = i2339[0]
  i2338.delayBeforeUnlock = i2339[1]
  var i2341 = i2339[2]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 1, i2340, '')
  }
  i2338.collidersToEnable = i2340
  var i2343 = i2339[3]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 1, i2342, '')
  }
  i2338.objectsToEnable = i2342
  i2338.onUnlocked = request.d('UnityEngine.Events.UnityEvent', i2339[4], i2338.onUnlocked)
  return i2338
}

Deserializers["SwipeToProcessItem"] = function (request, data, root) {
  var i2346 = root || request.c( 'SwipeToProcessItem' )
  var i2347 = data
  i2346.swipeDistanceRequired = i2347[0]
  i2346.requiredFlips = i2347[1]
  i2346.onSingleFlip = request.d('UnityEngine.Events.UnityEvent', i2347[2], i2346.onSingleFlip)
  i2346.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2347[3], i2346.onCompleted)
  i2346.onCompletedAndReleased = request.d('UnityEngine.Events.UnityEvent', i2347[4], i2346.onCompletedAndReleased)
  i2346.onBeginSwipe = request.d('UnityEngine.Events.UnityEvent', i2347[5], i2346.onBeginSwipe)
  i2346.onEndSwipe = request.d('UnityEngine.Events.UnityEvent', i2347[6], i2346.onEndSwipe)
  request.r(i2347[7], i2347[8], 0, i2346, 'sideAObject')
  request.r(i2347[9], i2347[10], 0, i2346, 'sideBObject')
  request.r(i2347[11], i2347[12], 0, i2346, 'progressBarTransform')
  i2346.isVerticalBar = !!i2347[13]
  return i2346
}

Deserializers["DropTargetSlot"] = function (request, data, root) {
  var i2348 = root || request.c( 'DropTargetSlot' )
  var i2349 = data
  i2348.isOccupied = !!i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'currentItem')
  return i2348
}

Deserializers["ClickToProcessItem"] = function (request, data, root) {
  var i2350 = root || request.c( 'ClickToProcessItem' )
  var i2351 = data
  i2350.requiredClicks = i2351[0]
  i2350.onSingleClick = request.d('UnityEngine.Events.UnityEvent', i2351[1], i2350.onSingleClick)
  i2350.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2351[2], i2350.onCompleted)
  request.r(i2351[3], i2351[4], 0, i2350, 'maskTransform')
  i2350.maskStartPos = new pc.Vec3( i2351[5], i2351[6], i2351[7] )
  i2350.maskEndPos = new pc.Vec3( i2351[8], i2351[9], i2351[10] )
  request.r(i2351[11], i2351[12], 0, i2350, 'moveObject')
  i2350.moveStartPos = new pc.Vec3( i2351[13], i2351[14], i2351[15] )
  i2350.moveEndPos = new pc.Vec3( i2351[16], i2351[17], i2351[18] )
  return i2350
}

Deserializers["DragBetweenBoundsToProcess"] = function (request, data, root) {
  var i2352 = root || request.c( 'DragBetweenBoundsToProcess' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'leftPoint')
  request.r(i2353[2], i2353[3], 0, i2352, 'rightPoint')
  i2352.hitThreshold = i2353[4]
  i2352.requiredHits = i2353[5]
  i2352.onHitBound = request.d('UnityEngine.Events.UnityEvent', i2353[6], i2352.onHitBound)
  i2352.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2353[7], i2352.onCompleted)
  request.r(i2353[8], i2353[9], 0, i2352, 'progressBarTransform')
  i2352.isVerticalBar = !!i2353[10]
  request.r(i2353[11], i2353[12], 0, i2352, 'toggleObjectA')
  request.r(i2353[13], i2353[14], 0, i2352, 'toggleObjectB')
  return i2352
}

Deserializers["ItemSpawner"] = function (request, data, root) {
  var i2354 = root || request.c( 'ItemSpawner' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'prefabToSpawn')
  i2354.maxSpawnCount = i2355[2]
  i2354.onSpawn = request.d('UnityEngine.Events.UnityEvent', i2355[3], i2354.onSpawn)
  request.r(i2355[4], i2355[5], 0, i2354, 'dropTargetForSpawnedItem')
  i2354.autoStartDrag = !!i2355[6]
  var i2357 = i2355[7]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 1, i2356, '')
  }
  i2354.objectsToEnableOnSuccess = i2356
  i2354.onSpawnedItemSuccess = request.d('UnityEngine.Events.UnityEvent', i2355[8], i2354.onSpawnedItemSuccess)
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'additionalVertexStreams')
  i2358.enabled = !!i2359[2]
  request.r(i2359[3], i2359[4], 0, i2358, 'sharedMaterial')
  var i2361 = i2359[5]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.sharedMaterials = i2360
  i2358.receiveShadows = !!i2359[6]
  i2358.shadowCastingMode = i2359[7]
  i2358.sortingLayerID = i2359[8]
  i2358.sortingOrder = i2359[9]
  i2358.lightmapIndex = i2359[10]
  i2358.lightmapSceneIndex = i2359[11]
  i2358.lightmapScaleOffset = new pc.Vec4( i2359[12], i2359[13], i2359[14], i2359[15] )
  i2358.lightProbeUsage = i2359[16]
  i2358.reflectionProbeUsage = i2359[17]
  return i2358
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2362 = root || request.c( 'TMPro.TextMeshPro' )
  var i2363 = data
  i2362._SortingLayer = i2363[0]
  i2362._SortingLayerID = i2363[1]
  i2362._SortingOrder = i2363[2]
  i2362.m_hasFontAssetChanged = !!i2363[3]
  request.r(i2363[4], i2363[5], 0, i2362, 'm_renderer')
  i2362.m_maskType = i2363[6]
  i2362.m_text = i2363[7]
  i2362.m_isRightToLeft = !!i2363[8]
  request.r(i2363[9], i2363[10], 0, i2362, 'm_fontAsset')
  request.r(i2363[11], i2363[12], 0, i2362, 'm_sharedMaterial')
  var i2365 = i2363[13]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 2) {
  request.r(i2365[i + 0], i2365[i + 1], 2, i2364, '')
  }
  i2362.m_fontSharedMaterials = i2364
  request.r(i2363[14], i2363[15], 0, i2362, 'm_fontMaterial')
  var i2367 = i2363[16]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2362.m_fontMaterials = i2366
  i2362.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2363[17], i2363[18], i2363[19], i2363[20])
  i2362.m_fontColor = new pc.Color(i2363[21], i2363[22], i2363[23], i2363[24])
  i2362.m_enableVertexGradient = !!i2363[25]
  i2362.m_colorMode = i2363[26]
  i2362.m_fontColorGradient = request.d('TMPro.VertexGradient', i2363[27], i2362.m_fontColorGradient)
  request.r(i2363[28], i2363[29], 0, i2362, 'm_fontColorGradientPreset')
  request.r(i2363[30], i2363[31], 0, i2362, 'm_spriteAsset')
  i2362.m_tintAllSprites = !!i2363[32]
  request.r(i2363[33], i2363[34], 0, i2362, 'm_StyleSheet')
  i2362.m_TextStyleHashCode = i2363[35]
  i2362.m_overrideHtmlColors = !!i2363[36]
  i2362.m_faceColor = UnityEngine.Color32.ConstructColor(i2363[37], i2363[38], i2363[39], i2363[40])
  i2362.m_fontSize = i2363[41]
  i2362.m_fontSizeBase = i2363[42]
  i2362.m_fontWeight = i2363[43]
  i2362.m_enableAutoSizing = !!i2363[44]
  i2362.m_fontSizeMin = i2363[45]
  i2362.m_fontSizeMax = i2363[46]
  i2362.m_fontStyle = i2363[47]
  i2362.m_HorizontalAlignment = i2363[48]
  i2362.m_VerticalAlignment = i2363[49]
  i2362.m_textAlignment = i2363[50]
  i2362.m_characterSpacing = i2363[51]
  i2362.m_wordSpacing = i2363[52]
  i2362.m_lineSpacing = i2363[53]
  i2362.m_lineSpacingMax = i2363[54]
  i2362.m_paragraphSpacing = i2363[55]
  i2362.m_charWidthMaxAdj = i2363[56]
  i2362.m_TextWrappingMode = i2363[57]
  i2362.m_wordWrappingRatios = i2363[58]
  i2362.m_overflowMode = i2363[59]
  request.r(i2363[60], i2363[61], 0, i2362, 'm_linkedTextComponent')
  request.r(i2363[62], i2363[63], 0, i2362, 'parentLinkedComponent')
  i2362.m_enableKerning = !!i2363[64]
  var i2369 = i2363[65]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(i2369[i + 0]);
  }
  i2362.m_ActiveFontFeatures = i2368
  i2362.m_enableExtraPadding = !!i2363[66]
  i2362.checkPaddingRequired = !!i2363[67]
  i2362.m_isRichText = !!i2363[68]
  i2362.m_parseCtrlCharacters = !!i2363[69]
  i2362.m_isOrthographic = !!i2363[70]
  i2362.m_isCullingEnabled = !!i2363[71]
  i2362.m_horizontalMapping = i2363[72]
  i2362.m_verticalMapping = i2363[73]
  i2362.m_uvLineOffset = i2363[74]
  i2362.m_geometrySortingOrder = i2363[75]
  i2362.m_IsTextObjectScaleStatic = !!i2363[76]
  i2362.m_VertexBufferAutoSizeReduction = !!i2363[77]
  i2362.m_useMaxVisibleDescender = !!i2363[78]
  i2362.m_pageToDisplay = i2363[79]
  i2362.m_margin = new pc.Vec4( i2363[80], i2363[81], i2363[82], i2363[83] )
  i2362.m_isUsingLegacyAnimationComponent = !!i2363[84]
  i2362.m_isVolumetricText = !!i2363[85]
  request.r(i2363[86], i2363[87], 0, i2362, 'm_Material')
  i2362.m_EmojiFallbackSupport = !!i2363[88]
  i2362.m_Maskable = !!i2363[89]
  i2362.m_Color = new pc.Color(i2363[90], i2363[91], i2363[92], i2363[93])
  i2362.m_RaycastTarget = !!i2363[94]
  i2362.m_RaycastPadding = new pc.Vec4( i2363[95], i2363[96], i2363[97], i2363[98] )
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'sharedMesh')
  return i2370
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'm_FirstSelected')
  i2372.m_sendNavigationEvents = !!i2373[2]
  i2372.m_DragThreshold = i2373[3]
  return i2372
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2375 = data
  i2374.m_HorizontalAxis = i2375[0]
  i2374.m_VerticalAxis = i2375[1]
  i2374.m_SubmitButton = i2375[2]
  i2374.m_CancelButton = i2375[3]
  i2374.m_InputActionsPerSecond = i2375[4]
  i2374.m_RepeatDelay = i2375[5]
  i2374.m_ForceModuleActive = !!i2375[6]
  i2374.m_SendPointerHoverToParent = !!i2375[7]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2377 = data
  i2376.ambientIntensity = i2377[0]
  i2376.reflectionIntensity = i2377[1]
  i2376.ambientMode = i2377[2]
  i2376.ambientLight = new pc.Color(i2377[3], i2377[4], i2377[5], i2377[6])
  i2376.ambientSkyColor = new pc.Color(i2377[7], i2377[8], i2377[9], i2377[10])
  i2376.ambientGroundColor = new pc.Color(i2377[11], i2377[12], i2377[13], i2377[14])
  i2376.ambientEquatorColor = new pc.Color(i2377[15], i2377[16], i2377[17], i2377[18])
  i2376.fogColor = new pc.Color(i2377[19], i2377[20], i2377[21], i2377[22])
  i2376.fogEndDistance = i2377[23]
  i2376.fogStartDistance = i2377[24]
  i2376.fogDensity = i2377[25]
  i2376.fog = !!i2377[26]
  request.r(i2377[27], i2377[28], 0, i2376, 'skybox')
  i2376.fogMode = i2377[29]
  var i2379 = i2377[30]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2379[i + 0]) );
  }
  i2376.lightmaps = i2378
  i2376.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2377[31], i2376.lightProbes)
  i2376.lightmapsMode = i2377[32]
  i2376.mixedBakeMode = i2377[33]
  i2376.environmentLightingMode = i2377[34]
  i2376.ambientProbe = new pc.SphericalHarmonicsL2(i2377[35])
  i2376.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2377[36])
  i2376.useReferenceAmbientProbe = !!i2377[37]
  request.r(i2377[38], i2377[39], 0, i2376, 'customReflection')
  request.r(i2377[40], i2377[41], 0, i2376, 'defaultReflection')
  i2376.defaultReflectionMode = i2377[42]
  i2376.defaultReflectionResolution = i2377[43]
  i2376.sunLightObjectId = i2377[44]
  i2376.pixelLightCount = i2377[45]
  i2376.defaultReflectionHDR = !!i2377[46]
  i2376.hasLightDataAsset = !!i2377[47]
  i2376.hasManualGenerate = !!i2377[48]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'lightmapColor')
  request.r(i2383[2], i2383[3], 0, i2382, 'lightmapDirection')
  request.r(i2383[4], i2383[5], 0, i2382, 'shadowMask')
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2384 = root || new UnityEngine.LightProbes()
  var i2385 = data
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2395[i + 0]));
  }
  i2392.ShaderCompilationErrors = i2394
  i2392.name = i2393[1]
  i2392.guid = i2393[2]
  var i2397 = i2393[3]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( i2397[i + 0] );
  }
  i2392.shaderDefinedKeywords = i2396
  var i2399 = i2393[4]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2399[i + 0]) );
  }
  i2392.passes = i2398
  var i2401 = i2393[5]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2401[i + 0]) );
  }
  i2392.usePasses = i2400
  var i2403 = i2393[6]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2403[i + 0]) );
  }
  i2392.defaultParameterValues = i2402
  request.r(i2393[7], i2393[8], 0, i2392, 'unityFallbackShader')
  i2392.readDepth = !!i2393[9]
  i2392.hasDepthOnlyPass = !!i2393[10]
  i2392.isCreatedByShaderGraph = !!i2393[11]
  i2392.disableBatching = !!i2393[12]
  i2392.compiled = !!i2393[13]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2407 = data
  i2406.shaderName = i2407[0]
  i2406.errorMessage = i2407[1]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2412 = root || new pc.UnityShaderPass()
  var i2413 = data
  i2412.id = i2413[0]
  i2412.subShaderIndex = i2413[1]
  i2412.name = i2413[2]
  i2412.passType = i2413[3]
  i2412.grabPassTextureName = i2413[4]
  i2412.usePass = !!i2413[5]
  i2412.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[6], i2412.zTest)
  i2412.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[7], i2412.zWrite)
  i2412.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[8], i2412.culling)
  i2412.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2413[9], i2412.blending)
  i2412.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2413[10], i2412.alphaBlending)
  i2412.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[11], i2412.colorWriteMask)
  i2412.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[12], i2412.offsetUnits)
  i2412.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[13], i2412.offsetFactor)
  i2412.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[14], i2412.stencilRef)
  i2412.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[15], i2412.stencilReadMask)
  i2412.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2413[16], i2412.stencilWriteMask)
  i2412.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2413[17], i2412.stencilOp)
  i2412.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2413[18], i2412.stencilOpFront)
  i2412.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2413[19], i2412.stencilOpBack)
  var i2415 = i2413[20]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2415[i + 0]) );
  }
  i2412.tags = i2414
  var i2417 = i2413[21]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( i2417[i + 0] );
  }
  i2412.passDefinedKeywords = i2416
  var i2419 = i2413[22]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2419[i + 0]) );
  }
  i2412.passDefinedKeywordGroups = i2418
  var i2421 = i2413[23]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2421[i + 0]) );
  }
  i2412.variants = i2420
  var i2423 = i2413[24]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2423[i + 0]) );
  }
  i2412.excludedVariants = i2422
  i2412.hasDepthReader = !!i2413[25]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2425 = data
  i2424.val = i2425[0]
  i2424.name = i2425[1]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2427 = data
  i2426.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2427[0], i2426.src)
  i2426.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2427[1], i2426.dst)
  i2426.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2427[2], i2426.op)
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2429 = data
  i2428.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2429[0], i2428.pass)
  i2428.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2429[1], i2428.fail)
  i2428.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2429[2], i2428.zFail)
  i2428.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2429[3], i2428.comp)
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2433 = data
  i2432.name = i2433[0]
  i2432.value = i2433[1]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2436.keywords = i2438
  i2436.hasDiscard = !!i2437[1]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2443 = data
  i2442.passId = i2443[0]
  i2442.subShaderIndex = i2443[1]
  var i2445 = i2443[2]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( i2445[i + 0] );
  }
  i2442.keywords = i2444
  i2442.vertexProgram = i2443[3]
  i2442.fragmentProgram = i2443[4]
  i2442.exportedForWebGl2 = !!i2443[5]
  i2442.readDepth = !!i2443[6]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'shader')
  i2448.pass = i2449[2]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.type = i2453[1]
  i2452.value = new pc.Vec4( i2453[2], i2453[3], i2453[4], i2453[5] )
  i2452.textureValue = i2453[6]
  i2452.shaderPropertyFlag = i2453[7]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2455 = data
  i2454.name = i2455[0]
  request.r(i2455[1], i2455[2], 0, i2454, 'texture')
  i2454.aabb = i2455[3]
  i2454.vertices = i2455[4]
  i2454.triangles = i2455[5]
  i2454.textureRect = UnityEngine.Rect.MinMaxRect(i2455[6], i2455[7], i2455[8], i2455[9])
  i2454.packedRect = UnityEngine.Rect.MinMaxRect(i2455[10], i2455[11], i2455[12], i2455[13])
  i2454.border = new pc.Vec4( i2455[14], i2455[15], i2455[16], i2455[17] )
  i2454.transparency = i2455[18]
  i2454.bounds = i2455[19]
  i2454.pixelsPerUnit = i2455[20]
  i2454.textureWidth = i2455[21]
  i2454.textureHeight = i2455[22]
  i2454.nativeSize = new pc.Vec2( i2455[23], i2455[24] )
  i2454.pivot = new pc.Vec2( i2455[25], i2455[26] )
  i2454.textureRectOffset = new pc.Vec2( i2455[27], i2455[28] )
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.wrapMode = i2457[1]
  i2456.isLooping = !!i2457[2]
  i2456.length = i2457[3]
  var i2459 = i2457[4]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2459[i + 0]) );
  }
  i2456.curves = i2458
  var i2461 = i2457[5]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2461[i + 0]) );
  }
  i2456.events = i2460
  i2456.halfPrecision = !!i2457[6]
  i2456._frameRate = i2457[7]
  i2456.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2457[8], i2456.localBounds)
  i2456.hasMuscleCurves = !!i2457[9]
  var i2463 = i2457[10]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2456.clipMuscleConstant = i2462
  i2456.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2457[11], i2456.clipBindingConstant)
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2467 = data
  i2466.path = i2467[0]
  i2466.hash = i2467[1]
  i2466.componentType = i2467[2]
  i2466.property = i2467[3]
  i2466.keys = i2467[4]
  var i2469 = i2467[5]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2469[i + 0]) );
  }
  i2466.objectReferenceKeys = i2468
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2473 = data
  i2472.time = i2473[0]
  request.r(i2473[1], i2473[2], 0, i2472, 'value')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2477 = data
  i2476.functionName = i2477[0]
  i2476.floatParameter = i2477[1]
  i2476.intParameter = i2477[2]
  i2476.stringParameter = i2477[3]
  request.r(i2477[4], i2477[5], 0, i2476, 'objectReferenceParameter')
  i2476.time = i2477[6]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2479 = data
  i2478.center = new pc.Vec3( i2479[0], i2479[1], i2479[2] )
  i2478.extends = new pc.Vec3( i2479[3], i2479[4], i2479[5] )
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2483 = data
  var i2485 = i2483[0]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( i2485[i + 0] );
  }
  i2482.genericBindings = i2484
  var i2487 = i2483[1]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( i2487[i + 0] );
  }
  i2482.pptrCurveMapping = i2486
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2489 = data
  i2488.name = i2489[0]
  i2488.ascent = i2489[1]
  i2488.originalLineHeight = i2489[2]
  i2488.fontSize = i2489[3]
  var i2491 = i2489[4]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2491[i + 0]) );
  }
  i2488.characterInfo = i2490
  request.r(i2489[5], i2489[6], 0, i2488, 'texture')
  i2488.originalFontSize = i2489[7]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2495 = data
  i2494.index = i2495[0]
  i2494.advance = i2495[1]
  i2494.bearing = i2495[2]
  i2494.glyphWidth = i2495[3]
  i2494.glyphHeight = i2495[4]
  i2494.minX = i2495[5]
  i2494.maxX = i2495[6]
  i2494.minY = i2495[7]
  i2494.maxY = i2495[8]
  i2494.uvBottomLeftX = i2495[9]
  i2494.uvBottomLeftY = i2495[10]
  i2494.uvBottomRightX = i2495[11]
  i2494.uvBottomRightY = i2495[12]
  i2494.uvTopLeftX = i2495[13]
  i2494.uvTopLeftY = i2495[14]
  i2494.uvTopRightX = i2495[15]
  i2494.uvTopRightY = i2495[16]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2497 = data
  i2496.name = i2497[0]
  var i2499 = i2497[1]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2499[i + 0]) );
  }
  i2496.layers = i2498
  var i2501 = i2497[2]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2501[i + 0]) );
  }
  i2496.parameters = i2500
  i2496.animationClips = i2497[3]
  i2496.avatarUnsupported = i2497[4]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2505 = data
  i2504.name = i2505[0]
  i2504.defaultWeight = i2505[1]
  i2504.blendingMode = i2505[2]
  i2504.avatarMask = i2505[3]
  i2504.syncedLayerIndex = i2505[4]
  i2504.syncedLayerAffectsTiming = !!i2505[5]
  i2504.syncedLayers = i2505[6]
  i2504.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2505[7], i2504.stateMachine)
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2507 = data
  i2506.id = i2507[0]
  i2506.name = i2507[1]
  i2506.path = i2507[2]
  var i2509 = i2507[3]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2509[i + 0]) );
  }
  i2506.states = i2508
  var i2511 = i2507[4]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2511[i + 0]) );
  }
  i2506.machines = i2510
  var i2513 = i2507[5]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2513[i + 0]) );
  }
  i2506.entryStateTransitions = i2512
  var i2515 = i2507[6]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2515[i + 0]) );
  }
  i2506.exitStateTransitions = i2514
  var i2517 = i2507[7]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2517[i + 0]) );
  }
  i2506.anyStateTransitions = i2516
  i2506.defaultStateId = i2507[8]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2521 = data
  i2520.id = i2521[0]
  i2520.name = i2521[1]
  i2520.cycleOffset = i2521[2]
  i2520.cycleOffsetParameter = i2521[3]
  i2520.cycleOffsetParameterActive = !!i2521[4]
  i2520.mirror = !!i2521[5]
  i2520.mirrorParameter = i2521[6]
  i2520.mirrorParameterActive = !!i2521[7]
  i2520.motionId = i2521[8]
  i2520.nameHash = i2521[9]
  i2520.fullPathHash = i2521[10]
  i2520.speed = i2521[11]
  i2520.speedParameter = i2521[12]
  i2520.speedParameterActive = !!i2521[13]
  i2520.tag = i2521[14]
  i2520.tagHash = i2521[15]
  i2520.writeDefaultValues = !!i2521[16]
  var i2523 = i2521[17]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2520.behaviours = i2522
  var i2525 = i2521[18]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2525[i + 0]) );
  }
  i2520.transitions = i2524
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2531 = data
  i2530.fullPath = i2531[0]
  i2530.canTransitionToSelf = !!i2531[1]
  i2530.duration = i2531[2]
  i2530.exitTime = i2531[3]
  i2530.hasExitTime = !!i2531[4]
  i2530.hasFixedDuration = !!i2531[5]
  i2530.interruptionSource = i2531[6]
  i2530.offset = i2531[7]
  i2530.orderedInterruption = !!i2531[8]
  i2530.destinationStateId = i2531[9]
  i2530.isExit = !!i2531[10]
  i2530.mute = !!i2531[11]
  i2530.solo = !!i2531[12]
  var i2533 = i2531[13]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2533[i + 0]) );
  }
  i2530.conditions = i2532
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2539 = data
  i2538.destinationStateId = i2539[0]
  i2538.isExit = !!i2539[1]
  i2538.mute = !!i2539[2]
  i2538.solo = !!i2539[3]
  var i2541 = i2539[4]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2541[i + 0]) );
  }
  i2538.conditions = i2540
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2545 = data
  i2544.mode = i2545[0]
  i2544.parameter = i2545[1]
  i2544.threshold = i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2549 = data
  i2548.defaultBool = !!i2549[0]
  i2548.defaultFloat = i2549[1]
  i2548.defaultInt = i2549[2]
  i2548.name = i2549[3]
  i2548.nameHash = i2549[4]
  i2548.type = i2549[5]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.bytes64 = i2551[1]
  i2550.data = i2551[2]
  return i2550
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2552 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2553 = data
  i2552.normalStyle = i2553[0]
  i2552.normalSpacingOffset = i2553[1]
  i2552.boldStyle = i2553[2]
  i2552.boldSpacing = i2553[3]
  i2552.italicStyle = i2553[4]
  i2552.tabSize = i2553[5]
  request.r(i2553[6], i2553[7], 0, i2552, 'atlas')
  i2552.m_SourceFontFileGUID = i2553[8]
  i2552.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2553[9], i2552.m_CreationSettings)
  request.r(i2553[10], i2553[11], 0, i2552, 'm_SourceFontFile')
  i2552.m_SourceFontFilePath = i2553[12]
  i2552.m_AtlasPopulationMode = i2553[13]
  i2552.InternalDynamicOS = !!i2553[14]
  var i2555 = i2553[15]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.add(request.d('UnityEngine.TextCore.Glyph', i2555[i + 0]));
  }
  i2552.m_GlyphTable = i2554
  var i2557 = i2553[16]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.add(request.d('TMPro.TMP_Character', i2557[i + 0]));
  }
  i2552.m_CharacterTable = i2556
  var i2559 = i2553[17]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 2, i2558, '')
  }
  i2552.m_AtlasTextures = i2558
  i2552.m_AtlasTextureIndex = i2553[18]
  i2552.m_IsMultiAtlasTexturesEnabled = !!i2553[19]
  i2552.m_GetFontFeatures = !!i2553[20]
  i2552.m_ClearDynamicDataOnBuild = !!i2553[21]
  i2552.m_AtlasWidth = i2553[22]
  i2552.m_AtlasHeight = i2553[23]
  i2552.m_AtlasPadding = i2553[24]
  i2552.m_AtlasRenderMode = i2553[25]
  var i2561 = i2553[26]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.add(request.d('UnityEngine.TextCore.GlyphRect', i2561[i + 0]));
  }
  i2552.m_UsedGlyphRects = i2560
  var i2563 = i2553[27]
  var i2562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.add(request.d('UnityEngine.TextCore.GlyphRect', i2563[i + 0]));
  }
  i2552.m_FreeGlyphRects = i2562
  i2552.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2553[28], i2552.m_FontFeatureTable)
  i2552.m_ShouldReimportFontFeatures = !!i2553[29]
  var i2565 = i2553[30]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 1, i2564, '')
  }
  i2552.m_FallbackFontAssetTable = i2564
  var i2567 = i2553[31]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('TMPro.TMP_FontWeightPair', i2567[i + 0]) );
  }
  i2552.m_FontWeightTable = i2566
  var i2569 = i2553[32]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('TMPro.TMP_FontWeightPair', i2569[i + 0]) );
  }
  i2552.fontWeights = i2568
  i2552.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2553[33], i2552.m_fontInfo)
  var i2571 = i2553[34]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('TMPro.TMP_Glyph', i2571[i + 0]));
  }
  i2552.m_glyphInfoList = i2570
  i2552.m_KerningTable = request.d('TMPro.KerningTable', i2553[35], i2552.m_KerningTable)
  var i2573 = i2553[36]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 1, i2572, '')
  }
  i2552.fallbackFontAssets = i2572
  i2552.m_Version = i2553[37]
  i2552.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2553[38], i2552.m_FaceInfo)
  request.r(i2553[39], i2553[40], 0, i2552, 'm_Material')
  return i2552
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2575 = data
  i2574.sourceFontFileName = i2575[0]
  i2574.sourceFontFileGUID = i2575[1]
  i2574.faceIndex = i2575[2]
  i2574.pointSizeSamplingMode = i2575[3]
  i2574.pointSize = i2575[4]
  i2574.padding = i2575[5]
  i2574.paddingMode = i2575[6]
  i2574.packingMode = i2575[7]
  i2574.atlasWidth = i2575[8]
  i2574.atlasHeight = i2575[9]
  i2574.characterSetSelectionMode = i2575[10]
  i2574.characterSequence = i2575[11]
  i2574.referencedFontAssetGUID = i2575[12]
  i2574.referencedTextAssetGUID = i2575[13]
  i2574.fontStyle = i2575[14]
  i2574.fontStyleModifier = i2575[15]
  i2574.renderMode = i2575[16]
  i2574.includeFontFeatures = !!i2575[17]
  return i2574
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2579 = data
  i2578.m_Index = i2579[0]
  i2578.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2579[1], i2578.m_Metrics)
  i2578.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2579[2], i2578.m_GlyphRect)
  i2578.m_Scale = i2579[3]
  i2578.m_AtlasIndex = i2579[4]
  i2578.m_ClassDefinitionType = i2579[5]
  return i2578
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2581 = data
  i2580.m_Width = i2581[0]
  i2580.m_Height = i2581[1]
  i2580.m_HorizontalBearingX = i2581[2]
  i2580.m_HorizontalBearingY = i2581[3]
  i2580.m_HorizontalAdvance = i2581[4]
  return i2580
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2583 = data
  i2582.m_X = i2583[0]
  i2582.m_Y = i2583[1]
  i2582.m_Width = i2583[2]
  i2582.m_Height = i2583[3]
  return i2582
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.TMP_Character' )
  var i2587 = data
  i2586.m_ElementType = i2587[0]
  i2586.m_Unicode = i2587[1]
  i2586.m_GlyphIndex = i2587[2]
  i2586.m_Scale = i2587[3]
  return i2586
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2593 = data
  var i2595 = i2593[0]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('TMPro.MultipleSubstitutionRecord', i2595[i + 0]));
  }
  i2592.m_MultipleSubstitutionRecords = i2594
  var i2597 = i2593[1]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.LigatureSubstitutionRecord', i2597[i + 0]));
  }
  i2592.m_LigatureSubstitutionRecords = i2596
  var i2599 = i2593[2]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2599[i + 0]));
  }
  i2592.m_GlyphPairAdjustmentRecords = i2598
  var i2601 = i2593[3]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2601[i + 0]));
  }
  i2592.m_MarkToBaseAdjustmentRecords = i2600
  var i2603 = i2593[4]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2603[i + 0]));
  }
  i2592.m_MarkToMarkAdjustmentRecords = i2602
  return i2592
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2607 = data
  i2606.m_TargetGlyphID = i2607[0]
  i2606.m_SubstituteGlyphIDs = i2607[1]
  return i2606
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2610 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2611 = data
  i2610.m_ComponentGlyphIDs = i2611[0]
  i2610.m_LigatureGlyphID = i2611[1]
  return i2610
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2615 = data
  i2614.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2615[0], i2614.m_FirstAdjustmentRecord)
  i2614.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2615[1], i2614.m_SecondAdjustmentRecord)
  i2614.m_FeatureLookupFlags = i2615[2]
  return i2614
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2617 = data
  i2616.m_GlyphIndex = i2617[0]
  i2616.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2617[1], i2616.m_GlyphValueRecord)
  return i2616
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2619 = data
  i2618.m_XPlacement = i2619[0]
  i2618.m_YPlacement = i2619[1]
  i2618.m_XAdvance = i2619[2]
  i2618.m_YAdvance = i2619[3]
  return i2618
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2623 = data
  i2622.m_BaseGlyphID = i2623[0]
  i2622.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2623[1], i2622.m_BaseGlyphAnchorPoint)
  i2622.m_MarkGlyphID = i2623[2]
  i2622.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2623[3], i2622.m_MarkPositionAdjustment)
  return i2622
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2627 = data
  i2626.m_BaseMarkGlyphID = i2627[0]
  i2626.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2627[1], i2626.m_BaseMarkGlyphAnchorPoint)
  i2626.m_CombiningMarkGlyphID = i2627[2]
  i2626.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2627[3], i2626.m_CombiningMarkPositionAdjustment)
  return i2626
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'regularTypeface')
  request.r(i2633[2], i2633[3], 0, i2632, 'italicTypeface')
  return i2632
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2635 = data
  i2634.Name = i2635[0]
  i2634.PointSize = i2635[1]
  i2634.Scale = i2635[2]
  i2634.CharacterCount = i2635[3]
  i2634.LineHeight = i2635[4]
  i2634.Baseline = i2635[5]
  i2634.Ascender = i2635[6]
  i2634.CapHeight = i2635[7]
  i2634.Descender = i2635[8]
  i2634.CenterLine = i2635[9]
  i2634.SuperscriptOffset = i2635[10]
  i2634.SubscriptOffset = i2635[11]
  i2634.SubSize = i2635[12]
  i2634.Underline = i2635[13]
  i2634.UnderlineThickness = i2635[14]
  i2634.strikethrough = i2635[15]
  i2634.strikethroughThickness = i2635[16]
  i2634.TabWidth = i2635[17]
  i2634.Padding = i2635[18]
  i2634.AtlasWidth = i2635[19]
  i2634.AtlasHeight = i2635[20]
  return i2634
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.x = i2639[1]
  i2638.y = i2639[2]
  i2638.width = i2639[3]
  i2638.height = i2639[4]
  i2638.xOffset = i2639[5]
  i2638.yOffset = i2639[6]
  i2638.xAdvance = i2639[7]
  i2638.scale = i2639[8]
  return i2638
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.KerningTable' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.KerningPair', i2643[i + 0]));
  }
  i2640.kerningPairs = i2642
  return i2640
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.KerningPair' )
  var i2647 = data
  i2646.xOffset = i2647[0]
  i2646.m_FirstGlyph = i2647[1]
  i2646.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2647[2], i2646.m_FirstGlyphAdjustments)
  i2646.m_SecondGlyph = i2647[3]
  i2646.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2647[4], i2646.m_SecondGlyphAdjustments)
  i2646.m_IgnoreSpacingAdjustments = !!i2647[5]
  return i2646
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2649 = data
  i2648.m_FaceIndex = i2649[0]
  i2648.m_FamilyName = i2649[1]
  i2648.m_StyleName = i2649[2]
  i2648.m_PointSize = i2649[3]
  i2648.m_Scale = i2649[4]
  i2648.m_UnitsPerEM = i2649[5]
  i2648.m_LineHeight = i2649[6]
  i2648.m_AscentLine = i2649[7]
  i2648.m_CapLine = i2649[8]
  i2648.m_MeanLine = i2649[9]
  i2648.m_Baseline = i2649[10]
  i2648.m_DescentLine = i2649[11]
  i2648.m_SuperscriptOffset = i2649[12]
  i2648.m_SuperscriptSize = i2649[13]
  i2648.m_SubscriptOffset = i2649[14]
  i2648.m_SubscriptSize = i2649[15]
  i2648.m_UnderlineOffset = i2649[16]
  i2648.m_UnderlineThickness = i2649[17]
  i2648.m_StrikethroughOffset = i2649[18]
  i2648.m_StrikethroughThickness = i2649[19]
  i2648.m_TabWidth = i2649[20]
  return i2648
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2650 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2651 = data
  i2650.useSafeMode = !!i2651[0]
  i2650.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2651[1], i2650.safeModeOptions)
  i2650.timeScale = i2651[2]
  i2650.unscaledTimeScale = i2651[3]
  i2650.useSmoothDeltaTime = !!i2651[4]
  i2650.maxSmoothUnscaledTime = i2651[5]
  i2650.rewindCallbackMode = i2651[6]
  i2650.showUnityEditorReport = !!i2651[7]
  i2650.logBehaviour = i2651[8]
  i2650.drawGizmos = !!i2651[9]
  i2650.defaultRecyclable = !!i2651[10]
  i2650.defaultAutoPlay = i2651[11]
  i2650.defaultUpdateType = i2651[12]
  i2650.defaultTimeScaleIndependent = !!i2651[13]
  i2650.defaultEaseType = i2651[14]
  i2650.defaultEaseOvershootOrAmplitude = i2651[15]
  i2650.defaultEasePeriod = i2651[16]
  i2650.defaultAutoKill = !!i2651[17]
  i2650.defaultLoopType = i2651[18]
  i2650.debugMode = !!i2651[19]
  i2650.debugStoreTargetId = !!i2651[20]
  i2650.showPreviewPanel = !!i2651[21]
  i2650.storeSettingsLocation = i2651[22]
  i2650.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2651[23], i2650.modules)
  i2650.createASMDEF = !!i2651[24]
  i2650.showPlayingTweens = !!i2651[25]
  i2650.showPausedTweens = !!i2651[26]
  return i2650
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2652 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2653 = data
  i2652.logBehaviour = i2653[0]
  i2652.nestedTweenFailureBehaviour = i2653[1]
  return i2652
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2654 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2655 = data
  i2654.showPanel = !!i2655[0]
  i2654.audioEnabled = !!i2655[1]
  i2654.physicsEnabled = !!i2655[2]
  i2654.physics2DEnabled = !!i2655[3]
  i2654.spriteEnabled = !!i2655[4]
  i2654.uiEnabled = !!i2655[5]
  i2654.uiToolkitEnabled = !!i2655[6]
  i2654.textMeshProEnabled = !!i2655[7]
  i2654.tk2DEnabled = !!i2655[8]
  i2654.deAudioEnabled = !!i2655[9]
  i2654.deUnityExtendedEnabled = !!i2655[10]
  i2654.epoOutlineEnabled = !!i2655[11]
  return i2654
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_Settings' )
  var i2657 = data
  i2656.assetVersion = i2657[0]
  i2656.m_TextWrappingMode = i2657[1]
  i2656.m_enableKerning = !!i2657[2]
  var i2659 = i2657[3]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(i2659[i + 0]);
  }
  i2656.m_ActiveFontFeatures = i2658
  i2656.m_enableExtraPadding = !!i2657[4]
  i2656.m_enableTintAllSprites = !!i2657[5]
  i2656.m_enableParseEscapeCharacters = !!i2657[6]
  i2656.m_EnableRaycastTarget = !!i2657[7]
  i2656.m_GetFontFeaturesAtRuntime = !!i2657[8]
  i2656.m_missingGlyphCharacter = i2657[9]
  i2656.m_ClearDynamicDataOnBuild = !!i2657[10]
  i2656.m_warningsDisabled = !!i2657[11]
  request.r(i2657[12], i2657[13], 0, i2656, 'm_defaultFontAsset')
  i2656.m_defaultFontAssetPath = i2657[14]
  i2656.m_defaultFontSize = i2657[15]
  i2656.m_defaultAutoSizeMinRatio = i2657[16]
  i2656.m_defaultAutoSizeMaxRatio = i2657[17]
  i2656.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2657[18], i2657[19] )
  i2656.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2657[20], i2657[21] )
  i2656.m_autoSizeTextContainer = !!i2657[22]
  i2656.m_IsTextObjectScaleStatic = !!i2657[23]
  var i2661 = i2657[24]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2661.length; i += 2) {
  request.r(i2661[i + 0], i2661[i + 1], 1, i2660, '')
  }
  i2656.m_fallbackFontAssets = i2660
  i2656.m_matchMaterialPreset = !!i2657[25]
  i2656.m_HideSubTextObjects = !!i2657[26]
  request.r(i2657[27], i2657[28], 0, i2656, 'm_defaultSpriteAsset')
  i2656.m_defaultSpriteAssetPath = i2657[29]
  i2656.m_enableEmojiSupport = !!i2657[30]
  i2656.m_MissingCharacterSpriteUnicode = i2657[31]
  var i2663 = i2657[32]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 1, i2662, '')
  }
  i2656.m_EmojiFallbackTextAssets = i2662
  i2656.m_defaultColorGradientPresetsPath = i2657[33]
  request.r(i2657[34], i2657[35], 0, i2656, 'm_defaultStyleSheet')
  i2656.m_StyleSheetsResourcePath = i2657[36]
  request.r(i2657[37], i2657[38], 0, i2656, 'm_leadingCharacters')
  request.r(i2657[39], i2657[40], 0, i2656, 'm_followingCharacters')
  i2656.m_UseModernHangulLineBreakingRules = !!i2657[41]
  return i2656
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'spriteSheet')
  var i2669 = i2667[2]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.TMP_Sprite', i2669[i + 0]));
  }
  i2666.spriteInfoList = i2668
  var i2671 = i2667[3]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 1, i2670, '')
  }
  i2666.fallbackSpriteAssets = i2670
  var i2673 = i2667[4]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.TMP_SpriteCharacter', i2673[i + 0]));
  }
  i2666.m_SpriteCharacterTable = i2672
  var i2675 = i2667[5]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_SpriteGlyph', i2675[i + 0]));
  }
  i2666.m_GlyphTable = i2674
  i2666.m_Version = i2667[6]
  i2666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2667[7], i2666.m_FaceInfo)
  request.r(i2667[8], i2667[9], 0, i2666, 'm_Material')
  return i2666
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.hashCode = i2679[1]
  i2678.unicode = i2679[2]
  i2678.pivot = new pc.Vec2( i2679[3], i2679[4] )
  request.r(i2679[5], i2679[6], 0, i2678, 'sprite')
  i2678.id = i2679[7]
  i2678.x = i2679[8]
  i2678.y = i2679[9]
  i2678.width = i2679[10]
  i2678.height = i2679[11]
  i2678.xOffset = i2679[12]
  i2678.yOffset = i2679[13]
  i2678.xAdvance = i2679[14]
  i2678.scale = i2679[15]
  return i2678
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2685 = data
  i2684.m_Name = i2685[0]
  i2684.m_ElementType = i2685[1]
  i2684.m_Unicode = i2685[2]
  i2684.m_GlyphIndex = i2685[3]
  i2684.m_Scale = i2685[4]
  return i2684
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2689 = data
  request.r(i2689[0], i2689[1], 0, i2688, 'sprite')
  i2688.m_Index = i2689[2]
  i2688.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2689[3], i2688.m_Metrics)
  i2688.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2689[4], i2688.m_GlyphRect)
  i2688.m_Scale = i2689[5]
  i2688.m_AtlasIndex = i2689[6]
  i2688.m_ClassDefinitionType = i2689[7]
  return i2688
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2691 = data
  var i2693 = i2691[0]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('TMPro.TMP_Style', i2693[i + 0]));
  }
  i2690.m_StyleList = i2692
  return i2690
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_Style' )
  var i2697 = data
  i2696.m_Name = i2697[0]
  i2696.m_HashCode = i2697[1]
  i2696.m_OpeningDefinition = i2697[2]
  i2696.m_ClosingDefinition = i2697[3]
  i2696.m_OpeningTagArray = i2697[4]
  i2696.m_ClosingTagArray = i2697[5]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2701[i + 0]) );
  }
  i2698.files = i2700
  i2698.componentToPrefabIds = i2699[1]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2705 = data
  i2704.path = i2705[0]
  request.r(i2705[1], i2705[2], 0, i2704, 'unityObject')
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2709[i + 0]) );
  }
  i2706.scriptsExecutionOrder = i2708
  var i2711 = i2707[1]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2711[i + 0]) );
  }
  i2706.sortingLayers = i2710
  var i2713 = i2707[2]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2713[i + 0]) );
  }
  i2706.cullingLayers = i2712
  i2706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2707[3], i2706.timeSettings)
  i2706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2707[4], i2706.physicsSettings)
  i2706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2707[5], i2706.physics2DSettings)
  i2706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2707[6], i2706.qualitySettings)
  i2706.enableRealtimeShadows = !!i2707[7]
  i2706.enableAutoInstancing = !!i2707[8]
  i2706.enableStaticBatching = !!i2707[9]
  i2706.enableDynamicBatching = !!i2707[10]
  i2706.lightmapEncodingQuality = i2707[11]
  i2706.desiredColorSpace = i2707[12]
  var i2715 = i2707[13]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( i2715[i + 0] );
  }
  i2706.allTags = i2714
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.value = i2719[1]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2723 = data
  i2722.id = i2723[0]
  i2722.name = i2723[1]
  i2722.value = i2723[2]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2727 = data
  i2726.id = i2727[0]
  i2726.name = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2729 = data
  i2728.fixedDeltaTime = i2729[0]
  i2728.maximumDeltaTime = i2729[1]
  i2728.timeScale = i2729[2]
  i2728.maximumParticleTimestep = i2729[3]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2731 = data
  i2730.gravity = new pc.Vec3( i2731[0], i2731[1], i2731[2] )
  i2730.defaultSolverIterations = i2731[3]
  i2730.bounceThreshold = i2731[4]
  i2730.autoSyncTransforms = !!i2731[5]
  i2730.autoSimulation = !!i2731[6]
  var i2733 = i2731[7]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2733[i + 0]) );
  }
  i2730.collisionMatrix = i2732
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2737 = data
  i2736.enabled = !!i2737[0]
  i2736.layerId = i2737[1]
  i2736.otherLayerId = i2737[2]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'material')
  i2738.gravity = new pc.Vec2( i2739[2], i2739[3] )
  i2738.positionIterations = i2739[4]
  i2738.velocityIterations = i2739[5]
  i2738.velocityThreshold = i2739[6]
  i2738.maxLinearCorrection = i2739[7]
  i2738.maxAngularCorrection = i2739[8]
  i2738.maxTranslationSpeed = i2739[9]
  i2738.maxRotationSpeed = i2739[10]
  i2738.baumgarteScale = i2739[11]
  i2738.baumgarteTOIScale = i2739[12]
  i2738.timeToSleep = i2739[13]
  i2738.linearSleepTolerance = i2739[14]
  i2738.angularSleepTolerance = i2739[15]
  i2738.defaultContactOffset = i2739[16]
  i2738.autoSimulation = !!i2739[17]
  i2738.queriesHitTriggers = !!i2739[18]
  i2738.queriesStartInColliders = !!i2739[19]
  i2738.callbacksOnDisable = !!i2739[20]
  i2738.reuseCollisionCallbacks = !!i2739[21]
  i2738.autoSyncTransforms = !!i2739[22]
  var i2741 = i2739[23]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2741[i + 0]) );
  }
  i2738.collisionMatrix = i2740
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2745 = data
  i2744.enabled = !!i2745[0]
  i2744.layerId = i2745[1]
  i2744.otherLayerId = i2745[2]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2747 = data
  var i2749 = i2747[0]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2749[i + 0]) );
  }
  i2746.qualityLevels = i2748
  var i2751 = i2747[1]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2746.names = i2750
  i2746.shadows = i2747[2]
  i2746.anisotropicFiltering = i2747[3]
  i2746.antiAliasing = i2747[4]
  i2746.lodBias = i2747[5]
  i2746.shadowCascades = i2747[6]
  i2746.shadowDistance = i2747[7]
  i2746.shadowmaskMode = i2747[8]
  i2746.shadowProjection = i2747[9]
  i2746.shadowResolution = i2747[10]
  i2746.softParticles = !!i2747[11]
  i2746.softVegetation = !!i2747[12]
  i2746.activeColorSpace = i2747[13]
  i2746.desiredColorSpace = i2747[14]
  i2746.masterTextureLimit = i2747[15]
  i2746.maxQueuedFrames = i2747[16]
  i2746.particleRaycastBudget = i2747[17]
  i2746.pixelLightCount = i2747[18]
  i2746.realtimeReflectionProbes = !!i2747[19]
  i2746.shadowCascade2Split = i2747[20]
  i2746.shadowCascade4Split = new pc.Vec3( i2747[21], i2747[22], i2747[23] )
  i2746.streamingMipmapsActive = !!i2747[24]
  i2746.vSyncCount = i2747[25]
  i2746.asyncUploadBufferSize = i2747[26]
  i2746.asyncUploadTimeSlice = i2747[27]
  i2746.billboardsFaceCameraPosition = !!i2747[28]
  i2746.shadowNearPlaneOffset = i2747[29]
  i2746.streamingMipmapsMemoryBudget = i2747[30]
  i2746.maximumLODLevel = i2747[31]
  i2746.streamingMipmapsAddAllCameras = !!i2747[32]
  i2746.streamingMipmapsMaxLevelReduction = i2747[33]
  i2746.streamingMipmapsRenderersPerFrame = i2747[34]
  i2746.resolutionScalingFixedDPIFactor = i2747[35]
  i2746.streamingMipmapsMaxFileIORequests = i2747[36]
  i2746.currentQualityLevel = i2747[37]
  return i2746
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2755 = data
  i2754.m_XCoordinate = i2755[0]
  i2754.m_YCoordinate = i2755[1]
  return i2754
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2757 = data
  i2756.m_XPositionAdjustment = i2757[0]
  i2756.m_YPositionAdjustment = i2757[1]
  return i2756
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2759 = data
  i2758.xPlacement = i2759[0]
  i2758.yPlacement = i2759[1]
  i2758.xAdvance = i2759[2]
  i2758.yAdvance = i2759[3]
  return i2758
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[12],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[12],"88":[45],"89":[90],"91":[90],"22":[21],"14":[12],"38":[5],"43":[5],"41":[5],"92":[9],"93":[12],"94":[95],"96":[48],"97":[22],"98":[21],"46":[45,21],"28":[21,26],"99":[21],"100":[26,21],"101":[45],"102":[26,21],"103":[21],"104":[105],"106":[105],"107":[105],"108":[109],"110":[21],"111":[21],"25":[22],"27":[26,21],"112":[21],"24":[22],"113":[21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[21],"119":[21],"120":[21],"121":[21],"122":[26,21],"123":[21],"124":[21],"125":[21],"126":[21],"127":[26,21],"128":[21],"129":[48],"130":[48],"49":[48],"131":[48],"132":[12],"133":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","ItemController","UnityEngine.GameObject","ItemMovement","ItemGraphic","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","AutoCameraFit","InputManager","TriggerOnAllActive","HandHintManager","TongItem","UnityEngine.Animator","GameManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.SphereCollider","UnityEditor.Animations.AnimatorController","EventAnim","UnityEngine.SpriteMask","BasketAnim","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CuttingSetup","ClickToProcessItem","AutoProcessItem","UnlockCondition","SwipeToProcessItem","DropTargetSlot","DragBetweenBoundsToProcess","ItemSpawner","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_Cookzi";

Deserializers.lunaInitializationTime = "06/23/2026 10:40:28";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "60490f81-f2ff-4875-ae07-f37d149fdcb9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

