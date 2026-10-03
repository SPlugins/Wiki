---
description: >-
  Руководство SCore по созданию и настройке кастомных projectiles: типы,
  частицы, урон, зачарования и полный YAML-конфиг.
source_hash: 865d4da043f01247
translated_at: '2026-10-03T10:32:45.962Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Эта страница поможет вам разобраться с созданием кастомных projectiles и их запуском.\
Мы создали для вас встроенный редактор, чтобы упростить редактирование. **Используйте его.**

:::info 
Чтобы запустить их, всё просто: используйте команды [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) или [LOCATED_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Эти projectiles нельзя выдавать игрокам.
:::

### Команды:

| Команда                         | Функция                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Показывает вам все projectiles и позволяет их редактировать             |
| /score projectiles-create \<id> | Открывает редактор для создания нового projectile                  |
| /score projectiles-delete \<id> | Действие для удаления projectile (требуется подтверждение)           |
| /score reload                   | Перезагружает плагин (полезно, если вы редактируете projectile в .yml) |

## **Основная информация**

### Type

Это первое, что вам нужно задать: тип projectile, который вы хотите создать. Score поддерживает:

* ARROW
* SPECTRAL_ARROW
* EGG
* ENDER_PEARL
* FIREBALL
* SPLASH_POTION
* SHULKER_BULLET
* SNOWBALL
* TRIDENT
* WITHER_SKULL
* DRAGON_FIREBALL
* THROWNEXPBOTTLE
* WIND_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Пример:

```yaml
type: ARROW
```

### Custom name visible

* Позволяет показывать кастомное имя над projectile
* Варианты:
  * true
  * false
* Пример:

```yaml
customNameVisible: true
```

### Custom Name

* Это ИМЯ projectile, полезно для customNameVisible и для плейсхолдеров.
* Пример:

```yaml
customName: '&eBullet'
```

### Visual fire

* Опция, позволяющая включить визуальный огонь на projectile
* Пример:

```yaml
visualFire: true
```

### Invisible

* Будет ли projectile невидимым или нет. Требуется [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Опция для настройки того, можно ли поднять projectile
* Варианты: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Пример:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Будет ли у projectile эффект свечения или нет
* Варианты:
  * true
  * false
* Пример:

```yaml
glowing: true
```

### Bounce

* Будет ли projectile отскакивать от существа во время его неуязвимого состояния.
* Варианты:
  * true
  * false
* Пример:

```yaml
bounce: true
```

### Gravity

* Будет ли на projectile действовать гравитация или нет
* Варианты:
  * true
  * false
* Пример:

```yaml
gravity: true
```

### Velocity

* Насколько быстрым будет projectile
* Пример:

```yaml
velocity: 2.0
```

:::danger
НА УРОН **ARROW** ВЛИЯЕТ ЭТА ОПЦИЯ

Формула: `velocity x 1 = Arrow Damage`
:::

### Particles

* Это позволяет настроить, какие частицы будет отображать projectile вокруг себя.
 * `particlesType`: Тип частицы 
 * `particlesAmount`: Сколько частиц будет испускаться каждый раз                                                                 
 * `particlesOffSet`: На каком расстоянии от projectile будут появляться частицы                                                                
 * `particlesSpeed`: Насколько быстро будут двигаться частицы                                                                 
 * `redstoneColor`: Изменить цвет частицы redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Какой блок использовать для частицы. Только для: BLOCK_CRACK, BLOCK_DUST, BLOCK_MARKER
 * `particleDensity`: Плотность частиц, полезно, когда нужен чистый след от вашего projectile

* Пример:

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

* Сколько секунд будет длиться жизнь projectile. (Поддерживаются десятичные значения)
* Пример:

```yaml
despawnDelay: 10
```

### Knockback strength

* Насколько сильным будет отбрасывание (knockback) при попадании projectile в цель
* Формула:

`Knockback strength x 3` = Количество блоков, на которое отбросит цель
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Исчезает ли projectile при попадании в блок
* Варианты:
  * true
  * false
* Пример:

```yaml
removeWhenHitBlock: true
```

## **Кастомная информация**

* Вся следующая информация ограничена типом projectile.

### Visual item:

* Это даёт вам возможность замаскировать projectile под предмет
* Доступные projectiles:
* **EGG**
* **ENDER_PEARL**
* **SNOWBALL**

Пример:

```yaml
visualItem: diamond_sword
```

:::info
visualItem совместим с кастомными головами и добавлением текстур к этим головам
:::

#### Custom model data

* Также visual item поддерживает custom model data предмета.

```yaml
customModelData: 37
```

#### Item Model

* Начиная с версии 1.21.2, вы можете редактировать item Model у projectile.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Будет ли projectile типа **ARROW** оставлять след критических частиц
* Варианты:
  * true
  * false
* Пример:

```yaml
critical: true
```

:::info
Только для projectile ARROW
:::

#### Damage

* Сколько урона нанесёт стрела
* Формула:

`<Damage> x 3` = Урон стрелы 

* По умолчанию: -1
* Пример:

```yaml
damage: 10.0
```

:::info
Не используйте отрицательное значение, ничего не изменится.
:::

#### Pierce level

* Сколько мобов будет поражено одним projectile, прежде чем он исчезнет
* Формула:

`<PierceLevel> + 1` = Количество мобов, которые будут поражены

* Если значение установлено в -1, projectile исчезнет после попадания в 1 моба.
* Пример:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** в значении **true** позволяет редактировать Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* Это цвет, который будет испускать стрела

```yaml
color: AQUA
```

#### Silent

* Будет ли стрела издавать звук
* Варианты:
  * true
  * false
* Пример:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Настройка звука, который будет издан при попадании стрелы во что-либо. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Работает для ARROW, TRIDENT и SPECTRAL_ARROW

* Пример:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Заряжен ли wither_skull или нет
* Варианты:
  * true
  * false
* Пример:

```yaml
charged: true
```

### Fireball

#### Radius

* Радиус взрыва
* Пример

```yaml
radius: 3
```

#### Incendiary

* Будет ли projectile fireball поджигать что-либо при попадании или нет
* Варианты:
  * true
  * false
* Пример:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Как долго firework может длиться, прежде чем исчезнет (аналог того, сколько было использовано gunpowder)
* Пример:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Настройки цветов взрыва firework
* Пример:

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

Для цветов вы можете использовать либо обычные [названия цветов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html), либо `RGB-<0-255>-<0-255>-<0-255>`

## YML Config

* Есть некоторые функции, которые пока нельзя редактировать в игре

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Позволяет накладывать зачарования на trident.

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

* Позволяет редактировать эффекты splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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

## Full YAML Config

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
