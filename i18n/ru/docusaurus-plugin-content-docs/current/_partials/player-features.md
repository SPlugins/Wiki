---
description: >-
  Описание команд и условий игрока в активаторах SPlugins: playerCommands,
  playerConditions и плейсхолдеры игрока.
source_hash: 6c1515db5b50e18e
translated_at: '2026-10-03T10:53:06.225Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Команды это список команд, которые выполняются из консоли, когда активатор соответствует всем условиям и требованиям. Здесь можно использовать ванильные команды, команды SCore и команды других плагинов.

* Все строки команд этого списка команд сначала парсятся как плейсхолдеры с плейсхолдерами из Ssomar Plugins, а затем парсятся через PAPI.
  * Рекомендуется проверить [список плейсхолдеров](/tools-for-all-plugins-score/placeholders), чтобы увидеть, какие плейсхолдеры можно использовать для каждого активатора.

* Информация: Player commands это список команд, которые обычно выполняются от имени игрока, когда срабатывает активатор.
  * Это означает, что если используется команда SCore, например: DAMAGE 5, урон будет применён к пользователю ExecutableItem.
    * Кастомные [команды игрока](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) доступны из SCore
  * Также можно выполнять команды других плагинов или ванильные команды. Эти команды будут выполнены консолью.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Пример:

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

* Информация: Эти условия можно использовать во всех типах активаторов
* [Условия игрока](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Плейсхолдеры игрока

Когда главным действующим лицом события является игрок, в конфигурации активатора (команды, условия и другое) можно использовать [плейсхолдеры игрока](/tools-for-all-plugins-score/placeholders#player-placeholders)
