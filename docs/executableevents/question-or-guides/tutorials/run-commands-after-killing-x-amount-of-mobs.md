---
description: >-
  This page is all about setting up a kill counter, a milestone system and a
  limit on how many times it would execute the activator
---

# Run commands after killing x amount of mobs

## 1) Create SCore variables

<img src="https://media.ssomar.com/m/docs-img-imgur-ktpvy5t.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-cyk8ykt.png" alt="" />

## 2) Set the values of the two SCore variables

* Set the `TYPE` to `NUMBER`

![](https://media.ssomar.com/m/docs-img-image-12-1.png)

* Set the `FOR` to `PLAYER`

![](https://media.ssomar.com/m/docs-img-image-13-1.png)

* Set the `Default Value` to `0`

![](https://media.ssomar.com/m/docs-img-image-14-1.png)

* Save the settings

![](https://media.ssomar.com/m/docs-img-image-15-1.png)

## 4) Create the first EE event

* This will add value to the KILL-COUNT SCore variable every time we kill a mob

## 5) Create a PLAYER\_KILL\_ENTITY activator

### > Set detailed entities

### > Add the command

`score variables modification player KILL-COUNT 1 %player%`

### > Create a placeholder condition

For this one, let's say, we want to do a 10-kill milestone.

### > Create another placeholder condition

## 6) Create the second EE event

## 7) Create a PLAYER\_KILL\_ENTITY activator

### > Set detailed entities

### > Add the commands

* `score variables set player KILL-COUNT 0 %player%`
* `score variables modification player OBJ-COUNT 1 %player%`

:::info
This is where you start adding commands like `ei give %player% diamond 1` for custom rewards
:::

The OBJ-COUNT SCore variable will be explained later in the guide

### > Create a placeholder condition

To why part2 is equals to 9, unlike the milestone/objective/action counter method used in executable items, executable events does not have a proper in-built variable system and running score variables commands doesn't finish fast enough for the next activators to run.

What happens actually in the technical side is, when the activator runs, it sees the placeholder as 0 then turns it into 1. when the activator runs the activator agian, it sees 1 then turns it into 2.

### > Create another placeholder condition

The number here must be the same as the one in the previous activator

