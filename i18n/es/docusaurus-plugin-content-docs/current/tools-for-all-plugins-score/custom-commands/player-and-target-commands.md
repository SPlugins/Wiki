---
description: >-
  Guía de SPlugins sobre comandos de jugador y objetivo: lista completa de
  comandos personalizados, ajustes y ejemplos de uso.
source_hash: 0e9aab386cb7c1fd
translated_at: '2026-10-03T10:29:02.748Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';
import CustomTag from '@site/src/components/CustomTag';

# Comandos de Jugador y Objetivo

:::warning
Debes saber que, por defecto, todos los comandos los ejecuta la consola, así que si quieres que el jugador ejecute el comando añade [**SUDO**](player-and-target-commands.md#sudo) o [**SUDO\_OP**](player-and-target-commands.md#sudo_op) antes.

_(Haz clic en SUDO o SUDO\_OP para más información)_

\
**No uses esta opción para comandos vanilla y CUSTOM COMMANDS, para usar comandos vanilla correctamente ve a las FAQ y "How to use vanilla commands",**
:::

:::tip
Compatibilidad "multi-mundo" para los comandos vanilla.

`execute in <<NAME`_`OF`_`YOUR_WORLD>> run ...`

Ejemplo, quieres invocar un Zombie en el mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Ejemplo con un placeholder`:`

`execute in <<%player_world%>> run summon zombie 100 50 100`
:::

:::info
¿Quieres mantener la forma HEX bruta en tu comando? Añade la etiqueta **BRUT\_HEX** en tu comando. Funciona en cualquier parte de la línea de comando, pero se recomienda ponerla en la primera parte del cmd para que sea menos confuso
:::

:::info
Por defecto todos los comandos no se ejecutan si el jugador está desconectado. (los comandos se ejecutarán en la conexión del jugador)

Pero puedes añadir la etiqueta **\[\<OFFLINE>]** en tus comandos para eliminar esta restricción.

_(Muy útil para comandos de broadcast, boost, giveall, etc.)_

Ejemplo:

* \[\<OFFLINE>] broadcast hello !
* \[\<OFFLINE>] execute at %player% run setblock %block\_x\_int%+3 %block\_y\_int%-1 %block\_z\_int%-14 minecraft\:air
:::

:::info
Puedes usar \[\<CLEAR\_IF\_DISCONNECT>] si quieres limpiar comandos si el jugador se desconecta

Ejemplo:

* \[\<CLEAR\_IF\_DISCONNECT>] say meow
:::

## Comandos mixtos

Además de la siguiente lista de comandos también puedes usar:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Estos comandos se pueden usar en los comandos relacionados con jugador O en los comandos relacionados con entidad.

## Comandos personalizados

_Ordenados alfabéticamente_

### ABSORPTION

* Info: Da efecto de absorción al jugador
* Ajustes del comando:
  * `{amount}`: cantidad de medios corazones de absorción. Admite valores negativos para eliminar.
  * `{time}`: duración del efecto en ticks. Déjalo vacío o en "0" si quieres que sea infinito.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ABSORPTION amount:5 time:200 # Gives the player absorption
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ABSORPTION amount:5 time:200 # Gives the target absorption
```

:::warning
¡Tu valor de atributo MAX\_ABSORPTION debe estar por encima de 0!

Comprueba el valor escribiendo: /attribute PLAYER\_NAME minecraft:max\_absorption base get

Y puedes aumentarlo escribiendo: /attribute PLAYER\_NAME minecraft:max\_absorption base set 20
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    # You can do that to temporary up the max_absorption value of the player
    - minecraft:attribute %player% minecraft:max_absorption base set 5**
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    # You can do that to temporary up the max_absorption value of the target
    - minecraft:attribute %player% minecraft:max_absorption base set 5
    - ABSORPTION amount:5 time:200
    - DELAY_TICK 200
    - minecraft:attribute PLAYER_NAME minecraft:max_absorption base set 0
```

### ACTIONBAR

* Info: Muestra la actionbar con tu texto + el tiempo restante (59, 58, 57...).
* Ajustes del comando:
  * `{text}`: Tu texto a mostrar
  * `{delay}`: Duración en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10` # Sends an ACTIONBAR to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - `ACTIONBAR &6Hey &e%player% ! 10`# Sends an ACTIONBAR to the target
```

### ADD\_ITEM\_ATTRIBUTE

* Info: Añade un atributo a un ítem como operación de suma o resta.
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. -1 para mainhand
  * `{attribute}`: El atributo que quieres añadir. [Lista de Attributes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: El valor para la operación
  * `{equipmentSlot}`: El slot donde se habilitará el atributo. [Lista de EquipmentSlot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
  * `{mode}`: selecciona el modo de adición
    * `mode:ADD` (Añade el atributo al ítem)
    * `mode:OVERRIDE` (Elimina los atributos actuales del mismo tipo del ítem + Añade el atributo al ítem)
    * `mode:STACK` (Se acumula con el atributo presente en el ítem, si no existe ninguno lo añade)
  * affectDefaultAttributes: true o false # Cuando es true, el modo OVERRIDE también sobrescribirá los atributos predeterminados, y para el MODE stack permite acumularse con los atributos predeterminados (verde)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:ADD # Add this attribute to the player
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ATTACK_DAMAGE value:1.0 equipmentSlot:HAND mode:STACK affectDefaultAttributes: true # Add this attribute to the target
```

### ADD\_ITEM\_ENCHANTMENT

* Info: Añade un encantamiento a un ítem en un slot específico con cierto nivel
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. -1 para mainhand
  * `{enchantment}`: El encantamiento que quieres que se aplique, no uses espacios, usa los encantamientos de minecraft, no los de visualización. [Enchantments](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html)
  * `{level}`: El nivel del encantamiento
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1 
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ADD_ITEM_ENCHANTMENT slot:-1 enchantment:unbreaking level:1
```

### ADD\_ITEM\_LORE

* Info: Añade una línea de lore
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. -1 para mainhand
  * `{text}`: El texto para la nueva línea de lore
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %player%
  activator1: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of target
    playerCommands:
    - ADD_ITEM_LORE slot:%slot% text:&7Item of %target% added by %player%
```

### BOOTS

* Info: Pone el ítem de tu mano principal en tu slot de botas. (No funcionará si el ítem tiene "Curse of Binding")
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOOTS
```

### BOSSBAR

* Info: Crea un texto de bossbar durante un tiempo determinado.
* Ajustes del comando:
  * `{time}`: La duración de la bossbar en ticks
  * `{color}`: Color del texto de la bossbar
  * `{text}`: texto en la bossbar (Usa guiones bajos "_" para añadir espacios en tu argumento.)
  * `{count}`: cuántas veces quieres que cuente
    * si esta opción está presente, el argumento de tiempo ya no importará
  * `{countTicks}`: true/false si quieres que cuente en ticks o en segundos
  * `{countOrder}`:
    * ascending: hace que el temporizador cuente desde 0
    * descending: hace que el temporizador cuente desde el valor dado
  * `{overrideMode}`:
    * NO\_OVERRIDE: No sobrescribe las otras Bossbars
    * OVERRIDE\_ALL: Sobrescribirá todas las demás BossBars enviadas por SCore
    * OVERRIDE\_SAME\_TEXT: Sobrescribirá las demás Bossbars enviadas por SCore que contengan el mismo texto
  * `{barProgress}`: (por defecto = 1.0) El progreso inicial de la barra (0.0 a 1.0). Funciona tanto con barras estáticas como con cuenta atrás (solo cuenta atrás descendente)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BOSSBAR time:200 color:RED text:This_is_a_bossbar text
    - BOSSBAR time:20 color:BLUE text:Hello_world count:50 countTicks:true countOrder:ascending
    - BOSSBAR time:200 color:RED text:This is a bossbar text overrideMode:OVERRIDE_SAME_TEXT
    - BOSSBAR time:200 color:GREEN text:Half filled bar barProgress:0.5
```

### CANCEL\_PICKUP

* Info: Desactiva la recogida de ítems en un jugador durante un tiempo determinado
* Ajustes del comando:
  * `{time}`: La duración en ticks de cuánto tardará el jugador en poder recoger ítems de nuevo
  * `{material}`: Si se establece, el jugador no podrá recoger solo el material especificado; si es null, no podrá recoger nada
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CANCEL_PICKUP time:600
    - CANCEL_PICKUP time:600 material:stone
```

:::info
La única forma de RESETEAR este comando después de establecer un tiempo en ticks es recargando o reiniciando el servidor. Si quieres una forma de resetearlo, sugiérelo en el canal #suggestions de Discord.
:::

### CHAT

* Info: Envía un mensaje del jugador al chat
* Ajustes del comando:
  * `{text}`: Texto a enviar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHAT &6Hello !!
```

### CHESTPLATE

* Info: Pone el ítem de tu mano principal en tu slot de pechera. (No funcionará si el ítem tiene "Curse of Binding")
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CHESTPLATE
```

### CLOSE\_INVENTORY

* Info: Cierra el inventario al jugador
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CLOSE_INVENTORY
```

### CROPS\_GROWTH\_BOOST

* Info: Impulsa el crecimiento de los cultivos a tu alrededor
* Ajustes del comando:
  * `{radius}`: El radio del impulso (por defecto 5)
  * `{delay}`: El retraso en ticks entre cada impulso de crecimiento
  * `{duration}`: La duración en ticks del impulso total
  * `{chance}`: La probabilidad de crecimiento que tienen los bloques cuando se aplica el impulso
* Ejemplo:

El siguiente comando generará 20 impulsos de crecimiento cada 10 ticks.\
Todos los bloques dentro del radio tendrán un 50% de probabilidad de crecer cuando se aplique un impulso.

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CROPS_GROWTH_BOOST radius:5 delay:10 durations:200 chance:50
```

### DISABLE\_FLY\_ACTIVATION

* Info: Niega el uso del vuelo a un jugador (deslizarse con Elytra no se considera volar)
* Ajuste del comando:
  * `{time}`: La duración en segundos del efecto
* Ejemplo: (el comando siguiente desactiva la activación del vuelo durante 1 minuto)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_FLY_ACTIVATION time:60
```

### DISABLE\_GLIDE\_ACTIVATION

* Info: Niega el uso del elytra durante un periodo de tiempo
* Ajustes del comando:
  * `{time}`: La duración en segundos del efecto
* Ejemplo: (el comando siguiente desactiva el uso del elytra durante 20 segundos)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DISABLE_GLIDE_ACTIVATION time:20
```

### EICOOLDOWN

* Info: Aplica un cooldown a un ExecutableItems específico
* Ajustes del comando:
  * `{PLAYER}`: El jugador objetivo del comando
  * `{ID}`: El id del ExecutableItem o "all" para todos los ExecutableItems
  * `{DURATION}`: La cantidad de tiempo
  * `{boolean TICKS}`: (Por defecto: false) Si es false, el valor del argumento de duración se verá en segundos. Si es true, se verá en ticks.
  * `[optional activator id]`: (Opcional) Puedes aplicarlo a un id de activador específico
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EICOOLDOWN %player% thisismyid 10 true # For the ExecutableItem thisismyid 
    - EICOOLDOWN %player% all 10 true # For all ExecutableItems
```

### EBCOOLDOWN

* Info: Aplica un cooldown a un ExecutableBlocks específico
* Ajustes del comando:
  * `{PLAYER}`: El jugador objetivo del comando
  * `{ID}`: El id del ExecutableBlocks o "all" para todos los ExecutableBlocks
  * `{DURATION}`: La cantidad de tiempo
  * `{boolean TICKS}`: (Por defecto: false) Si es false, el valor del argumento de duración se verá en segundos. Si es true, se verá en ticks.
  * `[optional activator id]`: (Opcional) Puedes aplicarlo a un id de activador específico
* Ejemplo: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EBCOOLDOWN %player% thisismyid 10 true # For the ExecutableBlock thisismyid 
    - EBCOOLDOWN %player% all 10 true # For all ExecutableBlocks
```

### EECOOLDOWN

* Info: Aplica un cooldown a un ExecutableItems específico
* Ajustes del comando:
  * `{PLAYER}`: El jugador objetivo del comando
  * `{ID}`: El id del ExecutableEvent o "all" para todos los ExecutableEvents
  * `{DURATION}`: La cantidad de tiempo
  * `{boolean TICKS}`: (Por defecto: false) Si es false, el valor del argumento de duración se verá en segundos. Si es true, se verá en ticks.
  * `[optional activator id]`: (Opcional) Puedes aplicarlo a un id de activador específico
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - EECOOLDOWN %player% thisismyid 10 true # For the ExecutableEvent thisismyid 
    - EECOOLDOWN %player% all 10 true # For all ExecutableEvents
```

### FIREWORK\_BOOST
* Info: Si este comando se ejecuta mientras el lanzador está deslizándose con el elytra, generará un cohete de fuegos artificiales de forma similar a cuando los jugadores
hacen clic derecho con un fuego artificial en la mano mientras se deslizan para ganar distancia.
* Ajustes del comando:
  * `{duration}`: La duración de vida del fuego artificial en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FIREWORK_BOOST 20
```

### FLY OFF

* Info: Desactiva el vuelo creativo en el jugador y, si el vuelo del jugador se desactiva en el aire, el jugador será teletransportado al posible bloque bajo el jugador.
* Ajuste del comando:
  * `[teleportOnTheGround]`: (Opcional) (por defecto = true) Si el jugador será teletransportado al suelo o no
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_OFF teleportOnTheGround:true
```

### FLY\_ON

* Info: Da al jugador vuelo creativo
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FLY_ON
```

### FORMAT\_ENCHANTMENTS

* Info: Formatea todos los encantamientos en tu lore
* Ajustes del comando:
  * `{slot}`: El slot objetivo (-1 para mainhand)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - FORMAT_ENCHANTMENTS %slot%
```

![](https://media.ssomar.com/m/docs-img-image-393.png) -> ![](https://media.ssomar.com/m/docs-img-image-382.png)

### GIVE\_MONEY

* Info: Da dinero a un jugador
  * Requiere el plugin Vault
* Ajustes del comando:
  * amount: la cantidad a dar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GIVE_MONEY amount:50.0
```

### GRAVITY\_DISABLE

* Info: Detiene la gravedad para el jugador, impidiendo que el jugador "caiga" o suba.
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### GRAVITY\_ENABLE

* Info: Activa de nuevo la gravedad para el jugador, así el jugador caerá normalmente.
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - GRAVITY_DISABLE
    - DELAY 5
    - GRAVITY_ENABLE
```

### HEAD

* Info: Pone el ítem de tu mano principal en tu slot de cabeza. (No funcionará si el ítem tiene "Curse of Binding")
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - HEAD
```

### JOBS\_MONEY\_BOOST

* Info: Aumenta temporalmente el dinero obtenido. Para [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Ajustes del comando:
  * `{multiplier}`: Valor multiplicador
  * `{time}`: Duración del impulso en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_MONEY_BOOST multiplier:2.0 time:10
```

:::info
El multiplicador no afecta a los valores de la actionbar de Jobs. El multiplicador de este comando solo se aplica cuando el plugin Jobs decide incrementar el dinero, xp y puntos obtenidos.

Si se ejecuta varias veces con suficiente duración en cada impulso, todos los impulsos en curso pueden acumularse.
:::

### JOBS\_XP\_BOOST

* Info: Multiplica temporalmente las ganancias de XP del plugin Jobs. Para [Jobs reborn](https://www.spigotmc.org/resources/jobs-reborn.4216/)
* Ajustes del comando:
  * `{multiplier}`: Valor multiplicador de XP (por ejemplo, 2.0 para XP doble)
  * `{time}`: Duración en segundos antes de que el impulso caduque
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - JOBS_XP_BOOST multiplier:2.0 time:10
```

:::info
El multiplicador no afecta a los valores de la actionbar de Jobs. El multiplicador de este comando solo se aplica cuando el plugin Jobs decide incrementar el dinero, xp y puntos obtenidos.

Si se ejecuta varias veces con suficiente duración en cada impulso, todos los impulsos en curso pueden acumularse.
:::

:::info
Este comando admite acumular varios impulsos de forma multiplicativa.
:::

### LAUNCH

* Info: Lanza un proyectil personalizado. [Referencia](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type)
* Lista: 
<details>
<summary>Tipos de proyectil</summary>
* ARROW
* DRAGONFIREBALL
* EGG
* ENDERPEARL
* FIREBALL
* LARGEFIREBALL
* LINGENRINGPOTION
* LLAMASPIT
* SHULKERBULLET (Solo disponible para 1.12+)
* SIZEDFIREBALL
* SNOWBALL
* TRIDENT
* WITHERSKULL
</details>

* Ajustes del comando:
  * `{projectile}`: el tipo de proyectil o el ID de proyectil personalizado de SCore ( [Referencia](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[angleRotationVertical]`: (Opcional) (por defecto = 0) <CustomTag type="version" version="1.14" /> (en grados) Define la dirección en la que se lanzará la entidad
  * `[angleRotationHorizontal]`: (Opcional) (por defecto = 0) <CustomTag type="version" version="1.14" /> (en grados) Define la dirección en la que se lanzará la entidad
  * `[velocity]`: (Opcional) (por defecto = 1) Para personalizar la velocidad del proyectil
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:My_Custom_Proj velocity:5
```

* Ejemplo de múltiples disparos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LAUNCH projectile:WITHERSKULL
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:20
    - LAUNCH projectile:WITHERSKULL angleRotationVertical:-20
```

:::info
Si usas el LAUNCH COMMAND en el activador PLAYER\_LAUNCH\_PROJECTILE, y el proyectil ha sido lanzado por un arco, el proyectil lanzado con el comando LAUNCH personalizado mantendrá la misma velocidad.
:::

:::info
Si usas SHULKERBULLET como tipo de proyectil, tomará el cursor del lanzador como objetivo. De lo contrario, apuntará a la entidad más cercana al lanzador.
:::

:::warning
Problemas actuales:  
Los Shulker Bullets no se pueden usar en 1.9.4, 1.10.2, 1.11.2. A partir de 1.12 no debería haber complicaciones, aparte de tener que crear un proyectil de SCore para dar al Shulker Bullet una velocidad de vuelo adecuada.
:::

### LEGGINGS

* Info: Pone el ítem de tu mano principal en tu slot de pantalones. (No funcionará si el ítem tiene "Curse of Binding")
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LEGGINGS
```

### LOCATED\_LAUNCH

* Info: Lanza un proyectil en una ubicación específica
* Ajustes del comando:
  * `{projectileType}`: el tipo de proyectil o el ID de proyectil personalizado de SCore ( [Referencia](/ExecutableItems/wiki/%E2%9E%A4-Custom-Projectiles#type) )
  * `[frontValue]`: (Opcional) (por defecto = 0) positivo=delante, negativo=detrás - Posición delante/detrás. Por ejemplo, si quieres generar el proyectil 5 bloques lejos de donde estás mirando, usa un valor positivo más alto
  * `[rightValue]`: (Opcional) (por defecto = 0) derecha=positivo, negativo=izquierda - Posición derecha/izquierda. Por ejemplo, si quieres que el proyectil se genere a tu izquierda, usa un valor negativo más alto
  * `[yValue]`: (Opcional) (por defecto = 0) A qué altura por encima de tu posición Y se generará el proyectil.
  * `[velocity]`: (Opcional) (por defecto = 1) A qué velocidad volará el proyectil. Pon el valor en 0 para que el proyectil caiga hacia abajo al generarse.
  * `[angleRotationVertical]`: (Opcional) (por defecto = 0) <CustomTag type="version" version="1.14" /> puedes añadir una rotación vertical a tu proyectil (en grados)
  * `[angleRotationHorizontal]`: (Opcional) (por defecto = 0) <CustomTag type="version" version="1.14" /> puedes añadir una rotación horizontal a tu proyectil (en grados)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - LOCATED_LAUNCH projectile:ARROW frontValue:0 rightValue:0 yValue:0 velocity:1 angleRotationVertical:0 angleRotationHorizontal:0
```

### MINECART\_BOOST

* Info: Te impulsa cuando viajas en una minecart (efecto similar a cuando subes por un rail con energía)
* Ajuste del comando:
  * `{boost}`: La velocidad del impulso
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MINECART_BOOST boost:10
```

### MIX\_HOTBAR

* Info: mezcla la hotbar del jugador
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MIX_HOTBAR
```

### MODIFY\_DURABILITY

* Modifica la durabilidad de un ítem específico en un slot específico
* Ajustes del comando:
  * `{modification}`: Valor positivo para aumentar la durabilidad. Valor negativo para disminuir la durabilidad
  * `{slot}`: El número de slot del ítem (-1 para el slot sostenido)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{supportUnbreaking}`: (true o false) Si admite el encantamiento unbreaking o no
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MODIFY_DURABILITY modification:-1 slot:%slot% supportUnbreaking:true
```

### OPEN\_CHEST

* Info: Abre un cofre o barril en la ubicación seleccionada
* Ajustes del comando:
  * `{world}`: Nombre del mundo
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `[bypassProtections]`: (Opcional) (por defecto = false) Si abrirá el cofre de todos modos aunque esté protegido
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPENCHEST VanillaWorld 100 100 100
```

### OPEN\_ENDERCHEST

* Info: Abre el ender chest para el jugador que ejecuta el activador
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_ENDERCHEST
```

### OPEN\_WORKBENCH

* Info: Abre una mesa de trabajo para el jugador que ejecuta el activador
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OPEN_WORKBENCH
```

### OXYGEN

* Info: Da oxígeno al objetivo
* Ajuste del comando:
  * `{time}`: La duración en ticks de oxígeno que quieres dar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - OXYGEN time:200
```

### PROJECTILE\_CUSTOMDASH1

* Info: Similar a CUSTOMDASH1 pero el xyz será reemplazado por las coordenadas xyz del proyectil más cercano a ti.
* Ajustes del comando:
  * `{fallDamage}`: Si recibirás daño por caída o no (si olvidas establecer si es true o false, por defecto será false. Para recibir daño por caída, pon esto en true)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - PROJECTILE_CUSTOMDASH1 fallDamage:false
```

### REGAIN\_FOOD

* Info: Te da una cantidad específica de comida/saturación
* Ajustes del comando:
  * `{amount}`: La cantidad de puntos de saturación que quieres ganar. Usa valores negativos para reducir puntos de hambre
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_FOOD amount:5
```

### REGAIN\_MAGIC

* Info: Da al jugador valores específicos de la magia de un [Ecoskills](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/) específico.  
* Ajustes del comando:
  * `{ecoSkillsMagicID}`: El ID de la magia de Ecoskills.
  * `{amount}`: La cantidad a obtener.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_MAGIC ecoSkillsMagicID:mana amount:15
```

:::info
Admite valores negativos.
:::

### REGAIN\_SATURATION

* Info: Te da una cantidad específica de saturación
* Ajustes del comando:
  * `{amount}`: La cantidad de saturación que puedes dar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REGAIN_SATURATION amount:10
```

### REMOVE\_ENCHANTMENT

* Info: Elimina un encantamiento de un slot
* Ajustes del comando:
  * `{slot}`: Slot del que eliminar el encantamiento (-1 para el slot sostenido)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{enchantment}`: Encantamiento a eliminar (ALL para todos los encantamientos)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_ENCHANTMENT slot:-1 enchantment:ALL
```

### REMOVE\_LORE

* Info: Elimina una línea de lore
* Ajustes del comando:
  * `{slot}`: Slot del que eliminar el lore (-1 para el slot sostenido)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{line}`: La línea que quieres eliminar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REMOVE_LORE slot:1 line:5
```

### REPLACE\_BLOCK

* Info: Reemplaza el bloque al que está mirando el jugador por uno diferente
* Ajustes del comando:
  * `{material}`: ID de bloque (se admiten block states)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - REPLACE_BLOCK STONE_BRICKS
    - REPLACE_BLOCK WATER[LEVEL=0]
```

### SEND\_BLANK\_MESSAGE

* Info: Te envía un mensaje en blanco
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_BLANK_MESSAGE
```

### SEND\_MESSAGE

* Info: Te envía un mensaje
  * Compatible con [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/)
* Ajustes del comando:
  * `{message}`: el mensaje que quieres enviar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    playerCommands:
    - SEND_MESSAGE text:&fThis is a somewhat random text.
    - SEND_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```

### SEND\_CENTERED\_MESSAGE

* Info: Te envía un mensaje centrado en el chat
  * Compatible con [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/)
* Ajustes del comando:
  * `{message}`: el mensaje que quieres enviar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SEND_CENTERED_MESSAGE text:&fThis is a somewhat random text.
    - SEND_CENTERED_MESSAGE text:<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow> # MiniMessage Suported, but dont use MiniMessage + vanilla at the same time
```


### SET\_ARMOR\_TRIM

* Info: Establece el armor trim específico con el patrón específico para el slot especificado
* Ajustes del comando:
  * `{slot}`: El slot al que aplicar el comando (slot -1 para mano principal)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{pattern}`: El patrón del trim (si es 'null' o 'remove' eliminará el patrón actual). [Lista de TrimPattern](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimPattern.html)
  * `{patternMaterial}`: El material del patrón. [Lista de TrimMaterial](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/meta/trim/TrimMaterial.html)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ARMOR_TRIM slot:38 pattern:vex patternMaterial:netherite
    - SET_ARMOR_TRIM slot:38 pattern:null #to clear the armor trim
```


### SET\_BLOCK

* Info: Coloca un bloque en el bloque al que apunta el jugador
* Ajustes del comando:
  * `{blockface}`: Puedes especificar o no un blockFace para forzar la colocación por encima, por ejemplo. [BlockFaces](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/block/BlockFace.html)
  * `{material}`: ID de bloque (se admiten block states) 
  * `{bypassProtection}`: Si colocará el bloque incluso si el jugador no tiene el permiso
  * `[whitelistCurrentBlock]`: (Opcional) (por defecto = se puede establecer en todos los tipos de bloque) Lista de bloques que el bloque actual debe coincidir para ser reemplazado
    * Ejemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK blockface:UP material:OAK_WOOD
    - SET_BLOCK material:FURNACE[LIT=TRUE]
    - SET_BLOCK material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_BLOCK\_POS

* Info: Establece un bloque en una posición específica
* Ajustes del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{material}`: el material del bloque
  * `[bypassProtection]`: (Opcional) (por defecto = false), si evita o no la protección de región, claim, isla
  * `[replace]`: (Opcional) (por defecto = true), si reemplaza el bloque si ya existe uno
  * `[whitelistCurrentBlock]`: (Opcional) (por defecto = se puede establecer en todos los tipos de bloque) Lista de bloques que el bloque actual debe coincidir para ser reemplazado
    * Ejemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_BLOCK_POS x:0 y:0 z:0 material:STONE bypassProtection:false replace:true
    - SET_BLOCK_POS x:0 y:0 z:0 material:GOLD_BLOCK whitelistCurrentBlock:SAND,DIRT
```

### SET\_EQUIPPABLE\_MODEL

* Info: Establece el equippable model data de un ítem en un slot específico
* Ajustes del comando:
  * `{slot}`: El número de slot donde está el ítem objetivo
  * `{model}`: El nombre del modelo de equipamiento que quieres asignar al ítem
* Ejemplo:

```yml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EQUIPPABLE_MODEL slot:-1 model:minecraft:diamond
```

### SET\_EXECUTABLE\_BLOCK

* Info: Setblock pero para Executable Blocks. **(EXECUTABLE BLOCKS DEBE ESTAR INSTALADO)**
* Ajustes del comando:
  * `{id}`: ID del executable block que estás intentando colocar
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: Nombre del mundo
  * `[replace]`: (Opcional) (por defecto = true). Si reemplazará el bloque existente en dichas coordenadas o no
  * `[bypassProtection]`: (Opcional) (por defecto = false) si quieres evitar las protecciones como worldguard
  * `[ownerUUID]`: (Opcional) (por defecto = sin propietario) El uuid del supuesto propietario del executable block
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_EXECUTABLE_BLOCK id:Mithril_Ore x:%block_x_int% y:%block_y_int% z:%block_z_int% world:%block_world% replace:false bypassProtection:true ownerUUID:%player_uuid%
```

### SET\_ITEM\_COLOR

* Info: Establece un color específico para el ítem (ítems que admiten color como armadura de cuero / estrella de fuegos artificiales)
*  Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: valor numérico del color. [Página para elegir color](https://www.tydac.ch/color/)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COLOR slot:1 color:0
```

### SET\_ITEM\_ATTRIBUTE

* Info: Establece un atributo a un ítem.
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{attribute}`: El atributo que quieres añadir. [Attributes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)
  * `{value}`: El valor para la operación
  * `{equipmentSlot}`: El slot para el atributo [EquipmentSlots](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_ATTRIBUTE slot:%slot% attribute:GENERIC_ARMOR value:10 equipmentSlot:CHEST
```


### SET\_ITEM\_COOLDOWN

* Da al jugador/objetivo cooldown en un ítem
* Ajustes del comando:
  * `{material or group}`: El tipo de material o el grupo. [Más información sobre grupo](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2)
  * `{cooldown}`: cooldown en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN material:ENDER_PEARL cooldown:10
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_COOLDOWN group:my_cooldown_group cooldown:10
```

### SET\_ITEM\_CUSTOM\_MODEL\_DATA

* Info: Establece un customModelData específico al ítem específico
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{customModelData}`: valor del customModelData
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_CUSTOM_MODEL_DATA slot:10 customModelData:10
```

### SET\_ITEM\_LORE

* Info: Establece una línea de lore
* Ajustes del comando:
  * `{slot}`: Número de slot (-1 para mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
* `{line}` : Si quieres establecer el lore del primer tipo 1
* `{text}`: El nuevo texto de línea
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_LORE slot:%slot% line:3 text:&6LEGENDARY SWORD
```

### SET\_ITEM\_MATERIAL 

<CustomTag type="version" version="1.20.5" />
* Reemplaza el material del ítem con un material diferente manteniendo el nbt del ítem objetivo
* Ajustes del comando:
  * `{slot}`: Número de slot (-1 para mainhand)

![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{material}`: El material en el que quieres que se convierta el ítem
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MATERIAL slot:10 material:DIAMOND_HOE
```

### SET\_ITEM\_MODEL

* Info: Establece un modelo personalizado para tu ítem en un slot específico
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{model}`: el valor de modelo que quieres aplicar al ítem objetivo
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_MODEL slot:-1 model:minecraft:stone
```

### SET\_ITEM\_NAME

* Info: Establece un nombre personalizado para tu ítem en un slot específico
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{name}`: el nuevo nombre del ítem
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_NAME slot:%slot% name:&eThis is the new name of the item
```

### SET\_ITEM\_POTIONCOLOR

* Info: Establece un color personalizado al color de poción de un ítem en un slot específico
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{color}`: El color que quieres aplicar. Para el color, ve a `https://www.tydac.ch/color/` y obtén el valor `MapInfo Color` del color que elijas.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_POTIONCOLOR slot:%slot% color:10944256
```

### SET\_ITEM\_TOOLTIPSTYLE

* Info: Establece el tooltip style personalizado del ítem en el slot.
* Ajustes del comando:
  * `{slot}`: El slot donde se aplicará. (-1 para mainhand)
    ![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `{tooltipModel}`: (Valor por defecto: `namespace:id`) El id del tooltip.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_ITEM_TOOLTIPSTYLE slot:-1 tooltipModel:namespace:id
```

### SET\_PLAYER\_TIME

* Info: Establece la hora del jugador sin afectar la hora del servidor.
* Ajustes del comando:
  * `{time}`: El valor de tiempo. Introduce `-1` para restablecer la hora del jugador y que dependa de nuevo de la hora del servidor.
  * `{relative}`: (Valor por defecto: false) Si no es true, establecerá la hora de la POV del usuario a ese valor literalmente. Pero si es true, tomará la hora actual del mundo y le sumará el valor proporcionado para establecer tu hora actual de POV.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_TIME time:6000 relative:false
```

### SET\_PLAYER\_WEATHER

* Info: Establece el clima del jugador sin afectar la hora del servidor.
* Ajustes del comando:
  * `{weather The time value}`: Establece el clima del jugador en su POV
    * Opciones:
      * RESET: Lo restaura al clima del servidor
      * DOWNFALL: Lluvia o nieve según el bioma
      * CLEAR: Clima despejado, nubes pero sin lluvia.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_PLAYER_WEATHER weather:CLEAR
```

### SET\_TEMP\_BLOCK\_POS

* Info: Establece un bloque temporal
* Ajustes del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{world}`: Nombre del mundo
  * `{material}`: ID de bloque
  * `{time}`: Tiempo en ticks
  * `[bypassProtection]`: (Opcional) (por defecto = false) Si ignora la intervención de terceros o no
  * `[whitelistCurrentBlock]`: (Opcional) (por defecto = se puede establecer en todos los tipos de bloque) Lista de bloques a vigilar
    * Ejemplos:
    * AIR, WATER
    * !STONE, !COBBLESTONE


```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SET_TEMP_BLOCK_POS x:%entity_x% y:%entity_y% z:%entity_z% world:%entity_world% material:BEDROCK time:40 bypassProtection:true whitelistCurrentBlock:!AIR,!WATER
```

:::warning
No reemplaza bloques que tienen datos adicionales (inventario, rotación, etc.)
:::

### SPAWN\_ENTITY\_ON\_CURSOR

* Info: Genera entidades en tu cursor
  * Puedes especificar un [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * O una definición de entidad, ejemplo: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * O un ID de MythicMob
* Ajustes del comando:
  * `{entity}`: La especificación de la entidad
  * `{amount}`: La cantidad de mobs que se generarán en ese punto
  * `[maxRange]`: (Opcional) (por defecto = 200) El rango máximo de la generación
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SPAWN_ENTITY_ON_CURSOR entity:CREEPER amount:1
```

```
# With EntitySnapshot
- SPAWN_ENTITY_ON_CURSOR entity:{HasVisualFire:1b,id:"minecraft:bee"} amount:1

# With MythicMob ID
- SPAWN_ENTITY_ON_CURSOR entity:MyCustomBossID amount:1
```

### SUDO

* Info: Te obliga a ejecutar un comando
* Ajuste del comando:
  * `{command}`: El comando a ejecutar
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO sit
    - SUDO say hi
```

### SUDO\_OP

* Info: Da OP al jugador, le hace SUDO y le quita el OP
* Información extra: Durante el OP, el jugador solo puede ejecutar el comando especificado después del SUDOOP, todos los demás comandos se bloquean mientras el jugador es OP, y si el servidor se cae, no hay problema. Al jugador se le quitará el OP cuando se reconecte.
* Ajustes del comando:
  * `{command}`: El comando a ejecutar con OP
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SUDO_OP summon zombie
    - SUDO_OP fly
    - SUDO_OP god
    - SUDO_OP /replacenear 20 tnt
```

:::danger
No se recomienda usar esto **demasiado**. Como se explica al principio de esta página, si quieres ejecutar comandos vanilla usa el comando execute (explicado en las FAQ [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)).

Usa SUDOOP solo si no hay absolutamente ninguna otra opción: debe ser tu último recurso, no tu primera opción.
:::

### SWAP\_HAND

* Info: Intercambia el ítem actual con el de tu mano secundaria
* Sin ajustes de comando
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - SWAP_HAND
```

### TRANSFER\_ITEM

* Info: Intercambia 2 ítems en el inventario por slot
* Ajustes del comando:
  * `{slot of launcher}`: Slot objetivo para el slot n.º 1
  * `{slot of receiver}`: Slot objetivo para el slot n.º 2
  
![](https://media.ssomar.com/m/docs-img-slots-info.png)
  * `[boolean drop]`: (Opcional) (por defecto = false) Si el slot del lanzador se suelta durante el intercambio o no

### XP_BOOST

* Info: Impulsa la ganancia de xp durante un tiempo.
* Ajustes del comando:
  * `{multiplier}`: Valor multiplicador de XP
  * `{timeinsecs}`: Duración en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - XP_BOOST 2 10
```

:::info
¡Cuidado! Este comando puede acumularse, así que si lo ejecutas varias veces obtendrás más y más multiplicadores si el tiempo entre ellos no es suficiente para que desaparezca el último impulso.\
```yaml
- XP_BOOST 2 5
- DELAY 1
- XP_BOOST 2 5
```

Esto significa que la XP se potenciará en este orden:
* 1 segundo: x2
* 4 segundos: x4
* 1 segundo: x2
:::
