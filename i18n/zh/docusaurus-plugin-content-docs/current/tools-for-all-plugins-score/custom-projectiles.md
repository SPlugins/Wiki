---
description: 了解如何在 SCore 中创建并发射自定义投射物：游戏内编辑器、命令、类型、速度、粒子、箭矢、火球与烟花等选项的完整说明。
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T18:06:36.022Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 自定义投射物

本页将帮助你了解如何创建自定义投射物并发射它们。\
我们为你准备了游戏内编辑器，让编辑变得简单。**请使用它。**

:::info 
要发射它们很简单，使用 [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) 或 [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch) 命令即可。这些投射物不能给予玩家。
:::

### 命令：

| 命令                         | 功能                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | 显示所有投射物并允许你编辑它们             |
| /score projectiles-create \<id> | 打开编辑器以创建新的投射物                  |
| /score projectiles-delete \<id> | 删除投射物的操作（需要确认）           |
| /score reload                   | 重载插件（当你在 .yml 中编辑投射物时很有用） |

## **基本信息**

### Type

这是你必须设置的第一项，即你想创建的投射物类型，Score 支持：

* ARROW
* SPECTRAL\_ARROW
* EGG
* ENDER\_PEARL
* FIREBALL
* SPLASH\_POTION
* SHULKER\_BULLET
* SNOWBALL
* TRIDENT
* WITHER\_SKULL
* DRAGON\_FIREBALL
* THROWNEXPBOTTLE
* WIND\_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

示例：

```yaml
type: ARROW
```

### Custom name visible

* 允许在投射物上方显示自定义名称
* 选项：
  * true
  * false
* 示例：

```yaml
customNameVisible: true
```

### Custom Name

* 这是投射物的名称（NAME），可用于 customNameVisible 和占位符相关用途。
* 示例：

```yaml
customName: '&eBullet'
```

### Visual fire

* 允许在投射物上显示视觉火焰的选项
* 示例：

```yaml
visualFire: true
```

### Invisible

