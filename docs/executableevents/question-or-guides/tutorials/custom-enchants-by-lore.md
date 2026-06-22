# Custom enchants by lore

This method will work with activators related to player/entities that will check if the player has certain line on the lore of the item.

To add lore to an item (looking for the enchant mechanic) you can use the commands related to lore in Score, like ADDLORE and SETLORE.

## FIRE SOUL ENCHANTMENT

### Let's create our activator

* Creating it:
  * ![](https://media.ssomar.com/m/docs-img-image-239.png)
* Let's create our activator (in this case I will only use PLAYER\_HIT\_ENTITY, if you want this enchantment to work for players too do it)
  * ![](https://media.ssomar.com/m/docs-img-image-202.png)
  * ![](https://media.ssomar.com/m/docs-img-image-156.png)
*   Now let's add on commands what we want the "enchantment" to do.

    * In this case BURN command and some particles
    * ![](https://media.ssomar.com/m/docs-img-image-302.png)

* Now it is working always a player hits an entity, but we want this only works if the item the player is hitting with has in the lore "FIRE SOUL", let's add that condition, to do that we will use CheckItem expansion of PlaceholderAPI.
  * ![](https://media.ssomar.com/m/docs-img-image-198.png)
* And that's it, if want to customize more the placeholder you can read CheckItem expansion of PlaceholderAPI ^^, this events already works, it will fire the commands only if the item has in the lore "FIRE SOUL" :D

## MINE IN CUBE ENCHANTMENT

Since you already saw the previous one, you already got the idea, so let's do this one faster, let's create our activator and the commands we want (in this case MINEINCUBE)

* ![](https://media.ssomar.com/m/docs-img-image-180.png)
* ![](https://media.ssomar.com/m/docs-img-image-209.png)
* ![](https://media.ssomar.com/m/docs-img-image-182.png)
* And that's it, record time :sunglasses:, now when a player with an item who has MINEINCUBE in their lore  breaks a block, it will break in area of 1, this means, 3x3x3.
