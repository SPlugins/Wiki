---
description: >-
  Подробное описание кастомных команд плагина SCore для игроков и целей:
  синтаксис, параметры и примеры применения.
source_hash: 0e9aab386cb7c1fd
translated_at: '2026-10-03T10:27:36.490Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Команды для игроков и целей

:::warning
Вам нужно знать, что по умолчанию все команды выполняются от имени консоли, поэтому, если вы хотите, чтобы команду выполнял игрок, добавьте перед ней [**SUDO**](player-and-target-commands.md#sudo) или [**SUDO\_OP**](player-and-target-commands.md#sudo_op). 

_(Нажмите на SUDO или SUDO\_OP, чтобы узнать больше)_

\
**Не используйте эту опцию для ванильных команд и CUSTOM COMMANDS, чтобы правильно использовать ванильные команды, перейдите в FAQ и раздел "How to use vanilla commands",**
:::

:::tip
Совместимость "Multi-world" для ванильных команд.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Например, вы хотите призвать Zombie в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
Хотите сохранить необработанную форму HEX в вашей команде? Добавьте тег **BRUT\_HEX** в свою команду. Он работает в любом месте командной строки, но рекомендуется размещать его в первой части команды, чтобы избежать путаницы
:::

:::info
По умолчанию все команды не выполняются, если игрок не в сети. (команды будут выполнены при подключении игрока)

Но вы можете добавить тег **\[\<OFFLINE>]** в свои команды, чтобы убрать это ограничение.

_(Очень полезно для команд broadcast, boost, giveall и т.д.)_

Пример:

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Вы можете использовать \[\<CLEAR\_IF\_DISCONNECT>], если хотите отменить команды при отключении игрока

Пример:

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Смешанные команды

В дополнение к следующему списку команд вы можете также использовать:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Эти команды можно использовать как в командах для игроков, так и в командах для сущностей.

## Кастомные команды

_Отсортировано по алфавиту_

### ABSORPTION

* Информация: Дает игроку эффект поглощения (absorption)
* Настройки команды:
  * `{amount}`: количество половинок сердец поглощения. Поддерживает отрицательные значения для удаления.
  * `{time}`: время действия эффекта в тиках. Оставьте пустым или "0", если хотите бесконечное действие.
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
Значение вашего атрибута MAX\_ABSORPTION должно быть выше 0!

Проверьте значение, введя: /attribute PLAYER\_NAME minecraft:max\_absorption base get

И вы можете увеличить его, введя: /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
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

* Информация: Отображает actionbar с вашим текстом + оставшееся время (59, 58, 57...).
* Настройки команды:
  * `{text}`: Ваш текст для отображения
  * `{delay}`: Длительность в секундах
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

* Информация: Добавляет атрибут предмету в виде операции суммирования или вычитания.
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. -1 для основной руки
  * `{attribute}`: Атрибут, который вы хотите добавить. [Список атрибутов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: Значение для операции
  * `{equipmentSlot}`: Слот, в котором атрибут будет активирован. [Список EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: выберите режим добавления
    * `mode:ADD` (Добавить атрибут к предмету)
    * `mode:OVERRIDE` (Удалить текущие атрибуты того же типа у предмета + добавить атрибут к предмету)
    * `mode:STACK` (Складывается с атрибутом, присутствующим на предмете, если такого нет, добавляет его)
  * affectDefaultAttributes: true или false # Когда установлено true, режим OVERRIDE также перезаписывает стандартные атрибуты, а для режима STACK это позволяет складываться со стандартными атрибутами (зелеными)
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

* Информация: Добавляет зачарование предмету в определенном слоте с определенным уровнем
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. -1 для основной руки
  * `{enchantment}`: Зачарование, которое вы хотите применить, не используйте пробелы, используйте minecraft-зачарования, а не отображаемые названия. [Зачарования](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: Уровень зачарования
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

* Информация: Добавляет строку описания (lore)
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. -1 для основной руки
  * `{text}`: Текст новой строки описания
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

* Информация: Перемещает предмет из основной руки в слот ботинок. (Не работает, если предмет имеет "Проклятие связывания")
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

* Информация: Создает текстовую bossbar на определенное время.
* Настройки команды:
  * `{time}`: Длительность bossbar в тиках
  * `{color}`: Цвет текста bossbar
  * `{text}`: текст на bossbar (Используйте нижнее подчеркивание "_" для добавления пробела в аргументе.)
  * `{count}`: сколько раз вы хотите вести отсчет
    * если эта опция присутствует, аргумент времени больше не имеет значения
  * `{countTicks}`: true/false, хотите ли вы вести отсчет в тиках или в секундах
  * `{countOrder}`:
    * ascending: заставляет таймер считать от 0
    * descending: заставляет таймер считать от заданного значения
  * `{overrideMode}`:
    * NO\_OVERRIDE: Не перезаписывает другие Bossbar
    * OVERRIDE\_ALL: Перезапишет все другие BossBar, отправленные SCore
    * OVERRIDE\_SAME\_TEXT: Перезапишет другие Bossbar, отправленные SCore, содержащие тот же текст
  * `{barProgress}`: (по умолчанию = 1.0) Начальный прогресс полосы (от 0.0 до 1.0). Работает как со статичными, так и с обратным отсчетом полосами (только descending countdown)
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

* Информация: Отключает подбор предметов у игрока на заданное время
* Настройки команды:
  * `{time}`: Длительность в тиках, через которое игрок снова сможет подбирать предметы
  * `{material}`: Если указано, игрок не может подбирать только указанный материал, если null, он не может подбирать ничего
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
Единственный способ СБРОСИТЬ эту команду после установки времени в тиках, это перезагрузка или перезапуск сервера. Если хотите предложить способ сброса, напишите об этом в канале #suggestions в Discord.
:::

### CHAT

* Информация: Отправляет сообщение от игрока в чат
* Настройки команды:
  * `{text}`: Текст для отправки
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Информация: Перемещает предмет из основной руки в слот нагрудника. (Не работает, если предмет имеет "Проклятие связывания")
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

* Информация: Закрывает инвентарь у игрока
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

* Информация: Ускоряет рост посевов вокруг вас
* Настройки команды:
  * `{radius}`: Радиус ускорения (по умолчанию 5)
  * `{delay}`: Задержка в тиках между каждым ускорением роста
  * `{duration}`: Длительность в тиках всего ускорения
  * `{chance}`: Шанс роста блоков при применении ускорения
* Пример:

Следующая команда создаст 20 ускорений роста каждые 10 тиков.\
Все блоки в радиусе будут иметь 50% шанс роста при применении ускорения.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Информация: Запрещает использование полета игроку (Планирование на элитрах не считается полетом)
* Настройка команды:
  * `{time}`: Длительность эффекта в секундах
* Пример: (Приведенная ниже команда отключает активацию полета на 1 минуту)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Информация: Запрещает использование элитр на определенное время
* Настройки команды:
  * `{time}`: Длительность эффекта в секундах
* Пример: (приведенная ниже команда отключает использование элитр на 20 секунд)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Информация: Применяет кулдаун к конкретному ExecutableItems
* Настройки команды:
  * `{PLAYER}`: Игрок, к которому применяется команда
  * `{ID}`: ID ExecutableItem или "all" для всех ExecutableItems
  * `{DURATION}`: Количество времени
  * `{boolean TICKS}`: (По умолчанию: false) Если false, значение аргумента duration будет считаться в секундах. Если true, оно будет считаться в тиках.
  * `[optional activator id]`: (Необязательно) Вы можете применить это к конкретному ID активатора
* Пример: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

### EBCOOLDOWN

* Информация: Применяет кулдаун к конкретному ExecutableBlocks
* Настройки команды:
  * `{PLAYER}`: Игрок, к которому применяется команда
  * `{ID}`: ID ExecutableBlocks или "all" для всех ExecutableBlocks
  * `{DURATION}`: Количество времени
  * `{boolean TICKS}`: (По умолчанию: false) Если false, значение аргумента duration будет считаться в секундах. Если true, оно будет считаться в тиках.
  * `[optional activator id]`: (Необязательно) Вы можете применить это к конкретному ID активатора
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

* Информация: Применяет кулдаун к конкретному ExecutableItems
* Настройки команды:
  * `{PLAYER}`: Игрок, к которому применяется команда
  * `{ID}`: ID ExecutableEvent или "all" для всех ExecutableEvents
  * `{DURATION}`: Количество времени
  * `{boolean TICKS}`: (По умолчанию: false) Если false, значение аргумента duration будет считаться в секундах. Если true, оно будет считаться в тиках.
  * `[optional activator id]`: (Необязательно) Вы можете применить это к конкретному ID активатора
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
* Информация: Если эта команда выполняется, пока применивший ее планирует на элитрах, она создаст фейерверковую ракету аналогично тому, как игрок правым кликом использует фейерверк в руке во время планирования, чтобы получить дистанцию.
* Настройки команды:
  * `{duration}`: Время жизни фейерверка в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Информация: Отключает креативный полет у игрока, и если полет игрока отключается в воздухе, игрок будет телепортирован на возможный блок под игроком.
* Настройка команды:
  * `[teleportOnTheGround]`: (Необязательно) (по умолчанию = true) Будет ли игрок телепортирован на землю или нет
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Информация: Дает игроку креативный полет
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

* Информация: Форматирует все зачарования в вашем описании (lore)
* Настройки команды:
  * `{slot}`: Слот для применения (-1 для основной руки)
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

* Информация: Дает деньги игроку
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

* Информация: Отключает гравитацию для игрока, не давая игроку "падать" вниз или подниматься.
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

* Информация: Снова включает гравитацию для игрока, так что игрок будет падать нормально.
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

* Информация: Перемещает предмет из основной руки в слот головы. (Не работает, если предмет имеет "Проклятие связывания")
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

* Информация: Временно увеличивает получаемые деньги. Для [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Настройки команды:
  * `{multiplier}`: Значение множителя
  * `{time}`: Длительность ускорения в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
Множитель не влияет на значения в actionbar от Jobs. Множитель этой команды применяется только тогда, когда плагин Jobs решает увеличить полученные деньги, опыт и очки.

Если выполнить несколько раз с достаточной длительностью для каждого ускорения, все активные ускорения могут складываться.
:::

### JOBS\_XP\_BOOST

* Информация: Временно умножает получаемый опыт плагина Jobs. Для [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Настройки команды:
  * `{multiplier}`: Значение множителя опыта (например, 2.0 для двойного опыта)
  * `{time}`: Длительность в секундах до истечения ускорения
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
Множитель не влияет на значения в actionbar от Jobs. Множитель этой команды применяется только тогда, когда плагин Jobs решает увеличить полученные деньги, опыт и очки.

Если выполнить несколько раз с достаточной длительностью для каждого ускорения, все активные ускорения могут складываться.
:::

:::info
Эта команда поддерживает накопление нескольких ускорений мультипликативно.
:::

### LAUNCH

* Информация: Запускает кастомный снаряд. [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
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
* SHULKERBULLET (Доступно только для 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Настройки команды:
  * `{projectile}`: тип снаряда или ID кастомного снаряда из SCore ( [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]`: (Необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> (в градусах) Определяет направление, в котором будет запущена сущность
  * `[angleRotationHorizontal]`: (Необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> (в градусах) Определяет направление, в котором будет запущена сущность
  * `[velocity]`: (Необязательно) (по умолчанию = 1) Для настройки скорости снаряда
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Пример множественных выстрелов:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

:::info
Если вы используете команду LAUNCH в активаторе PLAYER\_LAUNCH\_PROJECTILE, и снаряд был запущен с помощью лука, снаряд, запущенный с помощью кастомной команды LAUNCH, сохранит ту же скорость.
:::

:::info
Если вы используете SHULKERBULLET как тип снаряда, он выберет курсор применившего в качестве цели. В противном случае он будет целиться в ближайшую сущность от применившего.
:::

:::warning
Текущие проблемы:  
- Shulker Bullets нельзя использовать в 1.9.4, 1.10.2, 1.11.2. Начиная с 1.12 не должно быть сложностей, кроме необходимости создать снаряд SCore, чтобы дать Shulker Bullet правильную скорость полета.
:::

### LEGGINGS

* Информация: Перемещает предмет из основной руки в слот штанов. (Не работает, если предмет имеет "Проклятие связывания")
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

* Информация: Запускает снаряд в определенном месте
* Настройки команды:
  * `{projectileType}`: тип снаряда или ID кастомного снаряда из SCore ( [Справка](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]`: (Необязательно) (по умолчанию = 0) positive=вперед, negative=назад - Позиция вперед/назад. Например, если вы хотите создать снаряд на 5 блоков дальше от того места, куда вы смотрите, используйте более высокое положительное значение
  * `[rightValue]`: (Необязательно) (по умолчанию = 0) right=положительное, negative=влево - Позиция право/лево. Например, если вы хотите, чтобы снаряд появился слева от вас, используйте более высокое отрицательное значение
  * `[yValue]`: (Необязательно) (по умолчанию = 0) На сколько выше вашей позиции Y появится снаряд.
  * `[velocity]`: (Необязательно) (по умолчанию = 1) Как быстро будет лететь снаряд. Установите значение 0, чтобы снаряд падал вниз сразу после появления.
  * `[angleRotationVertical]`: (Необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> вы можете добавить вертикальное вращение для вашего снаряда (в градусах)
  * `[angleRotationHorizontal]`: (Необязательно) (по умолчанию = 0) <CustomTag type="version" version="1.14" /> вы можете добавить горизонтальное вращение для вашего снаряда (в градусах)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Информация: Ускоряет вас при езде на тележке (Эффект близкий к тому, когда вы едете по приводному рельсу)
* Настройка команды:
  * `{boost}`: Скорость ускорения
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

* Изменяет прочность конкретного предмета в конкретном слоте
* Настройки команды:
  * `{modification}`: Положительное значение для увеличения прочности. Отрицательное значение для уменьшения прочности
  * `{slot}`: Номер слота предмета (-1 для слота в руке)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}`: (true или false) Учитывается ли зачарование "Долговечность" (unbreaking) или нет
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Информация: Открывает сундук или бочку в выбранном месте
* Настройки команды:
  * `{world}`: Название мира
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `[bypassProtections]`: (Необязательно) (по умолчанию = false) Открыть сундук в любом случае, даже если он защищен
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Информация: Открывает эндер-сундук для игрока, запустившего активатор
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

* Информация: Открывает рабочий стол для игрока, запустившего активатор
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

* Информация: Дает кислород цели
* Настройка команды:
  * `{time}`: Длительность в тиках выдаваемого кислорода
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Информация: Похоже на CUSTOMDASH1, но координаты xyz будут заменены координатами xyz ближайшего к вам снаряда.
* Настройки команды:
  * `{fallDamage}`: Будете ли вы получать урон от падения или нет (Если вы забыли указать true или false, по умолчанию будет false. Чтобы получать урон от падения, установите это в true)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Информация: Дает вам определенное количество еды/сытости
* Настройки команды:
  * `{amount}`: Количество очков сытости, которые вы хотите получить. Используйте отрицательные значения, чтобы уменьшить очки голода
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Информация: Дает игроку определенные значения конкретной магии [Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/).  
* Настройки команды:
  * `{ecoSkillsMagicID}`: ID магии Ecoskills.
  * `{amount}`: Количество, которое нужно получить.
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

* Информация: Дает вам определенное количество сытости
* Настройки команды:
  * `{amount}`: Количество сытости, которое можно дать
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Информация: Удаляет зачарование из слота
* Настройки команды:
  * `{slot}`: Слот, из которого удаляется зачарование (-1 для слота в руке)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}`: Зачарование для удаления (ALL для всех зачарований)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Информация: Удаляет строку описания (lore)
* Настройки команды:
  * `{slot}`: Слот, из которого удаляется описание (-1 для слота в руке)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}`: Строка, которую вы хотите удалить
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Информация: Заменяет блок, на который смотрит игрок, на другой
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

* Информация: Отправляет вам пустое сообщение
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

* Информация: Отправляет вам сообщение
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

* Информация: Отправляет вам сообщение, отцентрированное в чате
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

* Информация: Устанавливает конкретную отделку доспехов (armor trim) с конкретным узором для указанного слота
* Настройки команды:
  * `{slot}`: Слот для применения команды (слот -1 для основной руки)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}`: Узор отделки (если 'null' или 'remove', текущий узор будет удален). [Список TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: Материал узора. [Список TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
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

* Информация: Размещает блок на блоке, на который указывает игрок
* Настройки команды:
  * `{blockface}`: Вы можете указать или не указывать blockFace, чтобы, например, принудительно установить его сверху. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}`: ID блока (состояния блоков поддерживаются) 
  * `{bypassProtection}`: Будет ли блок установлен, даже если у игрока нет прав (permission)
  * `[whitelistCurrentBlock]`: (Необязательно) (по умолчанию = можно установить на любой тип блока) Список блоков, которым должен соответствовать текущий блок, чтобы быть заменен
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

* Информация: Устанавливает блок в определенной позиции
* Настройки команды:
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{material}`: материал блока
  * `[bypassProtection]`: (Необязательно) (по умолчанию = false), обходит ли это защиту региона, клейма, острова или нет
  * `[replace]`: (Необязательно) (по умолчанию = true), заменяет ли это блок, если он уже существует
  * `[whitelistCurrentBlock]`: (Необязательно) (по умолчанию = можно установить на любой тип блока) Список блоков, которым должен соответствовать текущий блок, чтобы быть заменен
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

* Информация: Устанавливает модель данных экипировки (equippable model) предмета в определенном слоте
* Настройки команды:
  * `{slot}`: Номер слота, где находится целевой предмет
  * `{model}`: Название модели экипировки, которую вы хотите назначить предмету
* Пример:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Информация: Setblock, но для Executable Blocks. **(EXECUTABLE BLOCKS ДОЛЖНЫ БЫТЬ УСТАНОВЛЕНЫ)**
* Настройки команды:
  * `{id}`: ID executable block, который вы пытаетесь установить
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{world}`: Название мира
  * `[replace]`: (Необязательно) (по умолчанию = true). Заменит ли это существующий блок в указанных координатах или нет
  * `[bypassProtection]`: (Необязательно) (по умолчанию = false), если вы хотите обойти защиты, такие как worldguard
  * `[ownerUUID]`: (Необязательно) (по умолчанию = нет владельца) UUID предполагаемого владельца executable block
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Информация: Устанавливает определенный цвет для предмета (предметы, поддерживающие цвет, такие как кожаные доспехи / звезда фейерверка)
*  Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: числовое значение цвета. [Сайт для выбора цвета](https://www.tydac.ch/color/)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Информация: Устанавливает атрибут предмету.
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}`: Атрибут, который вы хотите добавить. [Атрибуты](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: Значение для операции
  * `{equipmentSlot}`: Слот для атрибута [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Дает игроку/цели кулдаун на предмет
* Настройки команды:
  * `{material or group}`: Тип материала или группа. [Подробнее о группах](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
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

* Информация: Устанавливает определенный CustomModelData для конкретного предмета
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
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

* Информация: Устанавливает строку описания (lore)
* Настройки команды:
  * `{slot}`: Номер слота (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : Если вы хотите установить описание первого типа 1
* `{text}`: Текст новой строки
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
* Заменяет материал предмета на другой материал, сохраняя NBT целевого предмета
* Настройки команды:
  * `{slot}`: Номер слота (-1 для основной руки)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}`: Материал, в который вы хотите превратить предмет
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Информация: Устанавливает кастомную модель для вашего предмета в определенном слоте
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
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

* Информация: Устанавливает кастомное название для вашего предмета в определенном слоте
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}`: новое название предмета
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Информация: Устанавливает кастомный цвет зелья предмету в определенном слоте
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: Цвет, который вы хотите применить. Для выбора цвета перейдите на `https://www.tydac.ch/color/` и получите значение `MapInfo Color` выбранного вами цвета.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Информация: Устанавливает кастомный стиль подсказки (tooltip) предмета в слоте.
* Настройки команды:
  * `{slot}`: Слот, к которому будет применено. (-1 для основной руки)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}`: (Значение по умолчанию: `namespace:id`) ID подсказки.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Информация: Устанавливает время игрока без изменения времени на сервере.
* Настройки команды:
  * `{time}`: Значение времени. Введите `-1`, чтобы вернуть время игрока к зависимости от времени на сервере.
  * `{relative}`: (Значение по умолчанию: false) Если не true, он установит время POV пользователя буквально равным этому значению. Но если true, он возьмет текущее время мира и добавит к нему указанное значение, чтобы установить ваше текущее время POV.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Информация: Устанавливает погоду игрока без изменения погоды на сервере.
* Настройки команды:
  * `{weather The time value}`: Устанавливает погоду игрока в его POV
    * Варианты:
      * RESET: Восстанавливает погоду сервера
      * DOWNFALL: Дождь или снег, в зависимости от биома
      * CLEAR: Ясная погода, облака, но без дождя.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Информация: Устанавливает временный блок
* Настройки команды:
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{world}`: Название мира
  * `{material}`: ID блока
  * `{time}`: Время в тиках
  * `[bypassProtection]`: (Необязательно) (по умолчанию = false) Игнорировать ли стороннее воздействие или нет
  * `[whitelistCurrentBlock]`: (Необязательно) (по умолчанию = можно установить на любой тип блока) Список блоков, за которыми нужно следить
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
Это не заменяет блоки, у которых есть дополнительные данные (инвентарь, вращение и т.д.)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Информация: Создает сущности на вашем курсоре
  * Вы можете указать [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Или определение сущности, например: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Или ID MythicMob
* Настройки команды:
  * `{entity}`: Спецификация сущности
  * `{amount}`: Количество мобов, которые появятся в этом месте
  * `[maxRange]`: (Необязательно) (по умолчанию = 200) Максимальный радиус появления
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

* Информация: Заставляет вас выполнить команду
* Настройка команды:
  * `{command}`: Команда для выполнения
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

* Информация: Выдает игроку OP, применяет SUDO к игроку и затем забирает OP (DEOP)
* Дополнительная информация: Во время наличия OP игрок может выполнить только указанную команду после SUDOOP, все остальные команды блокируются, пока игрок имеет OP, и если сервер крашится, это не проблема. OP будет снят с игрока при его переподключении.
* Настройки команды:
  * `{command}`: Команда для выполнения с OP
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
Не рекомендуется использовать это **часто**. Как объяснено в начале этой страницы, если вы хотите выполнять ванильные команды, используйте команду execute (Объяснено в FAQ [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

Используйте SUDOOP только если абсолютно нет другого варианта, это должно быть вашим последним средством, а не первым выбором.
:::

### SWAP\_HAND

* Информация: Меняет текущий предмет местами с предметом в дополнительной руке (offhand)
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

* Информация: Меняет местами 2 предмета в инвентаре по слотам
* Настройки команды:
  * `{slot of launcher}`: Целевой слот для слота №1
  * `{slot of receiver}`: Целевой слот для слота №2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]`: (Необязательно) (по умолчанию = false) Выпадет ли слот запустившего во время обмена или нет

### XP_BOOST

* Информация: Увеличивает получение опыта на время.
* Настройки команды:
  * `{multiplier}`: Значение множителя опыта
  * `{timeinsecs}`: Длительность в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
Будьте осторожны! Эта команда может накапливаться, поэтому если вы выполните эту команду несколько раз, вы получите все больше множителей, если времени между ними недостаточно для исчезновения предыдущего ускорения.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Это означает, что опыт будет увеличиваться в следующем порядке:
* 1 секунда: x2
* 4 секунды: x4
* 1 секунда: x2
:::
