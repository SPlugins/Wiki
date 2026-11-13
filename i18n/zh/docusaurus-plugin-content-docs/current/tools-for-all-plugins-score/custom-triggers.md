---
description: >-
  了解 Custom Triggers 的用法：如何存储命令列表、手动或按计划自动执行，并在 ExecutableItems、ExecutableBlocks
  和 ExecutableEvents 中使用。
source_hash: 2eab89bbd32500f6
translated_at: '2026-11-13T18:06:37.480Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Custom Triggers 是一种强大的方式，可以存储并执行命令列表，既可以通过命令手动执行，也可以通过计划系统自动执行。

## 概述

**Custom Triggers** 让你可以：
- ✅ 存储可重复使用的命令序列
- ✅ 使用简单的触发命令手动执行命令
- ✅ 安排在特定时间自动执行
- ✅ 传递参数来自定义行为
- ✅ 整理复杂的命令配置

## 快速开始

### 步骤 1：创建激活器

1. 打开你的插件的编辑器（`/ei`、`/eb` 或 `/ee`）
2. 创建一个新的激活器
3. 选择 **CUSTOM_TRIGGER** 作为选项
4. 将你的命令添加到命令部分

### 步骤 2：执行触发器

使用适合你的插件的命令：

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## 各插件的命令上下文

每个插件为命令执行提供不同的上下文：

### 🗡️ ExecutableItems
- **要求：** 物品必须在玩家的物品栏中
- **可用的 playerCommands：** 玩家命令
- **占位符：** 基于玩家的占位符（`%player%` 等）

### 🧱 ExecutableBlocks
- **要求：** 方块必须已被放置
- **可用的 playerCommands：** 方块命令、所有者命令（如果已启用）
- **占位符：** 方块和所有者占位符

### 🎯 ExecutableEvents
- **要求：** 无（全局触发）
- **可用的 playerCommands：** 仅限控制台命令
- **占位符：** 有限（使用参数来指定玩家目标）

## 触发器类型

### 1. 可调用触发器
仅通过命令执行：
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. 计划触发器
在特定时间自动执行：
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## 命令语法

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| 参数 | 描述 | 是否必填 |
|-----------|-------------|----------|
| `trigger` | 激活器 ID | ✅ 是 |
| `player` | 目标玩家名称 | ❌ 否（省略时以所有玩家为目标） |
| `slot` | 物品栏槽位（-1 表示主手） | ❌ 否 |
| `args...` | 附加参数，可通过 %arg0%、%arg1% 等访问 | ❌ 否 |

**示例：**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| 参数 | 描述 | 是否必填 |
|-----------|-------------|----------|
| `trigger` | 激活器 ID | ✅ 是 |
| `block` | 方块位置（world,x,y,z） | ❌ 否（省略时以所有方块为目标） |
| `args...` | 附加参数 | ❌ 否 |

**示例：**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| 参数 | 描述 | 是否必填 |
|-----------|-------------|----------|
| `trigger` | 激活器 ID | ✅ 是 |
| `args...` | 附加参数 | ❌ 否 |

**示例：**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## 计划系统

### 计划格式

计划系统使用两种格式来设定时间：

#### 格式 1：基于日期/时间
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- 使用 `%%%%` 表示任意年份
- 使用 `%%` 表示任意月份/日/小时/分钟
- 使用 `XX` 表示任意秒
- 使用 `[value1,value2]` 表示多个值

#### 格式 2：基于星期
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` 可以是：MONDAY、TUESDAY 等

### 常见计划示例

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## 实用示例

### 示例 1：每日奖励物品

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### 示例 2：服务器事件触发器

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### 示例 3：方块收获系统

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### 示例 4：来自事件的玩家命令

由于 ExecutableEvents 没有玩家上下文，请使用参数：

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

使用以下命令执行：`/ee run-custom-trigger trigger:player_boost Steve`

## 最佳实践

### ✅ 应该做
- 使用唯一的激活器 ID 以避免冲突
- 在设定计划之前先手动测试触发器
- 使用参数来实现灵活、可重复使用的触发器
- 将复杂的命令序列整理成触发器

### ❌ 不应该做
- 使用重复的激活器 ID（它们会同时全部触发）
- 忘记检查插件的上下文（玩家/方块/控制台命令）
- 将不需要触发器的简单配置过度复杂化

## 故障排除

### 触发器未执行
- ✅ 确认激活器 ID 完全匹配
- ✅ 检查物品/方块/事件是否存在并已正确配置
- ✅ 确保拥有执行命令所需的权限

### 计划不起作用
- ✅ 检查计划格式的语法
- ✅ 确认服务器时间与预期的计划相符
- ✅ 确保 startDate/endDate 范围包含当前时间

### 命令未运行
- ✅ 确认命令上下文（玩家/方块/控制台）
- ✅ 检查该上下文中占位符是否可用
- ✅ 先手动测试命令

## 进阶技巧

### 链式触发器
通过让触发器调用其他触发器来创建复杂的序列：

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### 全局事件
将 ExecutableEvents 的触发器与其他插件的触发器结合，实现全服务器范围的事件：

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## 相关文档

- [占位符](/tools-for-all-plugins-score/placeholders)
