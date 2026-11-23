---
sidebar_position: 2.5
description: How the ExecutableGems resource pack reaches your players - sent by SCore, merged into an ItemsAdder, Nexo, Oraxen or CraftEngine pack, into your own pack or behind a proxy - with /eg pack export and /eg pack merge.
---

# The resource pack on your server

ExecutableGems has its own resource pack: the gem models, the icons in texts, the tooltip frames, the drawn menus, the sounds and the screen effects. Find your case below.

| Your server | What to do |
|---|---|
| ExecutableItems sends its pack (the default) | Nothing. |
| ItemsAdder, Nexo, Oraxen or CraftEngine sends the pack | Usually nothing. Merge only [if players don't get both packs](#itemsadder-nexo-oraxen-craftengine). |
| A pack set in `server.properties`, or a pack you host yourself | [Merge the EG pack into yours](#your-own-pack). |
| Behind a proxy (Velocity, BungeeCord) | [Read this](#behind-a-proxy). |

## How the pack is sent

The pack is `plugins/ExecutableGems/pack/ExecutableGems_Pack.zip`. The plugin writes it again at each start, so don't edit it.

By default, SCore sends it to the players, next to the pack of ExecutableItems. Minecraft 1.20.3 and newer stacks the two packs.

The settings are in `plugins/ExecutableGems/config.yml`. They work like the pack settings of ExecutableItems:

```yaml
resource-pack:
  self-host: true    # SCore sends the EG pack. false: ExecutableGems sends nothing
  url: ''            # self-host false: a link where you host the EG pack yourself, sent at join
  required: false    # players who decline the pack are kicked
  prompt: ''         # the text of the download screen ('' = Minecraft's)
```

| ExecutableGems | ExecutableItems |
|---|---|
| `resource-pack.self-host` | `selfHostPack` |
| `resource-pack.url` | `texturesPackUrl` |
| `resource-pack.required` | `texturesPackRequired` |

To apply a change without a restart, run `/eg pack refresh`. Players who are online get the new setting at once.

If players can't download the pack, set your server's public IP in `plugins/SCore/config.yml`:

```yaml
selfHostPackIp: 'your.public.ip'
```

## Check what is used

Run `/eg pack info`. It shows:

- how the pack is sent, and if SCore sends it;
- the size of the pack and the Minecraft versions it is made for;
- the packs the plugin reads to find your gems' icons;
- the pack plugins found on the server;
- the gems shown with a ◆ in texts, because no icon was found;
- the gems that use the tooltip frame of a shipped gem of the same colour.

## ItemsAdder, Nexo, Oraxen, CraftEngine

These plugins build and send a pack of their own. SCore sends the EG pack next to it, so players usually get both.

Merge the EG pack into their pack only in these cases:

- players get the pack of the other plugin, but the gems look like amethyst shards;
- you want players to download a single pack.

First, export the EG pack where the plugin reads packs to merge. Then set `self-host: false` and run `/eg pack refresh`.

| Plugin | Command | Then |
|---|---|---|
| Nexo | `/eg pack export Nexo` | It writes `plugins/Nexo/pack/external_packs/ExecutableGems_Pack.zip`. Reload the pack of Nexo. |
| Oraxen | `/eg pack export Oraxen` | It writes `plugins/Oraxen/pack/uploads/ExecutableGems_Pack.zip`. Reload the pack of Oraxen. |
| ItemsAdder | `/eg pack export ItemsAdder` | Add `ExecutableGems/pack/export/ExecutableGems_Pack` to `resource-pack.zip.merge_other_plugins_resourcepacks_folders` in the `config.yml` of ItemsAdder, then run `/iazip`. |
| CraftEngine | `/eg pack export CraftEngine` | Add `ExecutableGems/pack/export/ExecutableGems_Pack.zip` to `resource-pack.merge-external-zip-files` in the `config.yml` of CraftEngine, then run `/ce reload all`. |

:::warning
**After each update of ExecutableGems**, export the pack again, then rebuild the pack of the other plugin. Otherwise players keep the old EG pack.
:::

## Your own pack

Use this when you send one pack yourself: a pack in `server.properties`, a pack you upload after each change, a pack made by a merging plugin.

1. Put your pack zip in the server folder, for example `my_pack.zip`.
2. Run:

```
/eg pack merge my_pack.zip
```

3. The plugin writes `my_pack_with_ExecutableGems.zip` next to it. Your zip doesn't change.
4. Upload the new zip in place of yours, and update its link and SHA-1 hash.
5. Set `self-host: false` in the config of ExecutableGems, then run `/eg pack refresh`.

You can choose the name of the new zip: `/eg pack merge my_pack.zip merged.zip`. The paths start from the server folder or from `plugins/`.

### What the merge does

| A file is... | Result |
|---|---|
| only in the EG pack | Added. |
| in both packs, the same | Kept once. |
| `pack.mcmeta` | Yours is kept, with the overlays of the EG pack added. |
| `sounds.json`, a `lang` file, a font, an atlas | Both are merged into one file. |
| in both packs, different | **Yours is kept.** The command lists it, and writes the full list to `<new zip>.conflicts.txt`. |

The EG pack only uses its own folders (`assets/executablegems/` and `assets/ei/.../gems/`), so a conflict is rare. If you see one, it is usually an old copy of the EG pack inside your pack: delete it from your pack and merge again.

If the command says your `pack.mcmeta` doesn't cover the formats of the EG pack, raise the `max_format` of your pack. The EG pack is made for Minecraft 1.21.11 (format 75) to 26.3 (format 97).

The only vanilla files of the EG pack are two text shaders, in the folders `ov_text_1_21_11/` and `ov_text_26_3/`. They make the names of runewords and Radiant gems shine. If your pack has its own text shader (a custom HUD, for example), the merge keeps yours and lists the EG shader as a conflict. The names then show without the animation, and everything else works.

### Export without merging

`/eg pack export zip` writes a copy of the EG pack to `plugins/ExecutableGems/pack/export/ExecutableGems_Pack.zip`.

`/eg pack export folder` writes it unzipped to `plugins/ExecutableGems/pack/export/ExecutableGems_Pack/`, ready to copy into your pack folder.

Use them with a tool that merges packs, or to host the EG pack yourself with `resource-pack.url`.

## Behind a proxy

SCore serves the pack on the port of each server. Behind a proxy, players often can't reach this port.

Choose one:

- If a plugin of the proxy sends a pack to everyone, merge the EG pack into it with `/eg pack merge`. Then set `self-host: false` on every server.
- Or upload the EG pack yourself (`/eg pack export zip`), set its link in `resource-pack.url` and `self-host: false`.

## Gems you add

A gem you add never needs a new pack:

- A gem with `model: 'cut:...'` uses the generic cuts of the EG pack, tinted with its colours.
- A gem with your own model uses your pack. See [Use your own 3D model](../tutorials/your-own-3d-model.md).

In both cases, the gem gets the tooltip frame of the shipped gem with the closest colour.

If something the gem needs is missing, the plugin uses something that exists, so players never see the black and magenta texture:

| Missing | What players see | `/eg check` and the console |
|---|---|---|
| `model:` in the gem file | The cut `cut:brilliant` | A warning of the gem |
| A cut that doesn't exist (`cut:hexagon`) | The cut `cut:brilliant` | A warning of the gem |
| The icon of the gem | A ◆ in the gem's colour | Nothing, see `/eg pack info` |
| A model of your own pack that the plugin can't see | Your model, if your pack has it | A note (ℹ): fine if you send that pack yourself |

`/eg new` only accepts the 6 cuts.
