---
description: >-
  Lista no exhaustiva de plugins compatibles que puedes combinar con
  ExecutableItems, ExecutableBlocks y otros plugins de Ssomar.
source_hash: 4012882ccbdb916c
translated_at: '2026-10-03T10:30:49.455Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✔️ Plugins compatibles

:::info
Ten en cuenta que esta lista es estrictamente de plugins compatibles relacionados, prácticamente cualquier plugin es compatible con los plugins de Ssomar, si quieres ejecutar un comando de otro plugin, simplemente reemplaza el nombre del objetivo por los placeholders. \

Por ejemplo:
```yaml
- essentials:fly %player% # For essentials fly
- vanish %player% # For vanish
- economy give %player% 100 # To give money
#...
```
Etcétera, **cualquier comando que admita el nombre de un jugador es "compatible" con nuestros plugins.**
:::

Esta sección es para los plugins compatibles que funcionan con los plugins de Ssomar, hay algunas funciones que tenemos que son compatibles con otros plugins.

* Antes de empezar debes saber que compatible ≠ usable, casi todos los plugins son usables para los plugins de Ssomar, esto se debe a que todos los comandos se ejecutan por la consola.

### MythicMobs

#### Puedes hacer que tus mobs de MythicMobs suelten ítems de los plugins de Ssomar de estas formas:

*   ExecutableItems:

    1. Sostén el ExecutableItem y haz `/mm i import`, esto hará que el ítem se importe al archivo items.yml de MythicMobs, desde ahí, puedes añadirlo a la LootTable de MythicMobs.
    2. Ejecutando una skill \~onDeath desde el mob, lanzando una command skill añadiendo la siguiente línea:

    ```yaml
    Skills:
    - command{c="ei drop <item> 1 <caster.l.w> <caster.l.x> <caster.l.y> <caster.l.z>"} @self ~onDeath
    ```
* ExecutableBlocks:
  * La misma idea pero en lugar de usar ExecutableItem usa el ExecutableBlock, y en el comando de la skill usa "eb" en lugar de "ei".

#### Puedes especificar que los activadores de SsomarPlugins solo funcionen con MythicMobs específicos usando la función [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities).

* Ejemplo: Crear un ExecutableItem que hace más daño a una lista de MythicMobs
* Ejemplo: Crear un ExecutableBlock que daña a un MythicMob específico cuando camina encima del bloque
* Ejemplo: Crear un ExecutableEvent que solo funciona para una lista de MythicMobs.

#### Puedes invocar mobs de MM usando este comando dentro de tu activador:

* Dependiendo del activador que estés usando puede que necesites cambiar los placeholders.
  * Ejemplo: En lugar de %world% puede que sea necesario usar %player\_world%, %target\_world% o %block\_world%

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    playerCommands:
    - mm m spawn {mob_id} 1 %world%,%x%,%y%,%z%
