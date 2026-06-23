---
description: >-
  Create a custom TNT block using ExecutableBlocks — a block that explodes when
  broken, complete with a full YAML example and step-by-step guide.
---

# Custom TNT

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZZuu5Z5BcOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## What this does

A custom TNT block works by using the **`PLAYER_BREAK`** activator combined with the
**`EXPLODE`** block command. When a player breaks the block, the plugin:

1. Catches the break event.
2. Cancels the normal break (no item drops, no vanilla break effect).
3. Removes the Executable Block from the placed-block registry.
4. Spawns a primed TNT entity at the block's position.

The result is a block that detonates immediately when mined — no flint-and-steel
required, no vanilla TNT involved.

---

## Step-by-step

### 1. Create the block

```
/eb create custom_tnt
```

This creates `plugins/ExecutableBlocks/blocks/custom_tnt.yml` and opens the editor.

### 2. Set the material

In the editor, set **Material** to `TNT` (or any material you prefer).

### 3. Add the PLAYER\_BREAK activator

Add an activator with type **`PLAYER_BREAK`** and add the `EXPLODE` block command.

Or write the YAML directly:

```yaml
material: TNT
name: '&c💥 Custom TNT'
lore:
  - '&7Break me to detonate!'

activators:
  activator0:
    name: '&eExplode on break'
    option: PLAYER_BREAK
    cancelEvent: true             # Prevent normal break so no item drops
    blockCommands:
      - EXPLODE                   # Break the block and spawn primed TNT here
    playerCommands:
      - SEND_MESSAGE &cBOOM!
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false

config_update: true
```

:::info
`EXPLODE` is a **block command** — it runs in the context of the block's position.
It breaks the block naturally and spawns a primed TNT entity at the same location.
:::

### 4. Reload and give yourself the block

```
/eb reload
/eb give <yourName> custom_tnt 1
```

### 5. Place and break it

Place the block, then hit it with your hand or a tool. The block breaks and a TNT
entity spawns immediately — lighting the fuse and detonating after the standard 4-second delay.

---

## Variations

### Instant explosion (no fuse delay)

To skip the fuse and detonate instantly you can use a vanilla command alongside `EXPLODE`:

```yaml
blockCommands:
  - EXPLODE
playerCommands:
  - minecraft:execute at %player% run summon tnt ~ ~ ~ {Fuse:1}
```

This spawns a second TNT with a 1-tick fuse on top of the primed one, creating a near-instant double explosion.

### Require a tool to detonate

Use `playerConditions` to only detonate if the player is holding a specific item:

```yaml
activators:
  activator0:
    name: '&eTool-activated TNT'
    option: PLAYER_BREAK
    cancelEvent: true
    playerConditions:
      requiredItems:
        tool:
          material: FLINT_AND_STEEL
          amount: 1
    blockCommands:
      - EXPLODE
    playerCommands:
      - SEND_MESSAGE &c&lBOOM!
```

---

## See also

- [Block Commands](/tools-for-all-plugins-score/custom-commands/block-commands) — full list of commands that run in block context, including `EXPLODE`.
- [List of Activators](/executableblocks/configurations/activator-configuration/list-of-the-activators) — all EB activator types.
- [Activator Features](/executableblocks/configurations/activator-configuration/activators-features) — conditions, cooldowns, and more.
