---
description: >-
  Guía de SPlugins con ideas y métodos para crear ítems y habilidades comunes
  usando ExecutableItems.
source_hash: 267b9196d0e24db3
translated_at: '2026-10-03T10:30:07.076Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ideas de ítems, ¿cómo crear...?

## ¿Qué es esta página?

* Esta página será una explicación en términos generales de ideas comunes de ítems que la gente pregunta cómo hacer, así que, si quieres crear algo y no sabes cómo hacerlo, deberías echar un vistazo aquí primero, quizás tu pregunta esté aquí, o un método similar, que puedas pensar cómo recrear observando cómo funciona el plugin ^^

:::info
Esta página te dice cómo hacer cosas, o te da una idea, si no sabes cómo funciona una condición, un comando, un placeholder, etc, este no es el lugar para aprenderlo, puedes explorar la wiki para revisar sus secciones, aquí solo obtendrás la idea, no un tutorial.
:::

### Me gustaría que una habilidad de mi ExecutableItem no funcione en una región específica

* Dentro del activador que tiene tu "habilidad", ve a **playerConditions** y busca "**ifNotInRegion**" y úsala como quieras, con ella puedes poner en **lista negra** regiones.

### Me gustaría que una habilidad de mi ExecutableItem solo funcione en una región específica

* Dentro del activador que tiene tu "habilidad", ve a **playerConditions** y busca "**ifInRegion**" y úsala como quieras, con ella puedes poner en **lista blanca** regiones.

### Me gustaría que mi ítem tenga una confirmación antes de usarlo

* Solo usa la condición personalizada de EI dentro del activador y habilita "ifNeedPlayerConfirmation"

### Armadura que quema al enemigo que te golpea

* Crea un activador **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** y en **targetCommands** usa el comando BURN \<seconds>
* Si quieres lo mismo con entidades solo haz lo mismo pero con **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
No olvides configurar los **detailedSlots** correctos
:::

### Ítem que solo funciona en claim personal

* Dentro del activador que quieras añade el **playerCondition ifPlayerMustBeOnHisClaim**

### Ítem que solo funciona en claim personal y no en áreas sin reclamar

* Crea una condición de placeholder dentro del activador que quieras con este formato
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * parte1: %griefprevention\_currentclaim\_ownername%
  * parte2: Unclaimed

### ¿Cómo hacer un ítem que atraiga a otros jugadores hacia ti?

* Dentro del activador que quieras, en comandos, usa el comando AROUND combinado con CUSTOMDASH1 usando los placeholders de posición del jugador. Así, una vez que hagas click derecho, el comando CUSTOMDASH1 hará dash a la gente ALREDEDOR tuyo hacia TUS COORDENADAS, básicamente atraer gente.

### ¿Cómo crear un taladefoliador (treecapitator)?

* Activador **PLAYER\_BREAK\_BLOCK** y en **blockCommands** usa el comando **VEINBREAKER**

### Me gustaría deshabilitar el equipamiento del casco del jugador

* Crea un activador **PLAYER\_EQUIP\_THE\_EI** y habilita **cancelEvent**

### Deshabilitar el nametag al hacer click

* Crea un activador PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right y habilita cancel event

### Me gustaría crear una armadura que te dé más...

* Si lo que quieres es añadir **contenedores de corazón**, **velocidad**, **resistencia al retroceso**, **armadura**, etc, en tu armadura, espada, pico, lo que quieras, tienes que trabajar con **atributos**.

### Cómo ejecutar un comando al hacer click en un jugador

* Solo usa el activador PLAYER\_CLICK\_ON\_PLAYER y añade en comandos lo que quieras

:::info
Lo mismo si quieres ejecutar el comando al GOLPEAR pero con el activador PLAYER\_HIT\_PLAYER
:::

### Ítem que deshabilita el knockback

* La mejor manera de lograr esto es usando atributos y KNOCKBACK RESISTANCE, pero si quieres que funcione en cualquier parte de tu inventario, crea un activador PLAYER\_RECEIVE\_HIT\_GLOBAL y teletransporta al jugador a sí mismo, algo así
  * execute at %player% run tp %player% \~ \~ \~

### Me gustaría un ítem que dé lentitud a toda la gente alrededor mío

* Usa el comando AROUND y da el efecto con los placeholders de around. Revisa el comando AROUND en la wiki para más información.

### Deshabilitar que el tinte de color se aplique en carteles y collares de lobo

* Para el CARTEL (SIGN):
  * Activador: PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * Y habilita cancel event
* Para los collares de lobo:
  * Activador: PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * Y habilita cancel event

### Crear un lobo que se quede por "x" segundos y luego desaparezca

