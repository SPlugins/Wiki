---
description: >-
  Las condiciones permiten a los usuarios de ExecutableItems establecer
  criterios, condiciones o requisitos.
source_hash: 5b9669d43610ab52
translated_at: '2026-10-03T10:31:11.838Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Condiciones de Jugador y Objetivo

## Configuración de condiciones
Todas las condiciones se formatean de la misma manera, tienes:
* `{theCondition}`
* `{theCondition}Msg`: El mensaje que se enviará si la condición no es válida (sin él, se envía un mensaje de error predeterminado, excepto para el activador LOOP de ExecutableItems)
* `{theCondition}Cancel`: Si el evento debe cancelarse o no si la condición no es válida
* `{theCondition}Cmds`: El/los comando(s) que se ejecutarán si la condición no es válida
* Ejemplo:

```yaml
playerConditions:
    ifSneaking: true
    ifSneakingMsg: "&cMy custom error message here"
    ifSneakingCancel: true
    ifSneakingCmds:
    - kill %player%
```

:::info
Para las condiciones numéricas, puedes asignar 2 condiciones a la vez.
Ejemplo:
"Quiero crear una condición que solo se active si el valor es mayor que 50 pero menor que 250"
`{theCondition}: 50 < CONDITION < 250`
:::

:::info
¿Quieres añadir condiciones de jugador?

Entonces, en la parte del activador añade playerConditions.

Y obviamente es targetConditions para la condición del objetivo.
:::

:::info
**INFO GIFS:** El activador usado en los GIFS para demostrar cómo funciona cada condición es el activador LOOP, por eso el mensaje de error de la condición aparece múltiples veces.
:::

### ifSneaking - Not

* Descripción: Comprueba si el jugador está agachado
* Ejemplo:

```yaml
playerConditions:
    ifSneaking: false
    ifSneakingMsg: '' #<- Here is where you will add the custom message.
    ifNotSneaking: true
    ifNotSneakingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está (no) agachado, el activador se activará.
  * Si el jugador está volando y desciende presionando el botón de agacharse, el activador se activará para ifSneaking
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-sygm0wxk3y1c0u4u3d.gif)

:::danger
No actives ifNotSneaking si la condición ifSneaking está activada, ya que no tiene sentido tener ambas activadas
:::

### ifSprinting - Not

* Descripción: Comprueba si el jugador está corriendo
* Ejemplo:

```yaml
playerConditions:
    ifSprinting: false
    ifSprintingMsg: '' #<- Here is where you will add the custom message.
    ifNotSprinting: false
    ifNotSprintingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está (no) corriendo, el activador se activará.
* Obligatorio: NO (Por defecto: false)

### ifFlying - Not

* Descripción: Comprueba si el jugador está volando
* Ejemplo:

```yaml
playerConditions:
    ifFlying: false
    ifFlyingMsg: '' #<- Here is where you will add the custom message.
    ifNotFlying: false
    ifNotFlyingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador activa el vuelo haciendo doble clic en el botón de salto y (no) vuela, el activador se activará.
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-gqp59l3zk78sas94uo.gif)

### ifBlocking - Not

* Descripción: Comprueba si el jugador está sosteniendo un escudo y haciendo clic derecho con él (bloqueando)
* Ejemplo:

```yaml
playerConditions:
    ifBlockng: false
    ifBlockingMsg: '' #<- Here is where you will add the custom message.
    ifNotBlockng: false
    ifNotBlockingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está (no) bloqueando con un escudo, el activador se activará
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-xihlvwpznviu4c7786.gif)

### ifGliding - Not

* Descripción: Comprueba si el jugador está deslizándose
* Ejemplo:

```yaml
playerConditions:
    ifGliding: false
    ifGlidingMsg: '' #<- Here is where you will add the custom message.
    ifNotGliding: false
    ifNotGlidingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador (no) se desliza en el aire con unos élitros, el activador se activará.
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-f3px7d1awbudmrj0va.gif)

### ifSwimming - Not

* Descripción: Comprueba si el jugador está nadando (actualización Aquatic de 1.13)
* Ejemplo:

```yaml
playerConditions:
    ifSwimming: false
    ifSwimmingMsg: '' #<- Here is where you will add the custom message.
    ifNotSwimming: false
    ifNotSwimmingMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador se tira al agua y empieza a nadar en posición de estilo libre, el activador se activará.
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-1cfambqwl4j9mmrpbg.gif)

