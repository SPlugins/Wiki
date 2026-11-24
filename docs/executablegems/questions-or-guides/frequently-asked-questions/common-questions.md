---
sidebar_position: 4
description: Frequently asked questions about ExecutableGems.
---

# Frequently asked questions

### Do I need to know how to code?

No. A gem is a YAML file, and `/eg new` writes it for you with every key explained. Start with [Create your first gem](../tutorials/your-first-gem.md). The same command writes [runewords](../tutorials/runeword.md) and [Minecraft enchantments](../tutorials/native-enchantments.md).

### Does it work on my custom items?

Yes. A gem with `'ei:*'` in its `applicable-on` goes on any ExecutableItems item. `'ei:MyItem'` limits it to one item.

### Do players need a mod?

No. They only need to accept the resource pack.

### Can a failed socketing destroy my item?

No, never. Only the gem can be lost.

### Can I use gems without the forge?

Yes. Players can socket gems in their inventory or by holding them, and you can keep the forges for admins. See [Control loot and prices](../tutorials/loot-and-economy.md#keep-forges-for-admins).

### Can players trade socketed items?

Yes. The gems are stored on the item, with their level and XP.

### What happens to the gems on an item when I disable one?

With `enabled: false`, or if you delete the file, the gem stops working but its data stays in the socket. The socket shows "Unknown gem" and stays taken, and a Gem Extractor leaves the gem in the item. It works again, with its level and XP, if you put it back.

### What happens if I lower the `max-level` of a gem?

Nothing is lost. The gems that are already above the new maximum keep their level, and act as gems of the maximum level until you raise it again.

### Can players farm gems with a mob spawner?

Not by default. Monsters from a spawner, a spawn egg or a nether portal drop no gem, and you can choose the worlds where gems are found. See [Control loot and prices](../tutorials/loot-and-economy.md#mob-farms).

### How many forges can a player place?

One by default, and they pick it up with sneak + left click to move it. See [Control loot and prices](../tutorials/loot-and-economy.md#limit-the-forges-of-players).

### Can I sell gems for money?

Yes. A ware of the jeweller's shop can cost `money`, through Vault and an economy plugin. See [Control loot and prices](../tutorials/loot-and-economy.md#change-the-jewellers-wares).

### Does it have placeholders and an API?

Yes: [PlaceholderAPI placeholders](../../placeholders.md) and a [developer API](../../developer-api.md) with events.

### How many gems can I add?

As many as you want. The Codex adds tabs and pages by itself.

### Can I rename the tiers?

Not yet. Their number of levels can be changed with `tiers`.

### Can I disable the effects that some players dislike?

Yes. Almost every visual has a setting in the [`ui` section](../../configurations/general-configuration.md#interface), and each full-screen effect can be turned off with an empty value in [`post-effects`](../../configurations/general-configuration.md#full-screen-effects).
