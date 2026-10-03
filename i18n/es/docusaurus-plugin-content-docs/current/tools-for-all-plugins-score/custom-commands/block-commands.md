---
description: >-
  Guía de SPlugins sobre los Comandos de Bloque de ExecutableBlocks: sintaxis,
  ajustes y ejemplos de cada comando disponible.
source_hash: 86f65c32a7acba4b
translated_at: '2026-10-03T10:30:06.537Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de Bloque

:::tip
Compatibilidad "multi-mundo" para los comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Ejemplo, quieres invocar un Zombie en el mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder:

`execute in <<%block_world%>> run summon zombie 100 50 100`
:::

:::info
`In AROUND and MOB_AROUND commands, the true/false argument are not to be included in the command as they serve no purpose.`
:::

:::info
Activa **HIDE USAGE** cuando uses un número grande en **MINEINCUBE** ya que puede reducir el lag que suele ocurrir mucho cuando usas `MINEINCUBE 8` por ejemplo
:::

## Comandos personalizados

_Ordenados alfabéticamente_

### &lt;+&gt; (Conector de Comandos Around)

* Info: Te permite añadir más comandos en una sola línea de comando. Solo funcionará bien con `AROUND` y `MOB_AROUND`.
* Ejemplo: 

```text
- AROUND 10 execute at %around_target% run summon lightning_bolt ~ ~ ~ <+> SENDMESSAGE &You got smited!
```

```text
- MOB_AROUND 7 STUN_ENABLE <+> DELAY 5 <+> STUN_DISABLE
```

### AROUND

* Info: Apunta a jugadores en un radio específico y hace que ejecuten comandos
* Ajustes del comando
    * `{distance}`: Hasta qué distancia de radio el comando seleccionará jugadores
    * `{affectThePlayerThatActivatesTheActivator}`: true/false. Si es true, no afectará a quien lo haya activado.
      * Ejemplo de situación: Cuando ejecutas el activador de un ExecutableItem y ese activador soporta comandos de bloque,
      ignorará a la persona que activó el activador. Sin embargo, si esta opción es false, también te afectará a ti.
    * `{throughBlocks}`: afectará o no a los mobs que estén detrás de bloques
    * `{limit}`: La cantidad de objetivos que pueden verse afectados
    * `{sort}`: Útil para la opción de límite.
    * NEAREST: Selecciona las entidades más cercanas al origen.
    * RANDOM: Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
    * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en terreno salvaje o en el claim de quien lo activó (contexto del plugin GriefPrevention) (se actualizará pronto para comprobarse con otros plugins de claims)
    * `{command}`: El comando que ejecutarán los jugadores objetivo
* Ejemplo:

```
- AROUND 20 execute at %around_target% run summon lightning_bolt
```

* Esto invoca un rayo sobre los jugadores en un radio de 20 bloques alrededor del bloque pulsado.

#### Puedes añadir condiciones al comando AROUND

* La condición se ve así: AROUND \<distance> CONDITIONS(\<conditions>) \<command>
* Las condiciones funcionan con placeholders pero deben escribirse como %::\_::% en lugar de %\_%
  * Por ejemplo %::player\_health::%
* Para añadir MÁS de 1 condición usa "&&" entre las condiciones
* Ejemplo:

```
- AROUND 10 CONDITIONS(%::player_health::%>10&&%::player_name::%=2Ssomar) SENDMESSAGE &eclick
```

:::info
Ten en cuenta que la parte CONDITIONS() interpreta los placeholders que contiene con el jugador seleccionado por el comando AROUND. Así que lo que realmente ocurre en los placeholders de arriba es que comprueba si la vida del objetivo es mayor que 10 y si ese jugador seleccionado por el comando AROUND se llama "2Ssomar"
:::

### APPLY\_BONEMEAL

* Info: Aplica el mismo efecto que ocurre cuando un jugador usa harina de hueso en un bloque (cultivo)
* Sin ajustes de comando
* Ejemplo:

```yaml
- APPLY_BONEMEAL
```

### BREAK

