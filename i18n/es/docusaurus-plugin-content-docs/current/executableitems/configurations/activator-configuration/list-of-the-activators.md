---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Lista de todos los activadores de ExecutableItems con su descripción,
  funciones exclusivas y ejemplos para ejecutar acciones personalizadas.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T18:15:04.085Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Lista de activadores

## Activadores de ExecutableItems

Aquí tienes la lista de activadores disponibles con su descripción y algunos ejemplos. Los activadores te permiten ejecutar acciones personalizadas, pueden tener condiciones, ejecutar comandos, tener cooldown, etc.

:::warning
Un activador cuyo `option:` no está en esta lista (error tipográfico, activador de otro plugin…) está **desactivado**: nunca se ejecuta, y la consola muestra un error con los nombres de opción más cercanos cuando se carga el ítem.
:::

Los activadores premium se identifican con la etiqueta: <CustomTag type="premium" />

Las activatorFeatures son funciones exclusivas de ese activador.

### PLAYER\_ALL\_CLICK

* Info: Activador que se dispara cuando el jugador hace clic izquierdo o derecho con el ítem. 
  * No puedes diferenciar los clics, para eso usa activadores distintos como PLAYER\_RIGHT\_CLICK o PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget: ONLY\_BLOCK, estas funciones estarán disponibles.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos: 
  * Warping Stone: teletransporta al instante al jugador 5 bloques en la dirección en la que mira. Cooldown: 10 segundos.
  * Healing Totem: al hacer clic, cura al jugador 4 corazones y le otorga Regeneration I durante 5 segundos.
  * Thunder Rod: lanza un rayo al enemigo más cercano en un radio de 10 bloques.
  * Gravity Boots: lanza al jugador 3 bloques por el aire y anula el daño por caída durante 5 segundos.
  * Explosive Rune: crea una pequeña explosión en la ubicación del jugador que empuja a los mobs cercanos, pero no daña el terreno.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic derecho en una cama y se acuesta en ella. Si el jugador no se acuesta, este activador no se dispara. No se dispara cuando el jugador duerme, solo por la acción de entrar en la cama.
