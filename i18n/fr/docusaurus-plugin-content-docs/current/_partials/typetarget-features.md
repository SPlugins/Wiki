---
description: >-
  Découvrez typeTarget : restreignez un activateur selon le type de clic (dans
  l'air, sur un bloc ou les deux) dans ExecutableItems.
source_hash: d1859a42c6017172
translated_at: '2026-11-13T17:22:02.747Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info : fonctionnalité qui restreint l'activateur afin qu'il ne soit activé/déclenché que lorsque l'événement s'est produit avec un certain type de clic
  * typeTarget
    * ONLY\_AIR : restreint l'activateur afin qu'il ne soit activé/déclenché que lorsque l'événement s'est produit en cliquant uniquement dans l'air, ce qui signifie que si vous avez cliqué sur un bloc, l'activateur ne sera pas déclenché. Attention à ne pas vous méprendre ! Vous pourriez vous demander ce qui se passe si vous cliquez sur un joueur : ce n'est pas un bloc, donc c'est dans « l'air », n'est-ce pas ? Eh bien... cet événement sort de l'instance des activateurs de type PLAYER\_(CLICK), c'est une instance de PLAYER\_CLICK\_ON\_PLAYER, donc l'activateur ne se déclenchera pas non plus : il doit s'agir d'une instance de PLAYER\_(CLICK).
    * ONLY\_BLOCK : restreint l'activateur afin qu'il ne soit activé/déclenché que lorsque l'événement s'est produit en cliquant uniquement sur un bloc. Cela signifie que si vous avez cliqué dans l'air, l'activateur ne sera pas déclenché.
      * Cette fonctionnalité fait de l'activateur un activateur de type instance de bloc, il disposera donc de blockCommands.
    * NO\_TYPE\_TARGET : ne restreint pas l'activateur sur le type de clic, les deux types seront acceptés, clics dans l'air et clics sur un bloc.
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
