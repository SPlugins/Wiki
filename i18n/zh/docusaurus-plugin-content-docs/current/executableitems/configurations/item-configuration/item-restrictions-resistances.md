---
description: >-
  了解 ExecutableItems 插件中的物品限制与抗性：如何通过 config.yml
  为所有物品添加全局限制，或为单个物品禁止丢弃、放置、合成、附魔、重命名、放入容器和铁砧等操作，从而自定义物品在特定情况下的行为，并查看每项限制的配置示例。
source_hash: bf6b77f864065099
translated_at: '2026-11-13T18:01:35.341Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 物品限制/抗性

在本页中，你将了解物品限制和一些抗性，它们可以让你自定义物品在某些情况下的行为。

## 全局限制

* 说明：如果你想把某个物品限制添加到你在插件中制作的所有物品上，可以把你想要的限制配置添加到插件的 config.yml 文件中。
* 示例：我想为所有已创建和将要创建的 ExecutableItems 添加禁止使用铁砧和砂轮的限制


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## 单独限制

在本节中，你将了解如何只为你当前正在编辑的 ExecutableItem 添加单独的限制。

### 取消物品的丢弃

* 说明：布尔值，用于阻止玩家丢弃该 ExecutableItem。
* 注意：当物品无法回到物品栏时（例如关闭物品栏时它还在光标上，并且所有栏位都已满），将允许丢弃，而不是删除该物品。
* 示例：

```yaml
restrictions:
  cancel-item-drop: true
```

### 取消将方块放置到地面上

* 说明：布尔值，当物品是方块实例时，用于阻止玩家将该 ExecutableItem 放置到地面上。
* 示例：

```yaml
restrictions:
  cancel-item-place: true
```

### 取消在工作台的任何配方中使用该物品

* 说明：布尔值，用于阻止玩家使用该 ExecutableItem 合成原版配方。
* 示例：

```yaml
restrictions:
  cancel-item-craft: true
```

### 仅取消在原版配方中使用该物品，不影响自定义配方

* 说明：布尔值，用于阻止玩家使用该 ExecutableItem 合成原版配方，但仍可用于自定义合成配方。
* 示例：

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### 取消装饰陶罐的交互

* 说明：布尔值，用于阻止玩家把 ExecutableItems 放入装饰陶罐中。
* 示例：

```yaml
restrictions:
  cancel-decorated-pot: true
```

### 取消将物品放到展示架上

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放到展示架上（Minecraft 1.21.9+，所有木材类型）。
  * 适用于会通过其激活器重新给予自身的物品（例如“无限”水桶）：如果没有此限制，放在展示架上的物品会留在那里，而激活器又会给出一个新的物品。
* 示例：

```yaml
restrictions:
  cancel-shelf: true
```

### 取消将物品存入存储容器

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入以下列表中的容器：
  * 箱子
  * 末影箱
  * 陷阱箱
  * 木桶
  * 潜影盒
* 示例：（此功能在创造模式下无效）

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### 取消将物品存入熔炉

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入以下列表中的方块：
  * 熔炉
  * 高炉
  * 烟熏炉
* 示例：（此功能在创造模式下无效）

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### 取消物品在火和岩浆中燃烧

* 说明：布尔值，用于阻止该 ExecutableItem 在火或岩浆中被烧毁。
* 示例：

```yaml
restrictions:
  cancel-item-burn: true
```

### 取消因仙人掌接触而删除物品

* 说明：布尔值，用于阻止该 ExecutableItem 在接触仙人掌方块时被删除。
* 示例：

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### 取消被闪电击中时删除物品

* 说明：布尔值，用于阻止该 ExecutableItem 在被闪电击中时被删除。
* 配置：`cancel-item-delete-by-lightning: true`
* 示例：

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### 取消物品附魔

* 说明：布尔值，用于阻止该物品被附魔。
* 示例：

```yaml
restrictions:
  cancel-enchant: true
```

### 取消将物品放入铁砧

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入铁砧。这样从根本上阻止了放入，因此也就阻止了重命名和附魔。
* 示例：

```yaml
restrictions:
  cancel-anvil: true
```

### 取消使用铁砧重命名

* 说明：布尔值，用于阻止玩家使用铁砧重命名该 ExecutableItem。
* 示例：

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
在铁砧中被修复或附魔但**没有被重命名**的物品，借助 [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil)（默认启用）会保留其彩色/渐变名称。该选项应放在 `plugins/ExecutableItems/config.yml` 中，而不是物品文件中。
:::

