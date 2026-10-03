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
  Lista completa de los activators de ExecutableItems en SPlugins: descripción,
  ejemplos y características de cada uno.
source_hash: 0848802095c73aa9
translated_at: '2026-10-03T10:25:37.231Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Lista de los Activators

## Activators de ExecutableItems

Aquí tienes la lista de activators disponibles con su descripción y algunos ejemplos. Los activators te permiten ejecutar acciones personalizadas, pueden tener condiciones, ejecutar comandos, tener cooldown, etc.

:::warning
Un activator cuyo `option:` no está en esta lista (error de tipeo, activator de otro plugin...) queda **deshabilitado**: nunca se ejecuta, y la consola muestra un error con los nombres de opciones más cercanos cuando se carga el ítem.
:::

Los activators premium están marcados con la etiqueta: <CustomTag type="premium" />

Las activator features son características exclusivas de ese activator.

### PLAYER\_ALL\_CLICK

* Info: Activator que se dispara cuando el jugador hace clic izquierdo o derecho con el ítem.
  * No puedes diferenciar los clics, para eso usa activators distintos como PLAYER\_RIGHT\_CLICK o PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget: ONLY\_BLOCK, estas features estarán disponibles.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Warping Stone: teletransporta instantáneamente al jugador 5 bloques en la dirección a la que mira. Cooldown: 10 segundos.
  * Healing Totem: al hacer clic, cura al jugador 4 corazones y le otorga Regeneration I durante 5 segundos.
  * Thunder Rod: lanza un rayo al enemigo más cercano dentro de 10 bloques.
  * Gravity Boots: lanza al jugador 3 bloques hacia arriba y anula el daño por caída durante 5 segundos.
  * Explosive Rune: crea una pequeña explosión en la ubicación del jugador que empuja a los mobs cercanos pero no daña el terreno.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic derecho en una cama y entra en ella. Si el jugador no entra, este activator no se dispara. No se dispara cuando el jugador duerme, solo por la acción de entrar en la cama.
* Ejemplos:
  * Void Sleep: al entrar en la cama, el jugador es teletransportado a una dimensión de ensueño personalizada para explorar.
  * Lunar Shield: otorga Absorption IV durante 5 minutos al dormir en la cama, dando vida extra temporal.
  * Nightmare Curse: hace aparecer un phantom hostil sobre la cama cuando el jugador entra en ella, obligándolo a luchar antes de poder dormir tranquilo.
  * Dreamwalker's Blessing: al entrar en la cama, el jugador obtiene Regeneration II hasta que se despierta (la acción de despertar sería el activator PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador deja la cama. ¡Cuidado! Este activator se dispara cuando el jugador duerme y es de día así que deja la cama, pero también se dispara cuando el jugador deja la cama en medio del sueño, es simplemente la acción de dejar la cama.
  * Si quieres que se active solo cuando el jugador duerme, puedes usar este activator junto con worldCondition -> ifWorldTime para comprobar si realmente es de día.
* Ejemplos:
  * Morning Boost: al dejar la cama, el jugador obtiene Speed II y Haste II durante 60 segundos para empezar el día con energía.
  * Phantom's Warning: si el jugador deja la cama antes de dormir completamente, aparece un phantom cerca como consecuencia.
  * Dream Collector: al despertar, el jugador recibe un libro encantado aleatorio como "recuerdo de sueño".
  * Energy Surge: al dejar la cama, la barra de hambre del jugador se restaura por completo, simulando una noche bien descansada.

### PLAYER\_BEFORE\_DEATH

* Info: Activator que se dispara cuando el jugador muere. La diferencia entre este activator y el activator PLAYER\_DEATH es que este se dispara primero, ofreciendo la posibilidad de salvar al jugador antes de que muera.
  * Para entenderlo mejor, los totems of undying vanilla se disparan mediante este activator para aplicar las características que tienen.
