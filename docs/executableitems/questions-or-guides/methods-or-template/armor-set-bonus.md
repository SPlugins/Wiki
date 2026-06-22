# Armor Set Bonus

## Let's create it !

### First we have to create the armor set pieces

* For this example, the name of the items will be:\
  Helmet = **nameofhelmet.yml**\
  Chestplate = **nameofchestplate.yml**\
  Leggings = **nameofleggings.yml**\
  Boots = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* To create them
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Now create the activator we want to activate when having the whole set

:::info
In this example we will create an armor that gives you strength always you have the whole set, so, we will need a LOOP ACTIVATOR, also you have to choose where part of the armor will be the "main", the one where all commands will run from. In this case the "main" will be the **helmet**.
:::

* So, as told before, the activator will be **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* We want this to only work when worn, so in **detailedSlots** we will set it only work when having in the **head slot.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* And, for the bonus effect we will use vanilla effect command:

```
minecraft:effect give %player% strength 10 0
```

### Condition of whole set

Right ! we just created the "ability" that the whole set has, but we need to add the **condition** to have the whole set !!

* Go to the Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Then add 3 IfHasExecutableItem condition for the other 3 parts of the armor, in this case, as I chose the helmet as main so I need to add the chestplate, leggings and boots.

I will explain adding the chestplate as a condition first:

* So in the photo above, add a condition and you will see this
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* The first one is the EI needed, in this case, I will scroll down until get the chestplate
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Once we got it, let's go to the next option -> "Amount" it will be 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* And then, the slot we want this ExecutableItem to be, in case of chestplate the slot of chestplate.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Remember to disable the main hand and only enable 1 slot, the one that you want.
:::

* **And in this case we aren't going to use the usage condition so don't touch it.**
* And save.

You have to do the same for the another 2 pieces, once done, we will have 3 conditions in total

![](https://media.ssomar.com/m/docs-img-image-249.png)

* And that's all ! **Save the item** and test!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Works ! Now.. if you don't have one of the armors, the condition will tell you.. 

![](https://media.ssomar.com/m/docs-img-image-384.png)

To deactivate it we will need to enter to the condition editor again and click here

![](https://media.ssomar.com/m/docs-img-image-153.png)

And set it to NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

And that's it now save and no message of condition will appear.

And now.. that's all !! 😁😁😎

:::info
If you have any question you can ask it in **Discord** ^^

Method by Special70
:::

Examples:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```

