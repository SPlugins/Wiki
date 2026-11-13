---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Lista completa dos ativadores do ExecutableItems com descrição, features
  exclusivas e exemplos para executar ações personalizadas nos seus itens.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T18:14:34.502Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Lista de Ativadores

## Ativadores do ExecutableItems

Aqui está a lista de ativadores disponíveis, com sua descrição e alguns exemplos. Os ativadores permitem executar ações personalizadas, podendo ter condições, executar comandos, ter cooldown, etc.

:::warning
Um ativador cujo `option:` não está nesta lista (erro de digitação, ativador de outro plugin…) fica **desativado**: ele nunca é executado, e o console mostra um erro com os nomes de opção mais próximos quando o item é carregado.
:::

Os ativadores premium são identificados com a tag: <CustomTag type="premium" />

As features de ativador são features exclusivas desse ativador.

### PLAYER\_ALL\_CLICK

* Info: Ativador acionado quando o jogador clica com o botão esquerdo ou direito com o item. 
  * Não é possível diferenciar os cliques; para isso, use ativadores diferentes, como PLAYER\_RIGHT\_CLICK ou PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, estas features estarão disponíveis.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos: 
  * Warping Stone – Teleporta instantaneamente o jogador 5 blocos na direção em que ele está olhando. Cooldown: 10 segundos.
  * Healing Totem – Ao clicar, cura o jogador em 4 corações e concede Regeneration I por 5 segundos.
  * Thunder Rod – Lança um raio no inimigo mais próximo em um raio de 10 blocos.
  * Gravity Boots – Lança o jogador 3 blocos para o alto e anula o dano de queda por 5 segundos.
  * Explosive Rune – Cria uma pequena explosão na posição do jogador que empurra os mobs próximos, mas não danifica o terreno.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica com o botão direito em uma cama e entra nela. Se o jogador não entrar, este ativador não será acionado. Ele não é acionado quando o jogador dorme, apenas pela ação de entrar na cama.
