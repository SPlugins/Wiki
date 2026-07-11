---
sidebar_position: 8
title: 📡 Events reference
description: Every Bukkit event fired by the SsomarDev plugins, in one table.
---

# 📡 Events reference

All public events live under `com.ssomar.score.api.<plugin>.events` (and `.load` for the lifecycle events). Import them from the `com.ssomar:SCore` artifact.

## ExecutableItems

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableItemActivateEvent` | ✅ | an EI activator triggers for a player, before conditions run |
| `AddItemInPlayerInventoryEvent` | — | an EI enters a player inventory |
| `RemoveItemInPlayerInventoryEvent` | — | an EI leaves a player inventory |
| `ExecutableItemsPostLoadEvent` | — | all EI configurations are loaded |
| `RefreshExecutableItemEvent` (in `com.ssomar.score.events`) | — | an EI is refreshed (command or auto-update activator) |

## ExecutableBlocks

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableBlockPlaceEvent` | ✅ | an EB is placed |
| `ExecutableBlockBreakEvent` | ✅ | a placed EB is broken (`BreakMethod` NATURAL / CUSTOM) |
| `ExecutableBlockPistonBreakEvent` | ✅ | a piston is about to break a placed EB |
| `ExecutableBlockLiquidBreakEvent` | ✅ | a liquid is about to break a placed EB |
| `EntityWalkOnExecutableBlockEvent` | ✅ | an entity walks on an EB with an ENTITY_WALK_ON activator |
| `ExecutableBlocksPostLoadEvent` | — | all EB configurations are loaded |

## ExecutableEvents

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableEventActivateEvent` | ✅ | an EE activator triggers, before conditions run (player may be null, thread-aware) |
| `ExecutableEventsPostLoadEvent` | — | all EE configurations are loaded |

## ExecutableCrafting

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableCraftingCraftEvent` | ✅ | a player crafts with a custom recipe, before ingredients are consumed (result mutable) |
| `ExecutableCraftingPostLoadEvent` | — | all recipes are loaded and registered |

## MyFurniture

| Event | Cancellable | Fired when |
|---|---|---|
| `FurniturePlaceEvent` | ✅ | a furniture is placed |
| `FurnitureBreakEvent` | ✅ | a placed furniture is broken (`BreakMethod`) |
| `MyFurniturePostLoadEvent` | — | all furniture configurations are loaded |

## CustomPiglinsTrades

| Event | Cancellable | Fired when |
|---|---|---|
| `PiglinTradeEvent` | ✅ | a player triggers a custom piglin trade, before it runs |
| `CustomPiglinsTradesPostLoadEvent` | — | all trade configurations are loaded |

:::tip
Every `*PostLoadEvent` carries the loaded manager (`e.getManager()`), so you can do your initial scan right in the listener without a lookup race.
:::
