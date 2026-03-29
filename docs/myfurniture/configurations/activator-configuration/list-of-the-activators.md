import CustomTag from '@site/src/components/CustomTag';

# List of the Activators

## Activators of ExecutableItems

Here you have the list of activators available with their description and some examples. The activators allow you to execute custom actions,  it can have conditions, run commands, have cooldown, etc.

Premium activators are labelled with the tag: <CustomTag type="premium" />

Activator features are features that are exclusive to that activator.

### PLAYER\_RIGHT\_CLICK\_ON

* Info: Activator that gets triggered when the player right click on the furniture.

### PLAYER\_LEFT\_CLICK\_ON

* Info: Activator that gets triggered when the player left click on the furniture.

### PLAYER\_ALL\_CLICK\_ON

* Info: Activator that gets triggered when the player right or left click on the furniture.

### PLAYER\_BREAK

* Info: Activator that gets triggered when the player broke the furniture.

### PLAYER\_PLACE

* Info: Activator that gets triggered when the player placed the furniture.

### PLAYER\_SCROLL\_DOWN\_BY\_TARGETING

* Info: Activator that gets triggered when the player scroll down with this mouse while targeting the furniture.

### PLAYER\_SCROLL\_UP\_BY\_TARGETING

* Info: Activator that gets triggered when the player scroll up with this mouse while targeting the furniture.

### LOOP <CustomTag type="premium" />

* Info: Run commands for the furniture repeatedly at a configurable interval (in ticks).

## Display Commands

Display commands are special commands that can be used in activator `displayCommands` to control the furniture's visual behavior.

### RUN\_ANIMATION

* Info: Starts a Blockbench animation on the furniture. The static model is hidden and replaced by animated bone entities.
* Usage: `RUN_ANIMATION <modelName> <animationName>`
* Parameters:
  * `<modelName>` — The `.bbmodel` file name without extension (must be in `plugins/MyFurniture/animations/`)
  * `<animationName>` — The animation name as defined in Blockbench, or the index (0, 1, 2...)
* Example:

```yaml
displayCommands:
  - "RUN_ANIMATION ceiling_fan spin"
```

### STOP\_ANIMATION

* Info: Stops the currently running animation on the furniture. Removes bone entities and shows the static model again.
* Usage: `STOP_ANIMATION`
* Example:

```yaml
displayCommands:
  - "STOP_ANIMATION"
```

### Animation Activator Example

A typical animated furniture setup with right-click to start and left-click to stop:

```yaml
activators:
  start_animation:
    option: PLAYER_RIGHT_CLICK_ON
    displayName: '&eStart Animation'
    displayCommands:
      - "RUN_ANIMATION ceiling_fan spin"
  stop_animation:
    option: PLAYER_LEFT_CLICK_ON
    displayName: '&cStop Animation'
    displayCommands:
      - "STOP_ANIMATION"
```
