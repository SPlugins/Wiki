---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  ExecutableItems 激活器完整列表，介绍每个激活器的触发时机、专属功能（如
  TypeTarget、DetailedBlocks、实体命令）以及实用示例，帮助你配置条件、命令、冷却等自定义物品效果，并了解哪些激活器属于高级功能、需要哪些额外插件支持。
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T18:01:04.714Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 激活器列表

## ExecutableItems 的激活器

这里列出了所有可用的激活器，附带说明和一些示例。激活器可以让你执行自定义操作，它可以设置条件、运行命令、设置冷却等。

:::warning
如果某个激活器的 `option:` 不在此列表中（拼写错误、其他插件的激活器等），该激活器会被**禁用**：它永远不会运行，并且在加载物品时，控制台会显示错误，并给出最接近的选项名称。
:::

高级激活器带有标签：<CustomTag type="premium" />

Activator features 是某个激活器独有的功能。

### PLAYER\_ALL\_CLICK

* 说明：当玩家使用该物品左键或右键点击时触发的激活器。
  * 你无法区分左键和右键，如需区分，请使用不同的激活器，例如 PLAYER\_RIGHT\_CLICK 或 PLAYER\_LEFT\_CLICK。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * 如果 typeTarget: ONLY\_BLOCK，则以下功能可用。
    * [方块命令
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 示例：
  * Warping Stone：立即将玩家朝其面向的方向传送 5 格。冷却：10 秒。
  * Healing Totem：点击时为玩家恢复 4 颗心，并赋予 5 秒的生命恢复 I。
  * Thunder Rod：向 10 格范围内最近的敌人劈下一道闪电。
  * Gravity Boots：将玩家向空中弹起 3 格，并在 5 秒内免疫摔落伤害。
  * Explosive Rune：在玩家所在位置产生一次小型爆炸，击退附近的生物，但不会破坏地形。

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* 说明：当玩家右键点击床并进入床时触发的激活器。如果玩家没有进入床，则该激活器不会触发。它不会在玩家睡觉时触发，只会在进入床的动作发生时触发。
* 示例：
  * Void Sleep：进入床后，玩家会被传送到一个自定义建造的梦境维度中进行探索。
  * Lunar Shield：在床上睡觉时获得 5 分钟的伤害吸收 IV，提供临时额外生命值。
  * Nightmare Curse：玩家进入床时，在床上方生成一只敌对的幻翼，迫使玩家先战斗才能安稳入睡。
  * Dreamwalker’s Blessing：进入床后，玩家获得生命恢复 II，直到醒来（醒来的动作对应 PLAYER\_BED\_LEAVE 激活器）。

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* 说明：当玩家离开床时触发的激活器。注意！当玩家睡醒、天亮后离开床时，该激活器会触发，但玩家在睡眠中途离开床时同样会触发，它只对应离开床这个动作。
  * 如果你只想在玩家睡醒时激活，可以使用该激活器 + worldCondition -> ifWorldTime 来检查当前是否确实是白天。
* 示例：
  * Morning Boost：离开床后，玩家获得 60 秒的速度 II 和急迫 II，以精力充沛的状态开始新的一天。
  * Phantom's Warning：如果玩家在完全入睡之前离开床，附近会生成一只幻翼作为后果。
  * Dream Collector：醒来后，玩家会获得一本随机的附魔书，作为“梦境记忆”。
  * Energy Surge：离开床时，玩家的饥饿条会被完全恢复，模拟一夜好眠的效果。

### PLAYER\_BEFORE\_DEATH

* 说明：当玩家死亡时触发的激活器。该激活器与 PLAYER\_DEATH 激活器的区别在于，它会先一步触发，因此可以在玩家死亡之前将其救下。
  * 为了便于理解：原版的不死图腾就是由这个激活器触发来实现其效果的。
* 示例：
  * Soulbound Amulet：当玩家即将死亡时，会被传送到其出生点，保留 2 颗心，并获得临时的生命恢复 II。
  * Last Stand Shield：濒死时，玩家获得 5 秒的抗性提升 III 和伤害吸收，让他们有机会反击。
  * Phoenix Blessing：死亡即将发生时，玩家在火焰中爆炸，对敌人造成火焰伤害，并以一半生命值复活。
  * Undead Pact：如果玩家将要死亡，会改为以 3 颗心复活，但 10 秒内无法使用武器。

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* 说明：当玩家破坏方块时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 示例：
  * Ore Booster Pickaxe：破坏矿石方块时，有 20% 的几率使掉落物翻倍。
  * Nature’s Wrath Axe：破坏原木时，有 10% 的几率召唤一只敌对的树灵（自定义生物）。
  * Cursed Excavation：破坏石头时，有 5% 的几率生成蠹虫，或施加 5 秒的挖掘疲劳。
  * Explosive Demolition Hammer：破坏方块时，周围的方块也会被一并破坏，可实现 3x3 范围挖掘。

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* 说明：当玩家用盾牌格挡来自实体的攻击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* 示例：
  * Thorned Shield：格挡攻击时，攻击者受到 3 颗心的伤害。
  * Shockwave Defense：成功格挡攻击会击退 5 格范围内的所有附近敌人。
  * Energy Absorption：格挡攻击时，玩家恢复 1 颗心，并获得 3 秒的抗性提升 I。
  * Frozen Guard：如果攻击被格挡，攻击者会被冻结在原地（缓慢 IV）2 秒。
  * Blazing Counter：格挡攻击会使攻击者着火 4 秒。

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* 说明：当玩家用盾牌格挡来自其他玩家的攻击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* 示例：
  * Retribution Shield：格挡玩家的攻击时，攻击者会立即被缴械，武器掉落在地上。
  * Vampiric Guard：成功格挡攻击时，玩家会吸取攻击者的一部分生命值（恢复 2 颗心）。
  * Dimensional Rift：如果玩家的攻击被格挡，有 20% 的几率将其向随机方向传送到 10 格之外。
  * Adrenaline Block：格挡攻击时，玩家立即获得 5 秒的速度 II 和力量 I，以便快速反击。

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* 说明：当玩家放置方块时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 示例：
  * Living Roots：放置树苗时，有 10% 的几率使其立即长成一棵树。
  * Runic Inscription：放置石头方块时，有 5% 的几率将其变成符文石，释放粒子，并使附近的玩家获得 10 秒的急迫 I。
  * 放置 TNT 时，有很小的几率（5%）立即被点燃，造成一次意外的爆炸。

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* 说明：当玩家打破另一名玩家（通常称为目标）的盾牌时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* 示例：
  * Shatter Strike：打破玩家的盾牌时，攻击者获得 5 秒的力量 I，强化其下一次攻击。
  * 摧毁盾牌时，会在目标所在位置发生一次小型爆炸，将其击退 5 格。
  * 盾牌被击碎时，目标会受到 **5 秒**的**凋零 I**，缓慢消耗其生命值。
  * Dimensional Fracture：打破玩家的盾牌时，目标会被短暂传送到 5 格高的上空，使其迷失方向，然后再落回地面。

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* 说明：当玩家刷扫方块时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 示例：
  * Cursed Dust：如果玩家刷扫可疑的方块，有 10% 的几率在其周围爆发一团诅咒尘埃，使其暂时失明。
  * Buried Riches：刷扫方块时有很小的几率奖励玩家一个金粒或绿宝石，模拟发现失落的宝藏。
  * Temporal Echoes：刷扫文物方块时，玩家会听到来自过去的微弱低语，暗示附近隐藏着与背景故事相关的秘密。

### PLAYER\_BUCKET\_ENTITY

* 说明：当玩家使用桶捕获实体时触发的激活器。
  * 例如把鱼装进一桶水里。
  * 如果你想在“尝试”捕获无法被装进桶的实体时运行某些内容，该激活器不会运行，你应该使用 PLAYER\_CLICK\_ON\_ENTITY。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* 示例：
  * Instant Fillet：玩家不会把鱼装进桶里，而是立即在物品栏中获得生鱼，仿佛当场熟练地将其切片。
  * Essence Extraction：对美西螈使用桶时，玩家不会捕获它，而是获得一瓶“美西螈黏液”药水，提供 10 秒的生命恢复 I。

### PLAYER\_CHANGE\_WORLD

* 说明：当玩家切换到另一个世界时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
* 示例：
  * Dimensional Adaptation：玩家进入新世界时，会获得一个随机的临时增益（速度、力量或夜视，持续 30 秒），模拟身体适应新环境。
  * Weight of Realms：如果玩家进入下界或末地，会暂时获得 10 秒的缓慢 II，模拟重力的突然变化。
  * Forgotten Memories：切换世界时，有很小的几率（5%）让玩家丢失一件随机的物品栏物品，模拟“记忆”被遗忘。
  * Realmwalker’s Favor：进入新世界会获得一件与该维度主题相关的神秘战利品（例如，下界给予随机的金锭，末地给予末影珍珠，等等），仿佛是某种未知力量的馈赠。

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* 说明：当玩家点击实体和 Citizens NPC 时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* 示例：
  * Beast Tamer’s Bond：手持特殊物品（例如金苹果）点击狼、猫或马，使其获得 60 秒的临时速度 II 和生命恢复。
  * Hidden Pocket：手持金锭点击僵尸猪灵，有 5% 的几率立即获得一件随机的下界战利品，而无需进行交易。
  * Gourmet’s Choice：手持刀（自定义物品）点击牛、猪或鸡，立即获得更高品质的肉类掉落（例如熟牛排而不是生牛肉）。
  * Battle Focus：手持盾牌点击铁傀儡，使其获得 30 秒的临时抗性提升 II 和击退抗性，让它能承受更多伤害。
  * Final Tribute：手持骨块点击骷髅或凋灵骷髅，玩家会获得短暂的速度 II 提升，仿佛吸收了远古战士的能量。

### PLAYER\_CLICK\_ON\_PLAYER

* 说明：当玩家点击另一名玩家（通常称为目标）时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* 示例：
  * Shared Fortune：手持绿宝石块点击一名玩家，会将你的经验等级减半，并立即把损失的经验给予另一名玩家。
  * 手持治疗药水点击队友，会立即把你一半的生命值转移给对方，成为关键时刻的战术救命手段。
  * Tactical Mark：潜行时点击另一名玩家，会给其施加 10 秒的发光效果，让其在 PvP 战斗中对队友可见。
  * Oath of Protection：手持盾牌点击一名玩家，使其获得 30 秒的抗性提升 I，起到临时守护的效果。

### PLAYER\_CONNECTION <CustomTag type="premium" />

* 说明：当玩家登录服务器时触发的激活器。
* 示例：
  * Realm’s Welcome：登录时，玩家会获得 30 秒的临时速度 I 和急迫 I 提升，模拟进入世界时的一阵活力。
  * Echo of the Past：玩家在聊天中看到的第一条消息是一条自定义的“记忆”消息。
  * Daily Fortune：登录时，玩家会获得一个随机的轻微增益或减益，持续 10 分钟（例如幸运 I、速度 I 或缓慢 I），让每次游玩都略有不同。
  * Dimensional Echo：如果玩家从另一个世界（下界或末地）登录，会短暂体验到旋转的粒子效果，并听到几秒钟扭曲的环境音，然后才完全恢复稳定。

### PLAYER\_CONSUME

* 说明：当玩家成功食用/消耗某个物品时触发的激活器。\
  注意，它只对可食用的 Minecraft 物品，或通过 [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures) 转换为可食用物品的物品有效。

### PLAYER\_CONSUME\_THE\_EI

* 说明：当玩家成功食用/消耗 ExecutableItem 本身时触发的激活器。\
  注意，它只对可食用的 ExecutableItems，或通过 [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures) 转换为可食用物品的物品有效。

### PLAYER\_CUSTOM\_LAUNCH

* 说明：当玩家使用 SCore 命令发射弹射物时触发的激活器，例如：
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)（在该激活器中，实体就是弹射物）
  * [弹射物占位符](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)（用于对某些弹射物设置白名单/黑名单）

