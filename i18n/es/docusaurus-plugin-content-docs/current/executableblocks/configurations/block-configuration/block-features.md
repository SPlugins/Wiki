---
description: >-
  Descubre todas las opciones de configuración de los bloques de
  ExecutableBlocks: activadores, drops, contenedores, hornos, displays y más.
source_hash: 7bbe17ba1d336968
translated_at: '2026-11-13T18:13:16.529Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Características de los bloques


## Activadores

* Características muy importantes que te permiten añadir habilidades a tus bloques
* Wiki dedicada a esta característica: [Lista de activadores de EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) y [Características de los activadores de EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Ajustes básicos

### CreationType

* La forma de crear el EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: El ítem base de Minecraft del bloque ejecutable. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info extra: El ítem tiene que ser un bloque colocable.

```yaml
material: DIRT
```

:::info
¡Es compatible con los spawners! Así que si quieres definir un tipo para tu spawner, añade:

`spawnerType: CHICKEN`

[Lista de EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
:::


### DISPLAYNAME

* Info: El nombre del bloque
* Ejemplo: 

```yaml
name: '&cEpic Sword'
```

### LORE

* Info: El lore del bloque
* Ejemplo:

```yaml
lore:
- §6>> §e----------- §6<<
- §aClick on this block
- §awhen it is placed !
- §aand see the custom structures !
- §6>> §e----------- §6<<
```

* Placeholders que puedes usar en el lore: %player%, [%usage%](block-features.md#hide-usage-1.14+), etc.

### DROP BLOCK IF IT IS BROKEN

* Info: Define si quieres que tu Executable Block se pueda obtener al romperlo o no
* Ejemplo: 

```yaml
dropBlockIfItIsBroken: true
```

* Requerido: NO (Por defecto: true)

### DROP BLOCK IF IT IS BURNS

* Info: Define si quieres que tu Executable Block se pueda obtener al romperlo o no
* Ejemplo: 

```yaml
dropBlockIfItIsBurns: true
```

* Requerido: NO (Por defecto: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Define si quieres que tu Executable Block se pueda obtener al ser destruido por cualquier explosión
* Ejemplo:

```yaml
dropBlockWhenItExplodes: true
```

* Requerido: NO (Por defecto: true)

### DROP TYPE

* Info: Selecciona el tipo de drop que tendrá el bloque EB
* Tipos de drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Requisito de tener al menos el Executable Item necesario en la mano principal o en la mano secundaria para romper el bloque ejecutable
* Ejemplo:

```yaml
onlyBreakableWithEI:
- firework
```

* Requerido: NO (Por defecto: vacío)

### CANBEMOVED

* Info: Define si el bloque se puede mover con un pistón o no.
* Ejemplo:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: Es básicamente una opción que te permite sincronizar tu bloque ejecutable con un Executable Item.
  * Info extra: El bloque ejecutable copia el nombre, el material y el lore del Executable Item, así que si intentas editar el nombre, el material o el lore del EB, no cambiará nada. Tienes que editar el nombre, el material y el lore del EI para que los cambios se apliquen en el EB
* Ejemplo: 

```yaml
executableItem: hack
```

* Requerido: NO

## Características del título 

Es compatible con [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) y [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Define si el holograma del título estará activado o no
* Ejemplo:

```yaml
activeTitle: false
```

* Requerido: NO

### TITLE NAME 

* Info: El texto que muestra el holograma
* Ejemplo: 

```yaml
title: '&7&oDefault title'
```

* (Con HolographicDisplays) Puedes mostrar un ítem en el título con el formato ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Requerido: NO

### TITLE ADJUSTMENT 

* Info: Cuánto se sube o se baja la elevación del holograma del título
* Ejemplo:

```yaml
titleAdjustment: 0.5
```

* Requerido: NO
  * Info extra: Un número positivo sube el holograma, un número negativo lo baja

```yaml
titleFeatures:
  # Active the title
  activeTitle: true
  # The title
  title:
   - Hello
   - &6It's support color
   - and %placeholder%
  titleAdjustment: 0.5
```

## Ajustes de uso personalizado

#### USAGE

* Info: El valor de cuántas veces se puede usar. Se utiliza sobre todo en la función de modificación de usos de los activadores.
* Ejemplo: 

```yaml
usage: 0
```

Para un bloque de uso infinito:

```yaml
usage: -1
```

* Requerido: NO (Por defecto: 0)

:::info
usage: 0 equivale a usage:1, pero no mostrará el texto "Remaining use:..." en el lore.
:::

## Características de contenedores

:::info
Los filtros de ítems son compatibles correctamente con la etiqueta `{CUSTOMODELDATA:X}`, así que puedes crear una tolva que solo recoja un ítem con una textura específica
:::

### whitelistMaterials

* Aquí puedes añadir una lista de materiales que se pueden colocar dentro de tu bloque

```
containerFeatures:
  whitelistMaterials:
  - DIRT
```

### blacklistMaterials

* Aquí puedes añadir una lista de materiales que no se pueden colocar dentro de tu bloque

```
containerFeatures:
  blacklistMaterials:
  - STONE
```

:::info
En el caso de las TOLVAS (HOPPERS), la whitelist y la blacklist restringen los ítems que la tolva puede absorber.
:::

### isLocked

* Define si el contenedor está bloqueado o no

### lockedName

* En caso de que esté bloqueado, tienes que indicar el nombre de la llave

```
containerFeatures:
  isLocked: true
  lockedName: ThisIsMyKey
```

### inventoryTitle

* El título del inventario del contenedor 

```
containerFeatures:
  inventoryTitle: INVENTORY TITLE
```

## Características de hornos

### furnaceSpeed

* Te permite personalizar la velocidad de tu horno.
* Ejemplo:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Por defecto -> 1

2 veces la velocidad por defecto -> 2

La mitad de la velocidad por defecto -> 0.5
:::

### infiniteFuel

* Hace que el bloque no necesite combustible para funcionar

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Hace que el bloque parezca encendido

```
furnaceFeatures:
  infiniteVisualLit: true
```

### fortuneMultiplier

* Multiplicador del resultado.

```
furnaceFeatures:
  fortuneMultiplier: 5
```

:::info
Puede ser negativo para quitar ítems del almacenamiento de resultados.
:::

### fortuneChance

* Probabilidad de que se aplique la fortuna

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Características direccionales

### forceBlockFaceOnPlace

* Fuerza que el bloque se coloque mirando en una dirección determinada
* Ejemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Establece la cara del bloque al colocarlo
* Ejemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

:::info
`blockFaceOnPlace` solo se aplica cuando `forceBlockFaceOnPlace` es `true`. Sin eso, el bloque conserva la dirección con la que se colocó. Estas opciones solo giran los bloques direccionales (los bloques que tienen un `facing`).

El comando [/eb place](/executableblocks/commands-and-permissions#place-an-eb-at-a-specific-position) también puede recibir una dirección, que tiene prioridad sobre estas opciones.
:::

## Características de colmena <CustomTag type="version" version="1.15" /> {#beehive-features}

Rellena previamente una colmena o un nido de abejas cuando se coloca. Solo para los ExecutableBlocks cuyo material es `BEEHIVE` o `BEE_NEST` (creados con `BASIC_CREATION` o `IMPORT_FROM_EXECUTABLE_ITEMS`); las opciones no hacen nada en los demás bloques. En el editor dentro del juego, el botón solo aparece para estos dos materiales.

Ambas opciones son opcionales: cuando no se define ninguna, el bloque no se modifica y no se escribe nada en la config.

### honeyLevel

* Info: Nivel de miel del bloque colocado, de `0` (vacío) a `5` (lleno, se puede recolectar la miel). Sin definir: el nivel de miel no se modifica.

### bees

* Info: Número de abejas que se introducen en el bloque colocado. Sin definir o `0`: ninguna abeja. Una colmena admite 3 abejas por defecto, las abejas adicionales no se añaden.

* Ejemplo:

```yaml
material: BEE_NEST
beehiveFeatures:
  honeyLevel: 5
  bees: 2
```

:::tip
Con un [activador LOOP y `loopTimerPerBlock: true`](/executableblocks/configurations/activator-configuration/list-of-the-activators#loop-), un nido de abejas recolectado puede volver a colocarse (y por tanto volver a rellenarse) un tiempo fijo después de haberse colocado.
:::

## Características del soporte de pociones

### brewingStandSpeed

* Te permite personalizar la velocidad de tu brewingStand
* Ejemplo:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Por defecto -> 1

2 veces la velocidad por defecto -> 2

La mitad de la velocidad por defecto -> 0.5
:::

## Características de tolvas

### amountItemsTransferred

* Te permite personalizar la cantidad de ítems transferidos en cada transferencia de la tolva.
* Se aplica tanto cuando la tolva empuja ítems al contenedor hacia el que mira como (desde 26.11) cuando extrae ítems del contenedor que tiene encima.
* Ejemplo:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Características de display

### Material

* Material del ítem que se mostrará
* Ejemplo:

```
DisplayFeatures:
  material: PAPER
```

### Custom model data

* Custom model data del material que se mostrará
* Ejemplo:

```
DisplayFeatures:
  customModelData: 3
```

### Scale

* Escala del display
* Ejemplo:

```
DisplayFeatures:
  scale: 1
```

### aligned

* Si quieres que el display esté alineado
* Ejemplo:

```
DisplayFeatures:
```
aligned: false

### customPitch

* Selecciona el pitch personalizado
* Ejemplo:

```
DisplayFeatures:
  customPitch: 1
```

### customY

* Selecciona la Y personalizada
* Ejemplo:

```
DisplayFeatures:
  customY: 1.0
```

### Glow

* Con brillo o sin brillo
* Ejemplo:

```
DisplayFeatures:
  glow: false
```

### Características de la zona de interacción

* Ancho del display
* Alto del display
* Con colisión o sin colisión
* Ejemplo:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Cantidad de clics necesarios para romper la creación display
* Ejemplo:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Define qué slots (índice 0-5) tendrán un libro

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancelar

### cancelLiquidDestroy

* Info: Cancelará la destrucción de semillas y cabezas de jugador por agua/lava
* Ejemplo: 

```
cancelLiquidDestroy: true
```
