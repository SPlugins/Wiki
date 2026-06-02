---
description: >-
  Holograms attached to ExecutableBlocks won't disappear — causes and fixes
  including WorldGuard flag conflicts and plugin reload issues.
---

# Holograms Won't Vanish

## Symptom

After breaking or reloading an ExecutableBlock, the hologram (title text) displayed
above it remains in the world and cannot be removed.

## Common causes and fixes

### WorldGuard flag conflicts

If your server runs WorldGuard, the region's `entity-damage` or `block-break` flags
may prevent the hologram entity from being removed. Try:

1. Temporarily disable WorldGuard for the affected region and test again.
2. Add the `entity-damage` flag to the region: `/region flag <region> entity-damage allow`

### Stale holograms after a crash or hard stop

If the server stopped unexpectedly (crash, `kill` process), hologram entities may not
have been cleaned up. A **full server restart** (stop + start, not just `/reload`)
forces all entities to be re-spawned from scratch.

### Reload timing issue

Running `/eb reload` while players are standing near blocks can sometimes leave
orphaned holograms. After reloading, move away from the block and run `/eb reload`
again, or do a full restart.

## If the problem persists

Join the [Discord](https://discord.com/invite/TRmSwJaYNv) and share:
- Your Minecraft version
- Which hologram plugin you are using (HolographicDisplays, DecentHolograms, or CMI)
- A screenshot of the stuck hologram
- Your `logs/latest.log` around the time of the issue
