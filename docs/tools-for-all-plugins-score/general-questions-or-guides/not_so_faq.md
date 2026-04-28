---
description: Questions that are too specific to be asked often
---

# Not So Frequently Asked Questions

:::info
## Q: Texture Pack from Ssomar's plugins fail to download for its users
```log
[20:27:58 ERROR]: Command exception: /ei download-default-pack
org.bukkit.command.CommandException: Unhandled exception executing command 'ei' in plugin ExecutableItems v7.25.10.26
        at org.bukkit.command.PluginCommand.execute(PluginCommand.java:47) ~[paper-api-1.21.8-R0.1-SNAPSHOT.jar:?]
        at io.papermc.paper.command.brigadier.bukkit.BukkitCommandNode$BukkitBrigCommand.run(BukkitCommandNode.java:83) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at com.mojang.brigadier.context.ContextChain.runExecutable(ContextChain.java:73) ~[brigadier-1.3.10.jar:?]
        at net.minecraft.commands.execution.tasks.ExecuteCommand.execute(ExecuteCommand.java:30) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.execution.tasks.ExecuteCommand.execute(ExecuteCommand.java:13) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.execution.UnboundEntryAction.lambda$bind$0(UnboundEntryAction.java:8) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.execution.CommandQueueEntry.execute(CommandQueueEntry.java:5) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.execution.ExecutionContext.runCommandQueue(ExecutionContext.java:105) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.Commands.executeCommandInContext(Commands.java:451) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.Commands.performCommand(Commands.java:357) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.commands.Commands.performCommand(Commands.java:345) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.network.ServerGamePacketListenerImpl.performUnsignedChatCommand(ServerGamePacketListenerImpl.java:2313) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.network.ServerGamePacketListenerImpl.lambda$handleChatCommand$12(ServerGamePacketListenerImpl.java:2286) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.TickTask.run(TickTask.java:18) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:155) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1450) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:176) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:129) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1430) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1424) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.util.thread.BlockableEventLoop.runAllTasks(BlockableEventLoop.java:118) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:1563) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1253) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at net.minecraft.server.MinecraftServer.lambda$spin$2(MinecraftServer.java:310) ~[paper-1.21.8.jar:1.21.8-60-29c8822]
        at java.base/java.lang.Thread.run(Thread.java:1583) ~[?:?]
Caused by: io.netty.channel.ChannelPipelineException: com.ssomar.score.pack.spigot.interceptor.ClientConnectionInterceptor$2 is not a @Sharable handler, so can't be added or removed multiple times.
        at io.netty.channel.DefaultChannelPipeline.checkMultiplicity(DefaultChannelPipeline.java:549) ~[netty-transport-4.1.118.Final.jar:4.1.118.Final]
        at io.netty.channel.DefaultChannelPipeline.internalAdd(DefaultChannelPipeline.java:166) ~[netty-transport-4.1.118.Final.jar:4.1.118.Final]
        at io.netty.channel.DefaultChannelPipeline.addFirst(DefaultChannelPipeline.java:209) ~[netty-transport-4.1.118.Final.jar:4.1.118.Final]
        at io.netty.channel.DefaultChannelPipeline.addFirst(DefaultChannelPipeline.java:307) ~[netty-transport-4.1.118.Final.jar:4.1.118.Final]
        at io.netty.channel.DefaultChannelPipeline.addFirst(DefaultChannelPipeline.java:288) ~[netty-transport-4.1.118.Final.jar:4.1.118.Final]
        at SCore-5.25.10.26.jar/com.ssomar.score.pack.spigot.interceptor.ClientConnectionInterceptor.install(ClientConnectionInterceptor.java:46) ~[SCore-5.25.10.26.jar:?]
        at SCore-5.25.10.26.jar/com.ssomar.score.pack.spigot.InjectSpigot.unregisterInjector(InjectSpigot.java:74) ~[SCore-5.25.10.26.jar:?]
        at SCore-5.25.10.26.jar/com.ssomar.score.pack.custom.PackManager.removePack(PackManager.java:67) ~[SCore-5.25.10.26.jar:?]
        at ExecutableItems-7.25.10.26 (1).jar/com.ssomar.executableitems.pack.ExecutableItemsPack.unregisterPack(ExecutableItemsPack.java:31) ~[ExecutableItems-7.25.10.26 (1).jar:?]
        at ExecutableItems-7.25.10.26 (1).jar/com.ssomar.executableitems.commands.CommandsClass.runCommand(CommandsClass.java:198) ~[ExecutableItems-7.25.10.26 (1).jar:?]
        at SCore-5.25.10.26.jar/com.ssomar.score.commands.score.CommandsClassAbstract.onCommand(CommandsClassAbstract.java:79) ~[SCore-5.25.10.26.jar:?]
        at org.bukkit.command.PluginCommand.execute(PluginCommand.java:45) ~[paper-api-1.21.8-R0.1-SNAPSHOT.jar:?]
        ... 25 more
```
### A: Because the host has a firewall that block the selfhost option
Context: https://discord.com/channels/701066025516531753/1431960014142308373/1432408229161472061
:::

## Q: Sometimes a ProtocolLib related error mentions something with "STAB"

### A: Update your ProtocolLib plugin jar. The spigot page doesn't give you the appropriate version suited for 1.21.9+ so you have to visit their dev build page to get it.