---
description: >-
  Список плагинов, совместимых с ExecutableItems: от MythicMobs и ItemsAdder до
  WorldGuard и Vault.
source_hash: 4012882ccbdb916c
translated_at: '2026-10-03T10:30:38.245Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Совместимые плагины

:::info
Обратите внимание, что этот список касается строго совместимых плагинов. Почти любой плагин совместим с плагинами Ssomar: если вы хотите запустить команду из другого плагина, просто замените имя цели на плейсхолдер. \

Например:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
И так далее, **любая команда, поддерживающая имя игрока, "совместима" с нашими плагинами.**
:::

Этот раздел посвящён плагинам, которые работают совместно с плагинами Ssomar: у нас есть некоторые функции, совместимые с другими плагинами.

* Перед началом вам нужно знать, что совместимость ≠ пригодность для использования: почти все плагины пригодны для использования с плагинами Ssomar, потому что все команды выполняются через консоль.

### MythicMobs

#### Вы можете заставить мобов MythicMobs дропать предметы плагинов Ssomar следующими способами:

*   ExecutableItems:

    1. Возьмите ExecutableItem в руку и выполните `/mm i import`, это импортирует предмет в файл items.yml плагина MythicMobs, откуда вы сможете добавить его в LootTable MythicMobs.
    2. Выполните skill \~onDeath у моба, запустив command skill с добавлением следующей строки:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * Та же идея, но вместо ExecutableItem используется ExecutableBlock, а в команде из skill вместо "ei" используется "eb".

#### Вы можете указать, что активаторы SsomarPlugins работают только с определёнными мобами MythicMobs, используя функцию [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Пример: создание ExecutableItem, который наносит больше урона списку мобов MythicMobs
* Пример: создание ExecutableBlock, который наносит урон определённому мобу MythicMobs, когда он наступает на блок
* Пример: создание ExecutableEvent, который работает только для списка мобов MythicMobs.

#### Вы можете призывать мобов MM, используя эту команду внутри вашего активатора:

* В зависимости от используемого активатора вам может потребоваться изменить плейсхолдеры.
  * Пример: вместо %world% может потребоваться использовать %player\_world%, %target\_world% или %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Вы можете использовать эту идею с ExecutableBlocks и активатором LOOP, чтобы создать кастомный спавнер MythicMobs.

#### Запуск skill MythicMobs из функций плагинов Ssomar

* Вы можете использовать в разделе команд `SUDOOP mm test cast <skill>` для запуска skill из MythicMobs.

#### Кастомные команды SCore

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐С его помощью можно создать систему рыбалки на основе MythicMobs, похожую на ту, что есть на сервере Hypixel Minecraft. Например, можно сделать список уровней разных удочек (все реализованы через ExecutableItems), где каждый уровень будет иметь от низкой до высокой вероятности поймать более эпичных мобов из ваших озёр, добавив ограничения на ловлю мобов MM только в озёрах по координатам "x" (или в регионе WorldGuard), и так далее.

### **LevelledMobs**

* ExecutableItems
  * Вы можете заставить LevelledMobs дропать ExecutableItems, используя этот ресурс:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (ранее AureliumSkills)

* У плагинов Ssomar есть функция активатора [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana), позволяющая задать требование для работы активатора.
* Команды Aurelium Skills
  * Также вы можете использовать команды AureliumSkills в своём плагине, например, выдавать ману игроку, выдавать ману окружающим игрокам (как поддержка) и так далее.
* ExecutableItems
  * NBT Aurelium Skills
    * Вы можете создать ExecutableItem, который при удержании увеличивает максимальную ману. Для этого создайте предмет, выполните команду `/sk modifier`, а затем, удерживая предмет, выполните `/ei create <id>`. Теперь у ExecutableItem есть NBT-тег команды, а значит, и внесённые вами изменения.

### ExecutableBlocks и ExecutableItems

