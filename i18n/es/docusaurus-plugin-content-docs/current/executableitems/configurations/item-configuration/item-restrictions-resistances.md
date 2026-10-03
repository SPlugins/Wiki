---
description: >-
  Guía de SPlugins sobre restricciones y resistencias de ítems para personalizar
  el comportamiento de los ExecutableItems.
source_hash: 6712e593bf883efe
translated_at: '2026-10-03T10:31:58.414Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restricciones/Resistencias de ítems

En esta página aprenderás sobre las restricciones de ítems y algunas resistencias, esto te permitirá personalizar el comportamiento en ciertos casos del ítem.

## Restricciones globales

* Info: Si quieres añadir una de las restricciones de ítems a todos los ítems que has creado en el plugin, puedes añadir la configuración de la restricción (o restricciones) que quieras dentro del archivo config.yml del plugin.
* Ejemplo: Quiero añadir las restricciones de no usar yunque y piedra de afilar a todos los ExecutableItems creados y por crear


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://splugins.net/docs/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -

## Start of default config features
pickup-limit: -1
disable-world: [ ]
premium-enable-cooldown-for-op: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
## End of default config features
## 
## Start for manually added restrictions to apply on all ExecutableItems
restrictions:
  cancel-anvil: true
  cancel-grind-stone: true
## End for manually added restrictions to apply on all ExecutableItems
```


## Restricciones individuales

En esta sección aprenderás cómo añadir una restricción individual únicamente para el ExecutableItem que estás editando actualmente.

### Cancelar la caída del ítem

* Info: Valor booleano que impide que el jugador suelte el ítem ejecutable.
* Nota: cuando el ítem no puede volver al inventario (por ejemplo, estaba en el cursor mientras el inventario estaba cerrado y todos los espacios están llenos), se permite soltarlo en lugar de que el ítem sea eliminado.
* Ejemplo:

```yaml
restrictions:
  cancel-item-drop: true
```

### Cancelar la colocación del bloque en el suelo.

* Info: Valor booleano que impide que el jugador coloque los Executable Items en caso de que el ítem sea una instancia de bloque en el suelo.
* Ejemplo:

```yaml
restrictions:
  cancel-item-place: true
```

### Cancelar el uso del ítem en cualquier receta en la mesa de crafteo

* Info: Valor booleano que impide que el jugador craftee recetas vanilla con el ExecutableItem.
* Ejemplo:

```yaml
restrictions:
  cancel-item-craft: true
```

### Cancelar el uso del ítem solo en recetas vanilla, sin afectar a las personalizadas

* Info: Valor booleano que impide que el jugador craftee recetas vanilla con el ExecutableItem, pero que aún puede ser usado en recetas de crafteo personalizadas.
* Ejemplo:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Cancelar la interacción para decorar macetas de minecraft

* Info: Valor booleano que impide que el jugador coloque los ExecutableItems en las macetas decoradas
* Ejemplo:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Cancelar el depósito del ítem en un almacenamiento

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en la siguiente lista:
  * Cofre
  * Cofre de Ender
  * Cofre atrapado
  * Barril
  * Shulker Box
* Ejemplo: (Esta función no funciona en creativo)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Cancelar el depósito del ítem en un horno

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en la siguiente lista:
  * Horno
  * Alto horno
  * Ahumador
* Ejemplo: (Esta función no funciona en creativo)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Cancelar la quema del ítem en fuego y lava

* Info: Valor booleano que impide que el ExecutableItem se queme en fuego o lava.
* Ejemplo:

```yaml
restrictions:
  cancel-item-burn: true
```

### Cancelar la eliminación del ítem por interacción con cactus

* Info: Valor booleano que impide que el ExecutableItem sea eliminado al tocar un bloque de cactus.
* Ejemplo:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Cancelar la eliminación del ítem al ser alcanzado por un rayo

* Info: Valor booleano que impide que el ExecutableItem sea eliminado cuando un rayo lo alcanza.
* Config: `cancel-item-delete-by-lightning: true`
* Ejemplo:

```yaml
restrictions:
  cancel-item-delete-by-lightning: true
```

### Cancelar el encantamiento del ítem

* Info: Valor booleano que impide que el ítem sea encantado 
* Ejemplo:

```yaml
restrictions:
  cancel-enchant: true
```

### Cancelar la colocación del ítem dentro de un yunque 

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un yunque. Esto finalmente impide colocarlo, por lo que también impide renombrarlo y encantarlo.
* Ejemplo:

```yaml
restrictions:
  cancel-anvil: true
```

### Cancelar la acción de renombrar usando un yunque

* Info: Valor booleano que impide que el jugador renombre el ExecutableItem usando un yunque.
* Ejemplo:

```yaml
restrictions:
  cancel-rename-anvil: true
