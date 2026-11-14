---
description: >-
  Aprende a configurar restricciones y resistencias de ítems en ExecutableItems:
  evita soltar, craftear, encantar o guardar ítems en contenedores.
source_hash: bf6b77f864065099
translated_at: '2026-11-13T18:15:28.540Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Restricciones/Resistencias de ítems

En esta página aprenderás sobre las restricciones de ítems y algunas resistencias, que te permitirán personalizar el comportamiento del ítem en ciertos casos.

## Restricciones globales

* Info: Si quieres añadir alguna de las restricciones de ítems a todos los ítems que has creado en el plugin, puedes añadir la configuración de la(s) restricción(es) que desees dentro del archivo config.yml del plugin.
* Ejemplo: Quiero añadir las restricciones de no usar yunque ni piedra de afilar a todos los ExecutableItems creados y por crear


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

En esta sección aprenderás cómo añadir una restricción individual solo para el ExecutableItem que estás editando actualmente.

### Cancelar el drop del ítem

* Info: Valor booleano que impide que el jugador suelte el ExecutableItem.
* Nota: cuando el ítem no puede volver al inventario (por ejemplo, estaba en el cursor mientras el inventario se cerraba y todos los espacios están llenos), se permite soltarlo en lugar de eliminar el ítem.
* Ejemplo:

```yaml
restrictions:
  cancel-item-drop: true
```

### Cancelar la colocación del bloque en el suelo.

* Info: Valor booleano que impide que el jugador coloque en el suelo los Executable Items cuando el ítem es una instancia de bloque.
* Ejemplo:

```yaml
restrictions:
  cancel-item-place: true
```

### Cancelar el uso del ítem en cualquier receta de la mesa de crafteo

* Info: Valor booleano que impide que el jugador craftee recetas vanilla con el ExecutableItem.
* Ejemplo:

```yaml
restrictions:
  cancel-item-craft: true
```

### Cancelar el uso del ítem solo en recetas vanilla, sin afectar a las personalizadas

* Info: Valor booleano que impide que el jugador craftee recetas vanilla con el ExecutableItem, pero se puede seguir usando en recetas de crafteo personalizadas.
* Ejemplo:

```yaml
restrictions:
  cancel-item-craft-no-custom: true
```

### Cancelar la interacción para decorar las vasijas de Minecraft

* Info: Valor booleano que impide que el jugador coloque los ExecutableItems en las vasijas decoradas
* Ejemplo:

```yaml
restrictions:
  cancel-decorated-pot: true
```

### Cancelar colocar el ítem en un estante

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en un estante (Minecraft 1.21.9+, todos los tipos de madera).
  * Útil para un ítem que se devuelve a sí mismo mediante sus activadores (por ejemplo, un cubo de agua "infinito"): sin ella, el ítem colocado en el estante se queda ahí mientras el activador entrega uno nuevo.
* Ejemplo:

```yaml
restrictions:
  cancel-shelf: true
```

### Cancelar depositar el ítem en un almacenamiento

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en los siguientes bloques:
  * Cofre
  * Cofre de Ender
  * Cofre trampa
  * Barril
  * Caja de shulker
* Ejemplo: (Esta función no funciona en creativo)

```yaml
restrictions:
  cancel-deposit-in-chest: true
```

### Cancelar depositar el ítem en un horno

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en los siguientes bloques:
  * Horno
  * Alto horno
  * Ahumador
* Ejemplo: (Esta función no funciona en creativo)

```yaml
restrictions:
  cancel-deposit-in-furnace: true
```

### Cancelar que el ítem se queme en el fuego y la lava

* Info: Valor booleano que impide que el ExecutableItem se queme en el fuego o la lava.
* Ejemplo:

```yaml
restrictions:
  cancel-item-burn: true
```

### Cancelar que el ítem se elimine por la interacción con un cactus

* Info: Valor booleano que impide que el ExecutableItem se elimine al tocar un bloque de cactus.
* Ejemplo:

```yaml
restrictions:
  cancel-item-delete-by-cactus: true
```

### Cancelar que el ítem se elimine al ser alcanzado por un rayo

