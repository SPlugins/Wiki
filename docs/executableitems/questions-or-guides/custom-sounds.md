---
description: "Add custom sounds to your Minecraft server without replacing vanilla sounds. Create a resource pack with sounds.json and use /playsound with ExecutableItems."
keywords: [custom sounds minecraft, resource pack sounds, sounds.json, ExecutableItems, minecraft sound effects]
---

# Custom Sounds

:::info
This method adds new custom sounds **without** replacing any existing vanilla sounds.
:::

Custom sounds in Minecraft are managed through resource packs.

## Overview

To add custom sounds to your ExecutableItems, you'll need to:
1. Create a resource pack with your custom sound files
2. Configure the sounds.json file to register your sounds
3. Use the /playsound command in ExecutableItems to play them

## Step-by-Step Guide

### Step 1: Create Basic Resource Pack Structure

First, create the basic resource pack folder structure:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` - Contains resource pack metadata (version, description)
- `pack.png` - The resource pack icon (optional, but recommended)

### Step 2: Add Custom Namespace Folder

Inside the `assets` folder, create your custom namespace folder. This should be a unique name to avoid conflicts:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Namespace Naming
Choose a descriptive namespace like your server name or plugin name. Examples: `myserver`, `customitems`, `epicrpg`
:::

### Step 3: Create sounds.json

Inside your custom namespace folder, create a `sounds.json` file:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Step 4: Configure sounds.json

Edit `sounds.json` to register your custom sounds:

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### sounds.json Structure Explained

- **Sound ID** (e.g., `epic_sword_slash`): The name you'll use in commands
- **subtitle**: Optional text shown when subtitles are enabled
- **sounds**: Array of sound file paths (without .ogg extension)

:::info Sound Paths
`"customsounds:sword_slash1"` means the file is located at:
`assets/customsounds/sounds/sword_slash1.ogg`

The format is: `namespace:path_inside_sounds_folder`
:::

### Step 5: Add Your Sound Files

Create a `sounds` folder inside your namespace and add your .ogg sound files:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Sound File Requirements
- **Format**: Must be .ogg format (Ogg Vorbis)
- **Mono recommended**: Stereo works but mono is better for positional audio
- **Sample rate**: 44.1 kHz or 48 kHz recommended
- **File size**: Keep files small for faster downloads
:::

### Step 6: Create pack.mcmeta

Create your `pack.mcmeta` file with proper version formatting:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Pack Format Versions

| Minecraft Version | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Check on google for the other versions

## Using Custom Sounds in ExecutableItems

Once your resource pack is created and applied, use the PLAYSOUND command:

### Basic Usage

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Positional Sound

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Converting Audio Files to OGG

If you have MP3, WAV, or other audio formats, you need to convert them to OGG:

### Using Audacity (Free)

1. Download Audacity: https://www.audacityteam.org/
2. Open your audio file
3. Optional: Convert to mono (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Choose quality settings (quality 5-7 is good balance)

### Using Online Converters

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Deploying Your Resource Pack

### Method 1: Server Resource Pack (Recommended)

Upload your resource pack and configure in `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Hosting Options
- Dropbox (get direct link)
- Google Drive (use download link converter)
- Self-hosted web server
- GitHub releases
:::

## Troubleshooting

### Sounds Not Playing

**Problem**: Commands execute but no sound plays

**Solutions**:
1. ✅ Verify resource pack is applied (`/playsound` test with vanilla sound)
2. ✅ Check sound file is .ogg format (not .mp3, .wav, etc.)
3. ✅ Verify sounds.json syntax (use JSON validator)
4. ✅ Check file path matches exactly (case-sensitive)
5. ✅ Test with `/playsound customsounds:your_sound master @s`

### Resource Pack Not Loading

**Problem**: Server resource pack doesn't download for players

**Solutions**:
1. ✅ Verify resource pack URL is direct download link
2. ✅ Check pack.mcmeta format version matches server version
3. ✅ Ensure pack size is under 100MB (client limit)
4. ✅ Verify SHA1 hash in server.properties matches the file

### Wrong Sound Plays

**Problem**: Different sound plays than expected

**Solutions**:
1. ✅ Check for duplicate sound IDs in sounds.json
2. ✅ Verify namespace is correct and in lowercases (customsounds: vs minecraft:)
3. ✅ Check for typos in sound file names


## Related Documentation

- [Resource Pack Format (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Activators List](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Additional Resources

- **Audacity Download**: https://www.audacityteam.org/
- **Free Sound Effects**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **OGG Converters**: https://cloudconvert.com/mp3-to-ogg
- **JSON Validator**: https://jsonlint.com/
