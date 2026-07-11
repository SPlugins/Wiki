---
sidebar_position: 5
title: ⚡ ExecutableEvents API
description: Look up ExecutableEvents configurations and observe/cancel their activations.
---

# ⚡ ExecutableEvents API

Entry point: `com.ssomar.score.api.executableevents.ExecutableEventsAPI`

```java
ExecutableEventsManagerInterface manager = ExecutableEventsAPI.getExecutableEventsManager();
```

## Configurations

```java
Optional<? extends ExecutableEventInterface> eeOpt = manager.getExecutableEvent("my_event");
List<String> ids = manager.getExecutableEventIdsList();
List<? extends ExecutableEventInterface> all = manager.getAllExecutableEvents();

// ExecutableEvents are organized in folders
List<String> folders = manager.getFoldersNames();
List<? extends ExecutableEventInterface> ofFolder = manager.getExecutableEventsOfFolder("dungeons");
```

## Events

| Event | Cancellable | Fired when |
|---|---|---|
| `ExecutableEventActivateEvent` | ✅ | an activator of an EE is triggered, **before** its conditions run |
| `ExecutableEventsPostLoadEvent` | — | all EE configurations are loaded |

```java
@EventHandler
public void onActivate(ExecutableEventActivateEvent e) {
    // e.getPlayer() may be null — EE activators can be world/server bound
    // e.getExecutableEventId(), e.getActivatorId(), e.getSourceEvent()
    if ("maintenance_zone".equals(e.getExecutableEventId())) {
        e.setCancelled(true);
    }
}
```

:::info
`ExecutableEventActivateEvent` is thread-aware: it is fired as an async event when the activator runs off the main thread. Do not access world state from the listener without checking `e.isAsynchronous()`.
:::
