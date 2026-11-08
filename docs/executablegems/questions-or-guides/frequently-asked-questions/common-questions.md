---
sidebar_position: 4
description: Frequently asked questions about ExecutableGems.
---

# Frequently asked questions

### Do I need to know how to code?

No. A gem is a YAML file. Start with `/eg new` and [Create your first gem](../tutorials/your-first-gem.md).

### Does it work on my custom items?

Yes. A gem with `'ei:*'` in its `applicable-on` goes on any ExecutableItems item. `'ei:MyItem'` limits it to one item.

### Do players need a mod?

No. They only need to accept the resource pack.

### Can a failed socketing destroy my item?

No, never. Only the gem can be lost.

### Can I use gems without the forge?

Yes. Players can socket gems in their inventory or by holding them, and you can give forges only to admins. See [Control loot and prices](../tutorials/loot-and-economy.md).

### Can players trade socketed items?

Yes. The gems are stored on the item, with their level and XP.

### What happens to the gems on an item when I disable one?

With `enabled: false`, or if you delete the file, the gem stops working but its data stays in the socket. It works again if you put it back.

### How many gems can I add?

As many as you want. The Codex adds tabs and pages by itself.

### Can I rename the tiers?

Not yet. Their number of levels can be changed with `tiers`.

### Can I disable the effects that some players dislike?

Yes. Almost every visual has a setting in the [`ui` section](../../configurations/general-configuration.md#interface), and each full-screen effect can be turned off with an empty value in [`post-effects`](../../configurations/general-configuration.md#full-screen-effects).
