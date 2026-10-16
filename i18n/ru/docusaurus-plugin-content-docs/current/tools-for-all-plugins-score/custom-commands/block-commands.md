---
description: >-
  Полный список команд для блоков в плагине ExecutableBlocks: AROUND,
  MINEINCUBE, LAUNCH, SETBLOCK и другие с настройками.
source_hash: 03a7c058f04e398e
translated_at: '2026-10-16T21:01:36.000Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Команды для блоков

:::tip
Совместимость "мульти-мир" (multi-world) для ванильных команд.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Например, вы хотите призвать Зомби в мире SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Пример с плейсхолдером:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Включите **HIDE USAGE** при использовании большого числа в **MINEINCUBE**, так как это может сократить лаги, которые обычно часто возникают при использовании `MINEINCUBE 8` например
:::

## Кастомные команды

_Отсортировано в алфавитном порядке_

### &lt;+&gt; (Коннектор команд Around)

* Информация: Позволяет добавить несколько команд в одну строку команды. Будет хорошо работать только с `AROUND` и `MOB_AROUND`.
* Пример: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Информация: Выбирает игроков в определённом радиусе и заставляет их выполнять команды
* Настройки команды
    * `{distance}`: В каком радиусе команда будет выбирать игроков
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Если true, не будет влиять на применившего.
      * Пример ситуации: Когда вы запускаете активатор ExecutableItem, и этот активатор поддерживает команды для блоков, он будет игнорировать того, кто активировал активатор. Однако, если эта опция false, это повлияет и на вас.
    * `{throughBlocks}`: будет ли влиять или нет на мобов, находящихся за блоками
    * `{limit}`: Количество целей, на которые можно повлиять
    * `{sort}`: Полезно для опции limit.
    * NEAREST : Выбирает сущности, находящиеся ближе всего к точке отсчёта.
    * RANDOM : Случайно выбирает любую сущность в пределах радиуса действия команды.
    * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или на территории заявившего (контекст плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами заявок)
    * `{command}`: Команда, которую выполнят выбранные игроки
* Пример:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Это призывает молнию в игроков в радиусе 20 блоков вокруг блока, по которому был клик.

#### Вы можете добавлять условия к команде AROUND

* Условие выглядит как AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Условия работают с плейсхолдерами, но нужно использовать %::\_::% вместо %\_%
  * Например %::player\_health::%
* Чтобы добавить БОЛЬШЕ 1 условия, используйте "&&" между условиями
* Пример:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Учтите, что часть CONDITIONS() обрабатывает плейсхолдеры в ней с игроком, выбранным командой AROUND. То есть то, что фактически произошло в плейсхолдерах выше, это проверка, больше ли здоровье цели, чем 10, и назван ли этот игрок, выбранный командой AROUND, "2Ssomar"
:::

### APPLY\_BONEMEAL

* Информация: Применяет тот же эффект, который происходит, когда игрок использует костную муку на блоке (посев)
* Нет настроек команды
* Пример:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Информация: Разрушает выбранный блок
* Нет настроек команды
* Пример:

```
 - BREAK
```

### CONTENT\_ADD

* Информация: Добавляет предмет в контейнер
* Настройки команды
  * \{Item\}: Предмет для добавления
  * \[Amount]: Количество для добавления (по умолчанию 1)
* Пример:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Информация: Очищает контейнер
* Нет настроек команды
* Пример:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Информация: Удаляет предмет из контейнера
* Настройки команды
  * \{Item\}: Предмет для удаления
  * \[Amount]: Количество для удаления (по умолчанию 1)
* Пример:

```
- CONTENT_REMOVE STONE 1
```

:::info
Это не удалит ExecutableItems, если совпадает материал. Единственный способ это указать с EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Информация: Отправляет сообщение в консоль
* Настройка команды
  * `{text}`: Текст для отправки в консоль
* Пример:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Информация: Изменяет тип блока, выбранного активатором
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

* Информация: Ускоряет рост посевов вокруг блока
* Команда: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Пример:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Информация: Выбрасывает Executable Item в месте расположения блока
* Настройки команды
  * `{id}`: Id предмета ExecutableItem
  * `{quantity}`: Количество executable item, которое выпадет
  * `[owner]`: (Опционально) Владелец выпавшего предмета (игровое имя игрока или UUID)
  * `[itemdata]`: (Опционально) Настройки данных предмета, содержащие:
    * `Usage`: Установить значение использования
    * `Variables`: Установить кастомные переменные (формат: `{key:value}`)
    * `Durability`: Установить значение прочности
