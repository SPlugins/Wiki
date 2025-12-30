# Block Conditions

## Condition settings
All conditions are formated the same, you have:
* `{theCondition}`
* `{theCondition}Msg`: The message to send if the condition is invalid
* `{theCondition}Cancel`: Whether or not the event should be cancelled if the condition is invalid
* `{theCondition}Cmds`: The command(s) to run if the condition is invalid
* Example:

```yaml
blockConditions:
     ifBlockAge: <2
     ifBlockAgeMsg: "héhéhé you can custom your message here"
     ifBlockAgeCancel: true
     ifBlockAgeCmds:
     - say how sad
```

:::info
For numerical conditions, you can assign 2 conditions at the same time.
Example: 
"I want to create a condition that only activates if the value is greater than 50 but less than 250"
`{theCondition}: 50 < CONDITION < 250`
:::

### ifContainerEmpty - Not

* Description: Check if the block contains items or not.
* Example:

```yaml
blockConditions:
      ifContainerEmpty: true
      ifContainerNotEmpty: true
```

### ifContainerContains

* Description: Check if the block contains material(s)
* Example:

```yaml
blockConditions:
      requiredItems:
        requiredItem0:
          material: STONE
          amount: 1
          notExecutableItem: false
```

### ifContainerContainsEI

* Description: Check if the block contains EI(s)
* Example:

```yaml
 blockConditions:
      requiredExecutableItems:
        requiredEI0:
          executableItem: Bergbauhammer
          amount: 1
```

### ifIsPowered - Not

* Description: Checks if the target block is (or must not be) powered by a redstone signal
* Example:

```yaml
blockConditions:
    ifIsPowered: false   
    ifIsPoweredMsg: ''
    
    ifMustBeNotPowered: true 
    ifMustBeNotPoweredMsg: ''
```

* Example Situations:
  * If the block you are clicking at is a lit redstone lamp, the activator will activate
* Required: NO (Default: false)

### ifMustBeNatural - ifMustBeNotNatural

* Description: Checks if the target block is a natural block (so not a placed block) **(CORE PROTECT MUST BE INSTALLED)**

:::danger
Don't use that in an activator very frenquetly used because it will require a lot of performances
:::

* Example:

```yaml
    blockConditions:
      ifMustBeNotNatural: true
      ifMustBeNotNaturalMsg: ''
      ifMustBeNotNaturalCancel: true

    blockConditions:
      ifMustBeNatural: true
      ifMustBeNaturalMsg: ''
      ifMustBeNaturalCancel: true
```

* Example Situations:
  * If the block you are clicking is/isn't natural, the activator will activate
* Required: NO (Default: false)

### ifPlayerMustBeOnTheBlock

* Description: Checks if the target block has a player on top of it
* Example:

```yaml
blockConditions:
    ifPlayerMustBeOnTheBlock: false   
    ifPlayerMustBeOnTheBlockMsg: ''
```

* Example Situations:
  * If the block you are clicking has a player on top of it, the activator activates
* Required: NO (Default: false)

### ifNoPlayerMustBeOnTheBlock

* Description: Checks if the target block has no player on top of it
* Example:

```yaml
blockConditions:
    ifNoPlayerMustBeOnTheBlock: false   
    ifNoPlayerMustBeOnTheBlockMsg: ''
```

* Example Situations:
  * If the block you are clicking has a player on top of it, the activator doesn't activate
* Required: NO (Default: false)

### ifPlantFullyGrown - ifPlantNotFullyGrown

* Description: Checks if the target block is a fully grown plant.
* Example:

```yaml
blockConditions:
    ifPlantFullyGrown: true    
    ifPlantFullyGrownMsg: ''
##################################################
blockConditions:
    ifPlantNotFullyGrown: true    
    ifPlantNotFullyGrownMsg: ''
```

* Example Situations:
  * If the wheat crop is fully grown, the activator will activate.
* Required: NO (Default: false)

### ifBlockAge

* Description: Checks the target block age (crops)
* Example:

```yaml
blockConditions:
        ifBlockAge: <2
        ifBlockAgeMsg: "héhéhé you can custom your message here"
```

### ifBlockLocationX - Y -Z 

* Description: Checks the target block location X / Y / Z
* Example:

```yaml
  blockConditions:
    ifBlockLocationX: 500 < CONDITION < 1500
    ifBlockLocationXMsg: "héhéhé you can custom your message here"
   
    ifBlockLocationY: 50 < CONDITION < 150
    ifBlockLocationYMsg: "héhéhé you can custom your message here"
        
    ifBlockLocationZ: 500 < CONDITION < 1500
    ifBlockLocationZMsg: "héhéhé you can custom your message here"
```

### ifUsage

* It checks the usage of the clicked **ExecutableBlock**, if the usage is valid, the activator will work, otherwise an error message is displayed.
* Example:

```yaml
  blockConditions:
    ifUsage: 4< #it also supports intervals like  4 < CONDITION <= 8
    ifUsageMsg: "&cError the executableBlock clicked must have more than 3 usages but less than 10"
```

* Required: NO

### ifContainerContainsSellableItem

* Description: Checks if the clicked container has items that can be sold
* Example:

```yaml
  blockConditions:
    ifContainerContainsSellableItem: true
    ifContainerContainsSellableItemMsg: "&cError the executableBlock clicked must have more than 3 usages but less than 10"
```

### Block Around Conditions

* Description: Checks the blocks around the clicked block:
* Example:

```yaml
    blockConditions:
      blockAroundCdts:
        blockAround0:
          southValue: 0
          northValue: 0
          westValue: 0
          eastValue: 0
          aboveValue: 1
          underValue: 0
          errorMsg: '&#x26;c&#x26;oA block is not placed correctly !'
          blockTypeMustBe:
          - STONE
          - COBBLESTONE
          - ANDESITE
          - ITEMSADDER:turquoise_block
          - EXECUTABLEBLOCKS:CUSTOMDIRT
          - !DIRT
          - ALL_ORES
          errorMsg: error msg inside here
      blockAroundCdtsMsg: error msg outside here
```

```yaml
    blockConditions:
      requiredItems: {}
      requiredExecutableItems: {}
      blockAroundCdts:
        blockAround0:
          southValue: 0
          northValue: 0
          westValue: 0
          eastValue: 0
          aboveValue: 0
          underValue: 1
          errorMsg: ''
          blockTypeMustBe:
          - stone
          errorMsg: error msg inside here
          placeholdersConditions:
            plchCdt0:
              type: PLAYER_STRING
              comparator: EQUALS
              part1: '%var_x%'
              part2: '10'
              cancelEventIfNotValid: false
              messageIfNotValid: ''
              messageIfNotValidForTarget: ''
              stopCheckingOtherConditionsIfNotValid: true
              placeholderConditionCmds:
              - say not run
      blockAroundCdtsMsg: error msg outside here
```

Q: What exactly is going on in placeholder conditions?\
A: The placeholder %var\_x% is being parsed according to the block in that position. Meaning, you can use this method to assign a specific number to insane amount of unique EBs without writing each id that may change overtime in blockTypeMustBe
