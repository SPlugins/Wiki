---
description: >-
  Узнайте, как создавать кастомные снаряды в SCore, настраивать их параметры в
  редакторе или YAML и запускать командами LAUNCH.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T18:17:35.242Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Кастомные снаряды

Эта страница поможет вам узнать, как создавать кастомные снаряды и запускать их.\
Мы подготовили для вас редактор в игре, чтобы упростить настройку. **Пользуйтесь им.**

:::info 
Чтобы запустить их, достаточно использовать команды [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) или [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Эти снаряды нельзя выдавать игрокам.
:::

### Команды:

| Команда                         | Функция                                                                |
| ------------------------------- | ---------------------------------------------------------------------- |
| /score projectiles              | Показывает все снаряды и позволяет их редактировать                    |
| /score projectiles-create \<id> | Открывает редактор для создания нового снаряда                         |
| /score projectiles-delete \<id> | Действие для удаления снаряда (требуется подтверждение)                |
| /score reload                   | Перезагружает плагин (полезно, если вы отредактировали снаряд в .yml)  |

## **Основная информация**

### Тип

Это первое, что нужно задать: тип снаряда, который вы хотите создать. Score поддерживает:

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

Пример:

```yaml
type: ARROW
```

### Видимость кастомного имени

* Позволяет показывать кастомное имя над снарядом
* Варианты:
  * true
  * false
* Пример:

```yaml
customNameVisible: true
```

### Кастомное имя

* Это ИМЯ снаряда, полезное для customNameVisible и для плейсхолдеров.
* Пример:

```yaml
customName: '&eBullet'
```

### Визуальный огонь

* Опция, позволяющая показывать визуальный огонь на снаряде
* Пример:

```yaml
visualFire: true
```

### Невидимость

* Будет ли снаряд невидимым. Требуется [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Статус подбора

* Опция для настройки того, можно ли подобрать снаряд
* Варианты: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Пример:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Свечение

* Будет ли у снаряда эффект свечения
* Варианты:
  * true
  * false
* Пример:

```yaml
glowing: true
```

### Отскок

* Будет ли снаряд отскакивать от сущности, пока она находится в состоянии неуязвимости.
* Варианты:
  * true
  * false
* Пример:

```yaml
bounce: true
```

### Гравитация

* Будет ли на снаряд действовать гравитация
* Варианты:
  * true
  * false
* Пример:

```yaml
gravity: true
```

### Скорость

* Насколько быстрым будет снаряд
  * <CustomTag type="version" version="1.20.5" /> Это также работает для FIREBALL, WITHER\_SKULL и DRAGON\_FIREBALL: `2.0` летит вдвое быстрее, `1` сохраняет ванильную скорость. До версии 1.20.5 они сохраняют ванильную скорость.
* Пример:

```yaml
velocity: 2.0
```

:::danger
УРОН **ARROW** ЗАВИСИТ ОТ ЭТОЙ ОПЦИИ

Формула: `velocity x 1 = Arrow Damage`
:::

### Частицы

* Позволяет изменить, какие частицы будут отображаться вокруг снаряда.
 * `particlesType`: тип частицы 
 * `particlesAmount`: сколько частиц испускается за один раз                                                                 
 * `particlesOffSet`: насколько близко к снаряду появляются частицы                                                                
 * `particlesSpeed`: как быстро движутся частицы                                                                 
 * `redstoneColor`: изменяет цвет частицы redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: какой блок использовать для частицы. Только для: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: плотность частиц, полезно, когда нужен аккуратный след за снарядом

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

### Задержка исчезновения

* Сколько секунд будет жить снаряд. (Поддерживаются десятичные значения)
* Пример:

```yaml
despawnDelay: 10
```

### Сила отбрасывания

* С какой силой снаряд будет отбрасывать свои цели
* Формула:

`Knockback strength x 3` = количество блоков, на которое цель будет отброшена
```yaml
knockbackStrengt: 1
```

### Удалять при попадании в блок

* Исчезает ли снаряд при попадании в блок
* Варианты:
  * true
  * false
* Пример:

```yaml
removeWhenHitBlock: true
```

## **Дополнительная информация**

* Вся следующая информация зависит от типа снаряда.

### Визуальный предмет:

* Позволяет замаскировать снаряд под предмет
* Доступные снаряды:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Пример:

```yaml
visualItem: diamond_sword
```

:::info
visualItem совместим с кастомной головой и добавлением текстур к этой голове
:::

#### Custom model data

* Визуальный предмет также поддерживает custom model data предмета.

```yaml
customModelData: 37
```

#### Item Model

* Начиная с версии 1.21.2 вы можете изменять item model снаряда.

```yaml
itemModel: mypack:mymodel
```

### Стрела

#### Критический удар

* Будет ли снаряд **ARROW** оставлять след из критических частиц
* Варианты:
  * true
  * false
* Пример:

```yaml
critical: true
```

:::info
Только для снаряда ARROW
:::

#### Урон

* Сколько урона нанесёт стрела
* Формула:

`<Damage> x 3` = урон стрелы 

* По умолчанию: -1
* Пример:

```yaml
damage: 10.0
```

:::info
Не используйте отрицательные значения, ничего не изменится.
:::

#### Уровень пробивания

* Сколько мобов будет поражено одним снарядом, прежде чем он исчезнет
* Формула:

`<PierceLevel> + 1` = количество мобов, которые будут поражены

* Если задано значение -1, снаряд исчезнет после попадания в 1 моба.
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

#### Беззвучность

* Будет ли стрела издавать звук
* Варианты:
  * true
  * false
* Пример:

```yaml
silent: true
```

#### Звук попадания

<CustomTag type="paper" />
* Настройте звук, который будет издавать стрела при попадании во что-либо. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Работает для ARROW, TRIDENT и SPECTRAL\_ARROW

* Пример:

```yaml
hitSound: BLOCK_BELL_USE
```

### Череп иссушителя

#### Заряженный

* Заряжен ли wither\_skull
* Варианты:
  * true
  * false
* Пример:

```yaml
charged: true
```

### Огненный шар

#### Радиус

* Радиус взрыва
* Пример

```yaml
radius: 3
```

#### Зажигательный

* Будет ли снаряд fireball вызывать огонь при попадании во что-либо
* Варианты:
  * true
  * false
* Пример:

```yaml
incendiary: true
```

### Фейерверк

**Время жизни**

* Как долго фейерверк может существовать, прежде чем исчезнет (например, сколько порохов было использовано)
* Пример:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Настройки цветов взрыва фейерверка
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

Для цветов вы можете использовать как обычные [названия цветов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html), так и `RGB-<0-255>-<0-255>-<0-255>`

## Конфигурация YML

* Есть некоторые функции, которые пока нельзя редактировать в игре

### Зачарования (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Позволяют зачаровывать трезубцы.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Эффекты зелий (Splash potion)

* Позволяют редактировать эффекты splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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

## Полная конфигурация YAML

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
