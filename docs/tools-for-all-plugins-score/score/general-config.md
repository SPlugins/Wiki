# General config

```yaml
locale: EN # Lang available:  AR, DE, EN, ES, FR, ID, RU, ZH
useMySQL: false
dbIP: 127.0.0.1
dbPort: 3306
dbName: myDB
dbUser: root
dbPassword: rootPassword
reduceDamageIndicatorWithProtolcolLib: false # if you have ProtocolLib installed, you can reduce the damage indicator amount (The amount of hearts that are displayed when you take damage)
silenceOutputs: # You can blacklist sentences that are sent to the console by The Ssomar plugins
  - "blacklist the sentence here"
globalSilenceOutputs: # You can blacklist sentences that are sent to the console by any plugin
  - "blacklist the sentence here"
disableCustomMetadataOnEntities: false # to disable the metadata fromSpawner and bowForce to be added to entities
beforeDeathIgnoreCancelledDamage: false # true: PLAYER_BEFORE_DEATH and ENTITY_BEFORE_DEATH are checked after the other plugins and don't run when one of them cancelled the damage (a damage cap, a protected region...)

#MIN : it will save only the modified settings
#NORMAL : it will save modified settings + frequently used settings
#MAX : it will save all settings (its very verbose)
configVerbosity: "NORMAL" # "NORMAL" or "MIN" or "MAX"
enableCommentsInConfig: true # It will add a description of each setting in comment in the yaml config file.
editorIconPreview: true # In the list editors (/ei editor, /eb editor ...), shows a preview of each object on its icon: display name, lore, enchantments and attributes. Set it to false to hide it.
breakChains: true # A block broken by a command (score run-block-command ... BREAK) runs the activators of the item again, which can break other blocks, and so on (stopped at 64 levels / 512 blocks). false: only the blocks broken by the commands of the activator itself, like BREAK
hologramsPlugin: "NONE" # The holograms plugin you want to use. By default None , it uses the vanilla holograms. You can use CMI, HOLOGRAPHIC_DISPLAYS or DECENT_HOLOGRAMS
```

:::warning silenceOutputs / globalSilenceOutputs
A console line is hidden when it **contains** one of these sentences. Keep them precise: a very short sentence hides many lines, and an empty entry (`- ""`) would hide the whole console. Empty entries are ignored, with a warning at startup.
:::

## editorIconPreview

In the list of `/ei editor` (and the other editors that list files), the icon of each object shows a preview under its ID and its activators, so you can check an item without opening it:

* `Name`: the display name, with its colors
* `Lore`: the first 8 lines, then `... +N lines`
* `Enchantments`: up to 5
* `Attributes`: up to 4

Long lines are cut at 40 characters. It is only a display: nothing is written in your files. If the option is not in your `config.yml`, it is enabled.

## breakChains

A block broken by a command (`BREAK`, `score run-block-command ... BREAK`) sends a break event, so the `PLAYER_BLOCK_BREAK` activators of the item run again for it. When those activators break other blocks by command, each new block runs them again: a pickaxe that mines in a + shape with `score run-block-command` keeps digging block after block.

* `breakChains: true` (default): these chains run. A block is broken once per chain, and a chain that goes past 64 levels or 512 blocks stops, with one warning in the console. A tree felled log by log stays far below these limits.
* `breakChains: false`: only the blocks broken by the commands of the activator itself are broken, like the `BREAK` command. The + shape pickaxe mines its 5 blocks, and a tree felled log by log by `score run-block-command` stops at its second log.

An empty air block is never broken by a command: it runs no activator. If the option is not in your `config.yml`, it is enabled: add the line yourself to change it.

## beforeDeathIgnoreCancelledDamage

The activators `PLAYER_BEFORE_DEATH` and `ENTITY_BEFORE_DEATH` (a custom totem, for example) run when a damage is about to kill a player or an entity.

* `beforeDeathIgnoreCancelledDamage: false` (default): the damage is checked at the same time as the damage listeners of the other plugins, so the result depends on the order of the plugins. A damage that another plugin cancels or lowers (a protected region, a damage cap made with an ExecutableEvents event with `cancelEvent` and `DAMAGE 8`...) can still run these activators, and the totem is used for nothing.
* `beforeDeathIgnoreCancelledDamage: true`: the damage is checked after the other plugins, with the damage they leave, and a damage that one of them cancelled never runs these activators.

If the option is not in your `config.yml`, it is disabled. To ignore a cancelled event for one activator only, use [noActivatorRunIfTheEventIsCancelled](/executableitems/configurations/activator-configuration/activators-features#noactivatorruniftheeventiscancelled).
