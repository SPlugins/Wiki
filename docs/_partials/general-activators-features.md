import CustomTag from '@site/src/components/CustomTag';

### Display name of the activator

* Info: String value of the display name of the activator, it doesn't have much use, its used for the developer to recognize one activator from another. It also appears on the default message "timeLeft" inside the locale.yml file.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Usage modification of the activator <CustomTag type="premium" />

* Info: Very important feature, the value of the usage of the item will be modified by this integer value. That means, if this value is positive then usage will increase and if this value is negative then the usage will decrease.
* Example: (Increasing the value of the usage by 1 each time this activator is triggered)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Variables modification

* Info: Its a list of variables modification to apply to the variables inside your item. Its useful for example, for increase the value of a variable, for overriding an old value of a variable to another value, etc.
  * `variableName`: Name of the variable the variableModification is targetting
  * `type`: Type of variableModification you are using
    * SET: Override the old value of the variable and sets the modification value.
    * ADD: Apply math to the current value of the variable using the modification value. It needs the variable to be type of NUMBER. If the modification value is positive then it will increase, if its negative then it will decrease.
    * LIST\_ADD: Applied to variable type LIST, it appens the modification value to the variable list.
    * LIST\_CLEAR: Applied to variable type LIST, it clears the variable list.
    * LIST\_REMOVE: Applied to variable type LIST, it removes the modification value from the variable list.
  * `modification`: Value of modification. Its applied to the variable using the types of modifications.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Be careful when using placeholders here ! There is no problem with that, just make sure the returning output is a NUMBER, otherwise you will need to use STRING features. For example, let's update a variableModification by another variable that we know it returns a NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Boolean value that represents if the event related to the activator is going to be cancelled or not.
  * This can be hard to understand, I think its one of the things that most people don't understand but to explain it you must know that each ACTIVATOR is related to a Minecraft event, following the idea this event occur and then the ACTIVATOR is triggered. if we enabling cancelEvent which is a feature from the activator, that means the event occur, then at almost the same time the activator gets triggered and it cancels the event, so the activator keeps running all its enabled features but the event didn't happen, cancelling it. For example:
    * If the activator is PLAYER\_HIT\_PLAYER and we enable cancelEvent then the player won't be able to hit the player due all hits are cancelled/ignored.
    * If the activator is PLAYER\_BLOCK\_BREAK and we enable cancelEvent then the player won't  be able to break blocks due the event is cancelled/ignored. 
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Boolean value that if enabled, prevents the activator from running if another plugin has already cancelled the event that triggers it.
  * This is useful when you have plugins like WorldGuard that cancel damage events (e.g., in non-PvP zones) or other ExecutableItems that cancel damage events (e.g., boots with PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Without this feature, activators like PLAYER\_BEFORE\_DEATH would still trigger even though the damage was cancelled, because they react to the raw damage calculation rather than the final outcome.
  * A common use case is a custom Totem of Undying item using PLAYER\_BEFORE\_DEATH. Without this feature enabled, the totem would activate and be consumed even when the player is in a WorldGuard protected zone where damage is cancelled, wasting the item. Enabling this feature ensures the totem only activates on actual lethal damage.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Boolean value that makes all commands run from commands features such as (playerCommands, blockCommands, entityCommands and targetCommands) will not have an output on the **console**.
  * For example, using the minecraft vanilla command effect give \[...] normally has an output on the console with this format: "Applied effect strength to \<playerName>", well, to disable this output you can enable this feature    
* Example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Its important to understand that this feature is made to disable vanilla commands output, if you use another plugin command and it has a console output, its not our side who should fix it, the other plugin should provide you a way to hide those messages. Anyways, because we are gentle you have a way to customize messages from being hidden so you can have the default messages silenced by silenceOutput + custom messages you would like to add. This process is handled by Score config file more information here and how to do it here [General config](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Player cooldown

* Info: Cooldown options its the cooldown applied to the player who triggered this activator for this activator.
* If the activator is PLAYER\_RIGHT\_CLICK, it has some commands \[] and the cooldown is 30 seconds, if the player triggers this activator he will need to wait 30 seconds in order to make it trigger again. This doesn't prevent other player from running it between those 30 seconds as long as that player is not on cooldown too. This is a feature per player
  * `cooldown`: Integer value that represents the amount of time the cooldown will last for this activator.
  * `isCooldownInTicks`: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * `cooldownMsg`: String value to be displayed when the player try to trigger the activator when its on cooldown
  * `displayCooldownMessage`: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * `cancelEventIfInCooldown`: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * `pauseWhenOffline`: Boolean value that pauses the cooldown if the player is offline. To better understanding, if its false, the cooldown time doesn't stop so he can leave the server, wait the cooldown and join again and he will be able to trigger the activator again. But if this feature is enabled and he left the server while on cooldown, when he joins again he will have the same remaining cooldown time that he had when he left.
  * `pausePlaceholdersConditions`: Its similar to pauseWhenOffline but it only pauses depending on certain placeholdersConditions. Example of usages would be pausing the cooldown if the player is VIP rank. So VIP rank has access to that feature.
  * `enableVisualCooldown`: Enables a visual cooldown for the item.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Global cooldown

* Info: Its the same idea as cooldown but instead of being the cooldown applied to the player its a global cooldown that is applied to all players. That means, if someone triggers the activator and it has 30 seconds of global cooldown, then no one will be able to use it after those 30 seconds  has gone. It has the same features as cooldown.
  * `cooldown`: Integer value that represents the amount of time the cooldown will last for this activator.
  * `isCooldownInTicks`: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * `cooldownMsg`: String value to be displayed when a player try to trigger this activator when its on cooldown
  * `displayCooldownMessage`: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * `cancelEventIfInCooldown`: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * `enableVisualCooldown`: Enables a visual cooldown for the item.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Required features <CustomTag type="premium" />

This section is for setting up features related to required things in order to be able to trigger the activator. This means that if the event happens, the activator will only run if the player matches this required setup. The items will be consumed in the process.

* If you would like the items not to get consumed then not use "required" feature but use conditions which are just conditions and doesn't consume.

### requiredExecutableItems <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement an ExecutableItem(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `executableItem`: ExecutableItem ID that is needed as requiremennt
  * `amount`: Integer of amount of items that are needed as requirement.
  * `usageConditions`: Optional string condition in format of `(==, !=, >, <, >=, <=){number}` to the usage condition of the ExecutableItem.
    * This means, if the condition is >=5 then the requirement is that the Executableitem chosen must be on the player inventory as its a requirement but also needs to have usage over or equal a value of 5.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement vanilla item(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `material`: Vanilla MATERIAL that is needed as requirement.
  * `amount`: Integer of amount of items that are needed as requirement.
  * `notExecutableItem`: Boolean value to make the requirement able to be a ExecutableItem or not.
    * This means, if the requirement is STONE, and this feature is not enabled, then the requirement will meet with vanilla STONE(s) and ExecutableItem(s) with material of STONE and so will be consumed. If you don't want this to happen then enable this feature.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: This feature needs the plugin called "Vault". This feature allows the activator to have as requirement money from Vault. If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredMoney`: Float value that represents the amount of money needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement vanilla experience levels. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience levels with experience, more info here [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredLevel`: Integer value that represents the amount of Minecraft vanilla experience level(s) needed as requirement.
* Example:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement minecraft vanilla experiencei. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience with experience levels, they are different things, more info at [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredExperience`: Integer value that represents the amount of experience needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement mana from [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) and [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredMana`: Integer value that represents the amount of mana needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatible with AureliumSkills, MMOCore and AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement magic from [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `magicID`: The ID of the magic in EcoSkills.
  * `amount`: Amount of magic of the magicID needed as requirement.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```