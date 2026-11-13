---
description: >-
  Список команд блоков для ExecutableBlocks: AROUND, MINEINCUBE, VEIN_BREAKER,
  SETBLOCK и другие, с настройками и примерами использования.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T18:16:26.680Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Команды блоков

:::tip
Совместимость «multi-world» для ванильных команд.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Пример: вы хотите призвать Зомби в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Включайте **HIDE USAGE**, когда используете большое число в **MINEINCUBE**: это может уменьшить лаги, которые обычно часто возникают, например, при использовании `MINEINCUBE 8`
:::

## Кастомные команды

_Отсортированы в алфавитном порядке_

### &lt;+&gt; (Around Command Connector)

* Описание: позволяет добавить больше команд в одну строку команды. Нормально работает только с `AROUND` и `MOB_AROUND`.
* Пример: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Описание: выбирает игроков в заданном радиусе и заставляет их выполнять команды
* Настройки команды
    * `{distance}`: на каком расстоянии (радиус) команда будет выбирать игроков
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Если true, команда не затронет того, кто её запустил.
      * Пример ситуации: когда вы запускаете активатор ExecutableItem и этот активатор поддерживает команды блоков,
      он игнорирует игрока, который активировал активатор. Однако если эта опция false, команда затронет и вас.
    * `{throughBlocks}`: будет ли команда затрагивать мобов, находящихся за блоками
    * `{limit}`: количество целей, которые могут быть затронуты
    * `{sort}`: полезно для опции limit.
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайным образом выбирает любую сущность в радиусе действия команды.
    * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель либо в диких землях, либо в привате вызвавшего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
    * `{command}`: команда, которую выполнят выбранные игроки
* Пример:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Это призывает молнию на игроков в радиусе 20 блоков вокруг блока, по которому кликнули.

:::info
**Количество целей:** `%around_target_count%` возвращает число игроков, выбранных командой. Оно одинаково для каждой цели и учитывает цели, оставшиеся после `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` и `limit`. `CONDITIONS(...)`, проверяемые для каждой цели, не учитываются. Поддерживается сокращение `+N` / `-N`: `%around_target_count%-1`.

Пример: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Вы можете добавлять условия в команду AROUND

* Условие выглядит так: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Условия работают с плейсхолдерами, но они должны записываться как %::\_::% вместо %\_%
  * Например, %::player\_health::%
* Чтобы добавить БОЛЕЕ одного условия, используйте «&&» между условиями
* Пример:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Помните, что часть CONDITIONS() обрабатывает находящиеся в ней плейсхолдеры для игрока, выбранного командой AROUND. Поэтому в плейсхолдерах выше на самом деле проверяется, больше ли здоровье цели 10 и называется ли игрок, выбранный командой AROUND, «2Ssomar»
:::

### APPLY\_BONEMEAL

* Описание: применяет тот же эффект, что и при использовании костной муки игроком на блоке (культуре)
* Без настроек команды
* Пример:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Описание: ломает целевой блок
* Без настроек команды
* Пример:

```
 - BREAK
```

### CONTENT\_ADD

* Описание: добавляет предмет в контейнер
* Настройки команды
  * \{Item\}: добавляемый предмет
  * \[Amount]: добавляемое количество (по умолчанию 1)
* Пример:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Описание: очищает контейнер
* Без настроек команды
* Пример:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Описание: удаляет предмет из контейнера
* Настройки команды
  * \{Item\}: удаляемый предмет
  * \[Amount]: удаляемое количество (по умолчанию 1)
* Пример:

```
- CONTENT_REMOVE STONE 1
```

:::info
Она не удалит ExecutableItems, если совпадает материал. Единственный способ: указать через EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Описание: отправляет сообщение в консоль
* Настройка команды
  * `{text}`: текст, отправляемый в консоль
