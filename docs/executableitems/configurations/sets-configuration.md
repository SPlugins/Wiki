---
sidebar_position: 3
---

# 🛡️ Sets (bonus by pieces worn) <CustomTag type="premium" />

:::info Premium
Sets need the premium version of ExecutableItems. With the free version, the files of the `sets` folder are not loaded (the console says so at each reload) and `/ei sets` explains it.
:::

A **set** gives bonuses to a player who wears several ExecutableItems together: 2 pieces give a first bonus, 4 pieces a stronger one, and so on. The bonuses are active only while the pieces are worn, and they are removed cleanly as soon as a piece is taken off.

Sets replace the old method with a LOOP on one piece and `ifHasExecutableItems` conditions ([Armor Set Bonus](/executableitems/questions-or-guides/methods-or-template/armor-set-bonus)): the bonus comes the tick the last piece is put on and leaves the tick one is taken off, with several tiers, and nothing runs while the equipment does not change.

## Create a set

1. Create a file in `plugins/ExecutableItems/sets/`. The file name is the set id: `Coven_Witch.yml` gives the set `Coven_Witch`.
2. List the ExecutableItems ids of the pieces and the tiers (see the example below).
3. Run `/ei reload`. The errors of the file (unknown item, effect or attribute...) are shown in the console and to the player who ran the reload.
4. Check with `/ei sets <player>` while wearing the pieces.

An `Example_Set.yml` (with `enabled: false`) is created the first time ExecutableItems starts. The items must exist: the sets are loaded after the items.

## Example

```yaml
enabled: true
name: '&2Coven Witch'
silenceOutput: true           # hide the console feedback of the commands
pieces:                       # ExecutableItems ids, each one counts once
  - Prem_Witch_Hat_v1_21      # by default a piece counts in the armor slots
  - Prem_Coven_Robe_v1_21
  - Prem_Coven_Skirt_v1_21
  - item: Prem_Coven_Wand_v1_21
    slots: [MAINHAND, OFFHAND]   # HEAD, CHEST, LEGS, FEET, OFFHAND, MAINHAND
tiers:                        # key = number of pieces; the tiers add up
  2:
    potionEffects:            # TYPE[:amplifier[:particles]]
      - SPEED:0
    enterCommands:            # player commands when the tier is reached
      - 'SENDMESSAGE &2%set_name% &7(%set_pieces%/%set_max_pieces%): Speed I'
    leaveCommands:            # player commands when the tier is lost
      - 'SENDMESSAGE &7%set_name%: bonus lost'
  4:
    potionEffects:
      - SPEED:1               # the strongest level of an effect wins
    attributes:               # ATTRIBUTE:amount[:ADD_NUMBER|ADD_SCALAR|MULTIPLY_SCALAR_1]
      - 'MAX_HEALTH:4'
    loopCommands:             # player commands every loopDelay ticks while the tier holds
      - 'MOB_AROUND distance:5 DAMAGE 2'
    loopDelay: 40
```

## Settings

### Set

| Setting | Default | Info |
|---|---|---|
| `enabled` | `true` | `false` keeps the file without loading the set. |
| `name` | the id | Display name (color codes allowed), used by `%set_name%` and `/ei sets`. |
| `silenceOutput` | `false` | Hides the console feedback of the set commands. |
| `pieces` | | The pieces, at least one. `- <EI id>` counts in the armor slots (HEAD, CHEST, LEGS, FEET). `- item: <EI id>` with `slots: [...]` chooses the slots, for example a weapon in `MAINHAND`. A piece listed twice counts once. |
| `tiers` | | The tiers, the key is the number of pieces (from 1 to the number of pieces). A set without tiers only counts the pieces (placeholders). |

### Tier

| Setting | Default | Info |
|---|---|---|
| `potionEffects` | | `TYPE[:amplifier[:particles]]`: `SPEED` (amplifier 0 = Speed I), `STRENGTH:1`, `REGENERATION:0:true` (with particles). Vanilla names (`minecraft:speed`) work too. |
| `attributes` | | `ATTRIBUTE:amount[:operation]`: `MAX_HEALTH:4`, `MOVEMENT_SPEED:0.1:ADD_SCALAR`. The operation is `ADD_NUMBER` (default), `ADD_SCALAR` or `MULTIPLY_SCALAR_1`. Needs 1.9+. |
| `enterCommands` | | [Player commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands) when the tier is reached. |
| `leaveCommands` | | Player commands when the tier is lost. |
| `loopCommands` | | Player commands every `loopDelay` ticks while the tier holds (not while the player is dead). |
| `loopDelay` | `20` | Ticks between two runs of `loopCommands` (1 or more). |

## How it behaves

* **Tiers add up**: with 4 pieces, the tiers 2 and 4 are both active. For the same potion effect, the strongest level wins.
* **Effects and attributes** stay while the tier holds and are removed when it is lost. They are put back automatically if something removes them (milk, `/effect clear`, death with keepInventory...). A stronger potion drunk over a set effect takes priority, and the set effect comes back when it ends. On 1.19.4+ the set effects are infinite (no blinking timer).
* **enterCommands / leaveCommands** run only when the player puts a piece on or takes it off. They do not run when the player joins or quits, nor on `/ei reload`: use them for feedback (message, sound, particles). For a lasting bonus, use `potionEffects`, `attributes` or `loopCommands`. When several tiers change at once, the lost tiers run their `leaveCommands` first (highest first), then the new tiers run their `enterCommands` (lowest first).
* The set bonuses are never saved on the player: they are removed when the player quits, on reload and when the server stops, and given back when the player joins. After a crash, leftover set effects are cleaned at the next join.
* Placeholders in the commands: `%set_id%`, `%set_name%`, `%set_pieces%`, `%set_max_pieces%`, `%set_tier%`, and the usual [player placeholders](/tools-for-all-plugins-score/placeholders).

:::tip
A set piece stays a normal ExecutableItem: its own activators, attributes and conditions work as usual. Use the set for the bonus of wearing the pieces together, and the activators of the pieces for their own abilities.
:::

## Placeholders (PlaceholderAPI)

* `%executableitems_set_<id>%`: number of pieces of the set the player wears.
* `%executableitems_set_<id>_tier%`: highest active tier (number of pieces), `0` if none.

They can be used in the conditions of the activators of the pieces themselves, for example a stronger ability with the full set:

```yaml
activators:
  full_set_spell:
    option: PLAYER_RIGHT_CLICK
    placeholdersConditions:
      full_set:
        type: PLAYER_NUMBER
        part1: '%executableitems_set_Coven_Witch%'
        comparator: SUPERIOR_OR_EQUALS
        part2: '4'
    playerCommands:
      - 'SENDMESSAGE &2Full coven power!'
```

## Commands

* `/ei sets`: the loaded sets. `/ei sets <player>`: what this player wears and the active tier of each set. Permission `ei.cmd.sets`.

## Performance

Nothing runs for every player at every tick. An equipment change marks the player and the pieces are counted once on the next tick, only in the slots the sets use. On Paper the armor change event catches every change; on Spigot, and when a set uses the hands, a light check runs every 2 seconds, spread over the players. The `loopCommands` of all players share one task. Without any file in `sets/`, nothing runs at all.
