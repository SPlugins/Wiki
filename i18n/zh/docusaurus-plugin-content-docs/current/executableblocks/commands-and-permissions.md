---
description: >-
  本页介绍 ExecutableBlocks 插件的全部命令与权限：创建、编辑、重载、放置、移除、给予、掉落 EB，WorldEdit 与
  WorldGuard 区域命令、冷却绕过权限、放置数量限制，以及如何用 LuckPerms 一次授予所有权限，并附使用示例。
source_hash: 653dceef09a76278
translated_at: '2026-11-13T17:58:29.995Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ 命令与权限

## 权限

**新手提示：**

:::info
要授予所有物品的权限，建议你下载一个权限插件，例如 [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/)。有了权限插件后，只需授予权限 **`eb.block.*`** 即可，对于 LuckPerms，命令是 **`/lp group default permission set eb.block.* true`**
:::

#### 方块权限

* 权限：`eb.block.{id}`
* 反向权限：`-eb.block.{id}` 
* 示例：`eb.block.Test`
* 授予所有物品的权限：`eb.block.*` 

#### 授予 EB 的所有权限

* 权限：`eb.*`

#### 授予 EB 的所有命令权限

* 权限：`eb.cmds`

#### 绕过冷却的权限

* 权限：`eb.nocd.{id}` `eb.nocd.*`
* 说明：将此自定义权限授予你的 VIP 玩家，即可为其禁用冷却
* （请务必在没有 OP 权限的情况下测试）

**EB 的数量限制**

* 权限：`eb.limit.{amount}`
* 说明：设置玩家可以放置 EB 的最大数量。

#### 限制特定的 EB

* 权限：`eb.block.ID.limit.{amount}`
* 说明：限制玩家可以放置的特定 EB ID 的数量

## 命令

#### 创建新的 ExecutableBlock

* 命令：**/eb create \{id\}**
* 提示： 
  * 如果你想**复制其他插件的物品/方块**，或自定义原版方块（旗帜、自定义方块等），需要安装我的另一个插件 ExecutableItems，输入 **/ei create \{id\}**，然后在 ExecutableBlocks 中导入你的 ExecutableItem。
* 权限：`eb.cmd.create`

####

#### 打开显示已放置 EB 的 GUI

* 命令：/eb show-placed filter/sort:

#### 打开编辑器 / 菜单

* 命令：**/eb editor** 或 **/eb show**
* 权限：`eb.cmd.editor` 或 `eb.cmd.show`

#### 打开编辑器以编辑特定的 EB

* 命令：**/eb edit \{BlockID\}**
* 权限：`eb.cmd.edit`

#### 重载插件

* 命令：**/eb reload**
* 权限：`eb.cmd.reload`

#### 重载插件（仅 1 个方块）

* 命令：**/eb reload \{block\_id\}**
* 权限：`eb.cmd.reload`

**重载文件夹**

* 命令：**/eb reload folder\:Name\_Of\_My\_Folder**
* 权限：`eb.cmd.reload`

#### 删除 ExecutableBlock

* 命令：**/eb delete \{id\}**
* 权限：`eb.cmd.create`

#### 重载 ExecutableBlock 的默认方块

* 命令：**/eb default\_blocks**
* 权限：`eb.cmd.default_blocks`

#### 清除 EB 的所有冷却和延迟命令

* 命令：**/eb clear** **\[playerName]**
* 权限：`eb.cmd.clear`

:::info
它也支持实体，只需使用实体 UUID 代替玩家名称即可
:::

#### 启用 / 禁用 EB 的 actionbar

* 命令：**/eb actionbar** **\{on or off\}**
* 权限：`eb.cmd.actionbar`

#### 在特定位置放置 EB

* 命令：**/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* 权限：`eb.cmd.place`
* `[direction]`：（可选）`NORTH`、`SOUTH`、`EAST`、`WEST`、`UP` 或 `DOWN`（不区分大小写，支持 Tab 补全）。放置的方块会朝向该方向。
  * 它优先于方块的[方向功能](/executableblocks/configurations/block-configuration/block-features#directional-features)（`blockFaceOnPlace` 配合 `forceBlockFaceOnPlace: true`）。
  * 它适用于可以转向的方块：有朝向的方块（熔炉、侦测器、蜂巢等）、可旋转的方块（告示牌、头颅、旗帜：不包括 `UP` / `DOWN`）以及带轴的方块（原木、柱子：`UP` / `DOWN` = 垂直）。方块不接受的方向会被忽略。
  * 仅适用于使用 `BASIC_CREATION` 或 `IMPORT_FROM_EXECUTABLE_ITEMS` 创建的 ExecutableBlocks，且服务器版本为 1.13 及以上。
  * 不带该参数时，不会有任何变化：方块与之前一样放置。
* 示例：`/eb place my_furnace 100 64 -20 world EAST`

#### 移除特定位置的 EB

* 命令：**/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* 权限：`eb.cmd.remove`

#### 用 EB 填充选区

* 要求：此命令需要安装插件 [**WorldEdit**](https://dev.bukkit.org/projects/worldedit)
* 命令：**/eb we-place \{id\}**
* 权限：`eb.cmd.we-place`

#### 用 EB 填充 WorldGuard 区域

* 要求：此命令需要安装插件 WorldGuard
* 命令：**/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* 权限：`eb.cmd.wg-fill-region`

#### 移除方块选区内的所有 EB

* 要求：此命令需要安装插件 [**WorldEdit**](https://dev.bukkit.org/projects/worldedit)
* 命令：**/eb we-remove \{replaceTheEBByAir true or false\}**
* 权限：`eb.cmd.we-remove`

#### EB 变量修改

* 命令：/eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### EB 使用次数修改

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### 给予与拿取命令

#### 给予命令

* （适用于离线玩家）
* 命令： 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* 权限：`eb.cmd.give`
* 示例：
  * 示例： 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### 拿取命令

* 命令： 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* 权限：`eb.cmd.take`

#### GiveAll 命令

* 命令： 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* 权限：`eb.cmd.giveall`

#### 将 EB 给予玩家的特定槽位 

* 命令： 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * 示例： 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _默认使用次数：EB 配置中设置的使用次数_
  * _Override 允许 EB 占用该槽位，如果该槽位原有物品，该物品将被移动到其他槽位或掉落到地面。_
* 权限：`eb.cmd.giveslot`

**将特定文件夹中的所有 EB 给予玩家**

* 命令：
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### 掉落命令

#### 在特定位置掉落 EB 

* 命令： 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _默认数量：1_
  * _默认位置：执行此命令的玩家所在位置_
* 权限：`eb.cmd.drop`

### Custom trigger

命令：

* /eb run-custom-trigger trigger:\{activatorId\} // 将为所有已放置且拥有指定 ID 激活器的 EB 执行该激活器。
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // 仅对位于指定位置、且拥有指定 ID 激活器的已放置 EB 执行该激活器。
