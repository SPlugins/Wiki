---
description: >-
  介绍 ExecutableItems 插件中激活器的各项功能，包括 Detailed slots、Auto update
  item、世界条件、占位符条件、物品条件、otherEICooldowns 冷却设置，以及按激活器类型划分的专属功能，帮助你制作从简单到复杂的物品。
source_hash: c1b2157347497341
translated_at: '2026-11-13T17:59:18.046Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# 激活器功能

以下所有功能都位于激活器内部。提醒一下，激活器允许你在 ExecutableItem 上执行自定义操作，它可以设置条件、运行命令、设置冷却等。

Premium 功能带有以下标签：<CustomTag type="premium" />

## 激活器的通用功能

<GeneralActivatorsFeatures />

## EI 激活器的功能

### Detailed slots

* 说明：整数值列表，表示激活器可以生效的物品栏槽位。也就是说，如果事件发生在不在此列表中的槽位，激活器就不会被触发。

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* 说明：激活器的此功能会让物品按列表中的某个功能进行更新。请注意！根据你的需求，这可能并不必要。有些内容会自动更新，例如激活器上的命令、条件、冷却等，无需此功能即可自动更新。
* 此功能主要针对物品的外观部分。例如，你曾经创建了一个 id 为 ex\_sword、显示名称为 "\&dExcalibur" 的 ExecutableItem，并把它分发给了所有玩家，现在你希望所有 "ex\_sword" 的 ExecutableItems 都使用新的显示名称 "\&eEpic Sword"，那么你需要在该物品的某个激活器上启用此功能：启用此功能（autoUpdateItem）并同时启用更新名称的功能（updateName）。
* 为了确保说明清楚：此功能会根据你启用的选项，用配置文件中的当前值覆盖物品上的现有值，并且仅用于外观相关的功能。对于不涉及此功能选项的常规修改，则无需使用。
  * `autoUpdateItem`：布尔值，表示该激活器是否启用此功能。
  * `updateName`：布尔值，用于更新 ExecutableItem 的显示名称。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的物品名称覆盖物品当前的显示名称。
  * `updateLore`：布尔值，用于更新 ExecutableItem 的描述（lore）。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的 lore 覆盖物品当前的 lore。
  * `updateDurability`：布尔值，用于更新 ExecutableItem 的当前耐久度。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的耐久度覆盖物品当前的耐久度。
  * `updateAttributes`：布尔值，用于更新 ExecutableItem 的所有属性。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的属性覆盖物品当前的属性。
  * `updateEnchants`：布尔值，用于更新 ExecutableItem 的附魔。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的附魔覆盖物品当前的附魔。
  * `updateCustomModelData`：布尔值，用于更新 ExecutableItem 的 CustomModelData 值。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的 customModelData 值覆盖物品当前的 CustomModelData。
  * `updateArmorSettings`：布尔值，用于更新 ExecutableItem 的盔甲设置。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的盔甲设置覆盖物品当前的盔甲设置。例如（盔甲颜色）
  * `updateMaterial`：布尔值，用于更新 ExecutableItem 的物品类型（material）。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的 material 覆盖物品当前的 material。
  * `updateHiders`：布尔值，用于更新 ExecutableItem 的 Hiders 配置。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的 Hiders 设置覆盖当前的 Hiders 配置。
  * `updateEquippable`：布尔值，用于更新 ExecutableItem 的 Hiders 配置。如果为 true，它会用 ExecutableItem 配置文件中当前/更新后的 equippable 设置覆盖物品当前的 equippable 组件。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* 说明：你可以在所有类型的激活器中使用这些条件
