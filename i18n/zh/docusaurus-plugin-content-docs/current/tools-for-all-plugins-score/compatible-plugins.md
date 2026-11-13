---
description: >-
  ExecutableItems 可搭配使用的兼容插件非详尽列表，涵盖
  MythicMobs、ItemsAdder、WorldGuard、PlaceholderAPI、Vault 等插件的联动方式。
source_hash: 4012882ccbdb916c
translated_at: '2026-11-13T18:03:22.257Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ 兼容插件

:::info
请注意，此列表仅包含严格意义上的兼容插件，几乎所有插件都与 Ssomar 插件兼容。如果你想运行另一个插件的命令，只需将目标名称替换为占位符即可。 \

例如：
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
以此类推，**每一个支持玩家名称的命令都与我们的插件“兼容”。**
:::

本节列出与 Ssomar 插件配合使用的兼容插件，我们的部分功能可以与其他插件联动。

* 开始之前你需要了解：兼容 ≠ 可用。几乎所有插件都可以与 Ssomar 插件一起使用，因为所有命令都由控制台运行。

### MythicMobs

#### 你可以通过以下方式让 MythicMobs 的生物掉落 Ssomar 插件的物品：

*   ExecutableItems：

    1. 手持 ExecutableItem 并执行 `/mm i import` ，这会将该物品导入 MythicMobs 的 items.yml 文件，之后你就可以把它添加到 MythicMobs 的 LootTable 中。
    2. 在生物的 \~onDeath 上执行技能，释放一个命令技能并添加下面这一行：

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks：
  * 思路相同，只是把 ExecutableItem 换成 ExecutableBlock，并且在技能的命令中使用 "eb" 代替 "ei"。

#### 你可以使用 [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) 功能，让 SsomarPlugins 的激活器只对特定的 MythicMobs 生效。

* 示例：创建一个 ExecutableItem，对指定列表中的 MythicMobs 造成更多伤害
* 示例：创建一个 ExecutableBlock，当特定的 MythicMob 走过该方块上方时对其造成伤害
* 示例：创建一个 ExecutableEvent，只对指定列表中的 MythicMobs 生效。

#### 你可以在激活器中使用以下命令召唤 MM 生物：

* 根据你所使用的激活器，可能需要更改占位符。
  * 示例：可能需要使用 %player\_world%、%target\_world% 或 %block\_world% 来代替 %world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐你可以将这个思路与 ExecutableBlocks 和 LOOP 激活器结合，创建自定义的 MythicMobs 刷怪器。

#### 通过 Ssomar 插件的功能运行 MythicMobs 技能

* 你可以在命令部分使用 `SUDOOP mm test cast <skill>` 来运行 MythicMobs 的技能。

#### 自定义 SCore 命令

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐可以使用 MythicMobs 制作类似 Hypixel Minecraft 服务器上的钓鱼系统。例如，设置不同钓竿的等级列表（全部由 ExecutableItems 处理），每个等级从低概率到高概率钓到更史诗的生物，并添加限制，使其只能在 "x" 坐标（或 WorldGuard 区域）的湖泊中钓到 MM 生物，等等。

### **LevelledMobs**

* ExecutableItems
  * 你可以使用以下资源让 LevelledMobs 的生物掉落 ExecutableItems：
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills（原 AureliumSkills）

* Ssomar 插件提供激活器的 [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) 功能，可将其作为激活器生效的要求。
* Aurelium Skills 命令
  * 你也可以在插件中使用 AureliumSkills 的命令，例如给予玩家法力、给予周围玩家法力（类似辅助角色）等。
* ExecutableItems
  * Aurelium Skills NBT
    * 你可以创建一个手持时增加最大法力值的 ExecutableItem：先创建一个物品，运行 `/sk modifier` 命令，然后手持该物品运行 `/ei create <id>`，这样 ExecutableItem 就带有该命令的 NBTTag，并拥有你所做的修改。

### ExecutableBlocks & ExecutableItems

