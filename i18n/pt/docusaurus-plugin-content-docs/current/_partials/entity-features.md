---
description: >-
  Guia sobre entityCommands, detailedEntities, entityConditions e placeholders
  de entidade nos ativadores do plugin ExecutableItems.
source_hash: 54a0eb1b19c50558
translated_at: '2026-10-03T10:48:55.128Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### entityCommands

Commands são uma lista de comandos que são executados a partir do console quando o ativador atende a todas as condições e requisitos. Você pode usar comandos vanilla aqui, comandos do SCore e comandos de outros plugins.

* Todas as linhas de comando dessa lista de comandos são primeiro processadas como placeholder com os placeholders dos Ssomar Plugins e depois são processadas pelo PAPI.
  * É recomendado verificar [Placeholders](/tools-for-all-plugins-score/placeholders) para ver quais placeholders você pode usar em cada ativador.
* Existem três tipos de alvos de entidade nos comandos
  * Player: É o jogador/usuário que acionou o ativador no ExecutableItem
  * Target: É o jogador alvo/inimigo envolvido em um ativador.
  * Entity: É a entidade/mob/inimigo envolvido em um ativador.
* Tipo de categoria do ativador: PLAYER\_ENTITY
* Info: Lista de comandos que normalmente são executados contra a entidade quando o ativador é acionado.
  * Por entity, entende-se entidade/mob/inimigo envolvido em um ativador.
  * Sabemos que o jogador é considerado como entity, mas a entidade envolvida nos ativadores é apenas o mob/inimigo envolvido no evento.
  * Você pode verificar a lista de entity commands aqui [Entity commands](/tools-for-all-plugins-score/custom-commands/entity-commands)
* Exemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY # replace that with the correct activator name
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* É importante entender que, se o seu ativador também tiver um player, você pode usar o playerCommands, de forma que possamos ter, por exemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    playerCommands:
    - SEND_MESSAGE &cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### detailedEntities

* Info: Para ativadores que envolvem uma entity, você pode selecionar como condição o tipo de entity(es) em que esse ativador será acionado usando esse recurso.
  * Você pode selecionar uma entidade vanilla do Minecraft (info: [EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) como:
    * "ZOMBIE"
  * <CustomTag type="premium" /> Isso requer o [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) Você pode selecionar um mob vanilla do Minecraft com NBT (info: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) como:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * Você pode selecionar um mob do MythicMob como:
    * "MM-\<ID>"
  * Você pode colocar um mob na blacklist usando ! como
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_AN_ENTITY  # replace that with the correct activator name
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### entityConditions

* Info: Recurso para ativadores que envolvem uma entity, aqui você pode configurar condições para a entity envolvida.
* [Entity conditions](/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### Entity placeholders

Quando o ator principal do evento é uma entity, você pode usar na configuração do seu ativador (commands, conditions, outros...) [os placeholders de entity](/tools-for-all-plugins-score/placeholders#entity-placeholders)
