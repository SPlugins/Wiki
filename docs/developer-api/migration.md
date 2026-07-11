---
sidebar_position: 9
title: 🔁 Migration from the old APIs
description: Move from the manual-jar / plugin-side APIs to the public SCore API and the Maven repository.
---

# 🔁 Migration from the old APIs

If you integrated with the SsomarDev plugins before the public Maven repository existed, this page maps the old way to the new one. The old classes still work but are **deprecated** and will be removed in a future major version.

## Dependency

| Before | Now |
|---|---|
| Download `SCore.jar` manually + `<scope>system</scope>` + `systemPath` | `com.ssomar:SCore` from `https://repo.ssomar.com/releases`, `<scope>provided</scope>` |
| Compile against the premium plugin jars | Not needed — all APIs are in SCore (open source) |

```xml
<repository>
    <id>ssomar</id>
    <url>https://repo.ssomar.com/releases</url>
</repository>

<dependency>
    <groupId>com.ssomar</groupId>
    <artifactId>SCore</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

## Entry points

| Deprecated | Replacement |
|---|---|
| `com.ssomar.executableblocks.api.ExecutableBlocksAPI` | `com.ssomar.score.api.executableblocks.ExecutableBlocksAPI` |
| `com.ssomar.executableevents.api.ExecutableEventsAPI` | `com.ssomar.score.api.executableevents.ExecutableEventsAPI` |
| `com.ssomar.myfurniture.api.MyFurnitureAPI` | `com.ssomar.score.api.myfurniture.MyFurnitureAPI` |
| `MyFurnitureAPI.getExecutableItemObject(...)` (misnamed) | `MyFurnitureAPI.getFurnitureObject(...)` |
| `ExecutableItemsAPI.registerNewExecutableItemObject(...)` | `ExecutableItemsAPI.registerNewExecutableItem(...)` |

The new facades return **interfaces** instead of implementation classes — your code no longer links against premium internals, and a missing plugin raises a clear `IllegalStateException` instead of a `NoClassDefFoundError` (guard with `isEnabled()`).

## Events

| Deprecated | Replacement |
|---|---|
| `com.ssomar.myfurniture.api.events.FurniturePlaceEvent` / `FurnitureBreakEvent` | same names in `com.ssomar.score.api.myfurniture.events` |
| `com.ssomar.myfurniture.api.load.MyFurniturePostLoadEvent` | same name in `com.ssomar.score.api.myfurniture.load` |
| `com.ssomar.executableevents.api.load.ExecutableEventsPostLoadEvent` | same name in `com.ssomar.score.api.executableevents.load` |
| `...executableblocks.events.mechanics.pistons.PistonBreakEBPEvent` | `com.ssomar.score.api.executableblocks.events.ExecutableBlockPistonBreakEvent` |
| `...executableblocks.events.mechanics.liquid.LiquidBreakEBPEvent` | `com.ssomar.score.api.executableblocks.events.ExecutableBlockLiquidBreakEvent` |

During the transition, both the legacy and the new events are fired — you can migrate listener by listener.

## Behavior changes to know about

- `ExecutableBlockBreakEvent.getBreakMethod()` now returns the API enum `ExecutableBlockBreakEvent.BreakMethod` instead of the internal `ExecutableBlockPlaced.BreakMethod` — recompile against the new SCore.
- Facade getters throw `IllegalStateException` when the target plugin is not installed/enabled (previously: `NoClassDefFoundError` or an empty manager). Use `isEnabled()` for optional dependencies.
- The managers now expose `isLoaded()` and the `*PostLoadEvent`s carry the manager — prefer these over arbitrary startup delays.
