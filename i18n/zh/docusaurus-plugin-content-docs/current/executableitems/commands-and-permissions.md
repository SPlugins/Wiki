---
description: >-
  了解 ExecutableItems 插件的全部命令与权限，包括物品权限、绕过冷却权限、give 与 drop 命令、修改命令、材质包命令以及
  WorldGuard 标志。
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T17:59:16.656Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ 命令与权限

在本页面中，你将了解 ExecutableItems 插件的命令和权限。

高级功能带有以下标签：<CustomTag type="premium" />

## 权限

**新手提示：**

:::info
若要授予所有物品的权限，建议你下载一个权限插件，例如 [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/)。安装权限插件后，你只需授予权限 **`ei.item.*`**，对于 Luckperms，命令是 **`/lp group default permission set ei.item.* true`**
:::

#### 物品权限

* 信息：允许玩家使用某个 ExecutableItems 物品的权限。
  * 使用指定 ExecutableItem ID 的权限：`ei.item.{id}`
  * 使用所有 ExecutableItems 的权限：`ei.item.*` 
  * 禁止使用指定 ExecutableItems ID 的负权限：`-ei.item.{id}` <CustomTag type="premium" />
* 示例：`ei.item.test`

#### 绕过冷却权限

* 信息：允许玩家在使用 ExecutableItems 物品时不受冷却限制的权限。 
  * 测试时，你必须在没有 op/operator/admin 身份的情况下进行测试。
  * 绕过指定 ExecutableItems ID 冷却的权限：`ei.nocd.{id}`
  * 绕过所有 ExecutableItems 冷却的权限：`ei.nocd.*`
* 示例：`ei.nocd.test`

#### 所有权限

* 信息：授予 ExecutableItems 所有权限的权限。
  * 请小心！这个权限会授予真正意义上的所有权限，包括管理员权限。
  * 权限：`ei.*`
* 如果你想授予某个特定权限，请继续阅读下文，其中会详细列出每个命令及其对应的权限。

#### 所有命令权限

* 信息：授予 ExecutableItems 所有命令权限的权限。
  * 权限：`ei.cmds`
* 如果你想授予某个特定权限，请继续阅读下文，其中会详细列出每个命令及其对应的权限。

## 命令

在这里你将了解 ExecutableItems 的命令。讲解中会反复出现一些词语，具体如下：

* SsomarPluginsItem：已创建的 ExecutableItem 的 ID，例如 "Excalibur"、"SuperPickaxe"、"turtle"、"12345"，这个名称由我们自己设定。
* SsomarPluginsPlayer：玩家的名称，例如 "Vayk\_"、"Ssomar"、"Special70"、"Tidal\_Flame"，同样也是一个名称。

命令格式中会使用不同的符号：

* \{\} ：如果参数被 \{\} 包围，表示运行该命令时必须提供。
* \[] ：如果参数被 \[] 包围，表示运行该命令时可选。

此外还会使用不同的颜色（但含义与 \{\} 和 \[] 相同）：

* 蓝色：必填
* 橙色：可选

### 通用命令

#### 创建新的 ExecutableItem

* 命令：**/ei create \{id\}**
  * `id`：ExecutableItem 的 ID。
  * 如果你想**复制其他插件的物品**，或者原版自定义物品（旗帜、盾牌等），很简单！把它拿在主手上，然后执行这个 create 命令即可。
* 示例：`/ei create SsomarPluginsItem`
* 权限：`ei.cmd.create`

#### 通过指向的方块创建新的 ExecutableItem

* 命令：/ei create-from\_block \{id\}
  * `id`：ExecutableItem 的 ID。
* 示例：`/ei create-from_block SsomarPluginsItem`
* 权限：`ei.cmd.create-from-block`

#### 打开编辑器 / 菜单

* 命令：**/ei editor** 或 **/ei show**
* 权限：`ei.cmd.editor` 或 `ei.cmd.show`
* 在列表中，每个物品的图标会预览其显示名称、Lore、附魔和属性。可以在 SCore 配置中使用 [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) 将其禁用。

#### 重载插件

* 命令：**/ei reload**
* 权限：`ei.cmd.reload`

**只重载 1 个物品**

* 命令：**/ei reload \{id\}**
  * `id`：ExecutableItem 的 ID。
* 示例：`/ei reload SsomarPluginsItem`
* 权限：`ei.cmd.reload`

**重载一个文件夹**

* 命令：**/ei reload folder\:Name\_Of\_My\_Folder**
* 权限：`ei.cmd.reload`

#### 重新生成默认物品配置

* 命令：**/ei default\_items**
* 权限：`ei.cmd.default_items`

#### 删除 ExecutableItem