* Info: Rompe el bloque objetivo
* Sin ajustes de comando
* Ejemplo:

```
 - BREAK
```

### CONTENT\_ADD

* Info: Añade un ítem a un contenedor
* Ajustes del comando
  * \{Item\}: Ítem a añadir
  * \[Amount]: Cantidad a añadir (por defecto es 1)
* Ejemplo:

```
- CONTENT_ADD STONE 1
- CONTENT_ADD EI:Myitem 1
- CONTENT_ADD EI:test{Usage:1,Variables:{var1:"My text",var2:2}} 1
```

### CONTENT\_CLEAR

* Info: Vacía un contenedor
* Sin ajustes de comando
* Ejemplo:

```
- CONTENT_CLEAR
```

### CONTENT\_REMOVE

* Info: Elimina un ítem de un contenedor
* Ajustes del comando
  * \{Item\}: Ítem a eliminar
  * \[Amount]: Cantidad a eliminar (por defecto es 1)
* Ejemplo:

```
- CONTENT_REMOVE STONE 1
```

:::info
No eliminará ExecutableItems aunque el material coincida. La única forma sería especificándolo con EXECUTABLEITEMS:`{id}`
:::

### CONSOLEMESSAGE

* Info: Envía un mensaje a la consola
* Ajuste del comando
  * `{text}`: Texto a enviar a la consola
* Ejemplo:

```yaml
- CONSOLEMESSAGE This is a debug message
```

### CHANGE\_BLOCK\_TYPE

* Info: Cambia el tipo de bloque del bloque seleccionado por el activador
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

* Info: Acelera el crecimiento de los cultivos alrededor del bloque
* Comando: CROPS\_GROWTH\_BOOST \{radius\} \{delay between two growths in ticks\} \{total duration in ticks\} \{chance 0-100\}
* Ejemplo:

```yaml
- CROPS_GROWTH_BOOST 5 10 100 50
```

### DROPEXECUTABLEITEM

* Info: Suelta un Executable Item en la ubicación del bloque
* Ajustes del comando
  * `{id}`: ID de ítem del ExecutableItem
  * `{quantity}`: La cantidad del ítem ejecutable que se soltará
  * `[owner]`: (Opcional) El propietario del ítem soltado (IGN o UUID del jugador)
  * `[itemdata]`: (Opcional) Ajustes de datos del ítem que contienen:
    * `Usage`: Establece el valor de uso
    * `Variables`: Establece variables personalizadas (formato: `{key:value}`)
    * `Durability`: Establece el valor de durabilidad
* Ejemplo:

