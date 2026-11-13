---
description: >-
  Смешанные команды SCore для игрока и сущности: ADD_TEMPORARY_ATTRIBUTE,
  AROUND, DAMAGE, TELEPORT и другие, с параметрами и примерами.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T18:17:05.136Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Смешанные команды (игрок и сущность)

:::info
Эти кастомные команды работают как для игрока, так и для сущности

То есть в:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Отсортировано в алфавитном порядке_

### ADD\_TEMPORARY\_ATTRIBUTE

* Информация: добавляет временные атрибуты игроку/сущности
* Настройки команды:
    * `{attribute}` : [Список атрибутов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : дробное значение (Double), которое будет у временного атрибута
    * `{operation}` : [Список операций](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : время до истечения атрибута
* Пример:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Информация: выбирает целью всех игроков.
* Настройка команды: 
  * `{command}`: команда, которая будет выполнена
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

Выполнение нескольких команд: выдайте случайный предмет всем игрокам, у всех игроков предметы будут разными.

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

* Информация: выбирает целью всех игроков.
* Настройка команды: 
    * `{command(s)}`: команда, которая будет выполнена
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

Выполнение нескольких playerCommands:

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
Поддерживает черный и белый список
:::

### AROUND

* Информация: выбирает целью игроков в заданном радиусе и заставляет их выполнять команды
* Настройки команды:
  * `{distance}`: в каком радиусе команда будет выбирать игроков (по умолчанию 3)
  * `{displayMsgIfNoPlayer}`: (true или false) уведомлять ли пользователя предмета о том, удалось ли выбрать целью игроков или нет (по умолчанию true)
  * `{throughBlocks}`: будут ли затронуты игроки, находящиеся за блоками (по умолчанию true)
  * `{safeDistance}`: если расстояние между целью и тем, кто запускает команду, меньше или равно значению safeDistance, цель не будет затронута. (по умолчанию 0)
  * `{offsetYaw}`: направление по yaw, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetPitch}`: направление по pitch, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetDistance}`: после расчета offsetYaw и offsetPitch это значение сдвигает позицию/центр команды AROUND относительно координат xyz источника.
  * `{limit}`: количество целей, которые могут быть затронуты 
  * `{sort}`: полезно для опции limit. 
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайно выбирает любую сущность в радиусе действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в диких землях или в привате самого запускающего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
  * `{commands}`: команды, которые будут выполнены для выбранных игроков.

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** плейсхолдеры те же, что и [Player Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), но нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

:::info
**Количество целей:** `%around_target_count%` возвращает число игроков, выбранных командой. Оно одинаково для каждой цели и учитывает цели, оставшиеся после `distance`, `safeDistance`, `throughBlocks` и `regionCheck` и `limit`. `CONDITIONS(...)`, проверяемые для каждой цели, не учитываются. Поддерживается сокращение `+N` / `-N`: `%around_target_count%-1`.

Пример: `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Примеры:

Это призывает молнию на игроков в радиусе 20 блоков

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Отправить сообщение игрокам на расстоянии от 5 до 10 блоков

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Вы можете вкладывать в AROUND команды: AROUND, IF, NEAREST, ALL\_PLAYERS

В этом случае разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.

разделитель базовой команды : `<+>`

первая вложенная команда : `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

базовый плейсхолдер : %around\_target%

первая вложенная команда : %around\_target::step1%

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
Вы можете добавлять **условия** с кастомными плейсхолдерами, чтобы уточнить, каких игроков выбирать целью

Формат:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  это настройки команды

     \<conditions> это условия

Формат условий:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> это название плейсхолдера

      \<comparator> оператор сравнения: "`<`", "`<=`", "`=`", "`>`", "`>=`"

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
Помните, что часть CONDITIONS() обрабатывает плейсхолдеры в ней для игрока, выбранного командой AROUND. Поэтому в плейсхолдерах выше на самом деле проверяется, что здоровье цели больше 10 и что игрок, выбранный командой AROUND, носит имя "2Ssomar"
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
Плейсхолдеры из плагинов вроде ExecutableItems, ExecutableBlocks будут обрабатываться не для игрока, затронутого командой AROUND.

Например, с ExecutableBlocks выражение CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) работает так: проверяется, равно ли значение переменной faction блока фракции выбранного игрока\
Источник плейсхолдера: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Информация: подбрасывает игрока/цель в направлении, противоположном тому, куда они смотрят **(ВЫ НЕ МОЖЕТЕ БЫТЬ ЗАПУЩЕНЫ В ВОЗДУХЕ)**
* Настройка команды:
  * `{amount}`: значение, определяющее силу рывка
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

