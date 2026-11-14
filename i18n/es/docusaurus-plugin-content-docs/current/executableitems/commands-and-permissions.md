---
description: >-
  Aprende todos los comandos y permisos del plugin ExecutableItems: crear, dar,
  recargar, modificar y buscar ítems personalizados en tu servidor.
source_hash: 30fd8157fcb56ff1
translated_at: '2026-11-13T18:13:28.653Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Comandos y permisos

En esta página conocerás los comandos y permisos del plugin ExecutableItems.

Las funciones premium se marcan con la etiqueta: <CustomTag type="premium" />

## Permisos

**CONSEJO para principiantes:**

:::info
Para dar los permisos de todos los ítems, te aconsejo descargar un plugin de permisos como [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Una vez que tengas un plugin de permisos, solo necesitas dar el permiso **`ei.item.*`**. Para Luckperms el comando es **`/lp group default permission set ei.item.* true`**
:::

#### Permiso de ítem

* Info: Permiso para que un jugador use un ExecutableItems.
  * Permiso para usar un ID de ExecutableItem específico: `ei.item.{id}`
  * Permiso para usar todos los ExecutableItems: `ei.item.*` 
  * Permiso negativo para prohibir un ID de ExecutableItems específico: `-ei.item.{id}` <CustomTag type="premium" />
* Ejemplo: `ei.item.test`

#### Permiso para ignorar el cooldown

* Info: Permiso para que un jugador no tenga cooldown al usar un ExecutableItems. 
  * Mientras haces pruebas, debes probar sin ser op/operador/admin.
  * Permiso para ignorar el cooldown de un ID de ExecutableItems específico: `ei.nocd.{id}`
  * Permiso para ignorar el cooldown de todos los ExecutableItems: `ei.nocd.*`
* Ejemplo: `ei.nocd.test`

#### Todos los permisos

* Info: Permiso que concede todos los permisos de ExecutableItems.
  * ¡Ten cuidado! Este concede literalmente todos los permisos, incluso los de administrador.
  * Permiso: `ei.*`
* Si quieres dar un permiso específico, sigue leyendo más abajo: cada comando se detalla con su permiso correspondiente.

#### Permisos de todos los comandos

* Info: Permiso que concede los permisos de todos los comandos de ExecutableItems.
  * Permiso: `ei.cmds`
* Si quieres dar un permiso específico, sigue leyendo más abajo: cada comando se detalla con su permiso correspondiente.

## Comandos

Aquí conocerás los comandos de ExecutableItems. Hay algunas palabras que se repetirán a lo largo de la explicación, estas son:

* SsomarPluginsItem: Es el ID de un ExecutableItem que ha sido creado, por ejemplo puede ser "Excalibur", "SuperPickaxe", "turtle", "12345"; nosotros establecimos este nombre.
* SsomarPluginsPlayer: Es el nombre de un jugador, por ejemplo "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame"; también existe este nombre.

El formato de los comandos tendrá diferentes símbolos:

* \{\} : Si un argumento está rodeado por \{\} significa que es necesario para ejecutar el comando.
* \[] : Si un argumento está rodeado por \[] significa que es opcional para ejecutar el comando.

También habrá diferentes colores (pero con la misma idea que \{\} y \[] ):

* Azul: Obligatorio
* Naranja: Opcional

### Comandos generales

#### Crear un nuevo ExecutableItem

* Comando: **/ei create \{id\}**
  * `id`: ID del ExecutableItem.
  * Si quieres **copiar el ítem de otro plugin**, o un ítem vanilla personalizado (Banner, Shield, ...), ¡es sencillo! Tómalo en tu mano principal y ejecuta este comando create.
* Ejemplo: `/ei create SsomarPluginsItem`
* Permiso: `ei.cmd.create`

#### Crear un nuevo ExecutableItem a partir de un bloque al que apuntas

* Comando: /ei create-from\_block \{id\}
  * `id`: ID del ExecutableItem.
* Ejemplo: `/ei create-from_block SsomarPluginsItem`
* Permiso: `ei.cmd.create-from-block`

#### Abrir el editor / menú

* Comando: **/ei editor** o **/ei show**
* Permiso: `ei.cmd.editor` o `ei.cmd.show`
* En la lista, el icono de cada ítem muestra una vista previa de su nombre visible, lore, encantamientos y atributos. Se puede desactivar con [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) en la config de SCore.

#### Recargar el plugin

* Comando: **/ei reload**
* Permiso: `ei.cmd.reload`

**Recargar solo 1 ítem**

* Comando: **/ei reload \{id\}**
  * `id` : ID del ExecutableItem.
* Ejemplo: `/ei reload SsomarPluginsItem`
* Permiso: `ei.cmd.reload`

**Recargar una carpeta**

* Comando: **/ei reload folder\:Name\_Of\_My\_Folder**
* Permiso: `ei.cmd.reload`

#### Regenerar las configs de los ítems por defecto

* Comando: **/ei default\_items**
* Permiso: `ei.cmd.default_items`

#### Eliminar un ExecutableItem

* Comando: **/ei delete \{id\}**
  * `id`: ID del ExecutableItem.
* Ejemplo: `/ei delete SsomarPluginsItem`
* Permiso: `ei.cmd.create`

#### Editar un ExecutableItem con un comando

* Comando: **/ei edit \{id\}**
  * `id` : ID del ExecutableItem.
* Ejemplo: `/ei edit SsomarPluginsItem`
* Permiso: `ei.cmd.edit`

#### Borrar todos los cooldowns y comandos retrasados de ExecutableItems

* Comando: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Puedes usar nombres de jugador para apuntar a un jugador
    * Puedes usar UUID para apuntar a una entidad.
  * `optional_target`
    * ALL: Restablece los comandos retrasados, los cooldowns y las actionbars del jugador.
    * DELAYED\_COMMANDS: Restablece todos los comandos retrasados causados por DELAY y DELAYTICK.
    * COOLDOWNS: Restablece todos los cooldowns del jugador en todos los ítems.
    * ACTIONBARS - Restablece todas las actionbars del jugador procedentes del comando personalizado ACTIONBAR.
* Ejemplo: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permiso: `ei.cmd.clear`

#### Activar / desactivar la actionbar de ExecutableItems

* Comando: **/ei actionbar \{on or off\}**
* **Ejemplo:** `/ei actionbar off`
* Permiso: `ei.cmd.actionbar`

#### Inspeccionar el ExecutableItem que tienes en la mano principal

* Comando: **/ei inspect**
  * Para usar este comando, el ExecutableItem debe tener activada la función de almacenar información del ítem. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Salida:
    * Usage
    * Owner UUID
    * Owner name
    * ExecutableItems ID
    * Variables 
* Permiso: `ei.cmd.inspect`

#### Quitar el propietario del EI que tienes en la mano

* Comando: **/ei unowned**
  * Para quitar el propietario de un ítem, este debe tener un propietario previamente; para ello, la función [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) debe estar activada en ese ExecutableItem
  * Después de ejecutar este comando, el siguiente jugador que interactúe con este ítem será el nuevo propietario. (No debe ser operador/op/admin)
* Permiso: `ei.cmd.unowned`

#### Quitar un EI del inventario de un jugador

* Comando: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Nombre del jugador al que se le quitará el ítem
  * `id`: ID del ExecutableItems
  * `quantity`: Valor entero de la cantidad a quitar
* Ejemplo: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permiso: `ei.cmd.take`

#### Refrescar los ExecutableItem(s) de tus jugador(es) con la última versión de su config

* Info: Este comando refresca los ExecutableItemID(s) a su última versión en su(s) config(s). Es decir, si un jugador tiene un ExecutableItem en una versión antigua, por ejemplo con el atributo GENERIC\_ARMOR a 10, y luego cambias el valor del atributo en la config del ExecutableItem, no se actualizará en el lado del jugador. Para permitir esta actualización puedes usar este comando: así se refresca y tendrá el nuevo valor actualizado en lugar de 10.
  * Para que este proceso de refresco funcione, los ExecutableItem(s) seleccionados deben estar en el inventario del jugador; de lo contrario no se refrescarán
  * Como consejo, otra forma de hacer este refresco es usando [Auto update item](/executableitems/configurations/activator-configuration/activators-features#auto-update-item)
* Comando: **/ei refresh \{player\} \{ExecutableItemID\}** **\{resetUsage\} \{resetDurability\}**
  * `player`: Nombre de un jugador específico o "all" para apuntar a todos los jugadores conectados.
  * `ExecutableItemID`: Nombre de un ExecutableItem específico o "all" para apuntar a todos los ExecutableItems creados.
  * `option`: Argumento de refresco
    * Opciones:
      * MATERIAL
      * NAME
      * LORE
      * DURABILITY
      * ATTRIBUTES
      * ENCHANTS
      * CUSTOM_MODEL_DATA
      * ARMOR_SETTINGS
      * USAGE
      * ITEM_RARITY
      * BOOK
      * EQUIPPABLE
      * REPAIRABLE
      * HIDERS
      * INSTRUMENT
      * TOOL_RULES
      * FIREWORK
      * FIREWORK_EXPLOSION
      * CONTAINER
      * HEAD
      * BANNER
      * FOOD
      * CONSUMABLE
      * BUNDLE
      * BLOCK_STATE
      * CHARGED_PROJECTILES
      * MYFURNITURE
      * SPAWNER
      * WEAPON
      * BLOCK_ATTACKS
      * TOOLTIP_MODEL
      * ALL_OPTIONS (Realiza todas las tareas indicadas arriba)
* Permiso: `ei.cmd.refresh`

#### **Modificar el propietario del ExecutableItem que tienes en la mano**

* Comando: **/ei set\_owner** **\{player\}**
  * `player`: Nombre del jugador que se establecerá como objetivo de este comando
    * Funciona con jugadores desconectados.
* Permiso: `ei.cmd.set_owner`

#### Activar el modo debug

* Info: Modo en el que cada activador envía al usuario distintos mensajes para conocer el estado del activador y saber por qué no funciona o cómo se está activando.
* Comando: **/ei debug**
* Permiso: `ei.cmd.debug`

#### Listar los sets y lo que lleva puesto un jugador <CustomTag type="premium" />

* Info: Lista los [sets](/executableitems/configurations/sets-configuration) cargados (`plugins/ExecutableItems/sets`). Con un jugador: las piezas que lleva puestas y el nivel activo de cada set.
* Comando: **/ei sets** **[player]**
* Permiso: `ei.cmd.sets`

#### Activar un activador (para probar un ítem)

* Info: Ejecuta un activador de un ExecutableItem que lleva el jugador, sin hacer el gesto (clic, golpe, salto...). Útil para probar una config. Todo lo demás funciona como de costumbre: slots detallados, condiciones, cooldowns, usage y comandos. El ítem se busca en el slot indicado; si no, en la mano principal, la mano secundaria, la armadura y después en todo el inventario.
* Comando: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: la entidad o el jugador de los activadores que tienen un objetivo (golpe, clic en entidad...). Por defecto, el que mira el jugador.
  * `block`: el bloque de los activadores que tienen un bloque objetivo. Por defecto, el bloque que mira el jugador.
  * `click`: para los activadores con un clic detallado. Por defecto `right` (`left` para `PLAYER_LEFT_CLICK`).
  * `input`: obligatorio para `PLAYER_INPUT`.
* Consejo: si no pasa nada, ejecuta **/ei debug** para ver qué comprobación detiene el activador.
* Permiso: `ei.cmd.trigger`

#### Hacer que todos los ExecutableItems conserven los atributos por defecto de su material

* Info: Establece [Keep default attributes](/executableitems/configurations/item-configuration/item-features#keep-default-attributes) en **todos** los ExecutableItem cargados (`keepDefaultAttributes: true`, `ignoreKeepDefaultAttributesFeature: false`) y guarda sus archivos. En 1.21+, tras cada carga ExecutableItems lista en la consola los ítems que pierden el daño / la armadura de su material sin esto. Con `false`, todos los ítems reciben `keepDefaultAttributes: false`.
* Comando: **/ei util-set-keepdefaultattributes-all-ei \{true or false\}**
* Ejemplo: `/ei util-set-keepdefaultattributes-all-ei true`
* Permiso: `ei.cmd.util-set-keepdefaultattributes-all-ei`

### Comandos give

#### Comando give

* Info: Comando para dar a un jugador un ExecutableItem en el primer slot disponible.
* Comando: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Nombre del jugador que será el objetivo de este comando
  * `id`: ID del ExecutableItem a dar.
    * Valores opcionales: Para añadir esta configuración personalizada, no debe haber espacio(s)/espacio(s) en blanco en el formato. 
      * `Variables`: Puedes seleccionar una configuración de variables al dar el ítem.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Sin uso de espacios en blanco
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Uso de espacios en blanco
      * `Usage:` Puedes seleccionar un valor para el usage al dar el ítem
        * ✅`{Usage:5}` # Sin uso de espacio(s) en blanco
        * ❌`{Usage : 5}` # Uso de espacio(s) en blanco
      * `Durability`: Puedes decidir cuánta durabilidad pierde el ítem al dárselo al usuario
        * ✅`{Durability:5}` # Sin uso de espacio(s) en blanco
        * ❌`{Durability : 5}` # Uso de espacio(s) en blanco
  * `quantity`: Cantidad de ítems a dar
  * `giveOfflinePlayer`: Valor booleano para establecer si el ítem se dará a un jugador desconectado o no. Por defecto este valor es true.
* Ejemplos: (En todos estos ejemplos el comando se ejecuta dentro de un ExecutableItems para poder procesar placeholders como %player%,%var\_name% y %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3` 
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permiso: `ei.cmd.give`

#### Comando give all

* Comando: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: ID del ExecutableItem a dar.
  * `quantity`: Cantidad de ítems a dar
  * `world`: Argumento opcional de mundo en el que ejecutar el comando. Esto hará que las personas que no estén en este mundo no reciban el ExecutableItem.
  * `giveOfflinePlayer`: Valor booleano para establecer si el ítem se dará a un jugador desconectado o no. Por defecto este valor es true.
* Permiso: `ei.cmd.giveall`

#### Dar un EI en un slot específico de un jugador <CustomTag type="premium" />

* Comando: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Nombre del jugador que será el objetivo de este comando
  * `id`: ID del ExecutableItem a dar.
    * Valores opcionales: Para añadir esta configuración personalizada, no debe haber espacio(s)/espacio(s) en blanco en el formato. 
      * `Variables`: Puedes seleccionar una configuración de variables al dar el ítem.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Sin uso de espacios en blanco
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Uso de espacios en blanco
      * `Usage`: Puedes seleccionar un valor para el usage al dar el ítem
        * ✅\{Usage:5\} # Sin uso de espacio(s) en blanco
        * ❌\{Usage : 5\} # Uso de espacio(s) en blanco
  * `quantity`: Cantidad de ítems a dar
  * `slot`: Slot del jugador en el que se dará este ítem.
  * `override`: Valor booleano para sobrescribir el slot si ya hay un ítem en él. Si es el caso, se moverá, y si el jugador tiene el inventario lleno, se soltará al suelo.
* Ejemplos: 
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**  
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permiso: `ei.cmd.giveslot`

**Dar a un jugador todos los EI de una carpeta específica**

* Info: Comando para dar a un jugador una carpeta del plugin.
* Comando: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Nombre del jugador que será el objetivo de este comando
* Permiso: `ei.cmd.givefolder`

### Comandos drop

#### Soltar un EI en una ubicación / posición específica 

* Comando: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: ID del ExecutableItem a dar.
  * `quantity`: Cantidad de ítems a soltar. Por defecto es 1.
  * location: Toda la ubicación es opcional; si quieres añadirla, tendrás que rellenar los siguientes argumentos:
    * `world`: Mundo donde se soltará el ítem.
    * `x`: Coordenada X donde se soltará el ítem.
    * `y`: Coordenada Y donde se soltará el ítem.
    * `z`: Coordenada Z donde se soltará el ítem.
* Ejemplos:  (En todos estos ejemplos el comando se ejecuta dentro de un ExecutableItems para poder procesar placeholders como %player%,%var\_name% y %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permiso: `ei.cmd.drop`

### Comandos de modificación

#### Modificar el valor de usage de un ExecutableItem

* Comando: 
  * En el juego: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * En la consola: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parámetros:
    * `set or modification`
      * set: Establece el nuevo \{value\} y reemplaza el antiguo
      * modification: Útil para añadir modificaciones, aumenta o disminuye el valor original según \{value\}
    * `player`: Nombre del jugador que será el objetivo de este comando
    * `slot`: Slot del jugador en el que se dará este ítem.
      * Más información sobre los slots aquí [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `value`: Valor usado para la modificación.
* Permiso: `ei.cmd.modification`

#### Modificar el valor de una variable de un ExecutableItem

* Comando: 
  * En el juego: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * En la consola: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parámetros:
    * `set or modification`
      * set: Establece el nuevo \{value\} y reemplaza el antiguo
      * modification: Útil para añadir modificaciones, aumenta o disminuye el valor original según \{value\}
    * `player`: Nombre del jugador que será el objetivo de este comando
    * `slot`: Slot del jugador en el que se dará este ítem.
      * Más información sobre los slots aquí [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots) 
    * `variableName`: El nombre de la variable a la que quieres aplicar el typeOfModication con el valor seleccionado.
    * `value`: Valor usado para la modificación.
* Permiso: `ei.cmd.modification`

#### Buscar un ExecutableItem en el servidor

* Info: Te da información sobre dónde están los ExecutableItems con el id \{id\} en tu servidor.
* Comando: **/ei search \{id\} \{searchMode\}**
  * `id`: ID del ExecutableItem que estás buscando
  * `searchMode`: Tipo de búsqueda
    * players: Busca el ExecutableItem en los inventarios de todos los jugadores **conectados**.
    * containers: Busca el ExecutableItem en todos los contenedores **cargados**.
    * all: Busca usando ambos métodos.
* Ejemplo:
  * `/ei search EternalSword all`
* Permiso: `ei.cmd.search`

#### Obtener la ruta del archivo de un ExecutableItem

* Info: Este comando muestra la ruta absoluta en el sistema de archivos del archivo de configuración de un ExecutableItem específico. Útil para desarrolladores o administradores de servidor que necesitan localizar y editar directamente los archivos de los ítems.
* Comando: **/ei path \{id\}**
  * `id`: ID del ExecutableItem del que quieres obtener la ruta
* Ejemplo:
  * `/ei path ExcaliburSword`
  * Salida: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permiso: `ei.cmd.path`

#### Comprobar la información de optimización de eventos

* Info: Este comando muestra información detallada sobre la optimización de los manejadores de eventos de ExecutableItems y estadísticas de rendimiento. Indica qué eventos se están escuchando y ofrece información sobre los ítems que usan reconocimiento personalizado (lo que puede afectar al rendimiento). La salida se envía a la consola del servidor.
* Comando: **/ei checkevents**
* La salida incluye:
  * Lista de eventos optimizados y el estado de sus listeners
  * Número de ExecutableItems que usan reconocimiento personalizado
  * Advertencias sobre el impacto en el rendimiento
  * Recomendaciones para mejorar el rendimiento
* Permiso: `ei.cmd.checkevents`

:::info
La salida de este comando se envía a la **consola**, no al jugador dentro del juego. Revisa la consola de tu servidor para ver la información detallada.
:::

:::tip
Los ítems con reconocimiento personalizado pueden afectar al rendimiento. El comando te mostrará cuántos ítems usan esta función. Si tienes problemas de rendimiento, considera reducir el número de ítems con el reconocimiento personalizado activado.
:::

### Comandos del paquete de texturas

#### Refrescar el paquete de texturas de ExecutableItems

* Comando: **/ei refresh-pack**
* Info: Refresca y recarga el paquete de texturas de ExecutableItems para todos los jugadores conectados. Útil después de hacer cambios en las texturas personalizadas.
* Permiso: `ei.cmd.refresh-pack`

#### Descargar el paquete de texturas por defecto de ExecutableItems

* Comando: **/ei download-default-pack**
* Info: Descarga el paquete de texturas por defecto de ExecutableItems desde el repositorio oficial y lo descomprime automáticamente. Si `selfHostPack` está activado en config.yml, el pack se registrará y se alojará automáticamente en tu servidor. Esto es útil para:
  * Configurar el paquete de texturas por primera vez
  * Restaurar el pack por defecto después de modificaciones
  * Actualizar a la última versión del pack por defecto
* Requisitos:
  * `selfHostPack: true` debe estar establecido en config.yml para el alojamiento automático
  * El servidor debe tener conexión a internet para descargar el pack
* Permiso: `ei.cmd.download-default-pack`

:::info
**Opciones de alojamiento:**
- **Autoalojamiento en tu servidor**: Establece `selfHostPack: true` en config.yml, el pack será alojado directamente por el plugin
- **Alojamiento externo**: Si quieres alojar el pack tú mismo (en un sitio web, CDN, etc.), establece la URL de descarga en `texturesPackUrl` en config.yml
- **Sin alojamiento**: Si no se activa ninguna de las dos opciones, el pack se descargará y se descomprimirá localmente, pero no se distribuirá a los jugadores
:::

### Custom triggers

* Info: ExecutableItems tiene comandos para ejecutar Custom triggers; si quieres saber qué son y cómo usarlos, consulta la información aquí [Custom triggers](/tools-for-all-plugins-score/custom-triggers) 

### WorldGuard

* Puedes usar las flags de WorldGuard para activar/desactivar todos los activadores de los EI
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* El mensaje de error se puede configurar en /ExecutableItems/locale/locale_EN.yml, por ejemplo
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
