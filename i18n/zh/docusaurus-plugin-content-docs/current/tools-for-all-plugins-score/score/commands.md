---
description: >-
  本页面介绍 Minecraft 服务器上 SCore 插件的全部命令，包括清除进行中的内容与冷却、检查循环以便调试、重载配置、通过 Discord
  webhook 发送消息，以及手动对玩家、方块、实体和物品运行 SCore 命令，并附有语法、参数说明和使用示例。
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T18:08:18.660Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 命令

## 清除 SCore 中的内容

* 此命令可以清除 SCore 中大部分正在进行的内容
* 你可以清除：
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS（延迟执行的 SCore 命令）
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* 命令：/score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## 清除冷却

* 用于清除特定冷却的命令（针对特定玩家 / 实体）
* 命令：/score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`：示例 -> EI\:myitem\:myactivator
  * `[UUID]`：（可选）玩家 / 实体的 UUID

## 检查循环，对调试很有用

* 命令：/score inspect-loop

重载 SCore 的变量、投射物和硬度配置

* 命令：/score reload

## Discord webhook
通过 webhook 向 Discord 发送消息

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`：webhook 的 url
  * `{debug}`：是否在执行 webhook 消息时通知执行者
  * `[allowed_mentions]`：可以是 users\:id\[,id,...\] 或 roles\:id\[,id,...\]，也可以留空
  * `{message...}`：目标 webhook 将要发送的消息


## 粒子命令

查看 [SCore Particles](/tools-for-all-plugins-score/score-particles)

## 变量命令

查看 [SCore Variables](/tools-for-all-plugins-score/score-variables)

## 手动运行 SCore 命令

### 玩家命令

* 信息：此命令允许在 Ssomar Plugins 内部和外部对特定玩家运行 SCore 的自定义命令。
* 使用此命令时，整行命令都会经过 PlaceholdersAPI 解析，因此你可以在其中添加占位符。

* 命令：/score run-player-command player:\{player\} \{command\}
  * `player`：目标玩家的名称
  * `command`：将应用于 \{player\} 的 SCore 玩家命令

* 示例：
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### 方块命令

* 信息：此命令允许在 Ssomar Plugins 内部和外部对特定方块运行 SCore 的自定义命令。

* 命令：/score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`：与此激活器相关的玩家
    * 它是可选的，因为有些命令需要它，例如

                MOB_AROUND：由谁造成伤害？该命令会对周围的生物造成伤害，但伤害会被计为由 \{player\} 造成，因此会检查该玩家是否确实可以伤害这个生物，伤害和击杀都会计入该玩家，等等。

                VEIN_BREAKER：由谁破坏了方块？该命令会以矿脉形状破坏方块，但这些方块会被计为由 \{player\} 破坏，因此会检查该玩家是否确实可以破坏该方块，破坏的方块会计入该玩家，等等。

  * `block`
      * `world`：方块所在的世界
      * `x`：方块的 X 坐标
      * `y`：方块的 Y 坐标
      * `z`：方块的 Z 坐标
  * `command`：将对该方块运行的方块命令，如果存在玩家，则由该玩家执行。
    * 命令中的[方块占位符](/tools-for-all-plugins-score/placeholders#block-placeholders)（`%block%`、`%block_lower%`、`%block_x%`……）均指此方块的对应值。

* 示例：
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### 实体命令

* 信息：此命令允许在 Ssomar Plugins 内部和外部对特定实体运行 SCore 的自定义命令

* 命令：/score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`：（可选）相关玩家的名称或 UUID：之后可以在命令中使用玩家占位符（`%player%`、`%player_health%`……），例如在 `IF` 中。
  * `entityUUID`：目标实体的 UUID
  * `command`：将对该实体运行的实体命令。
* 示例：
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### 物品命令

* 信息：此命令允许在 Ssomar Plugins 内部和外部，对玩家背包中的某个物品运行自定义[物品命令](/tools-for-all-plugins-score/custom-commands/item-commands)。

* 命令：/score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`：拥有该物品的玩家的名称或 UUID
  * `slot`：物品在玩家背包中的槽位：`0` 到 `8` 为快捷栏，`9` 到 `35` 为背包其余部分，`36` 到 `39` 为盔甲（靴子到头盔），`40` 为副手
  * `command`：将对该物品运行的物品命令。其中可以使用玩家占位符。
  * 当玩家离线或槽位为空时，不会发生任何事情。
* 示例：
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