### PLAYER\_DEATH

* 说明：当玩家死亡时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* 说明：当玩家取消选中 ExecutableItem 时触发的激活器。
  * 当 ExecutableItem 在主手上，然后你切换了手持的物品时就会发生，也就是“取消选中”它。

### PLAYER\_DISABLE\_FLY

* 说明：当玩家停止飞行时触发的激活器。
  * 飞行动作指的是真正的飞行，不包括滑翔，也不包括因坠落而处于空中。

### PLAYER\_DISABLE\_GLIDE

* 说明：当玩家停止滑翔时触发的激活器。

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* 说明：当玩家停止潜行时触发的激活器。

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* 说明：当玩家停止疾跑时触发的激活器。

### PLAYER\_DISABLE\_SWIM

* 说明：当玩家停止游泳时触发的激活器（1.13 的游泳）
* 
### PLAYER\_DISCONNECT

* 说明：当玩家退出服务器时触发的激活器。

### PLAYER\_DISMOUNT

* 说明：当玩家下马/离开所骑乘的实体时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* 说明：当玩家丢弃物品时触发的激活器。

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* 说明：当玩家丢弃 ExecutableItem 时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* 说明：当玩家修改书与笔并点击完成或签名成书时触发的激活器。

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* 说明：当玩家因原版耐久度耗尽而损坏 ExecutableItem 时触发的激活器。

