---
description: >-
  If want to create an ability with a condition of hitting from the back of the
  target/entity, this is the correct place
---

# Backstab

## Needed things:

* PlaceholderAPI
* Math expansion of PlaceholderAPI -> /papi ecloud download Math + /papi reload

## First create your item and then the activator you want the condition of "backstab"

:::danger
The activator MUST BE related to an entity/target

If you plan to use this condition of an activator PLAYER\_PLACE\_BLOCK, it won't make sense, since there is no entity related, same goes for activator PLAYER\_RIGHT\_CLICK, only activators with entities or players involved.
:::

## Then go to placeholders conditions

Add a condition PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-358.png)

In PART1 we will be comparing the two directions of the player and target/entity

* PART1: %math\_1\_ABS((%player\_yaw%)-(%entity\_yaw%))%
* INFERIOR OR EQUALS
* PART2: 90

:::info
If you are working with target, change instead of %entity\_yaw% -> %target\_yaw%

Ex: %math\_1\_ABS((%player\_yaw%)-(%target\_yaw%))%
:::

Then save and its ready !
