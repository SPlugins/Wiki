---
description: >-
  Apprenez à créer un activateur avec une probabilité de déclenchement aléatoire
  grâce à RNG et PlaceholderAPI dans ExecutableItems, étape par étape.
source_hash: e2c9077e189d3702
translated_at: '2026-11-13T12:04:09.991Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Activateur RNG Chance

Eh bien, il y a quelque temps, je voulais une armure NINJA et l'idée était : ok, certains coups sont esquivés et d'autres non, mais comment faire cette « esquive » ? Après avoir longuement réfléchi, cette méthode m'est venue, expliquons-la.

:::info
Ce tutoriel sera lié à l'exemple mentionné ci-dessus, mais l'idée est que vous reteniez l'essentiel de la méthode et l'appliquiez comme vous le souhaitez.
:::

### Créons l'item

:::info
L'**item** lui-même nécessite la version premium + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Après avoir ajouté le nom, la lore et le matériau..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Créons l'activateur qui va faire la magie

* Donc, d'abord, l'idée est de créer un RECEIVE\_HIT\_BY\_GLOBAL et d'annuler l'événement.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Maintenant, il annule CHAQUE coup reçu. Pour qu'il annule parfois et parfois non, il faut que l'activateur lui-même ne s'exécute que parfois. Nous allons donc ajouter une condition liée à RNG : en résumé, un nombre aléatoire entre 1 et 4, et s'il vaut 1, l'activateur s'exécute, ce qui donne une probabilité de 25% -> c'est la probabilité que nous voulons, ajoutons-la.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

Et dans la première partie, nous ajouterons « %rng\_1,4% » (cela nécessite PlaceholderAPI et RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

« 1 » (car nous voulons qu'il ne se déclenche que si le nombre aléatoire entre 1 et 4 vaut 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

Et l'item est prêt

:::info
À DES FINS DE DÉBOGAGE, J'AJOUTE QUE L'ACTIVATEUR DIT « dodge » ET SI LE PLACEHOLDER NE CORRESPOND PAS, IL DIT « didn't dodge ».\
\
Ainsi, une fois testé, nous saurons s'il fonctionne correctement.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

Et ça a fonctionné : l'activateur ne s'exécute qu'1 fois sur 4.

Si vous avez des questions, n'hésitez pas à les poser sur le Discord d'EI, bonne journée :P

## Comment définir les bonnes valeurs pour obtenir le pourcentage souhaité

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