### PLAYER\_EMPTY\_BUCKET

* 说明：当玩家倒空 ExecutableItem 桶时触发的激活器。例如使方块含水或向炼药锅注入该液体时，同样会触发。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 该激活器被激活时，目标方块是水应该被放置的位置。利用这一信息，你可以使用 SETBLOCK 将水替换为其他内容。

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* 说明：当玩家**开始**飞行时触发的激活器。该激活器由“在拥有飞行权限的情况下双击空格键”这一动作触发。
  * 这意味着如果你已经在飞行，它不会触发，它是由“双击空格键”改变飞行状态的动作触发的。
* 示例：
  * Lightning Takeoff：启动飞行时，一道不造成伤害的小型闪电会击中玩家所在位置，以营造戏剧效果。
  * Aerial Boost：开始飞行时，玩家获得 5 秒的临时速度 III，模拟强力的升空。
  * Gale Force Wings：开始飞行时，一股强风会推开玩家周围的所有实体。

### PLAYER\_ENABLE\_GLIDE

* 说明：当玩家开始滑翔时触发的激活器。

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* 说明：当玩家开始潜行时触发的激活器。

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* 说明：当玩家开始疾跑时触发的激活器。

### PLAYER\_ENABLE\_SWIM

* 说明：当玩家开始游泳时触发的激活器（1.13 的游泳）

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* 说明：当你进入自己的领地或你被信任的领地时触发的激活器。
  * 支持的插件：
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* 说明：当你进入地块时触发的激活器。
  * 支持的插件：
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* 说明：当你穿戴/将护甲放入护甲栏时触发的激活器。
  * `detailedSlots` 可以将其限制为某一个护甲栏位：36 靴子，37 护腿，38 胸甲，39 头盔（护甲放入的栏位），此外 -1 表示它来自的手。
  * <CustomTag type="version" version="1.21.3" /> 带有 [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) 的物品会进入这些功能的 `slot` 所指定的栏位，即使那不是其材质对应的栏位：可装备在腿部的雕刻南瓜算作护腿（37）。使用右键时，只有当其 `swappable` 为 true 时才会穿戴。
  * 注意！插件 CMI 可能会因 cmi.inventoryhat 权限设为 true 而导致该激活器无法工作。如果你希望该激活器正常工作，请将该权限设为 false。
  * Fabric 附加模组可以绕过该激活器。

