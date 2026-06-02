---
description: >-
  EI trident items duplicating when thrown — caused by usage being set to 1,
  which triggers recovery-on-pickup logic. Fix by setting usage to 0.
---

# Trident Duplication

## Symptom

You created an ExecutableItem with `material: TRIDENT`. Each time you throw it,
it duplicates — you pick up multiple tridents instead of one.

## Cause

Vanilla Minecraft has special recovery logic for tridents: when a thrown trident
lands, the game re-gives the trident to the player. If `usage: 1` is set on your
EI trident, the plugin and vanilla both try to handle the pickup, resulting in
duplicate copies.

## Fix

Set `usage: 0` in your trident's YAML:

```yaml
material: TRIDENT
usage: 0          # ← must be 0, not 1
usageLimit: -1
```

With `usage: 0`, the item does not have an active usage counter, so EI's pickup
recovery logic does not conflict with vanilla's trident recovery.

## Related

If you want a trident that launches the player (Riptide-style without rain restriction),
see [Trident That Works When Not Raining](/executableitems/questions-or-guides/items-explanations/trident-that-works-when-not-raining).
