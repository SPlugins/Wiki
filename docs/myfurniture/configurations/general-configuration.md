import CustomTag from '@site/src/components/CustomTag';

# General Configuration

On this page you will learn the configuration of MyFurniture that is on config.yml located in plugins/MyFurniture/config.yml.

## Config.yml

```yaml
# ----------------------------------
# -
#       MyFurniture
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://docs.splugins.net/myfurniture/information-mf
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -
checkVersionMsg: true
whitelistedWorlds: []
giveLimit: 100
silentGive: false
premiumEnableCooldownForOp: true

displayDefaultScale: 1.0
displayDefaultPitch: 90
displayDefaultTransform: NONE

selfHostPack: true # Set it to true to host the textures pack yourself
texturesPackUrl: '' # Set it to "" to disable
maxFurniturePlacedUsingCommand: 500

obfuscatePack: false # Set it to true to obfuscate resource pack file names
usePackSquash: false # Set it to true to optimize the pack with PackSquash
packSquashPath: "packsquash" # Path to the PackSquash binary
```

#### checkVersionMsg

* Info: Boolean value to display if there is a new update for MyFurniture.
* Example:

```yaml
checkVersionMsg: true
```

#### whitelistedWorlds

* Info: List of world names used to whitelist worlds where MyFurniture will be enabled. Leave empty `[]` to allow all worlds.
* Example:

```yaml
whitelistedWorlds: # In this example MyFurniture will only be enabled on "lobby" and "survival" worlds.
- lobby
- survival
```

#### giveLimit

* Info: Integer value that represents a limit/cap for the MyFurniture command of give (/mf give).
* Example:

```yaml
giveLimit: 100
```

#### silentGive

* Info: Boolean value to silence the output of the give MyFurniture command (/mf give) in the chat.
* Example:

```yaml
silentGive: false
```

#### premiumEnableCooldownForOp <CustomTag type="premium" />

* Info: Boolean value that makes the op/operators/admins players not have cooldown.
* Example:

```yaml
premiumEnableCooldownForOp: true
```

#### displayDefaultScale

* Info: Default scale for all placed furniture display entities.
* Example:

```yaml
displayDefaultScale: 1.0
```

#### displayDefaultPitch

* Info: Default pitch rotation (in degrees) for placed furniture.
* Example:

```yaml
displayDefaultPitch: 90
```

#### displayDefaultTransform

* Info: The ItemDisplay transform mode used for furniture rendering.
  * Options: `NONE`, `FIXED`, `HEAD`, `GUI`
* Example:

```yaml
displayDefaultTransform: NONE
```

#### selfHostPack

* Info: Boolean value to enable self-hosting the resource pack on a built-in HTTP server. When enabled, the pack is automatically sent to players when they join.
* Example:

```yaml
selfHostPack: true
```

:::warning
Self-hosting may not work on all hosting providers due to firewall/NAT restrictions. If the resource pack fails to load for players, set `selfHostPack: false` and configure `texturesPackUrl` with an external hosting URL (e.g., Dropbox, GitHub Pages).
:::

#### texturesPackUrl

* Info: URL of the resource pack ZIP file. Used when `selfHostPack` is `false` or as the download source for `/mf download-default-pack`. Set to `""` to disable.
* Example:

```yaml
texturesPackUrl: "https://github.com/Ssomar-Developement/MyFurniture-pack/raw/main/MyFurniture_Pack_1_21_4.zip"
```

#### maxFurniturePlacedUsingCommand

* Info: Integer value that represents the maximum number of furniture that can be placed using `/mf place` and similar commands at once.
* Example:

```yaml
maxFurniturePlacedUsingCommand: 500
```

#### obfuscatePack

* Info: Boolean value to enable resource pack obfuscation. When enabled, all model and texture file names in the pack are replaced with random UUIDs to prevent easy extraction and reuse of your custom models. Internal JSON references are updated automatically.
* Example:

```yaml
obfuscatePack: true
```

#### usePackSquash

* Info: Boolean value to enable [PackSquash](https://github.com/ComunidadAylas/PackSquash) optimization. PackSquash can reduce pack size by 30-60% by optimizing PNG images, minifying JSON, and using better ZIP compression.
  * PackSquash must be installed separately on your server. Download it from [PackSquash Releases](https://github.com/ComunidadAylas/PackSquash/releases).
* Example:

```yaml
usePackSquash: true
```

#### packSquashPath

* Info: Path to the PackSquash binary. Use just `"packsquash"` if it is in your system PATH, or provide the full absolute path.
* Example:

```yaml
packSquashPath: "/usr/local/bin/packsquash"
```