```
- DROPEXECUTABLEITEM epicsnowball 1
- DROPEXECUTABLEITEM id:epicsnowball amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Suelta un Executable Block en la ubicación del bloque
* Ajustes del comando
  * `{id}`: ID de ítem del ExecutableBlock
  * `{quantity}`: La cantidad del bloque ejecutable que se soltará
* Ejemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DRAIN IN CUBE

* Info: Drena en un cubo de radio "r" la fuente de lava y/o agua
* Ajustes del comando
  * `{radius}`: El radio en bloques (9 es el límite), puedes saltarte el límite añadiendo un * antes de tu radio (bajo tu propia responsabilidad).
  * `{drainType}`: LAVA o WATER (no es necesario si quieres ambas)
* Ejemplo:

```
DRAININCUBE 4 WATER
DRAININCUBE *12 WATER
```

### DROPITEM

* Info: Suelta un ítem en la ubicación del bloque
* Ajustes del comando
  * `{material}`: El tipo de ítem.
    
<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material"
/>
  
* `{quantity}`: La cantidad del ítem que se soltará
* Ejemplo:

```
- DROPITEM BEDROCK 1
```

### EXPLODE

* Información: Rompe el bloque al que apuntaste y genera un TNT activado en esa ubicación
* Sin ajustes de comando
* Ejemplo:

```
- EXPLODE
```

### FARMINCUBE

* Información: Rompe todos los cultivos en un radio determinado
* Ajustes del comando
  * `{radius}`: Radio de lo grande que será el área de los cultivos que quieres romper. **(EL LÍMITE ES 9)**
  * `{drop}`: Si el bloque suelta loot o no
  * `{onlyMaxAge}`: Solo romperá cultivos con la edad máxima
  * `{replant}`: Si el cultivo se replantará o no
  * `{event}`: Si el cultivo generará el evento o no
* Ejemplo:

```
- FARMINCUBE 9 true true true false
```

### FERTILIZEINCUBE

* Info: Fertiliza los cultivos cercanos en 1 etapa de edad, es como aplicar harina de hueso pero hace crecer la planta el 100% de las veces.
* Ajuste del comando
  * `{radius}`: Radio de lo grande que será el área de los cultivos que quieres fertilizar **(EL LÍMITE ES 9)**
* Ejemplo:

```
- FERTILIZEINCUBE 9
```

### INLINE\_MINEINCUBE

* Info: Destruye bloques en un radio con forma rectangular. Cada bloque roto por este comando se cuenta como un evento de rotura de bloque del jugador.
* Ajustes del comando
  * `{radius}`: Radio de lo grande que será el radio del cubo
  * `{depth}`: Qué profundidad tendrá el rectángulo
  * `{drop}`: Si el bloque suelta loot o no
  * `{createBBEvent}`: Si el plugin generará un blockBreakEvent por cada bloque roto por el MINEINCUBE (por defecto true)
  * `[direction]`: (Opcional) (por defecto = la dirección del jugador) Si quieres forzar una dirección. 
    * Opciones:
      * `north/n/-z`: Norte
      * `south/s/+z`: Sur
      * `east/e/+x`: Este
      * `west/w/-x`: Oeste
      * `up`: Arriba
      * `down`: Abajo
      * `auto`: Usa la lógica de %player_direction_xz% de la Player Expansion de PlaceholderAPI para decidir las direcciones `N/W/S/E`. Para la lógica de Arriba/Abajo, dirección `UP` si el pitch es `<=` -45; dirección `DOWN` si el pitch `>=` 45. 
  * `[smelt]`: (Opcional) (por defecto = false) Usa la lógica del comando SMELT. Si el bloque es fundible, soltará la versión fundida en su lugar. De lo contrario, soltará el bloque roto normalmente.
* Ejemplo:

```
- INLINE_MINEINCUBE 1 4 true true
- INLINE_MINEINCUIBE radius:2 depth:4 drop:true createBBEvent:true direction:auto smelt:true
```

:::info
Soporta %player\_direction\_xz% de PlaceholderAPI - Player expansion\
Ejemplo: INLINE\_MINEINCUBE 1 1 true true %player\_direction\_xz%
:::

### LAUNCH

* Info: Hace que el bloque objetivo dispare proyectiles
* Ajustes del comando
  * `{projectile}`: el tipo de proyectil
  * `{speed}`: la velocidad del proyectil
  * `{despawnDelay}`: el retraso de desaparición en segundos (por defecto 10)
* Ejemplo:

```
- LAUNCH ARROW 2 5
```

:::info
El bloque debe ser direccional para que LAUNCH dispare el proyectil correctamente.

Ejemplo: AmethystCluster, Barrel, Bed, Beehive, Bell, BigDripleaf, CalibratedSculkSensor, Campfire, Chest, ChiseledBookshelf, Cocoa, CommandBlock, Comparator, CoralWallFan, DecoratedPot, Dispenser, Door, Dripleaf, EnderChest, EndPortalFrame, Furnace, Gate, Grindstone, Hopper, Ladder, Lectern, LightningRod, Observer, PinkPetals, Piston, PistonHead, RedstoneWallTorch, Repeater, SmallDripleaf, Stairs, Switch, TechnicalPiston, TrapDoor, TripwireHook, Vault, WallHangingSign, WallSign, WallSkull
:::

### MINEINCUBE

* Info: Destruye bloques en un radio con forma de cuboide. Cada bloque roto por este comando se cuenta como un evento de rotura de bloque del jugador.
* Ajustes del comando
  * `{radius}`: Radio de lo grande que será el área de los cultivos que quieres romper **(EL LÍMITE ES 9)**
  * `{droploot}`: Si el bloque suelta loot o no
  * `{createEvent}`: Si el plugin generará un blockBreakEvent por cada bloque roto por el MINEINCUBE (por defecto true)
  * `{offsetBreak}`: Si el área de bloques empieza a romperse desde el bloque roto, o desde el "centro" para que el área funcione realmente con el "radio" seleccionado (por defecto false)
  * `[smelt]`: (Opcional) (por defecto = false) Usa la lógica del comando SMELT. Si el bloque es fundible, soltará la versión fundida en su lugar. De lo contrario, soltará el bloque roto normalmente.
* Ejemplo:

```
- MINEINCUBE 4 true false
- MINEINCUBE radius:3 droploot:true createEvent:true offsetBreak:false smelt:false
```

### MINEINSPHERE

* Info: Destruye bloques en un radio con forma esférica. Cada bloque roto por este comando se cuenta como un evento de rotura de bloque del jugador.
* Ajustes del comando
  * `{radius}`: Radio de la esfera
  * `{drop}`: Si el bloque suelta loot o no
  * `{create blockBreakEvent}`: Si el plugin generará un blockBreakEvent por cada bloque roto por el comando
  * `[smelt]`: (Opcional) (por defecto = false) Usa la lógica del comando SMELT. Si el bloque es fundible, soltará la versión fundida en su lugar. De lo contrario, soltará el bloque roto normalmente.
* Ejemplo:

```
- MINEINSPHERE 4 true false
```

### MOB\_AROUND

* Info: Apunta a entidades en un radio específico y hace que ejecuten comandos
* Ajustes del comando
  * `{distance}`: Hasta qué distancia de radio el comando seleccionará entidades
  * `{displayMsgIfNoEntity}`: (true o false) Para notificar al usuario del ítem si no logró apuntar a ningún mob.
    * **Pon en false para ocultar el mensaje**
  * `{throughBlocks}`: afectará o no a los mobs que estén detrás de bloques
  * `{safeDistance}`: Si la distancia entre el objetivo y quien lo lanza es menor o igual al valor de safeDistance, el objetivo no se verá afectado.
  * `{offsetYaw}`: La dirección de yaw que quieres que tenga tu desplazamiento (independiente del valor de yaw del origen)
  * `{offsetPitch}`: La dirección de pitch que quieres que tenga tu desplazamiento (independiente del valor de yaw del origen)
  * `{offsetDistance}`: Tras calcular el offsetYaw y offsetPitch, usando el valor de esto, moverá la posición/centro del comando AROUND desde la ubicación xyz del origen.
  * `{limit}`: La cantidad de objetivos que pueden verse afectados
  * `{sort}`: Útil para la opción de límite.
    * NEAREST: Selecciona las entidades más cercanas al origen.
    * RANDOM: Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en terreno salvaje o en el claim de quien lo activó (contexto del plugin GriefPrevention) (se actualizará pronto para comprobarse con otros plugins de claims)
  * `{nonliving}`: true/false. Si es true, apuntará también a otras entidades como flechas y soportes de armadura. Es probable que se ignore cualquier bug que ocurra al ejecutar comandos de entidad con este argumento activado, debido al aumento de alcance.
  * Puedes poner en BLACKLIST o WHITELIST entidades añadiendo una de estas en cualquier parte del comando:
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

Soporta NBT Tags, así que puedes añadir por ejemplo algo como: `ZOMBIE{IsBaby:1}`

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

* Info: Mueve todas las entidades por encima del bloque en la dirección del bloque (para entenderlo mejor, es como lo que hace una cinta transportadora)
* Sin ajustes de comando
* Ejemplo:

```
- MOVE
```

:::info
**Este comando solo funciona en bloques direccionales.**
:::

### MOB\_NEAREST

* Info: Apunta al mob más cercano del jugador/objetivo.
* Ajustes del comando
    * `{max accepted distance}`: Distancia máxima aceptada a la que puede estar la "entidad".
    * `{command(s)}`: El comando que se ejecutará
* Ejemplo:

Daña al jugador más cercano

```
- MOB_NEAREST 10 DAMAGE 5
```

### NEAREST

* Info: Apunta al jugador más cercano del jugador/objetivo.
* Ajustes del comando
    * `{max accepted distance}`: Distancia máxima aceptada a la que puede estar el "objetivo".
    * `{command}`: El comando que se ejecutará
* Ejemplo:

Daña al jugador más cercano

```
- NEAREST 8 DAMAGE 5
```

### OPENDOOR

* Abre o cierra un bloque que se pueda abrir.
* Sin ajustes de comando
* Ejemplo:

```
- OPENDOOR
```

### OPMESSAGE

* Info: Envía un mensaje a los jugadores OP conectados y a la consola
* Ajuste del comando
  * `{text}`: Texto a enviar
* Ejemplo:

```
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Genera partículas en la ubicación del bloque
* Ajustes del comando
  * `{type}`: El tipo de partícula.

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"
  title="Particles"
