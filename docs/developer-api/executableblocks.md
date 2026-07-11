---
sidebar_position: 3
title: 🧊 ExecutableBlocks API
description: Look up configurations, query and manipulate placed ExecutableBlocks, listen to block events.
---

# 🧊 ExecutableBlocks API

Entry point: `com.ssomar.score.api.executableblocks.ExecutableBlocksAPI`

```java
ExecutableBlocksManagerInterface manager = ExecutableBlocksAPI.getExecutableBlocksManager();
ExecutableBlocksPlacedManagerInterface placedManager = ExecutableBlocksAPI.getExecutableBlocksPlacedManager();
```

## Configurations

```java
Optional<ExecutableBlockInterface> ebOpt = manager.getExecutableBlock("my_generator");
List<String> ids = manager.getExecutableBlockIdsList();

// Is this ItemStack an ExecutableBlock item?
ExecutableBlockObjectInterface ebObject = ExecutableBlocksAPI.getExecutableBlockObject(itemStack);
if (ebObject.isValid()) {
    String id = ebObject.getConfig().getId();
}
```

### Place a block programmatically

```java
ebOpt.ifPresent(eb -> {
    Optional<ExecutableBlockPlacedInterface> placed =
            eb.place(location, true, OverrideMode.KEEP_EXISTING, player, null);
});
```

## Placed blocks

### Lookups

```java
Optional<ExecutableBlockPlacedInterface> atLoc = placedManager.getExecutableBlockPlaced(location);
Optional<ExecutableBlockPlacedInterface> ofBlock = placedManager.getExecutableBlockPlaced(block);

// area queries
List<? extends ExecutableBlockPlacedInterface> near = placedManager.getExecutableBlocksPlacedNear(center, 10.0);
List<? extends ExecutableBlockPlacedInterface> inChunk = placedManager.getExecutableBlocksPlaced(chunk);

// ownership queries (protection plugins, per-player limits...)
Map<Location, ? extends ExecutableBlockPlacedInterface> byPlayer = placedManager.getAllExecutableBlocksPlacedBy(playerUUID);
int count = placedManager.getAmountOfExecutableBlocksPlacedBy(playerUUID, "my_generator");

// all placed blocks of one configuration
List<? extends ExecutableBlockPlacedInterface> generators = placedManager.getAllExecutableBlocksPlacedByConfig("my_generator");
```

### Working with a placed block

```java
placedManager.getExecutableBlockPlaced(block).ifPresent(placed -> {
    String id = placed.getExecutableBlockId();
    int usage = placed.getUsage();
    placed.changeUsage(-1);

    placed.updateVariable("charge", "50", VariableUpdateType.SET);

    // convert back to its item form (keeps usage/variables/owner)
    ExecutableBlockObjectInterface item = placed.toObject();

    placed.moveBlock(newLocation, true);   // physically move the block
    placed.breakBlock(player, true);       // break with drop (fires ExecutableBlockBreakEvent)
    placed.remove();                       // silent removal, no drop, no event
});
```

## Events

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableBlockPlaceEvent` | ✅ | an EB is placed |
| `ExecutableBlockBreakEvent` | ✅ | a placed EB is broken (`getBreakMethod()`: NATURAL / CUSTOM) |
| `ExecutableBlockPistonBreakEvent` | ✅ | a piston is about to break a placed EB |
| `ExecutableBlockLiquidBreakEvent` | ✅ | a flowing liquid is about to break a placed EB |
| `EntityWalkOnExecutableBlockEvent` | ✅ | an entity walks on an EB with an `ENTITY_WALK_ON` activator |
| `ExecutableBlocksPostLoadEvent` | — | all EB configurations are loaded |

```java
@EventHandler
public void onPistonBreak(ExecutableBlockPistonBreakEvent e) {
    // protect blocks in claims
    if (isClaimed(e.getExecutableBlockPlaced().getLocation())) e.setCancelled(true);
}
```

:::caution
`EntityWalkOnExecutableBlockEvent` can fire frequently (checked periodically while entities move on such blocks) — keep listeners lightweight.
:::
