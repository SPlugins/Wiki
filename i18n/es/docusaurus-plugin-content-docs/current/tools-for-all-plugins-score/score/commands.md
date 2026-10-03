---
description: >-
  Guía de los comandos de SCore: limpiar datos, cooldowns, webhooks de Discord y
  ejecutar comandos para jugadores, bloques y entidades.
source_hash: 8dc4edcee2a45a0c
translated_at: '2026-10-03T10:44:15.864Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos

## Limpiar contenido de Score

* Este comando te permite limpiar la mayor parte del contenido en progreso de SCore
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

* Comando para limpiar un cooldown específico (para un jugador / entidad específico)
* Comando: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Ejemplo -> EI\:myitem\:myactivator
  * `[UUID]`: (Opcional) El UUID del jugador / entidad

## Inspeccionar bucles, útil para depuración

* Comando: /score inspect-loop

Recargar las configuraciones de variables, proyectiles y dureza de SCore

* Comando: /score reload

## Webhook de Discord
Envía un mensaje a Discord mediante un webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url del webhook
  * `{debug}`: si se le informa o no al ejecutor sobre si se va a realizar un mensaje de webhook
  * `[allowed_mentions]`: puede ser users\:id\[,id,...\] o roles\:id\[,id,...\] o nada
  * `{message...}`: el mensaje que será enviado por el webhook de destino


## Comandos de partículas

Consulta [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Comandos de variables

Consulta [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Ejecutar comandos de SCore manualmente

### Comandos de jugador

* Info: Comando que permite a plugins externos e internos de Ssomar Plugins ejecutar un comando personalizado de SCore hacia un jugador específico.
* Al usar este comando, toda la línea de comando se procesa a través de PlaceholdersAPI, por lo que puedes añadirle placeholders.

* Comando: /score run-player-command player:\{player\} \{command\}
  * `player`: Nombre del jugador objetivo
  * `command`: Comando de jugador de SCore que se aplicará a \{player\}

* Ejemplos:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Comandos de bloque

* Info: Comando que permite a plugins externos e internos de Ssomar Plugins ejecutar un comando personalizado de SCore para un bloque específico.

* Comando: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Jugador que está involucrado en este activador
    * Es opcional porque algunos comandos lo necesitan, por ejemplo

                MOB_AROUND: ¿Quién aplicará el daño? Bueno, el comando aplica daño a los mobs alrededor, pero el daño se contará como infligido por \{player\}, por lo que se comprueba si el jugador realmente puede dañar al mob, el daño y las muertes se contabilizan para él, etc.

                VEIN_BREAKER: ¿Quién rompió los bloques? Bueno, el comando rompe bloques en forma de veta, pero los bloques se contarán como rotos por \{player\}, por lo que se comprueba si el jugador realmente puede romper el bloque, el bloque roto se contabiliza para él, etc.

  * `block`
      * `world`: Mundo donde está el bloque
      * `x`: Coordenada X del bloque
      * `y`: Coordenada Y del bloque
      * `z`: Coordenada Z del bloque
  * `command`: Comando de bloque que se ejecutará contra el bloque y, si existe, por el jugador.

* Ejemplos:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Comandos de entidad

* Info: Comando que permite a plugins externos e internos de Ssomar Plugins ejecutar un comando personalizado de SCore para una entidad específica

* Comando: /score run-entity-command entity:\{entityUUID\} \{command\}
  * `entityUUID`: UUID de la entidad objetivo
  * `command`: Comando de entidad que se ejecutará contra la entidad.
* Ejemplo:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