### PLAYER\_EXPERIENCE\_CHANGE

* 说明：当玩家的经验自然发生变化时触发的激活器。
  * 这意味着通过命令导致的经验变化不会触发该激活器。除非这些命令是生成经验球，因为那会使经验“自然”地发生变化。

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* 说明：当玩家使用骨粉给方块施肥时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* 说明：当玩家用水或岩浆装满桶时触发的激活器。
  * 注意！当 ExecutableItem 装满桶并变成 "water\_bucket" 或 "lava\_bucket" 时，它就不再是 ExecutableItem 了，而是变成了原版物品，且无法还原。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* 说明：当钓鱼竿的浮标在方块上时，玩家右键点击钓鱼竿所触发的激活器。
  * 浮标不在方块上时不会触发，如果你希望在空中触发，请使用激活器 [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* 当钓鱼竿的浮标钩住实体或 Citizens NPC 时，玩家右键点击钓鱼竿会激活。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* 说明：当钓鱼竿的浮标因钓鱼战利品系统在水中钓到物品时，玩家右键点击钓鱼竿所触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
`entityCommands` 所指向的实体是**钓到的物品**。使用实体命令 [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) 可以将钓获物变成原版物品或 ExecutableItem，请参阅指南 [自定义钓鱼战利品](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)。
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* 说明：当玩家什么也没钓到时触发的激活器，也就是浮标既不在方块上，也不在实体或玩家身上。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* 说明：当钓鱼竿的浮标钩住另一名玩家（通常称为目标）时，玩家右键点击钓鱼竿所触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* 说明：当玩家使用 CustomFishing 插件（前身为 Xiaomomi Fish）成功钓到东西时触发的激活器。该激活器要求你的服务器已安装 [CustomFishing 插件](https://modrinth.com/plugin/customfishing)。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* 可用的占位符：
  * `%result%` - 钓鱼结果（例如 SUCCESS、FAILURE 等）
  * `%fish_hook%` - 所使用鱼钩的名称
  * `%loot%` - 钓到的战利品的 ID
* 示例：
  * Custom Fishing Rewards：使用 CustomFishing 钓到稀有鱼类时，给予玩家额外的经验或特殊的货币奖励。
  * Lucky Catch：使用特定的钓竿成功钓鱼时，有几率获得来自 CustomFishing 插件的额外自定义战利品物品。
  * Fishing Skill Progression：追踪成功的捕获，并根据所钓鱼类的稀有度提升玩家的钓鱼技能等级。

:::info
该激活器只有在你安装了 **CustomFishing** 插件时才有效。它与 CustomFishing 的 FishingResultEvent 集成，以提供增强的钓鱼机制。
:::

### PLAYER\_HARVEST\_BLOCK

* 说明：当玩家收获方块时触发的激活器
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* 示例：
  * 右键点击甜浆果丛进行收获时，有 10% 的几率让浆果丛“反咬一口”，造成半颗心的伤害，但会给玩家 5 秒的力量 I，作为“嗜血”效果。
  * Bountiful Touch：收获作物时，有 15% 的几率立即以完全成熟的状态重新种下，实现持续耕种。
  * Mystic Bloom：收获花朵时，有 5% 的几率掉落一件蕴含自然能量的随机附魔物品。

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* 说明：当玩家攻击实体时触发的激活器。
  * 该激活器只在涉及伤害时才有效，也就是说，玩家确实击中了该实体。如果你希望在点击实体时生效，请使用 [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* 说明：当玩家攻击另一名玩家（通常称为目标）时触发的激活器。
  * 该激活器只在涉及伤害时才有效，也就是说，玩家确实击中了另一名玩家。如果你希望在点击玩家时生效，请使用 [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* 说明：当玩家按下某个按键时触发的激活器。（前进、后退、向左、向右、跳跃、疾跑、潜行）

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* 说明：当玩家因耗尽 ExecutableItem 的全部耐久度而使其损坏时触发的激活器。

### PLAYER\_JUMP <CustomTag type="premium" />

* 说明：当玩家跳跃时触发的激活器。
  * <CustomTag type="version" version="1.21.2" /> 即使玩家尝试在半空中跳跃，它也可能触发。

### PLAYER\_KICK

* 说明：当玩家被踢出时触发的激活器

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* 说明：当玩家击杀实体或 Citizens NPC 时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* 说明：当玩家击杀一名玩家（通常称为目标）时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* 说明：当玩家射出弹射物时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* 说明：当你离开自己的领地或你被信任的领地时触发的激活器
  * 支持的插件：
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* 说明：当你离开地块时触发的激活器。
  * 支持的插件：
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* 说明：当玩家使用该物品左键点击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * 如果 typeTarget: ONLY\_BLOCK，则以下功能可用。
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)：用于编写[方块命令](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* 说明：当玩家通过经验修补附魔修复 ExecutableItem 时触发的激活器。

### PLAYER\_OPEN\_INVENTORY

* 说明：当玩家打开物品栏，但**不是自己的物品栏**时触发的激活器。

:::info
目前无法检测玩家打开**自己的**物品栏，因为这只发生在客户端。

只有当有人强制玩家打开其物品栏，或玩家打开自定义、方块或商人物品栏时，才会触发该事件。
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* 说明：当玩家拾取 ExecutableItem 时触发的激活器。

### PLAYER\_PORTAL

* 说明：当玩家使用传送门时触发的激活器。

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* 说明：当玩家获得药水效果时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* 说明：当玩家被实体攻击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* 说明：当玩家被另一名玩家（通常称为目标）攻击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* 说明：当玩家受到攻击时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* 说明：当玩家自然恢复生命值时触发的激活器。

### PLAYER\_RESPAWN <CustomTag type="premium" />

* 说明：当玩家重生时触发的激活器。
  * 和平常一样，所有 ExecutableItem 激活器都要在玩家的物品栏中持有该物品时才会生效，因此如果玩家重生时物品栏中没有该物品，则该激活器不会触发。

### PLAYER\_RIGHT\_CLICK

* 说明：当玩家使用该物品右键点击时触发的激活器。
  * 由于 Spigot 的限制，该激活器只有在你手中持有物品（任意物品）时才会触发。
* 该激活器的自定义功能：
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)：用于指定点击的类型（ONLY\_AIR、ONLY\_BLOCK、NO\_TYPE\_TARGET）
  * 如果 typeTarget: ONLY\_BLOCK，则以下功能可用：
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)：用于编写[方块命令](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)：用于指定哪些类型的方块有效

### PLAYER\_RIPTIDE

* 说明：当玩家使用激流时触发的激活器。

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* 说明：当玩家在快捷栏中选中 ExecutableItem 时触发的激活器，也就是开始将其拿在主手上。

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* 说明：当玩家剪切实体时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* 说明：当玩家的盾牌被另一名玩家（通常称为目标）打破时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* 说明：当玩家的出生点被更改时触发的激活器。

### PLAYER\_SWAPHAND\_THE\_EI

* 说明：当玩家交换 ExecutableItem 的手持位置时触发的激活器。也就是主手与副手互换的快捷键，反之亦然。

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* 说明：当实体以玩家为目标时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* 说明：当玩家践踏作物时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* 说明：当玩家卸下 ExecutableItem 时触发的激活器。
  * `detailedSlots` 可以将其限制为某一个护甲栏位：36 靴子，37 护腿，38 胸甲，39 头盔（护甲取出的栏位）。
  * 注意！插件 CMI 可能会因 cmi.inventoryhat 权限设为 true 而导致该激活器无法工作。如果你希望该激活器正常工作，请将该权限设为 false。
  * Fabric 附加模组可以绕过该激活器。

### PLAYER\_WALK <CustomTag type="premium" />

* 说明：当玩家行走时触发的激活器。
  * 玩家每行走一个 tick，该激活器都会触发，因此对性能消耗非常大，请谨慎使用。你可以添加使用冷却功能来降低其影响。

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* 说明：当玩家输入命令时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* 说明：当玩家发射的弹射物进入水中时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* 说明：当玩家发射的弹射物击中方块时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [方块命令](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* 说明：当玩家发射的弹射物击中实体时触发的激活器。\
  注意，当弹射物击中玩家时它不会触发（对此请使用 PROJECTILE\_HIT\_PLAYER）。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [实体命令](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* 说明：当玩家发射的弹射物击中另一名玩家（通常称为目标）时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [目标命令](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* 说明：可以通过运行命令来执行，也可以按计划执行的激活器。
  * 该激活器适用于所有插件，因此在 [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 中进行了说明

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* 说明：当 ExecutableItem 被放在物品栏中的另一个物品上方时触发的激活器。

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* 说明：当某个物品被放在物品栏中的 ExecutableItem 上方时触发的激活器。

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* 说明：当 ExecutableItem 进入玩家的物品栏时触发的激活器。
  * 如果你使用的是另一个管理物品发放的插件，并且发放了 ExecutableItem 但该激活器没有运行，请前往其支持渠道，请他们调用该方法。
  * 物品栏内部的移动同样算数：副手交换（F 键）、数字键交换，以及在 Paper 服务器上的选取方块/选取物品（鼠标中键）。对于这些移动，EI\_LEAVE\_THE\_PLAYER\_INVENTORY 总是在该激活器之前运行。

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* 说明：当物品离开玩家的物品栏时触发的激活器。
  * 需要 ProtocolLib 才能让该激活器正常工作。

### INVENTORY\_CLICK <CustomTag type="premium" />

* 说明：当玩家在物品栏中点击该物品时触发的激活器。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* 说明：只要物品在玩家的物品栏中，就会重复触发的激活器。它基本上是一个循环，会每隔 \<delay> \<seconds/ticks> 运行一次命令，具体取决于该激活器的配置。
* 当 LOOP 的条件无效时，不会发送默认的错误消息（`You can't activate this item > invalid condition`）：因为玩家并没有主动激活任何东西。自定义消息（`{theCondition}Msg`）仍然会发送。
* 如果想在穿戴多件护甲时获得加成，请使用[套装](/executableitems/configurations/sets-configuration)而不是 LOOP。
* activatorFeatures：通常所有激活器共享相同的功能，但有些功能是某些激活器独有的，如果是这种情况，这些功能会列在这里。
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