Si quieres crear algo como una mascota lobo que dure "x" segundos añade esto:

```
playerCommands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armadura que deshabilita el daño por fuego de la lava

* Crea un activador PLAYER\_RECEIVE\_HIT\_GLOBAL y en detailedDamage añade LAVA, FIRE\_TICK y FIRE, luego habilita cancelEvent en ese activador.
*   Asegúrate de seleccionar el detailedSlot correcto de la pieza de armadura que estás usando

    Si quieres deshabilitar la animación de fuego, lo más cercano que puedes conseguir es crear un activador LOOP con el comando REMOVEBURN.

### Armadura que permite respirar en el agua

* Crea un activador LOOP, selecciona el detailedSlot correcto y da al jugador el efecto water\_breathing.

### Deshabilitar que la armadura de cuero teñida se lave en el caldero

* Solo crea un activador RIGHT\_CLICK luego typeTarget: ONLY\_BLOCK\_CLICK, detailedBlocks: CAULDRON y habilita cancel event.

### Ítem que abre una GUI

* Los plugins de GUI normalmente tienen un lugar para añadir un jugador, por ejemplo, el comando sería /opengui \<player>, así que dentro de tu ítem tienes que añadir /opengui %player%
  * si el comando es diferente solo cambia eso, por ejemplo /enchanttable %player%
* Si tu plugin no tiene esto, en lugar de añadir un lugar para el jugador, usa SUDOOP, por ejemplo:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Evitar que se lance el tridente

* Añade un activador PLAYER\_LAUNCH\_PROJECTILE y cancelEvent en true

### Me gustaría deshabilitar el daño por caída de mi armadura

* Usa el activador PLAYER\_RECEIVE\_HIT\_GLOBAL y especifica en detailedDamage FALL, luego habilita cancel event

### Deshabilitar recoger agua con botella

* PLAYER\_RIGHT\_CLICK y habilita cancel event

### Comprobar si un jugador está pescando a otro jugador

* Usa el activador PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, un activador LOOP y una variable. (También algunos activadores para prevenir bugs)
  * Una vez que la CAÑA golpee al jugador, PROJECTILE\_HIT\_PLAYER se ejecutará, así que configura tu variable a "%target%"
  * El activador loop solo funcionará si la variable es diferente de "NO", y puedes usar la variable para apuntar al jugador pescado.
  * Y si el jugador PESCA al objetivo, configura la variable a "NO", así ahora se reinicia y deja de funcionar
  * Ahora los activadores para prevenir bugs son PLAYER\_DROP\_THE\_EI y PLAYER\_DESELECT\_THE\_EI, reinicia la variable en estos O cancela el evento.

### Invocar un rayo en el cursor

* Primero crea un activador PLAYER\_ALL\_CLICK o PLAYER\_RIGHT\_CLICK o PLAYER\_LEFT\_CLICK
* Luego en comandos usa el comando personalizado [SPAWNENTITYONCURSOR](/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * Por defecto no hace daño así que adicionalmente puedes añadir el comando personalizado `DAMAGE <number>`

### Cómo aumentar la vida máxima "x" cada vez que el activador se dispara

* Para aumentar tu vida máxima necesitas PlaceholderAPI y la expansión Player, y el comando que usarás es:
  * execute run attribute %player% minecraft:generic.max\_health base set %player\_max\_health%+2

### Cómo recuperar vida por golpe

* En un activador relacionado con golpear como PLAYER\_HIT\_PLAYER y PLAYER\_HIT\_ENTITY usa el comando REGAIN\_HEALTH en playerCommands, revisa ese comando en la sección Commands para más información.
* Si quieres recuperar el mismo daño que hiciste usa el placeholder de EI **%last\_damage**_**\_**_**dealt%**

### Arco que explota cuando el proyectil golpea el bloque

* Crea un activador PROJECTILE\_HIT\_BLOCK en tu ítem, y en comandos puedes usar
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * Después de esa línea necesitarás un execute run kill %projectile\_uuid%
  * o lo mismo de antes pero invocando un creeper

### Me gustaría deshabilitar la carga del arco o la ballesta

* Esto no es posible usando ExecutableItems todavía, lo único que EI puede hacer es evitar que el arco o la ballesta disparen el proyectil, ¿pero cargarlo? no.

### Cómo crear una armadura que deshabilite la congelación del jugador (1.18)

* Puedes ejecutar el comando FREEZE en loop, así:

```
    playerCommands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### Quiero que el activador solo funcione si el jugador tiene cierto valor en un scoreboard

Solo usa la expansión Scoreboard de PlaceholderAPI, luego usa sus placeholders en la sección placeholderCondition dentro de tu activador ^^
