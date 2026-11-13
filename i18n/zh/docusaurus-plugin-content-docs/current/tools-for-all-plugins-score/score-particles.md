---
description: >-
  本页详细介绍 SCore 插件的粒子功能：如何使用命令显示和清除粒子，如何设置生成位置、粒子类型、颜色、方块粒子、物品粒子和偏移，并列出
  Atom、Circle、Heart、Sphere、Star、Vortex 等所有预制形状的完整参数配置与使用示例。
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-11-13T18:07:18.327Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    SCore 粒子

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

SCore 内置了许多来自 XParticle 库的预制粒子形状，以及一些自定义形状。

## 如何显示粒子

显示粒子的命令是 `/score particles`

你需要选择一个形状，并正确配置该命令，才能实现你想要的效果。

### 如何移除已显示的粒子

清除已显示粒子的命令是 `/score clear {player} PARTICLES`

## 所有形状的通用设置

### 定义生成点

要定义形状的显示位置，你有两种选择：直接指定坐标，或设置实体 UUID。

#### 使用玩家/实体 UUID

当你决定使用实体 UUID 时，**形状会跟随玩家/实体移动**。因此它可能会使形状变形，或产生很酷的效果。

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
你必须指定玩家或实体的 UUID。玩家名称无效！
:::

#### 使用指定坐标

使用坐标可以确保形状不会变形，它会保持静止。

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### 粒子定义

#### 粒子类型

定义形状所使用的粒子。默认是 FLAME 粒子。

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

