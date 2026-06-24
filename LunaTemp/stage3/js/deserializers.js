var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.JointSpring' )
  var i2107 = data
  i2106.spring = i2107[0]
  i2106.damper = i2107[1]
  i2106.targetPosition = i2107[2]
  return i2106
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.JointMotor' )
  var i2109 = data
  i2108.m_TargetVelocity = i2109[0]
  i2108.m_Force = i2109[1]
  i2108.m_FreeSpin = i2109[2]
  return i2108
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.JointLimits' )
  var i2111 = data
  i2110.m_Min = i2111[0]
  i2110.m_Max = i2111[1]
  i2110.m_Bounciness = i2111[2]
  i2110.m_BounceMinVelocity = i2111[3]
  i2110.m_ContactDistance = i2111[4]
  i2110.minBounce = i2111[5]
  i2110.maxBounce = i2111[6]
  return i2110
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.JointDrive' )
  var i2113 = data
  i2112.m_PositionSpring = i2113[0]
  i2112.m_PositionDamper = i2113[1]
  i2112.m_MaximumForce = i2113[2]
  i2112.m_UseAcceleration = i2113[3]
  return i2112
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2115 = data
  i2114.m_Spring = i2115[0]
  i2114.m_Damper = i2115[1]
  return i2114
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2117 = data
  i2116.m_Limit = i2117[0]
  i2116.m_Bounciness = i2117[1]
  i2116.m_ContactDistance = i2117[2]
  return i2116
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2119 = data
  i2118.m_ExtremumSlip = i2119[0]
  i2118.m_ExtremumValue = i2119[1]
  i2118.m_AsymptoteSlip = i2119[2]
  i2118.m_AsymptoteValue = i2119[3]
  i2118.m_Stiffness = i2119[4]
  return i2118
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2121 = data
  i2120.m_LowerAngle = i2121[0]
  i2120.m_UpperAngle = i2121[1]
  return i2120
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2123 = data
  i2122.m_MotorSpeed = i2123[0]
  i2122.m_MaximumMotorTorque = i2123[1]
  return i2122
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2125 = data
  i2124.m_DampingRatio = i2125[0]
  i2124.m_Frequency = i2125[1]
  i2124.m_Angle = i2125[2]
  return i2124
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2127 = data
  i2126.m_LowerTranslation = i2127[0]
  i2126.m_UpperTranslation = i2127[1]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2128 = root || new pc.UnityMaterial()
  var i2129 = data
  i2128.name = i2129[0]
  request.r(i2129[1], i2129[2], 0, i2128, 'shader')
  i2128.renderQueue = i2129[3]
  i2128.enableInstancing = !!i2129[4]
  var i2131 = i2129[5]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2131[i + 0]) );
  }
  i2128.floatParameters = i2130
  var i2133 = i2129[6]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2133[i + 0]) );
  }
  i2128.colorParameters = i2132
  var i2135 = i2129[7]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2135[i + 0]) );
  }
  i2128.vectorParameters = i2134
  var i2137 = i2129[8]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2137[i + 0]) );
  }
  i2128.textureParameters = i2136
  var i2139 = i2129[9]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2139[i + 0]) );
  }
  i2128.materialFlags = i2138
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.value = i2143[1]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.value = new pc.Color(i2147[1], i2147[2], i2147[3], i2147[4])
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.value = new pc.Vec4( i2151[1], i2151[2], i2151[3], i2151[4] )
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2155 = data
  i2154.name = i2155[0]
  request.r(i2155[1], i2155[2], 0, i2154, 'value')
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.enabled = !!i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.width = i2161[1]
  i2160.height = i2161[2]
  i2160.mipmapCount = i2161[3]
  i2160.anisoLevel = i2161[4]
  i2160.filterMode = i2161[5]
  i2160.hdr = !!i2161[6]
  i2160.format = i2161[7]
  i2160.wrapMode = i2161[8]
  i2160.alphaIsTransparency = !!i2161[9]
  i2160.alphaSource = i2161[10]
  i2160.graphicsFormat = i2161[11]
  i2160.sRGBTexture = !!i2161[12]
  i2160.desiredColorSpace = i2161[13]
  i2160.wrapU = i2161[14]
  i2160.wrapV = i2161[15]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2163 = data
  i2162.position = new pc.Vec3( i2163[0], i2163[1], i2163[2] )
  i2162.scale = new pc.Vec3( i2163[3], i2163[4], i2163[5] )
  i2162.rotation = new pc.Quat(i2163[6], i2163[7], i2163[8], i2163[9])
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2165 = data
  i2164.center = new pc.Vec3( i2165[0], i2165[1], i2165[2] )
  i2164.size = new pc.Vec3( i2165[3], i2165[4], i2165[5] )
  i2164.enabled = !!i2165[6]
  i2164.isTrigger = !!i2165[7]
  request.r(i2165[8], i2165[9], 0, i2164, 'material')
  return i2164
}

Deserializers["ItemController"] = function (request, data, root) {
  var i2166 = root || request.c( 'ItemController' )
  var i2167 = data
  i2166.itemType = i2167[0]
  request.r(i2167[1], i2167[2], 0, i2166, 'dropTarget')
  i2166.dropDistanceThreshold = i2167[3]
  i2166.hideSpriteOnDrop = !!i2167[4]
  i2166.disableColliderOnComplete = !!i2167[5]
  i2166.isTool = !!i2167[6]
  request.r(i2167[7], i2167[8], 0, i2166, 'customDragBounds')
  i2166.increaseSortingLayerOnDrag = !!i2167[9]
  i2166.isLocked = !!i2167[10]
  i2166.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i2167[11], i2166.onInteractWhileLocked)
  i2166.onClick = request.d('UnityEngine.Events.UnityEvent', i2167[12], i2166.onClick)
  i2166.onDrop = request.d('UnityEngine.Events.UnityEvent', i2167[13], i2166.onDrop)
  i2166.onDragStart = request.d('UnityEngine.Events.UnityEvent', i2167[14], i2166.onDragStart)
  i2166.onReturn = request.d('UnityEngine.Events.UnityEvent', i2167[15], i2166.onReturn)
  i2166.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i2167[16], i2166.onAnimFinished)
  i2166.isSequentialClick = !!i2167[17]
  var i2169 = i2167[18]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(request.d('AnimObjectData', i2169[i + 0]));
  }
  i2166.animationObjects = i2168
  i2166.interactSound = i2167[19]
  i2166.sequenceLoopSound = i2167[20]
  var i2171 = i2167[21]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.add(i2171[i + 0]);
  }
  i2166.fxSoundsStartAnim = i2170
  var i2173 = i2167[22]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(i2173[i + 0]);
  }
  i2166.fxSoundsAfterAnim = i2172
  return i2166
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2175 = data
  i2174.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2175[0], i2174.m_PersistentCalls)
  return i2174
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2177 = data
  var i2179 = i2177[0]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.add(request.d('UnityEngine.Events.PersistentCall', i2179[i + 0]));
  }
  i2176.m_Calls = i2178
  return i2176
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'm_Target')
  i2182.m_TargetAssemblyTypeName = i2183[2]
  i2182.m_MethodName = i2183[3]
  i2182.m_Mode = i2183[4]
  i2182.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2183[5], i2182.m_Arguments)
  i2182.m_CallState = i2183[6]
  return i2182
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'm_ObjectArgument')
  i2184.m_ObjectArgumentAssemblyTypeName = i2185[2]
  i2184.m_IntArgument = i2185[3]
  i2184.m_FloatArgument = i2185[4]
  i2184.m_StringArgument = i2185[5]
  i2184.m_BoolArgument = !!i2185[6]
  return i2184
}

Deserializers["AnimObjectData"] = function (request, data, root) {
  var i2188 = root || request.c( 'AnimObjectData' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'animObj')
  i2188.delayFromStart = i2189[2]
  i2188.durationToDeactivate = i2189[3]
  i2188.triggerName = i2189[4]
  return i2188
}

Deserializers["ItemMovement"] = function (request, data, root) {
  var i2192 = root || request.c( 'ItemMovement' )
  var i2193 = data
  return i2192
}

Deserializers["ItemGraphic"] = function (request, data, root) {
  var i2194 = root || request.c( 'ItemGraphic' )
  var i2195 = data
  var i2197 = i2195[0]
  var i2196 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 1, i2196, '')
  }
  i2194.spriteRenderers = i2196
  i2194.rotateOnDrag = !!i2195[1]
  i2194.dragRotationAngle = new pc.Vec3( i2195[2], i2195[3], i2195[4] )
  i2194.rotationDuration = i2195[5]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2201 = data
  i2200.color = new pc.Color(i2201[0], i2201[1], i2201[2], i2201[3])
  request.r(i2201[4], i2201[5], 0, i2200, 'sprite')
  i2200.flipX = !!i2201[6]
  i2200.flipY = !!i2201[7]
  i2200.drawMode = i2201[8]
  i2200.size = new pc.Vec2( i2201[9], i2201[10] )
  i2200.tileMode = i2201[11]
  i2200.adaptiveModeThreshold = i2201[12]
  i2200.maskInteraction = i2201[13]
  i2200.spriteSortPoint = i2201[14]
  i2200.enabled = !!i2201[15]
  request.r(i2201[16], i2201[17], 0, i2200, 'sharedMaterial')
  var i2203 = i2201[18]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 2, i2202, '')
  }
  i2200.sharedMaterials = i2202
  i2200.receiveShadows = !!i2201[19]
  i2200.shadowCastingMode = i2201[20]
  i2200.sortingLayerID = i2201[21]
  i2200.sortingOrder = i2201[22]
  i2200.lightmapIndex = i2201[23]
  i2200.lightmapSceneIndex = i2201[24]
  i2200.lightmapScaleOffset = new pc.Vec4( i2201[25], i2201[26], i2201[27], i2201[28] )
  i2200.lightProbeUsage = i2201[29]
  i2200.reflectionProbeUsage = i2201[30]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.tagId = i2207[1]
  i2206.enabled = !!i2207[2]
  i2206.isStatic = !!i2207[3]
  i2206.layer = i2207[4]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.index = i2209[1]
  i2208.startup = !!i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2211 = data
  i2210.aspect = i2211[0]
  i2210.orthographic = !!i2211[1]
  i2210.orthographicSize = i2211[2]
  i2210.backgroundColor = new pc.Color(i2211[3], i2211[4], i2211[5], i2211[6])
  i2210.nearClipPlane = i2211[7]
  i2210.farClipPlane = i2211[8]
  i2210.fieldOfView = i2211[9]
  i2210.depth = i2211[10]
  i2210.clearFlags = i2211[11]
  i2210.cullingMask = i2211[12]
  i2210.rect = i2211[13]
  request.r(i2211[14], i2211[15], 0, i2210, 'targetTexture')
  i2210.usePhysicalProperties = !!i2211[16]
  i2210.focalLength = i2211[17]
  i2210.sensorSize = new pc.Vec2( i2211[18], i2211[19] )
  i2210.lensShift = new pc.Vec2( i2211[20], i2211[21] )
  i2210.gateFit = i2211[22]
  i2210.commandBufferCount = i2211[23]
  i2210.cameraType = i2211[24]
  i2210.enabled = !!i2211[25]
  return i2210
}

Deserializers["AutoCameraFit"] = function (request, data, root) {
  var i2212 = root || request.c( 'AutoCameraFit' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'canvasBtn')
  request.r(i2213[2], i2213[3], 0, i2212, 'targetArea')
  i2212.paddingLandscape = i2213[4]
  i2212.paddingPortrait = i2213[5]
  i2212.extraPaddingSmallScreen = i2213[6]
  i2212.smallScreenThreshold = i2213[7]
  i2212.autoUpdateOnResize = !!i2213[8]
  i2212.adjustInEditMode = !!i2213[9]
  return i2212
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2214 = root || request.c( 'InputManager' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'mainCamera')
  i2214.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2215[2] )
  i2214.installLayer = UnityEngine.LayerMask.FromIntegerValue( i2215[3] )
  i2214.maxDistance = i2215[4]
  i2214.itemsToGotoStore = i2215[5]
  i2214.dragSortingOffset = i2215[6]
  i2214.useDragBounds = !!i2215[7]
  request.r(i2215[8], i2215[9], 0, i2214, 'dragBounds')
  return i2214
}