* Информация: поджигает игрока/цель
* Настройка команды:
 * `{timeinsecs}`: время горения в секундах
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

* Информация: отправляет сообщение в консоль
* Настройка команды:
  * `{text}`: текст, который будет отправлен в консоль
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

* Информация: копирует эффекты цели
* Настройка команды:
  * `[limitDuration]`: (необязательно) (по умолчанию без ограничения) например, если у цели эффект отравления на 3 минуты, а вы ограничите его 5 секундами, вы получите эффект отравления только на 5 секунд
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

* Информация: запускает вас в заданную точку
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{fallDamage}`: true или false. Получит ли игрок урон от падения после рывка.
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

Если у вас есть активаторы, связанные между двумя типами целей, можно сделать так

* Пример 1 | Связка игрок - сущность | Рывок игрока к сущности

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Пример 2 | Связка игрок - сущность | Рывок сущности к игроку

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Пример 3 | Связка игрок - блок | Рывок игрока к блоку

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Вы можете увеличить силу команды, выполнив ее несколько раз (но не в одном и том же тике: выполнения должны быть разнесены по времени, иначе это не имеет смысла, так как игрок совершает рывок из одной и той же позиции к точке), примеры:

* Ручной многократный запуск

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

* С помощью служебной команды LOOP START

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

* Информация: запускает вас прочь от заданной точки
* Настройки команды:
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{strength}`: сила рывка
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

Если у вас есть активаторы, связанные между двумя типами целей, можно сделать так