### ifStunned - Not

* Descripción: Comprueba si el jugador está aturdido
* Ejemplo:

```yaml
playerConditions:
    ifStunned: false
    ifStunnedMsg: '' #<- Here is where you will add the custom message.
    ifNotStunned: false
    ifNotStunnedMsg: ''
```

:::info
Puedes aturdir a un jugador ejecutando el comando de jugador personalizado **STUN\_ENABLE**
:::

```
// Example of a stun of 5 seconds
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

* Obligatorio: NO (Por defecto: false)

### ifIsOnFire - Not

* Descripción: Comprueba si el jugador está en llamas
* Ejemplo:

```yaml
playerConditions:
    ifIsOnFire: false
    ifIsOnFireMsg: '' #<- Here is where you will add the custom message.
    ifIsNotOnFire: false
    ifIsNotOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está (no) en llamas por caer en lava o caminar sobre fuego, el activador se activará
* Obligatorio: NO (Por defecto: false)

### ifIsInTheAir - Not

* Descripción: Comprueba si el jugador está en el aire.
* Ejemplo:

```yaml
playerConditions:
    ifIsInTheAir: false
    ifIsInTheAirMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheAir: false
    ifIsNotInTheAirMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador (no) tiene bloques bajo sus pies, el activador se activará.
* Obligatorio: NO (Por defecto: false)

![Comprobará el bloque bajo tus pies. También comprobará correctamente las losas.](https://media.ssomar.com/m/docs-img-giphy-djjtjpzl1pmkbjnqvu.gif)

### ifLineOfSight

* Descripción: Comprueba si el jugador tiene línea de visión directa a una entidad viva (dentro de 50 bloques).
* Ejemplo:

```yaml
playerConditions:
    ifLineOfSight: true
    ifLineOfSightMsg: ''
```

* Situaciones de ejemplo:
  * Si el jugador está mirando directamente a un mob u otro jugador dentro de 50 bloques, el activador se activará.
  * Útil para crear ítems que solo funcionen cuando se apunta a una entidad.
* Obligatorio: NO (Por defecto: false)

:::info
Esta condición requiere la versión del servidor **1.14+**.
:::

### ifPlayerMustBeOnHisTown

* **SOPORTA LOS SIGUIENTES PLUGINS:**
  * Towny
* Descripción: Comprueba si el jugador está en su pueblo.
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisTown: true
    ifPlayerMustBeOnHisTownMsg: '' #<- Here is where you will add the custom message.
```

* Obligatorio: NO (Por defecto: false)

### ifPlayerMustBeOnHisClaim

* **SOPORTA LOS SIGUIENTES PLUGINS:**
  * GriefPrevention
  * Lands
  * GriefDefender
  * Residence
* Descripción: Comprueba si el jugador está en un claim en el que tiene permiso.
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaim: true
    ifPlayerMustBeOnHisClaimMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está en un claim que posee, el activador se activará.
  * Si el jugador está en un claim que no posee pero en el que tiene permiso, el activador se activará.
* Obligatorio: NO (Por defecto: false)

### ifPlayerMustBeOnHisClaimOrWilderness

* **SOPORTA LOS SIGUIENTES PLUGINS:**
  * GriefPrevention (Devuelve válido si el jugador está en un claim público de GriefPrevention)
  * Lands
  * GriefDefender
  * Residence
* Descripción: Comprueba si el jugador está en un claim en el que tiene permiso o en terreno salvaje (wilderness).
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisClaimOrWilderness: true
    ifPlayerMustBeOnHisClaimOrWildernessMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está en un claim que posee, el activador se activará.
  * Si el jugador está en un claim que no posee pero en el que tiene permiso, el activador se activará.
  * Si el jugador está en terreno salvaje, el activador se activará.
* Obligatorio: NO (Por defecto: false)

### ifPlayerMustBeOnHisIsland