* 命令：**/ei delete \{id\}**
  * `id`：ExecutableItem 的 ID。
* 示例：`/ei delete SsomarPluginsItem`
* 权限：`ei.cmd.create`

#### 通过命令编辑 ExecutableItem

* 命令：**/ei edit \{id\}**
  * `id`：ExecutableItem 的 ID。
* 示例：`/ei edit SsomarPluginsItem`
* 权限：`ei.cmd.edit`

#### 清除 ExecutableItems 的所有冷却和延迟命令

* 命令：**/ei clear \{target\} \[optionaltarget]**
  * `target`
    * 你可以使用玩家名称来指定玩家
    * 你可以使用 UUID 来指定实体。
  * `optional_target`
    * ALL：重置玩家的延迟命令、冷却和 actionbar。
    * DELAYED\_COMMANDS：重置由 DELAY 和 DELAYTICK 产生的所有延迟命令。
    * COOLDOWNS：重置玩家所有物品的全部冷却。
    * ACTIONBARS - 重置玩家由 ACTIONBAR 自定义命令产生的所有 actionbar。
* 示例：`/ei clear SsomarPluginsPlayer COOLDOWNS`
* 权限：`ei.cmd.clear`

#### 启用 / 禁用 ExecutableItems 的 actionbar

* 命令：**/ei actionbar \{on or off\}**
* **示例：** `/ei actionbar off`
* 权限：`ei.cmd.actionbar`

#### 检查你主手中的 ExecutableItem

