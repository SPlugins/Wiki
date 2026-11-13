---
description: >-
  了解在 ExecutableItems 的命令中使用 summon、particle、effect 等需要坐标的原版命令时，为何要加上 execute at
  %player% run，以及方块、实体、投射物占位符的用法和原版命令的多世界兼容写法。
source_hash: d71f76eefdb64af0
translated_at: '2026-11-13T12:17:59.828Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/cYtk6Z8O2-c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

你在自己的 ExecutableItem 中，有可能会使用**需要位置**的原版命令，例如：

* playsound..
* summon..
* particle..
* effect..
* 等等

如果是这种情况，先给你说明一下：命令部分中的所有命令都是由控制台执行的，所以当你输入 "summon zombie \~ \~ \~" 时，该命令会在默认世界的 "0,0,0" 处执行。

为了避免这种情况，你需要在命令前加上 "**execute at %player% run**"，这会强制命令从玩家所在的坐标执行。

例如：

```
❌ run summon tnt ~ ~ ~
✅ execute at %player% run summon tnt ~ ~ ~

❌ playsound minecraft:ambient.cave master %player% ~ ~ ~ 1 1
✅ execute at %player% run playsound minecraft:ambient.cave master %player% ~ ~ ~ 1 1
```

```
❌ particle minecraft:flame ~ ~ ~ 1 1 1 0 10
✅ execute at %player% run particle minecraft:flame ~ ~ ~ 1 1 1 0 10
```

✅ effect give %player% speed 15 1

✅ execute at %player% run setblock ~ ~ ~ stone

✅ execute at %player% run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 stone replace air

✅execute at %player% run tellraw %player% \{"text":"hi"\}
✅execute at %player% run tellraw @a \{"text":"hi"\}

以下是一些特殊例外，也就是只在特定条件下才能使用的占位符或其他通用内容。

### 方块占位符
如果你使用的激活器与**方块相关**（如果不清楚指的是什么，可以浏览 GUI 或查看基础教程），你就可以在命令中使用[**方块占位符**](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-block-placeholders)，例如：

```
execute at %player% run setblock %block_x% %block_y% %block_z% stone

execute at %player% run fill %block_x% %block_y% %block_z% %block_x% 255 %block_z% stone

execute in <<%block_world%>> positioned %block_x% %block_y% %block_z% run summon tnt ~ ~ ~
```

### 实体占位符
如果激活器与**实体相关**（如果不清楚指的是什么，可以浏览 GUI 或查看基础教程），你就可以在命令中使用[实体占位符](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-entity-placeholders)，例如：

```
execute at %entity_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %entity_x% %entity_y% %entity_z% stone
execute run effect give %entity_uuid% strength 10 10
```

### 投射物占位符
如果激活器与**投射物相关**（如果不清楚指的是什么，可以浏览 GUI 或查看基础教程），你就可以在命令中使用[投射物占位符](/docs/tools-for-all-plugins-score/placeholders.md#placeholders#-projectile-placeholders)，例如：

```
execute at %projectile_uuid% run particle flame ~ ~ ~ 1 1 1 50 0
execute at %player% run setblock %projectile_x% %projectile_y% %projectile_z% stone
```

:::tip
原版命令的 "Multi-world" 兼容性。

* `execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

示例：你想在 SsomarWorld 世界中召唤一只僵尸：

* `execute in <<SsomarWorld>> run summon zombie 100 50 100`

使用占位符的示例`:`

* `execute in <<%player_world%>> run summon zombie 100 50 100`
* `execute in <<%block_world%>> run particle firework %block_x% %block_y% %block_z% 1 1 1 0.2 20`
:::
