---
sidebar_position: 4
description: Create an armour gem in ExecutableGems with a passive attribute bonus and an effect when the wearer is hit.
---

# 🛡️ Create an armour gem

We will make the **Ironbark Ward**: more armour, and a chance to gain Resistance when you are hit.

![The Ironbark Ward in a chestplate](https://media.ssomar.com/m/docs-img-eg-host-chest.png)

## The file

Create `gems/custom/ironbark.yml`:

```yaml
name: '<#8a6a3f>Ironbark Ward'
color: '#8a6a3f'
color2: '#b6e36b'
model: 'cut:emerald'
max-level: 10
tiers: [3, 6, 9, 10]
description:
  - '<gray>+<white>%armor%</white> armour'
  - '<gray>Hits taken have <white>%chance%%</white> chance to grant'
  - '<#b6e36b>Resistance</#b6e36b> <gray>for <white>%seconds%s</white> (<white>%cooldown%s</white> cooldown)'
values:
  armor: '0.5 + 0.2 * level'
  chance: '10 + 2 * level'
  seconds: '2 + floor(level / 4)'
  cooldown: '20 - level'
applicable-on: ['#armor', 'ei:*']
apply: {chance: '100 - 2 * level', on-fail: DESTROY_GEM}
xp: {enabled: true, per-hit-taken: 2, per-kill: 3, to-next: '15 + 10 * level'}
obtain: {weight: 8}
attributes:
  - {attribute: ARMOR, amount: '0.5 + 0.2 * level', operation: ADD_NUMBER, slot: AUTO}
activators:
  harden:
    option: PLAYER_RECEIVE_HIT_GLOBAL
    chance: '%gem_chance%'
    silenceOutput: true
    detailedSlots: [36, 37, 38, 39]
    cooldownFeatures:
      cooldown: '%gem_cooldown%'
      isCooldownInTicks: false
      displayCooldownMessage: false
    playerCommands:
      - 'effect give %player% resistance %gem_seconds% 0 true'
      - 'eg fx ring %player% 1.5 #b6e36b'
      - 'execute at %player% run playsound minecraft:block.wood.place player @a ~ ~ ~ 1 0.6'
```

## What's new

**`attributes`** adds a real, permanent bonus, shown by the vanilla tooltip. `slot: AUTO` means the bonus works in the slot of the armour piece the gem is in.

```yaml
attributes:
  - {attribute: ARMOR, amount: '0.5 + 0.2 * level', operation: ADD_NUMBER, slot: AUTO}
```

:::info
`LOOP` activators don't run for gems. Use `attributes` for a permanent bonus, as here.
:::

**`detailedSlots: [36, 37, 38, 39]`** runs the activator wherever the gem is worn. Use one number to limit it to one piece: `38` is the chestplate.

**`PLAYER_RECEIVE_HIT_GLOBAL`** runs when the wearer takes a hit.

**`per-hit-taken`** gives XP when the wearer is hit.

## Armour has no sockets by default

Armour starts with 0 sockets, so players need a Socket Drill. To change that, edit `config.yml`:

```yaml
sockets:
  default-armor: 1
```

## Test it

```
/eg reload
/give @s netherite_chestplate
/eg apply YourName ironbark 8
```

`/eg apply` acts on the item in your main hand. Then wear the chestplate and get hit: with `/eg luck YourName on`, Resistance is granted on the first hit.