* Descripción: Comprueba si el jugador está en su isla.
* **Plugins compatibles:**
  * **IridiumSkyblock**
  * **SuperiorSkyblock2**
  * **BentoBox**
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisIsland: true
    ifPlayerMustBeOnHisIslandMsg: '' #<- Here is where you will add the custom message
```

* Situaciones de ejemplo:
  * Si el jugador está en su isla, el activador se activará.
* Obligatorio: NO (Por defecto: false)

### ifPlayerMustBeOnHisPlot

* **SOPORTA LOS SIGUIENTES PLUGINS:**
  * PlotSquared
* Descripción: Comprueba si el jugador está en una parcela en la que tiene permiso.
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMustBeOnHisPlot: true
    ifPlayerMustBeOnHisPlotMsg: '' #<- Here is where you will add the custom message
```

* Obligatorio: NO (Por defecto: false)

### ifCursorDistance

* Descripción: Comprueba si la dirección a la que mira el jugador está libre o bloqueada
* Ejemplo:

```yaml
 playerConditions:
  ifCursorDistance: '>5'
  ifCursorDistanceMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * En `">5"`, mientras haya aire a más de 5 bloques frente a ti, el activador se activará
  * En `"<5"`, si hay bloques de aire 5 bloques por delante de ti, el activador no se activará
* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-mke7zyoe63jbpg2239.gif)

### ifLightLevel <a href="#iflightlevel" id="iflightlevel"></a>

* Descripción: Comprueba si el jugador está en un lugar con el nivel de luz correcto
* Ejemplo:

```yaml
playerConditions:
  ifLightLevel: ==5
  ifLightLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<5`, el activador solo se activará si el nivel de luz en la ubicación del jugador es menor de 5
  * Si el valor es `<=5`, el activador solo se activará si el nivel de luz en la ubicación del jugador es 5 o menos.
  * Si el valor es `==13`, el activador solo se activará si el nivel de luz en la ubicación del jugador es 13.
  * Si el valor es `>5`, el activador solo se activará si el nivel de luz en la ubicación del jugador es mayor de 5.
  * Si el valor es `>=5`, el activador solo se activará si el nivel de luz en la ubicación del jugador es 5 o más.
* Obligatorio: NO
* Más información: Puedes editar el mensaje de error añadiendo esto en el archivo: `ifLightLevelMsg: "&4&lError you need...."` o dentro del juego.

​Si el valor es `==13`, el activador solo se activará si el nivel de luz en la ubicación del jugador es 13.

![Si el valor es ==13, el activador solo se activará si el nivel de luz en la ubicación del jugador es 13.
El mensaje en el chat ejecuta un SENDMESSAGE %player\_light\_level% para indicar el nivel de luz en mi ubicación](https://media.ssomar.com/m/docs-img-giphy-krdtyjimugaf88pewk.gif)

### ifPlayerExp

* Descripción: Comprueba si el jugador tiene la cantidad de puntos de experiencia indicada.
* Ejemplo:

```yaml
playerConditions:
    ifPlayerExp: <8
    ifPlayerExpMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<120`, el activador solo se activará si los puntos de experiencia del jugador son menores de 120
  * Si el valor es `<=96`, el activador solo se activará si los puntos de experiencia del jugador son 96 o menos.
  * Si el valor es `==13`, el activador solo se activará si los puntos de experiencia del jugador son 13.
  * Si el valor es `>696`, el activador solo se activará si los puntos de experiencia del jugador son mayores de 696.
  * Si el valor es `>=45`, el activador solo se activará si los puntos de experiencia del jugador son 45 o más.
* Obligatorio: NO

### ifPlayerLevel

* Descripción: Comprueba si el jugador tiene la cantidad de niveles de experiencia indicada.
* Ejemplo:

```yaml
playerConditions:
    ifPlayerLevel: <76
    ifPlayerLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<700`, el activador solo se activará si los puntos de experiencia del jugador son menores de 700
  * Si el valor es `<=1296`, el activador solo se activará si los puntos de experiencia del jugador son 1296 o menos.
  * Si el valor es `==153`, el activador solo se activará si los puntos de experiencia del jugador son 5.
  * Si el valor es `>420`, el activador solo se activará si los puntos de experiencia del jugador son mayores de 420.
  * Si el valor es `>=99`, el activador solo se activará si los puntos de experiencia del jugador son 99 o más.
* Obligatorio: NO

### ifPlayerFoodLevel

* Descripción: Comprueba si el jugador tiene la cantidad de comida indicada
* Ejemplo:

```yaml
playerConditions:
    ifPlayerFoodLevel: '>=12'
    ifPlayerFoodLevelMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<10`, el activador solo se activará si la comida del jugador es menor de 10
  * Si el valor es `<=10`, el activador solo se activará si la comida del jugador es 10 o menos.
  * Si el valor es `==10`, el activador solo se activará si la comida del jugador es 10.
  * Si el valor es `>10`, el activador solo se activará si la comida del jugador es mayor de 10.
  * Si el valor es `>=10`, el activador solo se activará si la comida del jugador es 10 o más.
* Obligatorio: NO

### ifPlayerHealth

* Descripción: Comprueba si el jugador tiene la cantidad de vida indicada
* Ejemplo:

```yaml
playerConditions:
    ifPlayerHealth: ==20
    ifPlayerHealthMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<10`, el activador solo se activará si la vida del jugador es menor de 10
  * Si el valor es `<=10`, el activador solo se activará si la vida del jugador es 10 o menos.
  * Si el valor es `==10`, el activador solo se activará si la vida del jugador es 20.
  * Si el valor es `>10`, el activador solo se activará si la vida del jugador es mayor de 10.
  * Si el valor es `>=10`, el activador solo se activará si la vida del jugador es 10 o más.
* Obligatorio: NO

![Demostración mostrando la condición de vida](https://media.ssomar.com/m/docs-img-giphy-lmfxm0llvaeufjsj80.gif)

_Si el valor es `<=10`, el activador solo se activará si la vida del jugador es 10 o menos._

### ifPlayerSpeed

* Descripción: Comprueba la magnitud de la velocidad del jugador (velocidad de movimiento).
* Ejemplo:

```yaml
playerConditions:
    ifPlayerSpeed: '>=0.1'
    ifPlayerSpeedMsg: ''
