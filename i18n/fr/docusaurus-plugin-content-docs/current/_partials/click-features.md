---
description: >-
  Découvrez la fonctionnalité detailedClick d'ExecutableItems : restreignez un
  activateur au clic droit, au clic gauche ou aux deux, avec un exemple.
source_hash: cbb8e21c8345cc14
translated_at: '2026-11-13T17:20:40.524Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info : Fonctionnalité qui restreint le déclenchement de l'activateur uniquement si le bon clic est impliqué dans l'événement.
  * detailedClick
    * RIGHT : Restreint l'activateur pour qu'il ne fonctionne que lorsque l'événement a eu lieu avec le clic droit
    * LEFT : Restreint l'activateur pour qu'il ne fonctionne que lorsque l'événement a eu lieu avec le clic gauche
    * RIGHT\_OR\_LEFT : Ne restreint pas le type de clic pour cet activateur, il autorisera le clic droit et le clic gauche.
* Exemple : 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
