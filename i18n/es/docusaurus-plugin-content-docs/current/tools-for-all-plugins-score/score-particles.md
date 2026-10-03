---
description: >-
  Guía de SCore sobre cómo mostrar y configurar formas de partículas
  predefinidas, ubicación, color, bloque e ítem.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-10-03T10:33:32.198Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Partículas de SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Score incluye muchas formas de partículas prefabricadas de la librería XParticle y algunas otras personalizadas.

## Cómo mostrar las partículas

El comando para mostrar la partícula es `/score particles`

Tendrás que seleccionar una forma y configurar correctamente el comando para lograr lo que quieres.

### Cómo eliminar las partículas mostradas

El comando para eliminar las partículas mostradas es `/score clear {player} PARTICLES`

## Configuración general para todas las formas

### Definir el punto de aparición

Para definir dónde se mostrará la forma tienes dos opciones, mencionando directamente la ubicación o estableciendo un UUID de entidad

#### Usando un UUID de Jugador/Entidad

Cuando decides usar el UUID de la entidad **la forma seguirá a un Jugador/Entidad si se mueve**. Así que puede deformar la forma o crear un efecto interesante.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Tienes que especificar un UUID de un jugador o una entidad. ¡El nombre del jugador no funciona!
:::

#### Usando una ubicación específica

Usando una ubicación te asegurarás de que la forma no se deforme, se mantendrá estática.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Definición de las partículas

#### Tipo de partícula

