import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

This page will help you to learn about creating custom projectiles and launch them.\
We created for you an in-game editor to make the edition simple. **Use it.**

:::info 
To launch them, easy, use the [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) or [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch) commands. These projectiles cant be given to the players.
:::

### Commands:

| Command                         | Function                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Shows you all projectiles and let you edit them             |
| /score projectiles-create \<id> | Open the editor to create a new projectile                  |
| /score projectiles-delete \<id> | Action to delete a projectile (need confirmation)           |
| /score reload                   | Reload the plugin (useful if you edit a projectile in .yml) |

## **Basic Information**

### Type

This is the first thing you have to set, the type of projectile you want to create, Score supports:

* ARROW
* SPECTRAL\_ARROW
* EGG
* ENDER\_PEARL
* FIREBALL
* SPLASH\_POTION
* SHULKER\_BULLET
* SNOWBALL
* TRIDENT
* WITHER\_SKULL
* DRAGON\_FIREBALL
* THROWNEXPBOTTLE
* WIND\_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Example:

```yaml
type: ARROW
```

### Custom name visible

* It allow you to show the custom name above the projectile
* Options:
  * true
  * false
* Example:

```yaml
customNameVisible: true
```

### Custom Name

* This is the NAME of the projectile, useful for customNameVisible and placeholder stuff.
* Example:

```yaml
customName: '&eBullet'
```

### Visual fire

* Option to allow visual fire on the projectile
* Example:

```yaml
visualFire: true
```

### Invisible

* Whether the projectile will be invisible or not. It requires [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Option to configure if the projectile can be picked up
* Options: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Example:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Whether the projectile will have the glowing effect or not
* Options:
  * true
  * false
* Example:

```yaml
glowing: true
```

### Bounce

* Whether the projectile will bounce from the entity during it's invulnerable state.
* Options:
  * true
  * false
* Example:

```yaml
bounce: true
```

### Gravity

* Whether the projectile will affected by gravity or not
* Options:
  * true
  * false
* Example:

```yaml
gravity: true
```

### Velocity

* How fast the projectile will be
  * <CustomTag type="version" version="1.20.5" /> It also works on FIREBALL, WITHER\_SKULL and DRAGON\_FIREBALL: `2.0` flies twice as fast, `1` keeps the vanilla speed. Before 1.20.5 they keep their vanilla speed.
* Example:

```yaml
velocity: 2.0
```

:::danger
THE DAMAGE OF THE **ARROW** WILL BE AFFECTED BY THIS OPTION

Equation: `velocity x 1 = Arrow Damage`
:::

### Particles

* This can edit what particles will display the projectile around it.
 * `particlesType`: Type of particle 
 * `particlesAmount`: How many particles will it emit each time                                                                 
 * `particlesOffSet`: How close to the projectile will the particles spawn                                                                
 * `particlesSpeed`: How fast the particles will move                                                                 
 * `redstoneColor`: Change the color of redstone particle. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: What block the particle. Only for: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Density of the particles, useful when want a clean trail of your projectile

* Example:

```yaml
particles:
  1:
    particlesType: FLAME
    particlesAmount: 10
    particlesOffSet: 1
    particlesSpeed: 2
  2:
    particlesType: REDSTONE
    particlesAmount: 10
    particlesOffSet: 0.2
    particlesSpeed: 0.5
    redstoneColor: GRAY
  3:
    particlesType: BLOCK_DUST
    particlesAmount: 10
    particlesOffSet: 1.0
    particlesSpeed: 1.0
    particlesDelay: 1
    blockType: SPONGE
```

### Despawn delay

* How long will be the projectile's life in seconds. (It supports decimals)
* Example:

```yaml
despawnDelay: 10
```

### Knockback strength

* How strong the knockback of the projectile will inflict to its targets
* Equation:

`Knockback strength x 3` = Amount of blocks the target gets knocked back
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Whether the projectile disappears when it hits a block
* Options:
  * true
  * false
* Example:

```yaml
removeWhenHitBlock: true
```

## **Custom information**

* All of the next information is restricted with the type of projectile.

### Visual item:

* This brings you the ability to disguise a projectile with a item
* Projectiles available:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Example:

```yaml
visualItem: diamond_sword
```

:::info
visualItem is compatible with custom head and adding textures to that head
:::

#### Custom model data

* Also visual item supports custom model data of the item.

```yaml
customModelData: 37
```

#### Item Model

* Since the 1.21.2 you can edit the item Model of the projectile.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Whether the **ARROW** projectile will leave a trial of critical particles
* Options:
  * true
  * false
* Example:

```yaml
critical: true
```

:::info
Only for the ARROW projectile
:::

#### Damage

* How much damage will the arrow make
* Equation:

`<Damage> x 3` = Arrow damage 

* Default: -1
* Example:

```yaml
damage: 10.0
```

:::info
Don't use negative value, nothing will change.
:::

#### Pierce level

* How many mobs will get hit in a single projectile before it dissapears
* Equation:

`<PierceLevel> + 1` = Amount of mobs that will get hit

* If value is set to -1, it will disappear after hitting 1 mob.
* Example:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** in -> **true** allows the edition of Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* It is the color that the arrow will emit

```yaml
color: AQUA
```

#### Silent

* Whether the arrow will emit noise
* Options:
  * true
  * false
* Example:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configure the sound it will emit when the arrow hits something. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* It works for ARROW, TRIDENT and SPECTRAL\_ARROW

* Example:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Whether the wither\_skull is charged or not
* Options:
  * true
  * false
* Example:

```yaml
charged: true
```

### Fireball

#### Radius

* Radius of explosion
* Example

```yaml
radius: 3
```

#### Incendiary

* Whether the fireball projectile will cause fire or not upon hitting something
* Options:
  * true
  * false
* Example:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* To how long the firework can last before it vanishes (like how many gunpowders were used)
* Example:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* The settings of the firework explosion colors
* Example:

```yaml
fireworkExplosions:
    explosion_0:
      colors:
      - RGB-94-84-214
      fadeColors:
      - RGB-1-2-33
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
```

For the colors, you can either use the regular [color names](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)  or `RGB-<0-255>-<0-255>-<0-255>`

## YML Config

* There are some features that are not editable in game-yet

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Allow to enchant tridents.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Potion effects (Splash potion)

* Allow to edit the effects of the splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

```yaml
potionEffects:
 1:
  potionEffectType: SPEED
  duration: 20
  amplifier: 2
 2:
  potionEffectType: INCREASE_DAMAGE
  duration: 10
  amplifier: 4
```

## Full YAML Config

```yaml
type: TRIDENT
customNameVisible: false
customName: "Trident2"
visualFire: true
invisible: false
pickupStatus: DISALLOWED
glowing: true
critical: false
bounce: true
gravity: true
damage: -1
velocity: 1
knockbackStrength: -1
pierceLevel: -1
despawnDelay: 3
removeWhenHitBlock: false
enchantments:
  enchantment1:
    enchantment: unbreaking
    level: 1
  enchantment3:
    enchantment: mending
    level: 1
particles:
  1:
    particlesType: WATER_BUBBLE
    particlesAmount: 10
    particlesOffSet: 0.5
    particlesSpeed: 0.3
    particlesDelay: 1
#visualItem: DIAMOND_SWORD
#customModelData: 5
#critical: true
#charged: true
#radius: 3
#incendiary: true
#lifeTime: 3
#fireworkExplosions:
#    explosion_0:
#      colors:
#      - RGB-94-84-214
#      fadeColors:
#      - RGB-1-2-33
#      type: BALL_LARGE
#      hasTrail: true
#      hasTwinkle: true
```
