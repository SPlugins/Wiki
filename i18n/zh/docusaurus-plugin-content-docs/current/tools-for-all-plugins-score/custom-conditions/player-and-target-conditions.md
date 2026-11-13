---
description: 了解 ExecutableItems 中玩家与目标条件的配置方式，包括潜行、飞行、生命值、经验、位置、权限和领地等条件，以及错误消息与取消事件设置。
source_hash: 5b9669d43610ab52
translated_at: '2026-11-13T18:06:17.345Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 玩家与目标条件

## 条件设置
所有条件的格式都相同，包括：
* `{theCondition}`
* `{theCondition}Msg`：条件无效时发送的消息（如果没有设置，则发送默认错误消息，ExecutableItems 的 LOOP 激活器除外）
* `{theCondition}Cancel`：条件无效时是否取消该事件
* `{theCondition}Cmds`：条件无效时要执行的命令
* 示例：

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
对于数值条件，你可以同时设置 2 个条件。
示例：
“我想创建一个条件，仅当数值大于 50 且小于 250 时才激活”
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
想要添加玩家条件吗？

那么在激活器部分添加 playerConditions。

显然，目标的条件则是 targetConditions。
:::

:::info
**GIF 说明：** 用于演示每个条件效果的 GIF 中使用的激活器是 LOOP 激活器，因此条件的错误消息会多次出现。
:::

### ifSneaking - Not

* 描述：检查玩家是否正在潜行
* 示例：

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家（没有）在潜行，激活器将会激活。
  * 如果玩家正在飞行并按下潜行键下降，ifSneaking 的激活器将会激活。
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
如果已启用 ifSneaking 条件，请不要启用 ifNotSneaking，因为同时启用两者没有意义
:::

### ifSprinting - Not

* 描述：检查玩家是否正在疾跑
* 示例：

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家（没有）在疾跑，激活器将会激活。
* 必填：否（默认值：false）

### ifFlying - Not

* 描述：检查玩家是否正在飞行
* 示例：

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家通过双击跳跃键切换飞行状态并（没有）在飞行，激活器将会激活。
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* 描述：检查玩家是否正举着盾牌并按住右键（格挡）
* 示例：

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家（没有）在用盾牌格挡，激活器将会激活
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* 描述：检查玩家是否正在滑翔
* 示例：

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家（没有）使用鞘翅在空中滑翔，激活器将会激活。
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* 描述：检查玩家是否正在游泳（1.13 水域更新）
* 示例：

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家跳入水中并以自由泳姿势开始游泳，激活器将会激活。
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* 描述：检查玩家是否处于眩晕状态
* 示例：

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
你可以通过执行自定义玩家命令 **STUN\_ENABLE** 来使玩家眩晕
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* 必填：否（默认值：false）

### ifIsOnFire - Not

* 描述：检查玩家是否着火
* 示例：

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家因掉入岩浆或走在火上而（没有）着火，激活器将会激活
* 必填：否（默认值：false）

### ifIsInTheAir - Not

* 描述：检查玩家是否在空中。
* 示例：

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家脚下（没有）方块，激活器将会激活。
* 必填：否（默认值：false）

