---
sidebar_position: 2
description: How to update ExecutableGems without losing your gems, and how to get the new gems of an update.
---

# How to update correctly

1. Stop the server.
2. Replace the `.jar` of ExecutableGems. Update SCore and ExecutableItems at the same time.
3. Start the server.

## What happens to your files

| File | On update |
|---|---|
| `gems/`, `runewords/` | Kept as they are |
| `config.yml` | Kept. A new setting uses its default value until you add it. |
| `forges.yml` | Kept |
| `pack/ExecutableGems_Pack.zip` | **Replaced** by the one of the new version |

Gems already socketed in items stay there. If you delete a gem file, the socket keeps its data, and the gem works again if the file comes back.

## Getting the new gems of an update

New gems and runewords are only installed on the very first start, so an update never brings back what you deleted.

To get them, take them from the jar: open it as a zip and copy the files you want from `gems/` and `runewords/` into your folders, then run `/eg reload`.
