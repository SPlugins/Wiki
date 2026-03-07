---
description: "Create custom item textures in Minecraft 1.21.4+ using the new item model system. Step-by-step resource pack tutorial for custom items. No client mods required."
keywords: [custom textures minecraft 1.21.4, item model system, resource pack, ExecutableItems, minecraft item textures, pack_format, custom items textures, minecraft 1.21.4 pack_format]
---

# Custom Textures for Minecraft 1.21.4+

This guide covers the new item model system introduced in Minecraft 1.21.4+. If you prefer video tutorials, check out [this video guide](https://youtu.be/K39U55l4-O0) by Special70.

:::danger Important Naming Convention
**Always use lowercase letters and underscores for file and folder names.**

Uppercase characters or special characters will cause the resource pack to fail. Use naming like `custom_sword` instead of `CustomSword`.
:::

## Overview

Starting with Minecraft 1.21.4, custom item textures use a new model definition system that's more flexible and powerful than previous versions. This guide will walk you through creating a basic custom texture pack.

## Prerequisites

- Text editor (VS Code, Notepad++, etc.)
- Image editing software for creating textures (optional)
- Basic understanding of JSON format

## Step-by-Step Guide

### Step 1: Create Resource Pack Folder

Create a new folder for your resource pack. Give it a descriptive name like `my_custom_textures`.

```
my_custom_textures/
```

### Step 2: Create Pack Metadata Files

Create these essential files in your pack's root folder:

#### pack.mcmeta (Required)

This file defines your resource pack's properties. Create `pack.mcmeta` with the following content:

```json
{
    "pack": {
        "pack_format": 46,
        "description": "My Custom Textures Pack"
    }
}
```

:::info Pack Format Numbers
The `pack_format` value corresponds to your Minecraft version:
- **46** = Minecraft 1.21.4+
- See [Pack Format Reference](https://minecraft.wiki/w/Pack_format) for other versions
:::

#### pack.png (Optional)

Add a 128x128 PNG image named `pack.png` to display as the pack icon in the resource packs menu.

### Step 3: Create Assets Folder Structure

Create the following folder structure inside your resource pack:

```
my_custom_textures/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/          # Namespace folder
        ├── items/          # Item model definitions
        ├── models/         # 3D models and references
        │   └── item/
        └── textures/       # PNG texture files
            └── item/
```

:::tip Custom Namespaces
You can create custom namespaces instead of using `minecraft`. For example, `assets/myplugin/items/`. This helps organize custom content separately from vanilla overrides.
:::

## Creating Your First Custom Texture

Let's create a custom texture for a mace using Custom Model Data. We'll make it look like a bat.

### Step 4: Create Item Model Definition

Navigate to `assets/minecraft/items/` and create a file named `mace.json`:

```json
{
    "model": {
        "type": "select",
        "property": "custom_model_data",
        "fallback": {
            "type": "model",
            "model": "item/mace"
        },
        "cases": [
            {
                "when": "bat",
                "model": {
                    "type": "model",
                    "model": "item/bat"
                }
            }
        ]
    }
}
```

**Understanding the Item Model Definition:**

- `"type": "select"` - Uses a selector to choose between different models
- `"property": "custom_model_data"` - Checks the Custom Model Data value
- `"fallback"` - Default model when no Custom Model Data matches
- `"cases"` - Array of conditions that match specific Custom Model Data values
- `"when": "bat"` - When Custom Model Data is set to "bat", use the bat model

:::info
Learn more about the [Item Model Definition system](https://minecraft.wiki/w/Items_model_definition#select) on the Minecraft Wiki.
:::

### Step 5: Create the Model File

Navigate to `assets/minecraft/models/item/` and create `bat.json`:

```json
{
    "parent": "item/generated",
    "textures": {
        "layer0": "item/bat"
    }
}
```

**Understanding the Model File:**

- `"parent": "item/generated"` - Uses the standard 2D item rendering
- `"layer0": "item/bat"` - Points to the texture file at `assets/minecraft/textures/item/bat.png`

:::warning Important Path Rules
- Texture paths in model files can only use `item/` or `block/` as the parent directory
- The path `"item/bat"` refers to `textures/item/bat.png`
- Do **not** confuse this with the model path in `mace.json`, which refers to `models/item/bat.json`
:::

For more information on model files, see the [Minecraft Wiki Model Reference](https://minecraft.wiki/w/Model).

### Step 6: Add Your Texture Image

1. Navigate to `assets/minecraft/textures/item/`
2. Add your custom texture as `bat.png`

:::tip Texture File Requirements
- **Format**: PNG files only
- **Resolution**: 16x16 pixels (standard), but higher resolutions work
- **Transparency**: Supported via alpha channel
- If your PNG doesn't work, try reconverting it using an online PNG converter to fix potential format issues
:::

### Step 7: Testing Your Custom Texture

1. Place your resource pack folder in `.minecraft/resourcepacks/`
2. Enable the resource pack in Minecraft
3. Run this command to test:

```
/give @s mace[minecraft:custom_model_data={strings:["bat"]}]
```

You should now see your custom texture on the mace!

## Using with ExecutableItems

To apply custom textures in ExecutableItems, use the Custom Model Data feature:

```yaml
material: MACE
customModelData:
  type: STRING
  value: bat
```

## Advanced Topics

### Using 3D Models

For 3D models, use [Blockbench](https://www.blockbench.net/) to create your model:

1. Create your 3D model in Blockbench
2. Export as "Java Block/Item Model"
3. Save the JSON file to `models/item/`
4. Update the texture paths in the model file
5. Reference the model in your item definition

### Multiple Custom Textures

Add more cases to support multiple custom textures:

```json
"cases": [
    {
        "when": "bat",
        "model": {
            "type": "model",
            "model": "item/bat"
        }
    },
    {
        "when": "sword_red",
        "model": {
            "type": "model",
            "model": "item/sword_red"
        }
    }
]
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Texture not showing | Check file names are lowercase with underscores only |
| Pink/purple texture | Missing texture file or incorrect path |
| Model not loading | Verify JSON syntax is valid |
| Pack not detected | Check `pack_format` matches your Minecraft version |

## Additional Resources

- [Minecraft Wiki: Item Model Definition](https://minecraft.wiki/w/Items_model_definition)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Blockbench - 3D Modeling Software](https://www.blockbench.net/)
