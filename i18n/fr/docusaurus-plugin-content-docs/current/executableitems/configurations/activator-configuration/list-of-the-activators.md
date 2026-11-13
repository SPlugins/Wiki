---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Liste complète des activateurs d'ExecutableItems avec leur description, leurs
  fonctionnalités spécifiques et des exemples d'utilisation pour vos items.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T17:13:08.652Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Liste des activateurs

## Activateurs d'ExecutableItems

Voici la liste des activateurs disponibles avec leur description et quelques exemples. Les activateurs vous permettent d'exécuter des actions personnalisées : ils peuvent avoir des conditions, exécuter des commandes, avoir un cooldown, etc.

:::warning
Un activateur dont `option:` ne figure pas dans cette liste (faute de frappe, activateur d'un autre plugin…) est **désactivé** : il ne s'exécute jamais, et la console affiche une erreur avec les noms d'options les plus proches lors du chargement de l'item.
:::

Les activateurs Premium sont repérés par le tag : <CustomTag type="premium" />

Les activatorFeatures sont des fonctionnalités exclusives à cet activateur.

### PLAYER\_ALL\_CLICK

* Info : Activateur déclenché lorsque le joueur fait un clic gauche ou un clic droit avec l'item. 
  * Vous ne pouvez pas différencier les clics, pour cela utilisez des activateurs distincts comme PLAYER\_RIGHT\_CLICK ou PLAYER\_LEFT\_CLICK.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget : ONLY\_BLOCK, ces fonctionnalités seront disponibles.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemples : 
  * Warping Stone – Téléporte instantanément le joueur de 5 blocs dans la direction vers laquelle il regarde. Cooldown : 10 secondes.
  * Healing Totem – Au clic, soigne le joueur de 4 cœurs et lui accorde Régénération I pendant 5 secondes.
  * Thunder Rod – Frappe d'un éclair l'ennemi le plus proche dans un rayon de 10 blocs.
  * Gravity Boots – Propulse le joueur à 3 blocs dans les airs et annule les dégâts de chute pendant 5 secondes.
  * Explosive Rune – Crée une petite explosion à la position du joueur qui repousse les mobs proches mais n'endommage pas le terrain.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur fait un clic droit sur un lit et y entre. Si le joueur n'y entre pas, cet activateur ne se déclenche pas. Il ne se déclenche pas quand le joueur dort, uniquement par l'action d'entrer dans le lit.
* Exemples :
  * Void Sleep – En entrant dans le lit, le joueur est téléporté vers une dimension de rêve construite sur mesure pour l'explorer.
  * Lunar Shield – Accorde Absorption IV pendant 5 minutes lorsque le joueur dort dans le lit, ce qui fournit des points de vie bonus temporaires.
  * Nightmare Curse – Fait apparaître un phantom hostile au-dessus du lit lorsque le joueur y entre, l'obligeant à le combattre avant de dormir paisiblement.
  * Dreamwalker’s Blessing – En entrant dans le lit, le joueur gagne Régénération II jusqu'à son réveil (l'action de se réveiller correspondrait à l'activateur PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur quitte le lit. Attention ! Cet activateur se déclenche quand le joueur dort et qu'il fait jour, donc qu'il quitte le lit, mais aussi quand le joueur quitte le lit au milieu de son sommeil : il s'agit simplement de l'action de quitter le lit.
  * Si vous souhaitez qu'il ne s'active que lorsque le joueur a dormi, vous pouvez utiliser cet activateur + worldCondition -> ifWorldTime pour vérifier qu'il fait bien jour.
* Exemples :
  * Morning Boost – En quittant le lit, le joueur gagne Vitesse II et Célérité II pendant 60 secondes pour commencer la journée en pleine forme.
  * Phantom's Warning – Si le joueur quitte le lit avant d'avoir complètement dormi, un phantom apparaît à proximité en guise de conséquence.
  * Dream Collector – Au réveil, le joueur reçoit un livre enchanté aléatoire en tant que « souvenir de rêve ».
  * Energy Surge – En quittant le lit, la barre de faim du joueur est entièrement restaurée, simulant une nuit réparatrice.

### PLAYER\_BEFORE\_DEATH

* Info : Activateur déclenché lorsque le joueur meurt. La différence avec l'activateur PLAYER\_DEATH est que celui-ci se déclenche en premier, ce qui permet de sauver le joueur avant sa mort.
  * Pour mieux comprendre : les totems d'immortalité vanilla sont déclenchés par cet activateur pour appliquer leurs effets.
* Exemples :
  * Soulbound Amulet – Lorsque le joueur est sur le point de mourir, il est à la place téléporté à son point d'apparition avec 2 cœurs et Régénération II temporaire.
  * Last Stand Shield – Près de la mort, le joueur gagne Résistance III et Absorption pendant 5 secondes, ce qui lui donne une chance de riposter.
  * Phoenix Blessing – Quand la mort est imminente, le joueur explose en flammes, infligeant des dégâts de feu aux ennemis, et revient à la vie avec la moitié de sa vie.
  * Undead Pact – Si le joueur devait mourir, il est ressuscité avec 3 cœurs, mais ne pourra pas utiliser d'armes pendant 10 secondes.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur casse un bloc.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemples :
  * Ore Booster Pickaxe – Lorsqu'on casse un minerai, 20 % de chances de doubler le drop.
  * Nature’s Wrath Axe – Casser une bûche a 10 % de chances d'invoquer un esprit d'arbre hostile (mob personnalisé).
  * Cursed Excavation – Lorsqu'on casse de la pierre, 5 % de chances de faire apparaître des poissons d'argent ou d'appliquer Fatigue de minage pendant 5 secondes.
  * Explosive Demolition Hammer – Lorsqu'on casse des blocs, les blocs alentour sont cassés eux aussi, ce qui permet de casser en 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur bloque avec le bouclier un coup provenant d'une entité.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemples :
  * Thorned Shield – Lorsqu'il bloque une attaque, l'attaquant subit 3 cœurs de dégâts.
  * Shockwave Defense – Bloquer une attaque avec succès repousse tous les ennemis proches dans un rayon de 5 blocs.
  * Energy Absorption – Lorsqu'il bloque une attaque, le joueur régénère 1 cœur et gagne Résistance I pendant 3 secondes.
  * Frozen Guard – Si une attaque est bloquée, l'attaquant est figé sur place (Lenteur IV) pendant 2 secondes.
  * Blazing Counter – Bloquer une attaque enflamme l'attaquant pendant 4 secondes.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur bloque avec le bouclier un coup provenant d'un joueur.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemples :
  * Retribution Shield – Lorsqu'il bloque une attaque d'un joueur, l'attaquant est instantanément désarmé et laisse tomber son arme au sol.
  * Vampiric Guard – Lorsqu'il bloque une attaque avec succès, le joueur absorbe une partie de la vie de l'attaquant (soigne 2 cœurs).
  * Dimensional Rift – Si l'attaque d'un joueur est bloquée, il a 20 % de chances d'être téléporté à 10 blocs dans une direction aléatoire.
  * Adrenaline Block – Lorsqu'il bloque une attaque, le joueur gagne instantanément Vitesse II et Force I pendant 5 secondes, ce qui permet une contre-attaque rapide.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur place un bloc.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemples :
  * Living Roots – Lorsqu'on place une pousse, 10 % de chances qu'elle devienne instantanément un arbre.
  * Runic Inscription – Placer un bloc de pierre a 5 % de chances de le transformer en Runed Stone, émettant des particules et accordant Célérité I pendant 10 secondes aux joueurs proches.
  * Lors du placement de TNT, il y a une petite chance (5%) qu'il s'enflamme immédiatement, créant une explosion inattendue.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur brise le bouclier d'un autre joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemples :
  * Shatter Strike – Lorsqu'il brise le bouclier d'un joueur, l'attaquant gagne Force I pendant 5 secondes, renforçant sa prochaine attaque.
  * Lorsqu'un bouclier est détruit, une petite explosion se produit à la position de la cible, la repoussant de 5 blocs.
  * Lorsqu'un bouclier est brisé, la cible reçoit **Flétrissement I** pendant **5 secondes**, ce qui draine lentement sa vie.
  * Dimensional Fracture – Lorsqu'il brise le bouclier d'un joueur, la cible est momentanément téléportée 5 blocs plus haut, désorientée, avant de retomber.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur époussette un bloc avec un pinceau.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemples :
  * Cursed Dust – Si le joueur époussette un bloc suspect, il a 10 % de chances d'être temporairement aveuglé par un nuage de poussière maudite qui jaillit autour de lui.
  * Buried Riches – Époussetter un bloc a une petite chance de récompenser le joueur avec une pépite d'or ou une émeraude, simulant la découverte d'un trésor perdu.
  * Temporal Echoes – En époussetant un bloc d'artefact, le joueur entend de faibles murmures du passé, laissant entrevoir des secrets liés au lore cachés à proximité.

### PLAYER\_BUCKET\_ENTITY

* Info : Activateur déclenché lorsque le joueur, à l'aide d'un seau, capture une entité dans le seau.
  * Par exemple, c'est ce qui se passe quand on stocke un poisson dans un seau d'eau.
  * Si vous voulez exécuter quelque chose lorsque le joueur « tente » de capturer une entité qui ne peut pas l'être, cet activateur ne s'exécutera pas, vous devez utiliser PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemples :
  * Instant Fillet – Au lieu de capturer un poisson dans un seau, le joueur reçoit instantanément du poisson cru dans son inventaire, comme s'il l'avait habilement découpé sur place.
  * Essence Extraction – En utilisant un seau sur un axolotl, au lieu de le capturer, le joueur reçoit une potion « Axolotl Mucus », qui accorde Régénération I pendant 10 secondes.

### PLAYER\_CHANGE\_WORLD

* Info : Activateur déclenché lorsque le joueur change de monde.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
* Exemples :
  * Dimensional Adaptation – Lorsque le joueur entre dans un nouveau monde, il reçoit un buff temporaire aléatoire (Vitesse, Force ou Vision nocturne pendant 30 secondes) à mesure que son corps s'adapte au nouvel environnement.
  * Weight of Realms – Si un joueur entre dans le Nether ou l'End, il gagne temporairement Lenteur II pendant 10 secondes, simulant le changement soudain de gravité.
  * Forgotten Memories – Lors d'un changement de monde, il y a une petite chance (5%) que le joueur perde un item aléatoire de son inventaire, simulant un « souvenir » oublié.
  * Realmwalker’s Favor – Entrer dans un nouveau monde accorde un item de butin mystérieux, adapté à la dimension (par ex. le Nether donne un lingot d'or aléatoire, l'End donne une perle de l'Ender, etc.), comme offert par une force inconnue.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur clique sur une entité ou sur des PNJ Citizens.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemples :
  * Beast Tamer’s Bond – Cliquer sur un loup, un chat ou un cheval en tenant un item spécial (par ex. une pomme dorée) lui accorde temporairement Vitesse II et Régénération pendant 60 secondes.
  * Hidden Pocket – Cliquer sur un piglin zombifié avec des lingots d'or a 5 % de chances de faire recevoir instantanément un item de butin aléatoire du Nether au lieu de devoir troquer.
  * Gourmet’s Choice – Cliquer sur une vache, un cochon ou un poulet en tenant un couteau (item personnalisé) fournit instantanément un drop de viande de meilleure qualité (par ex. du steak cuit au lieu du bœuf cru).
  * Battle Focus – Cliquer sur un golem de fer en tenant un bouclier lui accorde temporairement Résistance II et Résistance au recul pendant 30 secondes, lui permettant d'encaisser davantage de dégâts.
  * Final Tribute – Cliquer sur un squelette ou un squelette wither en tenant des blocs d'os accorde au joueur un bref boost de Vitesse II, comme s'il absorbait l'énergie d'un ancien guerrier.

### PLAYER\_CLICK\_ON\_PLAYER

* Info : Activateur déclenché lorsque le joueur clique sur un joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemples :
  * Shared Fortune – Cliquer sur un joueur en tenant un bloc d'émeraude divise vos niveaux d'XP par deux, et l'autre joueur reçoit instantanément l'XP perdue.
  * Cliquer sur un coéquipier en tenant une potion de soin lui transfère instantanément la moitié de votre vie, ce qui en fait une planche de salut stratégique de dernière seconde.
  * Tactical Mark – Cliquer sur un autre joueur en étant accroupi lui applique un effet de lueur pendant 10 secondes, le rendant visible de ses coéquipiers lors d'un combat PvP.
  * Oath of Protection – Cliquer sur un joueur en tenant un bouclier lui accorde Résistance I pendant 30 secondes, agissant comme un effet de gardien temporaire.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur se connecte au serveur.
* Exemples :
  * Realm’s Welcome – À la connexion, le joueur reçoit un boost temporaire de Vitesse I et Célérité I pendant 30 secondes, simulant une poussée d'énergie en entrant dans le monde.
  * Echo of the Past – Le premier message que le joueur voit dans le chat est un message de « souvenir » personnalisé.
  * Daily Fortune – À la connexion, le joueur reçoit un buff ou debuff mineur aléatoire pendant 10 minutes (par ex. Chance I, Vitesse I ou Lenteur I), ce qui rend chaque session légèrement différente.
  * Dimensional Echo – Si le joueur se connecte depuis un autre monde (Nether ou End), il voit brièvement un effet de particules tourbillonnantes et entend des sons d'ambiance déformés pendant quelques secondes avant de se stabiliser complètement.

### PLAYER\_CONSUME

* Info : Activateur déclenché lorsque le joueur mange / consomme avec succès un item.\
  Attention, cela ne fonctionne que pour les items Minecraft comestibles ou ceux transformés en items comestibles grâce aux [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info : Activateur déclenché lorsque le joueur mange / consomme avec succès l'ExecutableItem lui-même. \
  Attention, cela ne fonctionne que pour les ExecutableItems comestibles ou ceux transformés en items comestibles grâce aux [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info : Activateur déclenché lorsque le joueur lance un projectile avec une commande SCore telle que :
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (Dans cet activateur, l'entité est le projectile)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Pour mettre certains projectiles en liste blanche / liste noire)

### PLAYER\_DEATH

* Info : Activateur déclenché lorsque le joueur meurt.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur désélectionne l'ExecutableItem.
  * Cela se produit lorsque l'ExecutableItem est dans la main principale, puis que vous changez l'item que vous tenez : vous le « désélectionnez ». 

### PLAYER\_DISABLE\_FLY

* Info : Activateur déclenché lorsque le joueur arrête de voler. 
  * L'action de voler signifie littéralement voler, cela ne concerne ni le plané ni le fait d'être en l'air à cause d'une chute.

### PLAYER\_DISABLE\_GLIDE

* Info : Activateur déclenché lorsque le joueur arrête de planer. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur arrête de s'accroupir. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur arrête de sprinter 

### PLAYER\_DISABLE\_SWIM

* Info : Activateur déclenché lorsque le joueur arrête de nager (nage de la 1.13)
* 
### PLAYER\_DISCONNECT

* Info : Activateur déclenché lorsque le joueur se déconnecte du serveur.

### PLAYER\_DISMOUNT

* Info : Activateur déclenché lorsque le joueur descend d'une entité qu'il chevauchait. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info : Activateur déclenché lorsque le joueur jette un item. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur jette l'ExecutableItem. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur a modifié le livre et la plume, puis a appuyé sur Terminer ou a signé le livre. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur casse l'ExecutableItem à cause de la casse de durabilité vanilla.

### PLAYER\_EMPTY\_BUCKET

* Info : Activateur déclenché lorsque le joueur vide un seau ExecutableItem. Il se déclenche aussi, par exemple, lorsque vous remplissez d'eau un bloc waterloggable ou que vous remplissez un chaudron avec ce liquide.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Lorsque cet activateur est activé, le bloc cible est l'emplacement où l'eau est censée être placée. Avec cette information, vous pouvez utiliser SETBLOCK pour remplacer l'eau par autre chose si vous le souhaitez.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur **commence** à voler. Cet activateur se déclenche par l'action de « double appui sur la barre d'espace en ayant la permission de voler ».
  * Cela signifie qu'il ne se déclenche pas si vous volez déjà, il est déclenché par l'action de changer l'état de vol par « double appui sur la barre d'espace ».
* Exemples :
  * Lightning Takeoff – Lorsque le vol est activé, un petit éclair sans dégâts frappe la position du joueur pour un effet dramatique.
  * Aerial Boost – Au début du vol, le joueur reçoit un effet temporaire de Vitesse III pendant 5 secondes pour simuler un puissant décollage.
  * Gale Force Wings – Lorsqu'il commence à voler, un fort effet de vent pousse toutes les entités autour du joueur.

### PLAYER\_ENABLE\_GLIDE

* Info : Activateur déclenché lorsque le joueur commence à planer. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur commence à s'accroupir. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur commence à sprinter.

### PLAYER\_ENABLE\_SWIM

* Info : Activateur déclenché lorsque le joueur commence à nager (nage de la 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info : Activateur déclenché si vous entrez dans votre land ou dans une land où vous avez la confiance 
  * Plugins pris en charge :
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info : Activateur déclenché si vous entrez dans une parcelle.
  * Plugins pris en charge :
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché si vous portez / placez la pièce d'armure dans l'emplacement d'armure.
  * `detailedSlots` permet de le restreindre à un emplacement d'armure : 36 bottes, 37 jambières, 38 plastron, 39 casque (l'emplacement dans lequel va la pièce), en plus de -1 pour la main d'où elle provient.
  * <CustomTag type="version" version="1.21.3" /> Un item avec des [fonctionnalités equippable](/executableitems/configurations/item-configuration/item-features#equippable-features-) va dans le `slot` de ces fonctionnalités, même s'il ne s'agit pas de l'emplacement de son matériau : une citrouille sculptée équipable sur les jambes compte comme des jambières (37). Avec un clic droit, il n'est équipé que si son `swappable` vaut true.
  * Attention ! Le plugin CMI peut empêcher cet activateur de fonctionner à cause de la permission cmi.inventoryhat à true. Si vous voulez que cet activateur fonctionne, mettez cette permission à false. 
  * Les addons Fabric peuvent contourner cet activateur.

### PLAYER\_EXPERIENCE\_CHANGE

* Info : Activateur déclenché lorsque l'expérience du joueur change naturellement. 
  * Cela signifie que cet activateur n'est pas déclenché par les changements d'expérience dus à des commandes, sauf si ces commandes font apparaître un orbe d'expérience, ce qui ferait changer l'expérience « naturellement ».

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info : Activateur déclenché si le joueur fertilise un bloc avec de la poudre d'os. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info : Activateur déclenché lorsque le joueur remplit le seau d'eau ou de lave. 
  * Attention ! Quand un ExecutableItem remplit un seau et qu'il devient « water\_bucket » ou « lava\_bucket », ce n'est plus un ExecutableItem, il devient un item vanilla et cela ne peut pas être annulé.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur fait un clic droit avec la canne à pêche alors que le flotteur de la canne est sur un bloc. 
  * Il ne se déclenche pas lorsque le flotteur n'est pas sur un bloc. Si vous voulez le déclencher dans les airs, utilisez l'activateur [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* S'active lorsque le joueur fait un clic droit avec la canne à pêche alors que le flotteur de la canne accroche une entité ou un PNJ Citizens.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur fait un clic droit avec la canne à pêche alors que le flotteur de la canne attrape un item dans l'eau grâce au système de butin de pêche. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
L'entité ciblée par `entityCommands` est l'**item pêché**. Utilisez la commande d'entité [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) pour transformer la prise en item vanilla ou en ExecutableItem, voir le guide [Loot de pêche personnalisé](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur ne pêche rien, c'est-à-dire que le flotteur n'était ni sur un bloc, ni sur une entité, ni sur un joueur.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur fait un clic droit avec la canne à pêche alors que le flotteur de la canne accroche un autre joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur attrape quelque chose avec succès grâce au plugin CustomFishing (anciennement connu sous le nom de Xiaomomi Fish). Cet activateur nécessite que le [plugin CustomFishing](https://modrinth.com/plugin/customfishing) soit installé sur votre serveur.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholders disponibles :
  * `%result%` - Le résultat de la pêche (par ex. SUCCESS, FAILURE, etc.)
  * `%fish_hook%` - Le nom de l'hameçon utilisé
  * `%loot%` - L'ID du butin attrapé
* Exemples :
  * Custom Fishing Rewards – Lorsqu'un poisson rare est attrapé avec CustomFishing, accordez au joueur de l'expérience bonus ou une récompense en monnaie spéciale.
  * Lucky Catch – Lorsqu'on pêche avec succès avec une canne spécifique, il y a une chance de recevoir des items de butin personnalisés supplémentaires issus du plugin CustomFishing.
  * Fishing Skill Progression – Suivez les prises réussies et augmentez les niveaux de compétence de pêche des joueurs en fonction de la rareté des poissons attrapés.

:::info
Cet activateur ne fonctionne que si le plugin **CustomFishing** est installé. Il s'intègre au FishingResultEvent de CustomFishing pour fournir des mécaniques de pêche améliorées.
:::

### PLAYER\_HARVEST\_BLOCK

* Info : Activateur déclenché lorsque le joueur récolte un bloc
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemples :
  * Lorsqu'on fait un clic droit sur un buisson de baies sucrées pour le récolter, il y a 10 % de chances que le buisson mordre en retour, infligeant un demi-cœur de dégâts mais donnant au joueur Force I pendant 5 secondes comme effet de « goût du sang ».
  * Bountiful Touch – Lorsqu'on récolte des cultures, 15 % de chances de les replanter instantanément à pleine croissance, ce qui permet une culture continue.
  * Mystic Bloom – Lorsqu'on récolte une fleur, 5 % de chances qu'elle drop un item enchanté aléatoire imprégné de l'énergie de la nature.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur frappe une entité.
  * Cet activateur ne fonctionne que lorsqu'il y a des dégâts, c'est-à-dire que le joueur a réellement frappé l'entité. Si vous souhaitez qu'il fonctionne au clic sur l'entité, utilisez [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info : Activateur déclenché lorsque le joueur frappe un autre joueur (généralement appelé cible).
  * Cet activateur ne fonctionne que lorsqu'il y a des dégâts, c'est-à-dire que le joueur a réellement frappé l'autre joueur. Si vous souhaitez qu'il fonctionne au clic sur le joueur, utilisez [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info : Activateur déclenché lorsque le joueur appuie sur une touche. (avancer, reculer, gauche, droite, saut, sprint, accroupissement)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur casse l'ExecutableItem en lui faisant perdre toute sa durabilité. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur saute.
  * <CustomTag type="version" version="1.21.2" /> Il peut se déclencher même si le joueur a tenté de sauter en plein air.

### PLAYER\_KICK

* Info : Activateur déclenché lorsque le joueur est expulsé 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur tue une entité ou un PNJ Citizens. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur tue un joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info : Activateur déclenché lorsque le joueur tire un projectile. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info : Activateur déclenché si vous quittez votre land ou une land où vous avez la confiance 
  * Plugins pris en charge :
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info : Activateur déclenché si vous quittez une parcelle.
  * Plugins pris en charge :
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info : Activateur déclenché lorsque le joueur fait un clic gauche avec l'item. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget : ONLY\_BLOCK, ces fonctionnalités seront disponibles.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : pour écrire des [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info : Activateur déclenché lorsque le joueur répare l'ExecutableItem grâce à l'enchantement raccommodage. 

### PLAYER\_OPEN\_INVENTORY

* Info : Activateur déclenché lorsque le joueur ouvre des inventaires, mais **PAS son propre inventaire**. 

:::info
Il n'est actuellement pas possible de détecter quand le joueur ouvre **son propre** inventaire, car cela se passe uniquement côté client. 

L'événement n'est déclenché que lorsque quelqu'un force le joueur à ouvrir son inventaire ou lorsque le joueur ouvre des inventaires personnalisés, de blocs ou de marchands.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur ramasse l'ExecutableItem. 

### PLAYER\_PORTAL

* Info : Activateur déclenché lorsque le joueur utilise un portail.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur reçoit un effet de potion. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur est frappé par une entité. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur est frappé par un autre joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur est frappé. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info : Activateur déclenché lorsque le joueur regagne de la vie naturellement.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur réapparaît.
  * Comme d'habitude, tous les activateurs d'ExecutableItem fonctionnent lorsque le joueur a l'item dans son inventaire : si le joueur réapparaît sans l'item dans son inventaire, cet activateur ne se déclenchera pas.

### PLAYER\_RIGHT\_CLICK

* Info : Activateur déclenché lorsque le joueur fait un clic droit avec l'item. 
  * En raison de limitations de Spigot, cet activateur ne se déclenche que si vous avez un item (n'importe lequel) en main.
* Fonctionnalités propres à cet activateur :
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : pour préciser le type de clic (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Si typeTarget : ONLY\_BLOCK, ces fonctionnalités seront disponibles :
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : pour écrire des [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : pour préciser quels types de blocs sont valides

### PLAYER\_RIPTIDE

* Info : Activateur déclenché lorsque le joueur utilise le impulsion (riptide).

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur sélectionne l'ExecutableItem dans la barre d'accès rapide, c'est-à-dire qu'il commence à le tenir dans la main principale. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur tond une entité. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le bouclier du joueur est brisé par un autre joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info : Activateur déclenché lorsque le point d'apparition du joueur est modifié. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info : Activateur déclenché lorsque le joueur échange l'ExecutableItem entre ses mains (swaphand). Cela correspond au raccourci qui échange la main principale et la seconde main, et inversement. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsqu'une entité cible le joueur. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info : Activateur déclenché lorsque le joueur piétine une culture. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur retire l'ExecutableItem. 
  * `detailedSlots` permet de le restreindre à un emplacement d'armure : 36 bottes, 37 jambières, 38 plastron, 39 casque (l'emplacement d'où provient la pièce).
  * Attention ! Le plugin CMI peut empêcher cet activateur de fonctionner à cause de la permission cmi.inventoryhat à true. Si vous voulez que cet activateur fonctionne, mettez cette permission à false.
  * Les addons Fabric peuvent contourner cet activateur.

### PLAYER\_WALK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur marche. 
  * Cet activateur se déclenche à chaque tick où le joueur marche, il est donc très coûteux en performances, utilisez-le avec prudence. Vous pouvez ajouter la fonctionnalité de cooldown d'utilisation pour réduire l'impact.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur saisit / entre une commande. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info : Activateur déclenché lorsqu'un projectile lancé par le joueur entre dans l'eau.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info : Activateur déclenché lorsqu'un projectile lancé par un joueur touche un bloc. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info : Activateur déclenché lorsqu'un projectile lancé par un joueur touche une entité. \
  Attention, il n'est pas déclenché lorsque le projectile touche un joueur (pour cela, utilisez PROJECTILE\_HIT\_PLAYER).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info : Activateur déclenché lorsqu'un projectile lancé par un joueur touche un autre joueur (généralement appelé cible).
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info : Activateur qui peut être exécuté via une commande, ou être planifié. 
  * Cet activateur concerne tous les plugins, c'est pourquoi il est expliqué sur la page [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info : Activateur déclenché lorsque l'ExecutableItem est placé sur un autre item dans l'inventaire.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info : Activateur déclenché lorsqu'un item est placé sur l'ExecutableItem dans l'inventaire.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque l'ExecutableItem entre dans l'inventaire du joueur.
  * Si vous utilisez un autre plugin qui gère le give d'items et qu'un ExecutableItem est donné sans que cet activateur s'exécute, rendez-vous sur leur support et demandez-leur d'appeler cette méthode.
  * Les déplacements à l'intérieur de l'inventaire comptent aussi : échange avec la seconde main (touche F), échange avec les touches numériques et, sur les serveurs Paper, pick block / pick item (clic molette). Pour ces déplacements, EI\_LEAVE\_THE\_PLAYER\_INVENTORY s'exécute toujours avant cet activateur.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info : Activateur déclenché lorsque l'item quitte l'inventaire du joueur.
  * Nécessite ProtocolLib pour que cet activateur fonctionne correctement. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info : Activateur déclenché lorsque le joueur clique sur l'item dans son inventaire. 
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info : Activateur déclenché en boucle tant que l'item se trouve dans l'inventaire du joueur. C'est en gros un cycle : il exécute les commandes toutes les \<delay> \<seconds/ticks> selon la configuration de cet activateur.
* Lorsqu'une condition d'un LOOP n'est pas valide, le message d'erreur par défaut (`You can't activate this item > invalid condition`) n'est pas envoyé : le joueur n'a rien activé. Un message personnalisé (`{theCondition}Msg`) est tout de même envoyé.
* Pour un bonus tant que plusieurs pièces sont portées, utilisez plutôt les [sets](/executableitems/configurations/sets-configuration) à la place d'un LOOP.
* activatorFeatures : normalement tous les activateurs partagent les mêmes fonctionnalités, mais certaines sont exclusives à certains activateurs ; le cas échéant, elles sont listées ici.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
