---
description: >-
  Veja os comandos do SCore: limpar dados, gerenciar cooldowns, webhook do
  Discord e executar comandos para jogadores, blocos e entidades.
source_hash: 8dc4edcee2a45a0c
translated_at: '2026-10-03T10:47:35.321Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Comandos

## Limpar coisas do Score

* Este comando permite limpar a maior parte do conteúdo do SCore em andamento
* Você pode limpar:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (comandos do SCore executados com delay)
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

## Inspecionar loops, útil para debug

* Comando: /score inspect-loop

Recarregar as configurações de variáveis, projéteis e hardness do SCore

* Comando: /score reload

## Webhook do Discord
Enviar uma mensagem ao Discord via webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url do webhook
  * `{debug}`: se deve ou não avisar quem executou o comando caso o envio da mensagem pelo webhook seja realizado
  * `[allowed_mentions]`: pode ser users\:id\[,id,...\] ou roles\:id\[,id,...\] ou nada
  * `{message...}`: a mensagem que será enviada pelo webhook de destino


## Comandos de partículas

Veja [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Comandos de variáveis

Veja [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Executar comandos do SCore manualmente

### Comandos de jogador

* Info: Comando que permite a plugins externos e internos da Ssomar Plugins executar um comando personalizado do SCore para um jogador específico.
* Ao usar este comando, toda a linha de comando é processada pelo PlaceholdersAPI, então você pode adicionar placeholders a ela.

* Comando: /score run-player-command player:\{player\} \{command\}
  * `player`: Nome do jogador alvo
  * `command`: Comando de jogador do SCore que será aplicado a \{player\}

* Exemplos:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Comandos de bloco

* Info: Comando que permite a plugins externos e internos da Ssomar Plugins executar um comando personalizado do SCore para um bloco específico.

* Comando: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Jogador envolvido neste ativador
    * É opcional pois alguns comandos precisam dele, por exemplo

                MOB_AROUND: Quem vai aplicar o dano? Bem, o comando aplica dano aos mobs ao redor, mas o dano será contabilizado como causado pelo \{player\}, então ele verifica se o jogador pode realmente causar dano ao mob, a contagem de dano e de abates para ele, etc.

                VEIN_BREAKER: Quem quebrou os blocos? Bem, o comando quebra blocos em formato de veia, mas os blocos serão contabilizados como quebrados pelo \{player\}, então ele verifica se o jogador pode realmente quebrar o bloco, a contagem de blocos quebrados para ele, etc.

  * `block`
      * `world`: Mundo onde o bloco está
      * `x`: Coordenada X do bloco
      * `y`: Coordenada Y do bloco
      * `z`: Coordenada Z do bloco
  * `command`: Comando de bloco que será executado contra o bloco e, se existir, pelo jogador.

* Exemplos:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Comandos de entidade

* Info: Comando que permite a plugins externos e internos da Ssomar Plugins executar um comando personalizado do SCore para uma entidade específica

* Comando: /score run-entity-command entity:\{entityUUID\} \{command\}
  * `entityUUID`: UUID da entidade alvo
  * `command`: Comando de entidade que será executado contra a entidade.
* Exemplo:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