* Пример:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Информация: Выбрасывает Executable Block в месте расположения блока
* Настройки команды
  * `{id}`: Id предмета ExecutableBlock
  * `{quantity}`: Количество executable block, которое выпадет
* Пример:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Информация: Осушает в кубе радиусом "r" источники лавы и/или воды
* Настройки команды
  * `{radius}`: Радиус в блоках (лимит 9), вы можете обойти лимит, добавив * перед вашим радиусом (на свой риск).
  * `{drainType}`: LAVA или WATER (не нужно, если хотите оба)
  * `[waterlogged]`: (Опционально) (по умолчанию = false) Если true и осушается вода (`WATER` или без `{drainType}`), также осушает затопленные (waterlogged) блоки куба (плиты, ступеньки, заборы...) и удаляет блоки `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` и `BUBBLE_COLUMN`, ничего не выбрасывая, как это делает губка. Только для серверов 1.13+.
* Пример:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Без `waterlogged:true` затопленные блоки сохраняют свою воду, и она может снова растечься по осушенной области.
:::

### DROPITEM

* Информация: Выбрасывает предмет в месте расположения блока
* Настройки команды
  * `{material}`: Тип предмета.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: Количество предмета, которое выпадет
* Пример:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Информация: Разрушает выбранный блок и создаёт на этом месте активированный тнт
* Нет настроек команды
* Пример:

```
- EXPLODE
```

### FARMINCUBE

