---
description: >-
  了解 ExecutableItems 中实体命令的用法与设置，包括 CHANGE_INTO_ITEM、DROPITEM、HEAL、KILL、SET_AI 和
  TELEPORT_POSITION 等自定义命令及示例。
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T18:03:39.905Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# 实体命令

:::tip
原版命令的“多世界”兼容。

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

示例：你想在世界 SsomarWorld 中召唤一只 Zombie：

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

使用占位符的示例`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
实体命令支持 Citizens 的 NPC
:::

## 混合命令

除了以下命令列表之外，你还可以使用：

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

这些命令既可用于与玩家相关的命令，也可用于与实体相关的命令。

## 自定义命令

_按字母顺序排序_

### ANGRY\_AT

* 说明：将实体的目标设置为指定的 UUID
* 命令设置：
  * `{entityUUID}`：目标的实体 UUID
* 示例：

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* 说明：设置该生物是否能感知周围环境。无感知的生物在被推动、被攻击等情况下仍会移动，但不会自行移动或执行任何动作。无感知的生物还可能禁用其他未明确说明的行为，例如溺水。

:::info
仅适用于 1.16.5 及以上版本
:::

* 命令设置：
  * `{value}`：true 或 false
* 示例：

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* 说明：将掉落物（地面上或空中的物品实体）替换为原版物品或 ExecutableItem。实体本身不变，只有它所携带的物品会改变。
* 专为 ExecutableItems 的激活器 `PLAYER_FISH_FISH` 设计：在该激活器中，`entityCommands` 所指向的实体就是钓到的物品。它会在被收线之前被替换，因此玩家保留正常的钓鱼动画，并收到你设置的物品而不是鱼。无需 `/ei give`、`DELAYTICK`、`data merge`。
  * 在 ExecutableEvents 中（服务器上的所有钓鱼竿），请将其写在 `PLAYER_FISH_FISH` 的 `targetEntityCommands` 中。
* 命令设置：
  * `item`：材质（`DIAMOND`）或 ExecutableItem 的 id（`my_custom_fish`）。
  * `amount`：（可选）新物品的数量。默认值：1
* 示例：

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* 如果 ExecutableItem 与某个材质同名，则使用 ExecutableItem。写入 `EI:my_id` 可仅接受 ExecutableItem。
* ExecutableItem 会为触发该激活器的玩家构建（所有者、物品的占位符）。
* 如果目标实体不是掉落物（生物、玩家等），该命令不会执行任何操作；如果 `item` 既不是材质也不是已加载的 ExecutableItem，则会在控制台中输出一条消息。
* 使用随机战利品表的完整示例：[Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* 说明：将该生物替换为另一种类型的实体。它会保留当前实体的速度。
  * 你可以指定一个 [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * 或者一个实体定义示例：`{HasVisualFire:1b,id:"minecraft:bee"}`（1.21.+）
  * 或者一个 MythicMob ID
* 命令设置：
  * `{entity}`：实体规格
* 示例：

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* 说明：在实体所在位置掉落一个 Executable Item
* 命令设置：
  * `{id}`：ExecutableItem 的物品 id
  * `{quantity}`：将掉落的 ExecutableItem 的数量
  * `[owner]`：（可选）掉落物的所有者（玩家 IGN 或 UUID）
  * `[itemdata]`：（可选）物品数据设置，包含：
    * `Usage`：设置使用次数值
    * `Variables`：设置自定义变量（格式：`{key:value}`）
    * `Durability`：设置耐久度值
* 示例：

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* 说明：在实体所在位置掉落一个 Executable Block
* 命令设置：
  * `{id}`：ExecutableBlock 的物品 id
  * `{quantity}`：将掉落的 ExecutableBlock 的数量
* 示例：

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* 说明：在实体所在位置掉落一个物品
* 命令设置：
  * `{material}`：物品类型。[参考](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **（必须全部大写）**
  * `{quantity}`：将掉落的物品数量
* 示例：

```
- DROPITEM DIAMOND 1
```

### HEAL

* 说明：为实体恢复指定数量的生命值，如果未指定，则会将实体完全治疗。
* 命令设置：
  * `{amount}`：恢复的数量
* 示例：

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* 说明：杀死该生物，不播放死亡动画
* 无命令设置
* 示例：

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* 说明：让玩家骑乘被指定的实体。
* 命令设置：
  * `{control}`：true/false，表示是否可以手动控制该实体
  * `{speed}`：骑乘时实体的移动速度
* 示例：

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* 说明：设置实体的 AI 状态
* 命令设置：
  * `{value}`：true 表示启用实体的 AI，false 表示禁用。
* 示例：

```
- SET_AI value:false
```

### SET\_ADULT

* 说明：将实体设置为“成年”状态
* 无命令设置
* 示例：

```
- SET_ADULT
```

* 示例情境：
  * 如果对一只小鸡执行此命令，它会变为成年形态。

### SET\_BABY

* 说明：将实体设置为“幼年”状态
* 无命令设置
* 示例：

```
- SET_BABY
```

* 示例情境：
  * 如果对一只成年鸡执行此命令，它会变为幼年形态。

### SET\_ENTITY\_NAME

* 说明：强制设置实体的名称
* 命令设置：
  * `{name}`：实体的新名称
* 示例：

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* 说明：剪切该实体
* 无命令设置
* 示例：

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* 说明：将实体传送到物品的使用者身边
* 无命令设置
* 示例：

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* 说明：将物品的使用者传送到该实体身边
* 无命令设置
* 示例：

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* 说明：将实体传送到指定位置
* 命令设置：
  * `{x}`：X 坐标
  * `{y}`：Y 坐标
  * `{z}`：Z 坐标
* 示例：

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
