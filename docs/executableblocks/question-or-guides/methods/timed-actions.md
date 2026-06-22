# Timed actions

In this page you will learn how to timer stuff to happen in your block, for example:

* Summoning an item each "x" second
* Triggering an activator and displaying the cooldown on top of the block
* Or executing whatever you want and displaying it on the block.

## Method

### Variable

* You first have to create a variable, let's call this timer
  * ![](https://media.ssomar.com/m/docs-img-image-331.png)
  * ![](https://media.ssomar.com/m/docs-img-image-368.png)
  * ![](https://media.ssomar.com/m/docs-img-image-90.png)
  * TYPE: NUMBER because it it will be a TIMER, so it is an integer value.
  * ![](https://media.ssomar.com/m/docs-img-image-243.png)
  * ![](https://media.ssomar.com/m/docs-img-image-376.png)

### TITLE

*   Go to Title features and display the variable there using the placeholder %var\_\<variablename>\_int%

    * ![](https://media.ssomar.com/m/docs-img-image-301.png)
    * ![](https://media.ssomar.com/m/docs-img-image-283.png)

### LOOP ACTIVATOR

* Now create a LOOP activator with variableModification timer MODIFICATION -1 and placeholderCondition PLAYER\_NUMBER %var\_timer% SUPERIOR than 0.
  * ![](https://media.ssomar.com/m/docs-img-image-311.png)
  * ![](https://media.ssomar.com/m/docs-img-image-339.png)
  * ![](https://media.ssomar.com/m/docs-img-image-314.png)

### ACTION

* Here is UP TO YOU, and will depend on your needs, in this case let's make a couple of examples
  *   RIGHT CLICK and take an ITEM

      * activator RIGHT CLICK
      * placeholderCondition %var\_timer% EQUALS 0
      * blockCommands: 
        * `execute in <<%block\_world%>> run summon item %block\_x% %block\_y%+1 %block\_z% \{Item:\{id:"minecraft:IDOFTHEITEM",Count:1b\\}\}`
      * variableModification: timer SET 10

  * Each time the timer goes to 0 summon an item
    * activator LOOP
    * placeholderCondition PLAYER\_NUMBER %var\_timer% EQUALS 0
    * blockCommands: 
      * `execute in <<%block\_world%>> run summon item %block\_x% %block\_y%+1 %block\_z% \{Item:\{id:"minecraft:IDOFTHEITEM",Count:1b\\}\}`
    * variableModification: timer SET 10
  * Example

```yaml
creationType: BASIC_CREATION
name: Timed Block
lore:
- '&b&oDefault lore'
material: STONE
dropType: IN_THE_INVENTORY
usage: -1
canBeMoved: true
config_3: true
config_update: true
titleOptions:
  activeTitle: true
  title:
  - '§6Time: §e%var_timer_int%'
  titleAdjustement: 0.5
activators:
  activator0:
    name: '&eActivator'
    option: LOOP
    usageModification: 0
    cancelEvent: false
    requiredItems: {}
    requiredExecutableItems: {}
    requiredMagics: {}
    blockCommands: []
    blockConditions: {}
    worldConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        part1: '%var_timer%'
        part2: '0'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
        messageIfNotValidForTarget: ''
        stopCheckingOtherConditionsIfNotValid: true
    # Reduce the variable (timer)
    variablesModification:
      varUpdt0:
        variableName: timer
        type: MODIFICATION
        modification: -1.0
    delay: 1
    delayInTick: false
    ownerCommands: []
    ownerConditions: {}
  activator1:
    name: '&eActivator'
    option: LOOP
    usageModification: 0
    cancelEvent: false
    requiredItems: {}
    requiredExecutableItems: {}
    requiredMagics: {}
    blockCommands:
    - STRIKELIGHTNING
    blockConditions:
      requiredItems: {}
      requiredExecutableItems: {}
    worldConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_timer%'
        part2: '0'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
        messageIfNotValidForTarget: ''
        stopCheckingOtherConditionsIfNotValid: true
    # Reset the timer
    variablesModification:
      varUpdt0:
        variableName: timer
        type: SET
        modification: 10.0
    delay: 1
    delayInTick: false
    ownerCommands: []
    ownerConditions: {}
variables:
  var0:
    variableName: timer
    type: NUMBER
    default: 10.0
    isRefreshableClean: true
    refreshTagDoNotEdit: §他§他§自§天§生§人§人§心§道
```