* Пример 1 | Связка игрок - сущность | Рывок игрока от сущности

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Пример 2 | Связка игрок - сущность | Рывок сущности от игрока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Пример 3 | Связка игрок - блок | Рывок игрока от блока

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Информация: совершает рывок цели по заданной математической функции
* Настройки команды:
  * `{function}`: математическая функция, которой нужно следовать. [Сайт-калькулятор функций](https://www.geogebra.org/calculator)
  * `{max x value}`: максимальное значение x функции
  * `{front z}`: рывок вперед или назад
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

* Информация: наносит игроку заданное количество урона. (Урон, нанесенный с помощью этой команды, считается уроном от игрока)
  * Эта команда запускает активаторы, связанные с уроном, в ExecutableItems и ExecutableEvents
  *   Тип урона в Spigot: ENTITY\_ATTACK, если в активаторе участвует игрок.

      В противном случае тип урона в Spigot: CUSTOM
* Настройки команды:
  * `{amount}`: количество урона в единицах здоровья (не в сердцах)
  * `{amplified If Strength Effect}`: true или false, Сила 1 -> + 1.5 урона, ....
  * `{amplified with attack attribute}`: true или false, берется сумма всех ваших существующих атрибутов ATTACK_DAMAGE с оператором `MULTIPLY_SCALAR_1` и умножается с учетом вашего текущего урона атаки (включая эффект силы, если он включен)
  <br/>
  :::info
  Формула:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: тип урона -> [Список DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
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
Чтобы нанести настоящий урон, можно использовать:\
\- 1.20.5++ используйте команду /minecraft\:damage, например\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- используйте команду REGAIN HEALTH, это не лучший вариант, но рабочий обходной путь.
:::

### DAMAGE\_NO\_KNOCKBACK

* Информация: наносит игроку заданное количество урона без отбрасывания. (Урон, нанесенный с помощью этой команды, не считается уроном от игрока и скорее является косвенным уроном)
  * Эта команда запускает активаторы, связанные с уроном, в ExecutableItems и ExecutableEvents
  *   Тип урона в Spigot: ENTITY\_ATTACK, если в активаторе участвует игрок.

      В противном случае тип урона в Spigot: CUSTOM
* Настройки команды:
  * `{amount}`: количество урона в единицах здоровья (не в сердцах)
  * `{amplified If Strength Effect}`: true или false, Сила 1 -> + 1.5 урона, ....
  * `{amplified with attack attribute}`: true или false, для игрока с бонусом урона 500% команда нанесет 5 x "\<damage>".
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

* Информация: позволяет дать себе кастомное усиление урона
  * Эта команда усиливает и урон кастомных команд, например (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Эта команда не усиливает урон снарядов
* Настройки команды:
  * `{modification in percentage example 100}`: величина усиления. Пример ниже:
    * 50 = вы наносите на 50% больше урона
    * -80 = вы наносите на 80% меньше урона
  * `{timeinticks}`: длительность кастомного усиления урона
* Пример: (команда ниже дает вам +50% наносимого урона на 10 с)

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

Эту команду можно использовать несколько раз, и усиление будет суммироваться. В этом примере в интервале \[0-10] секунд игрок наносит на 50% больше урона, затем в интервале \[10-20] секунд на 100% больше, а потом в интервале \[20-30] секунд снова на 50% больше, так как в интервале \[10-20] сложились две команды DAMAGE\_BOOST.

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

* Информация: позволяет дать себе кастомную сопротивляемость урону, задав собственные множители получаемого урона
* Настройки команды:
  * `{modification in percentage example 100}`: величина множителя. Пример ниже:
    * 50 = вы получаете на 50% больше урона\
      -80 = вы получаете на 80% меньше урона
  * `{timeinticks}`: длительность кастомной сопротивляемости урону
* Пример: (команда ниже дает вам +50% получаемого урона на 10 с)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Информация: ВИЗУАЛЬНО заменяет (риска потерять предметы нет) слот экипировки заданным материалом
  * Требуется [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * Визуальный эффект показывается игрокам, которые видят игрока / сущность (и самому игроку). Игрок, который подойдет позже, тоже его увидит.
  * У сущности один визуальный эффект на слот: новая команда EQUIPMENT\_VISUAL\_REPLACE на том же слоте заменяет предыдущую, с новым временем. Визуальный эффект заканчивается через `{timeinticks}`, с помощью EQUIPMENT\_VISUAL\_CANCEL либо когда сущность умирает, исчезает или игрок выходит.
* Настройки команды:
  * `{EquipmentSlot}`: слот
    * Варианты:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: id предмета материала, на который вы хотите заменить, или id из EI
  * `{amount}`: размер стака 
  * `{timeinticks}`: как долго будет действовать маскировка. (20 тиков = 1 сек)
*   Пример: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Информация: отменяет команду EQUIPMENT\_VISUAL\_REPLACE
  * Работает на игроках и на мобах: игроки, которые видят сущность, снова видят ее настоящий предмет в этом слоте.
* Настройка команды:
  * `{EquipmentSlot}`: слот
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
* Информация: заставляет игрока/сущность выбросить предмет. Поддерживает два режима:
  * **Режим слота**: выбрасывает предмет из указанного слота инвентаря
  * **Режим EI ID**: выбрасывает из инвентаря все предметы, соответствующие указанному ID ExecutableItem (только для игрока)
* Настройки команды:
  * `slot:`: число, -1 для основной руки (по умолчанию: -1). См. изображение со слотами ниже.
  * `ei_id:`: ID ExecutableItem, который нужно выбросить (переопределяет режим слота, если указан)

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

* Информация: подбрасывает игрока/цель в том направлении, куда они смотрят
* Настройки команды:
  * `{number}`: значение, определяющее силу рывка
  * `{custom_y}` : задает вертикальный импульс (советую ставить небольшое значение, например 0.5 - 1, если вам не нужен большой прыжок.)
  * `{falldamage}`: включает или отключает урон от падения
* Пример:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Информация: применяет заморозку от снега из Minecraft 1.18
* Настройка команды:
 * `{time in ticks}`: время заморозки в тиках. (20 тиков = 1 сек)
* Пример:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Информация: применяет свечение к игроку
* Настройки команды:
  * `{time in ticks}`: длительность свечения в тиках
  * `{color}`: какого цвета будет свечение. [Справочник цветов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Пример:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Информация: позволяет выполнить команду в определенном направлении для сущностей
* Настройки команды:
  * `{range}`: как далеко может находиться сущность, чтобы команда HITSCAN выбрала ее целью
  * `{radiusOfHitscan}`: насколько ШИРОКИМ является цилиндр. По сути, это разница между выстрелом пули и выстрелом пушечного ядра.
  * `{pitch}`: в каком направлении стрелять относительно pitch игрока
  * `{yaw}`: то же самое, что и Pitch, но для yaw
  * `{leftRightShift}`:
    * -5 = hitscan НАЧИНАЕТСЯ в 5 блоках слева.
    * 0 = hitscan центрирован там, где находится игрок.
    * 5 = hitscan НАЧИНАЕТСЯ в 5 блоках справа от игрока. 
  * `{yShift}`: то же, что и влево/вправо, но по другой оси. 
  * `{throughEntities}`: Boolean: может ли HITSCAN проходить сквозь сущности.
  * `{throughBlocks}`: Boolean: может ли HITSCAN проходить сквозь блоки.
  * `{limit}`: количество целей, которые могут быть затронуты
  * `{sort}`: полезно для опции limit.
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайно выбирает любую сущность в радиусе действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в диких землях или в привате самого запускающего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
  * `{command(s)}`: то же, что и в командах AROUND, вы можете написать `command1 <+> command2` ... и использовать плейсхолдер %around\_target%
* Пример:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Команды после `HITSCAN_ENTITIES` (и после каждого `<+>`) выполняются для **каждой пораженной сущности**, как команды сущности: `REGAIN_HEALTH 4` лечит пораженную сущность, а не запустившего команду. Чтобы воздействовать на запустившего, используйте ванильную команду с `%player%`, например `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Изображение для понимания:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Информация: позволяет выполнить команду в определенном направлении для игроков
* Настройки команды:
  * `{range}`: как далеко может находиться сущность, чтобы команда HITSCAN выбрала ее целью
  * `{radiusOfHitscan}`: насколько ШИРОКИМ является цилиндр. По сути, это разница между выстрелом пули и выстрелом пушечного ядра.
  * `{pitch}`: в каком направлении стрелять относительно pitch игрока
  * `{yaw}`: то же самое, что и Pitch, но для yaw
  * `{leftRightShift}`:
    * -5 = hitscan НАЧИНАЕТСЯ в 5 блоках слева.
    * 0 = hitscan центрирован там, где находится игрок.
    * 5 = hitscan НАЧИНАЕТСЯ в 5 блоках справа от игрока.
  * `{yShift}`: то же, что и влево/вправо, но по другой оси.
  * `{throughEntities}`: Boolean: может ли HITSCAN проходить сквозь сущности.
  * `{throughBlocks}`: Boolean: может ли HITSCAN проходить сквозь блоки.
  * `{limit}`: количество целей, которые могут быть затронуты
  * `{sort}`: полезно для опции limit.
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайно выбирает любую сущность в радиусе действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в диких землях или в привате самого запускающего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
  * `{command(s)}`: то же, что и в командах AROUND, вы можете написать `command1 <+> command2` ... и использовать плейсхолдер %around\_target%
* Пример:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Изображение для понимания:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Информация: делает игрока неуязвимым на заданное время
* Настройка команды:
 * `{ticks}`: время неуязвимости в тиках. (20 тиков = 1 сек)
  * Поддерживает отрицательные значения для уменьшения времени неуязвимости, например той, что действует после получения удара.
* Пример:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Информация: подбрасывает игрока в воздух
* Настройка команды:
  * `{number}`: насколько сильным будет рывок
  * `{fall damage}`: (необязательно) (по умолчанию = false) выберите, должна ли команда наносить урон от падения.
* Пример:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Информация: запускает сущность в вашем направлении
* Настройки команды:
  * `{entityType}`: ID моба запускаемой сущности (ЗАГЛАВНЫМИ БУКВАМИ) [Список EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (число, Double) задает скорость сущности
  * `[angle rotation y]`: (только для 1.14 и выше) (необязательно) (по умолчанию = 0) (в градусах) задает направление, в котором будет запущена сущность
* Пример:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Пример тройного выстрела:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Информация: наносит урон цели, но тип урона в основном берется из плагина MythicLib
* Настройки команды:
  * `{number}`: урон, наносимый целям (по умолчанию: 10)
  * `{damage_type}`: тип наносимого урона (по умолчанию: PHYSICAL)
    * Пример: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false, отбрасывает ли цель (по умолчанию: false)
  * `{element}`: указывает, какой стихией является атака (по умолчанию: FIRE)
    * Справка: [Список стихий MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false, добавляется ли `CRITICAL_STRIKE_POWER` атакующего в формулу урона или нет (по умолчанию: false)
    * Формула: `number * (number * (total critical_strike_power/100))`
* Пример:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Информация: выбирает целью сущности в заданном радиусе и заставляет их выполнять команды
  * Доступные сущности -> [Список LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Настройки команды:
  * `{distance}`: в каком радиусе команда будет выбирать сущности
  * `{displayMsgIfNoEntity}`: (true или false) уведомлять ли пользователя предмета, если не удалось выбрать целью ни одного моба.
    * **Установите false, чтобы скрыть сообщение**
  * `{throughBlocks}`: будут ли затронуты мобы, находящиеся за блоками
  * `{safeDistance}`: если расстояние между целью и тем, кто запускает команду, меньше или равно значению safeDistance, цель не будет затронута.
  * `{offsetYaw}`: направление по yaw, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetPitch}`: направление по pitch, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetDistance}`: после расчета offsetYaw и offsetPitch это значение сдвигает позицию/центр команды AROUND относительно координат xyz источника.
  * `{limit}`: количество целей, которые могут быть затронуты
  * `{sort}`: полезно для опции limit.
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайно выбирает любую сущность в радиусе действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в диких землях или в привате самого запускающего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
  * `{nonliving}`: true/false. Если true, целью будут также другие сущности, например стрелы и стойки для брони. Любые баги, возникающие при выполнении команд сущностей с включенным этим аргументом, скорее всего, будут проигнорированы из-за расширения объема задач.
  * Вы можете добавить в ЧЕРНЫЙ или БЕЛЫЙ СПИСОК сущности, указав один из этих вариантов в любом месте команды:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Плейсхолдеры:** плейсхолдеры те же, что и [Entity Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), но нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

:::info
**Количество целей:** `%around_target_count%` возвращает число сущностей, выбранных командой. Оно одинаково для каждой цели и учитывает цели, оставшиеся после `distance`, `safeDistance`, `throughBlocks`, `regionCheck` и `WHITELIST(...)` / `BLACKLIST(...)` и `limit`. `CONDITIONS(...)`, проверяемые для каждой цели, не учитываются. Поддерживается сокращение `+N` / `-N`: `%around_target_count%-1`.

Пример: `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
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

Чтобы использовать NBT сущности в поле WHITELIST/BLACKLIST, необходимо установить плагин [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Поддерживаются [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), поэтому вы можете добавить, например, что-то вроде: `ZOMBIE{IsBaby:1}` 

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
Вы можете вкладывать в MOB\_AROUND команды: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

В этом случае разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

разделитель базовой команды : `<+>`

первая вложенная команда : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер : %around\_target%

первая вложенная команда : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Информация: выбирает целью ближайшего моба к игроку/цели.
* Настройки команды:
    * `{max accepted distance}`:  максимально допустимое расстояние до "сущности".
    * `{command(s)}`: команды, которые будут выполнены

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** плейсхолдеры те же, что и [Entity Placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders), но нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Пример:

Наносит урон ближайшему игроку

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Вы можете вкладывать в MOB\_NEAREST команды: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

В этом случае разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

разделитель базовой команды : `<+>`

первая вложенная команда : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер : %around\_target%

первая вложенная команда : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Информация: выбирает целью ближайшего игрока к игроку/цели.
* Настройки команды:
    * `{max accepted distance}`: максимально допустимое расстояние до "цели".
    * `{command}`: команда, которая будет выполнена

:::tip
Вы можете добавить **несколько команд**! Используйте разделитель `<+>`

Пример: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Плейсхолдеры:** плейсхолдеры те же, что и [Player Placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders), но нужно заменить "player" на "around\_target"

Пример: %around\_target%, %around\_target\_uuid%
:::

* Пример:

Наносит урон ближайшему игроку

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Вы можете вкладывать в NEAREST команды: AROUND, IF, NEAREST, ALL\_PLAYERS

В этом случае разделитель и плейсхолдеры будут меняться в зависимости от уровня вложенности.\

разделитель базовой команды : `<+>`

первая вложенная команда : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
базовый плейсхолдер : %around\_target%

первая вложенная команда : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Информация: отправляет сообщение операторам, находящимся онлайн, и в консоль
* Настройка команды:
  * `{text}`: текст для отправки
* Пример:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Информация: создает частицы в местоположении игрока/цели. [Список частиц](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Настройки команды:
  * `{type}`: тип частицы (ЗАГЛАВНЫМИ БУКВАМИ)
  * `{quantity}`: количество создаваемых частиц
  * `{offset}`: радиус области вокруг местоположения игрока/цели, в которой могут появляться частицы
  * `{speed}`: насколько быстрыми или крупными будут частицы
* Пример:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Информация: дает вам заданное количество HP
* Настройка команды:
  * `{amount}`: количество HP, которое вы хотите получить
   * Поддерживает отрицательные значения, если вы хотите нанести "истинный урон". 
* Пример:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Информация: тушит вас, если вы горите
* Без настроек команды
* Пример:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Информация: убирает эффект свечения определенного цвета у игрока | цели.
* Настройка команды:
 * `[color]`: (необязательно) (по умолчанию = WHITE) цвет, который нужно убрать. [Справочник цветов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Пример:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Информация: добавляет эффект свечения определенного цвета игроку | цели.
* Настройка команды:
 * `[color]`: (необязательно) (по умолчанию = WHITE) цвет, который нужно убрать. [Справочник цветов](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Пример:

```yaml
- SET_GLOW BLACK
```

:::info
Совместимо с плагином TAB через -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Информация: устанавливает ваше здоровье на заданное значение
* Настройка команды:
  * `{amount}`: значение здоровья, которое нужно установить
* Пример:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Информация: заставляет игрока смотреть в заданном положении pitch (-90/90 градусов, направление вверх и вниз)
* Настройки команды:
  * `{pitch_number}`: число, которое вы хотите ввести. Плейсхолдеры тоже работают
  * `{keepVelocity}`: позволяет сохранить скорость игрока
* Пример:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Информация: заставляет игрока смотреть в заданном положении yaw (360 градусов, направление влево и вправо)
* Настройки команды:
  * `{yaw_number}`: число, которое вы хотите ввести. Плейсхолдеры тоже работают
  * `{keepVelocity}`: позволяет сохранить скорость игрока
* Пример:

```yaml
- SET_YAW 10 false
```

### SPIN

* Информация: вращает цель
* Настройки команды:
  * `{duration ticks}`: длительность вращения
  * `{velocity}`: скорость вращения
* Пример:

```yaml
- SPIN 20 1
```

:::info
Вопрос: как заморозить цели/игроков/мобов?

Ответ: выполните, например, **`SPIN {duration} 0`**
:::

### STEAL

* Информация: крадет предмет из инвентаря цели
* Настройки команды:
  * `{slot}`: -1 для основной руки. Смотрите справочник слотов ниже.
  * `[remove item]`: (необязательно) (по умолчанию = true)
* Пример:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Информация: бьет молнией без урона по тому, кто выполняет команду
* Без настроек команды 
* Пример:

```yaml
- STRIKELIGHTNING
```

:::info
Это не то же самое, что команда smite из Essentials. Если вы хотите поразить молнией своих целей, поместите команду в target commands или entity commands вместе с подходящими активаторами, например `PLAYER_CLICK_ON_PLAYER`.
:::

### STUN ENABLE/DISABLE

* Информация: включает или отключает оглушение для игрока (он ложится на землю и не может двигать камерой)
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

* Информация: телепортирует игрока/сущность в указанное место
* Настройки команды:
  * `{world}`: мир, в который нужно телепортировать
  * `{x}`: координата x места телепортации.
  * `{y}`: координата y места телепортации.
  * `{z}`: координата z места телепортации.
  * `[pitch]`: (необязательно) (по умолчанию = сохраняется pitch игрока) pitch в месте телепортации
  * `[yaw]`: (необязательно) (по умолчанию = сохраняется yaw игрока) yaw в месте телепортации
  * `[keepVelocity]`: (необязательно) (по умолчанию = true) позволяет не останавливать скорость игрока.
* Пример:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Информация: телепортирует вас туда, куда указывает курсор
* Настройки команды:
  * `{range}`: как далеко вы хотите телепортироваться
  * `{acceptAir}`: чтобы можно было телепортироваться даже в воздух, установите значение true
* Пример:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Информация: переносит предмет внутри инвентаря
* Настройки команды:
  * `{slot of launcher}`: слот предмета, который будет перемещен
  * `{slot of receiver}`: слот, в который попадет предмет
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Пример:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Информация: телепортирует вас туда, куда указывает курсор, не учитывая, что вы можете оказаться в невозможных местах
* Настройка команды:
  * `[maxRange]`: (необязательно) (по умолчанию = 200) как далеко вы хотите телепортироваться
* Пример:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Информация: телепортирует в мир в те же координаты
* Настройка команды:
 * `{world}`: название мира, в который вы хотите телепортировать игрока/цель.
* Пример:

```yaml
- WORLD_TELEPORT spawn_end
```

## Animation Commands

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