```

* Situaciones de ejemplo:
  * Si el valor es `>=0.1`, el activador solo se activará si el jugador se está moviendo.
  * Si el valor es `>=0.3`, el activador solo se activará si el jugador está corriendo o moviéndose rápido.
  * Si el valor es `==0`, el activador solo se activará si el jugador está quieto.
* Obligatorio: NO

### ifPosX

* Descripción: Comprueba si el jugador está en el nivel X indicado.
* Ejemplo:

```yaml
playerConditions:
    ifPosX: <76
    ifPosXMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<700`, el activador solo se activará si el valor de la posición X del jugador es menor de 700
  * Si el valor es `<=1296`, el activador solo se activará si el valor de la posición X del jugador es 1296 o menos.
  * Si el valor es `==153`, el activador solo se activará si el valor de la posición X del jugador es 5.
  * Si el valor es `>420`, el activador solo se activará si el valor de la posición X del jugador es mayor de 420.
  * Si el valor es `>=99`, el activador solo se activará si el valor de la posición X del jugador es 99 o más.
* Obligatorio: NO

### ifPosY

* Descripción: Comprueba si el jugador está en el nivel Y indicado.
* Ejemplo:

```yaml
playerConditions:
    ifPosY: <76
    ifPosYMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<700`, el activador solo se activará si el valor de la posición Y del jugador es menor de 700
  * Si el valor es `<=1296`, el activador solo se activará si el valor de la posición Y del jugador es 1296 o menos.
  * Si el valor es `==153`, el activador solo se activará si el valor de la posición Y del jugador es 5.
  * Si el valor es `>420`, el activador solo se activará si el valor de la posición Y del jugador es mayor de 420.
  * Si el valor es `>=99`, el activador solo se activará si el valor de la posición Y del jugador es 99 o más.
* Obligatorio: NO

### ifPosZ

* Descripción: Comprueba si el jugador está en el nivel Z indicado.
* Ejemplo:

```yaml
playerConditions:
    ifPosZ: <76
    ifPosZMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el valor es `<700`, el activador solo se activará si el valor de la posición Z del jugador es menor de 700
  * Si el valor es `<=1296`, el activador solo se activará si el valor de la posición Z del jugador es 1296 o menos.
  * Si el valor es `==153`, el activador solo se activará si el valor de la posición Z del jugador es 5.
  * Si el valor es `>420`, el activador solo se activará si el valor de la posición Z del jugador es mayor de 420.
  * Si el valor es `>=99`, el activador solo se activará si el valor de la posición Z del jugador es 99 o más.
