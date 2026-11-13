---
description: >-
  本页介绍 ExecutableItems 中涉及玩家目标的激活器配置：如何使用 targetCommands 对目标执行命令，如何设置
  targetConditions 条件，以及在命令和条件中使用目标玩家占位符的方法，并附带命令示例和使用时需要注意的要点。
source_hash: 8f10e4518745e33e
translated_at: '2026-11-13T18:10:00.368Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

命令是一个命令列表，当激活器满足所有条件和要求时，会从控制台执行这些命令。你可以在这里使用原版命令、SCore 命令以及其他插件的命令。

* 此命令列表中的所有命令行，会先使用 Ssomar Plugins 的占位符进行解析，然后再通过 PAPI 解析。
  * 建议查看 [占位符](/tools-for-all-plugins-score/placeholders)，了解每种激活器上可以使用哪些占位符。
* 命令中有三种类型的实体目标：
  * Player：在 ExecutableItem 上触发激活器的玩家/用户。
  * Target：激活器中涉及的被目标玩家/敌人。
  * Entity：激活器中涉及的实体/生物/敌人。
* 信息：Target commands 是一个命令列表，激活器触发时，这些命令通常会作用于目标。
  * 这意味着，如果其中有一条 SCore 命令 DAMAGE 5，并且它位于 targetCommands 中，那么伤害将作用于激活器中涉及的目标/敌人。
  * 之所以说"通常作用于玩家"，是因为这一点适用于 SCore 命令。请记住，你也可以使用其他插件的命令或原版命令，所以即使你添加的 "effect give %player% strength 5 5" 位于 targetCommands 中，占位符的解析仍会把冷却应用到 %player%。如果你希望该命令作用于目标，请使用 %target%。更多信息请参阅 [占位符](/tools-for-all-plugins-score/placeholders)。
  * 你可以在这里查看 targetCommands 的列表 -> [玩家与目标命令](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* 需要注意的是，如果你的激活器同时包含玩家，你也可以使用 playerCommands，例如：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* 激活器类别类型：PLAYER\_TARGET
* 信息：这是用于涉及玩家目标的激活器的功能，你可以在这里为所涉及的玩家目标设置条件。
* [目标条件](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### 目标玩家占位符

当事件的第二个参与者是玩家时，你可以在激活器配置（命令、条件等）中使用 [目标玩家占位符](/tools-for-all-plugins-score/placeholders#-player-placeholders)。