Deserializers["TriggerOnAllActive"] = function (request, data, root) {
  var i2216 = root || request.c( 'TriggerOnAllActive' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('ActiveEventGroup')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(request.d('ActiveEventGroup', i2219[i + 0]));
  }
  i2216.eventGroups = i2218
  return i2216
}

Deserializers["ActiveEventGroup"] = function (request, data, root) {
  var i2222 = root || request.c( 'ActiveEventGroup' )
  var i2223 = data
  i2222.groupName = i2223[0]
  var i2225 = i2223[1]
  var i2224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 1, i2224, '')
  }
  i2222.targetObjects = i2224
  i2222.delayTime = i2223[2]
  i2222.cancelIfAnyDeactivatedDuringDelay = !!i2223[3]
  i2222.onAllActive = request.d('UnityEngine.Events.UnityEvent', i2223[4], i2222.onAllActive)
  i2222.isWaiting = !!i2223[5]
  i2222.hasTriggered = !!i2223[6]
  return i2222
}

Deserializers["HandHintManager"] = function (request, data, root) {
  var i2228 = root || request.c( 'HandHintManager' )
  var i2229 = data
  var i2231 = i2229[0]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('ItemController')))
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 1, i2230, '')
  }
  i2228.hintItems = i2230
  request.r(i2229[1], i2229[2], 0, i2228, 'handHintObject')
  request.r(i2229[3], i2229[4], 0, i2228, 'handAnimator')
  i2228.idleTimeToHint = i2229[5]
  i2228.dragAnimDuration = i2229[6]
  request.r(i2229[7], i2229[8], 0, i2228, 'startHintPos')
  request.r(i2229[9], i2229[10], 0, i2228, 'endHintPos')
  return i2228
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2234 = root || request.c( 'GameManager' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'winCanvas')
  request.r(i2235[2], i2235[3], 0, i2234, 'loseCanvas')
  i2234.timeLimit = i2235[4]
  i2234.onWinGame = request.d('UnityEngine.Events.UnityEvent', i2235[5], i2234.onWinGame)
  i2234.onLoseGame = request.d('UnityEngine.Events.UnityEvent', i2235[6], i2234.onLoseGame)
  i2234.isGameEnded = !!i2235[7]
  return i2234
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2236 = root || request.c( 'Ply_SoundManager' )
  var i2237 = data
  i2236.fxAudio = request.d('FxAudio', i2237[0], i2236.fxAudio)
  request.r(i2237[1], i2237[2], 0, i2236, 'bgm1')
  return i2236
}

Deserializers["FxAudio"] = function (request, data, root) {
  var i2238 = root || request.c( 'FxAudio' )
  var i2239 = data
  i2238.None = request.d('SoundData', i2239[0], i2238.None)
  i2238.PickableItemPickSound = request.d('SoundData', i2239[1], i2238.PickableItemPickSound)
  i2238.PickableItemDropSound = request.d('SoundData', i2239[2], i2238.PickableItemDropSound)
  i2238.WaterBottle = request.d('SoundData', i2239[3], i2238.WaterBottle)
  i2238.WaterDrop = request.d('SoundData', i2239[4], i2238.WaterDrop)
  i2238.GasClick = request.d('SoundData', i2239[5], i2238.GasClick)
  i2238.Heart = request.d('SoundData', i2239[6], i2238.Heart)
  i2238.Boil = request.d('SoundData', i2239[7], i2238.Boil)
  i2238.Put2 = request.d('SoundData', i2239[8], i2238.Put2)
  i2238.Knife = request.d('SoundData', i2239[9], i2238.Knife)
  i2238.Cutting = request.d('SoundData', i2239[10], i2238.Cutting)
  i2238.KnifeWing = request.d('SoundData', i2239[11], i2238.KnifeWing)
  i2238.SaltDrop = request.d('SoundData', i2239[12], i2238.SaltDrop)
  i2238.Cookin_Pan_Fryin_003_01 = request.d('SoundData', i2239[13], i2238.Cookin_Pan_Fryin_003_01)
  return i2238
}

Deserializers["SoundData"] = function (request, data, root) {
  var i2240 = root || request.c( 'SoundData' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'clip')
  i2240.repeatCount = i2241[2]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'clip')
  request.r(i2243[2], i2243[3], 0, i2242, 'outputAudioMixerGroup')
  i2242.playOnAwake = !!i2243[4]
  i2242.loop = !!i2243[5]
  i2242.time = i2243[6]
  i2242.volume = i2243[7]
  i2242.pitch = i2243[8]
  i2242.enabled = !!i2243[9]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2245 = data
  i2244.pivot = new pc.Vec2( i2245[0], i2245[1] )
  i2244.anchorMin = new pc.Vec2( i2245[2], i2245[3] )
  i2244.anchorMax = new pc.Vec2( i2245[4], i2245[5] )
  i2244.sizeDelta = new pc.Vec2( i2245[6], i2245[7] )
  i2244.anchoredPosition3D = new pc.Vec3( i2245[8], i2245[9], i2245[10] )
  i2244.rotation = new pc.Quat(i2245[11], i2245[12], i2245[13], i2245[14])
  i2244.scale = new pc.Vec3( i2245[15], i2245[16], i2245[17] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2247 = data
  i2246.planeDistance = i2247[0]
  i2246.referencePixelsPerUnit = i2247[1]
  i2246.isFallbackOverlay = !!i2247[2]
  i2246.renderMode = i2247[3]
  i2246.renderOrder = i2247[4]
  i2246.sortingLayerName = i2247[5]
  i2246.sortingOrder = i2247[6]
  i2246.scaleFactor = i2247[7]
  request.r(i2247[8], i2247[9], 0, i2246, 'worldCamera')
  i2246.overrideSorting = !!i2247[10]
  i2246.pixelPerfect = !!i2247[11]
  i2246.targetDisplay = i2247[12]
  i2246.overridePixelPerfect = !!i2247[13]
  i2246.enabled = !!i2247[14]
  return i2246
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2249 = data
  i2248.m_UiScaleMode = i2249[0]
  i2248.m_ReferencePixelsPerUnit = i2249[1]
  i2248.m_ScaleFactor = i2249[2]
  i2248.m_ReferenceResolution = new pc.Vec2( i2249[3], i2249[4] )
  i2248.m_ScreenMatchMode = i2249[5]
  i2248.m_MatchWidthOrHeight = i2249[6]
  i2248.m_PhysicalUnit = i2249[7]
  i2248.m_FallbackScreenDPI = i2249[8]
  i2248.m_DefaultSpriteDPI = i2249[9]
  i2248.m_DynamicPixelsPerUnit = i2249[10]
  i2248.m_PresetInfoIsWorld = !!i2249[11]
  return i2248
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2251 = data
  i2250.m_IgnoreReversedGraphics = !!i2251[0]
  i2250.m_BlockingObjects = i2251[1]
  i2250.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2251[2] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2253 = data
  i2252.cullTransparentMesh = !!i2253[0]
  return i2252
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.UI.Image' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'm_Sprite')
  i2254.m_Type = i2255[2]
  i2254.m_PreserveAspect = !!i2255[3]
  i2254.m_FillCenter = !!i2255[4]
  i2254.m_FillMethod = i2255[5]
  i2254.m_FillAmount = i2255[6]
  i2254.m_FillClockwise = !!i2255[7]
  i2254.m_FillOrigin = i2255[8]
  i2254.m_UseSpriteMesh = !!i2255[9]
  i2254.m_PixelsPerUnitMultiplier = i2255[10]
  request.r(i2255[11], i2255[12], 0, i2254, 'm_Material')
  i2254.m_Maskable = !!i2255[13]
  i2254.m_Color = new pc.Color(i2255[14], i2255[15], i2255[16], i2255[17])
  i2254.m_RaycastTarget = !!i2255[18]
  i2254.m_RaycastPadding = new pc.Vec4( i2255[19], i2255[20], i2255[21], i2255[22] )
  return i2254
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2256 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2257 = data
  i2256.m_hasFontAssetChanged = !!i2257[0]
  request.r(i2257[1], i2257[2], 0, i2256, 'm_baseMaterial')
  i2256.m_maskOffset = new pc.Vec4( i2257[3], i2257[4], i2257[5], i2257[6] )
  i2256.m_text = i2257[7]
  i2256.m_isRightToLeft = !!i2257[8]
  request.r(i2257[9], i2257[10], 0, i2256, 'm_fontAsset')
  request.r(i2257[11], i2257[12], 0, i2256, 'm_sharedMaterial')
  var i2259 = i2257[13]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.m_fontSharedMaterials = i2258
  request.r(i2257[14], i2257[15], 0, i2256, 'm_fontMaterial')
  var i2261 = i2257[16]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 2, i2260, '')
  }
  i2256.m_fontMaterials = i2260
  i2256.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2257[17], i2257[18], i2257[19], i2257[20])
  i2256.m_fontColor = new pc.Color(i2257[21], i2257[22], i2257[23], i2257[24])
  i2256.m_enableVertexGradient = !!i2257[25]
  i2256.m_colorMode = i2257[26]
  i2256.m_fontColorGradient = request.d('TMPro.VertexGradient', i2257[27], i2256.m_fontColorGradient)
  request.r(i2257[28], i2257[29], 0, i2256, 'm_fontColorGradientPreset')
  request.r(i2257[30], i2257[31], 0, i2256, 'm_spriteAsset')
  i2256.m_tintAllSprites = !!i2257[32]
  request.r(i2257[33], i2257[34], 0, i2256, 'm_StyleSheet')
  i2256.m_TextStyleHashCode = i2257[35]
  i2256.m_overrideHtmlColors = !!i2257[36]
  i2256.m_faceColor = UnityEngine.Color32.ConstructColor(i2257[37], i2257[38], i2257[39], i2257[40])
  i2256.m_fontSize = i2257[41]
  i2256.m_fontSizeBase = i2257[42]
  i2256.m_fontWeight = i2257[43]
  i2256.m_enableAutoSizing = !!i2257[44]
  i2256.m_fontSizeMin = i2257[45]
  i2256.m_fontSizeMax = i2257[46]
  i2256.m_fontStyle = i2257[47]
  i2256.m_HorizontalAlignment = i2257[48]
  i2256.m_VerticalAlignment = i2257[49]
  i2256.m_textAlignment = i2257[50]
  i2256.m_characterSpacing = i2257[51]
  i2256.m_wordSpacing = i2257[52]
  i2256.m_lineSpacing = i2257[53]
  i2256.m_lineSpacingMax = i2257[54]
  i2256.m_paragraphSpacing = i2257[55]
  i2256.m_charWidthMaxAdj = i2257[56]
  i2256.m_TextWrappingMode = i2257[57]
  i2256.m_wordWrappingRatios = i2257[58]
  i2256.m_overflowMode = i2257[59]
  request.r(i2257[60], i2257[61], 0, i2256, 'm_linkedTextComponent')
  request.r(i2257[62], i2257[63], 0, i2256, 'parentLinkedComponent')
  i2256.m_enableKerning = !!i2257[64]
  var i2263 = i2257[65]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(i2263[i + 0]);
  }
  i2256.m_ActiveFontFeatures = i2262
  i2256.m_enableExtraPadding = !!i2257[66]
  i2256.checkPaddingRequired = !!i2257[67]
  i2256.m_isRichText = !!i2257[68]
  i2256.m_parseCtrlCharacters = !!i2257[69]
  i2256.m_isOrthographic = !!i2257[70]
  i2256.m_isCullingEnabled = !!i2257[71]
  i2256.m_horizontalMapping = i2257[72]
  i2256.m_verticalMapping = i2257[73]
  i2256.m_uvLineOffset = i2257[74]
  i2256.m_geometrySortingOrder = i2257[75]
  i2256.m_IsTextObjectScaleStatic = !!i2257[76]
  i2256.m_VertexBufferAutoSizeReduction = !!i2257[77]
  i2256.m_useMaxVisibleDescender = !!i2257[78]
  i2256.m_pageToDisplay = i2257[79]
  i2256.m_margin = new pc.Vec4( i2257[80], i2257[81], i2257[82], i2257[83] )
  i2256.m_isUsingLegacyAnimationComponent = !!i2257[84]
  i2256.m_isVolumetricText = !!i2257[85]
  request.r(i2257[86], i2257[87], 0, i2256, 'm_Material')
  i2256.m_EmojiFallbackSupport = !!i2257[88]
  i2256.m_Maskable = !!i2257[89]
  i2256.m_Color = new pc.Color(i2257[90], i2257[91], i2257[92], i2257[93])
  i2256.m_RaycastTarget = !!i2257[94]
  i2256.m_RaycastPadding = new pc.Vec4( i2257[95], i2257[96], i2257[97], i2257[98] )
  return i2256
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2264 = root || request.c( 'TMPro.VertexGradient' )
  var i2265 = data
  i2264.topLeft = new pc.Color(i2265[0], i2265[1], i2265[2], i2265[3])
  i2264.topRight = new pc.Color(i2265[4], i2265[5], i2265[6], i2265[7])
  i2264.bottomLeft = new pc.Color(i2265[8], i2265[9], i2265[10], i2265[11])
  i2264.bottomRight = new pc.Color(i2265[12], i2265[13], i2265[14], i2265[15])
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2269 = data
  i2268.center = new pc.Vec3( i2269[0], i2269[1], i2269[2] )
  i2268.radius = i2269[3]
  i2268.enabled = !!i2269[4]
  i2268.isTrigger = !!i2269[5]
  request.r(i2269[6], i2269[7], 0, i2268, 'material')
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'animatorController')
  request.r(i2271[2], i2271[3], 0, i2270, 'avatar')
  i2270.updateMode = i2271[4]
  i2270.hasTransformHierarchy = !!i2271[5]
  i2270.applyRootMotion = !!i2271[6]
  var i2273 = i2271[7]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.humanBones = i2272
  i2270.enabled = !!i2271[8]
  return i2270
}

