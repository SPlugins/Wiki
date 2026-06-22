---
description: This page allows you to create a High-Powered Grappling Hook
---

# Hight-Powered Grappling Hook

<iframe width="560" height="315" src="https://www.youtube.com/embed/bEUAkqFNbx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

###

### 1) Create the Executable Item

![](https://media.ssomar.com/m/docs-img-imgur-erhmtnf.png)

We will not be using the regular grappling hook item. We will be using the method used in the 2nd video in the 2 videos above.

### 2) Create the Activator needed to launch the projectile

![](https://media.ssomar.com/m/docs-img-imgur-alvn0xg.png)

We will be using the `PLAYER_RIGHT_CLICK` activator as this activator is used to run the projectile command in the Reference Video

### 3) Let's create the projectile file

* First create a projectile using `/score projectiles-create <id>`, now, we'll show you all the config the projectile has, you could change them in the GUI or directly in yml.

The item should finally look like this:

```yaml
type: SNOWBALL
bounce: false
despawnDelay: 1
customNameVisible: false
glowing: false
customName: ""
silent: false
gravity: false
velocity: 5
visualItem: NETHER_STAR
particlesType: FIREWORKS_SPARK
particlesAmount: 1
particlesOffSet: 0.001
particlesSpeed: 0
particlesDelay: 1 
```

* despawnDelay = 1 because we don't want the projectile to hit a block sooo far away
* gravity = false because we want to ignore gravity, to properly replicate how the maneuvers behave in the Attack on Titan anime
* velocity = 5 because that will travel soo fast (in compensation for despawndelay 1)
* particles are an extra thing, to have a better visually style, and to know where you are going to go.

### **4)** Create the command

* In this example the projectile above is named as **MANEUVER\_PROJ**, you can name the projectile  file's name as you want.
* In the EI Item's activator add the command **`LAUNCH <projectile file name>`**, in this case it will be **LAUNCH MANEUVER\_PROJ**

![](https://media.ssomar.com/m/docs-img-image-299.png)

### 5) Create another activator

* Ok, we already made the item to launch a projectile, now let's work with it, first of all create a **`PROJECTILE_HIT_BLOCK`**

![](https://media.ssomar.com/m/docs-img-image-260.png)

### 6) Add the commands

* This activator will get us launched to the position of the projectile, so we will need the following commands

```yaml
- CUSTOMDASH1 %block_x% %block_y% %block_z%
- DELAYTICK 2
- CUSTOMDASH1 %block_x% %block_y% %block_z%
- DELAYTICK 2
- CUSTOMDASH1 %block_x% %block_y% %block_z%
```

* The reason why there are 3 CUSTOMDASH1 is to increase the amount of times the player gets launched in a location and to improve the accuracy of the launch.
