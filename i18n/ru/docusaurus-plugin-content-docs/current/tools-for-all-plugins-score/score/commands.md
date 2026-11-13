---
description: >-
  Справочник по командам SCore: очистка данных, кулдауны, Discord webhook, а
  также ручной запуск команд для игроков, блоков, сущностей и предметов.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T18:18:44.369Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Команды

## Очистка данных SCore

* Эта команда позволяет очистить большую часть активного содержимого SCore
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

* Команда для очистки конкретного кулдауна (для конкретного игрока / сущности)
* Команда: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Пример -> EI\:myitem\:myactivator
  * `[UUID]`: (Необязательно) UUID игрока / сущности

## Проверка циклов, полезно для отладки

* Команда: /score inspect-loop

Перезагрузка переменных, снарядов и конфигураций прочности SCore

* Команда: /score reload

## Discord webhook
Отправка сообщения в Discord через webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: URL вебхука
  * `{debug}`: сообщать ли исполнителю о том, что сообщение через webhook будет отправлено
  * `[allowed_mentions]`: может быть users\:id\[,id,...\], roles\:id\[,id,...\] или отсутствовать
  * `{message...}`: сообщение, которое будет отправлено через целевой webhook


## Команды частиц

Смотрите [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Команды переменных

Смотрите [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Ручной запуск команд SCore

### Команды игрока

* Информация: команда, которая позволяет как снаружи, так и изнутри плагинов Ssomar запускать кастомную команду SCore для конкретного игрока.
* При использовании этой команды вся командная строка обрабатывается через PlaceholdersAPI, поэтому вы можете добавлять в неё плейсхолдеры.

* Команда: /score run-player-command player:\{player\} \{command\}
  * `player`: Имя целевого игрока
  * `command`: команда игрока SCore, которая будет применена к \{player\}

* Примеры:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Команды блока

* Информация: команда, которая позволяет как снаружи, так и изнутри плагинов Ssomar запускать кастомную команду SCore для конкретного блока.

* Команда: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Игрок, который участвует в этом активаторе
    * Он необязателен, так как некоторым командам он нужен, например

                MOB_AROUND: Кто нанесёт урон? Команда наносит урон мобам вокруг, но урон будет засчитан как нанесённый \{player\}, поэтому проверяется, может ли игрок действительно нанести урон мобу, урон и убийства засчитываются ему и так далее.

                VEIN_BREAKER: Кто сломал блоки? Команда ломает блоки в форме жилы, но блоки будут засчитаны как сломанные \{player\}, поэтому проверяется, может ли игрок действительно сломать блок, сломанный блок засчитывается ему и так далее.

  * `block`
      * `world`: Мир, в котором находится блок
      * `x`: Координата X блока
      * `y`: Координата Y блока
      * `z`: Координата Z блока
  * `command`: Команда блока, которая будет выполнена для блока и, если он указан, игроком.
    * [Плейсхолдеры блока](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) в команде относятся к этому блоку.

* Примеры:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Команды сущности

* Информация: команда, которая позволяет как снаружи, так и изнутри плагинов Ssomar запускать кастомную команду SCore для конкретной сущности

* Команда: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Необязательно) имя или UUID участвующего игрока: тогда в команде можно использовать плейсхолдеры игрока (`%player%`, `%player_health%`...), например в `IF`.
  * `entityUUID`: UUID целевой сущности
  * `command`: Команда сущности, которая будет выполнена для сущности.
* Пример:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Команды предмета

* Информация: команда, которая позволяет как снаружи, так и изнутри плагинов Ssomar запускать кастомную [команду предмета](/tools-for-all-plugins-score/custom-commands/item-commands) для предмета в инвентаре игрока.

* Команда: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: имя или UUID игрока, у которого есть предмет
  * `slot`: слот предмета в инвентаре игрока: от `0` до `8` для хотбара, от `9` до `35` для остальной части инвентаря, от `36` до `39` для брони (от ботинок до шлема), `40` для второй руки
  * `command`: Команда предмета, которая будет выполнена для этого предмета. В ней можно использовать плейсхолдеры игрока.
  * Ничего не происходит, если игрок не в сети или если слот пуст.
* Примеры:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
