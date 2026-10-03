---
description: >-
  Страница SPlugins о функциях активаторов ExecutableItems: условия, кулдауны,
  автообновление предметов и типы активаторов.
source_hash: c1b2157347497341
translated_at: '2026-10-03T10:23:07.055Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Функции активаторов

Все эти функции находятся внутри активатора, напомним, что активаторы позволяют выполнять кастомные действия для вашего ExecutableItem, они могут иметь условия, запускать команды, иметь кулдаун и т.д.

Премиум функции отмечены тегом: <CustomTag type="premium" />

## Общие функции активатора

<GeneralActivatorsFeatures />

## Функции для активаторов EI

### Detailed slots

* Информация: Список целочисленных значений, которые представляют слоты инвентаря, где активатор сможет работать. Это означает, что если событие происходит в слоте, который не указан здесь, то активатор не сработает.

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Информация: Эта функция активатора делает так, что предмет обновляется по одной из функций из списка. Будьте осторожны! Это может быть не нужно в зависимости от того, что вы хотите. Есть вещи, которые обновляются автоматически, например, команды активатора, условия, кулдаун и т.д. обновляются автоматически без этой функции.
* Эта функция затрагивает в основном визуальные аспекты предмета, поэтому если вы однажды создали ExecutableItem с id\:ex\_sword с именем "\&dExcalibur" и раздали этот предмет всем игрокам, а теперь хотите, чтобы у всех ExecutableItems "ex\_sword" было новое имя "\&eEpic Sword", то вам нужно включить эту функцию на одном из активаторов предмета. Включите функцию (autoUpdateItem) + функцию обновления имени (updateName).
* Чтобы было понятнее, эта функция переопределит текущее значение в зависимости от опций, которые вы включили, текущим значением из конфига, и используется она только для визуальных функций. Она не нужна для обычных изменений, не связанных с опциями этой функции.
  * `autoUpdateItem`: Булево значение, которое показывает, включена ли эта функция для активатора или нет.
  * `updateName`: Булево значение для обновления отображаемого имени ExecutableItem. Если true, оно переопределит текущее отображаемое имя предмета текущим/обновлённым именем предмета, заданным в конфиге ExecutableItem.
  * `updateLore`: Булево значение для обновления лора ExecutableItem. Если true, оно переопределит текущий лор предмета текущим/обновлённым лором, заданным в конфиге ExecutableItem.
  * `updateDurability`: Булево значение для обновления текущей прочности ExecutableItem. Если true, оно переопределит текущую прочность предмета текущей/обновлённой прочностью, заданной в конфиге ExecutableItem.
  * `updateAttributes`: Булево значение для обновления всех атрибутов ExecutableItem. Если true, оно переопределит текущие атрибуты предмета текущими/обновлёнными атрибутами, заданными в конфиге ExecutableItem.
  * `updateEnchants`: Булево значение для обновления чар ExecutableItem. Если true, оно переопределит текущие чары предмета текущими/обновлёнными чарами, заданными в конфиге ExecutableItem.
  * `updateCustomModelData`: Булево значение для обновления значения CustomModelData ExecutableItem. Если true, оно переопределит текущее значение CustomModelData предмета текущим/обновлённым значением customModelData, заданным в конфиге ExecutableItem.
  * `updateArmorSettings`: Булево значение для обновления настроек брони ExecutableItem. Если true, оно переопределит текущие настройки брони предмета текущими/обновлёнными настройками брони, заданными в конфиге ExecutableItem. Например (цвет брони)
  * `updateMaterial`: Булево значение для обновления материала ExecutableItem. Если true, оно переопределит текущий материал предмета текущим/обновлённым материалом, заданным в конфиге ExecutableItem.
  * `updateHiders`: Булево значение для обновления конфигурации Hiders ExecutableItem. Если true, оно переопределит текущую конфигурацию Hiders текущей/обновлённой настройкой Hiders из конфига ExecutableItem.
  * `updateEquippable`: Булево значение для обновления конфигурации Hiders ExecutableItem. Если true, оно переопределит текущий компонент equippable предмета текущей/обновлённой настройкой equippable, заданной в конфиге ExecutableItem.
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Информация: Вы можете использовать эти условия во всех типах активаторов
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Информация: Вы можете использовать эти условия во всех типах активаторов
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Информация: Вы можете использовать эти условия во всех типах активаторов
* [Item conditions](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Информация: Эта функция позволяет применять кулдаун игрока к конкретным ExecutableItems и, опционально, к конкретным активаторам.
  * `executableItem`: ID ExecutableItem, к которому вы хотите применить кулдаун.
  * `activators`: Список строк, которые являются ID активаторов, на которые вы хотите воздействовать для указанного ExecutableItem с кулдауном. Если ничего не выбрано, то кулдаун будет применён ко всем активаторам указанного ExecutableItem.
  * `cooldown`: Целочисленное значение, которое будет применяемым временем кулдауна.
  * `isCooldownInTicks`: Булево значение, которое показывает, будет ли значение кулдауна в секундах или тиках. (20 тиков = 1 секунда)
* Советы:
  * Вы можете указать сам ExecutableItem, который запускает эту функцию. Например, если вы хотите, чтобы один активатор применял кулдаун к другому активатору того же предмета.
  * Другая идея, применение кулдауна ко всем предметам, связанным с уроном, если вы используете один из них.
  * Другой пример, использование этой функции, чтобы позволить игроку выбрать один из нескольких ExecutableItems, когда он выбирает один и активирует его, тогда он не может использовать ни выбранный (так как он на кулдауне), ни другие (так как они тоже на кулдауне).
* Пример:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Функции, эксклюзивные в зависимости от типа активатора

Чтобы было понятнее, для каких активаторов работают функции, мы создадим 4 типа категорий для группировки активаторов, так что если одна из функций указывает одну из этих категорий, то вы будете знать, что функция работает для всех активаторов этой категории.

* <CustomTag type="player_block" />: Описывает активаторы, в которых участвует игрок, вызвавший ExecutableItem, и блок, участвующий в активаторе. Сокращение \[P\_B]
  * PLAYER\_ALL\_CLICK (с функцией typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (с функцией typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (с функцией typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * И т.д., подробнее на [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Описывает активаторы, в которых участвует игрок, вызвавший ExecutableItem, и сущность, участвующая в активаторе. Сокращение \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (Сущность является снарядом, который запускается) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * И т.д., подробнее на [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Описывает активаторы, в которых участвует игрок, вызвавший ExecutableItem, и другой игрок, называемый "целью", который рассматривается как цель или противник. Сокращение \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * И т.д., подробнее на [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Если есть функция, содержащая разные активаторы из разных категорий, то для понимания лучше создать новый временный список, который будет указан в функции. Сокращение \[S\_A]

## Для \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Для \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Для \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Для \[S\_A] <CustomTag type="specific_activators" />

<TargetItemFeatures />
* Для:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Тип категории активатора: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Информация: Функция для активаторов, связанных со снарядами, она влияет на то, должен ли активатор работать со снарядами, не запущенными тем же EI.
  * Пример, есть активатор PROJECTILE\_HIT\_ENTITY, detailedSlots: \[все слоты] и в playerCommands: \["say hi"]
    * Если функция включена, то она будет работать только если у этого ExecutableItem есть другой активатор с командой LAUNCH, таким образом, снаряд будет запущен из EI, и тогда условие будет выполнено
    * Если функция отключена, все снаряды, такие как: обычный лук, обычный снежок, снаряды из других ExecutableItems, и снаряд самого ExecutableItem запустят активатор.
* Важно: Когда `mustBeAProjectileLaunchWithTheSameEI` равно `true`, плагин не может гарантировать со 100% уверенностью, в каком конкретном слоте инвентаря находился предмет в момент запуска. Он активирует первую найденную подходящую копию EI в инвентаре игрока. По этой причине **всегда настраивайте `detailedSlots` активатора так, чтобы включить все слоты**, не ограничивайте только основной рукой. Если активатор ограничен только основной рукой, он может не сработать, если подходящий предмет будет сначала проверен в другом слоте.
  * Пример:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Для:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Для:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Для:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Для:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Для
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Для:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Для:
  * LOOP

<InputFeatures />
* Для:
  * PLAYER_INPUT
