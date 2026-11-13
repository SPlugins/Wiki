---
description: >-
  Apprenez à créer des drops personnalisés d'entités et de blocs avec
  ExecutableItems, grâce aux activateurs et aux commandes EI ou vanilla.
source_hash: 53c8b7deae5be6f3
translated_at: '2026-11-13T12:03:34.592Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Drops personnalisés

:::danger
CE TUTORIEL EST POUR EXECUTABLEITEMS, CE QUI SIGNIFIE QUE **CES DROPS NE FONCTIONNENT PAS GLOBALEMENT** ET NE MARCHENT QUE SI VOUS AVEZ UN EXECUTABLEITEM DANS VOTRE INVENTAIRE.

\
SI VOUS VOULEZ CRÉER UN DROP PERSONNALISÉ GLOBAL, UTILISEZ **EXECUTABLEVENTS**
:::

Pour créer des drops personnalisés, il faut d'abord savoir de quel type de drop il s'agit. Les deux seront expliqués :

## Drops d'entités

Utilisez l'activateur PLAYER\_KILL\_ENTITY ou PLAYER\_KILL\_PLAYER et, dans les commandes, vous pouvez utiliser soit :

* Les commandes EI pour dropper les items
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Les commandes vanilla pour dropper les items
  * Un bon exemple serait de donner la TÊTE du JOUEUR
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
N'oubliez pas que si vous voulez que cette commande ne fonctionne pas à 100 %, vous pouvez lui donner des chances ! Consultez simplement le wiki, c'est déjà expliqué ^^
:::

## Drops de blocs

Utilisez l'activateur PLAYER\_BREAK\_BLOCK et, dans les commandes, vous pouvez utiliser soit :

* Les commandes EI pour dropper les items
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Les commandes vanilla pour dropper les items
  * Commande vanilla pour dropper plus d'un item cassé (cet exemple donne 2 items de plus, vous pouvez rendre cela aléatoire en utilisant un placeholder RNG à la place de « 2 »)
    * execute at %player% run summon minecraft\:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
N'oubliez pas que si vous voulez que cette commande ne fonctionne pas à 100 %, vous pouvez lui donner des chances ! Consultez simplement le wiki, c'est déjà expliqué ^^
:::
