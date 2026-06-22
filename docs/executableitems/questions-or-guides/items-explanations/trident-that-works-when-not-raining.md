---
description: This trident allows you to launch yourself if it isn't raining
---

# Trident that works when not raining

## Create the item

* To create it you have to use /ei create \<id>
* Once you have created it, set the material to trident, and edit the visual stuff as display name, lore, etc.

The idea is to simulate the real trident, to do it we will launch an invisible projectile and make the player to follow that projectile, so we need a custom projectile, let's create one

### Create the projectile

* There is already a tutorial for this, we aren't going to explain this too much, it will just be an invisible snowball with velocity 4.3

:::info
Depending on the velocity of the snowball your trident will launch you stronger or weaker.
:::

### Create the activator

* Now create an activator PLAYER\_LAUNCH\_PROJECTILE
* ![](https://media.ssomar.com/m/docs-img-image-69.png)
* And add into commands LAUNCH \<id of the projectile created>
* Enable cancel event so the real trident doesn't disappears.

Now we are launching the projectile, but we aren't launching ourselves, the idea is to make us to follow the path of the projectile launched, let's do it.

### Create another activator

* Now it will be a PLAYER\_CUSTOM\_LAUNCH
* and in playerCommands:

```
    playerCommands:
    - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
    - DELAYTICK 1
    - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
    - DELAYTICK 1
    - CUSTOMDASH1 %projectile_x% %projectile_y% %projectile_z%
```

And that's it, now when launching the trident, you won't launch the trident because of cancel event but you will launch an invisible snowball, that, with the 2nd activator you will get launched yourself into the position of the snowball and with it, recreate the motion of the trident.

:::info
You can add particles and sounds to make it look more real
:::

