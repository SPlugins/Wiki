---
sidebar_position: 8
description: Add your own category and tab to the Codex of ExecutableGems with /eg new category, a folder and a category.yml.
---

# 🗂️ Create a category

A folder of `gems/` is a category. The gems of the earlier tutorials are in `gems/custom/`, so the Codex already has a **Custom** tab. Let's give it a real name.

In the commands of this page, replace `YourName` with your name.

## 1. Create the file

```
/eg new category custom #e0115f
```

| Part | Meaning |
|---|---|
| `custom` | The id of the category: the name of its folder in `gems/`. |
| `#e0115f` | Its colour. Optional: without it, the plugin picks one. |

The plugin writes `plugins/ExecutableGems/gems/custom/category.yml`, with every key explained in comments. It works for a new folder and for a folder that already holds gems.

:::info
A category shows in the Codex once it has a gem. For a brand new category, such as `/eg new category events`, add its first gem with `/eg new events <gem id>`.
:::

## 2. Edit the file

Open `plugins/ExecutableGems/gems/custom/category.yml` and make it look like this:

```yaml
name: '<#e0115f>Blood Moon'
color: '#e0115f'
icon: blood_opal
order: 5
goes-on: 'your whole kit'
description:
  - '<gray>The gems of the Blood Moon event.'
```

Run `/eg reload`, then open the Codex with `/eg codex`. The category has its tile, in the position set by `order`:

![The Codex home page with the new category first](https://media.ssomar.com/m/docs-img-eg-codex-home-custom.jpg)

And its page, with the other categories as tabs at the top:

![The page of the new category](https://media.ssomar.com/m/docs-img-eg-codex-custom.jpg)

Each gem has its own page too:

![The page of the Blood Opal](https://media.ssomar.com/m/docs-img-eg-codex-gem.jpg)

Tabs and pages are handled for you, however many categories and gems you add.

## Useful commands

```
/eg codex YourName custom
/eg codex YourName blood_opal
/eg list
```

See [every key of a category](../../configurations/category-configuration.md).
