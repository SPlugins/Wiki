---
description: >-
  Guía de SPlugins para crear un interruptor on/off con ExecutableItems usando
  variables y activadores con cooldown.
source_hash: 739c8a7115be416e
translated_at: '2026-10-03T10:35:32.847Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Interruptor On / Off

## Requisitos+

* ExecutableItems **Premium**

## NOTA: CREA 2 ACTIVADORES PRIMERO.

## Primer activador

### Crea una variable

* Es necesario crear una variable para que podamos tener un identificador de si el interruptor está encendido o apagado

![Haz clic en este icono para abrir el editor de variables](https://media.ssomar.com/m/docs-img-imgur-nrkkixb.png)

![Básicamente solo tienes que crear una variable](https://media.ssomar.com/m/docs-img-imgur-jubywre.png)

![Para el id, no hay nada realmente específico. Para esta guía, etiquetaremos nuestra variable como "x"](https://media.ssomar.com/m/docs-img-imgur-ua4vmpu.png)

![No importa realmente si es un número o una cadena](https://media.ssomar.com/m/docs-img-imgur-nut1h4h.png)

![Para este tutorial usaremos el valor 0](https://media.ssomar.com/m/docs-img-imgur-bj4cpf7.png)

### Crea tu ítem y añade un activador

* En este caso será un PLAYER\_ALL\_CLICK

![](https://media.ssomar.com/m/docs-img-image-94.png)

### Comandos

* Escribe los comandos que quieras escribir

### Modificación de Variables

![Primero haz clic en este icono en el editor del activador](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crea una modificación de variable](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Selecciona la variable que creamos anteriormente](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Configura el tipo de modificación como SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Estableceremos un valor distinto de 0 para que el mismo activador no pueda ejecutarse por segunda vez](https://media.ssomar.com/m/docs-img-imgur-av856uf.png)

### Condición de Placeholder

* Esto es necesario para controlar qué activador se va a ejecutar

![Primero vamos a condiciones](https://media.ssomar.com/m/docs-img-image-419.png)

![Luego a condiciones de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Por supuesto, tenemos que crear una condición de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING también es una opción](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Usaremos el placeholder de la variable que creamos. Usa %var\_x\_int% si en cambio usaste PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Usaremos este comparador](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Usaremos el valor 0 como la opción "off"](https://media.ssomar.com/m/docs-img-imgur-cuorrfg.png)

### Añade el cooldown del otro ítem al propio ítem

* Por ejemplo, el id del ítem ei es `onoff-demo`. Entonces tendrías que ir a este icono y seguir las imágenes.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Por ejemplo, el id del interruptor on/off es "faker", así que selecciona "faker".

![](https://media.ssomar.com/m/docs-img-imgur-x1dtqww.png)

Desde que salió la 5.0, los ids de los activadores empiezan desde "activator0" en lugar de "activator1". En cualquier caso, querrás seleccionar el segundo activador, ya que los activadores se ejecutan de arriba hacia abajo.

:::info
Esta opción es importante porque si no hay cooldown, pasará directamente por el segundo activador que se supone que debe apagar el activador
:::

![Configura el cooldown en 1 o 2. Tú decides](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Se sugiere establecer esto en true si quieres que el ítem se pueda usar de forma repetida (spam). Un tick es suficiente para evitar el atropello mencionado arriba.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

## Segundo activador

* Usaremos de nuevo **`PLAYER_ALL_CLICK`**

![](https://media.ssomar.com/m/docs-img-image-165.png)

###

### Comandos

* Escribe los comandos que quieras escribir

### Modificación de Variables

![Primero haz clic en este icono en el editor del activador](https://media.ssomar.com/m/docs-img-imgur-lvcmrrl.png)

![Crea una modificación de variable](https://media.ssomar.com/m/docs-img-imgur-r50hlwy.png)

![Selecciona la variable que creamos anteriormente](https://media.ssomar.com/m/docs-img-imgur-sksrdko.png)

![Configura el tipo de modificación como SET](https://media.ssomar.com/m/docs-img-imgur-bbwjzw8.png)

![Estableceremos un valor distinto de 1 para que el mismo activador no pueda ejecutarse por segunda vez](https://media.ssomar.com/m/docs-img-imgur-0kzktpe.png)

### Condición de Placeholder

* Esto es necesario para controlar qué activador se va a ejecutar

![Primero vamos a condiciones](https://media.ssomar.com/m/docs-img-image-419.png)

![Luego a condiciones de placeholder](https://media.ssomar.com/m/docs-img-image-303.png)

![Por supuesto, tenemos que crear una condición de placeholder](https://media.ssomar.com/m/docs-img-image-429.png)

![PLAYER\_STRING también es una opción](https://media.ssomar.com/m/docs-img-imgur-nxuypmm.png)

![Usaremos el placeholder de la variable que creamos. Usa %var\_x\_int% si en cambio usaste PLAYER\_STRING](https://media.ssomar.com/m/docs-img-imgur-0qdthro.png)

![Usaremos este comparador](https://media.ssomar.com/m/docs-img-imgur-urvtgm8.png)

![Usaremos el valor 1 como la opción "on"](https://media.ssomar.com/m/docs-img-imgur-bjkv5hy.png)

### Añade el cooldown del otro ítem al propio ítem

* Por ejemplo, el id del ítem ei es `onoff-demo`. Entonces tendrías que ir a este icono y seguir las imágenes.

![](https://media.ssomar.com/m/docs-img-imgur-mmhsap4.png)

![](https://media.ssomar.com/m/docs-img-imgur-anndswf.png)

![](https://media.ssomar.com/m/docs-img-imgur-q6vjclp.png)

Por ejemplo, el id del interruptor on/off es "faker", así que selecciona "faker".

![](https://media.ssomar.com/m/docs-img-imgur-tfly1dt.png)

Desde que salió la 5.0, los ids de los activadores empiezan desde "activator0" en lugar de "activator1". En cualquier caso, querrás seleccionar el segundo activador, ya que los activadores se ejecutan de arriba hacia abajo.

:::info
Esta opción es importante porque si no hay cooldown, pasará directamente por el segundo activador que se supone que debe apagar el activador
:::

![Configura el cooldown en 1 o 2. Tú decides](https://media.ssomar.com/m/docs-img-imgur-zv8ioie.png)

![](https://media.ssomar.com/m/docs-img-imgur-izxlfq9.png)

Se sugiere establecer esto en true si quieres que el ítem se pueda usar de forma repetida (spam). Un tick es suficiente para evitar el atropello mencionado arriba.

![](https://media.ssomar.com/m/docs-img-imgur-gb5oud0.png)

##

### Guarda el ítem EI

* Debería verse así (añadimos comandos para decir ON (activator1) y OFF (activator2) para mostrarte cómo funciona :p

## Configuración del ítem

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Último comentario

Si tienes alguna pregunta o crees que la guía no quedó lo bastante clara, no dudes en preguntar en Discord.\
¡Te ayudaremos! 😁😁