![它会检查你脚下的方块，也能正确检测半砖。](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* 描述：检查玩家是否与某个生物实体之间存在视线（50 格方块范围内）。
* 示例：

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* 示例情况：
  * 如果玩家正直视 50 格方块范围内的某个生物或其他玩家，激活器将会激活。
  * 适用于制作仅在瞄准实体时才生效的物品。
* 必填：否（默认值：false）

:::info
此条件要求服务器版本为 **1.14+**。
:::

### ifPlayerMustBeOnHisTown

* **支持以下插件：**
  * Towny
* 描述：检查玩家是否在自己的城镇内。
* 示例：

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* 必填：否（默认值：false）

### ifPlayerMustBeOnHisClaim

* **支持以下插件：**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* 描述：检查玩家是否位于其拥有权限的领地内。
* 示例：

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家位于自己拥有的领地内，激活器将会激活。
  * 如果玩家位于不属于自己但拥有权限的领地内，激活器将会激活。
* 必填：否（默认值：false）

### ifPlayerMustBeOnHisClaimOrWilderness

* **支持以下插件：**
  * GriefPrevention（如果玩家位于 GriefPrevention 的公共领地内，则返回有效）
  * Lands
  * GriefDefender
  * Residence
* 描述：检查玩家是否位于其拥有权限的领地内或荒野中。
* 示例：

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家位于自己拥有的领地内，激活器将会激活。
  * 如果玩家位于不属于自己但拥有权限的领地内，激活器将会激活。
  * 如果玩家位于荒野中，激活器将会激活。
* 必填：否（默认值：false）

### ifPlayerMustBeOnHisIsland

* 描述：检查玩家是否在自己的岛屿上。
* **兼容的插件：**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* 示例：

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* 示例情况：
  * 如果玩家在自己的岛屿上，激活器将会激活。
* 必填：否（默认值：false）

### ifPlayerMustBeOnHisPlot

* **支持以下插件：**
  * PlotSquared
* 描述：检查玩家是否位于其拥有权限的地皮上。
* 示例：

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* 必填：否（默认值：false）

### ifCursorDistance

* 描述：检查玩家视线所指的方向是畅通还是被阻挡
* 示例：

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 在 `">5"` 中，只要你前方 5 格方块之外是空气，激活器就会激活
  * 在 `"<5"` 中，如果你前方 5 格方块处是空气方块，激活器将不会激活
* 必填：否

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* 描述：检查玩家所在位置的光照等级是否正确
* 示例：

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<5`，激活器仅在玩家所在位置的光照等级低于 5 时才会激活
  * 如果值为 `<=5`，激活器仅在玩家所在位置的光照等级为 5 及以下时才会激活。
  * 如果值为 `==13`，激活器仅在玩家所在位置的光照等级为 13 时才会激活。
  * 如果值为 `>5`，激活器仅在玩家所在位置的光照等级高于 5 时才会激活。
  * 如果值为 `>=5`，激活器仅在玩家所在位置的光照等级为 5 及以上时才会激活。
* 必填：否
* 更多信息：你可以在文件中添加 `ifLightLevelMsg: "&4&lError you need...."` 来编辑错误消息，也可以在游戏内编辑。

​如果值为 `==13`，激活器仅在玩家所在位置的光照等级为 13 时才会激活。

![如果值为 ==13，激活器仅在玩家所在位置的光照等级为 13 时才会激活。
聊天中的消息执行了 SENDMESSAGE %player\_light\_level%，用于显示我所在位置的光照等级](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* 描述：检查玩家是否拥有指定数量的经验值。
* 示例：

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<120`，激活器仅在玩家的经验值低于 120 时才会激活
  * 如果值为 `<=96`，激活器仅在玩家的经验值为 96 及以下时才会激活。
  * 如果值为 `==13`，激活器仅在玩家的经验值为 13 时才会激活。
  * 如果值为 `>696`，激活器仅在玩家的经验值高于 696 时才会激活。
  * 如果值为 `>=45`，激活器仅在玩家的经验值为 45 及以上时才会激活。
* 必填：否

### ifPlayerLevel

* 描述：检查玩家是否拥有指定数量的经验等级。
* 示例：

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<700`，激活器仅在玩家的经验值低于 700 时才会激活
  * 如果值为 `<=1296`，激活器仅在玩家的经验值为 1296 及以下时才会激活。
  * 如果值为 `==153`，激活器仅在玩家的经验值为 5 时才会激活。
  * 如果值为 `>420`，激活器仅在玩家的经验值高于 420 时才会激活。
  * 如果值为 `>=99`，激活器仅在玩家的经验值为 99 及以上时才会激活。
* 必填：否

### ifPlayerFoodLevel

* 描述：检查玩家是否拥有指定数量的饱食度
* 示例：

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<10`，激活器仅在玩家的饱食度低于 10 时才会激活
  * 如果值为 `<=10`，激活器仅在玩家的饱食度为 10 及以下时才会激活。
  * 如果值为 `==10`，激活器仅在玩家的饱食度为 10 时才会激活。
  * 如果值为 `>10`，激活器仅在玩家的饱食度高于 10 时才会激活。
  * 如果值为 `>=10`，激活器仅在玩家的饱食度为 10 及以上时才会激活。
* 必填：否

### ifPlayerHealth

* 描述：检查玩家是否拥有指定数量的生命值
* 示例：

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<10`，激活器仅在玩家的生命值低于 10 时才会激活
  * 如果值为 `<=10`，激活器仅在玩家的生命值为 10 及以下时才会激活。
  * 如果值为 `==10`，激活器仅在玩家的生命值为 20 时才会激活。
  * 如果值为 `>10`，激活器仅在玩家的生命值高于 10 时才会激活。
  * 如果值为 `>=10`，激活器仅在玩家的生命值为 10 及以上时才会激活。
* 必填：否

![演示生命值条件](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_如果值为 `<=10`，激活器仅在玩家的生命值为 10 及以下时才会激活。_

### ifPlayerSpeed

* 描述：检查玩家的速度向量大小（移动速度）。
* 示例：

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* 示例情况：
  * 如果值为 `>=0.1`，激活器仅在玩家正在移动时才会激活。
  * 如果值为 `>=0.3`，激活器仅在玩家正在疾跑或快速移动时才会激活。
  * 如果值为 `==0`，激活器仅在玩家静止不动时才会激活。
* 必填：否

### ifPosX

* 描述：检查玩家是否位于指定的 X 坐标。
* 示例：

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<700`，激活器仅在玩家的 X 坐标值低于 700 时才会激活
  * 如果值为 `<=1296`，激活器仅在玩家的 X 坐标值为 1296 及以下时才会激活。
  * 如果值为 `==153`，激活器仅在玩家的 X 坐标值为 5 时才会激活。
  * 如果值为 `>420`，激活器仅在玩家的 X 坐标值高于 420 时才会激活。
  * 如果值为 `>=99`，激活器仅在玩家的 X 坐标值为 99 及以上时才会激活。
* 必填：否

### ifPosY

* 描述：检查玩家是否位于指定的 Y 坐标。
* 示例：

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<700`，激活器仅在玩家的 Y 坐标值低于 700 时才会激活
  * 如果值为 `<=1296`，激活器仅在玩家的 Y 坐标值为 1296 及以下时才会激活。
  * 如果值为 `==153`，激活器仅在玩家的 Y 坐标值为 5 时才会激活。
  * 如果值为 `>420`，激活器仅在玩家的 Y 坐标值高于 420 时才会激活。
  * 如果值为 `>=99`，激活器仅在玩家的 Y 坐标值为 99 及以上时才会激活。
* 必填：否

### ifPosZ

* 描述：检查玩家是否位于指定的 Z 坐标。
* 示例：

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果值为 `<700`，激活器仅在玩家的 Z 坐标值低于 700 时才会激活
  * 如果值为 `<=1296`，激活器仅在玩家的 Z 坐标值为 1296 及以下时才会激活。
  * 如果值为 `==153`，激活器仅在玩家的 Z 坐标值为 5 时才会激活。
  * 如果值为 `>420`，激活器仅在玩家的 Z 坐标值高于 420 时才会激活。
  * 如果值为 `>=99`，激活器仅在玩家的 Z 坐标值为 99 及以上时才会激活。
* 必填：否

### ifNearbyEntityCount

* 描述：检查玩家周围 10 格方块半径内的实体数量。
* 示例：

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* 示例情况：
  * 如果值为 `>=3`，激活器仅在玩家附近至少有 3 个实体时才会激活。
  * 如果值为 `==0`，激活器仅在玩家独自一人、附近没有任何实体时才会激活。
  * 会统计所有实体类型（生物、玩家、掉落物等）。
* 必填：否

### ifNearbyPlayerCount

* 描述：检查玩家周围 10 格方块半径内的玩家数量。
* 示例：

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* 示例情况：
  * 如果值为 `>=1`，激活器仅在附近至少有 1 名其他玩家时才会激活。
  * 如果值为 `==0`，激活器仅在 10 格方块范围内没有其他玩家时才会激活。
  * 与 ifNearbyEntityCount 不同，此条件只统计玩家，不统计生物或其他实体。
* 必填：否

### ifHasPermission - Not

* 描述：检查玩家是否（没有）拥有指定权限。
* 示例：

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家拥有权限 `custom.jump.yes`，激活器将会激活。如果玩家没有该权限，则不会激活。
  * **此 GIF 中没有使用实际的条件，以便正确展示该条件的行为。在你实际使用此条件时，会出现特定的错误消息**
* 必填：否

:::warning
**测试时最好不要使用 OP 身份，因为如果你是 OP，就拥有所有权限**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* 描述：检查玩家是否拥有所选标签。
* 示例：

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* 描述：检查玩家是否（没有）选中指定方块。
* 示例：

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家将光标悬停在沙子上，激活器将会激活。
* 必填：否

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* 描述：检查玩家是否（没有）位于某个方块中。
* 示例：

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家位于 COBWEB 中（头部或脚部），激活器将会激活。
  * 只要玩家所在位置不比所处方块高出超过 1 格方块，激活器就会激活
* 必填：否（默认值：false）

有关标签的详细说明，请参阅此列表：

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* 描述：检查玩家是否（没有）站在某个方块上。
* 示例：

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* 示例情况：
  * 如果玩家脚下是石头，激活器将会激活。
  * 只要玩家所在位置不比所站立的方块高出超过 1 格方块，激活器就会激活
* 必填：否（默认值：false）

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>你可以添加方块组，以下是这些方块组：</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

有关标签的详细说明，请参阅此列表：

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
支持 IA 和 EB 方块
:::

### ifPlayerMounts - Not

* 描述：检查玩家是否（没有）骑乘“所选实体”
* 示例：

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* 描述：检查玩家是否（没有）位于指定的生物群系中。
* 示例：

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   示例情况：

    * 如果玩家位于桦木森林生物群系，且桦木森林生物群系在 `ifInBiome:` 条件的世界列表中，激活器将会激活。

[生物群系](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* 必填：否

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* 描述：检查玩家是否（没有）位于指定区域（WorldGuard 区域）内。
* 示例：

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家位于“area1”区域内，且“area1”区域在 `ifInRegion:` 条件的世界列表中，激活器将会激活。
* 必填：否

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* 描述：检查玩家是否（没有）位于指定世界中。
* 示例：

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家位于下界，且下界在 `ifInWorld:` 条件的世界列表中，激活器将会激活。
* 必填：否

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* 描述：检查玩家是否拥有指定效果。
* 示例：

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家拥有速度效果，且**增幅至少为 0**，激活器将会激活
* 所有效果列表：[PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* 必填：否


### ifPlayerNotHasEffect

* 描述：检查玩家是否没有指定效果。
* 示例：

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* 描述：检查玩家是否可以破坏所指向的方块。当激活器带有方块（破坏方块、放置方块、点击方块……）时，检查该方块；否则检查玩家正在注视的方块（最远 5 格方块）。
* 示例：

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
支持 GriefPrevention、IridiumSkyblock、SuperiorSkyblock、BentoBox、Lands、Worldguard、Towny、ProtectionStones、Residence
:::

### ifPlayerHasEffectEquals

* 描述：检查玩家是否拥有指定效果。**必须具有完全相同的增幅**
* 示例：

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* 示例情况：
  * 如果玩家拥有速度效果，且**增幅为 1**，激活器将会激活
* 所有效果列表：[PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* 必填：否


### ifPlayerHasExecutableItems - Not

* 描述：检查玩家是否（没有）拥有指定的 ExecutableItems。
* 示例：

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* 上面的示例按如下方式生效。
  * 你必须在 38 号栏位上拥有 ID 为“test1”、“test2”或“test3”之一的 ei 物品，激活器才会执行
  * 你必须在 40 号栏位上拥有 ID 为“ddx”的 ei 物品
* 必填：否

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
请正确复制示例中的索引格式，有些人曾向支持团队求助，他们都是因为没有正确复制格式。
:::

### ifPlayerHasItem - Not

* 描述：检查玩家是否拥有指定物品
* 示例：

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* 示例情况：
  * 如果钻石头盔位于 39 号栏位，激活器将会激活
* 必填：否
