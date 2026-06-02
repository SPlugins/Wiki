---
description: >-
  A Box of Ender Pearls — an item that stores ender pearls as a variable count.
  Right-click to deposit pearls from your inventory; shift-right-click to
  withdraw and throw one. Full YAML with variable-based inventory management.
---

# Box of Ender Pearls

<iframe width="560" height="315" src="https://www.youtube.com/embed/9tBQXcFV48A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

The box uses a **`pearls`** numeric variable to track how many ender pearls are stored
inside. Two activators on `PLAYER_ALL_CLICK` (separated by shift) handle depositing
and withdrawing:

| Action | What happens |
|---|---|
| **Right-click** (no shift) | Takes ender pearls from your hand and adds them to the count |
| **Shift + right-click** | Removes one pearl from the count and gives it back to you |

The item's lore shows the current count via `%var_pearls%` so players always know
what's stored.

---

## YAML

```yaml
name: '&2📦 Box of Ender Pearls'
lore:
  - '&7Stored pearls: &a%var_pearls%'
  - ''
  - '&eRight-click &7to deposit pearls in hand.'
  - '&eShift+Click &7to withdraw one pearl.'
material: SHULKER_SHELL
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
cancelEventIfNotOwner: false
usage: 0
usageLimit: -1
variables:
  pearls:
    type: NUMBER
    default: '0'
    display: 'Stored Pearls'

activators:
  # Deposit: right-click while holding ender pearls
  activator0:
    name: '&eDeposit pearls'
    option: PLAYER_ALL_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
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
    # Require player to hold ender pearls in main hand (at least 1)
    requiredItems:
      item0:
        material: ENDER_PEARL
        amount: 1
        cancelEventIfError: false
        errorMessage: '&cYou need ender pearls in hand to deposit!'
        detailedSlots:
          - 36  # main hand hotbar slot... adjust or use requiredItems per slot
    commands:
      - SEND_MESSAGE &a+1 pearl deposited. &7Total: &a%var_pearls%
    # Don't run if player is sneaking (that's the withdraw action)
    playerConditions:
      ifPlayerMustNotSneak: true
    placeholdersConditions: {}
    variablesModification:
      varUpdt0:
        variableName: pearls
        type: MODIFICATION
        modification: '1'
    worldConditions: {}
    itemConditions: {}

  # Withdraw: shift-right-click to take one pearl back
  activator1:
    name: '&eWithdraw pearl'
    option: PLAYER_ALL_CLICK
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: true
    updateName: false
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
    # Require at least 1 stored pearl
    placeholdersConditions:
      plcd0:
        placeholder: '%var_pearls%'
        comparator: '>='
        value: '1'
        messageIfNotValid: '&cNo pearls stored!'
    playerConditions:
      ifPlayerMustSneak: true
    commands:
      - [CONSOLE] give %player% ender_pearl 1
      - SEND_MESSAGE &e-1 pearl withdrawn. &7Remaining: &a%var_pearls%
    variablesModification:
      varUpdt0:
        variableName: pearls
        type: MODIFICATION
        modification: '-1'
    worldConditions: {}
    itemConditions: {}
```

:::warning
`variablesModification` runs **after** commands. So when the withdraw command fires,
`%var_pearls%` in the `SEND_MESSAGE` shows the value **before** the decrement.
Add `-1` mentally when reading the message, or flip the message to say "Withdrawn 1 — remaining: X-1".

Alternatively, display the count with `%var_pearls%` in the lore (which is updated
after the variable changes) rather than in the command message.
:::

---

## Bulk deposit variant

To deposit **all** ender pearls in the player's inventory at once (not just the ones
in hand), use a vanilla clear command and track the amount first:

```yaml
# This variant uses PlaceholderAPI + CheckItem extension to get item count
commands:
  - [CONSOLE] clear %player% ender_pearl 64
  - SEND_MESSAGE &aDeposited up to 64 pearls.
variablesModification:
  varUpdt0:
    variableName: pearls
    type: MODIFICATION
    modification: '64'    # simplification — may overshoot if fewer than 64 are held
```

For a precise count, use the **CheckItem** PAPI extension:
`%checkitem_mat:ender_pearl,amt:1,lore:none%` and derive the amount from
`%checkitem_amount_mat:ender_pearl%`.

---

## Tips

- Set a `usageLimit` on the box itself and reduce `usageModification: 1` on the
  deposit activator to make the box "fill up" over time (based on deposits).
- Display the current pearl count in both the item name and lore so it's always visible.
- Add a sound on deposit and withdrawal: `[CONSOLE] playsound minecraft:entity.enderman.teleport player %player% ~ ~ ~ 1 1.5`.
- Use `PLAYER_ALL_CLICK` without shift conditions for a simpler version where any click deposits or withdraws.
