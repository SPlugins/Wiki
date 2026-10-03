---
description: >-
  Справочник смешанных команд (playerCommands, targetCommands, entityCommands)
  плагина SPlugins для игроков и сущностей.
source_hash: 2835baee0899fa7f
translated_at: '2026-10-03T10:29:25.602Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Смешанные команды (игрок и сущность)

:::info
Эти кастомные команды работают как для Player, так и для Entity

То есть в:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Отсортировано по алфавиту_

### ADD\_TEMPORARY\_ATTRIBUTE

* Информация: Добавляет временные атрибуты игроку/сущности
* Настройки команды:
    * `{attribute}` : [Список атрибутов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Значение double, которое будет иметь временный атрибут
    * `{operation}` : [Список операций](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Время до истечения атрибута
* Пример:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Информация: Выбирает всех игроков.
* Настройка команды: 
  * `{command}`: Команда, которая будет выполнена
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Запуск нескольких команд: выдать случайный предмет всем игрокам, у всех игроков предмет будет разным.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Информация: Выбирает всех игроков.
* Настройка команды: 
    * `{command(s)}`: Команда, которая будет выполнена
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Запуск нескольких playerCommands:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Поддерживает blacklist и whitelist
:::

### AROUND

* Информация: Выбирает игроков в заданном радиусе и заставляет их выполнять команды
* Настройки команды:
  * `{distance}`: В каком радиусе команда будет выбирать игроков (по умолчанию 3)
  * `{displayMsgIfNoPlayer}`: (true или false) Уведомлять ли пользователя предмета о том, удалось ли выбрать игроков или нет (по умолчанию true)
  * `{throughBlocks}`: будет ли это затрагивать игроков, находящихся за блоками (по умолчанию true)
  * `{safeDistance}`: Если расстояние между целью и инициатором меньше или равно значению safeDistance, то цель не будет затронута. (По умолчанию 0)
  * `{offsetYaw}`: Направление yaw, которое вы хотите для своего смещения (независимо от значения yaw источника)
  * `{offsetPitch}`: Направление pitch, которое вы хотите для своего смещения (независимо от значения yaw источника)
  * `{offsetDistance}`: После вычисления offsetYaw и offsetPitch, используя значение этого параметра, команда AROUND сместит позицию/центр от координат источника xyz.
  * `{limit}`: Количество целей, которые могут быть затронуты 
  * `{sort}`: Полезно для опции limit. 
    * NEAREST: выбирает сущности, наиболее близкие к источнику.
    * RANDOM: случайным образом выбирает любую сущность в пределах диапазона команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или в клейме инициатора (в контексте плагина GriefPrevention) (в будущем будет обновлено для проверки с другими плагинами клеймов)
  * `{commands}`: Команды, которые будут выполнены для выбранных игроков.

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** Плейсхолдеры такие же, как [Player Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), но вам нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Примеры:

Это призывает молнию в игроков в радиусе 20 блоков

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Отправить сообщение игрокам в диапазоне от 5 до 10 блоков

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Вы можете вкладывать AROUND в команды: AROUND, IF, NEAREST, ALL\_PLAYERS

Если вы это сделаете, разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.

базовый разделитель команды: `<+>`

первая вложенная команда: `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

базовый плейсхолдер: %around\_target%

первая вложенная команда: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Примеры:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Вы можете добавлять кастомные плейсхолдеры **условия**, чтобы настроить выбор игроков

Формат:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  это настройки команды

     \<conditions> это условия

Формат условий:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> это имя плейсхолдера

      \<comparator> Компаратор: "`<`", "`<=`", "`=`", "`>`", "`>=`"

      \<value> значение

 Вы можете добавить несколько условий, используя разделитель "&&"
:::

* Примеры:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Учитывайте, что часть CONDITIONS() парсит плейсхолдеры в ней с игроком, выбранным командой AROUND. То есть на самом деле в плейсхолдерах выше происходит проверка, превышает ли здоровье цели значение 10 и назван ли игрок, выбранный командой AROUND, "2Ssomar"
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Плейсхолдеры, которые приходят от плагинов, таких как ExecutableItems, ExecutableBlocks, парсятся не относительно игрока, затронутого командой AROUND.

Например, с ExecutableBlocks, CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) работает через проверку, равно ли значение переменной фракции блока фракции выбранного игрока\
Источник плейсхолдера: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Информация: Запускает игрока/цель в направлении, противоположном тому, куда он смотрит **(ВЫ НЕ МОЖЕТЕ БЫТЬ ЗАПУЩЕНЫ В ВОЗДУХЕ)**
* Настройка команды:
  * `{amount}`: Значение, насколько сильным будет запуск
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Информация: Поджигает игрока/цель
* Настройка команды:
 * `{timeinsecs}`: Время горения в секундах
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Информация: Отправляет сообщение в консоль
* Настройка команды:
  * `{text}`: Текст для отправки в консоль
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Информация: Копирует эффекты цели
* Настройка команды:
  * `[limitDuration]`: (Опционально) (по умолчанию = без ограничения) означает, что если у цели, например, есть 3 минуты эффекта яда, а вы ограничите это до 5 секунд, вы получите эффект яда длительностью всего 5 секунд
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Информация: Запускает вас в определённую позицию
* Настройки команды:
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{fallDamage}`: true или false. Будет ли игрок получать урон от падения после запуска этой командой.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Если у вас есть активаторы, связанные между двумя типами целей, вы можете сделать следующее

* Пример 1 | Экземпляр player - entity | Запустить игрока в сторону сущности

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Пример 2 | Экземпляр player - entity | Запустить сущность в сторону игрока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Пример 3 | Экземпляр player - block | Запустить игрока в сторону блока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Вы можете увеличить силу команды, выполняя её много раз (но не в один и тот же тик, они должны быть разделены по времени, иначе это не будет иметь смысла, так как игрок будет запускаться из одной и той же позиции относительно локации), примеры:

* Выполнение её много раз вручную

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* Использование вспомогательной команды LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Информация: Запускает вас от определённой позиции
* Настройки команды:
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{strength}`: Сила запуска
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Если у вас есть активаторы, связанные между двумя типами целей, вы можете сделать следующее

* Пример 1 | Экземпляр player - entity | Запустить игрока от сущности

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Пример 2 | Экземпляр player - entity | Запустить сущность от игрока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Пример 3 | Экземпляр player - block | Запустить игрока от блока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Информация: Запускает цель по определённой математической функции
* Настройки команды:
  * `{function}`: Математическая функция, по которой выполняется движение. [Сайт калькулятора функций](https://www.geogebra.org/calculator)
  * `{max x value}`: Максимальное значение x функции
  * `{front z}`: Направлен ли запуск вперёд или назад
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Информация: Наносит игроку урон определённого размера. (Урон, нанесённый с помощью этой команды, засчитывается как урон от игрока)
  * Эта команда вызывает активаторы, связанные с уроном, в ExecutableItems и ExecutableEvents
  *   Тип урона spigot - ENTITY\_ATTACK, если в активаторе участвует игрок.

      В противном случае тип урона spigot - CUSTOM
* Настройки команды:
  * `{amount}`: Количество урона в хитпоинтах (не в сердцах)
  * `{amplified If Strength Effect}`: true или false, Strength 1 -> + 1.5 урона, ....
  * `{amplified with attack attribute}`: true или false, будет взята сумма всех ваших существующих атрибутов ATTACK_DAMAGE с оператором `MULTIPLY_SCALAR_1`, умноженная на текущий урон атаки (включая эффект силы, если он включён)
  <br/>
  :::info
  Формула:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: Тип урона -> [Список DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Чтобы применить настоящий урон, вы можете использовать:\
\- 1.20.5++ используйте команду /minecraft\:damage, например\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- используйте команду REGAIN HEALTH, это не лучший вариант, но это обходное решение.
:::

### DAMAGE\_NO\_KNOCKBACK

* Информация: Наносит игроку урон определённого размера без применения отбрасывания. (Урон, нанесённый с помощью этой команды, не засчитывается как урон от игрока и больше похож на косвенный урон)
  * Эта команда вызывает активаторы, связанные с уроном, в ExecutableItems и ExecutableEvents
  *   Тип урона spigot - ENTITY\_ATTACK, если в активаторе участвует игрок.

      В противном случае тип урона spigot - CUSTOM
* Настройки команды:
  * `{amount}`: Количество урона в хитпоинтах (не в сердцах)
  * `{amplified If Strength Effect}`: true или false, Strength 1 -> + 1.5 урона, ....
  * `{amplified with attack attribute}`: true или false, игрок с бонусом урона 500%, команда нанесёт 5 x "\<damage>".
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Информация: Позволяет дать себе кастомный бонус урона
  * Эта команда также увеличивает урон кастомных команд, например (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Эта команда не увеличивает урон для проджектайлов
* Настройки команды:
  * `{modification in percentage example 100}`: Размер бонуса. Пример ниже:
    * 50 = Вы наносите на +50% больше урона
    * -80 = Вы наносите на -80% меньше урона
  * `{timeinticks}`: Длительность кастомного бонуса урона
* Пример: (Команда ниже даёт вам +50% наносимого урона на 10 секунд)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Эту команду можно использовать несколько раз, и бонус будет суммироваться. В этом примере вы увидите, что на \[0-10] секундах игрок наносит на 50% больше урона, затем на \[10-20] секундах на 100% больше урона, а затем на \[20-30] секундах на 50% больше урона, так как на \[10-20] две команды DAMAGE\_BOOST сложились.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Информация: Позволяет дать себе кастомное сопротивление урону, задав себе настроенные множители получаемого урона
* Настройки команды:
  * `{modification in percentage example 100}`: Размер множителя. Пример ниже:
    * 50 = Вы получаете на +50% больше урона\
      -80 = Вы получаете на -80% меньше урона
  * `{timeinticks}`: Длительность кастомного сопротивления урону
* Пример: (Команда ниже даёт вам +50% получаемого урона на 10 секунд)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Информация: Визуально заменяет (без риска потери предметов) слот экипировки на определённый материал
* Настройки команды:
  * `{EquipmentSlot}`: Слот
    * Варианты:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: ID предмета материала, на который вы хотите заменить, или EI id
  * `{amount}`: Количество в стаке 
  * `{timeinticks}`: Как долго продлится маскировка. (20 тиков = 1 секунда)
*   Пример: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Информация: Отменяет команду EQUIPMENT\_VISUAL\_REPLACE
* Настройка команды:
  * `{EquipmentSlot}`: Слот
    * Варианты:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Пример:

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Псевдонимы: `FORCEDROP`, `DROPSPECIFICEI`
* Информация: Заставляет игрока/сущность выбросить предмет. Поддерживает два режима:
  * **Режим slot**: выбрасывает предмет из указанного слота инвентаря
  * **Режим EI ID**: выбрасывает из инвентаря все предметы, соответствующие указанному ID ExecutableItem (только для игрока)
* Настройки команды:
  * `slot:`: число, -1 для основной руки (по умолчанию: -1). См. изображение с номерами слотов ниже.
  * `ei_id:`: ID ExecutableItem для выброса (переопределяет режим slot, если указан)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Примеры:

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Информация: Запускает игрока/цель в направлении, куда он смотрит
* Настройки команды:
  * `{number}`: Значение, насколько сильным будет запуск
  * `{custom_y}` : Задать вертикальный импульс (рекомендуем указать небольшое значение, например 0.5 - 1, если не хотите получить большой прыжок.)
  * `{falldamage}`: Устанавливает, включить или отключить урон от падения
* Пример:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Информация: Применяет заморозку, как у снега в Minecraft 1.18
* Настройка команды:
 * `{time in ticks}`: Время заморозки в тиках. (20 тиков = 1 секунда)
* Пример:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Информация: Применяет свечение к игроку
* Настройки команды:
  * `{time in ticks}`: Длительность свечения в тиках
  * `{color}`: Каким цветом будет свечение. [Справка по цветам](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Пример:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Информация: Позволяет выполнить команду в определённом направлении для сущностей
* Настройки команды:
  * `{range}`: насколько далеко может находиться сущность, чтобы быть выбранной командой HITSCAN
  * `{radiusOfHitscan}`: Насколько ШИРОК цилиндр. Это, по сути, разница между выстрелом пулей и выстрелом ядром.
  * `{pitch}`: В каком направлении стрелять, относительно pitch игрока
  * `{yaw}`: То же самое, что Pitch, но с yaw
  * `{leftRightShift}`:
    * -5 = hitscan НАЧИНАЕТСЯ в 5 блоках слева.
    * 0 = Hitscan центрирован там, где находится игрок.
    * 5 = hitscan НАЧИНАЕТСЯ в 5 блоках справа от игрока. 
  * `{yShift}`: То же самое, что left,right, только по другой оси. 
  * `{throughEntities}`: Boolean: может ли HITSCAN проходить через сущности.
  * `{throughBlocks}`: Boolean: может ли HITSCAN проходить через блоки.
  * `{limit}`: Количество целей, которые могут быть затронуты
  * `{sort}`: Полезно для опции limit.
    * NEAREST: выбирает сущности, наиболее близкие к источнику.
    * RANDOM: случайным образом выбирает любую сущность в пределах диапазона команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или в клейме инициатора (в контексте плагина GriefPrevention) (в будущем будет обновлено для проверки с другими плагинами клеймов)
  * `{command(s)}`: То же, что и в командах AROUND, вы можете написать `command1 <+> command2` ... и использовать плейсхолдер %around\_target%
* Пример:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Команды после `HITSCAN_ENTITIES` (и после каждого `<+>`) выполняются **для каждой затронутой сущности**, как entity commands: `REGAIN_HEALTH 4` лечит затронутую сущность, а не инициатора. Чтобы воздействовать на инициатора, используйте vanilla-команду с `%player%`, например `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Изображение для понимания:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Информация: Позволяет выполнить команду в определённом направлении для игроков
* Настройки команды:
  * `{range}`: насколько далеко может находиться сущность, чтобы быть выбранной командой HITSCAN
  * `{radiusOfHitscan}`: Насколько ШИРОК цилиндр. Это, по сути, разница между выстрелом пулей и выстрелом ядром.
  * `{pitch}`: В каком направлении стрелять, относительно pitch игрока
  * `{yaw}`: То же самое, что Pitch, но с yaw
  * `{leftRightShift}`:
    * -5 = hitscan НАЧИНАЕТСЯ в 5 блоках слева.
    * 0 = Hitscan центрирован там, где находится игрок.
    * 5 = hitscan НАЧИНАЕТСЯ в 5 блоках справа от игрока.
  * `{yShift}`: То же самое, что left,right, только по другой оси.
  * `{throughEntities}`: Boolean: может ли HITSCAN проходить через сущности.
  * `{throughBlocks}`: Boolean: может ли HITSCAN проходить через блоки.
  * `{limit}`: Количество целей, которые могут быть затронуты
  * `{sort}`: Полезно для опции limit.
    * NEAREST: выбирает сущности, наиболее близкие к источнику.
    * RANDOM: случайным образом выбирает любую сущность в пределах диапазона команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или в клейме инициатора (в контексте плагина GriefPrevention) (в будущем будет обновлено для проверки с другими плагинами клеймов)
  * `{command(s)}`: То же, что и в командах AROUND, вы можете написать `command1 <+> command2` ... и использовать плейсхолдер %around\_target%
* Пример:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Изображение для понимания:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Информация: Делает игрока неуязвимым на определённое время
* Настройка команды:
 * `{ticks}`: Время неуязвимости в тиках. (20 тиков = 1 секунда)
  * Поддерживает отрицательные значения для уменьшения времени неуязвимости, например того, что идёт после получения удара.
* Пример:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Информация: Запускает игрока в воздух
* Настройка команды:
  * `{number}`: Насколько сильным будет запуск
  * `{fall damage}`: (Опционально) (по умолчанию = false) Выберите, нужно ли учитывать урон от падения.
* Пример:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Информация: Запускает сущность в вашем направлении
* Настройки команды:
  * `{entityType}`: ID моба запускаемой сущности (ЗАГЛАВНЫМИ БУКВАМИ) [Список EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (число, Double) Определяет скорость сущности
  * `[angle rotation y]`: (только для 1.14 и выше) (Опционально) (по умолчанию = 0) (в градусах) Определяет направление, в котором будет запущена сущность
* Пример:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Пример создания тройного выстрела:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Информация: Наносит урон цели, но тип урона в основном из плагина MythicLib
* Настройки команды:
  * `{number}`: Урон, наносимый целям (по умолчанию: 10)
  * `{damage_type}`: Наносимый тип урона (по умолчанию: PHYSICAL)
    * Пример: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false, отбрасывает ли цель (по умолчанию: false)
  * `{element}`: Указывает, какой элемент у атаки (по умолчанию: FIRE)
    * Справка: [Список элементов MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false, добавляется ли `CRITICAL_STRIKE_POWER` атакующего в формулу урона (по умолчанию: false)
    * Формула: `number * (number * (total critical_strike_power/100))`
* Пример:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Информация: Выбирает сущности в заданном радиусе и заставляет их выполнять команды
  * Доступные сущности -> [Список LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Настройки команды:
  * `{distance}`: В каком радиусе команда будет выбирать сущности
  * `{displayMsgIfNoEntity}`: (true или false) Уведомлять ли пользователя предмета о том, что не удалось выбрать ни одного моба.
    * **Установите false, чтобы скрыть сообщение**
  * `{throughBlocks}`: будет ли это затрагивать мобов, находящихся за блоками
  * `{safeDistance}`: Если расстояние между целью и инициатором меньше или равно значению safeDistance, то цель не будет затронута.
  * `{offsetYaw}`: Направление yaw, которое вы хотите для своего смещения (независимо от значения yaw источника)
  * `{offsetPitch}`: Направление pitch, которое вы хотите для своего смещения (независимо от значения yaw источника)
  * `{offsetDistance}`: После вычисления offsetYaw и offsetPitch, используя значение этого параметра, команда AROUND сместит позицию/центр от координат источника xyz.
  * `{limit}`: Количество целей, которые могут быть затронуты
  * `{sort}`: Полезно для опции limit.
    * NEAREST: выбирает сущности, наиболее близкие к источнику.
    * RANDOM: случайным образом выбирает любую сущность в пределах диапазона команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или в клейме инициатора (в контексте плагина GriefPrevention) (в будущем будет обновлено для проверки с другими плагинами клеймов)
  * `{nonliving}`: true/false. Если true, также будут выбираться другие сущности, такие как стрелы и стенды для доспехов. Любые ошибки, возникающие при выполнении entity commands при включённом этом параметре, скорее всего, будут игнорироваться из-за разрастания объёма работы.
  * Вы можете использовать BLACKLIST или WHITELIST для сущностей, добавив одно из следующего в любом месте команды:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Плейсхолдеры:** Плейсхолдеры такие же, как [Entity Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), но вам нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Примеры:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Чтобы использовать entity nbt в поле WHITELIST/BLACKLIST, вам нужно установить плагин [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Он поддерживает [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), так что вы можете добавить, например, что-то вроде: `ZOMBIE{IsBaby:1}` 

Примеры:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Вы можете вкладывать MOB\_AROUND в команды: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Если вы это сделаете, разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

базовый разделитель команды: `<+>`

первая вложенная команда: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер: %around\_target%

первая вложенная команда: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Информация: Выбирает ближайшего моба от игрока/цели.
* Настройки команды:
    * `{max accepted distance}`:  Максимально допустимое расстояние для "entity".
    * `{command(s)}`: Команды, которые будут выполнены

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** Плейсхолдеры такие же, как [Entity Placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders), но вам нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Пример:

Наносит урон ближайшему игроку

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Вы можете вкладывать MOB\_NEAREST в команды: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Если вы это сделаете, разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

базовый разделитель команды: `<+>`

первая вложенная команда: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер: %around\_target%

первая вложенная команда: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Информация: Выбирает ближайшего игрока от игрока/цели.
* Настройки команды:
    * `{max accepted distance}`: Максимально допустимое расстояние для "target".
    * `{command}`: Команда, которая будет выполнена

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** Плейсхолдеры такие же, как [Player Placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders), но вам нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Пример:

Наносит урон ближайшему игроку

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Вы можете вкладывать NEAREST в команды: AROUND, IF, NEAREST, ALL\_PLAYERS

Если вы это сделаете, разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

базовый разделитель команды: `<+>`

первая вложенная команда: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер: %around\_target%

первая вложенная команда: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Информация: Отправляет сообщение OP онлайн-игрокам и в консоль
* Настройка команды:
  * `{text}`: Текст для отправки
* Пример:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Информация: Создаёт частицы в месте расположения игрока/цели. [Список частиц](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Настройки команды:
  * `{type}`: Тип частицы (ЗАГЛАВНЫМИ БУКВАМИ)
  * `{quantity}`: Количество создаваемых частиц
  * `{offset}`: Радиус области, в которой могут появляться частицы в месте расположения игрока/цели
  * `{speed}`: Насколько быстрыми или большими будут частицы
* Пример:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Информация: Даёт вам определённое количество HP
* Настройка команды:
  * `{amount}`: Количество HP, которое вы хотите получить
   * Поддерживает отрицательные значения в случае, если вы хотите нанести "настоящий урон". 
* Пример:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Информация: Тушит вас, если вы горите
* Настроек команды нет
* Пример:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Информация: Удаляет эффект свечения определённого цвета у игрока | цели.
* Настройка команды:
 * `[color]`: (Опционально) (по умолчанию = WHITE) Цвет для удаления. [Справка по цветам](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Пример:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Информация: Добавляет эффект свечения определённого цвета игроку | цели.
* Настройка команды:
 * `[color]`: (Опционально) (по умолчанию = WHITE) Цвет для удаления. [Справка по цветам](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Пример:

```yaml
- SET_GLOW BLACK
```

:::info
Совместимо с плагином TAB с использованием -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Информация: Устанавливает ваше здоровье на определённое значение
* Настройка команды:
  * `{amount}`: Количество здоровья, на которое вы хотите установить
* Пример:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Информация: Заставляет игрока смотреть в определённую позицию pitch (от -90 до 90 градусов, направление вверх-вниз)
* Настройки команды:
  * `{pitch_number}`: Число, которое вы хотите указать. Плейсхолдеры также работают
  * `{keepVelocity}`: Позволяет сохранить скорость игрока
* Пример:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Информация: Заставляет игрока смотреть в определённую позицию yaw (360 градусов, направление влево-вправо)
* Настройки команды:
  * `{yaw_number}`: Число, которое вы хотите указать. Плейсхолдеры также работают
  * `{keepVelocity}`: Позволяет сохранить скорость игрока
* Пример:

```yaml
- SET_YAW 10 false
```

### SPIN

* Информация: Закручивает цель
* Настройки команды:
  * `{duration ticks}`: Длительность закручивания
  * `{velocity}`: Скорость закручивания
* Пример:

```yaml
- SPIN 20 1
```

:::info
В: Как заморозить цели/игроков/мобов?

О: выполните, например, **`SPIN {duration} 0`**
:::

### STEAL

* Информация: Украсть предмет из инвентаря цели
* Настройки команды:
  * `{slot}`: -1 для основной руки. Справку по слотам см. ниже.
  * `[remove item]`: (Опционально) (по умолчанию = true)
* Пример:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Информация: Бьёт молнией без урона тому, кто выполняет команду
* Настроек команды нет 
* Пример:

```yaml
- STRIKELIGHTNING
```

:::info
Это не то же самое, что команда smite из essentials. Если вы хотите поразить молнией ваши цели, разместите это в target commands или entity commands с подходящими активаторами, например `PLAYER_CLICK_ON_PLAYER`.
:::

### STUN ENABLE/DISABLE

* Информация: Включает или отключает оглушение для игрока (укладывает его и блокирует движение камеры
* Команды:
  * STUN\_ENABLE
  * STUN\_DISABLE
* Пример:

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Информация: Телепортирует игрока/сущность в указанную локацию
* Настройки команды:
  * `{world}`: Мир локации телепортации
  * `{x}`: Координата x локации телепортации.
  * `{y}`: Координата y локации телепортации.
  * `{z}`: Координата z локации телепортации.
  * `[pitch]`: (Опционально) (по умолчанию = сохраняет pitch игрока) pitch локации телепортации
  * `[yaw]`: (Опционально) (по умолчанию = сохраняет yaw игрока) yaw локации телепортации
  * `[keepVelocity]`: (Опционально) (по умолчанию = true) Позволяет не останавливать скорость игрока.
* Пример:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Информация: Телепортирует вас в точку, куда указывает ваш курсор
* Настройки команды:
  * `{range}`: Насколько далеко вы хотите телепортироваться
  * `{acceptAir}`: Чтобы иметь возможность телепортироваться даже в воздухе, установите значение true
* Пример:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Информация: Перемещает предмет в инвентаре
* Настройки команды:
  * `{slot of launcher}`: Слот предмета, который будет перемещён
  * `{slot of receiver}`: Слот, в который предмет попадёт
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Пример:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Информация: Телепортирует вас в точку, куда указывает ваш курсор, без учёта того, что вы можете оказаться в невозможных местах
* Настройка команды:
  * `[maxRange]`: (Опционально) (по умолчанию = 200) Насколько далеко вы хотите телепортироваться
* Пример:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Информация: Телепортирует в другой мир в тех же координатах
* Настройка команды:
 * `{world}`: Название мира, куда вы хотите телепортировать игрока/цель.
* Пример:

```yaml
- WORLD_TELEPORT spawn_end
```

## Команды анимации

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
