import CustomTag from '@site/src/components/CustomTag';

# General Configuration

On this page you will learn the configuration of ExecutableItems that is on config.yml locaeted in plugins/ExecutableItems/config.yml.


## Config.yml


```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://docs.splugins.net/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -
pickupLimit: -1
disabledWorlds: []
whitelistedWorlds: []
whitelistItemsPerWorld:
  myWorld:
  - myEI1
  - myEI2
  myWorld2:
  - myEI3
  - myEI4
premiumEnableCooldownForOp: true # Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentMessagePreventionErrorHeadDBError: false
disableBackup: false # <- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 # <- It will deletes backups older than this number of days
enableGarbageCollectorAfterReload: false # <- It will enable the garbage collector after a reload of the server
giveLimit: 100
enableTexturesPack: false # Only for 1.20.5+ servers
texturesPackUrl: https://github.com/Ssomar-Developement/items/raw/main/__textures__/ExecutableItems_Pack.zip # Only for 1.20.5+ servers
logs:
  dropped: true
  spawned: true
debugOnlyRun: false # /ei debug will only display the run debug message
itemCheckWithNBTAPI: false
config_12_04_2024: true
silentGive: false
updateOldItems: false
muteModification: false # With true It will mute the outputs of /ei modification or /ei console modification
```


#### pickupLimit

* Info: Integer value to limit the amount of ExecutableItems the player can have in his inventory.
* Example:

```yaml
pickupLimit: 3 # This means the player can have as maximum 3 ExecutableItems in his inventory.
```

#### disabledWorlds

* Info: List of world names used to blacklist worlds where all ExecutableItems will be disabled.
* Example:

```yaml
disabledWorlds: # In this example all ExecutableItems will be disabled on "HellOfBirds" and "automaticCar" worlds. 
- HellOfBirds
- automaticCar
```

#### whitelistedWorlds

* Info: List of world names used to whitelist worlds where all ExecutableItems will be enabled.
* Example:

```yaml
whitelistedWorlds: # In this example all ExecutableItems will be enabled on "AngelWorld" world
- AngelWorld
```

#### whitelistItemsPerWorld

* Info: List of ExecutableItems per world that are enabled.
* Example:

```yaml
whitelistItemsPerWorld: 
  myWorld: # ExecutableItems with ID myEI1 and myEI2 are enabled on "myWorld" world.
  - myEI1
  - myEI2
  myWorld2: # ExecutableItems with ID myEI3 and myEI4 are enabled on "myWorld2" world.
  - myEI3
  - myEI4
```

#### premiumEnableCooldownForOp <CustomTag type="premium" />

* Info: Boolean value that makes the op/operators/admins players not have cooldown.
* Example:

```yaml
premiumEnableCooldownForOp: true
```

#### checkVersionMsg

* Info: Boolean value to display if there is a new update for ExecutableItems.
* Example:

```yaml
checkVersionMsg: true
```

#### disableTestItems

* Info: Boolean value to disable the default items.
  * It improves performances due to some type of activators not being registered.
* Example:

```yaml
disableTestItems: false
```

#### silentMessagePreventionErrorHeadDBError

* Info: Boolean value to mutes the message prevention error from plugin HeadDB.
* Example:

```yaml
silentMessagePreventionErrorHeadDBError: false
```

#### disableBackup

* Info: Boolean value to disable the backups that ExecutableItems does on the back up folder on each start / reload of the server.
* Example:

```yaml
disableBackup: false
```

#### deleteBackupsAfterDays

* Info: Integer value that represents the amount of days to save the backup. If the backup is older than those days then it will be deleted..
* Example:

```yaml
deleteBackupsAfterDays: 7
```

#### enableGarbageCollectorAfterReload

* Info: Boolean value to enable the garbage collector after a reload of the server.
  * If you don't know what this is probably its because you don't need it. You can read more information on google, its long to explain here and its not the objective.
* Example:

```yaml
enableGarbageCollectorAfterReload: false
```

#### giveLimit

* Info: Integer value that represents a limit/cap for the ExecutableItems command of give (/ei give).
* Example:

```yaml
giveLimit: 100
```

#### enableTexturesPack

* Info: Boolean value to enable or disable the texture pack of "texturesPackUrl".
  * This feature only works on 1.20.5++ servers.
* Example:

```yaml
enableTexturesPack: false
```

#### texturesPackUrl

* Info: URL of a texture pack to enable on your server.
  * This feature only works on 1.20.5++ servers.
* Example:

```yaml
texturesPackUrl: https://github.com/Ssomar-Developement/items/raw/main/__textures__/ExecutableItems_Pack.zip
```

#### logs

* Info: Feature to enable console logs to know what is happening with your ExecutableItems.
  * dropped: Boolean value to log each time an ExecutableItem is dropped on your server.
  * spawned: Boolean value to log each time an ExecutableItem is spawned on your server.
* Example:

```yaml
logs:
  dropped: true
  spawned: true
```

#### debugOnlyRun

* Info: Boolean value for debug ExecutableItems command (/ei debug) to only show the debug message when the activator run (this means only when all conditions met)
* Example:

```yaml
debugOnlyRun: false
```

#### itemCheckWithNBTAPI

* Info: Boolean value to enable NBTAPI plugin to handle item check detections.
  * It requires NBTAPI plugin.
  * It should improve performances.

#### silentGive:

* Info: Boolean value to silence the output of the give ExecutableItems command (/ei give) in the console.
* Example:

```yaml
silentGive: false
```

#### updateOldItems

* Info: Boolean value to enable updating old items NBT Tag. This doesn't mean the update of your ExecutableItems configs, that is automatically, this means if there is a change of NBT across one of the plugin's update, the NBT will be updated too.
* Example:

```yaml
updateOldItems: false
```

#### muteModification

* Info: Boolean value to mute or not the outputs generated by the command of /ei modification or /ei console modification
* Example:

```yaml
muteModification: true
```
