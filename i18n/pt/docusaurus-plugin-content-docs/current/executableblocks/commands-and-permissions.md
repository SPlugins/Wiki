---
description: >-
  Veja a lista completa de comandos e permissões do ExecutableBlocks, incluindo
  criação, edição, give/take e triggers personalizados.
source_hash: aaceb7cb9a44305e
translated_at: '2026-10-03T10:47:21.637Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ⌨️ Comandos e Permissões

## Permissões

**DICA para iniciantes:**

:::info
Para dar as permissões de todos os itens, recomendo que você baixe um plugin de permissões como o [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/). Depois de ter um plugin de permissões, você só precisa dar a permissão **`eb.block.*`**, para o Luckperms o comando é **`/lp group default permission set eb.block.* true`**
:::

#### Permissão de bloco

* Permissão: `eb.block.{id}`
* Permissão negativa: `-eb.block.{id}`
* Exemplo: `eb.block.Test`
* Dar permissão de todos os itens: `eb.block.*`

#### Dar todas as permissões do EB

* Permissão: `eb.*`

#### Dar todas as permissões de comandos do EB

* Permissão: `eb.cmds`

#### Permissão para ignorar o cooldown

* Permissão: `eb.nocd.{id}` `eb.nocd.*`
* Descrição: Dê essa permissão personalizada para desativar o cooldown para seus jogadores vip
* (Certifique-se de testar sem estar op)

**Limite de EB**

* Permissão: `eb.limit.{amount}`
* Descrição: Define o valor máximo de EB(s) que um jogador pode colocar.

#### Limitar um EB específico

* Permissão: `eb.block.ID.limit.{amount}`
* Descrição: Limita a quantidade de um ID específico de EB que um jogador pode colocar

## Comandos

#### Criar um novo ExecutableBlock

* Comando: **/eb create \{id\}**
* Dica:
  * Se você quiser **copiar o item/bloco de outro plugin**, ou um bloco vanilla personalizado (Banner, bloco personalizado, ...), você precisa instalar meu outro plugin, ExecutableItems, digitar **/ei create \{id\}** e então importar seu ExecutableItem no ExecutableBlocks.
* Permissão: `eb.cmd.create`

####

#### Abrir uma gui com os EB(s) colocados

* comando: /eb show-placed filter/sort:

#### Abrir o editor / menu

* Comando: **/eb editor** ou **/eb show**
* Permissão: `eb.cmd.editor` ou `eb.cmd.show`

#### Abrir o editor para editar um EB específico

* Comando: **/eb edit \{BlockID\}**
* Permissão: `eb.cmd.edit`

#### Recarregar o plugin

* Comando: **/eb reload**
* Permissão: `eb.cmd.reload`

#### Recarregar o plugin (apenas 1 bloco)

* Comando: **/eb reload \{block\_id\}**
* Permissão: `eb.cmd.reload`

**Recarregar uma pasta**

* Comando: **/eb reload folder\:Name\_Of\_My\_Folder**
* Permissão: `eb.cmd.reload`

#### Excluir um ExecutableBlock

* Comando: **/eb delete \{id\}**
* Permissão: `eb.cmd.create`

#### Recarregar os blocos padrão do ExecutableBlock

* Comando: **/eb default\_blocks**
* Permissão: `eb.cmd.default_blocks`

#### Limpar todos os cooldowns e comandos atrasados do EB

* Comando: **/eb clear** **\[playerName]**
* Permissão: `eb.cmd.clear`

:::info
Também funciona com entidades, basta usar o UUID da entidade em vez do nome do jogador
:::

#### Ativar / Desativar a actionbar do EB

* Comando: **/eb actionbar** **\{on or off\}**
* Permissão: `eb.cmd.actionbar`

#### Colocar um EB em uma posição específica

* Comando: **/eb place \{id\} \{x\} \{y\} \{z\} \{world\}**
* Permissão: `eb.cmd.place`

#### Remover um EB em uma posição específica

