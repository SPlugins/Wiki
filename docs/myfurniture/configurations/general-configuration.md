# General Configuration

```yaml
checkVersionMsg: true
whitelistedWorlds: []
giveLimit: 100
silentGive: false
premiumEnableCooldownForOp: true

displayDefaultScale: 1.0
displayDefaultPitch: 90
displayDefaultTransform: NONE

selfHostPack: true
texturesPackUrl: "https://github.com/Ssomar-Developement/MyFurniture-pack/raw/main/MyFurniture_Pack_1_21_4.zip"

obfuscatePack: false
usePackSquash: false
packSquashPath: "packsquash"
```

## Settings

### checkVersionMsg

* Info: Whether the plugin should check for new versions on startup
* Default: `true`

### whitelistedWorlds

* Info: List of worlds where MyFurniture is active. Leave empty `[]` to allow all worlds.
* Default: `[]`

### giveLimit

* Info: Maximum number of furniture items that can be given at once with the `/mf give` command
* Default: `100`

### silentGive

* Info: Whether the give command should be silent (no chat message to the player)
* Default: `false`

### premiumEnableCooldownForOp

* Info: Whether cooldowns apply to operators
* Default: `true`

## Display Settings

### displayDefaultScale

* Info: Default scale for all placed furniture
* Default: `1.0`

### displayDefaultPitch

* Info: Default pitch rotation for placed furniture
* Default: `90`

### displayDefaultTransform

* Info: The ItemDisplay transform mode used for furniture rendering
* Options: `NONE`, `FIXED`, `HEAD`, `GUI`
* Default: `NONE`

## Resource Pack Settings

### selfHostPack

* Info: When enabled, MyFurniture hosts the resource pack on a built-in HTTP server and automatically sends it to players when they join. Disable this if you prefer to host the pack externally.
* Default: `true`

:::warning
Self-hosting may not work on all hosting providers due to firewall/NAT restrictions. If the resource pack fails to load for players, set `selfHostPack: false` and configure `texturesPackUrl` with an external hosting URL.
:::

### texturesPackUrl

* Info: URL to the resource pack ZIP file. Used when `selfHostPack` is `false` or as the download source for `/mf download-default-pack`. Set to `""` to disable.
* Default: `"https://github.com/Ssomar-Developement/MyFurniture-pack/raw/main/MyFurniture_Pack_1_21_4.zip"`

### obfuscatePack

* Info: When enabled, all model and texture file names in the resource pack are replaced with random UUIDs. This prevents users from easily extracting and reusing your custom models. Internal JSON references are updated automatically.
* Default: `false`

:::info
Obfuscation runs automatically during pack generation. It does not affect how furniture looks in-game — only the internal file names change.
:::

### usePackSquash

* Info: When enabled, the resource pack is optimized using [PackSquash](https://github.com/ComunidadAylas/PackSquash) after generation. PackSquash can reduce pack size by 30-60% by optimizing PNG images, minifying JSON, and using better ZIP compression.
* Default: `false`

:::warning
PackSquash must be installed separately on your server. Download it from [PackSquash Releases](https://github.com/ComunidadAylas/PackSquash/releases). After downloading, set the `packSquashPath` to the binary location.
:::

### packSquashPath

* Info: Path to the PackSquash binary. Use just `"packsquash"` if PackSquash is in your system PATH, or provide the full path (e.g., `"/usr/local/bin/packsquash"`).
* Default: `"packsquash"`
