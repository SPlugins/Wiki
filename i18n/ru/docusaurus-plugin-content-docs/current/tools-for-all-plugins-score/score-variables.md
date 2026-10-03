---
description: >-
  Описание системы переменных SCore: типы, область действия, команды и
  плейсхолдеры для ExecutableItems и ExecutableBlocks.
source_hash: 6be0f8b64461a5b8
translated_at: '2026-10-03T10:52:10.857Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   Переменные SCore

## Переменные SCore

В SCore есть интеграция переменных, где вы можете хранить строки/числа в переменных глобально или для каждого игрока отдельно, они не интегрированы в EI или EB, но интегрированы как команды (поэтому их можно использовать в сочетании с EI / EB)

Они хранятся в `plugins/Score/variables`

### Типы переменных

| Тип        | Пояснение                           |
| ---------- | ------------------------------------ |
| **STRING** | Позволяет хранить текст              |
| **NUMBER** | Позволяет хранить число              |
| LIST       | Позволяет хранить несколько значений |

### Область действия переменной (For)

| Тип        | Пояснение                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Переменная, хранимая глобально, означает, что существует одно значение, и оно одинаково для всех                                                     |
| **PLAYER** | Переменная, хранимая для каждого игрока, означает, что значение независимо для каждого игрока. То есть значение у двух разных игроков может отличаться. |

### Типы изменения

| Тип              | Пояснение                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Вы задаёте статическое значение переменной                                                                                      |
| **MODIFICATION** | Вы изменяете переменную (полезно для INT переменных, чтобы добавить значение к целому числу или вычесть определённое значение) |
| **LIST-ADD**     | Специфично для LIST, добавляет новое значение в список                                                                          |
| **LIST-REMOVE**  | Специфично для LIST, удаляет значение из списка                                                                                 |

:::danger
ID переменных не могут содержать подчёркивания, точки или пробелы, но - можно
:::

## Инструменты переменных

* /score variables list
  * Отображает все существующие ID переменных
* /score variables info \{variable-id\} \[player]
  * Отображает значение конкретной переменной (опционально: для конкретного игрока)
* /score variables-create \{variable-id\}
  * Создаёт новую переменную с указанным id и открывает редактор в игре
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Позволяет создать новую переменную с помощью команды
* /score variables-delete \{variable-id\}
  * Удаляет переменную с указанным id
* /score variables
  * Открывает редактор переменных в игре
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Очищает значение переменной (опционально: для конкретного игрока)
  * Если вы замените \[player] на **all**, это очистит значение для всех игроков
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Позволяет вам изменить значение существующей переменной.
  * Примеры:
    * **Переменные GLOBAL**:
      * /score variables SET GLOBAL exemple1 100
        * Устанавливает значение 100 глобальной переменной exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Увеличивает глобальную переменную plop на +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Уменьшает глобальную переменную plop на -50
    * **Переменные PLAYER**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Устанавливает значение -20 переменной my-variable для игрока Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Уменьшает переменную игрока my-variable на -50 для Ssomar
    * **Специфичные примеры для типа LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Добавляет значения в список
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Чтобы указать место для добавления значения в список, используйте функцию index (0 - это первый элемент списка, поэтому TEXT3 будет добавлен в начало списка)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Удаляет последнее значение
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Удаляет конкретный индекс
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Удаляет конкретное значение

:::info
Variable-list также работает с переменными GLOBAL, но вам нужно заменить PLAYER на GLOBAL и убрать игрока из команды
:::

## Плейсхолдеры переменных

