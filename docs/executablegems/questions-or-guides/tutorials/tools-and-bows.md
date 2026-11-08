---
sidebar_position: 5
description: Create ExecutableGems gems for pickaxes and bows - effects when mining an ore or when an arrow hits, and the matching XP.
---

# ⛏️ Gems for tools and bows

Tools and bows work like weapons, with other triggers and other XP sources.

## A pickaxe gem: Prospector

Mining an ore can give Haste II. Create `gems/custom/prospector.yml`:

```yaml
name: '<#f2c14e>Prospector Gem'
color: '#f2c14e'
model: 'cut:marquise'
max-level: 10
tiers: [3, 6, 9, 10]
description:
  - '<gray>Mining an ore has <white>%chance%%</white> chance to grant'
  - '<#f2c14e>Haste II</#f2c14e> <gray>for <white>%seconds%s'
values:
  chance: '20 + 5 * level'
  seconds: '4 + level'
applicable-on: ['#pickaxes', 'ei:*']
apply: {chance: '100 - 2 * level', on-fail: KEEP_GEM}
xp: {enabled: true, per-block: 0.5, to-next: '15 + 10 * level'}
activators:
  rush:
    option: PLAYER_BLOCK_BREAK
    chance: '%gem_chance%'
    silenceOutput: true
    detailedSlots: [-1]
    detailedBlocks:
      blocks: [COAL_ORE, DEEPSLATE_COAL_ORE, IRON_ORE, DEEPSLATE_IRON_ORE, GOLD_ORE, DEEPSLATE_GOLD_ORE, DIAMOND_ORE, DEEPSLATE_DIAMOND_ORE]
    playerCommands:
      - 'effect give %player% haste %gem_seconds% 1 true'
      - 'execute at %player% run playsound minecraft:block.amethyst_block.chime player @a ~ ~ ~ 1 1.5'
```

- **`PLAYER_BLOCK_BREAK`** runs when a block is broken.
- **`detailedBlocks`** limits it to the listed blocks.
- **`xp.per-block`** gives XP for each block mined.
- **`on-fail: KEEP_GEM`**: a failed socketing gives the gem back.

![The Prospector Gem on a pickaxe](</img/executablegems/host-pick.png>)

The block is available in the commands: `%block_x_int%`, `%block_y_int%`, `%block_z_int%` and `%block_world%`. For instance, the Geode Gem drops a stone where the block was:

```yaml
- 'eg drop rough_gem %block_world% %block_x_int% %block_y_int% %block_z_int%'
```

## A bow gem: Thornshot

Arrows deal more damage and root the target. Create `gems/custom/thornshot.yml`:

```yaml
name: '<#7bc96f>Thornshot Gem'
color: '#7bc96f'
model: 'cut:pear'
max-level: 10
tiers: [3, 6, 9, 10]
description:
  - '<gray>Arrows deal <white>+%damage%</white> damage and'
  - '<#7bc96f>root</#7bc96f> <gray>the target for <white>%seconds%s'
values:
  damage: '1 + 0.4 * level'
  seconds: '1 + floor(level / 3)'
applicable-on: ['#bows', 'ei:*']
apply: {chance: '100 - 3 * level', on-fail: DESTROY_GEM}
xp: {enabled: true, per-hit: 2, per-kill: 10, to-next: '15 + 10 * level'}
activators:
  root:
    option: PROJECTILE_HIT_ENTITY
    silenceOutput: true
    detailedSlots: [-1, 40]
    entityCommands:
      - 'DAMAGE %gem_damage%'
      - 'effect give %entity_uuid% slowness %gem_seconds% 5 true'
      - 'eg fx ring %entity_uuid% 1.2 %gem_color%'
```

- **`PROJECTILE_HIT_ENTITY`** runs when an arrow hits.
- **`detailedSlots: [-1, 40]`** works with the bow in either hand.
- **`per-hit`** counts the arrows that hit.

![The Thornshot Gem on a bow](</img/executablegems/host-bow.png>)

## Test them

```
/eg reload
/give @s netherite_pickaxe
/eg apply YourName prospector 10
/give @s bow
/give @s arrow 64
/eg apply YourName thornshot 10
```

Hold the item when you run its `/eg apply`. Run `/eg luck YourName on` to see the effect every time.
