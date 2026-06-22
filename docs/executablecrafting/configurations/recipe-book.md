---
description: Here you can learn how to create your own recipe book configuration
---

# Recipe Book

### Why would you like different recipe books ?

If you would like to only show some recipes to some players and some to others, you can do this based on:

* Perms (if it has the perm then show the recipe book 2 instead of the 1)
* Groups (You can create the recipe book for VIP and for DEFAULT players)
* Worlds (Depending on the world you are, some recipes will be shown and some not)
* Whatever you want, the conditions are up to you.

### How ?

To create your own recipe book you have to edit recipeBooks.yml

![](https://media.ssomar.com/m/docs-img-image-445.png)

The format this file works is:

```yaml
recipeBooks: #This goes by default
  1: #This is the ID of your recipe
    recipes: #These are the recipes that are shown in the main page
      - asd
      - pepe
    folders: #Here you can add folders to your main page
      carpeta1: #And here you create the folders with each recipe you want inside
        - asd
        - archivo2
      color:&d&lcarpeta2: #and with color: you can add colors to your folders
        - asd
        - archivo2
```

Then you can open the recipe book using the command

* `ec book {player} {id_of_book}`

### Tips

You can use `**` to show all available recipes.

```yaml
recipeBooks:
  1:
    recipes:
      - '**'
    folders: 
      allItems:
        - '**'
```

You can use `_*` to target all recipes that start with what you wrote.

```yaml
recipeBooks:
  1:
    folders: 
      VIPItems:
        - Vip_*
      CrownItems:
        - Crown_*
```

```
recipeBooks:
  1:
    recipes:
      - asd
      - pepe
      - royal_*
    folders:
      color:&d&lcarpeta1:
        - asd
        - archivo2
  2:
    recipes:
      - asd
  3:
    folders:
      all:
        - '**'

```
