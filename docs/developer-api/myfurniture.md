---
sidebar_position: 4
title: 🪑 MyFurniture API
description: Look up furniture, place and manipulate placed furniture (visibility, animations), listen to furniture events.
---

# 🪑 MyFurniture API

Entry point: `com.ssomar.score.api.myfurniture.MyFurnitureAPI`

```java
FurnitureManagerInterface manager = MyFurnitureAPI.getFurnitureManager();
FurniturePlacedManagerInterface placedManager = MyFurnitureAPI.getFurniturePlacedManager();
```

## Configurations

```java
Optional<? extends FurnitureInterface> furnitureOpt = manager.getFurniture("my_chair");
List<String> ids = manager.getFurnitureIdsList();

// Is this ItemStack a furniture item?
FurnitureObjectInterface fObject = MyFurnitureAPI.getFurnitureObject(itemStack);
if (fObject.isValid()) {
    String id = fObject.getFurnitureConfig().getId();
}
```

### Place a furniture programmatically

```java
furnitureOpt.ifPresent(furniture -> {
    if (furniture.checkIfPlayerCanPlaceAt(player, location, true)) {
        furniture.place(location, OverrideMode.KEEP_EXISTING, player, null);
    }
});
```

## Placed furniture

### Lookups

```java
Optional<? extends FurniturePlacedInterface> atLoc = placedManager.getFurniturePlaced(location);
Optional<? extends FurniturePlacedInterface> ofEntity = placedManager.getFurniturePlaced(displayEntity);
List<? extends FurniturePlacedInterface> near = placedManager.getFurniturePlacedNear(center, 10.0);
int count = placedManager.getAmountOfFurniturePlacedBy(playerUUID, "my_chair");
```

### Working with a placed furniture

```java
placedManager.getFurniturePlaced(location).ifPresent(placed -> {
    String id = placed.getFurnitureID();

    placed.moveFurniture(newLocation);

    // per-player visibility (quests, instanced content...)
    placed.hideFurniture(player);
    placed.showFurniture(player);

    // blockbench animations
    placed.runAnimation("chair_model", "rocking");
    if (placed.isAnimationRunning()) placed.stopAnimation();

    // convert back to its item form
    FurnitureObjectInterface item = placed.toObject();

    placed.breakFurniture(player, true);   // break with drop (fires FurnitureBreakEvent)
});
```

## Events

All in `com.ssomar.score.api.myfurniture.events` / `.load`:

| Event | Cancellable | Fired when |
|---|---|---|
| `FurniturePlaceEvent` | ✅ | a furniture is placed |
| `FurnitureBreakEvent` | ✅ | a placed furniture is broken (`getBreakMethod()`) |
| `MyFurniturePostLoadEvent` | — | all furniture configurations are loaded |

:::info Migration
The old events in `com.ssomar.myfurniture.api.events` still fire but are deprecated — they expose implementation classes and require the premium jar to compile. Use the `com.ssomar.score.api.myfurniture.events` ones.
:::
