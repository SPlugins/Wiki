---
description: >-
  Guía de ExecutableItems (SPlugins) sobre las funcionalidades del ítem:
  activadores, atributos, durabilidad, variables, cooldown y más.
source_hash: 9a41c7f27a57a232
translated_at: '2026-10-03T10:25:03.598Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Funcionalidades del Ítem

Lista de funcionalidades del ítem, estas son lo primero que debes configurar en tu ítem.

Las funcionalidades premium están marcadas con la etiqueta: <CustomTag type="premium" />

### Activadores

* Funcionalidades muy importantes que te permiten añadir habilidades a tu ítem
* Wiki dedicada a esta funcionalidad: [EI Activators list](../activator-configuration/list-of-the-activators.md) y [EI Activators features](/executableitems/configurations/activator-configuration/activators-features.md)


### Material del ítem

* Info: El material del ítem de Minecraft del Executable Item
* Ejemplo: Si quiero que el ExecutableItem tenga como ítem base DIAMOND entonces sería

```yaml
material: DIAMOND
```

* Puedes consultar la información de la lista de materiales en este enlace: [Material list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
* Si quieres configurar como material del ítem una cabeza personalizada, consulta este enlace [Head settings](/executableitems/configurations/item-configuration/item-features#head-settings).

### Nombre o DisplayName del ítem

* Info: El nombre visible del ítem. Es el nombre que se ve.
* Ejemplo: Si quisiera que mi ítem tenga como nombre visible un título rojo "Epic Sword" entonces sería

```yaml
name: '&cEpic Sword'
```

* Si quieres usar colores HEX en tu nombre visible puedes hacer esto:
  * Tienes que ir a una página donde te ayude a elegir el color que quieras para obtener el código de color hex. Te recomendamos [https://htmlcolorcodes.com/](https://htmlcolorcodes.com/)
  * Luego elige el color que prefieras y anota / copia su color hex. [Reference](https://imgur.com/a/tNWtA0a)
  * Con ese código de color hex tienes que añadir "#" al principio, y eso es lo que irá antes de lo que quieras colorear. #\<HEX\_COLOR\_CODE>\<What you want to color>
  * Finalmente tendrás algo como **`#DB6725&lPractice`** y se verá con el color que seleccionaste [in game](https://imgur.com/a/7umxduF).

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

* Puedes usar placeholders en el lore. Solo ten en cuenta que si usas placeholders fuera del plugin y luego añades nuevos contenidos al lore, como encantamientos personalizados o texto personalizado, si uno de los placeholders se refresca, entonces todo lo añadido fuera de los plugins de Ssomar se eliminará. Para evitar esto necesitarás no refrescar el lore, pero eso significa que los placeholders no se actualizarán. Tienes que elegir el que prefieras. Para concluir: COSAS EXTRA EN EL LORE significa SIN REFRESH significa SIN placeholders personalizados de EI en el lore, por favor.

:::info
Para dejar un espacio vacío entre líneas de lore puedes añadir '' en el archivo de configuración. Si estás editando el lore dentro de Minecraft usando la GUI personalizada necesitarías usar '\&f' en su lugar.
:::

:::info
Para ExecutableItems gratis hay una línea con "Made with ExecutableItems": no se puede eliminar, es la contrapartida de la actualización que aumenta la cantidad de ítems de 25 a 500.
:::

### Efecto de brillo (enchanted glowing)

* Info: Valor booleano que selecciona si se le da al executable item un aspecto de brillo/efecto encantado.
* Ejemplo: 

```yaml
glow: true
```

### Desactivar el brillo de encantado <CustomTag type="version" version="1.20.5" />

* Info: Valor booleano que fuerza al ítem a no tener el efecto de brillo aunque esté encantado. 
* Ejemplo: 

```yaml
disableEnchantGlow : true
```

:::info
CONSEJO: También puedes eliminar el efecto de brillo de algunos ítems vanilla, como por ejemplo la nether star.
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
  * Para las versiones 1.20.5 e inferiores: El valor de durabilidad debe ser igual o inferior a la durabilidad máxima vanilla del ítem seleccionado.
  * Ejemplo: 
```yaml
durability: 150
```
  * Para las versiones 1.20.5 y superiores: La opción de durabilidad se puede personalizar, habilitando nuevas funcionalidades como la sincronización del uso del ExecutableItem y el valor de durabilidad. Y permite seleccionar una durabilidad máxima personalizada.
  * Ejemplo:
```yaml
isDurabilityBasedOnUsage: true
maxDurability: 20 
durability: 19
```

### Encantamientos del ítem

* Info: Establece los encantamientos iniciales que tendrá el executable item cuando se entregue.
* Ejemplo:

```yaml
enchantments:
  enchantment1: #ID Of this enchantment, you can add as many as you want
    enchantment: sharpness
    level: 1
```

### Unbreakable

* Info: Valor booleano que selecciona si el executable item será indestructible o no
* Ejemplo: 

```yaml
unbreakable: true
```

### Attributes <CustomTag type="version" version="1.12" />

* Info: Puedes seleccionar los atributos del ExecutableItem.
  * `attribute`: El tipo de atributo. Lista aquí [Attribute list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html)
  * `uuid`: Es un código que Minecraft necesita para asignar los modificadores de atributo. Puedes ignorarlo.
  * `name`: Es el nombre visible del Attribute Modifier. Te es útil para escribir lo que hace. No afecta en nada más que en visualizarlo en la GUI.
  * `operation`: Tipo de operación que hará el AttributeModifier. Lista aquí [Operations](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html)
  * `amount`: El valor para el AttributeModifier, se aplicará al atributo usando la operación seleccionada.
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
**Si estás usando la versión 1.12 necesitarás seguir estos pasos:**

* Este proceso requiere la versión premium de EI <CustomTag type="premium" />
* Genera tu ítem con atributos en un sitio web. Te sugerimos [https://mapmaking.fr/give1.12/](https://mapmaking.fr/give1.12/)
* Luego dale el ítem a ti mismo dentro de Minecraft
* Mientras lo tienes en la mano, ejecuta el comando /ei create \<id>
* ¡Y ya está! Ahora tu EI tiene los atributos importados automáticamente.
:::

#### **Mantener atributos por defecto**

* Info: Valor booleano para mantener o no el atributo por defecto del ítem.
* Ejemplo:

```yaml
keepDefaultAttributes: true
ignoreKeepDefaultAttributesFeature: false
```

:::warning
En 1.21+, un ítem sin atributos propios que no tenga estas dos líneas **pierde los atributos por defecto de su material**: una espada golpea como un puño, una pieza de armadura no da armadura. ExecutableItems lista estos ítems en la consola después de cada carga. Para corregir todos tus ítems a la vez: `/ei util-set-keepdefaultattributes-all-ei true`.
:::

:::info Mesa de herrería
Con `keepDefaultAttributes: true`, un ítem mejorado en la mesa de herrería (de diamante a netherite) obtiene los atributos por defecto de su nuevo material (armadura de netherite, resistencia y resistencia al retroceso). Los atributos del ítem en sí se mantienen.
:::

* En este enlace hay un tutorial sobre atributos y sus funcionalidades.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HqyF0QBYIY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### **ignoreKeepDefaultAttributesFeature:** 

* Info: Ignora la configuración de mantener atributos por defecto. Es útil para el tercer caso en la explicación de esta tabla:
* Ejemplo:

```yaml
ignoreKeepDefaultAttributesFeature: true
```

### Custom model data <CustomTag type="version" version="1.14" />

* Info: 
  * Para la versión de Minecraft anterior a 1.21.4: Entero para establecer el valor de la funcionalidad customModelData del ítem. Útil para crear diferentes texturas para un ítem.
  * Desde la versión 1.21.4 de Minecraft ahora puedes añadir texto y booleano.
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

### Item Rarity features <CustomTag type="version" version="1.20.5" />

* Info: La rareza es una estadística vanilla aplicada a ítems y bloques para indicar su valor y facilidad de obtención. No tiene ningún efecto en la jugabilidad. Hay cuatro niveles de rareza: Common, Uncommon, Rare y Epic.
  * `enableRarity`: Booleano que representa si la funcionalidad está habilitada o no
  * `rarity`: Tipo de rareza
* Ejemplo:

```yaml
itemRarity:
  enableRarity: false
  rarity: COMMON
```

### Equippable features <CustomTag type="version" version="1.21.2" />

* Info: Esta sección configura el comportamiento de un ítem equipable. Cuando está habilitado, el ítem se puede equipar en un slot designado, activando opcionalmente un efecto de sonido. También puedes especificar un modelo personalizado para el ítem equipado, definir si pierde durabilidad cuando el portador recibe daño, y establecer flags para permitir o restringir el intercambio y el descarte. Además, puedes restringir qué entidades pueden equipar el ítem.
  * `enable`: Establece como true para habilitar el equipamiento de este ítem
  * `slot`: El slot de equipamiento (por ejemplo, CHEST, HEAD, LEGS, FEET) donde se equipa el ítem
  * `enableSound`: Booleano para reproducir un sonido cuando se equipa el ítem
  * `sound`: Efecto de sonido que se reproduce al equiparse
  * `equipModel`: (Opcional) modelo personalizado para el ítem equipado (por ejemplo, "mynamespace:mymodel")
  * `cameraOverlay`: (Opcional) overlay de cámara personalizado cuando el ítem está equipado
  * `damageableOnHurt`: Booleano que selecciona si el ítem pierde durabilidad cuando el portador recibe daño
  * `dispensable`: Booleano que selecciona si el ítem se puede descartar (quitar/soltar)
  * `swappable`: Booleano que selecciona si el ítem se puede intercambiar por otro ítem
  * `allowedEntities`: Lista de entidades autorizadas a equipar este ítem
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

### Repairable features <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidades relacionadas con cuando se repara el ExecutableItem.
  * `enable`: Valor booleano que selecciona si la funcionalidad está habilitada o no
  * `repairCost`: Valor entero que representa el costo de repararlo en el yunque
* Ejemplo:

```yaml
repairableFeatures:
    enable: false
    repairCost: 2 
```

### Glider <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidad para permitir planear con el ítem como normalmente harías con el ítem vanilla "elytra".
* Ejemplo:

```yaml
glider: false
```

### itemModel <CustomTag type="version" version="1.21.2" />

* Info: Ruta de un modelo de ítem personalizado en el texture pack en el formato de \<mynamespace\:model\_id> que apuntará dentro de assets/\<mynamespace>/models/item/\<model\_id>.
* Ejemplo:

```yaml
itemModel: "" # "mynamespace:mymodel"
```

### tooltipModel <CustomTag type="premium" /> <CustomTag type="version" version="1.21.2" />

* Info: Ruta de un modelo de tooltip personalizado en el texture pack en el formato de \<mynamespace\:model\_id> que apuntará dentro de /assets/\<mynamespace>/textures/gui/sprites/tooltip/\<id>\_frame
* Ejemplo:

```yaml
tootipModel: "" # "mynamespace:mymodel"
```

### Funcionalidades relacionadas con el ítem soltado

Aquí aprenderás sobre funcionalidades que solo son visibles cuando el ítem se suelta en el suelo.

#### Brillo al soltar

* Info: Cuando se suelta el ítem, tiene un efecto de brillo
* Ejemplo: 

```yaml
dropFeatures:
  glowDrop: false
```

#### Color de brillo al soltar

* Info: Si el ítem tiene glowEffect habilitado entonces es posible seleccionar el color del efecto de brillo cuando se suelta.
* Colores posibles: [Color reference](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
* Ejemplo:

```yaml
dropFeatures:
  glowDrop: false
  glowDropColor: WHITE
```

#### Nombre visible cuando se suelta el ítem

* Info: Selecciona si el ítem mostrará el nombre visible como un texto flotante cuando se suelta.
* Ejemplo: 

```yaml
dropFeatures:
  displayNameDrop: true
```

### NBT Tags

* Info: Requiere el plugin [**NBTAPI**](https://www.spigotmc.org/resources/nbt-api.7939/) disponible en Spigot.
Esta funcionalidad te permite añadir tus propios NBT tags dentro de tu ExecutableItem.
  * `type`: El tipo de valor que estás almacenando, por ejemplo:
    * BOOLEAN: true | false
    * STRING: car
    * INTEGER: 6
    * DOUBLE: 17.6
    * COMPOUND: Ejemplo abajo, dependerá de tus necesidades y de lo que quieras añadir.
  * `key`: La clave de tipo string que representa ese almacenamiento nbt
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

También puedes escribir placeholders %rand% en el campo de valor de los NBTs. Solo funciona para los tipos de dato STRING, INTEGER y DOUBLE
```yaml
nbt:
 '1': #Id of this nbt, you can add as many as you want
    type: INT
    key: 'MyKeyTag'
    value: '%rand:-100|100%'
```
También funciona en el editor dentro del juego
```
INTEGER::foo::%rand:1|2%
```  
  
También puedes guardar nbts en el PDC (Persistent Data Container) si quieres.
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

### Hiders features

* Info: Configuración relacionada con ocultar funcionalidades que normalmente se muestran en tu ExecutableItem. Todas las funcionalidades, aunque estén ocultas, seguirán siendo funcionales.
  * `hideEnchantments`: Valor booleano que representa si los encantamientos del ExecutableItem se mostrarán en el lore o no.
  * `hideUnbreakable`: Valor booleano que representa si la descripción de indestructible se mostrará en el lore o no.
  * `hideAttributes`: Valor booleano que representa si los atributos del ExecutableItem se mostrarán en el lore o no.
  * `hidePotionEffects`: Valor booleano que representa si los efectos de poción del ExecutableItem se mostrarán en el lore o no. En las versiones 1.20.5 o + usa hideAdditionalTooltip.
  *   hideAdditionalTooltip (Solo disponible en 1.20.5++) 

      Configuración para mostrar/ocultar efectos de poción, información de libros y fuegos artificiales, tooltips de mapas, patrones de estandartes, y encantamientos de libros encantados. Reemplaza al antiguo hidePotionEffects
  * `hideUsage`: Valor booleano que representa si la funcionalidad personalizada Usage del plugin ExecutableItem del propio ítem se mostrará en el lore o no.
    * Puedes mostrar manualmente el usage usando el placeholder %usage% añadiéndolo al editar tu lore.
  * `hideDye`: Valor booleano que representa si el color de tinte (#\<color>) del ExecutableItem se mostrará en el lore o no.
  * `hideArmorTrim`: Valor booleano que representa si el armor trim del ExecutableItem se mostrará en el lore o no.
  * `hidePlacedOn`: Valor booleano que representa si el NBT Tag de "Can be placed on: \[...]" del ExecutableItem se mostrará en el lore o no.
  * `hideDestroys`: Valor booleano que representa si el NBT Tag de "Can destroy: \[...]" del ExecutableItem se mostrará en el lore o no.
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

### Usage features

Esta sección explicará qué es usage y sus funcionalidades.

#### Usage

* Info: Usage es un valor entero almacenado dentro de tu ExecutableItem, se puede modificar a través de usageModification dentro de un activador o de comandos. Pero no es solo un valor almacenado, esto se hizo para representar el "sistema de durabilidad personalizado" de tu ExecutableItem, es decir, si de alguna manera el usage llega a 0, tu ítem se elimina.
* Ejemplo: 
  * Un usage de 1 no significa que el ítem tenga una de durabilidad, como explicamos antes, es un sistema personalizado de durabilidad. Durará mientras el usage no llegue a 0. Por ejemplo, si añades un activador a tu ítem que tenga la funcionalidad usageModification con valor "-1", una vez que el activador se active una vez, tu ítem desaparece.
  * Siguiendo la misma idea, tenemos usage 1, si no tenemos activadores que cambien el usage del ítem, nuestro ítem durará infinitamente, hasta que de nuevo... de alguna manera, un comando o un nuevo activador añadido al ítem modifique el usage a un valor igual o menor que 0, entonces el ítem se eliminará.
    * ```yaml
      usage: 1
      ```
  * Usage as we said, don't think like its just a durability system, because it can go up too ! .  For example if we have an activator that instead of having a negative value on usageModification it has a positive value, then our usage will increase once the activator is triggered ^^
  * Now, if you want your item neither increase nor decrease, basically don't use this custom value storage. You can set the usage to -1.
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

### Food features <CustomTag type="version" version="1.20.5" />

* Info: Esta funcionalidad te permite personalizar los ajustes de comida relacionados con tu ExecutableItem
  * `nutrition`: Valor entero que representa la cantidad de "medio-alimento" que llenará al jugador una vez que se come el ítem
    * Para entenderlo mejor, el jugador tiene 20 de nutrición máxima, y se muestra en el juego como 10 iconos de hambre, cada icono se puede dividir en 2.
  * `saturation`: Valor entero que representa la saturación que recibirá el jugador una vez que se come el ítem.
  * `isMeat`: Valor booleano que hará que el ítem se considere comida. Esto se aplicará de forma forzada, es decir, si pones este valor en true, cualquier ítem, incluso los que no se pueden comer, se considerará comida, y por lo tanto serán consumibles.
  * `canAlwaysEat`: Valor booleano que representa si el ítem siempre se puede comer aunque el jugador tenga la barra de hambre completamente llena.
*  Ejemplo:

```yaml
foodFeatures:
  nutrition: 1
  saturation: 1
  isMeat: false
  canAlwaysEat: true
```

### Consumable features <CustomTag type="version" version="1.21.4" />

* Info: Funcionalidades relacionadas con consumable, te permite personalizar las opciones de consumable, está más cerca de la funcionalidad de food.
  * `enable`: Booleano que representa activar o desactivar las funcionalidades de consumable
  * `animation`: ANIMATION\_TYPE que se reproducirá al comer/consumir el ExecutableItem
  * `sound`: SOUND que se reproducirá cuando se esté comiendo/consumiendo el ítem
  * `hasConsumeParticles`: Valor booleano que representa si el ítem soltará partículas al comerse
  * `consumeSeconds`: Cantidad de segundos que tarda el ítem en comerse/consumirse.
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

Aquí puedes personalizar las funcionalidades de poción de tu ExecutableItem si el material del ítem es una poción.

#### Potion color

* Info: Entero de MapInfo Color que representa un color. Usa una página como [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para obtener el valor de MapInfo de un color.
* Ejemplo:

```yaml
potionFeatures:
  potionColor: 10265481
```

#### Potion type

* Info: Potion Type que quieres que tenga el ítem de poción. Es solo una funcionalidad de visibilidad, no afecta al comportamiento real de la poción. La lista está disponible aquí [Potion types](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)
* Ejemplo:

```yaml
potionFeatures:
  potionType: WIND_CHARGED
```

#### Potion effects

* Info: Aquí puedes crear los efectos de poción que tendrá tu opción
  * `potionEffectType`: PotionEffectType seleccionado, lista disponible aquí [Potion effects](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
  * `isAmbient: Valor booleano que hace que la poción sea ambient, lo que hace que el efecto de poción produzca más partículas, translúcidas.
  * `duration`: Valor entero de ticks (20 ticks = 1 segundo) que representa la duración del efecto de poción.
  * `amplifier`: Valor entero que representa el nivel/grado/fuerza del efecto de poción. Amplifier 0 significa nivel 1, amplifier 1 significa nivel 2 y así sucesivamente.
  * `hasParticles`: Valor booleano que activa o desactiva mostrar partículas de efecto alrededor del jugador.
  * `hasIcon`: Valor booleano que activa o desactiva mostrar el icono de efecto en la parte superior derecha de la pantalla del jugador.
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

### Color de armadura de cuero

* Info: Si tu ExecutableItem es una instancia de armaduras de cuero entonces aquí puedes seleccionar un valor de MapInfo Color que puedes obtener de este sitio web [https://www.tydac.ch/color/](https://www.tydac.ch/color/) para cambiar el color.
* Ejemplo:

```yaml
armorColor: 7702341
```

### Head Settings

Aquí puedes seleccionar la configuración para los ajustes de cabeza, es decir, la cabeza personalizada a partir de un valor de cabeza de jugador o de una base de datos.

#### Si no tienes un plugin para base de datos de cabezas <CustomTag type="version" version="1.13" />

* Si quieres añadir una cabeza personalizada para 1.13++ sin tener una base de datos de un plugin puedes seguir los siguientes pasos:
  * Pon el material del ExecutableItem como PLAYER\_HEAD
  * Visita una página de cabezas personalizadas, como esta [https://minecraft-heads.com/custom-heads](https://minecraft-heads.com/custom-heads)
  *   Luego obtén el Value de la cabeza\

      
  * Ahora copia ese valor y pégalo dentro de la funcionalidad headValue de ExecutableItems
  * Ejemplo:
  * ```yaml
    headValue: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk4ZGY0MmY0NzdmMjEzZmY1ZTlkN2ZhNWE0Y2M0YTY5ZjIwZDljZWYyYjkwYzRhZTRmMjliZDE3Mjg3YjUifX19
    ```

#### If you have the plugin Head Database <CustomTag type="version" version="1.12" />

* If you want to add a custom head for 1.12++ and you have the plugin head databases you can follow the next steps:
  * Open the GUI of your plugin and get the ID of the head you want
  * Then paste it inside the head features on headDBID
  * Example:
  * ```yaml
    headDBID: 44328
    ```
* Aquí tienes los enlaces en caso de que no lo tengas y lo quieras.
  * Versión premium: [Head Database](https://www.spigotmc.org/resources/head-database.14280/)
  * Versión gratis: [Head DB](https://www.spigotmc.org/resources/headdb-head-menu-auto-update-free.84967/)

### whitelistedWorlds

* Info: Lista de Strings de los nombres de los mundos en los que quieres evitar o permitir que los jugadores usen el ExecutableItem.
* Ejemplo:

```yaml
whitelistedWorlds:
- ZombieSurvivalWorld_the_end # This allows the use of the EI in that world
- '!ApocalypseWorld' # Using ! Disables the use of the EI in that world
```

### Store item info

* Info: Valor booleano que representa si almacena o no la información en el propio ítem. Actualmente almacena la funcionalidad de "owner". Así que si quieres usar el placeholder %owner% o las condiciones relacionadas con owner debes tenerlo habilitado.
* Ejemplo:

```yaml
storeItemInfo: false
```

### Owner features

#### canBeUsedOnlyByTheOwner

* Info: Valor booleano que representa si el ítem solo puede ser usado por el owner o no.
  * Esto solo funciona si store item info está activado para que el ítem tenga un owner.
* Ejemplo: 

```yaml
canBeUsedOnlyByTheOwner: false
```

#### cancelEventIfNotOwner

* Info: Valor booleano que representa si el ítem no es usado por el owner, entonces se cancelan todos los eventos. Esto significa que, si el activador es, por ejemplo, PLAYER\_BREAK\_BLOCK, si alguien que no es el owner intenta usar este ítem, no podrá romper ningún bloque porque todos los eventos se cancelarán.
  * Esto solo funciona si store item info está activado para que el ítem tenga un owner.
* Ejemplo: 

```yaml
cancelEventIfNotOwner: false
```

#### onlyOwnerBlackListedActivators

* Info: Lista de ID de activadores de tu ExecutableItem, esta es una lista negra que desactiva las funcionalidades habilitadas de canBeUsedOnlyByTheOwner, es decir, todos los ID de activadores aquí que apunten a un activador del ExecutableItem podrán ser usados por cualquiera aunque canBeUsedOnlyByTheOwner esté en true.
  * Esto solo funciona si store item info está activado para que el ítem tenga un owner.
* Ejemplo: 

```yaml
onlyOwnerBlackListedActivators:
- activator0
- activator1
```

### cancelEventIfNoPermission

* Info: Valor booleano que representa si el jugador no tiene el permiso (ei.item.\<id>) para usar el ítem, entonces se cancelan todos los eventos. Esto significa que, si el activador es, por ejemplo, PLAYER\_BREAK\_BLOCK, si alguien que no tiene el permiso para usar este ítem lo intenta usar, no podrá romper ningún bloque porque todos los eventos se cancelarán.

```yaml
cancelEventIfNoPermission: true
```

### Mantener el ítem al morir

* Info: Valor booleano que representa si el jugador mantendrá el ítem después de la muerte o no.
* Ejemplo: 

```yaml
keepItemOnDeath: true
```

:::info
Es compatible con la funcionalidad keepInventory de WorldGuard y la gamerule keepInventory de Vanilla
:::

### Disable stack <CustomTag type="premium" />

* Info: Valor booleano que representa evitar o no que el ExecutableItem se pueda apilar. Poner esta funcionalidad en true hará que el customStackSize de este ítem sea 1.
* Ejemplo: 

```yaml
disableStack: true
```

### customStackSize <CustomTag type="premium" /> <CustomTag type="version" version="1.20.5" />

* Info: Valor entero para establecer el tamaño de la pila de este ítem. Esto sobrescribirá la cantidad de pila actual.
* Para entenderlo mejor, el diamond\_sword vanilla tiene un tamaño de pila de 1, ya que no se puede apilar, con esta funcionalidad puedes aumentar este valor. Por otro lado, la tierra tiene un tamaño de pila de 64, pero con esto puedes reducirlo, por ejemplo, a un tamaño de pila de 20.
* Ejemplo: 

```yaml
customStackSize: 32
```

### Variables Settings

* Info: Las variables son una forma de almacenar información dentro de tu ExecutableItem. Esto permite registrar cantidades, almacenar posiciones, en realidad, puedes almacenar lo que quieras. Ayudan a crear comportamientos de ítem dinámicos y personalizables, con esto queremos decir que las variables te permiten crear comportamientos únicos para cada ítem almacenando y registrando datos específicos de ese ítem. Por ejemplo, puedes registrar cuántas veces un jugador ha usado un ítem en particular o a cuántos jugadores ha matado con él.
  * `variableName`: Nombre de la variable, se usará como referencia con %var\_\<name>% para usarla en el lore, dentro de comandos, etc. Este nombre no puede ser "id" o "usage" ni tener espacios.
  * `type`: VariableType de la variable, puede ser los siguientes tipos con ejemplos de usos:
    * STRING: Con este tipo de variable puedes almacenar valores STRING, como palabras, números, letras, caracteres, etc. Por ejemplo puedes almacenar el nombre del último jugador golpeado. Este tipo de variable no admite `variableModification(type:MODIFICATION)` aumentar o disminuir el valor. Es estático a menos que se reemplace con un `variableModification(type:SET)` que sobrescribirá el valor anterior.
    * NUMBER: Con este tipo de variable puedes almacenar valores FLOAT, como números. Por ejemplo, si quieres almacenar la cantidad de bloques rotos, la cantidad de kills, registrar los segundos antes de que algo suceda, etc. Este tipo de variable admite `variableModification(type:MODIFICATION)` y `variableModification(type:SET)`.
    * LIST: Esta variable es una variable de tipo lista que almacena valores STRING. Es útil para almacenar una lista de cosas, por ejemplo, llevar registro de los bloques clicados y añadirlos a esta lista, o añadir los jugadores matados aquí, etc.
  * `isRefreshableClean`: Valor booleano que activa el refresh clean. Esto permite añadir líneas de lore personalizadas sin que se eliminen cuando se actualiza la variable. Se recomienda tenerlo en true.
  * `refreshTagDoNotEdit`: Autogenerado por el plugin. Ayuda a que las funciones de `isRefreshableClean` funcionen correctamente. Así que no lo toques.
  * `papiParser`: El valor de tipo string que contiene el string de PlaceholderAPI donde está el valor de la variable para parsearlo. Su propósito es permitirte insertar valores de variables dentro de placeholders de PlaceholderAPI y mostrar los resultados en el lore. 
    * Ej:
      * Variable ID: `level`
      * Valor de string papiParser: `%math_<VAR>*<VAR>%`
        * El string `<VAR>` representa el valor actual de la variable al parsearse. Si quieres colocar el valor en varias partes del string del placeholder de PlaceholderAPI, simplemente escribe `<VAR>` en los lugares donde lo necesites.
      * String de placeholder para poner en el lore: `%var_level_papi%`
* Ejemplo
  * ```yaml
    variables:
      var2:
        variableName: ThisVariableIsTypeIntegerAndICanDoModifications
        type: NUMBER
        default: 10.0
      var1:
        variableName: anotherVariable # Esta variable es de tipo string
        type: STRING
        default: '' #Empieza sin valor, luego podemos cambiarlo desde un activador o usando comandos
      var0:
        variableName: nameOfVariable
        type: LIST
        default:
        - value1
        - value2
        - '1'
        - '2'
    ```
* Puedes consultar más información en la siguiente página sobre otros tipos de variables:
  * [SCore variables](/tools-for-all-plugins-score/score-variables)

### Custom give first join features

* Info: Aquí puedes personalizar la funcionalidad de dar el ítem cuando el jugador se une al servidor por primera vez.
  * giveFirstJoin: Valor booleano que representa si la funcionalidad está habilitada o no
  * giveFirstJoinAmount: Valor entero que representa cuántos ítems se darán al jugador de este ExecutableItem.
  * giveFirstJoinSlot: Slot donde se le dará el ExecutableItem al jugador.
* Ejemplo:

```yaml
giveFirstJoinFeatures:
  giveFirstJoin: false
  giveFirstJoinAmount: 1
  giveFirstJoinSlot: 0
```

### Item Recognition feature <CustomTag type="premium" />

* Info: Esta funcionalidad permite hacer que otros ítems que no son el ExecutableItem se comporten como si fueran el ExecutableItem que estás editando. Básicamente la idea es trabajar con reconocimientos, es una lista de tipos de reconocimientos que, si uno de ellos coincide entre tu ExecutableItem y otro ítem (incluso si no es un ExecutableItem), las funcionalidades que tiene el ExecutableItem estarán también en ese otro ítem. Esto funciona siempre y cuando se reconozca siguiendo los requisitos de los reconocimientos.
  * Opciones de reconocimiento disponibles:
    * NAME: Esto habilita el reconocimiento para todos los ítems que coincidan con el nombre personalizado del ExecutableItem
    * MATERIAL: Esto habilita el reconocimiento para todos los ítems que coincidan con el material del ExecutableItem
    * LORE: Esto habilita el reconocimiento para todos los ítems que coincidan con el lore del ExecutableItem
* Por ejemplo, si creas un ExecutableItem de pico de diamante, que tiene un activador PLAYER\_RIGHT\_CLICK y en comandos "SEND\_MESSAGE I am a pickaxe", cada vez que hagas clic derecho enviará ese mensaje al chat de Minecraft. Ahora, si habilitas item recognition, digamos, para el material, ahora TODOS los picos de diamante del servidor activarán ese activador y por lo tanto se mostrará el mensaje.
* Ejemplo: 

```yaml
recognitions:
- NAME
- MATERIAL  
- LORE 
```

* Ejemplos de escenarios:
  * Si un ítem EI solo tiene el item recognition de `MATERIAL` y es un DIAMOND, todos los diamantes que existan en el servidor se comportarán como ese ítem EI
  * Si un ítem EI solo tiene el item recognition de `NAME` y se llama "\&dAngle", si intentas usar cualquier ítem con el nombre "\&dAngle", se comportará como el ítem EI original. PERO si el nombre fuera "\&eAngle" u otro nombre, no funcionará.
  * Si un ítem EI solo tiene el item recognition de `LORE`, un ítem solo se comportará como el EI si tiene EXACTAMENTE los mismos códigos de color en las líneas de lore y cada detalle de mayúsculas y minúsculas de letras y caracteres.
  * Si un ítem EI solo tiene el item recognition de `MATERIAL` y `NAME`, los ítems deben tener el NOMBRE y MATERIAL EXACTOS del ítem EI para que el ítem se considere un ítem EI.
* Ten en cuenta que si uno de tus ExecutableItems tiene item recognitions habilitados en MATERIAL, entonces no deberías usar más item recognitions basados en MATERIAL para otro ExecutableItem con el mismo MATERIAL. La razón es que si hay 2 ítems ExecutableItems con el reconocimiento de MATERIAL habilitado y ambos son DIAMOND\_BLOCK, solo el primero en orden alfabético será el que tenga más prioridad en caso de que alguien active un DIAMOND\_BLOCK.

## Use cooldown features <CustomTag type="version" version="1.21.2" />

* Info: Funcionalidad que añade un cooldown de uso estilo vanilla al ítem, similar al cooldown de las ender pearls o la fruta de chorus.
  * `cooldownGroup`: Valor de tipo string que define un grupo de cooldown. Los ítems con el mismo grupo de cooldown compartirán el mismo cooldown. Debe estar en minúsculas y seguir el formato NamespacedKey (por ejemplo, "mygroup" o "namespace:mygroup")
  * `vanillaUseCooldown`: Valor entero que representa la duración del cooldown en segundos
* Ejemplo:

```yaml
useCooldown:
  cooldownGroup: "custom_weapon_group"
  vanillaUseCooldown: 5
```

:::info
Este cooldown es diferente del sistema de cooldown de activador. Este es un cooldown vanilla de Minecraft que muestra el ítem "en gris" en la hotbar durante el periodo de cooldown.
:::


## Dependiendo del tipo de ítem

### Container Features

* Info: Aquí puedes personalizar las funcionalidades de contenedor si el bloque es una instancia de contenedor como el cofre y el barril.
  * `isLocked`: Valor booleano que representa si el contenedor está bloqueado o no
  * `lockedName`: Valor de tipo string que representa el nombre clave si el contenedor está bloqueado. Es una funcionalidad de Minecraft, si tienes un ítem con el mismo nombre que lockedName entonces podrás abrir el cofre, de lo contrario no.
  * `containerContent`: Lista de materiales dentro del contenedor cuando se coloca usando el formato de slot:\<slot>;\<material>
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

* Info: Valor flotante para establecer la velocidad de minado por defecto del ExecutableItem.
* Ejemplo:

```yaml
toolRules:
  enable: true
  defaultMiningSpeed: 1.0
```

#### Damage per block break

* Info: Valor entero para establecer el valor de durabilidad que se restará después de que el ExecutableItem rompa un bloque. 
* Ejemplo:

```yaml
toolRules:
  enable: false
  damagePerBlock: 1
```

#### Specific tool rules

* Info: Puedes seleccionar la velocidad de minado, si se puede soltar para ciertos bloques con el ExecutableItem, en orden de personalización de herramienta.
  * `miningSpeed`: Valor flotante para establecer la velocidad de minado del ExecutableItem para los bloques seleccionados en la tool rule.
  * `correctForDrops`: Valor booleano que representa si el bloque se soltará o no usando el ExecutableItem.
  * `blocks`: Lista de BLOCKS a los que aplicar las tool rules.
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

* Info: Funcionalidad que permite tener proyectiles ya cargados cuando el ExecutableItem es un ítem de ballesta y se le da al jugador.
  * El formato del material debe ser como `minecraft:<id>`. Por ahora admite ítems vanilla.
* Ejemplo:

```yaml
material: CROSSBOW
chargedProjectiles:
- minecraft:arrow
```

### bundleContent

* Info: Funcionalidad que permite tener ítems de contenido ya puestos si el ExecutableItem es un ítem de bundle y se le da al jugador.
  * El formato del material debe ser como `minecraft:<id>`. Por ahora admite ítems vanilla.
* Ejemplo:

```yaml
material: BUNDLE
bundleContent:
- minecraft:stone
- minecraft:dirt
```

### Firework features

* Info: Funcionalidad que permite tener funcionalidades de fuegos artificiales personalizadas si el ExecutableItem es un ítem de fuegos artificiales.
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

### Spawner features <CustomTag type="version" version="1.20.5" />

* Info: Funcionalidad que permite crear spawners personalizados con ExecutableItems
* Ajustes:
  * `spawnCount`: Define cuántas entidades aparecen en cada spawn
  * `spawnDelay`: Define el retraso del primer spawn después de colocar el spawner (en ticks, 20 ticks = 1 segundo)
  * `spawnRange`: El rango de spawn
  * `requiredPlayerRange`: Define a qué distancia máxima debe estar el jugador para activar el spawner
  * `minSpawnDelay`: El retraso mínimo entre cada spawn (en ticks, 20 ticks = 1 segundo)
  * `minSpawnDelay`: El retraso máximo entre cada spawn (en ticks, 20 ticks = 1 segundo)
  * `maxNearbyEntities`: Máximo de entidades alrededor del spawner
  * `addSpawnerNbtToItem`: Si añade o no la etiqueta de componentes del spawner en el ítem (Es mejor dejarlo en false) Cuando está en false el plugin solo añadirá las etiquetas cuando se coloque el spawner.
  * `potentialSpawns`: Define los potentialSpawns de tu spawner con peso (weight)

:::tip
Es mejor crear tu spawner primero en [MCStaker](https://mcstacker.net/?cmd=give), luego dártelo dentro del juego y finalmente tenerlo en la mano + hacer /ei create.\
Importará automáticamente las funcionalidades del spawner a tu ExecutableItems.
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

### Instrument features <CustomTag type="version" version="1.20.5" />

* Info: Funcionalidad que te permite personalizar el sonido del cuerno de cabra para los ítems. Esta funcionalidad solo funciona para ítems de material GOAT_HORN.
  * `enable`: Valor booleano que activa o desactiva las funcionalidades de instrument
  * `instrument`: El sonido de instrumento musical que se reproducirá cuando se use el cuerno de cabra. [Music Instruments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/MusicInstrument.html)
* Ejemplo:

```yaml
material: GOAT_HORN
instrumentFeatures:
  enable: true
  instrument: DREAM_GOAT_HORN
```

### Weapon features <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidad que te permite configurar ajustes de combate específicos de arma para los ítems.
  * `enable`: Valor booleano que activa o desactiva las funcionalidades de weapon
  * `disableBlockingTime`: Valor entero que representa cuánto tiempo (en segundos) estará desactivado el escudo del objetivo después de recibir un golpe de esta arma
  * `damagePerAttack`: Valor entero que representa el daño de durabilidad que sufre esta arma por cada ataque (por defecto: 5)
* Ejemplo:

```yaml
weaponFeatures:
  enable: true
  disableBlockingTime: 3
  damagePerAttack: 2
```


### Blocks attacks features <CustomTag type="version" version="1.21.5" /> <CustomTag type="paper" />

* Info: Funcionalidad que te permite configurar cómo los ítems bloquean ataques, similar a los escudos. Esto te permite hacer que cualquier ítem sea capaz de bloquear daño.
  * `enable`: Valor booleano que activa o desactiva las funcionalidades de block attacks
  * `blockDelay`: Valor entero que representa el retraso en segundos antes de que el ítem pueda volver a bloquear después de usarse
  * `blockSound`: Sonido que se reproduce al bloquear un ataque con éxito
  * `disableSound`: Sonido que se reproduce cuando el bloqueo se desactiva (al ser superado)
  * `disableCooldownScale`: Valor double (multiplicador) de cuánto dura la desactivación del bloqueo después de ser superado (por defecto: 1.0)
  * `damageReductions`: Lista de configuraciones de reducción de daño que definen cuánto daño se reduce por tipo de daño
  * `bypassedBy`: Tipo de daño que ignora completamente este bloqueo
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

#### Configuración de reducción de daño

Cada entrada de reducción de daño tiene los siguientes ajustes:
* `baseDamageBlocked`: Cantidad base de daño bloqueado (reducción fija)
* `factorDamageBlocked`: Porcentaje de daño bloqueado (0.5 = 50% de reducción)
* `horizontalBlockingAngle`: El ángulo en grados desde el cual se pueden bloquear ataques (90 = cuarto frontal, 180 = mitad frontal, 360 = todas las direcciones). Debe ser mayor que 0.
* `damageTypes`: Lista de tipos de daño a los que se aplica esta reducción. Consulta [Damage Types](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html) para ver los tipos disponibles.

:::tip
Puedes crear "escudos" personalizados con diferentes materiales usando esta funcionalidad. Por ejemplo, ¡podrías hacer un libro que bloquee daño mágico o un diamante que bloquee ataques físicos!
:::
