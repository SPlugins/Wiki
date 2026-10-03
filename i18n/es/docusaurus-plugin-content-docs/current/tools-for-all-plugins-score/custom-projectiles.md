---
description: >-
  Guía de SCore para crear proyectiles personalizados: tipos, propiedades
  visuales, daño, partículas y configuración YAML.
source_hash: 865d4da043f01247
translated_at: '2026-10-03T10:32:26.948Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Esta página te ayudará a aprender a crear proyectiles personalizados y lanzarlos.\
Hemos creado para ti un editor dentro del juego para que la edición sea simple. **Úsalo.**

:::info 
Para lanzarlos, fácil, usa los comandos [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) o [LOCATED_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Estos proyectiles no se pueden dar a los jugadores.
:::

### Comandos:

| Comando                         | Función                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| /score projectiles              | Te muestra todos los proyectiles y te permite editarlos             |
| /score projectiles-create \<id> | Abre el editor para crear un nuevo proyectil                  |
| /score projectiles-delete \<id> | Acción para eliminar un proyectil (requiere confirmación)           |
| /score reload                   | Recarga el plugin (útil si editas un proyectil en .yml) |

## **Información básica**

### Type

Esto es lo primero que tienes que configurar, el tipo de proyectil que quieres crear, Score soporta:

* ARROW
* SPECTRAL_ARROW
* EGG
* ENDER_PEARL
* FIREBALL
* SPLASH_POTION
* SHULKER_BULLET
* SNOWBALL
* TRIDENT
* WITHER_SKULL
* DRAGON_FIREBALL
* THROWNEXPBOTTLE
* WIND_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Ejemplo:

```yaml
type: ARROW
```

### Custom name visible

* Te permite mostrar el nombre personalizado encima del proyectil
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
customNameVisible: true
```

### Custom Name

* Este es el NOMBRE del proyectil, útil para customNameVisible y para placeholders.
* Ejemplo:

```yaml
customName: '&eBullet'
```

### Visual fire

* Opción para permitir fuego visual en el proyectil
* Ejemplo:

```yaml
visualFire: true
```

### Invisible

* Si el proyectil será invisible o no. Requiere [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Opción para configurar si el proyectil se puede recoger
* Opciones: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Ejemplo:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Si el proyectil tendrá el efecto de brillo (glowing) o no
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
glowing: true
```

### Bounce

* Si el proyectil rebotará de la entidad durante su estado de invulnerabilidad.
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
bounce: true
```

### Gravity

* Si el proyectil se verá afectado por la gravedad o no
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
gravity: true
```

### Velocity

* Qué tan rápido será el proyectil
* Ejemplo:

```yaml
velocity: 2.0
```

:::danger
EL DAÑO DE LA **ARROW** SE VERÁ AFECTADO POR ESTA OPCIÓN

Ecuación: `velocity x 1 = Arrow Damage`
:::

### Particles

* Esto permite editar qué partículas mostrará el proyectil a su alrededor.
 * `particlesType`: Tipo de partícula 
 * `particlesAmount`: Cuántas partículas emitirá cada vez                                                                 
 * `particlesOffSet`: Qué tan cerca del proyectil aparecerán las partículas                                                                
 * `particlesSpeed`: Qué tan rápido se moverán las partículas                                                                 
 * `redstoneColor`: Cambia el color de la partícula de redstone. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Qué bloque usa la partícula. Solo para: BLOCK_CRACK, BLOCK_DUST, BLOCK_MARKER
 * `particleDensity`: Densidad de las partículas, útil cuando quieres una estela limpia de tu proyectil

* Ejemplo:

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

* Cuánto durará la vida del proyectil en segundos. (admite decimales)
* Ejemplo:

```yaml
despawnDelay: 10
```

### Knockback strength

* Qué tan fuerte será el knockback que el proyectil infligirá a sus objetivos
* Ecuación:

`Knockback strength x 3` = Cantidad de bloques que el objetivo es empujado
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Si el proyectil desaparece al golpear un bloque
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
removeWhenHitBlock: true
```

## **Información personalizada**

* Toda la información siguiente está restringida según el tipo de proyectil.

### Visual item:

* Esto te brinda la posibilidad de disfrazar un proyectil con un ítem
* Proyectiles disponibles:
* **EGG**
* **ENDER_PEARL**
* **SNOWBALL**

Ejemplo:

```yaml
visualItem: diamond_sword
```

:::info
visualItem es compatible con cabezas personalizadas (custom head) y con añadir texturas a esa cabeza
:::

#### Custom model data

* Además, visual item soporta el custom model data del ítem.

```yaml
customModelData: 37
```

#### Item Model

* Desde la versión 1.21.2 puedes editar el item_model del proyectil.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Si el proyectil **ARROW** dejará un rastro de partículas críticas
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
critical: true
```

:::info
Solo para el proyectil ARROW
:::

#### Damage

* Cuánto daño hará la flecha
* Ecuación:

`<Damage> x 3` = Daño de la flecha 

* Por defecto: -1
* Ejemplo:

```yaml
damage: 10.0
```

:::info
No uses un valor negativo, no cambiará nada.
:::

#### Pierce level

* A cuántos mobs golpeará un solo proyectil antes de desaparecer
* Ecuación:

`<PierceLevel> + 1` = Cantidad de mobs que serán golpeados

* Si el valor se establece en -1, desaparecerá después de golpear 1 mob.
* Ejemplo:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** en -> **true** permite la edición de Color. [Colors](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* Es el color que emitirá la flecha

```yaml
color: AQUA
```

#### Silent

* Si la flecha emitirá ruido
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configura el sonido que emitirá cuando la flecha golpee algo. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funciona para ARROW, TRIDENT y SPECTRAL_ARROW

* Ejemplo:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Si el wither_skull está cargado o no
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
charged: true
```

### Fireball

#### Radius

* Radio de la explosión
* Ejemplo

```yaml
radius: 3
```

#### Incendiary

* Si el proyectil fireball causará fuego o no al golpear algo
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Cuánto tiempo puede durar el firework antes de desaparecer (como cuántas pólvoras se usaron)
* Ejemplo:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* La configuración de los colores de la explosión del firework
* Ejemplo:

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

Para los colores, puedes usar los [nombres de colores](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) habituales o `RGB-<0-255>-<0-255>-<0-255>`

## YML Config

* Hay algunas funciones que todavía no son editables dentro del juego

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permite encantar tridents.

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

* Permite editar los efectos de la splash potion. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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