* Comando: **/eb remove \{x\} \{y\} \{z\} \{world\}** \[replaceWithAir padrão true]
* Permissão: `eb.cmd.remove`

#### Preencher uma seleção de região com um EB

* Requisito: Esse comando requer ter o plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-place \{id\}**
* Permissão: `eb.cmd.we-place`

#### Preencher uma região do WorldGuard com um EB

* Requisito: Esse comando requer ter o plugin WorldGuard
* Comando: **/eb wg-fill-region \{world\} \{region\_name\} stone:70,MyEb:30**
* Permissão: `eb.cmd.wg-fill-region`

#### Remover todos os EB presentes em uma seleção de blocos

* Requisito: Esse comando requer ter o plugin [**worldEdit**](https://dev.bukkit.org/projects/worldedit)
* Comando: **/eb we-remove \{replaceTheEBByAir true or false\}**
* Permissão: `eb.cmd.we-remove`

#### Modificação de variável de EB

* Comando: /eb modification \{set/modification\} variable \{world\} \{x\} \{y\} \{z\} \{variableName\} \{value\}

#### Modificação de uso de EB

* /eb modification \{set/modification\} usage \{world\} \{x\} \{y\} \{z\} \{value\}

### Comandos de Give & Take

#### Comando Give

* (Funciona para jogadores offline)
* Comando:
  * **/eb give \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\}** \[giveOfflinePlayer padrão true]
* Permissão: `eb.cmd.give`
* Exemplos:
  * Exemplos:
    * **/eb give %player% Genesis\_Crystal\{Variables:\{vibraniun:10,proton:30\},Usage:10\} 3**
    * **/eb give %player% SurgeBlade\{Variables:\{charge:%var\_charge%+1\},Usage:%usage%-1\} 1**
    * **/eb give %player% BoneBlade 1**

#### Comando Take

* Comando:
  * **/eb take \{playername\} \{id\} \{quantity\}**
* Permissão: `eb.cmd.take`

#### Comando GiveAll

* Comando:
  * **/eb giveall \{id\} \{quantity\}** **\[world]**
* Permissão: `eb.cmd.giveall`

#### Dar um EB em um slot específico de um jogador

* Comando:
  * **/eb giveslot \{playername\} \{id\}**\{Variables:\{var\_id\:val\},Usage\:val\}** **\{quantity\} \{slot\}**  **\[override true or false]**
  * Exemplos:
    * **/eb giveslot Ssomar test\{Variables:\{x:"Hey",world:"Island"\},Usage:50\} 1 0**
    * **/eb giveslot Special70 rum\{Usage:69420,Variables:\{tell\_me:"why",aint\_nothing:"BUT A HEARTBREAK"\\}\} 1 %slot%**
    * **/eb giveslot Ssomar xyz\{Variables:\{test:"Hello boss!"\},Usage:5\} 1 5**
  * _Uso padrão: o uso que está na configuração do seu EB_
  * _Override permite que o EB ocupe aquele slot, e se já houver um item lá, ele será movido para outro slot ou dropado no chão._
* Permissão: `eb.cmd.giveslot`

**Dar todos os EB de uma pasta específica para um jogador**

* Comando:
  * **/eb givefolder \{playername\} \{folder\} \{quantity\}**

### Comandos de Drop

#### Dropar um EB em um local / posição específica

* Comando:
  * **/eb drop \{id\}** **\[quantity] \[world] \[x] \[y] \[z]**
  * _Quantidade padrão: 1_
  * _Localização padrão: a localização do jogador que executou esse comando_
* Permissão: `eb.cmd.drop`

### Trigger personalizado

Comandos:

* /eb run-custom-trigger trigger:\{activatorId\} // Ele executará o(s) ativador(es) para todos os EB colocados que tenham um ativador com o ID especificado.
* /eb run-custom-trigger trigger:\{activatorId\} block:\{world,x,y,z\} // Ele executará o(s) ativador(es) apenas para o EB colocado no local especificado e se ele tiver um ativador com o ID especificado.