### 取消使用铁砧附魔

* 说明：布尔值，用于阻止玩家使用铁砧为该 ExecutableItem 附魔。
* 示例：

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### 取消物品与马/骡/羊驼的交互

* 说明：布尔值，用于阻止 ExecutableItems 与马/骡/羊驼进行交互。这也会禁用其存储功能。
* 示例：

```yaml
restrictions:
  cancel-horse: true
```

### 取消物品的消耗/食用

* 说明：布尔值，用于阻止玩家消耗或食用该 ExecutableItem。
* 示例：

```yaml
restrictions:
  cancel-consumption: true
```

### 取消在合成器方块中使用物品

* 说明：布尔值，用于阻止玩家把 ExecutableItems 放入合成器方块中。
* 配置：`cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### 物品栏锁定限制

* 说明：布尔值，使该 ExecutableItem 固定在其所在的栏位中，并阻止玩家以任何可能的方式移动它。
* 示例（此功能在创造模式下无效）

```yaml
restrictions:
  locked-in-inventory: true
```

### 取消工具交互

* 说明：布尔值，用于阻止玩家使用该 ExecutableItem 触发工具交互。例如（使用斧头右键方块来剥皮，使用锄头耕种草方块）
* 示例：

```yaml
restrictions:
  cancel-tool-interactions: true
```

### 取消将物品放入物品展示框

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入物品展示框。
* 示例：

```yaml
restrictions:
  cancel-item-frame: true
```

### 取消与锻造台的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入锻造台。
* 示例：

```yaml
restrictions:
  cancel-smithing-table: true
```

### 取消与砂轮的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入砂轮。
* 示例：

```yaml
restrictions:
  cancel-grind-stone: true
```

### 取消与切石机的交互

* 说明：布尔值，用于阻止玩家把 ExecutableItem 放入切石机。
* 示例：

```yaml
restrictions:
  cancel-stone-cutter: true
```

### 取消与酿造台的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入酿造台。
* 示例：

```yaml
restrictions:
  cancel-brewing: true
```

### 取消与信标的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入信标。
* 示例：

```yaml
restrictions:
  cancel-beacon: true
```

### 取消与制图台方块的交互

* 说明：阻止玩家把该 ExecutableItem 放入制图台方块。
* 示例：

```yaml
restrictions:
  cancel-cartography: true
```

### 取消与堆肥桶方块的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入堆肥桶。
* 示例：

```yaml
restrictions:
  cancel-composter: true
```

### 取消与发射器方块的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入发射器方块。
* 示例：

```yaml
restrictions:
  cancel-dispenser: true
```

### 取消与投掷器方块的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入投掷器方块。
* 示例：

```yaml
restrictions:
  cancel-dropper: true
```

### 取消与漏斗方块的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入漏斗。也就是说，不能把物品留在漏斗的容器中。这不会阻止物品通过丢落在漏斗上方而进入漏斗。
* 示例：

```yaml
restrictions:
  cancel-hopper: true
```

### 取消与讲台方块的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入讲台方块。
* 示例：

```yaml
restrictions:
  cancel-lectern: true
```

### 取消与村民交易/商人的交互

* 说明：布尔值，用于阻止玩家把该 ExecutableItem 放入村民/商人的交易中。
* 示例：

```yaml
restrictions:
  cancel-merchant: true
```

### 取消物品的手部交换

* 说明：布尔值，用于阻止玩家在两只手之间交换物品。通常是在键盘上按 F 键“与副手交换物品”。
* 示例：

```yaml
restrictions:
  cancel-swap-hand: true
```

### 取消号角的交互

* 说明：布尔值，当该 ExecutableItem 是号角时，用于阻止玩家吹奏号角。
* 示例：

```yaml
restrictions:
  cancel-horn: true
```

### 取消盔甲架

* 说明：阻止玩家把该 ExecutableItem 放到盔甲架上。
* 示例：

```yaml
restrictions:
  cancel-armorstand: true
```

### 取消刷怪笼

* 说明：阻止玩家以原版方式对刷怪笼使用该 ExecutableItem 刷怪蛋。
* 示例：

```yaml
restrictions:
  cancel-spawner: true
```

### 取消放入捆绑包

* 说明：阻止玩家把该 ExecutableItem 放入捆绑包。
* 示例：

```yaml
restrictions:
  cancel-place-in-bundle: true
```
