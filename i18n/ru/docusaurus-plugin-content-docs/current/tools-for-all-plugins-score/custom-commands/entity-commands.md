---
description: >-
  Справочник команд для сущностей (мобов) в плагине ExecutableItems:
  совместимость с ванильными командами и кастомные команды.
source_hash: 513c7df4b594137b
translated_at: '2026-10-03T10:35:37.352Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Команды для сущностей

:::tip
Совместимость "мульти-мир" для ванильных команд.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Например, вы хотите призвать Zombie в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Команды для сущностей поддерживают NPC из Citizens
:::

## Смешанные команды

В дополнение к следующему списку команд вы также можете использовать:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Эти команды можно использовать как в командах, связанных с игроком, так и в командах, связанных с сущностями.

## Кастомные команды

_Отсортировано по алфавиту_

### ANGRY\_AT

* Информация: задаёт цель сущности на конкретный UUID
* Настройка команды:
  * `{entityUUID}`: UUID сущности цели
* Пример:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Информация: задаёт, осознаёт ли этот моб своё окружение. "Неосознающие" мобы по-прежнему будут двигаться, если их толкнуть, атаковать и т.д., но не будут двигаться или выполнять действия самостоятельно. У "неосознающих" мобов также может быть отключено другое неуказанное поведение, например утопление.

:::info
работает только на версиях 1.16.5+
:::

* Настройка команды:
  * `{value}`: true или false
* Пример:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Информация: заменяет выброшенный предмет (предмет-сущность на земле или в воздухе) на ванильный предмет или ExecutableItem. Сущность остаётся той же, меняется только предмет, который она несёт.
* Создано для активатора `PLAYER_FISH_FISH` ExecutableItems: там сущность, на которую указывает `entityCommands`, это пойманный предмет. Он меняется до того, как будет подтянут, поэтому игрок сохраняет обычную анимацию рыбалки и получает ваш предмет вместо рыбы. Не нужны ни `/ei give`, ни `DELAYTICK`, ни `data merge`.
* Настройки команды:
  * `item`: материал (`DIAMOND`) или id ExecutableItem (`my_custom_fish`).
  * `amount`: (необязательно) количество нового предмета. По умолчанию: 1
* Пример:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Если ExecutableItem и материал имеют одинаковое название, используется ExecutableItem. Напишите `EI:my_id`, чтобы принимался только ExecutableItem.
* ExecutableItem собирается для игрока, который вызвал активатор (владелец, плейсхолдеры предмета).
* Команда ничего не делает, если целевая сущность не является выброшенным предметом (моб, игрок и т.д.), и выводит сообщение в консоль, если `item` не является ни материалом, ни загруженным ExecutableItem.
* Полный пример со случайной таблицей добычи: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Информация: заменяет моба сущностью другого типа. Сохранит текущую скорость текущей сущности.
  * Вы можете указать [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Или пример определения сущности: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Или ID MythicMob
* Настройка команды:
  * `{entity}`: спецификация сущности
* Пример:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Информация: выбрасывает Executable Item в месте расположения сущности
* Настройки команды:
  * `{id}`: ID предмета ExecutableItem
  * `{quantity}`: количество executable item, которое выпадет
  * `[owner]`: (необязательно) владелец выброшенного предмета (IGN игрока или UUID)
  * `[itemdata]`: (необязательно) настройки данных предмета, содержащие:
    * `Usage`: задать значение использования
    * `Variables`: задать кастомные переменные (формат: `{key:value}`)
    * `Durability`: задать значение прочности
* Пример:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Информация: выбрасывает Executable Block в месте расположения сущности
* Настройки команды:
  * `{id}`: ID предмета ExecutableBlock
  * `{quantity}`: количество executable block, которое выпадет
* Пример:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Информация: выбрасывает предмет в месте расположения сущности
* Настройки команды:
  * `{material}`: тип предмета. [Справка](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(ДОЛЖНО БЫТЬ ПОЛНОСТЬЮ ЗАГЛАВНЫМИ БУКВАМИ)**
  * `{quantity}`: количество предмета, которое выпадет
* Пример:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Информация: лечит сущность на определённое количество, если не указано, полностью излечивает сущность.
* Настройка команды:
  * `{amount}`: количество лечения
* Пример:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Информация: убивает моба без анимации смерти
* Настроек команды нет
* Пример:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Информация: заставляет игрока сесть верхом на целевую сущность.
* Настройки команды:
  * `{control}`: true/false, можно ли вручную управлять сущностью
  * `{speed}`: насколько быстро может двигаться сущность, когда вы на ней едете
* Пример:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Информация: задаёт состояние ИИ сущности
* Настройки команды:
  * `{value}`: true, чтобы включить ИИ сущности, и false, чтобы отключить.
* Пример:

```
- SET_AI value:false
```

### SET\_ADULT

* Информация: переводит сущность в её "взрослое" состояние
* Настроек команды нет
* Пример:

```
- SET_ADULT
```

* Пример ситуации:
  * Если эта команда выполняется на детёныше курицы, он превратится в свою взрослую форму.

### SET\_BABY

* Информация: переводит сущность в её "детское" состояние
* Настроек команды нет
* Пример:

```
- SET_BABY
```

* Пример ситуации:
  * Если эта команда выполняется на взрослой курице, она превратится в свою детскую форму.

### SET\_ENTITY\_NAME

* Информация: принудительно задаёт имя сущности
* Настройка команды:
  * `{name}`: новое имя сущности
* Пример:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Информация: стрижёт сущность
* Настроек команды нет
* Пример:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Информация: телепортирует сущность к пользователю предмета
* Настроек команды нет
* Пример:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Информация: телепортирует пользователя предмета к сущности
* Настроек команды нет
* Пример:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Информация: телепортирует сущность в определённое место
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
* Пример:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
