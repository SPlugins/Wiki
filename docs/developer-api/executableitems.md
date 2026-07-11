---
sidebar_position: 2
title: ⚔️ ExecutableItems API
description: Look up, build, give and observe ExecutableItems from your plugin.
---

# ⚔️ ExecutableItems API

Entry point: `com.ssomar.score.api.executableitems.ExecutableItemsAPI`

```java
ExecutableItemsManagerInterface manager = ExecutableItemsAPI.getExecutableItemsManager();
```

## Common tasks

### Get an item configuration and give it

```java
Optional<ExecutableItemInterface> eiOpt = manager.getExecutableItem("my_sword");
eiOpt.ifPresent(ei -> {
    int dropped = ei.give(player, 3);   // gives 3, drops the overflow at the player's feet
});
```

`give(...)` fires `AddItemInPlayerInventoryEvent` for you. To build the ItemStack yourself:

```java
ItemStack item = ei.buildItem(1, Optional.of(player));
// or with initial variables / custom usage:
Map<String, Object> settings = new HashMap<>();
settings.put("Usage", 5);
settings.put("Variables", Map.of("power", "10"));
ItemStack custom = ei.buildItem(1, Optional.of(player), settings);
```

### Check whether an ItemStack is an ExecutableItem

```java
ExecutableItemObjectInterface eiObject = ExecutableItemsAPI.getExecutableItemObject(itemStack);
if (eiObject.isValid()) {
    String id = eiObject.getConfig().getId();
    int remainingUsage = eiObject.getUsage();
    Map<String, String> variables = eiObject.getVariablesValues();
    Optional<OfflinePlayer> owner = eiObject.getOwnerPlayer();
}
```

:::tip Performance
If you scan lots of items (inventories, chests...) and only care about specific ids, use the whitelisted lookup — custom (name/lore based) recognition only runs for those ids:

```java
ExecutableItemInterface ei = manager.getExecutableItem(itemStack, List.of("my_sword", "my_bow"));
```
:::

### List / validate ids

```java
List<String> ids = manager.getExecutableItemIdsList();
boolean exists = manager.isValidID("my_sword");
List<ExecutableItemInterface> all = manager.getAllExecutableItems();
```

### Cooldowns

```java
ei.addCooldown(player, 10, false);                    // 10 seconds, all activators
ei.addCooldown(player, 200, true, "activator1");      // 200 ticks, one activator

boolean onCd = ei.isInCooldown(player, "activator1");
double secondsLeft = ei.getCooldownRemaining(player, "activator1");
```

### Variables & usage on a specific item

```java
eiObject.updateVariable("power", "25", VariableUpdateType.SET);
eiObject.updateUsage(3);
eiObject.refreshItem();   // re-applies name/lore from the configuration
```

### Create a new ExecutableItem configuration from an ItemStack

```java
Optional<ExecutableItemInterface> created =
        ExecutableItemsAPI.registerNewExecutableItem(itemStack, "generated_id", "myfolder/");
```

## Events

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableItemActivateEvent` | ✅ | an activator of an EI is triggered for a player, **before** conditions run |
| `AddItemInPlayerInventoryEvent` | — | an EI enters a player inventory |
| `RemoveItemInPlayerInventoryEvent` | — | an EI leaves a player inventory (e.g. usage depleted) |
| `ExecutableItemsPostLoadEvent` | — | all EI configurations are loaded (`e.getManager()` available) |
| `RefreshExecutableItemEvent` (in `com.ssomar.score.events`) | — | an EI is refreshed (by command or auto-update activator) |

```java
@EventHandler
public void onActivate(ExecutableItemActivateEvent e) {
    // e.getPlayer(), e.getExecutableItemId(), e.getActivatorId(), e.getItem(), e.getSourceEvent()
    if (isInProtectedRegion(e.getPlayer())) {
        e.setCancelled(true);   // the activator will not run
    }
}
```

:::info
If your plugin adds an ExecutableItem to a player inventory **without** using `give(...)`, please fire `AddItemInPlayerInventoryEvent` yourself — it powers the `EI ENTER IN PLAYER INVENTORY` activator.
:::