* Ejemplos:
  * Soulbound Amulet: cuando el jugador está a punto de morir, en vez de eso es teletransportado a su punto de spawn con 2 corazones y Regeneration II temporal.
  * Last Stand Shield: cerca de la muerte, el jugador obtiene Resistance III y Absorption durante 5 segundos, dándole la oportunidad de defenderse.
  * Phoenix Blessing: cuando la muerte es inminente, el jugador explota en llamas, causando daño de fuego a los enemigos y reviviendo con la mitad de vida.
  * Undead Pact: si el jugador fuera a morir, en vez de eso revive con 3 corazones, pero no podrá usar armas durante 10 segundos.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador rompe un bloque.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Ore Booster Pickaxe: al romper un bloque de mineral, hay un 20% de probabilidad de duplicar el drop.
  * Nature's Wrath Axe: romper un tronco tiene un 10% de probabilidad de invocar un espíritu de árbol hostil (mob personalizado).
  * Cursed Excavation: al romper piedra, hay un 5% de probabilidad de generar silverfish o aplicar Mining Fatigue durante 5 segundos.
  * Explosive Demolition Hammer: al romper bloques, los bloques circundantes también se rompen, pudiendo romper en 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador bloquea un golpe que proviene de una entidad con el escudo.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Ejemplos:
  * Thorned Shield: al bloquear un ataque, el atacante recibe 3 corazones de daño.
  * Shockwave Defense: bloquear con éxito un ataque empuja a todos los enemigos cercanos dentro de 5 bloques.
  * Energy Absorption: al bloquear un ataque, el jugador regenera 1 corazón y obtiene Resistance I durante 3 segundos.
  * Frozen Guard: si se bloquea un ataque, el atacante queda congelado en el lugar (Slowness IV) durante 2 segundos.
  * Blazing Counter: bloquear un ataque prende fuego al atacante durante 4 segundos.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador bloquea un golpe que proviene de otro jugador con el escudo.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Ejemplos:
  * Retribution Shield: al bloquear un ataque de un jugador, el atacante queda desarmado al instante, soltando su arma al suelo.
  * Vampiric Guard: al bloquear con éxito un ataque, el jugador absorbe parte de la vida del atacante (curando 2 corazones).
  * Dimensional Rift: si se bloquea el ataque de un jugador, hay un 20% de probabilidad de que sea teletransportado 10 bloques en una dirección aleatoria.
  * Adrenaline Block: al bloquear un ataque, el jugador obtiene al instante Speed II y Strength I durante 5 segundos, permitiendo un contraataque rápido.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador coloca un bloque.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Living Roots: al colocar un sapling, hay un 10% de probabilidad de que crezca instantáneamente a un árbol.
  * Runic Inscription: colocar un bloque de piedra tiene un 5% de probabilidad de convertirlo en una Runed Stone, emitiendo partículas y dando a los jugadores cercanos Haste I durante 10 segundos.
  * Al colocar TNT, hay una pequeña probabilidad (5%) de que se encienda de inmediato, creando una explosión inesperada.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador rompe el escudo de otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Ejemplos:
  * Shatter Strike: al romper el escudo de un jugador, el atacante obtiene Strength I durante 5 segundos, potenciando su próximo ataque.
  * Al destruir un escudo, ocurre una pequeña explosión en la ubicación del target, empujándolo 5 bloques hacia atrás.
  * Cuando un escudo se rompe, el target recibe **Wither I** durante **5 segundos**, drenando lentamente su vida.
  * Dimensional Fracture: al romper el escudo de un jugador, el target es teletransportado momentáneamente 5 bloques hacia arriba, desorientándolo antes de caer de nuevo.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador cepilla un bloque.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Cursed Dust: si el jugador cepilla un bloque sospechoso, hay un 10% de probabilidad de que quede cegado temporalmente mientras una nube de polvo maldito estalla a su alrededor.
  * Buried Riches: cepillar un bloque tiene una pequeña probabilidad de recompensar al jugador con una pepita de oro o una esmeralda, simulando el descubrimiento de un tesoro perdido.
  * Temporal Echoes: al cepillar un bloque de artefacto, el jugador escucha susurros tenues del pasado, insinuando secretos basados en lore ocultos cerca.

### PLAYER\_BUCKET\_ENTITY

* Info: Activator que se dispara cuando el jugador, usando un cubo, embucha una entidad.
  * Un ejemplo es cómo guardas un pez dentro de un cubo con agua.
  * Si quieres ejecutar algo al "intentar" embuchar una entidad que no se puede embuchar, este activator no se ejecutará, deberías usar PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Ejemplos:
  * Instant Fillet: en lugar de capturar un pez en un cubo, el jugador recibe instantáneamente pescado crudo en su inventario, como si lo hubiera filetado experto en el acto.
  * Essence Extraction: al usar un cubo en un axolotl, en lugar de capturarlo, el jugador recibe una poción de "Axolotl Mucus", que otorga Regeneration I durante 10 segundos.

### PLAYER\_CHANGE\_WORLD