* Ejemplos:
  * Void Sleep: al entrar en la cama, el jugador es teletransportado a una dimensión de sueños construida a medida para explorarla.
  * Lunar Shield: otorga Absorption IV durante 5 minutos al dormir en la cama, proporcionando salud extra temporal.
  * Nightmare Curse: genera un phantom hostil sobre la cama cuando el jugador entra en ella, obligándolo a luchar antes de poder dormir en paz.
  * Dreamwalker’s Blessing: al entrar en la cama, el jugador obtiene Regeneration II hasta que se despierta (la acción de despertar sería el activador PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador sale de la cama. ¡Ten cuidado! Este activador se dispara cuando el jugador duerme y es de día, por lo que sale de la cama, pero también se dispara cuando el jugador sale de la cama a mitad del sueño: es simplemente la acción de salir de la cama.
  * Si quieres que se active solo cuando el jugador ha dormido, puedes usar este activador + worldCondition -> ifWorldTime para comprobar si realmente es de día.
* Ejemplos:
  * Morning Boost: al salir de la cama, el jugador obtiene Speed II y Haste II durante 60 segundos para empezar el día con energía.
  * Phantom's Warning: si el jugador sale de la cama antes de dormir por completo, aparece un phantom cerca como consecuencia.
  * Dream Collector: al despertar, el jugador recibe un libro encantado aleatorio como "recuerdo de un sueño".
  * Energy Surge: al salir de la cama, la barra de hambre del jugador se restablece por completo, simulando una noche bien descansada.

### PLAYER\_BEFORE\_DEATH

* Info: Activador que se dispara cuando el jugador muere. La diferencia entre este activador y el activador PLAYER\_DEATH es que este se dispara primero, lo que ofrece la posibilidad de salvar al jugador antes de que muera.
  * Para entenderlo mejor: los tótems de la inmortalidad de vanilla se activan con este activador para aplicar sus efectos.
* Ejemplos:
  * Soulbound Amulet: cuando el jugador está a punto de morir, es teletransportado a su punto de aparición con 2 corazones y Regeneration II temporal.
  * Last Stand Shield: cuando está al borde de la muerte, el jugador obtiene Resistance III y Absorption durante 5 segundos, dándole la oportunidad de contraatacar.
  * Phoenix Blessing: cuando la muerte es inminente, el jugador explota en llamas, infligiendo daño de fuego a los enemigos y reviviendo con la mitad de la salud.
  * Undead Pact: si el jugador fuera a morir, revive con 3 corazones, pero no podrá usar armas durante 10 segundos.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador rompe un bloque.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Ore Booster Pickaxe: al romper un bloque de mineral, hay un 20 % de probabilidad de duplicar el drop.
  * Nature’s Wrath Axe: romper un tronco tiene un 10 % de probabilidad de invocar a un espíritu de árbol hostil (mob personalizado).
  * Cursed Excavation: al romper piedra, hay un 5 % de probabilidad de generar silverfish o aplicar Mining Fatigue durante 5 segundos.
  * Explosive Demolition Hammer: al romper bloques, también se rompen los bloques circundantes, pudiendo romper en 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador bloquea con el escudo un golpe que viene de una entidad.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Ejemplos:
  * Thorned Shield: al bloquear un ataque, el atacante recibe 3 corazones de daño.
  * Shockwave Defense: bloquear un ataque con éxito empuja hacia atrás a todos los enemigos cercanos en un radio de 5 bloques.
  * Energy Absorption: al bloquear un ataque, el jugador regenera 1 corazón y obtiene Resistance I durante 3 segundos.
  * Frozen Guard: si se bloquea un ataque, el atacante queda congelado en el sitio (Slowness IV) durante 2 segundos.
  * Blazing Counter: bloquear un ataque prende fuego al atacante durante 4 segundos.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador bloquea con el escudo un golpe que viene de un jugador.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Ejemplos:
  * Retribution Shield: al bloquear un ataque de un jugador, el atacante es desarmado al instante y suelta su arma al suelo.
  * Vampiric Guard: al bloquear un ataque con éxito, el jugador absorbe una parte de la salud del atacante (curando 2 corazones).
  * Dimensional Rift: si se bloquea el ataque de un jugador, hay un 20 % de probabilidad de que sea teletransportado a 10 bloques de distancia en una dirección aleatoria.
  * Adrenaline Block: al bloquear un ataque, el jugador obtiene al instante Speed II y Strength I durante 5 segundos, lo que permite un contraataque rápido.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador coloca un bloque.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Living Roots: al colocar un brote, hay un 10 % de probabilidad de que crezca al instante hasta convertirse en un árbol.
  * Runic Inscription: colocar un bloque de piedra tiene un 5 % de probabilidad de convertirlo en una Runed Stone, que emite partículas y otorga Haste I a los jugadores cercanos durante 10 segundos.
  * Al colocar TNT, hay una pequeña probabilidad (5 %) de que se encienda de inmediato, creando una explosión inesperada.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador rompe el escudo de otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Ejemplos:
  * Shatter Strike: al romper el escudo de un jugador, el atacante obtiene Strength I durante 5 segundos, potenciando su siguiente ataque.
  * Al destruir un escudo, se produce una pequeña explosión en la ubicación del objetivo, empujándolo 5 bloques hacia atrás.
  * Cuando un escudo se hace añicos, el objetivo recibe **Wither I** durante **5 segundos**, drenando lentamente su salud.
  * Dimensional Fracture: al romper el escudo de un jugador, el objetivo es teletransportado momentáneamente 5 bloques hacia arriba, desorientándolo antes de que caiga de nuevo.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador cepilla un bloque.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Cursed Dust: si el jugador cepilla un bloque sospechoso, hay un 10 % de probabilidad de que quede cegado temporalmente al surgir una nube de polvo maldito a su alrededor.
  * Buried Riches: cepillar un bloque tiene una pequeña probabilidad de recompensar al jugador con una pepita de oro o una esmeralda, simulando el descubrimiento de un tesoro perdido.
  * Temporal Echoes: al cepillar un bloque de artefacto, el jugador oye leves susurros del pasado que insinúan secretos de la historia ocultos cerca.

### PLAYER\_BUCKET\_ENTITY

* Info: Activador que se dispara cuando el jugador usa un cubo y captura una entidad en él.
  * Un ejemplo es cuando guardas un pez dentro de un cubo con agua.
  * Si quieres ejecutar algo al "intentar" capturar con el cubo una entidad que no se puede capturar, este activador no se ejecutará; debes usar PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Ejemplos:
  * Instant Fillet: en lugar de capturar un pez en un cubo, el jugador recibe al instante pescado crudo en su inventario, como si lo hubiera fileteado con maestría en el momento.
  * Essence Extraction: al usar un cubo con un axolotl, en lugar de capturarlo, el jugador recibe una poción "Axolotl Mucus", que otorga Regeneration I durante 10 segundos.

### PLAYER\_CHANGE\_WORLD

* Info: Activador que se dispara cuando el jugador cambia a un mundo distinto.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
* Ejemplos:
  * Dimensional Adaptation: cuando el jugador entra en un mundo nuevo, recibe una mejora temporal aleatoria (Speed, Strength o Night Vision durante 30 segundos) mientras su cuerpo se ajusta al nuevo entorno.
  * Weight of Realms: si un jugador entra en el Nether o en el End, obtiene temporalmente Slowness II durante 10 segundos, simulando el cambio brusco de gravedad.
  * Forgotten Memories: al cambiar de mundo, hay una pequeña probabilidad (5 %) de que el jugador pierda un ítem aleatorio del inventario, simulando un "recuerdo" olvidado.
  * Realmwalker’s Favor: entrar en un mundo nuevo otorga un ítem de botín misterioso, acorde con la dimensión (por ejemplo, el Nether da un lingote de oro aleatorio, el End da una Ender Pearl, etc.), como si fuera un regalo de una fuerza desconocida.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic en una entidad y en NPC(s) de Citizens.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Ejemplos:
  * Beast Tamer’s Bond: hacer clic en un Wolf, Cat u Horse mientras sostienes un ítem especial (por ejemplo, una Golden Apple) le otorga Speed II y Regeneration temporales durante 60 segundos.
  * Hidden Pocket: hacer clic en un Zombie Piglin con lingotes de oro tiene un 5 % de probabilidad de recibir al instante un ítem de botín aleatorio del Nether en lugar de tener que hacer trueque.
  * Gourmet’s Choice: hacer clic en una Cow, Pig o Chicken mientras sostienes un Knife (ítem personalizado) proporciona al instante un drop de carne de mayor calidad (por ejemplo, Cooked Steak en lugar de Raw Beef).
  * Battle Focus: hacer clic en un Iron Golem mientras sostienes un Shield le otorga Resistance II y Knockback Resistance temporales durante 30 segundos, permitiéndole aguantar más daño.
  * Final Tribute: hacer clic en un Skeleton o Wither Skeleton mientras sostienes bloques de huesos le da al jugador un breve impulso de Speed II, como si absorbiera la energía de un antiguo guerrero.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Activador que se dispara cuando el jugador hace clic en un jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Ejemplos:
  * Shared Fortune: hacer clic en un jugador mientras sostienes un bloque de esmeralda divide tus niveles de XP a la mitad, dando al otro jugador el XP perdido al instante.
  * Hacer clic en un compañero de equipo mientras sostienes una Potion of Healing le transfiere al instante la mitad de tu salud, convirtiéndose en un salvavidas estratégico de último segundo.
  * Tactical Mark: hacer clic en otro jugador mientras te agachas le aplica un efecto de resplandor durante 10 segundos, haciéndolo visible para los compañeros de equipo en una pelea PvP.
  * Oath of Protection: hacer clic en un jugador mientras sostienes un Shield le otorga Resistance I durante 30 segundos, actuando como un efecto de guardián temporal.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador entra al servidor.
* Ejemplos:
  * Realm’s Welcome: al iniciar sesión, el jugador recibe un impulso temporal de Speed I y Haste I durante 30 segundos, simulando una ráfaga de energía al entrar en el mundo.
  * Echo of the Past: el primer mensaje que ve el jugador en el chat es un mensaje de "recuerdo" personalizado.
  * Daily Fortune: al iniciar sesión, el jugador recibe una mejora o penalización menor aleatoria durante 10 minutos (por ejemplo, Luck I, Speed I o Slowness I), haciendo que cada sesión sea ligeramente distinta.
  * Dimensional Echo: si el jugador inicia sesión desde otro mundo (Nether o End), experimenta brevemente un efecto de partículas en remolino y oye sonidos ambientales distorsionados durante unos segundos antes de estabilizarse por completo.

### PLAYER\_CONSUME

* Info: Activador que se dispara cuando el jugador come o consume un ítem con éxito.\
  Ten cuidado, solo funciona con ítems de Minecraft que sean comestibles o con los que se transformen en ítems comestibles mediante las [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Activador que se dispara cuando el jugador come o consume con éxito el propio ExecutableItem. \
  Ten cuidado, solo funciona con ExecutableItems que sean comestibles o con los que se transformen en ítems comestibles mediante las [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Activador que se dispara cuando el jugador lanza un proyectil con un comando de SCore como:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (En este activador la entidad es el proyectil)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Para poner en lista blanca/negra algunos proyectiles)

### PLAYER\_DEATH

* Info: Activador que se dispara cuando el jugador muere.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador deja de seleccionar el ExecutableItem.
  * Esto ocurre cuando el ExecutableItem está en la mano principal y cambias el ítem que sostienes, es decir, lo "deseleccionas". 

### PLAYER\_DISABLE\_FLY

* Info: Activador que se dispara cuando el jugador deja de volar. 
  * La acción de volar significa literalmente volar; no es planear ni estar en el aire por una caída.

### PLAYER\_DISABLE\_GLIDE

* Info: Activador que se dispara cuando el jugador deja de planear. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador deja de agacharse. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador deja de correr. 

### PLAYER\_DISABLE\_SWIM

* Info: Activador que se dispara cuando el jugador deja de nadar (natación de la 1.13)
* 
### PLAYER\_DISCONNECT

* Info: Activador que se dispara cuando el jugador sale del servidor.

### PLAYER\_DISMOUNT

* Info: Activador que se dispara cuando el jugador se desmonta o se baja de una entidad que estaba montando. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Activador que se dispara cuando el jugador suelta un ítem. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador suelta el ExecutableItem. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace cambios en el libro y la pluma y pulsa hecho o firma el libro. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador rompe el ExecutableItem por la rotura normal de durabilidad de vanilla.

### PLAYER\_EMPTY\_BUCKET

* Info: Activador que se dispara cuando el jugador vacía un cubo ExecutableItem. También se dispara, por ejemplo, cuando anegas un bloque o llenas un caldero con dicho líquido.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Cuando este activador se activa, el bloque objetivo es la ubicación donde se supone que se colocará el agua. Con esa información, puedes usar SETBLOCK para reemplazar el agua por otra cosa si quieres.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador **empieza** a volar. Este activador se dispara por la acción de "pulsar dos veces la barra espaciadora teniendo el permiso de volar".
  * Esto significa que no se dispara si ya estás volando; se dispara por la acción de cambiar el estado de vuelo mediante la "doble pulsación de la barra espaciadora".
* Ejemplos:
  * Lightning Takeoff: cuando se activa el vuelo, un pequeño rayo sin daño cae sobre la posición del jugador para lograr un efecto dramático.
  * Aerial Boost: al empezar a volar, el jugador obtiene un efecto temporal de Speed III durante 5 segundos para simular un potente despegue.
  * Gale Force Wings: cuando empieza a volar, un fuerte efecto de viento empuja a todas las entidades alrededor del jugador.

### PLAYER\_ENABLE\_GLIDE

* Info: Activador que se dispara cuando el jugador empieza a planear. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador empieza a agacharse. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador empieza a correr.

### PLAYER\_ENABLE\_SWIM

* Info: Activador que se dispara cuando el jugador empieza a nadar (natación de la 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Activador que se dispara si entras en tu land o en una land donde tienes confianza. 
  * Plugins compatibles:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activador que se dispara si entras en una parcela.
  * Plugins compatibles:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara si te pones la pieza de armadura en su ranura de armadura.
  * `detailedSlots` puede restringirlo a una ranura de armadura: 36 botas, 37 pantalones, 38 peto, 39 casco (la ranura en la que entra la pieza), además de -1 para la mano de la que procede.
  * <CustomTag type="version" version="1.21.3" /> Un ítem con [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) va a la `slot` de estas funciones, incluso cuando no es la ranura de su material: una calabaza tallada equipable en las piernas cuenta como pantalones (37). Con un clic derecho, solo se pone si su `swappable` es true.
  * ¡Ten cuidado! El plugin CMI puede hacer que este activador no funcione debido al permiso cmi.inventoryhat en true. Si quieres que este activador funcione, pon ese permiso en false. 
  * Los addons de Fabric pueden saltarse este activador.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Activador que se dispara cuando la experiencia del jugador cambia de forma natural. 
  * Esto significa que este activador no se dispara por cambios de experiencia hechos con comandos. Salvo que esos comandos sean la aparición de un orbe de experiencia, lo que haría que la experiencia cambie "de forma natural".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Activador que se dispara si el jugador fertiliza un bloque con polvo de hueso. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Activador que se dispara cuando el jugador llena el cubo con agua o lava. 
  * ¡Ten cuidado! Cuando un ExecutableItem llena un cubo y este se convierte en "water\_bucket" o "lava\_bucket", deja de ser un ExecutableItem, se convierte en un ítem de vanilla y no se puede revertir.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic derecho con la caña de pescar mientras el anzuelo está sobre un bloque. 
  * No se dispara cuando no está sobre un bloque; si quieres que se dispare en el aire, usa el activador [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Se activa cuando el jugador hace clic derecho con la caña de pescar mientras el anzuelo atrapa una entidad o un NPC de Citizens.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic derecho con la caña de pescar mientras el anzuelo atrapa un ítem en el agua gracias al sistema de botín de pesca. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
La entidad objetivo de `entityCommands` es el **ítem capturado**. Usa el comando de entidad [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) para convertir la captura en un ítem de vanilla o en un ExecutableItem, consulta la guía [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador no pesca nada, es decir, el anzuelo no estaba ni sobre un bloque, ni sobre una entidad, ni sobre un jugador.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic derecho con la caña de pescar mientras el anzuelo atrapa a otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador pesca algo con éxito usando el plugin CustomFishing (antes conocido como Xiaomomi Fish). Este activador requiere que el [CustomFishing plugin](https://modrinth.com/plugin/customfishing) esté instalado en tu servidor.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholders disponibles:
  * `%result%` - El resultado de la pesca (por ejemplo, SUCCESS, FAILURE, etc.)
  * `%fish_hook%` - El nombre del anzuelo usado
  * `%loot%` - El ID del botín capturado
* Ejemplos:
  * Custom Fishing Rewards: al capturar un pez raro con CustomFishing, otorga al jugador experiencia extra o una recompensa de moneda especial.
  * Lucky Catch: al pescar con éxito con una caña concreta, hay una probabilidad de recibir ítems de botín personalizados adicionales del plugin CustomFishing.
  * Fishing Skill Progression: registra las capturas exitosas y aumenta los niveles de habilidad de pesca del jugador según la rareza de los peces capturados.

:::info
Este activador solo funciona si tienes instalado el plugin **CustomFishing**. Se integra con el FishingResultEvent de CustomFishing para ofrecer mecánicas de pesca mejoradas.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Activador que se dispara cuando el jugador cosecha un bloque
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Al hacer clic derecho en un arbusto de bayas dulces para cosechar, hay un 10 % de probabilidad de que el arbusto "muerda", infligiendo medio corazón de daño pero dando al jugador Strength I durante 5 segundos como efecto de "sed de sangre".
  * Bountiful Touch: al cosechar cultivos, hay un 15 % de probabilidad de replantarlos al instante con el crecimiento completo, permitiendo una agricultura continua.
  * Mystic Bloom: al cosechar una flor, hay un 5 % de probabilidad de que suelte un ítem encantado aleatorio imbuido con la energía de la naturaleza.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador golpea a una entidad.
  * Este activador solo funciona cuando hay daño, es decir, cuando el jugador realmente golpeó a la entidad. Si quieres que funcione al hacer clic en la entidad, usa [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Activador que se dispara cuando el jugador golpea a otro jugador (normalmente llamado target).
  * Este activador solo funciona cuando hay daño, es decir, cuando el jugador realmente golpeó al otro jugador. Si quieres que funcione al hacer clic en el jugador, usa [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Activador que se dispara cuando el jugador pulsa una tecla. (adelante, atrás, izquierda, derecha, saltar, correr, agacharse)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador rompe el ExecutableItem al hacerle perder toda su durabilidad. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador salta.
  * <CustomTag type="version" version="1.21.2" /> puede dispararse incluso si el jugador intentó saltar en pleno aire.

### PLAYER\_KICK

* Info: Activador que se dispara cuando el jugador es expulsado 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador mata a una entidad o a un NPC de Citizens. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador mata a un jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Activador que se dispara cuando el jugador dispara un proyectil. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Activador que se dispara si sales de tu land o de una land donde tienes confianza. 
  * Plugins compatibles:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activador que se dispara si sales de una parcela.
  * Plugins compatibles:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Activador que se dispara cuando el jugador hace clic izquierdo con el ítem. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget: ONLY\_BLOCK, estas funciones estarán disponibles.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Para escribir [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Activador que se dispara cuando el jugador repara el ExecutableItem con el encantamiento de reparación. 

### PLAYER\_OPEN\_INVENTORY

* Info: Activador que se dispara cuando el jugador abre inventarios, pero **NO su propio inventario**. 

:::info
Actualmente no es posible detectar cuándo el jugador abre **su propio** inventario porque es solo del lado del cliente. 

El evento solo se dispara cuando alguien obliga al jugador a abrir su inventario o cuando el jugador abre inventarios personalizados, de bloques o de aldeanos.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador recoge el ExecutableItem. 

### PLAYER\_PORTAL

* Info: Activador que se dispara cuando el jugador usa un portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador recibe un efecto de poción. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador es golpeado por una entidad. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador es golpeado por otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador recibe un golpe. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Activador que se dispara cuando el jugador recupera salud de forma natural.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador reaparece.
  * Como es normal, todos los activadores de ExecutableItems funcionan cuando el jugador tiene el ítem en el inventario, así que si el jugador reaparece sin el ítem en el inventario, este activador no se dispara.

### PLAYER\_RIGHT\_CLICK

* Info: Activador que se dispara cuando el jugador hace clic derecho con el ítem. 
  * Debido a limitaciones de Spigot, este activador solo se disparará si tienes un ítem (cualquiera) en la mano.
* Funciones personalizadas de este activador:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : Para especificar el tipo de clic (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Si typeTarget: ONLY\_BLOCK, estas funciones estarán disponibles:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Para escribir [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : Para especificar qué tipos de bloque son válidos

### PLAYER\_RIPTIDE

* Info: Activador que se dispara cuando el jugador usa el tridente con impulso.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador selecciona el ExecutableItem en la hotbar, es decir, empieza a sostenerlo en la mano principal. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador esquila a una entidad. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activador que se dispara cuando el escudo del jugador es roto por otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Activador que se dispara cuando se cambia el punto de aparición del jugador. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Activador que se dispara cuando el jugador intercambia de mano el ExecutableItem. Es decir, el atajo de mano principal a mano secundaria y viceversa. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando una entidad apunta al jugador como objetivo. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Activador que se dispara cuando el jugador pisotea un cultivo. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador se quita el ExecutableItem. 
  * `detailedSlots` puede restringirlo a una ranura de armadura: 36 botas, 37 pantalones, 38 peto, 39 casco (la ranura de la que procede la pieza).
  * ¡Ten cuidado! El plugin CMI puede hacer que este activador no funcione debido al permiso cmi.inventoryhat en true. Si quieres que este activador funcione, pon ese permiso en false.
  * Los addons de Fabric pueden saltarse este activador.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador camina. 
  * Este activador se dispara en cada tick en que el jugador camina, por lo que es muy costoso en rendimiento; úsalo con cuidado. Puedes añadir la función de cooldown de uso para reducir el impacto.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador escribe o introduce un comando. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Activador que se dispara cuando un proyectil lanzado por el jugador entra en el agua.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Activador que se dispara cuando un proyectil lanzado por un jugador golpea un bloque. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activador que se dispara cuando un proyectil lanzado por un jugador golpea a una entidad. \
  Ten cuidado: no se dispara cuando el proyectil golpea a un jugador (para eso usa PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Activador que se dispara cuando un proyectil lanzado por un jugador golpea a otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Activador que se puede ejecutar mediante un comando, o se puede programar. 
  * Este activador es para todos los plugins, por eso se explica en [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Activador que se dispara cuando el ExecutableItem se coloca encima de otro ítem en el inventario.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Activador que se dispara cuando un ítem se coloca encima del ExecutableItem en el inventario.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el ExecutableItem entra en el inventario del jugador.
  * Si usas otro plugin que gestiona la entrega de ítems y se entrega un ExecutableItem y este activador no se ejecuta, ve a su soporte y pídeles que llamen a este método.
  * Los movimientos dentro del inventario también cuentan: intercambio con la mano secundaria (tecla F), intercambio con las teclas numéricas y, en servidores Paper, pick block / pick item (clic central). En esos movimientos, EI\_LEAVE\_THE\_PLAYER\_INVENTORY siempre se ejecuta antes que este activador.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activador que se dispara cuando el ítem sale del inventario del jugador.
  * Requiere ProtocolLib para que este activador funcione correctamente. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Activador que se dispara cuando el jugador hace clic en el ítem en su inventario. 
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Activador que se dispara de forma repetida mientras el ítem esté en el inventario del jugador. Es básicamente un ciclo: ejecuta los comandos cada \<delay> \<seconds/ticks> según la configuración de este activador.
* Cuando una condición de un LOOP no es válida, no se envía el mensaje de error por defecto (`You can't activate this item > invalid condition`): el jugador no activó nada. Un mensaje personalizado (`{theCondition}Msg`) sí se sigue enviando.
* Para una bonificación mientras se llevan varias piezas puestas, usa los [sets](/executableitems/configurations/sets-configuration) en lugar de un LOOP.
* activatorFeatures: Normalmente todos los activadores comparten funciones, pero hay algunas exclusivas de ciertos activadores; si es el caso, la(s) función(es) se enumerarán aquí.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
