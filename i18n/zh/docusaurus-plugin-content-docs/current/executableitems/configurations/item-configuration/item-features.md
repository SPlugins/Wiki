---
description: >-
  ExecutableItems
  插件的物品功能完整列表，附带配置示例：详细了解如何配置物品的显示名称、Lore、耐久度、附魔、属性、CustomModelData、变量、冷却、Hiders
  以及各类物品类型专属功能，这些是创建自定义物品时首先要设置的内容。
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T18:01:55.614Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 物品功能

物品功能列表，这些是你在物品上首先需要设置的内容。

高级功能带有以下标签： <CustomTag type="premium" />

### 激活器

* 非常重要的功能，可让你为物品添加各种能力
* 此功能的专用 Wiki：[EI 激活器列表](../activator-configuration/list-of-the-activators.md) 和 [EI 激活器功能](/executableitems/configurations/activator-configuration/activators-features.md)


### 物品的材料（Material）

* 说明：ExecutableItem 所对应的 Minecraft 物品的材料
* 示例：如果我希望 ExecutableItem 的基础物品为 DIAMOND，那么配置如下

```yaml
material: DIAMOND
```

* 你可以在此链接查看材料列表信息：[材料列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* 如果你想将自定义头颅设置为物品的材料，请查看此链接：[头颅设置](/executableitems/configurations/item-configuration/item-features#head-settings)。

### 物品的名称或 DisplayName

* 说明：物品的显示名称，即可见的名称。
* 示例：如果我希望物品的显示名称是红色标题 "Epic Sword"，那么配置如下

```yaml
name: '&cEpic Sword'
```

* 如果你想在显示名称中使用 HEX 颜色，可以这样做：
  * 你需要前往一个可以帮助你选择颜色并获取十六进制颜色代码的网站。我们推荐 [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * 然后选择你喜欢的颜色，并记下/复制其十六进制颜色代码。[参考](https://imgur.com/a/tNWtA0a)
  * 获得该十六进制颜色代码后，你需要在开头加上 "#"，并将其放在你想要着色的文字之前。#\<HEX\_COLOR\_CODE>\<What you want to color>
  * 最后你会得到类似 **`#DB6725&lPractice`** 的内容，它将以你所选的颜色显示在[游戏中](https://imgur.com/a/7umxduF)。

### 物品的 Lore 或描述

* 说明：物品的 Lore 或描述
* 示例：

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* 你可以在 Lore 中使用占位符。请注意：如果你在插件之外使用占位符，之后又向 Lore 中添加了新的内容（例如自定义附魔、自定义文本），那么当其中一个占位符刷新时，所有在 Ssomar 插件之外添加的内容都会被删除。为避免这种情况，你需要不刷新 Lore，但这意味着占位符不会被更新。你需要选择自己更喜欢的方式。总结：Lore 中有额外内容 意味着 不刷新 意味着 Lore 中不能使用 EI 的自定义占位符。

:::info
要在 Lore 行之间留出空行，可以在配置文件中添加 ''。如果你使用自定义 GUI 在 Minecraft 内编辑 Lore，则需要改用 '\&f'。
:::

:::info
免费版 ExecutableItems 中有一行 "Made with ExecutableItems"：它无法被移除，这是物品数量上限从 25 提升到 500 这一更新的对应条件。
:::

### 发光效果（附魔光效）

* 说明：布尔值，用于选择是否让 ExecutableItem 拥有发光/附魔光效外观。
* 示例：

```yaml
glow: true
```

### 禁用附魔光效 <CustomTag type="version" version="1.20.5" />

* 说明：布尔值，即使物品已附魔，也强制其不显示发光效果。
* 示例：

```yaml
disableEnchantGlow : true
```

:::info
提示：你还可以移除某些原版物品（例如下界之星）的发光效果。
:::

### 在物品的 Lore 中显示条件

* 说明：允许你在物品的 Lore 中显示条件。
* 示例：

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### 物品的耐久度

* 说明：选择物品的耐久度数值。
  * 对于 1.20.5 及以下版本：耐久度数值必须小于或等于所选物品的原版最大耐久度。
  * 示例：
```yaml
durability: 150
```
  * 对于 1.20.5++ 版本：耐久度选项可以自定义，从而启用新功能，例如将 ExecutableItem 的使用次数与耐久度数值同步，并允许设置自定义最大耐久度。
  * 示例：
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### 物品的附魔

* 说明：设置 ExecutableItem 在被给予时拥有的初始附魔。
* 示例：

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### 不可破坏（Unbreakable）

* 说明：布尔值，用于选择 ExecutableItem 是否不可破坏。
* 示例：

```yaml
unbreakable: true
```

### 属性（Attributes） <CustomTag type="version" version="1.12" />

* 说明：你可以选择 ExecutableItem 的属性。
  * `attribute`：属性类型。列表见此：[属性列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`：Minecraft 分配属性修饰符所需的代码。你可以忽略它。
  * `name`：Attribute Modifier 的显示名称。便于你注明它的作用。它只影响在 GUI 中的显示，没有其他作用。
  * `operation`：AttributeModifier 执行的运算类型。列表见此：[运算](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`：AttributeModifier 的值，将使用所选运算应用到属性上。
  * `slot`：AttributeModifier 生效的槽位。
  * 示例：

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**如果你使用的是 1.12 版本，需要按以下步骤操作：**

* 此过程需要 EI 的高级版 <CustomTag type="premium" />
* 在网站上生成带有属性的物品。我们推荐 [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* 然后在 Minecraft 中将该物品给予自己
* 手持该物品时运行 /ei create \<id> 命令
* 完成！现在你的 EI 已自动导入这些属性。
:::

#### **保留默认属性**

* 说明：布尔值，用于选择是否保留物品的默认属性。
* 示例：

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
在 1.21+ 中，自身没有属性且没有这两行的物品会**失去其材料的默认属性**：剑的攻击力如同拳头，护甲不提供护甲值。ExecutableItems 会在每次加载后在控制台中列出这些物品。要一次性修复你的所有物品：`/ei util-set-keepdefaultattributes-all-ei true`。
:::

:::info 锻造台
使用 `keepDefaultAttributes: true` 时，在锻造台升级的物品（钻石升级为下界合金）会获得其新材料的默认属性（下界合金护甲、护甲韧性和击退抗性）。物品自身的属性会保留。
:::

* 此链接提供了关于属性及其功能的教程。

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* 说明：忽略保留默认属性的设置。适用于此表格说明中的第三种情况：
* 示例：

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### CustomModelData <CustomTag type="version" version="1.14" />

* 说明：
  * 对于 1.21.4 之前的 Minecraft 版本：整数，用于设置物品 customModelData 功能的值。适用于为物品创建不同的材质。
  * 自 Minecraft 1.21.4 起，你还可以添加文本和布尔值。
* 示例：

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* 教程：[https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### 物品稀有度功能 <CustomTag type="version" version="1.20.5" />

* 说明：稀有度是应用于物品和方块的原版统计属性，用来表示它们的价值和获取难易程度。它对游戏玩法没有任何影响。共有四个稀有度等级：Common、Uncommon、Rare 和 Epic。
  * `enableRarity`：布尔值，表示该功能是否启用
  * `rarity`：稀有度类型
* 示例：

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### 可装备功能 <CustomTag type="version" version="1.21.2" />

* 说明：本节配置可装备物品的行为。启用后，物品可以装备到指定槽位，并可选择触发音效。你还可以为已装备的物品指定自定义模型，定义穿戴者受伤时物品是否受损，并设置标志以允许或限制交换和丢弃。此外，你还可以限制哪些实体可以装备该物品。
  * `enable`：设为 true 以启用该物品的装备功能
  * `slot`：物品被装备到的装备槽位（例如 CHEST、HEAD、LEGS、FEET）
  * `enableSound`：布尔值，装备物品时是否播放音效
  * `sound`：装备时播放的音效
  * `equipModel`：（可选）已装备物品的自定义模型（例如 "mynamespace:mymodel"）
  * `cameraOverlay`：（可选）装备物品时的自定义镜头覆盖层
  * `damageableOnHurt`：布尔值，选择穿戴者受伤时物品是否损失耐久度
  * `dispensable`：布尔值，选择物品是否可以被处理掉（移除/丢弃）
  * `swappable`：布尔值，选择物品是否可以通过右键装备（会与该槽位上已穿戴的物品交换）
  * `allowedEntities`：允许装备此物品的实体列表
* 示例：

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### 可修复功能 <CustomTag type="version" version="1.21.2" />

* 说明：与 ExecutableItem 被修复时相关的功能。
  * `enable`：布尔值，选择该功能是否启用
  * `repairCost`：整数值，表示在铁砧上修复它的花费
* 示例：

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### 滑翔（Glider） <CustomTag type="version" version="1.21.2" />

* 说明：该功能允许你使用物品进行滑翔，就像使用原版物品 "elytra" 一样。
* 示例：

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* 说明：材质包中自定义物品模型的路径，格式为 \<mynamespace\:model\_id>，将指向 assets/\<mynamespace>/models/item/\<model\_id>。
* 示例：

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* 说明：材质包中自定义提示框模型的路径，格式为 \<mynamespace\:model\_id>，将指向 /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* 示例：

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### 与掉落物品相关的功能

在这里你将了解仅在物品掉落到地面时才可见的功能。

#### 掉落时发光

* 说明：物品掉落时具有发光效果
* 示例：

```yaml
dropFeatures:
  glowDrop: false
```

#### 掉落时的发光颜色

* 说明：如果物品启用了 glowEffect，则可以选择掉落时发光效果的颜色。
* 可用颜色：[颜色参考](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* 示例：

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### 物品掉落时的显示名称

* 说明：选择物品掉落时是否将显示名称作为悬浮文字显示。
* 示例：

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT 标签

* 说明：需要 Spigot 上提供的插件 [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/)。
此功能允许你在 ExecutableItem 中添加自定义 NBT 标签。
  * `type`：你要存储的值的类型，例如：
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND：示例见下方，取决于你的需求和想要添加的内容。
  * `key`：代表该 NBT 存储的字符串键
  * `value`：你要添加的 NBT 标签的值
* 示例：

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit 标签

* 说明：你可以向 ExecutableItem 添加 Bukkit 标签值。
* 示例：

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

在游戏中，它将显示在 PublicBukkitValues 中，如下所示

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

你也可以在 NBT 的值字段中写入 %rand% 占位符。仅适用于 STRING、INTEGER 和 DOUBLE 数据类型
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
在游戏内编辑器中同样适用
```
INTEGER::foo::%rand:1|2%
```  
  
你也可以根据需要将 NBT 保存到 PDC（Persistent Data Container）。
* 游戏内示例：`integer::take::0::true`
* 物品配置：
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Hiders 功能

* 说明：与隐藏 ExecutableItem 上通常显示的功能相关的设置。所有功能即使被隐藏，仍然可以正常运作。
  * `hideEnchantments`：布尔值，表示 ExecutableItem 上的附魔是否显示在 Lore 中。
  * `hideUnbreakable`：布尔值，表示不可破坏的描述是否显示在 Lore 中。
  * `hideAttributes`：布尔值，表示 ExecutableItem 的属性是否显示在 Lore 中。
  * `hidePotionEffects`：布尔值，表示 ExecutableItem 的药水效果是否显示在 Lore 中。在 1.20.5 及以上版本中请使用 hideAdditionalTooltip。
  *   hideAdditionalTooltip（仅适用于 1.20.5++）

      用于显示/隐藏药水效果、书本和烟花信息、地图提示框、旗帜图案以及附魔书附魔的设置。它取代了旧的 hidePotionEffects
  * `hideUsage`：布尔值，表示 ExecutableItem 插件中该物品自身的 Usage 自定义功能是否显示在 Lore 中。
    * 你可以在编辑 Lore 时添加 %usage% 占位符来手动显示 usage。
  * `hideDye`：布尔值，表示 ExecutableItem 的染色颜色（#\<color>）是否显示在 Lore 中。
  * `hideArmorTrim`：布尔值，表示 ExecutableItem 的盔甲纹饰是否显示在 Lore 中。
  * `hidePlacedOn`：布尔值，表示 ExecutableItem 的 NBT 标签 "Can be placed on: \[...]" 是否显示在 Lore 中。
  * `hideDestroys`：布尔值，表示 ExecutableItem 的 NBT 标签 "Can destroy: \[...]" 是否显示在 Lore 中。
  * `hideToolTip`：布尔值，表示是否隐藏提示框。（仅适用于 1.20.5++）
* 示例：

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Usage 功能

本节将说明什么是 usage 及其功能。

#### Usage

* 说明：Usage 是存储在 ExecutableItem 内的整数值，可通过激活器中的 usageModification 或命令来修改。但它不仅仅是一个存储的值，它被设计用来表示 ExecutableItem 的"自定义耐久系统"，也就是说，一旦 usage 降到 0，你的物品就会被删除。
* 示例：
  * Usage 为 1 并不表示物品有 1 点耐久度，正如前面所解释的，这是一个自定义耐久系统。只要 usage 没有降到 0，它就会一直存在。例如，如果你给物品添加了一个带有 usageModification 功能且值为 "-1" 的激活器，那么该激活器触发一次后，你的物品就会消失。
  * 沿着同样的思路，假设 usage 为 1，如果没有任何激活器改变物品的 usage，我们的物品将无限期地持续存在，直到某个命令或新添加到物品上的激活器将 usage 修改为小于或等于 0 的值，此时物品就会被删除。
    * ```yaml
      usage: 1
      ```
  * 如前所述，不要认为 usage 只是一个耐久系统，因为它也可以增加！例如，如果激活器的 usageModification 不是负值而是正值，那么每次触发该激活器时我们的 usage 就会增加 ^^
  * 现在，如果你希望物品的 usage 既不增加也不减少，也就是基本上不使用这个自定义值存储，可以将 usage 设为 -1。
    * ```yaml
      usage: -1
      ```

#### Usage 上限 <CustomTag type="premium" />

* 说明：整数值，限制 usage 可达到的上限。（值不能为 0）
* 示例：

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### 每日使用次数

* 说明：整数值，限制每天（现实时间）可以使用该物品的次数
* 示例：

```yaml
usePerDay: 200 # -1 to ignore it
```

### 食物功能 <CustomTag type="version" version="1.20.5" />

* 说明：此功能允许你自定义与 ExecutableItem 相关的食物设置
  * `nutrition`：整数值，表示物品被食用后会为玩家填充的"半格食物"数量
    * 便于理解：玩家的营养值最大为 20，在游戏中显示为 10 个饥饿图标，每个图标可拆分为 2 份。
  * `saturation`：整数值，表示物品被食用后玩家将获得的饱和度。
  * `isMeat`：布尔值，使物品被视为食物。这是强制应用的，也就是说，如果你将此值设为 true，任何物品，即使是无法被食用的物品，也将被视为食物，因此可被消耗。
  * `canAlwaysEat`：布尔值，表示即使玩家的饥饿条已满，物品是否也始终可以被食用。
*  示例：

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### 可消耗物品功能 <CustomTag type="version" version="1.21.4" />

* 说明：与可消耗物品相关的功能，允许你自定义可消耗选项，与食物功能较为接近。
  * `enable`：布尔值，表示启用或禁用可消耗功能
  * `animation`：食用/消耗 ExecutableItem 时播放的 ANIMATION\_TYPE
  * `sound`：物品被食用/消耗时播放的 SOUND
  * `hasConsumeParticles`：布尔值，表示物品被食用时是否掉落粒子
  * `consumeSeconds`：物品被食用/消耗所需的秒数。
* 示例：

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### 药水设置

在这里你可以自定义 ExecutableItem 的药水功能，前提是物品的材料为药水。

#### 药水颜色

* 说明：表示颜色的 MapInfo Color 整数。使用 [https://www.tydac.ch/color/](https://www.tydac.ch/color/) 这类页面来获取某个颜色对应的 MapInfo 值。
* 示例：

```yaml
potionFeatures:
  potionColor: 10265481
```

#### 药水类型

* 说明：你希望药水物品成为的药水类型。这只是视觉功能，不会影响药水的实际行为。列表见此：[药水类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* 示例：

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### 药水效果

* 说明：在这里你可以创建药水将拥有的药水效果
  * `potionEffectType`：所选的 PotionEffectType，列表见此：[药水效果](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient：布尔值，使药水成为环境型，让药水效果产生更多半透明的粒子。
  * `duration`：以 tick 为单位的整数值（20 tick = 1 秒），表示药水效果的持续时间。
  * `amplifier`：整数值，表示药水效果的等级/强度。Amplifier 0 表示 1 级，amplifier 1 表示 2 级，以此类推。
  * `hasParticles`：布尔值，启用或禁用在玩家周围显示效果粒子。
  * `hasIcon`：布尔值，启用或禁用在玩家屏幕右上角显示效果图标。
* 示例：

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### 盔甲颜色

* 说明：如果你的 ExecutableItem 是皮革盔甲的实例，那么在这里你可以选择 MapInfo Color 的值（可从此网站获取 [https://www.tydac.ch/color/](https://www.tydac.ch/color/)）来更改颜色。
  * <CustomTag type="version" version="1.21.3" /> 在 Paper 上，`armorColor` 也可用于其他盔甲部件（任意材料的头盔、胸甲、护腿、靴子、马铠和狼铠）以及 elytra。它会设置它们的原版 `dyed_color` 组件，自定义模型（Nexo、ItemsAdder...）使用该组件来着色：没有它，这类模型可能不可见。`/ei create` 会保留你手中物品的此颜色。
* 示例：

```yaml
armorColor: 7702341
```

### 头颅设置

在这里你可以选择头颅设置的配置，即来自玩家头颅值或来自数据库的自定义头颅。

#### 如果你没有头颅数据库插件 <CustomTag type="version" version="1.13" />

* 如果你想在 1.13++ 中添加自定义头颅而没有数据库插件，可以按以下步骤操作：
  * 将 ExecutableItem 的材料设置为 PLAYER\_HEAD
  * 访问自定义头颅页面，例如 [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   然后获取该头颅的 Value\

      
  * 现在复制该值并粘贴到 ExecutableItems 的 headValue 功能中
  * 示例：
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### 如果你有 Head Database 插件 <CustomTag type="version" version="1.12" />

* 如果你想在 1.12++ 中添加自定义头颅，并且你有 head databases 插件，可以按以下步骤操作：
  * 打开该插件的 GUI 并获取你想要的头颅的 ID
  * 然后将其粘贴到 head 功能中的 headDBID
  * 示例：
  * ```yaml
    headDBID: 44328
    ```
* 如果你没有该插件而又想要它，这里有相关链接。
  * 高级版：[Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * 免费版：[Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* 说明：字符串列表，包含你想要禁止或允许玩家使用 ExecutableItem 的世界名称。
* 示例：

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### 存储物品信息

* 说明：布尔值，表示是否在物品本身存储信息。目前它存储 "owner" 功能。因此，如果你想使用 %owner% 占位符或与 owner 相关的条件，就必须启用它。
* 示例：

```yaml
storeItemInfo: false
```

### 所有者功能

#### canBeUsedOnlyByTheOwner

* 说明：布尔值，表示物品是否只能由所有者使用。
  * 只有在启用存储物品信息、使物品拥有所有者时，此功能才有效。
* 示例：

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* 说明：布尔值，表示如果物品不是由所有者使用，则取消所有事件。这意味着，例如激活器为 PLAYER\_BREAK\_BLOCK 时，如果非所有者的人尝试使用此物品，他将无法破坏任何方块，因为所有事件都会被取消。
  * 只有在启用存储物品信息、使物品拥有所有者时，此功能才有效。
* 示例：

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* 说明：ExecutableItem 的激活器 ID 列表，这是一个黑名单，会使 canBeUsedOnlyByTheOwner 功能对其失效。也就是说，此处所有指向 ExecutableItem 激活器的激活器 ID，即使 canBeUsedOnlyByTheOwner 设为 true，也可以被所有人使用。
  * 只有在启用存储物品信息、使物品拥有所有者时，此功能才有效。
* 示例：

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* 说明：布尔值，表示如果玩家没有使用该物品的权限（ei.item.\<id>），则取消所有事件。这意味着，例如激活器为 PLAYER\_BREAK\_BLOCK 时，如果没有使用此物品权限的人尝试使用此物品，他将无法破坏任何方块，因为所有事件都会被取消。

```yaml
cancelEventIfNoPermission: true
```

### 死亡时保留物品

* 说明：布尔值，表示玩家死亡后是否保留该物品。
* 示例：

```yaml
keepItemOnDeath: true
```

:::info
它兼容 WorldGuard 的 keepInventory 功能和原版 keepInventory 游戏规则
:::

### 禁用堆叠 <CustomTag type="premium" />

* 说明：布尔值，表示是否阻止 ExecutableItem 被堆叠。将此功能设为 true 会使该物品的 customStackSize 为 1。
* 示例：

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* 说明：整数值，用于设置此物品的堆叠大小。它将覆盖当前的堆叠数量。
* 为了更好地理解：原版 diamond\_sword 的堆叠大小为 1，因为它无法堆叠，使用此功能可以增大该值。另一方面，dirt 的堆叠大小为 64，但使用此功能可以减小它，例如减小到 20。
* 示例：

```yaml
customStackSize: 32
```

### 变量设置

* 说明：变量是在 ExecutableItem 内存储信息的一种方式。它们可以用来追踪数量、存储位置，实际上你可以存储任何内容。它们有助于创建动态且可自定义的物品行为，也就是说，通过存储和追踪每个物品特有的数据，变量让你可以为每个物品创建独特的行为。例如，你可以追踪玩家使用某个物品的次数，或用它击杀了多少名玩家。
  * `variableName`：变量的名称，将通过 %var\_\<name>% 引用，用于 Lore、命令内等位置。此名称不能是 "id" 或 "usage"，也不能包含空格。
  * `type`：变量的 VariableType，可以是以下类型，并附有使用示例：
    * STRING：使用此变量类型可以存储 STRING 值，例如单词、数字、字母、字符等。例如，你可以存储最后一个被击中的玩家的名称。此类型的变量不支持 `variableModification(type:MODIFICATION)` 增加或减少值。它是静态的，除非被 `variableModification(type:SET)` 替换，后者会覆盖旧值。
    * NUMBER：使用此变量类型可以存储 FLOAT 值，例如数字。例如，如果你想存储破坏的方块数量、击杀数量，或追踪某件事发生前的秒数等。此类型的变量支持 `variableModification(type:MODIFICATION)` 和 `variableModification(type:SET)`。
    * LIST：这是一个存储 STRING 值的列表类型变量。适用于存储一系列内容，例如记录被点击的方块并将它们追加到此列表，或在此追加被击杀的玩家等。
  * `isRefreshableClean`：布尔值，启用 refresh clean。这允许添加自定义 Lore 行，并且在变量更新时不会被移除。建议将其设为 true。
  * `refreshTagDoNotEdit`：由插件自动生成。它帮助 `isRefreshableClean` 的功能正常工作。所以请不要改动它。
  * `papiParser`：字符串值，包含 PlaceholderAPI 字符串，其中包含用于解析的变量值。其用途是允许你将变量值插入 PlaceholderAPI 占位符中，并在 Lore 中显示结果。
    * 例如：
      * Variable ID: `level`
      * papiParser String Value: `%math_<VAR>*<VAR>%`
        * 字符串 `<VAR>` 表示解析时变量的当前值。如果你想把该值放在 PlaceholderAPI 占位符字符串的多个位置，只需在需要的地方输入 `<VAR>`。
      * 放入 Lore 的占位符字符串：`%var_level_papi%`
* 示例
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* 你可以在下一页查看更多关于其他类型变量的信息：
  * [SCore 变量](/tools-for-all-plugins-score/score-variables)

### 自定义首次加入给予功能

* 说明：在这里你可以自定义玩家首次加入服务器时给予物品的功能。
  * giveFirstJoin：布尔值，表示该功能是否启用
  * giveFirstJoinAmount：整数值，表示将给予玩家多少个此 ExecutableItem。
  * giveFirstJoinSlot：ExecutableItem 将被给予玩家的槽位。
* 示例：

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Item Recognition 功能 <CustomTag type="premium" />

* 说明：此功能可以让其他不是该 ExecutableItem 的物品被当作你正在编辑的 ExecutableItem。其基本思路是使用 recognitions，这是一个识别类型的列表，只要你的 ExecutableItem 与另一个物品（即使它不是 ExecutableItem）之间有其中一项匹配，ExecutableItem 所拥有的功能也会作用于另一个物品。只要按照识别要求能够识别出来，这就会生效。
  * 可用的识别选项：
    * NAME：对所有与 ExecutableItem 自定义名称匹配的物品启用识别
    * MATERIAL：对所有与 ExecutableItem 材料匹配的物品启用识别
    * LORE：对所有与 ExecutableItem 的 Lore 匹配的物品启用识别
* 例如，如果你创建了一个钻石镐 ExecutableItem，它有激活器 PLAYER\_RIGHT\_CLICK，命令为 "SEND\_MESSAGE I am a pickaxe"，那么每次右键都会向 Minecraft 聊天栏发送该消息。现在，如果你为材料启用物品识别，那么服务器上的所有钻石镐都会触发该激活器，因此都会显示该消息。
* 示例：

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* 示例场景：
  * 如果某个 EI 物品只有 `MATERIAL` 的物品识别且是 DIAMOND，服务器中存在的所有钻石都将表现为该 EI 物品
  * 如果某个 EI 物品只有 `NAME` 的物品识别且名称为 "\&dAngle"，那么你尝试使用任何名称为 "\&dAngle" 的物品时，它都将表现为原始的 EI 物品。但如果名称是 "\&eAngle" 或其他名称，则不会生效。
  * 如果某个 EI 物品只有 `LORE` 的物品识别，那么只有当物品的 Lore 行中的颜色代码以及每一处字母和字符的大小写都与其完全相同时，该物品才会表现为该 EI 物品。
  * 如果某个 EI 物品只有 `MATERIAL` 和 `NAME` 的物品识别，那么物品必须与该 EI 物品的名称和材料完全一致，才会被视为 EI 物品。
* 请记住，如果你的某个 ExecutableItem 在 MATERIAL 上启用了物品识别，那么就不应该再为另一个具有相同 MATERIAL 的 ExecutableItem 使用基于 MATERIAL 的物品识别。原因是如果有 2 个启用了 MATERIAL 识别的 ExecutableItem，并且都是 DIAMOND\_BLOCK，那么当有人触发 DIAMOND\_BLOCK 时，只有按字母顺序排在第一位的那个具有最高优先级。

## 使用冷却功能 <CustomTag type="version" version="1.21.2" />

* 说明：为物品添加原版风格使用冷却的功能，类似于末影珍珠或紫颂果的冷却。
  * `cooldownGroup`：字符串值，用于定义冷却组。具有相同冷却组的物品将共享同一个冷却。必须为小写并遵循 NamespacedKey 格式（例如 "mygroup" 或 "namespace:mygroup"）
  * `vanillaUseCooldown`：整数值，表示冷却持续时间（单位：秒）
* 示例：

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
此冷却不同于激活器的冷却系统。这是 Minecraft 原版冷却，会在冷却期间让物品在快捷栏中显示为"变灰"。
:::


## 取决于物品类型

### 容器功能

* 说明：如果方块是容器的实例（例如箱子和木桶），你可以在这里自定义容器功能。
  * `isLocked`：布尔值，表示容器是否被锁定
  * `lockedName`：字符串值，表示容器被锁定时的钥匙名称。这是 Minecraft 的功能，如果你有一个与 lockedName 同名的物品，就可以打开箱子，否则不能。
  * `containerContent`：放置时容器内的材料列表，格式为 slot:\<slot>;\<material>
* 示例：

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

说明：在这里你可以选择工具的规则。

#### 启用

* 说明：布尔值，用于选择是否启用 Tool Rules。
* 示例：

```yaml
toolRules:
  enable: true
```

#### 默认挖掘速度

* 说明：浮点值，用于设置 ExecutableItem 的默认挖掘速度。
* 示例：

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### 每次破坏方块的耐久损耗

* 说明：整数值，用于设置 ExecutableItem 破坏一个方块后将扣除的耐久度数值。
* 示例：

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### 特定工具规则

* 说明：为了实现工具自定义，你可以选择使用该 ExecutableItem 对特定方块的挖掘速度和是否掉落。
  * `miningSpeed`：浮点值，用于设置 ExecutableItem 对该工具规则所选方块的挖掘速度。
  * `correctForDrops`：布尔值，表示使用该 ExecutableItem 时方块是否会掉落。
  * `blocks`：应用该工具规则的方块列表。
* 示例：

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* 说明：当 ExecutableItem 是弩且被给予玩家时，允许其已装填弹射物的功能。
  * 材料的格式必须为 `minecraft:<id>`。目前支持原版物品。
* 示例：

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* 说明：当 ExecutableItem 是捆绑包且被给予玩家时，允许其已包含物品的功能。
  * 材料的格式必须为 `minecraft:<id>`。目前支持原版物品。
* 示例：

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### 烟花功能

* 说明：当 ExecutableItem 是烟花物品时，允许其拥有自定义烟花功能的功能。
* 示例：

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

对于颜色，你可以使用常规的[颜色名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)或 `RGB-<0-255>-<0-255>-<0-255>`

### 刷怪笼功能 <CustomTag type="version" version="1.20.5" />

* 说明：允许你使用 ExecutableItems 创建自定义刷怪笼的功能
* 设置：
  * `spawnCount`：定义每次生成时出现的实体数量
  * `spawnDelay`：定义放置刷怪笼后首次生成的延迟（单位为 tick，20 tick = 1 秒）
  * `spawnRange`：生成范围
  * `requiredPlayerRange`：定义玩家必须处于多大的最大距离内才能激活刷怪笼
  * `minSpawnDelay`：每次生成之间的最小延迟（单位为 tick，20 tick = 1 秒）
  * `minSpawnDelay`：每次生成之间的最大延迟（单位为 tick，20 tick = 1 秒）
  * `maxNearbyEntities`：刷怪笼周围的最大实体数量
  * `addSpawnerNbtToItem`：是否将刷怪笼组件标签添加到物品中（最好保持为 false）。为 false 时，插件只会在刷怪笼被放置时添加这些标签。
  * `potentialSpawns`：定义刷怪笼的 potentialSpawns 及其权重

:::tip
最好先在 [MCStaker](https://mcstacker.net/?cmd=give) 中创建你的刷怪笼，然后在游戏中将其给予自己，最后手持它并执行 /ei create。\
它会自动将刷怪笼功能导入到你的 ExecutableItems 中。
:::

* 示例：

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### 乐器功能 <CustomTag type="version" version="1.20.5" />

* 说明：允许你自定义物品的山羊角音效的功能。此功能仅适用于材料为 GOAT_HORN 的物品。
  * `enable`：布尔值，启用或禁用乐器功能
  * `instrument`：使用山羊角时播放的乐器音效。[乐器列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* 示例：

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### 武器功能 <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* 说明：允许你为物品配置武器专属战斗设置的功能。
  * `enable`：布尔值，启用或禁用武器功能
  * `disableBlockingTime`：整数值，表示目标被此武器击中后，其盾牌被禁用的时长（单位：秒）
  * `damagePerAttack`：整数值，表示此武器每次攻击所承受的耐久度损伤（默认值：5）
* 示例：

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### 格挡攻击功能 <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* 说明：允许你配置物品如何格挡攻击的功能，类似于盾牌。这让你可以使任何物品都具备格挡伤害的能力。
  * `enable`：布尔值，启用或禁用格挡攻击功能
  * `blockDelay`：整数值，表示物品使用后再次可以格挡之前的延迟（单位：秒）
  * `blockSound`：成功格挡攻击时播放的音效
  * `disableSound`：格挡被禁用时（在被压制之后）播放的音效
  * `disableCooldownScale`：Double 值（倍数），表示被压制后格挡禁用状态持续多久（默认值：1.0）
  * `damageReductions`：伤害减免配置列表，定义每种伤害类型减免多少伤害
  * `bypassedBy`：完全绕过此格挡的伤害类型
* 示例：

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### 伤害减免配置

每个伤害减免条目包含以下设置：
* `baseDamageBlocked`：阻挡的基础伤害量（固定减免）
* `factorDamageBlocked`：阻挡伤害的百分比（0.5 = 减免 50%）
* `horizontalBlockingAngle`：可以格挡攻击的角度（单位：度）（90 = 前方四分之一，180 = 前方半圈，360 = 所有方向）。必须大于 0。
* `damageTypes`：此减免所适用的伤害类型列表。可用类型请参见 [伤害类型](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)。

:::tip
你可以使用此功能，用不同的材料创建自定义"盾牌"。例如，你可以制作一本能格挡魔法伤害的书，或是一颗能格挡物理攻击的钻石！
:::
