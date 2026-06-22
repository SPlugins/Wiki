---
description: >-
  This should give you basic understanding on how to utilize variables for good
  combinations
---

# Delayed Teleport Towards Saved Location

## Tutorial:

Ok for starters, we will create an item that once right clicked, it will teleport as back to that very location.

### 1) Create an ei item

![](https://media.ssomar.com/m/docs-img-imgur-dqsxibx.png)

This is important as usual. Because how would you make the item without the item itself?

### 2) Go to the variables editor

![](https://media.ssomar.com/m/docs-img-imgur-irfoawy.png)

### 3) Create a new variable

![](https://media.ssomar.com/m/docs-img-imgur-yknasg7.png)

### 4) Set up the variable

![](https://media.ssomar.com/m/docs-img-imgur-spy6bt7.png)

For this part, we will set the variable name's to "x" to make things simple

### 5) Set the variable type to STRING

![](https://media.ssomar.com/m/docs-img-imgur-nanmaen.png)

### 6) Don't mind too much about the value

![](https://media.ssomar.com/m/docs-img-imgur-rhtvie0.png)

We will be dealing with the value later.

### 7) Save the variable. Do not forget or else you might have to go back to the top

![](https://media.ssomar.com/m/docs-img-imgur-egywbaq.png)

### 8) Go back to the main item editor by pressing the back button

![](https://media.ssomar.com/m/docs-img-imgur-c0pzvjl.png)

![](https://media.ssomar.com/m/docs-img-imgur-ioxglsp.png)

### 9) Go to the activator editor

![](https://media.ssomar.com/m/docs-img-imgur-dcsimoz.png)

### 10) Create a new activator

![](https://media.ssomar.com/m/docs-img-imgur-liulvko.png)

### 11) Create a PLAYER\_RIGHT\_CLICK\_ACTIVATOR

![](https://media.ssomar.com/m/docs-img-imgur-u5qgswz.png)

### 12) Go to the variables editor of the activator

![](https://media.ssomar.com/m/docs-img-imgur-qjuzvez.png)

Ok so here's the explanation. First, we will create a variable update which will save our coordinates. Further explanation ahead.

### 13) Click this icon 

![](https://media.ssomar.com/m/docs-img-imgur-wjym249.png)

### 14) Click this icon to go to the chat editor and type the name of the variable we created at step 4)

![](https://media.ssomar.com/m/docs-img-imgur-opy88ld.png)

You see, the default value for this is "var" and we are editing a variable under the name of "x". Back then in pre 5.0, we get to just click the icon to scroll through the list of variables under this item but now, we have to manually type it.

### 15) Set the type to "SET"

![](https://media.ssomar.com/m/docs-img-imgur-oouqppk.png)

### 16) Type "%x% %y% %z%" in this icon

![](https://media.ssomar.com/m/docs-img-imgur-ux6l15l.png)

In the string update option, the placeholders in it is parsed before it gets displayed or used somewhere else.

### 17) Press the save button

![](https://media.ssomar.com/m/docs-img-imgur-vsalhjj.png)

### 18) Go back to the activator editor and save

![](https://media.ssomar.com/m/docs-img-imgur-fa3qsox.png)

### 19) Create a 2nd activator

![](https://media.ssomar.com/m/docs-img-imgur-liulvko.png)

### 20) Create another activator with the same kind

![](https://media.ssomar.com/m/docs-img-imgur-u5qgswz.png)

You might be curious, why the heck did we create another right click activator? Because the first activator's task is to save our coordinates via variable update. 

You might say, "Can't we just do everything in one activator?" Nope. Commands run first then the variables. Try doing it in one activator and it will not produce the wanted results. 

### 21) Go to the commands editor

![](https://media.ssomar.com/m/docs-img-imgur-b2nzuhh.png)

### 22) Add the following commands in the chat editor

![](https://media.ssomar.com/m/docs-img-imgur-bhjhesg.png)

Ok. Here's the explanation. \
`DELAY 30` will delay the command for 30 seconds. When it comes to variables, the activator order matters A LOT. Reversing the order of the 2 activators will break the item. 

As said in the placeholders page, placeholders from the plugin will be parsed immediately meaning that any changes that are bound to happen will not affect the values. With the variable update in step 16, %var\_x% will transform into the xyz coordinates of where you used the item so after 30 seconds, you will be teleported back to the exact location properly (unless you changed worlds but that's not the goal here.)

After typing the commands, of course press the exit button.

### 23) Save the item and try it out

![](https://media.ssomar.com/m/docs-img-imgur-ib09xi6.png)

Save the item and try it out!
