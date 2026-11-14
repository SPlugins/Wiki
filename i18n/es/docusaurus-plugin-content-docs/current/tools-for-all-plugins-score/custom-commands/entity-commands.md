---
description: >-
  Lista de comandos de entidad de ExecutableItems: ANGRY_AT, CHANGE_INTO_ITEM,
  CHANGE_TO, KILL, HEAL, SET_AI, teletransportes y más, con sus ajustes y
  ejemplos.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T18:15:47.639Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de entidad

:::tip
Compatibilidad "multi-world" para los comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Ejemplo: quieres invocar un Zombie en el mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Los comandos de entidad son compatibles con los NPC de Citizens
:::

## Comandos mixtos

Además de la siguiente lista de comandos, también puedes usar:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Estos comandos se pueden usar en los comandos relacionados con el jugador O en los comandos relacionados con la entidad.

## Comandos personalizados

_Ordenados alfabéticamente_

### ANGRY\_AT

* Info: Establece el objetivo de la entidad en un UUID específico
* Ajuste del comando:
  * `{entityUUID}`: El UUID de la entidad objetivo
* Ejemplo:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Establece si este mob es consciente de su entorno. Los mobs no conscientes seguirán moviéndose si los empujan, los atacan, etc., pero no se moverán ni realizarán ninguna acción por sí solos. Los mobs no conscientes también pueden tener desactivados otros comportamientos no especificados, como ahogarse.

:::info
solo funciona en 1.16.5+
:::

* Ajuste del comando:
  * `{value}`: true o false
* Ejemplo:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Reemplaza un ítem soltado (una entidad de ítem en el suelo o en el aire) por un ítem vanilla o un ExecutableItem. La entidad sigue siendo la misma, solo cambia el ítem que lleva.
* Hecho para el activador `PLAYER_FISH_FISH` de ExecutableItems: allí, la entidad objetivo de `entityCommands` es el ítem pescado. Se cambia antes de recogerlo con la caña, así que el jugador conserva la animación normal de pesca y recibe tu ítem en lugar del pez. No hacen falta `/ei give`, `DELAYTICK` ni `data merge`.
  * En ExecutableEvents (todas las cañas de pescar del servidor), escríbelo en el `targetEntityCommands` de `PLAYER_FISH_FISH`.
* Ajustes del comando:
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
* Si un ExecutableItem y un material tienen el mismo nombre, se usa el ExecutableItem. Escribe `EI:my_id` para aceptar únicamente un ExecutableItem.
* El ExecutableItem se construye para el jugador que activó el activador (propietario, placeholders del ítem).
* El comando no hace nada si la entidad objetivo no es un ítem soltado (un mob, un jugador...), e imprime un mensaje en la consola si `item` no es ni un material ni un ExecutableItem cargado.
* Ejemplo completo con una tabla de botín aleatoria: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Reemplaza el mob por una entidad de otro tipo. Conservará la velocidad actual de la entidad actual.
  * Puedes especificar un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * O un ejemplo de definición de entidad: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * O un ID de MythicMob
* Ajuste del comando:
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
* Ajustes del comando:
  * `{id}`: Id del ExecutableItem
  * `{quantity}`: La cantidad del ítem ejecutable que se soltará
  * `[owner]`: (Opcional) El propietario del ítem soltado (IGN o UUID del jugador)
  * `[itemdata]`: (Opcional) Ajustes de datos del ítem que contienen:
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
* Ajustes del comando:
  * `{id}`: Id del ExecutableBlock
  * `{quantity}`: La cantidad del bloque ejecutable que se soltará
* Ejemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Suelta un ítem en la ubicación de la entidad
* Ajustes del comando:
  * `{material}`: El tipo de ítem. [Referencia](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DEBE ESTAR TODO EN MAYÚSCULAS)**
  * `{quantity}`: La cantidad del ítem que se soltará
* Ejemplo:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Cura a la entidad con una cantidad específica; si no se especifica, la curará por completo.
* Ajuste del comando:
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
* Sin ajustes del comando
* Ejemplo:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Hace que el jugador monte la entidad objetivo.
* Ajustes del comando:
  * `{control}`: true/false, si puedes controlar manualmente la entidad o no
  * `{speed}`: qué tan rápido puede ir la entidad mientras la montas
* Ejemplo:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Establece el estado de la IA de la entidad
* Ajustes del comando:
  * `{value}`: true para activar la IA de la entidad y false para desactivarla.
* Ejemplo:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Pone a la entidad en su estado "adulto"
* Sin ajustes del comando
* Ejemplo:

```
- SET_ADULT
```

* Situación de ejemplo:
  * Si este comando se ejecuta sobre una gallina bebé, se convertirá en su forma adulta.

### SET\_BABY

* Info: Pone a la entidad en su estado "bebé"
* Sin ajustes del comando
* Ejemplo:

```
- SET_BABY
```

* Situación de ejemplo:
  * Si este comando se ejecuta sobre una gallina adulta, se convertirá en su forma bebé.

### SET\_ENTITY\_NAME

* Info: Establece a la fuerza el nombre de la entidad
* Ajuste del comando:
  * `{name}`: el nuevo nombre de la entidad
* Ejemplo:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Esquila a la entidad
* Sin ajustes del comando
* Ejemplo:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teletransporta a la entidad al usuario del ítem
* Sin ajustes del comando
* Ejemplo:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teletransporta al usuario del ítem a la entidad
* Sin ajustes del comando
* Ejemplo:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teletransporta a la entidad a una ubicación específica
* Ajustes del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
* Ejemplo:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
