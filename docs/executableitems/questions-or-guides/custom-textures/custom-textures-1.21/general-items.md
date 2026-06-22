# Custom Item Textures (Minecraft 1.13 - 1.21.3)

This comprehensive guide will teach you how to create custom textures for items in Minecraft versions 1.13 through 1.21.3 using Custom Model Data and resource packs.

:::warning Armor Textures
This tutorial does **not** cover armor retexturing. For armor, you'll need to use OptiFine CIT (Custom Item Textures). Search for "OptiFine armor retexturing" for tutorials on that method.
:::

:::danger Important Naming Rules
**ALL file and folder names MUST be lowercase only.**

Using uppercase characters will cause textures to fail loading. Always use `custom_sword` instead of `CustomSword`.
:::

## Video Tutorial

If you prefer video format, this tutorial is based on the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisites

- **Text Editor**: Use Notepad++, VS Code, or similar (NOT regular Notepad)
- **Image Editor**: Photoshop, Paint.NET, GIMP, or Paint 3D
- **Compression Tool**: WinRAR, 7-Zip, or built-in OS compression
- **Basic JSON knowledge** (helpful but not required)

:::tip File Extensions
None of the files you create are `.txt` files. Make sure your editor can save specific file types like `.json`, `.mcmeta`, and `.png`.
:::

## Part 1: Setting Up Your ExecutableItem

### Step 1: Create Your Item

First, create the ExecutableItem that will use the custom texture:

```
/ei create my_custom_pickaxe
```

### Step 2: Configure Basic Properties

Set up the item's display name, lore, and any other features you want:

```
/ei edit my_custom_pickaxe
```

Example configuration:
- **Name**: `&b&lCustom Pickaxe`
- **Material**: `DIAMOND_PICKAXE`
- **Lore**: Add any descriptive text

## Part 2: Creating Your Texture

### Step 3: Design Your Texture Image

Create your custom texture using an image editor:

**Requirements:**
- **Format**: PNG with transparency support
- **Resolution**: 16x16 pixels (or power of 2: 32x32, 64x64, 128x128, etc.)
- **File name**: Use lowercase with underscores (e.g., `custom_pickaxe.png`)

:::tip Image Resolution
While 16x16 is standard, you can use higher resolutions like 32x32 or 64x64 for more detailed textures. Just keep it as a power of 2.
:::

Save your texture file - you'll need it in the next section.

## Part 3: Building the Resource Pack

### Step 4: Create Folder Structure

Create the following folder structure:

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Step 5: Create pack.mcmeta

In the root folder, create `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack Format by Version
Choose the correct `pack_format` for your Minecraft version:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

See the [full pack format list](https://minecraft.wiki/w/Pack_format) for all versions.
:::

### Step 6: Add Your Texture File

1. Navigate to `assets/minecraft/textures/item/custom_textures/`
2. Place your texture PNG file here (e.g., `custom_pickaxe.png`)

### Step 7: Identify the Base Item Material

You need to know the Minecraft ID of the base item:

1. Press **F3 + H** in Minecraft to enable Advanced Tooltips
2. Hover over the item to see its ID (e.g., `minecraft:diamond_pickaxe`)
3. Use the part after the colon for file names (e.g., `diamond_pickaxe`)

![Item ID shown with Advanced Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Critical: Use the Minecraft ID
The file name MUST match the Minecraft item ID, not:
- ❌ Your item's display name
- ❌ Your texture file name
- ❌ Your ExecutableItem ID
- ✅ The Minecraft material ID (e.g., `diamond_pickaxe`)
:::

### Step 8: Create the Base Model File

In `assets/minecraft/models/item/`, create `diamond_pickaxe.json`:

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Understanding the fields:**

- `"parent"`: Base model type
  - Use `"generated"` for most items
  - Use `"handheld"` if item looks wrong when held
- `"layer0"`: Default vanilla texture
- `"overrides"`: Array of custom model data mappings
- `"custom_model_data"`: The number you'll set in ExecutableItems
- `"model"`: Path to your custom model file

:::tip Multiple Custom Textures
To add more custom textures for the same item, add more override entries:

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Step 9: Create the Custom Model File

1. Create folder: `assets/minecraft/models/item/diamond_pickaxe/`
2. Create file: `1.json` inside that folder

Content of `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Understanding the texture path:**

The `"layer0"` value is a path relative to `assets/minecraft/textures/`:
- Path: `item/custom_textures/custom_pickaxe`
- Full path: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Common Error: Incorrect Texture Path
The most common mistake is setting the wrong path in `layer0`. Double-check that:
1. The path matches your folder structure
2. You don't include `.png` extension
3. The path starts from inside the `textures/` folder
:::

### Step 10: Package the Resource Pack

#### For Windows (WinRAR/7-Zip):
1. Select `pack.mcmeta` and `assets` folder
2. Right-click → Add to archive / Compress
3. Choose `.zip` format
4. Name it `ExecutableItemsTexturePack.zip`

#### For Mac/Linux:
1. Select `pack.mcmeta` and `assets` folder
2. Compress to ZIP using built-in compression
3. Or place in a folder and use as-is for local testing

![Creating ZIP file](https://media.ssomar.com/m/docs-img-image-244.png)

![Change to .ZIP format](https://media.ssomar.com/m/docs-img-image-158.png)

### Step 11: Install the Resource Pack

1. Place the `.zip` file in `.minecraft/resourcepacks/`
2. Launch Minecraft
3. Go to Options → Resource Packs
4. Enable your pack by clicking the arrow

## Part 4: Connecting ExecutableItems to the Texture

### Step 12: Set Custom Model Data

Edit your ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Navigate to the `customModelData` configuration and set it to match your override:

![Custom Model Data setting](https://media.ssomar.com/m/docs-img-image-163.png)

Set the value to `1` (or whatever number you used in the override):

![Setting value to 1](https://media.ssomar.com/m/docs-img-image-61.png)

**In the config file, it looks like:**

```yaml
customModelData: 1
```

### Step 13: Test Your Custom Texture

Give yourself the item:

```
/ei give my_custom_pickaxe
```

You should now see your custom texture!

![Custom texture in inventory](https://media.ssomar.com/m/docs-img-image-364.png)

![Custom texture when held](https://media.ssomar.com/m/docs-img-image-392.png)

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Texture not showing** | Check that file names are all lowercase |
| **Purple/black texture** | Verify the `layer0` path matches your texture location |
| **Pack not loading** | Check `pack_format` matches your Minecraft version |
| **Wrong item appearance** | Change `"generated"` to `"handheld"` in the model parent |
| **Item looks vanilla** | Verify `customModelData` in EI matches your override number |

## Advanced Tips

### Organizing Multiple Textures

Create subfolders for different item types:

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Update your paths accordingly:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Using 3D Models

For 3D models created in [Blockbench](https://www.blockbench.net/):

1. Create your model in Blockbench
2. Export as "Java Block/Item"
3. Replace the content of your `1.json` with the exported model
4. Make sure texture paths match your pack structure

### Server Deployment

To use custom textures on a server, you'll need to host the resource pack online. See our [Uploading Texture Pack Guide](./uploading-texture-pack.md) for instructions.

## Download Example Pack

If you're having trouble following the steps, download this example pack to see the correct structure:

[Download ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Additional Resources

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Pack Format Version History](https://minecraft.wiki/w/Pack_format)
- [Blockbench - Free 3D Model Editor](https://www.blockbench.net/)

---

Need help? Join our [Discord community](https://discord.gg/ExecutableItems) and ask in the support channels!
