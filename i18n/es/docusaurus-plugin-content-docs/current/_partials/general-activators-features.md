---
description: >-
  Guía de SPlugins sobre cooldowns, requisitos y modificaciones de activadores
  en ExecutableItems y ExecutableBlocks.
source_hash: a103e5315ef03316
translated_at: '2026-10-03T10:37:14.796Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Nombre visible del activador

* Info: Valor de tipo String del nombre visible del activador, no tiene mucho uso, se utiliza para que el desarrollador pueda reconocer un activador de otro. También aparece en el mensaje por defecto "timeLeft" dentro del archivo locale.yml.
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Modificación del uso del activador <CustomTag type="premium" />

* Info: Función muy importante, el valor del uso del ítem se modificará mediante este valor entero. Esto significa que, si este valor es positivo, el uso aumentará, y si este valor es negativo, el uso disminuirá.
* Ejemplo: (Aumentando el valor del uso en 1 cada vez que se activa este activador)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Modificación de variables

* Info: Es una lista de modificaciones de variables para aplicar a las variables dentro de tu ítem. Es útil, por ejemplo, para aumentar el valor de una variable, para sobrescribir un valor antiguo de una variable por otro valor, etc.
  * `variableName`: Nombre de la variable a la que apunta el variableModification
  * `type`: Tipo de variableModification que estás usando
    * SET: Sobrescribe el valor antiguo de la variable y establece el valor de la modificación.
    * ADD: Aplica cálculo matemático al valor actual de la variable usando el valor de la modificación. Necesita que la variable sea de tipo NUMBER. Si el valor de la modificación es positivo, aumentará; si es negativo, disminuirá.
    * LIST\_ADD: Aplicado a variables de tipo LIST, añade el valor de la modificación a la lista de la variable.
    * LIST\_CLEAR: Aplicado a variables de tipo LIST, vacía la lista de la variable.
    * LIST\_REMOVE: Aplicado a variables de tipo LIST, elimina el valor de la modificación de la lista de la variable.
  * `modification`: Valor de la modificación. Se aplica a la variable según el tipo de modificación.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* ¡Ten cuidado al usar placeholders aquí! No hay ningún problema con eso, solo asegúrate de que el resultado devuelto sea un NUMBER, de lo contrario necesitarás usar funciones de tipo STRING. Por ejemplo, actualicemos un variableModification con otra variable que sabemos que devuelve un NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Valor booleano que representa si el evento relacionado con el activador se va a cancelar o no.
  * Esto puede ser difícil de entender, creo que es una de las cosas que la mayoría de la gente no comprende, pero para explicarlo debes saber que cada ACTIVATOR está relacionado con un evento de Minecraft, siguiendo la idea de que este evento ocurre y luego se activa el ACTIVATOR. Si habilitamos cancelEvent, que es una función del activador, eso significa que el evento ocurre, luego casi al mismo tiempo el activador se activa y cancela el evento, de modo que el activador sigue ejecutando todas sus funciones habilitadas pero el evento no ocurrió, quedando cancelado. Por ejemplo:
    * Si el activador es PLAYER\_HIT\_PLAYER y habilitamos cancelEvent, entonces el jugador no podrá golpear al jugador porque todos los golpes se cancelan/ignoran.
    * Si el activador es PLAYER\_BLOCK\_BREAK y habilitamos cancelEvent, entonces el jugador no podrá romper bloques porque el evento se cancela/ignora. 
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Valor booleano que, si se habilita, impide que el activador se ejecute si otro plugin ya ha cancelado el evento que lo activa.
  * Esto es útil cuando tienes plugins como WorldGuard que cancelan eventos de daño (por ejemplo, en zonas sin PvP) u otros ExecutableItems que cancelan eventos de daño (por ejemplo, botas con PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Sin esta función, activadores como PLAYER\_BEFORE\_DEATH se seguirían activando aunque el daño haya sido cancelado, porque reaccionan al cálculo de daño en bruto en lugar del resultado final.
  * Un caso de uso común es un ítem personalizado de Totem of Undying que usa PLAYER\_BEFORE\_DEATH. Sin esta función habilitada, el tótem se activaría y se consumiría incluso cuando el jugador esté en una zona protegida por WorldGuard donde el daño se cancela, desperdiciando el ítem. Habilitar esta función garantiza que el tótem solo se active ante daño letal real.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Valor booleano que hace que todos los comandos ejecutados desde funciones de comandos como (playerCommands, blockCommands, entityCommands y targetCommands) no tengan salida en la **consola**.
  * Por ejemplo, usar el comando vanilla de Minecraft effect give \[...] normalmente tiene una salida en la consola con este formato: "Applied effect strength to \<playerName>", bueno, para desactivar esta salida puedes habilitar esta función    
* Ejemplo: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Es importante entender que esta función está hecha para desactivar la salida de comandos vanilla; si usas el comando de otro plugin y este tiene una salida en consola, no nos corresponde a nosotros solucionarlo, el otro plugin debería proporcionarte una forma de ocultar esos mensajes. De todos modos, como somos amables, tienes una forma de personalizar qué mensajes se ocultan, de manera que puedas tener los mensajes por defecto silenciados por silenceOutput y además añadir mensajes personalizados que quieras agregar. Este proceso se gestiona desde el archivo de configuración de Score, más información aquí y cómo hacerlo aquí [General config](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Player cooldown

* Info: Las opciones de cooldown son el cooldown aplicado al jugador que activó este activador, para este activador.
* Si el activador es PLAYER\_RIGHT\_CLICK, tiene algunos comandos \[] y el cooldown es de 30 segundos, si el jugador activa este activador necesitará esperar 30 segundos para poder activarlo de nuevo. Esto no impide que otro jugador lo ejecute durante esos 30 segundos, siempre que ese jugador tampoco esté en cooldown. Esta es una función por jugador
  * `cooldown`: Valor entero que representa la cantidad de tiempo que durará el cooldown para este activador.
  * `isCooldownInTicks`: Valor booleano que establece que el tiempo de cooldown esté en ticks (20 ticks = 1 segundo)
  * `cooldownMsg`: Valor de tipo String que se mostrará cuando el jugador intente activar el activador mientras está en cooldown
  * `displayCooldownMessage`: Valor booleano para permitir o impedir que se muestre el mensaje de cooldownMsg si el jugador intenta activar el activador mientras está en cooldown.
    * Placeholders que se pueden usar:
      * %time% -> el cooldown completo en segundos
      * %time\_H% -> la parte de horas del cooldown
      * %time\_M% -> la parte de minutos del cooldown
      * %time\_S% -> la parte de segundos del cooldown 
  * `cancelEventIfInCooldown`: Valor booleano que cancela el evento del activador si el jugador está en cooldown. Esto significa que, si el activador es PLAYER\_HIT\_ENTITY, mientras esté en cooldown todos los eventos de PLAYER\_HIT\_ENTITY del jugador se cancelarán y por tanto serán ignorados, deshabilitando la capacidad del jugador de atacar entidades (recordatorio: ese activador apunta a todas las entidades excepto jugadores)
  * `pauseWhenOffline`: Valor booleano que pausa el cooldown si el jugador está desconectado. Para entenderlo mejor, si es false, el tiempo de cooldown no se detiene, así que puede salir del servidor, esperar el cooldown y volver a entrar y podrá activar el activador de nuevo. Pero si esta función está habilitada y salió del servidor mientras estaba en cooldown, cuando vuelva a entrar tendrá el mismo tiempo de cooldown restante que tenía cuando salió.
  * `pausePlaceholdersConditions`: Es similar a pauseWhenOffline, pero solo pausa según ciertas placeholdersConditions. Un ejemplo de uso sería pausar el cooldown si el jugador tiene rango VIP. Así el rango VIP tiene acceso a esa función.
  * `enableVisualCooldown`: Habilita un cooldown visual para el ítem.
* Ejemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Global cooldown

* Info: Es la misma idea que cooldown, pero en lugar de ser el cooldown aplicado al jugador, es un cooldown global que se aplica a todos los jugadores. Esto significa que, si alguien activa el activador y este tiene 30 segundos de cooldown global, nadie podrá usarlo hasta que pasen esos 30 segundos. Tiene las mismas funciones que cooldown.
  * `cooldown`: Valor entero que representa la cantidad de tiempo que durará el cooldown para este activador.
  * `isCooldownInTicks`: Valor booleano que establece que el tiempo de cooldown esté en ticks (20 ticks = 1 segundo)
  * `cooldownMsg`: Valor de tipo String que se mostrará cuando un jugador intente activar este activador mientras está en cooldown
  * `displayCooldownMessage`: Valor booleano para permitir o impedir que se muestre el mensaje de cooldownMsg si el jugador intenta activar el activador mientras está en cooldown.
    * Placeholders que se pueden usar:
      * %time% -> el cooldown completo en segundos
      * %time\_H% -> la parte de horas del cooldown
      * %time\_M% -> la parte de minutos del cooldown
      * %time\_S% -> la parte de segundos del cooldown 
  * `cancelEventIfInCooldown`: Valor booleano que cancela el evento del activador si el jugador está en cooldown. Esto significa que, si el activador es PLAYER\_HIT\_ENTITY, mientras esté en cooldown todos los eventos de PLAYER\_HIT\_ENTITY del jugador se cancelarán y por tanto serán ignorados, deshabilitando la capacidad del jugador de atacar entidades (recordatorio: ese activador apunta a todas las entidades excepto jugadores)
  * `enableVisualCooldown`: Habilita un cooldown visual para el ítem.
* Ejemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Required features <CustomTag type="premium" />

Esta sección sirve para configurar funciones relacionadas con requisitos necesarios para poder activar el activador. Esto significa que, si el evento ocurre, el activador solo se ejecutará si el jugador cumple con esta configuración requerida. Los ítems se consumirán en el proceso.

* Si no quieres que los ítems se consuman, no uses la función "required", sino usa condiciones, que son solo condiciones y no consumen.

### requiredExecutableItems <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito uno o varios ExecutableItem(s). Si el jugador cumple este requisito, se consumirá y el activador se ejecutará.
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `executableItem`: ID del ExecutableItem que se necesita como requisito
  * `amount`: Entero con la cantidad de ítems necesarios como requisito.
  * `usageConditions`: Condición opcional de tipo String en formato de `(==, !=, >, <, >=, <=){number}` para la condición de uso del ExecutableItem.
    * Esto significa que, si la condición es >=5, entonces el requisito es que el Executableitem elegido debe estar en el inventario del jugador como requisito, pero también necesita tener un uso mayor o igual a 5.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito ítem(s) vanilla. Si el jugador cumple este requisito, se consumirá y el activador se ejecutará.
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `material`: MATERIAL vanilla que se necesita como requisito.
  * `amount`: Entero con la cantidad de ítems necesarios como requisito.
  * `notExecutableItem`: Valor booleano para permitir o no que el requisito pueda ser un ExecutableItem.
    * Esto significa que, si el requisito es STONE y esta función no está habilitada, entonces el requisito se cumplirá con STONE(s) vanilla y con ExecutableItem(s) con material STONE, por lo que se consumirán. Si no quieres que esto ocurra, habilita esta función.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: Esta función necesita el plugin llamado "Vault". Esta función permite que el activador tenga como requisito dinero de Vault. Si el jugador cumple este requisito, se consumirá y el activador se ejecutará.
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `requiredMoney`: Valor de tipo Float que representa la cantidad de dinero necesaria como requisito.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito niveles de experiencia vanilla. Si el jugador cumple este requisito, se consumirá y el activador se ejecutará. No confundas niveles de experiencia con experiencia, más información aquí [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `requiredLevel`: Valor entero que representa la cantidad de nivel(es) de experiencia vanilla de Minecraft necesarios como requisito.
* Ejemplo:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito experiencia vanilla de Minecraft. Si el jugador cumple este requisito, se consumirá y el activador se ejecutará. No confundas experiencia con niveles de experiencia, son cosas diferentes, más información en [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `requiredExperience`: Valor entero que representa la cantidad de experiencia necesaria como requisito.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito maná de [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) y [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). Si el jugador cumple este requisito, se consumirá y el activador se ejecutará.
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `requiredMana`: Valor entero que representa la cantidad de maná necesaria como requisito.
* Ejemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatible con AureliumSkills, MMOCore y AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: Esta función permite que el activador tenga como requisito magia de [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). Si el jugador cumple este requisito, se consumirá y el activador se ejecutará.
  * `cancelEventIfError`: Valor booleano que representa si el evento se cancelará si el jugador no tiene el requisito.
    * Esto significa, por ejemplo, supongamos que hay un evento de PLAYER\_HIT\_ENTITY, y ocurre, pero el jugador no tiene los requisitos necesarios para activar el activador; si esta función está habilitada, el evento de PLAYER\_HIT\_ENTITY se cancelará, de modo que aunque el jugador esté haciendo clic/golpeando a la entidad, la entidad no recibe daño porque en realidad el evento no está ocurriendo debido a que está siendo cancelado.
  * `errorMessage`: Mensaje de tipo String que se enviará al jugador si no cumple el requisito.
  * `magicID`: El ID de la magia en EcoSkills.
  * `amount`: Cantidad de magia del magicID necesaria como requisito.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
