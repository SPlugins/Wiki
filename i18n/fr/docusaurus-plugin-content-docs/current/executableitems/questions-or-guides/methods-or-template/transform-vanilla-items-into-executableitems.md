---
description: >-
  Apprenez à transformer des items vanilla (comme l'épée en diamant) en items
  ExecutableItems grâce à une méthode réservée à la version PREMIUM du plugin.
source_hash: b79db1c5ed1a524c
translated_at: '2026-11-13T12:03:45.236Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Transformer des items vanilla en ExecutableItems

:::info
Avant tout, sachez que cette méthode est uniquement disponible dans la VERSION PREMIUM.
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Créons-le : décidez d'abord quel item vanilla vous voulez transformer.

* Pour ce tutoriel, ce sera la **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Ensuite, nous devons créer l'item qui le remplacera**

* Pour créer un item, tapez la commande `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Changez le Material de l'item par l'item vanilla que vous allez remplacer (dans ce cas diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Créons un activateur

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Pour cet exemple, ce sera `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Réglez Detailed click sur left, pour que l'activateur ne fonctionne qu'en frappant

![](https://media.ssomar.com/m/docs-img-image-272.png)

* Et dans les commandes, je mettrai ceci :

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Ainsi, en frappant, l'épée dira _**This is not a normal sword**_ et l'entité brûlera pendant 4 secondes
* OK ! Nous avons l'item prêt, vous pouvez le tester si vous le souhaitez (pour vous assurer que l'item EI fonctionne bien). Maintenant, il faut faire la... transformation 😈😈

### Transformer l'item vanilla en l'EI créé

* Pour cela, vous devez d'abord éditer le yml de votre item.

:::info
Il se trouve dans plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Ouvrez-le et ajoutez ces lignes (elles doivent être sans indentation/espaces sur le côté gauche).

```yaml
recognitions:
- MATERIAL
```

* Désormais, ExecutableItems considérera que tout item ayant le même material que l'item EI (celui que nous venons de créer) est l'item EI.
* Enregistrez le \<item>.yml, rejoignez le jeu et tapez `/ei reload`

### Testons-le

* Si nous avons bien suivi chaque étape, il faut maintenant prendre une diamond\_sword vanilla, s'approcher d'une vache et la frapper -> elle devrait brûler pendant 4 secondes, des particules devraient apparaître et vous recevrez un message.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Testé et ça fonctionne ! Eh oui !!

:::info
Pour toute question, vous pouvez la poser sur Discord ^^

Méthode par Special70
:::
