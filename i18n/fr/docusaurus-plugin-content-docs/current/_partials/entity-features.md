---
description: >-
  Découvrez comment utiliser entityCommands, detailedEntities, entityConditions
  et les placeholders d'entité dans les activateurs d'ExecutableItems.
source_hash: 54a0eb1b19c50558
translated_at: '2026-11-13T17:21:14.530Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Les commandes forment une liste de commandes exécutées depuis la console lorsque l'activateur remplit toutes les conditions et exigences. Vous pouvez utiliser ici des commandes vanilla, des commandes SCore et des commandes d'autres plugins.

* Toutes les lignes de commande de cette liste sont d'abord traitées avec les placeholders des plugins Ssomar, puis passent par PAPI. 
  * Il est recommandé de consulter [Placeholders](/tools-for-all-plugins-score/placeholders) pour voir quels placeholders vous pouvez utiliser sur chaque activateur.
* Il existe trois types de cibles d'entité pour les commandes
  * Player : c'est le joueur/utilisateur qui a déclenché l'activateur sur l'ExecutableItem
  * Target : c'est le joueur ciblé/l'ennemi impliqué dans un activateur.
  * Entity : c'est l'entité/le mob/l'ennemi impliqué dans un activateur.
* Type de catégorie d'activateur : PLAYER\_ENTITY
* Info : liste de commandes qui sont normalement exécutées contre l'entité lorsque l'activateur se déclenche.
  * Par entité, on entend l'entité/le mob/l'ennemi impliqué dans un activateur.
  * Nous savons que le joueur est considéré comme une entité, mais l'entité impliquée dans les activateurs est uniquement le mob/l'ennemi impliqué dans l'événement.
  * Vous pouvez consulter la liste des commandes d'entité ici : [Commandes d'entité](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Exemple :

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Il est important de comprendre que si votre activateur implique également un joueur, vous pouvez utiliser les playerCommands, ce qui permet par exemple d'avoir : 

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

* Info : pour les activateurs qui impliquent une entité, vous pouvez sélectionner comme condition le ou les types d'entité sur lesquels cet activateur se déclenchera grâce à cette fonctionnalité.
  * Vous pouvez sélectionner une entité vanilla de Minecraft (info : [liste des EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) comme :
    * "ZOMBIE"
  * <CustomTag type="premium" /> Cela nécessite le [plugin NBTAPI](https://modrinth.com/plugin/nbtapi). Vous pouvez sélectionner un mob vanilla de Minecraft avec NBT (info : [tags NBT des entités](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) comme :
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Vous pouvez sélectionner un mob MythicMobs comme :
    * "MM-\<ID>"
  * Vous pouvez mettre un mob sur liste noire en utilisant ! comme
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

* Info : fonctionnalité pour les activateurs qui impliquent une entité, vous pouvez ici configurer des conditions pour l'entité impliquée.
* [Conditions d'entité](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Placeholders d'entité

Lorsque l'acteur principal de l'événement est une entité, vous pouvez utiliser dans la configuration de votre activateur (commandes, conditions, autres...) [les placeholders d'entité](/tools-for-all-plugins-score/placeholders#entity-placeholders)