```

### Cancelar la acción de encantar usando un yunque

* Info: Valor booleano que impide que el jugador encante el ExecutableItem usando un yunque.
* Ejemplo:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Cancelar la interacción del ítem con caballo/mula/llama

* Info: Valor booleano que impide que los ExecutableItems interactúen con caballos/mulas/llamas. Esto también deshabilita el almacenamiento.
* Ejemplo:

```yaml
restrictions:
  cancel-horse: true
```

### Cancelar el consumo/comer del ítem

* Info: Valor booleano que impide que el jugador consuma o coma el ExecutableItem.
* Ejemplo:

```yaml
restrictions:
  cancel-consumption: true
```

### Cancelar el uso del ítem dentro del bloque crafter

* Info: Valor booleano que impide que el jugador coloque los ExecutableItems dentro de un bloque crafter.
* Config: `cancel-crafter: false`

```yaml
restrictions:
  cancel-crafter: true
```

### Restricción de bloqueo en el inventario

* Info: Valor booleano que hace que el ExecutableItem permanezca en el espacio donde está e impide que el jugador lo mueva de cualquier forma posible.
* Ejemplo (Esta función no funciona en creativo)

```yaml
restrictions:
  locked-in-inventory: true
```

### Cancelar interacciones de herramienta

* Info: Valor booleano que impide que el jugador use el ExecutableItem para activar interacciones de herramienta. P. ej. (Click derecho en un bloque usando un hacha para descortezarlo, usar una azada para cultivar un bloque de césped)
* Ejemplo:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Cancelar la colocación del ítem dentro de un marco de ítem

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un marco de ítem.
* Ejemplo:

```yaml
restrictions:
  cancel-item-frame: true
```

### Cancelar la interacción con una mesa de herrería

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de una mesa de herrería.
* Ejemplo:

```yaml
restrictions:
  cancel-smithing-table: true
```

### Cancelar la interacción con una piedra de afilar

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de una piedra de afilar.
* Ejemplo:

```yaml
restrictions:
  cancel-grind-stone: true
```

### Cancelar la interacción con una cortadora de piedra

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de una cortadora de piedra.
* Ejemplo:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Cancelar la interacción con un soporte de pociones 

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un soporte de pociones.
* Ejemplo:

```yaml
restrictions:
  cancel-brewing: true
```

### Cancelar la interacción con un faro

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un faro.
* Ejemplo:

```yaml
restrictions:
  cancel-beacon: true
```

### Cancelar la interacción con un bloque de cartografía

* Info: Impide que el jugador coloque el ExecutableItem dentro de un bloque de cartografía.
* Ejemplo:

```yaml
restrictions:
  cancel-cartography: true
```

### Cancelar la interacción con un bloque compostador

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un compostador.
* Ejemplo:

```yaml
restrictions:
  cancel-composter: true
```

### Cancelar la interacción con un bloque dispensador.

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en un bloque dispensador.
* Ejemplo:

```yaml
restrictions:
  cancel-dispenser: true
```

### Cancelar la interacción con un bloque de goteo (dropper)

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un bloque dropper.
* Ejemplo:

```yaml
restrictions:
  cancel-dropper: true
```

### Cancelar la interacción con un bloque de tolva

* Info: Valor booleano que impide que el jugador coloque los ítems ExecutableItem dentro de una tolva. Esto significa dejar el ítem dentro del contenedor de la tolva. Esto no impide que el ítem entre en la tolva mediante un ítem soltado encima de la tolva.
* Ejemplo:

```yaml
restrictions:
  cancel-hopper: true
```

### Cancelar la interacción con un bloque de atril

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un bloque de atril.
* Ejemplo:

```yaml
restrictions:
  cancel-lectern: true
```

### Cancelar la interacción con un comerciante/mercader aldeano

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un intercambio de aldeano/mercader.
* Ejemplo:

```yaml
restrictions:
  cancel-merchant: true
```

### Cancelar el intercambio de ítem entre manos

* Info: Valor booleano que impide que el jugador intercambie los ítems de una mano a la otra. Generalmente usando F en el teclado para "Swap items with offhand"
* Ejemplo:

```yaml
restrictions:
  cancel-swap-hand: true
```

### Cancelar la interacción de un cuerno

* Info: Valor booleano que impide que el jugador toque el cuerno en caso de que el ExecutableItem sea un cuerno.
* Ejemplo:

```yaml
restrictions:
  cancel-horn: true
```

### CANCELAR SOPORTE DE ARMADURA

* Info: Impide que el jugador coloque el ExecutableItem en un soporte de armadura.
* Ejemplo:

```yaml
restrictions:
  cancel-armorstand: true
```

### CANCELAR GENERADOR (SPAWNER)

* Info: Impide que el jugador use el huevo de generación del ExecutableItem en un spawner de su forma vanilla.
* Ejemplo:

```yaml
restrictions:
  cancel-spawner: true
```

### CANCELAR COLOCACIÓN EN BUNDLE

* Info: Impide que el jugador coloque el ExecutableItem dentro de un bundle.
* Ejemplo:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
