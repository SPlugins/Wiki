---
description: >-
  Découvrez delay et delayTick : régler l'intervalle de répétition de la boucle
  d'un activateur, en secondes ou en ticks (SPlugins, ExecutableItems).
source_hash: 492c3c387bf91ea2
translated_at: '2026-11-13T17:20:59.661Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay et delayTick

* Info : Fonctionnalités de l'activateur qui modifient l'intervalle de temps auquel cet activateur se déclenche, elles affectent le comportement des répétitions de la boucle de l'activateur.
  * delay : Valeur entière qui représente la durée de la boucle en secondes. Cela signifie que toutes les \<delay> \[time], la boucle se déclenchera à nouveau. Ex. (si le delay est de 30 secondes, l'activateur se déclenchera toutes les 30 secondes)
  * delayTick : Valeur booléenne pour définir le delay en ticks, sinon il est en secondes. (20 ticks = 1 seconde)
* Exemple : 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
