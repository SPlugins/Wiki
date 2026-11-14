---
description: >-
  Обзор всех настроек и возможностей блока в ExecutableBlocks: базовые
  параметры, drop, заголовки, контейнеры, печи, дисплеи и многое другое.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T18:12:37.684Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Возможности блока


## Активаторы

* Очень важные возможности, которые позволяют добавлять способности вашим блокам
* Отдельная вики для этой возможности: [Список активаторов EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) и [Возможности активаторов EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Базовые настройки

### CreationType

* Способ создания EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Информация: базовый предмет Minecraft для executable block. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Дополнительно: предмет должен быть блоком, который можно поставить.

```yaml
material: DIRT
```

:::info
Поддерживаются спавнеры! Если вы хотите задать тип для вашего спавнера, добавьте:

`spawnerType: CHICKEN`

[Список EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Информация: название блока
* Пример: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Информация: описание (lore) блока
* Пример:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Плейсхолдеры, которые можно использовать в lore: %player%, [%usage%](block-features.md#hide-usage-1.14+) и т. д.

### DROP BLOCK IF IT IS BROKEN

* Информация: определяет, можно ли получить ваш Executable Block, сломав его
* Пример: 

```yaml
dropBlockIfItIsBroken: true
```

* Обязательно: НЕТ (по умолчанию: true)

### DROP BLOCK IF IT IS BURNS

* Информация: определяет, можно ли получить ваш Executable Block, если он сгорит
* Пример: 

```yaml
dropBlockIfItIsBurns: true
```

* Обязательно: НЕТ (по умолчанию: false)

### DROP BLOCK WHEN IT EXPLODES

* Информация: определяет, можно ли получить ваш Executable Block, если он будет уничтожен любым взрывом
* Пример:

```yaml
dropBlockWhenItExplodes: true
```

* Обязательно: НЕТ (по умолчанию: true)

### DROP TYPE

* Информация: выберите тип выпадения блока EB
* Типы выпадения:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Информация: требование иметь в основной руке или в левой руке как минимум нужный Executable Item, чтобы сломать executable block
* Пример:

```yaml
onlyBreakableWithEI:
- firework
```

* Обязательно: НЕТ (по умолчанию: пусто)

### CANBEMOVED

* Информация: определяет, можно ли сдвигать блок поршнем.
* Пример:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Информация: по сути, это опция, которая позволяет синхронизировать ваш executable block с executable item.
  * Дополнительно: executable block копирует название, материал и lore executable item, поэтому при попытке изменить название, материал или lore у eb ничего не изменится. Чтобы изменения применились к eb, нужно изменить название, материал и lore у ei
* Пример: 

```yaml
executableItem: hack
```

* Обязательно: НЕТ

## Функции Title

Поддерживаются [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) и [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Информация: определяет, включён ли голографический заголовок
* Пример:

```yaml
activeTitle: false
```

* Обязательно: НЕТ

### TITLE NAME 

* Информация: текст, отображаемый в голограмме
* Пример: 

```yaml
title: '&7&oDefault title'
```

* (С HolographicDisplay) В заголовке можно отобразить предмет, используя тип ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Обязательно: НЕТ

### TITLE ADJUSTMENT 

* Информация: насколько выше или ниже смещается по высоте голографический заголовок
* Пример:

```yaml
titleAdjustment: 0.5
```

* Обязательно: НЕТ
  * Дополнительно: положительное число для смещения вверх, отрицательное число для смещения вниз

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Настройки Custom usage

#### USAGE

* Информация: значение, определяющее, сколько раз можно использовать предмет. В основном используется для функции изменения usage в активаторах.
* Пример: 

```yaml
usage: 0
```

Для бесконечного использования блока:

```yaml
usage: -1
```

* Обязательно: НЕТ (по умолчанию: 0)

:::info
usage: 0 равно usage:1, но текст "Remaining use:..." в lore отображаться не будет.
:::

## Функции контейнеров

:::info
Фильтры предметов корректно поддерживают тег `{CUSTOMODELDATA:X}`, поэтому вы можете создать воронку, которая берёт только предмет с определённой текстурой
:::

### whitelistMaterials

* Здесь вы можете добавить список материалов, которые можно помещать внутрь вашего блока

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Здесь вы можете добавить список материалов, которые нельзя помещать внутрь вашего блока

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
В случае ВОРОНОК whitelist и blacklist ограничивают предметы, которые воронка может забирать.
:::

### isLocked

* Заперт ли контейнер

### lockedName

* Если контейнер заперт, нужно указать название ключа

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Заголовок инвентаря контейнера 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Функции печи

### furnaceSpeed

* Позволяет настроить скорость вашей печи.
* Пример:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
По умолчанию -> 1

Скорость в 2 раза выше стандартной -> 2

Половина стандартной скорости -> 0.5
:::

### infiniteFuel

* Блоку не требуется топливо для работы

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Блок выглядит так, будто он горит

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Множитель результата.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Значение может быть отрицательным, чтобы убирать предметы из хранилища результата.
:::

### fortuneChance

* Шанс, что fortune сработает

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Функции направления

### forceBlockFaceOnPlace

* Принудительно устанавливает блок так, чтобы он смотрел в определённом направлении
* Пример:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Задаёт сторону блока при его установке
* Пример:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` применяется только когда `forceBlockFaceOnPlace` равно `true`. Без этого блок сохраняет то направление, с которым он был поставлен. Эти опции поворачивают только направленные блоки (блоки с `facing`).

Команда [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) тоже может принимать направление, которое имеет приоритет над этими опциями.
:::

## Функции улья <CustomTag type="version" version="1.15" /> {#beehive-features}

Предварительно заполняет улей или пчелиное гнездо при его установке. Только для ExecutableBlocks, чей материал `BEEHIVE` или `BEE_NEST` (созданных с помощью `BASIC_CREATION` или `IMPORT_FROM_EXECUTABLE_ITEMS`); на других блоках эти опции ничего не делают. В игровом редакторе кнопка отображается только для этих двух материалов.

Обе опции необязательны: если ни одна из них не задана, блок не изменяется и в конфиге ничего не записывается.

### honeyLevel

* Информация: уровень мёда в установленном блоке, от `0` (пусто) до `5` (полно, мёд можно собирать). Если не задано: уровень мёда не изменяется.

### bees

* Информация: количество пчёл, помещаемых внутрь установленного блока. Если не задано или `0`: пчёл нет. По умолчанию улей вмещает 3 пчелы, лишние пчёлы не добавляются.

* Пример:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
С помощью [активатора LOOP и `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-) собранное пчелиное гнездо можно установить снова (и, таким образом, снова заполнить) через фиксированное время после его установки.
:::

## Функции варочной стойки

### brewingStandSpeed

* Позволяет настроить скорость вашей варочной стойки
* Пример:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
По умолчанию -> 1

Скорость в 2 раза выше стандартной -> 2

Половина стандартной скорости -> 0.5
:::

## Функции воронки

### amountItemsTransferred

* Позволяет настроить количество предметов, передаваемых при каждой передаче воронки.
* Работает как когда воронка передаёт предметы в контейнер, на который она направлена, так и (начиная с 26.11) когда она забирает предметы из контейнера над ней.
* Пример:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Функции дисплея

### Material

* Материал предмета, который будет отображаться
* Пример:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data материала, который будет отображаться
* Пример:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Масштаб дисплея
* Пример:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Если вы хотите, чтобы дисплей был выровнен
* Пример:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Выберите пользовательский pitch
* Пример:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Выберите пользовательский Y
* Пример:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Свечение включено или нет
* Пример:

```
DisplayFeatures:
  glow: false
```

### Функции Interaction zone

* Ширина дисплея
* Высота дисплея
* Есть ли коллизия или нет
* Пример:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Количество кликов, необходимое для разрушения созданного дисплея
* Пример:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Задаёт, в каких слотах (индекс 0-5) будет лежать книга

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Информация: отменяет разрушение семян и голов игроков водой/лавой
* Пример: 

```
cancelLiquidDestroy: true
```