* Exemplos:
  * Void Sleep – Ao entrar na cama, o jogador é teleportado para uma dimensão dos sonhos construída sob medida, para exploração.
  * Lunar Shield – Concede Absorption IV por 5 minutos ao dormir na cama, fornecendo vida bônus temporária.
  * Nightmare Curse – Invoca um phantom hostil acima da cama quando o jogador entra nela, forçando-o a lutar antes de dormir em paz.
  * Dreamwalker’s Blessing – Ao entrar na cama, o jogador recebe Regeneration II até acordar (a ação de acordar seria o ativador PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador sai da cama. Cuidado! Este ativador é acionado quando o jogador dorme e, ao amanhecer, sai da cama, mas também é acionado quando o jogador sai da cama no meio do sono; ele corresponde apenas à ação de sair da cama.
  * Se você quiser ativar apenas quando o jogador dormir, pode usar este ativador + worldCondition -> ifWorldTime para verificar se realmente é dia.
* Exemplos:
  * Morning Boost – Ao sair da cama, o jogador recebe Speed II e Haste II por 60 segundos para começar o dia com energia.
  * Phantom's Warning – Se o jogador sair da cama antes de dormir completamente, um phantom surge por perto como consequência.
  * Dream Collector – Ao acordar, o jogador recebe um livro encantado aleatório como "lembrança de sonho".
  * Energy Surge – Ao sair da cama, a barra de fome do jogador é totalmente restaurada, simulando uma noite bem dormida.

### PLAYER\_BEFORE\_DEATH

* Info: Ativador acionado quando o jogador morre. A diferença entre este ativador e o ativador PLAYER\_DEATH é que este é acionado primeiro, oferecendo a possibilidade de salvar o jogador antes de ele morrer.
  * Para entender melhor, os totems of undying vanilla são acionados por este ativador para aplicar seus efeitos.
* Exemplos:
  * Soulbound Amulet – Quando o jogador está prestes a morrer, ele é teleportado para seu ponto de spawn com 2 corações e Regeneration II temporário.
  * Last Stand Shield – Perto da morte, o jogador recebe Resistance III e Absorption por 5 segundos, tendo a chance de revidar.
  * Phoenix Blessing – Quando a morte é iminente, o jogador explode em chamas, causando dano de fogo aos inimigos e revivendo com metade da vida.
  * Undead Pact – Se o jogador fosse morrer, ele é revivido com 3 corações, mas não poderá usar armas por 10 segundos.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador quebra um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Ore Booster Pickaxe – Ao quebrar um bloco de minério, há 20% de chance de dobrar o drop.
  * Nature’s Wrath Axe – Quebrar um tronco tem 10% de chance de invocar um espírito de árvore hostil (mob personalizado).
  * Cursed Excavation – Ao quebrar pedra, há 5% de chance de gerar silverfish ou aplicar Mining Fatigue por 5 segundos.
  * Explosive Demolition Hammer – Ao quebrar blocos, os blocos ao redor também são quebrados, sendo possível quebrar em 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador bloqueia com o escudo um golpe vindo de uma entidade.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemplos:
  * Thorned Shield – Ao bloquear um ataque, o atacante sofre 3 corações de dano.
  * Shockwave Defense – Bloquear um ataque com sucesso empurra todos os inimigos próximos em um raio de 5 blocos.
  * Energy Absorption – Ao bloquear um ataque, o jogador regenera 1 coração e recebe Resistance I por 3 segundos.
  * Frozen Guard – Se um ataque for bloqueado, o atacante fica congelado no lugar (Slowness IV) por 2 segundos.
  * Blazing Counter – Bloquear um ataque coloca o atacante em chamas por 4 segundos.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador bloqueia com o escudo um golpe vindo de outro jogador.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemplos:
  * Retribution Shield – Ao bloquear um ataque de um jogador, o atacante é desarmado instantaneamente, largando sua arma no chão.
  * Vampiric Guard – Ao bloquear um ataque com sucesso, o jogador absorve uma parte da vida do atacante (curando 2 corações).
  * Dimensional Rift – Se o ataque de um jogador for bloqueado, há 20% de chance de ele ser teleportado 10 blocos para longe em uma direção aleatória.
  * Adrenaline Block – Ao bloquear um ataque, o jogador recebe instantaneamente Speed II e Strength I por 5 segundos, permitindo um contra-ataque rápido.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador coloca um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Living Roots – Ao colocar uma muda, há 10% de chance de ela crescer instantaneamente até virar uma árvore.
  * Runic Inscription – Colocar um bloco de pedra tem 5% de chance de transformá-lo em Runed Stone, emitindo partículas e dando Haste I por 10 segundos aos jogadores próximos.
  * Ao colocar TNT, há uma pequena chance (5%) de ele acender imediatamente, criando uma explosão inesperada.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador quebra o escudo de outro jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemplos:
  * Shatter Strike – Ao quebrar o escudo de um jogador, o atacante recebe Strength I por 5 segundos, fortalecendo seu próximo ataque.
  * Ao destruir um escudo, ocorre uma pequena explosão na posição do alvo, empurrando-o 5 blocos para trás.
  * Quando um escudo é estilhaçado, o alvo recebe **Wither I** por **5 segundos**, drenando lentamente sua vida.
  * Dimensional Fracture – Ao quebrar o escudo de um jogador, o alvo é momentaneamente teleportado 5 blocos para cima, desorientando-o antes de cair de volta.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador usa o pincel em um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Cursed Dust – Se o jogador usar o pincel em um bloco suspeito, há 10% de chance de ele ficar temporariamente cego quando uma nuvem de poeira amaldiçoada irrompe ao seu redor.
  * Buried Riches – Usar o pincel em um bloco tem uma pequena chance de recompensar o jogador com uma pepita de ouro ou esmeralda, simulando a descoberta de um tesouro perdido.
  * Temporal Echoes – Ao usar o pincel em um bloco de artefato, o jogador ouve sussurros fracos do passado, sugerindo segredos de lore escondidos por perto.

### PLAYER\_BUCKET\_ENTITY

* Info: Ativador acionado quando o jogador usa um balde para capturar uma entidade.
  * Um exemplo é guardar um peixe dentro de um balde com água.
  * Se você quiser executar algo ao "tentar" capturar com o balde uma entidade que não pode ser capturada, este ativador não será executado; use PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemplos:
  * Instant Fillet – Em vez de capturar um peixe no balde, o jogador recebe instantaneamente peixe cru no inventário, como se o tivesse filetado na hora com maestria.
  * Essence Extraction – Ao usar um balde em um axolotl, em vez de capturá-lo, o jogador recebe uma poção "Axolotl Mucus", que concede Regeneration I por 10 segundos.

### PLAYER\_CHANGE\_WORLD

* Info: Ativador acionado quando o jogador muda para um mundo diferente.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
* Exemplos:
  * Dimensional Adaptation – Quando o jogador entra em um novo mundo, ele recebe um buff temporário aleatório (Speed, Strength ou Night Vision por 30 segundos) enquanto seu corpo se ajusta ao novo ambiente.
  * Weight of Realms – Se um jogador entra no Nether ou no End, ele recebe temporariamente Slowness II por 10 segundos, simulando a mudança repentina de gravidade.
  * Forgotten Memories – Ao trocar de mundo, há uma pequena chance (5%) de o jogador perder um item aleatório do inventário, simulando uma "memória" esquecida.
  * Realmwalker’s Favor – Entrar em um novo mundo concede um item de loot misterioso, temático da dimensão (por exemplo, o Nether dá um lingote de ouro aleatório, o End dá uma Ender Pearl, etc.), como se fosse um presente de uma força desconhecida.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica em uma entidade e em NPC(s) do Citizens.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemplos:
  * Beast Tamer’s Bond – Clicar em um Wolf, Cat ou Horse segurando um item especial (por exemplo, uma Golden Apple) concede a ele Speed II e Regeneration temporários por 60 segundos.
  * Hidden Pocket – Clicar em um Zombie Piglin com Gold Ingots tem 5% de chance de dar instantaneamente um item de loot aleatório do Nether, sem precisar fazer escambo.
  * Gourmet’s Choice – Clicar em uma Cow, Pig ou Chicken segurando uma Knife (item personalizado) fornece instantaneamente um drop de carne de maior qualidade (por exemplo, Cooked Steak em vez de Raw Beef).
  * Battle Focus – Clicar em um Iron Golem segurando um Shield dá a ele Resistance II e Knockback Resistance temporários por 30 segundos, permitindo que ele aguente mais dano.
  * Final Tribute – Clicar em um Skeleton ou Wither Skeleton segurando Bone Blocks concede ao jogador um breve impulso de Speed II, como se absorvesse a energia de um guerreiro ancestral.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Ativador acionado quando o jogador clica em um jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemplos:
  * Shared Fortune – Clicar em um jogador segurando um Emerald Block divide seus níveis de XP pela metade, dando ao outro jogador o XP perdido instantaneamente.
  * Clicar em um colega de equipe segurando uma Potion of Healing transfere instantaneamente metade da sua vida para ele, tornando-a uma salvação estratégica de última hora.
  * Tactical Mark – Clicar em outro jogador enquanto agacha aplica nele um efeito de brilho por 10 segundos, deixando-o visível para os colegas de equipe em uma luta PvP.
  * Oath of Protection – Clicar em um jogador segurando um Shield concede a ele Resistance I por 30 segundos, agindo como um efeito temporário de guardião.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador entra no servidor.
* Exemplos:
  * Realm’s Welcome – Ao entrar, o jogador recebe um impulso temporário de Speed I e Haste I por 30 segundos, simulando uma explosão de energia ao entrar no mundo.
  * Echo of the Past – A primeira mensagem que o jogador vê no chat é uma mensagem de "memória" personalizada.
  * Daily Fortune – Ao entrar, o jogador recebe um buff ou debuff menor aleatório por 10 minutos (por exemplo, Luck I, Speed I ou Slowness I), tornando cada sessão ligeiramente diferente.
  * Dimensional Echo – Se o jogador entra vindo de outro mundo (Nether ou End), ele experimenta brevemente um efeito de partículas giratórias e ouve sons ambientes distorcidos por alguns segundos antes de se estabilizar por completo.

### PLAYER\_CONSUME

* Info: Ativador acionado quando o jogador come / consome um item com sucesso.\
  Cuidado, ele só funciona para itens do Minecraft que são comestíveis ou para aqueles transformados em item comestível usando as [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Ativador acionado quando o jogador come/consome com sucesso o próprio ExecutableItem. \
  Cuidado, ele só funciona para ExecutableItems que são comestíveis ou para aqueles transformados em item comestível usando as [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Ativador acionado quando o jogador lança um projétil com um comando do SCore, como:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (Neste ativador, a entidade é o projétil)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Para colocar alguns projéteis na whitelist/blacklist)

### PLAYER\_DEATH

* Info: Ativador acionado quando o jogador morre.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador deixa de selecionar o ExecutableItem.
  * Isso acontece quando o ExecutableItem está na mão principal e você troca o item que está segurando, ou seja, você o "desseleciona". 

### PLAYER\_DISABLE\_FLY

* Info: Ativador acionado quando o jogador para de voar. 
  * A ação de voar significa literalmente voar, não é planar nem estar no ar por causa de uma queda.

### PLAYER\_DISABLE\_GLIDE

* Info: Ativador acionado quando o jogador para de planar. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador para de agachar. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador para de correr 

### PLAYER\_DISABLE\_SWIM

* Info: Ativador acionado quando o jogador para de nadar (natação do 1.13)
* 
### PLAYER\_DISCONNECT

* Info: Ativador acionado quando o jogador sai do servidor.

### PLAYER\_DISMOUNT

* Info: Ativador acionado quando o jogador desmonta / sai de uma entidade que estava montando. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Ativador acionado quando o jogador solta um item. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador solta o ExecutableItem. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador faz alterações no livro e pena e clica em concluir ou assina o livro. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador quebra o ExecutableItem devido à quebra de durabilidade vanilla.

### PLAYER\_EMPTY\_BUCKET

* Info: Ativador acionado quando o jogador esvazia um balde ExecutableItem. Ele também é acionado quando você encharca um bloco ou enche um caldeirão com esse líquido, por exemplo.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Quando este ativador é acionado, o bloco alvo é o local onde a água deveria ser colocada. Com essa informação, você pode usar SETBLOCK para substituir a água por outra coisa, se quiser.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador **começa** a voar. Este ativador é acionado pela ação de "pressionar duas vezes a barra de espaço tendo a permissão de voar".
  * Isso significa que ele não é acionado se você já estiver voando; ele é acionado pela ação de mudar o estado de voo ao "pressionar duas vezes a barra de espaço".
* Exemplos:
  * Lightning Takeoff – Quando o voo é ativado, um pequeno raio sem dano atinge a posição do jogador para efeito dramático.
  * Aerial Boost – Ao começar a voar, o jogador recebe um efeito temporário de Speed III por 5 segundos para simular uma decolagem poderosa.
  * Gale Force Wings – Ao começar a voar, um forte efeito de vento empurra todas as entidades ao redor do jogador.

### PLAYER\_ENABLE\_GLIDE

* Info: Ativador acionado quando o jogador começa a planar. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador começa a agachar. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador começa a correr.

### PLAYER\_ENABLE\_SWIM

* Info: Ativador acionado quando o jogador começa a nadar (natação do 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Ativador acionado se você entrar no seu land ou em um land onde você é de confiança 
  * Plugins compatíveis:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Ativador acionado se você entrar em um plot.
  * Plugins compatíveis:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado se você vestir/colocar a peça de armadura no slot de armadura.
  * `detailedSlots` pode restringi-lo a um slot de armadura: 36 botas, 37 calças, 38 peitoral, 39 capacete (o slot em que a peça vai), além de -1 para a mão de onde ela veio.
  * <CustomTag type="version" version="1.21.3" /> Um item com [equippable features](/executableitems/configurations/item-configuration/item-features#equippable-features-) vai para o `slot` dessas features, mesmo quando não é o slot do seu material: uma abóbora esculpida equipável nas pernas conta como calças (37). Com um clique direito, ela só é vestida se o seu `swappable` for true.
  * Cuidado! O plugin CMI pode fazer este ativador não funcionar por causa da permissão cmi.inventoryhat definida como true. Se você quiser que este ativador funcione, defina essa permissão como false. 
  * Addons Fabric podem contornar este ativador.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Ativador acionado quando a experiência do jogador muda naturalmente. 
  * Isso significa que este ativador não é acionado por mudanças de experiência feitas por comandos. Exceto se esses comandos forem a invocação de um orbe de experiência, o que faria a experiência mudar "naturalmente".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Ativador acionado se o jogador fertiliza um bloco com bone meal. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Ativador acionado quando o jogador enche o balde com água ou lava. 
  * Cuidado! Quando um ExecutableItem enche um balde e ele se torna "water\_bucket" ou "lava\_bucket", ele deixa de ser um ExecutableItem, vira um item vanilla e não pode ser revertido.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica com o botão direito na vara de pescar quando a boia da vara está sobre um bloco. 
  * Ele não é acionado quando não está sobre um bloco; se você quiser acioná-lo no ar, use o ativador [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Ativa quando o jogador clica com o botão direito na vara de pescar quando a boia da vara fisga uma entidade ou um NPC do Citizens.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica com o botão direito na vara de pescar quando a boia da vara fisga um item na água por causa do sistema de loot de pesca. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
A entidade alvo de `entityCommands` é o **item pescado**. Use o comando de entidade [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) para transformar a pesca em um item vanilla ou em um ExecutableItem, veja o guia [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador não pesca nada, ou seja, a boia não estava sobre nenhum bloco, entidade ou jogador.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica com o botão direito na vara de pescar quando a boia da vara fisga outro jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador pesca algo com sucesso usando o plugin CustomFishing (antes conhecido como Xiaomomi Fish). Este ativador exige que o [plugin CustomFishing](https://modrinth.com/plugin/customfishing) esteja instalado no seu servidor.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholders disponíveis:
  * `%result%` - O resultado da pesca (por exemplo, SUCCESS, FAILURE, etc.)
  * `%fish_hook%` - O nome do anzol usado
  * `%loot%` - O ID do loot pescado
* Exemplos:
  * Custom Fishing Rewards – Ao pescar um peixe raro com o CustomFishing, concede ao jogador experiência bônus ou uma recompensa especial em moeda.
  * Lucky Catch – Ao pescar com sucesso com uma vara específica, há uma chance de receber itens de loot personalizados adicionais do plugin CustomFishing.
  * Fishing Skill Progression – Acompanha as pescas bem-sucedidas e aumenta os níveis de habilidade de pesca do jogador com base na raridade do peixe pescado.

:::info
Este ativador só funciona se você tiver o plugin **CustomFishing** instalado. Ele se integra ao FishingResultEvent do CustomFishing para oferecer mecânicas de pesca aprimoradas.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Ativador acionado quando o jogador colhe um bloco
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Ao clicar com o botão direito em um arbusto de sweet berry para colher, há 10% de chance de o arbusto morder de volta, causando meio coração de dano, mas dando ao jogador Strength I por 5 segundos como um efeito de "gosto por sangue".
  * Bountiful Touch – Ao colher plantações, há 15% de chance de replantá-las instantaneamente com crescimento completo, permitindo uma colheita contínua.
  * Mystic Bloom – Ao colher uma flor, há 5% de chance de ela dropar um item encantado aleatório imbuído com a energia da natureza.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador acerta uma entidade.
  * Este ativador só funciona quando há dano envolvido, ou seja, o jogador realmente acertou a entidade. Se você quiser que ele funcione ao clicar na entidade, use [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Ativador acionado quando o jogador acerta outro jogador (geralmente chamado de alvo).
  * Este ativador só funciona quando há dano envolvido, ou seja, o jogador realmente acertou o outro jogador. Se você quiser que ele funcione ao clicar no jogador, use [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Ativador acionado quando o jogador pressiona uma tecla. (frente, trás, esquerda, direita, pular, correr, agachar)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador quebra o ExecutableItem fazendo-o perder toda a sua durabilidade. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador pula.
  * <CustomTag type="version" version="1.21.2" /> ele pode ser acionado mesmo se o jogador tentar pular no ar.

### PLAYER\_KICK

* Info: Ativador acionado quando o jogador é expulso 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador mata uma entidade ou um NPC do Citizens. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador mata um jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Ativador acionado quando o jogador atira um projétil. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Ativador acionado se você sair do seu land ou de um land onde você é de confiança 
  * Plugins compatíveis:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Ativador acionado se você sair de um plot.
  * Plugins compatíveis:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Ativador acionado quando o jogador clica com o botão esquerdo no item. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, estas features estarão disponíveis.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Para escrever [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Ativador acionado quando o jogador repara o ExecutableItem pelo encantamento mending. 

### PLAYER\_OPEN\_INVENTORY

* Info: Ativador acionado quando o jogador abre inventários, mas **NÃO o seu próprio inventário**. 

:::info
Atualmente não é possível detectar quando o jogador abre o **seu próprio** inventário, porque isso acontece apenas no lado do cliente. 

O evento só é acionado quando alguém força o jogador a abrir o seu inventário ou quando o jogador abre inventários personalizados, de blocos ou de comerciantes.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador pega o ExecutableItem. 

### PLAYER\_PORTAL

* Info: Ativador acionado quando o jogador usa um portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador recebe um efeito de poção. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador é atingido por uma entidade. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador é atingido por outro jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador é atingido. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Ativador acionado quando o jogador recupera vida naturalmente.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador renasce.
  * Como de costume, todos os ativadores de ExecutableItem funcionam quando o jogador tem o item no inventário; portanto, se o jogador renascer sem o item no inventário, este ativador não será acionado.

### PLAYER\_RIGHT\_CLICK

* Info: Ativador acionado quando o jogador clica com o botão direito no item. 
  * Devido a limitações do Spigot, este ativador só será acionado se você tiver um item (qualquer um) na mão.
* Features personalizadas deste ativador:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : Para especificar o tipo do clique (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Se typeTarget: ONLY\_BLOCK, estas features estarão disponíveis:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Para escrever [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : Para especificar quais tipos de bloco são válidos

### PLAYER\_RIPTIDE

* Info: Ativador acionado quando o jogador usa riptide.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador seleciona o ExecutableItem na hotbar, ou seja, começa a segurá-lo na mão principal. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador tosquia uma entidade. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Ativador acionado quando o escudo do jogador é quebrado por outro jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Ativador acionado quando o ponto de spawn do jogador é alterado. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Ativador acionado quando o jogador troca de mão o ExecutableItem. Isso significa o atalho de mão principal para a mão secundária e vice-versa. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando uma entidade tem o jogador como alvo. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Ativador acionado quando o jogador pisoteia uma plantação. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador remove o ExecutableItem. 
  * `detailedSlots` pode restringi-lo a um slot de armadura: 36 botas, 37 calças, 38 peitoral, 39 capacete (o slot de onde a peça sai).
  * Cuidado! O plugin CMI pode fazer este ativador não funcionar por causa da permissão cmi.inventoryhat definida como true. Se você quiser que este ativador funcione, defina essa permissão como false.
  * Addons Fabric podem contornar este ativador.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador anda. 
  * Este ativador é acionado a cada tick em que o jogador anda, por isso é muito caro em desempenho; use-o com cuidado. Você pode usar a feature de cooldown de uso para diminuir o impacto.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador digita/envia um comando. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Ativador acionado quando um projétil lançado pelo jogador entra na água.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Ativador acionado quando um projétil lançado por um jogador atinge um bloco. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Ativador acionado quando um projétil lançado por um jogador atinge uma entidade. \
  Cuidado, ele não é acionado quando o projétil atinge um jogador (para isso, use PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Ativador acionado quando um projétil lançado por um jogador atinge outro jogador (geralmente chamado de alvo).
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Ativador que pode ser executado por meio de um comando, ou pode ser agendado. 
  * Este ativador vale para todos os plugins; por isso, ele é explicado em [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Ativador acionado quando o ExecutableItem é colocado sobre outro item no inventário.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Ativador acionado quando um item é colocado sobre o ExecutableItem no inventário.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Ativador acionado quando o ExecutableItem entra no inventário do jogador.
  * Se você estiver usando outro plugin que gerencia a entrega de itens e um ExecutableItem for entregue sem que este ativador seja executado, peça suporte a eles e solicite que chamem esse método.
  * Movimentos dentro do inventário também contam: troca com a mão secundária (tecla F), troca com a tecla numérica e, em servidores Paper, pick block / pick item (clique do meio). Para esses movimentos, EI\_LEAVE\_THE\_PLAYER\_INVENTORY sempre é executado antes deste ativador.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Ativador acionado quando o item sai do inventário do jogador.
  * Requer o ProtocolLib para que este ativador funcione corretamente. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Ativador acionado quando o jogador clica no item no seu inventário. 
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Ativador acionado repetidamente enquanto o item estiver no inventário do jogador. É basicamente um ciclo: ele executa os comandos a cada \<delay> \<seconds/ticks>, dependendo da configuração deste ativador.
* Quando uma condição de um LOOP não é válida, a mensagem de erro padrão (`You can't activate this item > invalid condition`) não é enviada: o jogador não ativou nada. Uma mensagem personalizada (`{theCondition}Msg`) continua sendo enviada.
* Para um bônus enquanto várias peças são vestidas, use os [sets](/executableitems/configurations/sets-configuration) em vez de um LOOP.
* activatorFeatures: Normalmente todos os ativadores compartilham features, mas algumas são exclusivas de certos ativadores; se for o caso, a(s) feature(s) será(ão) listada(s) aqui.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
