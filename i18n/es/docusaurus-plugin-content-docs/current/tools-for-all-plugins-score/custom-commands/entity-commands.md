---
description: >-
  Guía de SPlugins sobre los comandos de entidad: controla mobs, NPCs y objetos
  soltados con comandos personalizados en ExecutableItems.
source_hash: 513c7df4b594137b
translated_at: '2026-10-03T10:35:09.430Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de Entidad

:::tip
Compatibilidad "multi-mundo" para los comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Ejemplo, quieres invocar un Zombie en el mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Los comandos de entidad son compatibles con los NPCs de Citizens
:::

## Comandos Mixtos

Además de la siguiente lista de comandos, también puedes usar:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Estos comandos se pueden usar tanto en los comandos relacionados con el jugador COMO en los comandos relacionados con la entidad.

## Comandos personalizados

_Ordenados alfabéticamente_

### ANGRY\_AT

* Info: Establece el objetivo de la entidad a un UUID específico
* Configuración del comando:
  * `{entityUUID}`: El UUID de la entidad objetivo
* Ejemplo:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Establece si este mob es consciente de su entorno. Los mobs inconscientes seguirán moviéndose si son empujados, atacados, etc. pero no se moverán ni realizarán ninguna acción por su cuenta. Los mobs inconscientes también pueden tener otros comportamientos no especificados desactivados, como el ahogamiento.

:::info
Solo funciona para 1.16.5+
:::

* Configuración del comando:
  * `{value}`: true o false
* Ejemplo:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Reemplaza un ítem soltado (un ítem entidad en el suelo o en el aire) por un ítem vanilla o un ExecutableItem. La entidad se mantiene igual, solo cambia el ítem que lleva.
* Pensado para el activador `PLAYER_FISH_FISH` de ExecutableItems: ahí, la entidad apuntada por `entityCommands` es el ítem capturado. Se cambia antes de que sea recogido, de modo que el jugador conserva la animación normal de pesca y recibe tu ítem en lugar del pez. No se necesita `/ei give`, ni `DELAYTICK`, ni `data merge`.
* Configuración del comando:
  * `item`: Un material (`DIAMOND`) o el id de un ExecutableItem (`my_custom_fish`).
  * `amount`: (Opcional) La cantidad del nuevo ítem. Por defecto: 1
* Ejemplo:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Si un ExecutableItem y un material tienen el mismo nombre, se usa el ExecutableItem. Escribe `EI:my_id` para aceptar solo un ExecutableItem.
* El ExecutableItem se construye para el jugador que activó el activador (dueño, placeholders del ítem).
* El comando no hace nada si la entidad objetivo no es un ítem soltado (un mob, un jugador...), e imprime un mensaje en la consola si `item` no es ni un material ni un ExecutableItem cargado.
* Ejemplo completo con una tabla de botín aleatoria: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Reemplaza el mob por una entidad de otro tipo. Mantendrá la velocidad actual de la entidad actual.
  * Puedes especificar un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * O una definición de entidad, ejemplo: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * O un ID de MythicMob
* Configuración del comando:
  * `{entity}`: La especificación de la entidad
* Ejemplo:

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

* Info: Suelta un Executable Item en la ubicación de la entidad
* Configuración del comando:
  * `{id}`: Id del ítem del ExecutableItem
  * `{quantity}`: La cantidad del ítem ejecutable que se soltará
  * `[owner]`: (Opcional) El dueño del ítem soltado (IGN o UUID del jugador)
  * `[itemdata]`: (Opcional) Configuración de datos del ítem que contiene:
    * `Usage`: Establece el valor de uso
    * `Variables`: Establece variables personalizadas (formato: `{key:value}`)
    * `Durability`: Establece el valor de durabilidad
* Ejemplo:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Suelta un Executable Block en la ubicación de la entidad
* Configuración del comando:
  * `{id}`: Id del ítem del ExecutableBlock
  * `{quantity}`: La cantidad del bloque ejecutable que se soltará
* Ejemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Suelta un ítem en la ubicación de la entidad
* Configuración del comando:
  * `{material}`: El tipo de ítem. [Referencia](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DEBE ESTAR TODO EN MAYÚSCULAS)**
  * `{quantity}`: La cantidad del ítem que se soltará
* Ejemplo:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Cura a la entidad con una cantidad específica, si no se especifica curará por completo a la entidad.
* Configuración del comando:
  * `{amount}`: La cantidad de curación
* Ejemplo:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: Mata al mob sin la animación de muerte
* Sin configuración de comando
* Ejemplo:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Hace que el jugador monte la entidad apuntada.
* Configuración del comando:
  * `{control}`: true/false si puedes controlar manualmente la entidad o no
  * `{speed}`: qué tan rápido puede ir la entidad mientras la montas
* Ejemplo:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Establece el estado de la IA de la entidad
* Configuración del comando:
  * `{value}`: true para activar la IA de la entidad y false para desactivarla.
* Ejemplo:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Coloca a la entidad en su estado "adulto"
* Sin configuración de comando
* Ejemplo:

```
- SET_ADULT
```

* Situación de ejemplo:
  * Si este comando se ejecuta sobre un pollo bebé, se convertirá en su forma adulta.

### SET\_BABY

* Info: Coloca a la entidad en su estado "bebé"
* Sin configuración de comando
* Ejemplo:

```
- SET_BABY
```

* Situación de ejemplo:
  * Si este comando se ejecuta sobre un pollo adulto, se convertirá en su forma bebé.

### SET\_ENTITY\_NAME

* Info: Establece forzosamente el nombre de la entidad
* Configuración del comando:
  * `{name}`: el nuevo nombre de la entidad
* Ejemplo:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Esquila a la entidad
* Sin configuración de comando
* Ejemplo:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teletransporta la entidad hacia el usuario del ítem
* Sin configuración de comando
* Ejemplo:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teletransporta al usuario del ítem hacia la entidad
* Sin configuración de comando
* Ejemplo:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teletransporta a la entidad a una ubicación específica
* Configuración del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
* Ejemplo:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