* Obligatorio: NO

### ifNearbyEntityCount

* Descripción: Comprueba el número de entidades dentro de un radio de 10 bloques alrededor del jugador.
* Ejemplo:

```yaml
playerConditions:
    ifNearbyEntityCount: '>=3'
    ifNearbyEntityCountMsg: ''
```

* Situaciones de ejemplo:
  * Si el valor es `>=3`, el activador solo se activará si hay al menos 3 entidades cerca del jugador.
  * Si el valor es `==0`, el activador solo se activará si el jugador está solo sin entidades cerca.
  * Cuenta todos los tipos de entidades (mobs, jugadores, ítems soltados, etc.).
* Obligatorio: NO

### ifNearbyPlayerCount

* Descripción: Comprueba el número de jugadores dentro de un radio de 10 bloques alrededor del jugador.
* Ejemplo:

```yaml
playerConditions:
    ifNearbyPlayerCount: '>=1'
    ifNearbyPlayerCountMsg: ''
```

* Situaciones de ejemplo:
  * Si el valor es `>=1`, el activador solo se activará si hay al menos otro jugador cerca.
  * Si el valor es `==0`, el activador solo se activará si no hay otros jugadores dentro de 10 bloques.
  * A diferencia de ifNearbyEntityCount, esto solo cuenta jugadores, no mobs ni otras entidades.
* Obligatorio: NO

### ifHasPermission - Not

* Descripción: Comprueba si el jugador tiene (o no) el permiso indicado.
* Ejemplo:

```yaml
playerConditions:   
    ifHasPermission:
    - test.ei
    ifHasPermissionMsg: '' #<- Here is where you will add the custom message.
    ifNotHasPermission:
    - test.ei
    ifNotHasPermissionMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador tiene el permiso `custom.jump.yes`, el activador se activará. Si el jugador no tiene ese permiso, no se activará.
  * **La condición real no se usa en este gif para mostrar correctamente el comportamiento de la condición. Cuando realmente uses esta condición, un error específico depende de ti**
* Obligatorio: NO

:::warning
**Para probarlo, es mejor no ser OP, porque si eres OP, tienes todos los permisos**
:::

![](https://media.ssomar.com/m/docs-img-giphy-iti1b991tskaavjoy7.gif)

### ifHasTag - Not

* Descripción: Comprueba si el jugador tiene la etiqueta seleccionada.
* Ejemplo:

```yaml
    playerConditions:
      ifHasTag:
      - thisisthenameofmytag
      ifHasTagMsg: ''
      ifNotHasTag:
      - thisisthenameofmytag
      ifNotHasTagMsg: ''
```

### ifTargetBlock - Not

* Descripción: Comprueba si el jugador está (no) seleccionando el bloque indicado.
* Ejemplo:

```yaml
playerConditions:
    ifTargetBlock:
    - SAND
    ifTargetBlockMsg: '' #<- Here is where you will add the custom message.
    ifNotTargetBlock:
    - DIRT
    ifNotTargetBlockMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador tiene el cursor puesto sobre arena, el activador se activará.
* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-hgontsuwxflzmtgxny.gif)

### ifIsInTheBlock - Not

* Descripción: Comprueba si el jugador está (no) dentro de un bloque.
* Ejemplo:

