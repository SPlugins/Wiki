---
description: >-
  Découvrez comment utiliser playerCommands, playerConditions et les
  placeholders du joueur dans les activateurs d'ExecutableItems.
source_hash: 6c1515db5b50e18e
translated_at: '2026-11-13T17:21:33.696Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Les commandes sont une liste de commandes exécutées depuis la console lorsque l'activateur se déclenche, s'il remplit toutes les conditions et exigences. Vous pouvez utiliser ici des commandes vanilla, des commandes SCore et des commandes d'autres plugins.

* Toutes les lignes de commande de cette liste sont d'abord traitées avec les placeholders de Ssomar Plugins, puis avec PAPI.
  * Il est recommandé de consulter la [liste des placeholders](/tools-for-all-plugins-score/placeholders) pour voir quels placeholders vous pouvez utiliser sur chaque activateur.

* Info : les player commands sont une liste de commandes normalement exécutées sur le joueur lorsque l'activateur se déclenche.
  * Cela signifie que s'il s'agit d'une commande SCore, par exemple DAMAGE 5, les dégâts seront appliqués à l'utilisateur de l'ExecutableItem.
    * [Commandes joueur](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) personnalisées disponibles depuis SCore
  * Vous pouvez aussi exécuter des commandes d'autres plugins ou des commandes vanilla. Ces commandes seront exécutées par la console.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Exemple :

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

* Info : vous pouvez utiliser ces conditions dans tous les types d'activateurs
* [Conditions du joueur](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player placeholders

Lorsque l'acteur principal de l'événement est un joueur, vous pouvez utiliser dans la configuration de votre activateur (commandes, conditions, etc.) [les placeholders du joueur](/tools-for-all-plugins-score/placeholders#player-placeholders)
