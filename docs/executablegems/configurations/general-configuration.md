---
sidebar_position: 1
description: Every setting of the config.yml of ExecutableGems - sockets, interface, forge, jeweller, runewords, appraisal, shop, loot, sounds and full-screen effects.
---

# ⚙️ General configuration

## The files

```
plugins/ExecutableGems/
├── config.yml                 the settings on this page
├── forges.yml                 the placed forges (written by the plugin)
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
└── pack/
    └── ExecutableGems_Pack.zip   the resource pack (replaced at each start)
```

After a change, run `/eg reload`. If a key is missing from your `config.yml`, the plugin uses its default value.

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
  max: 3                  # a Socket Drill can add sockets up to this number (the 3D gems show the first 3)
```

`default-per-material` overrides the numbers above for one material. An item keeps the sockets it already has if you change these numbers.

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
  drop-beam: true              # dropped gems: an animated column of light of their colour (taller with the tier), a ring on the ground
  loot-labels: true            # ... a label over them framed in their rarity
  loot-light: true             # ... and they really light the ground around them (an invisible light block)
  cursor-hints: true           # holding a gem on the cursor: the items it fits show "Socket here: 84%" (not in creative)
  dialog-banner: true          # a drawn banner in the gem's colour over the confirmation dialog (EG pack)
  codex: chest                 # chest = the Codex as a drawn jeweller's case (needs the EG pack); dialog = native dialogs
  socket-wheel: true           # holding a socketed item: its sockets at the top of the screen, XP rings in the gems' colours
  inspect: true                # sneak + F with a socketed item: it floats big in front of you, gems orbiting, sockets listed
  living-text: true            # runeword names shine (gold sweep), Radiant gems shimmer in a rainbow, waving in menus: a text
                               # shader of the EG pack (26.3); usable anywhere in EG texts with <shine>, <prism>, <pulse>
  tier-toasts: true            # a toast in the corner (like an advancement) when a gem reaches a new tier
  confirm: chest               # "Socket this gem?": chest = a drawn case like the Codex (needs the EG pack); dialog = native dialog
```

:::tip No resource pack on your server?
Set `ui.codex` and `ui.confirm` to `dialog`, and `ui.icons` to `false`. The menus then use native dialogs instead of drawn windows.
:::

## Socketing

```yaml
socketing:
  confirm-below-chance: 100    # socketing with a lower success chance asks for a confirmation (before / after)
  hold-to-socket: true         # gem in one hand, item in the other, hold right click: socketed when the bar is full
  hold-seconds: 1.6
```

Set `confirm-below-chance: 0` to never ask for a confirmation.

## Forge

```yaml
forge:
  personal-panel: true         # a panel at eye height for the player in front of the forge, about what they hold
  reflex:
    enabled: true              # during the ritual a ring closes: strike when it turns gold for a better chance
    bonus-chance: 15
  solid: true                  # an invisible block (barrier) where the altar stands, so it is solid like a block
  weapon-tilt: 0               # tilt of the floating weapon in degrees: 0 = diagonal like its icon, 45 = lying flat
  shards: true                 # a shattered gem bursts into 3D shards that land on the altar and around, then fade
  light:                       # the forge lights the place up (invisible light blocks on and around the altar)
    enabled: true
    flicker: true              # the light breathes like embers; a socketing or a shatter flashes it to full
                               # brightness per level: forge.levels.<n>.light (default 13 / 14 / 15)
  levels:                      # sneak + right click the forge with an empty hand: the upgrade menu
    enabled: true
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
    speech: true               # speech bubbles: comments the gem you hold, cheers, despairs; lines below override the defaults
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

To add a forge level, add a `'4':` section with the same keys. Its `model` must be an item model of a resource pack.

**Costs** are `MATERIAL:amount`. **Lines of the jeweller:** each key takes a list of sentences, and one is picked at random.

```yaml
lines:
  greet: ['Welcome, traveller!', 'Mind the sparks.']
  gem: ['Ah, a %gem%! %tier%, no less.']
```

## Runewords

```yaml
runewords:
  hidden-until-discovered: true  # "???" in the Codex until someone on the server awakens it
  announce: true                 # the first awakening is announced to the whole server
  world-event:                   # every awakening: a pillar of light in the runeword's colours, lightning (no damage),
    enabled: true                # shockwaves, the sky darkens for the players around, who are told who awakened what
    radius: 48
    dark-ticks: 80               # 0 = the sky stays as it is
    lightning: true
    sigil: true                  # the runeword's sigil, a giant runic circle turning in the sky over the player
    sigil-height: 12
```

## Appraisal

```yaml
appraisal:                       # Unidentified Gems, appraised by the jeweller (right click him or the forge holding one)
  enabled: true
  drop-chance: 0.03              # a monster killed by a player drops one
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
  wares:                         # up to 4; item = a tool id (rough_gem, socket_drill, gem_extractor, gem_forge) or gem:<id>:<level>
    stone: {item: rough_gem, price: 'EMERALD:8', xp-levels: 0}
    drill: {item: socket_drill, price: 'EMERALD:16', xp-levels: 5}
    extractor: {item: gem_extractor, price: 'EMERALD:12', xp-levels: 3}
    forge: {item: gem_forge, price: 'DIAMOND:8', xp-levels: 10}     # a forge of their own
```

`item` is a tool id or `gem:<id>:<level>`. See [Control loot and prices](../questions-or-guides/tutorials/loot-and-economy.md).

## Loot

```yaml
loot:                            # gems found in survival (they raise a column of light on the ground)
  gems: []                       # the gems loot can hold; empty = every rune and support (enchantments come as books)
  mobs:
    enabled: true
    chance: 0.01                 # a monster killed by a player drops a gem
    looting-bonus: 0.005         # added per level of Looting
    tier-weights: {1: 70, 2: 22, 3: 7, 4: 1}
    bosses: {WITHER: 1.0, ENDER_DRAGON: 1.0, WARDEN: 0.6, ELDER_GUARDIAN: 0.5}   # their own chance, per roll
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
- **`tier-weights`**: the odds of each tier. They don't need to add up to 100.
- **`tables`**: a key is the start of a Minecraft loot table name. `chests/` matches them all. The longest match wins.
- **`bosses`**: the chance for each roll. A boss gets `boss-gems` rolls.

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
