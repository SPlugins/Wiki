---
description: >-
  本页介绍 SCore 插件的变量功能：如何以全局或按玩家方式存储字符串、数字和列表，变量类型、修改方式、相关命令、使用示例、PlaceholderAPI
  占位符，以及在 ExecutableItems 与 ExecutableBlocks 中的用法。
source_hash: 03903712f9f8f788
translated_at: '2026-11-13T18:07:49.238Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## SCore variables

Score 集成了变量功能，你可以将字符串或数字以全局方式或按玩家方式存储在变量中。它们没有集成到 EI 或 EB 中，但已集成为命令（因此可以与 EI / EB 结合使用）。

它们存储在 `plugins/Score/variables`

### 变量类型

| 类型       | 说明                 |
| ---------- | -------------------- |
| **STRING** | 用于存储文本         |
| **NUMBER** | 用于存储数字         |
| LIST       | 用于存储多个值       |

### 变量作用域（For）

| 类型       | 说明                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------- |
| **GLOBAL** | 以全局方式存储的变量，意味着只有一个值，并且对所有人都相同                               |
| **PLAYER** | 为每个玩家单独存储的变量，意味着每个玩家的值相互独立，因此两个不同玩家的值可以不一样。   |

### 修改类型

| 类型             | 说明                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| **SET**          | 为变量设置一个固定值                                                                 |
| **MODIFICATION** | 修改变量（适用于 INT 变量，可以在整数值上增加或减去一定的值）                        |
| **LIST-ADD**     | 仅适用于 LIST，向列表中添加一个新值                                                  |
| **LIST-REMOVE**  | 仅适用于 LIST，从列表中移除一个值                                                    |

:::danger
变量的 ID 不能包含下划线、点或空格，但可以使用 -
:::

## 变量工具

* /score variables list
  * 显示所有已存在的变量 ID
* /score variables info \{variable-id\} \[player]
  * 显示指定变量的值（可选：针对指定玩家）
* /score variables-create \{variable-id\}
  * 使用指定的 ID 创建一个新变量，并打开游戏内编辑器
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * 允许使用命令创建新变量
* /score variables-delete \{variable-id\}
  * 删除指定 ID 的变量
* /score variables
  * 打开变量的游戏内编辑器
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * 清除变量的值（可选：针对指定玩家）
  * 如果将 \[player] 替换为 **all,**，则会清除所有玩家的值
* /score variables set-default \{variable-id\} \{value\}
  * 更改变量的默认值（一个单词，不能有空格）。它会保存在变量文件中，因此重载后依然有效
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * 允许你修改现有变量的值。
  * 示例：
    * **GLOBAL 变量**：
      * /score variables SET GLOBAL exemple1 100
        * 将全局变量 exemple1 的值设置为 100
      * /score variables MODIFICATION GLOBAL plop 100
        * 将全局变量 plop 增加 100
      * /score variables MODIFICATION GLOBAL plop -50
        * 将全局变量 plop 减少 50
    * **PLAYER 变量**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * 为玩家 Ssomar 将变量 my-variable 的值设置为 -20
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * 为 Ssomar 将玩家变量 my-variable 减少 50
    * **LIST 类型的专用示例**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * 向列表中添加值
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * 若要指定值在列表中的添加位置，请使用 index 功能（0 是列表的第一个元素，因此 TEXT3 将被添加到列表的开头）
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * 移除最后一个值
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * 移除指定索引处的值
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * 移除指定的值

:::info
Variable-list 同样适用于 GLOBAL 变量，但你需要将 PLAYER 改为 GLOBAL，并在命令中去掉玩家
:::

## 变量占位符

这需要 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)。

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
由于 PlaceholderAPI 支持 SCore 变量占位符，你可以这样使用 SCore 变量：

`%math_{score_variables_userLevel}*10%`
:::

#### LIST 专用占位符

* %score\_variables\_\<variable-id>\_\<index>%
  * 返回列表中指定索引处的值
  * 索引可以来自另一个写在括号中的占位符，它会被优先解析：`%score_variables_myList_{score_variables_myIndex_int}%`