* Эти два плагина (ExecutableBlocks и ExecutableItems) могут быть связаны друг с другом. Эта связь создаётся через функцию [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) у EB. Например:
  * При установке ExecutableItem он становится связанным с ним ExecutableBlock (по умолчанию он потеряет данные ExecutableItem и будет установлен как ванильный блок)
  * При разрушении ExecutableBlock вы получаете связанный с ним ExecutableItem.
  * Отслеживание того же использования, которое было у установленного ExecutableBlock, при его разрушении и превращении в связанный ExecutableItem и наоборот.
  * Отслеживание тех же значений переменных, которые были у установленного ExecutableBlock, при его разрушении и превращении в связанный ExecutableItem и наоборот.

### ItemsAdder

* ExecutableItems
  * Вы можете использовать текстуры, созданные с ItemsAdder, с помощью функции [customModelData](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) или [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Вы можете связать предмет ItemsAdder с EI, следуя их вики по связыванию: для этого добавьте следующую строку кода в файл предмета ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Вы можете создать ExecutableBlock с текстурой блока ItemsAdder, выбрав функцию [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) у ExecutableBlocks.
* Можно выбрать в качестве [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) для активаторов, связанных с блоком любого плагина, определённые блоки ItemsAdder
  *   Пример:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Вы можете использовать текстуры из Nexo в вашем ExecutableItem, просто используя значение [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) или [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Один из главных столпов при создании предметов: вы можете использовать любой плейсхолдер PlaceholderAPI в любой части наших плагинов:
  * Lore
  * Раздел команд
  * Сообщения (все типы сообщений: сообщение о кулдауне, сообщение о невыполненном условии, сообщение о необходимых вещах и так далее)
  * Переменные
  * и так далее.

### ShopGui+

* Этот плагин поддерживает продажу предметов с определёнными NBT-тегами в магазине, поэтому он поддерживает продажу ExecutableItems и ExecutableBlocks.
* Команда блока [SELL\_CONTENT](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) поддерживается этим плагином.

### ShopKeepers

* Этот плагин поддерживает продажу предметов с определёнными NBT-тегами в магазине, поэтому он поддерживает продажу ExecutableItems и ExecutableBlocks.

### Tradesplus

* Этот плагин поддерживает продажу предметов с определёнными NBT-тегами в магазине, поэтому он поддерживает продажу ExecutableItems и ExecutableBlocks.

### WorldGuard

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится внутри или снаружи региона: оно называется [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) и совместимо с этим плагином.
* Все команды SCore учитывают защиту WorldGuard
  * Это означает, что BREAK (команда SCore) не выполнится, если у игрока нет права на разрушение блока в выбранной позиции.
  * Учтите, что эта функция относится к командам SCore, а не к командам, выполняемым нашими плагинами: это значит, что использование ванильной команды внутри одного из наших плагинов "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" обойдёт любые ограничения.
* ExecutableBlocks
  * Вы можете заполнить регион определёнными ExecutableBlock(s) с заданными весами, используя [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * С помощью этой функции, например, можно создать глобальный цикл, который сбрасывает определённую шахту, как типичные /warp mines на серверах Minecraft.

### HeadDB

* ExecutableItems
  * Вы можете использовать этот плагин, чтобы выбрать определённую голову игрока для предмета ExecutableItem с помощью [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Вы можете использовать этот плагин, чтобы выбрать определённую голову игрока для блока ExecutableBlock, связав ExecutableItem с [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) и используя [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) из указанного ExecutableItem.

### IridiumSkyblock

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём острове: оно называется [ifPlayerMustBeOnHisIsland](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) и совместимо с этим плагином.

### SuperiorSkyblock

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём острове: оно называется [ifPlayerMustBeOnHisIsland](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) и совместимо с этим плагином.

### GriefPrevention

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём клейме: оно называется [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim), а также есть [ifPlayerMustBeOnHisClaimOrWilderness](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), и оба совместимы с этим плагином.

### Lands

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём клейме: оно называется [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim), а также есть [ifPlayerMustBeOnHisClaimOrWilderness](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), и оба совместимы с этим плагином.
* ExecutableItems
  * Есть несколько активаторов, специфичных для этого плагина, а именно:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём клейме. Это условие называется [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) и совместимо с этим плагином.

### Residence

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём клейме. Это условие называется [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) и совместимо с этим плагином.

### PlotSquared

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится на своём участке. Это условие называется [ifPlayerMustBeOnHisPlot](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot) и совместимо с этим плагином.

### Towny

* У всех плагинов есть условие, позволяющее заставить активатор работать только если игрок находится в своём городе. Это условие называется [ifPlayerMustBeOnHisTown](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown) и совместимо с этим плагином.

### Advanced Enchantments

* ExecutableItems
  * Из-за того, как работает плагин Advanced Enchantments, его чары не присутствуют в списке чар. Поэтому их нельзя добавить через функцию чар:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Но можно добавить их чары в ваши ExecutableItems, используя плагин NBTAPI, следуя одному из этих способов:
    * Первый способ: создать ванильный предмет, добавить на него AdvancedEnchantment, а затем, удерживая его, выполнить /ei create \<id>. Полученный ExecutableItem автоматически будет иметь импортированные чары Advanced Enchantments.
    *   Второй способ: добавить NBT-тег вручную в конфигурационный файл ExecutableItems. Вот пример:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * После всех этих шагов вам нужно вручную добавить чары в lore, чтобы игроки знали, что у этого предмета есть этот чар.

### RoseLoots

* Все команды блока, связанные с лутом (например, [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break) и так далее), поддерживают кастомный лут блоков из этого плагина.

### MMOInventory

* ExecutableItems
  * Активаторы, связанные со входом и выходом из инвентаря (например, EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY и EI\_LEAVE\_THE\_PLAYER\_INVENTORY), запускаются их методами.

### EnchantsSquared

* ExecutableItems
  * Этот плагин поддерживает чары EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Этот плагин поддерживает чары ExcellentEnchants.

### MMOCore

* Функция requiredMana для активаторов может использовать ману из MMOCore, позволяя задавать требования по мане для работы активаторов.

### TAB

* Кастомная команда SETGLOW совместима с TAB. Вам нужно использовать плейсхолдер %score\_cmd-glow%

### BlocksToCommand

* Плагин, позволяющий импортировать структуры, которые можно размещать с помощью плагинов Ssomar.

### Terra

* Кастомные биомы Terra поддерживаются условиями биомов с помощью условия [ifInBiome](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Это позволяет создавать активаторы, эффекты или ограничения на основе биома, в котором находится игрок.

### EcoSkills

* Вы можете использовать условия плейсхолдеров, чтобы проверить, есть ли у игрока определённые значения магии, прежде чем позволить активатору запуститься.
* Вы можете использовать команды для получения или удаления значений магии.
* ExecutableItems
  * Функция [RequiredMagic](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills) вместо использования условий плейсхолдеров и команд для удаления магии.

### FACTIONS UUID

* Команды SCore размещают и удаляют блоки безопасно, учитывая защиту FactionsUUID игрока.

### CMI

* Команда [SELL\_CONTENT](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) поддерживает цены CMI, обеспечивая бесшовную интеграцию с экономической системой CMI для продажи предметов по правильной игровой стоимости.

### JOBS REBORN

* Команда JOBS\_MONEY\_BOOST работает с этим плагином.

### VAULT

* ExecutableItems
  * Функция [requiredMoney](/executableitems/configurations/activator-configuration/activators-features#requiredmoney) работает с Vault, позволяя задать требование по деньгам для запуска активатора.

### Citizen NPC

* ExecutableItems
  * Следующие активаторы работают с Citizen NPC:
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* Команды SILK\_SPAWNER работают со спавнерами WildStacker.
