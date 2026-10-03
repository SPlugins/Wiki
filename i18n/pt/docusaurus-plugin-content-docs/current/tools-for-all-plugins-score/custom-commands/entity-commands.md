---
description: >-
  Guia dos comandos de entidade do ExecutableItems: CHANGE_TO, HEAL, SET_AI,
  TELEPORT e outros, no plugin SPlugins.
source_hash: 513c7df4b594137b
translated_at: '2026-10-03T10:48:01.867Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de Entidade

:::tip
Compatibilidade "multi-world" para os comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemplo, você quer invocar um Zombie no mundo SsomarWorld:

`execute in <<SsomarWorld>> run summon zombie 100 50 100`

Exemplo com um placeholder`:`

`execute in <<%entity_world%>> run summon zombie 100 50 100`
:::

:::info
Os comandos de entidade suportam NPCs do Citizens
:::

## Comandos Mistos

Além da lista de comandos a seguir, você também pode usar:

<LinkPreview
  url="docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity"
  title="Mixed commands (Compatible with Player and Entity)"
/>

Esses comandos podem ser usados tanto nos comandos relacionados a Player quanto nos comandos relacionados a Entity.

## Comandos personalizados

_Ordenados em ordem alfabética_

### ANGRY\_AT

* Info: Define o alvo da entidade para um UUID específico
* Configuração do comando:
  * `{entityUUID}`: O UUID da entidade alvo
* Exemplo:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Define se esse mob está consciente do seu entorno. Mobs inconscientes ainda vão se mover se forem empurrados, atacados, etc. mas não vão se mover ou executar nenhuma ação por conta própria. Mobs inconscientes também podem ter outros comportamentos não especificados desativados, como se afogar.

:::info
funciona apenas para 1.16.5+
:::

* Configuração do comando:
  * `{value}`: true ou false
* Exemplo:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Substitui um item dropado (um item entity no chão ou no ar) por um item vanilla ou um ExecutableItem. A entidade permanece a mesma, apenas o item que ela carrega muda.
* Feito para o ativador `PLAYER_FISH_FISH` do ExecutableItems: lá, a entidade alvo de `entityCommands` é o item capturado. Ele é alterado antes de ser recolhido, então o jogador mantém a animação normal de pesca e recebe seu item em vez do peixe. Não é necessário `/ei give`, `DELAYTICK` ou `data merge`.
* Configurações do comando:
  * `item`: Um material (`DIAMOND`) ou o id de um ExecutableItem (`my_custom_fish`).
  * `amount`: (Opcional) A quantidade do novo item. Padrão: 1
* Exemplo:

```yaml
activators:
  activator0:
    option: PLAYER_FISH_FISH
    entityCommands:
    - CHANGE_INTO_ITEM item:my_custom_fish amount:1
```

```
- CHANGE_INTO_ITEM item:DIAMOND amount:3
- CHANGE_INTO_ITEM item:EI:my_custom_fish
```

:::info
* Se um ExecutableItem e um material tiverem o mesmo nome, o ExecutableItem é usado. Escreva `EI:my_id` para aceitar apenas um ExecutableItem.
* O ExecutableItem é construído para o jogador que acionou o ativador (proprietário, placeholders do item).
* O comando não faz nada se a entidade alvo não for um item dropado (um mob, um player...), e imprime uma mensagem no console se `item` não for nem um material nem um ExecutableItem carregado.
* Exemplo completo com uma tabela de loot aleatória: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Substitui o mob por uma entidade de outro tipo. Ele vai manter a velocidade atual da entidade atual.
  * Você pode especificar um [EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * Ou um exemplo de definição de entidade: `{HasVisualFire:1b,id:"minecraft:bee"}` (1.21.+)
  * Ou um ID de MythicMob
* Configuração do comando:
  * `{entity}`: A especificação da entidade
* Exemplo:

```
# With EntityType
- CHANGE_TO entity:CHICKEN

# With EntitySnapshot
- CHANGE_TO entity:{HasVisualFire:1b,id:"minecraft:bee"}

# Or using variable
- CHANGE_TO entity:%var_myvar%

# With MythicMob ID
- CHANGE_TO entity:MyCustomBossID
```

### DROPEXECUTABLEITEM

* Info: Dropa um Executable Item na localização da entidade
* Configurações do comando:
  * `{id}`: Id do item do ExecutableItem
  * `{quantity}`: A quantidade do executable item que vai dropar
  * `[owner]`: (Opcional) O proprietário do item dropado (IGN ou UUID do jogador)
  * `[itemdata]`: (Opcional) Configurações de dados do item contendo:
    * `Usage`: Define o valor de uso
    * `Variables`: Define variáveis personalizadas (formato: `{key:value}`)
    * `Durability`: Define o valor de durabilidade
* Exemplo:

```
- DROPEXECUTABLEITEM ElytraTrail 1
- DROPEXECUTABLEITEM id:ElytraTrail amount:1 owner:Special70 itemdata:Usage:50,Variables:{level:5}
```

### DROPEXECUTABLEBLOCK

* Info: Dropa um Executable Block na localização da entidade
* Configurações do comando:
  * `{id}`: Id do item do ExecutableBlock
  * `{quantity}`: A quantidade do executable block que vai dropar
* Exemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Dropa um item na localização da entidade
* Configurações do comando:
  * `{material}`: O tipo do item. [Referência](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DEVE ESTAR TODO EM MAIÚSCULAS)**
  * `{quantity}`: A quantidade do item que vai dropar
* Exemplo:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Cura a entidade com uma quantidade específica, se não for especificado vai curar totalmente a entidade.
* Configuração do comando:
  * `{amount}`: A quantidade da cura
* Exemplo:

```
# Full heal
- HEAL
# Amount specific heal
- HEAL amount:5
# Remove heal
- HEAL amount:-5
```

### KILL

* Info: Mata o mob sem a animação de morte
* Sem configuração de comando
* Exemplo:

```
- KILL
```

### PLAYER\_RIDE\_ENTITY

* Info: Faz o jogador montar na entidade alvo.
* Configurações do comando:
  * `{control}`: true/false se você pode controlar manualmente a entidade ou não
  * `{speed}`: quão rápido a entidade pode ir enquanto você a monta
* Exemplo:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Define o estado de IA da entidade
* Configurações do comando:
  * `{value}`: true para ativar a IA da entidade e false para desativar.
* Exemplo:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Define a entidade em seu estado "adulto"
* Sem configuração de comando
* Exemplo:

```
- SET_ADULT
```

* Exemplo de Situação:
  * Se esse comando for executado em uma galinha bebê, ela vai se transformar em sua forma adulta.

### SET\_BABY

* Info: Define a entidade em seu estado "bebê"
* Sem configuração de comando
* Exemplo:

```
- SET_BABY
```

* Exemplo de Situação:
  * Se esse comando for executado em uma galinha adulta, ela vai se transformar em sua forma bebê.

### SET\_ENTITY\_NAME

* Info: Define forçadamente o nome da entidade
* Configuração do comando:
  * `{name}`: o novo nome da entidade
* Exemplo:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Tosa a entidade
* Sem configuração de comando
* Exemplo:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teleporta a entidade para o usuário do item
* Sem configuração de comando
* Exemplo:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teleporta o usuário do item para a entidade
* Sem configuração de comando
* Exemplo:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teleporta a entidade para uma localização específica
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
* Exemplo:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
