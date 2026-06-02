---
description: >-
  Placeholder conditions in EB activators check the block owner by default,
  not the player who triggered the activator. Use TARGET_STRING or TARGET_NUMBER
  to check the triggering player instead.
---

# My Condition Is Checking the Owner

## The problem

In ExecutableBlocks, `placeholdersConditions` resolve placeholders against the
**block owner** (the player who placed the block) by default — not against the player
who triggered the activator.

For example, `%player_health%` in a condition will return the *owner's* health, not
the health of the player who stepped on or right-clicked the block.

## The fix — use TARGET conditions

Change the condition type from `PLAYER_STRING` / `PLAYER_NUMBER` to
`TARGET_STRING` / `TARGET_NUMBER`. This evaluates the placeholder against the
**triggering player** (the one who interacted with the block).

```yaml
# Checks the owner's health (default behavior — usually NOT what you want)
placeholdersConditions:
  plcd0:
    placeholder: '%player_health%'
    comparator: '>='
    value: '10'
    type: PLAYER_NUMBER

# Checks the triggering player's health (what you usually want)
placeholdersConditions:
  plcd0:
    placeholder: '%player_health%'
    comparator: '>='
    value: '10'
    type: TARGET_NUMBER     # ← change PLAYER_ to TARGET_
```

## Condition type summary

| Type | Checks against |
|---|---|
| `PLAYER_STRING` | Block owner |
| `PLAYER_NUMBER` | Block owner |
| `TARGET_STRING` | Player who triggered the activator |
| `TARGET_NUMBER` | Player who triggered the activator |

Use `TARGET_*` any time you want the condition to apply to the person interacting
with the block, rather than to whoever originally placed it.
