---
description: >-
  Описание настройки и видов частиц SCore: команды, формы, цвета и параметры
  отображения эффектов в плагине SPlugins.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-10-03T10:33:53.461Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Частицы SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

SCore включает множество готовых форм частиц из библиотеки XParticle, а также несколько собственных кастомных форм.

## Как отобразить частицы

Команда для отображения частицы: `/score particles`

Вам нужно выбрать форму и правильно настроить команду, чтобы добиться нужного результата.

### Как удалить отображённые частицы

Команда для очистки отображённых частиц: `/score clear {player} PARTICLES`

## Общие настройки для всех форм

### Определение точки появления

Чтобы определить, где будет отображаться форма, у вас есть два варианта: указать локацию напрямую или задать UUID сущности.

#### Использование UUID игрока/сущности

Если вы решите использовать UUID сущности, **форма будет следовать за игроком/сущностью при её перемещении**. Это может деформировать форму или создать интересный эффект.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Вам нужно указать UUID игрока или сущности. Имя игрока не работает!
:::

#### Использование конкретной локации

При использовании локации вы можете быть уверены, что форма не будет деформирована, она останется статичной.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Определение частиц

#### Тип частицы

Определяет частицу, используемую формой. По умолчанию это частица FLAME.

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Список доступных частиц здесь: [Список частиц Spigot](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Цвет

**Вместо** использования `particle:{particle name}`, если вы хотите использовать частицы REDSTONE / DUST, вы можете напрямую использовать настройку color с [кастомным цветом](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Вы можете указать два цвета, разделённых запятой, чтобы получить переход цвета.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Вы также можете использовать значения RGB для использования кастомных цветов в вашей частице SCore (0-255).

Пример: `color:RGB-156-82-84`

#### Частицы блоков

**Вместо** использования `particle:{particle name}`, если вы хотите использовать частицы BLOCK_CRACK / BLOCK, вы можете напрямую использовать настройку blockdata с [материалом](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Частицы предметов

**Вместо** использования `particle:{particle name}`, если вы хотите использовать частицы ITEM_CRACK/ ITEM, вы можете напрямую использовать настройку itemstack с [материалом](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Смещение точки появления формы

Вы можете задать смещение в определённом направлении, это позволяет вам, например, отображать форму вокруг игрока/сущности без необходимости сложных вычислений.

* offsetPitch: направление pitch, куда будет направлено смещение
* offsetYaw: направление yaw, куда будет направлено смещение
* offsetSitance: расстояние смещения
* offsetX: увеличивает смещение по локации X
* offsetY: увеличивает смещение по локации Y
* offsetZ: увеличивает смещение по локации Z

По умолчанию эти настройки установлены на 0

```css
offsetPitch:{the pitch direction}
offsetYaw:{the yaw direction}
offsetDistance:{the distance}
offsetX:{x bonus}
offsetY:{y bonus}
offsetZ:{z bonus}
/* Example with flat values */
offsetPitch:0
offsetYaw:-90
offsetDistance:5
offsetY:-1
/* Example with placeholders */
offsetPitch:%player_pitch_initial%+30
offsetYaw:%player_yaw_initial%
offsetDistance:%var_myvar%
```

## Настройки форм

### Atom

Создаёт набор эллиптических орбит с маленькой сферой из частиц в центре, напоминая атом.

* `orbits`: количество эллиптических орбит.
* `radius`: радиус орбит в блоках
* `rate`: количество частиц на орбиту.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Анимированная версия `atom` с орбитирующими частицами.

* `orbits`: количество орбитальных путей.
* `radius`: радиус орбиты в блоках.
* `rate`: скорость орбиты.
* `time`: длительность в тиках.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Несколько концентрических кругов увеличивающегося размера.

* `radius`: максимальный радиус в блоках.
* `radiusRate`: разница в радиусе между каждым кругом.
* `rate`: плотность частиц.
* `rateChange`: изменение скорости на каждый слой.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Динамический эффект вихря частиц.

* `points`: количество спиральных рукавов.
* `radius`: расстояние от центра.
* `rate`: скорость вращения.
* `mode`: от 0 до 4 для разных стилей вихря.
* `time`: длительность в тиках.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Симулирует эффект хаотичного двойного маятника.

* `radius`: радиус размаха.
* `gravity`: сила гравитации (обычно -1).
* `length`, `length2`: длины маятников.
* `mass1`, `mass2`: масса каждого маятника.
* `dimension3`: использовать ли 3D-вращение.
* `speed`: скорость анимации.
* `time`: длительность в тиках.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Отображает круг из частиц.

* `radius`: радиус круга
* `density`: количество частиц на блок (выше = плотнее).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: время в тиках для анимации полного отображения. (0 = мгновенно)
* `directionPitch`: направление pitch круга
* `directionYaw`: направление yaw круга

Примеры:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Анимированный луч с изменяющимися размерами круга во времени.

* `maxRadius`: максимальный радиус круга в блоках.
* `rate`: скорость точек на круг.
* `radiusRate`: изменение радиуса.
* `extend`: расстояние вытягивания в блоках.
* `time`: длительность в тиках.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Конус, состоящий из наложенных друг на друга кругов.

* `height`: высота конуса.
* `radius`: радиус основания.
* `rate`: расстояние между кругами.
* `circleRate`: плотность точек.
* `fillMode`: режим заполнения "disk", "ring", "spiral", по умолчанию disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Отображает полумесяц, используя два перекрывающихся круга.

* `radius`: размер внешней дуги.
* `rate`: разрешение кривой.
* `directionYaw`: направление полумесяца в градусах

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: радиус цилиндра
* `height`: высота цилиндра
* `density`: количество частиц на блок (выше = плотнее).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: время в тиках для анимации полного отображения.
* `directionPitch`: направление pitch квадрата
* `directionYaw`: направление yaw квадрата

Примеры:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Создаёт форму ромба в 2D или 3D.

* `radiusRate`: контролирует ширину.
* `rate`: расстояние между точками.
* `height`: общая высота.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Отображает двойную спираль ДНК с водородными связями.

* `radius`: радиус спиралей.
* `rate`: расстояние между точками.
* `extension`: коэффициент растяжения спирали.
* `height`: общая высота.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Симулирует репликацию ДНК со связями и цветами.

* `radius`, `rate`, `extension`, `height`: то же, что и `DNA`.
* `speed`: скорость анимации.
* `hydrogenBondDist`: расстояние между связями.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: начальный и конечный углы.
* `rate`: угловое расстояние.
* `radius`, `otherRadius`: радиусы по X и Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Волнистая анимация, представляющая ударную волну взрыва.

* `rate`: плотность частиц внутри волны.
* `start`: начальное расстояние от центра для начала волны.
* `height`: вертикальная амплитуда волны.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Рисует овальную форму, похожую на глаз.

* `radius`, `radius2`: основные радиусы.
* `rate`: разрешение.
* `extension`: коэффициент удлинения
* `directionPitch`: направление pitch глаза
* `directionYaw`: направление yaw глаза

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Рисует сердце, используя полярную кривую.

* `cut`, `cutAngle`: настройка лепестков сердца.
* `depth`: глубина центральной выемки.
* `compressHeight`: вертикальное сжатие.
* `rate`: разрешение.
* `directionPitch`: направление pitch сердца
* `directionYaw`: направление yaw сердца

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Рисует анимированные 3D-спирали.

* `strings`: количество спиралей.
* `radius`: радиус спирали.
* `rate`, `extension`: расстояние и сила закручивания.
* `height`: общая высота.
* `speed`: скорость анимации.
* `fadeUp`, `fadeDown`: постепенное изменение радиуса.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Создаёт форму 3D символа бесконечности.

* `size`: размер формы.
* `extension`: вытянутость глаза иллюминати.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Отображает расширяющиеся кольца, похожие на магические символы.

* `radius`: начальный радиус.
* `rate`: расстояние между точками.
* `radiusRate`: скорость роста.
* `distance`: расстояние между кольцами.
* `time`: длительность в тиках.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Стилизованный магический эффект взрыва.

* `size`: общий размер взрыва.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Рисует многоугольник с опциональными внутренними соединениями

* `points`: количество углов.
* `connection`: сколько углов соединять.
* `size`: радиус многоугольника.
* `rate`: разрешение.
* `extend`: коэффициент растяжения соединения.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Отображает наложенные друг на друга дуги радуги с цветными слоями.

* `radius`: радиус радуги
* `rate`: скорость точек, больше = больше точек
* `curve`: кривая 1 для вверх и -1 для вниз
* `layers`: количество дуг.
* `compact`: уменьшает расстояние между дугами.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Рисует плоское кольцо (кольцевую форму).

* `radius`: радиус кольца.
* `density`: плотность частиц.
* `time`: длительность отображения в тиках.
* `drawMode`: порядок рисования: clockWise, counterClockWise или random
* `directionPitch`: направление pitch круга
* `directionYaw`: направление yaw круга

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Рисует полную 3D-сферу.

* `radius`: радиус сферы.
* `rate`: плотность точек

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Рисует сферу со случайными шипами.

* `radius`, `rate`: базовые параметры сферы.
* `chance`: шанс шипа.
* `minRandomDistance`, `maxRandomDistance`: диапазон длины шипа.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: высота в блоках по вертикальной оси.
* `length`: длина в блоках по вектору направления.
* `width`: ширина в блоках, перпендикулярная направлению стены.
* `density`: количество частиц на блок (выше = плотнее).
* `timeToDisplay`: время в тиках для анимации полного отображения.
* `drawMode`: "vertical" или "horizontal" (контролирует порядок итерации).
* `verticalOrder`: "up" или "down" (порядок по высоте).
* `horizontalOrder`: "near" или "far" (порядок по длине).
* `directionPitch`: направление pitch квадрата
* `directionYaw`: направление yaw квадрата

```yaml
# Examples that you can run manually in-game
...

# Examples that you can include into your commands
playerCommands:
# A line of explosion
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% particle:EXPLOSION height:1 length:30 timeToDisplay:20 density:1 directionYaw:%player_yaw_initial% directionPitch:%player_pitch_initial% verticalOrder:up horizontalOrder:near offsetY:-1
# A wall of flame
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y
```

### Star

Создаёт 3D звезду с анимированными шипами.

* `points`: количество базовых сторон.
* `spikes`: количество кончиков звезды.
* `rate`: сколько отображений точек
* `spikeLength`: длина кончика.
* `coreRadius`: радиус ядра.
* `neuron`: изогнутость кончика.
* `prototype`: использовать спирали вместо линий.
* `speed`: скорость анимации.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Рисует тессеракт

* `size`: общий размер.
* `rate`: плотность.
* `speed`: скорость.
* `time`: время отображения.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Эффект спирали, как у галактики или торнадо.

* `points`: количество спиральных рукавов.
* `rate`: скорость вращения.
* `time`: длительность.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
