---
description: >-
  Lista dos comandos do SCore: limpar conteúdo, cooldowns, webhook do Discord, e
  executar comandos de jogador, bloco, entidade e item manualmente.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T18:18:22.315Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos

## Limpar conteúdo do SCore

* Este comando permite limpar a maior parte do conteúdo em andamento do SCore
* Você pode limpar:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (comandos do SCore executados com atraso)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Comando: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Limpar cooldowns 

* Comando para limpar um cooldown específico (para um jogador / entidade específico)
* Comando: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Exemplo -> EI\:myitem\:myactivator
  * `[UUID]`: (Opcional) O UUID do jogador / entidade

## Inspecionar loops, útil para depuração

* Comando: /score inspect-loop

Recarregar as variáveis, projéteis e configurações de dureza do SCore

* Comando: /score reload

## Webhook do Discord
Envie uma mensagem para o Discord via webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url do webhook
  * `{debug}`: define se o executor será informado de que uma mensagem de webhook vai ser enviada ou não
  * `[allowed_mentions]`: pode ser users\:id\[,id,...\] ou roles\:id\[,id,...\] ou nada
  * `{message...}`: a mensagem que será enviada pelo webhook de destino


## Comandos de partículas

Confira [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Comandos de variáveis

Confira [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Executar comandos do SCore manualmente

### Comandos de jogador

* Info: Comando que permite, de fora e de dentro dos Ssomar Plugins, executar um comando personalizado do SCore em um jogador específico.
* Ao usar este comando, toda a linha de comando é processada pelo PlaceholdersAPI, então você pode adicionar placeholders a ela.

* Comando: /score run-player-command player:\{player\} \{command\}
  * `player`: Nome do jogador alvo
  * `command`: Comando de jogador do SCore que será aplicado a \{player\}

* Exemplos:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Comandos de bloco

* Info: Comando que permite, de fora e de dentro dos Ssomar Plugins, executar um comando personalizado do SCore em um bloco específico.

* Comando: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Jogador envolvido neste ativador
    * É opcional, pois alguns comandos precisam dele, por exemplo

                MOB_AROUND: Quem aplicará o dano? Bem, o comando aplica dano aos mobs ao redor, mas o dano será contabilizado como causado pelo \{player\}, então ele verifica se o jogador realmente pode causar dano ao mob, o dano e as mortes contam para ele, etc.

                VEIN_BREAKER: Quem quebrou os blocos? Bem, o comando quebra blocos em formato de veio, mas os blocos serão contabilizados como quebrados pelo \{player\}, então ele verifica se o jogador realmente pode quebrar o bloco, o bloco quebrado conta para ele, etc.

  * `block`
      * `world`: Mundo onde o bloco está
      * `x`: Coordenadas X do bloco
      * `y`: Coordenadas Y do bloco
      * `z`: Coordenadas Z do bloco
  * `command`: Comando de bloco que será executado no bloco e, se existir, pelo jogador.
    * Os [placeholders de bloco](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) do comando são os deste bloco.

* Exemplos:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Comandos de entidade

* Info: Comando que permite, de fora e de dentro dos Ssomar Plugins, executar um comando personalizado do SCore em uma entidade específica

* Comando: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Opcional) nome ou UUID de um jogador envolvido: os placeholders de jogador (`%player%`, `%player_health%`...) podem então ser usados no comando, por exemplo em um `IF`.
  * `entityUUID`: UUID da entidade alvo
  * `command`: Comando de entidade que será executado na entidade.
* Exemplo:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Comandos de item

* Info: Comando que permite, de fora e de dentro dos Ssomar Plugins, executar um [comando de item](/tools-for-all-plugins-score/custom-commands/item-commands) personalizado em um item do inventário de um jogador.

* Comando: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: nome ou UUID do jogador que possui o item
  * `slot`: slot do item no inventário do jogador: `0` a `8` para a hotbar, `9` a `35` para o resto do inventário, `36` a `39` para a armadura (botas ao capacete), `40` para a mão secundária
  * `command`: Comando de item que será executado neste item. Os placeholders de jogador podem ser usados nele.
  * Nada acontece quando o jogador está offline ou quando o slot está vazio.
* Exemplos:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
