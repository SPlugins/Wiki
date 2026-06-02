---
description: >-
  Fix common MyFurniture hitbox issues — misaligned bounding boxes, furniture
  that can't be clicked, too-large or too-small interaction zones, and the
  steps to regenerate correct hitboxes after model changes.
---

# Hitbox Troubleshooting

MyFurniture uses **ray-traced, shape-matching hitboxes** derived directly from your
model geometry. This gives precise interaction (players click through chair gaps, tall
lamps have tall hitboxes) but requires running `/mf pack` every time a model changes.

---

## Key concepts

### boundingBoxZones

The `boundingBoxZones` field in a furniture YAML is **auto-generated** by `/mf pack`.
It encodes a list of oriented bounding boxes that exactly match your model's physical
geometry. Do **not** edit these values by hand — they will be overwritten on the next
`/mf pack`, and incorrect values will cause broken hitboxes or prevent interaction entirely.

### interactionRange

`interactionRange` (default `6.0` blocks) is the maximum distance from which a player
can click the furniture. It is a sphere check that happens *before* the bounding box
ray-trace. If the player is further than this value, no activators fire even if they
aim precisely.

### clickToBreak

`clickToBreak` is the number of **left-clicks** required to break the furniture.
Set it to `0` to make furniture indestructible (useful for decoration). Set it higher
to require sustained interaction before breaking.

---

## Symptom checklist

### Players cannot click the furniture at all

1. **Did you run `/mf pack` after importing/modifying the model?**
   If `boundingBoxZones` is empty (`[]`) in the YAML, there is no hitbox. Run:
   ```
   /mf pack
   /mf reload
   ```

2. **Is the player too far away?**
   Check `interactionRange` in the furniture YAML. The default is `6.0` blocks.
   Increase it for large decorations:
   ```yaml
   interactionRange: 12.0
   ```

3. **Is the furniture a display entity?**
   MyFurniture uses `ItemDisplay` entities (1.19.4+). If your server is running an older
   version, hitboxes are not supported. See [Information MF](/myfurniture/information-mf).

4. **Is the furniture visible at all?**
   If the resource pack hasn't loaded for the player, the furniture appears invisible but
   may still have a hitbox. Check that the resource pack is delivered on join
   (`selfHostPack: true` in `config.yml`, or a valid `texturesPackUrl`).

---

### The hitbox is visually misaligned (click target is shifted)

This usually means `/mf pack` was run before the model geometry was finalised, or
the YAML was edited after the last pack build.

**Fix:**
1. Confirm the model file is in the correct location inside `__textures__/`.
2. Run `/mf pack` again — this rebuilds the bounding boxes from scratch.
3. Run `/mf reload`.

If the hitbox is still misaligned after a clean pack build, the issue may be in the
model itself:

- **Check `displayDefaultPitch`** in `config.yml`. Most furniture is placed flat on the
  ground (`customPitch: 90` in the furniture YAML). If your model was designed upright,
  the bounding box will be rotated 90° when placed.
- **Check `scale`**. A model with `scale: 2.0` has a hitbox twice as large as the
  model at `scale: 1.0`. If the bounding box seems double or half the expected size,
  verify the scale value.

---

### The hitbox is too small (only the base of the furniture is clickable)

The bounding box is generated from the model's visible geometry. If your model has thin
or very short elements (e.g. table legs), the hitbox will only cover those elements.

**Solutions:**

- **Add a hidden bounding volume to the model in Blockbench.** Create a transparent
  cube (set alpha to 0 or move it to a hidden layer) that covers the full intended
  clickable area. When you re-export and run `/mf pack`, the bounding box will include
  this invisible volume.
- **Increase `interactionRange`** slightly so the player can interact while looking at
  any part of the general area, not just the exact model surface.

---

### The hitbox is too large (clicking the air next to furniture activates it)

This happens when the model contains bounding elements outside the visible geometry —
often caused by helper cubes in Blockbench that were not cleaned up.

**Fix:**
1. Open the model in Blockbench.
2. Remove any stray or helper cubes that are not part of the visible model.
3. Re-run `/mf pack` and `/mf reload`.

---

### Furniture can be broken instantly (clickToBreak ignored)

Check the `clickToBreak` field in the furniture YAML:

```yaml
displayFeatures:
  clickToBreak: 5    # Requires 5 left-clicks to break
```

If it reads `0` or is missing, furniture breaks on any left-click. Set it to a positive
integer. After editing, run `/mf reload`.

:::note
`clickToBreak` counts left-clicks only. Players holding a tool may break furniture
faster than empty-handed players depending on your server's event priority settings.
:::

---

### Furniture placed with `/mf place` has no hitbox

The `/mf place` command spawns furniture in the world but the bounding box only loads
for players within rendering range (`viewRange` in the furniture YAML, default `20.0`
blocks). If a player placed the furniture and then teleported far away, nearby players
might not see the hitbox until someone re-enters range.

To force a refresh, run:
```
/mf reload
```

---

## Full reset checklist

If hitboxes are completely broken after updating MyFurniture or importing a new model:

- [ ] Delete and re-import the model: remove the folder from `__textures__/`, re-add it, and run `/mf pack`.
- [ ] Check the YAML `boundingBoxZones` field — it should contain at least one entry after `/mf pack`.
- [ ] Confirm `interactionRange` is `> 0` (default `6.0`).
- [ ] Confirm the resource pack loaded for the player (disconnect and reconnect, or use `/mf reload`).
- [ ] Confirm `viewRange` is not set to `0.0`.

---

## See also

- [Getting Started](/myfurniture/question-or-guides/tutorials/getting-started) — initial setup including `/mf pack`.
- [Furniture Features](/myfurniture/configurations/furniture-configuration/furniture-features) — full reference for `interactionRange`, `clickToBreak`, `boundingBoxZones`, `viewRange`, and `scale`.
- [Import your own Furniture](/myfurniture/question-or-guides/frequently-asked-questions/import-your-own-furniture) — step-by-step import workflow.
