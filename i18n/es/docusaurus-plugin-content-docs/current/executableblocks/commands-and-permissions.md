---
description: >-
  Guía de comandos y permisos de ExecutableBlocks: crear, dar, eliminar y
  gestionar bloques personalizados en tu servidor.
source_hash: aaceb7cb9a44305e
translated_at: '2026-10-03T10:44:09.315Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Commands & Permissions

## Permisos

**CONSEJO para principiantes:**

:::info
Para dar los permisos de todos los ítems, te recomiendo descargar un plugin de permisos como [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Una vez que tengas un plugin de permisos, solo necesitas dar el permiso **`eb.block.*`**, para Luckperm el comando es **`/lp group default permission set eb.block.* true`**
:::

#### Permiso de bloque

* Permiso: `eb.block.{id}`
* Permiso negativo: `-eb.block.{id}` 
* Ejemplo: `eb.block.Test`
* Dar el permiso de todos los ítems: `eb.block.*` 

#### Dar todos los permisos de EB

* Permiso: `eb.*`

#### Dar todos los permisos de comandos de EB

* Permiso: `eb.cmds`

#### Permiso de bypass de cooldown

* Permiso: `eb.nocd.{id}` `eb.nocd.*`
* Descripción: Da este permiso personalizado para desactivar el cooldown de tus jugadores vip
* (Asegúrate de probarlo sin ser op)

**Límite de EB**

* Permiso: `eb.limit.{amount}`
* Descripción: Establece el valor máximo de EB(s) que un jugador puede colocar.

#### Limitar un EB específico

* Permiso: `eb.block.ID.limit.{amount}`
* Descripción: Limita la cantidad de un ID de EB específico que un jugador puede colocar

## Comandos

#### Crear un nuevo ExecutableBlock

* Comando: **/eb create \{id\}**
* Consejo: 
  * Si quieres **copiar el ítem/bloque de otro plugin**, o un bloque vanilla personalizado (Banner, bloque personalizado, ...), necesitas instalar mi otro plugin, ExecutableItems, escribe **/ei create \{id\}** y luego importa tu ExecutableItem en ExecutableBlocks.
* Permiso: `eb.cmd.create`

####

#### Abrir una gui con los EB(s) colocados

* comando: /eb show-placed filter/sort:

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

#### Limpiar todos los cooldowns y comandos retrasados de EB

* Comando: **/eb clear** **\[playerName]**
* Permiso: `eb.cmd.clear`

:::info
También funciona con entidades, solo usa el UUID de la entidad en lugar del nombre del jugador
:::

#### Activar / Desactivar actionbar de EB

* Comando: **/eb actionbar** **\{on or off\}**
* Permiso: `eb.cmd.actionbar`

#### Colocar un EB en una posición específica

* Comando: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}**
* Permiso: `eb.cmd.place`

#### Eliminar un EB en una posición específica

* Comando: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir default true]
* Permiso: `eb.cmd.remove`

#### Rellenar una selección de región con un EB

* Requisito: Este comando requiere tener el plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-place \{id\}**
* Permiso: `eb.cmd.we-place`

#### Rellenar una región de WorldGuard con un EB

* Requisito: Este comando requiere tener el plugin WorldGuard
* Comando: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permiso: `eb.cmd.wg-fill-region`

#### Eliminar todos los EB presentes en una selección de bloques

* Requisito: Este comando requiere tener el plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
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
  * _Usage por defecto: El usage que está en la config de tu EB_
  * _Override permite que el EB ocupe ese slot, y si había un ítem ahí, se moverá a otro slot o se soltará al suelo._
* Permiso: `eb.cmd.giveslot`

**Dar cada EB de una carpeta específica a un jugador**

* Comando:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Comandos Drop

#### Soltar un EB en una ubicación / posición específica 

* Comando: 
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Cantidad por defecto: 1_
  * _Ubicación por defecto: La ubicación del jugador que ha ejecutado este comando_
* Permiso: `eb.cmd.drop`

### Custom trigger

Comandos:

* /eb run-custom-trigger trigger:\{activatorId\} // Ejecutará el/los activador(es) para todos los EB colocados que tengan un activador con el ID especificado.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Ejecutará el/los activador(es) solo para el EB colocado en la ubicación especificada y si tiene un activador con el ID especificado.