* Info: Activator que se dispara cuando el jugador cambia a un mundo diferente.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
* Ejemplos:
  * Dimensional Adaptation: cuando el jugador entra en un nuevo mundo, recibe un buff temporal aleatorio (Speed, Strength o Night Vision durante 30 segundos) mientras su cuerpo se adapta al nuevo entorno.
  * Weight of Realms: si un jugador entra al Nether o al End, obtiene temporalmente Slowness II durante 10 segundos, simulando el cambio súbito de gravedad.
  * Forgotten Memories: al cambiar de mundo, hay una pequeña probabilidad (5%) de que el jugador pierda un ítem aleatorio del inventario, simulando un "recuerdo" olvidado.
  * Realmwalker's Favor: entrar en un nuevo mundo otorga un ítem de botín misterioso, temático según la dimensión (por ejemplo, el Nether da un lingote de oro aleatorio, el End da una Ender Pearl, etc.), como si fuera un regalo de una fuerza desconocida.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic en una entidad y en NPC(s) de Citizens.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Ejemplos:
  * Beast Tamer's Bond: hacer clic en un Wolf, Cat o Horse mientras sostienes un ítem especial (por ejemplo, una Golden Apple) le otorga Speed II y Regeneration temporal durante 60 segundos.
  * Hidden Pocket: hacer clic en un Zombie Piglin con lingotes de oro tiene un 5% de probabilidad de recibir instantáneamente un ítem de botín aleatorio del Nether sin necesidad de intercambiar.
  * Gourmet's Choice: hacer clic en una Cow, Pig o Chicken mientras sostienes un Knife (ítem personalizado) proporciona instantáneamente un drop de carne de mayor calidad (por ejemplo, Cooked Steak en lugar de Raw Beef).
  * Battle Focus: hacer clic en un Iron Golem mientras sostienes un Shield le otorga Resistance II y Knockback Resistance temporal durante 30 segundos, permitiéndole aguantar más daño.
  * Final Tribute: hacer clic en un Skeleton o Wither Skeleton mientras sostienes Bone Blocks otorga al jugador un breve impulso de Speed II como si absorbiera la energía de un antiguo guerrero.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Activator que se dispara cuando el jugador hace clic en otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Ejemplos:
  * Shared Fortune: hacer clic en un jugador mientras sostienes un Emerald Block divide tus niveles de experiencia por la mitad, dando al otro jugador la experiencia perdida al instante.
  * Hacer clic en un compañero de equipo mientras sostienes una Potion of Healing transfiere instantáneamente la mitad de tu vida a él, convirtiéndolo en un salvavidas estratégico de último momento.
  * Tactical Mark: hacer clic en otro jugador mientras agachado le aplica un efecto brillante durante 10 segundos, haciéndolo visible para los compañeros de equipo en una pelea PvP.
  * Oath of Protection: hacer clic en un jugador mientras sostienes un Shield le otorga Resistance I durante 30 segundos, actuando como un efecto de guardián temporal.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador se conecta al servidor.
* Ejemplos:
  * Realm's Welcome: al conectarse, el jugador recibe un impulso temporal de Speed I y Haste I durante 30 segundos, simulando un estallido de energía al entrar al mundo.
  * Echo of the Past: el primer mensaje que el jugador ve en el chat es un mensaje de "recuerdo" personalizado.
  * Daily Fortune: al conectarse, al jugador se le otorga un buff o debuff menor aleatorio durante 10 minutos (por ejemplo, Luck I, Speed I o Slowness I), haciendo cada sesión un poco diferente.
  * Dimensional Echo: si el jugador se conecta desde otro mundo (Nether o End), experimenta brevemente un efecto de partículas giratorias y escucha sonidos ambientales distorsionados durante unos segundos antes de estabilizarse por completo.

### PLAYER\_CONSUME

