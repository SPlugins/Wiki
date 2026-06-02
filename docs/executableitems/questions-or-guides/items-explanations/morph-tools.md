---
description: >-
  A multi-tool that cycles through different tool types on Shift+Right-click —
  sword, pickaxe, shovel, and back. Each state is a separate EI item;
  cycling replaces the slot with the next item in the chain.
---

# Morph Tools

A Morph Tool is an item that **cycles through different tool states** when the player
presses Shift+Right-click. Each state is a distinct ExecutableItem, and a `giveslot`
command swaps the current state for the next one in the same inventory slot.

---

## How it works

1. Each tool state (Sword, Pickaxe, Shovel, …) is a **separate EI item**.
2. Every state has a `PLAYER_ALL_CLICK` activator with the **sneaking** condition.
3. `usageModification: -1` is set on the activator → when `usage` drops from `0` to
   `-1`, the item disappears from the inventory.
4. **Before** the item disappears, a `[CONSOLE] ei giveslot` command places the **next**
   state in the same slot. Net result: the old state vanishes, the new state appears.

:::tip
Set `unbreakable: true` on every state. If a state breaks (durability reaches 0), it
disappears permanently and the cycle is broken.
:::

---

## Example cycle: Sword → Pickaxe → Shovel → Sword

Create three items with `/ei create morph_sword`, `/ei create morph_pickaxe`, and
`/ei create morph_shovel`. Apply the YAML below to each in turn.

### morph_sword.yml

```yaml
name: '&c⚔ Morph Tool &7[Sword]'
lore:
  - '&7Shift+Right-click to cycle.'
  - '&8→ &7Next: &aPickaxe'
material: WOODEN_SWORD
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
unbreakable: true
variables: {}

activators:
  activator0:
    name: '&eCycle to Pickaxe'
    option: PLAYER_ALL_CLICK
    usageModification: -1          # usage 0 → -1 removes this item
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
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
    playerConditions:
      ifSneaking: true             # Shift+click triggers the cycle
      ifSneakingMsg: ''
    commands:
      # Give the NEXT state in the same slot — runs before this item disappears
      - [CONSOLE] ei giveslot %player% morph_pickaxe 1 %player_slot%
    variablesModification: {}
    worldConditions: {}
    itemConditions: {}
    placeholdersConditions: {}
```

### morph_pickaxe.yml

Same activator structure — only the command changes to give the next state:

```yaml
name: '&b⛏ Morph Tool &7[Pickaxe]'
lore:
  - '&7Shift+Right-click to cycle.'
  - '&8→ &7Next: &6Shovel'
material: WOODEN_PICKAXE
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
unbreakable: true
variables: {}

activators:
  activator0:
    name: '&eCycle to Shovel'
    option: PLAYER_ALL_CLICK
    usageModification: -1
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
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
    playerConditions:
      ifSneaking: true
      ifSneakingMsg: ''
    commands:
      - [CONSOLE] ei giveslot %player% morph_shovel 1 %player_slot%
    variablesModification: {}
```

### morph_shovel.yml

The last state loops back to the first:

```yaml
name: '&6🪵 Morph Tool &7[Shovel]'
lore:
  - '&7Shift+Right-click to cycle.'
  - '&8→ &7Next: &cSword'
material: WOODEN_SHOVEL
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
unbreakable: true
variables: {}

activators:
  activator0:
    name: '&eCycle to Sword'
    option: PLAYER_ALL_CLICK
    usageModification: -1
    cancelEvent: true
    silenceOutput: true
    autoUpdateItem: false
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
    playerConditions:
      ifSneaking: true
      ifSneakingMsg: ''
    commands:
      - [CONSOLE] ei giveslot %player% morph_sword 1 %player_slot%
    variablesModification: {}
```

---

## Give players the starting item

```
/ei give <player> morph_sword 1
```

The player then cycles through Sword → Pickaxe → Shovel → Sword by pressing
Shift+Right-click with any of the states in hand.

---

## Tips

- **Enchantments**: add them directly in each state's YAML (under `enchantments:`).
  Enchantments are not preserved across the cycle unless they're baked into each state's
  config, because each cycle replaces the item entirely.
- **More states**: add as many items as you like — just extend the chain. The last item
  gives back the first.
- **Cycle trigger**: change `PLAYER_ALL_CLICK` to `PLAYER_RIGHT_CLICK` or
  `PLAYER_LEFT_CLICK` if you want a single-click trigger instead of Shift+click.
- **Custom tools**: use any material — this pattern works equally well for cycling
  between custom-textured items, different weapon types, or even non-tool items.

:::note
Item made by Special70
:::
