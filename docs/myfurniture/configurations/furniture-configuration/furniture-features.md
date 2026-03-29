# Furniture Features

## ExecutableItem

* Define the ExecutableItem ID with which the Furniture is associated
* Then manage all item settings directly in ExecutableItems

```yaml
executableItem: acacia_bed
```

## Title Features

It supports [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) and [CMI](https://www.spigotmc.org/resources/3742/)

### Active Title

* Info: Whether the title hologram would be enabled or not
* Example:

```yaml
activeTitle: false
```

* Required: NO

### Title

* Info: The displayed text of the hologram
* Example:

```yaml
title: '&7&oDefault title'
```

* (With HolographicDisplays) You can display items in the title using `ITEM::MATERIAL`

```yaml
title:
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Required: NO

### Title Adjustment

* Info: How high or low is the adjustment of the elevation of the title hologram
* Example:

```yaml
titleAdjustment: 0.5
```

* Required: NO
  * Extra Info: Positive number for upwards, Negative number for downwards

### Title Features Example

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - '&6It supports color'
   - and %placeholder%
  titleAdjustment: 0.5
```

## Usage

#### Adjust the Furniture usage in the ExecutableItem configuration

## Display Features

### Item Model

* The model of the furniture
* Example:

```yaml
itemModel: myfurniture:acacia_bed
```

### Scale

* Scale of the display
* Example:

```yaml
scale: 1
```

### Aligned

* If you want the display to be aligned (yaw snaps to 90° increments)
* Example:

```yaml
aligned: false
```

### Custom Pitch

* Select the custom pitch
* Example:

```yaml
customPitch: 1
```

### Custom Y

* Select the custom Y offset
* Example:

```yaml
customY: 1.0
```

### Glow

* Whether the furniture glows
* Example:

```yaml
glow: false
```

### Glow Color

* Customize the glow color using an RGB integer value
* Only applies when `glow` is `true`
* Example:

```yaml
glowColor: 16711680
```

:::info
RGB integer values: Red = `16711680`, Green = `65280`, Blue = `255`, White = `16777215`. You can use online RGB-to-integer converters.
:::

### Click To Break

* Amount of clicks needed to break the display creation
* Example:

```yaml
clickToBreak: 3
```

### Bounding Box Zones

:::warning
Auto generated feature, don't edit it
:::

### Block Light

* The block lighting component of this brightness. (Between 0-15)
* Example:

```yaml
blockLight: 10
```

### Sky Light

* The sky lighting component of this brightness. (Between 0-15)
* Example:

```yaml
skyLight: 10
```

### View Range

* Configure the view range of the furniture (in blocks)
* Example:

```yaml
viewRange: 20.0
```

### Display Features Example

```yaml
displayFeatures:
  itemModel: myfurniture:acacia_bed
  scale: 1.0
  aligned: false
  customPitch: 90
  glow: false
  glowColor: 16711680
  clickToBreak: 3
  boundingBoxZones: []
  blockLight: 10
  skyLight: 10
  viewRange: 20.0
```

## Interaction Range

* Configure the interaction range of the furniture (in blocks)
* Example:

```yaml
interactionRange: 6.0
```

## Drop Type

* Info: Select the type of drop the Furniture will have
* Type of drops:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

```yaml
dropType: IN_THE_INVENTORY
```

## Drop Block If It Is Broken

* Info: Whether the furniture drops as an item when broken
* Default: `true`

```yaml
dropBlockIfItIsBroken: true
```

## Only Breakable With EI

* Info: Restrict which ExecutableItems can break this furniture. If set, only the listed items can break it.
* Default: Empty (any item can break it)

```yaml
onlyBreakableWithEI:
  - diamond_pickaxe_ei
  - special_hammer
```

## Reset Internal Data When Broken

* Info: When enabled, all internal data (variables, usage counters) are cleared when the furniture is broken and dropped
* Default: `false`

```yaml
resetInternalDatasWhenBroken: false
```

## Sit Features

* Define if the players can sit or not on the furniture

```yaml
sitFeatures:
  playerCanSit: false
```

## Storage Features

* Define if the furniture can store items like a chest or not

```yaml
storageFeatures:
  enable: false
```

## Activators

* Very important features that allow you to add abilities on your furniture
* Dedicated Wiki for this feature : [MF Activators list](/myfurniture/configurations/activator-configuration/list-of-the-activators) and [MF Activators features](/myfurniture/configurations/activator-configuration/activators-features)
