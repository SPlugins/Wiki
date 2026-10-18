---
description: >-
  Common ExecutableCrafting problems and how to fix them — recipe not working,
  items not recognised, duplicate output, and more.
---

# Troubleshooting

## Recipe does not trigger / result slot stays empty

**Symptom:** You place the correct ingredients but nothing appears in the output slot.

**Checklist:**

1. **Run `/ec reload`** after saving any recipe file. Changes are not picked up automatically.
2. **Check the recipe type.** A `CRAFTING` recipe only works in the crafting table (or
   2×2 inventory grid). A `FURNACE` recipe only works in a furnace, etc.
3. **Check the shape.** If `typeOfCraftingTableRecipe: MATCH_SHAPE`, the slots must
   match *exactly* as you defined them. A diamond in slot 1 (top-left) is not the same
   as a diamond in slot 5 (center).
4. **Enable debug mode** to see what the plugin checks for you:
   ```
   /ec debug
   ```
   Then put the ingredients in the crafting grid. An `[EC debug]` line in your chat tells you which EC recipe
   matches the grid (`none` if no recipe matches: check the inputs and the `itemCheckers`), what is left in the
   result slot, and the plugins that act on the craft after EC (one of them can empty the result). See
   [/ec debug](/executablecrafting/commands-and-permissions#activate-the-debug-mode-for-yourself).
5. **Check `itemCheckers`.** If `checkMaterial: false` *and* `checkDisplayName: false`
   *and* all other checks are `false`, the plugin treats every item as matching and
   your recipe may match unintended inputs (or match nothing because the check-all-false
   state can be unexpected). At minimum, enable `checkMaterial: true`.

---

## Ingredients not recognised (wrong item)

**Symptom:** You are placing the right material but the recipe still doesn't fire.

**Likely causes:**

### The item has custom data (name, lore, NBT) but `itemCheckerType` is set to `ITEM_MUST_BE_EXACTLY_THE_SAME`

When `itemCheckerType: ITEM_MUST_BE_EXACTLY_THE_SAME`, the plugin compares the full
item stack including display name, lore, NBT, and enchantments. A plain diamond and a
diamond renamed "Power Gem" are *not* the same.

**Fix:** Switch to `CUSTOM_CHECKS` and enable only the checks you actually care about:

```yaml
itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: false
  checkDisplayName: false   # ignore custom names
  checkMaterial: true       # only match the material
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false
```

### You want to require a specific ExecutableItems item

If your recipe requires an EI item, enable `checkExecutableItemID: true` and make sure
the ingredient in the recipe file is the correct EI item (set via the in-game editor —
the item string contains the EI ID in its NBT).

---

## The vanilla recipe book shows a wrong craftable state

**Symptom:** In the vanilla recipe book, an EC recipe looks craftable when the player only has
the plain materials, or not craftable when he has the right custom items (enchanted, renamed,
ExecutableItems...).

**Cause:** The client computes this state by itself with the item types only, and ignores the
enchanted, renamed or damaged items.

**Fix:** On Paper 1.21.2+, set `accurateRecipeBook: true` in `config.yml` (only once in the
file), then `/ec reload`. See
[Accurate vanilla recipe book](/executablecrafting/configurations/general-configuration#accurate-vanilla-recipe-book).

---

## Players receive duplicate output / multiple items at once

**Symptom:** Crafting once produces 2, 4, or more output items.

**Cause:** The setting `castResultAsMaxAmount` is enabled in `config.yml`.

When `castResultAsMaxAmount: true`, the result quantity is multiplied by however many
times the recipe *could* be crafted from the items in the grid. For example, if you
have 4 diamonds in the grid and the recipe requires 2, the result is multiplied by 2.

**Fix:** If you don't want this behaviour, open `plugins/ExecutableCrafting/config.yml`
and set:

```yaml
recipeConfig:
  craftingTable:
    castResultAsMaxAmount: false
```

Then `/ec reload`.

---

## Recipe conflicts with vanilla recipes

**Symptom:** A vanilla recipe overrides your custom one, or vice versa.

**Details:** ExecutableCrafting's listener runs at the priority set by `eventsPriority`
in `config.yml`. The default is `NORMAL`.

**Fix:** If another plugin registers recipes at `HIGH` or `HIGHEST` priority that
conflict with yours, raise ExecutableCrafting's priority:

```yaml
recipeConfig:
  global:
    eventsPriority: HIGH
```

Options: `NORMAL`, `HIGH`, `HIGHEST`. Reload after changing.

---

## Recipe conflict between two custom recipes

**Symptom:** Two of your EC recipes share overlapping ingredients and only one fires.

**Explanation:** ExecutableCrafting iterates all loaded recipes and returns the first
match. The order is determined by the file system load order (alphabetical by default).

**Fix:** Make one recipe more specific (add extra ingredient checks or use `MATCH_SHAPE`
instead of `SHAPELESS`) so it doesn't overlap the other.

---

## `playerCommands` are not executing

**Symptom:** The recipe works but the commands listed under `playerCommands` never run.

**Checklist:**

1. Confirm the recipe is actually triggering (the result appears in the output slot).
2. Commands under `playerCommands` run when the player **takes** the crafted item from
   the output slot — not when the recipe is displayed. Make sure you actually pick up
   the result.
3. Check command syntax. ExecutableCrafting uses SCore command syntax, not plain
   server commands. To run a vanilla command, prefix it with `[CONSOLE]` or use
   `EXECUTE_PLAYER_COMMAND`:

   ```yaml
   playerCommands:
     - SEND_MESSAGE &aYou crafted something!
     - EXECUTE_PLAYER_COMMAND say Hello from %player%
   ```

   See [Custom Commands](/tools-for-all-plugins-score/custom-commands) for the full list.

---

## Recipe group conditions are not applied

**Symptom:** A recipe group in `recipeGroups.yml` doesn't seem to apply its conditions.

**Checklist:**

1. Run `/ec reload` after editing `recipeGroups.yml`.
2. Check the `recipesList` pattern. The glob `bloody_*` matches IDs that start with
   `bloody_`. Make sure your recipe IDs match the pattern exactly (case-sensitive).
3. Verify the file is valid YAML (no tab characters — use spaces only).

---

## Errors in logs on startup

If you see errors in `logs/latest.log` when the plugin loads:

* `Could not load 'ExecutableCrafting.jar'` — likely a missing SCore or version
  mismatch. Download the latest [SCore](https://modrinth.com/plugin/score) and restart.
* `Recipe XYZ failed to load` — the YAML for that recipe has a syntax error. Open the
  file, check indentation (2 spaces, no tabs), and ensure all required fields are
  present. `config_update: true` will add missing fields automatically on next load.
* Class errors / `NoClassDefFoundError` — usually means SCore is outdated relative to
  EC. Update both at the same time.

---

## Still stuck?

Join the [Discord](https://discord.com/invite/TRmSwJaYNv) and post in the
`#support-ec` channel. Include:

* Your Minecraft version
* Your EC and SCore versions (visible in `/plugins` or `logs/latest.log`)
* The relevant recipe YAML
* The `logs/latest.log` section around the error (or the debug output from `/ec debug`)
