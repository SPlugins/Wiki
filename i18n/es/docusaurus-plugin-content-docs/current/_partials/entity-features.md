---
description: >-
  Explica los comandos, condiciones y placeholders de entidad para activadores
  en ExecutableItems, el plugin de SPlugins.
source_hash: 54a0eb1b19c50558
translated_at: '2026-10-03T10:36:17.144Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Los comandos son una lista de comandos que se ejecutan desde la consola cuando el activador cumple todas las condiciones y requisitos. Aquí puedes usar comandos vanilla, comandos de SCore y comandos de otros plugins.

* Todas las líneas de comando de esta lista de comandos se parsean primero con placeholders de Ssomar Plugins y después se parsean con PAPI.
  * Se recomienda revisar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver qué placeholders puedes usar en cada activador.
* Hay tres tipos de objetivos de entidad en los comandos
  * Player: Es el jugador/usuario que activó el activador en el ExecutableItem
  * Target: Es el jugador objetivo/enemigo involucrado en un activador.
  * Entity: Es la entidad/mob/enemigo involucrado en un activador.
* Tipo de categoría de activador: PLAYER\_ENTITY
* Info: Lista de comandos que normalmente se ejecutan contra la entidad cuando se activa el activador.
  * Por entidad se refiere a la entidad/mob/enemigo involucrado en un activador.
  * Sabemos que el jugador se considera como una entidad, pero la entidad involucrada en los activadores es únicamente el mob/enemigo involucrado en el evento.
  * Puedes consultar la lista de comandos de entidad aquí [Entity commands](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Ejemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Es importante entender que si tu activador también tiene un jugador, puedes usar los playerCommands, de modo que podemos tener por ejemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Info: Para activadores que involucran una entidad, puedes seleccionar como condición el tipo de entidad(es) donde se activará este activador usando esta funcionalidad.
  * Puedes seleccionar una entidad vanilla de Minecraft (info: [EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) como:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Requiere el [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) Puedes seleccionar un mob vanilla de Minecraft con NBT (info: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) como:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Puedes seleccionar un mob de MythicMob como:
    * "MM-\<ID>"
  * Puedes poner en lista negra a un mob usando ! como
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Info: Funcionalidad para activadores que involucran una entidad, aquí puedes configurar condiciones para la entidad involucrada.
* [Entity conditions](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

Cuando el actor principal del evento es una entidad, entonces puedes usar en la configuración de tu activador (comandos, condiciones, entre otros) [los placeholders de entidad](/tools-for-all-plugins-score/placeholders#entity-placeholders)
