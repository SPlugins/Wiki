---
description: >-
  This page will help you create an item where you can set up lots of activators
  with multiple conditions or requirements and when used, only one sends
  commands and etc while having one error message
---

# Creating Items with multiple activators with varying conditions while having only one error message

So one time, you want to create an item that would only activate if you have at least a diamond or an executable item in your inventory right? But you want to make a proper error message if you don't have the diamond or the executable item in your inventory. If so, this is the guide for you! 

This guide should be of help in terms of expanding your competency in understanding how activators and variables work in a more deeper level.

**Scroll down to the very bottom to copypaste the config of the item.**

![](https://media.ssomar.com/m/docs-img-giphy-2vofcuwez3xkrt3lgm.gif)

## Steps:

### 1) Create an ExecutableItem

![Don't skip this step :)](https://media.ssomar.com/m/docs-img-imgur-0sek7oy.png)

### 2) Create a variable

![Click this icon](https://media.ssomar.com/m/docs-img-imgur-xp084fo.png)

![](https://media.ssomar.com/m/docs-img-imgur-ckws1ww.png)

![For this guide, we will be naming our variable as "x"](https://media.ssomar.com/m/docs-img-imgur-lyzz56b.png)

![](https://media.ssomar.com/m/docs-img-imgur-pmzef8i.png)

![This isn't necessary but you can type 0 if you want.](https://media.ssomar.com/m/docs-img-imgur-zmhjlhb.png)

### 3) Save the variable and return to the main activator editor

![](https://media.ssomar.com/m/docs-img-imgur-qlbfleq.png)

![](https://media.ssomar.com/m/docs-img-imgur-lhze4hg.png)

### 4) Create an activator

![](https://media.ssomar.com/m/docs-img-imgur-en0xynk.png)

![](https://media.ssomar.com/m/docs-img-imgur-8z6d2ph.png)

### 5) Select what kind of activator do you want

![](https://media.ssomar.com/m/docs-img-imgur-hignioi.png)

In this guide, I will be using this activator. 

:::danger
In this method, all activators created during this method tutorial has to be the same for it to properly function.
:::

### 6) Set the variable update at the first activator

Only this first activator will have the variable update in this whole method. What this does is that when you trigger the left click activator, it will set the variable to 1. This value will be used later.

![](https://media.ssomar.com/m/docs-img-imgur-pc6xdsb.png)

![](https://media.ssomar.com/m/docs-img-imgur-cmhl3fk.png)

![](https://media.ssomar.com/m/docs-img-imgur-quy7xxk.png)

The name of the variable we created is called "x" so we need to type "x" in here.

![](https://media.ssomar.com/m/docs-img-imgur-pvmqvmj.png)

![](https://media.ssomar.com/m/docs-img-imgur-h2w83oz.png)

![](https://media.ssomar.com/m/docs-img-imgur-43mnsst.png)

![](https://media.ssomar.com/m/docs-img-imgur-tztbfqk.png)

![](https://media.ssomar.com/m/docs-img-imgur-dyxehnp.png)

### 7) Create the main activators

The activators here are the ones that will run the commands and various things you want to try. Required Items, Required Money, Required ExecutableItems, Sneaking Conditions, etc. If you want to create more than one of those, start again from this step.

In this guide, I will follow the example I made. This item will search for a diamond or an executable item. But since orders matter, I will put diamonds as the priority.

![](https://media.ssomar.com/m/docs-img-imgur-g3thqrf.png)

![](https://media.ssomar.com/m/docs-img-imgur-4jh8koh.png)

![](https://media.ssomar.com/m/docs-img-imgur-2dxkmrv.png)

![I won't be posting the steps for setting up the required items as you have to learn it how to do it yourself. Explore the plugin more if you haven't.](https://media.ssomar.com/m/docs-img-imgur-vcugctg.png)

### Add the placeholder condition

![](https://media.ssomar.com/m/docs-img-imgur-lwuvlet.png)

![](https://media.ssomar.com/m/docs-img-imgur-g7xgscl.png)

We need to create a placeholder condition for each of the activators that will run commands and such for us. The first main activator won't need it so you can kind of skip this part but I will still write this part for the second and more activators

![](https://media.ssomar.com/m/docs-img-imgur-wyilzzs.png)

![](https://media.ssomar.com/m/docs-img-imgur-h7zf0az.png)

We need to type the placeholder of the variable so we could check for it's values to see if changes are made

![](https://media.ssomar.com/m/docs-img-imgur-1ijk0jc.png)

![](https://media.ssomar.com/m/docs-img-imgur-7sd84lg.png)

The value of 1 represents that no activator before it has yet to trigger. 

![](https://media.ssomar.com/m/docs-img-imgur-8mxj3bm.png)

### Add the variable update

![](https://media.ssomar.com/m/docs-img-imgur-pc6xdsb.png)

![](https://media.ssomar.com/m/docs-img-imgur-cmhl3fk.png)

![](https://media.ssomar.com/m/docs-img-imgur-quy7xxk.png)

![](https://media.ssomar.com/m/docs-img-imgur-pvmqvmj.png)

![](https://media.ssomar.com/m/docs-img-imgur-nb5aiu8.png)

With this set to 0, for example, activator1, activator2, and activator3 is present. activator0 will set the variable to 1 every time you do a left click and if activator1 manages to trigger, activator2 and activator3 will no longer trigger.

![](https://media.ssomar.com/m/docs-img-imgur-43mnsst.png)

![](https://media.ssomar.com/m/docs-img-imgur-tztbfqk.png)

![](https://media.ssomar.com/m/docs-img-imgur-dyxehnp.png)

### 8) Create the activator that will return the error message

This activator will trigger if any of the previous activators that are supposed to set the variable to 0 once triggered.

![](https://media.ssomar.com/m/docs-img-imgur-g3thqrf.png)

![](https://media.ssomar.com/m/docs-img-imgur-4jh8koh.png)

### Add the placeholder condition

![](https://media.ssomar.com/m/docs-img-imgur-lwuvlet.png)

![](https://media.ssomar.com/m/docs-img-imgur-g7xgscl.png)

We need to create a placeholder condition for each of the activators that will run commands and such for us. The first main activator won't need it so you can kind of skip this part but I will still write this part for the second and more activators

![](https://media.ssomar.com/m/docs-img-imgur-wyilzzs.png)

![](https://media.ssomar.com/m/docs-img-imgur-h7zf0az.png)

We need to type the placeholder of the variable so we could check for it's values to see if changes are made

![](https://media.ssomar.com/m/docs-img-imgur-1ijk0jc.png)

![](https://media.ssomar.com/m/docs-img-imgur-7sd84lg.png)

The value of 1 represents that no activator before it has yet to trigger. 

![](https://media.ssomar.com/m/docs-img-imgur-8mxj3bm.png)

### Add the SENDMESSAGE command for the error message

Because none of the main activators managed to run, the last activator will run instead, sending the message that you failed to meet the requirements/conditions to at least trigger one of the activators.

![](https://media.ssomar.com/m/docs-img-imgur-5xbteqw.png)

### Save the item

Save the item then you could try it out!

![](https://media.ssomar.com/m/docs-img-imgur-7uchwua.png)

Config:

```yaml
name: '&eDefault name'
lore:
- '&b&oDefault lore'
material: NETHERITE_SWORD
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
storeItemInfo: false
unbreakable: false
usage: 1
usageLimit: -1
restrictions: {}
variables:
  var0:
    variableName: x
    type: STRING
    default: '0'
activators:
  activator0:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands: []
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions: {}
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '1'
  activator1:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems:
      requiredItem0:
        material: DIAMOND
        amount: 1
        notExecutableItem: true
      errorMessage: ''
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE TEST MESSAGE 1
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '0'
  activator2:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems:
      requiredEI0:
        executableItem: buff
        amount: 1
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE TEST MESSAGE 2
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '0'
  activator3:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Â§cYou don't have the required items.
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification: {}
attributes: {}
```
