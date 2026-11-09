---
sidebar_position: 4
description: How to configure the categories of the Codex in ExecutableGems with category.yml - name, colour, icon, order and description.
---

# 🗂️ Category configuration

Each folder of `gems/` is a category, and a tab in the Codex. A `category.yml` in the folder is optional: without it, the folder name is used.

```yaml
name: '<#e0115f>Blood Moon'
color: '#e0115f'
icon: blood_opal
order: 5
goes-on: 'your whole kit'
description:
  - '<gray>The gems of the Blood Moon event.'
```

| Key | Default | Description |
|---|---|---|
| `name` | the folder name | The name in the Codex. |
| `color` | `#ffcf4a` | Its colour. |
| `icon` | none | A gem of the folder (its Perfect tier is shown), or an item model `namespace:path`. |
| `order` | `100` | Its position in the Codex, smallest first. The shipped categories go from 10 to 70. |
| `goes-on` | none | Shown on its tile and on the tooltip of each of its gems. |
| `description` | none | Lines shown on its tile. |
| `hidden` | `false` | `true`: not shown in the Codex. The gems still work. |

See [Create a category](../questions-or-guides/tutorials/your-own-category.md).
