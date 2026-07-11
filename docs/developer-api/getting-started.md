---
sidebar_position: 1
title: 🚀 Getting started
description: Integrate your plugin with the SsomarDev plugins through the public SCore API — Maven/Gradle dependency, lifecycle, first calls.
---

# 🚀 Getting started

All SsomarDev plugins (ExecutableItems, ExecutableBlocks, ExecutableEvents, ExecutableCrafting, MyFurniture, CustomPiglinsTrades) expose their public API through **SCore**, our open-source core library. You compile only against artifacts from our public Maven repository:

**https://repo.ssomar.com** — resolvable by Maven and Gradle, no manual jar download.

## 1. Add the dependency

Maven:

```xml
<repositories>
    <repository>
        <id>splugins-repository-releases</id>
        <name>SPlugins Repository</name>
        <url>https://repo.ssomar.com/releases</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.ssomar</groupId>
        <artifactId>SCore</artifactId>
        <version>VERSION</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Gradle:

```groovy
repositories {
    maven {
        name = "spluginsRepositoryReleases"
        url = uri("https://repo.ssomar.com/releases")
    }
}

dependencies {
    compileOnly("com.ssomar:SCore:VERSION")
}
```

:::tip
Browse the available versions at [repo.ssomar.com](https://repo.ssomar.com) and the **javadoc** at `https://repo.ssomar.com/javadoc/releases/com/ssomar/SCore/VERSION` — your IDE also picks the javadoc up automatically (documentation on hover).
:::

Published artifacts:

| Artifact | Contents |
|---|---|
| `com.ssomar:SCore` | full jar — **contains every public API** (`com.ssomar.score.api.*`) |
| `com.ssomar.executablecrafting:ExecutableCrafting` | full jar (advanced recipe API) |
| `com.ssomar.executableblocks:ExecutableBlocks-API` | legacy API classes only |
| `com.ssomar.executableevents:ExecutableEvents-API` | legacy API classes only |
| `com.ssomar.myfurniture:MyFurniture-API` | legacy API classes only |

For almost every integration, **`com.ssomar:SCore` is the only dependency you need**.

## 2. Declare the dependency in your plugin.yml

```yaml
softdepend: [SCore, ExecutableItems, ExecutableBlocks, ExecutableEvents, ExecutableCrafting, MyFurniture, CustomPiglinsTrades]
```

(keep only the plugins you integrate with — `SCore` is always required)

## 3. Entry points

One facade per plugin, all under `com.ssomar.score.api.*`:

| Plugin | Facade | Guide |
|---|---|---|
| ExecutableItems | `com.ssomar.score.api.executableitems.ExecutableItemsAPI` | [ExecutableItems API](./executableitems) |
| ExecutableBlocks | `com.ssomar.score.api.executableblocks.ExecutableBlocksAPI` | [ExecutableBlocks API](./executableblocks) |
| ExecutableEvents | `com.ssomar.score.api.executableevents.ExecutableEventsAPI` | [ExecutableEvents API](./executableevents) |
| ExecutableCrafting | `com.ssomar.score.api.executablecrafting.ExecutableCraftingAPI` | [ExecutableCrafting API](./executablecrafting) |
| MyFurniture | `com.ssomar.score.api.myfurniture.MyFurnitureAPI` | [MyFurniture API](./myfurniture) |
| CustomPiglinsTrades | `com.ssomar.score.api.custompiglinstrades.CustomPiglinsTradesAPI` | [CustomPiglinsTrades API](./custompiglinstrades) |

The implementation is registered at runtime by each plugin when it enables:

- **If the plugin is not installed**, the facade getters throw `IllegalStateException`. Guard optional integrations with `isEnabled()`:

```java
if (ExecutableItemsAPI.isEnabled()) {
    // safe to use ExecutableItemsAPI.getExecutableItemsManager()
}
```

- **If the plugin is still loading**, lookups return empty results. Two ways to know the API is ready:

```java
// 1. Check the flag
if (ExecutableItemsAPI.getExecutableItemsManager().isLoaded()) { ... }

// 2. Listen to the PostLoad event (fired once all configurations are loaded)
@EventHandler
public void onLoaded(ExecutableItemsPostLoadEvent e) {
    ExecutableItemsManagerInterface manager = e.getManager();
    // lookups return complete results from here
}
```

Every plugin has the same lifecycle pair: `isLoaded()` + `<Plugin>PostLoadEvent`.

## 4. First integration in 30 seconds

```java
// Give the ExecutableItem "my_sword" to a player
ExecutableItemsAPI.getExecutableItemsManager()
        .getExecutableItem("my_sword")
        .ifPresent(item -> item.give(player));
```

Continue with the per-plugin guides in this section, the [events reference](./events), and the [migration guide](./migration) if you were using the old APIs.
