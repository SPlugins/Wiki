---
description: >-
  本页介绍 ExecutableItems 和 ExecutableBlocks 的方块命令，包括
  AROUND、MINEINCUBE、VEIN_BREAKER、SETBLOCK、DROPITEM 等命令的参数、条件与示例，并说明
  runActivatorOnBlocks 的用法。
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T18:04:02.872Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# 方块命令

:::tip
原版命令的“多世界”兼容。

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

示例：你想在世界 SsomarWorld 中召唤一只 Zombie：

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

使用占位符的示例：

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
在 **MINEINCUBE** 中使用较大的数值时，请启用 **HIDE USAGE**，因为这可以缩短经常出现的卡顿，例如在你使用 `MINEINCUBE 8` 时。
:::

## 自定义命令

_按字母顺序排序_

### &lt;+&gt; (Around Command Connector)

* 信息：允许你在一行命令中添加更多命令。仅能与 `AROUND` 和 `MOB_AROUND` 良好配合。
* 示例：

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* 信息：选取指定半径内的玩家，并让他们执行命令
* 命令设置
    * `{distance}`：命令选取玩家的半径范围
    * `{affectThePlayerThatActivatesTheActivator}`：true/false。如果为 true，则不会影响施放者。
      * 示例情境：当你运行某个 ExecutableItem 的激活器，且该激活器支持方块命令时，它会忽略触发该激活器的人。但如果此选项为 false，则你也会受到影响。
    * `{throughBlocks}`：是否影响位于方块后面的生物
    * `{limit}`：可被影响的目标数量
    * `{sort}`：对 limit 选项很有用。
    * NEAREST：选取距离原点最近的实体。
    * RANDOM：在命令范围内随机选取任意实体。
    * `{regionCheck}`：true/false。如果为 true，AROUND 命令会检查目标是在野外还是在施放者的领地内（GriefPrevention 插件的情境）（之后将更新为支持检查其他领地插件）
    * `{command}`：被选中的玩家将执行的命令
* 示例：

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* 这会在被点击方块周围 20 格半径内的玩家处召唤闪电。

:::info
**目标数量：** `%around_target_count%` 给出该命令选中的玩家数量。每个目标的该值都相同，它统计的是经过 `distance`、`affectThePlayerThatActivatesTheActivator`、`throughBlocks`、`regionCheck` 和 `limit` 筛选后保留的目标。对每个目标检查的 `CONDITIONS(...)` 不会被计入。它支持 `+N` / `-N` 简写：`%around_target_count%-1`。

示例：`AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### 你可以为 AROUND 命令添加条件

* 条件的格式类似 AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* 条件支持占位符，但需要写成 %::\_::% 而不是 %\_%
  * 例如 %::player\_health::%
* 要添加多于 1 个条件，请在条件之间使用 "&&"
* 示例：

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
请注意，CONDITIONS() 部分会使用被 AROUND 命令选中的玩家来解析其中的占位符。因此上面的占位符实际上是在检查：目标的生命值是否大于 10，并且被 AROUND 命令选中的玩家名字是否为 "2Ssomar"
:::

### APPLY\_BONEMEAL

* 信息：产生与玩家对方块（作物）使用骨粉相同的效果
* 无命令设置
* 示例：

```yaml
- APPLY_BONEMEAL
```

### BREAK

* 信息：破坏目标方块
* 无命令设置
* 示例：

```
 - BREAK
