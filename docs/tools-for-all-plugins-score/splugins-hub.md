---
title: SPlugins Hub, SCore Screens and the SPlugins assistant
description: >-
  /score hub opens the SPlugins Hub: your SPlugins plugins, help, news and the
  SPlugins assistant that reads and fixes your configurations in game. How the
  menu is shown (PINNED, FLOATING, chest) and every config option.
---
# 🧭 SPlugins Hub

`/score hub` (or `/splugins` when no other plugin uses it) opens the **SPlugins Hub**, a dashboard for server admins:

| Tab | What you find there |
| --- | --- |
| Home | Your SPlugins plugins, their version, free or premium, number of items / blocks…, updates available, load errors |
| Assistant | The **SPlugins assistant**: ask a question about your server, it reads your configurations (see below) |
| Manage | Per plugin: reload, editor, debug, wiki page, changelog |
| Help | Wiki links, Discord, and a **diagnostic report** copied to your clipboard (paste it in your ticket) |
| Discover | Everything of [splugins.net/store](https://splugins.net/store): bundles, our other plugins, packs (official and from the community), the Pack Studio, the subscription |
| News | Blog posts and promotions (a **New** badge shows unread news) |
| Links | splugins.net, docs, Discord, YouTube, review pages, suggestions |

Permission: `score.hub` (OP by default). Players without it never see anything new.

## How the menu is shown

The Hub uses **SCore Screens**, which picks the best way your server and the player's client allow:

| Mode | When | What you see |
| --- | --- | --- |
| **PINNED** | 1.21.4+, `screens.pinned-pack: true`, pack accepted | A panel glued to your screen, with a mouse-like arrow that follows your head |
| **FLOATING** | 1.19.4+ | A panel in front of you; the crosshair is the cursor |
| **Chest** | Always (1.8 → 26.x), Bedrock, riding, falling, swimming, in combat | A classic chest menu with the same content |

In PINNED and FLOATING you are seated while the menu is open: **look** at an element, **click** to use it, use the
**mouse wheel** to change page, **sneak** to close. Any damage or teleport closes the menu.

Force a mode for yourself until you reconnect: `/score hub chest`, `/score hub floating` (or `classic`), `/score hub pinned`.

### The PINNED cursor pack

PINNED needs a small resource pack (a text shader and the arrow). It is **opt-in** and only sent to players with
`score.hub`, on top of your other packs. The first time, the Hub asks *"Can you see the arrow cursor?"*: if another
pack or a shader mod replaces our shader, answer **No** and you will get FLOATING. `/score hub pinned` asks again.

Images (plugin logos, previews in Discover and News) are only drawn in PINNED. Elsewhere an item icon is shown.

## 🤖 SPlugins assistant

The **Assistant** tab talks to the same assistant as [splugins.net](https://splugins.net) and Discord, but it
**sees your server**: it reads the configurations of your SPlugins plugins, their load errors and versions, and it
checks every configuration it proposes with the real loader of the plugin before showing it to you.

It is **off by default**. To turn it on:

1. Set `ai.enabled: true` in `plugins/SCore/config.yml` and run `/score reload`.
2. `/score hub` › **Assistant** › **Link this server**: a code is shown. Enter it on
   [splugins.net/dashboard/servers](https://splugins.net/dashboard/servers) (logged in with your splugins.net account).
3. Ask your question. The questions use the plan of the linked account (same quota as on the website; the
   [subscription](https://splugins.net/subscription) raises it).

Sent with each question: the question, the versions of your plugins and their load errors (shown in the question
window). Nothing else leaves your server unless the assistant asks for a file with one of its tools; it can only
read the folders of the SPlugins plugins.

### Changes made by the assistant

For admins with the permission `score.ai.write` (OP by default), the assistant can also **propose changes**: one form
lists every file it wants to create or modify, with the diff. Tick **Apply** for the ones you want, add a comment if
you want another version, and confirm. **Nothing is written before you confirm.**

- A backup of each file is kept in `plugins/SCore/ai-backups/`.
- **↶ Undo the last change** in Hub › Assistant, or `/score hub ai undo`, puts the file back (or deletes it if the
  assistant created it).
- Without the 1.21.6+ dialog windows, the form comes in the chat: `[✔ Apply]` / `[✘ Refuse]`
  (`/score hub ai apply <id>`, `/score hub ai refuse <id>`).

If the assistant finds a bug or you ask for a new feature, it can also propose a **ticket** in the same form; once you
tick it, the ticket is posted on our Discord (bugs or suggestions forum).

### Conversations

Your current conversation (last 10 exchanges) is kept in `plugins/SCore/ai-conversations/` and can be resumed from the
Hub, even after a restart. **New conversation** keeps the previous one in **Conversation history** (the last 20). The
same conversations are on splugins.net (with the name of the server).

To unlink the server: Hub › Assistant › **Unlink** (or revoke it on splugins.net/dashboard/servers).

## Config (`plugins/SCore/config.yml`)

```yaml
screens:
  enabled: true            # false = every SCore screen opens as a chest
  prefer-mode: AUTO        # AUTO | PINNED | FLOATING | CHEST
  pinned-pack: false       # send the cursor pack to the players with score.hub
  forced-chest: []         # screen ids always shown as a chest, e.g. [ "splugins:hub" ]
hub:
  splugins-alias: true     # add /splugins if it is free
  remote-catalog: true     # anonymous GET of splugins.net/api/public/catalog (versions, packs, news); nothing is sent
  join-notification: false # clickable line for admins when they join
  review-reminder: false   # reminder to leave a review after some days
  review-reminder-days: 14
  pause-menu-button: false # Paper 1.21.6+: "SPlugins Hub" button in the pause menu (restart needed)
ai:
  enabled: false           # the SPlugins assistant (Hub > Assistant)
  url: "https://splugins.net/api/v1/server"
  server-name: ""          # name shown in "Linked servers" on splugins.net (empty = the MOTD)
```

The pause menu button is a data pack written in your main world. Vanilla shows it to **every** player; it opens the
Hub only for players with `score.hub`.

| Permission | Default | What it gives |
| --- | --- | --- |
| `score.hub` | OP | Open the Hub and ask the assistant |
| `score.ai.write` | OP | Let the assistant propose changes of files (applied only after your confirmation) |

## FAQ

- **The panel is too close / inside a wall.** In FLOATING the panel comes closer when a block is in front of you, so it is never hidden.
- **I see the arrow moving the wrong way.** Another pack replaces our shader: run `/score hub pinned` and answer **No**, or use `/score hub floating`.
- **Nothing happens when I click a link.** A server can't open your browser: the link is shown in a window (1.21.6+) or in the chat, click it there.
- **The assistant says my server is not linked.** The link was revoked on splugins.net: link it again from Hub › Assistant.