Deserializers["EventAnim"] = function (request, data, root) {
  var i2276 = root || request.c( 'EventAnim' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.add(request.d('UnityEngine.Events.UnityEvent', i2279[i + 0]));
  }
  i2276.animEvents = i2278
  var i2281 = i2277[1]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('EventAnim+MoveSequence')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(request.d('EventAnim+MoveSequence', i2281[i + 0]));
  }
  i2276.moveSequences = i2280
  return i2276
}

Deserializers["EventAnim+MoveSequence"] = function (request, data, root) {
  var i2286 = root || request.c( 'EventAnim+MoveSequence' )
  var i2287 = data
  var i2289 = i2287[0]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 1, i2288, '')
  }
  i2286.itemsToMove = i2288
  var i2291 = i2287[1]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2291.length; i += 2) {
  request.r(i2291[i + 0], i2291[i + 1], 1, i2290, '')
  }
  i2286.targetPositions = i2290
  i2286.moveDuration = i2287[2]
  i2286.delayBetweenItems = i2287[3]
  i2286.isJump = !!i2287[4]
  i2286.jumpPower = i2287[5]
  i2286.changeSortingOrder = !!i2287[6]
  i2286.targetSortingOrder = i2287[7]
  var i2293 = i2287[8]
  var i2292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 1, i2292, '')
  }
  i2286.spritesToHideOnComplete = i2292
  var i2295 = i2287[9]
  var i2294 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2295.length; i += 2) {
  request.r(i2295[i + 0], i2295[i + 1], 1, i2294, '')
  }
  i2286.objectsToEnableOnComplete = i2294
  return i2286
}

Deserializers["PlaySound"] = function (request, data, root) {
  var i2298 = root || request.c( 'PlaySound' )
  var i2299 = data
  i2298.sound1 = i2299[0]
  i2298.sound2 = i2299[1]
  i2298.sound3 = i2299[2]
  return i2298
}

Deserializers["TongItem"] = function (request, data, root) {
  var i2300 = root || request.c( 'TongItem' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'holdPoint')
  i2300.pickableLayer = UnityEngine.LayerMask.FromIntegerValue( i2301[2] )
  i2300.basketLayer = UnityEngine.LayerMask.FromIntegerValue( i2301[3] )
  i2300.detectRadius = i2301[4]
  i2300.randomRotateRange = new pc.Vec2( i2301[5], i2301[6] )
  i2300.flyToTongDuration = i2301[7]
  i2300.flyToBasketDuration = i2301[8]
  i2300.jumpPower = i2301[9]
  i2300.finalSortingOrder = i2301[10]
  i2300.pickSound = i2301[11]
  i2300.dropIntoBasketSound = i2301[12]
  var i2303 = i2301[13]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2300.requiredPickables = i2302
  i2300.itemType = i2301[14]
  request.r(i2301[15], i2301[16], 0, i2300, 'dropTarget')
  i2300.dropDistanceThreshold = i2301[17]
  i2300.hideSpriteOnDrop = !!i2301[18]
  i2300.disableColliderOnComplete = !!i2301[19]
  i2300.isTool = !!i2301[20]
  request.r(i2301[21], i2301[22], 0, i2300, 'customDragBounds')
  i2300.increaseSortingLayerOnDrag = !!i2301[23]
  i2300.isLocked = !!i2301[24]
  i2300.onInteractWhileLocked = request.d('UnityEngine.Events.UnityEvent', i2301[25], i2300.onInteractWhileLocked)
  i2300.onClick = request.d('UnityEngine.Events.UnityEvent', i2301[26], i2300.onClick)
  i2300.onDrop = request.d('UnityEngine.Events.UnityEvent', i2301[27], i2300.onDrop)
  i2300.onDragStart = request.d('UnityEngine.Events.UnityEvent', i2301[28], i2300.onDragStart)
  i2300.onReturn = request.d('UnityEngine.Events.UnityEvent', i2301[29], i2300.onReturn)
  i2300.onAnimFinished = request.d('UnityEngine.Events.UnityEvent', i2301[30], i2300.onAnimFinished)
  i2300.isSequentialClick = !!i2301[31]
  var i2305 = i2301[32]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('AnimObjectData')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('AnimObjectData', i2305[i + 0]));
  }
  i2300.animationObjects = i2304
  i2300.interactSound = i2301[33]
  i2300.sequenceLoopSound = i2301[34]
  var i2307 = i2301[35]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.add(i2307[i + 0]);
  }
  i2300.fxSoundsStartAnim = i2306
  var i2309 = i2301[36]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('FxType')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(i2309[i + 0]);
  }
  i2300.fxSoundsAfterAnim = i2308
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2311 = data
  i2310.frontSortingLayerID = i2311[0]
  i2310.frontSortingOrder = i2311[1]
  i2310.backSortingLayerID = i2311[2]
  i2310.backSortingOrder = i2311[3]
  i2310.alphaCutoff = i2311[4]
  request.r(i2311[5], i2311[6], 0, i2310, 'sprite')
  i2310.tileMode = i2311[7]
  i2310.isCustomRangeActive = !!i2311[8]
  i2310.spriteSortPoint = i2311[9]
  i2310.enabled = !!i2311[10]
  request.r(i2311[11], i2311[12], 0, i2310, 'sharedMaterial')
  var i2313 = i2311[13]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2310.sharedMaterials = i2312
  i2310.receiveShadows = !!i2311[14]
  i2310.shadowCastingMode = i2311[15]
  i2310.sortingLayerID = i2311[16]
  i2310.sortingOrder = i2311[17]
  i2310.lightmapIndex = i2311[18]
  i2310.lightmapSceneIndex = i2311[19]
  i2310.lightmapScaleOffset = new pc.Vec4( i2311[20], i2311[21], i2311[22], i2311[23] )
  i2310.lightProbeUsage = i2311[24]
  i2310.reflectionProbeUsage = i2311[25]
  return i2310
}

