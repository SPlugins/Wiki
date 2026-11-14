---
description: >-
  Veja a lista de comandos de entidade do SCore para ExecutableItems e
  ExecutableBlocks: CHANGE_TO, HEAL, KILL, SET_AI, teleportes e muito mais.
source_hash: f04bd6ad6572d292
translated_at: '2026-11-13T18:15:53.703Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import LinkPreview from '@site/src/components/LinkPreview';

# Comandos de Entidade

:::tip
Compatibilidade "multi-world" para os comandos vanilla.

`execute in <<NAME_OF_YOUR_WORLD>> run ...`

Exemplo: você quer invocar um Zombie no mundo SsomarWorld:

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

Esses comandos podem ser usados nos comandos relacionados ao jogador OU nos comandos relacionados à entidade.

## Comandos personalizados

_Ordenados em ordem alfabética_

### ANGRY\_AT

* Info: Define o alvo da entidade como um UUID específico
* Configuração do comando:
  * `{entityUUID}`: O UUID da entidade alvo
* Exemplo:

```
- ANGRY_AT entityUUID:%player_uuid%
# To reset the angry set null
- ANGRY_AT entityUUID:null
```

### AWARENESS

* Info: Define se este mob está ciente do que o cerca. Mobs sem consciência ainda se movem se forem empurrados, atacados etc., mas não se movem nem realizam nenhuma ação por conta própria. Mobs sem consciência também podem ter outros comportamentos não especificados desativados, como se afogar.

:::info
só funciona na 1.16.5+
:::

* Configuração do comando:
  * `{value}`: true ou false
* Exemplo:

```
- AWARENESS value:true
```

### CHANGE\_INTO\_ITEM

* Info: Substitui um item largado (uma entidade de item no chão ou no ar) por um item vanilla ou por um ExecutableItem. A entidade continua a mesma, apenas o item que ela carrega muda.
* Feito para o ativador `PLAYER_FISH_FISH` do ExecutableItems: nele, a entidade alvo de `entityCommands` é o item capturado. Ele é trocado antes de ser puxado, então o jogador mantém a animação normal de pesca e recebe o seu item no lugar do peixe. Não é necessário `/ei give`, nem `DELAYTICK`, nem `data merge`.
  * No ExecutableEvents (todas as varas de pesca do servidor), escreva-o no `targetEntityCommands` de `PLAYER_FISH_FISH`.
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
* O ExecutableItem é criado para o jogador que acionou o ativador (dono, placeholders do item).
* O comando não faz nada se a entidade alvo não for um item largado (um mob, um jogador...), e exibe uma mensagem no console se `item` não for nem um material nem um ExecutableItem carregado.
* Exemplo completo com uma tabela de loot aleatória: [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot)
:::

### CHANGE\_TO

* Info: Substitui o mob por uma entidade de outro tipo. Ele mantém a velocidade atual da entidade atual.
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

* Info: Larga um Executable Item na localização da entidade
* Configurações do comando:
  * `{id}`: Id do item do ExecutableItem
  * `{quantity}`: A quantidade do executable item que será largada
  * `[owner]`: (Opcional) O dono do item largado (nick do jogador ou UUID)
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

* Info: Larga um Executable Block na localização da entidade
* Configurações do comando:
  * `{id}`: Id do item do ExecutableBlock
  * `{quantity}`: A quantidade do executable block que será largada
* Exemplo:

```
- DROPEXECUTABLEBLOCK House 1
```

### DROPITEM

* Info: Larga um item na localização da entidade
* Configurações do comando:
  * `{material}`: O tipo do item. [Referência](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) **(DEVE ESTAR TODO EM MAIÚSCULAS)**
  * `{quantity}`: A quantidade do item que será largada
* Exemplo:

```
- DROPITEM DIAMOND 1
```

### HEAL

* Info: Cura a entidade em uma quantidade específica; se não for especificada, cura totalmente a entidade.
* Configuração do comando:
  * `{amount}`: A quantidade de cura
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
  * `{control}`: true/false define se você pode controlar a entidade manualmente ou não
  * `{speed}`: a velocidade que a entidade pode atingir enquanto você a monta
* Exemplo:

```yaml
- PLAYER_RIDE_ON_ENTITY control:true speed:1.0
```

### SET\_AI

* Info: Define o estado da IA da entidade
* Configurações do comando:
  * `{value}`: true para ativar a IA da entidade e false para desativar.
* Exemplo:

```
- SET_AI value:false
```

### SET\_ADULT

* Info: Coloca a entidade no estado "adulto"
* Sem configuração de comando
* Exemplo:

```
- SET_ADULT
```

* Situação de exemplo:
  * Se este comando for executado em uma galinha filhote, ela se transformará em sua forma adulta.

### SET\_BABY

* Info: Coloca a entidade no estado "filhote"
* Sem configuração de comando
* Exemplo:

```
- SET_BABY
```

* Situação de exemplo:
  * Se este comando for executado em uma galinha adulta, ela se transformará em sua forma de filhote.

### SET\_ENTITY\_NAME

* Info: Define à força o nome da entidade
* Configuração do comando:
  * `{name}`: o novo nome da entidade
* Exemplo:

```
- SET_ENTITY_NAME name:&6Final &cBoss
```

### SHEAR

* Info: Tosquia a entidade
* Sem configuração de comando
* Exemplo:

```
- SHEAR
```

### TELEPORT\_ENTITY\_TO\_PLAYER

* Info: Teletransporta a entidade para o usuário do item
* Sem configuração de comando
* Exemplo:

```
- TELEPORT_ENTITY_TO_PLAYER
```

### TELEPORT\_PLAYER\_TO\_ENTITY

* Info: Teletransporta o usuário do item para a entidade
* Sem configuração de comando
* Exemplo:

```
- TELEPORT_PLAYER_TO_ENTITY
```

### TELEPORT\_POSITION

* Info: Teletransporta a entidade para uma localização específica
* Configurações do comando:
  * `{x}`: Coordenada X
  * `{y}`: Coordenada Y
  * `{z}`: Coordenada Z
* Exemplo:

```
- TELEPORT_POSITION x:%target_x% y:%target_y% z:%target_z%
```