* Информация: Разрушает все посевы в заданном радиусе
* Настройки команды
  * `{radius}`: Радиус того, насколько большая область посевов, которую вы хотите разрушить. **(ЛИМИТ 9)**
  * `{drop}`: (по умолчанию = true) Выпадает ли из блока добыча или нет
  * `{onlyMaxAge}`: (по умолчанию = true) Будет разрушать только посевы с максимальным возрастом
  * `{replant}`: (по умолчанию = false) Будет ли посев пересажен снова или нет
  * `{event}`: (по умолчанию = false, true с `runActivatorOnBlocks:true`) Будет ли посев генерировать событие разрушения блока или нет.
  * `[runActivatorOnBlocks]`: (Опционально) (по умолчанию = false) Только для ExecutableItems. Если true, посевы, разрушенные командой, также запускают активатор, который её запустил, см. [runActivatorOnBlocks](#runactivatoronblocks). Можно написать в любом месте команды; включает `{event}`, если только `{event}` не указан как false.
* Пример:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Информация: Удобряет ближайшие посевы на 1 возраст, это как применение костной муки, но растение растёт в 100% случаев.
* Настройка команды
  * `{radius}`: Радиус того, насколько большая область посевов, которую вы хотите удобрить **(ЛИМИТ 9)**
* Пример:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Информация: Разрушает блоки в радиусе в форме прямоугольника. Каждый блок, разрушенный этой командой, засчитывается как событие разрушения блока игроком.
* Настройки команды
  * `{radius}`: Радиус того, насколько большим будет радиус куба
  * `{depth}`: Насколько глубоким будет прямоугольник.
  * `{drop}`: Выпадает ли из блока добыча или нет
  * `{createBBEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, разрушенного MINEINCUBE (по умолчанию true)
  * `[direction]`: (Опционально) (по умолчанию = направление игрока) Если вы хотите принудительно задать направление. 
    * Варианты:
      * `north/n/-z` : Север
      * `south/s/+z` : Юг
      * `east/e/+x` : Восток
      * `west/w/-x` : Запад
      * `up` : Вверх
      * `down` : Вниз
      * `auto` : Использует логику %player_direction_xz% расширения Player PlaceholderAPI для определения направлений `N/W/S/E`. Для логики Вверх/Вниз, направление `UP`, если pitch `<=` -45; направление `DOWN`, если pitch `>=` 45. 
  * `[smelt]`: (Опционально) (по умолчанию = false) Использует логику команды SMELT. Если блок можно переплавить, вместо него выпадет переплавленная версия. В противном случае будет выпадать правильно разрушенный блок.
* Пример:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Поддерживает %player\_direction\_xz% расширения Player PlaceholderAPI\
Пример: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Информация: Заставляет выбранный блок стрелять снарядами
* Настройки команды
  * `{projectile}`: тип снаряда
  * `{speed}`: скорость снаряда
  * `{despawnDelay}`: задержка исчезновения в секундах (по умолчанию 10)
* Пример:

```
- LAUNCH ARROW 2 5
```

:::info
Блок должен быть направленным (directional), чтобы LAUNCH правильно запускал снаряд.

Пример: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Информация: Разрушает блоки в радиусе в форме куба. Каждый блок, разрушенный этой командой, засчитывается как событие разрушения блока игроком.
* Настройки команды
  * `{radius}`: Радиус куба блоков, которые вы хотите разрушить **(ЛИМИТ 9)**
  * `{droploot}`: Выпадает ли из блока добыча или нет
  * `{createEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, разрушенного MINEINCUBE (по умолчанию true)
  * `{offsetBreak}`: Начинает ли область блоков разрушаться от разрушенного блока или от "центра", чтобы область действительно работала с выбранным "радиусом". (по умолчанию false)
  * `[smelt]`: (Опционально) (по умолчанию = false) Использует логику команды SMELT. Если блок можно переплавить, вместо него выпадет переплавленная версия. В противном случае будет выпадать правильно разрушенный блок.
  * `[runActivatorOnBlocks]`: (Опционально) (по умолчанию = false) Только для ExecutableItems. Если true, блоки, разрушенные командой, также запускают активатор, который её запустил, см. [runActivatorOnBlocks](#runactivatoronblocks). Оставьте `{createEvent}` равным true.
* Пример:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Информация: Разрушает блоки в радиусе в форме сферы. Каждый блок, разрушенный этой командой, засчитывается как событие разрушения блока игроком.
* Настройки команды
  * `{radius}`: Радиус сферы
  * `{drop}`: Выпадает ли из блока добыча или нет
  * `{create blockBreakEvent}`: будет ли плагин генерировать blockBreakEvent для каждого блока, разрушенного командой
  * `[smelt]`: (Опционально) (по умолчанию = false) Использует логику команды SMELT. Если блок можно переплавить, вместо него выпадет переплавленная версия. В противном случае будет выпадать правильно разрушенный блок.
* Пример:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Информация: Выбирает сущности в определённом радиусе и заставляет их выполнять команды
* Настройки команды
  * `{distance}`: В каком радиусе команда будет выбирать сущности
  * `{displayMsgIfNoEntity}`: (true или false) Уведомлять ли игрока с предметом, если не удалось выбрать ни одного моба.
    * **Установите false, чтобы скрыть сообщение**
  * `{throughBlocks}`: будет ли влиять или нет на мобов, находящихся за блоками
  * `{safeDistance}`: Если расстояние между целью и применившим меньше или равно значению safeDistance, то цель не будет затронута.
  * `{offsetYaw}`: Направление по yaw, которое вы хотите для вашего смещения (независимо от значения yaw точки отсчёта)
  * `{offsetPitch}`: Направление по pitch, которое вы хотите для вашего смещения (независимо от значения yaw точки отсчёта)
  * `{offsetDistance}`: После вычисления offsetYaw и offsetPitch, используя значение этого параметра, будет смещать позицию/центральную точку команды AROUND от xyz-координат точки отсчёта.
  * `{limit}`: Количество целей, на которые можно повлиять
  * `{sort}`: Полезно для опции limit.
    * NEAREST : Выбирает сущности, находящиеся ближе всего к точке отсчёта.
    * RANDOM : Случайно выбирает любую сущность в пределах радиуса действия команды.
  * `{regionCheck}`: true/false. Если true, команда AROUND проверит, находится ли цель в дикой местности или на территории заявившего (контекст плагина GriefPrevention) (скоро будет обновлено для проверки с другими плагинами заявок)
  * `{nonliving}`: true/false. Если true, будет выбирать и другие сущности, такие как Arrows и Armor Stands. Любые ошибки, возникающие при выполнении команд сущностей при включённом этом аргументе, скорее всего, будут проигнорированы из-за расширения охвата (scope creep).
  * Вы можете добавить в BLACKLIST или WHITELIST сущности, добавив одно из следующего в любом месте команды:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Пример:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Чтобы использовать entity nbt в поле WHITELIST/BLACKLIST, вам нужно установить плагин NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Он поддерживает NBT Tags, так что вы можете добавить, например, что-то вроде: `ZOMBIE{IsBaby:1}`

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

* Информация: Перемещает все сущности над блоком в направлении блока (для лучшего понимания, это как конвейер)
* Нет настроек команды
* Пример:

```
- MOVE
```

:::info
**Эта команда работает только с направленными (directional) блоками.**
:::

### MOB\_NEAREST

* Информация: Выбирает ближайшего моба от игрока/цели.
* Настройки команды
    * `{max accepted distance}`: Максимально допустимое расстояние, на котором может находиться "сущность".
    * `{command(s)}`: Команда, которая будет выполнена
* Пример:

Наносит урон ближайшему игроку

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Информация: Выбирает ближайшего игрока от игрока/цели.
* Настройки команды
    * `{max accepted distance}`: Максимально допустимое расстояние, на котором может находиться "цель".
    * `{command}`: Команда, которая будет выполнена
* Пример:

Наносит урон ближайшему игроку

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Открывает или закрывает блок, который можно открыть.
* Нет настроек команды
* Пример:

```
- OPENDOOR
```

### OPMESSAGE

* Информация: Отправляет сообщение онлайн-игрокам с OP и в консоль
* Настройка команды
  * `{text}`: Текст для отправки
* Пример:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Информация: Создаёт частицы в месте расположения блока
* Настройки команды
  * `{type}`: Тип частицы.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: Количество частиц, которые создадутся
* `{offset}`: Радиус области, в которой могут появиться частицы в месте расположения блока
* `{speed}`: Насколько быстрыми или большими будут частицы
* Пример:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Информация: Размещает жидкость в указанном месте. Если в этом месте есть котёл, он наполняется. Если присутствует блок, способный содержать воду (waterloggable), он затопляется. В противном случае ничего не происходит
* Настройки команды
  * `{type}`: Тип жидкости (по умолчанию: WATER). Варианты: WATER/LAVA
* Пример:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Информация: Сажает в квадрате относительно выбранного блока.
* Настройки команды
  * `{radius}`: Радиус квадрата
  * `{takeFromInv}`: По умолчанию true, берёт семена в инвентаре игрока, иначе создаёт семена
  * `{acceptEI}`: По умолчанию false, принимает EI для семян
  * `{cropType}`: по умолчанию принимаются все семена (берёт семена в зависимости от их порядка в инвентаре)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Делает область посадки из квадратной в кубическую. Полезно для посадки какао по площади
* Пример:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Информация: Удаляет блок, без выпадения добычи, просто удаляет
* Нет настроек команды
* Пример:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Информация: Продаёт всё содержимое сундука / печи / любого блока, у которого есть инвентарь.
* Настройки команды
  * `{price_boost}`: Множитель (float) для проданных предметов. Например, если здесь значение 2, то проданные предметы дадут вам вдвое больше стоимости продажи.
  * `{deleteUnsellable}`: Булево значение, определяющее, удалять ли предметы, которые нельзя продать
* Пример:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Требуется ShopGUIPlus (приоритетно) и Vault, а также цены CMI
:::

### SETBLOCK

* Информация: Заменяет выбранный блок другим блоком
* Настройка команды
  * `{material}`: Материал для установки
* Пример:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Информация: Заменяет выбранный блок временным блоком.
* Настройки команды
  * `{material}`: Материал для установки
  * `{time}`: Время в тиках (20 тиков = 1 сек)
* Пример:

```
- SETTEMPBLOCK STONE 100
```

:::warning
Не заменяет блоки, у которых есть дополнительные данные (инвентарь, вращение и т.д.)
:::

### SET\_TEMP\_BLOCK\_POS

* Информация: Заменяет выбранный блок временным блоком
* Команда: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Пример:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Не заменяет блоки, у которых есть дополнительные данные (инвентарь, вращение и т.д.)
:::

### SETBLOCKPOS

* Информация: Устанавливает блоки в определённой позиции
* Настройки команды
  * `{x}`: Позиция блока X
  * `{y}`: Позиция блока Y
  * `{z}`: Позиция блока Z
  * `{material}`: Тип блока
  * `{bypassWG}`: Будет ли WorldGuard мешать установке блока или нет
* Пример:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Информация: Команда setblock, но для Executable Blocks
* Настройки команды
  * `{id}`: ID Executable Block
  * `{x}`: Координата X
  * `{y}`: Координата Y
  * `{z}`: Координата Z
  * `{world}`: Мир, в котором вы хотите разместить Executable Block
  * `{replace}`: Заменять ли блок, который уже существует в этом месте, или нет
  * `{bypassProtection}`: (По умолчанию false) Заменять ли блок, даже если там есть защита территории от плагина. 
  * `[ownerUUID]`: (Опционально) (по умолчанию = нет владельца) UUID игрока, который будет владельцем eb
* Пример:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Информация: Собирает спавнер, участвующий в событии
* Нет настроек команды
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

* Информация: Переплавляет выбранный блок, выбрасывая переплавленный предмет, например iron\_ore -> iron\_ingot, поддерживает fortune, если блок не может быть переплавлен, ничего не произойдёт. Добыча блока не изменится.
* Настройка команды
  * `[generateEvent]`: (Опционально) (по умолчанию = true) Когда или не генерирует событие разрушения блока
* Пример:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Информация: Поражает молнией без урона блок, который выполняет команду
* Нет настроек команды
* Пример:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Информация: Разрушает блоки в жилах за одно разрушение блока
* Настройки команды
  * `{maxVeinSize}`: (по умолчанию = 10) Максимальное количество блоков, которое может разрушить команда
  * `[createBBEvent]`: (Опционально) (по умолчанию = true) Генерирует ли событие разрушения блока или нет
  * `[smelt]`: (Опционально) (по умолчанию = false) Использует логику команды SMELT. Если блок можно переплавить, вместо него выпадет переплавленная версия. В противном случае будет выпадать правильно разрушенный блок.
  * `[runActivatorOnBlocks]`: (Опционально) (по умолчанию = false) Только для ExecutableItems. Если true, блоки жилы также запускают активатор, который запустил команду, см. [runActivatorOnBlocks](#runactivatoronblocks). Оставьте `createBBEvent` равным true.
* Пример:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` не является настройкой VEIN\_BREAKER. Старый шаблон внутриигрового редактора записывал `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: часть `triggerEvent:true` ни на что не влияет, её можно удалить. Чтобы выбрать, генерирует ли команда события разрушения блоков, используйте `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` — настройка команд VEIN\_BREAKER, [MINEINCUBE](#mineincube) и [FARMINCUBE](#farmincube). Её читает только ExecutableItems.

* Без неё (по умолчанию `false`) блоки, разрушенные командой, не запускают активатор, в котором находится эта команда: именно это предотвращает цикл разрушений блоков. Другие активаторы ваших предметов (те, в которых нет команды разрушения) по-прежнему срабатывают для этих блоков.
* С `runActivatorOnBlocks:true` каждый блок, разрушенный командой, также запускает активатор, который её запустил, как если бы его разрушил игрок: его условия, `desactiveDrops` (без ванильного лута), другие его команды (например, `DROPITEM`), его `usageModification` и изменения переменных применяются к каждому блоку. `cancelEvent: true` тоже применяется: тогда эти блоки не разрушаются.
* Команда разрушения не запускается повторно для этих блоков, поэтому цикла нет.
* Кулдауны, лимит использований в день и требования (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) для этих блоков не проверяются: они проверяются и применяются один раз, для блока, который запустил активатор. Иначе кулдаун остановил бы жилу после первого блока.
* Активатор получает эти блоки через их события разрушения блока: оставьте `createBBEvent` (VEIN\_BREAKER) или `{createEvent}` (MINEINCUBE) равными `true`, это их значение по умолчанию. FARMINCUBE сам генерирует события с `runActivatorOnBlocks:true`, если только его аргумент `{event}` не равен `false`.
* Эти события являются разрушениями блоков, поэтому это работает, только когда команда находится в активаторе PLAYER\_BLOCK\_BREAK.

Пример: каждый блок жилы вместо ванильного лута выбрасывает 1 алмаз и тратит 1 usage.

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