```

* ⭐Puedes usar esta idea con ExecutableBlocks y el activador LOOP para crear un spawner personalizado de MythicMobs.

#### Ejecutar una skill de MythicMobs desde las funciones de los plugins de Ssomar

* Puedes usar en la sección de comandos `SUDOOP mm test cast <skill>` para ejecutar una skill de MythicMobs.

#### Comandos personalizados de SCore

* [CHANGETOMYTHICMOB](/tools-for-all-plugins-score/custom-commands/entity-commands#changetomythicmob)
  * ⭐Es posible crear un sistema de pesca usando MythicMobs como el que hay en el servidor de Minecraft Hypixel. Por ejemplo, teniendo una lista de niveles de distintas cañas de pescar (todas gestionadas por ExecutableItems), donde cada nivel tendrá desde baja probabilidad hasta mayor probabilidad de capturar mobs más épicos de tus lagos, añadiendo restricciones para pescar solo mobs de MM en los lagos en las coordenadas "x" (o una región de WorldGuard), etc.

### **LevelledMobs**

* ExecutableItems
  * Puedes hacer que tus LevelledMobs suelten ExecutableItems usando este recurso:
    * [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/)

### AuraSkills (antes AureliumSkills)

* Los plugins de Ssomar tienen la función de activador [requiredMana](/executableitems/configurations/activator-configuration/activators-features#requiredmana) para poder usarla como requisito para que el activador funcione.
* Comandos de Aurelium Skills
  * También puedes usar comandos de AureliumSkills en tu plugin, como dar mana al jugador, dar mana a los jugadores alrededor (como un supporter), etc.
* ExecutableItems
  * NBT de Aurelium Skills
    * Puedes crear un ExecutableItem que mientras lo sostienes aumenta tu mana máximo, esto se puede hacer creando un ítem, ejecutando el comando `/sk modifier` y luego, mientras sostienes el ítem, ejecutando `/ei create <id>`; ahora el ExecutableItem tiene el NBTTag del comando y por lo tanto tiene las modificaciones que hiciste.

### ExecutableBlocks y ExecutableItems

* Estos dos plugins (ExecutableBlocks y ExecutableItems) pueden vincularse entre sí. Este vínculo se hace mediante la función [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) de EB. Por ejemplo:
  * Colocar el ExecutableItem y que se convierta en el ExecutableBlock vinculado a él (por defecto perdería los datos del ExecutableItem y se colocaría como un bloque vanilla)
  * Romper un ExecutableBlock y obtener el ExecutableItem vinculado a él.
  * Mantener el mismo uso que tenía el ExecutableBlock colocado cuando se rompe y se convierte en el ExecutableItem vinculado, y viceversa.
  * Mantener los mismos valores de variable que tenía el ExecutableBlock colocado cuando se rompe y se convierte en el ExecutableItem vinculado, y viceversa.

### ItemsAdder

* ExecutableItems
  * Puedes usar las texturas creadas con ItemsAdder utilizando la función [customModelData](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) o usando [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).
  *   Puedes vincular el ítem de ItemsAdder a EI siguiendo su wiki sobre cómo vincularlo, añadiendo la siguiente línea de código al archivo del ítem de ItemsAdder.

      ```yaml
      executableitem:
        id: ZEUSCROWN
      ```
* ExecutableBlocks
  * Puedes crear un ExecutableBlock con la textura de un bloque de ItemsAdder, esto se hace seleccionando la función [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) de ExecutableBlocks.
* Es posible seleccionar como [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) para los activadores relacionados con un bloque de todos los plugins, bloques específicos de ItemsAdder
  *   Ejemplo:

      ```yaml
      activators:  
        activator0: # Activator ID, you can create as many activator on the activators list    
          option: PLAYER_BLOCK_BREAK
          detailedBlocks:
          - ITEMSADDER:turquoise_block
      ```

### Nexo

* ExecutableItems
  * Puedes usar las texturas de Nexo dentro de tu ExecutableItem simplemente usando el valor de [Custom model data](/executableitems/configurations/item-configuration/item-features#custom-model-data-1.14) o el [item\_model](/executableitems/configurations/item-configuration/item-features#itemmodel).

### PlaceholderAPI

* Uno de los pilares principales a la hora de crear ítems, puedes usar cualquier placeholder de PlaceholderAPI en cualquier parte de nuestros plugins:
  * Lore
  * Sección de comandos
  * Mensajes (todo tipo de mensajes, mensaje de cooldown, mensaje de condición no cumplida, mensaje de requisitos necesarios, etc)
  * Variables
  * etc.

### ShopGui+

* Este plugin soporta vender ítems con NBT Tags específicos en la tienda, por lo tanto, soporta ExecutableItems y ExecutableBlocks para ser vendidos.
* El comando de bloque [SELL\_CONTENT](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) es compatible con este plugin.

### ShopKeepers

* Este plugin soporta vender ítems con NBT Tags específicos en la tienda, por lo tanto, soporta ExecutableItems y ExecutableBlocks para ser vendidos.

### Tradesplus

* Este plugin soporta vender ítems con NBT Tags específicos en la tienda, por lo tanto, soporta ExecutableItems y ExecutableBlocks para ser vendidos.

### WorldGuard

* Para todos los plugins tienes la condición para hacer que el activador funcione solo si el jugador está dentro o fuera de una región, se llama [ifInRegion](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinregion-not) y es compatible con este plugin.
* Todos los comandos de SCore están condicionados por la protección de WorldGuard
  * Esto significa que un BREAK (comando de SCore) no se ejecutará si el jugador no tiene permiso para romper un bloque en la posición seleccionada.
  * Ten en cuenta que esta función está en los comandos de SCore, no en los comandos ejecutados por nuestros plugins, esto significa que usar un comando vanilla dentro de uno de nuestros plugins "execute at %player% run setblock %block\_x% %block\_y% %block\_z% air replace" saltará cualquier restricción.
* ExecutableBlocks
  * Puedes rellenar una región con ExecutableBlock(s) específicos con pesos detallados usando [/eb wg-fill-region](/executableblocks/commands-and-permissions#fill-a-worldguard-region-with-an-eb).
    * Con esta función, por ejemplo, podrías crear un loop global que reinicie una mina específica, como las típicas /warp mines dentro de los servidores de Minecraft.

### HeadDB

* ExecutableItems
  * Puedes usar este plugin para seleccionar una cabeza de jugador específica para el ítem del ExecutableItem usando [head settings](/executableitems/configurations/item-configuration/item-features#head-settings).
* ExecutableBlocks
  * Puedes usar este plugin para seleccionar una cabeza de jugador específica para el bloque del ExecutableBlock vinculando un ExecutableItem con [head settings](/executableitems/configurations/item-configuration/item-features#head-settings) y usando el [TYPE\_OF\_CREATION](/executableblocks/configurations/block-configuration/block-features#creationtype) especificado a partir del ExecutableItem.

### IridiumSkyblock

* Para todos los plugins tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su isla, se llama [ifPlayerMustBeOnHisIsland](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) y es compatible con este plugin.

### SuperiorSkyblock

* Para todos los plugins tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su isla, se llama [ifPlayerMustBeOnHisIsland](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisisland) y es compatible con este plugin.

### GriefPrevention

* Para todos los plugins tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su claim, se llama [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) y también está [ifPlayerMustBeOnHisClaimOrWilderness](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), ambas compatibles con este plugin.

### Lands

* Para todos los plugins tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su claim, se llama [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) y también está [ifPlayerMustBeOnHisClaimOrWilderness](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaimorwilderness), ambas compatibles con este plugin.
* ExecutableItems
  * Hay algunos activadores específicos para este plugin, estos son:
    * PLAYER\_ENTER\_IN\_THEIR\_LAND
    * PLAYER\_LEAVE\_THEIR\_LAND

### GriefDefender

* Para todos los plugins, tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su claim. Esta condición se llama [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) y es compatible con este plugin.

### Residence

* Para todos los plugins, tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su claim. Esta condición se llama [ifPlayerMustBeOnHisClaim](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisclaim) y es compatible con este plugin.

### PlotSquared

* Para todos los plugins, tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su plot. Esta condición se llama [ifPlayerMustBeOnHisPlot](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhisplot) y es compatible con este plugin.

### Towny

* Para todos los plugins, tienes la condición para hacer que el activador funcione solo si el jugador está dentro de su town. Esta condición se llama [ifPlayerMustBeOnHisTown](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifplayermustbeonhistown) y es compatible con este plugin.

### Advanced Enchantments

* ExecutableItems
  * Debido a la forma en que funciona el plugin Advanced Enchantments, sus encantamientos no están presentes en la lista de encantamientos. Por lo que no se pueden añadir con la función de encantamientos:![](https://media.ssomar.com/m/docs-img-image-256.png)
  * Pero es posible añadir sus encantamientos en tus ExecutableItems usando el plugin NBTAPI y siguiendo una de estas formas:
    * La primera forma es creando un ítem vanilla, luego añadiéndole el AdvancedEnchantment y después, mientras lo sostienes, ejecutando /ei create \<id>, el ExecutableItem resultante tendrá automáticamente los Advanced enchantments importados.
    *   La segunda forma es añadiendo el NBT Tag manualmente en el archivo de configuración de ExecutableItems. Aquí tienes un ejemplo:

        ```yaml
        nbt:
          '0':
            key: ae_enchantment;haste # This add the haste AdvancedEnchantment NBT tag
            type: INT
            value: 1
        ```
  * Después de todos estos pasos debes añadir manualmente el encantamiento en el lore para que los jugadores sepan que este ítem tiene ese encantamiento.

### RoseLoots

* Todos los comandos de bloque relacionados (por ejemplo [MINEINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#mineincube), [FARMINCUBE](/tools-for-all-plugins-score/custom-commands/block-commands#farmincube), [BREAK](/tools-for-all-plugins-score/custom-commands/block-commands#break), etc) soportan los loots de bloques personalizados de este plugin.

### MMOInventory

* ExecutableItems
  * Los activadores relacionados con entrar y salir del inventario (por ejemplo EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY y EI\_LEAVE\_THE\_PLAYER\_INVENTORY) se activan mediante sus métodos.

### EnchantsSquared

* ExecutableItems
  * Este plugin soporta los encantamientos de EnchantsSquared.

### ExcellentEnchants

* ExecutableItems
  * Este plugin soporta los encantamientos de ExcellentEnchants

### MMOCore

* La función requiredMana para los activadores puede usar mana de MMOCore, permitiéndote establecer requisitos de mana para que los activadores funcionen.

### TAB

* El comando personalizado SETGLOW es compatible con TAB. Debes usar el placeholder %score\_cmd-glow%

### BlocksToCommand

* Plugin que te permite importar estructuras que se pueden colocar con los plugins de Ssomar.

### Terra

* Los biomas personalizados de Terra son compatibles con las condiciones de bioma usando la condición [ifInBiome](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions#ifinbiome-not). Esto te permite crear activadores, efectos o restricciones específicos según el bioma en el que esté el jugador.

### EcoSkills

* Puedes usar condiciones de placeholders para comprobar si un jugador tiene valores de magia específicos antes de permitir que se active un activador.
* Puedes usar comandos para obtener o quitar valores de magia.
* ExecutableItems
  * La función [RequiredMagic](/executableitems/configurations/activator-configuration/activators-features#requiredmagic-ecoskills) en lugar de usar condiciones de placeholders y comandos para quitar magia.

### FACTIONS UUID

* Los comandos de SCore colocan y quitan bloques de forma segura respetando las protecciones de FactionsUUID del jugador.

### CMI

* El comando [SELL\_CONTENT](/tools-for-all-plugins-score/custom-commands/block-commands#sell_content) soporta los precios de CMI, permitiendo una integración perfecta con el sistema de economía de CMI para vender ítems al valor correcto dentro del juego.

### JOBS REBORN

* El comando JOBS\_MONEY\_BOOST funciona con este plugin.

### VAULT

* ExecutableItems
  * La función [requiredMoney](/executableitems/configurations/activator-configuration/activators-features#requiredmoney) funciona con Vault, permitiéndote establecer un requisito de dinero para que los activadores se activen.

### Citizen NPC

* ExecutableItems
  * Los siguientes activadores funcionan con Citizen NPC(s)
    * PLAYER\_CLICK\_ON\_ENTITY
    * PLAYER\_FISH\_ENTITY
    * PLAYER\_KILL\_ENTIT

### NBT API

* #### itemCheckWithNBTAPI

### Wild Stacker

* Los comandos SILK\_SPAWNER funcionan con los spawners de WildStacker.
