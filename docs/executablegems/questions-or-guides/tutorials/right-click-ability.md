---
sidebar_position: 3
description: Create an ExecutableGems gem with a right-click ability, a cooldown that shortens with the level and an area effect.
---

# 🌀 Add a right-click ability

We will make the **Shockwave Rune**: right-click to damage and throw the enemies around you, with a cooldown that gets shorter with the level.

![The Shockwave Rune in game](</img/executablegems/tuto-shockwave.jpg>)

## The file

Create `gems/custom/shockwave.yml`:

```yaml
name: '<#ffb347>Shockwave Rune'
color: '#ffb347'
model: 'cut:trillion'
max-level: 10
tiers: [3, 6, 9, 10]
exclusive-group: [right-click]
description:
  - '<gray>Right-click: a <#ffb347>shockwave</#ffb347> deals <white>%damage%</white> damage'
  - '<gray>within <white>%radius%</white> blocks (<white>%cooldown%s</white> cooldown)'
values:
  damage: '3 + 0.7 * level'
  radius: '3 + 0.3 * level'
  cooldown: '16 - level'
applicable-on: ['#weapons', 'ei:*']
apply: {chance: '100 - 3 * level', on-fail: DESTROY_GEM}
xp: {enabled: true, per-hit: 1, per-kill: 10, to-next: '15 + 10 * level'}
activators:
  wave:
    option: PLAYER_RIGHT_CLICK
    silenceOutput: true
    detailedSlots: [-1]
    playerConditions:
      ifSneaking: false
      ifSneakingMsg: ''
    cooldownFeatures:
      cooldown: '%gem_cooldown%'
      isCooldownInTicks: false
      displayCooldownMessage: true
      cooldownMsg: '<#ffb347>Shockwave <gray>recharging <dark_gray>(<white>%time_S%s<dark_gray>)'
    playerCommands:
      - 'eg sweep %player% %gem_cooldown%'
      - 'eg fx shockwave %player% %gem_radius% %gem_color%'
      - 'execute at %player% run playsound minecraft:entity.generic.explode player @a ~ ~ ~ 0.7 1.4'
      - 'MOB_AROUND distance:%gem_radius% displayMsgIfNoEntity:false throughBlocks:false DAMAGE %gem_damage% <+> JUMP 0.5'
```

## What's new

**`exclusive-group: [right-click]`** allows only one right-click gem per item, so two abilities never share a button. Sneak + right-click abilities use the group `sneak-right-click`.

**The condition** keeps the right-click free for the sneak + right-click abilities:

```yaml
playerConditions:
  ifSneaking: false
  ifSneakingMsg: ''
```

**The cooldown** uses a value, so it shortens with the level: 15 s at level 1, 6 s at level 10.

```yaml
cooldownFeatures:
  cooldown: '%gem_cooldown%'
  isCooldownInTicks: false
  displayCooldownMessage: true
```

**`eg sweep`** shows the cooldown on the item, like an ender pearl.

**The area command** hits everything around the player:

```yaml
- 'MOB_AROUND distance:%gem_radius% displayMsgIfNoEntity:false throughBlocks:false DAMAGE %gem_damage% <+> JUMP 0.5'
```

`<+>` separates the commands run on each target. To use a vanilla command there, the target is `%around_target_uuid%`.

## Test it

```
/eg reload
/give @s netherite_sword
/eg apply YourName shockwave 10
/eg dummy
```

Right-click near the dummy. The tooltip gives the numbers at each level:

![The tooltip of the Shockwave Rune](</img/executablegems/tip-shockwave.png>)
