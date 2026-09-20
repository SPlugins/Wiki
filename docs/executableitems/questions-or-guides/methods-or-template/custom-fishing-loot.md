---
description: Turn what the player catches with a fishing rod into a vanilla item or an ExecutableItem, with a random loot table
---

# Custom fishing loot

This guide shows how to make a fishing rod that catches your own loot. The player fishes normally: the bobber bites, they reel in, and the item that flies to them is **your** item instead of the fish.

It uses the activator `PLAYER_FISH_FISH` and the entity command [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item).

:::danger
THIS TUTORIAL IS FOR EXECUTABLEITEMS: the custom loot only applies to the players who fish with **your ExecutableItem rod**, not to every fishing rod of the server.
:::

## How it works

In `PLAYER_FISH_FISH`, the player is the one who fishes and the **target entity is the caught item**. Everything you write in `entityCommands` runs on that item. `CHANGE_INTO_ITEM` replaces it before it reaches the player, so:

* the reel-in animation is the vanilla one
* the item goes in the inventory like any catch

## 1. A rod that always catches the same item

```yaml
name: '&bMagic rod'
material: FISHING_ROD
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

`my_custom_fish` is the id of another ExecutableItem. You can also give a vanilla item:

```yaml
    entityCommands:
    - CHANGE_INTO_ITEM item:DIAMOND amount:3
```

## 2. A random loot table

Put several `CHANGE_INTO_ITEM` between [RANDOM\_RUN and RANDOM\_END](/tools-for-all-plugins-score/custom-commands/utility-commands#random_run--random_end): one line is picked for each catch.

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - RANDOM_RUN selectionCount:1
    - CHANGE_INTO_ITEM item:COD amount:1
    - CHANGE_INTO_ITEM item:COD amount:1
    - CHANGE_INTO_ITEM item:DIAMOND amount:3
    - CHANGE_INTO_ITEM item:EI:my_custom_fish amount:1
    - RANDOM_END
```

Here the player has 2 chances out of 4 to get a cod, 1 out of 4 to get 3 diamonds and 1 out of 4 to get the custom fish. Repeat a line to make it more frequent.

:::tip
To tell the player what they caught, use `playerCommands` of the same activator (for example `SEND_MESSAGE`), or give your custom item a clear name: it is shown when it is picked up.
:::

## Good to know

* `item` accepts a material or the id of an ExecutableItem. If both exist with the same name, the ExecutableItem is used. `EI:my_id` accepts only an ExecutableItem.
* The ExecutableItem is built for the player who fishes (owner, placeholders of the item).
* If `item` is wrong (typo, item not loaded), the catch is not changed and a message is printed in the console.
* You do not need `DELAYTICK`: the caught item already exists when the activator runs.
* To make the rod catch faster while you test, add the enchantment `LURE` to it.
* The other settings of the activator (cooldown, conditions...) work as usual.

## Before this command

The old method was a vanilla command after one tick:

```yaml
    entityCommands:
    - DELAYTICK 1
    - data merge entity %entity_uuid% {Item:{...}}
```

It still works, but you had to copy the full item data by hand, the format changes between Minecraft versions, and the name, the glow or the variables of an ExecutableItem were not applied. `CHANGE_INTO_ITEM` builds the real ExecutableItem.
