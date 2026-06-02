---
description: >-
  Create infinite-use blocks (that respawn after a delay) or finite-use blocks
  (that deplete after N breaks) using ExecutableBlocks usage settings and the
  SETBLOCK/SETTEMPBLOCK commands.
---

# Infinite | Finite Blocks

<iframe width="560" height="315" src="https://www.youtube.com/embed/uXeEpd5N_R0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Infinite blocks — respawn after a delay (ExecutableBlocks)

An **infinite block** respawns at its original position after being broken. The trick
is:

1. `PLAYER_BREAK` activator fires when the block is broken.
2. `cancelEvent: false` lets the break happen (the block disappears).
3. `DELAY {seconds} → SETBLOCK {material}` puts it back after the delay.

### Example — Ore vein that respawns every 30 seconds

```yaml
material: DIAMOND_ORE
name: '&b♦ Infinite Diamond Ore'
lore:
  - '&7Respawns after 30 seconds.'
usage: -1     # -1 = infinite uses (never depletes)
usageLimit: -1

activators:
  activator0:
    name: '&eBreak and respawn'
    option: PLAYER_BREAK
    cancelEvent: false          # Allow the block to actually break
    blockCommands:
      - DELAY 30                # Wait 30 seconds
      - SETBLOCK DIAMOND_ORE    # Respawn the block
    playerCommands: []
    playerConditions: {}
    blockConditions: {}
```

`SETBLOCK` is a **block command** — it runs at the block's position and replaces the
broken block with the specified material. After the delay, the ore vein is back.

### Shorter respawn with particle effect

```yaml
blockCommands:
  - DELAY 10
  - SETBLOCK DIAMOND_ORE
  - SEND_PARTICLE_EFFECT_HERE   # Optional — add particles when block respawns
playerCommands:
  - SEND_MESSAGE &b♦ &7This vein will respawn in 10 seconds.
```

---

## Finite blocks — deplete after N breaks (ExecutableBlocks)

A **finite block** has a limited number of uses. After N breaks, it doesn't give
loot or respawn. Use `usageModification: -1` in the `PLAYER_BREAK` activator and
start with `usage: N`.

### Example — Ore cluster that drops 5 times then disappears

```yaml
material: GOLD_ORE
name: '&6♦ Gold Cluster &7(%usage% strikes left)'
lore:
  - '&7Can only be mined &a%usage% &7more times.'
usage: 5        # Starts with 5 uses
usageLimit: -1  # Usage can go below 0 (which destroys the block)

activators:
  activator0:
    name: '&eConsuming strike'
    option: PLAYER_BREAK
    usageModification: -1   # Each break removes 1 use; at 0→-1 block is destroyed
    cancelEvent: false
    blockCommands: []
    playerCommands:
      - SEND_MESSAGE &6♦ &7%usage% strikes remaining on this vein.
    playerConditions: {}
    blockConditions: {}
```

:::info
With `usage: 5` and `usageModification: -1`, after 5 breaks the usage drops to -1
and the block permanently disappears (no more loot, no respawn). The lore placeholder
`%usage%` updates automatically to show remaining charges.
:::

---

## Infinite placement item (ExecutableItems)

This is an EI item that acts as an "infinite block" from the *player* side: every
time you right-click to use it, the item gives itself back so you always have one.

### Example — Infinite torch placer

```yaml
name: '&e∞ Torch'
lore:
  - '&7Place torches endlessly.'
material: TORCH
glow: false
usage: 0
usageLimit: -1

activators:
  activator0:
    name: '&eAuto-replenish on place'
    option: PLAYER_RIGHT_CLICK
    usageModification: 0
    cancelEvent: false        # Let vanilla placement happen
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands:
      # Give back 1 copy so the item is never consumed
      - [CONSOLE] ei give %player% infinite_torch 1
    variablesModification: {}
```

---

## Finite placement item (ExecutableItems)

An EI item with a limited number of block placements. Each use decrements the charge.

```yaml
name: '&a⛏ Block Pack &7(%usage_remaining% left)'
lore:
  - '&7Contains &a%usage_remaining% &7stone blocks.'
  - '&7Right-click to place.'
material: STONE
glow: false
usage: 32       # 32 placements
usageLimit: -1

activators:
  activator0:
    name: '&ePlace block (consume charge)'
    option: PLAYER_RIGHT_CLICK
    usageModification: -1   # Each placement uses 1 charge
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: true
    updateName: true
    updateLore: true
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    commands: []
    variablesModification: {}
```

---

## Summary

| Pattern | Plugin | How |
|---|---|---|
| Infinite block (respawns) | ExecutableBlocks | `PLAYER_BREAK` + `DELAY N → SETBLOCK` |
| Finite block (depletes) | ExecutableBlocks | `usage: N` + `usageModification: -1` on BREAK |
| Infinite item (self-replenishes) | ExecutableItems | `PLAYER_RIGHT_CLICK` + `ei give` on each use |
| Finite item (limited charges) | ExecutableItems | `usage: N` + `usageModification: -1` on use |