Define la partícula usada por la forma. Por defecto será la partícula FLAME

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Lista de partículas disponibles aquí: [Lista de partículas de Spigot](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Color

**En lugar de** usar `particle:{particle name}` si quieres usar partículas REDSTONE / DUST puedes usar directamente la configuración color con un [color personalizado](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Puedes establecer dos colores separados por una , para tener una transición de color.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

También puedes usar valores RGB para usar colores personalizados en tu partícula de SCore (0-255).

Ejemplo: `color:RGB-156-82-84`

#### Partículas de bloque

**En lugar de** usar `particle:{particle name}` si quieres usar partículas BLOCK\_CRACK / BLOCK puedes usar directamente la configuración blockdata con un [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Partículas de ítem

**En lugar de** usar `particle:{particle name}` si quieres usar partículas ITEM\_CRACK / ITEM puedes usar directamente la configuración itemstack con un [material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Desplazamiento / Cambiar el punto de aparición de la forma

Puedes definir un desplazamiento en una dirección específica, lo que te permite por ejemplo mostrar la forma alrededor del jugador / entidad, sin tener que hacer cálculos complejos.

* offsetPitch: la dirección de pitch hacia la que se dirigirá el desplazamiento
* offsetYaw: la dirección de yaw hacia la que se dirigirá el desplazamiento
* offsetSitance: la distancia del desplazamiento
* offsetX: Aumenta la ubicación X del desplazamiento
* offsetY: Aumenta la ubicación Y del desplazamiento
* offsetZ: Aumenta la ubicación Z del desplazamiento

Por defecto estas configuraciones están establecidas en 0

```css
offsetPitch:{the pitch direction}
offsetYaw:{the yaw direction}
offsetDistance:{the distance}
offsetX:{x bonus}
offsetY:{y bonus}
offsetZ:{z bonus}
/* Example with flat values */
offsetPitch:0
offsetYaw:-90
offsetDistance:5
offsetY:-1
/* Example with placeholders */
offsetPitch:%player_pitch_initial%+30
offsetYaw:%player_yaw_initial%
offsetDistance:%var_myvar%
```

## Configuración de las formas

### Atom

Crea un conjunto de órbitas elípticas con una pequeña esfera de partículas en el centro, pareciéndose a un átomo.

* `orbits`: Número de órbitas elípticas.
* `radius`: Radio de las órbitas en bloques
* `rate`: Número de partículas por órbita.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Versión animada de `atom` con partículas orbitando.

* `orbits`: Número de trayectorias orbitales.
* `radius`: Radio de la órbita en bloques.
* `rate`: Velocidad de la órbita.
* `time`: Duración en ticks.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Múltiples círculos concéntricos que aumentan de tamaño.

* `radius`: Radio máximo en bloques.
* `radiusRate`: Diferencia de radio entre cada círculo.
* `rate`: Densidad de partículas.
* `rateChange`: Cambio de velocidad por capa.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Un efecto de vórtice de partículas dinámico.

* `points`: Número de brazos espirales.
* `radius`: Distancia desde el centro.
* `rate`: Velocidad de rotación.
* `mode`: De 0 a 4 para diferentes estilos de vórtice.
* `time`: Duración en ticks.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Simula un efecto de péndulo doble caótico.

* `radius`: Radio de oscilación.
* `gravity`: Fuerza de gravedad (normalmente -1).
* `length`, `length2`: Longitudes de los péndulos.
* `mass1`, `mass2`: Masa de cada péndulo.
* `dimension3`: Si se usa rotación 3D.
* `speed`: Velocidad de animación.
* `time`: Duración en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Muestra un círculo de partículas.

* `radius`: radio del círculo
* `density`: número de partículas por bloque (más alto = más densidad).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: tiempo en ticks para animar la visualización completa. (0 = instantáneo)
* `directionPitch`: dirección de pitch del círculo
* `directionYaw`: dirección de yaw del círculo

Ejemplos:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Rayo animado con tamaños de círculo cambiantes a lo largo del tiempo.

* `maxRadius`: Radio máximo del círculo en bloques.
* `rate`: Velocidad de puntos por círculo.
* `radiusRate`: Cambio en el radio.
* `extend`: Distancia de extensión en bloques.
* `time`: Duración en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Cono formado por círculos apilados.

* `height`: Altura del cono.
* `radius`: Radio de la base.
* `rate`: Espaciado entre círculos.
* `circleRate`: Densidad de puntos.
* `fillMode`: el modo de relleno "disk", "ring", "spiral", por defecto es disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Dibuja una luna creciente usando dos círculos superpuestos.

* `radius`: tamaño del arco exterior.
* `rate`: resolución de la curva.
* `directionYaw`: dirección de la luna creciente en grados

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: radio del cilindro
* `height`: la altura del cilindro
* `density`: número de partículas por bloque (más alto = más densidad).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: tiempo en ticks para animar la visualización completa.
* `directionPitch`: dirección de pitch del cuadrado
* `directionYaw`: dirección de yaw del cuadrado

Ejemplos:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Crea una forma de diamante (rombo) en 2D o 3D.

* `radiusRate`: Controla el ancho.
* `rate`: Espaciado entre puntos.
* `height`: Altura total.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Muestra una doble hélice de ADN con enlaces de hidrógeno.

* `radius`: Radio de las hélices.
* `rate`: Espaciado entre puntos.
* `extension`: Factor de estiramiento de la hélice.
* `height`: Altura total.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Simula la replicación del ADN con enlaces y colores.

* `radius`, `rate`, `extension`, `height`: Igual que `DNA`.
* `speed`: Velocidad de animación.
* `hydrogenBondDist`: Distancia entre enlaces.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: Ángulos de inicio y fin.
* `rate`: Espaciado angular.
* `radius`, `otherRadius`: Radios X e Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Animación ondulada que representa una onda expansiva de explosión.

* `rate`: Densidad de partículas dentro de la onda.
* `start`: la distancia inicial desde el centro para comenzar la onda.
* `height`: la amplitud vertical de la onda.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Dibuja una forma ovalada parecida a un ojo.

* `radius`, `radius2`: Radios principales.
* `rate`: Resolución.
* `extension`: Factor de elongación
* `directionPitch`: dirección de pitch del ojo
* `directionYaw`: dirección de yaw del ojo

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Dibuja un corazón usando una curva polar.

* `cut`, `cutAngle`: Ajustan los lóbulos del corazón.
* `depth`: Profundidad de la muesca central.
* `compressHeight`: Compresión vertical.
* `rate`: Resolución.
* `directionPitch`: dirección de pitch del corazón
* `directionYaw`: dirección de yaw del corazón

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Dibuja hélices 3D animadas.

* `strings`: Número de hélices.
* `radius`: Radio de la hélice.
* `rate`, `extension`: Espaciado y fuerza de la espiral.
* `height`: Altura total.
* `speed`: Velocidad de animación.
* `fadeUp`, `fadeDown`: Cambio gradual en el radio.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Crea una forma de símbolo de infinito en 3D.

* `size`: Tamaño de la forma.
* `extension`: La extensión del ojo illuminati.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Muestra anillos en expansión como glifos mágicos.

* `radius`: Radio inicial.
* `rate`: Espaciado de puntos.
* `radiusRate`: Velocidad de crecimiento.
* `distance`: Espaciado entre anillos.
* `time`: Duración en ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Efecto de explosión mágica estilizado.

* `size`: Tamaño general de la explosión.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Dibuja un polígono con conexiones internas opcionales

* `points`: Número de esquinas.
* `connection`: Cuántas esquinas conectar.
* `size`: Radio del polígono.
* `rate`: Resolución.
* `extend`: Factor de extensión de la conexión.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Muestra arcos de arcoíris apilados con capas de colores.

* `radius`: Radio del arcoíris
* `rate`: Velocidad de puntos, más = más puntos
* `curve`: Curva 1 para arriba y -1 para abajo
* `layers`: Número de arcos.
* `compact`: Reduce el espaciado entre arcos.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Dibuja un anillo plano (anillo circular).

* `radius`: Radio del anillo.
* `density`: Densidad de partículas.
* `time`: Duración de la visualización en ticks.
* `drawMode`: Orden de dibujo: clockWise, counterClockWise o random
* `directionPitch`: dirección de pitch del círculo
* `directionYaw`: dirección de yaw del círculo

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Dibuja una esfera 3D completa.

* `radius`: Radio de la esfera.
* `rate`: Densidad de puntos

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Dibuja una esfera con picos aleatorios.

* `radius`, `rate`: Parámetros base de la esfera.
* `chance`: Probabilidad de pico.
* `minRandomDistance`, `maxRandomDistance`: Rango de longitud del pico.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: altura en bloques a lo largo del eje vertical.
* `length`: longitud en bloques a lo largo del vector de dirección.
* `width`: ancho en bloques perpendicular a la dirección de la pared.
* `density`: número de partículas por bloque (más alto = más densidad).
* `timeToDisplay`: tiempo en ticks para animar la visualización completa.
* `drawMode`: "vertical" u "horizontal", controla el orden de iteración.
* `verticalOrder`: "up" o "down", orden a lo largo de la altura.
* `horizontalOrder`: "near" o "far", orden a lo largo de la longitud.
* `directionPitch`: dirección de pitch del cuadrado
* `directionYaw`: dirección de yaw del cuadrado

```yaml
# Examples that you can run manually in-game
...

# Examples that you can include into your commands
playerCommands:
# A line of explosion
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% particle:EXPLOSION height:1 length:30 timeToDisplay:20 density:1 directionYaw:%player_yaw_initial% directionPitch:%player_pitch_initial% verticalOrder:up horizontalOrder:near offsetY:-1
# A wall of flame
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y
```

### Star

Crea una estrella 3D con picos animados.

* `points`: Número de lados base.
* `spikes`: Número de puntas de la estrella.
* `rate`: Cuántos puntos se muestran
* `spikeLength`: Longitud de la punta.
* `coreRadius`: Radio del núcleo.
* `neuron`: Curvatura de la punta.
* `prototype`: Usar hélices en lugar de líneas.
* `speed`: Velocidad de animación.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Dibuja un teseracto

* `size`: Tamaño general.
* `rate`: Densidad.
* `speed`: velocidad.
* `time`: Tiempo de visualización.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Efecto espiral como una galaxia o un tornado.

* `points`: Número de brazos espirales.
* `rate`: Velocidad de rotación.
* `time`: Duración.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
