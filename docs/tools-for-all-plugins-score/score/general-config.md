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

#MIN : it will save only the modified settings
#NORMAL : it will save modified settings + frequently used settings
#MAX : it will save all settings (its very verbose)
configVerbosity: "NORMAL" # "NORMAL" or "MIN" or "MAX"
enableCommentsInConfig: true # It will add a description of each setting in comment in the yaml config file.
editorIconPreview: true # In the list editors (/ei editor, /eb editor ...), shows a preview of each object on its icon: display name, lore, enchantments and attributes. Set it to false to hide it.
hologramsPlugin: "NONE" # The holograms plugin you want to use. By default None , it uses the vanilla holograms. You can use CMI, HOLOGRAPHIC_DISPLAYS or DECENT_HOLOGRAMS
```

## editorIconPreview

In the list of `/ei editor` (and the other editors that list files), the icon of each object shows a preview under its ID and its activators, so you can check an item without opening it:

* `Name`: the display name, with its colors
* `Lore`: the first 8 lines, then `... +N lines`
* `Enchantments`: up to 5
* `Attributes`: up to 4

Long lines are cut at 40 characters. It is only a display: nothing is written in your files. If the option is not in your `config.yml`, it is enabled.
