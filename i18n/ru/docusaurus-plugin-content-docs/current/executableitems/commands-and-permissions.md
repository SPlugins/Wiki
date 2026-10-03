---
description: >-
  Список команд и прав (permissions) плагина ExecutableItems: создание, выдача,
  удаление предметов и настройка ресурспака.
source_hash: bc9c7ad5f9180570
translated_at: '2026-10-03T10:23:25.418Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Команды и права

На этой странице вы узнаете о командах и правах (permissions) плагина ExecutableItems.

Премиум функции отмечены тегом: <CustomTag type="premium" />

## Права (Permissions)

**Совет для новичков:**

:::info
Чтобы выдать права на все предметы, рекомендуем установить плагин прав, например [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). После установки плагина прав достаточно выдать право **`ei.item.*`**, для Luckperms команда выглядит так: **`/lp group default permission set ei.item.* true`**
:::

#### Право на предмет

* Информация: право игрока использовать ExecutableItems.
  * Право на использование конкретного ID ExecutableItem: `ei.item.{id}`
  * Право на использование всех ExecutableItems: `ei.item.*`
  * Отрицательное право, запрещающее конкретный ID ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Пример: `ei.item.test`

#### Право на обход кулдауна

* Информация: право игрока не иметь кулдауна при использовании ExecutableItems.
  * Во время тестирования вы не должны тестировать с op/operator/admin.
  * Право на обход конкретного ID ExecutableItems: `ei.nocd.{id}`
  * Право на обход всех ExecutableItems: `ei.nocd.*`
* Пример: `ei.nocd.test`

#### Все права

* Информация: право, дающее все права на ExecutableItems.
  * Будьте осторожны! Оно буквально даёт абсолютно все права, включая административные.
  * Право: `ei.*`
* Если вы хотите выдать конкретное право, читайте дальше: ниже подробно описана каждая команда с соответствующим правом.

#### Права на все команды

* Информация: право, дающее права на все команды ExecutableItems.
  * Право: `ei.cmds`
* Если вы хотите выдать конкретное право, читайте дальше: ниже подробно описана каждая команда с соответствующим правом.

## Команды

Здесь вы узнаете о командах ExecutableItems. В объяснении будут повторяться некоторые слова, вот они:

* SsomarPluginsItem: это ID созданного ExecutableItem, так же, как может быть "Excalibur", "SuperPickaxe", "turtle", "12345", мы установили это название.
* SsomarPluginsPlayer: это имя игрока, так же, как бывает "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame", так же бывает и это имя.

Формат команд будет использовать разные символы:

* \{\} : если аргумент заключён в \{\}, это означает, что он обязателен для выполнения команды.
* \[] : если аргумент заключён в \[], это означает, что он необязателен для выполнения команды.

Также будут использоваться разные цвета (но идея та же, что и с \{\} и \[]):

* Синий: обязательный
* Оранжевый: необязательный

### Общие команды

#### Создать новый ExecutableItem

* Команда: **/ei create \{id\}**
  * `id`: ID ExecutableItem.
  * Если вы хотите **скопировать предмет другого плагина** или кастомный ванильный предмет (Banner, Shield, ...), это просто! Возьмите его в основную руку и выполните эту команду create.
* Пример: `/ei create SsomarPluginsItem`
* Право: `ei.cmd.create`

#### Создать новый ExecutableItem из выбранного блока

* Команда: /ei create-from\_block \{id\}
  * `id`: ID ExecutableItem.
* Пример: `/ei create-from_block SsomarPluginsItem`
* Право: `ei.cmd.create-from-block`

#### Открыть редактор / меню

* Команда: **/ei editor** или **/ei show**
* Право: `ei.cmd.editor` или `ei.cmd.show`
* В списке иконка каждого предмета показывает предпросмотр его отображаемого названия, лора, зачарований и атрибутов. Это можно отключить с помощью [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) в конфиге SCore.

#### Перезагрузить плагин

* Команда: **/ei reload**
* Право: `ei.cmd.reload`

**Перезагрузить только 1 предмет**

* Команда: **/ei reload \{id\}**
  * `id`: ID ExecutableItem.
* Пример: `/ei reload SsomarPluginsItem`
* Право: `ei.cmd.reload`

**Перезагрузить папку**

* Команда: **/ei reload folder\:Name\_Of\_My\_Folder**
* Право: `ei.cmd.reload`

#### Регенерировать стандартные конфиги предметов

* Команда: **/ei default\_items**
* Право: `ei.cmd.default_items`

#### Удалить ExecutableItem

* Команда: **/ei delete \{id\}**
  * `id`: ID ExecutableItem.
* Пример: `/ei delete SsomarPluginsItem`
* Право: `ei.cmd.create`

