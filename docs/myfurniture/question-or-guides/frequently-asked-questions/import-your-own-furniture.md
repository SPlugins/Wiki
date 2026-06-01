---
description: >-
  How to import a custom texture pack or .bbmodel file into MyFurniture so the plugin
  generates your furniture configs and resource pack automatically.
---

# Import your own Furniture

:::tip New to MyFurniture?
See [Getting Started](/myfurniture/question-or-guides/tutorials/getting-started) for a full step-by-step walkthrough including `.bbmodel` import and config reference.
:::


## Text tutorial

To import your own furniture pack, it's simple, here are the few steps to follow:

1. The server needs to be loaded with the plugin
2. Drag and drop your texture pack folder (not zip) into `plugins/Myfurniture/__textures__`
3. do `/mf pack` in-game or `mf pack` in your console
4. The plugin will load your custom furniture into the plugin, it can take some minutes
5. Once it's done you will see the file MyFurniturePack.zip in the \_\_textures\_\_ folder
6. Then two options :
   1. If you enabled the feature selfHostPack, you have nothing to do, the pack will be automatically hosted and shared to your players.
   2. If you didn't enabled this feature, you have to host your pack
      1. You can now host it, for example on [https://mc-packs.net/](https://mc-packs.net/)
      2. You can copy the URL of your texture pack (it ends with .zip)
      3. Paste it after `texturesPackUrl:` into the config of MyFurniture
      4. Run /mf reload
      5. Disconnect and reconnect
      6. And it should be good

## Video tutorial