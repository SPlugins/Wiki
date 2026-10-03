---
description: >-
  Guía de SPlugins sobre targetCommands, targetConditions y placeholders del
  target player en los activadores de ExecutableItems.
source_hash: 8f10e4518745e33e
translated_at: '2026-10-03T10:44:37.529Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Los comandos son una lista de comandos que se ejecutan desde la consola cuando el activador cumple todas las condiciones y requisitos. Aquí puedes usar comandos vanilla, comandos de SCore y comandos de otros plugins.

* Todas las líneas de comando de esta lista de comandos se procesan primero con los placeholders de Ssomar Plugins y luego se procesan mediante PAPI.
  * Se recomienda revisar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver qué placeholders puedes usar en cada activador.
* Hay tres tipos de entity targets en los comandos
  * Player: es el jugador/usuario que activó el activador en el ExecutableItem
  * Target: es el jugador objetivo/enemigo involucrado en un activador.
  * Entity: es la entidad/mob/enemigo involucrado en un activador.
* Info: Target commands es una lista de comandos que normalmente se ejecutan contra el target cuando se activa el activador.
  * Esto significa que si tiene un comando de SCore como DAMAGE 5, si está en targetCommands entonces el daño se aplicará al target/enemigo involucrado en el activador.
  * Se dice "normalmente ejecutado contra el player" porque esto funciona para los comandos de SCore, recuerda que puedes usar comandos de otros plugins o comandos vanilla, así que si añades "effect give %player% strength 5 5" aunque esté en targetCommands, el parseo de placeholders aplicará el cooldown a %player%. Si quieres aplicar este comando al target entonces usa %target%. Más información en [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Puedes consultar la lista de targetCommands aquí -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Es importante entender que si tu activador también tiene un player, puedes usar los playerCommands para tener por ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* Tipo de categoría de activador: PLAYER\_TARGET
* Info: Función para activadores que involucran un player target, aquí puedes configurar condiciones para el player target involucrado.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Target player placeholders

Cuando el segundo actor del evento es un player, entonces puedes usar en la configuración de tu activador (comandos, condiciones, otros...) [los placeholders de target player](/tools-for-all-plugins-score/placeholders#-player-placeholders)