```

### CONTENT\_ADD

* 信息：向容器中添加一个物品
* 命令设置
  * \{Item\}：要添加的物品
  * \[Amount]：要添加的数量（默认为 1）
* 示例：

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* 信息：清空容器
* 无命令设置
* 示例：

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* 信息：从容器中移除一个物品
* 命令设置
  * \{Item\}：要移除的物品
  * \[Amount]：要移除的数量（默认为 1）
* 示例：

```
- CONTENT_REMOVE STONE 1
```

:::info
即使材质匹配，它也不会移除 ExecutableItems。唯一的办法是使用 EXECUTABLEITEMS:`{id}` 来指定
:::

### CONSOLEMESSAGE

* 信息：向控制台发送一条消息
* 命令设置
  * `{text}`：要发送到控制台的文本
* 示例：

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* 信息：更改由激活器选中的方块的方块类型
* 命令设置
* 示例：

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
它可与 ItemsAdder 配合使用
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* 信息：加速方块周围作物的生长
* 命令：CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* 示例：

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* 信息：在方块所在位置掉落一个 Executable Item
* 命令设置
  * `{id}`：ExecutableItem 的物品 ID
  * `{quantity}`：将掉落的 ExecutableItem 的数量
  * `[owner]`：（可选）掉落物品的所有者（玩家 IGN 或 UUID）
  * `[itemdata]`：（可选）物品数据设置，包含：
    * `Usage`：设置使用次数值
    * `Variables`：设置自定义变量（格式：`{key:value}`）
    * `Durability`：设置耐久度值
* 示例：

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* 信息：在方块所在位置掉落一个 Executable Block
* 命令设置
  * `{id}`：ExecutableBlock 的物品 ID
  * `{quantity}`：将掉落的 ExecutableBlock 的数量
* 示例：

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* 信息：在半径为 "r" 的立方体范围内排空熔岩和/或水的源方块
* 命令设置
  * `{radius}`：以方块为单位的半径（上限为 9），你可以在半径前添加 * 来绕过该上限（风险自负）。
  * `{drainType}`：LAVA 或 WATER（如果两者都要，则无需填写）
  * `[waterlogged]`：（可选）（默认 = false）如果为 true 且水被排空（`WATER` 或未填写 `{drainType}`），它还会使立方体内的含水方块（台阶、楼梯、栅栏等）变干，并像海绵一样移除 `KELP`、`KELP_PLANT`、`SEAGRASS`、`TALL_SEAGRASS` 和 `BUBBLE_COLUMN` 方块且不产生任何掉落物。仅适用于 1.13 及以上版本的服务器。
* 示例：

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
如果没有 `waterlogged:true`，含水方块会保留其中的水，水可能会流回已排空的区域。
:::

### DROPITEM

* 信息：在方块所在位置掉落一个物品
* 命令设置
  * `{material}`：物品类型。
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`：将掉落的物品数量
* 示例：

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* 信息：破坏你选中的方块，并在该位置生成一个已点燃的 TNT
* 无命令设置
* 示例：

```
- EXPLODE
```

### FARMINCUBE