```yaml
playerConditions:
    ifIsInTheBlock:
     material0:
       material: COBWEB
    ifIsInTheBlockMsg: '' #<- Here is where you will add the custom message.
    ifIsNotInTheBlock:
     material0:
       material: WATER
       tags: '{level:0}'
    ifIsNotInTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está dentro de una COBWEB (cabeza o pies), el activador se activará.
  * Mientras el jugador no esté más de 1 bloque por encima del bloque en el que se encuentra, el activador se activará
* Obligatorio: NO (Por defecto: false)

Para las especificaciones de etiquetas, consulta esta lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

### ifIsOnTheBlock - Not

* Descripción: Comprueba si el jugador está (no) parado sobre un bloque.
* Ejemplo:

```yaml
playerConditions:
    ifIsOnTheBlock:
        blocks:
        - EXECUTABLEBLOCKS:FREE_HUT
        - DIAMOND_BLOCK
```

* Situaciones de ejemplo:
  * Si el jugador tiene piedra bajo sus pies, el activador se activará.
  * Mientras el jugador no esté más de 1 bloque por encima del bloque sobre el que está parado, el activador se activará
* Obligatorio: NO (Por defecto: false)

![](https://media.ssomar.com/m/docs-img-giphy-774fpgzucmhox69sww.gif)

<details>

<summary>Puedes añadir un grupo de bloques, estos son los grupos:</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES;
```

</details>

Para las especificaciones de etiquetas, consulta esta lista:

[https://minecraft.fandom.com/wiki/Block_states](https://minecraft.fandom.com/wiki/Block_states)

:::info
Soporta bloques de IA y EB
:::

### ifPlayerMounts - Not

* Descripción: Comprueba si el jugador está (no) montando la(s) "entidad(es) seleccionada(s)"
* Ejemplo:

```yaml
playerConditions:
    ifPlayerMounts:
    - COW
    - SILVERFISH
    - FOX
    ifPlayerMountsMsg: '&4&l&o[ExecutableItems] &cYou must mount on a specific entity to active the activator: &6%activator% &cof this item!'
    
    ifPlayerNotMounts:
    - PIG
    ifPlayerNotMountsMsg: '&4&l&o[ExecutableItems] &cdont mount pigs'
```

### ifInBiome - Not

* Descripción: Comprueba si el jugador está (no) en el bioma indicado.
* Ejemplo:

```yaml
playerConditions:
    ifInBiome:
    - TAIGA
    - EXTREME_HILLS
    ifInBiomeMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInBiome:
    - EXTREME_HILLS
    ifNotInBiomeMsg: '' #<- Here is where you will add the custom message.
```

*   Situaciones de ejemplo:

    * Si el jugador está en el Bioma de Bosque de Abedules y el Bioma de Bosque de Abedules está listado en la lista de mundos de la condición `ifInBiome:`, el activador se activará.

[Bioma](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)

* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-heszwx2lktnut8abdx.gif)

### ifInRegion - Not

* Descripción: Comprueba si el jugador está (no) en la región indicada (Región de WorldGuard).
* Ejemplo:

```yaml
playerConditions:
    ifInRegion:
    - area1
    ifInRegionMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInRegion:
    - mySpawnRegion
    ifNotInRegionMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está en la región "area1" y la región "area1" está listada en la lista de mundos de la condición `ifInRegion:`, el activador se activará.
* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-rn75fb0fgshrjizbce.gif)

### ifInWorld - Not

* Descripción: Comprueba si el jugador está (no) en el mundo indicado.
* Ejemplo:

```yaml
playerConditions:
    ifInWorld:
    - world_nether
    ifInWorldMsg: '' #<- Here is where you will add the custom message.
    
    ifNotInWorld:
    - world_the_end
    ifNotInWorldMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador está en el nether y el nether está listado en la lista de mundos de la condición `ifInWorld:`, el activador se activa.
* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-giphy-zghtf0hlk1npsywmnz.gif)

### ifPlayerHasEffect

* Descripción: Comprueba si el jugador tiene el/los efecto(s).
* Ejemplo:

