---
description: >-
  Guía completa de las funciones de bloque de ExecutableBlocks en SPlugins:
  activadores, contenedores, hornos, soportes y displays.
source_hash: 550955941cd1e931
translated_at: '2026-10-03T10:34:08.916Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Funciones de los bloques


## Activators

* Funciones muy importantes que te permiten añadir habilidades a tus bloques
* Wiki dedicada a esta función: [lista de activadores de EB](/executableblocks/configurations/activator-configuration/list-of-the-activators.md) y [funciones de activadores de EB](/executableblocks/configurations/activator-configuration/activators-features.md)


## Configuración básica

### CreationType

* La forma de crear el EB
  * BASIC\_CREATION
  * DISPLAY\_CREATION
  * IMPORT FROM EI
  * IMPORT FROM ITEMSADDER
  * IMPORT FROM NEXO
  * IMPORT FROM ORAXEN

### MATERIAL

* Info: El ítem base de minecraft del bloque ejecutable. [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
  * Info extra: El ítem tiene que ser un bloque colocable.

```yaml
material: DIRT
```

:::info
¡Es compatible con spawners! así que si quieres definir un tipo para tu spawner añade:

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

* Placeholders que puedes usar en el lore, %player%, [%usage%](block-features.md#hide-usage-1.14+), etc.

### DROP BLOCK IF IT IS BROKEN

* Info: Si quieres hacer que tu Executable Block se pueda obtener al romperlo o no
* Ejemplo: 

```yaml
dropBlockIfItIsBroken: true
```

* Obligatorio: NO (por defecto: true)

### DROP BLOCK IF IT IS BURNS

* Info: Si quieres hacer que tu Executable Block se pueda obtener al romperlo o no
* Ejemplo: 

```yaml
dropBlockIfItIsBurns: true
```

* Obligatorio: NO (por defecto: false)

### DROP BLOCK WHEN IT EXPLODES

* Info: Si quieres hacer que tu Executable Block se pueda obtener al destruirse por cualquier explosión
* Ejemplo:

```yaml
dropBlockWhenItExplodes: true
```

* Obligatorio: NO (por defecto: true)

### DROP TYPE

* Info: Selecciona el tipo de drop que tendrá el bloque EB
* Tipos de drop:
  * IN\_THE\_INVENTORY
  * ON\_THE\_GROUND

### ONLY BREAKABLE WITH EI

* Info: Requisitos para tener como mínimo el Executable Item requerido en tu mano principal o secundaria para romper el bloque ejecutable
* Ejemplo:

```yaml
onlyBreakableWithEI:
- firework
```

* Obligatorio: NO (por defecto: vacío)

### CANBEMOVED

* Info: Si el bloque se puede mover con un pistón o no.
* Ejemplo:

```yaml
canBeMoved: false
```

### EXECUTABLE ITEMS ID

* Info: Es básicamente una opción que te permite sincronizar tu executable block con un executable item.
  * Info extra: El executable block copia el nombre, material y lore del executable item, así que cuando intentes editar el nombre, material o lore del eb, no cambiará nada. Tienes que editar el nombre, material y lore del ei para que los cambios se apliquen en el eb
* Ejemplo: 

```yaml
executableItem: hack
```

* Obligatorio: NO

## Funciones de título

Es compatible con [DecentHolograms](https://www.spigotmc.org/resources/96927/), [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) y [CMI](https://www.spigotmc.org/resources/3742/)

### ACTIVE TITLE 

* Info: Si el holograma del título estará activado o no
* Ejemplo:

```yaml
activeTitle: false
```

* Obligatorio: NO

### TITLE NAME 

* Info: El texto que se muestra en el holograma
* Ejemplo: 

```yaml
title: '&7&oDefault title'
```

* (Con HolographicDisplay) Puedes mostrar un ítem en el título con el tipo ITEM::MATERIAL

```yaml
title: 
- '&7&oDefault title'
- 'ITEM::DIAMOND'
```

* Obligatorio: NO

### TITLE ADJUSTMENT 

* Info: Cuánto se ajusta hacia arriba o hacia abajo la elevación del holograma del título
* Ejemplo:

```yaml
titleAdjustment: 0.5
```

* Obligatorio: NO
  * Info extra: Número positivo para subir, número negativo para bajar

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

## Configuración de uso personalizado

#### USAGE

* Info: El valor de cuántas veces se puede usar. Se utiliza sobre todo para la función de modificación de usos de los activadores.
* Ejemplo: 

```yaml
usage: 0
```

Para un bloque de usos infinitos usa:

```yaml
usage: -1
```

* Obligatorio: NO (por defecto: 0)

:::info
usage: 0 equivale a usage:1, pero no mostrará el texto "Remaining use:..." en el lore.
:::

## Funciones de contenedor

:::info
Los filtros de ítems son compatibles correctamente con la etiqueta `{CUSTOMODELDATA:X}`, así que puedes crear una tolva que solo acepte un ítem con una textura específica
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
En el caso de las HOPPERS, la whitelist y la blacklist restringen los ítems que la tolva puede succionar.
:::

### isLocked

* Si el contenedor está bloqueado o no

### lockedName

* En caso de que esté bloqueado, tienes que seleccionar el nombre de la llave

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

## Funciones de horno

### furnaceSpeed

* Permite personalizar la velocidad de tu horno.
* Ejemplo:

```
furnaceFeatures:
  furnaceSpeed: 2.0
```

:::info
Por defecto -> 1

2 veces la velocidad por defecto -> 2

Mitad de la velocidad por defecto -> 0.5
:::

### infiniteFuel

* Hace que el bloque no necesite combustible para funcionar

```
furnaceFeatures:
  infiniteFuel: true
```

### infiniteVisualLit

* Hace que el bloque parezca que está encendido

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

* Probabilidad de que se aplique la fortune

```
furnaceFeatures:
  fortuneChance: 0.95
```

## Funciones direccionales

### forceBlockFaceOnPlace

* Obliga a que el bloque se coloque mirando hacia una dirección determinada
* Ejemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
```

### blockFaceOnPlace

* Establece la cara del bloque cuando se coloca
* Ejemplo:

```
directionalFeatures:
  forceBlockFaceOnPlace: true
  blockFaceOnPlace: NORTH
```

## Funciones del soporte de pociones

### brewingStandSpeed

* Permite personalizar la velocidad de tu brewingStand
* Ejemplo:

```
brewingStandFeatures:
  brewingStandSpeed: 1.0
```

:::info
Por defecto -> 1

2 veces la velocidad por defecto -> 2

Mitad de la velocidad por defecto -> 0.5
:::

## Funciones de tolva

### amountItemsTransferred

* Te permite personalizar la cantidad de ítems que se transfieren en cada tick de la tolva.
* Ejemplo:

```yaml
hopperFeatures:
  amountItemsTransferred: 5
```

## Funciones de display

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

* Brillo o no
* Ejemplo:

```
DisplayFeatures:
  glow: false
```

### Interaction zone features

* Ancho del display
* Alto del display
* Si colisiona o no
* Ejemplo:

```
DisplayFeatures:
  InteractionZoneFeatures:
    width: 1.0
    height: 1.0
    isCollidable: false
```

### Click to break

* Cantidad de clics necesarios para romper la creación del display
* Ejemplo:

```
DisplayFeatures:
  clickToBreak: 3
```

## Chiseled Bookshelf

### occupiedSlots

* Define en qué espacios (índice 0-5) habrá un libro

```
chiseledBookshelfFeatures:
  occupiedSlots:
  - '2'
  - '5'
```

## Cancel

### cancelLiquidDestroy

* Info: Cancelará la destrucción de semillas y cabezas de jugador por agua/lava
* Ejemplo: 

```
cancelLiquidDestroy: true
```
