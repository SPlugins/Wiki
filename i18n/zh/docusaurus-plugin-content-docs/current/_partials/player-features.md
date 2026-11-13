---
description: >-
  了解 ExecutableItems 激活器中 playerCommands 玩家命令、playerConditions
  玩家条件以及玩家占位符的用法，包括命令的执行方式与可用的 SCore 命令。
source_hash: 6c1515db5b50e18e
translated_at: '2026-11-13T18:09:31.952Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Commands 是一组由控制台运行的命令列表，当激活器满足所有条件和要求时执行。你可以在这里使用原版命令、SCore 命令以及其他插件的命令。

* 此命令列表中的所有命令行会先用 Ssomar Plugins 的占位符解析，然后再通过 PAPI 解析。
  * 建议查看[占位符列表](/tools-for-all-plugins-score/placeholders)，了解每个激活器可以使用哪些占位符。

* 信息：Player commands 是一组命令列表，激活器触发时，这些命令通常会作用于玩家。
  * 这意味着，如果其中包含 SCore 命令，例如 DAMAGE 5，伤害将应用于该 ExecutableItem 的使用者。
    * SCore 提供的自定义[玩家命令](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md)
  * 你也可以运行其他插件的命令或原版命令。这些命令将由控制台执行。
    * `minecraft:say Hey`
    * `money give %player% 500`
* 示例：

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* 信息：你可以在所有类型的激活器中使用这些条件
* [玩家条件](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player placeholders

当事件的主要触发者是玩家时，你可以在激活器配置（命令、条件等）中使用[玩家占位符](/tools-for-all-plugins-score/placeholders#player-placeholders)
