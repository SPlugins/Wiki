---
description: >-
  Step-by-step guide to installing MyFurniture and placing your first custom
  furniture — from setup to configuring your own model in-game.
---

# Getting Started with MyFurniture

## Prerequisites

Before you begin, make sure your server meets these requirements:

* A **Spigot-based server** (Paper, Purpur, or any fork) running Minecraft **1.19.4+** (1.21+ recommended for full feature support)
* [**SCore**](https://modrinth.com/plugin/score) placed in your `plugins/` folder — required by all Ssomar plugins
* [**ExecutableItems**](https://www.spigotmc.org/resources/77974/) placed in your `plugins/` folder — MyFurniture links each furniture to an EI item
* MyFurniture (free or premium) placed in your `plugins/` folder

:::info
If you already have other Ssomar plugins installed, update all of them at the same time. SCore is a shared library — mixed versions can cause errors.
:::

Do a **full server restart** (stop + start) after placing all JARs. Plugin managers like PlugMan can cause class-loading issues.

---

## Verify the installation

Once the server starts, run in the console or in-game:

```
/mf reload
```

You should see a confirmation in the console. If you see errors, check `logs/latest.log` for SCore or class-loading messages (see [Install & Update Errors](/myfurniture/question-or-guides/frequently-asked-questions/install-update-errors/how-to-install-correctly)).

---

## Give yourself permissions

To access the editor you need the `mf.cmd.*` permission. The easiest way with LuckPerms is:

```
/lp user <yourName> permission set mf.* true
```

Or grant all furniture placement permissions to everyone:

```
/lp group default permission set mf.furniture.* true
```

---

## Method 1 — Use the default furniture pack (fastest start)

MyFurniture ships with a ready-to-use resource pack containing demo furniture models. This is the quickest way to see the plugin in action.

### Step 1 — Download the default pack

```
/mf download-default-pack
```

This downloads the example resource pack into `plugins/MyFurniture/__textures__/`.

### Step 2 — Import and build the pack

```
/mf pack
```

The plugin reads every texture pack folder inside `__textures__`, generates the YAML furniture configs, builds the combined resource pack, and (when `selfHostPack: true`) hosts it automatically for your players.

### Step 3 — Open the furniture editor

```
/mf editor
```

A GUI opens showing all loaded furniture. Click any item to preview it or open its configuration.

### Step 4 — Give yourself a piece of furniture

```
/mf give <yourName> <furnitureId> 1
```

Replace `<furnitureId>` with an ID shown in the editor (e.g., `acacia_bed`).

### Step 5 — Place it

Hold the item and right-click a surface. The 3-D model appears with its exact bounding box — no 1×1 hitbox issues like with simpler plugins.

---

## Method 2 — Import your own Blockbench model (.bbmodel)

If you've created a model in [Blockbench](https://www.blockbench.net/), you can import it directly and the plugin generates the resource pack assets and YAML config automatically.

### Step 1 — Export your model as `.bbmodel`

In Blockbench, use **File → Save Model** (or **Save a Copy**) to save the `.bbmodel` file. Do **not** export as a Java Block/Item model — the plugin parses `.bbmodel` format directly.

### Step 2 — Drop the file into `__textures__`

Place the `.bbmodel` file inside:

```
plugins/MyFurniture/__textures__/
```

You can put multiple files here.

### Step 3 — Import the pack

```
/mf pack
```

The plugin:
1. Reads your `.bbmodel` file
2. Extracts embedded textures automatically
3. Generates the MC resource pack JSON files under `assets/myfurniture/`
4. Creates a furniture YAML config in `plugins/MyFurniture/furniture/__animated__/<modelName>.yml`
5. Builds and hosts `MyFurniturePack.zip`

### Step 4 — Reload and test

```
/mf reload
/mf give <yourName> <modelName> 1
```

The furniture ID matches your `.bbmodel` file name (lower-cased, spaces replaced with `_`).

---

## Method 3 — Import a custom resource pack folder

If you have a custom resource pack that already follows the standard MC folder structure, drop the **unzipped folder** (not the `.zip`) into `plugins/MyFurniture/__textures__/` and run `/mf pack`.

:::tip
Self-hosting is enabled by default (`selfHostPack: true` in `config.yml`). Your players will automatically receive the pack on join. If you prefer to host it yourself, set `selfHostPack: false` and paste the direct `.zip` URL into `texturesPackUrl`.
:::

---

## Understanding the furniture YAML

Each furniture has a config file at `plugins/MyFurniture/furniture/<FolderName>/<id>.yml`. Here is a minimal real-world example:

```yaml
executableItem: my_lamp        # ExecutableItem ID (the held/dropped item)

displayFeatures:
  itemModel: myfurniture:my_lamp/full   # 1.21.4+ resource location
  scale: 1.0                  # Size multiplier (1.0 = normal)
  customPitch: 90             # 90 = flat on the ground (default for most furniture)
  aligned: false              # Align to block grid
  glow: false                 # Outline glow
  glowColor: 16777215         # Glow colour as decimal RGB
  clickToBreak: 1             # Left-clicks needed to break
  viewRange: 20.0             # Distance at which the display is visible
  boundingBoxZones: []        # Auto-generated by /mf pack — do not edit manually

interactionRange: 6.0         # Reach distance for activators

dropType: IN_THE_INVENTORY    # IN_THE_INVENTORY or ON_THE_GROUND
dropBlockIfItIsBroken: true   # Drop the item when broken
resetInternalDatasWhenBroken: false

sitFeatures:
  playerCanSit: false         # Set to true to let players sit on it

storageFeatures:
  enable: false               # Set to true to make it act like a chest
  title: '&8My Storage'       # GUI title when opened

activators: {}                # Add interactive triggers here (see Activators docs)
```

:::warning
The `boundingBoxZones` section is auto-generated during `/mf pack`. Do not edit it by hand — the plugin derives the exact bounding box from your model geometry. If the hitbox looks wrong, re-run `/mf pack`.
:::

---

## Key concepts

### Bounding box (hitbox)

Unlike other furniture plugins that use a flat 1×1×1 hitbox, MyFurniture reads your model geometry and generates a **tight, shape-matching hitbox**. Players can click through gaps in an open chair, and a tall lamp has a tall hitbox — all without any client-side mod.

This is why `/mf pack` must be run every time you change a model.

### ExecutableItem link

Every furniture needs a matching [ExecutableItems](/executableitems/configurations/item-configuration/item-features) entry. When `/mf pack` imports a new model it creates the EI entry automatically. The EI config controls the item appearance (name, lore, texture), and the furniture YAML controls how it behaves when placed.

### Activators

Activators let you run commands or apply effects when a player interacts with placed furniture (right-click, left-click, proximity, break, place, etc.). See [List of Activators](/myfurniture/configurations/activator-configuration/list-of-the-activators) and [Activator Features](/myfurniture/configurations/activator-configuration/activators-features) for the full reference.

---

## Quick-start checklist

- [ ] SCore + ExecutableItems + MyFurniture JARs in `plugins/`
- [ ] Full server restart
- [ ] `/mf reload` shows no errors
- [ ] Permissions granted (`mf.*` for admin, `mf.furniture.*` for players)
- [ ] `/mf download-default-pack` → `/mf pack` → `/mf editor` — demo furniture visible
- [ ] Players receive the resource pack on join (check `selfHostPack` in `config.yml`)

---

## Next steps

* [Import your own furniture](/myfurniture/question-or-guides/frequently-asked-questions/import-your-own-furniture) — detailed import workflow
* [Furniture Features](/myfurniture/configurations/furniture-configuration/furniture-features) — full reference for every YAML option
* [Activators reference](/myfurniture/configurations/activator-configuration/list-of-the-activators) — add interactions to your furniture
* [Commands & Permissions](/myfurniture/commands-and-permissions) — all `/mf` commands