```yaml
playerConditions:
    ifPlayerHasEffect:
    - "SPEED:0"        <- (Format: "EFFECT:MINIMAL_REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador tiene velocidad con **al menos un amplificador de 0**, el activador se activará
* Lista de todos los efectos: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obligatorio: NO


### ifPlayerNotHasEffect

* Descripción: Comprueba si el jugador no tiene el/los efecto(s).
* Ejemplo:

```yaml
playerConditions:
    ifPlayerNotHasEffect:
    - SPEED:2 # if the player has speed 1 = okay, but if has speed 2 or above, invalid
    ifPlayerNotHasEffectMsg: '&4&l&o[ExecutableItems] &cYou have an effect that you shouldn''t have to active the activator: &6%activator% &cof this item!'
    ifPlayerNotHasEffectCE: false
```

### ifCanBreakTargetedBlock

* Descripción: Comprueba si el jugador puede romper el bloque apuntado. Cuando el activador tiene un bloque (romper bloque, colocar bloque, clic en un bloque…) se comprueba ese bloque; de lo contrario, se comprueba el bloque al que mira el jugador (5 bloques máximo).
* Ejemplo:

```yaml
playerConditions:
    ifCanBreakTargetedBlock: true
```

:::info
Soporta GriefPrevention, IridiumSkyblock, SuperiorSkyblock, BentoBox, Lands, Worldguard, Towny, ProtectionStones, Residence
:::

### ifPlayerHasEffectEquals

* Descripción: Comprueba si el jugador tiene el/los efecto(s). **DEBE TENER EL AMPLIFICADOR EXACTO**
* Ejemplo:

```yaml
playerConditions:
    ifPlayerHasEffectEquals:
    - "SPEED:1"        #<- (Format: "EFFECT:REQUIRED_AMPLIFIER") 
    ifPlayerHasEffectEqualsMsg: '' #<- Here is where you will add the custom message.
```

* Situaciones de ejemplo:
  * Si el jugador tiene velocidad con **un amplificador de 1**, el activador se activará
* Lista de todos los efectos: [PotionEffectType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)
* Obligatorio: NO


### ifPlayerHasExecutableItems - Not

* Descripción: Comprueba si el jugador tiene (o no) el ExecutableItems indicado.
* Ejemplo:

```yaml
playerConditions:
      ifHasExecutableItems:
        condition1:
          multi-choices:
            '1':
              executableItem: test1
              amount: 1
              detailedSlots:
              - 38
            '2':
              executableItem: test2
              amount: 1
              detailedSlots:
              - 38
            '3':
              executableItem: test3
              amount: 1
              detailedSlots:
              - 38
        condition2:
          executableItem: ddx
          amount: 1
          detailedSlots:
          - 40
      ifHasExecutableItemsMsg: war
      ifHasNotExecutableItems:
        hasExecutableItem0:
          executableItem: Leto2025_Srdcova10
          amount: 1
          detailedSlots: []
      ifHasNotExecutableItemsMsg: famine
```

* El ejemplo anterior funciona así.
  * Debes tener un ítem ei con el id "test1", "test2" o "test3" en el slot 38 para que el activador se ejecute
  * Debes tener un ítem ei con el id "ddx" en el slot 40
* Obligatorio: NO

![](https://media.ssomar.com/m/docs-img-imgur-kaww8n0.png)

:::info
Copia correctamente el índice del ejemplo, algunas personas han pedido soporte y ninguna de ellas copió correctamente el formato.
:::

### ifPlayerHasItem - Not

* Descripción: Comprueba si el jugador tiene ítems específicos
* Ejemplo:

```yaml
playerConditions:
    ifHasItems:
        condition1:
          multi-choices:
            '1':
              material: DIAMOND_HELMET
              amount: 1
              detailedSlots:
              - 39
            '2':
              material: IRON_HELMET
              amount: 1
              detailedSlots:
              - 39
        condition2:
          material: DIAMOND_CHESTPLATE
          amount: 1
          detailedSlots:
          - 38
    ifHasItemMsg: '' #<- Here is where you will add the custom message.
    
    ifHasNotItems:
        hasItem0:
          material: STONE
          amount: 32
          detailedSlots:
          - -1 #<- -1 means main hand
    ifHasNotItemMsg: '&cYou should not have more than 32 stones in your main hand !'
```

* Situaciones de ejemplo:
  * Si el casco de diamante está en el slot 39, el activador se activará
* Obligatorio: NO
