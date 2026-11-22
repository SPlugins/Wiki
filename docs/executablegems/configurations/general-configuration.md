---
sidebar_position: 1
description: Every setting of the config.yml of ExecutableGems - sockets, interface, forge, jeweller, runewords, appraisal, shop, loot, sounds and full-screen effects.
---

# ⚙️ General configuration

## The files

```
plugins/ExecutableGems/
├── config.yml                 the settings on this page
├── gems/
│   ├── runes/                 a folder = a category of the Codex
│   │   ├── category.yml       its name, colour, icon, order
│   │   ├── vampire.yml        a file = a gem
│   │   └── ...
│   ├── wards/
│   └── ...
├── runewords/
│   ├── frostfire.yml          a file = a runeword
│   └── ...
├── lang/
│   ├── en.yml                 the texts players see, see Language below
│   └── fr.yml
└── pack/
    └── ExecutableGems_Pack.zip   the resource pack (replaced at each start)
```

After a change, run `/eg reload`. If a key is missing from your `config.yml`, the plugin uses its default value.

`/eg reload` leaves the gems lying on the ground as they are, with their beams and labels. A gem you added or renamed gets its tier toasts at once (on Folia, at the next restart).

The plugin also writes these files. You don't edit them:

| File | What it holds |
|---|---|
| `forges.yml` | The placed forges. See [the forges file](#the-forges-file). |
| `pending.yml` | The items kept for a player who was away, given at their next join. |
| `loot-lights.yml` | The positions of the invisible light blocks under the dropped gems, so that none stays in the world after a crash. |
| `update-state.yml` | What the plugin already told you about an update. See [How to update correctly](../questions-or-guides/frequently-asked-questions/how-to-update-correctly.md). |
| `config-reference.yml` | The `config.yml` shipped with your version, for reference. Written when an update adds settings. |
| `lang/.shipped/` | The shipped texts, used to follow the updates of the language files. |
| `defaults-backup/` | The copies of the gem files that `/eg defaults install` replaced. |
| `logs/audit.log` | The [audit log](#audit-log), when it is on. |

## Resource pack

```yaml
resource-pack:
  self-host: true    # true: SCore sends the EG pack next to the pack of ExecutableItems. false: ExecutableGems sends nothing
  url: ''            # self-host false: a link where you host the EG pack yourself, sent at join
  required: false    # players who decline the pack are kicked
  prompt: ''         # the text of the download screen ('' = Minecraft's)
```

These are the pack settings of ExecutableItems: `selfHostPack`, `texturesPackUrl` and `texturesPackRequired`. Apply a change with `/eg pack refresh`.

With ItemsAdder, Nexo, Oraxen, CraftEngine, your own pack or a proxy, see [The resource pack on your server](../questions-or-guides/frequently-asked-questions/resource-pack.md).

## Sockets

```yaml
sockets:
  # sockets an item has before any Socket Drill
  default-weapons: 1      # swords, axes, maces, tridents, spears
  default-bows: 1         # bows, crossbows
  default-tools: 1        # pickaxes, shovels, hoes
  default-armor: 0        # helmets, chestplates, leggings, boots: a Socket Drill opens them (wards are strong)
  default-others: 0
  # default-per-material:
  #   NETHERITE_SWORD: 2
  max: 3                  # a Socket Drill can add sockets up to this number (the 3D gems show the first 3); the
                          # permission executablegems.sockets.max.<n> raises it for a group (the highest n wins)
```

`default-per-material` overrides the numbers above for one material. An item keeps the sockets it already has if you change these numbers.

To give a group more sockets than `max`, give it the permission `executablegems.sockets.max.<n>`, for example `executablegems.sockets.max.5`. See [Commands & Permissions](../commands-and-permissions.md#more-sockets-or-more-forges-for-a-group).

## Interface

```yaml
# Everything below works on 1.21.11 without client mods and does not touch the items' models.
ui:
  icons: true                  # the real gem icons inside texts: lore, forge panel, dialogs, chat (clients 1.21.9+)
  gem-tooltip-frames: true     # gems get a tooltip frame in their colour, richer with the tier (Radiant animated)
  host-tooltip-frame: true     # socketed items get the frame of their runeword, else of their best gem
                               # (never replaces a frame set by another plugin)
  hide-vanilla-attributes: false  # hide the "When in Main Hand" block of socketed items (the gem lines say it)
  fullscreen-reveal: true      # the gem bursts on screen like a totem: Radiant reached, runeword awakened, fusion
  xp-actionbar: true           # every XP gain shows the gem's bar in the action bar
  xp-write-interval: 5         # seconds between two rewrites of a player's items for the XP of their gems. The action
                               # bar shows every gain at once and a level up is written at once; the XP bar in the
                               # lore follows a few seconds later. Each rewrite rebuilds the lore and makes the client
                               # replay the equip animation: 0 (at every kill) is heavy in a mob grinder.
  drop-beam: true              # dropped gems: an animated column of light of their colour (taller with the tier), a ring on the ground
  loot-labels: true            # ... a label over them framed in their rarity
  loot-light: true             # ... and they really light the ground around them (an invisible light block)
  cursor-hints: true           # holding a gem on the cursor: the items it fits show "Socket here: 84%" (not in creative)
  dialog-banner: true          # a drawn banner in the gem's colour over the confirmation dialog (EG pack)
  codex: chest                 # chest = the Codex as a drawn jeweller's case (needs the EG pack); dialog = native dialogs
  socket-wheel: true           # holding an item with a gem in it: its sockets at the top of the screen, XP rings in the gems' colours
  socket-wheel-empty: false    # true: also for an item whose sockets are all empty (every sword, tool and bow has one by default)
  inspect: true                # sneak + F with an item that holds a gem: it floats big in front of you, gems orbiting,
                               # sockets listed (sneak + F stays the vanilla swap for every other item)
  living-text: true            # runeword names shine (gold sweep), Radiant gems shimmer in a rainbow, waving in menus: a text
                               # shader of the EG pack (26.3); usable anywhere in EG texts with <shine>, <prism>, <pulse>
  tier-toasts: true            # a toast in the corner (like an advancement) when a gem reaches a new tier
  confirm: chest               # "Socket this gem?": chest = a drawn case like the Codex (needs the EG pack); dialog = native dialog
```

:::tip
**No resource pack on your server?**

Set `ui.codex` and `ui.confirm` to `dialog`, and `ui.icons` to `false`. The menus then use native dialogs instead of drawn windows.
:::

- **`socket-wheel` and `inspect`** only act on an item that holds at least one gem. With any other item, sneak + F is the vanilla hand swap. Set `socket-wheel-empty: true` to also show the empty sockets of the held item.
- **`xp-write-interval`**: the XP a gem earns shows at once in the action bar. It is written on the item every few seconds, and at once when the gem levels up, so the XP bar in the tooltip can be a few seconds late.

## Socketing

```yaml
socketing:
  confirm-below-chance: 100    # socketing with a lower success chance asks for a confirmation (before / after)
  hold-to-socket: true         # gem in one hand, item in the other, hold right click: socketed when the bar is full
  hold-seconds: 1.6
  allowed-inventory-holders: []  # other plugins' virtual storages where drag and drop and the extractor work
```

Set `confirm-below-chance: 0` to never ask for a confirmation.

Drag and drop and the extractor work in the player's inventory and in real storages: chests, barrels, shulker boxes,
ender chests, chest minecarts and boats. They never work in another plugin's menu, because a shop or an auction house
that shows a copy of an item would let a player pull a real gem out of a picture.

If you use a plugin whose virtual storages hold real items (PlayerVaults, a backpack plugin), list it in
`allowed-inventory-holders`, by plugin name or by the class of its inventory holder:

```yaml
socketing:
  allowed-inventory-holders: [PlayerVaults, MinePacks]
```

## Forge

```yaml
forge:
  max-per-player: 1            # forges a player may have placed at once; whoever placed a forge picks it up with
                               # sneak + left click. More with the permission executablegems.forge.limit.<n> (the
                               # highest wins) or executablegems.forge.limit.unlimited (ops). -1 = no limit. The forges
                               # made with /eg forge are the server's: no limit, picked up with executablegems.forge.remove
  min-distance: 3              # blocks between two forges, so that they do not overlap (0 = off; /eg forge force ignores it)
  animation-range: 32          # a forge is animated (particles, embers, jeweller, turning sockets) while a player is
                               # within this many blocks (8 to 64); with nobody near it stands still and costs nothing
  personal-panel: true         # a panel at eye height for the player in front of the forge, about what they hold
  reflex:
    enabled: true              # during the ritual a ring closes: strike when it turns gold for a better chance
    bonus-chance: 15
  solid: true                  # an invisible block (barrier) where the altar stands, so it is solid like a block
  weapon-tilt: 0               # tilt of the floating weapon in degrees: 0 = diagonal like its icon, 45 = lying flat
  shards: true                 # a shattered gem bursts into 3D shards that land on the altar and around, then fade
  light:                       # the forge lights the place up (an invisible light block right over the altar)
    enabled: true
    flicker: true              # the light breathes like embers; a socketing or a shatter flashes it to full
                               # brightness per level: forge.levels.<n>.light (default 13 / 14 / 15)
  levels:                      # sneak + right click the forge with an empty hand: the upgrade menu. The levels are
    enabled: true              # yours: add, change or remove them ('1', '2', '3'... without a gap). A forge upgraded
                               # further than the levels of today keeps its level in forges.yml and gets it back with them
    '1':
      name: '<gradient:#ffb347:#ff5e62><bold>GEM FORGE</bold></gradient>'
      model: 'ei:gems/gem_forge'
      bonus-chance: 0
    '2':
      name: '<gradient:#d59bff:#7b2cbf><bold>OBSIDIAN FORGE</bold></gradient>'
      model: 'ei:gems/gem_forge_t2'
      bonus-chance: 5          # added to every socketing at this forge
      weapon-lift: 0.25        # the weapon floats this much higher over the taller forge
      cost: ['OBSIDIAN:16', 'AMETHYST_SHARD:32', 'DIAMOND:4']
      xp-levels: 10
    '3':
      name: '<gradient:#fff6c7:#8fd3ff><bold>CELESTIAL FORGE</bold></gradient>'
      model: 'ei:gems/gem_forge_t3'
      bonus-chance: 10
      weapon-lift: 0.5
      cost: ['NETHERITE_INGOT:2', 'NETHER_STAR:1', 'DIAMOND_BLOCK:2']
      xp-levels: 30
  jeweller:
    enabled: true              # a mannequin (1.21.9+) stands at the forge and works the gems
    skin: pack                 # pack = the jeweller drawn in the EG pack; or a player name for their skin
    gear: true                 # his loupe headband
    faces: true                # (skin: pack) he blinks, his mouth moves when he speaks, surprised / sad faces
    animated: true             # hammers, polishes and inspects gems, greets the players who walk up, watches them
    speech: true               # speech bubbles: comments the gem you hold, cheers, despairs; his lines are jeweller.lines.*
                               # of lang/<language>.yml, the lines below (if any) replace them for one event
    lines: {}                  # e.g. greet: ['Welcome, traveller!'], gem: ['Ah, a %gem%! %tier%, no less.'], success, shatter,
                               # slip, awaken (%runeword%), drill, extract, fuse, placed, ritual, upgrade, appraise,
                               # reveal_common, reveal_rare, reveal_epic, reveal_legendary, weapon
  waypoint:
    enabled: true              # the forge shows on the locator bar (the jeweller carries the waypoint)
    range: 160
  cinematic:
    default: false             # awakening a runeword: the camera turns around the weapon; players toggle it
                               # with /eg cinematic
```

### Who owns a forge

| Forge | Placed with | Picked up by |
|---|---|---|
| A player's forge | The **Gem Forge** item | The player who placed it (sneak + left click), or anyone with `executablegems.forge.remove` |
| A server forge | `/eg forge` | Only players with `executablegems.forge.remove`, or `/eg forge remove` |

- **`max-per-player`** is the number of forges a player may have placed at once. `-1` means no limit. `0` means players can't place a forge at all. The permission `executablegems.forge.limit.<n>` raises it for a group, and `executablegems.forge.limit.unlimited` (ops by default) lifts it. Server forges don't count.
- **`min-distance`** keeps two forges from overlapping. `0` turns the check off.
- **`animation-range`**: a forge with no player within this distance stands still, with a steady light, and costs the server almost nothing. It wakes up when a player comes near. The value is kept between 8 and 64.
- A forge that is picked up keeps its level: the item gives the same forge back when it is placed again.
- `/eg forge list` shows every forge with the player who placed it. See the [forge commands](../commands-and-permissions.md#forges).

### Forge levels

The levels are yours: add, change or remove them. Number them `'1'`, `'2'`, `'3'`... without a gap. To add a forge level, add a `'4':` section with the same keys. Its `model` must be an item model of a resource pack.

If you remove a level, a forge that was already upgraded to it keeps its level in `forges.yml`, and gets it back when the level is there again.

**Costs** are `MATERIAL:amount`. If a `cost` or an `xp-levels` has a typo, the upgrade to that level is not sold, and the console names the wrong value at the start and at `/eg reload`:

```
[ExecutableGems] config.yml forge.levels.2.cost: unknown item in 'OBSIDAN:16' (use a material name like DIAMOND, as ITEM:amount). The upgrade to forge level 2 is not sold until this is fixed (then /eg reload).
```

### Lines of the jeweller

Each key takes a list of sentences, and one is picked at random. His default lines are in the language file, under `jeweller.lines`.

```yaml
forge:
  jeweller:
    lines:
      greet: ['Welcome, traveller!', 'Mind the sparks.']
      gem: ['Ah, a %gem%! %tier%, no less.']
```

### The forges file

The plugin keeps the placed forges in `plugins/ExecutableGems/forges.yml`. For each forge it holds the position (`location`, with the world's name `world` and its key `world_key`), the `level`, who placed it (`placed-by` and `placed-by-name`, absent for a server forge), the blocks the forge put in the world (`blocks`) and the item lying on it.

You never need to edit it. Three files can appear next to it, and next to `pending.yml`:

| File | What it is |
|---|---|
| `forges.yml.bak` | The last file that was read without error at a start. |
| `forges.yml.broken-<time>` | A file that could not be read. It is set aside and never overwritten, and the console says how to get its content back. |
| `forges.yml.tmp` | Exists for an instant while the file is written. |

The forges of a world that is not loaded are not lost: they wait in the file, with what lies on them, and come back when the world is loaded again. `/eg forge list` marks them `(world not loaded)`.

## Runewords

```yaml
runewords:
  hidden-until-discovered: true  # "???" in the Codex until someone on the server awakens it
  announce: true                 # the first awakening is announced to the whole server
  aura-interval: 1               # ticks between two particles of a runeword's aura (around who holds or wears the item,
                                 # seen within 32 blocks). 1 = the smoothest, 2 or 4 = lighter, 0 = no aura. In a crowd
                                 # (8 players or more within 32 blocks, then 24) the plugin doubles it by itself, twice.
  world-event:                   # every awakening: a pillar of light in the runeword's colours, lightning (no damage),
    enabled: true                # shockwaves, the sky darkens for the players around, who are told who awakened what
    radius: 48
    dark-ticks: 80               # 0 = the sky stays as it is
    lightning: true
    sigil: true                  # the runeword's sigil, a giant runic circle turning in the sky over the player
    sigil-height: 12
```

- **The aura** shows around the player who holds the runeword item in either hand, or wears it. Players see it within 32 blocks.
- **Particles** of the gems and the auras follow each player's own particle setting and the normal range of 32 blocks. Only the awakening event shows from further away, to the players within `world-event.radius`.

## Appraisal

```yaml
appraisal:                       # Unidentified Gems, appraised by the jeweller (right click him or the forge holding one)
  enabled: true
  drop-chance: 0.03              # a monster killed by a player drops one (not in the worlds nor from the spawners that
                                 # loot excludes: loot.worlds, loot.mobs.blocked-spawn-reasons)
  announce-legendary: true
  gems: []                       # the gems a stone can hold; empty = all
  rarities:                      # weight (odds), tier of the gem found, colour of the lights
    common: {weight: 60, tier: 1, color: '#b8c2cc'}
    rare: {weight: 27, tier: 2, color: '#4aa3ff'}
    epic: {weight: 10, tier: 3, color: '#b36bff'}
    legendary: {weight: 3, tier: 4, color: '#ffb000'}
```

`gems` limits what a stone can hold. Gems with `obtain.appraisal: false` or `obtain.weight: 0` are never in a stone.

## Codex item

```yaml
codex-item:                      # the Gem Codex as a 3D grimoire: right click, it opens in the hand, then the Codex opens
  give-on-first-join: true
```

## Jeweller's shop

```yaml
jeweller-shop:                   # right click the jeweller: his wares (with a stone in hand: the appraisal)
  enabled: true
  wares:
    stone: {item: rough_gem, price: 'EMERALD:8', xp-levels: 0}
    drill: {item: socket_drill, price: 'EMERALD:16', xp-levels: 5}
    extractor: {item: gem_extractor, price: 'EMERALD:12', xp-levels: 3}
    forge: {item: gem_forge, price: 'DIAMOND:8', xp-levels: 10}     # a forge of their own
```

Each line under `wares` is one ware. Its name (`stone`, `drill`...) is yours to choose. The shop shows four wares per page, and you can add as many as you like.

| Key | Description |
|---|---|
| `item` | A tool id (`rough_gem`, `socket_drill`, `gem_extractor`, `gem_forge`, `gem_codex`) or `gem:<id>:<level>`. A native enchantment is sold as its enchanted book. |
| `price` | Items to pay, as `'MATERIAL:amount'`. |
| `xp-levels` | XP levels to pay. |
| `money` | Money to pay, for example `money: 250`. It needs Vault and an economy plugin (EssentialsX, CMI...). |
| `free` | `true` gives the ware away. A ware without any price needs it. |

`price`, `xp-levels` and `money` can be used alone or together.

A ware with a mistake (an unknown item or material, a price that is not a number, no price at all) is never sold, and the console names it at the start and at `/eg reload`. A ware with `money` is not sold while Vault or an economy plugin is missing. Players don't see those wares. Admins (`executablegems.admin`) see a barrier in their place, with the reason.

See [Control loot and prices](../questions-or-guides/tutorials/loot-and-economy.md).

## Loot

```yaml
loot:                            # gems found in survival (they raise a column of light on the ground)
  gems: []                       # the gems loot can hold; empty = every rune and support (enchantments come as books)
  worlds:                        # where gems and Unidentified Gems are found: monsters, chests, and appraisal.drop-chance
    mode: blacklist              # blacklist = everywhere but in the listed worlds; whitelist = only in the listed worlds
    list: []                     # world names, e.g. [minigames, 'event_*'] ('*' at the end: every world whose name starts so)
  mobs:
    enabled: true
    chance: 0.01                 # a monster killed by a player drops a gem
    looting-bonus: 0.005         # added per level of Looting
    tier-weights: {1: 70, 2: 22, 3: 7, 4: 1}
    # No gem and no Unidentified Gem from a monster that came from one of these sources, bosses included
    blocked-spawn-reasons: [SPAWNER, SPAWNER_EGG, DISPENSE_EGG, NETHER_PORTAL]
    # their own chance, per roll; a vanilla entity type, or 'mythic:<id>' for a MythicMobs mob (its internal name)
    bosses: {WITHER: 1.0, ENDER_DRAGON: 1.0, WARDEN: 0.6, ELDER_GUARDIAN: 0.5}
    boss-gems: 2                 # rolls for a boss
    boss-tier-weights: {2: 40, 3: 45, 4: 15}
  chests:
    enabled: true
    tier-weights: {1: 55, 2: 30, 3: 12, 4: 3}
    tables:                      # loot table (prefix): chance of a gem, of an Unidentified Gem; the most specific wins
      'chests/': {gem: 0.06, unidentified: 0.12}
      'chests/simple_dungeon': {gem: 0.25, unidentified: 0.35}
      'chests/desert_pyramid': {gem: 0.2, unidentified: 0.3}
      'chests/jungle_temple': {gem: 0.2, unidentified: 0.3}
      'chests/stronghold': {gem: 0.25, unidentified: 0.3}
      'chests/ancient_city': {gem: 0.35, unidentified: 0.45, tier-weights: {2: 50, 3: 38, 4: 12}}
      'chests/bastion_treasure': {gem: 0.4, unidentified: 0.4, tier-weights: {2: 45, 3: 40, 4: 15}}
      'chests/end_city_treasure': {gem: 0.4, unidentified: 0.35, tier-weights: {2: 40, 3: 42, 4: 18}}
      'chests/trial_chambers': {gem: 0.2, unidentified: 0.3}
```

- **`gems`**: when it is empty, the loot can hold every gem with `obtain.loot: true` and a weight above 0.
- **`worlds`**: the worlds where gems and Unidentified Gems are found, from monsters, from chests and from `appraisal.drop-chance`. With `mode: blacklist`, the listed worlds are excluded. With `mode: whitelist`, only the listed worlds count. A name ending with `*` matches every world whose name starts that way.
- **`blocked-spawn-reasons`**: a monster that came from one of these sources never drops a gem or an Unidentified Gem, so a mob farm can't print gems. See the table below.
- **`tier-weights`**: the odds of each tier. They don't need to add up to 100.
- **`tables`**: a key is the start of a Minecraft loot table name. `chests/` matches them all. The longest match wins.
- **`bosses`**: the chance for each roll. A boss gets `boss-gems` rolls. A key is a vanilla entity type, or `'mythic:<id>'` for a MythicMobs mob, with its internal name: `bosses: {WITHER: 1.0, 'mythic:SkeletonKing': 0.8}`.

The names of `blocked-spawn-reasons` are the spawn reasons of Bukkit:

| Reason | Monsters | Blocked by default |
|---|---|---|
| `SPAWNER` | From a spawner block | Yes |
| `SPAWNER_EGG`, `DISPENSE_EGG` | From a spawn egg, used by hand or by a dispenser | Yes |
| `NETHER_PORTAL` | The zombified piglins of portal farms | Yes |
| `TRIAL_SPAWNER` | From a trial spawner | No |
| `COMMAND` | From `/summon` | No |
| `CUSTOM` | Spawned by another plugin | No |

Remove `SPAWNER` from the list to let spawner mobs drop. `blocked-spawn-reasons: []` lets every monster drop. Monsters that spawned naturally always drop, even in a farm.

A mistake in `worlds` or in `blocked-spawn-reasons` is named in the console at the start and at `/eg reload`.

## Sounds

```yaml
sounds:
  custom: true                   # the sounds of the EG pack (socketing, shatter, awakening, appraisal, forge); false = vanilla
```

## Full-screen effects

```yaml
# Full-screen effects, 26.3+ only (nothing on older servers). The built-in ones are shaders of the EG pack, animated
# in the colour of the gem / runeword: executablegems:socket (shockwave + flash at the Forge or when holding to socket),
# executablegems:shatter (the screen cracks like glass), executablegems:awaken (light shafts in the runeword's colours).
# Any other post effect id (minecraft:invert, minecraft:blur, one of your pack...) is shown for `ticks`. '' = none.
post-effects:
  socket: 'executablegems:socket'
  shatter: 'executablegems:shatter'
  awaken: 'executablegems:awaken'
  focus: 'executablegems:focus'      # the socketing ritual: the world fades to grey but the gem's colour while the ring closes
  inspect: 'executablegems:inspect'  # inspecting a weapon: a dark vignette around it
  ticks: 12
```

## Language

```yaml
language: en   # en or fr: the file plugins/ExecutableGems/lang/<language>.yml
```

Every text the players see (chat, action bar, titles, tool names and lore, menus, holograms, the Jeweller's lines) is in
`plugins/ExecutableGems/lang/`. English and French come with the plugin. To translate or reword, edit the file of your
language (or copy `en.yml` to a new file and set `language` to its name), then run `/eg reload`. The texts are in
[MiniMessage](https://docs.advntr.dev/minimessage/format.html); keep the `%placeholders%`.

When you update the plugin, your language file follows by itself:

- a text you changed is never touched;
- a text you never changed takes the new wording, if the update rewords it;
- the texts an update adds are written into your file (in English, in a language of your own).

For that, the plugin keeps the shipped texts in `lang/.shipped/`. Don't edit that folder. Before it writes your file, it
saves a copy there, named `<language>.before-update.yml`.

The names and descriptions of the gems and runewords stay in their own files (`gems/`, `runewords/`).

## Permissions

Every gem has `executablegems.use.<gem>` and every runeword `executablegems.use.runeword.<id>`, given to everyone by
default (`executablegems.use.*` holds them all). A player whose permission is set to false sees the text
`gem.not-allowed` of the language file, at most every 30 seconds per gem and never for a LOOP activator. Set it to
`''` to say nothing.

The features have permissions too, given to everyone by default: `executablegems.feature.forge` (using a Gem Forge),
`.shop` (the jeweller's shop), `.appraisal`, `.drill` (Socket Drill), `.extractor` (Gem Extractor) and `.hold-socket`
(hold to socket). `executablegems.feature.*` holds them all. Set one to false to close that feature to a group. The
player then sees the text `gem.feature.not-allowed` in the action bar.

See the full list in [Commands & Permissions](../commands-and-permissions.md#permissions).

## Audit log

```yaml
audit-log: false
```

Set it to `true` to write one line per item the plugin takes or gives back in `plugins/ExecutableGems/logs/audit.log`:
weapons laid on a forge and taken back, socketings, fusions, extractions, jeweller purchases and appraisals. Use it to
check a "the forge ate my sword" report.

It also says who placed, picked up or removed each forge (`placed by`, `picked up by ... (who placed it)`,
`removed by`), and when an extraction was refused because the gem is disabled on the server (`extraction refused`).

Items owed to a player who left in the middle of an animation, or whose weapon was on a forge that got picked up, are
kept in `plugins/ExecutableGems/pending.yml` and given at their next join.
