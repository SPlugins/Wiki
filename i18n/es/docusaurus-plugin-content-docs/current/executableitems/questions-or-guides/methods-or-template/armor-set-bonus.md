---
description: >-
  Guía de ExecutableItems para crear un bonus de set de armadura con LOOP y
  condiciones ifHasExecutableItems en SPlugins.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-10-03T10:31:30.597Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Armor Set Bonus

:::tip Nuevo: sets nativos
ExecutableItems ahora tiene [sets](/executableitems/configurations/sets-configuration) nativos: un archivo por set, varios tiers (2 piezas, 4 piezas...), efectos y atributos que se eliminan correctamente al quitarse una pieza, y sin un LOOP ejecutándose todo el tiempo. Usa estos para nuevos sets. El método de abajo sigue funcionando.
:::

## ¡Vamos a crearlo!

### Primero tenemos que crear las piezas del set de armadura

* Para este ejemplo, el nombre de los ítems será:\
  Helmet = **nameofhelmet.yml**\
  Chestplate = **nameofchestplate.yml**\
  Leggings = **nameofleggings.yml**\
  Boots = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Para crearlos
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Ahora crea el activador que queremos activar cuando se tenga el set completo

:::info
En este ejemplo crearemos una armadura que te da fuerza siempre que tengas el set completo, por lo que necesitaremos un LOOP ACTIVATOR, y también tienes que elegir cuál parte de la armadura será la "principal", la que ejecutará todos los comandos. En este caso la "principal" será el **casco**.
:::

* Entonces, como se dijo antes, el activador será **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Queremos que esto solo funcione cuando se lleve puesto, así que en **detailedSlots** configuraremos que solo funcione cuando esté en el **slot de cabeza.**

![](https://media.ssomar.com/m/docs-img-image-189.png)

* Y, para el efecto del bonus usaremos el comando de efecto vanilla:

```
minecraft:effect give %player% strength 10 0
```

### Condición del set completo

¡Bien! Acabamos de crear la "habilidad" que tiene el set completo, pero necesitamos agregar la **condición** de tener el set completo!!

* Ve a Player conditions -> ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Luego agrega 3 condiciones IfHasExecutableItem para las otras 3 partes de la armadura, en este caso, como elegí el casco como principal, necesito agregar el peto, las perneras y las botas.

Explicaré primero cómo agregar el peto como condición:

* Entonces, en la foto de arriba, agrega una condición y verás esto
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* El primero es el EI necesario, en este caso, voy a desplazarme hacia abajo hasta conseguir el peto
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Una vez lo tengamos, vamos a la siguiente opción -> "Amount", será 1
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* Y luego, el slot en el que queremos que esté este ExecutableItem, en el caso del peto, el slot de peto.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Recuerda desactivar la mano principal y activar solo 1 slot, el que quieras.
:::

* **Y en este caso no vamos a usar la condición de uso, así que no la toques.**
* Y guarda.

Tienes que hacer lo mismo para las otras 2 piezas, una vez hecho, tendremos 3 condiciones en total

![](https://media.ssomar.com/m/docs-img-image-249.png)

* ¡Y eso es todo! **Guarda el ítem** y prueba!

![](https://media.ssomar.com/m/docs-img-image-348.png)

¡Funciona! Ahora... si no tienes una de las armaduras, la condición te lo indicará...

![](https://media.ssomar.com/m/docs-img-image-384.png)

Para desactivarlo necesitaremos entrar de nuevo al editor de condiciones y hacer clic aquí

![](https://media.ssomar.com/m/docs-img-image-153.png)

Y poner esto en NO VALUE

![](https://media.ssomar.com/m/docs-img-image-120.png)

Y eso es todo, ahora guarda y no aparecerá ningún mensaje de condición.

Y ahora... ¡eso es todo!! 😁😁😎

:::info
Si tienes alguna pregunta puedes hacerla en **Discord** ^^

Método por Special70
:::

Ejemplos:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