可用的粒子列表见这里：[Spigot 粒子列表](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### 颜色

如果你想使用 REDSTONE / DUST 粒子，可以**不使用** `particle:{particle name}`，而是直接使用 color 设置，并搭配[自定义颜色](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)。

你可以设置两种颜色，用 , 分隔，以实现颜色渐变。

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

你也可以在 SCore 粒子中使用 RGB 值来设置自定义颜色（0-255）。

示例：`color:RGB-156-82-84`

#### 方块粒子

如果你想使用 BLOCK\_CRACK / BLOCK 粒子，可以**不使用** `particle:{particle name}`，而是直接使用 blockdata 设置，并搭配[材质](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)。

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### 物品粒子

如果你想使用 ITEM\_CRACK / ITEM 粒子，可以**不使用** `particle:{particle name}`，而是直接使用 itemstack 设置，并搭配[材质](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)。

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### 偏移 / 移动形状的生成点

你可以定义某个特定方向上的偏移，例如无需复杂计算，就能把形状显示在玩家/实体周围。

* offsetPitch：偏移所指向的俯仰角（pitch）方向
* offsetYaw：偏移所指向的偏航角（yaw）方向
* offsetSitance：偏移的距离
* offsetX：增加 X 坐标的偏移
* offsetY：增加 Y 坐标的偏移
* offsetZ：增加 Z 坐标的偏移

默认情况下，这些设置均为 0

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

## 形状设置

### Atom

创建一组椭圆轨道，中心有一个小粒子球，形似原子。

* `orbits`：椭圆轨道的数量。
* `radius`：轨道的半径（单位：方块）
* `rate`：每条轨道上的粒子数量。

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

`atom` 的动画版本，带有环绕运动的粒子。

* `orbits`：环绕路径的数量。
* `radius`：轨道半径（单位：方块）。
* `rate`：环绕速率。
* `time`：持续时间（单位：tick）。

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

多个逐渐增大的同心圆。

* `radius`：最大半径（单位：方块）。
* `radiusRate`：每个圆之间的半径差。
* `rate`：粒子密度。
* `rateChange`：每层的速率变化。

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

动态的粒子漩涡效果。

* `points`：螺旋臂的数量。
* `radius`：与中心的距离。
* `rate`：旋转速率。
* `mode`：0 到 4，对应不同的漩涡样式。
* `time`：持续时间（单位：tick）。

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

模拟混沌双摆效果。

* `radius`：摆动半径。
* `gravity`：重力大小（通常为 -1）。
* `length`、`length2`：两个摆的长度。
* `mass1`、`mass2`：每个摆的质量。
* `dimension3`：是否使用 3D 旋转。
* `speed`：动画速度。
* `time`：持续时间（单位：tick）。

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

显示一个由粒子组成的圆。

* `radius`：圆的半径
* `density`：每个方块的粒子数量（越高越密集）。
* `drawMode`：clockWise、counterClockWise、random
* `fillMode`：disk、spiral、ring
* `time`：完整显示动画所需的时间（单位：tick）。（0 = 即时）
* `directionPitch`：圆的俯仰角（pitch）方向
* `directionYaw`：圆的偏航角（yaw）方向

示例：

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

光束动画，圆的大小随时间变化。

* `maxRadius`：圆的最大半径（单位：方块）。
* `rate`：每个圆的点速率。
* `radiusRate`：半径的变化量。
* `extend`：延伸距离（单位：方块）。
* `time`：持续时间（单位：tick）。

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

由层层堆叠的圆组成的圆锥。

* `height`：圆锥的高度。
* `radius`：底面半径。
* `rate`：圆之间的间距。
* `circleRate`：点的密度。
* `fillMode`：填充模式 "disk"、"ring"、"spiral"，默认为 disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

使用两个重叠的圆渲染出一弯新月。

* `radius`：外弧的大小。
* `rate`：曲线的分辨率。
* `directionYaw`：新月的方向（单位：度）

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`：圆柱的半径
* `height`：圆柱的高度
* `density`：每个方块的粒子数量（越高越密集）。
* `drawMode`：clockWise、counterClockWise、random
* `timeToDisplay`：完整显示动画所需的时间（单位：tick）。
* `directionPitch`：方形的俯仰角（pitch）方向
* `directionYaw`：方形的偏航角（yaw）方向

示例：

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

创建 2D 或 3D 的菱形（rhombus）形状。

* `radiusRate`：控制宽度。
* `rate`：点之间的间距。
* `height`：总高度。

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

显示带有氢键的 DNA 双螺旋。

* `radius`：螺旋的半径。
* `rate`：点之间的间距。
* `extension`：螺旋拉伸系数。
* `height`：总高度。

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

模拟带有化学键和颜色的 DNA 复制。

* `radius`、`rate`、`extension`、`height`：与 `DNA` 相同。
* `speed`：动画速度。
* `hydrogenBondDist`：化学键之间的距离。

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`、`end`：起始角和结束角。
* `rate`：角度间隔。
* `radius`、`otherRadius`：X 和 Y 半径。

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

表现爆炸冲击波的波浪动画。

* `rate`：波内的粒子密度。
* `start`：波从中心开始扩散时的初始距离。
* `height`：波的垂直振幅。

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

绘制一个椭圆形的眼睛状图形。

* `radius`、`radius2`：主半径。
* `rate`：分辨率。
* `extension`：拉长系数
* `directionPitch`：眼睛的俯仰角（pitch）方向
* `directionYaw`：眼睛的偏航角（yaw）方向

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

使用极坐标曲线绘制一颗心形。

* `cut`、`cutAngle`：调整心形的两个波瓣。
* `depth`：中央凹口的深度。
* `compressHeight`：垂直压缩。
* `rate`：分辨率。
* `directionPitch`：心形的俯仰角（pitch）方向
* `directionYaw`：心形的偏航角（yaw）方向

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

绘制动画 3D 螺旋。

* `strings`：螺旋的数量。
* `radius`：螺旋半径。
* `rate`、`extension`：间距和螺旋强度。
* `height`：总高度。
* `speed`：动画速度。
* `fadeUp`、`fadeDown`：半径的渐变。

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

创建 3D 无限符号形状。

* `size`：形状的大小。
* `extension`：光明会之眼的延伸程度。

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

显示如同魔法符文般不断扩张的圆环。

* `radius`：初始半径。
* `rate`：点的间距。
* `radiusRate`：扩张速度。
* `distance`：圆环之间的间距。
* `time`：持续时间（单位：tick）。

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

风格化的魔法爆炸效果。

* `size`：爆炸的整体大小。

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

绘制一个多边形，可选择添加内部连线

* `points`：角的数量。
* `connection`：连接多少个角。
* `size`：多边形的半径。
* `rate`：分辨率。
* `extend`：连线延伸系数。

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

显示层层叠加、带有彩色图层的彩虹弧。

* `radius`：彩虹的半径
* `rate`：点的速率，数值越大点越多
* `curve`：曲线，1 为向上，-1 为向下
* `layers`：弧的数量。
* `compact`：减小弧之间的间距。

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

绘制一个平面圆环（环形）。

* `radius`：圆环的半径。
* `density`：粒子密度。
* `time`：显示的持续时间（单位：tick）。
* `drawMode`：绘制顺序：clockWise、counterClockWise 或 random
* `directionPitch`：圆的俯仰角（pitch）方向
* `directionYaw`：圆的偏航角（yaw）方向

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

绘制一个完整的 3D 球体。

* `radius`：球体半径。
* `rate`：点的密度

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

绘制一个带有随机尖刺的球体。

* `radius`、`rate`：基础球体参数。
* `chance`：生成尖刺的概率。
* `minRandomDistance`、`maxRandomDistance`：尖刺长度范围。

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`：沿垂直轴的高度（单位：方块）。
* `length`：沿方向向量的长度（单位：方块）。
* `width`：垂直于墙面方向的宽度（单位：方块）。
* `density`：每个方块的粒子数量（越高越密集）。
* `timeToDisplay`：完整显示动画所需的时间（单位：tick）。
* `drawMode`："vertical" 或 "horizontal"，控制迭代顺序。
* `verticalOrder`："up" 或 "down"，沿高度方向的顺序。
* `horizontalOrder`："near" 或 "far"，沿长度方向的顺序。
* `directionPitch`：方形的俯仰角（pitch）方向
* `directionYaw`：方形的偏航角（yaw）方向

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

创建带有动画尖刺的 3D 星形。

* `points`：底面的边数。
* `spikes`：星形尖角的数量。
* `rate`：点的显示数量
* `spikeLength`：尖角的长度。
* `coreRadius`：核心半径。
* `neuron`：尖角的弯曲度。
* `prototype`：使用螺旋代替线条。
* `speed`：动画速度。

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

绘制超立方体（tesseract）

* `size`：整体大小。
* `rate`：密度。
* `speed`：速度。
* `time`：显示时间。

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

如同星系或龙卷风的螺旋效果。

* `points`：螺旋臂的数量。
* `rate`：旋转速度。
* `time`：持续时间。

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
