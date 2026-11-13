---
description: >-
  本页介绍 ExecutableItems 插件中常见的自定义物品创意与实现思路，例如限制区域内的能力、点燃攻击者的护甲、拉近玩家的物品、树木砍伐器、打开
  GUI 的物品、免疫摔落伤害的护甲、水下呼吸的护甲等，帮助你快速找到合适的创建方法和思路。
source_hash: 267b9196d0e24db3
translated_at: '2026-11-13T18:02:40.362Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 物品创意：如何创建……？

## 这个页面是什么？

* 本页以概括的方式说明大家常问的物品创意该如何实现。所以，如果你想创建某样东西，却不知道怎么做，可以先看看这里，也许你的问题就在其中，或者有类似的方法，你可以通过了解插件的工作方式来思考如何重现它 ^^

:::info
本页只告诉你如何实现某些效果，或者给你一个思路。如果你不知道某个条件、命令、占位符等是如何工作的，这里不是学习的地方，你可以在 Wiki 中查看相应的章节。这里只提供思路，不是教程。
:::

### 我希望我的 ExecutableItem 的某个能力在特定区域内不生效

* 在包含该“能力”的激活器中，进入 **playerConditions**，找到“**ifNotInRegion**”并按需使用，通过它你可以为区域设置**黑名单**。

### 我希望我的 ExecutableItem 的某个能力只在特定区域内生效

* 在包含该“能力”的激活器中，进入 **playerConditions**，找到“**ifInRegion**”并按需使用，通过它你可以为区域设置**白名单**。

### 我希望我的物品在使用前需要确认

* 只需在激活器中使用自定义 EI 条件，并启用“ifNeedPlayerConfirmation”

### 能点燃攻击你的敌人的护甲

* 创建激活器 **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER**，并在 **targetCommands** 中使用命令 BURN \<seconds>
* 如果想对实体实现同样的效果，做法相同，只需改用 **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
别忘了设置正确的 **detailedSlots**
:::

### 只在个人领地内生效的物品

* 在你需要的激活器中添加 **playerCondition ifPlayerMustBeOnHisClaim**

### 只在个人领地内生效，而不在无人认领的区域生效的物品

* 在你需要的激活器中创建一个占位符条件，格式如下
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention\_currentclaim\_ownername%
  * part2: Unclaimed

### 如何制作能把其他玩家拉向你的物品？

* 在你需要的激活器的命令中，使用命令 AROUND 并结合 CUSTOMDASH1，同时使用位置相关的玩家占位符。这样，当你右键点击时，CUSTOMDASH1 命令会把你周围（AROUND）的人冲刺到你的坐标，基本上就是把人拉过来。

### 如何创建树木砍伐器？

* 使用激活器 **PLAYER\_BREAK\_BLOCK**，并在 **blockCommands** 中使用命令 **VEINBREAKER**

### 我希望禁止玩家佩戴头颅

* 创建激活器 **PLAYER\_EQUIP\_THE\_EI** 并启用 **cancelEvent**

### 禁止点击时使用命名牌

* 创建激活器 PLAYER\_CLICK\_ON\_ENTITY -> detailedClick 设为 right，并启用 cancel event

### 我希望创建一件能提供更多加成的护甲……

* 如果你想为护甲、剑、镐等任何物品添加**生命值上限**、**速度**、**击退抗性**、**护甲值**等，就需要使用**属性**（attributes）。

### 如何在点击玩家时执行命令

* 只需使用激活器 PLAYER\_CLICK\_ON\_PLAYER，并在命令中添加你想要的任何内容

:::info
如果你想在击中（HIT）时执行命令，做法相同，只需改用 PLAYER\_HIT\_PLAYER 激活器
:::

### 禁用击退的物品

* 最好的方法是使用属性和 KNOCKBACK RESISTANCE，但如果你希望它在背包中的任何位置都生效，可以创建激活器 PLAYER\_RECEIVE\_HIT\_GLOBAL，并把玩家传送到自己所在的位置，类似这样
  * execute at %player% run tp %player% \~ \~ \~

### 我希望有一个能让周围所有人获得缓慢效果的物品

* 使用命令 AROUND，并通过 around 的占位符给予效果。更多信息请查看 Wiki 中的 AROUND 命令。

### 禁止使用染料给告示牌和狼项圈染色

* 对于告示牌（SIGN）：
  * 激活器：PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * 并启用 cancel event
* 对于狼项圈：
  * 激活器：PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * 并启用 cancel event

### 创建一只存在“x”秒后消失的狼

