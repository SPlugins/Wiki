---
description: >-
  Guía sobre playerCommands, playerConditions y placeholders de jugador para
  activadores en ExecutableItems de SPlugins.
source_hash: 6c1515db5b50e18e
translated_at: '2026-10-03T10:44:26.224Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Los comandos son una lista de comandos que se ejecutan desde la consola cuando el activador cumple con todas las condiciones y requisitos. Puedes usar comandos vanilla aquí, comandos de SCore y comandos de otros plugins.

* Todas las líneas de comandos de esta lista de comandos se procesan primero con los placeholders de Ssomar Plugins y luego se procesan a través de PAPI.
  * Se recomienda revisar la [lista de placeholders](/tools-for-all-plugins-score/placeholders) para ver qué placeholders puedes usar en cada activador.

* Info: Player commands es una lista de comandos que normalmente se ejecutan contra el jugador cuando el activador se dispara.
  * Esto significa que si tiene un comando de SCore, por ejemplo: DAMAGE 5, el daño se aplicará al usuario del ExecutableItem.
    * Comandos personalizados [player commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) disponibles desde SCore
  * También puedes ejecutar comandos de otros plugins o comandos vanilla. Estos comandos serán ejecutados por la consola.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: Puedes usar estas condiciones en todos los tipos de activadores
* [Player conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player placeholders

Cuando el actor principal del evento es un jugador, puedes usar en la configuración de tu activador (comandos, condiciones, otros...) [los placeholders de jugador](/tools-for-all-plugins-score/placeholders#player-placeholders)
