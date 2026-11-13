---
description: >-
  Lista de comandos de SCore: limpiar cooldowns, webhook de Discord y ejecutar
  comandos de SCore manualmente sobre jugadores, bloques, entidades e ítems.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T18:18:30.202Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos

## Limpiar contenido de SCore

* Este comando te permite limpiar la mayor parte del contenido en curso de SCore
* Puedes limpiar:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (comandos de SCore ejecutados con retraso)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Comando: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Limpiar cooldowns 

* Comando para limpiar un cooldown específico (para un jugador / entidad concretos)
* Comando: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Ejemplo -> EI\:myitem\:myactivator
  * `[UUID]`: (Opcional) El UUID del jugador / entidad

## Inspeccionar bucles, útil para depurar

* Comando: /score inspect-loop

Recargar las variables, los proyectiles y las configuraciones de dureza de SCore

* Comando: /score reload

## Discord webhook
Envía un mensaje a Discord mediante webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url del webhook
  * `{debug}`: indica si se avisa o no al ejecutor de que se va a enviar un mensaje de webhook
  * `[allowed_mentions]`: puede ser users\:id\[,id,...\] o roles\:id\[,id,...\] o nada
  * `{message...}`: el mensaje que enviará el webhook de destino


## Comandos de partículas

Consulta [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Comandos de variables

Consulta [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Ejecutar comandos de SCore manualmente

### Comandos de jugador

* Info: comando que permite, desde fuera y desde dentro de Ssomar Plugins, ejecutar un comando personalizado de SCore sobre un jugador específico.
* Al usar este comando, toda la línea de comando se procesa mediante PlaceholderAPI, por lo que puedes añadirle placeholders.

* Comando: /score run-player-command player:\{player\} \{command\}
  * `player`: Nombre del jugador objetivo
  * `command`: Comando de jugador de SCore que se aplicará a \{player\}

* Ejemplos:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Comandos de bloque

* Info: comando que permite, desde fuera y desde dentro de Ssomar Plugins, ejecutar un comando personalizado de SCore sobre un bloque específico.

* Comando: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Jugador implicado en este activador
    * Es opcional, ya que algunos comandos lo necesitan, por ejemplo

                MOB_AROUND: ¿Quién aplicará el daño? El comando aplica daño a los mobs de alrededor, pero el daño se contará como infligido por \{player\}, así que se comprueba si el jugador puede dañar realmente al mob, el daño y las muertes cuentan para él, etc.

                VEIN_BREAKER: ¿Quién rompió los bloques? El comando rompe bloques en forma de veta, pero los bloques se contarán como rotos por \{player\}, así que se comprueba si el jugador puede romper realmente el bloque, el bloque roto cuenta para él, etc.

  * `block`
      * `world`: Mundo en el que está el bloque
      * `x`: Coordenadas X del bloque
      * `y`: Coordenadas Y del bloque
      * `z`: Coordenadas Z del bloque
  * `command`: Comando de bloque que se ejecutará sobre el bloque y, si existe, por el jugador.
    * Los [placeholders de bloque](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) del comando son los de este bloque.

* Ejemplos:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Comandos de entidad

* Info: comando que permite, desde fuera y desde dentro de Ssomar Plugins, ejecutar un comando personalizado de SCore sobre una entidad específica

* Comando: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Opcional) nombre o UUID de un jugador implicado: los placeholders de jugador (`%player%`, `%player_health%`...) se pueden usar entonces en el comando, por ejemplo en un `IF`.
  * `entityUUID`: UUID de la entidad objetivo
  * `command`: Comando de entidad que se ejecutará sobre la entidad.
* Ejemplo:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Comandos de ítem

* Info: comando que permite, desde fuera y desde dentro de Ssomar Plugins, ejecutar un [comando de ítem](/tools-for-all-plugins-score/custom-commands/item-commands) personalizado sobre un ítem del inventario de un jugador.

* Comando: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: nombre o UUID del jugador que tiene el ítem
  * `slot`: slot del ítem en el inventario del jugador: de `0` a `8` para la hotbar, de `9` a `35` para el resto del inventario, de `36` a `39` para la armadura (de las botas al casco), `40` para la mano secundaria
  * `command`: Comando de ítem que se ejecutará sobre este ítem. Se pueden usar en él los placeholders de jugador.
  * No ocurre nada cuando el jugador está desconectado o cuando el slot está vacío.
* Ejemplos:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
