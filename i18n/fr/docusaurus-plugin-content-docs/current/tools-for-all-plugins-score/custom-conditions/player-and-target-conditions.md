---
description: >-
  Découvrez les conditions de joueur et de cible d'ExecutableItems : syntaxe,
  exemples et paramètres pour contrôler quand un activateur se déclenche.
source_hash: 5b9669d43610ab52
translated_at: '2026-11-13T17:18:44.696Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Conditions du joueur et de la cible

## Paramètres des conditions
Toutes les conditions ont le même format, vous avez :
* `{theCondition}`
* `{theCondition}Msg` : Le message à envoyer si la condition n'est pas valide (sans lui, un message d'erreur par défaut est envoyé, sauf pour l'activateur LOOP d'ExecutableItems)
* `{theCondition}Cancel` : Indique si l'événement doit être annulé ou non lorsque la condition n'est pas valide
* `{theCondition}Cmds` : La ou les commandes à exécuter si la condition n'est pas valide
* Exemple :

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Pour les conditions numériques, vous pouvez attribuer 2 conditions en même temps.
Exemple : 
« Je veux créer une condition qui ne s'active que si la valeur est supérieure à 50 mais inférieure à 250 »
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
Vous voulez ajouter des conditions de joueur ?

Dans la partie de l'activateur, ajoutez donc playerConditions.

Et pour les conditions de la cible, c'est évidemment targetConditions.
:::

:::info
**INFO GIFS :** L'activateur utilisé sur les GIFS pour montrer le fonctionnement de chaque condition est l'activateur LOOP, c'est pourquoi le message d'erreur de la condition apparaît plusieurs fois.
:::

### ifSneaking - Not

