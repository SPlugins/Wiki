---
description: >-
  Idées d'items courantes et comment les créer avec ExecutableItems : armures,
  activateurs, conditions et commandes expliqués simplement.
source_hash: 267b9196d0e24db3
translated_at: '2026-11-13T17:14:34.641Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Idées d'items - Comment créer... ?

## Qu'est-ce que cette page ?

* Cette page explique en termes généraux les idées d'items les plus courantes dont les gens demandent comment les réaliser. Donc, si vous voulez créer quelque chose... sans savoir comment faire, jetez d'abord un œil ici : votre question s'y trouve peut-être, ou bien une méthode similaire que vous pourrez recréer en observant comment le plugin fonctionne ^^

:::info
Cette page vous indique comment faire certaines choses, ou vous donne une idée. Si vous ne savez pas comment fonctionne une condition, une commande, un placeholder, etc., ce n'est pas l'endroit pour l'apprendre : explorez les sections correspondantes du wiki. Ici, vous n'aurez que l'idée, pas un tutoriel.
:::

### Je voudrais qu'une capacité de mon ExecutableItem ne fonctionne pas dans une région précise

* Dans l'activateur qui contient votre « capacité », allez dans **playerConditions** et cherchez « **ifNotInRegion** », puis utilisez-la comme vous le souhaitez : elle permet de mettre des régions en **liste noire**.

### Je voudrais qu'une capacité de mon ExecutableItem ne fonctionne que dans une région précise

* Dans l'activateur qui contient votre « capacité », allez dans **playerConditions** et cherchez « **ifInRegion** », puis utilisez-la comme vous le souhaitez : elle permet de mettre des régions en **liste blanche**.

### Je voudrais que mon item demande une confirmation avant d'être utilisé

* Utilisez simplement la condition EI personnalisée dans l'activateur et activez « ifNeedPlayerConfirmation ».

### Armure qui enflamme l'ennemi qui vous frappe

* Créez un activateur **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** et, dans **targetCommands**, utilisez la commande BURN \<seconds>
* Pour faire la même chose avec des entités, procédez de la même façon mais avec **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
N'oubliez pas de définir les **detailedSlots** corrects.
:::

### Item qui ne fonctionne que sur son propre claim

* Dans l'activateur de votre choix, ajoutez la **playerCondition ifPlayerMustBeOnHisClaim**

### Item qui ne fonctionne que sur son propre claim et pas dans les zones non claim

* Créez une condition de placeholder dans l'activateur de votre choix avec ce format :
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1 : %griefprevention\_currentclaim\_ownername%
  * part2 : Unclaimed

### Comment créer un item qui attire les autres joueurs vers vous ?

* Dans l'activateur de votre choix, dans les commandes, utilisez la commande AROUND combinée à CUSTOMDASH1 avec les placeholders de position du joueur. Ainsi, lorsque vous faites un clic droit, la commande CUSTOMDASH1 projette les personnes AUTOUR de vous (AROUND) vers VOS COORDONNÉES, ce qui revient à attirer les gens.

### Comment créer un treecapitator ?

* Activateur **PLAYER\_BREAK\_BLOCK** et, dans **blockCommands**, utilisez la commande **VEINBREAKER**

### Je voudrais désactiver l'équipement de la tête du joueur

* Créez un activateur **PLAYER\_EQUIP\_THE\_EI** et activez **cancelEvent**

### Désactiver la name tag au clic

* Créez un activateur PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right et activez cancel event

### Je voudrais créer une armure qui vous donne plus de...

* Si vous voulez ajouter des **cœurs**, de la **vitesse**, de la **résistance au recul**, de l'**armure**, etc. sur votre armure, votre épée, votre pioche ou ce que vous voulez, vous devez travailler avec les **attributes**.

### Comment exécuter une commande lorsque vous cliquez sur un joueur

* Utilisez simplement l'activateur PLAYER\_CLICK\_ON\_PLAYER et ajoutez ce que vous voulez dans les commandes.

:::info
Même principe si vous voulez exécuter la commande lorsque vous FRAPPEZ, mais avec l'activateur PLAYER\_HIT\_PLAYER.
:::

### Item qui désactive le recul

* La meilleure méthode consiste à utiliser les attributes et KNOCKBACK RESISTANCE. Mais si vous voulez que cela fonctionne n'importe où dans votre inventaire, créez un activateur PLAYER\_RECEIVE\_HIT\_GLOBAL et téléportez le joueur sur lui-même, par exemple avec :
  * execute at %player% run tp %player% \~ \~ \~

### Je voudrais un item qui donne de la lenteur à toutes les personnes autour de moi

* Utilisez la commande AROUND et donnez l'effet avec les placeholders de around. Consultez la commande AROUND dans le wiki pour plus d'informations.

### Désactiver l'application de teinture de couleur sur les panneaux et les colliers de loup

* Pour le PANNEAU :
  * Activateur : PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks : \<Here add the signs you want to block>
  * Et activez cancel event
* Pour les colliers de loup :
  * Activateur : PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick : RIGHT
  * detailedEntities : WOLF
  * Et activez cancel event

### Créer un loup qui reste « x » secondes puis disparaît