/>

* `{quantity}`: La cantidad de partículas que aparecerán
* `{offset}`: El radio del área donde pueden aparecer las partículas en la ubicación del bloque
* `{speed}`: Lo rápidas o grandes que serán las partículas
* Ejemplo:

```
- PARTICLE COMPOSTER 10 0.1 0.5
```

### PLACELIQUID
* Info: Coloca líquido en una ubicación. Si hay un caldero en esa ubicación, lo llena. Si hay un bloque que puede contener agua (waterloggable), lo inunda. De lo contrario, no hace nada
* Ajustes del comando
  * `{type}`: Tipo de líquido (por defecto: WATER). Opciones: WATER/LAVA
* Ejemplo:

```
- PLACELIQUID type:WATER
- PLACELIQUID type:LAVA
```

### PLANT\_IN\_SQUARE

* Info: Planta en cuadrado respecto al bloque seleccionado.
* Ajustes del comando
  * `{radius}`: Radio del cuadrado
  * `{takeFromInv}`: Por defecto true, toma las semillas del inventario del jugador, de lo contrario genera las semillas
  * `{acceptEI}`: Por defecto false, acepta EI para las semillas
  * `{cropType}`: por defecto se aceptan todas las semillas (toma las semillas según su orden en el inventario)
    * FARMLAND - WHEAT, CARROTS, BEETROOTS, POTATOES, SWEET\_BERRY\_BUSH, MELON\_STEM, PUMPKIN\_STEM, TORCHFLOWER\_CROP
    * SOUL SAND - NETHER\_WART
    * JUNGLE WOOD/LOG - COCOA
  * `{isCube}`: Convierte el área de plantado de cuadrado a cubo. Útil para plantar cocoa en área
