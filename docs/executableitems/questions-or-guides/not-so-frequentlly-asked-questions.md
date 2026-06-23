# Not so frequentlly asked questions

### Q: I have 2 servers with the same plugins and everything but in server1, the complex item works but in server2, it doesn't A: Try the following solutions:

:::info
* Reinstall ExecutableItems and SCore on both servers
:::

Reference: [https://discord.com/channels/701066025516531753/1300780091789545553](https://discord.com/channels/701066025516531753/1300780091789545553)\
(you must join the server first and have access to premium ei support to see the said post)\
(or you can contact me about how to transcript a post because idk how to -Special70)

### Q: SQL Related issues are appearing

A: Assuming you're using 1.20 for example, try using the latest version of 1.20 (like 1.20.6)

### Q: My server is using Mohist 1.19.2 and the chat/text buttons in the chat editor does not work. 

A: Change your server jar from Mohist 1.19.2 to Arclight Forge 1.19.2

Reference: [https://discord.com/channels/701066025516531753/1363296318755438764/1363509104798208160](https://discord.com/channels/701066025516531753/1363296318755438764/1363509104798208160)

### Q: The texture in my custom texture isn't working

A: Assuming that the png doesn't seem corrupted, go to [https://cloudconvert.com/png-converter](https://cloudconvert.com/png-converter) for example and re-convert the png file and try again

### Q: The ingame editor is facing errors when opened 

A: This one needs extra explanation

For example, you may have lots of items and when you go to the next page, this happens. For this scenario, the error posted in console shows as follows:

```
[10:04:51 ERROR]: Could not pass event InventoryClickEvent to SCore v5.25.6.1
java.util.NoSuchElementException: No value present
	at java.base/java.util.Optional.get(Optional.java:143) ~[?:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.features.custom.armortrim.ArmorTrim.getArmorTrim(ArmorTrim.java:77) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.features.custom.armortrim.ArmorTrim.applyOnItemMeta(ArmorTrim.java:178) ~[SCore-5.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItemObject.refreshMeta(ExecutableItemObject.java:269) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItemObject.refresh(ExecutableItemObject.java:238) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItemObject.build(ExecutableItemObject.java:221) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItem.buildItem(ExecutableItem.java:717) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItem.buildItem(ExecutableItem.java:697) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItem.buildItem(ExecutableItem.java:770) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at ExecutableItems_Prem-7.25.6.1.jar/com.ssomar.executableitems.executableitems.ExecutableItem.getIconItem(ExecutableItem.java:221) ~[ExecutableItems_Prem-7.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.sobject.menu.SObjectsWithFileEditor.load(SObjectsWithFileEditor.java:101) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.sobject.menu.SObjectsEditorAbstract.goNextPage(SObjectsEditorAbstract.java:86) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.sobject.menu.NewSObjectsManagerEditor.nextPage(NewSObjectsManagerEditor.java:154) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.editor.NewGUIManager.clicked(NewGUIManager.java:116) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.editor.NewGUIManager.clicked(NewGUIManager.java:75) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.editor.NewEditorInteractionsListener.manage(NewEditorInteractionsListener.java:164) ~[SCore-5.25.6.1.jar:?]
	at SCore-5.25.6.1.jar/com.ssomar.score.editor.NewEditorInteractionsListener.onInvClick(NewEditorInteractionsListener.java:145) ~[SCore-5.25.6.1.jar:?]
	at co.aikar.timings.TimedEventExecutor.execute(TimedEventExecutor.java:80) ~[paper-api-1.21.4-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:70) ~[paper-api-1.21.4-R0.1-SNAPSHOT.jar:?]
	at io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:54) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:628) ~[paper-api-1.21.4-R0.1-SNAPSHOT.jar:?]
	at net.minecraft.server.network.ServerGamePacketListenerImpl.handleContainerClick(ServerGamePacketListenerImpl.java:3208) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.network.protocol.game.ServerboundContainerClickPacket.handle(ServerboundContainerClickPacket.java:69) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.network.protocol.game.ServerboundContainerClickPacket.handle(ServerboundContainerClickPacket.java:14) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.network.protocol.PacketUtils.lambda$ensureRunningOnSameThread$0(PacketUtils.java:29) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.TickTask.run(TickTask.java:18) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1448) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:176) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1428) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1422) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.util.thread.BlockableEventLoop.managedBlock(BlockableEventLoop.java:139) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.managedBlock(MinecraftServer.java:1379) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.waitUntilNextTick(MinecraftServer.java:1387) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1264) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at net.minecraft.server.MinecraftServer.lambda$spin$2(MinecraftServer.java:310) ~[paper-1.21.4.jar:1.21.4-227-7675321]
	at java.base/java.lang.Thread.run(Thread.java:1570) ~[?:?]
```

Based on the first few lines of the error, it mentioned things like armor trim attributes, meaning there's something wrong that happened in the armor trim settings. 

To know which item exactly caused the error, check the rightmost item in the display.

![](https://media.ssomar.com/m/docs-img-image-451.png) The id is berserker\_blade. Now go to your items folder and find the item next to berserker\_blade.

![](https://media.ssomar.com/m/docs-img-image-452.png) Now you know that this file in specific caused the issue.

How to fix it?\
![](https://media.ssomar.com/m/docs-img-image-453.png) Try to remove these 4 lines and reload the plugin.

The question is, does it solve the issue? Not entirely. The cause of such issue may vary from case-to-case. Please create a new post at the bugs-errors-issues channel in the discord so this issue can at least be prevented in the future updates.

### Q: I input the customModelData value to a chestplate. The inv custom texture works except the worn armor render. What happened?

A: Configure the equip model at https://docs.splugins.net/executableitems/configurations/item-configuration/item-features#equippable-features
:::info
Snippet of the ei item config 
```yml
equippableFeatures:
    enable: true
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "nexo:super" # Enter the equip model of your custom texture
    cameraOverlay: "nexo:super" # You can remove this if you don't need it

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```
:::

:::info
Reference nexo armor config
```yml
super_chestplate:
  material: NETHERITE_CHESTPLATE
  name: '&6Super Chestplate'
  type: chestplate
  slot: chest
  Pack:
    generate_model: true
    parent_model: item/generated
    textures:
    - super_set:armors/super_set_chestplate_icon.png
    - layer1: super_set:models/armor/super_armor_layer_1
    custom_model_data: 10002
  components:
    equippable:
      enabled: true
      slot: chest
      max-stack: 1
      durability: 592
  stats:
    armor: 8
    toughness: 2
  Components:
    equippable:
      slot: CHEST
      asset_id: nexo:super
```
:::

Context: https://discord.com/channels/701066025516531753/1428177971700830218