---
description: >-
  Lista de comandos y permisos de ExecutableBlocks: crear, colocar, recargar,
  dar y eliminar EB, con la sintaxis y el permiso de cada comando.
source_hash: 653dceef09a76278
translated_at: '2026-11-13T18:12:31.940Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Comandos y permisos

## Permisos

**CONSEJO para principiantes:**

:::info
Para dar los permisos de todos los ítems, te aconsejo descargar un plugin de permisos como [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Una vez que tengas un plugin de permisos, solo necesitas dar el permiso **`eb.block.*`**; para Luckperms el comando es **`/lp group default permission set eb.block.* true`**
:::

#### Permiso de bloque

* Permiso: `eb.block.{id}`
* Permiso negativo: `-eb.block.{id}` 
* Ejemplo: `eb.block.Test`
* Permiso para todos los ítems: `eb.block.*` 

#### Dar todos los permisos de EB

* Permiso: `eb.*`

#### Dar los permisos de todos los comandos de EB

* Permiso: `eb.cmds`

#### Permiso para ignorar el cooldown

* Permiso: `eb.nocd.{id}` `eb.nocd.*`
* Descripción: da este permiso personalizado para desactivar el cooldown de tus jugadores VIP
* (Asegúrate de probar sin ser op)

**Límite de EB**

* Permiso: `eb.limit.{amount}`
* Descripción: establece el valor máximo de EB que un jugador puede colocar.

#### Limitar un EB específico

* Permiso: `eb.block.ID.limit.{amount}`
* Descripción: limita la cantidad de un ID de EB específico que un jugador puede colocar

## Comandos

#### Crear un nuevo ExecutableBlock

* Comando: **/eb create \{id\}**
* Consejo: 
  * Si quieres **copiar el ítem o bloque de otro plugin**, o un bloque vanilla personalizado (Banner, bloque personalizado, ...), necesitas instalar mi otro plugin, ExecutableItems, escribir **/ei create \{id\}** y después importar tu ExecutableItem en ExecutableBlocks.
* Permiso: `eb.cmd.create`

####

#### Abrir una GUI con los EB colocados

* Comando: /eb show-placed filter/sort:

#### Abrir el editor / menú

* Comando: **/eb editor** o **/eb show**
* Permiso: `eb.cmd.editor` o `eb.cmd.show`

#### Abrir el editor para editar un EB específico

* Comando: **/eb edit \{BlockID\}**
* Permiso: `eb.cmd.edit`

#### Recargar el plugin

* Comando: **/eb reload**
* Permiso: `eb.cmd.reload`

#### Recargar el plugin (solo 1 bloque)

* Comando: **/eb reload \{block\_id\}**
* Permiso: `eb.cmd.reload`

**Recargar una carpeta**

* Comando: **/eb reload folder\:Name\_Of\_My\_Folder**
* Permiso: `eb.cmd.reload`

#### Eliminar un ExecutableBlock

* Comando: **/eb delete \{id\}**
* Permiso: `eb.cmd.create`

#### Recargar los bloques por defecto de ExecutableBlock

* Comando: **/eb default\_blocks**
* Permiso: `eb.cmd.default_blocks`

#### Borrar todos los cooldowns y comandos con retraso de EB

* Comando: **/eb clear** **\[playerName]**
* Permiso: `eb.cmd.clear`

:::info
También soporta entidades: solo usa el UUID de la entidad en lugar del nombre del jugador
:::

#### Activar / desactivar la actionbar de EB

* Comando: **/eb actionbar** **\{on or off\}**
* Permiso: `eb.cmd.actionbar`

#### Colocar un EB en una posición específica

* Comando: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}** \[direction]
* Permiso: `eb.cmd.place`
* `[direction]`: (Opcional) `NORTH`, `SOUTH`, `EAST`, `WEST`, `UP` o `DOWN` (en mayúsculas o minúsculas, con autocompletado con Tab). El bloque colocado se orienta hacia esta dirección.
  * Tiene prioridad sobre las [características direccionales](/executableblocks/configurations/block-configuration/block-features#directional-features) del bloque (`blockFaceOnPlace` con `forceBlockFaceOnPlace: true`).
  * Funciona en los bloques que se pueden orientar: bloques direccionales (hornos, observadores, nidos de abeja...), bloques rotables (carteles, cabezas, banners: no `UP` / `DOWN`) y bloques con un eje (troncos, pilares: `UP` / `DOWN` = vertical). Una dirección que el bloque no acepte se ignora.
  * Solo para los ExecutableBlocks creados con `BASIC_CREATION` o `IMPORT_FROM_EXECUTABLE_ITEMS`, en servidores 1.13+.
  * Sin el argumento, nada cambia: el bloque se coloca como antes.
* Ejemplo: `/eb place my_furnace 100 64 -20 world EAST`

#### Eliminar un EB en una posición específica

* Comando: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permiso: `eb.cmd.remove`

#### Rellenar una selección de región con un EB

* Requisito: este comando requiere tener el plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-place \{id\}**
* Permiso: `eb.cmd.we-place`

#### Rellenar una región de WorldGuard con un EB

* Requisito: este comando requiere tener el plugin WorldGuard
* Comando: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permiso: `eb.cmd.wg-fill-region`

#### Eliminar todos los EB presentes en una selección de bloques

* Requisito: este comando requiere tener el plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Permiso: `eb.cmd.we-remove`

#### Modificación de variable de EB

* Comando: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\} 

#### Modificación de usage de EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Comandos Give y Take

#### Comando Give

* (Funciona con jugadores desconectados)
* Comando: 
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer default true]
* Permiso: `eb.cmd.give`
* Ejemplos:
  * Ejemplos: 
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3** 
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Comando Take

* Comando: 
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Permiso: `eb.cmd.take`

#### Comando GiveAll

* Comando: 
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Permiso: `eb.cmd.giveall`

#### Dar un EB en un slot específico de un jugador 

* Comando: 
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Ejemplos: 
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**  
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Usage por defecto: el Usage que está en la config de tu EB_
  * _Override permite que el EB ocupe ese slot y, si había un ítem allí, se moverá a otro slot o caerá al suelo._
* Permiso: `eb.cmd.giveslot`

**Dar a un jugador todos los EB de una carpeta específica**

* Comando:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Comandos Drop

#### Soltar un EB en una ubicación / posición específica 

* Comando: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Cantidad por defecto: 1_
  * _Ubicación por defecto: la ubicación del jugador que ha ejecutado este comando_
* Permiso: `eb.cmd.drop`

### Custom Trigger

Comandos:

* /eb run-custom-trigger trigger:\{activatorId\} // Ejecutará el o los activadores de todos los EB colocados que tengan un activador con el ID especificado.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Ejecutará el o los activadores solo del EB colocado en la ubicación especificada y si tiene un activador con el ID especificado.
