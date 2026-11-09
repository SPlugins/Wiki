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
[ExecutableGems] Gems loaded: 37 in 7 categories, runewords: 12
[ExecutableGems] Ready. Gems run through ExecutableItems' activators.
```

:::info
SCore, ExecutableItems and ExecutableGems must all be up to date. ExecutableGems uses recent features of ExecutableItems.
:::

## Permissions

:::danger
**Give your players the permission `ei.item.*`**

A gem runs through ExecutableItems, which checks the permission of the item. A player who is not OP needs **`ei.item.*`**, or every gem shows "You do not have the permission to use eg_..." and does nothing.

With LuckPerms: `/lp group default permission set ei.item.* true`

Without a permission plugin, put this in the `permissions.yml` of your server and restart:

```yaml
ei.item.*:
  default: true
```
:::

## The resource pack

The plugin sends its own pack through SCore, next to the pack of ExecutableItems. Players are asked to accept it.

If players can't download it, set your server's public IP in `plugins/SCore/config.yml`:

```yaml
selfHostPackIp: 'your.public.ip'
```

The pack is served on the Minecraft server's own port, so you don't need to open another port.

If you prefer to play without any pack, see the [config tip](../../configurations/general-configuration.md#interface).
