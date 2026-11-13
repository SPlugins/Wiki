---
description: >-
  Lista de comandos de bloque personalizados (AROUND, MINEINCUBE, VEIN_BREAKER,
  SETBLOCK y más) con sus ajustes y ejemplos de uso en ExecutableItems.
source_hash: b9677d85e164ca24
translated_at: '2026-11-13T18:16:06.545Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Block Commands

:::tip
Compatibilidad "multi-world" para los comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Ejemplo: quieres invocar un Zombie en el mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Activa **HIDE USAGE** cuando uses un número grande en **MINEINCUBE**, ya que puede reducir el lag que suele producirse mucho cuando usas `MINEINCUBE 8`, por ejemplo
:::

## Comandos personalizados

_Ordenados por orden alfabético_

### &lt;+&gt; (Around Command Connector)

* Info: te permite añadir más comandos en una sola línea de comando. Solo funcionará bien con `AROUND` y `MOB_AROUND`.
* Ejemplo: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: selecciona jugadores dentro de un radio concreto y hace que ejecuten comandos
* Ajustes del comando
    * `{distance}`: hasta qué radio de distancia el comando seleccionará jugadores
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Si es true, no afectará al lanzador.
      * Situación de ejemplo: cuando ejecutas el activador de un ExecutableItem y ese activador admite comandos de bloque,
      ignorará a la persona que activó el activador. Sin embargo, si esta opción es false, también te afectará a ti.
    * `{throughBlocks}`: afectará o no a los mobs que están detrás de bloques
    * `{limit}`: la cantidad de objetivos que pueden verse afectados
    * `{sort}`: útil para la opción limit.
    * NEAREST : selecciona las entidades más cercanas al origen.
    * RANDOM : selecciona aleatoriamente cualquier entidad dentro del alcance del comando.
    * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en zona salvaje o en el claim del lanzador (contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
    * `{command}`: el comando que ejecutarán los jugadores seleccionados
* Ejemplo:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Esto invoca un rayo sobre los jugadores en un radio de 20 bloques alrededor del bloque en el que se hizo clic.

:::info
**Número de objetivos:** `%around_target_count%` da el número de jugadores seleccionados por el comando. Es el mismo para cada objetivo y cuenta los objetivos que se mantienen después de `distance`, `affectThePlayerThatActivatesTheActivator`, `throughBlocks`, `regionCheck` y `limit`. Los `CONDITIONS(...)` comprobados en cada objetivo no se tienen en cuenta. Acepta el atajo `+N` / `-N`: `%around_target_count%-1`.

Ejemplo: `AROUND 10 SEND_MESSAGE &e%around_target_count% players are around the block`
:::

#### Puedes añadir condiciones al comando AROUND

* La condición tiene este aspecto: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Las condiciones funcionan con placeholders, pero deben escribirse como %::\_::% en lugar de %\_%
  * Por ejemplo %::player\_health::%
* Para añadir MÁS de 1 condición usa "&&" entre las condiciones
* Ejemplo:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Ten en cuenta que la parte CONDITIONS() procesa los placeholders que contiene con el jugador seleccionado por el comando AROUND. Así que lo que ocurrió realmente en los placeholders de arriba es que se comprueba si la salud del objetivo es mayor que 10 y si el jugador seleccionado por el comando AROUND se llama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: aplica el mismo efecto que se produce cuando un jugador usa polvo de hueso sobre un bloque (cultivo)
* Sin ajustes de comando
* Ejemplo:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: rompe el bloque objetivo
* Sin ajustes de comando
* Ejemplo:

```
 - BREAK
```

### CONTENT\_ADD

* Info: añade un ítem a un contenedor
* Ajustes del comando
  * \{Item\}: ítem que se añadirá
  * \[Amount]: cantidad que se añadirá (por defecto es 1)
* Ejemplo:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: vacía un contenedor
* Sin ajustes de comando
* Ejemplo:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: elimina un ítem de un contenedor
* Ajustes del comando
  * \{Item\}: ítem que se eliminará
  * \[Amount]: cantidad que se eliminará (por defecto es 1)
* Ejemplo:

```
- CONTENT_REMOVE STONE 1
```

:::info
No eliminará ExecutableItems si el material coincide. La única forma sería especificándolo con EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: envía un mensaje a la consola
* Ajuste del comando
  * `{text}`: texto que se enviará a la consola
* Ejemplo:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: cambia el tipo del bloque seleccionado por el activador
* Ajuste del comando
* Ejemplo:

```
- CHANGE_BLOCK_TYPE STONE
```

:::info
Funciona con ItemsAdder
:::

```
- CHANGE_BLOCK_TYPE ITEMSADDER:MyIA
```

### CROPS\_GROWTH\_BOOST

* Info: acelera el crecimiento de los cultivos alrededor del bloque
* Comando: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Ejemplo:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: suelta un Executable Item en la ubicación del bloque
* Ajustes del comando
  * `{id}`: id del ítem del ExecutableItem
  * `{quantity}`: la cantidad del ítem ejecutable que se soltará
  * `[owner]`: (opcional) el propietario del ítem soltado (IGN o UUID del jugador)
  * `[itemdata]`: (opcional) ajustes de datos del ítem que contienen:
    * `Usage`: establece el valor de usos
    * `Variables`: establece variables personalizadas (formato: `{key:value}`)
    * `Durability`: establece el valor de durabilidad
* Ejemplo:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: suelta un Executable Block en la ubicación del bloque
* Ajustes del comando
  * `{id}`: id del ítem del ExecutableBlock
  * `{quantity}`: la cantidad del bloque ejecutable que se soltará
* Ejemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: drena en un cubo de radio "r" las fuentes de lava y/o agua
* Ajustes del comando
  * `{radius}`: el radio en bloques (9 es el límite), puedes saltarte el límite añadiendo un * antes de tu radio (bajo tu propio riesgo).
  * `{drainType}`: LAVA o WATER (no es necesario si quieres ambos)
  * `[waterlogged]`: (opcional) (por defecto = false) si es true y el agua se drena (`WATER` o sin `{drainType}`), también seca los bloques con agua (waterlogged) del cubo (losas, escaleras, vallas...) y elimina los bloques `KELP`, `KELP_PLANT`, `SEAGRASS`, `TALL_SEAGRASS` y `BUBBLE_COLUMN` sin soltar nada, como hace una esponja. Solo para servidores 1.13+.
* Ejemplo:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
DRAININCUBE 4 WATER waterlogged:true
```

:::info
Sin `waterlogged:true`, los bloques con agua (waterlogged) conservan su agua y esta puede volver a fluir hacia la zona drenada.
:::

### DROPITEM

* Info: suelta un ítem en la ubicación del bloque
* Ajustes del comando
  * `{material}`: el tipo de ítem.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: la cantidad del ítem que se soltará
* Ejemplo:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Información: rompe el bloque que seleccionaste y genera un TNT activado en esa ubicación
* Sin ajustes de comando
* Ejemplo:

```
- EXPLODE
```

### FARMINCUBE

* Información: rompe todos los cultivos dentro de un radio dado
* Ajustes del comando
  * `{radius}`: radio del tamaño del área de cultivos que quieres romper. **(EL LÍMITE ES 9)**
  * `{drop}`: (por defecto = true) si el bloque suelta botín o no
  * `{onlyMaxAge}`: (por defecto = true) solo romperá cultivos con la edad máxima
  * `{replant}`: (por defecto = false) si el cultivo se replantará o no
  * `{event}`: (por defecto = false, true con `runActivatorOnBlocks:true`) si el cultivo generará el evento de rotura de bloque o no.
  * `[runActivatorOnBlocks]`: (opcional) (por defecto = false) solo ExecutableItems. Si es true, los cultivos rotos por el comando también ejecutan el activador que lo lanzó, consulta [runActivatorOnBlocks](#runactivatoronblocks). Puede escribirse en cualquier parte del comando y activa `{event}` salvo que `{event}` se escriba como false.
* Ejemplo:

```
- FARMINCUBE 9 true true true false
- FARMINCUBE 4 true true true runActivatorOnBlocks:true
```

### FERTILIZEINCUBE

* Info: fertiliza los cultivos cercanos 1 etapa de edad, es como aplicar polvo de hueso pero hace crecer la planta el 100 % de las veces.
* Ajuste del comando
  * `{radius}`: radio del tamaño del área de cultivos que quieres fertilizar **(EL LÍMITE ES 9)**
* Ejemplo:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: destruye bloques en un radio con forma de rectángulo. Cada bloque roto por este comando cuenta como un evento de rotura de bloque de un jugador.
* Ajustes del comando
  * `{radius}`: radio del tamaño que tendrá el cubo
  * `{depth}`: la profundidad que tendrá el rectángulo.
  * `{drop}`: si el bloque suelta botín o no
  * `{createBBEvent}`: si el plugin generará un blockBreakEvent por cada bloque roto por MINEINCUBE (por defecto true)
  * `[direction]`: (opcional) (por defecto = la dirección del jugador) si quieres forzar una dirección. 
    * Opciones:
      * `north/n/-z` : norte
      * `south/s/+z` : sur
      * `east/e/+x` : este
      * `west/w/-x` : oeste
      * `up` : arriba
      * `down` : abajo
      * `auto` : usa la lógica de %player_direction_xz% de la Player Expansion de PlaceholderAPI para decidir las direcciones `N/W/S/E`. Para la lógica de arriba/abajo, dirección `UP` si el pitch es `<=` -45; dirección `DOWN` si el pitch es `>=` 45. 
  * `[smelt]`: (opcional) (por defecto = false) usa la lógica del comando SMELT. Si el bloque se puede fundir, suelta la versión fundida en su lugar. En caso contrario, soltará el bloque roto con normalidad.
* Ejemplo:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Admite %player\_direction\_xz% de PlaceholderAPI - Player expansion\
Ejemplo: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: hace que el bloque objetivo dispare proyectiles
* Ajustes del comando
  * `{projectile}`: el tipo de proyectil
  * `{speed}`: la velocidad del proyectil
  * `{despawnDelay}`: el retraso de desaparición en segundos (por defecto 10)
* Ejemplo:

```
- LAUNCH ARROW 2 5
```

:::info
El bloque debe ser direccional para que LAUNCH lance el proyectil correctamente.

Ejemplo: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: destruye bloques en un radio con forma de cuboide. Cada bloque roto por este comando cuenta como un evento de rotura de bloque de un jugador.
* Ajustes del comando
  * `{radius}`: radio del cubo de bloques que quieres romper **(EL LÍMITE ES 9)**
  * `{droploot}`: si el bloque suelta botín o no
  * `{createEvent}`: si el plugin generará un blockBreakEvent por cada bloque roto por MINEINCUBE (por defecto true)
  * `{offsetBreak}`: si el área de bloques empieza a romperse desde el bloque roto o desde el "centro", para que el área funcione realmente con el "radio" seleccionado. (por defecto false)
  * `[smelt]`: (opcional) (por defecto = false) usa la lógica del comando SMELT. Si el bloque se puede fundir, suelta la versión fundida en su lugar. En caso contrario, soltará el bloque roto con normalidad.
  * `[runActivatorOnBlocks]`: (opcional) (por defecto = false) solo ExecutableItems. Si es true, los bloques rotos por el comando también ejecutan el activador que lo lanzó, consulta [runActivatorOnBlocks](#runactivatoronblocks). Mantén `{createEvent}` en true.
* Ejemplo:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
- MINEINCUBE radius:1 droploot:true createEvent:true runActivatorOnBlocks:true
```

### MINEINSPHERE

* Info: destruye bloques en un radio con forma esférica. Cada bloque roto por este comando cuenta como un evento de rotura de bloque de un jugador.
* Ajustes del comando
  * `{radius}`: radio de la esfera
  * `{drop}`: si el bloque suelta botín o no
  * `{create blockBreakEvent}`: si el plugin generará un blockBreakEvent por cada bloque roto por el comando
  * `[smelt]`: (opcional) (por defecto = false) usa la lógica del comando SMELT. Si el bloque se puede fundir, suelta la versión fundida en su lugar. En caso contrario, soltará el bloque roto con normalidad.
* Ejemplo:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: selecciona entidades dentro de un radio concreto y hace que ejecuten comandos
* Ajustes del comando
  * `{distance}`: hasta qué radio de distancia el comando seleccionará entidades
  * `{displayMsgIfNoEntity}`: (true o false) para notificar al usuario del ítem si no consiguió seleccionar ningún mob.
    * **Establécelo en false para ocultar el mensaje**
  * `{throughBlocks}`: afectará o no a los mobs que están detrás de bloques
  * `{safeDistance}`: si la distancia entre el objetivo y el lanzador es menor o igual que el valor de safeDistance, el objetivo no se verá afectado.
  * `{offsetYaw}`: la dirección de yaw que quieres para tu desplazamiento (independiente del valor de yaw del origen)
  * `{offsetPitch}`: la dirección de pitch que quieres para tu desplazamiento (independiente del valor de yaw del origen)
  * `{offsetDistance}`: tras calcular offsetYaw y offsetPitch, mediante el valor de este ajuste moverá la posición/punto central del comando AROUND desde la ubicación xyz del origen.
  * `{limit}`: la cantidad de objetivos que pueden verse afectados
  * `{sort}`: útil para la opción limit.
    * NEAREST : selecciona las entidades más cercanas al origen.
    * RANDOM : selecciona aleatoriamente cualquier entidad dentro del alcance del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en zona salvaje o en el claim del lanzador (contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
  * `{nonliving}`: true/false. Si es true, seleccionará otras entidades como flechas y armor stands. Cualquier bug que ocurra al ejecutar comandos de entidad con este argumento activado probablemente se ignorará por el aumento del alcance del proyecto.
  * Puedes poner entidades en BLACKLIST o WHITELIST añadiendo uno de estos en cualquier lugar del comando:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)
* Ejemplo:

```
- MOB_AROUND 3 false BURN 10
- MOB_AROUND 5 execute at %around_target_uuid% run summon lightning_bolt
- MOB_AROUND 5 BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
- MOB_AROUND 5 effect give %around_target_uuid% poison 10 10
```

Para usar NBT de entidad en el campo WHITELIST/BLACKLIST, necesitas instalar el plugin NBT API

<LinkPreview
  url="https://www.spigotmc.org/resources/nbt-api.7939/"
  title="NBTAPI Plugin"
/>

Admite NBT Tags, así que puedes añadir, por ejemplo, algo como: `ZOMBIE{IsBaby:1}`

<LinkPreview
  url="https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities"
  title="Entities tags"
/>

```
- MOB_AROUND 7 BLACKLIST(ZOMBIE{CustomName:"Test Test"},ZOMBIE{CustomName:"Miyamoto"}) false BURN 3
- MOB_AROUND 5 WHITELIST(ZOMBIE{IsBaby:1}) DAMAGE 20
- MOB_AROUND 9 WHITELIST(WOLF{Owner:"%player%"}) HEAL 5
- MOB_AROUND 9 WHITELIST(WOLF{Owner:%player_uuid%}) HEAL 5
```

### MOVE

* Info: mueve todas las entidades que están sobre el bloque en la dirección del bloque (para entenderlo mejor, es como lo que hace una cinta transportadora)
* Sin ajustes de comando
* Ejemplo:

```
- MOVE
```

:::info
**Este comando solo funciona en bloques direccionales.**
:::

### MOB\_NEAREST

* Info: selecciona el mob más cercano al jugador/objetivo.
* Ajustes del comando
    * `{max accepted distance}`:  distancia máxima aceptada a la que puede estar la "entidad".
    * `{command(s)}`: el comando que se ejecutará
* Ejemplo:

Daña al jugador más cercano

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: selecciona el jugador más cercano al jugador/objetivo.
* Ajustes del comando
    * `{max accepted distance}`: distancia máxima aceptada a la que puede estar el "objetivo".
    * `{command}`: el comando que se ejecutará
* Ejemplo:

Daña al jugador más cercano

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Abre o cierra un bloque que se puede abrir.
* Sin ajustes de comando
* Ejemplo:

```
- OPENDOOR
```

### OPMESSAGE

* Info: envía un mensaje a los jugadores OP conectados y a la consola
* Ajuste del comando
  * `{text}`: texto que se enviará
* Ejemplo:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: genera partículas en la ubicación del bloque
* Ajustes del comando
  * `{type}`: el tipo de partícula.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: la cantidad de partículas que se generarán
* `{offset}`: el radio del área donde pueden aparecer las partículas en la ubicación del bloque
* `{speed}`: la rapidez o el tamaño que tendrán las partículas
* Ejemplo:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: coloca líquido en una ubicación. Si hay un caldero en esa ubicación, lo llena. Si hay un bloque que admite agua (waterloggable), lo llena de agua. En caso contrario, no hace nada
* Ajustes del comando
  * `{type}`: tipo de líquido (por defecto: WATER). Opciones: WATER/LAVA
* Ejemplo:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: planta en cuadrado respecto al bloque seleccionado.
* Ajustes del comando
  * `{radius}`: radio del cuadrado
  * `{takeFromInv}`: por defecto true, toma las semillas del inventario del jugador; en caso contrario, las genera
  * `{acceptEI}`: por defecto false, acepta EI para las semillas
  * `{cropType}`: por defecto se aceptan todas las semillas (toma las semillas según su orden en el inventario)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: convierte el área de plantación de cuadrado a cubo. Útil para plantar cacao en un área
* Ejemplo:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: elimina el bloque, sin drops, simplemente lo elimina
* Sin ajustes de comando
* Ejemplo:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: vende todo el contenido de un cofre / horno / todos los bloques que tienen inventario.
* Ajustes del comando
  * `{price_boost}`: multiplicador float para los ítems vendidos. Por ejemplo, si el valor aquí es 2, los ítems vendidos te darán el doble de su precio de venta.
  * `{deleteUnsellable}`: valor booleano para establecer si debe eliminar los ítems que no se pueden vender
* Ejemplo:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Requiere ShopGUIPlus (prioridad) & Vault & precios de CMI
:::

### SETBLOCK

* Info: reemplaza el bloque objetivo por otro bloque
* Ajuste del comando
  * `{material}`: el material que se establecerá
* Ejemplo:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: reemplaza el bloque objetivo por un bloque temporal.
* Ajustes del comando
  * `{material}`: el material que se establecerá
  * `{time}`: el tiempo en ticks (20 ticks = 1 s)
* Ejemplo:

```
- SETTEMPBLOCK STONE 100
```

:::warning
No reemplaza bloques que tienen datos adicionales (inventario, rotación, etc.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: reemplaza el bloque seleccionado por un bloque temporal
* Comando: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Ejemplo:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
No reemplaza bloques que tienen datos adicionales (inventario, rotación, etc.)
:::

### SETBLOCKPOS

* Info: coloca bloques (setblock) en una posición determinada
* Ajustes del comando
  * `{x}`: la posición X del bloque
  * `{y}`: la posición Y del bloque
  * `{z}`: la posición Z del bloque
  * `{material}`: el tipo de bloque
  * `{bypassWG}`: si WorldGuard interferirá o no con la colocación del bloque
* Ejemplo:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: comando setblock, pero para Executable Blocks
* Ajustes del comando
  * `{id}`: ID del Executable Block
  * `{x}`: coordenadas X
  * `{y}`: coordenadas Y
  * `{z}`: coordenadas Z
  * `{world}`: el mundo en el que quieres que esté el Executable Block
  * `{replace}`: si quieres reemplazar un bloque que existe en esa ubicación o no
  * `{bypassProtection}`: (por defecto false) si quieres reemplazar el bloque incluso si hay una protección de terreno de un plugin allí. 
  * `[ownerUUID]`: (opcional) (por defecto = sin propietario) el uuid del jugador que sería el propietario del eb
* Ejemplo:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: recoge el spawner implicado en el evento
* Sin ajustes de comando
* Ejemplo:

```
- SILK_SPAWNER
```

:::info
El comando SILK\_SPAWNER solo es compatible con los siguientes plugins:

* RoseStacker
* WildStacker

Y, por supuesto, con los spawners vanilla.
:::

### SMELT

* Info: funde el bloque objetivo soltando el ítem fundido, por ejemplo iron\_ore -> iron\_ingot, admite fortuna; si no se puede fundir, no ocurrirá nada. El botín del bloque no cambiará.
* Ajuste del comando
  * `[generateEvent]`: (opcional) (por defecto = true) cuando se genera o no un evento de rotura de bloque
* Ejemplo:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: lanza un rayo sin daño sobre el bloque que ejecuta el comando
* Sin ajustes de comando
* Ejemplo:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: rompe bloques en vetas con una sola rotura de bloque
* Ajustes del comando
  * `{maxVeinSize}`: (por defecto = 10) cantidad máxima de bloques que el comando puede romper
  * `[createBBEvent]`: (opcional) (por defecto = true) si genera o no un evento de rotura de bloque
  * `[smelt]`: (opcional) (por defecto = false) usa la lógica del comando SMELT. Si el bloque se puede fundir, suelta la versión fundida en su lugar. En caso contrario, soltará el bloque roto con normalidad.
  * `[runActivatorOnBlocks]`: (opcional) (por defecto = false) solo ExecutableItems. Si es true, los bloques de la veta también ejecutan el activador que lanzó el comando, consulta [runActivatorOnBlocks](#runactivatoronblocks). Mantén `createBBEvent` en true.
* Ejemplo:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:false runActivatorOnBlocks:false
- VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
```

:::info
`triggerEvent` no es un ajuste de VEIN\_BREAKER. La antigua plantilla del editor del juego escribía `VEIN_BREAKER maxVeinSize:10 triggerEvent:true`: la parte `triggerEvent:true` no tiene ningún efecto, puedes eliminarla. Para elegir si el comando genera eventos de rotura de bloque, usa `createBBEvent`.
:::

#### runActivatorOnBlocks

`runActivatorOnBlocks` es un ajuste de VEIN\_BREAKER, [MINEINCUBE](#mineincube) y [FARMINCUBE](#farmincube). Solo lo lee ExecutableItems.

* Sin él (por defecto `false`), los bloques rotos por el comando no ejecutan el activador que contiene el comando: esto es lo que evita un bucle de roturas de bloques. Los demás activadores de tus ítems (los que no tienen un comando de rotura) sí se ejecutan para estos bloques.
* Con `runActivatorOnBlocks:true`, cada bloque roto por el comando también ejecuta el activador que lo lanzó, como si el jugador lo hubiera roto: se aplican a cada bloque sus condiciones, `desactiveDrops` (sin drops vanilla), sus otros comandos (por ejemplo `DROPITEM`), su `usageModification` y las modificaciones de sus variables. `cancelEvent: true` también se aplica: entonces esos bloques no se rompen.
* El comando de rotura no se vuelve a ejecutar para estos bloques, así que no hay bucle.
* Los cooldowns, los usos por día y las funciones requeridas (`requiredItems`, `requiredExecutableItems`, `requiredMoney`...) no se comprueban para estos bloques: se comprueban y se consumen una sola vez, para el bloque que ejecutó el activador. De lo contrario, un cooldown detendría la veta tras el primer bloque.
* El activador recibe estos bloques a través de sus eventos de rotura de bloque: mantén `createBBEvent` (VEIN\_BREAKER) o `{createEvent}` (MINEINCUBE) en `true`, su valor por defecto. FARMINCUBE genera los eventos por sí mismo con `runActivatorOnBlocks:true`, salvo que su argumento `{event}` sea `false`.
* Estos eventos son roturas de bloque, por lo que solo funciona cuando el comando está en un activador PLAYER\_BLOCK\_BREAK.

Ejemplo: cada bloque de la veta suelta 1 diamante en lugar de sus drops vanilla y cuesta 1 uso.

```yaml
activators:
  activator0:
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
    usageModification: -1
    blockCommands:
    - VEIN_BREAKER maxVeinSize:16 runActivatorOnBlocks:true
    - DROPITEM DIAMOND 1
```
