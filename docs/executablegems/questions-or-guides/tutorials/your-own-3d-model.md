---
sidebar_position: 9
description: Give an ExecutableGems gem your own look - tinted generic cuts, an item model from your resource pack or one model per tier.
---

# 🎨 Use your own 3D model

A gem can look three ways. Start with the first, it needs no work at all.

| `model:` | Look | Work |
|---|---|---|
| `cut:oval` | A generic gem tinted with your colours, 4 tiers, animated | None |
| `my_pack:gems/blood_opal` | Your model, the same at every tier | One model |
| `blood_opal` | Your models, one per tier | Four models |

## Option 1: a generic cut

```yaml
model: 'cut:marquise'
color: '#7bc96f'
color2: '#fff2a8'
```

`color` is the body and `color2` the inner light.

![The generic cuts next to the shipped gems](https://media.ssomar.com/m/docs-img-eg-cuts-sheet.jpg)

## Option 2: one model of your own

```yaml
model: 'my_pack:gems/blood_opal'
```

The value is an **item model** of your resource pack. Here the game reads `assets/my_pack/items/gems/blood_opal.json`. If you've never made one, follow the [custom textures guide](../../../executableitems/questions-or-guides/custom-textures/custom-textures-1.21.4+/general-items.md).

Add a texture at `assets/my_pack/textures/item/gems/blood_opal.png`: it is the small icon shown inside texts, such as in tooltips. The item shows with the enchantment glint.

## Option 3: one model per tier

```yaml
model: blood_opal
```

Without a `:`, the plugin uses 4 item models, one per tier:

```
assets/ei/items/gems/blood_opal_t1.json
assets/ei/items/gems/blood_opal_t2.json
assets/ei/items/gems/blood_opal_t3.json
assets/ei/items/gems/blood_opal_t4.json
```

Each one is a normal item model definition:

```json
{
  "model": {
    "type": "minecraft:model",
    "model": "ei:item/gems/blood_opal_t1"
  }
}
```

Add the 4 icons for the texts:

```
assets/executablegems/textures/item/icon/blood_opal_t1.png
assets/executablegems/textures/item/icon/blood_opal_t2.png
assets/executablegems/textures/item/icon/blood_opal_t3.png
assets/executablegems/textures/item/icon/blood_opal_t4.png
```

The icons of the shipped gems are 32×32.

## How to send your pack

Your pack is sent like any other, for instance with [ExecutableItems' texture pack settings](../../../executableitems/questions-or-guides/custom-textures/custom-textures-1.21/uploading-texture-pack.md). Minecraft stacks it with the ExecutableGems pack, which the plugin sends by itself.

:::warning
Do not edit `pack/ExecutableGems_Pack.zip`: it is replaced at each start.
:::
