---
description: >-
  Entenda como usar as variáveis do SCore no plugin SPlugins para armazenar
  dados globais ou por jogador via comandos e placeholders.
source_hash: 6be0f8b64461a5b8
translated_at: '2026-10-03T10:46:43.400Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## Variáveis do SCore

O Score possui uma integração de variáveis onde você pode armazenar strings/números em variáveis de forma global ou por jogador, elas não são integradas no EI ou EB, mas são integradas como comandos (então podem ser usadas em combinação com EI / EB)

Elas são armazenadas em `plugins/Score/variables`

### Tipos de Variável

| Tipo       | Explicação                        |
| ---------- | ---------------------------------- |
| **STRING** | Permite armazenar texto            |
| **NUMBER** | Permite armazenar número          |
| LIST       | Permite armazenar múltiplos valores |

### Escopo da Variável (For)

| Tipo       | Explicação                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **GLOBAL** | Variável armazenada de forma global significa que existe um único valor e ele é o mesmo para todos                                                     |
| **PLAYER** | Variável armazenada para cada jogador significa que o valor é independente para cada jogador. Assim, o valor de dois jogadores diferentes pode não ser o mesmo. |

### Tipos de Modificação

| Tipo             | Explicação                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Você define um valor estático para a variável                                                               |
| **MODIFICATION** | Você modifica a variável (útil para variáveis INT, para adicionar valor a um valor inteiro, ou para subtrair um certo valor) |
| **LIST-ADD**     | Específico para LIST, adiciona um novo valor na lista                                                                |
| **LIST-REMOVE**  | Específico para LIST, remove um valor da lista                                                                 |

:::danger
O ID das variáveis não pode ter underscores, pontos ou espaços, mas - é permitido
:::

## Ferramentas de variáveis

* /score variables list
  * Exibe todos os IDs de variáveis existentes
* /score variables info \{variable-id\} \[player]
  * Exibe o valor de uma variável específica (Opcional: para um jogador específico)
* /score variables-create \{variable-id\}
  * Cria uma nova variável com o id mencionado e abre o editor in-game
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Permite criar uma nova variável usando um comando
* /score variables-delete \{variable-id\}
  * Exclui a variável com o id mencionado
* /score variables
  * Abre o editor in-game de variáveis
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Limpa o valor da variável (Opcional: para um jogador específico)
  * Se você substituir \[player] por **all,** isso limpará o valor para todos os jogadores
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Permite modificar o valor de uma variável existente.
  * Exemplos:
    * **GLOBAL Variables**:
      * /score variables SET GLOBAL exemple1 100
        * Define o valor 100 para a variável global exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Aumenta a variável global plop em +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Diminui a variável global plop em -50
    * **PLAYER Variables**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Define o valor -20 para a variável my-variable do jogador Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Diminui a variável de jogador my-variable em -50 para Ssomar
    * **Exemplos específicos para o tipo LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Adiciona valores na lista
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Para especificar um local para adicionar o valor na lista, use o recurso de index (0 é o primeiro elemento da lista, então isso adicionará TEXT3 no início da lista)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Remove o último valor
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Remove um índice específico
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Remove um valor específico

:::info
Variable-list também funciona com variáveis GLOBAL, mas você precisaria trocar PLAYER -> GLOBAL e remover o jogador no comando
:::

## Placeholders de variáveis

Isso requer o [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Como os placeholders de variáveis do SCore são suportados pelo PlaceholderAPI, você pode usar as variáveis do SCore assim:

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholders específicos para LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Retorna o valor no índice específico da lista
* %score\_variables\_\<variable-id>%
  * Retorna todos os elementos da lista
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Retorna um booleano para ver se a lista contém um valor (true ou false)
* %score\_variables-size\_\<variable-name>%
  * Retorna o tamanho da lista

O que você pode fazer com esse recurso -> Item criado por Ssomar

<details>

<summary>Terminator<br /><br />Habilidade : <br />- CLIQUE DIREITO para selecionar entidades<br />- SHIFT+CLIQUE DIREITO para explodi-las<br /><br />Você precisa primeiro criar a variável, você pode usar este comando:<br />/score variables-define myList LIST PLAYER<br /></summary>


```yaml
# Le nom ou nom d'affichage
name: '&6&l>> &7Terminator stick &6&l<<'
# La description de l'item
lore:
- '&7Select entites by right'
- '&7clicking on them !'
- '&eLimit: &63 entities'
- '&e'
- '&7Then shift + right click'
- '&7to make them explode !'
# Le matériau
material: STICK
usage: 1
usageLimit: -1
config_5: true
config_update: true
# Fonctionnalités de nourriture
foodFeatures:
  # La nutrition de la nourriture
  nutrition: 1
  # La saturation de la nourriture
  saturation: 1
  # La nourriture est-elle de la viande?
  isMeat: false
  # Le joueur peut-il toujours manger cette nourriture?
  canAlwaysEat: false
# Les fonctionnalités de masquage
# Masquer:
# Attributs, Enchantements, ...
hiders:
  # Masquer l'utilisation
  hideUsage: true
# Les activateurs / déclencheurs
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - SWING_MAIN_HAND
    - LAUNCH DEFAULT_INVISIBLE_ARROW_NO_GRAVITY_SPEED
  activator5:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SENDMESSAGE &7You &cunselected &7the entity: &e%entity_name%'
    - score variables list-remove player myList %player% value:%entity_uuid%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'true'
    detailedEntities: []
    entityCommands: []
  activator2:
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% JUMP 1
    - END_FOR for1
    - DELAYTICK 5
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% DAMAGE 100
    - END_FOR for1
    - execute at %player% run playsound minecraft:entity.ender_dragon.death master
      @a
    - score variables clear player myList %player%
    - SEND_MESSAGE &7You &cpulverized &7the selected entities &7but you can do many
      other things let's talk your imagination
    #
    playerConditions:
      ifSneaking: true
      # The message displayed
      # when the condition is not met
      ifSneakingMsg: ''
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '0'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&7To execute the ability you must to &cselect at least
          1 entity'
  activator1:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SEND_MESSAGE &7You &aselected &7the entity: &e%entity_name%'
    - score variables list-add player myList %entity_uuid% %player%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'false'
      plchCdt1:
        type: PLAYER_NUMBER
        comparator: INFERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '3'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&4&l>> &7&oYou can''t select more than 3 entities'
    detailedEntities: []
    entityCommands: []
  activator3:
    # Le nom ou nom d'affichage
    name: cancelProjectileSelection
    option: PROJECTILE_HIT_ENTITY
    # Annuler l'événement vanilla
    cancelEvent: true
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands: []
    detailedEntities: []
    entityCommands: []
```


</details>

## ExecutableItems (Variáveis de item)

O ExecutableItems possui uma integração de variáveis onde você pode armazenar strings/números/listas em variáveis **dentro** do item. Com elas você pode criar múltiplas mecânicas nos seus itens.

:::info
Existem formas de alterar a variável fora do item, usando estes métodos:\
\

#### Modificar uma variável

* VIA CONSOLE
  * Comando: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* VIA jogo
  * Comando:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Para verificar os placeholders das "Internal item variables", confira aqui

## ExecutableBlocks (Variáveis de bloco)

O ExecutableBlocks possui uma integração de variáveis onde você pode armazenar strings/números/listas em variáveis **dentro** do bloco. Com elas você pode criar múltiplas mecânicas nos seus blocos.

Para verificar os placeholders das "Internal item/block variables", confira aqui
