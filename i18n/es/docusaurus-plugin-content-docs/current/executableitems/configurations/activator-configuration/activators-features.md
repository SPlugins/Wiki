---
description: >-
  Explica las opciones de los activators de ExecutableItems para crear ítems
  personalizados simples o complejos en SPlugins.
source_hash: c1b2157347497341
translated_at: '2026-10-03T10:23:00.888Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import TargetItemFeatures from '@site/docs/_partials/target-item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import InputFeatures from '@site/docs/_partials/input-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Funciones de los activators

Todas estas funciones están dentro del activator, como recordatorio, los activators te permiten ejecutar acciones personalizadas en tu ExecutableItem, pueden tener condiciones, ejecutar comandos, tener cooldown, etc.

Las funciones premium están etiquetadas con la etiqueta: <CustomTag type="premium" />

## Funciones generales de un activator

<GeneralActivatorsFeatures />

## Funciones para activators de EI

### Detailed slots

* Info: Lista de valores enteros que representan los slots del inventario donde el activator podrá funcionar. Esto significa que si el evento ocurre en un slot que no está aquí, entonces el activator no se activará.

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: Esta función del activator hace que el ítem se actualice en una de las funciones de la lista. ¡Ten cuidado! Esto puede no ser necesario dependiendo de lo que quieras. Hay cosas que se actualizan automáticamente, por ejemplo, los comandos del activator, las condiciones, el cooldown, etc. se actualizan automáticamente sin necesidad de esta función.
* Esta función afecta principalmente a los aspectos visuales del ítem, así que si creaste una vez un ExecutableItem con id\:ex\_sword con un display name de "\&dExcalibur" y distribuiste este ítem a todos los jugadores, y ahora quisieras que todos los ExecutableItems "ex\_sword" tuvieran el nuevo display name "\&eEpic Sword", entonces necesitarías activar esta función en uno de los activators del ítem. Activando la función (autoUpdateItem) + la función de actualización de nombre (updateName).
* Para que quede correctamente explicado, esta función sobrescribirá el valor actual dependiendo de las opciones que hayas activado con la opción actual del archivo de configuración, y solo se usa para funciones visuales. No es necesario para cambios comunes que no involucren las opciones de esta función.
  * `autoUpdateItem`: Valor booleano que representa si esta función está activada o no para el activator.
  * `updateName`: Valor booleano para actualizar el display name del ExecutableItem. Si es true, sobrescribirá el display name actual del ítem con el nombre de ítem actual/actualizado establecido en el archivo de configuración del ExecutableItem.
  * `updateLore`: Valor booleano para actualizar el lore del ExecutableItem. Si es true, sobrescribirá el lore actual del ítem con el lore actual/actualizado establecido en el archivo de configuración del ExecutableItem.
  * `updateDurability`: Valor booleano para actualizar la durabilidad actual del ExecutableItem. Si es true, sobrescribirá la durabilidad actual del ítem con la durabilidad actual/actualizada establecida en el archivo de configuración del ExecutableItem.
  * `updateAttributes`: Valor booleano para actualizar todos los atributos del ExecutableItem. Si es true, sobrescribirá los atributos actuales del ítem con los atributos actuales/actualizados establecidos en el archivo de configuración del ExecutableItem.
  * `updateEnchants`: Valor booleano para actualizar los encantamientos del ExecutableItem. Si es true, sobrescribirá los encantamientos actuales del ítem con los encantamientos actuales/actualizados establecidos en el archivo de configuración del ExecutableItem.
  * `updateCustomModelData`: Valor booleano para actualizar el valor de CustomModelData del ExecutableItem. Si es true, sobrescribirá el CustomModelData actual del ítem con el valor de customModelData actual/actualizado establecido en el archivo de configuración del ExecutableItem.
  * `updateArmorSettings`: Valor booleano para actualizar la configuración de armadura del ExecutableItem. Si es true, sobrescribirá la configuración de armadura actual del ítem con la configuración de armadura actual/actualizada establecida en el archivo de configuración del ExecutableItem. p. ej. (Color de la armadura)
  * `updateMaterial`: Valor booleano para actualizar el material del ExecutableItem. Si es true, sobrescribirá el material actual del ítem con el material actual/actualizado establecido en el archivo de configuración del ExecutableItem.
  * `updateHiders`: Valor booleano para actualizar la configuración de Hiders del ExecutableItem. Si es true, sobrescribirá la configuración de hiders actual con la configuración de hiders actual/actualizada establecida en el archivo de configuración del ExecutableItem.
  * `updateEquippable`: Valor booleano para actualizar la configuración de Hiders del ExecutableItem. Si es true, sobrescribirá el componente equippable actual del ítem con la configuración equippable actual/actualizada establecida en el archivo de configuración del ExecutableItem.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

<PlayerFeatures />

### worldConditions