#### Редактировать ExecutableItem командой

* Команда: **/ei edit \{id\}**
  * `id`: ID ExecutableItem.
* Пример: `/ei edit SsomarPluginsItem`
* Право: `ei.cmd.edit`

#### Сбросить все кулдауны и отложенные команды ExecutableItems

* Команда: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Вы можете использовать имена игроков, чтобы указать игрока
    * Вы можете использовать UUID, чтобы указать сущность.
  * `optional_target`
    * ALL: сбрасывает отложенные команды игрока, кулдауны и actionbar'ы.
    * DELAYED\_COMMANDS: сбрасывает все отложенные команды, вызванные DELAY и DELAYTICK.
    * COOLDOWNS: сбрасывает все кулдауны игрока по всем предметам.
    * ACTIONBARS: сбрасывает все actionbar'ы игрока от кастомной команды ACTIONBAR.
* Пример: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Право: `ei.cmd.clear`

#### Включить / выключить actionbar ExecutableItems

* Команда: **/ei actionbar \{on or off\}**
* **Пример:** `/ei actionbar off`
* Право: `ei.cmd.actionbar`

#### Проверить ExecutableItem в основной руке

* Команда: **/ei inspect**
  * Чтобы использовать эту команду, у ExecutableItem должна быть включена функция хранения информации о предмете. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Вывод:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables
* Право: `ei.cmd.inspect`

#### Убрать владельца у EI, находящегося в вашей руке

