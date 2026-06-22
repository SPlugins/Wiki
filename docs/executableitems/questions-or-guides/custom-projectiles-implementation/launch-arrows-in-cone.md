# Launch Arrows in cone

### Projectile creation

* The first step when working with custom projectiles is creating the projectile, in this case, its name will be "cone" so:
  * /score projectiles-create cone
* It will be an arrow + particles + invisible(you can edit it as you want), once done you have to save the projectile.

### Item creation

* It will be a blaze powder that when right clicking, it launches 5 arrows in cone, so, let's create the item, set the material, the name and the lore.

![](https://media.ssomar.com/m/docs-img-image-241.png)

* Now the activator, as I said I wanted right clicking, so let's create that.
  * In commands we will add the next custom command: [**LAUNCH**](/tools-for-all-plugins/custom-commands/player-and-target-commands#launch) (take a look at the wiki if don't know how to add it)
  * It will finally look like this:

```
- LAUNCH cone 20 0
- LAUNCH cone 10 0
- LAUNCH cone 0 0
- LAUNCH cone -10 0
- LAUNCH cone -20 0
```

* And that's all, save everything and let's test.

![](https://media.ssomar.com/m/docs-img-2022-07-30-18-35-08.gif)

* And that's all, now that we've finished it, it would look really cool if the projectile makes appear fire everywhere, in blocks, entities, etc, but it would need premium, if you have it and want to do it feel free to ask in Discord. Have a nice day :P
