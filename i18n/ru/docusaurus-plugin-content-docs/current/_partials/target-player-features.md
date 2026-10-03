---
description: >-
  Описание targetCommands и targetConditions в активаторах ExecutableItems:
  команды, условия и плейсхолдеры для целевого игрока.
source_hash: 8f10e4518745e33e
translated_at: '2026-10-03T10:53:29.879Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Commands - это список команд, которые выполняются из консоли, когда активатор соответствует всем условиям и требованиям. Здесь можно использовать ванильные команды, команды SCore и команды других плагинов.

* Все строки команд в этом списке команд сначала обрабатываются через плейсхолдеры Ssomar Plugins, а затем через PAPI.
  * Рекомендуется проверить [Placeholders](/tools-for-all-plugins-score/placeholders), чтобы увидеть, какие плейсхолдеры можно использовать в каждом активаторе.
* Существует три типа целей сущностей в командах
  * Player: это игрок/пользователь, который запустил активатор на ExecutableItem
  * Target: это игрок, на которого направлен активатор/противник, участвующий в активаторе.
  * Entity: это сущность/моб/противник, участвующий в активаторе.
* Информация: Target commands - это список команд, которые обычно выполняются относительно цели при срабатывании активатора.
  * Это означает, что если используется команда SCore DAMAGE 5, и она находится в targetCommands, то урон будет применён к цели/противнику, участвующему в активаторе.
  * Выражение "обычно выполняются относительно игрока" используется потому, что это работает для команд SCore. Помните, что вы можете использовать команды других плагинов или ванильные команды, поэтому если вы добавите "effect give %player% strength 5 5", даже находясь в targetCommands, обработка плейсхолдеров применит кулдаун к %player%. Если вы хотите применить эту команду к цели, используйте %target%. Больше информации в [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Список targetCommands можно посмотреть здесь -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Пример:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Важно понимать, что если у вашего активатора также есть игрок, вы можете использовать playerCommands, чтобы, например, получить следующее:

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

* Тип категории активатора: PLAYER\_TARGET
* Информация: функция для активаторов, которые включают цель игрока, здесь вы можете настроить условия для целевого игрока, участвующего в активаторе.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Плейсхолдеры целевого игрока

Когда вторым участником события является игрок, вы можете использовать в конфигурации активатора (команды, условия и прочее) [плейсхолдеры целевого игрока](/tools-for-all-plugins-score/placeholders#-player-placeholders)
