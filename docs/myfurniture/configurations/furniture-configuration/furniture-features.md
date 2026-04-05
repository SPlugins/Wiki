import CustomTag from '@site/src/components/CustomTag';

# Furniture Features

List of furniture features, these are the first thing you should set up on your furniture.

Premium features are labeled with the tag: <CustomTag type="premium" />

### Activators

* Very important features that allow you to add abilities on your furniture
* Dedicated Wiki for this feature : [MF Activators list](/myfurniture/configurations/activator-configuration/list-of-the-activators) and [MF Activators features](/myfurniture/configurations/activator-configuration/activators-features)

### ExecutableItem

* Info: Define the ExecutableItem ID with which the Furniture is associated. Then manage all item settings directly in ExecutableItems.
* Example:

```yaml
executableItem: acacia_bed
```

## Title Features

It supports [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) and [CMI](https://www.spigotmc.org/resources/3742/)

#### activeTitle

* Info: Boolean value that selects whether the title hologram is enabled or not.
* Example:

```yaml
activeTitle: false
```

#### title

* Info: The displayed text of the hologram. Supports color codes and placeholders.
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

#### titleAdjustment

* Info: How high or low is the adjustment of the elevation of the title hologram. Positive number for upwards, negative number for downwards.
* Example:

```yaml
titleAdjustment: 0.5
```

#### Title Features Example

```yaml
titleFeatures:
  activeTitle: true
  title:
   - Hello
   - '&6It supports color'
   - and %placeholder%
  titleAdjustment: 0.5
```

## Display Features

#### itemModel

* Info: The item model key of the furniture. References the model in the resource pack.
* Example:

```yaml
itemModel: myfurniture:acacia_bed
```

#### scale

* Info: Scale of the display entity.
* Example:

```yaml
scale: 1.0
```

#### aligned

* Info: Boolean value that selects if the display should be aligned (yaw snaps to 90° increments).
* Example:

```yaml
aligned: false
```

#### customPitch

* Info: Custom pitch rotation offset in degrees.
* Example:

```yaml
customPitch: 90
```

#### customY

* Info: Custom Y offset for the placement position.
* Example:

```yaml
customY: 1.0
```

#### glow

* Info: Boolean value that selects if the furniture should glow.
* Example:

```yaml
glow: false
```

#### glowColor

* Info: Integer RGB value to customize the glow color. Only applies when `glow` is `true`.
* Example:

```yaml
glowColor: 16711680 # Red (RGB: 255, 0, 0)
```

:::info
Common RGB integer values: Red = `16711680`, Green = `65280`, Blue = `255`, White = `16777215`. You can use online RGB-to-integer converters.
:::

#### clickToBreak

* Info: Integer value for the amount of clicks needed to break the furniture.
* Example:

```yaml
clickToBreak: 3
```

#### boundingBoxZones

:::warning
Auto generated feature, don't edit it manually.
:::

#### blockLight

* Info: The block lighting component of this brightness. Integer value between 0-15.
* Example:

```yaml
blockLight: 10
```

#### skyLight

* Info: The sky lighting component of this brightness. Integer value between 0-15.
* Example:

```yaml
skyLight: 10
```

#### viewRange

* Info: The view range of the furniture in blocks. Players further than this distance will not see the furniture.
* Example:

```yaml
viewRange: 20.0
```

#### Display Features Example

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

## Other Features

#### interactionRange

* Info: The interaction range of the furniture in blocks. Players further than this distance cannot interact with it.
* Example:

```yaml
interactionRange: 6.0
```

#### dropType

* Info: Select the type of drop the Furniture will have when broken.
  * Options: `IN_THE_INVENTORY`, `ON_THE_GROUND`
* Example:

```yaml
dropType: IN_THE_INVENTORY
```

#### dropBlockIfItIsBroken

* Info: Boolean value that selects if the furniture drops as an item when broken.
* Example:

```yaml
dropBlockIfItIsBroken: true
```

#### onlyBreakableWithEI

* Info: List of ExecutableItem IDs that are allowed to break this furniture. If empty, any item can break it.
* Example:

```yaml
onlyBreakableWithEI:
  - diamond_pickaxe_ei
  - special_hammer
```

#### resetInternalDatasWhenBroken

* Info: Boolean value that selects if all internal data (variables, usage counters) are cleared when the furniture is broken and dropped.
* Example:

```yaml
resetInternalDatasWhenBroken: false
```

#### sitFeatures

* Info: Define if the players can sit on the furniture.
* Example:

```yaml
sitFeatures:
  playerCanSit: false
```

#### storageFeatures

* Info: Define if the furniture can store items like a chest.
* Example:

```yaml
storageFeatures:
  enable: false
```
