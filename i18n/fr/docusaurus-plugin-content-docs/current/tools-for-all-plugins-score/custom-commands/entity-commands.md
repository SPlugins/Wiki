---
description: >-
  Liste des commandes d'entité d'ExecutableItems : soigner, téléporter, tuer,
  changer ou modifier une entité, avec les paramètres et des exemples.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T17:16:07.698Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Commandes d'entité

:::tip
Compatibilité « multi-world » pour les commandes vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemple : vous voulez invoquer un Zombie dans le monde SsomarWorld :

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemple avec un placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Les commandes d'entité prennent en charge les PNJ de Citizens
:::

## Commandes mixtes

En plus de la liste de commandes suivante, vous pouvez aussi utiliser :

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Ces commandes peuvent être utilisées dans les commandes liées au joueur OU dans les commandes liées à l'entité.

## Commandes personnalisées

_Classées par ordre alphabétique_

### ANGRY\_AT

* Info : Définit la cible de l'entité sur un UUID précis
* Paramètre de la commande :
  * `{entityUUID}` : L'UUID de l'entité cible
* Exemple :

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info : Définit si ce mob est conscient de son environnement. Les mobs non conscients se déplacent quand même s'ils sont poussés, attaqués, etc., mais ne se déplacent pas et n'effectuent aucune action d'eux-mêmes. Ils peuvent aussi avoir d'autres comportements non spécifiés désactivés, comme la noyade.

:::info
Cela ne fonctionne que pour la 1.16.5+
:::

* Paramètre de la commande :
  * `{value}` : true ou false
* Exemple :

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info : Remplace un item au sol (une entité item posée par terre ou en l'air) par un item vanilla ou un ExecutableItem. L'entité reste la même, seul l'item qu'elle porte change.
* Conçue pour l'activateur `PLAYER_FISH_FISH` d'ExecutableItems : dans ce cas, l'entité ciblée par `entityCommands` est l'item pêché. Elle est modifiée avant d'être remontée, donc le joueur garde l'animation de pêche normale et reçoit votre item à la place du poisson. Pas besoin de `/ei give`, de `DELAYTICK` ni de `data merge`.
  * Dans ExecutableEvents (toutes les cannes à pêche du serveur), écrivez-la dans le `targetEntityCommands` de `PLAYER_FISH_FISH`.
* Paramètres de la commande :
  * `item` : Un matériau (`DIAMOND`) ou l'id d'un ExecutableItem (`my_custom_fish`).
  * `amount` : (Optionnel) La quantité du nouvel item. Par défaut : 1
* Exemple :

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
* Si un ExecutableItem et un matériau portent le même nom, l'ExecutableItem est utilisé. Écrivez `EI:my_id` pour n'accepter qu'un ExecutableItem.
* L'ExecutableItem est construit pour le joueur qui a déclenché l'activateur (propriétaire, placeholders de l'item).
* La commande ne fait rien si l'entité ciblée n'est pas un item au sol (un mob, un joueur...), et elle affiche un message dans la console si `item` n'est ni un matériau ni un ExecutableItem chargé.
* Exemple complet avec une table de loot aléatoire : [Loot de pêche personnalisé](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info : Remplace le mob par une entité d'un autre type. Elle conservera la vélocité actuelle de l'entité d'origine.
  * Vous pouvez indiquer un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Ou une définition d'entité, par exemple : `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Ou un ID de MythicMob
* Paramètre de la commande :
  * `{entity}` : La spécification de l'entité
* Exemple :

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

* Info : Fait tomber un ExecutableItem à l'emplacement de l'entité
* Paramètres de la commande :
  * `{id}` : L'id de l'ExecutableItem
  * `{quantity}` : La quantité d'ExecutableItem qui sera lâchée
  * `[owner]` : (Optionnel) Le propriétaire de l'item lâché (pseudo ou UUID du joueur)
  * `[itemdata]` : (Optionnel) Paramètres de données de l'item contenant :
    * `Usage` : Définit la valeur d'utilisation
    * `Variables` : Définit des variables personnalisées (format : `{key:value}`)
    * `Durability` : Définit la valeur de durabilité
* Exemple :

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info : Fait tomber un ExecutableBlock à l'emplacement de l'entité
* Paramètres de la commande :
  * `{id}` : L'id de l'ExecutableBlock
  * `{quantity}` : La quantité d'ExecutableBlock qui sera lâchée
* Exemple :

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info : Fait tomber un item à l'emplacement de l'entité
* Paramètres de la commande :
  * `{material}` : Le type d'item. [Référence](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DOIT ÊTRE EN MAJUSCULES)**
  * `{quantity}` : La quantité d'items qui sera lâchée
* Exemple :

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info : Soigne l'entité d'une quantité précise ; si rien n'est indiqué, l'entité est soignée complètement.
* Paramètre de la commande :
  * `{amount}` : La quantité de soin
* Exemple :

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info : Tue le mob sans animation de mort
* Aucun paramètre de commande
* Exemple :

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info : Fait monter le joueur sur l'entité ciblée.
* Paramètres de la commande :
  * `{control}` : true/false, pour savoir si vous pouvez contrôler manuellement l'entité ou non
  * `{speed}` : la vitesse à laquelle l'entité peut aller quand vous la montez
* Exemple :

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info : Définit l'état de l'IA de l'entité
* Paramètres de la commande :
  * `{value}` : true pour activer l'IA de l'entité et false pour la désactiver.
* Exemple :

```
- SET_AI value:false
```

### SET\_ADULT

* Info : Met l'entité à l'état « adulte »
* Aucun paramètre de commande
* Exemple :

```
- SET_ADULT
```

* Exemple de situation :
  * Si cette commande est exécutée sur un poussin, il se transformera en sa forme adulte.

### SET\_BABY

* Info : Met l'entité à l'état « bébé »
* Aucun paramètre de commande
* Exemple :

```
- SET_BABY
```

* Exemple de situation :
  * Si cette commande est exécutée sur une poule adulte, elle se transformera en sa forme bébé.

### SET\_ENTITY\_NAME

* Info : Force le nom de l'entité
* Paramètre de la commande :
  * `{name}` : le nouveau nom de l'entité
* Exemple :

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info : Tond l'entité
* Aucun paramètre de commande
* Exemple :

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info : Téléporte l'entité vers l'utilisateur de l'item
* Aucun paramètre de commande
* Exemple :

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info : Téléporte l'utilisateur de l'item vers l'entité
* Aucun paramètre de commande
* Exemple :

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info : Téléporte l'entité à un emplacement précis
* Paramètres de la commande :
  * `{x}` : Coordonnée X
  * `{y}` : Coordonnée Y
  * `{z}` : Coordonnée Z
* Exemple :

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
