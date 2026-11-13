---
description: >-
  Apprenez à créer un bonus de set d'armure avec ExecutableItems : activateur
  LOOP et condition ifHasExecutableItems pour détecter le set complet.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-11-13T17:14:41.744Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Bonus de set d'armure

:::tip Nouveau : les sets natifs
ExecutableItems propose désormais des [sets](/executableitems/configurations/sets-configuration) natifs : un fichier par set, plusieurs paliers (2 pièces, 4 pièces...), des effets et des attributs retirés proprement lorsqu'une pièce est enlevée, et aucun LOOP qui tourne en permanence. Utilisez-les pour vos nouveaux sets. La méthode ci-dessous fonctionne toujours.
:::

## Créons-le !

### Commençons par créer les pièces du set d'armure

* Pour cet exemple, les noms des items seront :\
  Casque = **nameofhelmet.yml**\
  Plastron = **nameofchestplate.yml**\
  Jambières = **nameofleggings.yml**\
  Bottes = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Pour les créer
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Créons maintenant l'activateur que nous voulons déclencher lorsque le set complet est porté

:::info
Dans cet exemple, nous allons créer une armure qui vous donne toujours de la force tant que vous portez le set complet. Il nous faut donc un LOOP ACTIVATOR. Vous devez aussi choisir quelle pièce de l'armure sera la « principale », celle depuis laquelle toutes les commandes seront exécutées. Ici, la pièce principale sera le **casque**.
:::

* Comme indiqué plus haut, l'activateur sera de type **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Nous voulons qu'il ne fonctionne que lorsque l'item est porté. Dans **detailedSlots**, nous allons donc le faire fonctionner uniquement lorsqu'il se trouve dans le **head slot.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* Et pour l'effet de bonus, nous utiliserons la commande d'effet vanilla :

```
minecraft:effect give %player% strength 10 0
```

### Condition du set complet

Parfait ! Nous venons de créer la « capacité » que possède le set complet, mais nous devons ajouter la **condition** qui vérifie que le set est complet !!

* Allez dans Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Ajoutez ensuite 3 conditions IfHasExecutableItem pour les 3 autres pièces de l'armure. Ici, comme j'ai choisi le casque comme pièce principale, je dois ajouter le plastron, les jambières et les bottes.

Je vais d'abord expliquer comment ajouter le plastron comme condition :

* Sur l'image ci-dessus, ajoutez une condition et vous verrez ceci
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* La première option est l'EI nécessaire. Ici, je fais défiler la liste jusqu'à trouver le plastron
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Une fois trouvé, passons à l'option suivante -> « Amount », qui sera 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* Puis le slot dans lequel nous voulons que cet ExecutableItem se trouve, ici le slot du plastron.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
N'oubliez pas de désactiver la main principale et de n'activer qu'un seul slot, celui que vous voulez.
:::

* **Et ici, nous n'allons pas utiliser la condition d'usage, n'y touchez donc pas.**
* Puis sauvegardez.

Vous devez faire la même chose pour les 2 autres pièces. Une fois terminé, nous aurons 3 conditions au total

![](https://media.ssomar.com/m/docs-img-image-249.png)

* Et c'est tout ! **Sauvegardez l'item** et testez !

![](https://media.ssomar.com/m/docs-img-image-348.png)

Ça fonctionne ! Maintenant... si vous n'avez pas l'une des pièces d'armure, la condition vous le dira..

![](https://media.ssomar.com/m/docs-img-image-384.png)

Pour la désactiver, nous devons retourner dans l'éditeur de condition et cliquer ici

![](https://media.ssomar.com/m/docs-img-image-153.png)

Puis la définir sur NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

Et voilà, sauvegardez et plus aucun message de condition n'apparaîtra.

Et voilà, c'est tout !! 😁😁😎

:::info
Si vous avez la moindre question, vous pouvez la poser sur **Discord** ^^

Méthode par Special70
:::

Exemples :


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
