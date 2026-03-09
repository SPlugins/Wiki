# How to disable the in-built custom texture pack?

If you desire to disable the textures feature of ExecutableItems, go to it's config.yml

```yaml
# ----------------------------------
# -
#       ExecutableItems
# -
#         By: Ssomar
# -
# ----------------------------------
# -
# WIKI HERE : https://docs.ssomar.com/executableitems/information-ei
# DISCORD HERE : https://discord.com/invite/TRmSwJaYNv
# -
pickupLimit: -1
disabledWorlds: [] #Its a blacklist, EI will be disabled in these worlds
whitelistedWorlds: [] #Its a whitelist, EI will be enabled only in these worlds
whitelistItemsPerWorld: [] #Its a whitelist, EI will be enabled only for these items in these worlds
#  myWorld:
#    - "myEI1"
#    - "myEI2"
#  myWorld2:
#    - "myEI3"
#    - "myEI4"
premiumEnableCooldownForOp: true #Premium only
checkVersionMsg: true
disableTestItems: false # If you have a big server with a lot of players, it's recommended to turn this option on true
silentEIGive: false
silentMessagePreventionErrorHeadDBError: false
disableBackup: false #<- Backup your items config at each start / reload of the server
deleteBackupsAfterDays: 7 #<- It will deletes backups older than this number of days
enableGarbageCollectorAfterReload: false #<- It will enable the garbage collector after a reload of the server
giveLimit: 100
enableTexturesPack: true #Only for 1.20.5+ servers
texturesPackUrl: "" #Only for 1.20.5+ servers
selfHostPack: true
downloadTexturesPackAtTheNextLoading: true # Technical setting
logs:
  dropped: true
  spawned: true
debugOnlyRun: false # /ei debug will only display the run debug message
itemCheckWithNBTAPI: false # Deprecated. Will not receive further updates
muteModification: false # It will mute the outputs of /ei modification or /ei console modification
```

## Disable enableTexturesPack

Set the value to false

## If it fails, disable selfHostPack

Normally, the option above does the job, but if its not enough, disable this too.

## If it fails, delete the pack folder inside the `__textures__` folder.

There are cases where even disabling `selfHostPack` isn't enough. THIS should finally solve the issue

## Still fails? Go to the support discord

Because this isn't normal anymore. We are fairly active there so you should be able to receive a response within 24 hours.