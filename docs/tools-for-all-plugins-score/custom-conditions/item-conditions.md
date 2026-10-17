# Item Conditions

## Condition settings
All conditions are formated the same, you have:
* `{theCondition}`
* `{theCondition}Msg`: The message to send if the condition is invalid
* `{theCondition}Cancel`: Whether or not the event should be cancelled if the condition is invalid
* `{theCondition}Cmds`: The command(s) to run if the condition is invalid
* Example:

```yaml
itemConditions:
    ifDurability: '>600'
    ifDurabilityMsg: '' #<- Here is where you will add the custom message.
    ifDurabilityCancel: true
    ifDurabilityCmds:
    - say oh sympathy
```

:::info
For numerical conditions, you can assign 2 conditions at the same time.
Example: 
"I want to create a condition that only activates if the value is greater than 50 but less than 250"
`{theCondition}: 50 < CONDITION < 250`
:::

### ifDurability

* Description: Checks if the ei has the said durability.
* Example:

```yaml
itemConditions:
    ifDurability: '>600'
    ifDurabilityMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<789`, the activator will only activate if the item's durability is below 789
  * If the value is `<=1000`, the activator will only activate if the item's durability is 1000 and below.
  * If the value is `==788`, the activator will only activate if the item's durability is 788.
  * If the value is `>989`, the activator will only activate if the item's durability is above 989.
  * If the value is `>=676`, the activator will only activate if the item's durability is 676 and above.
* Required: NO

### ifUsage

* Description: Checks if the item has the said usage remaining.
* Example:

```yaml
itemConditions:
    ifUsage: '>5565'
    ifUsageMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<456`, the activator will only activate if the item's usage remaining is below 456
  * If the value is `<=234`, the activator will only activate if the item's usage remaining is 234 and below.
  * If the value is `==16`, the activator will only activate if the item's usage remaining is 16.
  * If the value is `>6666`, the activator will only activate if the item's usage remaining is above 6666.
  * If the value is `>=78`, the activator will only activate if the item's usage remaining is 78 and above.
* Required: NO
* Also it supports to work in intervals

```yaml
itemConditions:
  ifUsage: 4 < CONDITION <= 8
  ifUsageMsg: '&4&l&o[ExecutableItems] &cThis item must have the valid usage
    to active the activator: &6%activator% &cof this item!'
  ifUsageCancel: false
```

### ifUseCooldown

* Description: Checks if the EI has the specified use cooldown. (It's like the enderpearl cooldown) (This cooldown is not related to the activator cooldown, it's the vanilla use cooldown) 
  * This feature is only available for Minecraft 1.21.2 and +
  * The cooldown is specified in ticks (20 ticks = 1 second)
* Example:

```yaml
itemConditions:
    ifUseCooldown: '>600'
    ifUseCooldownMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<789`, the activator will only activate if the item's use cooldown is below 789 ticks
  * If the value is `<=1000`, the activator will only activate if the item's use cooldown is 1000 and below.
  * If the value is `==788`, the activator will only activate if the item's use cooldown  is 788.
  * If the value is `>989`, the activator will only activate if the item's use cooldown is above 989.
  * If the value is `>=676`, the activator will only activate if the item's use cooldown  is 676 and above.
* Required: NO

### ifHasEnchant

* Description: Checks if the item has the whitelisted enchantment.[Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)
  * Write each enchantment as `ENCHANTMENT:LEVEL`. Without level (`LOYALTY`, or `LOYALTY:*`), any level of the enchantment is accepted.
  * The item must have **every** enchantment of the list. You can write several levels of the same enchantment (`LOYALTY:2` and `LOYALTY:3`): the item must have one of them.
* Example:

```yaml
itemConditions:
    ifHasEnchant: 
    - ARROW_FIRE:1
    ifHasEnchantMsg: '' #<- Here is where you will add the custom message.
```

```yaml
itemConditions:
    ifHasEnchant: 
    - LOYALTY:2
    - LOYALTY:3
    - IMPALING # any level
```

* Example Situations:
  * If the EI item has the Flame enchantment and you have the condition in the first example, the activator activates
  * With the second example, the activator activates if the item has Loyalty II or Loyalty III, and Impaling at any level
* Required: NO

### ifHasNotEnchant

* Description: Checks if the item has the blacklisted enchantment.[Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)
  * Write each enchantment as `ENCHANTMENT:LEVEL`. Without level (`LOYALTY`, or `LOYALTY:*`), every level of the enchantment is blocked.
  * The activator does not activate if the item has **one** of the enchantments of the list at one of the levels written. Every level written counts: `LOYALTY:1`, `LOYALTY:2` and `LOYALTY:3` block Loyalty I, II and III.
* Example:

```yaml
itemConditions:
    ifHasNotEnchant: 
    - ARROW_POWER:6
    ifHasNotEnchantMsg: '' #<- Here is where you will add the custom message.
```

```yaml
itemConditions:
    ifHasNotEnchant: 
    - LOYALTY:1
    - LOYALTY:2
    - RIPTIDE # any level
```

* Example Situations:
  * If the EI item has the Power VI enchantment and you have the condition in the first example, the activator does not activate
  * With the second example, the activator does not activate if the item has Loyalty I, Loyalty II or Riptide (any level). With Loyalty III, it activates.
* Required: NO

### ifCrossbowMustBeCharged - Not

* Description: Checks if the item is a  (not) charged crossbow.
* Example:

```yaml
  itemConditions:
    ifCrossbowMustBeCharged: true
    ifCrossbowMustBeChargedMsg: '' #<- Here is where you will add the custom message.
    
    ifCrossbowMustNotBeCharged: true
    ifCrossbowMustNotBeChargedMsg: '' #<- Here is where you will add the custom 
```

* Example Situations:
  * If the EI item is a charged crossbow, the activator activates
* Required: NO
* More Info: You can edit the error message by adding this in the file: 
