---
description: >-
  Список команд и прав (permissions) плагина ExecutableItems: создание, выдача,
  перезагрузка и изменение предметов, а также права на их использование.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T18:13:39.320Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Команды и права (permissions)

На этой странице вы узнаете о командах и правах (permissions) плагина ExecutableItems.

Премиум-функции отмечены тегом: <CustomTag type="premium" />

## Права (permissions)

**СОВЕТ для новичков:**

:::info
Чтобы выдать права на все предметы, рекомендую скачать плагин для управления правами, например [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Когда у вас будет такой плагин, достаточно выдать право **`ei.item.*`**. Для Luckperms команда: **`/lp group default permission set ei.item.* true`**
:::

#### Право на предмет

* Информация: право, позволяющее игроку использовать ExecutableItems.
  * Право на использование конкретного ID ExecutableItem: `ei.item.{id}`
  * Право на использование всех ExecutableItems: `ei.item.*` 
  * Отрицательное право, запрещающее конкретный ID ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Пример: `ei.item.test`

#### Право на обход кулдауна

* Информация: право, позволяющее игроку не иметь кулдауна при использовании ExecutableItems. 
  * При тестировании проверяйте без прав op/оператора/администратора.
  * Право на обход для конкретного ID ExecutableItems: `ei.nocd.{id}`
  * Право на обход для всех ExecutableItems: `ei.nocd.*`
* Пример: `ei.nocd.test`

#### Все права

* Информация: право, дающее все права ExecutableItems.
  * Будьте осторожны! Оно дает буквально все права, включая администраторские.
  * Право: `ei.*`
* Если вы хотите выдать конкретное право, читайте дальше: там подробно описана каждая команда и соответствующее ей право.

#### Права на все команды

* Информация: право, дающее права на все команды ExecutableItems.
  * Право: `ei.cmds`
* Если вы хотите выдать конкретное право, читайте дальше: там подробно описана каждая команда и соответствующее ей право.

## Команды

Здесь вы узнаете о командах ExecutableItems. В объяснениях будут повторяться некоторые слова, вот они:

* SsomarPluginsItem: ID созданного ExecutableItem, например "Excalibur", "SuperPickaxe", "turtle", "12345". Это название мы задали сами.
* SsomarPluginsPlayer: имя игрока, например "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame". Это тоже такое имя.

В формате команд используются разные символы:

* \{\} : если аргумент заключен в \{\}, он обязателен для выполнения команды.
* \[] : если аргумент заключен в \[], он необязателен для выполнения команды.

Также используются разные цвета (идея та же, что у \{\} и \[] ):

* Синий: обязательный
* Оранжевый: необязательный

### Общие команды

#### Создать новый ExecutableItem

* Команда: **/ei create \{id\}**
  * `id`: ID ExecutableItem.
  * Если вы хотите **скопировать предмет из другого плагина** или кастомный ванильный предмет (баннер, щит и т. д.), это просто! Возьмите его в основную руку и выполните эту команду create.
* Пример: `/ei create SsomarPluginsItem`
* Право: `ei.cmd.create`

#### Создать новый ExecutableItem из блока, на который вы смотрите

* Команда: /ei create-from\_block \{id\}
  * `id`: ID ExecutableItem.
* Пример: `/ei create-from_block SsomarPluginsItem`
* Право: `ei.cmd.create-from-block`

#### Открыть редактор / меню

* Команда: **/ei editor** или **/ei show**
* Право: `ei.cmd.editor` или `ei.cmd.show`
* В списке значок каждого предмета показывает предпросмотр его отображаемого названия, описания (lore), зачарований и атрибутов. Это можно отключить с помощью [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) в конфиге SCore.

#### Перезагрузить плагин

* Команда: **/ei reload**
* Право: `ei.cmd.reload`

**Перезагрузить только 1 предмет**

* Команда: **/ei reload \{id\}**
  * `id` : ID ExecutableItem.
* Пример: `/ei reload SsomarPluginsItem`
* Право: `ei.cmd.reload`

**Перезагрузить папку**

* Команда: **/ei reload folder\:Name\_Of\_My\_Folder**
* Право: `ei.cmd.reload`

#### Заново создать конфиги предметов по умолчанию

* Команда: **/ei default\_items**
* Право: `ei.cmd.default_items`

#### Удалить ExecutableItem

* Команда: **/ei delete \{id\}**
  * `id`: ID ExecutableItem.
* Пример: `/ei delete SsomarPluginsItem`
* Право: `ei.cmd.create`

#### Редактировать ExecutableItem с помощью команды

* Команда: **/ei edit \{id\}**
  * `id` : ID ExecutableItem.
* Пример: `/ei edit SsomarPluginsItem`
* Право: `ei.cmd.edit`

#### Сбросить все кулдауны и отложенные команды ExecutableItems

* Команда: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Вы можете использовать имена игроков, чтобы выбрать игрока
    * Вы можете использовать UUID, чтобы выбрать сущность.
  * `optional_target`
    * ALL: сбрасывает отложенные команды, кулдауны и actionbar игрока.
    * DELAYED\_COMMANDS: сбрасывает все отложенные команды, вызванные DELAY и DELAYTICK.
    * COOLDOWNS: сбрасывает все кулдауны игрока для всех предметов.
    * ACTIONBARS - сбрасывает все actionbar игрока, созданные кастомной командой ACTIONBAR.
* Пример: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Право: `ei.cmd.clear`

#### Включить / отключить actionbar ExecutableItems

* Команда: **/ei actionbar \{on or off\}**
* **Пример:** `/ei actionbar off`
* Право: `ei.cmd.actionbar`

#### Осмотреть ExecutableItem, находящийся в вашей основной руке

* Команда: **/ei inspect**
  * Чтобы использовать эту команду, у ExecutableItem должна быть включена функция хранения информации о предмете. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Вывод:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Право: `ei.cmd.inspect`

#### Удалить владельца EI, который находится в вашей руке

* Команда: **/ei unowned**
  * Чтобы убрать владельца у предмета, у него сначала должен быть владелец. Для этого на данном ExecutableItem должна быть включена функция [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * После выполнения этой команды следующий игрок, который взаимодействует с этим предметом, станет новым владельцем. (Он не должен быть оператором/op/администратором)
* Право: `ei.cmd.unowned`

#### Забрать EI из инвентаря игрока

* Команда: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: имя игрока, у которого нужно забрать предмет
  * `id`: ID ExecutableItems
  * `quantity`: целое число, количество для удаления
* Пример: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Право: `ei.cmd.take`

#### Обновить ExecutableItem(s) ваших игроков до последней версии конфига

* Информация: эта команда обновляет ExecutableItemID(s) до последней версии в их конфиге. Это значит, что если у игрока есть ExecutableItem старой версии, например с атрибутом GENERIC\_ARMOR, равным 10, и вы затем измените значение атрибута в конфиге ExecutableItem, у игрока оно не обновится. Чтобы обновление прошло, вы можете использовать эту команду: предмет будет обновлен, и вместо 10 у игрока окажется новое значение.
  * Чтобы обновление сработало, выбранные ExecutableItem(s) должны находиться в инвентаре игрока, иначе они не будут обновлены
  * Совет: другой способ выполнить это обновление, использовать [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Команда: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: имя конкретного игрока или "all", чтобы выбрать всех игроков онлайн.
  * `ExecutableItemID`: имя конкретного ExecutableItem или "all", чтобы выбрать все созданные ExecutableItems.
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
      * ALL_OPTIONS (выполняет все перечисленные выше действия)
* Право: `ei.cmd.refresh`

#### **Изменить владельца ExecutableItem, который находится в вашей руке**

* Команда: **/ei set\_owner** **\{player\}**
  * `player`: имя игрока, которого нужно указать целью этой команды
    * Работает с игроками офлайн.
* Право: `ei.cmd.set_owner`

#### Включить режим отладки

* Информация: режим, в котором каждый активатор выводит пользователю различные сообщения, чтобы понять состояние активатора и почему он не работает или как именно он активируется.
* Команда: **/ei debug**
* Право: `ei.cmd.debug`

#### Показать наборы и то, что носит игрок <CustomTag type="premium" />

* Информация: показывает список загруженных [sets](/executableitems/configurations/sets-configuration) (`plugins/ExecutableItems/sets`). Если указан игрок: надетые части и активный уровень для каждого набора.
* Команда: **/ei sets** **[player]**
* Право: `ei.cmd.sets`

#### Вызвать один активатор (для проверки предмета)

* Информация: запускает один активатор ExecutableItem, который есть у игрока, без выполнения жеста (клик, удар, прыжок...). Удобно для проверки конфига. Все остальное работает как обычно: указанные слоты, условия, кулдауны, usage и команды. Предмет ищется в указанном слоте, затем в основной руке, во второй руке, в броне, а потом во всем инвентаре.
* Команда: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: сущность или игрок для активаторов, у которых есть цель (удар, клик по сущности...). По умолчанию тот, на кого смотрит игрок.
  * `block`: блок для активаторов, у которых есть целевой блок. По умолчанию блок, на который смотрит игрок.
  * `click`: для активаторов с уточненным кликом. По умолчанию `right` (`left` для `PLAYER_LEFT_CLICK`).
  * `input`: обязателен для `PLAYER_INPUT`.
* Совет: если ничего не происходит, выполните **/ei debug**, чтобы увидеть, какая проверка останавливает активатор.
* Право: `ei.cmd.trigger`

#### Сделать так, чтобы все ExecutableItems сохраняли атрибуты по умолчанию своего материала

* Информация: включает [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) у **каждого** загруженного ExecutableItem (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) и сохраняет их файлы. В версии 1.21+ ExecutableItems после каждой загрузки выводит в консоль список предметов, которые без этого теряют урон / броню своего материала. С `false` каждый предмет получает `keepDefaultAttributes: false`.
* Команда: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Пример: `/ei util-set-keepdefaultattributes-all-ei true`
* Право: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Команды выдачи

#### Команда give

* Информация: команда, которая выдает игроку ExecutableItem в первый доступный слот.
* Команда: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: имя игрока, который будет целью этой команды
  * `id`: ID ExecutableItem для выдачи.
    * Необязательные значения: чтобы добавить эту пользовательскую настройку, в формате не должно быть пробелов. 
      * `Variables`: вы можете выбрать набор переменных при выдаче предмета.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Без пробелов
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # С пробелами
      * `Usage:` вы можете выбрать значение usage при выдаче предмета
        * ✅`{Usage:5}` # Без пробелов
        * ❌`{Usage : 5}` # С пробелами
      * `Durability`: вы можете указать, сколько прочности потеряет предмет при выдаче пользователю
        * ✅`{Durability:5}` # Без пробелов
        * ❌`{Durability : 5}` # С пробелами
  * `quantity`: количество предметов для выдачи
  * `giveOfflinePlayer`: булево значение, определяющее, будет ли предмет выдан игроку офлайн. По умолчанию значение true.
* Примеры: (во всех этих примерах команда выполняется внутри ExecutableItems, чтобы обрабатывались плейсхолдеры, такие как %player%,%var\_name% и %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Право: `ei.cmd.give`

#### Команда give all

* Команда: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID ExecutableItem для выдачи.
  * `quantity`: количество предметов для выдачи
  * `world`: необязательный аргумент мира, в котором выполняется команда. Из-за него игроки, которые не находятся в этом мире, не получат ExecutableItem.
  * `giveOfflinePlayer`: булево значение, определяющее, будет ли предмет выдан игроку офлайн. По умолчанию значение true.
* Право: `ei.cmd.giveall`

#### Выдать EI в конкретный слот игрока <CustomTag type="premium" />

* Команда: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: имя игрока, который будет целью этой команды
  * `id`: ID ExecutableItem для выдачи.
    * Необязательные значения: чтобы добавить эту пользовательскую настройку, в формате не должно быть пробелов. 
      * `Variables`: вы можете выбрать набор переменных при выдаче предмета.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Без пробелов
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # С пробелами
      * `Usage`: вы можете выбрать значение usage при выдаче предмета
        * ✅\{Usage:5\} # Без пробелов
        * ❌\{Usage : 5\} # С пробелами
  * `quantity`: количество предметов для выдачи
  * `slot`: слот игрока, в который будет выдан этот предмет.
  * `override`: булево значение, позволяющее заменить предмет в слоте, если он уже занят. В этом случае предмет будет перемещен, а если инвентарь игрока заполнен, он будет выброшен на землю.
* Примеры: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Право: `ei.cmd.giveslot`

**Выдать игроку все EI из конкретной папки**

* Информация: команда, которая выдает игроку папку плагина.
* Команда: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: имя игрока, который будет целью этой команды
* Право: `ei.cmd.givefolder`

### Команды выброса

#### Выбросить EI в конкретное место / позицию 

* Команда: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID ExecutableItem для выдачи.
  * `quantity`: количество предметов для выброса. По умолчанию 1.
  * location: вся локация необязательна, но если вы хотите ее добавить, нужно заполнить следующие аргументы:
    * `world`: мир, в котором будет выброшен предмет.
    * `x`: координата X, в которой будет выброшен предмет.
    * `y`: координата Y, в которой будет выброшен предмет.
    * `z`: координата Z, в которой будет выброшен предмет.
* Примеры:  (во всех этих примерах команда выполняется внутри ExecutableItems, чтобы обрабатывались плейсхолдеры, такие как %player%,%var\_name% и %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Право: `ei.cmd.drop`

### Команды изменения

#### Изменить значение usage у ExecutableItem

* Команда: 
  * В игре: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * В консоли: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Параметры:
    * `set or modification`
      * set: устанавливает новое \{value\) и заменяет старое
      * modification: удобно для добавления изменений, увеличивает или уменьшает исходное значение на \{value\}
    * `player`: имя игрока, который будет целью этой команды
    * `slot`: слот игрока, в который будет выдан этот предмет.
      * Подробнее о слотах здесь: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: значение, используемое для изменения.
* Право: `ei.cmd.modification`

#### Изменить значение переменной ExecutableItem

* Команда: 
  * В игре: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * В консоли: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Параметры:
    * `set or modification`
      * set: устанавливает новое \{value\} и заменяет старое
      * modification: удобно для добавления изменений, увеличивает или уменьшает исходное значение на \{value\}
    * `player`: имя игрока, который будет целью этой команды
    * `slot`: слот игрока, в который будет выдан этот предмет.
      * Подробнее о слотах здесь: [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: имя переменной, к которой вы хотите применить typeOfModication с выбранным значением.
    * `value`: значение, используемое для изменения.
* Право: `ei.cmd.modification`

#### Найти ExecutableItem на сервере

* Информация: показывает, где на вашем сервере находятся ExecutableItems с ID \{id\}.
* Команда: **/ei search \{id\} \{searchMode\}**
  * `id`: ID ExecutableItem, который вы ищете
  * `searchMode`: тип поиска
    * players: ищет ExecutableItem в инвентарях всех **онлайн** игроков.
    * containers: ищет ExecutableItem во всех **загруженных** контейнерах.
    * all: поиск обоими способами.
* Пример:
  * `/ei search EternalSword all`
* Право: `ei.cmd.search`

#### Получить путь к файлу ExecutableItem

* Информация: эта команда показывает абсолютный путь в файловой системе к конфигурационному файлу конкретного ExecutableItem. Полезна разработчикам и администраторам серверов, которым нужно найти и отредактировать файлы предметов напрямую.
* Команда: **/ei path \{id\}**
  * `id`: ID ExecutableItem, путь к которому вы хотите получить
* Пример:
  * `/ei path ExcaliburSword`
  * Вывод: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Право: `ei.cmd.path`

#### Проверить информацию об оптимизации событий

* Информация: эта команда показывает подробную информацию об оптимизации обработчиков событий ExecutableItems и статистику производительности. Она показывает, какие события прослушиваются, и дает информацию о предметах, использующих custom recognition (это может влиять на производительность). Вывод отправляется в консоль сервера.
* Команда: **/ei checkevents**
* Вывод включает:
  * Список оптимизированных событий и статус их слушателей
  * Количество ExecutableItems, использующих custom recognition
  * Предупреждения о влиянии на производительность
  * Рекомендации по повышению производительности
* Право: `ei.cmd.checkevents`

:::info
Вывод этой команды отправляется в **консоль**, а не игроку в игре. Подробную информацию смотрите в консоли вашего сервера.
:::

:::tip
Предметы с custom recognition могут влиять на производительность. Команда покажет, сколько предметов используют эту функцию. Если у вас есть проблемы с производительностью, подумайте о том, чтобы сократить количество предметов с включенным custom recognition.
:::

### Команды текстурпака

#### Обновить текстурпак ExecutableItems

* Команда: **/ei refresh-pack**
* Информация: обновляет и перезагружает текстурпак ExecutableItems для всех игроков онлайн. Полезно после изменений кастомных текстур.
* Право: `ei.cmd.refresh-pack`

#### Скачать текстурпак ExecutableItems по умолчанию

* Команда: **/ei download-default-pack**
* Информация: скачивает текстурпак ExecutableItems по умолчанию из официального репозитория и автоматически распаковывает его. Если `selfHostPack` включен в config.yml, пак будет автоматически зарегистрирован и размещен на вашем сервере. Это полезно для:
  * Первой настройки текстурпака
  * Восстановления пака по умолчанию после изменений
  * Обновления до последней версии пака по умолчанию
* Требования:
  * `selfHostPack: true` должен быть задан в config.yml для автоматического размещения
  * У сервера должно быть подключение к интернету, чтобы скачать пак
* Право: `ei.cmd.download-default-pack`

:::info
**Варианты размещения:**
- **Размещение на вашем сервере**: задайте `selfHostPack: true` в config.yml, и пак будет размещен непосредственно плагином
- **Внешнее размещение**: если вы хотите разместить пак самостоятельно (на сайте, в CDN и т. д.), укажите URL для скачивания в `texturesPackUrl` в config.yml
- **Без размещения**: если ни один из вариантов не включен, пак будет скачан и распакован локально, но не будет передан игрокам
:::

### Custom triggers

* Информация: в ExecutableItems есть команды для запуска Custom Triggers. Если вы хотите узнать, что это такое и как ими пользоваться, смотрите информацию здесь: [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Вы можете использовать флаги WorldGuard, чтобы включать/отключать все активаторы EI
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* Сообщение об ошибке можно настроить, например, в /ExecutableItems/locale/locale_EN.yml
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
