---
description: >-
  Découvrez les commandes Player et Target de SCore : ABSORPTION, LAUNCH,
  SET_BLOCK, SUDO et plus, avec leurs paramètres et des exemples.
source_hash: 0ab741c02dc34406
translated_at: '2026-11-13T17:18:00.935Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Commandes Player et Target

:::warning
Sachez que par défaut toutes les commandes sont exécutées par la console. Si vous voulez que le joueur exécute la commande, ajoutez [**SUDO**](player-and-target-commands.md#sudo) ou [**SUDO\_OP**](player-and-target-commands.md#sudo_op) devant. 

_(Cliquez sur SUDO ou SUDO\_OP pour plus d'infos)_

\
**N'utilisez pas cette option pour les commandes vanilla et les CUSTOM COMMANDS. Pour utiliser correctement les commandes vanilla, rendez-vous dans la FAQ, section « How to use vanilla commands »,**
:::

:::tip
Compatibilité « multi-world » pour les commandes vanilla.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Exemple : vous voulez invoquer un Zombie dans le monde SsomarWorld :

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemple avec un placeholder`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
Vous voulez conserver la forme HEX brute dans votre commande ? Ajoutez le tag **BRUT\_HEX** dans votre commande. Il fonctionne n'importe où dans la ligne de commande, mais il est recommandé de le placer dans la première partie de la commande pour éviter toute confusion.
:::

:::info
Par défaut, aucune commande n'est exécutée si le joueur est hors ligne. (les commandes seront exécutées à la connexion du joueur)

Mais vous pouvez ajouter le tag **\[\<OFFLINE>]** dans vos commandes pour supprimer cette restriction.

_(Très utile pour les commandes broadcast, boost, giveall, ...)_

Exemple :

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Vous pouvez utiliser \[\<CLEAR\_IF\_DISCONNECT>] si vous voulez effacer les commandes lorsque le joueur se déconnecte.

Exemple :

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Commandes mixtes

En plus de la liste de commandes suivante, vous pouvez aussi utiliser :

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Ces commandes peuvent être utilisées dans les commandes liées au joueur OU dans les commandes liées aux entités.

## Commandes personnalisées

_Classées par ordre alphabétique_

### ABSORPTION

* Info : donne l'effet d'absorption au joueur
* Paramètres de la commande :
  * `{amount}` : nombre de demi-cœurs d'absorption. Les valeurs négatives sont prises en charge pour en retirer.
  * `{time}` : durée de l'effet en ticks. Laissez vide ou mettez « 0 » pour une durée infinie.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ABSORPTION amount:5 time:200 # Gives the player absorption
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ABSORPTION amount:5 time:200 # Gives the target absorption
```

:::warning
La valeur de votre attribut MAX\_ABSORPTION doit être supérieure à 0 !

Vérifiez la valeur en tapant : /attribute PLAYER\_NAME minecraft:max\_absorption base get

Et vous pouvez l'augmenter en tapant : /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    # You can do that to temporary up the max_absorption value of the player
    - minecraft:attribute %player% minecraft:max_absorption base set 5**
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    # You can do that to temporary up the max_absorption value of the target
    - minecraft:attribute %player% minecraft:max_absorption base set 5
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
```

### ACTIONBAR

* Info : affiche l'action bar avec votre texte + le temps restant (59, 58, 57...).
* Paramètres de la commande :
  * `{text}` : votre texte à afficher
  * `{delay}` : durée en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10` # Sends an ACTIONBAR to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10`# Sends an ACTIONBAR to the target
```

### ADD\_ITEM\_ATTRIBUTE

* Info : ajoute un attribut à un item sous forme d'opération de somme ou de soustraction.
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. -1 pour la main principale
  * `{attribute}` : l'attribut que vous voulez ajouter. [Liste des attributs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}` : la valeur de l'opération
  * `{equipmentSlot}` : le slot où l'attribut sera activé. [Liste des EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}` : sélectionne le mode d'ajout
    * `mode:ADD` : ajoute l'attribut à l'item
    * `mode:OVERRIDE` : supprime les attributs actuels du même type sur l'item + ajoute l'attribut à l'item
    * `mode:STACK` : se cumule avec l'attribut présent sur l'item, et l'ajoute si aucun n'existe
  * affectDefaultAttributes: true or false # Lorsque la valeur est true, le mode OVERRIDE écrase aussi les attributs par défaut, et pour le mode stack, cela permet de se cumuler avec les attributs par défaut (en vert)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:STACK affectDefaultAttributes: true # Add this attribute to the target
```

### ADD\_ITEM\_ENCHANTMENT

* Info : ajoute un enchantement sur un item dans un slot précis avec un certain niveau
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. -1 pour la main principale
  * `{enchantment}` : l'enchantement que vous voulez appliquer, n'utilisez pas d'espaces, utilisez les enchantements Minecraft et non les noms affichés. [Enchantements](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}` : le niveau de l'enchantement
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1 
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1
```

### ADD\_ITEM\_LORE

* Info : ajoute une ligne de lore
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. -1 pour la main principale
  * `{text}` : le texte de la nouvelle ligne de lore
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %player%
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %target% added by %player%
```

### BOOTS

* Info : place l'item de votre main principale dans votre slot de bottes. (Ne fonctionne pas si l'item a « Curse of Binding »)
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOOTS
```

### BOSSBAR

* Info : crée un texte de bossbar pendant une certaine durée.
* Paramètres de la commande :
  * `{time}` : la durée de la bossbar en ticks
  * `{color}` : couleur du texte de la bossbar
  * `{text}` : texte de la bossbar (utilisez des underscores « _ » pour ajouter des espaces à votre argument.)
  * `{count}` : combien de fois vous voulez qu'il compte
    * si cette option est présente, l'argument de temps n'a plus d'importance
  * `{countTicks}` : true/false, selon que vous voulez compter en ticks ou plutôt en secondes
  * `{countOrder}` :
    * ascending : le minuteur compte à partir de 0
    * descending : le minuteur compte à partir de la valeur donnée
  * `{overrideMode}` :
    * NO\_OVERRIDE : n'écrase pas les autres Bossbars
    * OVERRIDE\_ALL : écrase toutes les autres BossBars envoyées par SCore
    * OVERRIDE\_SAME\_TEXT : écrase les autres Bossbars envoyées par SCore qui contiennent le même texte
  * `{barProgress}` : (par défaut = 1.0) la progression initiale de la barre (0.0 à 1.0). Fonctionne avec les barres statiques et les barres à compte à rebours (uniquement en descending)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOSSBAR time:200 color:RED text:This_is_a_bossbar text
    - BOSSBAR time:20 color:BLUE text:Hello_world count:50 countTicks:true countOrder:ascending
    - BOSSBAR time:200 color:RED text:This is a bossbar text overrideMode:OVERRIDE_SAME_TEXT
    - BOSSBAR time:200 color:GREEN text:Half filled bar barProgress:0.5
```

### CANCEL\_PICKUP

* Info : désactive le ramassage pour un joueur pendant une durée donnée
* Paramètres de la commande :
  * `{time}` : la durée en ticks avant que le joueur puisse à nouveau ramasser des items
  * `{material}` : s'il est défini, le joueur ne peut pas ramasser uniquement le matériau indiqué ; s'il est null, il ne peut rien ramasser
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CANCEL_PICKUP time:600
    - CANCEL_PICKUP time:600 material:stone
```

:::info
Le seul moyen de RÉINITIALISER cette commande après avoir défini une durée en ticks est de recharger ou de redémarrer le serveur. Si vous souhaitez un moyen de la réinitialiser, suggérez-le dans le canal #suggestions sur Discord.
:::

### CHAT

* Info : envoie un message du joueur dans le chat
* Paramètres de la commande :
  * `{text}` : texte à envoyer
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Info : place l'item de votre main principale dans votre slot de plastron. (Ne fonctionne pas si l'item a « Curse of Binding »)
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHESTPLATE
```

### CLOSE\_INVENTORY

* Info : ferme l'inventaire du joueur
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CLOSE_INVENTORY
```

### CROPS\_GROWTH\_BOOST

* Info : accélère la croissance des cultures autour de vous
* Paramètres de la commande :
  * `{radius}` : le rayon du boost (5 par défaut)
  * `{delay}` : le délai en ticks entre chaque boost de croissance
  * `{duration}` : la durée totale du boost en ticks
  * `{chance}` : la chance de croissance qu'ont les blocs lorsque le boost est appliqué
* Exemple :

La commande suivante génère 20 boosts de croissance toutes les 10 ticks.\
Tous les blocs dans le rayon ont 50 % de chances de pousser lorsqu'un boost est appliqué.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Info : interdit l'utilisation du vol pour un joueur (planer avec une Elytra n'est pas considéré comme voler)
* Paramètre de la commande :
  * `{time}` : la durée de l'effet en secondes
* Exemple : (la commande ci-dessous désactive l'activation du vol pendant 1 minute)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Info : interdit l'utilisation de l'elytra pendant une période donnée
* Paramètres de la commande :
  * `{time}` : la durée de l'effet en secondes
* Exemple : (la commande ci-dessous désactive l'utilisation de l'elytra pendant 20 secondes)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Info : applique un cooldown à un ExecutableItems précis
* Paramètres de la commande :
  * `{PLAYER}` : le joueur ciblé par la commande
  * `{ID}` : l'id de l'ExecutableItem ou « all » pour tous les ExecutableItems
  * `{DURATION}` : la durée
  * `{boolean TICKS}` : (par défaut : false) si false, la valeur de l'argument de durée est interprétée en secondes. Si true, elle est interprétée en ticks.
  * `[optional activator id]` : (optionnel) vous pouvez l'appliquer à un id d'activateur précis
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

:::info
`EICOOLDOWN` peut uniquement **ajouter** un cooldown : lorsque plusieurs cooldowns s'exécutent sur le même activateur, le plus long l'emporte. Pour raccourcir ou supprimer un cooldown, utilisez [`EICOOLDOWN_RESET`](#eicooldown_reset).
:::

### EICOOLDOWN_RESET

* Info : supprime le cooldown d'un ExecutableItem pour un joueur (tous ses activateurs, ou un seul activateur). Le cooldown visuel vanilla (`enableVisualCooldown`) est également réinitialisé.
* Paramètres de la commande :
  * `{PLAYER}` : le joueur ciblé par la commande
  * `{ID}` : l'id de l'ExecutableItem ou « all » pour tous les ExecutableItems
  * `[optional activator id]` : (optionnel) supprime uniquement le cooldown de cet activateur ; les autres activateurs conservent le leur
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN_RESET %player% thisismyid activator1 # Only activator1 of the ExecutableItem thisismyid
    - EICOOLDOWN_RESET %player% thisismyid # All the activators of thisismyid
    - EICOOLDOWN_RESET %player% all # All ExecutableItems
```

Depuis la console, `/score cooldowns clear EI:{ID}:{activator id} {player}` fait la même chose pour un activateur.

### EBCOOLDOWN

* Info : applique un cooldown à un ExecutableBlocks précis
* Paramètres de la commande :
  * `{PLAYER}` : le joueur ciblé par la commande
  * `{ID}` : l'id de l'ExecutableBlocks ou « all » pour tous les ExecutableBlocks
  * `{DURATION}` : la durée
  * `{boolean TICKS}` : (par défaut : false) si false, la valeur de l'argument de durée est interprétée en secondes. Si true, elle est interprétée en ticks.
  * `[optional activator id]` : (optionnel) vous pouvez l'appliquer à un id d'activateur précis
* Exemple : 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EBCOOLDOWN %player% thisismyid 10 true # For the ExecutableBlock thisismyid 
    - EBCOOLDOWN %player% all 10 true # For all ExecutableBlocks
```

### EECOOLDOWN

* Info : applique un cooldown à un ExecutableItems précis
* Paramètres de la commande :
  * `{PLAYER}` : le joueur ciblé par la commande
  * `{ID}` : l'id de l'ExecutableEvent ou « all » pour tous les ExecutableEvents
  * `{DURATION}` : la durée
  * `{boolean TICKS}` : (par défaut : false) si false, la valeur de l'argument de durée est interprétée en secondes. Si true, elle est interprétée en ticks.
  * `[optional activator id]` : (optionnel) vous pouvez l'appliquer à un id d'activateur précis
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EECOOLDOWN %player% thisismyid 10 true # For the ExecutableEvent thisismyid 
    - EECOOLDOWN %player% all 10 true # For all ExecutableEvents
```

### FIREWORK\_BOOST
* Info : si cette commande est exécutée alors que le lanceur plane avec l'elytra, elle fait apparaître une fusée de feu d'artifice, de façon similaire à un joueur qui fait un clic droit sur une fusée dans sa main en planant pour gagner de la distance.
* Paramètres de la commande :
  * `{duration}` : la durée de vie de la fusée en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Info : désactive le vol créatif du joueur, et si le vol du joueur est désactivé en plein air, le joueur sera téléporté sur le bloc possible situé sous lui.
* Paramètre de la commande :
  * `[teleportOnTheGround]` : (optionnel) (par défaut = true) indique si le joueur sera téléporté au sol ou non
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Info : donne le vol créatif au joueur
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_ON
```

### FORMAT\_ENCHANTMENTS

* Info : formate tous les enchantements dans votre lore
* Paramètres de la commande :
  * `{slot}` : le slot ciblé (-1 pour la main principale)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FORMAT_ENCHANTMENTS %slot%
```

![](https://media.ssomar.com/m/docs-img-image-393.png) -> ![](https://media.ssomar.com/m/docs-img-image-382.png)

### GIVE\_MONEY

* Info : donne de l'argent à un joueur
  * Nécessite le plugin Vault
* Paramètres de la commande :
  * amount : le montant à donner
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GIVE_MONEY amount:50.0
```

### GRAVITY\_DISABLE

* Info : arrête la gravité pour le joueur, l'empêchant de « tomber » ou de monter.
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### GRAVITY\_ENABLE

* Info : réactive la gravité pour le joueur, qui tombera donc normalement.
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### HEAD

* Info : place l'item de votre main principale dans votre slot de tête. (Ne fonctionne pas si l'item a « Curse of Binding »)
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - HEAD
```

### JOBS\_MONEY\_BOOST

* Info : augmente temporairement l'argent gagné. Pour [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Paramètres de la commande :
  * `{multiplier}` : valeur du multiplicateur
  * `{time}` : durée du boost en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
Le multiplicateur n'affecte pas les valeurs de l'actionbar de Jobs. Le multiplicateur de cette commande ne s'applique que lorsque le plugin Jobs décide d'incrémenter l'argent, l'xp et les points obtenus.

Si elle est exécutée plusieurs fois avec une durée suffisante pour chaque boost, tous les boosts en cours peuvent se cumuler.
:::

### JOBS\_XP\_BOOST

* Info : multiplie temporairement les gains d'XP du plugin Jobs. Pour [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Paramètres de la commande :
  * `{multiplier}` : valeur du multiplicateur d'XP (par ex. 2.0 pour doubler l'XP)
  * `{time}` : durée en secondes avant l'expiration du boost
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
Le multiplicateur n'affecte pas les valeurs de l'actionbar de Jobs. Le multiplicateur de cette commande ne s'applique que lorsque le plugin Jobs décide d'incrémenter l'argent, l'xp et les points obtenus.

Si elle est exécutée plusieurs fois avec une durée suffisante pour chaque boost, tous les boosts en cours peuvent se cumuler.
:::

:::info
Cette commande permet de cumuler plusieurs boosts de façon multiplicative.
:::

### LAUNCH

* Info : lance un projectile personnalisé. [Référence](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
* Liste : 
<details>
<summary>Types de projectiles</summary>
* ARROW
* DRAGONFIREBALL
* EGG
* ENDERPEARL
* FIREBALL
* LARGEFIREBALL
* LINGENRINGPOTION
* LLAMASPIT
* SHULKERBULLET (uniquement disponible pour 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Paramètres de la commande :
  * `{projectile}` : le type du projectile ou l'ID du projectile personnalisé de SCore ( [Référence](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]` : (optionnel) (par défaut = 0) (en degrés) définit la direction dans laquelle l'entité sera lancée
  * `[angleRotationHorizontal]` : (optionnel) (par défaut = 0) (en degrés) définit la direction dans laquelle l'entité sera lancée
  * `[velocity]` : (optionnel) (par défaut = 1) pour personnaliser la vitesse du projectile (fonctionne aussi de 1.8 à 1.12)
  * `[name]` : (optionnel) nom personnalisé donné au projectile lancé, par exemple pour le reconnaître plus tard dans une condition (`name:&cFire_ball`).
  * `[strictYaw]` : (optionnel) (en degrés) direction horizontale du lancer, utilisée à la place de la direction dans laquelle le joueur regarde (`0` = sud, `90` = ouest, `180` = nord, `-90` = est). Les paramètres `angleRotation...` s'y ajoutent.
  * `[strictPitch]` : (optionnel) (en degrés) direction verticale du lancer, utilisée à la place de la direction dans laquelle le joueur regarde (`0` = droit devant, `-90` = vers le haut, `90` = vers le bas). Les paramètres `angleRotation...` s'y ajoutent.
    * <CustomTag type="version" version="1.20.5" /> Elle modifie aussi la vitesse des boules de feu (FIREBALL, SIZEDFIREBALL, LARGEFIREBALL, DRAGONFIREBALL, WITHERSKULL) : `velocity:2` vole deux fois plus vite, `velocity:1` conserve la vitesse vanilla. Avant la 1.20.5, elles conservent leur vitesse vanilla.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Exemple de tirs multiples :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

* Exemple : lancer toujours droit devant (à l'horizontale), que le joueur regarde vers le haut ou vers le bas, avec un projectile nommé :

```yaml
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - LAUNCH projectile:SNOWBALL strictPitch:0 name:Frost_Ball
```

:::info
Si vous utilisez la COMMANDE LAUNCH dans l'activateur PLAYER\_LAUNCH\_PROJECTILE, et que le projectile a été lancé par un arc, le projectile lancé avec la commande LAUNCH personnalisée conservera la même vitesse.
:::

:::info
Si vous utilisez SHULKERBULLET comme type de projectile, il prendra le curseur du lanceur comme cible. Sinon, il ciblera l'entité la plus proche du lanceur.
:::

:::warning
Problèmes actuels :  
- Les Shulker Bullets ne peuvent pas être utilisés en 1.9.4, 1.10.2, 1.11.2. À partir de la 1.12, il ne devrait pas y avoir de complications, hormis le fait de devoir créer un projectile SCore pour donner à un Shulker Bullet une vitesse de vol correcte.
:::

### LEGGINGS

* Info : place l'item de votre main principale dans votre slot de jambières. (Ne fonctionne pas si l'item a « Curse of Binding »)
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LEGGINGS
```

### LOCATED\_LAUNCH

* Info : lance un projectile à un endroit précis
* Paramètres de la commande :
  * `{projectileType}` : le type du projectile ou l'ID du projectile personnalisé de SCore ( [Référence](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]` : (optionnel) (par défaut = 0) positif = devant, négatif = derrière : position avant/arrière. Par exemple, si vous voulez faire apparaître le projectile à 5 blocs de là où vous faites face, utilisez une valeur positive plus élevée
  * `[rightValue]` : (optionnel) (par défaut = 0) droite = positif, négatif = gauche : position droite/gauche. Par exemple, si vous voulez que le projectile apparaisse à votre gauche, utilisez une valeur négative plus élevée
  * `[yValue]` : (optionnel) (par défaut = 0) à quelle hauteur au-dessus de votre position Y le projectile apparaîtra.
  * `[velocity]` : (optionnel) (par défaut = 1) la vitesse à laquelle le projectile volera. Mettez la valeur à 0 pour que le projectile tombe vers le bas dès son apparition.
  * `[angleRotationVertical]` : (optionnel) (par défaut = 0) <CustomTag type="version" version="1.14" /> vous pouvez ajouter une rotation verticale à votre projectile (en degrés)
  * `[angleRotationHorizontal]` : (optionnel) (par défaut = 0) <CustomTag type="version" version="1.14" /> vous pouvez ajouter une rotation horizontale à votre projectile (en degrés)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Info : vous propulse lorsque vous êtes dans une wagonnet (effet proche de celui d'un rail propulseur)
* Paramètre de la commande :
  * `{boost}` : la vitesse du boost
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MINECART_BOOST boost:10
```

### MIX\_HOTBAR

* Info : mélange la hotbar du joueur
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MIX_HOTBAR
```

### MODIFY\_DURABILITY

* Modifie la durabilité d'un item précis dans un slot précis
* Paramètres de la commande :
  * `{modification}` : valeur positive pour augmenter la durabilité. Valeur négative pour la diminuer
  * `{slot}` : le numéro de slot de l'item (-1 pour le slot tenu en main)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}` : (true ou false) indique si l'enchantement Unbreaking est pris en charge ou non
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Info : ouvre un coffre ou un tonneau à l'emplacement sélectionné
* Paramètres de la commande :
  * `{world}` : nom du monde
  * `{x}` : coordonnée X
  * `{y}` : coordonnée Y
  * `{z}` : coordonnée Z
  * `[bypassProtections]` : (optionnel) (par défaut = false) indique si le coffre sera ouvert malgré tout, même s'il est protégé
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Info : ouvre l'ender chest du joueur qui exécute l'activateur
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_ENDERCHEST
```

### OPEN\_WORKBENCH

* Info : ouvre un établi pour le joueur qui exécute l'activateur
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_WORKBENCH
```

### OXYGEN

* Info : donne de l'oxygène à la cible
* Paramètre de la commande :
  * `{time}` : la durée en ticks d'oxygène que vous voulez donner
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Info : similaire à CUSTOMDASH1, mais les xyz seront remplacés par les coordonnées xyz du projectile le plus proche de vous.
* Paramètres de la commande :
  * `{fallDamage}` : indique si vous subirez des dégâts de chute ou non (si vous oubliez de définir true ou false, la valeur par défaut sera false. Pour subir des dégâts de chute, mettez true)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Info : vous donne une quantité précise de nourriture/saturation
* Paramètres de la commande :
  * `{amount}` : la quantité de points de saturation que vous voulez gagner. Utilisez des valeurs négatives pour réduire les points de faim
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Info : donne au joueur des valeurs précises de la magie d'[Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/).  
* Paramètres de la commande :
  * `{ecoSkillsMagicID}` : l'ID de la magie d'Ecoskills.
  * `{amount}` : la quantité à obtenir.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_MAGIC ecoSkillsMagicID:mana amount:15
```

:::info
Les valeurs négatives sont prises en charge.
:::

### REGAIN\_SATURATION

* Info : vous donne une quantité précise de saturation
* Paramètres de la commande :
  * `{amount}` : la quantité de saturation que vous pouvez donner
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Info : retire un enchantement d'un slot
* Paramètres de la commande :
  * `{slot}` : slot dont retirer l'enchantement (-1 pour le slot tenu en main)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}` : enchantement à retirer (ALL pour tous les enchantements)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Info : retire une ligne de lore
* Paramètres de la commande :
  * `{slot}` : slot dont retirer le lore (-1 pour le slot tenu en main)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}` : la ligne que vous voulez retirer
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Info : remplace le bloc que le joueur regarde par un autre
* Paramètres de la commande :
  * `{material}` : ID du bloc (les block states sont pris en charge)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REPLACE_BLOCK STONE_BRICKS
    - REPLACE_BLOCK WATER[LEVEL=0]
```

### SEND\_BLANK\_MESSAGE

* Info : vous envoie un message vide
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_BLANK_MESSAGE
```

### SEND\_MESSAGE

* Info : vous envoie un message
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) pris en charge
* Paramètres de la commande :
  * `{message}` : le message que vous voulez envoyer
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    playerCommands:
    - SEND_MESSAGE text:&fThis is a somewhat random text.
    - SEND_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```

### SEND\_CENTERED\_MESSAGE

* Info : vous envoie un message centré dans le chat
  * [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/) pris en charge
* Paramètres de la commande :
  * `{message}` : le message que vous voulez envoyer
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_CENTERED_MESSAGE text:&fThis is a somewhat random text.
    - SEND_CENTERED_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```


### SET\_ARMOR\_TRIM

* Info : définit la garniture d'armure avec le motif précis pour le slot indiqué
* Paramètres de la commande :
  * `{slot}` : le slot auquel appliquer la commande (slot -1 pour la main principale)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}` : le motif de la garniture (si « null » ou « remove », le motif actuel sera retiré). [Liste des TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}` : le matériau du motif. [Liste des TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ARMOR_TRIM slot:38 pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM slot:38 pattern:null #to clear the armor trim
```


### SET\_BLOCK

* Info : place un bloc sur le bloc ciblé par le joueur
* Paramètres de la commande :
  * `{blockface}` : vous pouvez spécifier ou non une blockFace pour forcer le placement au-dessus, par exemple. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}` : ID du bloc (les block states sont pris en charge) 
  * `{bypassProtection}` : indique si le bloc sera placé même si le joueur n'a pas la permission
  * `[whitelistCurrentBlock]` : (optionnel) (par défaut = peut être placé sur tous les types de blocs) liste de blocs auxquels le bloc actuel doit correspondre pour être remplacé
    * Exemples :
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK blockface:UP material:OAK_WOOD
    - SET_BLOCK material:FURNACE[LIT=TRUE]
    - SET_BLOCK material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_BLOCK\_POS

* Info : place un bloc à une position précise
* Paramètres de la commande :
  * `{x}` : coordonnée X
  * `{y}` : coordonnée Y
  * `{z}` : coordonnée Z
  * `{material}` : le matériau du bloc
  * `[bypassProtection]` : (optionnel) (par défaut = false) indique s'il contourne les protections de région, de claim et d'île
  * `[replace]` : (optionnel) (par défaut = true) indique s'il remplace le bloc si un bloc existe déjà
  * `[whitelistCurrentBlock]` : (optionnel) (par défaut = peut être placé sur tous les types de blocs) liste de blocs auxquels le bloc actuel doit correspondre pour être remplacé
    * Exemples :
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK_POS x:0 y:0 z:0 material:STONE bypassProtection:false replace:true
    - SET_BLOCK_POS x:0 y:0 z:0 material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_EQUIPPABLE\_MODEL

* Info : définit les données du modèle équipable d'un item dans un slot précis
* Paramètres de la commande :
  * `{slot}` : le numéro du slot où se trouve l'item ciblé
  * `{model}` : le nom du modèle d'équipement que vous souhaitez attribuer à l'item
* Exemple :

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Info : setblock, mais pour les Executable Blocks. **(EXECUTABLE BLOCKS DOIT ÊTRE INSTALLÉ)**
* Paramètres de la commande :
  * `{id}` : ID du bloc exécutable que vous essayez de placer
  * `{x}` : coordonnée X
  * `{y}` : coordonnée Y
  * `{z}` : coordonnée Z
  * `{world}` : nom du monde
  * `[replace]` : (optionnel) (par défaut = true). Indique s'il remplacera ou non le bloc existant aux coordonnées indiquées
  * `[bypassProtection]` : (optionnel) (par défaut = false) si vous voulez contourner les protections comme WorldGuard
  * `[ownerUUID]` : (optionnel) (par défaut = aucun propriétaire) l'uuid du propriétaire supposé du bloc exécutable
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Info : définit une couleur précise pour l'item (items colorables comme l'armure en cuir / l'étoile de feu d'artifice)
*  Paramètres de la commande :
  * `{slot}` : le slot où elle sera appliquée. (-1 pour la main principale)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}` : valeur numérique de la couleur. [Site de sélection de couleur](https://www.tydac.ch/color/)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Info : définit un attribut sur un item.
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. (-1 pour la main principale)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}` : l'attribut que vous voulez ajouter. [Attributs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}` : la valeur de l'opération
  * `{equipmentSlot}` : le slot de l'attribut [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Donne au joueur/à la cible un cooldown sur un item
* Paramètres de la commande :
  * `{material or group}` : le type de matériau ou le groupe. [Plus d'infos sur les groupes](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
  * `{cooldown}` : cooldown en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN material:ENDER_PEARL cooldown:10
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN group:my_cooldown_group cooldown:10
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Info : définit un custom model data précis sur l'item indiqué
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. (-1 pour la main principale)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{customModelData}` : valeur du customModelData
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA slot:10 customModelData:10
```

### SET\_ITEM\_LORE

* Info : définit une ligne de lore
* Paramètres de la commande :
  * `{slot}` : numéro du slot (-1 pour la main principale)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : si vous voulez définir le lore de la première ligne, tapez 1
* `{text}` : le texte de la nouvelle ligne
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_LORE slot:%slot% line:3 text:&6LEGENDARY SWORD
```

### SET\_ITEM\_MATERIAL 

<CustomTag type="version" version="1.20.5" />
* Remplace le matériau de l'item par un autre matériau tout en conservant le nbt de l'item ciblé
* Paramètres de la commande :
  * `{slot}` : numéro du slot (-1 pour la main principale)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}` : le matériau en lequel vous voulez que l'item se transforme
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Info : définit un modèle personnalisé pour votre item dans un slot précis
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. (-1 pour la main principale)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{model}` : la valeur du modèle que vous voulez appliquer à l'item ciblé
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MODEL slot:-1 model:minecraft:stone
```

### SET\_ITEM\_NAME

* Info : définit un nom personnalisé pour votre item dans un slot précis
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. (-1 pour la main principale)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}` : le nouveau nom de l'item
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Info : définit une couleur personnalisée pour la couleur de potion d'un item dans un slot précis
* Paramètres de la commande :
  * `{slot}` : le slot où elle sera appliquée. (-1 pour la main principale)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}` : la couleur que vous voulez appliquer. Pour la couleur, rendez-vous sur `https://www.tydac.ch/color/` et récupérez la valeur `MapInfo Color` de la couleur de votre choix.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Info : définit le style de tooltip personnalisé de l'item dans le slot.
* Paramètres de la commande :
  * `{slot}` : le slot où il sera appliqué. (-1 pour la main principale)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}` : (valeur par défaut : `namespace:id`) l'id du tooltip.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Info : définit l'heure du joueur sans affecter l'heure côté serveur.
* Paramètres de la commande :
  * `{time}` : la valeur de l'heure. Entrez `-1` pour que l'heure du joueur se base à nouveau sur l'heure côté serveur.
  * `{relative}` : (valeur par défaut : false) si ce n'est pas true, l'heure du point de vue de l'utilisateur sera définie littéralement à cette valeur. Mais si true, elle prendra l'heure actuelle du monde et lui ajoutera la valeur fournie pour définir l'heure actuelle de votre point de vue.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Info : définit la météo du joueur sans affecter la météo côté serveur.
* Paramètres de la commande :
  * `{weather The time value}` : définit la météo du joueur de son point de vue
    * Options :
      * RESET : la restaure à la météo côté serveur
      * DOWNFALL : pluie ou neige selon le biome
      * CLEAR : temps clair, nuages mais pas de pluie.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Info : place un bloc temporaire
* Paramètres de la commande :
  * `{x}` : coordonnée X
  * `{y}` : coordonnée Y
  * `{z}` : coordonnée Z
  * `{world}` : nom du monde
  * `{material}` : ID du bloc
  * `{time}` : durée en ticks
  * `[bypassProtection]` : (optionnel) (par défaut = false) indique s'il faut ignorer ou non l'intervention de tiers
  * `[whitelistCurrentBlock]` : (optionnel) (par défaut = peut être placé sur tous les types de blocs) liste de blocs à surveiller
    * Exemples :
    * AIR, WATER
    * !STONE, !COBBLESTONE


```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_TEMP_BLOCK_POS x:%entity_x% y:%entity_y% z:%entity_z% world:%entity_world% material:BEDROCK time:40 bypassProtection:true whitelistCurrentBlock:!AIR,!WATER
```

:::warning
Il ne remplace pas les blocs qui ont des données supplémentaires (inventaire, rotation, etc.)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Info : fait apparaître des entités sur votre curseur
  * Vous pouvez indiquer un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Ou une définition d'entité, exemple : `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Ou un ID de MythicMob
* Paramètres de la commande :
  * `{entity}` : la spécification de l'entité
  * `{amount}` : le nombre de mobs qui apparaîtront à cet endroit
  * `[maxRange]` : (optionnel) (par défaut = 200) la portée maximale de l'apparition
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SPAWN_ENTITY_ON_CURSOR entity:CREEPER amount:1
```

```
# With EntitySnapshot
- SPAWN_ENTITY_ON_CURSOR entity:{HasVisualFire:1b,id:"minecraft:bee"} amount:1

# With MythicMob ID
- SPAWN_ENTITY_ON_CURSOR entity:MyCustomBossID amount:1
```

### SUDO

* Info : vous force à exécuter une commande
* Paramètre de la commande :
  * `{command}` : la commande à exécuter
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO sit
    - SUDO say hi
```

### SUDO\_OP

* Info : donne le statut d'OP au joueur, exécute la commande en SUDO pour le joueur, puis retire son statut d'OP
* Info supplémentaire : pendant la durée de l'OP, le joueur ne peut exécuter que la commande indiquée après le SUDOOP, toutes les autres commandes sont bloquées tant que le joueur est OP, et si le serveur plante, ce n'est pas un problème. Le joueur perdra son statut d'OP à sa reconnexion.
* Paramètres de la commande :
  * `{command}` : la commande à exécuter avec OP
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO_OP summon zombie
    - SUDO_OP fly
    - SUDO_OP god
    - SUDO_OP /replacenear 20 tnt
```

:::danger
Il n'est pas recommandé de l'utiliser **souvent**. Comme expliqué en haut de cette page, si vous voulez exécuter des commandes vanilla, utilisez la commande execute (expliquée dans la FAQ [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

N'utilisez SUDOOP que s'il n'existe absolument aucune autre option : ce doit être votre dernier recours, pas votre premier choix.
:::

### SWAP\_HAND

* Info : échange l'item actuel avec l'item de votre seconde main
* Aucun paramètre de commande
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SWAP_HAND
```

### TRANSFER\_ITEM

* Info : échange 2 items de l'inventaire par slot
* Paramètres de la commande :
  * `{slot of launcher}` : slot cible pour le slot n°1
  * `{slot of receiver}` : slot cible pour le slot n°2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]` : (optionnel) (par défaut = false) indique si le slot du lanceur est lâché au sol ou non pendant l'échange

### XP_BOOST

* Info : booste le gain d'xp pendant une durée donnée.
* Paramètres de la commande :
  * `{multiplier}` : valeur du multiplicateur d'XP
  * `{timeinsecs}` : durée en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
Attention ! Cette commande peut se cumuler : si vous l'exécutez plusieurs fois, vous obtiendrez de plus en plus de multiplicateurs si le temps entre chaque exécution n'est pas suffisant pour que le dernier boost disparaisse.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Cela signifie que l'XP sera boostée dans cet ordre :
* 1 seconde : x2
* 4 secondes : x4
* 1 seconde : x2
:::
