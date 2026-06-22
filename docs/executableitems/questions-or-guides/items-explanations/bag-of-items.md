# Bag of items

<iframe width="560" height="315" src="https://www.youtube.com/embed/kzwHkY-xbzA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you would like to store items like having a bag of cobblestone, or bag of different stuff, this is your place

:::info
This needs PlaceholderAPI and its extension of CheckItem, it can be done without it but its better with it, that's why this tutorial uses it.
:::

## Tutorial

In this case the bag will store COBBLESTONE and ANDESITE (2 items for you to see how to manage with more than one item). First we will create the one with COBBLESTONE and then, after finishing that one, the one with ANDESITE.

*   Create the EI with /ei create \<id>

    * ![](https://media.ssomar.com/m/docs-img-image-343.png)

* Set the material, name, lore, etc
  * ![](https://media.ssomar.com/m/docs-img-image-396.png)

:::info
In this case I already know that the "stuff" stored will be stored in a variable, that's why I wrote it instantly as variable in the lore.
:::

* Now let's create the variables (I will create both instantly, the cobblestone and andesite)
  * ![](https://media.ssomar.com/m/docs-img-image-144.png)
    * ![](https://media.ssomar.com/m/docs-img-image-369.png)
    * ![](https://media.ssomar.com/m/docs-img-image-414.png)

### ACTIVATOR OF STORING COBBLESTONE

*   Now let's create the activator that will store the cobblestone, in this case RIGHT CLICK activator

    * ![](https://media.ssomar.com/m/docs-img-image-407.png)

    * Let's add the modification of the variable
      * ![](https://media.ssomar.com/m/docs-img-image-269.png)
      * ![](https://media.ssomar.com/m/docs-img-image-238.png)
      * ![](https://media.ssomar.com/m/docs-img-image-280.png)
    * Let's add the placeholder condition so this only works if the player has at least 1 cobblestone
      * ![](https://media.ssomar.com/m/docs-img-image-214.png)
    *   And now the commands (the first one to display how many cobblestone he stored and the second to remove the cobblestones.)

        * ![](https://media.ssomar.com/m/docs-img-image-259.png)

*   And that's it, now our bucket pickups the cobblestone perfectly, but we need a way to take out the cobblestone, there are many ways to achieve this:

    * Make an activator that pickups cobblestone x1
    * Make an activator that pickups cobblestone x16
    * Make an activator that pickups cobblestone x64
    * Make an activator that gives as many cobblestone as you hold shift
    * Make an activator that drops ALL cobblestone stored inside the bucket
    * etc

* I will make the one that pickups x32 cobblestone, the another ones follow the same method, its the same idea.

### ACTIVATOR OF TAKING COBBLESTONE

*   Activator LEFT CLICK

    * ![](https://media.ssomar.com/m/docs-img-image-402.png)

*   Condition the player has at least 32 cobblestone stored in the variable

    * ![](https://media.ssomar.com/m/docs-img-image-211.png)

*   Let's modify the variable

    * ![](https://media.ssomar.com/m/docs-img-image-95.png)

*   And let's give the player the cobblestone

    * ![](https://media.ssomar.com/m/docs-img-image-324.png)

* Now everything is done, we just need to test it.

And its working perfectly !! Now let's do the same with andesite :P

And all goooood !!!, if have any question feel free to ask, there are many ways to complex this, such as creating a selector inside the lore of the item to select what to store, or how much to take, this is the **most basic bag** you can create ^^
