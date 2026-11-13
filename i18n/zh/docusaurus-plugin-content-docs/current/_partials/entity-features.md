---
description: >-
  了解 ExecutableItems 激活器中 entityCommands、detailedEntities 与 entityConditions
  的用法，包括实体目标命令、实体类型筛选和实体占位符。
source_hash: 54a0eb1b19c50558
translated_at: '2026-11-13T18:09:06.448Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands 是一组命令列表，当激活器满足所有条件和要求时，这些命令会由控制台执行。你可以在这里使用原版命令、SCore 命令以及其他插件的命令。

* 此命令列表中的所有命令行会先使用 Ssomar Plugins 的占位符进行解析，然后再通过 PAPI 解析。
  * 建议查看 [Placeholders](/tools-for-all-plugins-score/placeholders)，了解每个激活器可以使用哪些占位符。
* 命令中有三种实体目标类型
  * Player：在 ExecutableItem 上触发激活器的玩家/用户。
  * Target：激活器中被指定的玩家/敌人。
  * Entity：激活器中涉及的实体/生物/敌人。
* 激活器类别类型：PLAYER\_ENTITY
* 信息：激活器触发时，通常对该实体执行的命令列表。
  * 这里的实体指激活器中涉及的实体/生物/敌人。
  * 我们知道玩家也被视为实体，但激活器中涉及的实体仅指事件中涉及的生物/敌人。
  * 你可以在这里查看实体命令列表：[Entity commands](/tools-for-all-plugins-score/custom-commands/entity-commands)
* 示例：

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* 需要注意的是，如果你的激活器中同时还有玩家，你可以使用 playerCommands，例如：

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* 信息：对于涉及实体的激活器，你可以使用此功能，将激活器触发时的实体类型作为条件进行选择。
  * 你可以选择原版 Minecraft 实体（信息：[EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)），例如：
    * "ZOMBIE"
  * <CustomTag type="premium" /> 这需要 [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi)。你可以选择带有 NBT 的原版 Minecraft 生物（信息：[NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)），例如：
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * 你可以选择 MythicMob 生物，例如：
    * "MM-\<ID>"
  * 你可以使用 ! 将某个生物加入黑名单，例如：
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* 信息：此功能适用于涉及实体的激活器，你可以在这里为所涉及的实体设置条件。
* [Entity conditions](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

当事件的主体是实体时，你可以在激活器配置（命令、条件等）中使用 [the entity placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders)。
