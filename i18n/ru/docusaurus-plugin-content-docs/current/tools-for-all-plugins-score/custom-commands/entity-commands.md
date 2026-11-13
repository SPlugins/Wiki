---
description: >-
  Справочник по командам сущностей в ExecutableItems: настройки, примеры,
  поддержка multi-world, NPC из Citizens и список кастомных команд.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T18:15:39.265Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Команды сущностей

:::tip
Поддержка нескольких миров («multi-world») для ванильных команд.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Пример: вы хотите призвать Zombie в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Команды сущностей поддерживают NPC из Citizens
:::

## Смешанные команды

Помимо следующего списка команд вы также можете использовать:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Эти команды можно использовать как в командах, связанных с игроком, ИЛИ в командах, связанных с сущностью.

## Кастомные команды

_В алфавитном порядке_

### ANGRY\_AT

* Описание: задаёт сущности цель с определённым UUID
* Настройка команды:
  * `{entityUUID}`: UUID сущности-цели
* Пример:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Описание: определяет, осознаёт ли этот моб своё окружение. Неосознающие мобы всё равно будут двигаться, если их толкнуть, атаковать и т. д., но не будут двигаться и выполнять какие-либо действия самостоятельно. У неосознающих мобов также могут быть отключены другие неуказанные виды поведения, например утопление.

:::info
Работает только на версиях 1.16.5+
:::

* Настройка команды:
  * `{value}`: true или false
* Пример:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Описание: заменяет выброшенный предмет (сущность-предмет на земле или в воздухе) на ванильный предмет или ExecutableItem. Сущность остаётся прежней, меняется только предмет, который она несёт.
* Создана для активатора `PLAYER_FISH_FISH` в ExecutableItems: там сущность, на которую указывает `entityCommands`, является пойманным предметом. Она изменяется до того, как её вытащат, поэтому игрок видит обычную анимацию рыбалки и получает ваш предмет вместо рыбы. Не нужны ни `/ei give`, ни `DELAYTICK`, ни `data merge`.
  * В ExecutableEvents (для всех удочек сервера) пропишите её в `targetEntityCommands` для `PLAYER_FISH_FISH`.
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
* Если у ExecutableItem и материала одинаковое название, используется ExecutableItem. Напишите `EI:my_id`, чтобы принимался только ExecutableItem.
* ExecutableItem создаётся для игрока, который запустил активатор (владелец, плейсхолдеры предмета).
* Команда ничего не делает, если целевая сущность не является выброшенным предметом (моб, игрок и т. д.), а если `item` не является ни материалом, ни загруженным ExecutableItem, она выводит сообщение в консоль.
* Полный пример со случайной таблицей добычи: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Описание: заменяет моба сущностью другого типа. Текущая скорость сущности сохраняется.
  * Можно указать [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Или пример определения сущности: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Или ID MythicMob
* Настройка команды:
  * `{entity}`: описание сущности
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

* Описание: выбрасывает Executable Item в месте расположения сущности
* Настройки команды:
  * `{id}`: id предмета ExecutableItem
  * `{quantity}`: количество executable item, которое будет выброшено
  * `[owner]`: (необязательно) владелец выброшенного предмета (ник игрока или UUID)
  * `[itemdata]`: (необязательно) настройки данных предмета, содержащие:
    * `Usage`: задаёт значение использования
    * `Variables`: задаёт кастомные переменные (формат: `{key:value}`)
    * `Durability`: задаёт значение прочности
* Пример:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Описание: выбрасывает Executable Block в месте расположения сущности
* Настройки команды:
  * `{id}`: id предмета ExecutableBlock
  * `{quantity}`: количество executable block, которое будет выброшено
* Пример:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Описание: выбрасывает предмет в месте расположения сущности
* Настройки команды:
  * `{material}`: тип предмета. [Справка](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(ДОЛЖЕН БЫТЬ ЗАГЛАВНЫМИ БУКВАМИ)**
  * `{quantity}`: количество предметов, которое будет выброшено
* Пример:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Описание: лечит сущность на определённое количество; если оно не указано, сущность будет полностью исцелена.
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

* Описание: убивает моба без анимации смерти
* Без настроек команды
* Пример:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Описание: заставляет игрока ехать верхом на выбранной сущности.
* Настройки команды:
  * `{control}`: true/false, можно ли вручную управлять сущностью
  * `{speed}`: как быстро сущность может двигаться, пока вы на ней едете
* Пример:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Описание: задаёт состояние ИИ сущности
* Настройки команды:
  * `{value}`: true, чтобы включить ИИ сущности, и false, чтобы отключить.
* Пример:

```
- SET_AI value:false
```

### SET\_ADULT

* Описание: переводит сущность во «взрослое» состояние
* Без настроек команды
* Пример:

```
- SET_ADULT
```

* Пример ситуации:
  * Если эта команда выполнена на цыплёнке, он превратится во взрослую курицу.

### SET\_BABY

* Описание: переводит сущность в «детское» состояние
* Без настроек команды
* Пример:

```
- SET_BABY
```

* Пример ситуации:
  * Если эта команда выполнена на взрослой курице, она превратится в цыплёнка.

### SET\_ENTITY\_NAME

* Описание: принудительно задаёт имя сущности
* Настройка команды:
  * `{name}`: новое имя сущности
* Пример:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Описание: стрижёт сущность
* Без настроек команды
* Пример:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Описание: телепортирует сущность к игроку, использующему предмет
* Без настроек команды
* Пример:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Описание: телепортирует игрока, использующего предмет, к сущности
* Без настроек команды
* Пример:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Описание: телепортирует сущность в определённую точку
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
* Пример:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
