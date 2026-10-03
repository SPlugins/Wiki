---
description: >-
  Описание настроек и возможностей ExecutableBlocks: активаторы, контейнеры,
  печи, дисплеи и другие функции плагина SPlugins.
source_hash: 550955941cd1e931
translated_at: '2026-10-03T10:34:33.381Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Возможности блоков


## Activators

* Очень важные возможности, позволяющие добавлять способности вашим блокам
* Отдельная вики для этой функции: [EB Activators list](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) и [EB Activators features](/executableblocks/configurations/activator-configuration/activators-features.md)


## Основные настройки

### CreationType

* Способ создания EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Инфо: базовый предмет minecraft для executable block. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Дополнительная инфо: предмет должен быть размещаемым блоком.

```yaml
material: DIRT
```

:::info
Поддерживаются спавнеры! Поэтому, если вы хотите задать тип для вашего спавнера, добавьте:

`spawnerType: CHICKEN`

[EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Инфо: название блока
* Пример: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Инфо: лор блока
* Пример:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Плейсхолдеры, которые можно использовать в лоре: %player%, [%usage%](block-features.md#hide-usage-1.14+) и т.д.

### DROP BLOCK IF IT IS BROKEN

* Инфо: нужно ли, чтобы ваш Executable Block можно было получить при разрушении блока
* Пример: 

```yaml
dropBlockIfItIsBroken: true
```

* Обязательно: НЕТ (по умолчанию: true)

### DROP BLOCK IF IT IS BURNS

* Инфо: нужно ли, чтобы ваш Executable Block можно было получить при разрушении блока
* Пример: 

```yaml
dropBlockIfItIsBurns: true
```

* Обязательно: НЕТ (по умолчанию: false)

### DROP BLOCK WHEN IT EXPLODES

* Инфо: нужно ли, чтобы ваш Executable Block можно было получить при уничтожении в результате любого взрыва
* Пример:

```yaml
dropBlockWhenItExplodes: true
```

* Обязательно: НЕТ (по умолчанию: true)

### DROP TYPE

* Инфо: выберите тип дропа, который будет у блока EB
* Типы дропа:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Инфо: требование иметь как минимум нужный Executable Item в основной или дополнительной руке, чтобы сломать executable block
* Пример:

```yaml
onlyBreakableWithEI:
- firework
```

* Обязательно: НЕТ (по умолчанию: пусто)

### CANBEMOVED

* Инфо: может ли блок быть перемещён с помощью поршня или нет.
* Пример:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Инфо: это, по сути, опция, позволяющая синхронизировать ваш executable block с executable item.
  * Дополнительная инфо: executable block копирует название, материал и лор executable item, поэтому при попытке изменить название, материал или лор eb ничего не изменится. Вам нужно изменить название, материал и лор ei, чтобы изменения применились к eb
* Пример: 

```yaml
executableItem: hack
```

* Обязательно: НЕТ

## Возможности заголовка (Title)

Поддерживаются [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) и [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Инфо: будет ли включена голограмма заголовка или нет
* Пример:

```yaml
activeTitle: false
```

* Обязательно: НЕТ

### TITLE NAME 

* Инфо: отображаемый текст голограммы
* Пример: 

```yaml
title: '&7&oDefault title'
```

* (С HolographicDisplay) Вы можете отображать предмет в заголовке типа ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Обязательно: НЕТ

### TITLE ADJUSTMENT 

* Инфо: насколько выше или ниже регулируется высота голограммы заголовка
* Пример:

```yaml
titleAdjustment: 0.5
```

* Обязательно: НЕТ
  * Дополнительная инфо: положительное число для смещения вверх, отрицательное число для смещения вниз

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

* Инфо: значение количества использований. В основном используется для функции изменения usage в активаторах.
* Пример: 

```yaml
usage: 0
```

Для бесконечного использования блока используйте:

```yaml
usage: -1
```

* Обязательно: НЕТ (по умолчанию: 0)

:::info
usage: 0 равнозначно usage:1, но при этом в лоре не будет отображаться текст "Remaining use:..."
:::

## Возможности контейнера

:::info
Фильтры предметов корректно поддерживают тег `{CUSTOMODELDATA:X}`, поэтому вы можете создать воронку (hopper), которая принимает только предмет с определённой текстурой
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
В случае HOPPERS whitelist и blacklist ограничивают предметы, которые воронка может всасывать.
:::

### isLocked

* Заперт контейнер или нет

### lockedName

* Если он заперт, вам нужно выбрать название ключа

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* Название инвентаря контейнера 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Возможности печи (Furnace)

### furnaceSpeed

* Позволяет настроить скорость вашей печи.
* Пример:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
По умолчанию -> 1

В 2 раза быстрее скорости по умолчанию -> 2

Половина скорости по умолчанию -> 0.5
:::

### infiniteFuel

* Делает так, что блоку не требуется топливо для работы

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Делает так, что блок выглядит зажжённым

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
Может быть отрицательным, чтобы убирать предметы из хранилища результата.
:::

### fortuneChance

* Шанс применения fortune

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Возможности направления (Directional)

### forceBlockFaceOnPlace

* Заставляет блок размещаться с ориентацией в определённом направлении
* Пример:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Устанавливает грань блока при его размещении
* Пример:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

## Возможности винокурни (Brewing stand)

### brewingStandSpeed

* Позволяет настроить скорость вашей винокурни
* Пример:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
По умолчанию -> 1

В 2 раза быстрее скорости по умолчанию -> 2

Половина скорости по умолчанию -> 0.5
:::

## Возможности воронки (Hopper)

### amountItemsTransferred

* Позволяет настроить количество предметов, передаваемых за каждый тик воронки.
* Пример:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Возможности дисплея (Display)

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

* Выберите custom pitch
* Пример:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Выберите custom Y
* Пример:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Светится или нет
* Пример:

```
DisplayFeatures:
  glow: false
```

### Interaction zone features

* Ширина дисплея
* Высота дисплея
* Есть коллизия или нет
* Пример:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Количество кликов, необходимых для разрушения созданного дисплея
* Пример:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Задаёт, в каких слотах (индекс 0-5) будет находиться книга

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Инфо: отменяет уничтожение семян, голов игроков водой/лавой
* Пример: 

```
cancelLiquidDestroy: true
```
