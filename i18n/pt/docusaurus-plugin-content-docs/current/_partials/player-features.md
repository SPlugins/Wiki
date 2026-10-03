---
description: >-
  Guia sobre playerCommands, playerConditions e placeholders de jogador nos
  ativadores do SPlugins (SCore).
source_hash: 6c1515db5b50e18e
translated_at: '2026-10-03T10:49:23.888Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### playerCommands

Commands são uma lista de comandos que são executados a partir do console quando o ativador atender a todas as condições e requisitos. Você pode usar comandos vanilla aqui, comandos do SCore e comandos de outros plugins.

* Todas as linhas de comando dessa lista de comandos são primeiro interpretadas com placeholders dos Ssomar Plugins e depois interpretadas pelo PAPI.
  * É recomendado verificar a [lista de Placeholders](/tools-for-all-plugins-score/placeholders) para ver quais placeholders você pode usar em cada ativador.

* Info: Player commands é uma lista de comandos que normalmente são executados contra o jogador quando o ativador é acionado.
  * Isso significa que, se houver um comando do SCore, por exemplo: DAMAGE 5, o dano será aplicado ao usuário do ExecutableItem.
    * [Player commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) personalizados disponíveis no SCore
  * Você também pode executar comandos de outros plugins ou comandos vanilla. Esses comandos serão executados pelo console.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerCommands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: Você pode usar essas condições em todos os tipos de ativadores
* [Player conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Player placeholders

Quando o ator principal do evento é um jogador, então você pode usar na configuração do seu ativador (comandos, condições, entre outros) [os player placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders)
