---
description: >-
  Список команд и прав (permissions) плагина ExecutableBlocks: создание, выдача,
  установка и перезагрузка блоков EB, лимиты и обход кулдауна.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T18:12:42.816Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Команды и права

## Права (permissions)

**СОВЕТ для новичков:**

:::info
Чтобы выдать права на все предметы, советую вам скачать плагин для управления правами, например [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/). Когда такой плагин установлен, достаточно выдать право **`eb.block.*`**, для LuckPerms команда такая: **`/lp group default permission set eb.block.* true`**
:::

#### Право на блок

* Право: `eb.block.{id}`
* Отрицательное право: `-eb.block.{id}` 
* Пример: `eb.block.Test`
* Право на все предметы: `eb.block.*` 

#### Выдать все права EB

* Право: `eb.*`

#### Выдать права на все команды EB

* Право: `eb.cmds`

#### Право на обход кулдауна

* Право: `eb.nocd.{id}` `eb.nocd.*`
* Описание: выдайте это кастомное право, чтобы отключить кулдаун для ваших VIP-игроков
* (Обязательно проверяйте, не будучи оператором)

**Лимит EB**

* Право: `eb.limit.{amount}`
* Описание: задаёт максимальное количество EB, которое игрок может поставить.

#### Ограничить конкретный EB

* Право: `eb.block.ID.limit.{amount}`
* Описание: ограничивает количество блоков с конкретным EB ID, которое игрок может поставить

## Команды

#### Создать новый ExecutableBlock

* Команда: **/eb create \{id\}**
* Совет: 
  * Если вы хотите **скопировать предмет/блок из другого плагина** или кастомный ванильный блок (Banner, Custom block, ...), вам нужно установить мой другой плагин, ExecutableItems, ввести **/ei create \{id\}**, а затем импортировать ваш ExecutableItem в ExecutableBlocks.
* Право: `eb.cmd.create`

####

#### Открыть GUI с установленными EB

* Команда: /eb show-placed filter/sort:

#### Открыть редактор / меню

* Команда: **/eb editor** или **/eb show**
* Право: `eb.cmd.editor` или `eb.cmd.show`

#### Открыть редактор для изменения конкретного EB

* Команда: **/eb edit \{BlockID\}**
* Право: `eb.cmd.edit`

#### Перезагрузить плагин

* Команда: **/eb reload**
* Право: `eb.cmd.reload`

#### Перезагрузить плагин (только 1 блок)

* Команда: **/eb reload \{block\_id\}**
* Право: `eb.cmd.reload`

**Перезагрузить папку**

* Команда: **/eb reload folder\:Name\_Of\_My\_Folder**
* Право: `eb.cmd.reload`

#### Удалить ExecutableBlock

* Команда: **/eb delete \{id\}**
* Право: `eb.cmd.create`

#### Перезагрузить блоки ExecutableBlock по умолчанию

* Команда: **/eb default\_blocks**
* Право: `eb.cmd.default_blocks`

#### Сбросить все кулдауны и отложенные команды EB

* Команда: **/eb clear** **\[playerName]**
* Право: `eb.cmd.clear`

:::info
Поддерживаются также сущности: просто используйте UUID сущности вместо имени игрока
:::

#### Включить / отключить actionbar у EB

* Команда: **/eb actionbar** **\{on or off\}**
* Право: `eb.cmd.actionbar`

#### Поставить EB в определённой позиции

* Команда: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Право: `eb.cmd.place`
* `[direction]`: (необязательно) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` или `DOWN` (любой регистр, с автодополнением по Tab). Поставленный блок поворачивается в эту сторону.
  * Имеет приоритет над [направленными функциями](/executableblocks/configurations/block-configuration/block-features#directional-features) блока (`blockFaceOnPlace` с `forceBlockFaceOnPlace: true`).
  * Работает с блоками, которые можно повернуть: направленные блоки (печи, наблюдатели, пчелиные гнёзда...), вращаемые блоки (таблички, головы, знамёна: не `UP` / `DOWN`) и блоки с осью (брёвна, колонны: `UP` / `DOWN` = вертикально). Направление, которое блок не принимает, игнорируется.
  * Только для ExecutableBlocks, созданных с помощью `BASIC_CREATION` или `IMPORT_FROM_EXECUTABLE_ITEMS`, на серверах 1.13+.
  * Без этого аргумента ничего не меняется: блок ставится как раньше.
* Пример: `/eb place my_furnace 100 64 -20 world EAST`

#### Удалить EB в определённой позиции

* Команда: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Право: `eb.cmd.remove`

#### Заполнить выделенную область блоками EB

* Требование: для этой команды нужен плагин [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Команда: **/eb we-place \{id\}**
* Право: `eb.cmd.we-place`

#### Заполнить регион WorldGuard блоками EB

* Требование: для этой команды нужен плагин WorldGuard
* Команда: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Право: `eb.cmd.wg-fill-region`

#### Удалить все EB в выделенной области блоков

* Требование: для этой команды нужен плагин [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Команда: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Право: `eb.cmd.we-remove`

#### Изменение переменной EB

* Команда: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Изменение количества использований EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Команды Give и Take

#### Команда Give

* (Работает для игроков, которых нет в сети)
* Команда: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Право: `eb.cmd.give`
* Примеры:
  * Примеры: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Команда Take

* Команда: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Право: `eb.cmd.take`

#### Команда GiveAll

* Команда: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Право: `eb.cmd.giveall`

#### Выдать EB игроку в определённый слот 

* Команда: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Примеры: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage по умолчанию: значение usage из конфига вашего EB_
  * _Override позволяет EB занять этот слот; если там уже был предмет, он переместится в другой слот или выпадет на землю._
* Право: `eb.cmd.giveslot`

**Выдать игроку все EB из определённой папки**

* Команда:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Команды Drop

#### Выбросить EB в определённой локации / позиции 

* Команда: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Количество по умолчанию: 1_
  * _Локация по умолчанию: локация игрока, выполнившего эту команду_
* Право: `eb.cmd.drop`

### Custom Trigger

Команды:

* /eb run-custom-trigger trigger:\{activatorId\} // Выполнит активатор(ы) для всех размещённых EB, у которых есть активатор с указанным ID.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Выполнит активатор(ы) только для EB, размещённого в указанной локации, и только если у него есть активатор с указанным ID.
