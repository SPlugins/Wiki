---
description: >-
  Découvrez les options générales d'un activateur ExecutableItems : cooldown,
  cancelEvent, silenceOutput, variables et prérequis (required).
source_hash: a103e5315ef03316
translated_at: '2026-11-13T17:21:50.891Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Nom d'affichage de l'activateur

* Info : valeur de type chaîne de caractères correspondant au nom d'affichage de l'activateur. Elle ne sert pas à grand-chose : elle permet surtout au développeur de distinguer un activateur d'un autre. Elle apparaît aussi dans le message par défaut « timeLeft » du fichier locale.yml.
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Modification de l'usage de l'activateur <CustomTag type="premium" />

* Info : fonctionnalité très importante, la valeur d'usage de l'item sera modifiée par cette valeur entière. Autrement dit, si cette valeur est positive, l'usage augmente, et si elle est négative, l'usage diminue.
* Exemple : (augmente la valeur d'usage de 1 à chaque déclenchement de cet activateur)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Modification des variables

* Info : liste de modifications de variables à appliquer aux variables de votre item. C'est utile, par exemple, pour augmenter la valeur d'une variable, pour remplacer l'ancienne valeur d'une variable par une autre, etc.
  * `variableName` : nom de la variable ciblée par la variableModification
  * `type` : type de variableModification que vous utilisez
    * SET : remplace l'ancienne valeur de la variable par la valeur de modification.
    * ADD : applique un calcul mathématique à la valeur actuelle de la variable en utilisant la valeur de modification. La variable doit être de type NUMBER. Si la valeur de modification est positive, la valeur augmente, et si elle est négative, elle diminue.
    * LIST\_ADD : appliqué à une variable de type LIST, ajoute la valeur de modification à la liste de la variable.
    * LIST\_CLEAR : appliqué à une variable de type LIST, vide la liste de la variable.
    * LIST\_REMOVE : appliqué à une variable de type LIST, retire la valeur de modification de la liste de la variable.
  * `modification` : valeur de la modification. Elle est appliquée à la variable selon le type de modification.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Faites attention lorsque vous utilisez des placeholders ici ! Ce n'est pas un problème en soi, assurez-vous simplement que le résultat renvoyé est un NUMBER, sinon vous devrez utiliser les fonctionnalités STRING. Par exemple, mettons à jour une variableModification avec une autre variable dont nous savons qu'elle renvoie un NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info : valeur booléenne qui indique si l'événement lié à l'activateur sera annulé ou non.
  * Cela peut être difficile à comprendre, c'est je pense l'une des choses que la plupart des gens ne saisissent pas. Pour l'expliquer, il faut savoir que chaque ACTIVATOR est lié à un événement Minecraft : cet événement se produit, puis l'ACTIVATOR est déclenché. Si nous activons cancelEvent, qui est une fonctionnalité de l'activateur, l'événement se produit, puis presque au même moment l'activateur se déclenche et annule l'événement. L'activateur continue donc d'exécuter toutes ses fonctionnalités activées, mais l'événement n'a pas lieu, puisqu'il est annulé. Par exemple :
    * Si l'activateur est PLAYER\_HIT\_PLAYER et que nous activons cancelEvent, le joueur ne pourra pas frapper un autre joueur, car tous les coups sont annulés/ignorés.
    * Si l'activateur est PLAYER\_BLOCK\_BREAK et que nous activons cancelEvent, le joueur ne pourra pas casser de blocs, car l'événement est annulé/ignoré.
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info : valeur booléenne qui, lorsqu'elle est activée, empêche l'activateur de s'exécuter si un autre plugin a déjà annulé l'événement qui le déclenche.
  * C'est utile lorsque vous avez des plugins comme WorldGuard qui annulent les événements de dégâts (par exemple dans les zones sans PvP), ou d'autres ExecutableItems qui annulent les événements de dégâts (par exemple des bottes avec PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Sans cette fonctionnalité, des activateurs comme PLAYER\_BEFORE\_DEATH se déclencheraient quand même alors que les dégâts ont été annulés, car ils réagissent au calcul brut des dégâts et non au résultat final.
  * Un cas d'usage courant est un item Totem of Undying personnalisé utilisant PLAYER\_BEFORE\_DEATH. Sans cette fonctionnalité activée, le totem s'activerait et serait consommé même lorsque le joueur se trouve dans une zone protégée par WorldGuard où les dégâts sont annulés, ce qui gaspillerait l'item. Activer cette fonctionnalité garantit que le totem ne s'active que lors de véritables dégâts mortels.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info : valeur booléenne qui fait que toutes les commandes exécutées depuis les fonctionnalités de commandes, telles que (playerCommands, blockCommands, entityCommands et targetCommands), n'auront pas de sortie dans la **console**.
  * Par exemple, la commande vanilla de Minecraft effect give \[...] produit normalement une sortie dans la console au format : « Applied effect strength to \<playerName> ». Pour désactiver cette sortie, vous pouvez activer cette fonctionnalité.
* Exemple : 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Il est important de comprendre que cette fonctionnalité est conçue pour désactiver la sortie des commandes vanilla. Si vous utilisez la commande d'un autre plugin qui produit une sortie dans la console, ce n'est pas à nous de la corriger : l'autre plugin doit vous fournir un moyen de masquer ces messages. Cela dit, comme nous sommes sympathiques, il existe un moyen de personnaliser les messages à masquer, afin que vous puissiez avoir les messages par défaut réduits au silence par silenceOutput + les messages personnalisés que vous souhaitez ajouter. Ce processus est géré par le fichier de configuration de Score, plus d'informations ici et comment le faire ici : [General config](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Cooldown du joueur

* Info : les options de cooldown correspondent au cooldown appliqué, pour cet activateur, au joueur qui l'a déclenché.
* Si l'activateur est PLAYER\_RIGHT\_CLICK, qu'il contient des commandes \[] et que le cooldown est de 30 secondes, le joueur qui déclenche cet activateur devra attendre 30 secondes avant de pouvoir le déclencher à nouveau. Cela n'empêche pas un autre joueur de l'exécuter pendant ces 30 secondes, tant qu'il n'est pas lui aussi en cooldown. Cette fonctionnalité est propre à chaque joueur.
  * `cooldown` : valeur entière qui représente la durée du cooldown de cet activateur.
  * `isCooldownInTicks` : valeur booléenne qui définit la durée du cooldown en ticks (20 ticks = 1 seconde)
  * `cooldownMsg` : valeur de type chaîne de caractères affichée lorsque le joueur essaie de déclencher l'activateur alors qu'il est en cooldown
  * `displayCooldownMessage` : valeur booléenne qui autorise ou empêche l'affichage du message cooldownMsg si le joueur essaie de déclencher l'activateur alors qu'il est en cooldown.
    * Placeholders utilisables :
      * %time% -> le cooldown total en secondes
      * %time\_H% -> la partie heures du cooldown
      * %time\_M% -> la partie minutes du cooldown
      * %time\_S% -> la partie secondes du cooldown
  * `cancelEventIfInCooldown` : valeur booléenne qui annule l'événement de l'activateur si le joueur est en cooldown. Cela signifie que, si l'activateur est PLAYER\_HIT\_ENTITY, tous les événements PLAYER\_HIT\_ENTITY du joueur seront annulés et donc ignorés tant qu'il est en cooldown, ce qui l'empêche d'attaquer des entités (rappel : cet activateur cible toutes les entités sauf les joueurs)
  * `pauseWhenOffline` : valeur booléenne qui met le cooldown en pause si le joueur est hors ligne. Pour mieux comprendre : si elle vaut false, le temps de cooldown ne s'arrête pas, le joueur peut donc quitter le serveur, attendre la fin du cooldown et se reconnecter, et il pourra à nouveau déclencher l'activateur. Mais si cette fonctionnalité est activée et qu'il a quitté le serveur pendant son cooldown, à sa reconnexion il aura le même temps de cooldown restant que lorsqu'il est parti.
  * `pausePlaceholdersConditions` : similaire à pauseWhenOffline, mais la pause ne s'applique que selon certaines placeholdersConditions. Un exemple d'utilisation serait de mettre le cooldown en pause si le joueur a le rang VIP, de sorte que le rang VIP ait accès à cette fonctionnalité.
  * `enableVisualCooldown` : active un cooldown visuel pour l'item.
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Cooldown global

* Info : c'est le même principe que le cooldown, mais au lieu d'être appliqué au joueur, il s'agit d'un cooldown global appliqué à tous les joueurs. Autrement dit, si quelqu'un déclenche l'activateur et qu'il a 30 secondes de cooldown global, personne ne pourra l'utiliser avant la fin de ces 30 secondes. Il dispose des mêmes fonctionnalités que le cooldown.
  * `cooldown` : valeur entière qui représente la durée du cooldown de cet activateur.
  * `isCooldownInTicks` : valeur booléenne qui définit la durée du cooldown en ticks (20 ticks = 1 seconde)
  * `cooldownMsg` : valeur de type chaîne de caractères affichée lorsqu'un joueur essaie de déclencher cet activateur alors qu'il est en cooldown
  * `displayCooldownMessage` : valeur booléenne qui autorise ou empêche l'affichage du message cooldownMsg si le joueur essaie de déclencher l'activateur alors qu'il est en cooldown.
    * Placeholders utilisables :
      * %time% -> le cooldown total en secondes
      * %time\_H% -> la partie heures du cooldown
      * %time\_M% -> la partie minutes du cooldown
      * %time\_S% -> la partie secondes du cooldown
  * `cancelEventIfInCooldown` : valeur booléenne qui annule l'événement de l'activateur si le joueur est en cooldown. Cela signifie que, si l'activateur est PLAYER\_HIT\_ENTITY, tous les événements PLAYER\_HIT\_ENTITY du joueur seront annulés et donc ignorés tant qu'il est en cooldown, ce qui l'empêche d'attaquer des entités (rappel : cet activateur cible toutes les entités sauf les joueurs)
  * `enableVisualCooldown` : active un cooldown visuel pour l'item.
* Exemple :

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Fonctionnalités requises <CustomTag type="premium" />

Cette section sert à configurer les fonctionnalités liées aux prérequis nécessaires pour pouvoir déclencher l'activateur. Cela signifie que, si l'événement se produit, l'activateur ne s'exécutera que si le joueur remplit cette configuration requise. Les items seront consommés au passage.

* Si vous ne souhaitez pas que les items soient consommés, n'utilisez pas la fonctionnalité « required » mais utilisez des conditions, qui sont de simples conditions et ne consomment rien.

### requiredExecutableItems <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger un ou plusieurs ExecutableItems. Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera.
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `executableItem` : ID de l'ExecutableItem nécessaire comme prérequis
  * `amount` : entier correspondant à la quantité d'items nécessaires comme prérequis.
  * `usageConditions` : condition facultative de type chaîne de caractères, au format `(==, !=, >, <, >=, <=){number}`, portant sur l'usage de l'ExecutableItem.
    * Cela signifie que, si la condition est >=5, l'ExecutableItem choisi doit se trouver dans l'inventaire du joueur (puisque c'est un prérequis), mais il doit aussi avoir un usage supérieur ou égal à 5.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger un ou plusieurs items vanilla. Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera.
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `material` : MATERIAL vanilla nécessaire comme prérequis.
  * `amount` : entier correspondant à la quantité d'items nécessaires comme prérequis.
  * `notExecutableItem` : valeur booléenne qui permet de rendre le prérequis satisfaisable ou non par un ExecutableItem.
    * Cela signifie que, si le prérequis est STONE et que cette fonctionnalité n'est pas activée, le prérequis sera satisfait par des STONE vanilla et par des ExecutableItems ayant pour matériau STONE, qui seront donc consommés. Si vous ne souhaitez pas que cela se produise, activez cette fonctionnalité.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info : cette fonctionnalité nécessite le plugin « Vault ». Elle permet à l'activateur d'exiger de l'argent de Vault. Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera.
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `requiredMoney` : valeur décimale (float) correspondant à la somme d'argent nécessaire comme prérequis.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger des niveaux d'expérience vanilla. Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera. Ne confondez pas les niveaux d'expérience avec l'expérience, plus d'informations ici : [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `requiredLevel` : valeur entière correspondant au nombre de niveaux d'expérience vanilla de Minecraft nécessaires comme prérequis.
* Exemple :

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger de l'expérience vanilla de Minecraft. Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera. Ne confondez pas l'expérience avec les niveaux d'expérience, ce sont deux choses différentes, plus d'informations sur [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `requiredExperience` : valeur entière correspondant à la quantité d'expérience nécessaire comme prérequis.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger du mana provenant de [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) et [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera.
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `requiredMana` : valeur entière correspondant à la quantité de mana nécessaire comme prérequis.
* Exemple :

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatible avec AureliumSkills, MMOCore et AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info : cette fonctionnalité permet à l'activateur d'exiger de la magie provenant de [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). Si le joueur remplit ce prérequis, celui-ci sera consommé et l'activateur s'exécutera.
  * `cancelEventIfError` : valeur booléenne qui indique si l'événement sera annulé lorsque le joueur ne remplit pas le prérequis.
    * Cela signifie, par exemple, qu'un événement PLAYER\_HIT\_ENTITY se produit mais que le joueur n'a pas les prérequis pour déclencher l'activateur. Si cette fonctionnalité est activée, l'événement PLAYER\_HIT\_ENTITY sera annulé : même si le joueur clique/frappe l'entité, celle-ci ne subit pas de dégâts, car en réalité l'événement n'a pas lieu puisqu'il est annulé.
  * `errorMessage` : message de type chaîne de caractères envoyé au joueur s'il ne remplit pas le prérequis.
  * `magicID` : l'ID de la magie dans EcoSkills.
  * `amount` : quantité de magie du magicID nécessaire comme prérequis.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
