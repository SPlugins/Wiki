---
sidebar_position: 3
description: How ExecutableItems activators work inside ExecutableGems gems - chance, slots, placeholders, cooldowns, targets, visual effects and limits.
---

# ⚡ Activators in gems

The effects of a gem are [ExecutableItems activators](../../executableitems/configurations/activator-configuration/list-of-the-activators.md), written exactly as in an ExecutableItem. For each level of the gem, the plugin compiles a hidden ExecutableItem with the numbers of that level.

```yaml
activators:
  strike:                      # any name
    option: PLAYER_HIT_ENTITY  # when it runs
    chance: '%gem_chance%'     # rolled by ExecutableGems
    silenceOutput: true
    detailedSlots: [-1]        # where the item must be
    entityCommands:            # what happens
      - 'DAMAGE %gem_damage%'
```

## Which activators work

All the activators ExecutableItems runs for an item in a slot. These are the ones used by the shipped gems:

| Option | When | Used on |
|---|---|---|
| `PLAYER_HIT_ENTITY` | You hit an entity | Weapons |
| `PLAYER_KILL_ENTITY` | You kill an entity | Weapons |
| `PLAYER_RIGHT_CLICK` | You right-click | Abilities |
| `PLAYER_RECEIVE_HIT_GLOBAL` | You take a hit | Armour |
| `PLAYER_BLOCK_BREAK` | You break a block | Tools |
| `PROJECTILE_HIT_ENTITY` | Your projectile hits an entity | Bows |

:::warning
`LOOP` activators do **not** run for gems. For a permanent bonus, use [`attributes`](gem-configuration.md#passive-bonuses).
:::

## Slots

`detailedSlots` says where the item must be for the activator to run. Always set it.

| Value | Slot |
|---|---|
| `[-1]` | Main hand |
| `[40]` | Off hand |
| `[-1, 40]` | Either hand (bows) |
| `[36]` `[37]` `[38]` `[39]` | Boots, leggings, chestplate, helmet |
| `[36, 37, 38, 39]` | Any armour piece |

## Chance

`chance` is read by ExecutableGems, not by ExecutableItems. It is a number or a formula, usually a value of the gem.

- A support gem can add to it.
- `/eg luck <player>` makes it always succeed, which is how you test a gem.
- If you leave it out, the activator always runs.

## Commands and targets

| Section | Who runs it | Examples |
|---|---|---|
| `playerCommands` | The player | `REGAIN_HEALTH 4`, `effect give %player% speed 3 0 true` |
| `entityCommands` | The target of the activator | `DAMAGE 5`, `effect give %entity_uuid% wither 3 0 true` |
| `blockCommands` | The block | `VEIN_BREAKER maxVeinSize:8 createBBEvent:true` |

You can use [SCore custom commands](../../tools-for-all-plugins-score/custom-commands/index.md), vanilla commands and commands of other plugins, as well as all the [placeholders](../../tools-for-all-plugins-score/placeholders.md).

:::warning
**The target of an area command**

Inside the commands of `MOB_AROUND` or `HITSCAN_ENTITIES`, the target is `%around_target_uuid%`, not `%entity_uuid%`.

```yaml
- 'MOB_AROUND distance:5 displayMsgIfNoEntity:false throughBlocks:false DAMAGE 7 <+> effect give %around_target_uuid% levitation 1 6 true'
```
:::

## Cooldowns

```yaml
cooldownFeatures:
  cooldown: '%gem_cooldown%'
  isCooldownInTicks: false
  displayCooldownMessage: true
  cooldownMsg: '<#ffb347>Shockwave <gray>recharging <dark_gray>(<white>%time_S%s<dark_gray>)'
```

Add `eg sweep %player% %gem_cooldown%` to the commands to show the vanilla cooldown animation on the item:

![The cooldown animation on a weapon](https://media.ssomar.com/m/docs-img-eg-ability-cooldown.jpg)

## Conditions

All the [conditions](../../tools-for-all-plugins-score/custom-conditions/index.md) work. The most common one separates right-click and sneak + right-click. An empty `ifSneakingMsg` means no message.

```yaml
playerConditions:
  ifSneaking: true
  ifSneakingMsg: ''
```

Limit the blocks of a `PLAYER_BLOCK_BREAK` with `detailedBlocks`, and cancel a hit with `cancelEvent: true`.

## Visual effects

The plugin adds [`eg fx` commands](../commands-and-permissions.md#for-your-activators):

```yaml
- 'eg fx burst %entity_uuid% %gem_color% 20'
- 'eg fx ring %player% 2 #a7b4c2'
- 'eg fx beam %entity_uuid% %player% #ff3b4e 16'
- 'eg fx spiral %player% #5ee6d0 24'
- 'eg fx shockwave %player% 4 #d08a3a'
```

## Good habits

- Always set `silenceOutput: true`, so commands don't write in the chat.
- Some effects heal undead mobs: `instant_damage` and dragon's breath do.
- `DAMAGE_RESISTANCE` with a **positive** value makes the target take **more** damage.
- Don't use `LAUNCH` for arrows that rain from the sky: players can pick them up. `eg rain` makes arrows that nobody can pick up.

## How strong should a gem be?

For a gem that adds damage on hit, the number to look at is **chance × damage**. A diamond sword hits for 7, a netherite one for 8, and Sharpness V adds 3.

| Gem at max level | Chance | Damage | Average per hit |
|---|---|---|---|
| Storm Rune | 25% | 12 | +3 |
| Blast Gem (on arrows) | 40% | 7 | +2.8 |
| Titan Rune (around the target) | 50% | 5 | +2.5 |
| Echo Rune | 32% | 6 | +1.9 |

The shipped gems stay under **+3 per hit** at level 10. See the [list of gems](../gems/overview.md) for all the numbers.