Si vous voulez créer, par exemple, un loup de compagnie qui reste « x » secondes, ajoutez ceci :

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armure qui désactive les dégâts de lave et de feu

* Créez un activateur PLAYER\_RECEIVE\_HIT\_GLOBAL et, dans detailedDamage, ajoutez LAVA, FIRE\_TICK et FIRE, puis activez cancelEvent dans cet activateur.
*   Assurez-vous de sélectionner le bon detailedSlot de la pièce d'armure que vous utilisez.

    Si vous voulez désactiver l'animation de feu, le plus proche que vous puissiez obtenir est de créer un activateur de type loop avec la commande REMOVEBURN.

### Armure qui permet de respirer sous l'eau

* Créez un activateur LOOP, sélectionnez le bon detailedSlot et donnez au joueur l'effet water\_breathing.

### Empêcher une armure en cuir teintée d'être lavée dans un chaudron

* Créez simplement un activateur RIGHT\_CLICK, puis typeTarget : ONLY\_BLOCK\_CLICK, detailedBlocks : CAULDRON, et activez cancel event.

### Item qui ouvre une GUI

* Les plugins de GUI ont normalement un emplacement pour indiquer un joueur. Par exemple, la commande serait /opengui \<player>, donc dans votre item vous devez ajouter /opengui %player%
  * si la commande est différente, changez simplement cela, par exemple /enchanttable %player%
* Si votre plugin n'a pas cela, au lieu d'ajouter un emplacement pour le joueur, utilisez SUDOOP, par exemple :
  * SUDOOP opengui
  * SUDOOP enchanttable

### Empêcher le lancer du trident

* Ajoutez un activateur PLAYER\_LAUNCH\_PROJECTILE et mettez cancelEvent sur true

### Je voudrais désactiver les dégâts de chute pour mon armure

* Utilisez l'activateur PLAYER\_RECEIVE\_HIT\_GLOBAL et indiquez FALL dans detailedDamage, puis activez cancel event

### Désactiver la récupération d'eau avec une bouteille

* PLAYER\_RIGHT\_CLICK et activez cancel event

### Vérifier si un joueur pêche un joueur

* Utilisez les activateurs PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, un activateur LOOP et une variable. (Ainsi que quelques activateurs pour éviter les bugs.)
  * Dès que la CANNE touche le joueur, PROJECTILE\_HIT\_PLAYER s'exécute : définissez donc votre variable sur « %target% ».
  * L'activateur loop ne fonctionnera que si la variable est différente de « NO », et vous pouvez utiliser la variable pour cibler le joueur pêché.
  * Et si le joueur PÊCHE la cible (FISH), définissez la variable sur « NO » : elle est alors réinitialisée et l'activateur cesse de fonctionner.
  * Les activateurs pour éviter les bugs sont PLAYER\_DROP\_THE\_EI et PLAYER\_DESELECT\_THE\_EI : réinitialisez la variable dans ces activateurs OU annulez l'événement.

### Faire tomber la foudre sur le curseur

* Créez d'abord un activateur PLAYER\_ALL\_CLICK ou PLAYER\_RIGHT\_CLICK ou PLAYER\_LEFT\_CLICK
* Puis, dans les commandes, utilisez la commande personnalisée [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Par défaut, elle ne fait pas de dégâts : vous pouvez donc ajouter en plus la commande personnalisée `DAMAGE <number>`

### Comment augmenter la vie maximale de « x » à chaque déclenchement de l'activateur

* Pour augmenter votre vie maximale, vous avez besoin de PlaceholderAPI et de l'expansion Player, et la commande à utiliser est :
  * execute run attribute %player% minecraft\:generic.max\_health base set %player\_max\_health%+2

### Comment regagner de la vie à chaque coup

* Dans un activateur lié aux coups, comme PLAYER\_HIT\_PLAYER et PLAYER\_HIT\_ENTITY, utilisez la commande REGAIN\_HEALTH dans playerCommands. Consultez cette commande dans la section Commandes pour plus d'informations.
* Si vous voulez regagner autant que les dégâts infligés, utilisez le placeholder EI **%last\_damage**_**\_**_**dealt%**

### Arc qui explose lorsque le projectile touche le bloc

* Créez un activateur PROJECTILE\_HIT\_BLOCK sur votre item, et dans les commandes vous pouvez utiliser :
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * Après cette ligne, vous aurez besoin de execute run kill %projectile\_uuid%
  * ou la même chose qu'avant, mais en invoquant un creeper

### Je voudrais désactiver la charge de l'arc ou de l'arbalète

* Ce n'est pas encore possible avec ExecutableItems : la seule chose que EI peut faire est d'empêcher l'arc ou l'arbalète de tirer le projectile, mais l'empêcher de se charger ? Non.

### Comment créer une armure qui désactive le gel du joueur (1.18)

* Vous pouvez exécuter la commande FREEZE en loop, comme ceci :

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Je veux que l'activateur ne fonctionne que si le joueur a une certaine valeur dans un scoreboard

Utilisez simplement l'expansion Scoreboard de PlaceholderAPI, puis utilisez ses placeholders dans la section placeholderCondition de votre activateur ^^
