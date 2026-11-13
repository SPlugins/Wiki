---
description: >-
  本页详细介绍 ExecutableBlocks
  插件中可执行方块的全部功能，包括激活器、基础设置、标题全息图、自定义使用次数、容器、熔炉、方向、蜂巢、酿造台、漏斗、展示、雕纹书架和取消选项，并附带每个配置键的作用、默认值、是否必填和
  YAML 示例。
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T17:58:29.142Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 方块功能


## 激活器

* 非常重要的功能，可以为你的方块添加各种能力
* 此功能的专用 Wiki：[EB 激活器列表](/executableblocks/configurations/activator-configuration/list-of-the-activators.md)和 [EB 激活器功能](/executableblocks/configurations/activator-configuration/activators-features.md)


## 基础设置

### CreationType

* 创建 EB 的方式
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* 说明：可执行方块所基于的 Minecraft 基础物品。[Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * 补充说明：该物品必须是可放置的方块。

```yaml
material: DIRT
```

:::info
它支持刷怪笼！如果你想为刷怪笼指定类型，请添加：

`spawnerType: CHICKEN`

[EntityType 列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* 说明：方块的名称
* 示例：

```yaml
name: '&cEpic Sword'
```

### LORE

* 说明：方块的 lore
* 示例：

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* 你可以在 lore 中使用的占位符：%player%、[%usage%](block-features.md#hide-usage-1.14+) 等。

### DROP BLOCK IF IT IS BROKEN

* 说明：是否允许通过破坏来获得你的 Executable Block
* 示例：

```yaml
dropBlockIfItIsBroken: true
```

* 必填：否（默认值：true）

### DROP BLOCK IF IT IS BURNS

* 说明：是否允许通过破坏来获得你的 Executable Block
* 示例：

```yaml
dropBlockIfItIsBurns: true
```

* 必填：否（默认值：false）

### DROP BLOCK WHEN IT EXPLODES

* 说明：是否允许在 Executable Block 被任何爆炸摧毁时获得它
* 示例：

```yaml
dropBlockWhenItExplodes: true
```

* 必填：否（默认值：true）

### DROP TYPE

* 说明：选择 EB 方块的掉落类型
* 掉落类型：
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* 说明：要求至少在主手或副手中持有指定的 Executable Item，才能破坏该可执行方块
* 示例：

```yaml
onlyBreakableWithEI:
- firework
```

* 必填：否（默认值：空）

### CANBEMOVED

* 说明：方块是否可以被活塞移动。
* 示例：

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* 说明：这是一个可以将你的可执行方块与可执行物品同步的选项。
  * 补充说明：可执行方块会复制可执行物品的名称、材质和 lore，因此当你尝试编辑 EB 的名称、材质或 lore 时，不会有任何变化。你必须编辑 EI 的名称、材质和 lore，EB 中的更改才会生效
* 示例：

```yaml
executableItem: hack
```

* 必填：否

## 标题功能

它支持 [DecentHolograms](https://www.spigotmc.org/resources/96927/)、[HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) 和 [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE

* 说明：是否启用标题全息图
* 示例：

```yaml
activeTitle: false
```

* 必填：否

### TITLE NAME

* 说明：全息图显示的文本
* 示例：

```yaml
title: '&7&oDefault title'
```

* （使用 HolographicDisplay 时）你可以在标题中显示物品，格式为 ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* 必填：否

### TITLE ADJUSTMENT

* 说明：标题全息图高度的调整量
* 示例：

```yaml
titleAdjustment: 0.5
```

* 必填：否
  * 补充说明：正数向上，负数向下

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## 自定义使用次数设置

#### USAGE

* 说明：可使用的次数。主要用于激活器的使用次数修改功能。
* 示例：

```yaml
usage: 0
```

无限次使用的方块：

```yaml
usage: -1
```

* 必填：否（默认值：0）

:::info
usage: 0 等同于 usage:1，但不会在 lore 中显示文本 "Remaining use:..."。
:::

## 容器功能

:::info
物品过滤器可以正确支持标签 `{CUSTOMODELDATA:X}`，因此你可以创建只接收具有特定材质的物品的漏斗
:::

### whitelistMaterials

* 在这里你可以添加一个材料列表，列表中的材料可以放入你的方块中

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* 在这里你可以添加一个材料列表，列表中的材料不能放入你的方块中

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
对于漏斗（HOPPERS），白名单和黑名单会限制漏斗可以吸取的物品。
:::

### isLocked

* 容器是否被锁定

### lockedName

* 如果容器被锁定，你需要设置钥匙的名称

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* 容器的物品栏标题

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## 熔炉功能

### furnaceSpeed

* 可用于自定义熔炉的速度。
* 示例：

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
默认 -> 1

默认速度的 2 倍 -> 2

默认速度的一半 -> 0.5
:::

### infiniteFuel

* 使方块无需燃料即可运行

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* 使方块看起来处于点燃状态

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* 产出结果的倍率。

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
它可以为负数，用于从结果存储中移除物品。
:::

### fortuneChance

* 触发时运效果的几率

```
furnaceFeatures:
  fortuneChance: 0.95
```

## 方向功能

### forceBlockFaceOnPlace

* 强制方块放置时朝向某个方向
* 示例：

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* 设置方块放置时的朝向
* 示例：

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` 仅在 `forceBlockFaceOnPlace` 为 `true` 时才会生效。否则，方块会保持放置时的朝向。这些选项只会转动有方向的方块（带有 `facing` 的方块）。

命令 [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) 也可以指定方向，其优先级高于这些选项。
:::

## 蜂巢功能 <CustomTag type="version" version="1.15" /> {#beehive-features}

在放置蜂箱或蜂巢时预先填充内容。仅适用于材质为 `BEEHIVE` 或 `BEE_NEST` 的 ExecutableBlocks（使用 `BASIC_CREATION` 或 `IMPORT_FROM_EXECUTABLE_ITEMS` 创建），这些选项对其他方块无效。在游戏内编辑器中，该按钮仅对这两种材质显示。

两个选项都是可选的：如果都没有设置，方块不会被修改，配置中也不会写入任何内容。

### honeyLevel

* 说明：放置后方块的蜂蜜等级，范围从 `0`（空）到 `5`（满，可以采集蜂蜜）。未设置：不修改蜂蜜等级。

### bees

* 说明：放入放置后方块内的蜜蜂数量。未设置或为 `0`：没有蜜蜂。蜂箱默认容纳 3 只蜜蜂，多出的蜜蜂不会被添加。

* 示例：

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
使用 [LOOP 激活器和 `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-)，被采集过的蜂巢可以在其被放置后的固定时间再次放置（因此也会再次被填充）。
:::

## 酿造台功能

### brewingStandSpeed

* 可用于自定义酿造台的速度
* 示例：

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
默认 -> 1

默认速度的 2 倍 -> 2

默认速度的一半 -> 0.5
:::

## 漏斗功能

### amountItemsTransferred

* 可用于自定义漏斗每次转移的物品数量。
* 它既适用于漏斗向其所朝向的容器推送物品时，也适用于（自 26.11 起）漏斗从上方容器拉取物品时。
* 示例：

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## 展示功能

### Material

* 将被展示的物品的 Material
* 示例：

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* 将被展示的 Material 的 Custom model data
* 示例：

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* 展示的缩放比例
* 示例：

```
DisplayFeatures:
  scale: 1
```

### aligned

* 是否让展示对齐
* 示例：

```
DisplayFeatures:
```
aligned: false

### customPitch

* 选择自定义俯仰角
* 示例：

```
DisplayFeatures:
  customPitch: 1
```

### customY

* 选择自定义 Y 坐标
* 示例：

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* 是否发光
* 示例：

```
DisplayFeatures:
  glow: false
```

### 交互区域功能

* 展示的宽度
* 展示的高度
* 是否可碰撞
* 示例：

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* 破坏该展示创建物所需的点击次数
* 示例：

```
DisplayFeatures:
  clickToBreak: 3
```

## 雕纹书架

### occupiedSlots

* 设置哪些槽位（索引 0-5）中放有书

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## 取消

### cancelLiquidDestroy

* 说明：它会取消水或岩浆对种子、玩家头颅的破坏
* 示例：

```
cancelLiquidDestroy: true
```
