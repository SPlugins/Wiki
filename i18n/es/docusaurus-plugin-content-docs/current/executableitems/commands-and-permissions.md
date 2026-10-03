---
description: >-
  Guía de comandos y permisos de ExecutableItems: creación, gestión y
  configuración de ítems personalizados en Minecraft.
source_hash: bc9c7ad5f9180570
translated_at: '2026-10-03T10:23:24.366Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# ⌨️ Comandos y Permisos

En esta página aprenderás sobre los Comandos y Permisos del plugin ExecutableItems.

Las funciones premium están marcadas con la etiqueta: <CustomTag type="premium" />

## Permisos

**CONSEJO para principiantes:**

:::info
Para dar los permisos de todos los ítems, te recomendamos descargar un plugin de permisos como [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Una vez que tengas un plugin de permisos solo necesitas dar el permiso **`ei.item.*`**, para Luckperm el comando es **`/lp group default permission set ei.item.* true`**
:::

#### Permiso de ítem

* Info: Permiso para que un jugador use un ExecutableItems.
  * Permiso para usar un ID específico de ExecutableItem: `ei.item.{id}`
  * Permiso para usar todos los ExecutableItems: `ei.item.*`
  * Permiso negativo para prohibir un ID específico de ExecutableItems: `-ei.item.{id}` <CustomTag type="premium" />
* Ejemplo: `ei.item.test`

#### Permiso para saltarse el cooldown

* Info: Permiso para que un jugador no tenga cooldown al usar un ExecutableItems.
  * Al hacer pruebas debes probar sin op/operador/admin.
  * Permiso para saltarse un ID específico de ExecutableItems: `ei.nocd.{id}`
  * Permiso para saltarse todos los ExecutableItems: `ei.nocd.*`
* Ejemplo: `ei.nocd.test`

#### Todos los permisos

* Info: Permiso que otorga todos los permisos de ExecutableItems.
  * ¡Cuidado! Este otorga literalmente todos los permisos, incluso los de administrador.
  * Permiso: `ei.*`
* Si quieres dar un permiso específico sigue leyendo más abajo, se detallará cada comando con su permiso correspondiente.

#### Permiso de todos los comandos

* Info: Permiso que otorga todos los permisos de comandos de ExecutableItems.
  * Permiso: `ei.cmds`
* Si quieres dar un permiso específico sigue leyendo más abajo, se detallará cada comando con su permiso correspondiente.

## Comandos

Aquí aprenderás sobre los comandos de ExecutableItems, habrá algunas palabras que se repetirán a lo largo de la explicación, aquí están:

* SsomarPluginsItem: Es el ID de un ExecutableItem creado, de la misma manera puede ser "Excalibur", "SuperPickaxe", "turtle", "12345", establecimos este nombre.
* SsomarPluginsPlayer: Es el nombre de un jugador, de la misma manera hay "Vayk\_", "Ssomar", "Special70", "Tidal\_Flame" también está este nombre.

El formato de los comandos tendrá diferentes símbolos:

* \{\} : Si un argumento está rodeado por \{\} significa que es necesario para ejecutar el comando.
* \[] : Si un argumento está rodeado por \[] significa que es opcional para ejecutar el comando.

También habrá diferentes colores (pero es la misma idea que \{\} y \[] ):

* Azul: Obligatorio
* Naranja: Opcional

### Comandos Generales

#### Crear un nuevo ExecutableItem

* Comando: **/ei create \{id\}**
  * `id`: ID del ExecutableItem.
  * Si quieres **copiar el ítem de otro plugin**, o un ítem vanilla personalizado (Banner, Shield, ...), ¡es simple! Tómalo con tu mano principal y ejecuta este comando create.
* Ejemplo: `/ei create SsomarPluginsItem`
* Permiso: `ei.cmd.create`

#### Crear un nuevo ExecutableItem a partir de un bloque apuntado

* Comando: /ei create-from\_block \{id\}
  * `id`: ID del ExecutableItem.
* Ejemplo: `/ei create-from_block SsomarPluginsItem`
* Permiso: `ei.cmd.create-from-block`

#### Abrir el editor / menú

* Comando: **/ei editor** o **/ei show**
* Permiso: `ei.cmd.editor` o `ei.cmd.show`
* En la lista, el icono de cada ítem muestra una vista previa de su nombre, lore, encantamientos y atributos. Se puede deshabilitar con [editorIconPreview](/tools-for-all-plugins-score/score/general-config#editoriconpreview) en la config de SCore.

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

#### Regenerar las configuraciones de ítems por defecto

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

#### Limpiar todos los cooldowns y comandos retrasados de ExecutableItems

* Comando: **/ei clear \{target\} \[optionaltarget]**
  * `target`
    * Puedes usar nombres de jugador para apuntar a un jugador
    * Puedes usar UUID para apuntar a una entidad.
  * `optional_target`
    * ALL: Reinicia los comandos retrasados, cooldowns y actionbars del jugador.
    * DELAYED\_COMMANDS: Reinicia todos los comandos retrasados causados por DELAY y DELAYTICK.
    * COOLDOWNS: Reinicia todos los cooldowns del jugador en todos los ítems.
    * ACTIONBARS: Reinicia todos los actionbars del jugador provenientes del comando personalizado ACTIONBAR.
* Ejemplo: `/ei clear SsomarPluginsPlayer COOLDOWNS`
* Permiso: `ei.cmd.clear`

#### Activar / Desactivar actionbar de ExecutableItems

* Comando: **/ei actionbar \{on or off\}**
* **Ejemplo:** `/ei actionbar off`
* Permiso: `ei.cmd.actionbar`

#### Inspeccionar el ExecutableItem que está en tu mano principal

* Comando: **/ei inspect**
  * Para usar este comando el ExecutableItem debe tener habilitada la función de almacenar información del ítem. [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info)
  * Salida:
    * Uso
    * UUID del propietario
    * Nombre del propietario
    * ID de ExecutableItems
    * Variables
* Permiso: `ei.cmd.inspect`

#### Eliminar al propietario del EI que está en tu mano

* Comando: **/ei unowned**
  * Para quitar el propietario de un ítem este debe tener un propietario previamente, para eso debe estar habilitada la función de [Store item info](/executableitems/configurations/item-configuration/item-features#store-item-info) en ese ExecutableItem
  * Después de ejecutar este comando, el siguiente jugador que interactúe con este ítem será el nuevo propietario. (No debe ser operador/op/admin)
* Permiso: `ei.cmd.unowned`

#### Quitar EI del inventario del jugador

* Comando: **/ei take \{player\} \{id\} \{quantity\}**
  * `player`: Nombre del jugador al que se le quitará el ítem
  * `id`: Id del ExecutableItems
  * `quantity`: Valor entero de la cantidad a quitar
* Ejemplo: `/ei take SsomarPluginsPlayer SsomarPluginsItem 1`
* Permiso: `ei.cmd.take`

#### Refrescar el/los ExecutableItem(s) de tu(s) jugador(es) con su última versión de configuración

* Info: Este comando refresca el/los ID(s) de ExecutableItem a su última versión según su configuración, es decir, si un jugador tiene un ExecutableItem en una versión antigua, por ejemplo con un atributo GENERIC\_ARMOR en 10, y luego cambias el valor de ese atributo en la configuración del ExecutableItem, no se actualizará del lado del jugador; para permitir esta actualización puedes usar este comando de modo que se refresque y tenga en lugar de 10 el nuevo valor actualizado.
  * Para realizar este proceso de refresco, el/los ExecutableItem(s) seleccionados deben estar en el inventario de los jugadores, de lo contrario no se refrescarán
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
      * ALL_OPTIONS (Hace todas las tareas mencionadas arriba)
* Permiso: `ei.cmd.refresh`

#### **Modificar el propietario del ExecutableItem que está en tu mano**

* Comando: **/ei set\_owner** **\{player\}**
  * `player`: Nombre del jugador que se establecerá como objetivo de este comando
    * Funciona con jugadores desconectados.
* Permiso: `ei.cmd.set_owner`

#### Activar el modo debug

* Info: Modo donde cada activador imprime al usuario diferentes mensajes para conocer el estado del activador y saber por qué no está funcionando según se está activando.
* Comando: **/ei debug**
* Permiso: `ei.cmd.debug`

#### Listar los sets y qué lleva puesto un jugador <CustomTag type="premium" />

* Info: Lista los [sets](/executableitems/configurations/sets-configuration) cargados (`plugins/ExecutableItems/sets`). Con un jugador: las piezas que lleva puestas y el tier activo de cada set.
* Comando: **/ei sets** **[player]**
* Permiso: `ei.cmd.sets`

#### Activar un activador (para probar un ítem)

* Info: Ejecuta un activador de un ExecutableItem que el jugador lleva, sin realizar el gesto (clic, golpe, salto...). Útil para probar una configuración. Todo lo demás funciona como siempre: slots detallados, condiciones, cooldowns, uso y comandos. El ítem se busca en el slot indicado, si no en la mano principal, la mano secundaria, la armadura, y luego en todo el inventario.
* Comando: **/ei trigger \{player\} \{item id\} \{activator id\}** **[slot:N] [target:nearest|\{player\}|\{uuid\}] [block:x,y,z] [click:left|right] [input:JUMP_PRESS...]**
  * `target`: la entidad o jugador de los activadores que tienen un objetivo (golpe, clic en entidad...). Por defecto, al que el jugador está mirando.
  * `block`: el bloque de los activadores que tienen un bloque objetivo. Por defecto, el bloque que el jugador está mirando.
  * `click`: para los activadores con un clic detallado. Por defecto `right` (`left` para `PLAYER_LEFT_CLICK`).
  * `input`: requerido para `PLAYER_INPUT`.
* Consejo: si no pasa nada, ejecuta **/ei debug** para ver qué comprobación detiene el activador.
* Permiso: `ei.cmd.trigger`

### Comandos de entrega (Give)

#### Comando give

* Info: Comando para dar a un jugador un ExecutableItem en el primer slot disponible.
* Comando: **/ei give \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \[giveOfflinePlayer]**
  * `player`: Nombre del jugador que será el objetivo de este comando
  * `id`: Id del ExecutableItem a dar.
    * Valores opcionales: Para añadir esta configuración personalizada, no debe haber espacio(s) en blanco en el formato.
      * `Variables`: Puedes seleccionar una configuración de variables para cuando se dé el ítem.
        * ✅`{Variables:{a:"1",b:"2",c:"3"}}` # Sin uso de espacios en blanco
        * ❌`{Variables:{a : "1",b: "2",c :"3"}}` # Uso de espacios en blanco
      * `Usage:` Puedes seleccionar un valor para el uso al dar el ítem
        * ✅`{Usage:5}` # Sin uso de espacio(s) en blanco
        * ❌`{Usage : 5}` # Uso de espacio(s) en blanco
      * `Durability`: Puedes decidir cuánta durabilidad pierde el ítem al dárselo al usuario
        * ✅`{Durability:5}` # Sin uso de espacio(s) en blanco
        * ❌`{Durability : 5}` # Uso de espacio(s) en blanco
  * `quantity`: Cantidad de ítems a dar
  * `giveOfflinePlayer`: Valor booleano para establecer si el ítem se dará a un jugador desconectado o no. Por defecto este valor está en true.
* Ejemplos: (En todos estos ejemplos el comando se ejecuta dentro de un ExecutableItems para poder parsear placeholders como %player%, %var\_name% y %usage%)
  * `/ei give %player% Genesis_Crystal{Variables:{vibraniun:10,proton:30},Usage:10} 3`
  * `/ei give %player% SurgeBlade{Variables:{charge:%var_charge%+1},Usage:%usage%-1} 1`
  * `/ei give SsomarPluginsPlayer BoneBlade 1`
  * `/ei give edp445 cupcake{Durability:12} 1`
* Permiso: `ei.cmd.give`

#### Comando Give All

* Comando: **/ei giveall \{id\} \{quantity\} \[world] \[giveOfflinePlayer]**
  * `id`: Id del ExecutableItem a dar.
  * `quantity`: Cantidad de ítems a dar
  * `world`: Argumento opcional de mundo donde ejecutar el comando. Esto hará que las personas que no estén en este mundo no reciban el ExecutableItem.
  * `giveOfflinePlayer`: Valor booleano para establecer si el ítem se dará a un jugador desconectado o no. Por defecto este valor está en true.
* Permiso: `ei.cmd.giveall`

#### Dar un EI en un slot específico de un jugador <CustomTag type="premium" />

* Comando: **/ei giveslot \{player\} \{id\} \{Variables:\{var\_id\:value\},Usage\:value\} \{quantity\} \{slot\} \[override true or false]**
  * `player`: Nombre del jugador que será el objetivo de este comando
  * `id`: Id del ExecutableItem a dar.
    * Valores opcionales: Para añadir esta configuración personalizada, no debe haber espacio(s) en blanco en el formato.
      * `Variables`: Puedes seleccionar una configuración de variables para cuando se dé el ítem.
        * ✅\{Variables:\{a:"1",b:"2",c:"3"\\}\} # Sin uso de espacios en blanco
        * ❌\{Variables:\{a : "1",b: "2",c :"3"\\}\} # Uso de espacios en blanco
      * `Usage`: Puedes seleccionar un valor para el uso al dar el ítem
        * ✅\{Usage:5\} # Sin uso de espacio(s) en blanco
        * ❌\{Usage : 5\} # Uso de espacio(s) en blanco
  * `quantity`: Cantidad de ítems a dar
  * `slot`: Slot del jugador donde se dará este ítem.
  * `override`: Valor booleano para sobrescribir el slot si ya hay un ítem en ese slot. En ese caso se moverá, y si el jugador tiene el inventario lleno se soltará al suelo.
* Ejemplos:
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`test{Variables:{x:"Hey",world:"Island"},Usage:50} 1 0`**
  * **`/ei giveslot`**`SsomarPluginsPlayer`**`rum{Usage:69420,Variables:{tell_me:"why",aint_nothing:"BUT A HEARTBREAK"}} 1 %slot%`**
* Permiso: `ei.cmd.giveslot`

**Dar cada EI de una carpeta específica a un jugador**

* Info: Comando para dar una carpeta del plugin a un jugador.
* Comando: **/ei givefolder \{player\} \{folder\} \{quantity\}**
  * `player`: Nombre del jugador que será el objetivo de este comando
* Permiso: `ei.cmd.givefolder`

### Comandos de drop

#### Soltar un EI en una ubicación / posición específica

* Comando: **/ei drop \{id\} \{quantity\} \{\[world] \[x] \[y] \[z]\}**
  * `id`: Id del ExecutableItem a dar.
  * `quantity`: Cantidad de ítems a soltar. Por defecto es 1.
  * location: La ubicación completa es opcional, en caso de que quieras añadirla necesitarás completar los siguientes argumentos:
    * `world`: Mundo donde se soltará el ítem.
    * `x`: Coordenada X donde se soltará el ítem.
    * `y`: Coordenada Y donde se soltará el ítem.
    * `z`: Coordenada Z donde se soltará el ítem.
* Ejemplos: (En todos estos ejemplos el comando se ejecuta dentro de un ExecutableItems para poder parsear placeholders como %player%, %var\_name% y %usage%)
  * `/ei drop totemshatter 1 %world% %x% %y% %z%`
  * `ei drop nuclearWar{Usage:3,Variables:{niconico:"nii"}} 25 %block_world% %block_x% %block_y% %block_z%`
  * `ei drop cybert1_5{Variables:{eh:5},Usage:5} 1 world 535 74 1329`
* Permiso: `ei.cmd.drop`

### Comandos de modificación

#### Modificar el valor de uso de un ExecutableItem

* Comando:
  * En el juego: **/ei modification \{set or modification\} usage \{slot\} \{value\}**
  * En consola: **/ei console-modification \{set or modification\} usage \{player\} \{slot\} \{value\}**
  * Parámetros:
    * `set or modification`
      * set: Establece el nuevo \{value\} y reemplaza el anterior
      * modification: Útil para añadir modificaciones, aumenta o disminuye el valor original en \{value\}
    * `player`: Nombre del jugador que será el objetivo de este comando
    * `slot`: Slot del jugador donde se dará este ítem.
      * Más información sobre slots aquí [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `value`: Valor usado para la modificación.
* Permiso: `ei.cmd.modification`

#### Modificar el valor de una variable de un ExecutableItem

* Comando:
  * En el juego: **/ei modification \{set or modification\} variable \{slot\} \{variableName\} \{value\}**
  * En consola: **/ei console-modification \{set or modification\} variable \{player\} \{slot\} \{variableName\} \{value\}**
  * Parámetros:
    * `set or modification`
      * set: Establece el nuevo \{value\} y reemplaza el anterior
      * modification: Útil para añadir modificaciones, aumenta o disminuye el valor original en \{value\}
    * `player`: Nombre del jugador que será el objetivo de este comando
    * `slot`: Slot del jugador donde se dará este ítem.
      * Más información sobre slots aquí [Slots info](/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
    * `variableName`: El nombre de la variable a la que quieres aplicar el typeOfModication con el valor seleccionado.
    * `value`: Valor usado para la modificación.
* Permiso: `ei.cmd.modification`

#### Buscar un ExecutableItem en el servidor

* Info: Te da información de dónde están los ExecutableItems con id \{id\} en tu servidor.
* Comando: **/ei search \{id\} \{searchMode\}**
  * `id`: Id del ExecutableItem que estás buscando
  * `searchMode`: Tipo de búsqueda
    * players: Busca el ExecutableItem en todos los inventarios de jugadores **conectados**.
    * containers: Busca el ExecutableItem en todos los contenedores **cargados**.
    * all: Busca usando ambos métodos.
* Ejemplo:
  * `/ei search EternalSword all`
* Permiso: `ei.cmd.search`

#### Obtener la ruta del archivo de un ExecutableItem

* Info: Este comando muestra la ruta absoluta del sistema de archivos al archivo de configuración de un ExecutableItem específico. Útil para desarrolladores o administradores de servidor que necesitan localizar y editar los archivos de ítems directamente.
* Comando: **/ei path \{id\}**
  * `id`: Id del ExecutableItem del que quieres obtener la ruta
* Ejemplo:
  * `/ei path ExcaliburSword`
  * Salida: `[ExecutableItems] The path of ExcaliburSword is /path/to/plugins/ExecutableItems/Items/ExcaliburSword.yml.`
* Permiso: `ei.cmd.path`

#### Comprobar información de optimización de eventos

* Info: Este comando muestra información detallada sobre la optimización del manejador de eventos de ExecutableItems y estadísticas de rendimiento. Muestra qué eventos se están escuchando y proporciona información sobre los ítems que usan reconocimiento personalizado (lo cual puede afectar al rendimiento). La salida se envía a la consola del servidor.
* Comando: **/ei checkevents**
* La salida incluye:
  * Lista de eventos optimizados y su estado de escucha
  * Conteo de ExecutableItems que usan reconocimiento personalizado
  * Advertencias sobre el impacto en el rendimiento
  * Recomendaciones para mejorar el rendimiento
* Permiso: `ei.cmd.checkevents`

:::info
La salida de este comando se envía a la **consola**, no al jugador en el juego. Revisa la consola de tu servidor para ver la información detallada.
:::

:::tip
Los ítems con reconocimiento personalizado pueden afectar al rendimiento. El comando te mostrará cuántos ítems están usando esta función. Si tienes problemas de rendimiento, considera reducir el número de ítems con el reconocimiento personalizado habilitado.
:::

### Comandos de Texture Pack

#### Refrescar el Texture Pack de ExecutableItems

* Comando: **/ei refresh-pack**
* Info: Refresca y recarga el resource pack de ExecutableItems para todos los jugadores conectados. Útil después de hacer cambios en texturas personalizadas.
* Permiso: `ei.cmd.refresh-pack`

#### Descargar el Texture Pack por defecto de ExecutableItems

* Comando: **/ei download-default-pack**
* Info: Descarga el resource pack por defecto de ExecutableItems desde el repositorio oficial y lo descomprime automáticamente. Si `selfHostPack` está habilitado en config.yml, el pack se registrará automáticamente y se alojará en tu servidor. Esto es útil para:
  * Configurar el resource pack por primera vez
  * Restaurar el pack por defecto después de modificaciones
  * Actualizar a la última versión del pack por defecto
* Requisitos:
  * `selfHostPack: true` debe estar establecido en el config.yml para el alojamiento automático
  * El servidor debe tener conexión a internet para descargar el pack
* Permiso: `ei.cmd.download-default-pack`

:::info
**Opciones de alojamiento:**
- **Autoalojamiento en tu servidor**: Establece `selfHostPack: true` en config.yml, el pack será alojado directamente por el plugin
- **Alojamiento externo**: Si quieres alojar el pack tú mismo (en un sitio web, CDN, etc.), establece la URL de descarga en `texturesPackUrl` en config.yml
- **Sin alojamiento**: Si ninguna de las opciones está habilitada, el pack se descargará y descomprimirá localmente pero no se distribuirá a los jugadores
:::

### Custom triggers

* Info: ExecutableItems tiene comandos para ejecutar Custom Triggers, si quieres saber qué son y cómo usarlos consulta la información aquí [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### WorldGuard

* Puedes usar flags de WorldGuard para activar/desactivar todos los activadores de ei
```
/rg flag <region> ei-activators deny # disables ALL EI activators in the region
/rg flag <region> ei-activators allow # re-enables them (this is the default)
```

* El mensaje de error se puede configurar en /ExecutableItems/locale/locale_EN.yml por ejemplo
```yml
disableRegion: '&8[&4Executable&7Items&8] &cYou cant use &e%item%&c in this region!'
```
