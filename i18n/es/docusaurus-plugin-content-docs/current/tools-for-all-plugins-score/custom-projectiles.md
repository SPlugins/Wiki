---
description: >-
  Aprende a crear proyectiles personalizados con el editor en el juego de SCore
  y a lanzarlos con los comandos LAUNCH y LOCATED_LAUNCH.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T18:17:39.244Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Proyectiles personalizados

Esta página te ayudará a aprender a crear proyectiles personalizados y a lanzarlos.\
Hemos creado para ti un editor dentro del juego para que la edición sea sencilla. **Úsalo.**

:::info 
Para lanzarlos es muy fácil: usa los comandos [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) o [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Estos proyectiles no se pueden entregar a los jugadores.
:::

### Comandos:

| Comando                         | Función                                                                |
| ------------------------------- | ---------------------------------------------------------------------- |
| /score projectiles              | Te muestra todos los proyectiles y te permite editarlos                |
| /score projectiles-create \<id> | Abre el editor para crear un nuevo proyectil                           |
| /score projectiles-delete \<id> | Acción para eliminar un proyectil (requiere confirmación)              |
| /score reload                   | Recarga el plugin (útil si editas un proyectil en el .yml)             |

## **Información básica**

### Type

Esto es lo primero que debes establecer: el tipo de proyectil que quieres crear. Score soporta:

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

Ejemplo:

```yaml
type: ARROW
```

### Custom name visible

* Te permite mostrar el nombre personalizado sobre el proyectil
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
customNameVisible: true
```

### Custom Name

* Este es el NOMBRE del proyectil, útil para customNameVisible y para temas de placeholders.
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

* Indica si el proyectil será invisible o no. Requiere [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
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

* Indica si el proyectil tendrá el efecto de resplandor o no
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
glowing: true
```

### Bounce

* Indica si el proyectil rebotará contra la entidad mientras esta se encuentra en su estado de invulnerabilidad.
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
bounce: true
```

### Gravity

* Indica si el proyectil se verá afectado por la gravedad o no
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
gravity: true
```

### Velocity

* Qué tan rápido será el proyectil
  * <CustomTag type="version" version="1.20.5" /> También funciona en FIREBALL, WITHER\_SKULL y DRAGON\_FIREBALL: `2.0` vuela al doble de velocidad, `1` mantiene la velocidad de vanilla. Antes de la 1.20.5 mantienen su velocidad de vanilla.
* Ejemplo:

```yaml
velocity: 2.0
```

:::danger
EL DAÑO DE **ARROW** SE VERÁ AFECTADO POR ESTA OPCIÓN

Ecuación: `velocity x 1 = Arrow Damage`
:::

### Particles

* Esto permite editar qué partículas mostrará el proyectil a su alrededor.
 * `particlesType`: Tipo de partícula 
 * `particlesAmount`: Cuántas partículas emitirá cada vez                                                                 
 * `particlesOffSet`: Qué tan cerca del proyectil aparecerán las partículas                                                                
 * `particlesSpeed`: Qué tan rápido se moverán las partículas                                                                 
 * `redstoneColor`: Cambia el color de la partícula de redstone. [Colores](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Qué bloque usa la partícula. Solo para: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
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

* Cuánto durará la vida del proyectil, en segundos. (Admite decimales)
* Ejemplo:

```yaml
despawnDelay: 10
```

### Knockback strength

* Qué tan fuerte será el empuje que el proyectil inflige a sus objetivos
* Ecuación:

`Knockback strength x 3` = Cantidad de bloques que el objetivo es empujado hacia atrás
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Indica si el proyectil desaparece cuando golpea un bloque
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

* Esto te da la posibilidad de disfrazar un proyectil con un ítem
* Proyectiles disponibles:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Ejemplo:

```yaml
visualItem: diamond_sword
```

:::info
visualItem es compatible con cabezas personalizadas y con añadir texturas a esa cabeza
:::

#### Custom model data

* Además, visual item admite el custom model data del ítem.

```yaml
customModelData: 37
```

#### Item Model

* Desde la 1.21.2 puedes editar el item Model del proyectil.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Indica si el proyectil **ARROW** dejará una estela de partículas críticas
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
No uses valores negativos, no cambiará nada.
:::

#### Pierce level

* Cuántos mobs serán golpeados por un solo proyectil antes de que desaparezca
* Ecuación:

`<PierceLevel> + 1` = Cantidad de mobs que serán golpeados

* Si el valor se establece en -1, desaparecerá tras golpear a 1 mob.
* Ejemplo:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** en -> **true** permite la edición de Color. [Colores](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* Es el color que emitirá la flecha

```yaml
color: AQUA
```

#### Silent

* Indica si la flecha emitirá sonido
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Configura el sonido que emitirá cuando la flecha golpee algo. [Sonidos](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funciona para ARROW, TRIDENT y SPECTRAL\_ARROW

* Ejemplo:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Indica si la wither\_skull está cargada o no
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

* Indica si el proyectil fireball provocará fuego o no al golpear algo
* Opciones:
  * true
  * false
* Ejemplo:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Cuánto tiempo puede durar el firework antes de desaparecer (por ejemplo, cuántas pólvoras se usaron)
* Ejemplo:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Los ajustes de los colores de la explosión del firework
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

Para los colores, puedes usar los [nombres de color](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) habituales o `RGB-<0-255>-<0-255>-<0-255>`

## Configuración YML

* Hay algunas funciones que todavía no se pueden editar dentro del juego

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permite encantar tridentes.

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

* Permite editar los efectos de la splash potion. [Efectos de poción](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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

## Configuración YAML completa

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
