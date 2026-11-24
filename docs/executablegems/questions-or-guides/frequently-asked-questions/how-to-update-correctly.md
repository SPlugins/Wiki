---
sidebar_position: 2
description: How to update ExecutableGems - what follows a new version by itself (texts, settings), what never changes (your gems), and how to get the new and changed gems with /eg defaults.
---

# How to update correctly

1. Stop the server.
2. Replace the `.jar` of ExecutableGems. Update SCore and ExecutableItems at the same time.
3. Start the server.
4. Read the console: once per version, the plugin tells you what the update brings.

Nothing of yours is overwritten by an update. The plugin tells you what is new, and you choose what to take.

## What happens to your files

| File | On update |
|---|---|
| `gems/`, `runewords/` | **Kept as they are.** The new and changed gems of the update are announced once in the console and never installed by themselves. See [below](#getting-the-new-gems-of-an-update). |
| `config.yml` | **Kept, never rewritten.** A new setting uses its default value until you add it. See [New settings](#new-settings). |
| `lang/<language>.yml` | **Follows the update**, without touching the texts you changed. See [Texts](#texts). |
| `forges.yml`, `pending.yml` | Kept |
| `pack/ExecutableGems_Pack.zip` | **Replaced** by the one of the new version |

Gems already socketed in items stay there. If you delete a gem file, the socket keeps its data and shows "Unknown gem", and the gem works again if the file comes back.

:::warning
If you merged the EG pack into the pack of another plugin, export it and merge it again after each update. See [The resource pack on your server](resource-pack.md).
:::

## New settings

Your `config.yml` is yours: the plugin never rewrites it, so your comments and your layout stay. When an update adds settings:

- they use their default value;
- the console lists them, once per version;
- the plugin writes `plugins/ExecutableGems/config-reference.yml`: the `config.yml` shipped with your version, with its comments.

```
[ExecutableGems] config.yml: 2 setting(s) of this version are not in your file, their default value is used: ui.xp-write-interval, forge.max-per-player. Copy them from config-reference.yml (the shipped file, with its comments) to change them. Your config.yml is not modified. (Said once per version.)
```

To change one of them, copy it from `config-reference.yml` into your `config.yml`, at the same place, then run `/eg reload`. The plugin never reads `config-reference.yml`: it is only there for you.

## Texts

The language file you use follows the update by itself:

| A text... | On update |
|---|---|
| you changed | Never touched. |
| you never changed | Takes the new wording, if the update rewords it. |
| added by the update | Written into your file (in English, in a language of your own). |

Before it writes your file, the plugin saves a copy as `lang/.shipped/<language>.before-update.yml`. Don't edit the folder `lang/.shipped/`: the plugin uses it to tell your texts from its own.

## Getting the new gems of an update

The shipped gems and runewords are installed on the very first start only. After that, the files are yours: an update never brings back a gem you deleted, and never replaces one you edited.

When an update ships new gems, or changes shipped ones (a fix, a balance change), the console says it once:

```
[ExecutableGems] 2 gem / runeword file(s) shipped with this version are not on this server: ... Nothing is installed by itself: /eg defaults install new adds them, then /eg reload.
```

Then use `/eg defaults`. It needs `executablegems.admin` and works from the console.

### 1. See what the update brings

```
/eg defaults
```

It compares each shipped file with yours and sorts them:

| Line | Meaning |
|---|---|
| New, not installed | Shipped with this version, never on your server. |
| Changed in this version, not edited by you | The update changed it, and you never touched it. |
| Changed in this version and edited by you | Both of you changed it. Yours is kept. |
| Edited by you, unchanged in this version | Nothing to receive. |
| Different from the shipped file, origin unknown | Edited by you, or installed by an older version. Kept as it is. |
| Deleted by you | You removed it. It is not brought back. |
| Moved by you to another folder | Found in another folder. It is left there. |

### 2. Look at the differences

```
/eg defaults diff vampire
```

It shows the lines that differ: `-` for your file, `+` for the shipped one. The id is the file name without `.yml`. For a category file, it is `<folder>/category`, such as `runes/category`.

### 3. Install what you want

| Command | What it installs |
|---|---|
| `/eg defaults install new` | The new files. |
| `/eg defaults install all` | The new files, and the changed ones you never edited. |
| `/eg defaults install <id>` | One file. It also brings back a file you deleted. |
| `/eg defaults install <id> force` | One file, even if you changed it. |
| `/eg defaults install all force` | The new files, the changed ones, and the files of the lines *Changed in this version and edited by you* and *origin unknown*. |

A file you changed is never replaced without `force`. With `force`, your file is first copied to `plugins/ExecutableGems/defaults-backup/<date>/`, so you can take it back.

### 4. Load them

```
/eg reload
```

A new native enchantment needs a restart instead.

## The file update-state.yml

`plugins/ExecutableGems/update-state.yml` is written by the plugin. It remembers what it already told you about this version, and what the shipped gem files looked like when they were installed, to tell your edits from its own. Don't edit it.

Deleting it is safe: the plugin tells you everything again, and treats every shipped file that differs from its own as edited by you.
