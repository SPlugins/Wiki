---
description: >-
  Erfahre, wie die Option detailedClick einen Aktivator auf Rechtsklick,
  Linksklick oder beide beschränkt. Teil der Dokumentation von ExecutableItems.
source_hash: cbb8e21c8345cc14
translated_at: '2026-11-13T17:34:14.351Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info: Funktion, die die Trigger des Aktivators nur dann auslöst, wenn im Event der richtige Klick beteiligt ist.
  * detailedClick
    * RIGHT: Beschränkt den Aktivator so, dass er nur funktioniert, wenn das Event durch einen Rechtsklick ausgelöst wurde
    * LEFT: Beschränkt den Aktivator so, dass er nur funktioniert, wenn das Event durch einen Linksklick ausgelöst wurde
    * RIGHT\_OR\_LEFT: Beschränkt die Klickart für diesen Aktivator nicht, er erlaubt sowohl Rechts- als auch Linksklick.
* Beispiel: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
