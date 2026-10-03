---
description: >-
  Полный список команд и прав (permission) плагина ExecutableBlocks: создание,
  выдача, удаление блоков и настройка кулдаунов.
source_hash: aaceb7cb9a44305e
translated_at: '2026-10-03T10:52:41.705Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Команды и права (permission)

## Права (permission)

**СОВЕТ для новичков:**

:::info
Чтобы выдать права (permission) на все предметы, советуем установить плагин для управления правами, например [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Как только у вас будет такой плагин, достаточно выдать право (permission) **`eb.block.*`**, для Luckperm команда выглядит так: **`/lp group default permission set eb.block.* true`**
:::

#### Право (permission) на блок

* Право (permission): `eb.block.{id}`
* Отрицательное право (permission): `-eb.block.{id}` 
* Пример: `eb.block.Test`
* Выдать право (permission) на все предметы: `eb.block.*` 

#### Выдать все права (permission) EB

* Право (permission): `eb.*`

#### Выдать все права (permission) на команды EB

* Право (permission): `eb.cmds`

#### Право (permission) на обход кулдауна

* Право (permission): `eb.nocd.{id}` `eb.nocd.*`
* Описание: Выдайте это кастомное право (permission), чтобы отключить кулдаун для ваших VIP игроков
* (Обязательно протестируйте без op)

**Лимит EB**

* Право (permission): `eb.limit.{amount}`
* Описание: Устанавливает максимальное количество EB, которое игрок может разместить.

#### Лимит на конкретный EB

* Право (permission): `eb.block.ID.limit.{amount}`
* Описание: Ограничивает количество конкретного ID EB, которое игрок может разместить

## Команды

#### Создать новый ExecutableBlock

* Команда: **/eb create \{id\}**
* Совет: 
  * Если вы хотите **скопировать предмет/блок другого плагина**, или кастомный ванильный блок (баннер, кастомный блок, ...), вам нужно установить мой другой плагин, ExecutableItems, ввести **/ei create \{id\}** и затем импортировать ваш ExecutableItem в ExecutableBlocks.
* Право (permission): `eb.cmd.create`

####

#### Открыть gui с размещёнными EB

* команда: /eb show-placed filter/sort:

#### Открыть редактор / меню

* Команда: **/eb editor** или **/eb show**
* Право (permission): `eb.cmd.editor` или `eb.cmd.show`

#### Открыть редактор для редактирования конкретного EB

* Команда: **/eb edit \{BlockID\}**
* Право (permission): `eb.cmd.edit`

#### Перезагрузить плагин

* Команда: **/eb reload**
* Право (permission): `eb.cmd.reload`

#### Перезагрузить плагин (только 1 блок)

* Команда: **/eb reload \{block\_id\}**
* Право (permission): `eb.cmd.reload`

**Перезагрузить папку**

* Команда: **/eb reload folder\:Name\_Of\_My\_Folder**
* Право (permission): `eb.cmd.reload`

#### Удалить ExecutableBlock

* Команда: **/eb delete \{id\}**
* Право (permission): `eb.cmd.create`

#### Перезагрузить блоки по умолчанию ExecutableBlock

* Команда: **/eb default\_blocks**
* Право (permission): `eb.cmd.default_blocks`

#### Очистить все кулдауны и отложенные команды EB

* Команда: **/eb clear** **\[playerName]**
* Право (permission): `eb.cmd.clear`

:::info
Это также поддерживает сущности, просто используйте UUID сущности вместо имени игрока
:::

#### Включить / выключить actionbar EB

* Команда: **/eb actionbar** **\{on or off\}**
* Право (permission): `eb.cmd.actionbar`

#### Разместить EB в конкретной позиции

* Команда: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}**
* Право (permission): `eb.cmd.place`

#### Удалить EB в конкретной позиции

* Команда: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Право (permission): `eb.cmd.remove`

#### Заполнить выделенный регион EB

* Требование: Для этой команды требуется плагин [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Команда: **/eb we-place \{id\}**
* Право (permission): `eb.cmd.we-place`

#### Заполнить регион WorldGuard EB

* Требование: Для этой команды требуется плагин WorldGuard
* Команда: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Право (permission): `eb.cmd.wg-fill-region`

#### Удалить все EB, присутствующие в выделении блоков

* Требование: Для этой команды требуется плагин [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Команда: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Право (permission): `eb.cmd.we-remove`

#### Изменение переменной EB

* Команда: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Изменение usage EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Команды выдачи и изъятия

#### Команда выдачи

* (Работает для офлайн игроков)
* Команда: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Право (permission): `eb.cmd.give`
* Примеры:
  * Примеры: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Команда изъятия

* Команда: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Право (permission): `eb.cmd.take`

#### Команда GiveAll

* Команда: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Право (permission): `eb.cmd.giveall`

#### Выдать EB в конкретный слот игрока 

* Команда: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Примеры: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage по умолчанию: тот usage, который указан в конфиге вашего EB_
  * _Override позволяет EB занять этот слот, и если там уже был предмет, он переместится в другой слот или будет выброшен на землю._
* Право (permission): `eb.cmd.giveslot`

**Выдать каждый EB из конкретной папки игроку**

* Команда:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Команды выброса

#### Выбросить EB в конкретном месте / позиции 

* Команда: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Количество по умолчанию: 1_
  * _Место по умолчанию: место игрока, который выполнил эту команду_
* Право (permission): `eb.cmd.drop`

### Custom Triggers

Команды:

* /eb run-custom-trigger trigger:\{activatorId\} // Это выполнит активатор(ы) для всех размещённых EB, у которых есть активатор с указанным ID.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Это выполнит активатор(ы) только для EB, размещённого в указанном месте, и только если у него есть активатор с указанным ID.
