---
description: >-
  Detect when a player enters or leaves a WorldGuard region using ExecutableEvents
  — two PLAYER_WALK activators with ifInRegion conditions and a SCore variable
  to track transition state. Runs enter commands once on entry and leave commands
  once on exit.
---

# Detect Player Entry/Leave from a WorldGuard Region

<iframe width="560" height="315" src="https://www.youtube.com/embed/_VwK8Ji3in0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## How it works

WorldGuard doesn't expose entry/exit events that ExecutableEvents can hook directly.
Instead, we use two `PLAYER_WALK` activators combined with a **SCore per-player
variable** that tracks whether the player was inside the region on their last step.

When the variable transitions from `0 → 1` the player just **entered** the region.
When it transitions from `1 → 0` the player just **left**.

---

## Step 1 — Create the SCore variable

Run this command in-game or in the console to create a per-player `in_region` variable:

```
/score variables-create in_region
```

Then configure it:
- **Type**: NUMBER
- **For**: PLAYER
- **Default value**: 0

This stores a `0` (outside) or `1` (inside) value for every player on the server.

---

## Step 2 — Create the EE event

Run `/ee create region-tracker` and configure the event file
(`plugins/ExecutableEvents/events/Default/region-tracker.yml`):

```yaml
enabled: true
editorIcon: COMPASS
name: '&eRegion Tracker'
disabledWorlds: []

activators:
  # Fires when player walks INTO the region for the first time
  activator0:
    name: '&eEnter region'
    option: PLAYER_WALK
    cancelEvent: false
    silenceOutput: true
    # Short global cooldown to reduce how often entry is re-checked
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 10
      isCooldownInTicks: true    # 10 ticks = 0.5 seconds
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # Must be IN the region AND have been outside (in_region == 0)
    playerConditions:
      ifInRegion:
        - my_region              # Replace with your WorldGuard region name
      ifInRegionMsg: ''
    placeholdersConditions:
      plcd0:
        placeholder: '%score_var_in_region_int_%'
        comparator: '=='
        value: '0'
    commands:
      # Mark player as inside
      - score variables set player in_region 1 %player%
      # Your entry commands here
      - SEND_MESSAGE &a► &fYou entered the &2my_region &fzone!
      - [CONSOLE] playsound minecraft:block.note_block.pling player %player% ~ ~ ~ 1 2

  # Fires when player walks OUT of the region
  activator1:
    name: '&eLeave region'
    option: PLAYER_WALK
    cancelEvent: false
    silenceOutput: true
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 10
      isCooldownInTicks: true    # 10 ticks = 0.5 seconds
      cooldownMsg: ''
      displayCooldownMessage: false
      cancelEventIfInCooldown: false
    # Must be OUTSIDE the region AND have been inside (in_region == 1)
    playerConditions:
      ifNotInRegion:
        - my_region
      ifNotInRegionMsg: ''
    placeholdersConditions:
      plcd0:
        placeholder: '%score_var_in_region_int_%'
        comparator: '=='
        value: '1'
    commands:
      # Mark player as outside
      - score variables set player in_region 0 %player%
      # Your exit commands here
      - SEND_MESSAGE &c◄ &fYou left the &2my_region &fzone.
      - [CONSOLE] playsound minecraft:block.note_block.bass player %player% ~ ~ ~ 1 0.5
```

:::warning Region name is case-sensitive
Replace `my_region` with your exact WorldGuard region name. Region names are
case-sensitive — `PvP_Zone` and `pvp_zone` are different regions.
:::

---

## Explanation of key design choices

**Why two activators instead of one?**
The entry activator only fires when `in_region == 0` *and* the player is inside.
The leave activator only fires when `in_region == 1` *and* the player is outside.
This prevents the commands from running on every step — they only run once per
transition.

**Why the global cooldown?**
`PLAYER_WALK` fires very frequently (multiple times per second). The 10-tick global
cooldown reduces CPU load by checking the region condition at most twice per second
instead of 20+ times.

**Why `score variables set player in_region` instead of `variablesModification`?**
EE events don't have built-in per-player variables like EI items do. Instead, they
use SCore's global variable system, manipulated via the `score variables` console
command. The value is read back via `%score_var_in_region_int_%`.

---

## Multiple regions

To track multiple regions, either:
1. Create a separate EE event file for each region (cleanest).
2. List multiple region names in `ifInRegion`/`ifNotInRegion` (triggers if the player
   is in ANY of the listed regions).

For tracking separate entry/exit states per region, create separate SCore variables
(e.g. `in_region_pvp`, `in_region_shop`).

---

## See also

- [Player & Target Conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions) — `ifInRegion` and `ifNotInRegion` docs.
- [Placeholders](/tools-for-all-plugins-score/placeholders) — `%score_var_*%` placeholder syntax.
- [Run commands after killing X mobs](/executableevents/question-or-guides/tutorials/run-commands-after-killing-x-amount-of-mobs) — another example of SCore variable tracking with EE.