* 这两个插件（ExecutableBlocks 和 ExecutableItems）可以相互关联。该关联由 EB 的 [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)功能建立。例如：
  * 放置 ExecutableItem 后，它会变成与之关联的 ExecutableBlock（默认情况下会丢失 ExecutableItem 的数据，并作为原版方块放置）
  * 破坏 ExecutableBlock 后，获得与之关联的 ExecutableItem。
  * ExecutableBlock 被放置后，在其被破坏并变回关联的 ExecutableItem 时，会保留相同的使用次数，反之亦然。
  * ExecutableBlock 被放置后，在其被破坏并变回关联的 ExecutableItem 时，会保留相同的变量值，反之亦然。

### ItemsAdder

* ExecutableItems
  * 你可以通过 [customModelData ](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14)功能或 [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel) 使用 ItemsAdder 创建的材质。
  *   你可以按照 ItemsAdder 的 Wiki 中关于关联的说明，将 ItemsAdder 的物品关联到 EI，方法是在 ItemsAdder 物品文件中添加下面这行代码。

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * 你可以创建使用 ItemsAdder 方块材质的 ExecutableBlock，这需要选择 ExecutableBlocks 的 [TYPE\_OF\_CREATION ](/executableblocks/configurations/block-configuration/block-features#creationtype)功能。
* 对于所有插件中与方块相关的激活器，都可以将 ItemsAdder 的特定方块选为 [detailedBlocks ](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  *   示例：

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * 只需使用 [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) 值或 [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel)，你就可以在 ExecutableItem 中使用 Nexo 的材质。

### PlaceholderAPI

* 这是创建物品时的主要支柱之一，你可以在我们插件的任何部分使用任意 PlaceholderAPI 占位符：
  * Lore
  * 命令部分
  * 消息（所有类型的消息，冷却消息、条件未满足消息、所需内容消息等）
  * 变量
  * 等等。

### ShopGui+

* 该插件支持在商店中出售带有特定 NBT Tags 的物品，因此支持出售 ExecutableItems 和 ExecutableBlocks。
* 该插件支持方块命令 [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)。

### ShopKeepers

* 该插件支持在商店中出售带有特定 NBT Tags 的物品，因此支持出售 ExecutableItems 和 ExecutableBlocks。

### Tradesplus

* 该插件支持在商店中出售带有特定 NBT Tags 的物品，因此支持出售 ExecutableItems 和 ExecutableBlocks。

### WorldGuard

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于区域内或区域外时生效，名为 [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not)，并且与该插件兼容。
* 所有 SCore 命令都受 WorldGuard 保护的限制
  * 这意味着，如果玩家没有在所选位置破坏方块的权限，BREAK（SCore 命令）就不会运行。
  * 请注意，此功能适用于 SCore 命令，而不是我们插件所运行的命令，这意味着在我们的插件中使用原版命令 "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" 会绕过任何限制。
* ExecutableBlocks
  * 你可以使用 [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb) 以详细的权重用特定的 ExecutableBlock 填充一个区域。
    * 例如，借助此功能，你可以制作一个全局循环，重置特定的矿场，就像 Minecraft 服务器中常见的 /warp mines 那样。

### HeadDB

* ExecutableItems
  * 你可以使用该插件，通过 [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) 为 ExecutableItem 的物品选择特定的玩家头颅。
* ExecutableBlocks
  * 你可以使用该插件，通过关联一个带有 [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) 的 ExecutableItem，并将 [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) 设为来自指定的 ExecutableItem，从而为 ExecutableBlock 的方块选择特定的玩家头颅。

### IridiumSkyblock

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的岛屿内时生效，名为 [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)，并且与该插件兼容。

### SuperiorSkyblock

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的岛屿内时生效，名为 [ifPlayerMustBeOnHisIsland ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland)，并且与该插件兼容。

### GriefPrevention

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的领地内时生效，名为 [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)，此外还有 [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)，两者都与该插件兼容。

### Lands

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的领地内时生效，名为 [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)，此外还有 [ifPlayerMustBeOnHisClaimOrWilderness ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness)，两者都与该插件兼容。
* ExecutableItems
  * 有一些专门针对该插件的激活器，分别是：
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的领地内时生效。该条件名为 [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)，并且与该插件兼容。

### Residence

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的领地内时生效。该条件名为 [ifPlayerMustBeOnHisClaim ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim)，并且与该插件兼容。

### PlotSquared

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的地块内时生效。该条件名为 [ifPlayerMustBeOnHisPlot ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot)，并且与该插件兼容。

### Towny

* 对于所有插件，都有一个条件可以让激活器仅在玩家位于自己的城镇内时生效。该条件名为 [ifPlayerMustBeOnHisTown ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown)，并且与该插件兼容。

### Advanced Enchantments

* ExecutableItems
  * 由于 Advanced Enchantments 插件的工作方式，它的附魔不会出现在附魔列表中，因此无法通过附魔功能添加：![](https://media.ssomar.com/m/docs-img-image-256.png)
  * 但是你可以使用 NBTAPI 插件，按照以下方式之一将它们的附魔添加到你的 ExecutableItems 上：
    * 第一种方式是先创建一个原版物品，然后在其上添加 AdvancedEnchantment，接着手持该物品执行 /ei create \<id>，输出的 ExecutableItem 会自动导入 Advanced Enchantments 的附魔。
    *   第二种方式是在 ExecutableItems 的配置文件中手动添加 NBT Tag。示例如下：

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * 完成以上所有步骤后，你必须在 lore 中手动添加该附魔，让玩家知道该物品带有此附魔。

### RoseLoots

* 所有与方块相关的命令（例如 [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube)、[FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube)、[BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break) 等）都支持该插件的自定义方块掉落物。

### MMOInventory

* ExecutableItems
  * 与进入和离开背包相关的激活器（例如 EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY 和 EI\_LEAVE\_THE\_PLAYER\_INVENTORY）由它们的方法触发。

### EnchantsSquared

* ExecutableItems
  * 该插件支持 EnchantsSquared 的附魔。

### ExcellentEnchants

* ExecutableItems
  * 该插件支持 ExcellentEnchants 的附魔

### MMOCore

* 激活器的 requiredMana 功能可以使用 MMOCore 的法力值，让你为激活器的生效设置法力要求。

### TAB

* 自定义命令 SETGLOW 与 TAB 兼容。你需要使用占位符 %score\_cmd-glow%

### BlocksToCommand

* 该插件允许你导入结构，并可通过 Ssomar 插件放置。

### Terra

* Terra 的自定义生物群系受生物群系条件 [ifInBiome ](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not)支持。这让你可以根据玩家所处的生物群系创建特定的激活器、效果或限制。

### EcoSkills

* 你可以使用占位符条件，在触发激活器之前检查玩家是否拥有特定的魔法值。
* 你可以使用命令来获取或移除魔法值。
* ExecutableItems
  * 可使用 [RequiredMagic ](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills)功能，代替使用占位符条件和命令来移除魔法值。

### FACTIONS UUID

* SCore 命令会在遵守玩家的 FactionsUUID 保护的前提下，安全地放置和移除方块。

### CMI

* [SELL\_CONTENT ](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content)命令支持 CMI 价格，可与 CMI 经济系统无缝集成，以正确的游戏内价值出售物品。

### JOBS REBORN

* JOBS\_MONEY\_BOOST 命令适用于该插件。

### VAULT

* ExecutableItems
  * [requiredMoney ](/executableitems/configurations/activator-configuration/activators-features#requiredmoney)功能可与 Vault 配合使用，让你为激活器的触发设置金钱要求。

### Citizen NPC

* ExecutableItems
  * 以下激活器适用于 Citizen NPC：
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* SILK\_SPAWNER 命令适用于 WildStacker 的刷怪笼。
