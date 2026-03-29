# Blockbench Animations

MyFurniture supports animated furniture using [Blockbench](https://www.blockbench.net/) `.bbmodel` files. Create models with bones and keyframe animations in Blockbench, and MyFurniture will automatically generate the resource pack assets and play the animations in-game.

## How It Works

- Each **bone** in your Blockbench model becomes a separate `ItemDisplay` entity
- Animations are played using Minecraft's native display entity interpolation (smooth client-side rendering)
- Resource pack models and textures are auto-generated from the `.bbmodel` file — no manual model editing needed

## Setup

### 1. Create Your Model in Blockbench

- Use the **Java Block/Item** model type
- Organize your elements into **bones** (groups in the outliner)
- Name bones clearly (e.g., `base`, `blade`, `lid`)
- Create animations with keyframes for **position**, **rotation**, and **scale** channels
- A bone named `hitbox` is ignored for rendering (use it for collision reference only)

:::tip
For looping animations like spinning fans, create a single animation with the `loop` mode set in Blockbench. MyFurniture handles seamless looping automatically, including rotation subdivision for smooth 360° spins.
:::

### 2. Export the `.bbmodel` File

Save your Blockbench project as a `.bbmodel` file. The textures are embedded in the file — no separate texture export is needed.

### 3. Place in the Animations Folder

Copy the `.bbmodel` file to:

```
plugins/MyFurniture/animations/
```

For example:
```
plugins/MyFurniture/animations/ceiling_fan.bbmodel
plugins/MyFurniture/animations/treasure_chest.bbmodel
```

### 4. Restart the Server

On startup, MyFurniture will automatically:
1. Parse the `.bbmodel` file
2. Generate resource pack assets (one model JSON per bone + textures)
3. Create a furniture configuration in `plugins/MyFurniture/furniture/__animated__/`
4. Include the models in the resource pack

You'll see log messages like:
```
[AnimGen] Textures: [ceiling_fan], Bones: 3
[AnimGen] Bone: base (4 elements, scale=0.675)
[AnimGen] Bone: blade (9 elements, scale=0.675)
[AnimGen] Full model: 13 elements, scale=0.675
Auto-generated pack assets for: ceiling_fan
Created animated furniture: ceiling_fan
```

## Playing Animations

### Using Activators (Right-Click / Left-Click)

The auto-generated furniture config includes two default activators:

- **Right-click** → Starts the first animation
- **Left-click** → Stops the animation

You can customize these in the generated furniture YAML file.

### Using Display Commands

You can trigger animations from any activator using display commands:

```yaml
# Start an animation
displayCommands:
  - "RUN_ANIMATION <modelName> <animationName>"

# Stop the current animation
displayCommands:
  - "STOP_ANIMATION"
```

- `<modelName>` — The `.bbmodel` file name without extension (e.g., `ceiling_fan`)
- `<animationName>` — The animation name as defined in Blockbench, or the animation index (0, 1, 2...)

### Programmatic Control

Animations can also be controlled via `FurniturePlaced` methods:

```java
furniturePlaced.runAnimation("ceiling_fan.bbmodel", "spin");
furniturePlaced.stopAnimation();
furniturePlaced.isAnimationRunning();
```

## Animation Behavior

- When an animation starts, the static furniture model is **hidden** and replaced by the animated bone entities
- When the animation stops (or the furniture is broken), the bone entities are removed and the static model reappears
- Animations preserve the furniture's **rotation** — if you placed it facing east, the animation plays facing east
- Walking away (chunk unload) automatically stops the animation and restores the furniture
- Breaking animated furniture properly cleans up all bone entities

## Supported Features

| Feature | Supported |
|---------|-----------|
| Position keyframes | Yes |
| Rotation keyframes | Yes |
| Scale keyframes | Yes |
| Looping animations | Yes |
| One-shot animations | Yes |
| Multiple animations per model | Yes |
| Per-bone animation | Yes |
| 360° rotation (ceiling fans, etc.) | Yes (auto-subdivided) |
| Embedded textures | Yes |
| Multiple textures per model | Yes |

## Limitations

- Blockbench **Generic Model** format is not supported — use **Java Block/Item**
- Element rotation is limited to single-axis, 22.5° increments (Minecraft model constraint)
- Very large models are automatically scaled to fit Minecraft's coordinate limits `[-16, 32]`
- Animations use Minecraft's native interpolation — the smoothness depends on keyframe spacing

## Troubleshooting

### Textures not showing

- Make sure the `.bbmodel` file has embedded textures (check in Blockbench: File > Export > ensure textures are included)
- Run `/mf pack` to regenerate the resource pack
- Reconnect to force the resource pack to reload

### Animation not playing

- Check the server log for `[AnimGen]` messages during startup
- Ensure the `.bbmodel` file is in `plugins/MyFurniture/animations/`
- Verify the animation exists in the Blockbench file (open it in Blockbench to check)

### Model appears too large or offset

- MyFurniture automatically scales and centers models. If the result is unexpected, try centering your model at the origin in Blockbench
- The model's Y=0 in Blockbench corresponds to the placement block surface