如果你想创建一只存在“x”秒的宠物狼，请添加以下内容：

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### 免疫岩浆和火焰伤害的护甲

* 创建激活器 PLAYER\_RECEIVE\_HIT\_GLOBAL，在 detailedDamage 中添加 LAVA、FIRE\_TICK 和 FIRE，然后在该激活器中启用 cancelEvent。
*   请确保选择了你所使用的护甲部位对应的正确 detailedSlot

    如果想禁用着火动画，最接近的做法是创建一个循环激活器并使用 REMOVEBURN 命令。

### 允许在水下呼吸的护甲

* 创建一个 LOOP 激活器，选择正确的 detailedSlot，并给予玩家 water\_breathing 效果。

### 禁止皮革染色护甲在炼药锅中被洗掉颜色

* 只需创建激活器 RIGHT\_CLICK，然后设置 typeTarget: ONLY\_BLOCK\_CLICK、detailedBlocks: CAULDRON，并启用 cancel event。

### 打开 GUI 的物品

* GUI 插件通常有一个用于指定玩家的位置，例如命令是 /opengui \<player>，那么在你的物品中就需要添加 /opengui %player%
  * 如果命令不同，直接修改即可，例如 /enchanttable %player%
* 如果你的插件没有这个功能，就不要添加玩家参数，而是使用 SUDOOP，例如：
  * SUDOOP opengui
  * SUDOOP enchanttable

### 阻止三叉戟被投掷

* 添加激活器 PLAYER\_LAUNCH\_PROJECTILE，并将 cancelEvent 设为 true

### 我希望我的护甲免疫摔落伤害

* 使用激活器 PLAYER\_RECEIVE\_HIT\_GLOBAL，并在 detailedDamage 中指定 FALL，然后启用 cancel event

### 禁止用玻璃瓶装水

* 使用 PLAYER\_RIGHT\_CLICK 并启用 cancel event

### 检测玩家是否钓到了另一名玩家

* 使用激活器 PROJECTILE\_HIT\_PLAYER、PLAYER\_FISH\_PLAYER、一个 LOOP 激活器和一个变量。（另外还需要一些激活器来防止出现问题）
  * 当钓竿（ROD）击中玩家时，PROJECTILE\_HIT\_PLAYER 会运行，因此把你的变量设为“%target%”
  * 只有当变量不等于“NO”时，循环激活器才会生效，你可以用该变量来指向被钓到的玩家。
  * 如果玩家钓到了目标（FISH），就把变量设为“NO”，这样它就会重置并停止运行
  * 用来防止问题的激活器是 PLAYER\_DROP\_THE\_EI 和 PLAYER\_DESELECT\_THE\_EI，在这两个激活器中重置变量，或者取消该事件。

### 在光标处召唤闪电

* 首先创建激活器 PLAYER\_ALL\_CLICK、PLAYER\_RIGHT\_CLICK 或 PLAYER\_LEFT\_CLICK
* 然后在命令中使用自定义命令 [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * 默认情况下它不会造成伤害，因此你还可以额外添加自定义命令 `DAMAGE <number>`

### 如何在每次触发激活器时将最大生命值提高“x”

* 要提高最大生命值，你需要 PlaceholderAPI 和 Player 扩展，使用的命令是：
  * execute run attribute %player% minecraft\:generic.max\_health base set %player\_max\_health%+2

### 如何在每次击中时恢复生命值

* 在与击中相关的激活器（例如 PLAYER\_HIT\_PLAYER 和 PLAYER\_HIT\_ENTITY）中，在 playerCommands 里使用 REGAIN\_HEALTH 命令，更多信息请查看“命令”章节中的该命令。
* 如果想恢复与你造成的伤害相同的生命值，请使用 EI 占位符 **%last\_damage**_**\_**_**dealt%**

### 弹射物击中方块时爆炸的弓

* 在你的物品上创建激活器 PROJECTILE\_HIT\_BLOCK，并在命令中可以使用
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * 在这一行之后，你还需要一行 execute run kill %projectile\_uuid%
  * 或者与上面相同，但改为召唤苦力怕

### 我希望禁用弓或弩的蓄力

* 目前使用 ExecutableItems 无法做到这一点，EI 唯一能做的是阻止弓或弩射出弹射物，但是蓄力？不行。

### 如何创建一件能禁用玩家冰冻效果的护甲（1.18）

* 你可以在循环中运行命令 FREEZE，就像这样：

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### 我希望只有当玩家在计分板上拥有特定数值时，激活器才生效

只需使用 PlaceholderAPI 的 Scoreboard 扩展，然后在激活器内的 placeholderCondition 部分使用它们的占位符 ^^
