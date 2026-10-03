---
description: >-
  Entenda targetCommands e targetConditions no SPlugins: como comandos e
  condições afetam o player, o target e a entity.
source_hash: 8f10e4518745e33e
translated_at: '2026-10-03T10:49:47.439Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### targetCommands

Commands são uma lista de comandos que são executados a partir do console quando o ativador cumpre todas as condições e requisitos. Você pode usar comandos vanilla aqui, comandos do SCore e comandos de outros plugins.

* Todas as linhas de comando dessa lista de comandos são primeiro processadas com placeholders dos Ssomar Plugins e depois processadas pelo PAPI.
  * É recomendado verificar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver quais placeholders você pode usar em cada ativador.
* Existem três tipos de entity targets nos comandos
  * Player: É o player/usuário que acionou o ativador no ExecutableItem
  * Target: É o player alvo/inimigo envolvido em um ativador.
  * Entity: É a entity/mob/inimigo envolvido em um ativador.
* Info: Target commands é uma lista de comandos que normalmente são executados contra o target quando o ativador é acionado.
  * Isso significa que se houver um comando do SCore DAMAGE 5, se estiver em targetCommands, então o dano será aplicado ao target/inimigo envolvido no ativador.
  * É "normalmente executado contra o player" porque isso funciona para comandos do SCore, lembre-se que você pode usar comandos de outros plugins ou comandos vanilla, então se você adicionar "effect give %player% strength 5 5" mesmo estando em targetCommands, o processamento dos placeholders vai aplicar o cooldown em %player%. Se você quiser aplicar esse comando ao target, então use %target%. Mais informações em [Placeholders](/tools-for-all-plugins-score/placeholders)
  * Você pode verificar a lista de targetCommands aqui -> [Player & Target commands](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* É importante entender que, se o seu ativador também tiver um player, você pode usar o playerCommands, então podemos ter por exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    playerCommands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### targetConditions

* Tipo de categoria de ativador: PLAYER\_TARGET
* Info: Recurso para ativadores que envolvem um player target, aqui você pode configurar condições para o player target envolvido.
* [Target conditions](/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### Target player placeholders

Quando o segundo ator do evento é um player, então você pode usar na configuração do seu ativador (commands, condições, outros..) [os target player placeholders](/tools-for-all-plugins-score/placeholders#-player-placeholders)
