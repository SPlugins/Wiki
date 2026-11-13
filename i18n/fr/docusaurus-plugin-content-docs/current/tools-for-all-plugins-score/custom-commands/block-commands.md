---
description: >-
  Référence des commandes de bloc d'ExecutableItems et ExecutableBlocks :
  AROUND, MINEINCUBE, VEIN_BREAKER, FARMINCUBE, SETBLOCK et bien d'autres.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T17:16:32.123Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Commandes de bloc

:::tip
Compatibilité « multi-world » pour les commandes vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemple : vous voulez invoquer un Zombie dans le monde SsomarWorld :

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemple avec un placeholder :

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Activez **HIDE USAGE** lorsque vous utilisez un grand nombre dans **MINEINCUBE**, car cela peut réduire le lag qui survient souvent quand vous utilisez `MINEINCUBE 8` par exemple
:::

## Commandes personnalisées

_Classées par ordre alphabétique_

### &lt;+&gt; (Around Command Connector)

* Info : permet d'ajouter plusieurs commandes sur une seule ligne de commande. Ne fonctionne correctement qu'avec `AROUND` et `MOB_AROUND`.
* Exemple : 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info : cible les joueurs dans un rayon donné et leur fait exécuter des commandes
* Paramètres de la commande
    * `{distance}` : la distance du rayon dans lequel la commande sélectionne les joueurs
    * `{affectThePlayerThatActivatesTheActivator}` : true/false. Si true, la commande n'affecte pas le lanceur.
      * Exemple de situation : lorsque vous exécutez l'activateur d'un ExecutableItem et que cet activateur prend en charge les commandes de bloc,
      la personne qui a déclenché l'activateur est ignorée. En revanche, si cette option est à false, elle vous affecte aussi.
    * `{throughBlocks}` : affecte ou non les mobs situés derrière des blocs
    * `{limit}` : le nombre de cibles pouvant être affectées
    * `{sort}` : utile pour l'option limit.
    * NEAREST : sélectionne les entités les plus proches de l'origine.
    * RANDOM : sélectionne au hasard n'importe quelle entité dans le rayon de la commande.
    * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve soit en zone sauvage, soit dans le claim du lanceur (contexte du plugin GriefPrevention) (sera bientôt mis à jour pour être vérifié avec d'autres plugins de claim)
    * `{command}` : la commande que les joueurs ciblés vont exécuter
* Exemple :

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Cela invoque la foudre sur les joueurs dans un rayon de 20 blocs autour du bloc cliqué.

:::info
**Nombre de cibles :** `%around_target_count%` donne le nombre de joueurs sélectionnés par la commande. Il est identique pour chaque cible, et il compte les cibles conservées après `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` et `limit`. Les `CONDITIONS(...)` vérifiées sur chaque cible ne sont pas prises en compte. Il accepte le raccourci `+N` / `-N` : `%around_target_count%-1`.

Exemple : `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Vous pouvez ajouter des conditions à la commande AROUND

* La condition ressemble à AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Les conditions fonctionnent avec des placeholders, mais ils doivent s'écrire %::\_::% au lieu de %\_%
  * Par exemple %::player\_health::%
* Pour ajouter PLUS d'une condition, utilisez « && » entre les conditions
* Exemple :

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Gardez à l'esprit que la partie CONDITIONS() interprète les placeholders qu'elle contient avec le joueur sélectionné par la commande AROUND. Ce qui se passe donc réellement dans les placeholders ci-dessus, c'est que la commande vérifie si la santé de la cible est supérieure à 10 et si le joueur sélectionné par la commande AROUND s'appelle « 2Ssomar »
:::

### APPLY\_BONEMEAL

* Info : applique le même effet que lorsqu'un joueur utilise de la poudre d'os sur un bloc (culture)
* Aucun paramètre de commande
* Exemple :

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info : casse le bloc ciblé
* Aucun paramètre de commande
* Exemple :

```
 - BREAK
```

### CONTENT\_ADD

* Info : ajoute un item dans un conteneur
* Paramètres de la commande
  * \{Item\} : l'item à ajouter
  * \[Amount] : la quantité à ajouter (1 par défaut)
* Exemple :

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info : vide un conteneur
* Aucun paramètre de commande
* Exemple :

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info : retire un item d'un conteneur
* Paramètres de la commande
  * \{Item\} : l'item à retirer
  * \[Amount] : la quantité à retirer (1 par défaut)
* Exemple :

```
- CONTENT_REMOVE STONE 1
```

:::info
Cette commande ne retire pas les ExecutableItems si le matériau correspond. Le seul moyen est de le préciser avec EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info : envoie un message à la console
* Paramètre de la commande
  * `{text}` : le texte à envoyer à la console
* Exemple :

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info : change le type du bloc sélectionné par l'activateur
* Paramètre de la commande
* Exemple :

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Fonctionne avec ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info : accélère la croissance des cultures autour du bloc
* Commande : CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Exemple :

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info : fait dropper un Executable Item à l'emplacement du bloc
* Paramètres de la commande
  * `{id}` : l'ID de l'ExecutableItem
  * `{quantity}` : la quantité d'executable items qui seront droppés
  * `[owner]` : (optionnel) le propriétaire de l'item droppé (pseudo du joueur ou UUID)
  * `[itemdata]` : (optionnel) les paramètres de données de l'item, contenant :
    * `Usage` : définit la valeur d'utilisation
    * `Variables` : définit des variables personnalisées (format : `{key:value}`)
    * `Durability` : définit la valeur de durabilité
* Exemple :

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info : fait dropper un Executable Block à l'emplacement du bloc
* Paramètres de la commande
  * `{id}` : l'ID de l'ExecutableBlock
  * `{quantity}` : la quantité d'executable blocks qui seront droppés
* Exemple :

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info : draine les sources de lave et/ou d'eau dans un cube de rayon « r »
* Paramètres de la commande
  * `{radius}` : le rayon en blocs (9 est la limite), vous pouvez contourner la limite en ajoutant un * devant votre rayon (à vos risques et périls).
  * `{drainType}` : LAVA ou WATER (inutile si vous voulez les deux)
  * `[waterlogged]` : (optionnel) (par défaut = false) si true et que l'eau est drainée (`WATER` ou pas de `{drainType}`), assèche aussi les blocs waterlogged du cube (dalles, escaliers, barrières...) et supprime les blocs `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` et `BUBBLE_COLUMN` sans rien dropper, comme le fait une éponge. Uniquement pour les serveurs 1.13+.
* Exemple :

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Sans `waterlogged:true`, les blocs waterlogged conservent leur eau, qui peut refluer dans la zone drainée.
:::

### DROPITEM

* Info : fait dropper un item à l'emplacement du bloc
* Paramètres de la commande
  * `{material}` : le type d'item.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}` : la quantité d'items qui seront droppés
* Exemple :

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Information : casse le bloc que vous avez ciblé et fait apparaître un TNT amorcé à cet endroit
* Aucun paramètre de commande
* Exemple :

```
- EXPLODE
```

### FARMINCUBE

* Information : casse toutes les cultures dans un rayon donné
* Paramètres de la commande
  * `{radius}` : le rayon de la zone de cultures que vous voulez casser. **(LA LIMITE EST 9)**
  * `{drop}` : (par défaut = true) indique si le bloc dropppe du loot ou non
  * `{onlyMaxAge}` : (par défaut = true) ne casse que les cultures ayant atteint leur âge maximal
  * `{replant}` : (par défaut = false) indique si la culture sera replantée ou non
  * `{event}` : (par défaut = false, true avec `runActivatorOnBlocks:true`) indique si la culture génère ou non le block break event.
  * `[runActivatorOnBlocks]` : (optionnel) (par défaut = false) ExecutableItems uniquement. Si true, les cultures cassées par la commande exécutent aussi l'activateur qui l'a lancée, voir [runActivatorOnBlocks](#runactivatoronblocks). Peut être écrit n'importe où dans la commande, et active `{event}` sauf si `{event}` est écrit à false.
* Exemple :

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info : fertilise les cultures proches d'un cran d'âge, comme avec de la poudre d'os, mais la plante pousse 100 % du temps.
* Paramètre de la commande
  * `{radius}` : le rayon de la zone de cultures que vous voulez fertiliser **(LA LIMITE EST 9)**
* Exemple :

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info : détruit les blocs dans un rayon en forme de rectangle. Chaque bloc cassé par cette commande est compté comme un block break event du joueur.
* Paramètres de la commande
  * `{radius}` : le rayon du cube
  * `{depth}` : la profondeur du rectangle.
  * `{drop}` : indique si le bloc dropppe du loot ou non
  * `{createBBEvent}` : indique si le plugin génère un blockBreakEvent pour chaque bloc cassé par MINEINCUBE (true par défaut)
  * `[direction]` : (optionnel) (par défaut = la direction du joueur) si vous voulez forcer une direction. 
    * Options :
      * `north/n/-z` : nord
      * `south/s/+z` : sud
      * `east/e/+x` : est
      * `west/w/-x` : ouest
      * `up` : haut
      * `down` : bas
      * `auto` : utilise la logique de %player_direction_xz% de l'expansion Player de PlaceholderAPI pour déterminer les directions `N/W/S/E`. Pour la logique haut/bas, direction `UP` si le pitch est `<=` -45 ; direction `DOWN` si le pitch est `>=` 45. 
  * `[smelt]` : (optionnel) (par défaut = false) utilise la logique de la commande SMELT. Si le bloc peut être fondu, il droppe la version fondue à la place. Sinon, il droppe normalement le bloc cassé.
* Exemple :

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Cette commande prend en charge %player\_direction\_xz% de PlaceholderAPI - expansion Player\
Exemple : INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info : fait tirer des projectiles au bloc ciblé
* Paramètres de la commande
  * `{projectile}` : le type de projectile
  * `{speed}` : la vitesse du projectile
  * `{despawnDelay}` : le délai avant despawn, en secondes (10 par défaut)
* Exemple :

```
- LAUNCH ARROW 2 5
```

:::info
Le bloc doit être directionnel pour que LAUNCH lance correctement le projectile.

Exemples : AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info : détruit les blocs dans un rayon en forme de parallélépipède. Chaque bloc cassé par cette commande est compté comme un block break event du joueur.
* Paramètres de la commande
  * `{radius}` : le rayon du cube de blocs que vous voulez casser **(LA LIMITE EST 9)**
  * `{droploot}` : indique si le bloc dropppe du loot ou non
  * `{createEvent}` : indique si le plugin génère un blockBreakEvent pour chaque bloc cassé par MINEINCUBE (true par défaut)
  * `{offsetBreak}` : indique si la zone de blocs commence à casser à partir du bloc cassé, ou à partir du « centre » pour que la zone respecte réellement le « radius » choisi. (false par défaut)
  * `[smelt]` : (optionnel) (par défaut = false) utilise la logique de la commande SMELT. Si le bloc peut être fondu, il droppe la version fondue à la place. Sinon, il droppe normalement le bloc cassé.
  * `[runActivatorOnBlocks]` : (optionnel) (par défaut = false) ExecutableItems uniquement. Si true, les blocs cassés par la commande exécutent aussi l'activateur qui l'a lancée, voir [runActivatorOnBlocks](#runactivatoronblocks). Laissez `{createEvent}` à true.
* Exemple :

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info : détruit les blocs dans un rayon en forme de sphère. Chaque bloc cassé par cette commande est compté comme un block break event du joueur.
* Paramètres de la commande
  * `{radius}` : le rayon de la sphère
  * `{drop}` : indique si le bloc dropppe du loot ou non
  * `{create blockBreakEvent}` : indique si le plugin génère un blockBreakEvent pour chaque bloc cassé par la commande
  * `[smelt]` : (optionnel) (par défaut = false) utilise la logique de la commande SMELT. Si le bloc peut être fondu, il droppe la version fondue à la place. Sinon, il droppe normalement le bloc cassé.
* Exemple :

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info : cible les entités dans un rayon donné et leur fait exécuter des commandes
* Paramètres de la commande
  * `{distance}` : la distance du rayon dans lequel la commande sélectionne les entités
  * `{displayMsgIfNoEntity}` : (true ou false) pour notifier l'utilisateur de l'item s'il n'a réussi à cibler aucun mob.
    * **Mettez false pour masquer le message**
  * `{throughBlocks}` : affecte ou non les mobs situés derrière des blocs
  * `{safeDistance}` : si la distance entre la cible et le lanceur est inférieure ou égale à la valeur de safeDistance, la cible n'est pas affectée.
  * `{offsetYaw}` : la direction en yaw que vous voulez donner à votre offset (indépendante de la valeur de yaw de l'origine)
  * `{offsetPitch}` : la direction en pitch que vous voulez donner à votre offset (indépendante de la valeur de yaw de l'origine)
  * `{offsetDistance}` : après le calcul de offsetYaw et offsetPitch, cette valeur sert à déplacer la position/le point central de la commande AROUND par rapport à la position xyz de l'origine.
  * `{limit}` : le nombre de cibles pouvant être affectées
  * `{sort}` : utile pour l'option limit.
    * NEAREST : sélectionne les entités les plus proches de l'origine.
    * RANDOM : sélectionne au hasard n'importe quelle entité dans le rayon de la commande.
  * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve soit en zone sauvage, soit dans le claim du lanceur (contexte du plugin GriefPrevention) (sera bientôt mis à jour pour être vérifié avec d'autres plugins de claim)
  * `{nonliving}` : true/false. Si true, cible aussi d'autres entités comme les flèches et les armor stands. Les bugs survenant lors de l'exécution de commandes d'entité avec cet argument activé seront très probablement ignorés en raison d'un élargissement incontrôlé du périmètre.
  * Vous pouvez mettre des entités en BLACKLIST ou en WHITELIST en ajoutant l'un de ces éléments n'importe où dans la commande :
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Exemple :

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Pour utiliser les NBT d'entité dans le champ WHITELIST/BLACKLIST, vous devez installer le plugin NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Il prend en charge les NBT Tags, vous pouvez donc ajouter par exemple quelque chose comme : `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info : déplace toutes les entités situées au-dessus du bloc dans la direction du bloc (pour mieux comprendre, c'est comme un tapis roulant)
* Aucun paramètre de commande
* Exemple :

```
- MOVE
```

:::info
**Cette commande ne fonctionne que sur les blocs directionnels.**
:::

### MOB\_NEAREST

* Info : cible le mob le plus proche du joueur/de la cible.
* Paramètres de la commande
    * `{max accepted distance}` : distance maximale acceptée à laquelle l'« entité » peut se trouver.
    * `{command(s)}` : la commande qui sera exécutée
* Exemple :

Inflige des dégâts au joueur le plus proche

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info : cible le joueur le plus proche du joueur/de la cible.
* Paramètres de la commande
    * `{max accepted distance}` : distance maximale acceptée à laquelle la « cible » peut se trouver.
    * `{command}` : la commande qui sera exécutée
* Exemple :

Inflige des dégâts au joueur le plus proche

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Ouvre ou ferme un bloc ouvrable.
* Aucun paramètre de commande
* Exemple :

```
- OPENDOOR
```

### OPMESSAGE

* Info : envoie un message aux joueurs OP en ligne et à la console
* Paramètre de la commande
  * `{text}` : le texte à envoyer
* Exemple :

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info : fait apparaître des particules à l'emplacement du bloc
* Paramètres de la commande
  * `{type}` : le type de particule.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}` : la quantité de particules qui apparaîtront
* `{offset}` : le rayon de la zone dans laquelle les particules peuvent apparaître à l'emplacement du bloc
* `{speed}` : la vitesse ou la taille des particules
* Exemple :

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info : place un liquide à un emplacement. Si un chaudron s'y trouve, le remplit. Si un bloc pouvant être waterlogged s'y trouve, le met en état waterlogged. Sinon, ne fait rien
* Paramètres de la commande
  * `{type}` : le type de liquide (par défaut : WATER). Choix : WATER/LAVA
* Exemple :

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info : plante en carré à partir du bloc sélectionné.
* Paramètres de la commande
  * `{radius}` : le rayon du carré
  * `{takeFromInv}` : true par défaut, prend les graines dans l'inventaire du joueur, sinon génère les graines
  * `{acceptEI}` : false par défaut, accepte les EI pour les graines
  * `{cropType}` : par défaut, toutes les graines sont acceptées (les graines sont prises selon leur ordre dans l'inventaire)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}` : fait passer la zone de plantation d'un carré à un cube. Utile pour planter du cacao sur une zone
* Exemple :

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info : retire le bloc, sans drops, il est simplement supprimé
* Aucun paramètre de commande
* Exemple :

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info : vend tout le contenu d'un coffre / four / de tous les blocs qui possèdent un inventaire.
* Paramètres de la commande
  * `{price_boost}` : multiplicateur (float) pour les items vendus. Par exemple, si la valeur est 2, les items vendus vous rapporteront le double du prix de vente.
  * `{deleteUnsellable}` : valeur booléenne indiquant s'il faut supprimer les items invendables
* Exemple :

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Nécessite ShopGUIPlus (prioritaire) & Vault & les prix de CMI
:::

### SETBLOCK

* Info : remplace le bloc ciblé par un autre bloc
* Paramètre de la commande
  * `{material}` : le matériau à placer
* Exemple :

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info : remplace le bloc ciblé par un bloc temporaire.
* Paramètres de la commande
  * `{material}` : le matériau à placer
  * `{time}` : la durée en ticks (20 ticks = 1 s)
* Exemple :

```
- SETTEMPBLOCK STONE 100
```

:::warning
Cette commande ne remplace pas les blocs qui possèdent des données supplémentaires (inventaire, rotation, etc.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info : remplace le bloc ciblé par un bloc temporaire
* Commande : SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Exemple :

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
Cette commande ne remplace pas les blocs qui possèdent des données supplémentaires (inventaire, rotation, etc.)
:::

### SETBLOCKPOS

* Info : place un bloc à une position donnée
* Paramètres de la commande
  * `{x}` : la position X du bloc
  * `{y}` : la position Y du bloc
  * `{z}` : la position Z du bloc
  * `{material}` : le type de bloc
  * `{bypassWG}` : indique si WorldGuard interfère ou non avec le placement du bloc
* Exemple :

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info : commande setblock, mais pour les Executable Blocks
* Paramètres de la commande
  * `{id}` : l'ID de l'Executable Block
  * `{x}` : les coordonnées X
  * `{y}` : les coordonnées Y
  * `{z}` : les coordonnées Z
  * `{world}` : le monde dans lequel vous voulez placer l'Executable Block
  * `{replace}` : indique si vous voulez remplacer un bloc existant à cet emplacement ou non
  * `{bypassProtection}` : (false par défaut) indique si vous voulez remplacer le bloc même si une protection de terrain d'un plugin s'y trouve. 
  * `[ownerUUID]` : (optionnel) (par défaut = aucun propriétaire) l'UUID du joueur qui sera le propriétaire de l'EB
* Exemple :

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info : récupère le spawner concerné par l'événement
* Aucun paramètre de commande
* Exemple :

```
- SILK_SPAWNER
```

:::info
La commande SILK\_SPAWNER n'est compatible qu'avec les plugins suivants :

* RoseStacker
* WildStacker

Et bien sûr avec les spawners vanilla.
:::

### SMELT

* Info : fait fondre le bloc ciblé en droppant l'item fondu, par exemple iron\_ore -> iron\_ingot. Prend en charge Fortune ; s'il ne peut pas être fondu, rien ne se passe. Le loot du bloc ne change pas.
* Paramètre de la commande
  * `[generateEvent]` : (optionnel) (par défaut = true) indique si la commande génère ou non un block break event
* Exemple :

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info : frappe d'un éclair sans dégâts le bloc qui exécute la commande
* Aucun paramètre de commande
* Exemple :

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info : casse les blocs d'un filon en une seule casse de bloc
* Paramètres de la commande
  * `{maxVeinSize}` : (par défaut = 10) nombre maximal de blocs que la commande peut casser
  * `[createBBEvent]` : (optionnel) (par défaut = true) indique si la commande génère ou non un block break event
  * `[smelt]` : (optionnel) (par défaut = false) utilise la logique de la commande SMELT. Si le bloc peut être fondu, il droppe la version fondue à la place. Sinon, il droppe normalement le bloc cassé.
  * `[runActivatorOnBlocks]` : (optionnel) (par défaut = false) ExecutableItems uniquement. Si true, les blocs du filon exécutent aussi l'activateur qui a lancé la commande, voir [runActivatorOnBlocks](#runactivatoronblocks). Laissez `createBBEvent` à true.
* Exemple :

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` n'est pas un paramètre de VEIN\_BREAKER. L'ancien modèle de l'éditeur en jeu écrivait `VEIN_BREAKER maxVeinSize:10 triggerEvent:true` : la partie `triggerEvent:true` n'a aucun effet, vous pouvez la supprimer. Pour choisir si la commande génère des block break events, utilisez `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` est un paramètre de VEIN\_BREAKER, [MINEINCUBE](#mineincube) et [FARMINCUBE](#farmincube). Il n'est lu que par ExecutableItems.

* Sans lui (`false` par défaut), les blocs cassés par la commande n'exécutent pas l'activateur qui contient la commande : c'est ce qui évite une boucle de casses de blocs. Les autres activateurs de vos items (ceux sans commande de casse) s'exécutent toujours pour ces blocs.
* Avec `runActivatorOnBlocks:true`, chaque bloc cassé par la commande exécute aussi l'activateur qui l'a lancée, comme si le joueur l'avait cassé : ses conditions, `desactiveDrops` (pas de drops vanilla), ses autres commandes (par exemple `DROPITEM`), son `usageModification` et ses modifications de variables s'appliquent à chaque bloc. `cancelEvent: true` s'applique aussi : ces blocs ne sont alors pas cassés.
* La commande de casse n'est pas relancée pour ces blocs, il n'y a donc pas de boucle.
* Les cooldowns, les utilisations par jour et les fonctionnalités requises (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) ne sont pas vérifiés pour ces blocs : ils sont vérifiés et prélevés une seule fois, pour le bloc qui a exécuté l'activateur. Sinon, un cooldown arrêterait le filon après le premier bloc.
* L'activateur reçoit ces blocs via leurs block break events : laissez `createBBEvent` (VEIN\_BREAKER) ou `{createEvent}` (MINEINCUBE) sur `true`, leur valeur par défaut. FARMINCUBE génère lui-même les événements avec `runActivatorOnBlocks:true`, sauf si son argument `{event}` vaut `false`.
* Ces événements sont des casses de blocs, cela ne fonctionne donc que lorsque la commande se trouve dans un activateur PLAYER\_BLOCK\_BREAK.

Exemple : chaque bloc du filon droppe 1 diamant au lieu de ses drops vanilla, et coûte 1 utilisation.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