* Ejemplo:

```
- PLANT_IN_SQUARE 3
```

### REMOVEBLOCK

* Info: Elimina el bloque, sin drops, solo lo elimina
* Sin ajustes de comando
* Ejemplo:

```
- REMOVEBLOCK
```

### SELL\_CONTENT

* Info: Vende todo el contenido de un cofre / horno / cualquier bloque que tenga un inventario.
* Ajustes del comando
  * `{price_boost}`: Multiplicador flotante para los ítems vendidos. Por ejemplo, si el valor aquí es 2, los ítems vendidos te darán el doble del precio de venta.
  * `{deleteUnsellable}`: Valor booleano para definir si debe eliminar los ítems que no se pueden vender
* Ejemplo:

```
- SELL_CONTENT priceBoost:1.0 deleteUnsellable:false
```

:::info
Requiere ShopGUIPlus (prioridad) y Vault y precios de CMI
:::

### SETBLOCK

* Info: Reemplaza el bloque objetivo con otro bloque
* Ajuste del comando
  * `{material}`: El material a establecer
* Ejemplo:

```
- SETBLOCK STONE
```

### SETTEMPBLOCK

* Info: Reemplaza el bloque objetivo con un bloque temporal.
* Ajustes del comando
  * `{material}`: El material a establecer
  * `{time}`: El tiempo en ticks (20 ticks = 1 seg)
