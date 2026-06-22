---
description: This tutorial will help you to recreate the insta-pickup mechanic
---

# Insta pickup

In this case the item will be related with breaking blocks, but you can adapt it to your needs.

## Let's create the item

* Type /ei create \<id> to create the item.
* Set the material, name and lore.

![](https://media.ssomar.com/m/docs-img-image-400.png)

* Now, let's create the activator that will trigger the function to make the mechanic, in this case it will be PLAYER\_BREAK\_BLOCK (Premium Activator, as I said, you can adapt it to your needs, using another activator.)
* And in commands we will add:

```
- execute at %player% positioned %block_x% %block_y% %block_z% run tp @e[type=item,distance=..2] %player%
```

* With this we will make the items get teleported to the player, but it will be a little delay to take the items, to don't have that delay we will add:

```
- execute at %player% as @e[type=item,distance=..1] run data merge entity @s {PickupDelay:0s}
```

* And that's all, save the commands, save the activator and then save the item, and test yourself it will work like this:

![I don't know what happened with the quality, just look the mechanic 🤪🤪](https://media.ssomar.com/m/docs-img-2022-07-30-18-10-24.gif)

* If have any question feel free to ask in the discord, have a nice day 🥳🥳
