import LinkPreview from '@site/src/components/LinkPreview';

# Entity Commands

:::tip
"Multi-world" compatibility for the vanilla commands.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Example, you want summon a Zombie in the world SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Example with a placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Entity commands supports NPCs from Citizens
:::

## Mixed Commands

In addition of the following list of commands you can also use:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

These commands can be used in the Player related commands OR Entity related commands.

## Custom commands

_Sorted by alphabetical order_

### ANGRY\_AT

* Info: Sets the entity target to a specific UUID
* Command setting:
  * `{entityUUID}`: The entity UUID of the target
* Example:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Sets whether this mob is aware of its surroundings. Unaware mobs will still move if pushed, attacked, etc. but will not move or perform any actions on their own. Unaware mobs may also have other unspecified behaviours disabled, such as drowning.

:::info
it only works for 1.16.5+
:::

* Command setting:
  * `{value}`: true or false
* Example:

```
- AWARENESS value:true
```

### CHANGE\_TO

* Info: Replaces the mob with an entity of another type. It will keep the current velocity of the current entity.
  * You can specify an [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Or an entity definition example: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Or a MythicMob ID
* Command setting:
  * `{entity}`: The entity specification
* Example:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Info: Drops an Executable Item in the entity's location
* Command settings:
  * `{id}`: Item id of the ExecutableItem
  * `{quantity}`: The amount of the executable item that will drop
  * `[owner]`: (Optional) The owner of the dropped item (player IGN or UUID)
  * `[itemdata]`: (Optional) Item data settings containing:
    * `Usage`: Set the usage value
    * `Variables`: Set custom variables (format: `{key:value}`)
    * `Durability`: Set the durability value
* Example:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Drops an Executable Block in the entity's location
* Command settings:
  * `{id}`: Item id of the ExecutableBlock
  * `{quantity}`: The amount of the executable block that will drop
* Example:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Drops an item in the entity's location
* Command settings:
  * `{material}`: The item type. [Reference](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(MUST BE AT ALL CAPS)**
  * `{quantity}`: The amount of the item that will drop
* Example:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Heals the entity with a specific amount, if not specified it will full heal the entity.
* Command setting:
  * `{amount}`: The amount of the heal
* Example:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: Kills the mob without the death animation
* No command setting
* Example:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Makes the player to ride the entity targeted.
* Command settings:
  * `{control}`: true/false whether you can manually controll the entity or not
  * `{speed}`: how fast the entity can go as you ride it
* Example:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Sets the AI state of the entity
* Command settings:
  * `{value}`: true to enable the AI of the entity and false to disable.
* Example:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Sets the entity in it's "adult" state
* No command setting
* Example:

```
- SET_ADULT
```

* Example Situation:
  * If this command is executed on a baby chicken, it will turn into its adult form.

### SET\_BABY

* Info: Sets the entity in it's "baby" state
* No command setting
* Example:

```
- SET_BABY
```

* Example Situation:
  * If this command is executed on a adult chicken, it will turn into its baby form.

### SET\_ENTITY\_NAME

* Info: Forcefully sets the entity's name
* Command setting:
  * `{name}`: the new name of the entity
* Example:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Shear the entity
* No command setting
* Example:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teleports the entity to the user of the item
* No command setting
* Example:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teleports the user of the item to the entity
* No command setting
* Example:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teleports the entity in a specific location
* Command settings:
  * `{x}`: X-Coordinate
  * `{y}`: Y-Coordinate
  * `{z}`: Z-Coordinate
* Example:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```