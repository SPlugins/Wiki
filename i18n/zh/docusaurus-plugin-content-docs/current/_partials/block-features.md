---
description: >-
  本页介绍 ExecutableItems 中与方块相关的激活器功能：blockCommands、detailedBlocks、blockConditions
  以及方块占位符，支持原版、ItemsAdder 和 ExecutableBlocks 方块，并附配置示例。
source_hash: e670b85f3ec02fc8
translated_at: '2026-11-13T18:08:43.632Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### blockCommands 

Commands 是一组由控制台执行的命令列表，当激活器满足所有条件和要求时运行。你可以在这里使用原版命令、SCore 命令以及其他插件的命令。

* 这个命令列表中的所有命令行会先使用 Ssomar 插件的占位符进行解析，然后再通过 PAPI 解析。 
  * 建议查看 [占位符](/tools-for-all-plugins-score/placeholders)，了解每个激活器上可以使用哪些占位符。
* 命令中有三种实体目标类型：
  * Player：触发 ExecutableItem 上激活器的玩家/用户。
  * Target：激活器中被指定的玩家/敌人。
  * Entity：激活器中涉及的实体/生物/敌人。
* 激活器类别类型：PLAYER\_BLOCK
* 说明：激活器触发时，通常针对方块执行的命令列表。
  * 这意味着激活器必须涉及方块。例如 PLAYER\_HIT\_PLAYER 是一个激活器，但它不涉及方块，因此这里无法使用 blockCommands。而 PLAYER\_BLOCK\_BREAK 激活器涉及方块，因此这里可以使用 blockCommands。
  * 另一个例子：PLAYER\_RIGHT\_CLICK 有一个名为 typeTarget 的 activatorFeature，默认值为 ONLY\_AIR，由于该激活器不涉及方块，因此无法使用 blockCommands。但是 typeTarget 可以改为 ONLY\_BLOCK，这样该激活器就会有 blockCommands 作为可用功能，更多信息请见 -> \<IF I FORGOT PLS PING VAYK>
  * 你可以在这里查看 blockCommands 的列表 -> [方块命令](/tools-for-all-plugins-score/custom-commands/block-commands)
* 示例：

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* 需要注意的是，如果你的激活器同时涉及玩家，你也可以使用 playerCommands，例如：

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    playerCommands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### detailedBlocks

* 说明：你可以使用此功能，将方块类型作为条件，指定该激活器会在哪些方块上触发。
  * 你可以选择 Minecraft 原版方块，例如：
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> 你可以选择带有 NBT 的 Minecraft 原版方块（信息：[Block\_states](https://minecraft.fandom.com/wiki/Block_states)），例如： 
    * `FURNACE{lit:true}`
  * 你可以选择 ItemsAdder 的方块，例如：
    * "ITEMSADDER:\<id>"
  * 你可以选择 ExecutableBlocks 的方块，例如：
    * "EXECUTABLEBLOCKS:\<id>"
  * 你可以在开头添加 ! 将某些方块加入黑名单，例如：
    * "!DIRT"
  * 你可以添加方块标签，例如： 
    * "#MINECRAFT\:MINEABLE/PICKAXE"
  * 你可以添加方块组，例如：
    * "ALL\_ORES"

<details>

<summary>方块组列表</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
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
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* 示例：

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### blockConditions

* 说明：你可以在这里为涉及的方块设置条件。
* [方块条件](/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### 方块占位符

当事件的主要对象是方块时，你可以在激活器配置（命令、条件等）中使用[方块占位符](/tools-for-all-plugins-score/placeholders#-block-placeholders)。