* Info: Puedes usar estas condiciones en todos los tipos de activators
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: Puedes usar estas condiciones en todos los tipos de activators
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: Puedes usar estas condiciones en todos los tipos de activators
* [Item conditions](/tools-for-all-plugins-score/custom-conditions/item-conditions.md)


### otherEICooldowns

* Info: Esta función permite aplicar cooldown de jugador a ExecutableItems específicos y, opcionalmente, a activators específicos.
  * `executableItem`: ID del ExecutableItem al que quieres aplicar el cooldown.
  * `activators`: Lista de cadenas que son los ID de los activators que quieres afectar para el ExecutableItem especificado con el cooldown. Si no se selecciona ninguno, entonces el cooldown se aplicará a todos los activators del ExecutableItem especificado.
  * `cooldown`: Valor entero que será la cantidad de tiempo de cooldown que se aplicará.
  * `isCooldownInTicks`: Valor booleano que representa si el valor de cooldown estará en segundos o en ticks. (20 ticks = 1 segundo)
* Consejos:
  * Puedes especificar el propio ExecutableItem que ejecuta esta función. Por ejemplo, si quieres que desde un activator se aplique cooldown a otro activator del mismo ítem.
  * Otra idea puede ser aplicar cooldown a todos los ítems relacionados con daño si usas uno de ellos.
  * Otro ejemplo sería usar esta función para permitir que el jugador elija uno de varios ExecutableItems distintos: cuando elige uno y lo activa, no podrá usar ni el elegido (porque está en cooldown) ni los demás (porque también están en cooldown).
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```


## Funciones exclusivas según el tipo de activator

Para que las funciones sean más fáciles de entender en cuanto a dónde funcionan los activators, crearemos 4 tipos de categorías para agrupar activators, así, si una de las funciones menciona una de estas categorías, sabrás que la función funciona para todos los activators de esa categoría.

* <CustomTag type="player_block" />: Describe activators que involucran al jugador que activó el ExecutableItem y un bloque involucrado en el activator. Abreviatura \[P\_B]
  * PLAYER\_ALL\_CLICK (con la función typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (con la función typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (con la función typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Etc, más información en [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: Describe activators que involucran al jugador que activó el ExecutableItem y una entidad involucrada en el activator. Abreviatura \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (La entidad es el proyectil que está siendo lanzado) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Etc, más información en [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: Describe activators que involucran al jugador que activó el ExecutableItem y a otro jugador, denominado "target" (objetivo), que es tratado como el objetivo o enemigo. Abreviatura \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Etc, más información en [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> Si hay una función que contiene diferentes activators de varias categorías, entonces es mejor para su comprensión crear una nueva lista temporal, que se mencionará en la función. Abreviatura \[S\_A]

## Para \[P\_B] <CustomTag type="player_block" />

<BlockFeatures />

## Para \[P\_E] <CustomTag type="player_entity" />

<EntityFeatures />

## Para \[P\_T] <CustomTag type="player_target" />

<TargetPlayerFeatures />

## Para \[S\_A] <CustomTag type="specific_activators" />

<TargetItemFeatures />
* Para:
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * EI_CLICK_ON_ANOTHER_INVENTORY_ITEM
  * EI_CLICKED_BY_ANOTHER_INVENTORY_ITEM


### mustBeAProjectileLaunchWithTheSameEI

* Tipo de categoría de activator: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Función para el activator relacionada con proyectiles, afecta si el activator debe ejecutarse con proyectiles no lanzados por el mismo EI.
  * Ejemplo, hay un activator PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] y en playerCommands: \["say hi"]
    * Si la función está activada, entonces solo funcionará si este ExecutableItem tiene otro activator que tenga el comando LAUNCH, así, el proyectil se lanzará desde el EI y entonces se cumplirá la condición
    * Si la función está desactivada, todos los proyectiles, como: el arco vanilla, la bola de nieve vanilla, proyectiles de otros ExecutableItems, y el proyectil del propio ExecutableItem activarán el activator.
* Importante: Cuando `mustBeAProjectileLaunchWithTheSameEI` está en `true`, el plugin no puede garantizar con un 100% de certeza qué slot específico del inventario contenía el ítem en el momento del lanzamiento. Activa la primera copia coincidente del EI encontrada en el inventario del jugador. Por esta razón, **configura siempre el `detailedSlots` del activator para que incluya todos los slots**, no lo restrinjas solo a la mano principal. Si el activator está limitado a la mano principal, puede que no se active si el ítem coincidente se evalúa primero desde otro slot.
  * Ejemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
    detailedSlots: [] # Empty list = all slots (-1 through 40)
```

<DamageCauseFeatures />
* Para:
  * PLAYER_BLOCK_HIT_OF_ENTITY
  * PLAYER_BLOCK_HIT_OF_PLAYER
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* Para:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* Para:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* Para:
  * PLAYER_BLOCK_BREAK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* Para
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* Para:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER
  * INVENTORY_CLICK

<DelayFeatures />
* Para:
  * LOOP

<InputFeatures />
* Para:
  * PLAYER_INPUT