* Description : Vérifie si le joueur est accroupi
* Exemple :

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur est (n'est pas) accroupi, l'activateur s'activera.
  * Si le joueur vole et descend en appuyant sur le bouton pour s'accroupir, l'activateur s'activera, pour ifSneaking.
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
N'activez pas ifNotSneaking si la condition ifSneaking est activée, car il n'est pas logique d'avoir les deux activées
:::

### ifSprinting - Not

* Description : Vérifie si le joueur sprinte
* Exemple :

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur sprinte (ne sprinte pas), l'activateur s'activera.
* Requis : NON (par défaut : false)

### ifFlying - Not

* Description : Vérifie si le joueur vole
* Exemple :

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur active le vol en double-cliquant sur le bouton de saut et vole (ne vole pas), l'activateur s'activera.
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Description : Vérifie si le joueur tient un bouclier et fait un clic droit avec (il bloque)
* Exemple :

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur bloque (ne bloque pas) avec un bouclier, l'activateur s'activera
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Description : Vérifie si le joueur plane
* Exemple :

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur plane (ne plane pas) en plein air avec des élytres, l'activateur s'activera.
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Description : Vérifie si le joueur nage (mise à jour Aquatic 1.13)
* Exemple :

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur saute dans l'eau et se met à nager en position de nage libre, l'activateur s'activera.
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Description : Vérifie si le joueur est étourdi
* Exemple :

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Vous pouvez étourdir un joueur en exécutant la commande de joueur personnalisée **STUN\_ENABLE** 
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Requis : NON (par défaut : false)

### ifIsOnFire - Not

* Description : Vérifie si le joueur est en feu
* Exemple :

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur est (n'est pas) en feu après être tombé dans de la lave ou avoir marché sur du feu, l'activateur s'activera
* Requis : NON (par défaut : false)

### ifIsInTheAir - Not

* Description : Vérifie si le joueur est dans les airs.
* Exemple :

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur a (n'a pas) de blocs sous ses pieds, l'activateur s'activera.
* Requis : NON (par défaut : false)

![Le bloc sous vos pieds sera vérifié. Les dalles sont également correctement vérifiées.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Description : Vérifie si le joueur a une ligne de vue vers une entité vivante (dans un rayon de 50 blocs).
* Exemple :

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Exemples de situations :
  * Si le joueur regarde directement un mob ou un autre joueur situé à moins de 50 blocs, l'activateur s'activera.
  * Utile pour créer des items qui ne fonctionnent que lorsqu'on vise une entité.
* Requis : NON (par défaut : false)

:::info
Cette condition nécessite un serveur en version **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **PLUGINS PRIS EN CHARGE :**
  * Towny
* Description : Vérifie si le joueur se trouve dans sa ville.
* Exemple :

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Requis : NON (par défaut : false)

### ifPlayerMustBeOnHisClaim

* **PLUGINS PRIS EN CHARGE :**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Description : Vérifie si le joueur se trouve dans un claim où il a la permission.
* Exemple :

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur se trouve dans un claim dont il est propriétaire, l'activateur s'activera.
  * Si le joueur se trouve dans un claim dont il n'est pas propriétaire mais où il a la permission, l'activateur s'activera.
* Requis : NON (par défaut : false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **PLUGINS PRIS EN CHARGE :**
  * GriefPrevention (renvoie valide si le joueur se trouve dans un claim public de GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Description : Vérifie si le joueur se trouve dans un claim où il a la permission ou dans la nature.
* Exemple :

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur se trouve dans un claim dont il est propriétaire, l'activateur s'activera.
  * Si le joueur se trouve dans un claim dont il n'est pas propriétaire mais où il a la permission, l'activateur s'activera.
  * Si le joueur se trouve dans la nature, l'activateur s'activera.
* Requis : NON (par défaut : false)

### ifPlayerMustBeOnHisIsland

* Description : Vérifie si le joueur se trouve sur son île.
* **Plugins compatibles :**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Exemple :

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Exemples de situations :
  * Si le joueur se trouve sur son île, l'activateur s'activera.
* Requis : NON (par défaut : false)

### ifPlayerMustBeOnHisPlot

* **PLUGINS PRIS EN CHARGE :**
  * PlotSquared
* Description : Vérifie si le joueur se trouve sur une parcelle où il a la permission.
* Exemple :

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Requis : NON (par défaut : false)

### ifCursorDistance

* Description : Vérifie si la direction dans laquelle le joueur regarde est dégagée ou bloquée
* Exemple :

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Avec `">5"`, tant qu'il y a de l'air au-delà de 5 blocs devant vous, l'activateur s'activera
  * Avec `"<5"`, s'il y a des blocs d'air à 5 blocs devant vous, l'activateur ne s'activera pas
* Requis : NON

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Description : Vérifie si le joueur se trouve à un endroit avec le bon niveau de luminosité
* Exemple :

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<5`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est inférieur à 5
  * Si la valeur est `<=5`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est inférieur ou égal à 5.
  * Si la valeur est `==13`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est de 13.
  * Si la valeur est `>5`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est supérieur à 5.
  * Si la valeur est `>=5`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est supérieur ou égal à 5.
* Requis : NON
* Plus d'infos : Vous pouvez modifier le message d'erreur en ajoutant ceci dans le fichier : `ifLightLevelMsg: "&4&lError you need...."` ou en jeu.

​Si la valeur est `==13`, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est de 13. 

![Si la valeur est ==13, l'activateur ne s'activera que si le niveau de luminosité à la position du joueur est de 13. 
Le message dans le chat exécute un SENDMESSAGE %player\_light\_level% pour indiquer le niveau de luminosité à ma position](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Description : Vérifie si le joueur possède la quantité indiquée de points d'expérience.
* Exemple :

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<120`, l'activateur ne s'activera que si les points d'expérience du joueur sont inférieurs à 120
  * Si la valeur est `<=96`, l'activateur ne s'activera que si les points d'expérience du joueur sont inférieurs ou égaux à 96.
  * Si la valeur est `==13`, l'activateur ne s'activera que si les points d'expérience du joueur sont de 13.
  * Si la valeur est `>696`, l'activateur ne s'activera que si les points d'expérience du joueur sont supérieurs à 696.
  * Si la valeur est `>=45`, l'activateur ne s'activera que si les points d'expérience du joueur sont supérieurs ou égaux à 45.
* Requis : NON

### ifPlayerLevel

* Description : Vérifie si le joueur possède la quantité indiquée de niveaux d'expérience.
* Exemple :

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<700`, l'activateur ne s'activera que si les points d'expérience du joueur sont inférieurs à 700
  * Si la valeur est `<=1296`, l'activateur ne s'activera que si les points d'expérience du joueur sont inférieurs ou égaux à 1296.
  * Si la valeur est `==153`, l'activateur ne s'activera que si les points d'expérience du joueur sont de 5.
  * Si la valeur est `>420`, l'activateur ne s'activera que si les points d'expérience du joueur sont supérieurs à 420.
  * Si la valeur est `>=99`, l'activateur ne s'activera que si les points d'expérience du joueur sont supérieurs ou égaux à 99.
* Requis : NON

### ifPlayerFoodLevel

* Description : Vérifie si le joueur possède la quantité indiquée de nourriture
* Exemple :

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<10`, l'activateur ne s'activera que si la nourriture du joueur est inférieure à 10
  * Si la valeur est `<=10`, l'activateur ne s'activera que si la nourriture du joueur est inférieure ou égale à 10.
  * Si la valeur est `==10`, l'activateur ne s'activera que si la nourriture du joueur est de 10.
  * Si la valeur est `>10`, l'activateur ne s'activera que si la nourriture du joueur est supérieure à 10.
  * Si la valeur est `>=10`, l'activateur ne s'activera que si la nourriture du joueur est supérieure ou égale à 10.
* Requis : NON

### ifPlayerHealth

* Description : Vérifie si le joueur possède la quantité indiquée de santé
* Exemple :

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<10`, l'activateur ne s'activera que si la santé du joueur est inférieure à 10
  * Si la valeur est `<=10`, l'activateur ne s'activera que si la santé du joueur est inférieure ou égale à 10.
  * Si la valeur est `==10`, l'activateur ne s'activera que si la santé du joueur est de 20.
  * Si la valeur est `>10`, l'activateur ne s'activera que si la santé du joueur est supérieure à 10.
  * Si la valeur est `>=10`, l'activateur ne s'activera que si la santé du joueur est supérieure ou égale à 10.
* Requis : NON

![Démonstration de la condition de santé](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Si la valeur est `<=10`, l'activateur ne s'activera que si la santé du joueur est inférieure ou égale à 10._

### ifPlayerSpeed

* Description : Vérifie la magnitude du vecteur vitesse du joueur (sa vitesse de déplacement).
* Exemple :

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Exemples de situations :
  * Si la valeur est `>=0.1`, l'activateur ne s'activera que si le joueur se déplace.
  * Si la valeur est `>=0.3`, l'activateur ne s'activera que si le joueur sprinte ou se déplace rapidement.
  * Si la valeur est `==0`, l'activateur ne s'activera que si le joueur est immobile.
* Requis : NON

### ifPosX

* Description : Vérifie si le joueur se trouve au niveau X indiqué.
* Exemple :

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<700`, l'activateur ne s'activera que si la valeur de la position X du joueur est inférieure à 700
  * Si la valeur est `<=1296`, l'activateur ne s'activera que si la valeur de la position X du joueur est inférieure ou égale à 1296.
  * Si la valeur est `==153`, l'activateur ne s'activera que si la valeur de la position X du joueur est de 5.
  * Si la valeur est `>420`, l'activateur ne s'activera que si la valeur de la position X du joueur est supérieure à 420.
  * Si la valeur est `>=99`, l'activateur ne s'activera que si la valeur de la position X du joueur est supérieure ou égale à 99.
* Requis : NON

### ifPosY

* Description : Vérifie si le joueur se trouve au niveau Y indiqué.
* Exemple :

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<700`, l'activateur ne s'activera que si la valeur de la position Y du joueur est inférieure à 700
  * Si la valeur est `<=1296`, l'activateur ne s'activera que si la valeur de la position Y du joueur est inférieure ou égale à 1296.
  * Si la valeur est `==153`, l'activateur ne s'activera que si la valeur de la position Y du joueur est de 5.
  * Si la valeur est `>420`, l'activateur ne s'activera que si la valeur de la position Y du joueur est supérieure à 420.
  * Si la valeur est `>=99`, l'activateur ne s'activera que si la valeur de la position Y du joueur est supérieure ou égale à 99.
* Requis : NON

### ifPosZ

* Description : Vérifie si le joueur se trouve au niveau Z indiqué.
* Exemple :

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si la valeur est `<700`, l'activateur ne s'activera que si la valeur de la position Z du joueur est inférieure à 700
  * Si la valeur est `<=1296`, l'activateur ne s'activera que si la valeur de la position Z du joueur est inférieure ou égale à 1296.
  * Si la valeur est `==153`, l'activateur ne s'activera que si la valeur de la position Z du joueur est de 5.
  * Si la valeur est `>420`, l'activateur ne s'activera que si la valeur de la position Z du joueur est supérieure à 420.
  * Si la valeur est `>=99`, l'activateur ne s'activera que si la valeur de la position Z du joueur est supérieure ou égale à 99.
* Requis : NON

### ifNearbyEntityCount

* Description : Vérifie le nombre d'entités dans un rayon de 10 blocs autour du joueur.
* Exemple :

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Exemples de situations :
  * Si la valeur est `>=3`, l'activateur ne s'activera que s'il y a au moins 3 entités près du joueur.
  * Si la valeur est `==0`, l'activateur ne s'activera que si le joueur est seul, sans aucune entité à proximité.
  * Compte tous les types d'entités (mobs, joueurs, items au sol, etc.).
* Requis : NON

### ifNearbyPlayerCount

* Description : Vérifie le nombre de joueurs dans un rayon de 10 blocs autour du joueur.
* Exemple :

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Exemples de situations :
  * Si la valeur est `>=1`, l'activateur ne s'activera que s'il y a au moins 1 autre joueur à proximité.
  * Si la valeur est `==0`, l'activateur ne s'activera que si aucun autre joueur ne se trouve à moins de 10 blocs.
  * Contrairement à ifNearbyEntityCount, cette condition ne compte que les joueurs, pas les mobs ni les autres entités.
* Requis : NON

### ifHasPermission - Not

* Description : Vérifie si le joueur a (n'a pas) la permission indiquée.
* Exemple :

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur a la permission `custom.jump.yes`, l'activateur s'activera. Si le joueur n'a pas cette permission, il ne s'activera pas.
  * **La condition réelle n'est pas utilisée dans ce gif afin d'afficher correctement le comportement de la condition. Lorsque vous utilisez réellement cette condition, une erreur spécifique s'affiche pour vous**
* Requis : NON

:::warning
**Pour la tester, il vaut mieux ne pas être OP, car si vous êtes OP, vous avez toutes les permissions**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Description : Vérifie si le joueur possède le tag sélectionné.
* Exemple :

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Description : Vérifie si le joueur sélectionne (ne sélectionne pas) le bloc indiqué.
* Exemple :

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur survole du sable avec son curseur, l'activateur s'activera.
* Requis : NON

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Description : Vérifie si le joueur se trouve (ne se trouve pas) dans un bloc.
* Exemple :

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur se trouve dans une COBWEB (tête ou pieds), l'activateur s'activera.
  * Tant que le joueur n'est pas à plus de 1 bloc au-dessus du bloc dans lequel il se trouve, l'activateur s'activera
* Requis : NON (par défaut : false)

Pour les spécifications des tags, reportez-vous à cette liste :

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Description : Vérifie si le joueur se tient (ne se tient pas) sur un bloc.
* Exemple :

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Exemples de situations :
  * Si le joueur a de la pierre sous ses pieds, l'activateur s'activera.
  * Tant que le joueur n'est pas à plus de 1 bloc au-dessus du bloc sur lequel il se tient, l'activateur s'activera
* Requis : NON (par défaut : false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Vous pouvez ajouter un groupe de blocs, voici les groupes :</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Pour les spécifications des tags, reportez-vous à cette liste :

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Prend en charge les blocs IA et EB
:::

### ifPlayerMounts - Not

* Description : Vérifie si le joueur monte (ne monte pas) l'« entité (les entités) sélectionnée(s) »
* Exemple :

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Description : Vérifie si le joueur se trouve (ne se trouve pas) dans le biome indiqué.
* Exemple :

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Exemples de situations :

    * Si le joueur se trouve dans le biome Birch Forest et que le biome Birch Forest figure dans la liste des mondes de la condition `ifInBiome:`, l'activateur s'activera.

[Biome](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Requis : NON

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Description : Vérifie si le joueur se trouve (ne se trouve pas) dans la région indiquée (région WorldGuard).
* Exemple :

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur se trouve dans la région « area1 » et que la région « area1 » figure dans la liste des mondes de la condition `ifInRegion:`, l'activateur s'activera.
* Requis : NON

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Description : Vérifie si le joueur se trouve (ne se trouve pas) dans le monde indiqué.
* Exemple :

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur se trouve dans le Nether et que le Nether figure dans la liste des mondes de la condition `ifInWorld:`, l'activateur s'active.
* Requis : NON

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Description : Vérifie si le joueur possède le ou les effets.
* Exemple :

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur a l'effet de vitesse avec **un amplificateur d'au moins 0**, l'activateur s'activera
* Liste de tous les effets : [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Requis : NON


### ifPlayerNotHasEffect

* Description : Vérifie si le joueur ne possède pas le ou les effets.
* Exemple :

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Description : Vérifie si le joueur peut casser le bloc ciblé. Lorsque l'activateur dispose d'un bloc (casse de bloc, pose de bloc, clic sur un bloc…), c'est ce bloc qui est vérifié ; sinon, c'est le bloc que le joueur regarde (5 blocs maximum).
* Exemple :

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Prend en charge GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones ; Residence
:::

### ifPlayerHasEffectEquals

* Description : Vérifie si le joueur possède le ou les effets. **IL DOIT AVOIR L'AMPLIFICATEUR EXACT**
* Exemple :

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Exemples de situations :
  * Si le joueur a l'effet de vitesse avec **un amplificateur de 1**, l'activateur s'activera
* Liste de tous les effets : [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Requis : NON


### ifPlayerHasExecutableItems - Not

* Description : Vérifie si le joueur possède (ne possède pas) les ExecutableItems indiqués.
* Exemple :

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* L'exemple ci-dessus fonctionne ainsi. 
  * Vous devez avoir un item ei avec l'id « test1 », « test2 » ou « test3 » dans le slot 38, l'activateur s'exécute
  * Vous devez avoir un item ei avec l'id « ddx » dans le slot 40
* Requis : NON

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Copiez correctement l'index de l'exemple : certaines personnes ont contacté le support, et aucune n'avait copié correctement le format.
:::

### ifPlayerHasItem - Not

* Description : Vérifie si le joueur possède des items précis
* Exemple :

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Exemples de situations :
  * Si le casque en diamant se trouve dans le slot 39, l'activateur s'activera
* Requis : NON
