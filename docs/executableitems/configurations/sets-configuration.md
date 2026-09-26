---
sidebar_position: 3
---

# 🛡️ Sets (bonus by pieces worn)

A **set** gives bonuses to a player who wears several ExecutableItems together: 2 pieces give a first bonus, 4 pieces a stronger one, and so on. The bonuses are active only while the pieces are worn, and they are removed cleanly as soon as a piece is taken off.

One file per set in `plugins/ExecutableItems/sets/`, the file name is the set id. Reload with `/ei reload`. An `Example_Set.yml` (disabled) is created the first time.

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

### How it behaves

* **Tiers add up**: with 4 pieces, the tiers 2 and 4 are both active. For the same potion effect, the strongest level wins.
* **Effects and attributes** stay while the tier holds and are removed when it is lost. They are put back automatically if something removes them (milk, `/effect clear`, death with keepInventory...). A stronger potion drunk over a set effect takes priority, and the set effect comes back when it ends.
* **enterCommands / leaveCommands** run only when the player puts a piece on or takes it off. They do not run when the player joins or quits, nor on `/ei reload`: use them for feedback (message, sound, particles). For a lasting bonus, use `potionEffects`, `attributes` or `loopCommands`.
* The set bonuses are never saved on the player: they are removed when he quits, on reload and when the server stops, and given back when he joins.
* Placeholders in the commands: `%set_id%`, `%set_name%`, `%set_pieces%`, `%set_max_pieces%`, `%set_tier%`, and the usual player placeholders.

### Placeholders (PlaceholderAPI)

* `%executableitems_set_<id>%`: number of pieces of the set the player wears.
* `%executableitems_set_<id>_tier%`: highest active tier (number of pieces), `0` if none.

They can be used in the conditions of the activators of the pieces themselves, for example a stronger ability with the full set: `placeholdersConditions` with `%executableitems_set_Coven_Witch% >= 4`.

### Commands

* `/ei sets`: the loaded sets. `/ei sets <player>`: what this player wears and his active tier for each set. Permission `ei.cmd.sets`.

### Performance

Nothing runs for every player at every tick. An equipment change marks the player and his pieces are counted once on the next tick, only in the slots the sets use. On Paper the armor change event catches every change; on Spigot, and when a set uses the hands, a light check runs every 2 seconds. The `loopCommands` of all players share one task.