* Команда: **/ei unowned**
  * Чтобы убрать владельца у предмета, у него должен быть владелец, для этого у этого ExecutableItem должна быть включена функция [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * После выполнения этой команды следующий игрок, который взаимодействует с этим предметом, станет новым владельцем. (Он не должен быть operator/op/admin)
* Право: `ei.cmd.unowned`

#### Забрать EI из инвентаря игрока

* Команда: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: имя игрока, у которого забирается предмет
  * `id`: ID ExecutableItems
  * `quantity`: целое число, количество для удаления
* Пример: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Право: `ei.cmd.take`

#### Обновить ExecutableItem(ы) ваших игроков до последней версии конфига

* Информация: эта команда обновляет ExecutableItemID(ы) до их последней версии в конфиге. Это значит, что если у игрока есть ExecutableItem старой версии, например, с атрибутом GENERIC\_ARMOR равным 10, а затем вы меняете значение атрибута в конфиге ExecutableItem, у игрока это не обновится автоматически. Чтобы это обновление применилось, вы можете использовать эту команду, и тогда вместо 10 он получит новое обновлённое значение.
  * Чтобы этот процесс обновления сработал, выбранный ExecutableItem(ы) должен находиться в инвентаре игроков, иначе он не будет обновлён
  * Совет: другой способ выполнить это обновление - использовать [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Команда: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: имя конкретного игрока или "all" для всех онлайн игроков.
  * `ExecutableItemID`: имя конкретного ExecutableItem или "all" для всех созданных ExecutableItems.
  * `option`: аргумент обновления
    * Варианты:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (выполняет все вышеперечисленные операции)
* Право: `ei.cmd.refresh`

#### **Изменить владельца ExecutableItem, находящегося в вашей руке**

* Команда: **/ei set\_owner** **\{player\}**
  * `player`: имя игрока, которого нужно назначить целью этой команды
    * Работает с офлайн игроками.
* Право: `ei.cmd.set_owner`

#### Включить режим отладки

* Информация: режим, в котором каждый активатор выводит пользователю различные сообщения, чтобы узнать состояние активатора и понять, почему он не срабатывает так, как ожидается.
* Команда: **/ei debug**
* Право: `ei.cmd.debug`

#### Список наборов (sets) и того, что носит игрок <CustomTag type="premium" />

* Информация: выводит список загруженных [sets](/executableitems/configurations/sets-configuration) (`plugins/ExecutableItems/sets`). С указанием игрока: надетые части и активный уровень (tier) для каждого набора.
* Команда: **/ei sets** **[player]**
* Право: `ei.cmd.sets`

#### Запустить один активатор (для тестирования предмета)

* Информация: запускает один активатор ExecutableItem, который держит игрок, без выполнения жеста (клик, удар, прыжок...). Полезно для тестирования конфига. Всё остальное работает как обычно: детализированные слоты, условия, кулдауны, usage и команды. Предмет ищется в указанном слоте, иначе в основной руке, затем во второй руке, затем в броне, затем во всём инвентаре.
* Команда: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: сущность или игрок для активаторов, у которых есть цель (удар, клик по сущности...). По умолчанию тот, на кого смотрит игрок.
  * `block`: блок для активаторов, у которых есть целевой блок. По умолчанию блок, на который смотрит игрок.
  * `click`: для активаторов с детализированным кликом. По умолчанию `right` (`left` для `PLAYER_LEFT_CLICK`).
  * `input`: обязателен для `PLAYER_INPUT`.
* Совет: если ничего не происходит, выполните **/ei debug**, чтобы увидеть, какая проверка блокирует активатор.
* Право: `ei.cmd.trigger`

### Команды выдачи (Give)

#### Команда Give

* Информация: команда для выдачи игроку ExecutableItem в первый свободный слот.
* Команда: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: имя игрока, который станет целью этой команды
  * `id`: ID выдаваемого ExecutableItem.
    * Необязательные значения: чтобы добавить эту кастомную настройку, в формате не должно быть пробелов.
      * `Variables`: вы можете выбрать набор переменных для выдачи предмета.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # без использования пробелов
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # с использованием пробелов
      * `Usage:` вы можете выбрать значение usage при выдаче предмета
        * ✅`{Usage:5}` # без использования пробелов
        * ❌`{Usage : 5}` # с использованием пробелов
      * `Durability`: вы можете указать, насколько прочность предмета уменьшится при выдаче пользователю
        * ✅`{Durability:5}` # без использования пробелов
        * ❌`{Durability : 5}` # с использованием пробелов
  * `quantity`: количество выдаваемых предметов
  * `giveOfflinePlayer`: булево значение, определяющее, будет ли предмет выдан офлайн игроку. По умолчанию это значение true.
* Примеры: (во всех этих примерах команды выполняются внутри ExecutableItems, чтобы обработать плейсхолдеры вроде %player%, %var\_name% и %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3`
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Право: `ei.cmd.give`

#### Команда Give All

* Команда: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID выдаваемого ExecutableItem.
  * `quantity`: количество выдаваемых предметов
  * `world`: необязательный аргумент мира, в котором выполнять команду. Это приведёт к тому, что игроки, не находящиеся в этом мире, не получат ExecutableItem.
  * `giveOfflinePlayer`: булево значение, определяющее, будет ли предмет выдан офлайн игроку. По умолчанию это значение true.
* Право: `ei.cmd.giveall`

#### Выдать EI в конкретный слот игрока <CustomTag type="premium" />

* Команда: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: имя игрока, который станет целью этой команды
  * `id`: ID выдаваемого ExecutableItem.
    * Необязательные значения: чтобы добавить эту кастомную настройку, в формате не должно быть пробелов.
      * `Variables`: вы можете выбрать набор переменных для выдачи предмета.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # без использования пробелов
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # с использованием пробелов
      * `Usage`: вы можете выбрать значение usage при выдаче предмета
        * ✅\{Usage:5\} # без использования пробелов
        * ❌\{Usage : 5\} # с использованием пробелов
  * `quantity`: количество выдаваемых предметов
  * `slot`: слот игрока, в который будет выдан предмет.
  * `override`: булево значение для перезаписи слота, если в нём уже есть предмет. В этом случае он будет перемещён, а если инвентарь игрока полон, он будет выброшен на землю.
* Примеры:
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Право: `ei.cmd.giveslot`

**Выдать все EI из конкретной папки игроку**

* Информация: команда для выдачи игроку папки плагина.
* Команда: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: имя игрока, который станет целью этой команды
* Право: `ei.cmd.givefolder`

### Команды Drop

#### Выбросить (Drop) EI в конкретном месте / позиции

* Команда: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID выдаваемого ExecutableItem.
  * `quantity`: количество выбрасываемых предметов. По умолчанию 1.
  * location: вся локация необязательна, если вы хотите её добавить, нужно заполнить следующие аргументы:
    * `world`: мир, в котором будет выброшен предмет.
    * `x`: координата X, где будет выброшен предмет.
    * `y`: координата Y, где будет выброшен предмет.
    * `z`: координата Z, где будет выброшен предмет.
* Примеры: (во всех этих примерах команды выполняются внутри ExecutableItems, чтобы обработать плейсхолдеры вроде %player%, %var\_name% и %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Право: `ei.cmd.drop`

### Команды изменения (Modification)

#### Изменить значение usage ExecutableItem

* Команда:
  * В игре: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * В консоли: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Параметры:
    * `set or modification`
      * set: устанавливает новое \{value\} и заменяет старое
      * modification: полезно для добавления изменений, увеличивает или уменьшает исходное значение на \{value\}
    * `player`: имя игрока, который станет целью этой команды
    * `slot`: слот игрока, в который будет выдан этот предмет.
      * Больше информации о слотах здесь [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `value`: значение, используемое для изменения.
* Право: `ei.cmd.modification`

#### Изменить значение переменной ExecutableItem

* Команда:
  * В игре: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * В консоли: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Параметры:
    * `set or modification`
      * set: устанавливает новое \{value\} и заменяет старое
      * modification: полезно для добавления изменений, увеличивает или уменьшает исходное значение на \{value\}
    * `player`: имя игрока, который станет целью этой команды
    * `slot`: слот игрока, в который будет выдан этот предмет.
      * Больше информации о слотах здесь [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `variableName`: название переменной, к которой нужно применить typeOfModication с выбранным значением.
    * `value`: значение, используемое для изменения.
* Право: `ei.cmd.modification`

#### Найти ExecutableItem на сервере

* Информация: показывает информацию о том, где на вашем сервере находятся ExecutableItems с ID \{id\}.
* Команда: **/ei search \{id\} \{searchMode\}**
  * `id`: ID искомого ExecutableItem
  * `searchMode`: тип поиска
    * players: искать ExecutableItem во всех инвентарях **онлайн** игроков.
    * containers: искать ExecutableItem во всех **загруженных** контейнерах.
    * all: искать обоими способами.
* Пример:
  * `/ei search EternalSword all`
* Право: `ei.cmd.search`

#### Получить путь к файлу ExecutableItem

* Информация: эта команда показывает абсолютный путь в файловой системе до файла конфигурации конкретного ExecutableItem. Полезно для разработчиков или администраторов сервера, которым нужно найти и напрямую отредактировать файлы предметов.
* Команда: **/ei path \{id\}**
  * `id`: ID ExecutableItem, для которого нужно получить путь
* Пример:
  * `/ei path ExcaliburSword`
  * Вывод: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Право: `ei.cmd.path`

#### Проверить информацию об оптимизации событий

* Информация: эта команда показывает подробную информацию об оптимизации обработчиков событий ExecutableItems и статистику производительности. Она показывает, какие события прослушиваются, и даёт информацию о предметах, использующих кастомное распознавание (custom recognition), которое может повлиять на производительность. Вывод отправляется в консоль сервера.
* Команда: **/ei checkevents**
* Вывод включает:
  * Список оптимизированных событий и статус их прослушивания
  * Количество ExecutableItems, использующих кастомное распознавание
  * Предупреждения о влиянии на производительность
  * Рекомендации для улучшения производительности
* Право: `ei.cmd.checkevents`

:::info
Вывод этой команды отправляется в **консоль**, а не игроку в игре. Проверьте консоль вашего сервера, чтобы увидеть подробную информацию.
:::

:::tip
Предметы с кастомным распознаванием (custom recognition) могут влиять на производительность. Команда покажет вам, сколько предметов используют эту функцию. Если у вас есть проблемы с производительностью, рассмотрите возможность уменьшения количества предметов с включённым кастомным распознаванием.
:::

### Команды ресурспака (Texture Pack)

#### Обновить ресурспак ExecutableItems

* Команда: **/ei refresh-pack**
* Информация: обновляет и перезагружает ресурспак ExecutableItems для всех онлайн игроков. Полезно после внесения изменений в кастомные текстуры.
* Право: `ei.cmd.refresh-pack`

#### Скачать стандартный ресурспак ExecutableItems

* Команда: **/ei download-default-pack**
* Информация: скачивает стандартный ресурспак ExecutableItems из официального репозитория и автоматически распаковывает его. Если в config.yml включена опция `selfHostPack`, пак будет автоматически зарегистрирован и размещён на вашем сервере. Это полезно для:
  * Первоначальной настройки ресурспака
  * Восстановления стандартного пака после изменений
  * Обновления до последней версии стандартного пака
* Требования:
  * Опция `selfHostPack: true` должна быть установлена в config.yml для автоматического хостинга
  * У сервера должно быть подключение к интернету для скачивания пака
* Право: `ei.cmd.download-default-pack`

:::info
**Варианты хостинга:**
- **Самостоятельный хостинг на вашем сервере**: установите `selfHostPack: true` в config.yml, пак будет размещён напрямую плагином
- **Внешний хостинг**: если вы хотите разместить пак самостоятельно (на сайте, CDN и т.д.), укажите URL для скачивания в `texturesPackUrl` в config.yml
- **Без хостинга**: если ни один из вариантов не включён, пак будет скачан и распакован локально, но не будет распространён игрокам
:::

### Custom Triggers

* Информация: в ExecutableItems есть команды для запуска Custom Triggers. Если вы хотите узнать, что это такое и как их использовать, посмотрите информацию здесь [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### WorldGuard

* Вы можете использовать флаги WorldGuard, чтобы включать/выключать все активаторы ei
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Сообщение об ошибке можно настроить в /ExecutableItems/locale/locale_EN.yml, например
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
