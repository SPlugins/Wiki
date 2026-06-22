# Morph Tools

* Ok so the morph tool is an item that it changes between tools, from sword, to pickaxe, axe, shovel, etc. Let's do it !

### Create the individual tool items

* First of all you'll need to create each item that the **Morph tool** will cycle through.

![](https://media.ssomar.com/m/docs-img-image-297.png)

### Let's edit the items

:::info
**All changes shown here must be applied on each item** (to create the cycle)
:::

### First, set the item's usage to 0

![](https://media.ssomar.com/m/docs-img-image-333.png)

### Plan how the tool will cycle between states

![](https://media.ssomar.com/m/docs-img-image-196.png)

### Create the activator

* This will be the activator that will allow us to cycle.

![](https://media.ssomar.com/m/docs-img-image-91.png)

* Set the **Usage Modification** to -1

![](https://media.ssomar.com/m/docs-img-image-121.png)

:::info
When Usage is 0 and it is modified by -1 the item disappears.
:::

* Set the sneak condition (**In this example we want the cycle starts when SHIFT+RIGHT CLICK**)

![](https://media.ssomar.com/m/docs-img-image-173.png)

![](https://media.ssomar.com/m/docs-img-image-103.png)

![](https://media.ssomar.com/m/docs-img-image-87.png)

* Don't forget that you can remove the condition message.

![](https://media.ssomar.com/m/docs-img-image-395.png)

### Add the commands

* We have the condition ready, now let's add the commands.\
  For this you will need **/ei giveslot**  command for this to work properly 
* And now we have to take a look at the order of the cycle we wanted, in this case it will be\
  `AXE -> PICKAXE -> HOE`\
  If you are editing the Axe we will have to give the pickaxe:

```yaml
ei giveslot %player% (item id of the Pickaxe state) 1 %slot%
```

* Then for the pickaxe item, we will have to create the same activator, usageModification, set the conditions and on playerCommands:

```yaml
ei giveslot %player% (item id of the Hoe state) 1 %slot%
```

* And so on, when you reach the final item you will have to give the first item of the cycle, to complete it :D 

:::info
Because of item cycle, the enchantments will not keep in the item, for example, if you enchant an item with efficiency and cycle the items, when reach the item again it will not have the enchantment more. So if you want the item to has an enchantment you have to add it inside the item configuration.\
\
A good tip will be adding **unbreakable** to all states of the Morph Tools because if it breaks, it will be gone for good.\
\
Item made by Special70 😎
:::

