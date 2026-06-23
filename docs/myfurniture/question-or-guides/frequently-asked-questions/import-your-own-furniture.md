---
description: >-
  How to import a custom texture pack or .bbmodel file into MyFurniture so the plugin
  generates your furniture configs and resource pack automatically.
---

# Import your own Furniture

:::tip New to MyFurniture?
See [Getting Started](/myfurniture/question-or-guides/tutorials/getting-started) for a full step-by-step walkthrough including `.bbmodel` import and config reference.
:::

## Import a texture-pack folder

If you have a full resource pack (or a folder of models and textures already structured in
MC format), drop the **unzipped folder** into the plugin's textures directory and let the
plugin generate everything else.

1. Make sure the server is running and MyFurniture is loaded.
2. Drag and drop your texture pack **folder** (not a `.zip`) into:
   ```
   plugins/MyFurniture/__textures__/
   ```
3. Run in-game or in the console:
   ```
   /mf pack
   ```
   The plugin reads every sub-folder in `__textures__`, extracts models and textures, and
   generates furniture YAML configs. This can take a minute on large packs.
4. When the command finishes you will see `MyFurniturePack.zip` appear in `__textures__`.
5. Distribute the resource pack to players — two options:
   - **Self-hosting** (`selfHostPack: true` in `config.yml`): the pack is hosted automatically
     and pushed to players on join. Nothing more to do.
   - **External hosting** (`selfHostPack: false`): upload `MyFurniturePack.zip` to a host
     such as [mc-packs.net](https://mc-packs.net/), copy the direct `.zip` URL, paste it into
     `texturesPackUrl` in `config.yml`, and run `/mf reload`.

:::warning
Do not drop a `.zip` file into `__textures__` — only unzipped folders. The plugin cannot
parse a compressed archive directly.
:::

---

## Import a Blockbench model (.bbmodel)

If you created a model in [Blockbench](https://www.blockbench.net/), you can import the
`.bbmodel` file directly — no manual resource pack structure required.

1. In Blockbench, use **File → Save Model** (not "Export") to save the `.bbmodel` file.
   Textures are embedded in the file.
2. For a **static** model, drop the file into:
   ```
   plugins/MyFurniture/__textures__/
   ```
   For an **animated** model (multi-bone, keyframe animations), drop the file into:
   ```
   plugins/MyFurniture/animations/
   ```
3. Run `/mf pack`.
4. The plugin automatically:
   - Parses the `.bbmodel` file and extracts embedded textures
   - Generates MC resource pack JSON files under `assets/myfurniture/`
   - Creates a furniture YAML config in `plugins/MyFurniture/furniture/__animated__/<name>.yml`
   - Rebuilds `MyFurniturePack.zip`

The furniture ID matches the `.bbmodel` file name (lower-cased, spaces → `_`).

:::tip Bone naming tips
- Name bones clearly: `base`, `drawer`, `lid`, `arm_left`, etc.
- A bone named exactly `hitbox` is ignored for rendering — the plugin uses it only for
  bounding box calculations.
- Avoid spaces in bone names; use underscores.
:::

After the pack is rebuilt, run:

```
/mf reload
/mf give <yourName> <furnitureId> 1
```

Place the furniture to verify the model loads and the hitbox feels right. If the hitbox
looks off, see [Hitbox Troubleshooting](/myfurniture/question-or-guides/frequently-asked-questions/hitbox-troubleshooting).

---

## After importing — what was generated?

`/mf pack` creates two things per imported model:

| Generated file | Where | Purpose |
|---|---|---|
| Furniture YAML | `plugins/MyFurniture/furniture/…/<id>.yml` | Gameplay config (activators, sit, storage, …) |
| ExecutableItem YAML | `plugins/ExecutableItems/items/<id>.yml` | The held/dropped item (name, lore, texture) |

Edit the furniture YAML to add activators, enable storage, or change display options.
Edit the EI YAML to customise the item name, lore, and model. Both are hot-reloadable with
`/mf reload` and `/ei reload`.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| No furniture appears after `/mf pack` | Model file is a `.zip`, not a folder | Unzip it first |
| Furniture model is invisible | Resource pack not received by client | Check `selfHostPack` and firewall; try external hosting |
| Wrong hitbox (too large / offset) | Bounding box not regenerated | Run `/mf pack` again; do not edit `boundingBoxZones` manually |
| `furnitureId` not recognised | Furniture YAML not loaded | Run `/mf reload` after pack |
| Animations don't play | File placed in `__textures__` instead of `animations/` | Move `.bbmodel` to `animations/` and re-run `/mf pack` |

---

## Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/YGqUOHfbK7w" title="MyFurniture — Import your own furniture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Next steps

- [Furniture Features](/myfurniture/configurations/furniture-configuration/furniture-features) — full YAML reference
- [Interactive Furniture with Activators](/myfurniture/question-or-guides/tutorials/interactive-furniture-with-activators) — add interactions to your furniture
- [Blockbench Animations](/myfurniture/question-or-guides/blockbench-animations) — animated multi-bone furniture
- [Hitbox Troubleshooting](/myfurniture/question-or-guides/frequently-asked-questions/hitbox-troubleshooting) — fix hitbox issues
