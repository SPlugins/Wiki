---
description: >-
  Lista de características de ítems de ExecutableItems: activadores, material,
  nombre, lore, atributos, durabilidad, Hiders y más ajustes.
source_hash: a5cf341732f09f83
translated_at: '2026-11-13T18:14:59.423Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Características del ítem

Lista de características del ítem. Es lo primero que debes configurar en tu ítem.

Las características premium están marcadas con la etiqueta:  <CustomTag type="premium" />

### Activadores

* Características muy importantes que te permiten añadir habilidades a tu ítem
* Wiki dedicada a esta característica: [EI Activators list](../activator-configuration/list-of-the-activators.md) y [EI Activators features](/executableitems/configurations/activator-configuration/activators-features.md)


### Material del ítem

* Info: El material del ítem de Minecraft del ExecutableItem
* Ejemplo: Si quiero que el ExecutableItem tenga como ítem base un DIAMOND, quedaría así

```yaml
material: DIAMOND
```

* Puedes consultar la información de la lista de materiales en este enlace: [Material list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Si quieres configurar una cabeza personalizada como material del ítem, consulta este enlace: [Head settings](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nombre o DisplayName del ítem

* Info: El nombre visible del ítem. Es el nombre que se muestra.
* Ejemplo: Si quiero que mi ítem tenga como nombre visible el título "Epic Sword" en rojo, quedaría así

```yaml
name: '&cEpic Sword'
```

* Si quieres usar colores HEX en el nombre visible, puedes hacerlo así:
  * Tienes que ir a un sitio web que te ayude a elegir el color que quieras y a obtener su código de color hexadecimal. Recomendamos [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Luego elige el color que prefieras y anota / copia su código hexadecimal. [Reference](https://imgur.com/a/tNWtA0a)
  * Con ese código hexadecimal tienes que añadir "#" al principio, y eso es lo que irá antes del texto que quieres colorear. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Al final tendrás algo como **`#DB6725&lPractice`** y se verá con el color que seleccionaste [en el juego](https://imgur.com/a/7umxduF).

### Lore o descripción del ítem

* Info: El lore o descripción del ítem
* Ejemplo:

```yaml
lore:
- '&7Insta-Boom Bomb'
- ''
- '&f&lABILITIES:'
- '&f&l - &a&lInsta-Boom &f&l(&3&lRIGHT-CLICK&f&l)'
- '&fRight-Click on a block to use. Can only'
- '&fharvest blocks mined using your bare hands.'
- '&fBlows up a 5x5x5 area from where you used'
- '&fthe bomb. Will mostly blow up the type of block'
- '&fthat you clicked and sometimes the blocks around it.'
```

* Puedes usar placeholders en el lore. Ten en cuenta que, si usas placeholders de fuera del plugin y después añades contenido nuevo al lore, como encantamientos personalizados o texto personalizado, cuando uno de los placeholders se actualice, todo lo añadido fuera de los plugins de Ssomar se eliminará. Para evitarlo, no debes actualizar el lore, pero eso significa que los placeholders no se actualizarán. Tienes que elegir la opción que prefieras. En conclusión: COSAS EXTRA EN EL LORE significa SIN ACTUALIZACIÓN, lo que significa SIN placeholders personalizados de EI en el lore.

:::info
Para dejar un espacio vacío entre líneas del lore, puedes añadir '' en el archivo de configuración. Si editas el lore dentro de Minecraft con la GUI personalizada, tendrás que usar '\&f'.
:::

:::info
En la versión gratuita de ExecutableItems hay una línea con "Made with ExecutableItems": no se puede quitar, es la contrapartida de la actualización que aumentó la cantidad de ítems de 25 a 500.
:::

### Efecto de brillo (brillo de encantamiento)

* Info: Valor booleano que selecciona si el ExecutableItem tiene un aspecto con brillo / efecto de encantamiento.
* Ejemplo: 

```yaml
glow: true
```

### Desactivar el brillo de encantamiento <CustomTag type="version" version="1.20.5" />

* Info: Valor booleano que fuerza al ítem a no tener el efecto de brillo, incluso si está encantado. 
* Ejemplo: 

```yaml
disableEnchantGlow : true
```

:::info
TIP: También puedes quitar el efecto de brillo de algunos ítems vanilla, como la nether star, por ejemplo.
:::

### Mostrar condiciones en el lore del ítem

* Info: Te permite mostrar condiciones en el lore del ítem.
* Ejemplo: 

```yaml
displayConditions:
  playerConditions:
    ifSneaking: true
  worldConditions: {}
  itemConditions: {}
  placeholdersConditions: {}
  enableFeature: true
```

### Durabilidad del ítem

* Info: Selecciona el valor de durabilidad del ítem.
  * Para versiones 1.20.5-: El valor de durabilidad debe ser igual o inferior a la durabilidad máxima vanilla del ítem seleccionado.
  * Ejemplo: 
```yaml
durability: 150
```
  * Para versiones 1.20.5++: La opción de durabilidad se puede personalizar, lo que habilita nuevas características como la sincronización del uso del ExecutableItem con el valor de durabilidad, y permite seleccionar una durabilidad máxima personalizada.
  * Ejemplo:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Encantamientos del ítem

* Info: Establece los encantamientos iniciales que tendrá el ExecutableItem cuando se entregue.
* Ejemplo:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: Valor booleano que selecciona si el ExecutableItem será irrompible o no
* Ejemplo: 

```yaml
unbreakable: true
```

### Attributes <CustomTag type="version" version="1.12" />

* Info: Puedes seleccionar los atributos del ExecutableItem.
  * `attribute`: El tipo de atributo. Lista aquí: [Attribute list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: Es un código que Minecraft necesita para asignar los modificadores de atributo. Puedes ignorarlo.
  * `name`: Es el nombre visible del Attribute Modifier. Te sirve para escribir lo que hace. No afecta a nada más que a su visualización en la GUI.
  * `operation`: Tipo de operación que realizará el AttributeModifier. Lista aquí: [Operations](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: El valor del AttributeModifier, se aplicará al atributo usando la operación seleccionada.
  * `slot`: El slot en el que funcionará el AttributeModifier.
  * Ejemplo:

```yaml
attributes:
  attribute1: #Id of this attribute, you can add as many as you want
    attribute: GENERIC_ARMOR
    name: '&#x26;eDefault name'
    uuid: 8d6b9b6a-c84d-4c76-9b4d-81a1f44a04a0
    amount: 1.0
    operation: ADD_NUMBER
    slot: HAND
```

:::info
**Si usas la versión 1.12, tendrás que seguir estos pasos:**

* Este proceso requiere la versión premium de EI <CustomTag type="premium" />
* Genera tu ítem con atributos en un sitio web. Sugerimos [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Luego entrégate el ítem dentro de Minecraft
* Mientras lo sostienes en la mano, ejecuta el comando /ei create \<id>
* ¡Y listo! Ahora tu EI tiene los atributos importados automáticamente.
:::

#### **Keep default attributes**

* Info: Valor booleano para conservar o no el atributo por defecto del ítem.
* Ejemplo:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
En 1.21+, un ítem sin atributos propios que no tenga estas dos líneas **pierde los atributos por defecto de su material**: una espada golpea como un puño, una pieza de armadura no da armadura. ExecutableItems lista estos ítems en la consola después de cada carga. Para corregir todos tus ítems de una vez: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Smithing table
Con `keepDefaultAttributes: true`, un ítem mejorado en la mesa de herrería (de diamante a netherite) obtiene los atributos por defecto de su nuevo material (armadura, dureza y resistencia al empuje de netherite). Los atributos propios del ítem se conservan.
:::

* En este enlace hay un tutorial sobre los atributos y sus características.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Ignora el ajuste de keep default attributes. Es útil para el tercer caso de la explicación de esta tabla:
* Ejemplo:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Para versiones de Minecraft anteriores a 1.21.4: Entero para establecer el valor de la característica customModelData del ítem. Útil para crear diferentes texturas para un ítem.
  * Desde la versión 1.21.4 de Minecraft también puedes añadir texto y booleanos.
* Ejemplo: 

```yaml
# For the Minecraft version before 1.21.4
customModelData: 2232

# Since the 1.21.4
# Use ; to separate your data
customModelData: 1.0;true;hello;5.0;false;true;my text 2

# A vanilla item like this : /give @p brick[custom_model_data={floats:[1.0],flags:[true],strings:["hello"]}] 1
# Will look like this in EI : 
customModelData: 1.0;true;hello
```

* Tutorial: [https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures](https:/.ssomar.com/executableitems/questions-or-guides/premium-custom-textures)

### Características de Item Rarity <CustomTag type="version" version="1.20.5" />

* Info: La rareza es una estadística vanilla aplicada a ítems y bloques para indicar su valor y su facilidad de obtención. No tiene ningún efecto en la jugabilidad. Hay cuatro niveles de rareza: Common, Uncommon, Rare y Epic.
  * `enableRarity`: Booleano que representa si la característica está habilitada o no
  * `rarity`: Tipo de rareza
* Ejemplo:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Características de Equippable <CustomTag type="version" version="1.21.2" />

* Info: Esta sección configura el comportamiento de un ítem equipable. Cuando está habilitada, el ítem se puede equipar en un slot designado, con la opción de reproducir un efecto de sonido. También puedes especificar un modelo personalizado para el ítem equipado, definir si recibe daño cuando el portador es herido y establecer flags para permitir o restringir el intercambio y el descarte. Además, puedes restringir qué entidades pueden equipar el ítem.
  * `enable`: Establécelo en true para habilitar el equipamiento de este ítem
  * `slot`: El slot de equipamiento (por ejemplo, CHEST, HEAD, LEGS, FEET) donde se equipa el ítem
  * `enableSound`: Booleano para reproducir un sonido cuando se equipa el ítem
  * `sound`: Efecto de sonido que se reproduce al equipar
  * `equipModel`: (Opcional) modelo personalizado para el ítem equipado (por ejemplo, "mynamespace:mymodel")
  * `cameraOverlay`: (Opcional) overlay de cámara personalizado cuando el ítem está equipado
  * `damageableOnHurt`: Booleano que selecciona si el ítem pierde durabilidad cuando el portador es herido
  * `dispensable`: Booleano que selecciona si el ítem se puede desechar (quitar / soltar)
  * `swappable`: Booleano que selecciona si el ítem se puede equipar con clic derecho (se intercambia con el ítem que se lleva en ese slot)
  * `allowedEntities`: Lista de entidades que pueden equipar este ítem
* Ejemplo:

```yaml
equippableFeatures:
    enable: false
    slot: CHEST
    enableSound: false
    sound: ITEM_ARMOR_EQUIP_DIAMOND

    equipModel: "" # Example: "mynamespace:mymodel"
    cameraOverlay: "" # Example: "mynamespace:mymodel"

    damageableOnHurt: false
    dispensable: true
    swappable: true

    allowedEntities:
     - PLAYER
```

### Características de Repairable <CustomTag type="version" version="1.21.2" />

* Info: Características relacionadas con la reparación del ExecutableItem.
  * `enable`: Valor booleano que selecciona si la característica está habilitada o no
  * `repairCost`: Valor entero que representa el coste de repararlo en el yunque
* Ejemplo:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Característica que permite planear con el ítem como lo harías normalmente con el ítem vanilla "elytra".
* Ejemplo:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Ruta de un modelo de ítem personalizado en el paquete de texturas con el formato \<mynamespace\:model\_id>, que apuntará dentro de assets/\<mynamespace>/models/item/\<model\_id>.
* Ejemplo:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Ruta de un modelo de tooltip personalizado en el paquete de texturas con el formato \<mynamespace\:model\_id>, que apuntará dentro de /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Ejemplo:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Características relacionadas con el ítem soltado

Aquí conocerás las características que solo son visibles cuando el ítem se suelta en el suelo.

#### Brillo al soltar

* Info: Cuando el ítem se suelta, tiene un efecto de brillo
* Ejemplo: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Color del brillo al soltar

* Info: Si el ítem tiene glowEffect habilitado, es posible seleccionar el color del efecto de brillo cuando se suelta.
* Colores posibles: [Color reference](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Ejemplo:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nombre visible cuando se suelta el ítem

* Info: Selecciona si el ítem mostrará su nombre visible como un texto flotante cuando se suelta.
* Ejemplo: 

```yaml
dropFeatures:
  displayNameDrop: true
```

###  NBT Tags

* Info: Requiere el plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/), disponible en Spigot.
Esta característica te permite añadir tus propios tags NBT personalizados dentro de tu ExecutableItem.
  * `type`: El tipo de valor que almacenas, por ejemplo:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Ejemplo a continuación, dependerá de tus necesidades y de lo que quieras añadir.
  * `key`: La clave de tipo string que representa ese almacenamiento NBT
  * `value`: Valor del NBT Tag que estás añadiendo
* Ejemplo:

```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: 3
 '2': #Id of this nbt, you can add as many as you want
    type: STRING
    key: 'MyOtherKey'
    value: 'myValue'
 '3': #Id of this nbt, you can add as many as you want
    type: BOOLEAN
    key: 'KeyKeyKeykey'
    value: true
 '4': #Id of this nbt, you can add as many as you want
    type: DOUBLE
    key: 'KeyKeyKeykeykeykey'
    value: 0.5
 '5': #Id of this nbt, you can add as many as you want
    type: BYTE
    key: 'IsCustom'
    value: 1
 '6': #Id of this nbt, you can add as many as you want
    key: ExtraAttributes
    type: COMPOUND
    value:
      nbt:
        '0':
          key: id
          type: STRING
          value: TRIAL_OF_THE_SUN_GOD
 '7': #Id of this nbt, you can add as many as you want
    key: CanDestroy
    type: STRING_LIST
    value:
    - minecraft:stone
 '8':
    key: PublicBukkitValues
    type: COMPOUND
    value:
      nbt:
        '0':
          key: auraskills:item_modifiers
          type: COMPOUND_LIST
          value:
            '0':
              key: comp0
              nbt:
                '0':
                  type: COMPOUND
                  value:
                    nbt:
                      '0':
                        key: auraskills:stat
                        type: STRING
                        value: auraskills/wisdom
                      '1':
                        key: auraskills:value
                        type: DOUBLE
                        value: '%rand:1|10000%'
                      '2':
                        key: auraskills:operation
                        type: STRING
                        value: add
```

### Bukkit tags

* Info: Puedes añadir valores de bukkit tag a tu ExecutableItem.
* Ejemplo:

```yaml
tags:
 - mytag:blabla1
 - myothertag:blabla2
```

En el juego se representará en PublicBukkitValues, así

```yaml
"executableitems:mytag":"blabla1"
"executableitems:myothertag":"blabla2"
```

También puedes escribir placeholders %rand% en el campo de valor de los NBT. Solo funciona con los tipos de dato STRING, INTEGER y DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
También funciona en el editor del juego
```
INTEGER::foo::%rand:1|2%
```  
  
También puedes guardar NBT en el PDC (Persistent Data Container) si quieres.
* Ejemplo en el juego: `integer::take::0::true`
* Config del ítem:
```yml
nbt:
  '0':
    key: take
    saveInPDC: true
    type: INT
    value: 0
```

### Características de Hiders

* Info: Ajustes relacionados con ocultar características que normalmente se muestran en tu ExecutableItem. Todas las características, aunque estén ocultas, seguirán funcionando.
  * `hideEnchantments`: Valor booleano que representa si los encantamientos del ExecutableItem se mostrarán o no en el lore.
  * `hideUnbreakable`: Valor booleano que representa si la descripción de irrompible se mostrará o no en el lore.
  * `hideAttributes`: Valor booleano que representa si los atributos del ExecutableItem se mostrarán o no en el lore.
  * `hidePotionEffects`: Valor booleano que representa si los efectos de poción del ExecutableItem se mostrarán o no en el lore. En versiones 1.20.5 o superiores usa hideAdditionalTooltip.
  *   hideAdditionalTooltip (solo disponible en 1.20.5++) 

      Ajuste para mostrar / ocultar efectos de poción, información de libros y fuegos artificiales, tooltips de mapas, patrones de estandartes y encantamientos de libros encantados. Sustituye al antiguo hidePotionEffects
  * `hideUsage`: Valor booleano que representa si la característica personalizada Usage del plugin ExecutableItems del propio ítem se mostrará o no en el lore.
    * Puedes mostrar el uso manualmente con el placeholder %usage% añadiéndolo al editar tu lore.
  * `hideDye`: Valor booleano que representa si el color de tinte (#\<color>) del ExecutableItem se mostrará o no en el lore.
  * `hideArmorTrim`: Valor booleano que representa si el armor trim del ExecutableItem se mostrará o no en el lore.
  * `hidePlacedOn`: Valor booleano que representa si el NBT Tag de "Can be placed on: \[...]" del ExecutableItem se mostrará o no en el lore.
  * `hideDestroys`: Valor booleano que representa si el NBT Tag de "Can destroy: \[...]" del ExecutableItem se mostrará o no en el lore.
  * `hideToolTip`: Valor booleano que representa si el tooltip está oculto o no. (Solo disponible en 1.20.5++)
* Ejemplo:

```yaml
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideAdditionalTooltip: false
  hideUsage: false
  hideDye: false
  hideArmorTrim: false
  hidePlacedOn: false
  hideDestroys: false
  hideToolTip: false
```

### Características de Usage

Esta sección explicará qué es Usage y sus características.

#### Usage

* Info: Usage es un valor entero almacenado dentro de tu ExecutableItem, se puede modificar mediante usageModification dentro de un activador o mediante comandos. Pero no es solo un valor almacenado: se creó para representar el "sistema de durabilidad personalizado" de tu ExecutableItem, lo que significa que si de algún modo el usage llega a 0, tu ítem se elimina.
* Ejemplo: 
  * Un usage de 1 no significa que el ítem tenga una de durabilidad, como explicamos antes, es un sistema de durabilidad personalizado. Durará mientras el usage no llegue a 0. Por ejemplo, si añades a tu ítem un activador que tenga la característica usageModification con valor "-1", en cuanto el activador se ejecute una vez, tu ítem desaparece.
  * Siguiendo la misma idea, si tenemos usage 1 y no hay activadores que cambien el usage del ítem, nuestro ítem durará infinitamente, hasta que, de nuevo, de algún modo un comando o un nuevo activador añadido al ítem modifique el usage a un valor igual o inferior a 0, y entonces el ítem se eliminará.
    * ```yaml
      usage: 1
      ```
  * Como dijimos, no pienses en el usage como si fuera solo un sistema de durabilidad, ¡porque también puede subir! Por ejemplo, si tenemos un activador que en lugar de un valor negativo en usageModification tiene un valor positivo, nuestro usage aumentará cada vez que se ejecute el activador ^^
  * Ahora bien, si quieres que tu ítem no aumente ni disminuya, es decir, que no use este almacenamiento de valor personalizado, puedes establecer el usage en -1.
    * ```yaml
      usage: -1
      ```

#### Usage limit <CustomTag type="premium" />

* Info: Valor entero que limita la cantidad máxima que puede alcanzar el usage. (El valor no puede ser 0)
* Ejemplo: 

```yaml
usageLimit: 600 #Usage will not be able to go up more than this value, -1 to don't take it into account
```

#### Uses per day

* Info: Valor entero que limita cuántas veces puedes usar el ítem cada día en la vida real
* Ejemplo: 

```yaml
usePerDay: 200 # -1 to ignore it
```

### Características de Food <CustomTag type="version" version="1.20.5" />

* Info: Esta característica te permite personalizar los ajustes de comida relacionados con tu ExecutableItem
  * `nutrition`: Valor entero que representa la cantidad de "medios muslos" que rellenará al jugador cuando se coma el ítem
    * Para entenderlo mejor, el jugador tiene un máximo de 20 de nutrición, y se muestra en el juego como 10 iconos de hambre, cada uno divisible en 2.
  * `saturation`: Valor entero que representa la saturación que recibirá el jugador cuando se coma el ítem.
  * `isMeat`: Valor booleano que hará que el ítem se considere comida. Se aplica de forma forzada: si estableces este valor en true, cualquier ítem, incluso los que no se pueden comer, se considerará comida y, por tanto, será consumible.
  * `canAlwaysEat`: Valor booleano que representa si el ítem se puede comer siempre, incluso cuando la barra de comida del jugador está llena.
*  Ejemplo:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Características de Consumable <CustomTag type="version" version="1.21.4" />

* Info: Características relacionadas con los consumibles. Te permite personalizar las opciones de consumible y es más cercana a la característica de comida.
  * `enable`: Booleano que representa si se habilitan o deshabilitan las características de consumible
  * `animation`: ANIMATION\_TYPE que se reproducirá al comer / consumir el ExecutableItem
  * `sound`: SOUND que se reproducirá mientras se come / consume el ítem
  * `hasConsumeParticles`: Valor booleano que representa si el ítem soltará partículas al ser comido
  * `consumeSeconds`: Cantidad de segundos que tarda en comerse / consumirse el ítem.
* Ejemplo:

```yaml
consumableFeatures:
  enable: true
  animation: SPYGLASS
  sound: ITEM.ARMOR.EQUIP_DIAMOND
  hasConsumeParticles: false
  consumeSeconds: 3
```

### Potion Settings

Aquí puedes personalizar las características de poción de tu ExecutableItem si el material del ítem es una poción.

#### Color de la poción

* Info: Entero de color de MapInfo que representa un color. Usa una página como [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para obtener el valor de MapInfo de un color.
* Ejemplo:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Tipo de poción

* Info: Potion Type que quieres que sea el ítem de poción. Es solo una característica visual, no afecta al comportamiento real de la poción. La lista está disponible aquí: [Potion types](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Ejemplo:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Efectos de la poción

* Info: Aquí puedes crear los efectos de poción que tendrá tu ítem
  * `potionEffectType`: PotionEffectType seleccionado, lista disponible aquí: [Potion effects](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Valor booleano que hace que la poción sea ambiental, lo que hace que el efecto de poción produzca más partículas, y translúcidas.
  * `duration`: Valor entero de ticks (20 ticks = 1 segundo) que representa la duración del efecto de poción.
  * `amplifier`: Valor entero que representa el nivel / grado / fuerza del efecto de poción. Amplifier 0 significa nivel 1, amplifier 1 significa nivel 2, y así sucesivamente.
  * `hasParticles`: Valor booleano que habilita o deshabilita mostrar las partículas del efecto alrededor del jugador.
  * `hasIcon`: Valor booleano que habilita o deshabilita mostrar el icono del efecto en la parte superior derecha de la pantalla del jugador.
* Ejemplo:

```yaml
potionFeatures:
  potionColor: 10265481
  potionType: FIRE_RESISTANCE
  potionEffects:
    pEffect0:
      isAmbient: false
      duration: 30
      potionEffectType: HEALTH_BOOST
      amplifier: 0
      hasParticles: false
      hasIcon: false
```

### Color de la armadura

* Info: Si tu ExecutableItem es una instancia de armaduras de cuero, aquí puedes seleccionar un valor de color de MapInfo, que puedes obtener en este sitio web [https://www.tydac.ch/color/](https://www.tydac.ch/color/), para cambiar el color.
  * <CustomTag type="version" version="1.21.3" /> En Paper, `armorColor` también está disponible en las demás piezas de armadura (casco, peto, pantalones, botas de cualquier material, armadura de caballo y de lobo) y en los élitros. Establece su componente vanilla `dyed_color`, que los modelos personalizados (Nexo, ItemsAdder...) usan para su tinte: sin él, un modelo así puede ser invisible. `/ei create` conserva este color desde el ítem que tienes en la mano.
* Ejemplo:

```yaml
armorColor: 7702341
```

### Head Settings

Aquí puedes seleccionar la configuración de las cabezas, es decir, la cabeza personalizada a partir de un valor de cabeza de jugador o de una base de datos.

#### Si no tienes un plugin de base de datos de cabezas <CustomTag type="version" version="1.13" />

* Si quieres añadir una cabeza personalizada para 1.13++ sin tener un plugin de base de datos, puedes seguir estos pasos:
  * Establece el material del ExecutableItem en PLAYER\_HEAD
  * Visita una página de cabezas personalizadas, como esta [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Luego obtén el Value de la cabeza\

      
  * Ahora copia ese valor y pégalo dentro de la característica headValue de ExecutableItems
  * Ejemplo:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### Si tienes el plugin Head Database <CustomTag type="version" version="1.12" />

* Si quieres añadir una cabeza personalizada para 1.12++ y tienes el plugin Head Database, puedes seguir estos pasos:
  * Abre la GUI de tu plugin y obtén el ID de la cabeza que quieras
  * Luego pégalo dentro de las características de cabeza, en headDBID
  * Ejemplo:
  * ```yaml
    headDBID: 44328
    ```
* Aquí tienes los enlaces por si no lo tienes y lo quieres.
  * Versión premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versión gratuita: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Lista de strings con los nombres de los mundos en los que quieres impedir o permitir que los jugadores usen el ExecutableItem.
* Ejemplo:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Valor booleano que representa si se almacena o no la información en el propio ítem. Actualmente almacena la característica "owner". Por tanto, si quieres usar el placeholder %owner% o las condiciones relacionadas con el owner, debes tenerlo habilitado.
* Ejemplo:

```yaml
storeItemInfo: false
```

### Características de Owner

#### canBeUsedOnlyByTheOwner

* Info: Valor booleano que representa si el ítem solo puede ser usado por el owner o no.
  * Esto solo funciona si store item info está activado, para que el ítem tenga un owner.
* Ejemplo: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Valor booleano que representa que, si el ítem no lo usa el owner, se cancelan todos los eventos. Esto significa que, si el activador es, por ejemplo, PLAYER\_BREAK\_BLOCK y alguien que no es el owner intenta usar este ítem, no podrá romper ningún bloque porque todos los eventos se cancelarán.
  * Esto solo funciona si store item info está activado, para que el ítem tenga un owner.
* Ejemplo: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Lista de IDs de activadores de tu ExecutableItem. Es una lista negra que deshabilita las características habilitadas de canBeUsedOnlyByTheOwner, es decir, todos los IDs de activador de aquí que apunten a un activador del ExecutableItem podrán ser usados por cualquiera, incluso si canBeUsedOnlyByTheOwner está en true.
  * Esto solo funciona si store item info está activado, para que el ítem tenga un owner.
* Ejemplo: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Valor booleano que representa que, si el jugador no tiene el permiso (ei.item.\<id>) para usar el ítem, se cancelan todos los eventos. Esto significa que, si el activador es, por ejemplo, PLAYER\_BREAK\_BLOCK y alguien que no tiene el permiso para usar este ítem lo intenta, no podrá romper ningún bloque porque todos los eventos se cancelarán.

```yaml
cancelEventIfNoPermission: true
```

### Keep item on death

* Info: Valor booleano que representa si el jugador conservará el ítem después de morir o no.
* Ejemplo: 

```yaml
keepItemOnDeath: true
```

:::info
Es compatible con la característica keepInventory de WorldGuard y con la gamerule keepInventory de vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: Valor booleano que representa si se impide o no que el ExecutableItem se apile. Establecer esta característica en true hará que el customStackSize de este ítem sea 1.
* Ejemplo: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Valor entero para establecer el tamaño de la pila de este ítem. Sobrescribirá la cantidad de pila actual.
* Para entenderlo mejor, el diamond\_sword vanilla tiene un tamaño de pila de 1, ya que no se puede apilar; con esta característica puedes aumentar ese valor. Por otro lado, la dirt tiene un tamaño de pila de 64, pero con esto puedes reducirlo, por ejemplo, a un tamaño de pila de 20.
* Ejemplo: 

```yaml
customStackSize: 32
```

### Variables Settings

* Info: Las variables son una forma de almacenar información dentro de tu ExecutableItem. Permiten llevar la cuenta de cantidades, almacenar posiciones; en realidad, puedes almacenar lo que quieras. Ayudan a crear comportamientos de ítem dinámicos y personalizables, es decir, las variables te permiten crear comportamientos únicos para cada ítem almacenando y registrando datos específicos de ese ítem. Por ejemplo, puedes registrar cuántas veces un jugador ha usado un ítem concreto o a cuántos jugadores ha matado con él.
  * `variableName`: Nombre de la variable, se usará como referencia con %var\_\<name>% para usarla en el lore, dentro de comandos, etc. Este nombre no puede ser "id" ni "usage" ni tener espacios.
  * `type`: VariableType de la variable, puede ser de los siguientes tipos, con ejemplos de uso:
    * STRING: Con este tipo de variable puedes almacenar valores STRING, como palabras, números, letras, caracteres, etc. Por ejemplo, puedes almacenar el nombre del último jugador golpeado. Este tipo de variable no admite `variableModification(type:MODIFICATION)` para aumentar o disminuir el valor. Es estática a menos que se reemplace con un `variableModification(type:SET)`, que sobrescribirá el valor anterior.
    * NUMBER: Con este tipo de variable puedes almacenar valores FLOAT, es decir, números. Por ejemplo, si quieres almacenar la cantidad de bloques rotos, la cantidad de muertes, llevar la cuenta de los segundos antes de que ocurra algo, etc. Este tipo de variable admite `variableModification(type:MODIFICATION)` y `variableModification(type:SET)`.
    * LIST: Esta variable es de tipo lista y almacena valores STRING. Es útil para almacenar una lista de cosas, por ejemplo, llevar el registro de los bloques clicados y añadirlos a esta lista, o añadir aquí los jugadores eliminados, etc.
  * `isRefreshableClean`: Valor booleano que habilita el refresh clean. Esto permite añadir líneas de lore personalizadas sin que se eliminen cuando la variable se actualiza. Se recomienda tenerlo en true.
  * `refreshTagDoNotEdit`: Generado automáticamente por el plugin. Ayuda a que las funciones de `isRefreshableClean` funcionen correctamente. Así que no lo toques.
  * `papiParser`: El valor de tipo string que contiene el string de PlaceholderAPI donde está el valor de la variable para su procesamiento. Su propósito es permitirte insertar valores de variables dentro de placeholders de PlaceholderAPI y mostrar los resultados en el lore. 
    * Ej:
      * ID de la variable: `level`
      * Valor del string de papiParser: `%math_<VAR>*<VAR>%`
        * El string `<VAR>` representa el valor actual de la variable al procesarse. Si quieres colocar el valor en varias partes del string del placeholder de PlaceholderAPI, solo escribe `<VAR>` en los lugares donde lo necesites.
      * String del placeholder para poner en el lore: `%var_level_papi%`
* Ejemplo
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # This variable is type string
        type: STRING
        default: '' #It starts with no value, we can then change it from an activator or using commands
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Puedes consultar más información sobre otros tipos de variables en la siguiente página:
  * [SCore variables](/tools-for-all-plugins-score/score-variables)

### Características de Custom give first join

* Info: Aquí puedes personalizar la característica de entregar el ítem cuando el jugador entra por primera vez al servidor.
  * giveFirstJoin: Valor booleano que representa si la característica está habilitada o no
  * giveFirstJoinAmount: Valor entero que representa cuántos ítems de este ExecutableItem se entregarán al jugador.
  * giveFirstJoinSlot: Slot donde se entregará el ExecutableItem al jugador.
* Ejemplo:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Característica de Item Recognition <CustomTag type="premium" />

* Info: Esta característica permite que otros ítems que no son el ExecutableItem se comporten como si fueran el ExecutableItem que estás editando. Básicamente, la idea es trabajar con recognitions: es una lista de tipos de recognition y, si uno de ellos coincide entre tu ExecutableItem y otro ítem (incluso si no es un ExecutableItem), las características que tiene el ExecutableItem también estarán en el otro ítem. Esto funciona siempre que se reconozca según los requisitos de las recognitions.
  * Opciones de recognition disponibles:
    * NAME:  Habilita el reconocimiento para todos los ítems que coincidan con el nombre personalizado del ExecutableItem
    * MATERIAL: Habilita el reconocimiento para todos los ítems que coincidan con el material del ExecutableItem
    * LORE: Habilita el reconocimiento para todos los ítems que coincidan con el lore del ExecutableItem
* Por ejemplo, si creas un ExecutableItem de pico de diamante que tiene un activador PLAYER\_RIGHT\_CLICK y en los comandos "SEND\_MESSAGE I am a pickaxe", cada vez que hagas clic derecho enviará ese mensaje al chat de Minecraft. Ahora bien, si habilitas el item recognition, por ejemplo, para el material, TODOS los picos de diamante del servidor ejecutarán ese activador y, por tanto, se mostrará el mensaje.
* Ejemplo: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Escenarios de ejemplo:
  * Si un ítem EI solo tiene el item recognition de `MATERIAL` y es un DIAMOND, todos los diamantes que existan en el servidor se comportarán como ese ítem EI
  * Si un ítem EI solo tiene el item recognition de `NAME` y se llama "\&dAngle", si intentas usar cualquier ítem con el nombre "\&dAngle", se comportará como el ítem EI original. PERO si el nombre fuera "\&eAngle" u otro nombre, no funcionará.
  * Si un ítem EI solo tiene el item recognition de `LORE`, un ítem solo se comportará como el EI si tiene EXACTAMENTE los mismos códigos de color en las líneas del lore y cada detalle de mayúsculas y minúsculas de letras y caracteres.
  * Si un ítem EI solo tiene el item recognition de `MATERIAL` y `NAME`, los ítems deben tener el NOMBRE y el MATERIAL EXACTOS del ítem EI para que se considere un ítem EI.
* Ten en cuenta que, si uno de tus ExecutableItems tiene item recognitions habilitados en MATERIAL, no debes usar más item recognitions basados en MATERIAL para otro ExecutableItem con el mismo MATERIAL. El motivo es que, si hay 2 ExecutableItems con el recognition de MATERIAL habilitado y ambos son DIAMOND\_BLOCK, solo el primero por orden alfabético tendrá la mayor prioridad en caso de que alguien ejecute un DIAMOND\_BLOCK.

## Características de Use cooldown <CustomTag type="version" version="1.21.2" />

* Info: Característica que añade al ítem un cooldown de uso al estilo vanilla, similar al cooldown de las ender pearls o las chorus fruit.
  * `cooldownGroup`: Valor de tipo string que define un grupo de cooldown. Los ítems con el mismo grupo de cooldown compartirán el mismo cooldown. Debe estar en minúsculas y seguir el formato NamespacedKey (por ejemplo, "mygroup" o "namespace:mygroup")
  * `vanillaUseCooldown`: Valor entero que representa la duración del cooldown en segundos
* Ejemplo:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Este cooldown es distinto del sistema de cooldown de los activadores. Es un cooldown vanilla de Minecraft que muestra el ítem "atenuado" en la hotbar durante el periodo de cooldown.
:::


## Según el tipo de ítem

### Características de Container

* Info: Aquí puedes personalizar las características de container si el bloque es una instancia de contenedor, como el cofre y el barril.
  * `isLocked`: Valor booleano que representa si el contenedor está bloqueado o no
  * `lockedName`: Valor de tipo string que representa el nombre de la llave si el contenedor está bloqueado. Es una característica de Minecraft: si tienes un ítem con el mismo nombre que lockedName podrás abrir el cofre; de lo contrario, no.
  * `containerContent`: Lista de materiales dentro del contenedor cuando se coloca, con el formato slot:\<slot>;\<material>
* Ejemplo:

```yaml
containerFeatures:
  isLocked: true
  lockedName: thisIsTheKey
  containerContent:
  - slot:0;minecraft:loom
```

### Tool Rules <CustomTag type="version" version="1.20.5" />

Info: Aquí puedes seleccionar las reglas de las herramientas.

#### Enable

* Info: Valor booleano para seleccionar si las Tool Rules están habilitadas o no.
* Ejemplo:

```yaml
toolRules:
  enable: true
```

#### Default mining speed

* Info: Valor float para establecer la velocidad de minado por defecto del ExecutableItem.
* Ejemplo:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info: Valor entero que se establece como el valor de durabilidad que se restará después de que el ExecutableItem rompa un bloque. 
* Ejemplo:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info: Puedes seleccionar la velocidad de minado y si suelta drops para ciertos bloques con el ExecutableItem, para personalizar la herramienta.
  * `miningSpeed`: Valor float para establecer la velocidad de minado del ExecutableItem para los bloques seleccionados en la regla de herramienta.
  * `correctForDrops`: Valor booleano que representa si el bloque soltará drops o no al usar el ExecutableItem.
  * `blocks`: Lista de BLOCKS a los que aplicar las reglas de herramienta.
* Ejemplo:

```yaml
toolRules:
  toolRule0: #ID Of this tool rule, you can add as many as you want
    miningSpeed: 1.0
    correctForDrops: true
    blocks:
    - STONE
  enable: true
```

### chargedProjectiles

* Info: Característica que permite tener proyectiles ya cargados cuando el ExecutableItem es una ballesta y se entrega al jugador.
  * El formato del material debe ser `minecraft:<id>`. Por ahora admite ítems vanilla.
* Ejemplo:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Característica que permite tener ítems ya incluidos como contenido si el ExecutableItem es un bundle y se entrega al jugador.
  * El formato del material debe ser `minecraft:<id>`. Por ahora admite ítems vanilla.
* Ejemplo:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Características de Firework

* Info: Característica que permite tener características de fuegos artificiales personalizadas si el ExecutableItem es un fuego artificial.
* Ejemplo:

```yaml
fireworkFeatures:
  lifeTime: 1
  fireworkExplosions:
    explosion_0:
      colors:
      - BLUE
      fadeColors:
      - RED
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
    explosion_1:
      colors:
      - GREEN
      fadeColors: []
      type: CREEPER
      hasTrail: true
      hasTwinkle: true
```

Para los colores, puedes usar los [Color names](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) normales o `RGB-<0-255>-<0-255>-<0-255>`

### Características de Spawner <CustomTag type="version" version="1.20.5" />

* Info: Característica que permite crear spawners personalizados con ExecutableItems
* Ajustes:
  * `spawnCount`: Define cuántas entidades aparecen en cada spawn
  * `spawnDelay`: Define el retraso del primer spawn después de colocar el spawner (en ticks, 20 ticks = 1 segundo)
  * `spawnRange`: El rango de spawn
  * `requiredPlayerRange`: Define a qué distancia máxima debe estar el jugador para activar el spawner
  * `minSpawnDelay`: El retraso mínimo entre cada spawn  (en ticks, 20 ticks = 1 segundo)
  * `minSpawnDelay`: El retraso máximo entre cada spawn  (en ticks, 20 ticks = 1 segundo)
  * `maxNearbyEntities`: Máximo de entidades alrededor del spawner
  * `addSpawnerNbtToItem`: Si añade o no el tag de componentes del spawner al ítem (es mejor dejarlo en false). Cuando es false, el plugin solo añadirá los tags cuando se coloque el spawner.
  * `potentialSpawns`: Define los potentialSpawns de tu spawner con peso

:::tip
Es mejor crear tu spawner primero en [MCStaker](https://mcstacker.net/?cmd=give), luego entregártelo en el juego y, por último, sostenerlo + hacer /ei create.\
Importará automáticamente las características del spawner a tus ExecutableItems.
:::

* Ejemplo:

```yaml
spawnerFeatures:
  spawnCount: 4
  spawnDelay: 20
  spawnRange: 4
  requiredPlayerRange: 16
  minSpawnDelay: 200
  maxSpawnDelay: 800
  maxNearbyEntities: 6
  potentialSpawns:
  # {THE ENTITY};the weight for this SpawnerEntry, when added to a spawner entries with higher weight will spawn more often.
  - '{BlockState:{Name:"minecraft:diorite"},id:"minecraft:falling_block"};1' 
  - '{id:"minecraft:chicken"};1' 
  addSpawnerNbtToItem: false
```

### Características de Instrument <CustomTag type="version" version="1.20.5" />

* Info: Característica que te permite personalizar el sonido del cuerno de cabra para los ítems. Esta característica solo funciona con ítems de material GOAT_HORN.
  * `enable`: Valor booleano que habilita o deshabilita las características de instrument
  * `instrument`: El sonido del instrumento musical que se reproducirá cuando se use el cuerno de cabra. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Ejemplo:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Características de Weapon <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Característica que te permite configurar ajustes de combate específicos de armas para los ítems.
  * `enable`: Valor booleano que habilita o deshabilita las características de weapon
  * `disableBlockingTime`: Valor entero que representa durante cuánto tiempo (en segundos) quedará deshabilitado el escudo del objetivo tras ser golpeado por esta arma
  * `damagePerAttack`: Valor entero que representa el daño de durabilidad que sufre esta arma por ataque (por defecto: 5)
* Ejemplo:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Características de Blocks attacks <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Característica que te permite configurar cómo los ítems bloquean ataques, de forma similar a los escudos. Esto permite que cualquier ítem pueda bloquear daño.
  * `enable`: Valor booleano que habilita o deshabilita las características de block attacks
  * `blockDelay`: Valor entero que representa el retraso en segundos antes de que el ítem pueda volver a bloquear después de ser usado
  * `blockSound`: Sonido que se reproduce al bloquear un ataque con éxito
  * `disableSound`: Sonido que se reproduce cuando el bloqueo se deshabilita (tras ser sobrepasado)
  * `disableCooldownScale`: Valor double (multiplicador) de cuánto dura la deshabilitación del bloqueo tras ser sobrepasado (por defecto: 1.0)
  * `damageReductions`: Lista de configuraciones de reducción de daño que definen cuánto daño se reduce por tipo de daño
  * `bypassedBy`: Tipo de daño que ignora este bloqueo por completo
* Ejemplo:

```yaml
blockAttacksFeatures:
  enable: true
  blockDelay: 1
  blockSound: ITEM_SHIELD_BLOCK
  disableSound: ITEM_SHIELD_BREAK
  disableCooldownScale: 1.5
  damageReductions:
    reduction_0:
      baseDamageBlocked: 2.0
      factorDamageBlocked: 0.5
      horizontalBlockingAngle: 90.0
      damageTypes:
      - ARROW
      - MOB_ATTACK
    reduction_1:
      baseDamageBlocked: 1.0
      factorDamageBlocked: 0.25
      horizontalBlockingAngle: 180.0
      damageTypes:
      - EXPLOSION
  bypassedBy: VOID
```

#### Damage Reduction Configuration

Cada entrada de reducción de daño tiene los siguientes ajustes:
* `baseDamageBlocked`: Cantidad base de daño bloqueado (reducción fija)
* `factorDamageBlocked`: Porcentaje de daño bloqueado (0.5 = 50% de reducción)
* `horizontalBlockingAngle`: El ángulo en grados desde el cual se pueden bloquear los ataques (90 = cuarto frontal, 180 = mitad frontal, 360 = todas las direcciones). Debe ser mayor que 0.
* `damageTypes`: Lista de tipos de daño a los que se aplica esta reducción. Consulta [Damage Types](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) para ver los tipos disponibles.

:::tip
Con esta característica puedes crear "escudos" personalizados con diferentes materiales. Por ejemplo, ¡podrías hacer un libro que bloquee el daño mágico o un diamante que bloquee los ataques físicos!
:::
