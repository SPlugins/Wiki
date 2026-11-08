---
sidebar_position: 8
description: Add your own category and tab to the Codex of ExecutableGems with a folder and a category.yml.
---

# 🗂️ Create a category

A folder of `gems/` is a category. The gems of the earlier tutorials are in `gems/custom/`, so the Codex already has a **Custom** tab. Let's give it a real name.

## The file

Create `gems/custom/category.yml`:

```yaml
name: '<#e0115f>Blood Moon'
color: '#e0115f'
icon: blood_opal
order: 5
goes-on: 'your whole kit'
description:
  - '<gray>The gems of the Blood Moon event.'
```

`/eg reload`, then open the Codex. The category has its tile, in the position set by `order`:

![The Codex home page with the new category first](</img/executablegems/codex-home-custom.jpg>)

And its page, with the other categories as tabs at the top:

![The page of the new category](</img/executablegems/codex-custom.jpg>)

Each gem has its own page too:

![The page of the Blood Opal](</img/executablegems/codex-gem.jpg>)

Tabs and pages are handled for you, however many categories and gems you add.

## Useful commands

```
/eg codex YourName custom
/eg codex YourName blood_opal
/eg list
```

See [every key of a category](../../configurations/category-configuration.md).