* 信息：破坏给定半径内的所有作物
* 命令设置
  * `{radius}`：要破坏的作物区域的半径大小。**（上限为 9）**
  * `{drop}`：（默认 = true）方块是否掉落战利品
  * `{onlyMaxAge}`：（默认 = true）仅破坏已达到最大生长阶段的作物
  * `{replant}`：（默认 = false）作物是否会被重新种植
  * `{event}`：（默认 = false，使用 `runActivatorOnBlocks:true` 时为 true）作物是否会产生方块破坏事件。
  * `[runActivatorOnBlocks]`：（可选）（默认 = false）仅限 ExecutableItems。如果为 true，被该命令破坏的作物也会运行启动该命令的激活器，参见 [runActivatorOnBlocks](#runactivatoronblocks)。它可以写在命令的任意位置，并且会启用 `{event}`，除非 `{event}` 被写为 false。
* 示例：

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* 信息：使附近的作物生长 1 个阶段，类似于使用骨粉，但 100% 会使植物生长。
* 命令设置
  * `{radius}`：要施肥的作物区域的半径大小 **（上限为 9）**
* 示例：

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* 信息：以矩形形状在半径内破坏方块。由该命令破坏的每个方块都会被计为一次玩家方块破坏事件。
* 命令设置
  * `{radius}`：立方体半径的大小
  * `{depth}`：矩形的深度。
  * `{drop}`：方块是否掉落战利品
  * `{createBBEvent}`：插件是否为 MINEINCUBE 破坏的每个方块生成 blockBreakEvent（默认 true）
  * `[direction]`：（可选）（默认 = 玩家的朝向）如果你想强制指定方向。
    * 选项：
      * `north/n/-z`：北
      * `south/s/+z`：南
      * `east/e/+x`：东
      * `west/w/-x`：西
      * `up`：上
      * `down`：下
      * `auto`：使用 PlaceholderAPI 的 Player 扩展中 %player_direction_xz% 的逻辑来决定 `N/W/S/E` 方向。对于上/下的逻辑，当俯仰角 `<=` -45 时为 `UP` 方向；当俯仰角 `>=` 45 时为 `DOWN` 方向。
  * `[smelt]`：（可选）（默认 = false）使用 SMELT 命令的逻辑。如果方块可以被熔炼，则掉落熔炼后的版本。否则，将正常掉落被破坏的方块。
* 示例：

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
它支持 PlaceholderAPI - Player 扩展的 %player\_direction\_xz%\
示例：INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* 信息：让目标方块发射投射物
* 命令设置
  * `{projectile}`：投射物类型
  * `{speed}`：投射物速度
  * `{despawnDelay}`：消失延迟，单位为秒（默认 10）
* 示例：

```
- LAUNCH ARROW 2 5
```

:::info
方块必须是有朝向的方块，才能正确地 LAUNCH 投射物。

示例：AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* 信息：以长方体形状在半径内破坏方块。由该命令破坏的每个方块都会被计为一次玩家方块破坏事件。
* 命令设置
  * `{radius}`：你想破坏的方块立方体的半径 **（上限为 9）**
  * `{droploot}`：方块是否掉落战利品
  * `{createEvent}`：插件是否为 MINEINCUBE 破坏的每个方块生成 blockBreakEvent（默认 true）
  * `{offsetBreak}`：方块区域是从被破坏的方块开始破坏，还是从“中心”开始，以使该区域真正符合所选的“半径”。（默认 false）
  * `[smelt]`：（可选）（默认 = false）使用 SMELT 命令的逻辑。如果方块可以被熔炼，则掉落熔炼后的版本。否则，将正常掉落被破坏的方块。
  * `[runActivatorOnBlocks]`：（可选）（默认 = false）仅限 ExecutableItems。如果为 true，被该命令破坏的方块也会运行启动该命令的激活器，参见 [runActivatorOnBlocks](#runactivatoronblocks)。请保持 `{createEvent}` 为 true。
* 示例：

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* 信息：以球形在半径内破坏方块。由该命令破坏的每个方块都会被计为一次玩家方块破坏事件。
* 命令设置
  * `{radius}`：球体的半径
  * `{drop}`：方块是否掉落战利品
  * `{create blockBreakEvent}`：插件是否为该命令破坏的每个方块生成 blockBreakEvent
  * `[smelt]`：（可选）（默认 = false）使用 SMELT 命令的逻辑。如果方块可以被熔炼，则掉落熔炼后的版本。否则，将正常掉落被破坏的方块。
* 示例：

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* 信息：选取指定半径内的实体，并让它们执行命令
* 命令设置
  * `{distance}`：命令选取实体的半径范围
  * `{displayMsgIfNoEntity}`：（true 或 false）当未能选中任何生物时，是否通知物品的使用者。
    * **设置为 false 可隐藏该消息**
  * `{throughBlocks}`：是否影响位于方块后面的生物
  * `{safeDistance}`：如果目标与发射者之间的距离小于或等于 safeDistance 的值，则该目标不会受到影响。
  * `{offsetYaw}`：你希望偏移所朝向的偏航角方向（与原点的偏航角值无关）
  * `{offsetPitch}`：你希望偏移所朝向的俯仰角方向（与原点的偏航角值无关）
  * `{offsetDistance}`：在计算出 offsetYaw 和 offsetPitch 之后，使用该值将 AROUND 命令的位置/中心点从原点的 xyz 位置移开。
  * `{limit}`：可被影响的目标数量
  * `{sort}`：对 limit 选项很有用。
    * NEAREST：选取距离原点最近的实体。
    * RANDOM：在命令范围内随机选取任意实体。
  * `{regionCheck}`：true/false。如果为 true，AROUND 命令会检查目标是在野外还是在施放者的领地内（GriefPrevention 插件的情境）（之后将更新为支持检查其他领地插件）
  * `{nonliving}`：true/false。如果为 true，它也会以箭矢和盔甲架等其他实体为目标。启用此参数时，运行实体命令所产生的任何错误很可能会因范围蔓延而被忽略。
  * 你可以在命令的任意位置添加以下之一，对实体设置黑名单或白名单：
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* 示例：

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

要在 WHITELIST/BLACKLIST 字段中使用实体 nbt，你需要安装 NBT API 插件

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

它支持 NBT 标签，因此你可以添加类似这样的内容：`ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* 信息：沿方块的朝向移动方块上方的所有实体（便于理解，就像传送带的作用）
* 无命令设置
* 示例：

```
- MOVE
```

:::info
**该命令仅适用于有朝向的方块。**
:::

### MOB\_NEAREST

* 信息：选取距离玩家/目标最近的生物。
* 命令设置
    * `{max accepted distance}`：“实体”可被接受的最大距离。
    * `{command(s)}`：将被执行的命令
* 示例：

伤害最近的玩家

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* 信息：选取距离玩家/目标最近的玩家。
* 命令设置
    * `{max accepted distance}`：“目标”可被接受的最大距离。
    * `{command}`：将被执行的命令
* 示例：

伤害最近的玩家

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* 打开或关闭可开启的方块。
* 无命令设置
* 示例：

```
- OPENDOOR
```

### OPMESSAGE

* 信息：向在线的 OP 玩家和控制台发送一条消息
* 命令设置
  * `{text}`：要发送的文本
* 示例：

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* 信息：在方块所在位置生成粒子
* 命令设置
  * `{type}`：粒子的类型。

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`：将生成的粒子数量
* `{offset}`：粒子可能在方块所在位置生成的区域半径
* `{speed}`：粒子的速度或大小
* 示例：

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* 信息：在某个位置放置液体。如果该位置有炼药锅，则将其装满。如果该位置有可含水的方块，则使其含水。否则，不执行任何操作
* 命令设置
  * `{type}`：液体类型（默认：WATER）。可选值：WATER/LAVA
* 示例：

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* 信息：以所选方块为基准，在正方形区域内种植。
* 命令设置
  * `{radius}`：正方形的半径
  * `{takeFromInv}`：默认 true，从玩家背包中获取种子，否则会自动生成种子
  * `{acceptEI}`：默认 false，种子接受 EI
  * `{cropType}`：默认接受所有种子（会根据种子在背包中的顺序获取）
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`：将种植区域从正方形变为立方体。适用于区域种植可可豆
* 示例：

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* 信息：移除方块，没有掉落物，仅仅是移除
* 无命令设置
* 示例：

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* 信息：出售箱子 / 熔炉 / 所有带有物品栏的方块中的全部内容。
* 命令设置
  * `{price_boost}`：被出售物品的浮点数倍率。例如这里的值为 2，则被出售的物品会给你两倍的售价。
  * `{deleteUnsellable}`：布尔值，用于设置是否删除无法出售的物品
* 示例：

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
它需要 ShopGUIPlus（优先）、Vault 和 CMI 价格
:::

### SETBLOCK

* 信息：用另一种方块替换目标方块
* 命令设置
  * `{material}`：要设置的材质
* 示例：

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* 信息：用临时方块替换目标方块。
* 命令设置
  * `{material}`：要设置的材质
  * `{time}`：时间，单位为 tick（20 tick = 1 秒）
* 示例：

```
- SETTEMPBLOCK STONE 100
```

:::warning
它不会替换带有额外数据（物品栏、朝向等）的方块
:::

### SET\_TEMP\_BLOCK\_POS

* 信息：用临时方块替换目标方块
* 命令：SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* 示例：

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
它不会替换带有额外数据（物品栏、朝向等）的方块
:::

### SETBLOCKPOS

* 信息：在指定位置设置方块
* 命令设置
  * `{x}`：方块的 X 坐标
  * `{y}`：方块的 Y 坐标
  * `{z}`：方块的 Z 坐标
  * `{material}`：方块类型
  * `{bypassWG}`：WorldGuard 是否会干扰该方块的放置
* 示例：

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* 信息：与 setblock 命令类似，但用于 Executable Blocks
* 命令设置
  * `{id}`：Executable Block 的 ID
  * `{x}`：X 坐标
  * `{y}`：Y 坐标
  * `{z}`：Z 坐标
  * `{world}`：你希望 Executable Block 所在的世界
  * `{replace}`：是否替换该位置上已存在的方块
  * `{bypassProtection}`：（默认 false）即使该位置存在来自插件的地形保护，是否仍要替换该方块。
  * `[ownerUUID]`：（可选）（默认 = 无所有者）将成为该 eb 所有者的玩家的 uuid
* 示例：

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* 信息：收集事件所涉及的刷怪笼
* 无命令设置
* 示例：

```
- SILK_SPAWNER
```

:::info
SILK\_SPAWNER 命令仅与以下插件兼容：

* RoseStacker
* WildStacker

当然还有原版刷怪笼。
:::

### SMELT

* 信息：熔炼目标方块并掉落熔炼后的物品，例如 iron\_ore -> iron\_ingot，它支持时运，如果无法被熔炼则不会发生任何事。方块的战利品不会改变。
* 命令设置
  * `[generateEvent]`：（可选）（默认 = true）是否生成方块破坏事件
* 示例：

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* 信息：在运行该命令的方块处劈下一道不造成伤害的闪电
* 无命令设置
* 示例：

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* 信息：一次方块破坏即可破坏整条矿脉的方块
* 命令设置
  * `{maxVeinSize}`：（默认 = 10）该命令可破坏的最大方块数量
  * `[createBBEvent]`：（可选）（默认 = true）是否生成方块破坏事件
  * `[smelt]`：（可选）（默认 = false）使用 SMELT 命令的逻辑。如果方块可以被熔炼，则掉落熔炼后的版本。否则，将正常掉落被破坏的方块。
  * `[runActivatorOnBlocks]`：（可选）（默认 = false）仅限 ExecutableItems。如果为 true，矿脉中的方块也会运行启动该命令的激活器，参见 [runActivatorOnBlocks](#runactivatoronblocks)。请保持 `createBBEvent` 为 true。
* 示例：

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` 不是 VEIN\_BREAKER 的设置。游戏内编辑器的旧模板曾写入 `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`：其中的 `triggerEvent:true` 部分没有任何效果，你可以将其移除。要选择该命令是否生成方块破坏事件，请使用 `createBBEvent`。
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` 是 VEIN\_BREAKER、[MINEINCUBE](#mineincube) 和 [FARMINCUBE](#farmincube) 的一个设置。仅 ExecutableItems 会读取它。

* 不使用它时（默认 `false`），被该命令破坏的方块不会运行包含该命令的激活器：这正是防止方块破坏循环的原因。你的物品的其他激活器（不含破坏命令的那些）仍会对这些方块运行。
* 使用 `runActivatorOnBlocks:true` 时，该命令破坏的每个方块也会运行启动它的激活器，就如同玩家亲自破坏了它：激活器的条件、`desactiveDrops`（无原版掉落物）、其其他命令（例如 `DROPITEM`）、其 `usageModification` 以及其变量修改都会作用于每个方块。`cancelEvent: true` 同样适用：此时这些方块不会被破坏。
* 破坏命令不会对这些方块再次运行，因此不会产生循环。
* 冷却、每日使用次数以及所需功能（`requiredItems`、`requiredExecutableItems`、`requiredMoney`……）不会对这些方块进行检查：它们只会针对运行该激活器的那个方块检查并扣除一次。否则，冷却会在第一个方块之后就使矿脉停止。
* 激活器通过这些方块的方块破坏事件来接收它们：请让 `createBBEvent`（VEIN\_BREAKER）或 `{createEvent}`（MINEINCUBE）保持为 `true`，这是它们的默认值。FARMINCUBE 通过 `runActivatorOnBlocks:true` 自行生成这些事件，除非它的 `{event}` 参数为 `false`。
* 这些事件属于方块破坏，因此仅当该命令位于 PLAYER\_BLOCK\_BREAK 激活器中时才有效。

示例：矿脉中的每个方块都掉落 1 个钻石而不是其原版掉落物，并消耗 1 次使用次数。

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