* Info: Valor booleano que impide que el ExecutableItem se elimine cuando le cae un rayo.
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

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un yunque. Al no poder colocarlo, también impide renombrarlo y encantarlo.
* Ejemplo:

```yaml
restrictions:
  cancel-anvil: true
```

### Cancelar la acción de renombrar con un yunque

* Info: Valor booleano que impide que el jugador renombre el ExecutableItem usando un yunque.
* Ejemplo:

```yaml
restrictions:
  cancel-rename-anvil: true
```

:::tip
Un ítem que se repara o se encanta en un yunque **sin ser renombrado** conserva su nombre con colores / degradado gracias a [keepNameInAnvil](/executableitems/configurations/general-configuration#keepnameinanvil) (activado por defecto). Esa opción va en `plugins/ExecutableItems/config.yml`, no en el archivo del ítem.
:::

### Cancelar la acción de encantar con un yunque

* Info: Valor booleano que impide que el jugador encante el ExecutableItem usando un yunque.
* Ejemplo:

```yaml
restrictions:
  cancel-enchant-anvil: true
```

### Cancelar la interacción del ítem con caballo/mula/llama

* Info: Valor booleano que impide que los ExecutableItems interactúen con caballos/mulas/llamas. Esto también desactiva el almacenamiento.
* Ejemplo:

```yaml
restrictions:
  cancel-horse: true
```

### Cancelar el consumo/comer el ítem

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

### Cancelar las interacciones de herramienta

* Info: Valor booleano que impide que el jugador use el ExecutableItem para activar interacciones de herramienta. Por ejemplo: (clic derecho en un bloque con un hacha para pelarlo, usar una azada para labrar un bloque de hierba)
* Ejemplo:

```yaml
restrictions:
  cancel-tool-interactions: true
```

### Cancelar colocar el ítem dentro de un marco

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un marco.
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

### Cancelar la interacción con un cortapiedras

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un cortapiedras.
* Ejemplo:

```yaml
restrictions:
  cancel-stone-cutter: true
```

### Cancelar la interacción con un soporte para pociones 

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un soporte para pociones.
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

### Cancelar la interacción con una mesa de cartografía

* Info: Impide que el jugador coloque el ExecutableItem dentro de una mesa de cartografía.
* Ejemplo:

```yaml
restrictions:
  cancel-cartography: true
```

### Cancelar la interacción con un bloque de composta

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de una composta.
* Ejemplo:

```yaml
restrictions:
  cancel-composter: true
```

### Cancelar la interacción con un bloque de dispensador.

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem en un bloque de dispensador.
* Ejemplo:

```yaml
restrictions:
  cancel-dispenser: true
```

### Cancelar la interacción con un bloque de soltador

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un bloque de soltador.
* Ejemplo:

```yaml
restrictions:
  cancel-dropper: true
```

### Cancelar la interacción con un bloque de tolva

* Info: Valor booleano que impide que el jugador coloque los ExecutableItems dentro de una tolva. Esto significa dejar el ítem dentro del contenedor de la tolva. No impide que el ítem entre en la tolva si se suelta encima de ella.
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

### Cancelar la interacción con un aldeano comerciante/mercader

* Info: Valor booleano que impide que el jugador coloque el ExecutableItem dentro de un intercambio con un aldeano/mercader.
* Ejemplo:

```yaml
restrictions:
  cancel-merchant: true
```

### Cancelar el intercambio de ítems entre manos

* Info: Valor booleano que impide que el jugador intercambie los ítems de una mano a la otra. Normalmente se usa la tecla F del teclado para "Swap items with offhand"
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

### CANCELAR ARMOR STAND

* Info: Impide que el jugador coloque el ExecutableItem en un armor stand.
* Ejemplo:

```yaml
restrictions:
  cancel-armorstand: true
```

### CANCELAR SPAWNER

* Info: Impide que el jugador use el huevo generador ExecutableItem en un spawner de la forma vanilla.
* Ejemplo:

```yaml
restrictions:
  cancel-spawner: true
```

### CANCELAR COLOCAR EN PAQUETE

* Info: Impide que el jugador coloque el ExecutableItem dentro de un paquete.
* Ejemplo:

```yaml
restrictions:
  cancel-place-in-bundle: true
```
