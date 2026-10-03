---
description: >-
  Описание всех команд плагина SCore: очистка данных, кулдауны, вебхук Discord,
  выполнение команд для игроков, блоков и сущностей.
source_hash: 8dc4edcee2a45a0c
translated_at: '2026-10-03T10:52:42.769Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Команды

## Очистка данных SCore

* Эта команда позволяет очистить большую часть прогресса содержимого SCore
* Вы можете очистить:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (команды SCore, выполняемые с задержкой)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Команда: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Очистка кулдаунов

* Команда для очистки определённого кулдауна (для конкретного игрока / сущности)
* Команда: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Пример -> EI\:myitem\:myactivator
  * `[UUID]`: (Опционально) UUID игрока / сущности

## Проверка циклов, полезно для отладки

* Команда: /score inspect-loop

Перезагрузить конфигурации переменных, снарядов и прочности в SCore

* Команда: /score reload

## Вебхук Discord
Отправить сообщение в Discord через вебхук

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url для вебхука
  * `{debug}`: сообщать ли исполнителю о том, выполняется ли отправка сообщения через вебхук
  * `[allowed_mentions]`: может быть users\:id\[,id,...\] или roles\:id\[,id,...\] или ничего
  * `{message...}`: сообщение, которое будет отправлено целевым вебхуком


## Команды частиц

Смотрите [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Команды переменных

Смотрите [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Выполнение команд SCore вручную

### Команды для игрока

* Информация: команда, которая позволяет внешним и внутренним плагинам Ssomar выполнять кастомную команду SCore для конкретного игрока.
* При использовании этой команды вся строка команды проходит через PlaceholdersAPI, поэтому вы можете добавлять в неё плейсхолдеры.

* Команда: /score run-player-command player:\{player\} \{command\}
  * `player`: Имя целевого игрока
  * `command`: команда для игрока SCore, которая будет применена к \{player\}

* Примеры:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Команды для блока

* Информация: команда, которая позволяет внешним и внутренним плагинам Ssomar выполнять кастомную команду SCore для конкретного блока.

* Команда: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Игрок, который участвует в этом активаторе
    * Это опционально, поскольку некоторым командам он нужен, например

                MOB_AROUND: кто применит урон? Команда наносит урон мобам вокруг, но урон будет засчитан как нанесённый \{player\}, поэтому проверяется, может ли игрок реально нанести урон мобу, учитываются его урон, убийства и т.д.

                VEIN_BREAKER: кто сломал блоки? Команда ломает блоки группой (жилой), но блоки будут засчитаны как сломанные \{player\}, поэтому проверяется, может ли игрок реально сломать блок, учитывается количество сломанных им блоков и т.д.

  * `block`
      * `world`: Мир, в котором находится блок
      * `x`: Координата X блока
      * `y`: Координата Y блока
      * `z`: Координата Z блока
  * `command`: команда для блока, которая будет выполнена для блока и, если применимо, от имени игрока.

* Примеры:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Команды для сущности

* Информация: команда, которая позволяет внешним и внутренним плагинам Ssomar выполнять кастомную команду SCore для конкретной сущности

* Команда: /score run-entity-command entity:\{entityUUID\} \{command\}
  * `entityUUID`: UUID целевой сущности
  * `command`: команда для сущности, которая будет выполнена для этой сущности.
* Пример:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
