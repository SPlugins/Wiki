---
description: >-
  Справочник по командам игрока и цели в SCore: ABSORPTION, LAUNCH, SUDO,
  SET_BLOCK и другие, с настройками и примерами для ваших предметов и блоков.
source_hash: 0ab741c02dc34406
translated_at: '2026-11-13T18:17:47.469Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Команды игрока и цели

:::warning
Учтите, что по умолчанию все команды выполняются от имени консоли. Если вы хотите, чтобы команду выполнил игрок, добавьте перед ней [**SUDO**](player-and-target-commands.md#sudo) или [**SUDO\_OP**](player-and-target-commands.md#sudo_op). 

_(Нажмите на SUDO или SUDO\_OP, чтобы узнать больше)_

\
**Не используйте эту опцию для ванильных команд и КАСТОМНЫХ КОМАНД. Чтобы правильно использовать ванильные команды, перейдите в FAQ, раздел "How to use vanilla commands".**
:::

:::tip
Совместимость с "Multi-world" для ванильных команд.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Пример: вы хотите призвать Zombie в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
Хотите сохранить исходную HEX-форму в вашей команде? Добавьте тег **BRUT\_HEX** в команду. Он работает в любом месте строки команды, но рекомендуется ставить его в начале команды, чтобы не создавать путаницы.
:::

:::info
По умолчанию команды не выполняются, если игрок не в сети (они будут выполнены при подключении игрока).

Но вы можете добавить тег **\[\<OFFLINE>]** в свои команды, чтобы снять это ограничение.

_(Очень полезно для broadcast, boost, giveall и подобных команд)_

Пример:

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Вы можете использовать \[\<CLEAR\_IF\_DISCONNECT>], если хотите очищать команды при отключении игрока.

Пример:

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Смешанные команды

Помимо следующего списка команд, вы также можете использовать:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Эти команды можно использовать в командах, связанных с игроком, ИЛИ в командах, связанных с сущностью.

## Кастомные команды

_Отсортированы в алфавитном порядке_

### ABSORPTION

* Информация: даёт игроку эффект поглощения
* Настройки команды:
  * `{amount}`: количество половинок сердец поглощения. Поддерживает отрицательные значения для удаления.
  * `{time}`: длительность эффекта в тиках. Оставьте пустым или укажите "0", если эффект должен быть бесконечным.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ABSORPTION amount:5 time:200 # Gives the player absorption
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ABSORPTION amount:5 time:200 # Gives the target absorption
```

:::warning
Значение вашего атрибута MAX\_ABSORPTION должно быть больше 0!

Проверить значение можно командой: /attribute PLAYER\_NAME minecraft:max\_absorption base get

А увеличить его можно командой: /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    # You can do that to temporary up the max_absorption value of the player
    - minecraft:attribute %player% minecraft:max_absorption base set 5**
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    # You can do that to temporary up the max_absorption value of the target
    - minecraft:attribute %player% minecraft:max_absorption base set 5
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
```

### ACTIONBAR

* Информация: отображает action bar с вашим текстом и оставшимся временем (59, 58, 57...).
* Настройки команды:
  * `{text}`: ваш текст для отображения
  * `{delay}`: длительность в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10` # Sends an ACTIONBAR to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10`# Sends an ACTIONBAR to the target
```

### ADD\_ITEM\_ATTRIBUTE

* Информация: добавляет атрибут к предмету как операцию сложения или вычитания.
* Настройки команды:
  * `{slot}`: слот, к которому он будет применён. -1 для основной руки
  * `{attribute}`: атрибут, который вы хотите добавить. [Список атрибутов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: значение для операции
  * `{equipmentSlot}`: слот, в котором атрибут будет активен. [Список EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: выберите режим добавления
    * `mode:ADD`: добавляет атрибут к предмету
    * `mode:OVERRIDE`: удаляет текущие атрибуты того же типа у предмета и добавляет атрибут к предмету
    * `mode:STACK`: суммируется с атрибутом, уже имеющимся на предмете; если такого атрибута нет, добавляет его
  * affectDefaultAttributes: true или false # Если true, режим OVERRIDE также переопределит атрибуты по умолчанию, а режим stack позволит суммироваться с атрибутами по умолчанию (зелёными)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:STACK affectDefaultAttributes: true # Add this attribute to the target
```

### ADD\_ITEM\_ENCHANTMENT

* Информация: добавляет предмету в определённом слоте зачарование с заданным уровнем
* Настройки команды:
  * `{slot}`: слот, к которому оно будет применено. -1 для основной руки
  * `{enchantment}`: зачарование, которое вы хотите применить. Не используйте пробелы, используйте зачарования Minecraft, а не отображаемые названия. [Зачарования](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: уровень зачарования
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1 
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1
```

### ADD\_ITEM\_LORE

* Информация: добавляет строку описания (lore)
* Настройки команды:
  * `{slot}`: слот, к которому она будет применена. -1 для основной руки
  * `{text}`: текст новой строки lore
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %player%
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %target% added by %player%
```

### BOOTS

* Информация: помещает предмет из основной руки в слот ботинок. (Не сработает, если у предмета есть "Curse of Binding")
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOOTS
```

### BOSSBAR

* Информация: создаёт текст bossbar на определённое время.
* Настройки команды:
  * `{time}`: длительность bossbar в тиках
  * `{color}`: цвет текста bossbar
  * `{text}`: текст на bossbar (используйте подчёркивания "_" для добавления пробелов в аргументе.)
  * `{count}`: сколько раз нужно вести отсчёт
    * если эта опция указана, аргумент времени больше не имеет значения
  * `{countTicks}`: true/false: вести ли отсчёт в тиках вместо секунд
  * `{countOrder}`:
    * ascending: таймер считает от 0
    * descending: таймер считает от заданного значения
  * `{overrideMode}`:
    * NO\_OVERRIDE: не переопределяет другие Bossbar
    * OVERRIDE\_ALL: переопределяет все остальные BossBar, отправленные SCore
    * OVERRIDE\_SAME\_TEXT: переопределяет другие Bossbar, отправленные SCore, которые содержат тот же текст
  * `{barProgress}`: (по умолчанию = 1.0) начальный прогресс полосы (от 0.0 до 1.0). Работает как со статическими полосами, так и с полосами обратного отсчёта (только descending)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOSSBAR time:200 color:RED text:This_is_a_bossbar text
    - BOSSBAR time:20 color:BLUE text:Hello_world count:50 countTicks:true countOrder:ascending
    - BOSSBAR time:200 color:RED text:This is a bossbar text overrideMode:OVERRIDE_SAME_TEXT
    - BOSSBAR time:200 color:GREEN text:Half filled bar barProgress:0.5
```

### CANCEL\_PICKUP

* Информация: отключает подбор предметов у игрока на заданное время
* Настройки команды:
  * `{time}`: длительность в тиках, через которую игрок снова сможет подбирать предметы
  * `{material}`: если указан, игрок не сможет подбирать только указанный материал; если null, он не сможет подбирать ничего
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CANCEL_PICKUP time:600
    - CANCEL_PICKUP time:600 material:stone
```

:::info
Единственный способ СБРОСИТЬ эту команду после установки времени в тиках: перезагрузить или перезапустить сервер. Если вам нужен способ сброса, предложите его в канале #suggestions в Discord.
:::

### CHAT

* Информация: отправляет сообщение от имени игрока в чат
* Настройки команды:
  * `{text}`: текст для отправки
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Информация: помещает предмет из основной руки в слот нагрудника. (Не сработает, если у предмета есть "Curse of Binding")
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHESTPLATE
```

### CLOSE\_INVENTORY

* Информация: закрывает инвентарь игрока
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CLOSE_INVENTORY
```

### CROPS\_GROWTH\_BOOST

* Информация: ускоряет рост культур вокруг вас
* Настройки команды:
  * `{radius}`: радиус ускорения (по умолчанию 5)
  * `{delay}`: задержка в тиках между каждым ускорением роста
  * `{duration}`: общая длительность ускорения в тиках
  * `{chance}`: шанс роста блоков при применении ускорения
* Пример:

Следующая команда будет создавать 20 ускорений роста каждые 10 тиков.\
Все блоки в радиусе будут иметь 50% шанс роста при применении ускорения.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Информация: запрещает игроку использовать полёт (планирование на Elytra не считается полётом)
* Настройка команды:
  * `{time}`: длительность эффекта в секундах
* Пример: (команда ниже отключает активацию полёта на 1 минуту)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Информация: запрещает использование elytra на некоторое время
* Настройки команды:
  * `{time}`: длительность эффекта в секундах
* Пример: (команда ниже отключает использование elytra на 20 секунд)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Информация: применяет кулдаун к определённому ExecutableItems
* Настройки команды:
  * `{PLAYER}`: игрок, на которого нацелена команда
  * `{ID}`: id ExecutableItem или "all" для всех ExecutableItems
  * `{DURATION}`: количество времени
  * `{boolean TICKS}`: (по умолчанию: false) если false, значение аргумента длительности считается в секундах. Если true, оно считается в тиках.
  * `[optional activator id]`: (необязательно) можно применить к определённому id активатора
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

:::info
`EICOOLDOWN` может только **добавлять** кулдаун: если на одном активаторе действует несколько кулдаунов, побеждает самый длинный. Чтобы сократить или убрать кулдаун, используйте [`EICOOLDOWN_RESET`](#eicooldown_reset).
:::

### EICOOLDOWN_RESET

* Информация: убирает кулдаун ExecutableItem у игрока (все его активаторы или только один активатор). Ванильный визуальный кулдаун (`enableVisualCooldown`) также сбрасывается.
* Настройки команды:
  * `{PLAYER}`: игрок, на которого нацелена команда
  * `{ID}`: id ExecutableItem или "all" для всех ExecutableItems
  * `[optional activator id]`: (необязательно) убирает кулдаун только этого активатора; у остальных активаторов кулдаун сохраняется
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN_RESET %player% thisismyid activator1 # Only activator1 of the ExecutableItem thisismyid
    - EICOOLDOWN_RESET %player% thisismyid # All the activators of thisismyid
    - EICOOLDOWN_RESET %player% all # All ExecutableItems
```

Из консоли `/score cooldowns clear EI:{ID}:{activator id} {player}` делает то же самое для одного активатора.

### EBCOOLDOWN

* Информация: применяет кулдаун к определённому ExecutableBlocks
* Настройки команды:
  * `{PLAYER}`: игрок, на которого нацелена команда
  * `{ID}`: id ExecutableBlocks или "all" для всех ExecutableBlocks
  * `{DURATION}`: количество времени
  * `{boolean TICKS}`: (по умолчанию: false) если false, значение аргумента длительности считается в секундах. Если true, оно считается в тиках.
  * `[optional activator id]`: (необязательно) можно применить к определённому id активатора
* Пример: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EBCOOLDOWN %player% thisismyid 10 true # For the ExecutableBlock thisismyid 
    - EBCOOLDOWN %player% all 10 true # For all ExecutableBlocks
```

### EECOOLDOWN

* Информация: применяет кулдаун к определённому ExecutableItems
* Настройки команды:
  * `{PLAYER}`: игрок, на которого нацелена команда
  * `{ID}`: id ExecutableEvent или "all" для всех ExecutableEvents
  * `{DURATION}`: количество времени
  * `{boolean TICKS}`: (по умолчанию: false) если false, значение аргумента длительности считается в секундах. Если true, оно считается в тиках.
  * `[optional activator id]`: (необязательно) можно применить к определённому id активатора
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EECOOLDOWN %player% thisismyid 10 true # For the ExecutableEvent thisismyid 
    - EECOOLDOWN %player% all 10 true # For all ExecutableEvents
```

### FIREWORK\_BOOST
* Информация: если эта команда выполняется, пока вызывающий планирует на elytra, она создаёт фейерверочную ракету так же, как когда игроки
щёлкают правой кнопкой мыши по фейерверку в руке во время планирования, чтобы набрать дистанцию.
* Настройки команды:
  * `{duration}`: время жизни фейерверка в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Информация: отключает творческий полёт у игрока; если полёт игрока отключается в воздухе, игрок будет телепортирован на возможный блок под ним.
* Настройка команды:
  * `[teleportOnTheGround]`: (необязательно) (по умолчанию = true) будет ли игрок телепортирован на землю
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Информация: даёт игроку творческий полёт
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_ON
```

### FORMAT\_ENCHANTMENTS

* Информация: форматирует все зачарования в вашем lore
* Настройки команды:
  * `{slot}`: целевой слот (-1 для основной руки)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FORMAT_ENCHANTMENTS %slot%
```

![](https://media.ssomar.com/m/docs-img-image-393.png) -> ![](https://media.ssomar.com/m/docs-img-image-382.png)

### GIVE\_MONEY

* Информация: выдаёт игроку деньги
  * Требуется плагин Vault
* Настройки команды:
  * amount: сумма для выдачи
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GIVE_MONEY amount:50.0
```

### GRAVITY\_DISABLE

* Информация: отключает гравитацию для игрока, не давая ему "падать" вниз или подниматься вверх.
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### GRAVITY\_ENABLE

* Информация: снова включает гравитацию для игрока, так что он будет падать как обычно.
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### HEAD

* Информация: помещает предмет из основной руки в слот головы. (Не сработает, если у предмета есть "Curse of Binding")
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - HEAD
```

### JOBS\_MONEY\_BOOST

* Информация: временно увеличивает получаемые деньги. Для [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Настройки команды:
  * `{multiplier}`: значение множителя
  * `{time}`: длительность ускорения в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
Множитель не влияет на значения в actionbar от Jobs. Множитель из этой команды применяется только тогда, когда плагин Jobs решает увеличить полученные деньги, опыт и очки.

Если выполнять команду несколько раз с достаточной длительностью каждого ускорения, все действующие ускорения могут суммироваться.
:::

### JOBS\_XP\_BOOST

* Информация: временно умножает получаемый опыт плагина Jobs. Для [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Настройки команды:
  * `{multiplier}`: значение множителя опыта (например, 2.0 для двойного опыта)
  * `{time}`: длительность в секундах до окончания ускорения
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
Множитель не влияет на значения в actionbar от Jobs. Множитель из этой команды применяется только тогда, когда плагин Jobs решает увеличить полученные деньги, опыт и очки.

Если выполнять команду несколько раз с достаточной длительностью каждого ускорения, все действующие ускорения могут суммироваться.
:::

:::info
Эта команда поддерживает мультипликативное суммирование нескольких ускорений.
:::

### LAUNCH

* Информация: запускает кастомный снаряд. [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
* Список: 
<details>
<summary>Типы снарядов</summary>
* ARROW
* DRAGONFIREBALL
* EGG
* ENDERPEARL
* FIREBALL
* LARGEFIREBALL
* LINGENRINGPOTION
* LLAMASPIT
* SHULKERBULLET (доступно только для 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Настройки команды:
  * `{projectile}`: тип снаряда или ID кастомного снаряда из SCore ( [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]`: (необязательно) (по умолчанию = 0) (в градусах) задаёт направление, в котором будет запущена сущность
  * `[angleRotationHorizontal]`: (необязательно) (по умолчанию = 0) (в градусах) задаёт направление, в котором будет запущена сущность
  * `[velocity]`: (необязательно) (по умолчанию = 1) позволяет настроить скорость снаряда (работает и на 1.8 до 1.12)
  * `[name]`: (необязательно) кастомное имя, данное запущенному снаряду, например чтобы потом распознать его в условии (`name:&cFire_ball`).
  * `[strictYaw]`: (необязательно) (в градусах) горизонтальное направление запуска, используется вместо направления, в котором смотрит игрок (`0` = юг, `90` = запад, `180` = север, `-90` = восток). Настройки `angleRotation...` добавляются к нему.
  * `[strictPitch]`: (необязательно) (в градусах) вертикальное направление запуска, используется вместо направления, в котором смотрит игрок (`0` = прямо перед собой, `-90` = вверх, `90` = вниз). Настройки `angleRotation...` добавляются к нему.
    * <CustomTag type="version" version="1.20.5" /> Также изменяет скорость огненных шаров (FIREBALL, SIZEDFIREBALL, LARGEFIREBALL, DRAGONFIREBALL, WITHERSKULL): `velocity:2` летит вдвое быстрее, `velocity:1` сохраняет ванильную скорость. До 1.20.5 они сохраняют ванильную скорость.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Пример с несколькими выстрелами:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

* Пример: всегда запускать прямо перед собой (горизонтально), независимо от того, смотрит ли игрок вверх или вниз, с именованным снарядом:

```yaml
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - LAUNCH projectile:SNOWBALL strictPitch:0 name:Frost_Ball
```

:::info
Если вы используете команду LAUNCH в активаторе PLAYER\_LAUNCH\_PROJECTILE, а снаряд был выпущен из лука, снаряд, запущенный кастомной командой LAUNCH, сохранит ту же скорость.
:::

:::info
Если вы используете SHULKERBULLET в качестве типа снаряда, он выберет целью курсор вызывающего. В противном случае он нацелится на ближайшую к вызывающему сущность.
:::

:::warning
Текущие проблемы:  
- Shulker Bullets нельзя использовать в 1.9.4, 1.10.2, 1.11.2. Начиная с 1.12 проблем быть не должно, кроме необходимости создать снаряд SCore, чтобы придать Shulker Bullet правильную скорость полёта.
:::

### LEGGINGS

* Информация: помещает предмет из основной руки в слот поножей. (Не сработает, если у предмета есть "Curse of Binding")
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LEGGINGS
```

### LOCATED\_LAUNCH

* Информация: запускает снаряд в определённой точке
* Настройки команды:
  * `{projectileType}`: тип снаряда или ID кастомного снаряда из SCore ( [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]`: (необязательно) (по умолчанию = 0) положительное = вперёд, отрицательное = назад: позиция вперёд/назад. Например, если вы хотите создать снаряд на расстоянии 5 блоков от места, куда вы смотрите, используйте большее положительное значение
  * `[rightValue]`: (необязательно) (по умолчанию = 0) вправо = положительное, влево = отрицательное: позиция вправо/влево. Например, если вы хотите, чтобы снаряд появился слева от вас, используйте большее отрицательное значение
  * `[yValue]`: (необязательно) (по умолчанию = 0) на какую высоту от вашей позиции по Y будет создан снаряд.
  * `[velocity]`: (необязательно) (по умолчанию = 1) с какой скоростью полетит снаряд. Установите значение 0, чтобы снаряд падал вниз сразу после создания.
  * `[angleRotationVertical]`: (необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> вы можете добавить вертикальный поворот снаряда (в градусах)
  * `[angleRotationHorizontal]`: (необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> вы можете добавить горизонтальный поворот снаряда (в градусах)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Информация: ускоряет вас при езде в вагонетке (эффект близок к тому, когда вы заезжаете на питающий рельс)
* Настройка команды:
  * `{boost}`: скорость ускорения
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MINECART_BOOST boost:10
```

### MIX\_HOTBAR

* Информация: перемешивает хотбар игрока
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MIX_HOTBAR
```

### MODIFY\_DURABILITY

* Изменяет прочность определённого предмета в определённом слоте
* Настройки команды:
  * `{modification}`: положительное значение увеличивает прочность. Отрицательное значение уменьшает прочность
  * `{slot}`: номер слота предмета (-1 для удерживаемого слота)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}`: (true или false) учитывать ли зачарование unbreaking
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Информация: открывает сундук или бочку в выбранной точке
* Настройки команды:
  * `{world}`: название мира
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `[bypassProtections]`: (необязательно) (по умолчанию = false) откроется ли сундук в любом случае, даже если он защищён
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Информация: открывает эндер-сундук для игрока, запускающего активатор
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_ENDERCHEST
```

### OPEN\_WORKBENCH

* Информация: открывает верстак для игрока, запускающего активатор
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_WORKBENCH
```

### OXYGEN

* Информация: даёт кислород цели
* Настройка команды:
  * `{time}`: длительность кислорода в тиках, которую вы хотите дать
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Информация: аналог CUSTOMDASH1, но xyz будут заменены координатами xyz ближайшего к вам снаряда.
* Настройки команды:
  * `{fallDamage}`: получите ли вы урон от падения (если вы забыли указать true или false, по умолчанию будет false. Чтобы получать урон от падения, установите true)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Информация: даёт вам определённое количество еды/насыщения
* Настройки команды:
  * `{amount}`: количество очков насыщения, которое вы хотите получить. Используйте отрицательные значения, чтобы уменьшить очки голода
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Информация: даёт игроку определённые значения определённой магии из [Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/).  
* Настройки команды:
  * `{ecoSkillsMagicID}`: ID магии из Ecoskills.
  * `{amount}`: количество, которое нужно получить.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_MAGIC ecoSkillsMagicID:mana amount:15
```

:::info
Поддерживает отрицательные значения.
:::

### REGAIN\_SATURATION

* Информация: даёт вам определённое количество насыщения
* Настройки команды:
  * `{amount}`: количество насыщения, которое вы хотите дать
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Информация: удаляет зачарование из слота
* Настройки команды:
  * `{slot}`: слот, из которого нужно удалить зачарование (-1 для удерживаемого слота)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}`: зачарование для удаления (ALL для всех зачарований)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Информация: удаляет строку lore
* Настройки команды:
  * `{slot}`: слот, из которого нужно удалить lore (-1 для удерживаемого слота)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}`: строка, которую вы хотите удалить
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Информация: заменяет блок, на который смотрит игрок, другим блоком
* Настройки команды:
  * `{material}`: ID блока (состояния блоков поддерживаются)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REPLACE_BLOCK STONE_BRICKS
    - REPLACE_BLOCK WATER[LEVEL=0]
```

### SEND\_BLANK\_MESSAGE

* Информация: отправляет вам пустое сообщение
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_BLANK_MESSAGE
```

### SEND\_MESSAGE

* Информация: отправляет вам сообщение
  * Поддерживается [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/)
* Настройки команды:
  * `{message}`: сообщение, которое вы хотите отправить
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    playerCommands:
    - SEND_MESSAGE text:&fThis is a somewhat random text.
    - SEND_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```

### SEND\_CENTERED\_MESSAGE

* Информация: отправляет вам сообщение, отцентрированное в чате
  * Поддерживается [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/)
* Настройки команды:
  * `{message}`: сообщение, которое вы хотите отправить
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_CENTERED_MESSAGE text:&fThis is a somewhat random text.
    - SEND_CENTERED_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```


### SET\_ARMOR\_TRIM

* Информация: устанавливает определённую отделку брони с определённым узором для указанного слота
* Настройки команды:
  * `{slot}`: слот, к которому применяется команда (слот -1 для основной руки)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}`: узор отделки (если 'null' или 'remove', текущий узор будет удалён). [Список TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: материал узора. [Список TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ARMOR_TRIM slot:38 pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM slot:38 pattern:null #to clear the armor trim
```


### SET\_BLOCK

* Информация: ставит блок на блок, на который нацелен игрок
* Настройки команды:
  * `{blockface}`: вы можете указать или не указывать blockFace, чтобы, например, принудительно поставить блок сверху. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}`: ID блока (состояния блоков поддерживаются) 
  * `{bypassProtection}`: ставить ли блок, даже если у игрока нет права (permission)
  * `[whitelistCurrentBlock]`: (необязательно) (по умолчанию = можно ставить на любые типы блоков) список блоков, которым должен соответствовать текущий блок, чтобы быть заменённым
    * Примеры:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK blockface:UP material:OAK_WOOD
    - SET_BLOCK material:FURNACE[LIT=TRUE]
    - SET_BLOCK material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_BLOCK\_POS

* Информация: ставит блок в определённой позиции
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{material}`: материал блока
  * `[bypassProtection]`: (необязательно) (по умолчанию = false) обходить ли защиту региона, привата, острова
  * `[replace]`: (необязательно) (по умолчанию = true) заменять ли блок, если он уже существует
  * `[whitelistCurrentBlock]`: (необязательно) (по умолчанию = можно ставить на любые типы блоков) список блоков, которым должен соответствовать текущий блок, чтобы быть заменённым
    * Примеры:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK_POS x:0 y:0 z:0 material:STONE bypassProtection:false replace:true
    - SET_BLOCK_POS x:0 y:0 z:0 material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_EQUIPPABLE\_MODEL

* Информация: устанавливает данные модели экипировки для предмета в определённом слоте
* Настройки команды:
  * `{slot}`: номер слота, в котором находится целевой предмет
  * `{model}`: название модели экипировки, которую вы хотите назначить предмету
* Пример:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Информация: setblock, но для Executable Blocks. **(ДОЛЖЕН БЫТЬ УСТАНОВЛЕН EXECUTABLE BLOCKS)**
* Настройки команды:
  * `{id}`: ID executable block, который вы хотите поставить
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{world}`: название мира
  * `[replace]`: (необязательно) (по умолчанию = true). Заменять ли существующий блок по указанным координатам
  * `[bypassProtection]`: (необязательно) (по умолчанию = false) если вы хотите обходить защиты, например WorldGuard
  * `[ownerUUID]`: (необязательно) (по умолчанию = без владельца) uuid предполагаемого владельца executable block
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Информация: устанавливает определённый цвет предмета (окрашиваемые предметы, такие как кожаная броня / звезда фейерверка)
*  Настройки команды:
  * `{slot}`: слот, к которому он будет применён. (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: числовое значение цвета. [Сайт с палитрой цветов](https://www.tydac.ch/color/)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Информация: устанавливает атрибут предмета.
* Настройки команды:
  * `{slot}`: слот, к которому он будет применён. (-1 для основной руки)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}`: атрибут, который вы хотите добавить. [Атрибуты](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: значение для операции
  * `{equipmentSlot}`: слот для атрибута [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Даёт игроку/цели кулдаун на предмет
* Настройки команды:
  * `{material or group}`: тип материала или группа. [Подробнее о группе](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
  * `{cooldown}`: кулдаун в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN material:ENDER_PEARL cooldown:10
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN group:my_cooldown_group cooldown:10
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Информация: устанавливает определённый custom model data для определённого предмета
* Настройки команды:
  * `{slot}`: слот, к которому он будет применён. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{customModelData}`: значение customModelData
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA slot:10 customModelData:10
```

### SET\_ITEM\_LORE

* Информация: устанавливает строку lore
* Настройки команды:
  * `{slot}`: номер слота (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : если вы хотите задать первую строку lore, укажите 1
* `{text}`: текст новой строки
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_LORE slot:%slot% line:3 text:&6LEGENDARY SWORD
```

### SET\_ITEM\_MATERIAL 

<CustomTag type="version" version="1.20.5" />
* Заменяет материал предмета другим материалом, сохраняя nbt целевого предмета
* Настройки команды:
  * `{slot}`: номер слота (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}`: материал, в который должен превратиться предмет
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Информация: устанавливает кастомную модель для вашего предмета в определённом слоте
* Настройки команды:
  * `{slot}`: слот, к которому она будет применена. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{model}`: значение модели, которое вы хотите применить к целевому предмету
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MODEL slot:-1 model:minecraft:stone
```

### SET\_ITEM\_NAME

* Информация: устанавливает кастомное имя для вашего предмета в определённом слоте
* Настройки команды:
  * `{slot}`: слот, к которому оно будет применено. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}`: новое имя предмета
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Информация: устанавливает кастомный цвет зелья-предмета в определённом слоте
* Настройки команды:
  * `{slot}`: слот, к которому он будет применён. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: цвет, который вы хотите применить. Для выбора цвета перейдите на `https://www.tydac.ch/color/` и возьмите значение `MapInfo Color` выбранного вами цвета.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Информация: устанавливает кастомный стиль подсказки предмета в слоте.
* Настройки команды:
  * `{slot}`: слот, к которому он будет применён. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}`: (значение по умолчанию: `namespace:id`) id подсказки.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Информация: устанавливает время игрока, не влияя на время на стороне сервера.
* Настройки команды:
  * `{time}`: значение времени. Введите `-1`, чтобы вернуть время игрока к зависимости от времени на стороне сервера.
  * `{relative}`: (значение по умолчанию: false) если не true, время с точки зрения игрока будет установлено буквально в это значение. Если true, будет взято текущее время мира и сложено с указанным значением, чтобы установить ваше текущее время с вашей точки зрения.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Информация: устанавливает погоду игрока, не влияя на время на стороне сервера.
* Настройки команды:
  * `{weather The time value}`: устанавливает погоду с точки зрения игрока
    * Варианты:
      * RESET : возвращает погоду на стороне сервера
      * DOWNFALL : дождь или снег в зависимости от биома
      * CLEAR : ясная погода, облака, но без дождя.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Информация: ставит временный блок
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{world}`: название мира
  * `{material}`: ID блока
  * `{time}`: время в тиках
  * `[bypassProtection]`: (необязательно) (по умолчанию = false) игнорировать ли вмешательство сторонних плагинов
  * `[whitelistCurrentBlock]`: (необязательно) (по умолчанию = можно ставить на любые типы блоков) список блоков, на которые нужно обращать внимание
    * Примеры:
    * AIR, WATER
    * !STONE, !COBBLESTONE


```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_TEMP_BLOCK_POS x:%entity_x% y:%entity_y% z:%entity_z% world:%entity_world% material:BEDROCK time:40 bypassProtection:true whitelistCurrentBlock:!AIR,!WATER
```

:::warning
Команда не заменяет блоки, имеющие дополнительные данные (инвентарь, поворот и т. д.)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Информация: создаёт сущностей на месте вашего курсора
  * Вы можете указать [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Или определение сущности, например: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Или ID MythicMob
* Настройки команды:
  * `{entity}`: описание сущности
  * `{amount}`: количество мобов, которые появятся в этой точке
  * `[maxRange]`: (необязательно) (по умолчанию = 200) максимальная дальность появления
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SPAWN_ENTITY_ON_CURSOR entity:CREEPER amount:1
```

```
# With EntitySnapshot
- SPAWN_ENTITY_ON_CURSOR entity:{HasVisualFire:1b,id:"minecraft:bee"} amount:1

# With MythicMob ID
- SPAWN_ENTITY_ON_CURSOR entity:MyCustomBossID amount:1
```

### SUDO

* Информация: заставляет вас выполнить команду
* Настройка команды:
  * `{command}`: команда для выполнения
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO sit
    - SUDO say hi
```

### SUDO\_OP

* Информация: выдаёт игроку OP, выполняет SUDO от его имени и снимает с него OP
* Дополнительная информация: пока у игрока есть OP, он может выполнить только указанную после SUDOOP команду, все остальные команды блокируются, пока игрок является OP; а если сервер упадёт, это не проблема: игрок лишится OP, когда снова подключится.
* Настройки команды:
  * `{command}`: команда для выполнения с правами OP
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO_OP summon zombie
    - SUDO_OP fly
    - SUDO_OP god
    - SUDO_OP /replacenear 20 tnt
```

:::danger
Не рекомендуется использовать это **слишком часто**. Как объяснено в начале этой страницы, если вы хотите выполнять ванильные команды, используйте команду execute (описано в FAQ [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

Используйте SUDOOP, только если нет абсолютно никакой другой возможности: это должно быть последним средством, а не первым выбором.
:::

### SWAP\_HAND

* Информация: меняет местами текущий предмет и предмет в второй руке
* Без настроек команды
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SWAP_HAND
```

### TRANSFER\_ITEM

* Информация: меняет местами 2 предмета в инвентаре по слотам
* Настройки команды:
  * `{slot of launcher}`: целевой слот для слота №1
  * `{slot of receiver}`: целевой слот для слота №2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]`: (необязательно) (по умолчанию = false) выбрасывается ли слот запускающего во время обмена

### XP_BOOST

* Информация: увеличивает получение опыта на некоторое время.
* Настройки команды:
  * `{multiplier}`: значение множителя опыта
  * `{timeinsecs}`: длительность в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
Будьте осторожны! Эта команда может суммироваться: если вы выполните её несколько раз, множители будут расти всё больше и больше, если времени между запусками недостаточно, чтобы предыдущее ускорение закончилось.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Это означает, что опыт будет ускорен в таком порядке:
* 1 секунда: x2
* 4 секунды: x4
* 1 секунда: x2
:::