* Пример:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Описание: меняет тип блока, выбранного активатором
* Настройка команды
* Пример:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Работает с ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Описание: ускоряет рост культур вокруг блока
* Команда: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Пример:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Описание: выбрасывает ExecutableItem в месте расположения блока
* Настройки команды
  * `{id}`: ID предмета ExecutableItem
  * `{quantity}`: количество выбрасываемых executable-предметов
  * `[owner]`: (необязательно) владелец выброшенного предмета (ник игрока или UUID)
  * `[itemdata]`: (необязательно) настройки данных предмета, содержащие:
    * `Usage`: задаёт значение использований
    * `Variables`: задаёт кастомные переменные (формат: `{key:value}`)
    * `Durability`: задаёт значение прочности
* Пример:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Описание: выбрасывает Executable Block в месте расположения блока
* Настройки команды
  * `{id}`: ID предмета ExecutableBlock
  * `{quantity}`: количество выбрасываемых executable-блоков
* Пример:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Описание: осушает в кубе радиуса «r» источники лавы и/или воды
* Настройки команды
  * `{radius}`: радиус в блоках (лимит 9), лимит можно обойти, добавив * перед радиусом (на свой страх и риск).
  * `{drainType}`: LAVA или WATER (не нужно, если вы хотите оба)
  * `[waterlogged]`: (необязательно) (по умолчанию = false) Если true и вода осушается (`WATER` или без `{drainType}`), также осушаются блоки с водой (плиты, ступени, заборы...) в кубе, а блоки `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` и `BUBBLE_COLUMN` удаляются без выпадения предметов, как это делает губка. Только для серверов 1.13+.
* Пример:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Без `waterlogged:true` блоки с водой сохраняют свою воду, и она может снова затечь в осушенную область.
:::

### DROPITEM

* Описание: выбрасывает предмет в месте расположения блока
* Настройки команды
  * `{material}`: тип предмета.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: количество выбрасываемых предметов
* Пример:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Описание: ломает выбранный вами блок и создаёт в этом месте активированный TNT
* Без настроек команды
* Пример:

```
- EXPLODE
```

### FARMINCUBE

