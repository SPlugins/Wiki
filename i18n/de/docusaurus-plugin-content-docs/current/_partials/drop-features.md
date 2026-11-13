---
description: >-
  Erfahre, wie desactiveDrops in ExecutableBlocks Vanilla-Drops beim Abbauen von
  Blöcken oder Töten von Mobs verhindert oder zulässt.
source_hash: 8065c44e1f6b0b11
translated_at: '2026-11-13T17:34:34.396Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### desactiveDrops

* Info: Boolescher Wert, der festlegt, ob der Vanilla-Loot beim Abbauen von Blöcken oder Töten von Mobs gedroppt wird oder nicht. Da es sich um Vanilla-Drops handelt, sind benutzerdefinierte Drops von Custom Mobs (z. B. MythicMobs) davon nicht betroffen.
* Beispiel:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```