* 命令：**/ei inspect**
  * 要使用此命令，该 ExecutableItem 必须启用存储物品信息的功能。[Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * 输出：
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* 权限：`ei.cmd.inspect`

#### 移除你手中 EI 的所有者

* 命令：**/ei unowned**
  * 要取消物品的所有者，该物品之前必须已有所有者，为此该 ExecutableItem 必须启用 [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) 功能
  * 运行此命令后，下一个与该物品交互的玩家将成为新的所有者。（该玩家不能是 operator/op/admin）
* 权限：`ei.cmd.unowned`

#### 从玩家背包中收走 EI

* 命令：**/ei take \{player\} \{id\} \{quantity\}**
  * `player`：要收走物品的玩家名称
  * `id`：ExecutableItems 的 ID
  * `quantity`：要移除的数量（整数）
* 示例：`/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* 权限：`ei.cmd.take`

#### 将玩家的 ExecutableItem 刷新为其最新配置版本

* 信息：此命令会将 ExecutableItemID 刷新为其配置中的最新版本。也就是说，如果玩家持有的是旧版本的 ExecutableItem，例如 GENERIC\_ARMOR 属性为 10，之后你在该 ExecutableItem 的配置中修改了该属性的值，玩家那边不会自动更新。要实现更新，你可以使用此命令进行刷新，这样他的物品将使用新的更新值，而不是 10。
  * 为了完成刷新过程，所选的 ExecutableItem 必须在玩家的背包中，否则不会被刷新
  * 提示：另一种刷新方式是使用 [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* 命令：**/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`：指定玩家的名称，或使用 "all" 指定所有在线玩家。
  * `ExecutableItemID`：指定 ExecutableItem 的名称，或使用 "all" 指定所有已创建的 ExecutableItems。
  * `option`：刷新参数
    * 选项：
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
      * ALL_OPTIONS（执行上述所有选项的工作）
* 权限：`ei.cmd.refresh`

#### **修改你手中 ExecutableItem 的所有者**

* 命令：**/ei set\_owner** **\{player\}**
  * `player`：作为此命令目标的玩家名称
    * 对离线玩家也有效。
* 权限：`ei.cmd.set_owner`

#### 启用调试模式

* 信息：在此模式下，每个激活器都会向用户输出不同的消息，让你了解激活器的状态，以及它为何无法工作或是如何被激活的。
* 命令：**/ei debug**
* 权限：`ei.cmd.debug`

#### 列出套装以及玩家穿戴的内容 <CustomTag type="premium" />

* 信息：列出已加载的[套装](/executableitems/configurations/sets-configuration)（`plugins/ExecutableItems/sets`）。指定玩家时：显示其穿戴的部件以及每个套装当前生效的等级。
* 命令：**/ei sets** **[player]**
* 权限：`ei.cmd.sets`

#### 触发某个激活器（用于测试物品）

* 信息：运行玩家携带的某个 ExecutableItem 的一个激活器，无需做出手势（点击、攻击、跳跃等）。适合用于测试配置。其他一切照常工作：指定的槽位、条件、冷却、使用次数和命令。物品会优先在给定的槽位中查找，否则依次在主手、副手、盔甲，然后是整个背包中查找。
* 命令：**/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`：带有目标的激活器（攻击、点击实体等）所使用的实体或玩家。默认是玩家正在看着的目标。
  * `block`：带有目标方块的激活器所使用的方块。默认是玩家正在看着的方块。
  * `click`：用于带有详细点击设置的激活器。默认为 `right`（对于 `PLAYER_LEFT_CLICK` 为 `left`）。
  * `input`：`PLAYER_INPUT` 必须提供。
* 提示：如果没有任何反应，请运行 **/ei debug** 查看是哪项检查阻止了该激活器。
* 权限：`ei.cmd.trigger`

#### 让所有 ExecutableItems 保留其材质的默认属性

* 信息：为**每一个**已加载的 ExecutableItem（`keepDefaultAttributes: true`、`ignoreKeepDefaultAttributesFeature: false`）设置 [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) 并保存其文件。在 1.21+ 版本中，每次加载后，ExecutableItems 会在控制台中列出那些没有此设置就会失去其材质伤害 / 护甲的物品。使用 `false` 时，每个物品都会获得 `keepDefaultAttributes: false`。
* 命令：**/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* 示例：`/ei util-set-keepdefaultattributes-all-ei true`
* 权限：`ei.cmd.util-set-keepdefaultattributes-all-ei`

### Give 命令

#### Give 命令

* 信息：将一个 ExecutableItem 给予玩家，放入第一个可用的槽位。
* 命令：**/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`：作为此命令目标的玩家名称
  * `id`：要给予的 ExecutableItem 的 ID。
    * 可选值：要添加此自定义设置，格式中不能有空格。 
      * `Variables`：你可以在给予物品时选择一组变量设置。
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # 不使用空格
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # 使用了空格
      * `Usage:` 你可以在给予物品时选择使用次数的值
        * ✅`{Usage:5}` # 不使用空格
        * ❌`{Usage : 5}` # 使用了空格
      * `Durability`：你可以决定在把物品给予用户时，物品损失多少耐久度
        * ✅`{Durability:5}` # 不使用空格
        * ❌`{Durability : 5}` # 使用了空格
  * `quantity`：要给予的物品数量
  * `giveOfflinePlayer`：布尔值，用于设置是否将物品给予离线玩家。默认值为 true。
* 示例：（在所有这些示例中，命令都是在 ExecutableItems 物品内部运行的，以便解析 %player%、%var\_name% 和 %usage% 等占位符）
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* 权限：`ei.cmd.give`

#### Give All 命令

* 命令：**/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`：要给予的 ExecutableItem 的 ID。
  * `quantity`：要给予的物品数量
  * `world`：可选参数，指定运行该命令的世界。这样不在该世界的玩家将不会获得该 ExecutableItem。
  * `giveOfflinePlayer`：布尔值，用于设置是否将物品给予离线玩家。默认值为 true。
* 权限：`ei.cmd.giveall`

#### 将 EI 给予玩家的指定槽位 <CustomTag type="premium" />

* 命令：**/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`：作为此命令目标的玩家名称
  * `id`：要给予的 ExecutableItem 的 ID。
    * 可选值：要添加此自定义设置，格式中不能有空格。 
      * `Variables`：你可以在给予物品时选择一组变量设置。
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # 不使用空格
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # 使用了空格
      * `Usage`：你可以在给予物品时选择使用次数的值
        * ✅\{Usage:5\} # 不使用空格
        * ❌\{Usage : 5\} # 使用了空格
  * `quantity`：要给予的物品数量
  * `slot`：物品将被给予的玩家槽位。
  * `override`：布尔值，用于在该槽位已有物品时是否覆盖该槽位。如果覆盖，原有物品会被移动；如果玩家背包已满，则会掉落到地面上。
* 示例： 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* 权限：`ei.cmd.giveslot`

**将指定文件夹中的所有 EI 给予玩家**

* 信息：将插件的一个文件夹中的物品给予玩家的命令。
* 命令：**/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`：作为此命令目标的玩家名称
* 权限：`ei.cmd.givefolder`

### Drop 命令

#### 在指定位置 / 坐标掉落 EI 

* 命令：**/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`：要给予的 ExecutableItem 的 ID。
  * `quantity`：要掉落的物品数量。默认为 1。
  * location：整个位置都是可选的，如果你想添加，则需要填写以下参数：
    * `world`：物品掉落的世界。
    * `x`：物品掉落位置的 X 坐标。
    * `y`：物品掉落位置的 Y 坐标。
    * `z`：物品掉落位置的 Z 坐标。
* 示例：（在所有这些示例中，命令都是在 ExecutableItems 物品内部运行的，以便解析 %player%、%var\_name% 和 %usage% 等占位符）
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* 权限：`ei.cmd.drop`

### 修改命令

#### 修改 ExecutableItem 的使用次数值

* 命令： 
  * 游戏内：**/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * 控制台：**/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * 参数：
    * `set or modification`
      * set：设置新的 \{value\} 并替换旧值
      * modification：用于添加修改，按 \{value\} 增加或减少原来的值
    * `player`：作为此命令目标的玩家名称
    * `slot`：物品将被给予的玩家槽位。
      * 关于槽位的更多信息请见 [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`：用于修改的值。
* 权限：`ei.cmd.modification`

#### 修改 ExecutableItem 的变量值

* 命令： 
  * 游戏内：**/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * 控制台：**/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * 参数：
    * `set or modification`
      * set：设置新的 \{value\} 并替换旧值
      * modification：用于添加修改，按 \{value\} 增加或减少原来的值
    * `player`：作为此命令目标的玩家名称
    * `slot`：物品将被给予的玩家槽位。
      * 关于槽位的更多信息请见 [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`：你想要用所选值应用 typeOfModication 的变量名称。
    * `value`：用于修改的值。
* 权限：`ei.cmd.modification`

#### 在服务器中搜索 ExecutableItem

* 信息：它会告诉你 ID 为 \{id\} 的 ExecutableItems 在你的服务器上的位置。
* 命令：**/ei search \{id\} \{searchMode\}**
  * `id`：你要搜索的 ExecutableItem 的 ID
  * `searchMode`：搜索类型
    * players：在所有**在线**玩家的背包中搜索该 ExecutableItem。
    * containers：在所有**已加载**的容器中搜索该 ExecutableItem。
    * all：同时使用这两种方式搜索。
* 示例：
  * `/ei search EternalSword all`
* 权限：`ei.cmd.search`

#### 获取 ExecutableItem 的文件路径

* 信息：此命令会显示特定 ExecutableItem 的配置文件在文件系统中的绝对路径。适合需要直接定位并编辑物品文件的开发者或服务器管理员。
* 命令：**/ei path \{id\}**
  * `id`：你想要获取路径的 ExecutableItem 的 ID
* 示例：
  * `/ei path ExcaliburSword`
  * 输出：`[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* 权限：`ei.cmd.path`

#### 检查事件优化信息

* 信息：此命令会显示 ExecutableItems 事件处理器优化和性能统计的详细信息。它会显示正在监听哪些事件，并提供有关使用自定义识别的物品的信息（这可能影响性能）。输出会发送到服务器控制台。
* 命令：**/ei checkevents**
* 输出包括：
  * 已优化的事件及其监听器状态列表
  * 使用自定义识别的 ExecutableItems 数量
  * 性能影响警告
  * 提升性能的建议
* 权限：`ei.cmd.checkevents`

:::info
此命令的输出会发送到**控制台**，而不是游戏内的玩家。请查看你的服务器控制台以获取详细信息。
:::

:::tip
使用自定义识别的物品可能会影响性能。该命令会告诉你有多少物品正在使用此功能。如果你遇到性能问题，请考虑减少启用自定义识别的物品数量。
:::

### 材质包命令

#### 刷新 ExecutableItems 材质包

* 命令：**/ei refresh-pack**
* 信息：为所有在线玩家刷新并重新加载 ExecutableItems 材质包。在修改自定义材质后很有用。
* 权限：`ei.cmd.refresh-pack`

#### 下载默认 ExecutableItems 材质包

* 命令：**/ei download-default-pack**
* 信息：从官方仓库下载默认的 ExecutableItems 材质包并自动解压。如果在 config.yml 中启用了 `selfHostPack`，该包将被自动注册并托管在你的服务器上。适用于以下情况：
  * 首次设置材质包
  * 在修改之后恢复默认包
  * 更新到最新的默认包版本
* 要求：
  * 必须在 config.yml 中设置 `selfHostPack: true` 才能自动托管
  * 服务器必须能连接互联网以下载该包
* 权限：`ei.cmd.download-default-pack`

:::info
**托管选项：**
- **在你的服务器上自行托管**：在 config.yml 中设置 `selfHostPack: true`，该包将由插件直接托管
- **外部托管**：如果你想自行托管该包（在网站、CDN 等上），请在 config.yml 的 `texturesPackUrl` 中设置下载 URL
- **不托管**：如果两个选项都未启用，该包将在本地下载并解压，但不会分发给玩家
:::

### Custom triggers

* 信息：ExecutableItems 提供用于运行 Custom triggers 的命令，如果想了解它们是什么以及如何使用，请查看此处的信息 [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* 你可以使用 WorldGuard 标志来启用/禁用所有 EI 激活器
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* 错误消息可以在 /ExecutableItems/locale/locale_EN.yml 中配置，例如
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
