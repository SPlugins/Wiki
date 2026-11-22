---
sidebar_position: 1
description: How to install ExecutableGems correctly - server type, required plugins, resource pack and first start.
---

# How to install correctly

## Server

ExecutableGems is a **Paper** plugin. It needs Paper 1.21.11 or newer, or a fork of Paper. **Spigot is not supported.**

The server must run Java 21 for 1.21.11, and Java 25 for 26.x.

## Steps

1. Download **SCore**, **ExecutableItems** and **ExecutableGems**.
2. Put the three `.jar` files in the `plugins/` folder.
3. Stop and start the server. Don't use a plugin manager or `/reload`.
4. Check the console:

```
[ExecutableGems] Gems: 37 loaded, 0 with warnings, 0 not loaded in 7 categories; runewords: 12 loaded, 0 with warnings, 0 not loaded
[ExecutableGems] Ready. Gems run through ExecutableItems' activators.
```

:::info
SCore, ExecutableItems and ExecutableGems must all be up to date. ExecutableGems needs the ExecutableItems release that comes with ExecutableGems, or a newer one.
:::

With an older ExecutableItems, ExecutableGems does not start, and the console says why in one line:

```
ExecutableGems needs ExecutableItems ... or newer (this server: ExecutableItems ...): update ExecutableItems, then restart. Disabling.
```

Update ExecutableItems and SCore, then restart.

## Optional plugins

ExecutableGems works without them. Install them only if you need what they bring:

| Plugin | What it brings |
|---|---|
| PlaceholderAPI | The [`%executablegems_...%` placeholders](../../placeholders.md) for scoreboards, holograms, quests and menus. |
| Vault, with an economy plugin | Prices in money in the [jeweller's shop](../../configurations/general-configuration.md#jewellers-shop). |
| MythicMobs | MythicMobs bosses in the [boss drops](../../configurations/general-configuration.md#loot). |

## Permissions

:::info
**Players need no permission to use the gems**

Every gem has the permission `executablegems.use.<gem>` and every runeword `executablegems.use.runeword.<id>`. Everyone has them by default, so you have nothing to set.

To forbid a gem to a group, set its permission to false. With LuckPerms: `/lp group default permission set executablegems.use.vampire false`
:::

## The resource pack

The plugin sends its own pack through SCore, next to the pack of ExecutableItems. Players are asked to accept it.

If players can't download it, set your server's public IP in `plugins/SCore/config.yml`:

```yaml
selfHostPackIp: 'your.public.ip'
```

The pack is served on the Minecraft server's own port, so you don't need to open another port.

With ItemsAdder, Nexo, Oraxen, CraftEngine, your own pack or a proxy, see [The resource pack on your server](resource-pack.md).

If you prefer to play without any pack, see the [config tip](../../configurations/general-configuration.md#interface).