* [世界条件](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* 说明：你可以在所有类型的激活器中使用这些条件
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* 说明：你可以在所有类型的激活器中使用这些条件
* [物品条件](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* 说明：此功能允许对特定的 ExecutableItems（以及可选的特定激活器）应用玩家冷却。
  * `executableItem`：要应用冷却的 ExecutableItem 的 ID。
  * `activators`：字符串列表，内容为你想要对指定 ExecutableItem 应用冷却的激活器的 ID。如果没有选择任何激活器，则冷却会应用于指定 ExecutableItem 的所有激活器。
  * `cooldown`：整数值，表示将应用的冷却时长。
  * `isCooldownInTicks`：布尔值，表示冷却值的单位是秒还是 ticks。（20 ticks = 1 秒）
* 提示：
  * 你可以指定运行此功能的 ExecutableItem 本身。例如，你希望从一个激活器对同一物品中的另一个激活器应用冷却。
  * 另一个思路是：如果使用了某个与伤害相关的物品，就对所有与伤害相关的物品应用冷却。
  * 再举一个例子：使用此功能让玩家在多个不同的 ExecutableItems 中选择一个。当玩家选择并触发其中一个后，既不能再使用已选择的那个（因为它处于冷却中），也不能使用其他的（因为它们同样处于冷却中）。
* 示例：

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## 按激活器类型划分的专属功能

为了让各功能的适用范围更容易理解，我们创建了 4 种类别来对激活器进行分组。如果某个功能提到了这些类别之一，你就知道该功能适用于该类别中的所有激活器。

* <CustomTag type="player_block" />：描述涉及触发 ExecutableItem 的玩家以及激活器中涉及的方块的激活器。缩写 \[P\_B]
  * PLAYER\_ALL\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * 等等，更多信息请参阅 [激活器信息](list-of-the-activators)
* <CustomTag type="player_entity" />：描述涉及触发 ExecutableItem 的玩家以及激活器中涉及的实体的激活器。缩写 \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH（实体是被发射的投射物） <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * 等等，更多信息请参阅 [激活器信息](list-of-the-activators)
* <CustomTag type="player_target" />：描述涉及触发 ExecutableItem 的玩家以及另一名玩家（称为“目标”，被视为目标或敌人）的激活器。缩写 \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * 等等，更多信息请参阅 [激活器信息](list-of-the-activators)
* <CustomTag type="specific_activators" /> 如果某个功能包含跨越不同类别的激活器，那么为了便于理解，最好创建一个新的临时列表，并在该功能中加以说明。缩写 \[S\_A]

## 适用于 \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## 适用于 \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## 适用于 \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## 适用于 \[S\_A] <CustomTag type="specific_activators" />
 
<TargetItemFeatures />
* 适用于：
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* 激活器类别：特定激活器列表
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* 说明：与投射物相关的激活器功能，它决定激活器是否应该对并非由同一个 EI 发射的投射物运行。
  * 例如，有一个激活器 PROJECTILE\_HIT\_ENTITY，detailedSlots: \[all slots]，并且 playerCommands: \["say hi"]
    * 如果启用此功能，则只有当该 ExecutableItem 还有另一个包含 LAUNCH 命令的激活器时才会生效，也就是说，投射物由该 EI 发射后才会满足条件
    * 如果禁用此功能，所有投射物都会运行该激活器，例如：原版弓、原版雪球、其他 ExecutableItems 的投射物，以及该 ExecutableItem 自身的投射物。
* 重要：当 `mustBeAProjectileLaunchWithTheSameEI` 为 `true` 时，插件无法 100% 确定发射时是哪个具体的物品栏槽位持有该物品。它会激活在玩家物品栏中找到的第一个匹配的 EI 副本。因此，**请务必将激活器的 `detailedSlots` 配置为包含所有槽位**，不要仅限制为主手。如果激活器仅限主手，当匹配的物品先从其他槽位被评估时，可能无法触发。
  * 示例：

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* 适用于：
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* 适用于：
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* 适用于：
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* 适用于：
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* 适用于
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* 适用于：
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* 适用于：
  * LOOP

<InputFeatures />
* 适用于：
  * PLAYER_INPUT