Deserializers["BasketAnim"] = function (request, data, root) {
  var i2314 = root || request.c( 'BasketAnim' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'activeObject')
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2317 = data
  i2316.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2317[0], i2316.main)
  i2316.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2317[1], i2316.colorBySpeed)
  i2316.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2317[2], i2316.colorOverLifetime)
  i2316.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2317[3], i2316.emission)
  i2316.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2317[4], i2316.rotationBySpeed)
  i2316.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2317[5], i2316.rotationOverLifetime)
  i2316.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2317[6], i2316.shape)
  i2316.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2317[7], i2316.sizeBySpeed)
  i2316.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2317[8], i2316.sizeOverLifetime)
  i2316.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2317[9], i2316.textureSheetAnimation)
  i2316.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2317[10], i2316.velocityOverLifetime)
  i2316.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2317[11], i2316.noise)
  i2316.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2317[12], i2316.inheritVelocity)
  i2316.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2317[13], i2316.forceOverLifetime)
  i2316.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2317[14], i2316.limitVelocityOverLifetime)
  i2316.useAutoRandomSeed = !!i2317[15]
  i2316.randomSeed = i2317[16]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2318 = root || new pc.ParticleSystemMain()
  var i2319 = data
  i2318.duration = i2319[0]
  i2318.loop = !!i2319[1]
  i2318.prewarm = !!i2319[2]
  i2318.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[3], i2318.startDelay)
  i2318.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[4], i2318.startLifetime)
  i2318.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[5], i2318.startSpeed)
  i2318.startSize3D = !!i2319[6]
  i2318.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[7], i2318.startSizeX)
  i2318.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[8], i2318.startSizeY)
  i2318.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[9], i2318.startSizeZ)
  i2318.startRotation3D = !!i2319[10]
  i2318.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[11], i2318.startRotationX)
  i2318.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[12], i2318.startRotationY)
  i2318.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[13], i2318.startRotationZ)
  i2318.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2319[14], i2318.startColor)
  i2318.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[15], i2318.gravityModifier)
  i2318.simulationSpace = i2319[16]
  request.r(i2319[17], i2319[18], 0, i2318, 'customSimulationSpace')
  i2318.simulationSpeed = i2319[19]
  i2318.useUnscaledTime = !!i2319[20]
  i2318.scalingMode = i2319[21]
  i2318.playOnAwake = !!i2319[22]
  i2318.maxParticles = i2319[23]
  i2318.emitterVelocityMode = i2319[24]
  i2318.stopAction = i2319[25]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2320 = root || new pc.MinMaxCurve()
  var i2321 = data
  i2320.mode = i2321[0]
  i2320.curveMin = new pc.AnimationCurve( { keys_flow: i2321[1] } )
  i2320.curveMax = new pc.AnimationCurve( { keys_flow: i2321[2] } )
  i2320.curveMultiplier = i2321[3]
  i2320.constantMin = i2321[4]
  i2320.constantMax = i2321[5]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2322 = root || new pc.MinMaxGradient()
  var i2323 = data
  i2322.mode = i2323[0]
  i2322.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2323[1], i2322.gradientMin)
  i2322.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2323[2], i2322.gradientMax)
  i2322.colorMin = new pc.Color(i2323[3], i2323[4], i2323[5], i2323[6])
  i2322.colorMax = new pc.Color(i2323[7], i2323[8], i2323[9], i2323[10])
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2325 = data
  i2324.mode = i2325[0]
  var i2327 = i2325[1]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2327[i + 0]) );
  }
  i2324.colorKeys = i2326
  var i2329 = i2325[2]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2329[i + 0]) );
  }
  i2324.alphaKeys = i2328
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemColorBySpeed()
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2331[1], i2330.color)
  i2330.range = new pc.Vec2( i2331[2], i2331[3] )
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2335 = data
  i2334.color = new pc.Color(i2335[0], i2335[1], i2335[2], i2335[3])
  i2334.time = i2335[4]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2339 = data
  i2338.alpha = i2339[0]
  i2338.time = i2339[1]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2340 = root || new pc.ParticleSystemColorOverLifetime()
  var i2341 = data
  i2340.enabled = !!i2341[0]
  i2340.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2341[1], i2340.color)
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2342 = root || new pc.ParticleSystemEmitter()
  var i2343 = data
  i2342.enabled = !!i2343[0]
  i2342.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[1], i2342.rateOverTime)
  i2342.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[2], i2342.rateOverDistance)
  var i2345 = i2343[3]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2345[i + 0]) );
  }
  i2342.bursts = i2344
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemBurst()
  var i2349 = data
  i2348.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[0], i2348.count)
  i2348.cycleCount = i2349[1]
  i2348.minCount = i2349[2]
  i2348.maxCount = i2349[3]
  i2348.repeatInterval = i2349[4]
  i2348.time = i2349[5]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2350 = root || new pc.ParticleSystemRotationBySpeed()
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[1], i2350.x)
  i2350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[2], i2350.y)
  i2350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[3], i2350.z)
  i2350.separateAxes = !!i2351[4]
  i2350.range = new pc.Vec2( i2351[5], i2351[6] )
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2352 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2353 = data
  i2352.enabled = !!i2353[0]
  i2352.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2353[1], i2352.x)
  i2352.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2353[2], i2352.y)
  i2352.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2353[3], i2352.z)
  i2352.separateAxes = !!i2353[4]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2354 = root || new pc.ParticleSystemShape()
  var i2355 = data
  i2354.enabled = !!i2355[0]
  i2354.shapeType = i2355[1]
  i2354.randomDirectionAmount = i2355[2]
  i2354.sphericalDirectionAmount = i2355[3]
  i2354.randomPositionAmount = i2355[4]
  i2354.alignToDirection = !!i2355[5]
  i2354.radius = i2355[6]
  i2354.radiusMode = i2355[7]
  i2354.radiusSpread = i2355[8]
  i2354.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[9], i2354.radiusSpeed)
  i2354.radiusThickness = i2355[10]
  i2354.angle = i2355[11]
  i2354.length = i2355[12]
  i2354.boxThickness = new pc.Vec3( i2355[13], i2355[14], i2355[15] )
  i2354.meshShapeType = i2355[16]
  request.r(i2355[17], i2355[18], 0, i2354, 'mesh')
  request.r(i2355[19], i2355[20], 0, i2354, 'meshRenderer')
  request.r(i2355[21], i2355[22], 0, i2354, 'skinnedMeshRenderer')
  i2354.useMeshMaterialIndex = !!i2355[23]
  i2354.meshMaterialIndex = i2355[24]
  i2354.useMeshColors = !!i2355[25]
  i2354.normalOffset = i2355[26]
  i2354.arc = i2355[27]
  i2354.arcMode = i2355[28]
  i2354.arcSpread = i2355[29]
  i2354.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[30], i2354.arcSpeed)
  i2354.donutRadius = i2355[31]
  i2354.position = new pc.Vec3( i2355[32], i2355[33], i2355[34] )
  i2354.rotation = new pc.Vec3( i2355[35], i2355[36], i2355[37] )
  i2354.scale = new pc.Vec3( i2355[38], i2355[39], i2355[40] )
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2356 = root || new pc.ParticleSystemSizeBySpeed()
  var i2357 = data
  i2356.enabled = !!i2357[0]
  i2356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[1], i2356.x)
  i2356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[2], i2356.y)
  i2356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[3], i2356.z)
  i2356.separateAxes = !!i2357[4]
  i2356.range = new pc.Vec2( i2357[5], i2357[6] )
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2358 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2359 = data
  i2358.enabled = !!i2359[0]
  i2358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[1], i2358.x)
  i2358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[2], i2358.y)
  i2358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2359[3], i2358.z)
  i2358.separateAxes = !!i2359[4]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2360 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2361 = data
  i2360.enabled = !!i2361[0]
  i2360.mode = i2361[1]
  i2360.animation = i2361[2]
  i2360.numTilesX = i2361[3]
  i2360.numTilesY = i2361[4]
  i2360.useRandomRow = !!i2361[5]
  i2360.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[6], i2360.frameOverTime)
  i2360.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2361[7], i2360.startFrame)
  i2360.cycleCount = i2361[8]
  i2360.rowIndex = i2361[9]
  i2360.flipU = i2361[10]
  i2360.flipV = i2361[11]
  i2360.spriteCount = i2361[12]
  var i2363 = i2361[13]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2360.sprites = i2362
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2366 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[1], i2366.x)
  i2366.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[2], i2366.y)
  i2366.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[3], i2366.z)
  i2366.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[4], i2366.radial)
  i2366.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[5], i2366.speedModifier)
  i2366.space = i2367[6]
  i2366.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[7], i2366.orbitalX)
  i2366.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[8], i2366.orbitalY)
  i2366.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[9], i2366.orbitalZ)
  i2366.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[10], i2366.orbitalOffsetX)
  i2366.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[11], i2366.orbitalOffsetY)
  i2366.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2367[12], i2366.orbitalOffsetZ)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2368 = root || new pc.ParticleSystemNoise()
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.separateAxes = !!i2369[1]
  i2368.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[2], i2368.strengthX)
  i2368.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[3], i2368.strengthY)
  i2368.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[4], i2368.strengthZ)
  i2368.frequency = i2369[5]
  i2368.damping = !!i2369[6]
  i2368.octaveCount = i2369[7]
  i2368.octaveMultiplier = i2369[8]
  i2368.octaveScale = i2369[9]
  i2368.quality = i2369[10]
  i2368.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[11], i2368.scrollSpeed)
  i2368.scrollSpeedMultiplier = i2369[12]
  i2368.remapEnabled = !!i2369[13]
  i2368.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[14], i2368.remapX)
  i2368.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[15], i2368.remapY)
  i2368.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[16], i2368.remapZ)
  i2368.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[17], i2368.positionAmount)
  i2368.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[18], i2368.rotationAmount)
  i2368.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[19], i2368.sizeAmount)
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemInheritVelocity()
  var i2371 = data
  i2370.enabled = !!i2371[0]
  i2370.mode = i2371[1]
  i2370.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[2], i2370.curve)
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2372 = root || new pc.ParticleSystemForceOverLifetime()
  var i2373 = data
  i2372.enabled = !!i2373[0]
  i2372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[1], i2372.x)
  i2372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[2], i2372.y)
  i2372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[3], i2372.z)
  i2372.space = i2373[4]
  i2372.randomized = !!i2373[5]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[1], i2374.limit)
  i2374.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[2], i2374.limitX)
  i2374.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.limitY)
  i2374.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[4], i2374.limitZ)
  i2374.dampen = i2375[5]
  i2374.separateAxes = !!i2375[6]
  i2374.space = i2375[7]
  i2374.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[8], i2374.drag)
  i2374.multiplyDragByParticleSize = !!i2375[9]
  i2374.multiplyDragByParticleVelocity = !!i2375[10]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'mesh')
  i2376.meshCount = i2377[2]
  i2376.activeVertexStreamsCount = i2377[3]
  i2376.alignment = i2377[4]
  i2376.renderMode = i2377[5]
  i2376.sortMode = i2377[6]
  i2376.lengthScale = i2377[7]
  i2376.velocityScale = i2377[8]
  i2376.cameraVelocityScale = i2377[9]
  i2376.normalDirection = i2377[10]
  i2376.sortingFudge = i2377[11]
  i2376.minParticleSize = i2377[12]
  i2376.maxParticleSize = i2377[13]
  i2376.pivot = new pc.Vec3( i2377[14], i2377[15], i2377[16] )
  request.r(i2377[17], i2377[18], 0, i2376, 'trailMaterial')
  i2376.applyActiveColorSpace = !!i2377[19]
  i2376.enabled = !!i2377[20]
  request.r(i2377[21], i2377[22], 0, i2376, 'sharedMaterial')
  var i2379 = i2377[23]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2376.sharedMaterials = i2378
  i2376.receiveShadows = !!i2377[24]
  i2376.shadowCastingMode = i2377[25]
  i2376.sortingLayerID = i2377[26]
  i2376.sortingOrder = i2377[27]
  i2376.lightmapIndex = i2377[28]
  i2376.lightmapSceneIndex = i2377[29]
  i2376.lightmapScaleOffset = new pc.Vec4( i2377[30], i2377[31], i2377[32], i2377[33] )
  i2376.lightProbeUsage = i2377[34]
  i2376.reflectionProbeUsage = i2377[35]
  return i2376
}

Deserializers["CuttingSetup"] = function (request, data, root) {
  var i2380 = root || request.c( 'CuttingSetup' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'knifeProcessor')
  i2380.requiredClicks = i2381[2]
  request.r(i2381[3], i2381[4], 0, i2380, 'maskTransform')
  i2380.maskStartPos = new pc.Vec3( i2381[5], i2381[6], i2381[7] )
  i2380.maskEndPos = new pc.Vec3( i2381[8], i2381[9], i2381[10] )
  i2380.knifeStartPos = new pc.Vec3( i2381[11], i2381[12], i2381[13] )
  i2380.knifeEndPos = new pc.Vec3( i2381[14], i2381[15], i2381[16] )
  i2380.onCuttingCompleted = request.d('UnityEngine.Events.UnityEvent', i2381[17], i2380.onCuttingCompleted)
  return i2380
}

Deserializers["AutoProcessItem"] = function (request, data, root) {
  var i2382 = root || request.c( 'AutoProcessItem' )
  var i2383 = data
  i2382.processTime = i2383[0]
  request.r(i2383[1], i2383[2], 0, i2382, 'toolToActivate')
  i2382.onProcessStarted = request.d('UnityEngine.Events.UnityEvent', i2383[3], i2382.onProcessStarted)
  i2382.onProcessCompleted = request.d('UnityEngine.Events.UnityEvent', i2383[4], i2382.onProcessCompleted)
  return i2382
}

Deserializers["UnlockCondition"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnlockCondition' )
  var i2385 = data
  i2384.conditionsToMeet = i2385[0]
  i2384.delayBeforeUnlock = i2385[1]
  var i2387 = i2385[2]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2384.collidersToEnable = i2386
  var i2389 = i2385[3]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.objectsToEnable = i2388
  i2384.onUnlocked = request.d('UnityEngine.Events.UnityEvent', i2385[4], i2384.onUnlocked)
  return i2384
}

Deserializers["SwipeToProcessItem"] = function (request, data, root) {
  var i2392 = root || request.c( 'SwipeToProcessItem' )
  var i2393 = data
  i2392.swipeDistanceRequired = i2393[0]
  i2392.requiredFlips = i2393[1]
  i2392.onSingleFlip = request.d('UnityEngine.Events.UnityEvent', i2393[2], i2392.onSingleFlip)
  i2392.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2393[3], i2392.onCompleted)
  i2392.onCompletedAndReleased = request.d('UnityEngine.Events.UnityEvent', i2393[4], i2392.onCompletedAndReleased)
  i2392.onBeginSwipe = request.d('UnityEngine.Events.UnityEvent', i2393[5], i2392.onBeginSwipe)
  i2392.onEndSwipe = request.d('UnityEngine.Events.UnityEvent', i2393[6], i2392.onEndSwipe)
  request.r(i2393[7], i2393[8], 0, i2392, 'sideAObject')
  request.r(i2393[9], i2393[10], 0, i2392, 'sideBObject')
  request.r(i2393[11], i2393[12], 0, i2392, 'progressBarTransform')
  i2392.isVerticalBar = !!i2393[13]
  return i2392
}

Deserializers["DropTargetSlot"] = function (request, data, root) {
  var i2394 = root || request.c( 'DropTargetSlot' )
  var i2395 = data
  i2394.isOccupied = !!i2395[0]
  request.r(i2395[1], i2395[2], 0, i2394, 'currentItem')
  return i2394
}

Deserializers["ClickToProcessItem"] = function (request, data, root) {
  var i2396 = root || request.c( 'ClickToProcessItem' )
  var i2397 = data
  i2396.requiredClicks = i2397[0]
  i2396.onSingleClick = request.d('UnityEngine.Events.UnityEvent', i2397[1], i2396.onSingleClick)
  i2396.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2397[2], i2396.onCompleted)
  request.r(i2397[3], i2397[4], 0, i2396, 'maskTransform')
  i2396.maskStartPos = new pc.Vec3( i2397[5], i2397[6], i2397[7] )
  i2396.maskEndPos = new pc.Vec3( i2397[8], i2397[9], i2397[10] )
  request.r(i2397[11], i2397[12], 0, i2396, 'moveObject')
  i2396.moveStartPos = new pc.Vec3( i2397[13], i2397[14], i2397[15] )
  i2396.moveEndPos = new pc.Vec3( i2397[16], i2397[17], i2397[18] )
  return i2396
}