* Описание: ломает все культуры в заданном радиусе
* Настройки команды
  * `{radius}`: радиус области культур, которые вы хотите сломать. **(ЛИМИТ 9)**
  * `{drop}`: (по умолчанию = true) выпадает ли добыча из блока
  * `{onlyMaxAge}`: (по умолчанию = true) ломаются только культуры с максимальным возрастом
  * `{replant}`: (по умолчанию = false) будет ли культура посажена заново
  * `{event}`: (по умолчанию = false, true с `runActivatorOnBlocks:true`) будет ли культура вызывать событие разрушения блока.
  * `[runActivatorOnBlocks]`: (необязательно) (по умолчанию = false) только для ExecutableItems. Если true, культуры, сломанные командой, также запускают активатор, который её запустил, см. [runActivatorOnBlocks](#runactivatoronblocks). Можно написать в любом месте команды, и он включает `{event}`, если только `{event}` не указан как false.
* Пример:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Описание: удобряет ближайшие культуры на 1 стадию роста, это как применение костной муки, но растение вырастает в 100% случаев.
* Настройка команды
  * `{radius}`: радиус области культур, которые вы хотите удобрить **(ЛИМИТ 9)**
* Пример:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Описание: разрушает блоки в радиусе в форме прямоугольника. Каждый блок, сломанный этой командой, считается событием разрушения блока игроком.
* Настройки команды
  * `{radius}`: радиус куба
  * `{depth}`: глубина прямоугольника.
  * `{drop}`: выпадает ли добыча из блока
  * `{createBBEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, сломанного командой MINEINCUBE (по умолчанию true)
  * `[direction]`: (необязательно) (по умолчанию = направление игрока) если вы хотите принудительно задать направление. 
    * Варианты:
      * `north/n/-z` : север
      * `south/s/+z` : юг
      * `east/e/+x` : восток
      * `west/w/-x` : запад
      * `up` : вверх
      * `down` : вниз
      * `auto` : использует логику %player_direction_xz% из Player Expansion плагина PlaceholderAPI для определения направлений `N/W/S/E`. Для логики Up/Down: направление `UP`, если pitch `<=` -45; направление `DOWN`, если pitch `>=` 45. 
  * `[smelt]`: (необязательно) (по умолчанию = false) использует логику команды SMELT. Если блок можно переплавить, выпадает переплавленная версия. В противном случае выпадает сам сломанный блок.
* Пример:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Поддерживается %player\_direction\_xz% из PlaceholderAPI - Player expansion\
Пример: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Описание: заставляет целевой блок стрелять снарядами
* Настройки команды
  * `{projectile}`: тип снаряда
  * `{speed}`: скорость снаряда
  * `{despawnDelay}`: задержка до исчезновения в секундах (по умолчанию 10)
* Пример:

```
- LAUNCH ARROW 2 5
```

:::info
Блок должен быть направленным (directional), чтобы корректно ЗАПУСКАТЬ снаряд.

Пример: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Описание: разрушает блоки в радиусе в форме кубоида. Каждый блок, сломанный этой командой, считается событием разрушения блока игроком.
* Настройки команды
  * `{radius}`: радиус куба блоков, которые вы хотите сломать **(ЛИМИТ 9)**
  * `{droploot}`: выпадает ли добыча из блока
  * `{createEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, сломанного командой MINEINCUBE (по умолчанию true)
  * `{offsetBreak}`: начинается ли область разрушения от сломанного блока или от «центра», чтобы область действительно соответствовала выбранному «радиусу». (по умолчанию false)
  * `[smelt]`: (необязательно) (по умолчанию = false) использует логику команды SMELT. Если блок можно переплавить, выпадает переплавленная версия. В противном случае выпадает сам сломанный блок.
  * `[runActivatorOnBlocks]`: (необязательно) (по умолчанию = false) только для ExecutableItems. Если true, блоки, сломанные командой, также запускают активатор, который её запустил, см. [runActivatorOnBlocks](#runactivatoronblocks). Оставьте `{createEvent}` равным true.
* Пример:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Описание: разрушает блоки в радиусе в форме сферы. Каждый блок, сломанный этой командой, считается событием разрушения блока игроком.
* Настройки команды
  * `{radius}`: радиус сферы
  * `{drop}`: выпадает ли добыча из блока
  * `{create blockBreakEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, сломанного командой
  * `[smelt]`: (необязательно) (по умолчанию = false) использует логику команды SMELT. Если блок можно переплавить, выпадает переплавленная версия. В противном случае выпадает сам сломанный блок.
* Пример:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Описание: выбирает сущности в заданном радиусе и заставляет их выполнять команды
* Настройки команды
  * `{distance}`: на каком расстоянии (радиус) команда будет выбирать сущности
  * `{displayMsgIfNoEntity}`: (true или false) уведомлять ли пользователя предмета, если команде не удалось выбрать ни одного моба.
    * **Установите false, чтобы скрыть сообщение**
  * `{throughBlocks}`: будет ли команда затрагивать мобов, находящихся за блоками
  * `{safeDistance}`: если расстояние между целью и запустившим меньше или равно значению safeDistance, цель не будет затронута.
  * `{offsetYaw}`: направление yaw, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetPitch}`: направление pitch, в котором вы хотите сместить точку (не зависит от значения yaw источника)
  * `{offsetDistance}`: после вычисления offsetYaw и offsetPitch это значение сдвигает позицию/центральную точку команды AROUND относительно координат xyz источника.
  * `{limit}`: количество целей, которые могут быть затронуты
  * `{sort}`: полезно для опции limit.
    * NEAREST : выбирает сущности, ближайшие к источнику.
    * RANDOM : случайным образом выбирает любую сущность в радиусе действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель либо в диких землях, либо в привате вызвавшего (в контексте плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами приватов)
  * `{nonliving}`: true/false. Если true, команда будет выбирать и другие сущности, например стрелы и стойки для брони. Любые баги, возникающие при выполнении команд сущностей с включённым этим аргументом, скорее всего, будут проигнорированы из-за разрастания рамок задачи (scope creep).
  * Вы можете добавить сущности в BLACKLIST или WHITELIST, указав одну из этих записей в любом месте команды:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Пример:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Чтобы использовать NBT сущностей в поле WHITELIST/BLACKLIST, необходимо установить плагин NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Поддерживаются теги NBT, поэтому вы можете добавить, например, что-то вроде: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Описание: перемещает все сущности над блоком в направлении блока (для лучшего понимания: это как работает конвейер)
* Без настроек команды
* Пример:

```
- MOVE
```

:::info
**Эта команда работает только на направленных (directional) блоках.**
:::

### MOB\_NEAREST

* Описание: выбирает ближайшего моба к игроку/цели.
* Настройки команды
    * `{max accepted distance}`: максимально допустимое расстояние до «сущности».
    * `{command(s)}`: команда, которая будет выполнена
* Пример:

Наносит урон ближайшему игроку

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Описание: выбирает ближайшего игрока к игроку/цели.
* Настройки команды
    * `{max accepted distance}`: максимально допустимое расстояние до «цели».
    * `{command}`: команда, которая будет выполнена
* Пример:

Наносит урон ближайшему игроку

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Открывает или закрывает открываемый блок.
* Без настроек команды
* Пример:

```
- OPENDOOR
```

### OPMESSAGE

* Описание: отправляет сообщение онлайн-операторам (OP) и в консоль
* Настройка команды
  * `{text}`: отправляемый текст
* Пример:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Описание: создаёт частицы в месте расположения блока
* Настройки команды
  * `{type}`: тип частицы.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: количество создаваемых частиц
* `{offset}`: радиус области, в которой могут появляться частицы в месте расположения блока
* `{speed}`: насколько быстрыми или большими будут частицы
* Пример:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Описание: размещает жидкость в указанном месте. Если в этом месте есть котёл, наполняет его. Если есть блок, который можно залить водой, заливает его. В остальных случаях ничего не делает
* Настройки команды
  * `{type}`: тип жидкости (по умолчанию: WATER). Варианты: WATER/LAVA
* Пример:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Описание: сажает растения квадратом относительно выбранного блока.
* Настройки команды
  * `{radius}`: радиус квадрата
  * `{takeFromInv}`: по умолчанию true, семена берутся из инвентаря игрока, иначе семена генерируются
  * `{acceptEI}`: по умолчанию false, принимает EI для семян
  * `{cropType}`: по умолчанию принимаются все семена (семена берутся в порядке их расположения в инвентаре)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: превращает область посадки из квадрата в куб. Полезно для посадки какао на площади
* Пример:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Описание: удаляет блок без выпадения предметов, просто убирает
* Без настроек команды
* Пример:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Описание: продаёт всё содержимое сундука / печи / всех блоков, у которых есть инвентарь.
* Настройки команды
  * `{price_boost}`: множитель типа float для проданных предметов. Например, если здесь значение 2, за проданные предметы вы получите вдвое больше от цены продажи.
  * `{deleteUnsellable}`: булево значение, определяющее, нужно ли удалять непродаваемые предметы
* Пример:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Требуются ShopGUIPlus (приоритет), Vault и цены CMI
:::

### SETBLOCK

* Описание: заменяет целевой блок другим блоком
* Настройка команды
  * `{material}`: устанавливаемый материал
* Пример:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Описание: заменяет целевой блок временным блоком.
* Настройки команды
  * `{material}`: устанавливаемый материал
  * `{time}`: время в тиках (20 тиков = 1 сек)
* Пример:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Она не заменяет блоки с дополнительными данными (инвентарь, поворот и т. д.)
:::

### SET\_TEMP\_BLOCK\_POS

* Описание: заменяет целевой блок временным блоком
* Команда: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Пример:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Она не заменяет блоки с дополнительными данными (инвентарь, поворот и т. д.)
:::

### SETBLOCKPOS

* Описание: устанавливает блок в определённой позиции
* Настройки команды
  * `{x}`: позиция блока по X
  * `{y}`: позиция блока по Y
  * `{z}`: позиция блока по Z
  * `{material}`: тип блока
  * `{bypassWG}`: будет ли WorldGuard мешать установке блока
* Пример:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Описание: команда setblock, но для Executable Blocks
* Настройки команды
  * `{id}`: ID Executable Block
  * `{x}`: координата X
  * `{y}`: координата Y
  * `{z}`: координата Z
  * `{world}`: мир, в котором должен находиться Executable Block
  * `{replace}`: нужно ли заменять блок, существующий в этом месте
  * `{bypassProtection}`: (по умолчанию false) нужно ли заменять блок, даже если там действует защита территории от плагина. 
  * `[ownerUUID]`: (необязательно) (по умолчанию = без владельца) uuid игрока, который станет владельцем eb
* Пример:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Описание: собирает спавнер, связанный с событием
* Без настроек команды
* Пример:

```
- SILK_SPAWNER
```

:::info
Команда SILK\_SPAWNER совместима только со следующими плагинами:

* RoseStacker
* WildStacker

И, конечно, с ванильными спавнерами.
:::

### SMELT

* Описание: переплавляет целевой блок, выбрасывая переплавленный предмет, например iron\_ore -> iron\_ingot, поддерживает удачу (fortune), если блок нельзя переплавить, ничего не произойдёт. Добыча блока не изменится.
* Настройка команды
  * `[generateEvent]`: (необязательно) (по умолчанию = true) генерируется ли при этом событие разрушения блока
* Пример:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Описание: бьёт молнией без урона в блок, который выполняет команду
* Без настроек команды
* Пример:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Описание: ломает блоки жилами за одно разрушение блока
* Настройки команды
  * `{maxVeinSize}`: (по умолчанию = 10) максимальное количество блоков, которое может сломать команда
  * `[createBBEvent]`: (необязательно) (по умолчанию = true) генерируется ли событие разрушения блока
  * `[smelt]`: (необязательно) (по умолчанию = false) использует логику команды SMELT. Если блок можно переплавить, выпадает переплавленная версия. В противном случае выпадает сам сломанный блок.
  * `[runActivatorOnBlocks]`: (необязательно) (по умолчанию = false) только для ExecutableItems. Если true, блоки жилы также запускают активатор, который запустил команду, см. [runActivatorOnBlocks](#runactivatoronblocks). Оставьте `createBBEvent` равным true.
* Пример:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` не является настройкой VEIN\_BREAKER. Старый шаблон внутриигрового редактора записывал `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: часть `triggerEvent:true` не имеет эффекта, её можно удалить. Чтобы выбрать, генерирует ли команда события разрушения блока, используйте `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` является настройкой VEIN\_BREAKER, [MINEINCUBE](#mineincube) и [FARMINCUBE](#farmincube). Её читает только ExecutableItems.

* Без неё (по умолчанию `false`) блоки, сломанные командой, не запускают активатор, который содержит команду: именно это предотвращает цикл разрушений блоков. Остальные активаторы ваших предметов (без команды разрушения) по-прежнему срабатывают для этих блоков.
* С `runActivatorOnBlocks:true` каждый блок, сломанный командой, также запускает активатор, который её запустил, как если бы игрок сломал его сам: применяются его условия, `desactiveDrops` (без ванильной добычи), его другие команды (например, `DROPITEM`), его `usageModification` и изменения его переменных для каждого блока. `cancelEvent: true` тоже применяется: в этом случае такие блоки не ломаются.
* Команда разрушения для этих блоков повторно не запускается, поэтому цикла нет.
* Кулдауны, использования в день и необходимые функции (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) для этих блоков не проверяются: они проверяются и списываются один раз, для блока, который запустил активатор. Иначе кулдаун остановил бы жилу после первого блока.
* Активатор получает эти блоки через их события разрушения блока: оставьте `createBBEvent` (VEIN\_BREAKER) или `{createEvent}` (MINEINCUBE) равными `true`, это их значение по умолчанию. FARMINCUBE генерирует события сама с `runActivatorOnBlocks:true`, если только её аргумент `{event}` не равен `false`.
* Эти события являются разрушениями блоков, поэтому настройка работает, только если команда находится в активаторе PLAYER\_BLOCK\_BREAK.

Пример: каждый блок жилы выбрасывает 1 алмаз вместо своей ванильной добычи и стоит 1 использование.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
