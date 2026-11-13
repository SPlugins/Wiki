---
description: >-
  了解如何在 ExecutableItems 中创建自定义掉落物：使用 PLAYER_KILL_ENTITY、PLAYER_KILL_PLAYER 与
  PLAYER_BREAK_BLOCK 激活器，配合 EI 命令或原版命令实现实体掉落与方块掉落，并可设置掉落几率。
source_hash: 53c8b7deae5be6f3
translated_at: '2026-11-13T12:11:12.911Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 自定义掉落物

:::danger
本教程适用于 ExecutableItems，这意味着**这些掉落物不是全局生效的**，只有当你的背包中有 ExecutableItem 时才会生效。

\
如果想创建全局自定义掉落物，请使用 **ExecutableEvents**。
:::

如果你想创建自定义掉落物，首先需要确定掉落的类型。下面会分别说明这两种类型：

## 实体掉落

使用激活器 PLAYER\_KILL\_ENTITY 或 PLAYER\_KILL\_PLAYER，在命令中你可以使用：

* 使用 EI 命令来掉落物品
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* 使用原版命令来掉落物品
  * 一个很好的例子是掉落玩家的头颅
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
别忘了，如果你不希望该命令 100% 生效，可以为它们设置几率！请查看 Wiki，那里已有说明 ^^
:::

## 方块掉落

使用激活器 PLAYER\_BREAK\_BLOCK，在命令中你可以使用：

* 使用 EI 命令来掉落物品
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* 使用原版命令来掉落物品
  * 用于额外掉落被破坏物品（多于一个）的原版命令（本示例额外掉落 2 个物品，你可以用 RNG 占位符代替 "2" 来实现随机化）
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
别忘了，如果你不希望该命令 100% 生效，可以为它们设置几率！请查看 Wiki，那里已有说明 ^^
:::
