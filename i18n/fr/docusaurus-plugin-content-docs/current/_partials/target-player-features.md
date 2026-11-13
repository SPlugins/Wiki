---
description: >-
  Découvrez comment utiliser targetCommands, targetConditions et les
  placeholders du joueur cible dans les activateurs d'ExecutableItems.
source_hash: 8f10e4518745e33e
translated_at: '2026-11-13T17:22:06.004Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Les commandes sont une liste de commandes exécutées depuis la console lorsque l'activateur remplit toutes les conditions et exigences. Vous pouvez utiliser ici des commandes vanilla, des commandes SCore et des commandes d'autres plugins.

* Toutes les lignes de commande de cette liste sont d'abord analysées avec les placeholders des plugins Ssomar, puis passent par PAPI. 
  * Il est recommandé de consulter [Placeholders](/tools-for-all-plugins-score/placeholders) pour voir quels placeholders vous pouvez utiliser sur chaque activateur.
* Il existe trois types de cibles d'entité pour les commandes
  * Joueur : c'est le joueur/utilisateur qui a déclenché l'activateur sur l'ExecutableItem.
  * Cible : c'est le joueur ciblé/l'ennemi impliqué dans un activateur.
  * Entité : c'est l'entité/le mob/l'ennemi impliqué dans un activateur.
* Info : les commandes de cible sont une liste de commandes qui sont normalement exécutées sur la cible lorsque l'activateur se déclenche.
  * Cela signifie que si elle contient une commande SCore DAMAGE 5 et qu'elle se trouve dans targetCommands, les dégâts seront appliqués à la cible/l'ennemi impliqué dans l'activateur.
  * Elle est « normalement exécutée sur le joueur » car cela fonctionne pour les commandes SCore. N'oubliez pas que vous pouvez utiliser des commandes d'autres plugins ou des commandes vanilla : si vous ajoutez « effect give %player% strength 5 5 » alors qu'elle se trouve dans targetCommands, l'analyse des placeholders appliquera le cooldown à %player%. Si vous souhaitez appliquer cette commande à la cible, utilisez %target%. Plus d'informations sur les [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Vous pouvez consulter la liste des targetCommands ici -> [Commandes du joueur et de la cible](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Il est important de comprendre que si votre activateur comporte aussi un joueur, vous pouvez utiliser les playerCommands, ce qui nous permet d'avoir par exemple : 

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

* Type de catégorie d'activateur : PLAYER\_TARGET
* Info : fonctionnalité pour les activateurs impliquant un joueur cible, vous pouvez ici configurer les conditions du joueur cible concerné.
* [Conditions de la cible](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Placeholders du joueur cible

Lorsque le second acteur de l'évènement est un joueur, vous pouvez utiliser dans la configuration de votre activateur (commandes, conditions, autres...) [les placeholders du joueur cible](/tools-for-all-plugins-score/placeholders#-player-placeholders)
