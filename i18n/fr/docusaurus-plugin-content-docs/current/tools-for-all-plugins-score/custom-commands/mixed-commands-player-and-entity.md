---
description: >-
  Commandes mixtes pour joueur et entité (AROUND, DAMAGE, TELEPORT...) :
  paramètres et exemples de chaque commande dans SCore.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T17:17:37.397Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Commandes mixtes (Player et Entity)

:::info
Ces commandes personnalisées fonctionnent pour le Player mais aussi pour l'Entity

Donc dans :
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Classées par ordre alphabétique_

### ADD\_TEMPORARY\_ATTRIBUTE

* Info : Ajoute des attributs temporaires à un joueur/une entité
* Paramètres de la commande :
    * `{attribute}` : [Liste des attributs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Valeur décimale (double) que l'attribut temporaire aura
    * `{operation}` : [Liste des opérations](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Durée avant l'expiration de l'attribut
* Exemple :
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Info : Cible tous les joueurs.
* Paramètre de la commande : 
  * `{command}` : La commande qui sera exécutée
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Exécuter plusieurs commandes : donner un item aléatoire à tous les joueurs, tous les joueurs n'auront pas le même.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Info : Cible tous les joueurs.
* Paramètre de la commande : 
    * `{command(s)}` : La commande qui sera exécutée
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Exécuter plusieurs playerCommands :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Elle prend en charge la blacklist et la whitelist
:::

### AROUND

* Info : Cible les joueurs dans un rayon précis et leur fait exécuter des commandes
* Paramètres de la commande :
  * `{distance}` : Jusqu'à quelle distance (rayon) la commande sélectionnera les joueurs (par défaut 3)
  * `{displayMsgIfNoPlayer}` : (true ou false) Pour notifier l'utilisateur de l'item si la commande a réussi ou non à cibler des joueurs (par défaut true)
  * `{throughBlocks}` : Affecte ou non les joueurs qui se trouvent derrière des blocs (par défaut true)
  * `{safeDistance}` : Si la distance entre la cible et le lanceur est inférieure ou égale à la valeur de safeDistance, la cible ne sera pas affectée. (par défaut 0)
  * `{offsetYaw}` : La direction de yaw que vous voulez donner à votre décalage (indépendante de la valeur de yaw de l'origine)
  * `{offsetPitch}` : La direction de pitch que vous voulez donner à votre décalage (indépendante de la valeur de yaw de l'origine)
  * `{offsetDistance}` : Après le calcul de offsetYaw et offsetPitch, cette valeur permet de déplacer la position/le point central de la commande AROUND par rapport à la position xyz de l'origine.
  * `{limit}` : Le nombre de cibles qui peuvent être affectées 
  * `{sort}` : Utile pour l'option limit. 
    * NEAREST : Sélectionne les entités les plus proches de l'origine.
    * RANDOM : Sélectionne aléatoirement une entité dans la portée de la commande.
  * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve en zone sauvage ou dans le claim du lanceur (dans le contexte du plugin GriefPrevention) (sera bientôt mise à jour pour être vérifiée avec d'autres plugins de claim)
  * `{commands}` : Les commandes qui seront exécutées pour les joueurs ciblés.

:::tip
Vous pouvez ajouter **plusieurs commandes** ! Utilisez le séparateur `<+>`

Exemple : `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders :** Les placeholders sont les mêmes que les [Player Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), mais vous devez remplacer « player » par « around\_target »

Exemple : %around\_target%, %around\_target\_uuid%
:::

:::info
**Nombre de cibles :** `%around_target_count%` donne le nombre de joueurs sélectionnés par la commande. C'est le même pour chaque cible, et il compte les cibles conservées après `distance`, `safeDistance`, `throughBlocks` et `regionCheck` et `limit`. Les `CONDITIONS(...)` vérifiées sur chaque cible ne sont pas prises en compte. Il accepte le raccourci `+N` / `-N` : `%around_target_count%-1`.

Exemple : `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Exemples :

Ceci fait apparaître la foudre sur les joueurs dans un rayon de 20 blocs

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Envoyer un message aux joueurs situés entre 5 et 10 blocs

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Vous pouvez imbriquer AROUND avec les commandes : AROUND, IF, NEAREST, ALL\_PLAYERS

Dans ce cas, le séparateur et les placeholders évoluent selon le niveau d'imbrication.

séparateur de la commande de base : `<+>`

première commande imbriquée : `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

placeholder de base : %around\_target%

première commande imbriquée : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Exemples :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Vous pouvez ajouter des **conditions** avec des placeholders personnalisés pour affiner les joueurs ciblés

Format :  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  sont les paramètres de la commande

     \<conditions> sont les conditions

Format des conditions :  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> est le nom du placeholder

      \<comparator> Le comparateur : « `<` », « `<=` », « `=` », « `>` », « `>=` »

      \<value> la valeur

 Vous pouvez ajouter plusieurs conditions avec le séparateur « && »
:::

* Exemples :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Gardez à l'esprit que la partie CONDITIONS() interprète les placeholders qu'elle contient avec le joueur sélectionné par la commande AROUND. Ce qui s'est donc réellement passé avec les placeholders ci-dessus, c'est qu'elle vérifie si la santé de la cible est supérieure à 10 et si le joueur sélectionné par la commande AROUND s'appelle « 2Ssomar »
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Les placeholders provenant de plugins comme ExecutableItems ou ExecutableBlocks ne seront pas interprétés par le joueur affecté par la commande AROUND.

Par exemple, avec ExecutableBlocks, CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) vérifie si la valeur de la variable factions du bloc est égale à la faction du joueur ciblé\
Source du placeholder : [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Info : Propulse le joueur/la cible dans la direction opposée à celle vers laquelle il regarde **(VOUS NE POUVEZ PAS ÊTRE PROPULSÉ DANS LES AIRS)**
* Paramètre de la commande :
  * `{amount}` : La valeur qui détermine la force de la propulsion
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Info : Enflamme le joueur/la cible
* Paramètre de la commande :
 * `{timeinsecs}` : Durée de la combustion en secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Info : Envoie un message à la console
* Paramètre de la commande :
  * `{text}` : Texte à envoyer à la console
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Info : Copie les effets de la cible
* Paramètre de la commande :
  * `[limitDuration]` : (Optionnel) (par défaut = aucune limite) Cela signifie que si la cible a par exemple 3 minutes d'effet de poison, et que vous limitez à 5 secondes, vous ne recevrez qu'un effet de poison de 5 secondes
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Info : Vous propulse vers un endroit précis
* Paramètres de la commande :
  * `{x}` : Coordonnée X
  * `{y}` : Coordonnée Y
  * `{z}` : Coordonnée Z
  * `{fallDamage}` : true ou false. Indique si le joueur subira des dégâts de chute après avoir été propulsé.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Si vous avez des activateurs liés à deux types de cibles, vous pouvez faire

* Exemple 1 | Instance de player - entity | Propulser le joueur vers l'entité

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Exemple 2 | Instance de player - entity | Propulser l'entité vers le joueur

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Exemple 3 | Instance de player - block | Propulser le joueur vers le bloc

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Vous pouvez augmenter la force de la commande en l'exécutant plusieurs fois (mais pas au même tick : elles doivent être espacées dans le temps, sinon cela n'a pas de sens puisque vous propulsez le joueur depuis la même position vers l'emplacement). Exemples :

* En l'exécutant plusieurs fois manuellement

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* En utilisant la commande utilitaire LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Info : Vous propulse à l'opposé d'un endroit précis
* Paramètres de la commande :
  * `{x}` : Coordonnée X
  * `{y}` : Coordonnée Y
  * `{z}` : Coordonnée Z
  * `{strength}` : Force du dash
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Si vous avez des activateurs liés à deux types de cibles, vous pouvez faire

* Exemple 1 | Instance de player - entity | Propulser le joueur à l'opposé de l'entité

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Exemple 2 | Instance de player - entity | Propulser l'entité à l'opposé du joueur

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Exemple 3 | Instance de player - block | Propulser le joueur à l'opposé du bloc

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Info : Propulse la cible en suivant une fonction mathématique précise
* Paramètres de la commande :
  * `{function}` : La fonction mathématique à suivre. [Site de calcul de fonctions](https://www.geogebra.org/calculator)
  * `{max x value}` : Valeur x maximale de la fonction
  * `{front z}` : Indique si le dash va vers l'avant ou vers l'arrière
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Info : Inflige un montant précis de dégâts au joueur. (Les dégâts infligés avec cette commande sont comptés comme des dégâts de joueur)
  * Cette commande déclenche les activateurs liés aux dégâts d'ExecutableItems et d'ExecutableEvents
  *   Le type de dégâts Spigot est ENTITY\_ATTACK si un joueur est impliqué dans l'activateur.

      Sinon, le type de dégâts Spigot est CUSTOM
* Paramètres de la commande :
  * `{amount}` : Montant des dégâts en points de vie (pas en cœurs)
  * `{amplified If Strength Effect}` : true ou false, Strength 1 -> + 1,5 dégât, ....
  * `{amplified with attack attribute}` : true ou false, récupère la somme de tous vos attributs ATTACK_DAMAGE existants qui ont l'opérateur `MULTIPLY_SCALAR_1`, la multiplie en fonction de vos dégâts d'attaque actuels (y compris l'effet de force si activé)
  <br/>
  :::info
  Formule :  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}` : Le type de dégâts -> [Liste des DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Pour appliquer de vrais dégâts, vous pouvez utiliser :\
\- 1.20.5++ : utilisez la commande /minecraft\:damage, par exemple\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- : utilisez la commande REGAIN HEALTH, ce n'est pas la meilleure solution mais c'est une astuce de contournement.
:::

### DAMAGE\_NO\_KNOCKBACK

* Info : Inflige un montant précis de dégâts au joueur sans appliquer de recul. (Les dégâts infligés avec cette commande ne sont pas comptés comme des dégâts de joueur, mais plutôt comme des dégâts indirects)
  * Cette commande déclenche les activateurs liés aux dégâts d'ExecutableItems et d'ExecutableEvents
  *   Le type de dégâts Spigot est ENTITY\_ATTACK si un joueur est impliqué dans l'activateur.

      Sinon, le type de dégâts Spigot est CUSTOM
* Paramètres de la commande :
  * `{amount}` : Montant des dégâts en points de vie (pas en cœurs)
  * `{amplified If Strength Effect}` : true ou false, Strength 1 -> + 1,5 dégât, ....
  * `{amplified with attack attribute}` : true ou false, pour un joueur avec 500 % de dégâts bonus, la commande infligera 5 x « \<damage> ».
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Info : Vous permet de vous donner un bonus de dégâts personnalisé
  * Cette commande augmente aussi les dégâts des commandes personnalisées, par exemple (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Cette commande n'augmente pas les dégâts des projectiles
* Paramètres de la commande :
  * `{modification in percentage example 100}` : Montant du bonus. Exemple ci-dessous :
    * 50 = Vous inflige +50 % de dégâts
    * -80 = Vous inflige -80 % de dégâts
  * `{timeinticks}` : La durée du bonus de dégâts personnalisé
* Exemple : (La commande ci-dessous vous donne +50 % de dégâts infligés pendant 10 s)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Cette commande peut être utilisée plusieurs fois et les bonus s'additionnent. Dans cet exemple, vous verrez que de \[0-10] secondes le joueur infligera 50 % de dégâts en plus, puis de \[10-20] secondes il infligera 100 % de dégâts en plus, et enfin de \[20-30] secondes 50 % de dégâts en plus, car entre \[10-20] deux commandes DAMAGE\_BOOST se cumulaient.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Info : Vous permet de vous donner une résistance aux dégâts personnalisée en modifiant en pourcentage les dégâts que vous subissez
* Paramètres de la commande :
  * `{modification in percentage example 100}` : Montant de la majoration. Exemple ci-dessous :
    * 50 = Vous fait subir +50 % de dégâts\
      -80 = Vous fait subir -80 % de dégâts
  * `{timeinticks}` : La durée de la résistance aux dégâts personnalisée
* Exemple : (La commande ci-dessous vous fait subir +50 % de dégâts pendant 10 s)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Info : Remplace VISUELLEMENT (sans risque de perdre des items) un emplacement d'équipement par un certain matériau
  * Elle nécessite [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * Le visuel est montré aux joueurs qui voient le joueur / l'entité (et au joueur lui-même). Un joueur qui s'approche plus tard le voit aussi.
  * Une entité a un seul visuel par emplacement : un nouvel EQUIPMENT\_VISUAL\_REPLACE sur le même emplacement remplace le précédent, avec sa nouvelle durée. Le visuel prend fin après `{timeinticks}`, avec EQUIPMENT\_VISUAL\_CANCEL, ou lorsque l'entité meurt, disparaît ou que le joueur se déconnecte.
* Paramètres de la commande :
  * `{EquipmentSlot}` : L'emplacement
    * Options :
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}` : L'id d'item du matériau par lequel vous voulez remplacer, ou l'id EI
  * `{amount}` : La quantité du stack 
  * `{timeinticks}` : La durée du déguisement. (20 ticks = 1 s)
*   Exemple : 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Info : Annule la commande EQUIPMENT\_VISUAL\_REPLACE
  * Elle fonctionne sur les joueurs et sur les mobs : les joueurs qui voient l'entité retrouvent son véritable item dans cet emplacement.
* Paramètre de la commande :
  * `{EquipmentSlot}` : L'emplacement
    * Options :
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Exemple :

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Alias : `FORCEDROP`, `DROPSPECIFICEI`
* Info : Force le joueur/l'entité à lâcher un item. Prend en charge deux modes :
  * **Mode slot** : lâche l'item situé dans l'emplacement d'inventaire indiqué
  * **Mode EI ID** : lâche tous les items de l'inventaire correspondant à l'ID d'ExecutableItem donné (joueur uniquement)
* Paramètres de la commande :
  * `slot:` : nombre, -1 pour la main principale (par défaut : -1). Voir l'image de référence des emplacements ci-dessous.
  * `ei_id:` : l'ID de l'ExecutableItem à lâcher (remplace le mode slot lorsqu'il est fourni)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Exemples :

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Info : Propulse le joueur/la cible dans la direction vers laquelle il regarde
* Paramètres de la commande :
  * `{number}` : La valeur qui détermine la force de la propulsion
  * `{custom_y}` : Pour définir un boost vertical (je conseille une petite valeur comme 0,5 - 1 si vous ne voulez pas un grand saut.)
  * `{falldamage}` : à définir pour activer ou désactiver les dégâts de chute
* Exemple :

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Info : Applique le gel de la neige poudreuse de Minecraft 1.18
* Paramètre de la commande :
 * `{time in ticks}` : Durée du gel en ticks. (20 ticks = 1 s)
* Exemple :

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Info : Applique la lueur (glowing) au joueur
* Paramètres de la commande :
  * `{time in ticks}` : Durée de la lueur en ticks
  * `{color}` : Quelle couleur aura la lueur. [Référence des couleurs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Exemple :

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Info : Permet d'exécuter une commande dans une certaine direction sur des entités
* Paramètres de la commande :
  * `{range}` : à quelle distance maximale une entité peut se trouver pour être ciblée par la commande HITSCAN
  * `{radiusOfHitscan}` : La LARGEUR du cylindre. C'est en gros la différence entre tirer une balle et tirer un boulet de canon.
  * `{pitch}` : Dans quelle direction tirer, par rapport au pitch du joueur
  * `{yaw}` : Même chose que Pitch mais avec le yaw
  * `{leftRightShift}` :
    * -5 = le hitscan DÉMARRE à 5 blocs sur la gauche.
    * 0 = Le hitscan est centré là où se trouve le joueur.
    * 5 = le hitscan DÉMARRE à 5 blocs sur la droite du joueur. 
  * `{yShift}` : Comme gauche/droite, mais sur un autre axe. 
  * `{throughEntities}` : Booléen : indique si le HITSCAN peut traverser les entités ou non.
  * `{throughBlocks}` : Booléen : indique si le HITSCAN peut traverser les blocs ou non.
  * `{limit}` : Le nombre de cibles qui peuvent être affectées
  * `{sort}` : Utile pour l'option limit.
    * NEAREST : Sélectionne les entités les plus proches de l'origine.
    * RANDOM : Sélectionne aléatoirement une entité dans la portée de la commande.
  * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve en zone sauvage ou dans le claim du lanceur (dans le contexte du plugin GriefPrevention) (sera bientôt mise à jour pour être vérifiée avec d'autres plugins de claim)
  * `{command(s)}` : Comme pour les commandes AROUND, vous pouvez saisir `command1 <+> command2` ... et utiliser le placeholder %around\_target%
* Exemple :

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Les commandes après `HITSCAN_ENTITIES` (et après chaque `<+>`) s'exécutent sur **chaque entité touchée**, comme les commandes d'entité : `REGAIN_HEALTH 4` soigne l'entité touchée, pas le lanceur. Pour agir sur le lanceur, utilisez une commande vanilla avec `%player%`, par exemple `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Image pour comprendre :
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Info : Permet d'exécuter une commande dans une certaine direction sur des joueurs
* Paramètres de la commande :
  * `{range}` : à quelle distance maximale une entité peut se trouver pour être ciblée par la commande HITSCAN
  * `{radiusOfHitscan}` : La LARGEUR du cylindre. C'est en gros la différence entre tirer une balle et tirer un boulet de canon.
  * `{pitch}` : Dans quelle direction tirer, par rapport au pitch du joueur
  * `{yaw}` : Même chose que Pitch mais avec le yaw
  * `{leftRightShift}` :
    * -5 = le hitscan DÉMARRE à 5 blocs sur la gauche.
    * 0 = Le hitscan est centré là où se trouve le joueur.
    * 5 = le hitscan DÉMARRE à 5 blocs sur la droite du joueur.
  * `{yShift}` : Comme gauche/droite, mais sur un autre axe.
  * `{throughEntities}` : Booléen : indique si le HITSCAN peut traverser les entités ou non.
  * `{throughBlocks}` : Booléen : indique si le HITSCAN peut traverser les blocs ou non.
  * `{limit}` : Le nombre de cibles qui peuvent être affectées
  * `{sort}` : Utile pour l'option limit.
    * NEAREST : Sélectionne les entités les plus proches de l'origine.
    * RANDOM : Sélectionne aléatoirement une entité dans la portée de la commande.
  * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve en zone sauvage ou dans le claim du lanceur (dans le contexte du plugin GriefPrevention) (sera bientôt mise à jour pour être vérifiée avec d'autres plugins de claim)
  * `{command(s)}` : Comme pour les commandes AROUND, vous pouvez saisir `command1 <+> command2` ... et utiliser le placeholder %around\_target%
* Exemple :

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Image pour comprendre :
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Info : Rend le joueur invulnérable pendant une durée donnée
* Paramètre de la commande :
 * `{ticks}` : Durée de l'invulnérabilité en ticks. (20 ticks = 1 s)
  * Elle accepte les valeurs négatives pour réduire le temps d'invulnérabilité, comme celui qui suit un coup reçu.
* Exemple :

```yaml
- INVULNERABILITY 60
```

### JUMP

* Info : Propulse le joueur dans les airs
* Paramètres de la commande :
  * `{number}` : La force de la propulsion
  * `{fall damage}` : (Optionnel) (par défaut = false) Indique si la commande doit infliger des dégâts de chute.
* Exemple :

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Info : Lance une entité dans votre direction
* Paramètres de la commande :
  * `{entityType}` : ID du mob de l'entité lancée (EN MAJUSCULES) [Liste des EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}` : (nombre, Double) Définit la vitesse de l'entité
  * `[angle rotation y]` : (uniquement pour 1.14 et +) (Optionnel) (par défaut = 0) (en degrés) Définit la direction dans laquelle l'entité sera lancée
* Exemple :

```yaml
- LAUNCH_ENTITY PIG 2
```

* Exemple pour faire un tri-shoot :

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Info : Inflige des dégâts à la cible, mais le type de dégâts provient principalement du plugin MythicLib
* Paramètres de la commande :
  * `{number}` : Dégâts infligés aux cibles (par défaut : 10)
  * `{damage_type}` : Type de dégâts infligés (par défaut : PHYSICAL)
    * Exemple : MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}` : true/false, indique si la cible subit un recul (par défaut : false)
  * `{element}` : Précise de quel type d'élément est l'attaque (par défaut : FIRE)
    * Référence : [Liste des éléments de MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}` : true/false, indique si le `CRITICAL_STRIKE_POWER` de l'attaquant est ajouté ou non à l'équation des dégâts (par défaut : false)
    * Équation : `number * (number * (total critical_strike_power/100))`
* Exemple :

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Info : Cible les entités dans un rayon précis et leur fait exécuter des commandes
  * Entités disponibles -> [Liste des LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Paramètres de la commande :
  * `{distance}` : Jusqu'à quelle distance (rayon) la commande sélectionnera les entités
  * `{displayMsgIfNoEntity}` : (true ou false) Pour notifier l'utilisateur de l'item si la commande n'a réussi à cibler aucun mob.
    * **Mettez false pour masquer le message**
  * `{throughBlocks}` : Affecte ou non les mobs qui se trouvent derrière des blocs
  * `{safeDistance}` : Si la distance entre la cible et le lanceur est inférieure ou égale à la valeur de safeDistance, la cible ne sera pas affectée.
  * `{offsetYaw}` : La direction de yaw que vous voulez donner à votre décalage (indépendante de la valeur de yaw de l'origine)
  * `{offsetPitch}` : La direction de pitch que vous voulez donner à votre décalage (indépendante de la valeur de yaw de l'origine)
  * `{offsetDistance}` : Après le calcul de offsetYaw et offsetPitch, cette valeur permet de déplacer la position/le point central de la commande AROUND par rapport à la position xyz de l'origine.
  * `{limit}` : Le nombre de cibles qui peuvent être affectées
  * `{sort}` : Utile pour l'option limit.
    * NEAREST : Sélectionne les entités les plus proches de l'origine.
    * RANDOM : Sélectionne aléatoirement une entité dans la portée de la commande.
  * `{regionCheck}` : true/false. Si true, la commande AROUND vérifie si la cible se trouve en zone sauvage ou dans le claim du lanceur (dans le contexte du plugin GriefPrevention) (sera bientôt mise à jour pour être vérifiée avec d'autres plugins de claim)
  * `{nonliving}` : true/false. Si true, elle ciblera aussi d'autres entités comme les flèches et les armor stands. Les bugs éventuels qui surviennent en exécutant des commandes d'entité avec cet argument activé seront très probablement ignorés en raison de l'élargissement du périmètre.
  * Vous pouvez mettre des entités en BLACKLIST ou en WHITELIST en ajoutant l'une de celles-ci n'importe où dans la commande :
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Vous pouvez ajouter **plusieurs commandes** ! Utilisez le séparateur `<+>`

Exemple : `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Placeholders :** Les placeholders sont les mêmes que les [Entity Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), mais vous devez remplacer « player » par « around\_target »

Exemple : %around\_target%, %around\_target\_uuid%
:::

:::info
**Nombre de cibles :** `%around_target_count%` donne le nombre d'entités sélectionnées par la commande. C'est le même pour chaque cible, et il compte les cibles conservées après `distance`, `safeDistance`, `throughBlocks`, `regionCheck` et la `WHITELIST(...)` / `BLACKLIST(...)` et `limit`. Les `CONDITIONS(...)` vérifiées sur chaque cible ne sont pas prises en compte. Il accepte le raccourci `+N` / `-N` : `%around_target_count%-1`.

Exemple : `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
:::

* Exemples :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Pour utiliser les NBT d'entité dans le champ WHITELIST/BLACKLIST, vous devez installer le plugin [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Il prend en charge les [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), vous pouvez donc ajouter par exemple quelque chose comme : `ZOMBIE{IsBaby:1}` 

Exemples :

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Vous pouvez imbriquer MOB\_AROUND avec les commandes : MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Dans ce cas, le séparateur et les placeholders évoluent selon le niveau d'imbrication.\

séparateur de la commande de base : `<+>`

première commande imbriquée : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder de base : %around\_target%

première commande imbriquée : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Info : Cible le mob le plus proche du joueur/de la cible.
* Paramètres de la commande :
    * `{max accepted distance}` :  Distance maximale acceptée à laquelle l'« entité » peut se trouver.
    * `{command(s)}` : Les commandes qui seront exécutées

:::tip
Vous pouvez ajouter **plusieurs commandes** ! Utilisez le séparateur `<+>`

Exemple : `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders :** Les placeholders sont les mêmes que les [Entity Placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders), mais vous devez remplacer « player » par « around\_target »

Exemple : %around\_target%, %around\_target\_uuid%
:::

* Exemple :

Inflige des dégâts au joueur le plus proche

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Vous pouvez imbriquer MOB\_NEAREST avec les commandes : MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Dans ce cas, le séparateur et les placeholders évoluent selon le niveau d'imbrication.\

séparateur de la commande de base : `<+>`

première commande imbriquée : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder de base : %around\_target%

première commande imbriquée : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Info : Cible le joueur le plus proche du joueur/de la cible.
* Paramètres de la commande :
    * `{max accepted distance}` : Distance maximale acceptée à laquelle la « cible » peut se trouver.
    * `{command}` : La commande qui sera exécutée

:::tip
Vous pouvez ajouter **plusieurs commandes** ! Utilisez le séparateur `<+>`

Exemple : `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders :** Les placeholders sont les mêmes que les [Player Placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders), mais vous devez remplacer « player » par « around\_target »

Exemple : %around\_target%, %around\_target\_uuid%
:::

* Exemple :

Inflige des dégâts au joueur le plus proche

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Vous pouvez imbriquer NEAREST avec les commandes : AROUND, IF, NEAREST, ALL\_PLAYERS

Dans ce cas, le séparateur et les placeholders évoluent selon le niveau d'imbrication.\

séparateur de la commande de base : `<+>`

première commande imbriquée : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder de base : %around\_target%

première commande imbriquée : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Info : Envoie un message aux joueurs OP en ligne et à la console
* Paramètre de la commande :
  * `{text}` : Texte à envoyer
* Exemple :

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info : Fait apparaître des particules à l'emplacement du joueur/de la cible. [Liste des particules](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Paramètres de la commande :
  * `{type}` : Le type de particule (EN MAJUSCULES)
  * `{quantity}` : Le nombre de particules qui apparaîtront
  * `{offset}` : Le rayon de la zone dans laquelle les particules peuvent apparaître à l'emplacement du joueur/de la cible
  * `{speed}` : La vitesse ou la taille des particules
* Exemple :

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Info : Vous donne un montant précis de PV
* Paramètre de la commande :
  * `{amount}` : Le montant de PV que vous voulez gagner
   * Elle accepte les valeurs négatives si vous voulez infliger des « dégâts réels ». 
* Exemple :

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Info : Vous éteint si vous êtes en train de brûler
* Aucun paramètre de commande
* Exemple :

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Info : Retire l'effet de lueur d'une couleur précise au joueur | à la cible.
* Paramètre de la commande :
 * `[color]` : (Optionnel) (par défaut = WHITE) La couleur à retirer. [Référence des couleurs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Exemple :

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Info : Ajoute l'effet de lueur d'une couleur précise au joueur | à la cible.
* Paramètre de la commande :
 * `[color]` : (Optionnel) (par défaut = WHITE) La couleur à retirer. [Référence des couleurs](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Exemple :

```yaml
- SET_GLOW BLACK
```

:::info
Compatible avec le plugin TAB en utilisant -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Info : Définit votre santé à un montant précis
* Paramètre de la commande :
  * `{amount}` : Le montant de santé à définir
* Exemple :

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Info : Force le joueur à regarder dans une certaine position de pitch (-90/90 degrés, direction haut-bas)
* Paramètres de la commande :
  * `{pitch_number}` : Le nombre que vous voulez saisir. Les placeholders fonctionnent aussi
  * `{keepVelocity}` : Permet de conserver la vélocité du joueur
* Exemple :

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Info : Force le joueur à regarder dans une certaine position de yaw (360 degrés, direction gauche-droite)
* Paramètres de la commande :
  * `{yaw_number}` : Le nombre que vous voulez saisir. Les placeholders fonctionnent aussi
  * `{keepVelocity}` : Permet de conserver la vélocité du joueur
* Exemple :

```yaml
- SET_YAW 10 false
```

### SPIN

* Info : Fait tourner la cible
* Paramètres de la commande :
  * `{duration ticks}` : La durée de la rotation
  * `{velocity}` : La vitesse de la rotation
* Exemple :

```yaml
- SPIN 20 1
```

:::info
Q : Comment immobiliser des cibles/joueurs/mobs ?

R : exécutez **`SPIN {duration} 0`** par exemple
:::

### STEAL

* Info : Vole un item dans l'inventaire de la cible
* Paramètres de la commande :
  * `{slot}` : -1 pour la main principale. Consultez la référence des emplacements ci-dessous.
  * `[remove item]` : (Optionnel) (par défaut = true)
* Exemple :

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Info : Fait tomber un éclair sans dégâts sur celui qui exécute la commande
* Aucun paramètre de commande 
* Exemple :

```yaml
- STRIKELIGHTNING
```

:::info
Ce n'est pas la même chose que la commande smite d'Essentials. Si vous voulez foudroyer vos cibles, placez-la dans les commandes de cible ou les commandes d'entité avec les activateurs appropriés comme `PLAYER_CLICK_ON_PLAYER` par exemple.
:::

### STUN ENABLE/DISABLE

* Info : Active ou désactive l'étourdissement (stun) pour le joueur (il vous allonge et vous empêche de bouger la caméra)
* Commandes :
  * STUN\_ENABLE
  * STUN\_DISABLE
* Exemple :

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Info : Téléporte le joueur/l'entité à l'emplacement
* Paramètres de la commande :
  * `{world}` : Le monde de l'emplacement de téléportation
  * `{x}` : La coordonnée x de l'emplacement de téléportation.
  * `{y}` : La coordonnée y de l'emplacement de téléportation.
  * `{z}` : La coordonnée z de l'emplacement de téléportation.
  * `[pitch]` : (Optionnel) (par défaut = conserve le pitch du joueur) pitch de l'emplacement de téléportation
  * `[yaw]` : (Optionnel) (par défaut = conserve le yaw du joueur) yaw de l'emplacement de téléportation
  * `[keepVelocity]` : (Optionnel) (par défaut = true) Permet de ne pas arrêter la vélocité du joueur.
* Exemple :

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Info : Vous téléporte sur votre curseur
* Paramètres de la commande :
  * `{range}` : Jusqu'à quelle distance vous voulez vous téléporter
  * `{acceptAir}` : Pour pouvoir vous téléporter même dans les airs, vous devez le mettre à true
* Exemple :

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Info : Transfère un item dans l'inventaire
* Paramètres de la commande :
  * `{slot of launcher}` : Emplacement de l'item qui va être déplacé
  * `{slot of receiver}` : Emplacement où l'item arrivera
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Exemple :

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Info : Vous téléporte sur votre curseur sans tenir compte du fait que vous pouvez finir dans des endroits impossibles
* Paramètre de la commande :
  * `[maxRange]` : (Optionnel) (par défaut = 200) Jusqu'à quelle distance vous voulez vous téléporter
* Exemple :

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Info : Téléporte vers un monde au même emplacement
* Paramètre de la commande :
 * `{world}` : Le nom du monde vers lequel vous voulez téléporter le joueur/la cible.
* Exemple :

```yaml
- WORLD_TELEPORT spawn_end
```

## Commandes d'animation

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
