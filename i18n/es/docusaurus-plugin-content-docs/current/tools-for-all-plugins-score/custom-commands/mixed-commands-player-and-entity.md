---
description: >-
  Referencia de los comandos mixtos de SCore que funcionan para Player y Entity:
  AROUND, DAMAGE, TELEPORT, HITSCAN y mucho más.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T18:17:10.280Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos mixtos (Player y Entity)

:::info
Estos comandos personalizados funcionan para Player pero también para Entity

Es decir, en:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Ordenados alfabéticamente_

### ADD\_TEMPORARY\_ATTRIBUTE

* Info: Añade atributos temporales a un jugador/entidad
* Configuración del comando:
    * `{attribute}` : [Lista de atributos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Valor double que tendrá el atributo temporal
    * `{operation}` : [Lista de operaciones](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Tiempo que pasa antes de que el atributo expire
* Ejemplo:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Info: Apunta a todos los jugadores.
* Configuración del comando: 
  * `{command}`: El comando que se ejecutará
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Ejecutar varios comandos: da un ítem aleatorio a todos los jugadores, no todos recibirán el mismo.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Info: Apunta a todos los jugadores.
* Configuración del comando: 
    * `{command(s)}`: El comando que se ejecutará
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Ejecutar varios playerCommands:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Admite blacklist y whitelist
:::

### AROUND

* Info: Apunta a los jugadores dentro de un radio concreto y les hace ejecutar comandos
* Configuración del comando:
  * `{distance}`: Hasta qué radio de distancia el comando seleccionará jugadores (por defecto 3)
  * `{displayMsgIfNoPlayer}`: (true o false) Para notificar al usuario del ítem si logró apuntar a jugadores o no (por defecto true)
  * `{throughBlocks}`: Afectará o no a los jugadores que están detrás de bloques (por defecto true)
  * `{safeDistance}`: Si la distancia entre el objetivo y el lanzador es menor o igual que el valor de safeDistance, el objetivo no se verá afectado. (por defecto 0)
  * `{offsetYaw}`: La dirección de yaw que quieres para tu offset (independiente del valor de yaw del origen)
  * `{offsetPitch}`: La dirección de pitch que quieres para tu offset (independiente del valor de yaw del origen)
  * `{offsetDistance}`: Tras calcular offsetYaw y offsetPitch, con el valor de este ajuste se moverá la posición/punto central del comando AROUND desde la ubicación xyz del origen.
  * `{limit}`: La cantidad de objetivos que pueden verse afectados 
  * `{sort}`: Útil para la opción limit. 
    * NEAREST : Selecciona las entidades más cercanas al origen.
    * RANDOM : Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en la zona salvaje o en el claim del lanzador (en el contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
  * `{commands}`: Los comandos que se ejecutarán para los jugadores objetivo.

:::tip
¡Puedes añadir **varios comandos**! Usa el separador `<+>`

Ejemplo: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Los placeholders son los mismos que los [Placeholders de Player](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), pero debes sustituir "player" por "around\_target"

Ejemplo: %around\_target%, %around\_target\_uuid%
:::

:::info
**Número de objetivos:** `%around_target_count%` devuelve el número de jugadores seleccionados por el comando. Es el mismo para cada objetivo y cuenta los objetivos que quedan después de `distance`, `safeDistance`, `throughBlocks` y `regionCheck` y `limit`. Las `CONDITIONS(...)` comprobadas en cada objetivo no se tienen en cuenta. Admite el atajo `+N` / `-N`: `%around_target_count%-1`.

Ejemplo: `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Ejemplos:

Esto invoca un rayo sobre los jugadores en un radio de 20 bloques

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Enviar un mensaje a los jugadores que estén entre 5 y 10 bloques

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Puedes anidar AROUND con los comandos: AROUND, IF, NEAREST, ALL\_PLAYERS

Si lo haces, el separador y los placeholders cambiarán según el nivel de anidación.

separador del comando base: `<+>`

primer comando anidado: `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

placeholder base: %around\_target%

primer comando anidado: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Ejemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Puedes añadir **condiciones** con placeholders personalizados para ajustar los jugadores a los que se apunta

Formato:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  son la configuración del comando

     \<conditions> son las condiciones

Formato de las condiciones:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> es el nombre del placeholder

      \<comparator> El comparador: "`<`", "`<=`", "`=`", "`>`", "`>=`"

      \<value> el valor

 Puedes añadir varias condiciones usando el separador "&&"
:::

* Ejemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Ten en cuenta que la parte CONDITIONS() interpreta los placeholders que contiene con el jugador seleccionado por el comando AROUND. Así que lo que ocurrió en realidad con los placeholders de arriba es que se comprueba si la vida del objetivo es mayor que 10 y si el jugador seleccionado por el comando AROUND se llama "2Ssomar"
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Los placeholders que provienen de plugins como ExecutableItems o ExecutableBlocks no se interpretarán con el jugador afectado por el comando AROUND.

Por ejemplo, con ExecutableBlocks, CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) funciona comprobando si el valor de la variable factions del bloque es igual a la facción del jugador objetivo\
Fuente del placeholder: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Info: Lanza al jugador/objetivo en la dirección opuesta a hacia donde mira **(NO PUEDES SER LANZADO EN EL AIRE)**
* Configuración del comando:
  * `{amount}`: El valor que determina la fuerza del lanzamiento
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Info: Prende fuego al jugador/objetivo
* Configuración del comando:
 * `{timeinsecs}`: Tiempo de quemadura en segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Info: Envía un mensaje a la consola
* Configuración del comando:
  * `{text}`: Texto que se enviará a la consola
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Info: Copia los efectos del objetivo
* Configuración del comando:
  * `[limitDuration]`: (Opcional) (por defecto = sin límite) significa que si el objetivo tiene, por ejemplo, 3 minutos de efecto de veneno y lo limitas a 5 segundos, solo recibirás un efecto de veneno de 5 segundos
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Info: Te lanza hacia una ubicación concreta
* Configuración del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{fallDamage}`: true o false. Si el jugador recibirá daño por caída o no después de ser lanzado.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Si tienes activadores relacionados entre dos tipos de objetivos, puedes hacer lo siguiente

* Ejemplo 1 | Instancia de player - entity | Lanza al jugador hacia la entidad

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Ejemplo 2 | Instancia de player - entity | Lanza a la entidad hacia el jugador

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Ejemplo 3 | Instancia de player - block | Lanza al jugador hacia el bloque

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Puedes aumentar la fuerza del comando ejecutándolo varias veces (pero no en el mismo tick, deben estar separados en el tiempo; de lo contrario no tendría sentido, ya que estarías lanzando al jugador desde la misma posición hacia la ubicación). Ejemplos:

* Ejecutándolo varias veces manualmente

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* Usando el comando de utilidad LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Info: Te lanza lejos de una ubicación concreta
* Configuración del comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
  * `{strength}`: Fuerza del dash
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Si tienes activadores relacionados entre dos tipos de objetivos, puedes hacer lo siguiente

* Ejemplo 1 | Instancia de player - entity | Lanza al jugador lejos de la entidad

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Ejemplo 2 | Instancia de player - entity | Lanza a la entidad lejos del jugador

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Ejemplo 3 | Instancia de player - block | Lanza al jugador lejos del bloque

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Info: Lanza al objetivo siguiendo una función matemática concreta
* Configuración del comando:
  * `{function}`: La función matemática que se seguirá. [Sitio web de calculadora de funciones](https://www.geogebra.org/calculator)
  * `{max x value}`: Valor máximo de x de la función
  * `{front z}`: Si el dash es hacia delante o hacia atrás
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Info: Daña al jugador con una cantidad concreta. (El daño infligido con este comando cuenta como daño de jugador)
  * Este comando activa los activadores relacionados con el daño de ExecutableItems y ExecutableEvents
  *   El tipo de daño de Spigot es ENTITY\_ATTACK si hay un jugador involucrado en el activador.

      En caso contrario, el tipo de daño de Spigot es CUSTOM
* Configuración del comando:
  * `{amount}`: Cantidad de daño en puntos de vida (no en corazones)
  * `{amplified If Strength Effect}`: true o false, Fuerza 1 -> + 1.5 de daño, ....
  * `{amplified with attack attribute}`: true o false, obtendrá la suma de todos tus atributos ATTACK_DAMAGE existentes que tengan el operador `MULTIPLY_SCALAR_1`, la multiplicará según tu daño de ataque actual (incluyendo el efecto de fuerza si está activado)
  <br/>
  :::info
  Fórmula:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: El tipo de daño -> [Lista de DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Para aplicar daño real puedes usar:\
\- 1.20.5++ usa el comando /minecraft\:damage, por ejemplo\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- usa el comando REGAIN HEALTH, no es lo mejor pero sirve como alternativa.
:::

### DAMAGE\_NO\_KNOCKBACK

* Info: Daña al jugador con una cantidad concreta sin aplicar retroceso. (El daño infligido con este comando no cuenta como daño de jugador, sino más bien como daño indirecto)
  * Este comando activa los activadores relacionados con el daño de ExecutableItems y ExecutableEvents
  *   El tipo de daño de Spigot es ENTITY\_ATTACK si hay un jugador involucrado en el activador.

      En caso contrario, el tipo de daño de Spigot es CUSTOM
* Configuración del comando:
  * `{amount}`: Cantidad de daño en puntos de vida (no en corazones)
  * `{amplified If Strength Effect}`: true o false, Fuerza 1 -> + 1.5 de daño, ....
  * `{amplified with attack attribute}`: true o false, jugador con 500% de daño adicional, el comando hará 5 x "\<damage>".
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Info: Te permite darte a ti mismo un aumento de daño personalizado
  * Este comando aumenta también el daño de los comandos personalizados, p. ej. (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Este comando no aumenta el daño de los proyectiles
* Configuración del comando:
  * `{modification in percentage example 100}`: Cantidad del aumento. Ejemplo a continuación:
    * 50 = Te hace infligir +50% de daño
    * -80 = Te hace infligir -80% de daño
  * `{timeinticks}`: La duración del aumento de daño personalizado
* Ejemplo: (El comando de abajo te da +50% de daño infligido durante 10 s)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Este comando se puede usar varias veces y el aumento se acumulará. En este ejemplo verás que durante \[0-10] segundos el jugador aplicará un 50% más de daño, después durante \[10-20] segundos aplicará un 100% más de daño y luego durante \[20-30] segundos un 50% más de daño, ya que en \[10-20] se acumularon dos comandos DAMAGE\_BOOST.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Info: Te permite darte a ti mismo una resistencia al daño personalizada, aplicándote multiplicadores de daño recibido personalizados
* Configuración del comando:
  * `{modification in percentage example 100}`: Cantidad del multiplicador. Ejemplo a continuación:
    * 50 = Te hace recibir +50% de daño\
      -80 = Te hace recibir -80% de daño
  * `{timeinticks}`: La duración de la resistencia al daño personalizada
* Ejemplo: (El comando de abajo te da +50% de daño recibido durante 10 s)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Info: Reemplaza VISUALMENTE (no hay riesgo de perder ítems) una ranura de equipamiento por un material concreto
  * Requiere [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * El visual se muestra a los jugadores que ven al jugador / entidad (y al propio jugador). Un jugador que se acerque más tarde también lo ve.
  * Una entidad tiene un visual por ranura: un nuevo EQUIPMENT\_VISUAL\_REPLACE en la misma ranura reemplaza al anterior, con su nuevo tiempo. El visual termina tras `{timeinticks}`, con EQUIPMENT\_VISUAL\_CANCEL, o cuando la entidad muere, desaparece o el jugador se va.
* Configuración del comando:
  * `{EquipmentSlot}`: La ranura
    * Opciones:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: El id del ítem del material por el que quieres reemplazar o el id de EI
  * `{amount}`: La cantidad del stack 
  * `{timeinticks}`: Cuánto durará el disfraz. (20 ticks = 1 s)
*   Ejemplo: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Info: Cancela el comando EQUIPMENT\_VISUAL\_REPLACE
  * Funciona con jugadores y con mobs: los jugadores que ven a la entidad recuperan su ítem real en esta ranura.
* Configuración del comando:
  * `{EquipmentSlot}`: La ranura
    * Opciones:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Ejemplo:

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Alias: `FORCEDROP`, `DROPSPECIFICEI`
* Info: Fuerza al jugador/entidad a soltar un ítem. Admite dos modos:
  * **Modo slot**: suelta el ítem de la ranura de inventario indicada
  * **Modo EI ID**: suelta todos los ítems del inventario que coincidan con el ID de ExecutableItem indicado (solo jugador)
* Configuración del comando:
  * `slot:`: número, -1 para la mano principal (por defecto: -1). Consulta la imagen de referencia de ranuras más abajo.
  * `ei_id:`: el ID del ExecutableItem que se soltará (reemplaza al modo slot cuando se indica)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Ejemplos:

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Info: Lanza al jugador/objetivo en la dirección hacia donde mira
* Configuración del comando:
  * `{number}`: El valor que determina la fuerza del lanzamiento
  * `{custom_y}` : Para establecer un impulso vertical (te aconsejo poner un valor pequeño como 0.5 - 1 si no quieres un salto grande).
  * `{falldamage}`: para activar o desactivar el daño por caída
* Ejemplo:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Info: Aplica la congelación de la nieve en polvo de Minecraft 1.18
* Configuración del comando:
 * `{time in ticks}`: Tiempo de congelación en ticks. (20 ticks = 1 s)
* Ejemplo:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Info: Aplica brillo al jugador
* Configuración del comando:
  * `{time in ticks}`: Duración del brillo en ticks
  * `{color}`: De qué color será el brillo. [Referencia de colores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Ejemplo:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Info: Permite ejecutar un comando en una dirección concreta sobre entidades
* Configuración del comando:
  * `{range}`: a qué distancia máxima puede estar una entidad para ser apuntada por el comando HITSCAN
  * `{radiusOfHitscan}`: Cómo de ANCHO es el cilindro. Básicamente es la diferencia entre disparar una bala y disparar una bola de cañón.
  * `{pitch}`: En qué dirección disparar, relativa al pitch del jugador
  * `{yaw}`: Lo mismo que Pitch pero con yaw
  * `{leftRightShift}`:
    * -5 = el hitscan EMPIEZA 5 bloques a la izquierda.
    * 0 = El hitscan está centrado donde está el jugador.
    * 5 = el hitscan EMPIEZA 5 bloques a la derecha del jugador. 
  * `{yShift}`: Igual que izquierda/derecha, pero con un eje distinto. 
  * `{throughEntities}`: Boolean: Si el HITSCAN puede atravesar entidades o no.
  * `{throughBlocks}`: Boolean: Si el HITSCAN puede atravesar bloques o no.
  * `{limit}`: La cantidad de objetivos que pueden verse afectados
  * `{sort}`: Útil para la opción limit.
    * NEAREST : Selecciona las entidades más cercanas al origen.
    * RANDOM : Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en la zona salvaje o en el claim del lanzador (en el contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
  * `{command(s)}`: Igual que los comandos AROUND, puedes escribir `command1 <+> command2` ... y usar el placeholder %around\_target%
* Ejemplo:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Los comandos después de `HITSCAN_ENTITIES` (y después de cada `<+>`) se ejecutan sobre **cada entidad alcanzada**, como los comandos de entidad: `REGAIN_HEALTH 4` cura a la entidad alcanzada, no al lanzador. Para actuar sobre el lanzador, usa un comando vanilla con `%player%`, por ejemplo `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Imagen para entenderlo:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Info: Permite ejecutar un comando en una dirección concreta sobre jugadores
* Configuración del comando:
  * `{range}`: a qué distancia máxima puede estar una entidad para ser apuntada por el comando HITSCAN
  * `{radiusOfHitscan}`: Cómo de ANCHO es el cilindro. Básicamente es la diferencia entre disparar una bala y disparar una bola de cañón.
  * `{pitch}`: En qué dirección disparar, relativa al pitch del jugador
  * `{yaw}`: Lo mismo que Pitch pero con yaw
  * `{leftRightShift}`:
    * -5 = el hitscan EMPIEZA 5 bloques a la izquierda.
    * 0 = El hitscan está centrado donde está el jugador.
    * 5 = el hitscan EMPIEZA 5 bloques a la derecha del jugador.
  * `{yShift}`: Igual que izquierda/derecha, pero con un eje distinto.
  * `{throughEntities}`: Boolean: Si el HITSCAN puede atravesar entidades o no.
  * `{throughBlocks}`: Boolean: Si el HITSCAN puede atravesar bloques o no.
  * `{limit}`: La cantidad de objetivos que pueden verse afectados
  * `{sort}`: Útil para la opción limit.
    * NEAREST : Selecciona las entidades más cercanas al origen.
    * RANDOM : Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en la zona salvaje o en el claim del lanzador (en el contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
  * `{command(s)}`: Igual que los comandos AROUND, puedes escribir `command1 <+> command2` ... y usar el placeholder %around\_target%
* Ejemplo:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Imagen para entenderlo:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Info: Hace al jugador invulnerable durante un tiempo determinado
* Configuración del comando:
 * `{ticks}`: Tiempo de invulnerabilidad en ticks. (20 ticks = 1 s)
  * Admite valores negativos para reducir el tiempo de invulnerabilidad, como el que se tiene después de recibir un golpe.
* Ejemplo:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Info: Lanza al jugador por el aire
* Configuración del comando:
  * `{number}`: Qué tan fuerte será el lanzamiento
  * `{fall damage}`: (Opcional) (por defecto = false) Selecciona si quieres que el comando cause daño por caída.
* Ejemplo:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Info: Lanza una entidad en tu dirección
* Configuración del comando:
  * `{entityType}`: ID del mob de la entidad lanzada (EN MAYÚSCULAS) [Lista de EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (número, Double) Define la velocidad de la entidad
  * `[angle rotation y]`: (solo para 1.14 y superiores) (Opcional) (por defecto = 0) (en grados) Define la dirección en la que se lanzará la entidad
* Ejemplo:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Ejemplo para hacer un disparo triple:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Info: Inflige daño al objetivo, pero el tipo de daño proviene principalmente del plugin MythicLib
* Configuración del comando:
  * `{number}`: Daño infligido a los objetivos (por defecto: 10)
  * `{damage_type}`: Tipo de daño infligido (por defecto: PHYSICAL)
    * Ejemplo: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false si empuja hacia atrás al objetivo o no (por defecto: false)
  * `{element}`: Especifica de qué tipo de elemento es el ataque (por defecto: FIRE)
    * Referencia: [Lista de elementos de MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false si el `CRITICAL_STRIKE_POWER` del atacante se añade a la ecuación del daño o no (por defecto: false)
    * Ecuación: `number * (number * (total critical_strike_power/100))`
* Ejemplo:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Info: Apunta a las entidades dentro de un radio concreto y les hace ejecutar comandos
  * Entidades disponibles -> [Lista de LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Configuración del comando:
  * `{distance}`: Hasta qué radio de distancia el comando seleccionará entidades
  * `{displayMsgIfNoEntity}`: (true o false) Para notificar al usuario del ítem si no logró apuntar a ningún mob.
    * **Pon false para ocultar el mensaje**
  * `{throughBlocks}`: Afectará o no a los mobs que están detrás de bloques
  * `{safeDistance}`: Si la distancia entre el objetivo y el lanzador es menor o igual que el valor de safeDistance, el objetivo no se verá afectado.
  * `{offsetYaw}`: La dirección de yaw que quieres para tu offset (independiente del valor de yaw del origen)
  * `{offsetPitch}`: La dirección de pitch que quieres para tu offset (independiente del valor de yaw del origen)
  * `{offsetDistance}`: Tras calcular offsetYaw y offsetPitch, con el valor de este ajuste se moverá la posición/punto central del comando AROUND desde la ubicación xyz del origen.
  * `{limit}`: La cantidad de objetivos que pueden verse afectados
  * `{sort}`: Útil para la opción limit.
    * NEAREST : Selecciona las entidades más cercanas al origen.
    * RANDOM : Selecciona aleatoriamente cualquier entidad dentro del rango del comando.
  * `{regionCheck}`: true/false. Si es true, el comando AROUND comprobará si el objetivo está en la zona salvaje o en el claim del lanzador (en el contexto del plugin GriefPrevention) (se actualizará pronto para comprobarlo con otros plugins de claims)
  * `{nonliving}`: true/false. Si es true, apuntará también a otras entidades como flechas y armor stands. Es probable que se ignoren los errores que ocurran al ejecutar comandos de entidad con este argumento activado, debido al scope creep.
  * Puedes poner en BLACKLIST o WHITELIST entidades añadiendo una de estas en cualquier parte del comando:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
¡Puedes añadir **varios comandos**! Usa el separador `<+>`

Ejemplo: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Placeholders:** Los placeholders son los mismos que los [Placeholders de Entity](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), pero debes sustituir "player" por "around\_target"

Ejemplo: %around\_target%, %around\_target\_uuid%
:::

:::info
**Número de objetivos:** `%around_target_count%` devuelve el número de entidades seleccionadas por el comando. Es el mismo para cada objetivo y cuenta los objetivos que quedan después de `distance`, `safeDistance`, `throughBlocks`, `regionCheck` y de `WHITELIST(...)` / `BLACKLIST(...)` y `limit`. Las `CONDITIONS(...)` comprobadas en cada objetivo no se tienen en cuenta. Admite el atajo `+N` / `-N`: `%around_target_count%-1`.

Ejemplo: `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
:::

* Ejemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Para usar NBT de entidad en el campo WHITELIST/BLACKLIST, debes instalar el plugin [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Admite [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities), por lo que puedes añadir, por ejemplo, algo como: `ZOMBIE{IsBaby:1}` 

Ejemplos:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Puedes anidar MOB\_AROUND con los comandos: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Si lo haces, el separador y los placeholders cambiarán según el nivel de anidación.\

separador del comando base: `<+>`

primer comando anidado: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base: %around\_target%

primer comando anidado: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Info: Apunta al mob más cercano al jugador/objetivo.
* Configuración del comando:
    * `{max accepted distance}`:  Distancia máxima aceptada a la que puede estar la "entidad".
    * `{command(s)}`: Los comandos que se ejecutarán

:::tip
¡Puedes añadir **varios comandos**! Usa el separador `<+>`

Ejemplo: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Los placeholders son los mismos que los [Placeholders de Entity](/tools-for-all-plugins-score/placeholders#entity-placeholders), pero debes sustituir "player" por "around\_target"

Ejemplo: %around\_target%, %around\_target\_uuid%
:::

* Ejemplo:

Daña al jugador más cercano

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Puedes anidar MOB\_NEAREST con los comandos: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Si lo haces, el separador y los placeholders cambiarán según el nivel de anidación.\

separador del comando base: `<+>`

primer comando anidado: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base: %around\_target%

primer comando anidado: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Info: Apunta al jugador más cercano al jugador/objetivo.
* Configuración del comando:
    * `{max accepted distance}`: Distancia máxima aceptada a la que puede estar el "objetivo".
    * `{command}`: El comando que se ejecutará

:::tip
¡Puedes añadir **varios comandos**! Usa el separador `<+>`

Ejemplo: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholders:** Los placeholders son los mismos que los [Placeholders de Player](/tools-for-all-plugins-score/placeholders#player-placeholders), pero debes sustituir "player" por "around\_target"

Ejemplo: %around\_target%, %around\_target\_uuid%
:::

* Ejemplo:

Daña al jugador más cercano

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Puedes anidar NEAREST con los comandos: AROUND, IF, NEAREST, ALL\_PLAYERS

Si lo haces, el separador y los placeholders cambiarán según el nivel de anidación.\

separador del comando base: `<+>`

primer comando anidado: `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder base: %around\_target%

primer comando anidado: %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Info: Envía un mensaje a los jugadores OP conectados y a la consola
* Configuración del comando:
  * `{text}`: Texto que se enviará
* Ejemplo:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Genera partículas en la ubicación del jugador/objetivo. [Lista de partículas](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Configuración del comando:
  * `{type}`: El tipo de partícula (EN MAYÚSCULAS)
  * `{quantity}`: La cantidad de partículas que aparecerán
  * `{offset}`: El radio del área donde pueden aparecer las partículas en la ubicación del jugador/objetivo
  * `{speed}`: Qué tan rápidas o grandes serán las partículas
* Ejemplo:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Info: Te da una cantidad concreta de HP
* Configuración del comando:
  * `{amount}`: La cantidad de HP que quieres ganar
   * Admite valores negativos por si quieres hacer "daño real". 
* Ejemplo:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Info: Te apaga si estás ardiendo
* Sin configuración del comando
* Ejemplo:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Info: Quita el efecto de brillo de un color concreto al jugador | objetivo.
* Configuración del comando:
 * `[color]`: (Opcional) (por defecto = WHITE) El color que se quitará. [Referencia de colores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Ejemplo:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Info: Añade el efecto de brillo con un color concreto al jugador | objetivo.
* Configuración del comando:
 * `[color]`: (Opcional) (por defecto = WHITE) El color que se quitará. [Referencia de colores](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Ejemplo:

```yaml
- SET_GLOW BLACK
```

:::info
Compatible con el plugin TAB usando -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Info: Establece tu vida en una cantidad concreta
* Configuración del comando:
  * `{amount}`: La cantidad de vida a la que quieres establecerla
* Ejemplo:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Info: Fuerza al jugador a mirar en una posición de pitch concreta (-90/90 grados, dirección arriba abajo)
* Configuración del comando:
  * `{pitch_number}`: El número que quieres introducir. Los placeholders también funcionan
  * `{keepVelocity}`: Permite mantener la velocidad del jugador
* Ejemplo:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Info: Fuerza al jugador a mirar en una posición de yaw concreta (360 grados, dirección izquierda derecha)
* Configuración del comando:
  * `{yaw_number}`: El número que quieres introducir. Los placeholders también funcionan
  * `{keepVelocity}`: Permite mantener la velocidad del jugador
* Ejemplo:

```yaml
- SET_YAW 10 false
```

### SPIN

* Info: Hace girar al objetivo
* Configuración del comando:
  * `{duration ticks}`: La duración del giro
  * `{velocity}`: La velocidad del giro
* Ejemplo:

```yaml
- SPIN 20 1
```

:::info
P: ¿Cómo congelar objetivos/jugadores/mobs?

R: ejecuta **`SPIN {duration} 0`**, por ejemplo
:::

### STEAL

* Info: Roba un ítem del inventario del objetivo
* Configuración del comando:
  * `{slot}`: -1 para la mano principal. Consulta la referencia de ranuras más abajo.
  * `[remove item]`: (Opcional) (por defecto = true)
* Ejemplo:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Info: Lanza un rayo sin daño a quien ejecuta el comando
* Sin configuración del comando 
* Ejemplo:

```yaml
- STRIKELIGHTNING
```

:::info
Esto no es lo mismo que el comando smite de Essentials. Si quieres fulminar a tus objetivos, ponlo en los comandos de objetivo o en los comandos de entidad junto con los activadores adecuados, como `PLAYER_CLICK_ON_PLAYER` por ejemplo.
:::

### STUN ENABLE/DISABLE

* Info: Activa o desactiva el aturdimiento del jugador (te tumba y te impide mover la cámara)
* Comandos:
  * STUN\_ENABLE
  * STUN\_DISABLE
* Ejemplo:

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Info: Teletransporta al jugador/entidad a la ubicación
* Configuración del comando:
  * `{world}`: El mundo de la ubicación a la que teletransportar
  * `{x}`: La coordenada x de la ubicación a la que teletransportar.
  * `{y}`: La coordenada y de la ubicación a la que teletransportar.
  * `{z}`: La coordenada z de la ubicación a la que teletransportar.
  * `[pitch]`: (Opcional) (por defecto = mantiene el pitch del jugador) pitch de la ubicación de teletransporte
  * `[yaw]`: (Opcional) (por defecto = mantiene el yaw del jugador) yaw de la ubicación de teletransporte
  * `[keepVelocity]`: (Opcional) (por defecto = true) Permite no detener la velocidad del jugador.
* Ejemplo:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Info: Te teletransporta a donde apunta tu cursor
* Configuración del comando:
  * `{range}`: Hasta dónde quieres teletransportarte
  * `{acceptAir}`: Para poder teletransportarte incluso en el aire, debes poner esto en true
* Ejemplo:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Info: Transfiere un ítem dentro del inventario
* Configuración del comando:
  * `{slot of launcher}`: Ranura del ítem que se va a mover
  * `{slot of receiver}`: Ranura donde aterrizará el ítem
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Ejemplo:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Info: Te teletransporta a donde apunta tu cursor sin tener en cuenta que puedas acabar en lugares imposibles
* Configuración del comando:
  * `[maxRange]`: (Opcional) (por defecto = 200) Hasta dónde quieres teletransportarte
* Ejemplo:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Info: Teletransporta a un mundo en la misma ubicación
* Configuración del comando:
 * `{world}`: El nombre del mundo al que quieres teletransportar al jugador/objetivo.
* Ejemplo:

```yaml
- WORLD_TELEPORT spawn_end
```

## Comandos de animación

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