* %score\_variables\_\<variable-id>%
  * 返回列表中的所有元素
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * 返回一个布尔值，用于判断列表是否包含某个值（true 或 false）
* %score\_variables-size\_\<variable-name>%
  * 返回列表的大小

使用此功能可以实现的效果 -> 由 Ssomar 创建的物品

<details>

<summary>Terminator<br /><br />Ability : <br />- RIGHT CLICK to select entities<br />- SHIFT+RIGHT CLICK to explode them<br /><br />你需要先创建该变量，可以使用以下命令：<br />/score variables-define myList LIST PLAYER<br /></summary>


```yaml
# Le nom ou nom d'affichage
name: '&6&l>> &7Terminator stick &6&l<<'
# La description de l'item
lore:
- '&7Select entites by right'
- '&7clicking on them !'
- '&eLimit: &63 entities'
- '&e'
- '&7Then shift + right click'
- '&7to make them explode !'
# Le matériau
material: STICK
usage: 1
usageLimit: -1
config_5: true
config_update: true
# Fonctionnalités de nourriture
foodFeatures:
  # La nutrition de la nourriture
  nutrition: 1
  # La saturation de la nourriture
  saturation: 1
  # La nourriture est-elle de la viande?
  isMeat: false
  # Le joueur peut-il toujours manger cette nourriture?
  canAlwaysEat: false
# Les fonctionnalités de masquage
# Masquer:
# Attributs, Enchantements, ...
hiders:
  # Masquer l'utilisation
  hideUsage: true
# Les activateurs / déclencheurs
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - SWING_MAIN_HAND
    - LAUNCH DEFAULT_INVISIBLE_ARROW_NO_GRAVITY_SPEED
  activator5:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SENDMESSAGE &7You &cunselected &7the entity: &e%entity_name%'
    - score variables list-remove player myList %player% value:%entity_uuid%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'true'
    detailedEntities: []
    entityCommands: []
  activator2:
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% JUMP 1
    - END_FOR for1
    - DELAYTICK 5
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% DAMAGE 100
    - END_FOR for1
    - execute at %player% run playsound minecraft:entity.ender_dragon.death master
      @a
    - score variables clear player myList %player%
    - SEND_MESSAGE &7You &cpulverized &7the selected entities &7but you can do many
      other things let's talk your imagination
    #
    playerConditions:
      ifSneaking: true
      # The message displayed
      # when the condition is not met
      ifSneakingMsg: ''
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '0'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&7To execute the ability you must to &cselect at least
          1 entity'
  activator1:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SEND_MESSAGE &7You &aselected &7the entity: &e%entity_name%'
    - score variables list-add player myList %entity_uuid% %player%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'false'
      plchCdt1:
        type: PLAYER_NUMBER
        comparator: INFERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '3'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&4&l>> &7&oYou can''t select more than 3 entities'
    detailedEntities: []
    entityCommands: []
  activator3:
    # Le nom ou nom d'affichage
    name: cancelProjectileSelection
    option: PROJECTILE_HIT_ENTITY
    # Annuler l'événement vanilla
    cancelEvent: true
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands: []
    detailedEntities: []
    entityCommands: []
```


</details>

## ExecutableItems（物品变量）

ExecutableItems 集成了变量功能，你可以将字符串、数字或列表存储在物品**内部**的变量中。借助它们，你可以为物品创建多种机制。

:::info
还可以使用以下方法在物品外部更改变量：\
\

#### 修改变量

* 通过控制台
  * 命令：
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* 在游戏内
  * 命令：
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

要查看“Internal item variables”的占位符，请在这里查看。

## ExecutableBlocks（方块变量）

ExecutableBlocks 集成了变量功能，你可以将字符串、数字或列表存储在方块**内部**的变量中。借助它们，你可以为方块创建多种机制。

要查看“Internal item/block variables”的占位符，请在这里查看。