* Ejemplo:

```
- SETTEMPBLOCK STONE 100
```

:::warning
No reemplaza bloques que tengan datos extra (inventario, rotación, etc.)
:::

### SET\_TEMP\_BLOCK\_POS

* Info: Reemplaza el bloque objetivo con un bloque temporal
* Comando: SET\_TEMP\_BLOCK\_POS x:\{x\} y:\{y\} z:\{z\} material:\{material\} time:\{\} bypassProtection:\{boolean\} whitelistCurrentBlock:\{list of materials\}
* Ejemplo:

```
- SET_TEMP_BLOCK_POS x:0.0 y:0.0 z:0.0 material:STONE time:10 bypassProtection:true whitelistCurrentBlock:SAND,DIRT
```

:::warning
No reemplaza bloques que tengan datos extra (inventario, rotación, etc.)
:::

### SETBLOCKPOS

* Info: Coloca bloques en una posición determinada
* Ajustes del comando
  * `{x}`: La posición X del bloque
  * `{y}`: La posición Y del bloque
  * `{z}`: La posición Z del bloque
  * `{material}`: El tipo de bloque
  * `{bypassWG}`: Si WorldGuard interferirá o no con la colocación del bloque
* Ejemplo:

```
- SETBLOCKPOS %block_x_int% %block_y_int% %block_z_int% STONE true
```

### SETEXECUTABLEBLOCK

* Info: Comando de setblock pero para Executable Blocks
* Ajustes del comando
  * `{id}`: ID del Executable Block
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: El mundo en el que quieres que esté el Executable Block
  * `{replace}`: Si quieres reemplazar un bloque que ya existe en esa ubicación o no
  * `{bypassProtection}`: (Por defecto false) Si quieres reemplazar el bloque incluso si hay una protección de terreno de un plugin ahí. 
  * `[ownerUUID]`: (Opcional) (por defecto = sin propietario) El UUID del jugador que sería el propietario del eb
* Ejemplo:

```
- SETEXECUTABLEBLOCK BLOCKS_001_STONE %block_x_int% %block_y_int% %block_z_int% %block_world% true
```

### SILK\_SPAWNER

* Info: Recoge el spawner implicado en el evento
* Sin ajustes de comando
* Ejemplo:

```
- SILK_SPAWNER
```

:::info
El comando SILK\_SPAWNER solo es compatible con los siguientes plugins:

* RoseStacker
* WildStacker

Y por supuesto los spawners vanilla.
:::

### SMELT

* Info: Funde el bloque objetivo soltando el ítem fundido, por ejemplo iron\_ore -> iron\_ingot, soporta fortune, si no se puede fundir no pasará nada. El loot del bloque no cambiará.
* Ajuste del comando
  * `[generateEvent]`: (Opcional) (por defecto = true) Si genera o no un evento de rotura de bloque
* Ejemplo:

```
- SMELT 
- SMELT false
```

### STRIKELIGHTNING

* Info: Lanza un rayo sin daño en el bloque que ejecuta el comando
* Sin ajustes de comando
* Ejemplo:

```
- STRIKELIGHTNING
```

### VEIN\_BREAKER

* Info: Rompe bloques en vetas con una sola rotura de bloque
* Ajustes del comando
  * `{maxVeinSize}`: Cantidad máxima de bloques que el comando puede romper
  * `[createBBEvent]`: (Opcional) (por defecto = true) Si genera o no un evento de rotura de bloque
  * `[smelt]`: (Opcional) (por defecto = false) Usa la lógica del comando SMELT. Si el bloque es fundible, soltará la versión fundida en su lugar. De lo contrario, soltará el bloque roto normalmente.
* Ejemplo:

```
- VEIN_BREAKER 20
- VEIN_BREAKER maxVeinSize:10 createBBEvent:true smelt:true
```
