---
description: >-
  Apprenez à créer un interrupteur On / Off avec deux activateurs et une
  variable pour un item ExecutableItems Premium, étape par étape.
source_hash: 739c8a7115be416e
translated_at: '2026-11-13T17:15:09.384Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Interrupteur On / Off

## Prérequis+

* ExecutableItems **Premium**

## NOTE : CRÉEZ D'ABORD 2 ACTIVATEURS.

## Premier activateur

### Créer une variable

* Une variable doit être créée afin d'avoir un identifiant indiquant si l'interrupteur est activé ou désactivé

![Cliquez sur cette icône pour ouvrir l'éditeur de variables](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Il suffit simplement de créer une variable](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Pour l'id, rien de vraiment spécifique. Pour ce guide, nous nommerons notre variable « x »](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![Peu importe que ce soit un nombre ou une chaîne de caractères](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![Pour ce tutoriel, nous utiliserons la valeur 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Créer votre item et ajouter un activateur

* Dans ce cas, ce sera un PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Commandes

* Saisissez les commandes que vous souhaitez exécuter

### Variables Modification

![Cliquez d'abord sur cette icône dans l'éditeur d'activateur](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Créez une modification de variable](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Sélectionnez la variable que nous avons créée précédemment](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Réglez le type de modification sur SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Nous allons définir une valeur autre que 0 afin que le même activateur ne puisse pas s'exécuter une 2e fois](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Placeholder Condition

* Ceci est nécessaire pour contrôler quel activateur va s'exécuter 

![Nous allons d'abord dans les conditions](https://media.ssomar.com/m/docs-img-image-419.png)

![Puis dans les conditions de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Bien sûr, nous devons créer une condition de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING est aussi une option](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Nous utiliserons le placeholder de la variable que nous avons créée. Utilisez %var\_x\_int% si vous avez utilisé PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Nous utiliserons ce comparateur](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Nous utiliserons la valeur 0 comme option « off »](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Ajouter le cooldown de l'autre item à l'item lui-même

* Par exemple, l'id de l'item EI est `onoff-demo`. Vous devez alors aller sur cette icône, puis suivre les images.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Par exemple, l'id de l'interrupteur on/off est « faker », sélectionnez donc « faker ».

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Depuis la sortie de la version 5.0, les ids des activateurs commencent à « activator0 » au lieu de « activator1 ». Quoi qu'il en soit, vous devez sélectionner le deuxième activateur, car les activateurs s'exécutent de haut en bas. 

:::info
Cette option est importante, car sans cooldown, l'item passera en force sur le 2e activateur, celui qui est censé désactiver l'activateur
:::

![Réglez le cooldown sur 1 ou 2. À vous de décider](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Il est conseillé de le mettre sur true si vous voulez que l'item puisse être spammé. Un tick suffit pour empêcher le forçage mentionné ci-dessus.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Second activateur

* Nous utiliserons à nouveau **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Commandes

* Saisissez les commandes que vous souhaitez exécuter

### Variables Modification

![Cliquez d'abord sur cette icône dans l'éditeur d'activateur](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Créez une modification de variable](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Sélectionnez la variable que nous avons créée précédemment](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Réglez le type de modification sur SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Nous allons définir une valeur autre que 1 afin que le même activateur ne puisse pas s'exécuter une 2e fois](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Placeholder Condition

* Ceci est nécessaire pour contrôler quel activateur va s'exécuter 

![Nous allons d'abord dans les conditions](https://media.ssomar.com/m/docs-img-image-419.png)

![Puis dans les conditions de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Bien sûr, nous devons créer une condition de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING est aussi une option](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Nous utiliserons le placeholder de la variable que nous avons créée. Utilisez %var\_x\_int% si vous avez utilisé PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Nous utiliserons ce comparateur](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Nous utiliserons la valeur 1 comme option « on »](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Ajouter le cooldown de l'autre item à l'item lui-même

* Par exemple, l'id de l'item EI est `onoff-demo`. Vous devez alors aller sur cette icône, puis suivre les images.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Par exemple, l'id de l'interrupteur on/off est « faker », sélectionnez donc « faker ».

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Depuis la sortie de la version 5.0, les ids des activateurs commencent à « activator0 » au lieu de « activator1 ». Quoi qu'il en soit, vous devez sélectionner le deuxième activateur, car les activateurs s'exécutent de haut en bas. 

:::info
Cette option est importante, car sans cooldown, l'item passera en force sur le 2e activateur, celui qui est censé désactiver l'activateur
:::

![Réglez le cooldown sur 1 ou 2. À vous de décider](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Il est conseillé de le mettre sur true si vous voulez que l'item puisse être spammé. Un tick suffit pour empêcher le forçage mentionné ci-dessus.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Enregistrer l'item EI

* Il devrait ressembler à ceci (nous avons ajouté des commandes pour afficher ON (activator1) et OFF (activator2) afin de vous montrer comment cela fonctionne :p

## Config de l'item

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Dernier commentaire

Si vous avez une question ou si vous trouvez que le guide n'était pas assez clair, n'hésitez pas à la poser sur Discord.\
Nous vous aiderons ! 😁😁