* Info: Activator que se dispara cuando el jugador come/consume un ítem con éxito.\
  Cuidado, solo funciona para ítems de Minecraft que son comestibles o los que se transforman en ítem comestible usando las [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Activator que se dispara cuando el jugador come/consume el ExecutableItem en sí. \
  Cuidado, solo funciona para ExecutableItems que son comestibles o los que se transforman en ítem comestible usando las [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Activator que se dispara cuando el jugador lanza un proyectil con un comando de SCore como:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (en este activator la entidad es el proyectil)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (para poner en lista blanca/negra algunos proyectiles)

### PLAYER\_DEATH

* Info: Activator que se dispara cuando el jugador muere.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador deselecciona el ExecutableItem.
  * Esto ocurre cuando el ExecutableItem está en la mano principal y luego cambias el ítem que estás sosteniendo, así que lo estás "deseleccionando".

### PLAYER\_DISABLE\_FLY

* Info: Activator que se dispara cuando el jugador deja de volar.
  * La acción de volar significa literalmente volar, no es deslizarse (glide) ni estar en el aire debido a una caída.

### PLAYER\_DISABLE\_GLIDE

* Info: Activator que se dispara cuando el jugador deja de deslizarse (glide).

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador deja de agacharse.

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador deja de correr (sprint).

### PLAYER\_DISABLE\_SWIM

* Info: Activator que se dispara cuando el jugador deja de nadar (natación de 1.13).
* 
### PLAYER\_DISCONNECT

* Info: Activator que se dispara cuando el jugador se desconecta del servidor.

### PLAYER\_DISMOUNT

* Info: Activator que se dispara cuando el jugador se desmonta/sale de montar una entidad.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Activator que se dispara cuando el jugador suelta un ítem.

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador suelta el ExecutableItem.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace cambios en el book and quill y presiona listo o firma el libro.

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador rompe el ExecutableItem debido a la rotura de durabilidad vanilla.

### PLAYER\_EMPTY\_BUCKET

* Info: Activator que se dispara cuando el jugador vacía un cubo ExecutableItem. También se dispara cuando waterlogueas un bloque o llenas un cauldron con dicho líquido, por ejemplo.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Cuando se activa este activator, el bloque target es la ubicación donde se supone que se colocará el agua. Con esa información, puedes usar SETBLOCK para reemplazar el agua por otra cosa si quieres.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador **empieza** a volar. Este activator se dispara por la acción de "doble pulsación de barra espaciadora teniendo el permiso de vuelo".
  * Esto significa que no se dispara si ya estás volando, se dispara por la acción de cambiar el estado de vuelo mediante "doble pulsación de barra espaciadora".
* Ejemplos:
  * Lightning Takeoff: cuando se activa el vuelo, un pequeño rayo sin daño impacta en la posición del jugador con efecto dramático.
  * Aerial Boost: al empezar a volar, el jugador obtiene un efecto temporal de Speed III durante 5 segundos para simular un potente despegue.
  * Gale Force Wings: al empezar a volar, un fuerte efecto de viento empuja a todas las entidades alrededor del jugador.

### PLAYER\_ENABLE\_GLIDE

* Info: Activator que se dispara cuando el jugador empieza a deslizarse (glide).

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador empieza a agacharse.

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador empieza a correr (sprint).

### PLAYER\_ENABLE\_SWIM

* Info: Activator que se dispara cuando el jugador empieza a nadar (natación de 1.13).

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Activator que se dispara si entras en tu land o en un land donde eres de confianza.
  * Plugins soportados:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activator que se dispara si entras en un plot.
  * Plugins soportados:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara si te pones/colocas la pieza de armadura en el slot de armadura.
  * `detailedSlots` puede restringirlo a un solo slot de armadura: 36 boots, 37 leggings, 38 chestplate, 39 helmet (el slot al que va la pieza), además de -1 para la mano de la que vino.
  * ¡Cuidado! El plugin CMI puede hacer que este activator no funcione debido al permiso cmi.inventoryhat puesto en true. Si quieres que este activator funcione, pon ese permiso en false.
  * Los addons de Fabric pueden evadir este activator.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Activator que se dispara cuando la experiencia del jugador cambia de forma natural.
  * Esto significa que este activator no se dispara por cambios de experiencia mediante comandos. Excepto si esos comandos invocan un orbe de experiencia, lo que haría que la experiencia cambiara "de forma natural".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Activator que se dispara si el jugador fertiliza un bloque con harina de hueso (bone meal).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Activator que se dispara cuando el jugador llena el cubo con agua o lava.
  * ¡Cuidado! Cuando un ExecutableItem llena un cubo y se convierte en "water\_bucket" o "lava\_bucket", deja de ser un ExecutableItem, se convierte en un ítem vanilla y no se puede revertir.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic derecho con la caña de pescar cuando el flotador de la caña está sobre un bloque.
  * No se dispara cuando no está sobre un bloque, si quieres que se dispare en el aire usa el activator [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Se activa cuando el jugador hace clic derecho con la caña de pescar cuando el flotador de la caña captura una entidad o NPC de Citizens.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic derecho con la caña de pescar cuando el flotador de la caña captura un ítem en el agua debido al sistema de botín de pesca.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
La entidad apuntada por `entityCommands` es el **ítem capturado**. Usa el entity command [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) para convertir la captura en un ítem vanilla o en un ExecutableItem, consulta la guía [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador no pesca nada, es decir, el flotador no estaba ni sobre un bloque, ni sobre una entidad, ni sobre un jugador.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic derecho con la caña de pescar cuando el flotador de la caña captura a otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador captura algo con éxito usando el plugin CustomFishing (antes conocido como Xiaomomi Fish). Este activator requiere que el [plugin CustomFishing](https://modrinth.com/plugin/customfishing) esté instalado en tu servidor.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholders disponibles:
  * `%result%`: el resultado de la pesca (por ejemplo, SUCCESS, FAILURE, etc.)
  * `%fish_hook%`: el nombre del anzuelo de pesca usado
  * `%loot%`: el ID del botín capturado
* Ejemplos:
  * Custom Fishing Rewards: al capturar un pez raro con CustomFishing, otorga al jugador experiencia extra o una recompensa de moneda especial.
  * Lucky Catch: al pescar con éxito con una caña específica, hay una probabilidad de recibir ítems de botín personalizados adicionales del plugin CustomFishing.
  * Fishing Skill Progression: registra las capturas exitosas y aumenta los niveles de habilidad de pesca del jugador según la rareza del pez capturado.

:::info
Este activator solo funciona si tienes instalado el plugin **CustomFishing**. Se integra con el FishingResultEvent de CustomFishing para ofrecer mecánicas de pesca mejoradas.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Activator que se dispara cuando el jugador cosecha un bloque.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Ejemplos:
  * Al hacer clic derecho en un sweet berry bush para cosecharlo, hay un 10% de probabilidad de que el arbusto responda mordiendo, causando medio corazón de daño pero dando al jugador Strength I durante 5 segundos como efecto de "sed de sangre".
  * Bountiful Touch: al cosechar cultivos, hay un 15% de probabilidad de replantarlos instantáneamente a crecimiento completo, permitiendo una agricultura continua.
  * Mystic Bloom: al cosechar una flor, hay un 5% de probabilidad de que suelte un ítem encantado aleatorio infundido con la energía de la naturaleza.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador golpea a una entidad.
  * Este activator solo funciona cuando hay daño involucrado, es decir, el jugador realmente golpeó a la entidad. Si quieres que funcione al hacer clic en la entidad, usa [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Activator que se dispara cuando el jugador golpea a otro jugador (normalmente llamado target).
  * Este activator solo funciona cuando hay daño involucrado, es decir, el jugador realmente golpeó al otro jugador. Si quieres que funcione al hacer clic en el jugador, usa [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Activator que se dispara cuando el jugador pulsa una tecla. (adelante, atrás, izquierda, derecha, salto, sprint, agacharse)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador rompe el ExecutableItem al hacer que pierda toda su durabilidad.

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador salta.
  * <CustomTag type="version" version="1.21.2" /> puede dispararse incluso si el jugador intentó saltar en medio del aire.

### PLAYER\_KICK

* Info: Activator que se dispara cuando el jugador recibe un kick.

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador mata a una entidad o a un NPC de Citizens.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador mata a otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Activator que se dispara cuando el jugador lanza un proyectil.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Activator que se dispara si dejas tu land o un land donde eres de confianza.
  * Plugins soportados:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Activator que se dispara si dejas un plot.
  * Plugins soportados:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Activator que se dispara cuando el jugador hace clic izquierdo con el ítem.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Si typeTarget: ONLY\_BLOCK, estas features estarán disponibles.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands): para escribir [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Activator que se dispara cuando el jugador repara el ExecutableItem mediante el encantamiento mending.

### PLAYER\_OPEN\_INVENTORY

* Info: Activator que se dispara cuando el jugador abre inventarios pero **NO su propio inventario**.

:::info
Actualmente no es posible detectar cuándo el jugador abre **su propio** inventario, porque eso es solo del lado del cliente.

El evento solo se dispara cuando alguien obliga al jugador a abrir su inventario o si el jugador abre inventarios personalizados, de bloque o de comerciante.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador recoge el ExecutableItem.

### PLAYER\_PORTAL

* Info: Activator que se dispara cuando el jugador usa un portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador recibe un efecto de poción.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador recibe un golpe de una entidad.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador recibe un golpe de otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador recibe un golpe.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Activator que se dispara cuando el jugador recupera vida de forma natural.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador reaparece (respawn).
  * Como es habitual, todos los activators de ExecutableItem funcionan cuando el jugador lo tiene en el inventario, así que si el jugador reaparece sin el ítem en el inventario, este activator no se disparará.

### PLAYER\_RIGHT\_CLICK

* Info: Activator que se dispara cuando el jugador hace clic derecho con el ítem.
  * Debido a limitaciones de Spigot, este activator solo se dispara si tienes un ítem (cualquiera) en la mano.
* Custom Features de este activator:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget): para especificar el tipo de clic (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Si typeTarget: ONLY\_BLOCK, estas features estarán disponibles:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands): para escribir [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks): para especificar qué tipos de bloque son válidos

### PLAYER\_RIPTIDE

* Info: Activator que se dispara cuando el jugador usa riptide.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador selecciona el ExecutableItem en la hotbar, es decir, empieza a sostenerlo en la mano principal.

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador esquila (shear) a una entidad.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Activator que se dispara cuando el escudo del jugador es destruido por otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Activator que se dispara cuando se cambia el punto de spawn del jugador.

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Activator que se dispara cuando el jugador cambia de mano (swaphand) el ExecutableItem. Esto se refiere al atajo de mano principal a mano secundaria y viceversa.

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando una entidad apunta al jugador como objetivo.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Activator que se dispara cuando el jugador pisotea un cultivo.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador se quita el ExecutableItem.
  * `detailedSlots` puede restringirlo a un solo slot de armadura: 36 boots, 37 leggings, 38 chestplate, 39 helmet (el slot del que proviene la pieza).
  * ¡Cuidado! El plugin CMI puede hacer que este activator no funcione debido al permiso cmi.inventoryhat puesto en true. Si quieres que este activator funcione, pon ese permiso en false.
  * Los addons de Fabric pueden evadir este activator.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador camina.
  * Este activator se dispara en cada tick mientras el jugador camina, así que es muy costoso en rendimiento, úsalo con cuidado. Puedes usar la feature de cooldown para reducir el impacto.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador escribe/introduce un comando.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Activator que se dispara cuando un proyectil lanzado por el jugador entra en agua.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Activator que se dispara cuando un proyectil lanzado por un jugador golpea un bloque.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Activator que se dispara cuando un proyectil lanzado por un jugador golpea a una entidad. \
  Cuidado, no se dispara cuando el proyectil golpea a un jugador (para eso usa PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Activator que se dispara cuando un proyectil lanzado por un jugador golpea a otro jugador (normalmente llamado target).
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Activator que se puede ejecutar mediante un comando, o puede programarse. 
  * Este activator es para todos los plugins, por eso se explica en [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Activator que se dispara cuando el ExecutableItem se coloca encima de otro ítem en el inventario.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Activator que se dispara cuando un ítem se coloca encima del ExecutableItem en el inventario.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el ExecutableItem entra en el inventario del jugador.
  * Si estás usando otro plugin que gestiona la entrega de ítems y se entrega un ExecutableItem y este activator no se ejecuta, contacta con su soporte y pídeles que llamen a este método.
  * Los movimientos dentro del inventario también cuentan: el intercambio a mano secundaria (tecla F), el intercambio por tecla numérica y, en servidores Paper, pick block / pick item (clic central). Para esos movimientos, EI\_LEAVE\_THE\_PLAYER\_INVENTORY siempre se ejecuta antes que este activator.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Activator que se dispara cuando el ítem sale del inventario del jugador.
  * Requiere ProtocolLib para que este activator funcione correctamente.

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Activator que se dispara cuando el jugador hace clic en el ítem dentro de su inventario.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Activator que se dispara en repetición mientras el ítem esté en el inventario del jugador. Básicamente es un ciclo, ejecuta los comandos cada \<delay> \<seconds/ticks> dependiendo de la configuración de este activator.
* Cuando una condición de un LOOP no es válida, el mensaje de error por defecto (`You can't activate this item > invalid condition`) no se envía: el jugador no activó nada. Un mensaje personalizado (`{theCondition}Msg`) sí se envía.
* Para un bonus mientras se lleven varias piezas puestas, usa los [sets](/executableitems/configurations/sets-configuration) en lugar de un LOOP.
* activatorFeatures: Normalmente todos los activators comparten features, pero hay algunos exclusivos para ciertos activators, si es el caso, la(s) feature(s) se listarán aquí.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