Для этого требуется [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Поскольку плейсхолдеры переменных SCore поддерживаются PlaceholderAPI, вы можете использовать переменные SCore так:

`%math_{score_variables_userLevel}*10%`
:::

#### Плейсхолдеры, специфичные для LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Возвращает значение по конкретному индексу списка
* %score\_variables\_\<variable-id>%
  * Возвращает все элементы списка
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Возвращает булево значение, показывающее, содержит ли список значение (true или false)
* %score\_variables-size\_\<variable-name>%
  * Возвращает размер списка

Что можно сделать с этой функцией, предмет создан Ssomar

<details>

<summary>Terminator<br /><br />Способность: <br />- ПРАВЫЙ КЛИК, чтобы выбрать сущности<br />- SHIFT+ПРАВЫЙ КЛИК, чтобы взорвать их<br /><br />Сначала вам нужно создать переменную, можно использовать эту команду:<br />/score variables-define myList LIST PLAYER<br /></summary>


```yaml
# Le nom ou nom d'affichage
name: '&6&l>> &7Terminator stick &6&l<<'
# La description de l'item
lore:
- '&7Select entites by right'
- '&7clicking on them !'
- '&eLimit: &63 entities'
- '&e'
- '&7Then shift + right click'
- '&7to make them explode !'
# Le matériau
material: STICK
usage: 1
usageLimit: -1
config_5: true
config_update: true
# Fonctionnalités de nourriture
foodFeatures:
  # La nutrition de la nourriture
  nutrition: 1
  # La saturation de la nourriture
  saturation: 1
  # La nourriture est-elle de la viande?
  isMeat: false
  # Le joueur peut-il toujours manger cette nourriture?
  canAlwaysEat: false
# Les fonctionnalités de masquage
# Masquer:
# Attributs, Enchantements, ...
hiders:
  # Masquer l'utilisation
  hideUsage: true
# Les activateurs / déclencheurs
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - SWING_MAIN_HAND
    - LAUNCH DEFAULT_INVISIBLE_ARROW_NO_GRAVITY_SPEED
  activator5:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SENDMESSAGE &7You &cunselected &7the entity: &e%entity_name%'
    - score variables list-remove player myList %player% value:%entity_uuid%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'true'
    detailedEntities: []
    entityCommands: []
  activator2:
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% JUMP 1
    - END_FOR for1
    - DELAYTICK 5
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% DAMAGE 100
    - END_FOR for1
    - execute at %player% run playsound minecraft:entity.ender_dragon.death master
      @a
    - score variables clear player myList %player%
    - SEND_MESSAGE &7You &cpulverized &7the selected entities &7but you can do many
      other things let's talk your imagination
    #
    playerConditions:
      ifSneaking: true
      # The message displayed
      # when the condition is not met
      ifSneakingMsg: ''
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '0'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&7To execute the ability you must to &cselect at least
          1 entity'
  activator1:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SEND_MESSAGE &7You &aselected &7the entity: &e%entity_name%'
    - score variables list-add player myList %entity_uuid% %player%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'false'
      plchCdt1:
        type: PLAYER_NUMBER
        comparator: INFERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '3'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&4&l>> &7&oYou can''t select more than 3 entities'
    detailedEntities: []
    entityCommands: []
  activator3:
    # Le nom ou nom d'affichage
    name: cancelProjectileSelection
    option: PROJECTILE_HIT_ENTITY
    # Annuler l'événement vanilla
    cancelEvent: true
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands: []
    detailedEntities: []
    entityCommands: []
```


</details>

## ExecutableItems (переменные предмета)

В ExecutableItems есть интеграция переменных, где вы можете хранить строки/числа/списки в переменных **внутри** предмета. С их помощью вы можете создавать множество механик в своих предметах.

:::info
Есть способы изменить переменную снаружи предмета, используя эти методы:\
\

#### Изменить переменную

* ЧЕРЕЗ КОНСОЛЬ
  * Команда: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* В ИГРЕ
  * Команда:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Чтобы проверить плейсхолдеры "внутренних переменных предмета" смотрите здесь

## ExecutableBlocks (переменные блока)

В ExecutableBlocks есть интеграция переменных, где вы можете хранить строки/числа/списки в переменных **внутри** блока. С их помощью вы можете создавать множество механик в своих блоках.

Чтобы проверить плейсхолдеры "внутренних переменных предмета/блока" смотрите здесь
