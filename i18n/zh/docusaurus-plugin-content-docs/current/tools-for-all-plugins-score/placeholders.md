---
title: SCore 占位符列表
description: >-
  SCore 占位符完整列表，适用于 ExecutableItems、ExecutableBlocks 和
  ExecutableEvents，涵盖玩家、物品、方块、实体、数学运算、变量、冷却时间以及 PlaceholderAPI 语法，并附带示例与用法说明。
source_hash: ecc26db0e2403378
translated_at: '2026-11-13T18:08:22.753Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 📚 SCore 占位符列表

SCore 占位符是一个 `%tag%`，会在命令、条件、Lore 行或消息运行时被替换为实时值（玩家数据、物品数据、方块数据、数学运算、随机数）。它们可以在 ExecutableItems、ExecutableBlocks 和 ExecutableEvents 的任何部分使用：命令、条件、Lore、消息以及 SCore 变量。SCore 也会在相同位置解析所有 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 占位符，因此 `%player_name%` 风格的 PAPI 标签和 SCore 自带的 `%player%` 风格标签可以在同一行中混用。

## 目录

- [玩家占位符](#player-placeholders)
- [目标 / 实体占位符](#target--entity-placeholders)
- [物品占位符](#item-placeholders)
- [方块占位符](#block-placeholders)
- [投射物占位符](#projectile-placeholders)
- [变量占位符](#variables-placeholders)
- [冷却占位符](#cooldown-placeholders)
- [数学占位符](#math-placeholders)
- [实用与文本占位符](#utility--text-placeholders)
- [插件专属计数占位符](#plugin-specific-count-placeholders)
- [事件专属占位符](#event-specific-placeholders)
- [在 SCore 中使用 PlaceholderAPI 占位符](#using-placeholderapi-placeholders-in-score)
- [问题？](#question-)

:::tip 数值运算
所有数值型占位符都支持算术运算：
- **递增：** `%amount%+6`（如果 %amount% = 15，结果 = 21）
- **递减：** `%amount%-8`（如果 %amount% = 14，结果 = 6）
:::

## 玩家占位符

玩家占位符可在涉及玩家的激活器中使用。当玩家在激活器中是次要对象时，请将 `player` 替换为 `target`（例如 `%target_health%`）。在 ExecutableItems 和 ExecutableBlocks 中，物品/方块可以拥有 **Owner**：将 `player` 替换为 `owner` 即可获取所有者的占位符（例如 `%owner_uuid%`）。

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%player%` | 玩家名称 | `SEND_MESSAGE &aWelcome %player%!` |
| `%player_uuid%` | 玩家的 UUID | `SEND_MESSAGE &7Your UUID is %player_uuid%` |
| `%player_uuid_array%` | 玩家的 UUID，格式为 `[I;-1288600659,-373273272,-1897203511,898446696]` | 内部使用，用于在基于 NBT 的命令中存储 UUID |
| `%player_world%` | 世界名称（小写使用 `%player_world_lower%`） | `execute in <<%player_world%>> run summon zombie 100 50 100` |
| `%player_x%`, `%player_y%`, `%player_z%` | 坐标（添加 `_int` 获取整数） | `execute at %player% run setblock %player_x_int% %player_y_int% %player_z_int% air` |
| `%player_pitch%`, `%player_pitch_positive%` | 玩家的俯仰角（整数使用 `_int`） | `SEND_MESSAGE &7Pitch: %player_pitch_int%` |
| `%player_yaw%`, `%player_yaw_positive%` | 玩家的偏航角（整数使用 `_int`） | `SEND_MESSAGE &7Yaw: %player_yaw_int%` |
| `%player_direction%` | 基本方位（N、SW、NE 等） | 条件：`part1: '%player_direction%'`、`comparator: EQUALS`、`part2: 'SW'` |
| `%player_health%` | 当前生命值 | `SEND_MESSAGE &cHealth: %player_health%` |
| `%player_max_health%` | 最大生命值 | `SEND_MESSAGE &cHealth: %player_health%/%player_max_health%` |
| `%player_slot%` | 触发激活器的槽位 | `SEND_MESSAGE &7Used from slot %player_slot%` |
| `%player_slot_live%` | 当前手持的槽位 | `SEND_MESSAGE &7Holding slot %player_slot_live%` |
| `%player_team%` | 玩家所在队伍（如有） | `SEND_MESSAGE &7Team: %player_team%` |
| `%player_attack_charge%` | 攻击冷却（1.0 = 完全充能） | 条件：`part1: '%player_attack_charge%'`、`type: PLAYER_NUMBER`、`comparator: SUPERIOR_OR_EQUALS`、`part2: '1.0'` |
| `%last_damage_taken%` | 最近受到的伤害（整数使用 `_int`） | `SEND_MESSAGE &cYou took %last_damage_taken_int% damage` |
| `%last_damage_dealt%` | 最近造成的伤害（整数使用 `_int`）<CustomTag type="version" version="1.16" /> | `SEND_MESSAGE &aYou dealt %last_damage_dealt_int% damage` |
| `%player_x_velocity%`, `%player_y_velocity%`, `%player_z_velocity%` | 当前 X、Y、Z 速度（整数使用 `_int`） | `SEND_MESSAGE &7Y velocity: %player_y_velocity%` |

### 初始玩家占位符

在激活器触发时记录玩家的值（执行期间不会改变）：
- `%player_x_initial%`, `%player_y_initial%`, `%player_z_initial%`
- `%player_world_initial%`
- `%player_pitch_initial%`, `%player_yaw_initial%`
- `%player_direction_initial%`

## 目标 / 实体占位符

实体占位符可在涉及实体的激活器中使用。当实体在激活器中是次要对象时，请将 `entity` 替换为 `target`（例如 `%target_x%`）。

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%entity%` | 实体类型（大写） | `SEND_MESSAGE &7You hit a %entity%` |
| `%entity_lower_case%` | 实体类型（小写） | `SEND_MESSAGE &7You hit a %entity_lower_case%` |
| `%entity_name%` | 实体的自定义名称 | `SEND_MESSAGE &7Target: %entity_name%` |
| `%entity_uuid%` | 实体的 UUID | 用于在基于 NBT 的命令中识别目标 |
| `%entity_uuid_array%` | 实体的 UUID，格式为 `[I;-1288600659,-373273272,-1897203511,898446696]` | 内部使用，用于在基于 NBT 的命令中存储 UUID |
| `%entity_x%`, `%entity_y%`, `%entity_z%` | 坐标（添加 `_int` 获取整数） | `execute at %entity% run setblock %entity_x_int% %entity_y_int% %entity_z_int% air` |
| `%entity_health%` | 当前生命值 | `SEND_MESSAGE &cTarget health: %entity_health%` |
| `%entity_max_health%` | 最大生命值 | `SEND_MESSAGE &cTarget health: %entity_health%/%entity_max_health%` |
| `%entity_world%` | 世界名称 | `SEND_MESSAGE &7Entity world: %entity_world%` |
| `%entity_direction%` | 面向方向 | 条件：`part1: '%entity_direction%'`、`comparator: EQUALS`、`part2: 'N'` |
| `%entity_pitch%`, `%entity_yaw%` | 旋转值 | `SEND_MESSAGE &7Yaw: %entity_yaw%` |
| `%entity_team%` | 实体所在队伍（如有） | `SEND_MESSAGE &7Team: %entity_team%` |
| `%entity_serialized%` | 完整的实体定义 | 用于在高级命令中复制/还原实体 |
| `%entity_last_damage_taken%` | 最近受到的伤害（添加 `_int` 获取整数）。`_final` 变体仅存在于 ExecutableEvents 的实体伤害事件中，参见 [激活器占位符](#event-specific-placeholders) | `SEND_MESSAGE &cTarget took %entity_last_damage_taken_int% damage` |
| `%entity_x_velocity%`, `%entity_y_velocity%`, `%entity_z_velocity%` | 当前 X、Y、Z 速度（整数使用 `_int`） | `SEND_MESSAGE &7Target Y velocity: %entity_y_velocity%` |

## 物品占位符

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%name%` | ExecutableItem 的名称 | `SEND_MESSAGE &aYou used %name%` |
| `%id%` | ExecutableItem 的 ID | `SEND_MESSAGE &7Item ID: %id%` |
| `%amount%` | 当前堆叠中的数量 | `SEND_MESSAGE &7You have %amount% in this stack` |
| `%usage%` | 当前使用次数 | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_roman%` | 以罗马数字表示的使用次数 | `ADD_ITEM_LORE &7Usage: %usage_roman%` |
| `%usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` | 可视化使用次数条，详见下文 | `ADD_ITEM_LORE %usage_bar(amount:30,color1:&d,color2:&5,symbol:I)%` |
| `%usage_limit%` | 最大使用次数上限 | `SEND_MESSAGE &7Usage: %usage%/%usage_limit%` |
| `%usage_raw%`, `%usage_limit_raw%` | ExecutableItems，仅限物品的名称和 Lore 中：以纯数字表示使用次数和使用次数上限，详见下文 | `lore: ['&7Damage: %math_0_%usage_raw%*2%']` |
| `%durability%` | 物品耐久度（1.14+） | `SEND_MESSAGE &7Durability left: %durability%` |
| `%max_use_per_day_item%` | 每日使用次数上限（物品） | 条件：`part1: '%max_use_per_day_item%'`、`type: PLAYER_NUMBER`、`comparator: SUPERIOR`、`part2: '0'` |
| `%max_use_per_day_activator%` | 每日使用次数上限（激活器） | 条件：`part1: '%max_use_per_day_activator%'`、`type: PLAYER_NUMBER`、`comparator: SUPERIOR`、`part2: '0'` |

**特殊：** `%usage_bar(amount:30,color1:&d,color2:&5,symbol:|)%`

![](https://media.ssomar.com/m/docs-img-usage-bar.jpg)
- 创建可视化使用次数条
- 参数：amount（条数）、color1（已使用）、color2（未使用）、symbol（符号）

**原始使用次数占位符：** `%usage_raw%` 和 `%usage_limit_raw%`

- 在 ExecutableItem 的名称和 Lore 中，`%usage%` 和 `%usage_limit%` 会带有一个不可见标签（当 `isRefreshableClean` 启用时，这是默认设置），插件可借此在之后更新该值。在 PlaceholderAPI 占位符内部，此标签会破坏表达式，例如在 `%math_0_%usage%*2%` 中。
- `%usage_raw%` 和 `%usage_limit_raw%` 返回相同的值但不带任何标签，因此可用于 PlaceholderAPI 的数学占位符：`%math_0_%usage_raw%*2%`。
- 它们与其他数值占位符一样支持 `+N` / `-N` 简写：`%usage_raw%-1`。
- 限制：由于没有标签，它们只会在根据配置重建 Lore 时更新。当物品的 Lore 保持原样时（例如在其中添加了行之后），Lore 中写入的值保持不变，而 `%usage%` 仍会持续更新。

## 方块占位符

方块占位符可在涉及方块的激活器中使用。当方块在激活器中是次要对象时，请将 `block` 替换为 `target_block`（例如 `%target_block_x%`）。

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%block%` | 方块类型（大写） | `SEND_MESSAGE &7You broke %block%` |
| `%block_lower%` | 方块类型（小写） | `SEND_MESSAGE &7You broke %block_lower%` |
| `%block_live%`, `%block_live_lower%` | 当前方块类型 | `SEND_MESSAGE &7Current block: %block_live%` |
| `%block_item_material%` | 方块的物品形态（农作物给出其种子，`WALL_TORCH` 给出 `TORCH`，`OAK_WALL_SIGN` 给出 `OAK_SIGN`，`POTTED_DANDELION` 给出 `DANDELION`……） | 用于为已放置的方块给予对应的物品 |
| `%block_x%`, `%block_y%`, `%block_z%` | 坐标（添加 `_int` 获取整数） | `execute at %player% run setblock %block_x_int% %block_y_int%+1 %block_z_int% air` |
| `%blockface%` | 选中的方块面 | `SEND_MESSAGE &7Face: %blockface%` |
| `%block_world%` | 世界名称 | `execute in <<%block_world%>> run setblock %block_x_int% %block_y_int% %block_z_int% air` |
| `%block_biome%` | 生物群系名称 | 条件：`part1: '%block_biome%'`、`comparator: EQUALS`、`part2: 'DESERT'` |
| `%block_dimension%` | 世界类型（nether、normal、end） | 条件：`part1: '%block_dimension%'`、`comparator: EQUALS`、`part2: 'nether'` |
| `%block_spawnertype%` | 刷怪笼生物类型 | `SEND_MESSAGE &7Spawner: %block_spawnertype%` |
| `%block_is_ageable%` | 返回方块是否可生长 | 条件：`part1: '%block_is_ageable%'`、`comparator: EQUALS`、`part2: 'true'` |
| `%block_eb_id%` | ExecutableBlock ID（如适用） | `SEND_MESSAGE &7EB ID: %block_eb_id%` |
| `%block_data%` | 方块数据值 | `SEND_MESSAGE &7Block data: %block_data%` |

## 投射物占位符

投射物占位符可在涉及投射物的激活器中使用。

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%projectile%` | 投射物类型（大写） | `SEND_MESSAGE &7You shot a %projectile%` |
| `%projectile_lower_case%` | 投射物类型（小写） | `SEND_MESSAGE &7You shot a %projectile_lower_case%` |
| `%projectile_name%` | 自定义投射物名称 | `SEND_MESSAGE &7Projectile: %projectile_name%` |
| `%projectile_uuid%` | 投射物的 UUID | 用于在基于 NBT 的命令中识别投射物 |
| `%projectile_uuid_array%` | 投射物的 UUID，格式为 `[I;-1288600659,-373273272,-1897203511,898446696]` | 内部使用，用于在基于 NBT 的命令中存储 UUID |
| `%projectile_x%`, `%projectile_y%`, `%projectile_z%` | 坐标 | `execute at %player% run summon minecraft:lightning_bolt %projectile_x% %projectile_y% %projectile_z%` |
| `%projectile_world%` | 世界名称 | `SEND_MESSAGE &7World: %projectile_world%` |
| `%bow_force%` | 弓的射击力度（0-1） | 条件：`part1: '%bow_force%'`、`type: PLAYER_NUMBER`、`comparator: SUPERIOR_OR_EQUALS`、`part2: '0.9'` |

## 变量占位符

### 物品/方块变量

**字符串/数字变量：**
- `%var_X%` - 变量 X 的值
- `%var_X_int%` - 变量 X 的整数值（仅适用于 NUMBER 类型变量）
- `%var_X_roman%` - 罗马数字值（仅适用于 NUMBER 类型变量）

**列表变量：**
- `%var_MYVAR%` - 带方括号的完整列表
- `%var_MYVAR_size%` - 元素数量
- `%var_MYVAR_contains_VALUE%` - 检查列表是否包含 VALUE

示例：`ADD_ITEM_LORE &7Defense: %var_defense%`

### SCore 变量（全局 / 每玩家）

SCore 还拥有自己的全局或每玩家变量系统，独立于物品/方块变量。有关 `/score variables` 命令，请参阅 [SCore Variables](/tools-for-all-plugins-score/score-variables)。安装 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 后，这些变量将以如下形式提供：
- `%score_variables_<variable-id>%`
- `%score_variables_<variable-id>_int%`
- `%score_variables_<variable-id>_<index>%`（列表，指定索引处的值）
- `%score_variables-contains_<variable-name>_<value>%`（列表，布尔值）
- `%score_variables-size_<variable-name>%`（列表，大小）

## 冷却占位符

格式：`%score_cooldown_{plugin}:{object_id}:{activator_id}%`

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%score_cooldown_EI:Free_Lottery:activator1%` | ExecutableItems 激活器的剩余冷却时间 | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EI:Free_Lottery:activator1%` |
| `%score_cooldown_EB:MyBlock:activator2%` | ExecutableBlocks 激活器的剩余冷却时间 | `SEND_MESSAGE &7Cooldown left: %score_cooldown_EB:MyBlock:activator2%` |

## 数学占位符

所有数值型 SCore 占位符都支持紧跟在标签之后的行内算术运算：
- `%amount%+6`（如果 `%amount%` = 15，结果 = 21）
- `%amount%-8`（如果 `%amount%` = 14，结果 = 6）

对于超出单次 `+`/`-` 运算的情况（乘法、除法、嵌套表达式），请在 SCore 占位符外围使用 [PlaceholderAPI 的数学占位符](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math)：

- `%math_0_(%usage%)*10%` 将物品的 `%usage%` 乘以 10。
  - 在 ExecutableItem 的名称或 Lore 中，请改用 [`%usage_raw%`](#item-placeholders)：`%math_0_(%usage_raw%)*10%`。
- `%math_{score_variables_userLevel}*10%` 将 SCore 变量 `userLevel` 乘以 10（参见[在 SCore 中使用 PlaceholderAPI 占位符](#using-placeholderapi-placeholders-in-score)）。

:::info
SCore 占位符会在 PlaceholderAPI 占位符**之前**解析，因此 `%math_...%` 始终接收到已解析的 SCore 值。
:::

## 实用与文本占位符

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%rand:MIN\|MAX%` | MIN 与 MAX 之间的随机数 | `SEND_MESSAGE &6You rolled %rand:1\|100%` |
| `%timestamp%` | 当前时间戳 | `SEND_MESSAGE &7Time: %timestamp%` |
| `%activator_id%` | 当前激活器的 ID | `SEND_MESSAGE &7Activator: %activator_id%` |
| `%activator_name%` | 当前激活器的名称 | `SEND_MESSAGE &7Activator: %activator_name%` |

### AROUND 与 NEAREST 命令

使用带有 `around_target` 前缀的玩家/实体占位符：
- `%around_target_direction%`
- `%around_target_health%`
- `%around_target_uuid%`
- 如果 `%around_target%` 失效，请使用 `%around_target::step1%`
- `%around_target_count%`：`AROUND` / `MOB_AROUND` 命令的目标数量，参见 [AROUND](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#around)

示例：`AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SEND_MESSAGE &cYou got smited!`

### DAMAGE 命令

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%score_cmd-damage-boost%` | 当前伤害加成 | `SEND_MESSAGE &cDamage boost: %score_cmd-damage-boost%` |
| `%score_cmd-damage-resistance%` | 当前伤害抗性 | `SEND_MESSAGE &cDamage resistance: %score_cmd-damage-resistance%` |

:::warning
**攻击充能**：`%player_attack_charge%` 会在 DAMAGE 命令运行后重置，因此请在使用前检查其值。
:::

### 消息/命令占位符

适用于 `PLAYER_WRITE_COMMAND` 和 `PLAYER_SEND_MESSAGE`：

| 占位符 | 返回值 | 示例 |
|------------|---------|---------|
| `%arg0%`, `%arg1%`, `%arg2%` 等 | 单个命令参数 | `SEND_MESSAGE &7First argument: %arg0%` |
| `%all_args%` | 所有参数 | `SEND_MESSAGE &7Args: %all_args%` |
| `%all_args_without_first%` | 除第一个参数外的所有参数 | `SEND_MESSAGE &7Args: %all_args_without_first%` |

## 插件专属计数占位符

### ExecutableItems

- `%executableitems_checkamount%` - 背包中 EI 的总数
- 参数（多个值之间使用逗号分隔）：
  - `slot`：要检查的槽位。如果想检查所有槽位，请不要使用此参数。
  - `id`：你要检查的 ei 物品的 ID。
  - `owner`：仅当所有者的值正确时才计数
  - `owneruuid`：仅当所有者的 UUID 值正确时才计数
- 示例：
  - `%executableitems_checkamount_slot:0,2,3%` - 指定槽位中的 EI
  - `%executableitems_checkamount_id:item1,item2_slot:0,2%` - 槽位中的特定物品
  - `%executableitems_checkamount_owner:Special70%`

<hr/>

- `%executableitems_checkvar%` - 变量值 / 变量值总和
- 参数（多个值之间使用逗号分隔）：
  - `slot`：要检查的槽位。如果想检查所有槽位，请不要使用此参数。
  - `id`：你要检查的 ei 物品的 ID。
  - `var`：你要检查的变量 ID。
- 示例：
  - `%executableitems_checkvar_id:star_man_var:defense%`
  - `%executableitems_checkvar_slot:-1,40_var:atk_bonus%`
  - `%executableitems_checkvar_var:defense,bonus_defense%`

<hr/>

- `%executableitems_set_<id>%` <CustomTag type="premium" /> - 玩家穿戴的 [套装](/executableitems/configurations/sets-configuration) `<id>` 的件数
- `%executableitems_set_<id>_tier%` - 套装当前生效的最高阶段（件数），若无则为 `0`

:::info
- 如果检测到的第一个变量值是字符串，则会立即返回该值。
- 如果其余检测到的变量值是数字，则会将它们全部相加并返回总值。
- 目前不支持列表变量。
:::

### ExecutableBlocks

- `%executableblocks_checkamount%` - 背包中 EB 的总数
- 参数（多个值之间使用逗号分隔）：
  - `slot`：要检查的槽位。如果想检查所有槽位，请不要使用此参数。
  - `id`：你要检查的 ei 物品的 ID。
  - `owner`：仅当所有者的值正确时才计数
  - `owneruuid`：仅当所有者的 UUID 值正确时才计数
- 示例：
  - `%executableblocks_checkamount_slot:0,2,3%` - 指定槽位中的 EB
  - `%executableblocks_checkamount_id:block1,block2_slot:0,2%` - 槽位中的特定方块
  - `%executableblocks_checkamount_owner:Special70%`

## 事件专属占位符

这些占位符仅在对应的事件激活器内可用。

| 激活器 | 占位符 |
|-----------|--------------|
| **RAID_TRIGGER** | `%player%`, `%badomenlevel%` |
| **RAID_WAVE** | `%raiders%`（UUID 列表） |
| **RAID_FINISH** | `%badomen%`, `%heroes%`（UUID 列表） |
| **PLAYER_EXPERIENCE_CHANGE** | `%experience%` |
| **PLAYER_RECEIVE_EFFECT** | `%effect_received%`, `%effect_received_level%`, `%effect_received_duration%` |
| **PLAYER_HIT_ENTITY** | `%critical%`（true/false） |
| **PLAYER_TELEPORT** | `%teleport_cause%` |
| **BROADCAST_MESSAGE** | `%message%`, `%is_async%` |
| **PLUGIN_ENABLE/DISABLE** | `%plugin_name%` |
| **PLAYER_ADVANCEMENT** | `%advancement%`（仅限 1.19+） |
| **PLAYER_RECEIVE_HIT_GLOBAL, PLAYER_RECEIVE_HIT_BY_PLAYER, PLAYER_RECEIVE_HIT_BY_ENTITY** | `%last_damage_taken_nonfinal%`、`%last_damage_taken_nonfinal_int%` 指承受的原始伤害。`%last_damage_taken_final%`、`%last_damage_taken_final_int%` 指经过防御加成（属性、抗性效果、盔甲）后承受的伤害。只有直接命中才会给出正确的值；受到投射物命中时返回 0 |
| **ENTITY_DAMAGE_BY_PLAYER, ENTITY_DAMAGE_BY_ENTITY, ENTITY_DAMAGE_BY_BLOCK**（EE） | `%entity_last_damage_taken_final%`、`%entity_last_damage_taken_final_int%` 指经过防御加成（盔甲、抗性……）后承受的伤害。ENTITY_DAMAGE_BY_PLAYER 还提供 `%entity_last_damage_taken_final_with_booster%` 和 `%entity_last_damage_taken_final_with_booster_int%`，即包含伤害加成的最终伤害 |
| **PLAYER_BLOCK_HIT_OF_PLAYER, PLAYER_BLOCK_HIT_OF_ENTITY** | `%damage_blocked_base%`、`%damage_blocked_base_int%` 返回被盾牌格挡的原始伤害 |
| **PLAYER_PICKUP_ITEM**（EE） | 1.13+：`%item_type%`、`%item_name%`、`%item_amount%`。1.14-1.21.3：`%item_cmdata%`（为 null 时返回 -1）。1.21.4+：`%item_cmdata_s_0%`（为空时返回 "null"）、`%item_cmdata_f_0%`（为空时返回 -1）（第一个字符串/浮点数 CustomModelData 值，自 1.21.4+ 起 CustomModelData 以数组形式存储） |
| **PLAYER_INVENTORY_CLICK**（EE） | `%is_shift_click%`、`%is_mouse_click%`、`%is_left_click%`、`%is_right_click%`、`%is_keyboard_click%`、`%is_creative_action%`、`%get_action%`（[参考枚举值](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)）、`%before_slot%`、`%after_slot%`、`%inventory_type%`（[参考枚举值](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)）、`%inventory_title%`（1.21+） |
| **PLAYER_KILL_ENTITY** | `%last_hitter%`：给予最后一击者的生物类型。可用于检查是你还是你的宠物狼给予了最后一击，例如 `PLAYER`、`WOLF` |

## 在 SCore 中使用 PlaceholderAPI 占位符

[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 是构建物品和方块的主要支柱之一：任何已安装的 PlaceholderAPI 占位符（`%vault_eco_balance%`、`%luckperms_prefix%` 等）都可以在 SCore 读取文本的任何位置使用，语法与 `%...%` 相同：

- Lore
- 命令部分
- 消息（所有消息类型：冷却消息、条件未满足消息、所需事项消息等）
- 变量
- 等等

SCore 自身的占位符会在 PlaceholderAPI 占位符**之前**解析，因此 PAPI 表达式可以安全地包裹 SCore 表达式，如上文的数学示例（`%math_{score_variables_userLevel}*10%`）。

## 相关文档

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- [SCore Variables](/tools-for-all-plugins-score/score-variables)
- [兼容插件](/tools-for-all-plugins-score/compatible-plugins)
- [占位符条件](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions)

## 问题？

**SCore 与 PlaceholderAPI 兼容吗？**
兼容。任何 PlaceholderAPI 占位符都可以在 ExecutableItems、ExecutableBlocks 和 ExecutableEvents 的 Lore、命令、消息和变量中使用。SCore 自身的占位符会先被解析，因此这两种语法可以在同一行中组合使用而不会冲突。

**可以用占位符进行数学运算吗？**
简单的递增/递减可以直接使用：`%amount%+6` 或 `%amount%-8`。对于乘法、除法或嵌套表达式，请将 SCore 占位符包裹在 PlaceholderAPI 的数学占位符中，例如 `%math_0_(%usage%)*10%`。

**如何在 ExecutableItems 命令中使用 PlaceholderAPI 占位符？**
像书写任何 SCore 占位符一样，直接内联写在命令字符串中，例如 `SEND_MESSAGE &7Balance: %vault_eco_balance%`。它适用于命令、条件、Lore 和所有消息类型，除了安装 PlaceholderAPI 和来源插件之外无需额外设置。

**`%var_X%` 与 `%score_variables_X%` 有什么区别？**
`%var_X%` 读取直接存储在该 ExecutableItem 或 ExecutableBlock 上、作用域为物品/方块的变量。`%score_variables_<id>%` 读取全局或每玩家的 SCore 变量，使用 `/score variables` 管理，并通过 PlaceholderAPI 提供。

**为什么 `%around_target%` 有时不起作用？**
在某些激活器上，目标在第一次引用时不会被解析。请改用 `%around_target::step1%`，这是 AROUND/NEAREST 命令文档中记载的备用方案。
