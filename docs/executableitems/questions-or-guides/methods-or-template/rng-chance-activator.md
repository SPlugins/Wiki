# RNG Chance activator

Well, well, some time ago I wanted a NINJA Armor and the idea was.. ok, some hits are dodged and some don't, but.. that "dodge" how to do it?, well, after a long time thinking this method came up, let's explain it.

:::info
This tutorial will be related to the example said above, but the idea is you to get the nutshell of the method and apply it as you want.
:::

### Let's create the item

:::info
The **item** itself needs premium version + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* After adding the name, lore and material..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Let's create the activator that will make the magic

* So first, the idea is to make a RECEIVE\_HIT\_BY\_GLOBAL and cancel event.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* So now, it is cancelling EVERY received hit, to make it to sometimes cancel and sometimes doesn't cancel, we have to make the activator itself to run sometimes, so, we will add a condition related with RNG, the nutshell is, a random number between 1 and 4, if it matches 1, the activator will run, it has a probability of 25% -> that is the probability we want, let's add it.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

And in the first part we will add "%rng\_1,4%" (this require PlaceholderAPI and RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (because we want it to trigger only if the random number between 1 and 4 matches 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

And the item is ready

:::info
FOR DEBUG PURPOSES I WILL ADD THAT THE ACTIVATOR SAYS "dodge" AND IF THE PLACEHOLDER DOESN'T MATCH SAYS "didn't dodge".\
\
So once we test it, we will know if it is working properly.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

And it worked, the activator only runs 1 over 4 times.

If have any question feel free to ask it in the discord of EI, have a nice day :P

## How to set the correct values to get the percentage you want

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
