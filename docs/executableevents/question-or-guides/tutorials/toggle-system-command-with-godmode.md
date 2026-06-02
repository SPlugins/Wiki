---
description: >-
  Build a toggle command using ExecutableEvents — type /godtoggle (or any
  command) to turn god mode on and off. Uses PLAYER_WRITE_COMMAND with a
  SCore variable to track the on/off state per player.
---

# Toggle System / Command with God Mode

<iframe width="560" height="315" src="https://www.youtube.com/embed/ocm_t-kDxg0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

`PLAYER_WRITE_COMMAND` fires whenever a player sends a command. You can check `%arg0%`
(the command name without the `/`) to react to a specific command. Combine this with a
SCore per-player variable (`god_state: 0 or 1`) to implement a toggle.

Two activators handle the two states:
- **Activator 0** — fires on `/godtoggle` when state is OFF (0). Enables god mode.
- **Activator 1** — fires on `/godtoggle` when state is ON (1). Disables god mode.

---

## Step 1 — Create the SCore variable

```
/score variables-create god_state
```

Configure it:
- **Type**: NUMBER
- **For**: PLAYER
- **Default value**: 0 (off by default)

---

## Step 2 — Create the EE event

Run `/ee create godmode-toggle` and edit the YAML at
`plugins/ExecutableEvents/events/Default/godmode-toggle.yml`:

```yaml
enabled: true
editorIcon: TOTEM_OF_UNDYING
name: '&6God Mode Toggle'
disabledWorlds: []

activators:
  # Activator 0 — /godtoggle when god mode is OFF → turn ON
  activator0:
    name: '&eTurn god mode ON'
    option: PLAYER_WRITE_COMMAND
    cancelEvent: true            # Suppress the "Unknown command" message
    silenceOutput: true
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
    # Only fire for /godtoggle (or /gt as shorthand)
    detailedCommands:
      - godtoggle
      - gt
    # Only when god mode is currently off
    placeholdersConditions:
      plcd0:
        placeholder: '%score_var_god_state_int_%'
        comparator: '=='
        value: '0'
    # Require a permission to use the command
    playerConditions:
      ifHasPermission:
        - godmode.toggle
      ifHasPermissionMsg: '&cYou don''t have permission to toggle god mode.'
    commands:
      - score variables set player god_state 1 %player%
      - [CONSOLE] gamemode creative %player%
      - SEND_MESSAGE &6✦ &fGod mode &aON&f. &7(creative mode)
      - [CONSOLE] playsound minecraft:entity.player.levelup player %player% ~ ~ ~ 0.5 2

  # Activator 1 — /godtoggle when god mode is ON → turn OFF
  activator1:
    name: '&eTurn god mode OFF'
    option: PLAYER_WRITE_COMMAND
    cancelEvent: true
    silenceOutput: true
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
    detailedCommands:
      - godtoggle
      - gt
    # Only when god mode is currently on
    placeholdersConditions:
      plcd0:
        placeholder: '%score_var_god_state_int_%'
        comparator: '=='
        value: '1'
    playerConditions:
      ifHasPermission:
        - godmode.toggle
      ifHasPermissionMsg: '&cYou don''t have permission to toggle god mode.'
    commands:
      - score variables set player god_state 0 %player%
      - [CONSOLE] gamemode survival %player%
      - SEND_MESSAGE &6✦ &fGod mode &cOFF&f. &7(survival mode)
      - [CONSOLE] playsound minecraft:entity.player.hurt player %player% ~ ~ ~ 0.5 0.5
```

:::info
`detailedCommands` filters by the first argument (`%arg0%`) — the command name without
the `/`. Add as many aliases as you want in the list.

`cancelEvent: true` prevents the vanilla "Unknown command" message from appearing.
:::

---

## Variations

### Invincibility instead of creative mode

Replace the gamemode commands with potion effects:

```yaml
# Turn ON:
commands:
  - score variables set player god_state 1 %player%
  - [CONSOLE] effect give %player% resistance 9999999 254 true
  - [CONSOLE] effect give %player% saturation 9999999 254 true
  - SEND_MESSAGE &6✦ &fGod mode &aON&f!

# Turn OFF:
commands:
  - score variables set player god_state 0 %player%
  - [CONSOLE] effect clear %player%
  - SEND_MESSAGE &6✦ &fGod mode &cOFF&f!
```

### Toggle any server feature

Replace the god mode commands with any action — toggling a scoreboard,
enabling a special mode, giving/removing a buff, etc. The `PLAYER_WRITE_COMMAND`
+ SCore variable pattern works for any boolean toggle tied to a custom command.

---

## Tips

- Add the permission `godmode.toggle` to staff groups via LuckPerms:
  `/lp group admin permission set godmode.toggle true`
- Use `%score_var_god_state_int_%` in lore or boss bar messages to show the current
  state to the player at a glance.
- Persist state across restarts: SCore variables are saved to disk, so `god_state`
  survives server restarts unless the variable is reset on join.

---

## See also

- [Placeholders](/tools-for-all-plugins-score/placeholders) — `%score_var_*%` and `%arg0%` docs.
- [List of EE Activators](/executableevents/configurations/activator-configuration/list-of-the-activators) — `PLAYER_WRITE_COMMAND` and other trigger types.
- [On / Off Switch (EI)](/executableitems/questions-or-guides/methods-or-template/on-off-switch) — same toggle pattern using EI variables instead of SCore variables.
