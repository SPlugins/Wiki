---
description: >-
  Liste des commandes et permissions d'ExecutableBlocks : créer, placer,
  retirer, donner des EB, recharger le plugin et gérer les cooldowns.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T17:10:12.814Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Commandes & Permissions

## Permissions

**ASTUCE pour les débutants :**

:::info
Pour donner les permissions de tous les items, je vous conseille de télécharger un plugin de permissions comme [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/). Une fois le plugin de permissions installé, il vous suffit de donner la permission **`eb.block.*`**. Pour LuckPerms, la commande est **`/lp group default permission set eb.block.* true`**
:::

#### Permission du bloc

* Permission : `eb.block.{id}`
* Permission négative : `-eb.block.{id}` 
* Exemple : `eb.block.Test`
* Permission pour donner tous les items : `eb.block.*` 

#### Donner toutes les permissions d'EB

* Permission : `eb.*`

#### Donner les permissions de toutes les commandes d'EB

* Permission : `eb.cmds`

#### Permission pour ignorer le cooldown

* Permission : `eb.nocd.{id}` `eb.nocd.*`
* Description : donnez cette permission personnalisée pour désactiver le cooldown de vos joueurs VIP
* (Pensez à tester sans être op)

**Limite d'EB**

* Permission : `eb.limit.{amount}`
* Description : définit la valeur maximale d'EB qu'un joueur peut placer.

#### Limiter un EB spécifique

* Permission : `eb.block.ID.limit.{amount}`
* Description : limite le nombre d'EB d'un ID spécifique qu'un joueur peut placer

## Commandes

#### Créer un nouvel ExecutableBlock

* Commande : **/eb create \{id\}**
* Astuce : 
  * Si vous voulez **copier l'item/bloc d'un autre plugin**, ou un bloc vanilla personnalisé (Bannière, Bloc personnalisé, ...), vous devez installer mon autre plugin, ExecutableItems, taper **/ei create \{id\}**, puis importer votre ExecutableItem dans ExecutableBlocks.
* Permission : `eb.cmd.create`

####

#### Ouvrir une GUI avec les EB placés

* Commande : /eb show-placed filter/sort:

#### Ouvrir l'éditeur / le menu

* Commande : **/eb editor** ou **/eb show**
* Permission : `eb.cmd.editor` ou `eb.cmd.show`

#### Ouvrir l'éditeur pour modifier un EB spécifique

* Commande : **/eb edit \{BlockID\}**
* Permission : `eb.cmd.edit`

#### Recharger le plugin

* Commande : **/eb reload**
* Permission : `eb.cmd.reload`

#### Recharger le plugin (un seul bloc)

* Commande : **/eb reload \{block\_id\}**
* Permission : `eb.cmd.reload`

**Recharger un dossier**

* Commande : **/eb reload folder\:Name\_Of\_My\_Folder**
* Permission : `eb.cmd.reload`

#### Supprimer un ExecutableBlock

* Commande : **/eb delete \{id\}**
* Permission : `eb.cmd.create`

#### Recharger les blocs par défaut d'ExecutableBlocks

* Commande : **/eb default\_blocks**
* Permission : `eb.cmd.default_blocks`

#### Effacer tous les cooldowns et commandes différées d'EB

* Commande : **/eb clear** **\[playerName]**
* Permission : `eb.cmd.clear`

:::info
Cela fonctionne aussi avec les entités : utilisez simplement l'UUID de l'entité à la place du nom du joueur
:::

#### Activer / désactiver l'actionbar d'EB

* Commande : **/eb actionbar** **\{on or off\}**
* Permission : `eb.cmd.actionbar`

#### Placer un EB à une position spécifique

* Commande : **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Permission : `eb.cmd.place`
* `[direction]` : (Optionnel) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` ou `DOWN` (majuscules ou minuscules, avec complétion par Tab). Le bloc placé est orienté vers cette direction.
  * Elle est prioritaire sur les [fonctionnalités directionnelles](/executableblocks/configurations/block-configuration/block-features#directional-features) du bloc (`blockFaceOnPlace` avec `forceBlockFaceOnPlace: true`).
  * Elle fonctionne sur les blocs qui peuvent être orientés : blocs directionnels (fourneaux, observateurs, nids d'abeilles...), blocs rotatifs (panneaux, têtes, bannières : pas `UP` / `DOWN`) et blocs avec un axe (bûches, piliers : `UP` / `DOWN` = vertical). Une direction que le bloc n'accepte pas est ignorée.
  * Uniquement pour les ExecutableBlocks créés avec `BASIC_CREATION` ou `IMPORT_FROM_EXECUTABLE_ITEMS`, sur les serveurs 1.13+.
  * Sans cet argument, rien ne change : le bloc est placé comme avant.
* Exemple : `/eb place my_furnace 100 64 -20 world EAST`

#### Retirer un EB à une position spécifique

* Commande : **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permission : `eb.cmd.remove`

#### Remplir une sélection de région avec un EB

* Prérequis : cette commande nécessite le plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Commande : **/eb we-place \{id\}**
* Permission : `eb.cmd.we-place`

#### Remplir une région WorldGuard avec un EB

* Prérequis : cette commande nécessite le plugin WorldGuard
* Commande : **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permission : `eb.cmd.wg-fill-region`

#### Retirer tous les EB présents dans une sélection de blocs

* Prérequis : cette commande nécessite le plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Commande : **/eb we-remove \{replaceTheEBByAir true or false\}**
* Permission : `eb.cmd.we-remove`

#### Modification d'une variable d'EB

* Commande : /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Modification de l'usage d'un EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Commandes Give & Take

#### Commande Give

* (Fonctionne pour les joueurs hors ligne)
* Commande : 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Permission : `eb.cmd.give`
* Exemples :
  * Exemples : 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Commande Take

* Commande : 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Permission : `eb.cmd.take`

#### Commande GiveAll

* Commande : 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Permission : `eb.cmd.giveall`

#### Donner un EB dans un slot spécifique d'un joueur 

* Commande : 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Exemples : 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage par défaut : l'usage défini dans la config de votre EB_
  * _Override permet à l'EB de prendre ce slot ; si un item s'y trouvait, il est déplacé vers un autre slot ou jeté au sol._
* Permission : `eb.cmd.giveslot`

**Donner tous les EB d'un dossier spécifique à un joueur**

* Commande :
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Commandes Drop

#### Faire tomber un EB à un emplacement / une position spécifique 

* Commande : 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Quantité par défaut : 1_
  * _Emplacement par défaut : l'emplacement du joueur qui a exécuté cette commande_
* Permission : `eb.cmd.drop`

### Custom trigger

Commandes :

* /eb run-custom-trigger trigger:\{activatorId\} // Exécute le ou les activateurs de tous les EB placés qui possèdent un activateur avec l'ID indiqué.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Exécute le ou les activateurs uniquement pour l'EB placé à l'emplacement indiqué, et seulement s'il possède un activateur avec l'ID indiqué.