Deserializers["DragBetweenBoundsToProcess"] = function (request, data, root) {
  var i2398 = root || request.c( 'DragBetweenBoundsToProcess' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'leftPoint')
  request.r(i2399[2], i2399[3], 0, i2398, 'rightPoint')
  i2398.hitThreshold = i2399[4]
  i2398.requiredHits = i2399[5]
  i2398.onHitBound = request.d('UnityEngine.Events.UnityEvent', i2399[6], i2398.onHitBound)
  i2398.onCompleted = request.d('UnityEngine.Events.UnityEvent', i2399[7], i2398.onCompleted)
  request.r(i2399[8], i2399[9], 0, i2398, 'progressBarTransform')
  i2398.isVerticalBar = !!i2399[10]
  request.r(i2399[11], i2399[12], 0, i2398, 'toggleObjectA')
  request.r(i2399[13], i2399[14], 0, i2398, 'toggleObjectB')
  return i2398
}

Deserializers["ItemSpawner"] = function (request, data, root) {
  var i2400 = root || request.c( 'ItemSpawner' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'prefabToSpawn')
  i2400.maxSpawnCount = i2401[2]
  i2400.onSpawn = request.d('UnityEngine.Events.UnityEvent', i2401[3], i2400.onSpawn)
  request.r(i2401[4], i2401[5], 0, i2400, 'dropTargetForSpawnedItem')
  i2400.autoStartDrag = !!i2401[6]
  var i2403 = i2401[7]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2400.objectsToEnableOnSuccess = i2402
  i2400.onSpawnedItemSuccess = request.d('UnityEngine.Events.UnityEvent', i2401[8], i2400.onSpawnedItemSuccess)
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'additionalVertexStreams')
  i2404.enabled = !!i2405[2]
  request.r(i2405[3], i2405[4], 0, i2404, 'sharedMaterial')
  var i2407 = i2405[5]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.sharedMaterials = i2406
  i2404.receiveShadows = !!i2405[6]
  i2404.shadowCastingMode = i2405[7]
  i2404.sortingLayerID = i2405[8]
  i2404.sortingOrder = i2405[9]
  i2404.lightmapIndex = i2405[10]
  i2404.lightmapSceneIndex = i2405[11]
  i2404.lightmapScaleOffset = new pc.Vec4( i2405[12], i2405[13], i2405[14], i2405[15] )
  i2404.lightProbeUsage = i2405[16]
  i2404.reflectionProbeUsage = i2405[17]
  return i2404
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2408 = root || request.c( 'TMPro.TextMeshPro' )
  var i2409 = data
  i2408._SortingLayer = i2409[0]
  i2408._SortingLayerID = i2409[1]
  i2408._SortingOrder = i2409[2]
  i2408.m_hasFontAssetChanged = !!i2409[3]
  request.r(i2409[4], i2409[5], 0, i2408, 'm_renderer')
  i2408.m_maskType = i2409[6]
  i2408.m_text = i2409[7]
  i2408.m_isRightToLeft = !!i2409[8]
  request.r(i2409[9], i2409[10], 0, i2408, 'm_fontAsset')
  request.r(i2409[11], i2409[12], 0, i2408, 'm_sharedMaterial')
  var i2411 = i2409[13]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2408.m_fontSharedMaterials = i2410
  request.r(i2409[14], i2409[15], 0, i2408, 'm_fontMaterial')
  var i2413 = i2409[16]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2408.m_fontMaterials = i2412
  i2408.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2409[17], i2409[18], i2409[19], i2409[20])
  i2408.m_fontColor = new pc.Color(i2409[21], i2409[22], i2409[23], i2409[24])
  i2408.m_enableVertexGradient = !!i2409[25]
  i2408.m_colorMode = i2409[26]
  i2408.m_fontColorGradient = request.d('TMPro.VertexGradient', i2409[27], i2408.m_fontColorGradient)
  request.r(i2409[28], i2409[29], 0, i2408, 'm_fontColorGradientPreset')
  request.r(i2409[30], i2409[31], 0, i2408, 'm_spriteAsset')
  i2408.m_tintAllSprites = !!i2409[32]
  request.r(i2409[33], i2409[34], 0, i2408, 'm_StyleSheet')
  i2408.m_TextStyleHashCode = i2409[35]
  i2408.m_overrideHtmlColors = !!i2409[36]
  i2408.m_faceColor = UnityEngine.Color32.ConstructColor(i2409[37], i2409[38], i2409[39], i2409[40])
  i2408.m_fontSize = i2409[41]
  i2408.m_fontSizeBase = i2409[42]
  i2408.m_fontWeight = i2409[43]
  i2408.m_enableAutoSizing = !!i2409[44]
  i2408.m_fontSizeMin = i2409[45]
  i2408.m_fontSizeMax = i2409[46]
  i2408.m_fontStyle = i2409[47]
  i2408.m_HorizontalAlignment = i2409[48]
  i2408.m_VerticalAlignment = i2409[49]
  i2408.m_textAlignment = i2409[50]
  i2408.m_characterSpacing = i2409[51]
  i2408.m_wordSpacing = i2409[52]
  i2408.m_lineSpacing = i2409[53]
  i2408.m_lineSpacingMax = i2409[54]
  i2408.m_paragraphSpacing = i2409[55]
  i2408.m_charWidthMaxAdj = i2409[56]
  i2408.m_TextWrappingMode = i2409[57]
  i2408.m_wordWrappingRatios = i2409[58]
  i2408.m_overflowMode = i2409[59]
  request.r(i2409[60], i2409[61], 0, i2408, 'm_linkedTextComponent')
  request.r(i2409[62], i2409[63], 0, i2408, 'parentLinkedComponent')
  i2408.m_enableKerning = !!i2409[64]
  var i2415 = i2409[65]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(i2415[i + 0]);
  }
  i2408.m_ActiveFontFeatures = i2414
  i2408.m_enableExtraPadding = !!i2409[66]
  i2408.checkPaddingRequired = !!i2409[67]
  i2408.m_isRichText = !!i2409[68]
  i2408.m_parseCtrlCharacters = !!i2409[69]
  i2408.m_isOrthographic = !!i2409[70]
  i2408.m_isCullingEnabled = !!i2409[71]
  i2408.m_horizontalMapping = i2409[72]
  i2408.m_verticalMapping = i2409[73]
  i2408.m_uvLineOffset = i2409[74]
  i2408.m_geometrySortingOrder = i2409[75]
  i2408.m_IsTextObjectScaleStatic = !!i2409[76]
  i2408.m_VertexBufferAutoSizeReduction = !!i2409[77]
  i2408.m_useMaxVisibleDescender = !!i2409[78]
  i2408.m_pageToDisplay = i2409[79]
  i2408.m_margin = new pc.Vec4( i2409[80], i2409[81], i2409[82], i2409[83] )
  i2408.m_isUsingLegacyAnimationComponent = !!i2409[84]
  i2408.m_isVolumetricText = !!i2409[85]
  request.r(i2409[86], i2409[87], 0, i2408, 'm_Material')
  i2408.m_EmojiFallbackSupport = !!i2409[88]
  i2408.m_Maskable = !!i2409[89]
  i2408.m_Color = new pc.Color(i2409[90], i2409[91], i2409[92], i2409[93])
  i2408.m_RaycastTarget = !!i2409[94]
  i2408.m_RaycastPadding = new pc.Vec4( i2409[95], i2409[96], i2409[97], i2409[98] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'sharedMesh')
  return i2416
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'm_FirstSelected')
  i2418.m_sendNavigationEvents = !!i2419[2]
  i2418.m_DragThreshold = i2419[3]
  return i2418
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2421 = data
  i2420.m_HorizontalAxis = i2421[0]
  i2420.m_VerticalAxis = i2421[1]
  i2420.m_SubmitButton = i2421[2]
  i2420.m_CancelButton = i2421[3]
  i2420.m_InputActionsPerSecond = i2421[4]
  i2420.m_RepeatDelay = i2421[5]
  i2420.m_ForceModuleActive = !!i2421[6]
  i2420.m_SendPointerHoverToParent = !!i2421[7]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2423 = data
  i2422.ambientIntensity = i2423[0]
  i2422.reflectionIntensity = i2423[1]
  i2422.ambientMode = i2423[2]
  i2422.ambientLight = new pc.Color(i2423[3], i2423[4], i2423[5], i2423[6])
  i2422.ambientSkyColor = new pc.Color(i2423[7], i2423[8], i2423[9], i2423[10])
  i2422.ambientGroundColor = new pc.Color(i2423[11], i2423[12], i2423[13], i2423[14])
  i2422.ambientEquatorColor = new pc.Color(i2423[15], i2423[16], i2423[17], i2423[18])
  i2422.fogColor = new pc.Color(i2423[19], i2423[20], i2423[21], i2423[22])
  i2422.fogEndDistance = i2423[23]
  i2422.fogStartDistance = i2423[24]
  i2422.fogDensity = i2423[25]
  i2422.fog = !!i2423[26]
  request.r(i2423[27], i2423[28], 0, i2422, 'skybox')
  i2422.fogMode = i2423[29]
  var i2425 = i2423[30]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2425[i + 0]) );
  }
  i2422.lightmaps = i2424
  i2422.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2423[31], i2422.lightProbes)
  i2422.lightmapsMode = i2423[32]
  i2422.mixedBakeMode = i2423[33]
  i2422.environmentLightingMode = i2423[34]
  i2422.ambientProbe = new pc.SphericalHarmonicsL2(i2423[35])
  i2422.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2423[36])
  i2422.useReferenceAmbientProbe = !!i2423[37]
  request.r(i2423[38], i2423[39], 0, i2422, 'customReflection')
  request.r(i2423[40], i2423[41], 0, i2422, 'defaultReflection')
  i2422.defaultReflectionMode = i2423[42]
  i2422.defaultReflectionResolution = i2423[43]
  i2422.sunLightObjectId = i2423[44]
  i2422.pixelLightCount = i2423[45]
  i2422.defaultReflectionHDR = !!i2423[46]
  i2422.hasLightDataAsset = !!i2423[47]
  i2422.hasManualGenerate = !!i2423[48]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'lightmapColor')
  request.r(i2429[2], i2429[3], 0, i2428, 'lightmapDirection')
  request.r(i2429[4], i2429[5], 0, i2428, 'shadowMask')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2430 = root || new UnityEngine.LightProbes()
  var i2431 = data
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2439 = data
  var i2441 = i2439[0]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2441[i + 0]));
  }
  i2438.ShaderCompilationErrors = i2440
  i2438.name = i2439[1]
  i2438.guid = i2439[2]
  var i2443 = i2439[3]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( i2443[i + 0] );
  }
  i2438.shaderDefinedKeywords = i2442
  var i2445 = i2439[4]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2445[i + 0]) );
  }
  i2438.passes = i2444
  var i2447 = i2439[5]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2447[i + 0]) );
  }
  i2438.usePasses = i2446
  var i2449 = i2439[6]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2449[i + 0]) );
  }
  i2438.defaultParameterValues = i2448
  request.r(i2439[7], i2439[8], 0, i2438, 'unityFallbackShader')
  i2438.readDepth = !!i2439[9]
  i2438.hasDepthOnlyPass = !!i2439[10]
  i2438.isCreatedByShaderGraph = !!i2439[11]
  i2438.disableBatching = !!i2439[12]
  i2438.compiled = !!i2439[13]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2453 = data
  i2452.shaderName = i2453[0]
  i2452.errorMessage = i2453[1]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2458 = root || new pc.UnityShaderPass()
  var i2459 = data
  i2458.id = i2459[0]
  i2458.subShaderIndex = i2459[1]
  i2458.name = i2459[2]
  i2458.passType = i2459[3]
  i2458.grabPassTextureName = i2459[4]
  i2458.usePass = !!i2459[5]
  i2458.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[6], i2458.zTest)
  i2458.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[7], i2458.zWrite)
  i2458.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[8], i2458.culling)
  i2458.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2459[9], i2458.blending)
  i2458.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2459[10], i2458.alphaBlending)
  i2458.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[11], i2458.colorWriteMask)
  i2458.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[12], i2458.offsetUnits)
  i2458.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[13], i2458.offsetFactor)
  i2458.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[14], i2458.stencilRef)
  i2458.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[15], i2458.stencilReadMask)
  i2458.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2459[16], i2458.stencilWriteMask)
  i2458.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2459[17], i2458.stencilOp)
  i2458.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2459[18], i2458.stencilOpFront)
  i2458.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2459[19], i2458.stencilOpBack)
  var i2461 = i2459[20]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2461[i + 0]) );
  }
  i2458.tags = i2460
  var i2463 = i2459[21]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2458.passDefinedKeywords = i2462
  var i2465 = i2459[22]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2465[i + 0]) );
  }
  i2458.passDefinedKeywordGroups = i2464
  var i2467 = i2459[23]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2467[i + 0]) );
  }
  i2458.variants = i2466
  var i2469 = i2459[24]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2469[i + 0]) );
  }
  i2458.excludedVariants = i2468
  i2458.hasDepthReader = !!i2459[25]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2471 = data
  i2470.val = i2471[0]
  i2470.name = i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2473 = data
  i2472.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[0], i2472.src)
  i2472.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[1], i2472.dst)
  i2472.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[2], i2472.op)
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2475 = data
  i2474.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2475[0], i2474.pass)
  i2474.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2475[1], i2474.fail)
  i2474.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2475[2], i2474.zFail)
  i2474.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2475[3], i2474.comp)
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2479 = data
  i2478.name = i2479[0]
  i2478.value = i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2483 = data
  var i2485 = i2483[0]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( i2485[i + 0] );
  }
  i2482.keywords = i2484
  i2482.hasDiscard = !!i2483[1]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2489 = data
  i2488.passId = i2489[0]
  i2488.subShaderIndex = i2489[1]
  var i2491 = i2489[2]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( i2491[i + 0] );
  }
  i2488.keywords = i2490
  i2488.vertexProgram = i2489[3]
  i2488.fragmentProgram = i2489[4]
  i2488.exportedForWebGl2 = !!i2489[5]
  i2488.readDepth = !!i2489[6]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'shader')
  i2494.pass = i2495[2]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.type = i2499[1]
  i2498.value = new pc.Vec4( i2499[2], i2499[3], i2499[4], i2499[5] )
  i2498.textureValue = i2499[6]
  i2498.shaderPropertyFlag = i2499[7]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2501 = data
  i2500.name = i2501[0]
  request.r(i2501[1], i2501[2], 0, i2500, 'texture')
  i2500.aabb = i2501[3]
  i2500.vertices = i2501[4]
  i2500.triangles = i2501[5]
  i2500.textureRect = UnityEngine.Rect.MinMaxRect(i2501[6], i2501[7], i2501[8], i2501[9])
  i2500.packedRect = UnityEngine.Rect.MinMaxRect(i2501[10], i2501[11], i2501[12], i2501[13])
  i2500.border = new pc.Vec4( i2501[14], i2501[15], i2501[16], i2501[17] )
  i2500.transparency = i2501[18]
  i2500.bounds = i2501[19]
  i2500.pixelsPerUnit = i2501[20]
  i2500.textureWidth = i2501[21]
  i2500.textureHeight = i2501[22]
  i2500.nativeSize = new pc.Vec2( i2501[23], i2501[24] )
  i2500.pivot = new pc.Vec2( i2501[25], i2501[26] )
  i2500.textureRectOffset = new pc.Vec2( i2501[27], i2501[28] )
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2503 = data
  i2502.name = i2503[0]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2505 = data
  i2504.name = i2505[0]
  i2504.wrapMode = i2505[1]
  i2504.isLooping = !!i2505[2]
  i2504.length = i2505[3]
  var i2507 = i2505[4]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2507[i + 0]) );
  }
  i2504.curves = i2506
  var i2509 = i2505[5]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2509[i + 0]) );
  }
  i2504.events = i2508
  i2504.halfPrecision = !!i2505[6]
  i2504._frameRate = i2505[7]
  i2504.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2505[8], i2504.localBounds)
  i2504.hasMuscleCurves = !!i2505[9]
  var i2511 = i2505[10]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( i2511[i + 0] );
  }
  i2504.clipMuscleConstant = i2510
  i2504.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2505[11], i2504.clipBindingConstant)
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2515 = data
  i2514.path = i2515[0]
  i2514.hash = i2515[1]
  i2514.componentType = i2515[2]
  i2514.property = i2515[3]
  i2514.keys = i2515[4]
  var i2517 = i2515[5]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2517[i + 0]) );
  }
  i2514.objectReferenceKeys = i2516
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2521 = data
  i2520.time = i2521[0]
  request.r(i2521[1], i2521[2], 0, i2520, 'value')
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2525 = data
  i2524.functionName = i2525[0]
  i2524.floatParameter = i2525[1]
  i2524.intParameter = i2525[2]
  i2524.stringParameter = i2525[3]
  request.r(i2525[4], i2525[5], 0, i2524, 'objectReferenceParameter')
  i2524.time = i2525[6]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2527 = data
  i2526.center = new pc.Vec3( i2527[0], i2527[1], i2527[2] )
  i2526.extends = new pc.Vec3( i2527[3], i2527[4], i2527[5] )
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2531 = data
  var i2533 = i2531[0]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( i2533[i + 0] );
  }
  i2530.genericBindings = i2532
  var i2535 = i2531[1]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2530.pptrCurveMapping = i2534
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.ascent = i2537[1]
  i2536.originalLineHeight = i2537[2]
  i2536.fontSize = i2537[3]
  var i2539 = i2537[4]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2539[i + 0]) );
  }
  i2536.characterInfo = i2538
  request.r(i2537[5], i2537[6], 0, i2536, 'texture')
  i2536.originalFontSize = i2537[7]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2543 = data
  i2542.index = i2543[0]
  i2542.advance = i2543[1]
  i2542.bearing = i2543[2]
  i2542.glyphWidth = i2543[3]
  i2542.glyphHeight = i2543[4]
  i2542.minX = i2543[5]
  i2542.maxX = i2543[6]
  i2542.minY = i2543[7]
  i2542.maxY = i2543[8]
  i2542.uvBottomLeftX = i2543[9]
  i2542.uvBottomLeftY = i2543[10]
  i2542.uvBottomRightX = i2543[11]
  i2542.uvBottomRightY = i2543[12]
  i2542.uvTopLeftX = i2543[13]
  i2542.uvTopLeftY = i2543[14]
  i2542.uvTopRightX = i2543[15]
  i2542.uvTopRightY = i2543[16]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2545 = data
  i2544.name = i2545[0]
  var i2547 = i2545[1]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2547[i + 0]) );
  }
  i2544.layers = i2546
  var i2549 = i2545[2]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2549[i + 0]) );
  }
  i2544.parameters = i2548
  i2544.animationClips = i2545[3]
  i2544.avatarUnsupported = i2545[4]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2553 = data
  i2552.name = i2553[0]
  i2552.defaultWeight = i2553[1]
  i2552.blendingMode = i2553[2]
  i2552.avatarMask = i2553[3]
  i2552.syncedLayerIndex = i2553[4]
  i2552.syncedLayerAffectsTiming = !!i2553[5]
  i2552.syncedLayers = i2553[6]
  i2552.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2553[7], i2552.stateMachine)
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2555 = data
  i2554.id = i2555[0]
  i2554.name = i2555[1]
  i2554.path = i2555[2]
  var i2557 = i2555[3]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2557[i + 0]) );
  }
  i2554.states = i2556
  var i2559 = i2555[4]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2559[i + 0]) );
  }
  i2554.machines = i2558
  var i2561 = i2555[5]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2561[i + 0]) );
  }
  i2554.entryStateTransitions = i2560
  var i2563 = i2555[6]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2563[i + 0]) );
  }
  i2554.exitStateTransitions = i2562
  var i2565 = i2555[7]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2565[i + 0]) );
  }
  i2554.anyStateTransitions = i2564
  i2554.defaultStateId = i2555[8]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2569 = data
  i2568.id = i2569[0]
  i2568.name = i2569[1]
  i2568.cycleOffset = i2569[2]
  i2568.cycleOffsetParameter = i2569[3]
  i2568.cycleOffsetParameterActive = !!i2569[4]
  i2568.mirror = !!i2569[5]
  i2568.mirrorParameter = i2569[6]
  i2568.mirrorParameterActive = !!i2569[7]
  i2568.motionId = i2569[8]
  i2568.nameHash = i2569[9]
  i2568.fullPathHash = i2569[10]
  i2568.speed = i2569[11]
  i2568.speedParameter = i2569[12]
  i2568.speedParameterActive = !!i2569[13]
  i2568.tag = i2569[14]
  i2568.tagHash = i2569[15]
  i2568.writeDefaultValues = !!i2569[16]
  var i2571 = i2569[17]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 2) {
  request.r(i2571[i + 0], i2571[i + 1], 2, i2570, '')
  }
  i2568.behaviours = i2570
  var i2573 = i2569[18]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2573[i + 0]) );
  }
  i2568.transitions = i2572
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2579 = data
  i2578.fullPath = i2579[0]
  i2578.canTransitionToSelf = !!i2579[1]
  i2578.duration = i2579[2]
  i2578.exitTime = i2579[3]
  i2578.hasExitTime = !!i2579[4]
  i2578.hasFixedDuration = !!i2579[5]
  i2578.interruptionSource = i2579[6]
  i2578.offset = i2579[7]
  i2578.orderedInterruption = !!i2579[8]
  i2578.destinationStateId = i2579[9]
  i2578.isExit = !!i2579[10]
  i2578.mute = !!i2579[11]
  i2578.solo = !!i2579[12]
  var i2581 = i2579[13]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2581[i + 0]) );
  }
  i2578.conditions = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2587 = data
  i2586.destinationStateId = i2587[0]
  i2586.isExit = !!i2587[1]
  i2586.mute = !!i2587[2]
  i2586.solo = !!i2587[3]
  var i2589 = i2587[4]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2589[i + 0]) );
  }
  i2586.conditions = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2593 = data
  i2592.mode = i2593[0]
  i2592.parameter = i2593[1]
  i2592.threshold = i2593[2]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2597 = data
  i2596.defaultBool = !!i2597[0]
  i2596.defaultFloat = i2597[1]
  i2596.defaultInt = i2597[2]
  i2596.name = i2597[3]
  i2596.nameHash = i2597[4]
  i2596.type = i2597[5]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2599 = data
  i2598.name = i2599[0]
  i2598.bytes64 = i2599[1]
  i2598.data = i2599[2]
  return i2598
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2601 = data
  i2600.normalStyle = i2601[0]
  i2600.normalSpacingOffset = i2601[1]
  i2600.boldStyle = i2601[2]
  i2600.boldSpacing = i2601[3]
  i2600.italicStyle = i2601[4]
  i2600.tabSize = i2601[5]
  request.r(i2601[6], i2601[7], 0, i2600, 'atlas')
  i2600.m_SourceFontFileGUID = i2601[8]
  i2600.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2601[9], i2600.m_CreationSettings)
  request.r(i2601[10], i2601[11], 0, i2600, 'm_SourceFontFile')
  i2600.m_SourceFontFilePath = i2601[12]
  i2600.m_AtlasPopulationMode = i2601[13]
  i2600.InternalDynamicOS = !!i2601[14]
  var i2603 = i2601[15]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.add(request.d('UnityEngine.TextCore.Glyph', i2603[i + 0]));
  }
  i2600.m_GlyphTable = i2602
  var i2605 = i2601[16]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Character', i2605[i + 0]));
  }
  i2600.m_CharacterTable = i2604
  var i2607 = i2601[17]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 2, i2606, '')
  }
  i2600.m_AtlasTextures = i2606
  i2600.m_AtlasTextureIndex = i2601[18]
  i2600.m_IsMultiAtlasTexturesEnabled = !!i2601[19]
  i2600.m_GetFontFeatures = !!i2601[20]
  i2600.m_ClearDynamicDataOnBuild = !!i2601[21]
  i2600.m_AtlasWidth = i2601[22]
  i2600.m_AtlasHeight = i2601[23]
  i2600.m_AtlasPadding = i2601[24]
  i2600.m_AtlasRenderMode = i2601[25]
  var i2609 = i2601[26]
  var i2608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.add(request.d('UnityEngine.TextCore.GlyphRect', i2609[i + 0]));
  }
  i2600.m_UsedGlyphRects = i2608
  var i2611 = i2601[27]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.add(request.d('UnityEngine.TextCore.GlyphRect', i2611[i + 0]));
  }
  i2600.m_FreeGlyphRects = i2610
  i2600.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2601[28], i2600.m_FontFeatureTable)
  i2600.m_ShouldReimportFontFeatures = !!i2601[29]
  var i2613 = i2601[30]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2613.length; i += 2) {
  request.r(i2613[i + 0], i2613[i + 1], 1, i2612, '')
  }
  i2600.m_FallbackFontAssetTable = i2612
  var i2615 = i2601[31]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('TMPro.TMP_FontWeightPair', i2615[i + 0]) );
  }
  i2600.m_FontWeightTable = i2614
  var i2617 = i2601[32]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('TMPro.TMP_FontWeightPair', i2617[i + 0]) );
  }
  i2600.fontWeights = i2616
  i2600.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2601[33], i2600.m_fontInfo)
  var i2619 = i2601[34]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.add(request.d('TMPro.TMP_Glyph', i2619[i + 0]));
  }
  i2600.m_glyphInfoList = i2618
  i2600.m_KerningTable = request.d('TMPro.KerningTable', i2601[35], i2600.m_KerningTable)
  var i2621 = i2601[36]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2600.fallbackFontAssets = i2620
  i2600.m_Version = i2601[37]
  i2600.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2601[38], i2600.m_FaceInfo)
  request.r(i2601[39], i2601[40], 0, i2600, 'm_Material')
  return i2600
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2623 = data
  i2622.sourceFontFileName = i2623[0]
  i2622.sourceFontFileGUID = i2623[1]
  i2622.faceIndex = i2623[2]
  i2622.pointSizeSamplingMode = i2623[3]
  i2622.pointSize = i2623[4]
  i2622.padding = i2623[5]
  i2622.paddingMode = i2623[6]
  i2622.packingMode = i2623[7]
  i2622.atlasWidth = i2623[8]
  i2622.atlasHeight = i2623[9]
  i2622.characterSetSelectionMode = i2623[10]
  i2622.characterSequence = i2623[11]
  i2622.referencedFontAssetGUID = i2623[12]
  i2622.referencedTextAssetGUID = i2623[13]
  i2622.fontStyle = i2623[14]
  i2622.fontStyleModifier = i2623[15]
  i2622.renderMode = i2623[16]
  i2622.includeFontFeatures = !!i2623[17]
  return i2622
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2627 = data
  i2626.m_Index = i2627[0]
  i2626.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2627[1], i2626.m_Metrics)
  i2626.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2627[2], i2626.m_GlyphRect)
  i2626.m_Scale = i2627[3]
  i2626.m_AtlasIndex = i2627[4]
  i2626.m_ClassDefinitionType = i2627[5]
  return i2626
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2629 = data
  i2628.m_Width = i2629[0]
  i2628.m_Height = i2629[1]
  i2628.m_HorizontalBearingX = i2629[2]
  i2628.m_HorizontalBearingY = i2629[3]
  i2628.m_HorizontalAdvance = i2629[4]
  return i2628
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2631 = data
  i2630.m_X = i2631[0]
  i2630.m_Y = i2631[1]
  i2630.m_Width = i2631[2]
  i2630.m_Height = i2631[3]
  return i2630
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.TMP_Character' )
  var i2635 = data
  i2634.m_ElementType = i2635[0]
  i2634.m_Unicode = i2635[1]
  i2634.m_GlyphIndex = i2635[2]
  i2634.m_Scale = i2635[3]
  return i2634
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.MultipleSubstitutionRecord', i2643[i + 0]));
  }
  i2640.m_MultipleSubstitutionRecords = i2642
  var i2645 = i2641[1]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.add(request.d('TMPro.LigatureSubstitutionRecord', i2645[i + 0]));
  }
  i2640.m_LigatureSubstitutionRecords = i2644
  var i2647 = i2641[2]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2647[i + 0]));
  }
  i2640.m_GlyphPairAdjustmentRecords = i2646
  var i2649 = i2641[3]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2649[i + 0]));
  }
  i2640.m_MarkToBaseAdjustmentRecords = i2648
  var i2651 = i2641[4]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2651[i + 0]));
  }
  i2640.m_MarkToMarkAdjustmentRecords = i2650
  return i2640
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2655 = data
  i2654.m_TargetGlyphID = i2655[0]
  i2654.m_SubstituteGlyphIDs = i2655[1]
  return i2654
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2659 = data
  i2658.m_ComponentGlyphIDs = i2659[0]
  i2658.m_LigatureGlyphID = i2659[1]
  return i2658
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2663 = data
  i2662.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2663[0], i2662.m_FirstAdjustmentRecord)
  i2662.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2663[1], i2662.m_SecondAdjustmentRecord)
  i2662.m_FeatureLookupFlags = i2663[2]
  return i2662
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2665 = data
  i2664.m_GlyphIndex = i2665[0]
  i2664.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2665[1], i2664.m_GlyphValueRecord)
  return i2664
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2667 = data
  i2666.m_XPlacement = i2667[0]
  i2666.m_YPlacement = i2667[1]
  i2666.m_XAdvance = i2667[2]
  i2666.m_YAdvance = i2667[3]
  return i2666
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2671 = data
  i2670.m_BaseGlyphID = i2671[0]
  i2670.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2671[1], i2670.m_BaseGlyphAnchorPoint)
  i2670.m_MarkGlyphID = i2671[2]
  i2670.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2671[3], i2670.m_MarkPositionAdjustment)
  return i2670
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2674 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2675 = data
  i2674.m_BaseMarkGlyphID = i2675[0]
  i2674.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2675[1], i2674.m_BaseMarkGlyphAnchorPoint)
  i2674.m_CombiningMarkGlyphID = i2675[2]
  i2674.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2675[3], i2674.m_CombiningMarkPositionAdjustment)
  return i2674
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'regularTypeface')
  request.r(i2681[2], i2681[3], 0, i2680, 'italicTypeface')
  return i2680
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2683 = data
  i2682.Name = i2683[0]
  i2682.PointSize = i2683[1]
  i2682.Scale = i2683[2]
  i2682.CharacterCount = i2683[3]
  i2682.LineHeight = i2683[4]
  i2682.Baseline = i2683[5]
  i2682.Ascender = i2683[6]
  i2682.CapHeight = i2683[7]
  i2682.Descender = i2683[8]
  i2682.CenterLine = i2683[9]
  i2682.SuperscriptOffset = i2683[10]
  i2682.SubscriptOffset = i2683[11]
  i2682.SubSize = i2683[12]
  i2682.Underline = i2683[13]
  i2682.UnderlineThickness = i2683[14]
  i2682.strikethrough = i2683[15]
  i2682.strikethroughThickness = i2683[16]
  i2682.TabWidth = i2683[17]
  i2682.Padding = i2683[18]
  i2682.AtlasWidth = i2683[19]
  i2682.AtlasHeight = i2683[20]
  return i2682
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2687 = data
  i2686.id = i2687[0]
  i2686.x = i2687[1]
  i2686.y = i2687[2]
  i2686.width = i2687[3]
  i2686.height = i2687[4]
  i2686.xOffset = i2687[5]
  i2686.yOffset = i2687[6]
  i2686.xAdvance = i2687[7]
  i2686.scale = i2687[8]
  return i2686
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.KerningTable' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('TMPro.KerningPair', i2691[i + 0]));
  }
  i2688.kerningPairs = i2690
  return i2688
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.KerningPair' )
  var i2695 = data
  i2694.xOffset = i2695[0]
  i2694.m_FirstGlyph = i2695[1]
  i2694.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2695[2], i2694.m_FirstGlyphAdjustments)
  i2694.m_SecondGlyph = i2695[3]
  i2694.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2695[4], i2694.m_SecondGlyphAdjustments)
  i2694.m_IgnoreSpacingAdjustments = !!i2695[5]
  return i2694
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2697 = data
  i2696.m_FaceIndex = i2697[0]
  i2696.m_FamilyName = i2697[1]
  i2696.m_StyleName = i2697[2]
  i2696.m_PointSize = i2697[3]
  i2696.m_Scale = i2697[4]
  i2696.m_UnitsPerEM = i2697[5]
  i2696.m_LineHeight = i2697[6]
  i2696.m_AscentLine = i2697[7]
  i2696.m_CapLine = i2697[8]
  i2696.m_MeanLine = i2697[9]
  i2696.m_Baseline = i2697[10]
  i2696.m_DescentLine = i2697[11]
  i2696.m_SuperscriptOffset = i2697[12]
  i2696.m_SuperscriptSize = i2697[13]
  i2696.m_SubscriptOffset = i2697[14]
  i2696.m_SubscriptSize = i2697[15]
  i2696.m_UnderlineOffset = i2697[16]
  i2696.m_UnderlineThickness = i2697[17]
  i2696.m_StrikethroughOffset = i2697[18]
  i2696.m_StrikethroughThickness = i2697[19]
  i2696.m_TabWidth = i2697[20]
  return i2696
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2698 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2699 = data
  i2698.useSafeMode = !!i2699[0]
  i2698.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2699[1], i2698.safeModeOptions)
  i2698.timeScale = i2699[2]
  i2698.unscaledTimeScale = i2699[3]
  i2698.useSmoothDeltaTime = !!i2699[4]
  i2698.maxSmoothUnscaledTime = i2699[5]
  i2698.rewindCallbackMode = i2699[6]
  i2698.showUnityEditorReport = !!i2699[7]
  i2698.logBehaviour = i2699[8]
  i2698.drawGizmos = !!i2699[9]
  i2698.defaultRecyclable = !!i2699[10]
  i2698.defaultAutoPlay = i2699[11]
  i2698.defaultUpdateType = i2699[12]
  i2698.defaultTimeScaleIndependent = !!i2699[13]
  i2698.defaultEaseType = i2699[14]
  i2698.defaultEaseOvershootOrAmplitude = i2699[15]
  i2698.defaultEasePeriod = i2699[16]
  i2698.defaultAutoKill = !!i2699[17]
  i2698.defaultLoopType = i2699[18]
  i2698.debugMode = !!i2699[19]
  i2698.debugStoreTargetId = !!i2699[20]
  i2698.showPreviewPanel = !!i2699[21]
  i2698.storeSettingsLocation = i2699[22]
  i2698.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2699[23], i2698.modules)
  i2698.createASMDEF = !!i2699[24]
  i2698.showPlayingTweens = !!i2699[25]
  i2698.showPausedTweens = !!i2699[26]
  return i2698
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2701 = data
  i2700.logBehaviour = i2701[0]
  i2700.nestedTweenFailureBehaviour = i2701[1]
  return i2700
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2702 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2703 = data
  i2702.showPanel = !!i2703[0]
  i2702.audioEnabled = !!i2703[1]
  i2702.physicsEnabled = !!i2703[2]
  i2702.physics2DEnabled = !!i2703[3]
  i2702.spriteEnabled = !!i2703[4]
  i2702.uiEnabled = !!i2703[5]
  i2702.uiToolkitEnabled = !!i2703[6]
  i2702.textMeshProEnabled = !!i2703[7]
  i2702.tk2DEnabled = !!i2703[8]
  i2702.deAudioEnabled = !!i2703[9]
  i2702.deUnityExtendedEnabled = !!i2703[10]
  i2702.epoOutlineEnabled = !!i2703[11]
  return i2702
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.TMP_Settings' )
  var i2705 = data
  i2704.assetVersion = i2705[0]
  i2704.m_TextWrappingMode = i2705[1]
  i2704.m_enableKerning = !!i2705[2]
  var i2707 = i2705[3]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(i2707[i + 0]);
  }
  i2704.m_ActiveFontFeatures = i2706
  i2704.m_enableExtraPadding = !!i2705[4]
  i2704.m_enableTintAllSprites = !!i2705[5]
  i2704.m_enableParseEscapeCharacters = !!i2705[6]
  i2704.m_EnableRaycastTarget = !!i2705[7]
  i2704.m_GetFontFeaturesAtRuntime = !!i2705[8]
  i2704.m_missingGlyphCharacter = i2705[9]
  i2704.m_ClearDynamicDataOnBuild = !!i2705[10]
  i2704.m_warningsDisabled = !!i2705[11]
  request.r(i2705[12], i2705[13], 0, i2704, 'm_defaultFontAsset')
  i2704.m_defaultFontAssetPath = i2705[14]
  i2704.m_defaultFontSize = i2705[15]
  i2704.m_defaultAutoSizeMinRatio = i2705[16]
  i2704.m_defaultAutoSizeMaxRatio = i2705[17]
  i2704.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2705[18], i2705[19] )
  i2704.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2705[20], i2705[21] )
  i2704.m_autoSizeTextContainer = !!i2705[22]
  i2704.m_IsTextObjectScaleStatic = !!i2705[23]
  var i2709 = i2705[24]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 1, i2708, '')
  }
  i2704.m_fallbackFontAssets = i2708
  i2704.m_matchMaterialPreset = !!i2705[25]
  i2704.m_HideSubTextObjects = !!i2705[26]
  request.r(i2705[27], i2705[28], 0, i2704, 'm_defaultSpriteAsset')
  i2704.m_defaultSpriteAssetPath = i2705[29]
  i2704.m_enableEmojiSupport = !!i2705[30]
  i2704.m_MissingCharacterSpriteUnicode = i2705[31]
  var i2711 = i2705[32]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 1, i2710, '')
  }
  i2704.m_EmojiFallbackTextAssets = i2710
  i2704.m_defaultColorGradientPresetsPath = i2705[33]
  request.r(i2705[34], i2705[35], 0, i2704, 'm_defaultStyleSheet')
  i2704.m_StyleSheetsResourcePath = i2705[36]
  request.r(i2705[37], i2705[38], 0, i2704, 'm_leadingCharacters')
  request.r(i2705[39], i2705[40], 0, i2704, 'm_followingCharacters')
  i2704.m_UseModernHangulLineBreakingRules = !!i2705[41]
  return i2704
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'spriteSheet')
  var i2717 = i2715[2]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('TMPro.TMP_Sprite', i2717[i + 0]));
  }
  i2714.spriteInfoList = i2716
  var i2719 = i2715[3]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 1, i2718, '')
  }
  i2714.fallbackSpriteAssets = i2718
  var i2721 = i2715[4]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.add(request.d('TMPro.TMP_SpriteCharacter', i2721[i + 0]));
  }
  i2714.m_SpriteCharacterTable = i2720
  var i2723 = i2715[5]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.TMP_SpriteGlyph', i2723[i + 0]));
  }
  i2714.m_GlyphTable = i2722
  i2714.m_Version = i2715[6]
  i2714.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2715[7], i2714.m_FaceInfo)
  request.r(i2715[8], i2715[9], 0, i2714, 'm_Material')
  return i2714
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2727 = data
  i2726.name = i2727[0]
  i2726.hashCode = i2727[1]
  i2726.unicode = i2727[2]
  i2726.pivot = new pc.Vec2( i2727[3], i2727[4] )
  request.r(i2727[5], i2727[6], 0, i2726, 'sprite')
  i2726.id = i2727[7]
  i2726.x = i2727[8]
  i2726.y = i2727[9]
  i2726.width = i2727[10]
  i2726.height = i2727[11]
  i2726.xOffset = i2727[12]
  i2726.yOffset = i2727[13]
  i2726.xAdvance = i2727[14]
  i2726.scale = i2727[15]
  return i2726
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2733 = data
  i2732.m_Name = i2733[0]
  i2732.m_ElementType = i2733[1]
  i2732.m_Unicode = i2733[2]
  i2732.m_GlyphIndex = i2733[3]
  i2732.m_Scale = i2733[4]
  return i2732
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2737 = data
  request.r(i2737[0], i2737[1], 0, i2736, 'sprite')
  i2736.m_Index = i2737[2]
  i2736.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2737[3], i2736.m_Metrics)
  i2736.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2737[4], i2736.m_GlyphRect)
  i2736.m_Scale = i2737[5]
  i2736.m_AtlasIndex = i2737[6]
  i2736.m_ClassDefinitionType = i2737[7]
  return i2736
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2739 = data
  var i2741 = i2739[0]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('TMPro.TMP_Style', i2741[i + 0]));
  }
  i2738.m_StyleList = i2740
  return i2738
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_Style' )
  var i2745 = data
  i2744.m_Name = i2745[0]
  i2744.m_HashCode = i2745[1]
  i2744.m_OpeningDefinition = i2745[2]
  i2744.m_ClosingDefinition = i2745[3]
  i2744.m_OpeningTagArray = i2745[4]
  i2744.m_ClosingTagArray = i2745[5]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2747 = data
  var i2749 = i2747[0]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2749[i + 0]) );
  }
  i2746.files = i2748
  i2746.componentToPrefabIds = i2747[1]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2753 = data
  i2752.path = i2753[0]
  request.r(i2753[1], i2753[2], 0, i2752, 'unityObject')
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2755 = data
  var i2757 = i2755[0]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2757[i + 0]) );
  }
  i2754.scriptsExecutionOrder = i2756
  var i2759 = i2755[1]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2759[i + 0]) );
  }
  i2754.sortingLayers = i2758
  var i2761 = i2755[2]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2761[i + 0]) );
  }
  i2754.cullingLayers = i2760
  i2754.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2755[3], i2754.timeSettings)
  i2754.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2755[4], i2754.physicsSettings)
  i2754.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2755[5], i2754.physics2DSettings)
  i2754.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2755[6], i2754.qualitySettings)
  i2754.enableRealtimeShadows = !!i2755[7]
  i2754.enableAutoInstancing = !!i2755[8]
  i2754.enableStaticBatching = !!i2755[9]
  i2754.enableDynamicBatching = !!i2755[10]
  i2754.lightmapEncodingQuality = i2755[11]
  i2754.desiredColorSpace = i2755[12]
  var i2763 = i2755[13]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( i2763[i + 0] );
  }
  i2754.allTags = i2762
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2767 = data
  i2766.name = i2767[0]
  i2766.value = i2767[1]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2771 = data
  i2770.id = i2771[0]
  i2770.name = i2771[1]
  i2770.value = i2771[2]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2775 = data
  i2774.id = i2775[0]
  i2774.name = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2777 = data
  i2776.fixedDeltaTime = i2777[0]
  i2776.maximumDeltaTime = i2777[1]
  i2776.timeScale = i2777[2]
  i2776.maximumParticleTimestep = i2777[3]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2779 = data
  i2778.gravity = new pc.Vec3( i2779[0], i2779[1], i2779[2] )
  i2778.defaultSolverIterations = i2779[3]
  i2778.bounceThreshold = i2779[4]
  i2778.autoSyncTransforms = !!i2779[5]
  i2778.autoSimulation = !!i2779[6]
  var i2781 = i2779[7]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2781[i + 0]) );
  }
  i2778.collisionMatrix = i2780
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2785 = data
  i2784.enabled = !!i2785[0]
  i2784.layerId = i2785[1]
  i2784.otherLayerId = i2785[2]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'material')
  i2786.gravity = new pc.Vec2( i2787[2], i2787[3] )
  i2786.positionIterations = i2787[4]
  i2786.velocityIterations = i2787[5]
  i2786.velocityThreshold = i2787[6]
  i2786.maxLinearCorrection = i2787[7]
  i2786.maxAngularCorrection = i2787[8]
  i2786.maxTranslationSpeed = i2787[9]
  i2786.maxRotationSpeed = i2787[10]
  i2786.baumgarteScale = i2787[11]
  i2786.baumgarteTOIScale = i2787[12]
  i2786.timeToSleep = i2787[13]
  i2786.linearSleepTolerance = i2787[14]
  i2786.angularSleepTolerance = i2787[15]
  i2786.defaultContactOffset = i2787[16]
  i2786.autoSimulation = !!i2787[17]
  i2786.queriesHitTriggers = !!i2787[18]
  i2786.queriesStartInColliders = !!i2787[19]
  i2786.callbacksOnDisable = !!i2787[20]
  i2786.reuseCollisionCallbacks = !!i2787[21]
  i2786.autoSyncTransforms = !!i2787[22]
  var i2789 = i2787[23]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2789[i + 0]) );
  }
  i2786.collisionMatrix = i2788
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2793 = data
  i2792.enabled = !!i2793[0]
  i2792.layerId = i2793[1]
  i2792.otherLayerId = i2793[2]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2795 = data
  var i2797 = i2795[0]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2797[i + 0]) );
  }
  i2794.qualityLevels = i2796
  var i2799 = i2795[1]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( i2799[i + 0] );
  }
  i2794.names = i2798
  i2794.shadows = i2795[2]
  i2794.anisotropicFiltering = i2795[3]
  i2794.antiAliasing = i2795[4]
  i2794.lodBias = i2795[5]
  i2794.shadowCascades = i2795[6]
  i2794.shadowDistance = i2795[7]
  i2794.shadowmaskMode = i2795[8]
  i2794.shadowProjection = i2795[9]
  i2794.shadowResolution = i2795[10]
  i2794.softParticles = !!i2795[11]
  i2794.softVegetation = !!i2795[12]
  i2794.activeColorSpace = i2795[13]
  i2794.desiredColorSpace = i2795[14]
  i2794.masterTextureLimit = i2795[15]
  i2794.maxQueuedFrames = i2795[16]
  i2794.particleRaycastBudget = i2795[17]
  i2794.pixelLightCount = i2795[18]
  i2794.realtimeReflectionProbes = !!i2795[19]
  i2794.shadowCascade2Split = i2795[20]
  i2794.shadowCascade4Split = new pc.Vec3( i2795[21], i2795[22], i2795[23] )
  i2794.streamingMipmapsActive = !!i2795[24]
  i2794.vSyncCount = i2795[25]
  i2794.asyncUploadBufferSize = i2795[26]
  i2794.asyncUploadTimeSlice = i2795[27]
  i2794.billboardsFaceCameraPosition = !!i2795[28]
  i2794.shadowNearPlaneOffset = i2795[29]
  i2794.streamingMipmapsMemoryBudget = i2795[30]
  i2794.maximumLODLevel = i2795[31]
  i2794.streamingMipmapsAddAllCameras = !!i2795[32]
  i2794.streamingMipmapsMaxLevelReduction = i2795[33]
  i2794.streamingMipmapsRenderersPerFrame = i2795[34]
  i2794.resolutionScalingFixedDPIFactor = i2795[35]
  i2794.streamingMipmapsMaxFileIORequests = i2795[36]
  i2794.currentQualityLevel = i2795[37]
  return i2794
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2803 = data
  i2802.m_XCoordinate = i2803[0]
  i2802.m_YCoordinate = i2803[1]
  return i2802
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2805 = data
  i2804.m_XPositionAdjustment = i2805[0]
  i2804.m_YPositionAdjustment = i2805[1]
  return i2804
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2807 = data
  i2806.xPlacement = i2807[0]
  i2806.yPlacement = i2807[1]
  i2806.xAdvance = i2807[2]
  i2806.yAdvance = i2807[3]
  return i2806
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[12],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[12],"92":[49],"93":[94],"95":[94],"25":[24],"14":[12],"42":[5],"47":[5],"45":[5],"96":[9],"97":[12],"98":[99],"100":[52],"101":[25],"102":[24],"50":[49,24],"31":[24,29],"103":[24],"104":[29,24],"105":[49],"106":[29,24],"107":[24],"108":[109],"110":[109],"111":[109],"112":[113],"114":[24],"115":[24],"28":[25],"30":[29,24],"116":[24],"27":[25],"117":[24],"118":[24],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"126":[29,24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[29,24],"132":[24],"133":[52],"134":[52],"53":[52],"135":[52],"136":[12],"137":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","ItemController","UnityEngine.GameObject","ItemMovement","ItemGraphic","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","AutoCameraFit","InputManager","TriggerOnAllActive","HandHintManager","TongItem","UnityEngine.Animator","GameManager","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.SphereCollider","UnityEditor.Animations.AnimatorController","EventAnim","PlaySound","UnityEngine.SpriteMask","BasketAnim","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CuttingSetup","ClickToProcessItem","AutoProcessItem","UnlockCondition","SwipeToProcessItem","DropTargetSlot","DragBetweenBoundsToProcess","ItemSpawner","UnityEngine.MeshRenderer","TMPro.TextMeshPro","UnityEngine.MeshFilter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "PLY_Cookzi";

Deserializers.lunaInitializationTime = "06/23/2026 10:40:28";

Deserializers.lunaDaysRunning = "0.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4829";

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

Deserializers.buildID = "3b5b0b8b-92d3-414c-99d8-2913d03671ce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Ua2CoreInitializeCallback","Register"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

