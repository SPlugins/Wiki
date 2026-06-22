# Launch Diamond Axe

This tutorial covers the basics of creating a throwable diamond axe using ExecutableItems and SCore's Custom Projectiles system. This guide focuses specifically on the launching mechanic. For advanced features like Thor-style lightning, piercing enemies, or making the axe return to you, you'll need to build upon this foundation using additional commands and activators.

![](https://media.ssomar.com/m/docs-img-firstsnowball.gif)

## Overview

To create a throwable diamond axe, you'll need:
1. A **Custom Projectile** (SCore) - handles the visual and physics
2. An **ExecutableItem** (EI) - triggers the projectile launch

## Step 1: Create the Projectile

First, create a custom projectile using SCore:

```bash
/score projectiles-create axe
```

### Configure the Projectile

When configuring your projectile:

- **Projectile Type**: Choose `SNOWBALL` (most commonly used for item projectiles)
- **Visual Item**: Set to `DIAMOND_AXE`

:::info Why Snowball?
Only certain projectile types support custom visual items. Snowball is the most reliable choice for displaying custom items while maintaining good physics behavior.
:::

## Step 2: Create the ExecutableItem

Create a new ExecutableItem to serve as the throwable axe:

```bash
/ei create diamondaxe
```

Configure the basic properties:
- **Material**: `DIAMOND_AXE`
- **Display Name**: Your choice (e.g., `&6Throwable Axe`)
- **Lore**: Add descriptive text about the throwing ability

### Configure the Activator

Add a `PLAYER_RIGHT_CLICK` activator to trigger the throw:

```yaml
activators:
  throw_axe:
    activators:
    - PLAYER_RIGHT_CLICK

    playerCommands:
    - "LAUNCH projectile:axe velocity:1.5"
    # Then you can add particles, sound ...
```

:::tip
For detailed LAUNCH command options, see [LAUNCH Command Documentation](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
:::

## Step 3: Test Your Axe

1. Get the item: `/ei give <your_name> diamondaxe`
2. Right-click to throw the axe

## Premium Enhancement Examples

With the Premium version, you can add advanced features:


### Add Lightning Effect (Thor Style)

```yaml
# In your PROJECTILE configuration (not the item):
activators:
  on_hit_entity:
    option: PROJECTILE_HIT_ENTITY

    entityCommands:
    - "STRIKELIGHTNING"
    - "DAMAGE 10"
```

## Troubleshooting

### Axe Doesn't Launch

- Verify the projectile ID matches exactly: `/score projectiles-list`
- Ensure LAUNCH command syntax is correct

### Visual Item Not Showing

- Only snowball, egg, and ender pearl projectiles support visual items reliably
- Make sure "Visual Item" is set in the projectile configuration

## Related Documentation

- [Custom Projectiles System](/tools-for-all-plugins-score/custom-projectiles)
- [LAUNCH Command](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
- [PLAYER_RIGHT_CLICK Activator](/executableitems/configurations/activator-configuration/list-of-the-activators#player_right_click)
- [Projectile Activators](/tools-for-all-plugins-score/custom-projectiles#projectile-activators)