* 投射物是否隐形。需要 [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* 配置投射物是否可以被拾取的选项
* 选项：[Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* 示例：

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* 投射物是否具有发光效果
* 选项：
  * true
  * false
* 示例：

```yaml
glowing: true
```

### Bounce

* 投射物在实体处于无敌状态时是否会从该实体上弹开。
* 选项：
  * true
  * false
* 示例：

```yaml
bounce: true
```

### Gravity

* 投射物是否受重力影响
* 选项：
  * true
  * false
* 示例：

```yaml
gravity: true
```

### Velocity

* 投射物的速度
  * <CustomTag type="version" version="1.20.5" /> 它同样适用于 FIREBALL、WITHER\_SKULL 和 DRAGON\_FIREBALL：`2.0` 的飞行速度为两倍，`1` 保持原版速度。1.20.5 之前它们保持原版速度。
* 示例：

```yaml
velocity: 2.0
```

:::danger
**ARROW** 的伤害会受此选项影响

公式：`velocity x 1 = Arrow Damage`
:::

### Particles

* 这可以编辑投射物周围显示的粒子。
 * `particlesType`：粒子类型 
 * `particlesAmount`：每次发射多少粒子                                                                 
 * `particlesOffSet`：粒子在距离投射物多近的范围内生成                                                                
 * `particlesSpeed`：粒子的移动速度                                                                 
 * `redstoneColor`：更改红石粒子的颜色。[Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`：粒子使用的方块。仅适用于：BLOCK\_CRACK、BLOCK\_DUST、BLOCK\_MARKER
 * `particleDensity`：粒子的密度，当你想要投射物拥有干净的轨迹时很有用

* 示例：

```yaml
particles:
  1:
    particlesType: FLAME
    particlesAmount: 10
    particlesOffSet: 1
    particlesSpeed: 2
  2:
    particlesType: REDSTONE
    particlesAmount: 10
    particlesOffSet: 0.2
    particlesSpeed: 0.5
    redstoneColor: GRAY
  3:
    particlesType: BLOCK_DUST
    particlesAmount: 10
    particlesOffSet: 1.0
    particlesSpeed: 1.0
    particlesDelay: 1
    blockType: SPONGE
```

### Despawn delay

* 投射物的存活时间，单位为秒。（支持小数）
* 示例：

```yaml
despawnDelay: 10
```

### Knockback strength

* 投射物对目标造成的击退强度
* 公式：

`Knockback strength x 3` = 目标被击退的方块数
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* 投射物击中方块时是否消失
* 选项：
  * true
  * false
* 示例：

```yaml
removeWhenHitBlock: true
```

## **自定义信息**

* 以下所有信息都受投射物类型限制。

### Visual item:

* 这让你可以用一个物品来伪装投射物
* 可用的投射物：
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

示例：

```yaml
visualItem: diamond_sword
```

:::info
visualItem 兼容自定义头颅，并可为该头颅添加材质
:::

#### Custom model data

* Visual item 同样支持物品的 custom model data。

```yaml
customModelData: 37
```

#### Item Model

* 自 1.21.2 起，你可以编辑投射物的 item Model。

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* **ARROW** 投射物是否会留下暴击粒子轨迹
* 选项：
  * true
  * false
* 示例：

```yaml
critical: true
```

:::info
仅适用于 ARROW 投射物
:::

#### Damage

* 箭矢造成的伤害
* 公式：

`<Damage> x 3` = 箭矢伤害 

* 默认值：-1
* 示例：

```yaml
damage: 10.0
```

:::info
不要使用负值，否则不会有任何变化。
:::

#### Pierce level

* 单个投射物在消失之前可以击中多少个生物
* 公式：

`<PierceLevel> + 1` = 将被击中的生物数量

* 如果该值设为 -1，它将在击中 1 个生物后消失。
* 示例：

```yaml
pierceLevel: 4
```

#### Active color | Color

* 将 **Active color** 设为 **true** 即可编辑 Color。[Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* 这是箭矢将发出的颜色

```yaml
color: AQUA
```

#### Silent

* 箭矢是否会发出声音
* 选项：
  * true
  * false
* 示例：

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* 配置箭矢击中物体时发出的声音。[Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* 适用于 ARROW、TRIDENT 和 SPECTRAL\_ARROW

* 示例：

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* wither\_skull 是否已充能
* 选项：
  * true
  * false
* 示例：

```yaml
charged: true
```

### Fireball

#### Radius

* 爆炸半径
* 示例

```yaml
radius: 3
```

#### Incendiary

* 火球投射物击中物体时是否会引发火焰
* 选项：
  * true
  * false
* 示例：

```yaml
incendiary: true
```

### Firework

**Lifetime**

* 烟花在消失前可以持续多久（类似于使用了多少火药）
* 示例：

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* 烟花爆炸颜色的设置
* 示例：

```yaml
fireworkExplosions:
    explosion_0:
      colors:
      - RGB-94-84-214
      fadeColors:
      - RGB-1-2-33
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
```

对于颜色，你可以使用常规的[颜色名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)或 `RGB-<0-255>-<0-255>-<0-255>`

## YML 配置

* 有一些功能暂时还无法在游戏内编辑

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* 允许为三叉戟附魔。

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Potion effects (Splash potion)

* 允许编辑喷溅药水的效果。[Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

```yaml
potionEffects:
 1:
  potionEffectType: SPEED
  duration: 20
  amplifier: 2
 2:
  potionEffectType: INCREASE_DAMAGE
  duration: 10
  amplifier: 4
```

## 完整 YAML 配置

```yaml
type: TRIDENT
customNameVisible: false
customName: "Trident2"
visualFire: true
invisible: false
pickupStatus: DISALLOWED
glowing: true
critical: false
bounce: true
gravity: true
damage: -1
velocity: 1
knockbackStrength: -1
pierceLevel: -1
despawnDelay: 3
removeWhenHitBlock: false
enchantments:
  enchantment1:
    enchantment: unbreaking
    level: 1
  enchantment3:
    enchantment: mending
    level: 1
particles:
  1:
    particlesType: WATER_BUBBLE
    particlesAmount: 10
    particlesOffSet: 0.5
    particlesSpeed: 0.3
    particlesDelay: 1
#visualItem: DIAMOND_SWORD
#customModelData: 5
#critical: true
#charged: true
#radius: 3
#incendiary: true
#lifeTime: 3
#fireworkExplosions:
#    explosion_0:
#      colors:
#      - RGB-94-84-214
#      fadeColors:
#      - RGB-1-2-33
#      type: BALL_LARGE
#      hasTrail: true
#      hasTwinkle: true
```
