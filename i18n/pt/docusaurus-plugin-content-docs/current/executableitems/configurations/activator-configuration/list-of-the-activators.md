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
  Veja a lista completa dos ativadores do ExecutableItems, com descrições e
  exemplos de uso no plugin SPlugins.
source_hash: 0848802095c73aa9
translated_at: '2026-10-03T10:27:26.519Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Lista dos Ativadores

## Ativadores do ExecutableItems

Aqui você tem a lista de ativadores disponíveis com suas descrições e alguns exemplos. Os ativadores permitem executar ações personalizadas, podendo ter condições, executar comandos, ter cooldown, etc.

:::warning
Um ativador cujo `option:` não está nesta lista (erro de digitação, ativador de outro plugin...) fica **desativado**: ele nunca é executado, e o console mostra um erro com os nomes de opções mais próximos quando o item é carregado.
:::

Ativadores premium são identificados com a etiqueta: <CustomTag type="premium" />

Activator features são funcionalidades exclusivas daquele ativador.

### PLAYER\_ALL\_CLICK

* Info: Ativador que é acionado quando o jogador clica com o botão esquerdo ou direito com o item.
  * Você não pode diferenciar os cliques, para isso use ativadores diferentes como PLAYER\_RIGHT\_CLICK ou PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, estas funcionalidades estarão disponíveis.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Warping Stone: teleporta instantaneamente o jogador 5 blocos na direção em que está olhando. Cooldown: 10 segundos.
  * Healing Totem: ao ser clicado, cura o jogador em 4 corações e concede Regeneration I por 5 segundos.
  * Thunder Rod: dispara um raio no inimigo mais próximo dentro de 10 blocos.
  * Gravity Boots: lança o jogador 3 blocos no ar e anula o dano de queda por 5 segundos.
  * Explosive Rune: cria uma pequena explosão na localização do jogador que empurra mobs próximos, mas não danifica o terreno.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica com o botão direito em uma cama e entra nela. Se o jogador não entrar, este ativador não será acionado. Isso não é acionado quando o jogador dorme, apenas pela ação de entrar na cama.
* Exemplos:
  * Void Sleep: ao entrar na cama, o jogador é teleportado para uma dimensão de sonho personalizada para exploração.
  * Lunar Shield: concede Absorption IV por 5 minutos ao dormir na cama, fornecendo vida bônus temporária.
  * Nightmare Curse: gera um phantom hostil acima da cama quando o jogador entra nela, forçando-o a lutar antes de dormir tranquilamente.
  * Dreamwalker's Blessing: ao entrar na cama, o jogador recebe Regeneration II até despertar (a ação de despertar seria o ativador PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador sai da cama. Cuidado! Este ativador é acionado quando o jogador dorme e é dia, então ele sai da cama, mas também é acionado quando o jogador sai da cama no meio do sono; é apenas a ação de sair da cama.
  * Se você quiser ativar apenas quando o jogador dorme, pode usar este ativador + worldCondition -> ifWorldTime para verificar se realmente é dia.
* Exemplos:
  * Morning Boost: ao sair da cama, o jogador recebe Speed II e Haste II por 60 segundos para começar o dia com energia.
  * Phantom's Warning: se o jogador sair da cama antes de dormir completamente, um phantom é gerado próximo como consequência.
  * Dream Collector: ao despertar, o jogador recebe um livro encantado aleatório como "memória do sonho".
  * Energy Surge: ao sair da cama, a barra de fome do jogador é totalmente restaurada, simulando uma noite bem descansada.

### PLAYER\_BEFORE\_DEATH

* Info: Ativador que é acionado quando o jogador morre; a diferença entre este ativador e o ativador PLAYER\_DEATH é que este ativador é acionado primeiro, oferecendo a funcionalidade de poder salvar o jogador antes que ele morra.
  * Para entender melhor, os totens de imortalidade vanilla são acionados por este ativador para aplicar as funcionalidades que ele possui.
* Exemplos:
  * Soulbound Amulet: quando o jogador está prestes a morrer, ele é teleportado para seu ponto de spawn com 2 corações e Regeneration II temporária.
  * Last Stand Shield: ao quase morrer, o jogador recebe Resistance III e Absorption por 5 segundos, dando a ele uma chance de contra-atacar.
  * Phoenix Blessing: quando a morte é iminente, o jogador explode em chamas, causando dano de fogo aos inimigos e revivendo com metade da vida.
  * Undead Pact: se o jogador fosse morrer, ele é reanimado com 3 corações, mas não poderá usar armas por 10 segundos.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador quebra um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Ore Booster Pickaxe: ao quebrar um bloco de minério, há 20% de chance de dobrar o drop.
  * Nature's Wrath Axe: quebrar uma tora tem 10% de chance de invocar um espírito de árvore hostil (mob personalizado).
  * Cursed Excavation: ao quebrar pedra, há 5% de chance de gerar silverfish ou aplicar Mining Fatigue por 5 segundos.
  * Explosive Demolition Hammer: ao quebrar blocos, os blocos ao redor também serão quebrados, podendo quebrar em 3x3.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador bloqueia um golpe vindo de uma entidade com o escudo.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemplos:
  * Thorned Shield: ao bloquear um ataque, o atacante recebe 3 corações de dano.
  * Shockwave Defense: bloquear um ataque com sucesso empurra todos os inimigos próximos dentro de 5 blocos.
  * Energy Absorption: ao bloquear um ataque, o jogador regenera 1 coração e recebe Resistance I por 3 segundos.
  * Frozen Guard: se um ataque for bloqueado, o atacante fica congelado no lugar (Slowness IV) por 2 segundos.
  * Blazing Counter: bloquear um ataque incendeia o atacante por 4 segundos.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador bloqueia um golpe vindo de um jogador com o escudo.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Exemplos:
  * Retribution Shield: ao bloquear um ataque de um jogador, o atacante é instantaneamente desarmado, derrubando sua arma no chão.
  * Vampiric Guard: ao bloquear um ataque com sucesso, o jogador absorve parte da vida do atacante (curando 2 corações).
  * Dimensional Rift: se o ataque de um jogador for bloqueado, há 20% de chance de ele ser teleportado 10 blocos em uma direção aleatória.
  * Adrenaline Block: ao bloquear um ataque, o jogador recebe instantaneamente Speed II e Strength I por 5 segundos, permitindo um contra-ataque rápido.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador coloca um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Living Roots: ao colocar uma muda, há 10% de chance de ela crescer instantaneamente em uma árvore.
  * Runic Inscription: colocar um bloco de pedra tem 5% de chance de transformá-lo em um Runed Stone, emitindo partículas e concedendo Haste I por 10 segundos aos jogadores próximos.
  * Ao colocar TNT, há uma pequena chance (5%) de ela acender imediatamente, criando uma explosão inesperada.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador quebra o escudo de outro jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemplos:
  * Shatter Strike: ao quebrar o escudo de um jogador, o atacante recebe Strength I por 5 segundos, potencializando seu próximo ataque.
  * Ao destruir um escudo, uma pequena explosão ocorre na localização do target, empurrando-o 5 blocos para trás.
  * Quando um escudo é destruído, o target recebe **Wither I** por **5 segundos**, drenando lentamente sua vida.
  * Dimensional Fracture: ao quebrar o escudo de um jogador, o target é momentaneamente teleportado 5 blocos para cima, desorientando-o antes de cair de volta.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador escova um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Cursed Dust: se o jogador escovar um bloco suspeito, há 10% de chance de ele ficar temporariamente cego enquanto uma nuvem de poeira amaldiçoada irrompe ao seu redor.
  * Buried Riches: escovar um bloco tem uma pequena chance de recompensar o jogador com um pedaço de ouro ou esmeralda, simulando a descoberta de um tesouro perdido.
  * Temporal Echoes: ao escovar um bloco de artefato, o jogador ouve sussurros tênues do passado, sugerindo segredos baseados em lore escondidos nas proximidades.

### PLAYER\_BUCKET\_ENTITY

* Info: Ativador que é acionado quando o jogador, usando um balde, captura uma entidade.
  * Um exemplo é como você guarda um peixe dentro de um balde com água.
  * Se você quiser executar algo ao "tentar" capturar uma entidade que não pode ser capturada em balde, este ativador não será executado; você deve usar PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemplos:
  * Instant Fillet: em vez de capturar um peixe em um balde, o jogador recebe instantaneamente peixe cru em seu inventário, como se o tivesse filetado com habilidade no local.
  * Essence Extraction: ao usar um balde em um axolote, em vez de capturá-lo, o jogador recebe uma poção de "Muco de Axolote", que concede Regeneration I por 10 segundos.

### PLAYER\_CHANGE\_WORLD

* Info: Ativador que é acionado quando o jogador muda para um mundo diferente.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
* Exemplos:
  * Dimensional Adaptation: quando o jogador entra em um novo mundo, ele recebe um buff temporário aleatório (Speed, Strength ou Night Vision por 30 segundos) enquanto seu corpo se ajusta ao novo ambiente.
  * Weight of Realms: se um jogador entra no Nether ou no End, ele recebe temporariamente Slowness II por 10 segundos, simulando a mudança súbita na gravidade.
  * Forgotten Memories: ao trocar de mundo, há uma pequena chance (5%) de o jogador perder um item aleatório do inventário, simulando uma "memória" sendo esquecida.
  * Realmwalker's Favor: entrar em um novo mundo concede um item de loot misterioso, temático da dimensão (por exemplo, o Nether dá um lingote de ouro aleatório, o End dá uma Ender Pearl, etc.), como se fosse presenteado por uma força desconhecida.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica em uma entidade e em NPC(s) do Citizens.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Exemplos:
  * Beast Tamer's Bond: clicar em um Lobo, Gato ou Cavalo enquanto segura um item especial (por exemplo, uma Maçã Dourada) concede a ele Speed II e Regeneration temporários por 60 segundos.
  * Hidden Pocket: clicar em um Zombie Piglin com Lingotes de Ouro tem 5% de chance de receber instantaneamente um item de loot aleatório do Nether, sem precisar negociar.
  * Gourmet's Choice: clicar em uma Vaca, Porco ou Galinha enquanto segura uma Faca (item personalizado) fornece instantaneamente um drop de carne de qualidade superior (por exemplo, Bife Cozido em vez de Carne Crua).
  * Battle Focus: clicar em um Golem de Ferro enquanto segura um Escudo concede a ele Resistance II e resistência a knockback temporárias por 30 segundos, permitindo que ele absorva mais dano.
  * Final Tribute: clicar em um Esqueleto ou Wither Skeleton enquanto segura Bone Blocks concede ao jogador um breve impulso de Speed II, como se absorvesse a energia de um antigo guerreiro.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Ativador que é acionado quando o jogador clica em um jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Exemplos:
  * Shared Fortune: clicar em um jogador enquanto segura um Bloco de Esmeralda divide seus níveis de XP pela metade, dando ao outro jogador o XP perdido instantaneamente.
  * Clicar em um companheiro de equipe enquanto segura uma Poção de Cura transfere instantaneamente metade da sua vida para ele, tornando-se uma salvação estratégica de última hora.
  * Tactical Mark: clicar em outro jogador enquanto está agachado aplica um efeito de brilho nele por 10 segundos, tornando-o visível para os companheiros de equipe em uma luta PvP.
  * Oath of Protection: clicar em um jogador enquanto segura um Escudo concede a ele Resistance I por 30 segundos, agindo como um efeito protetor temporário.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador entra no servidor.
* Exemplos:
  * Realm's Welcome: ao entrar, o jogador recebe um impulso temporário de Speed I e Haste I por 30 segundos, simulando uma explosão de energia ao entrar no mundo.
  * Echo of the Past: a primeira mensagem que o jogador vê no chat é uma mensagem de "memória" personalizada.
  * Daily Fortune: ao entrar, o jogador recebe um buff ou debuff menor aleatório por 10 minutos (por exemplo, Luck I, Speed I ou Slowness I), tornando cada sessão ligeiramente diferente.
  * Dimensional Echo: se o jogador entrar de outro mundo (Nether ou End), ele experimenta brevemente um efeito de partículas giratórias e ouve sons ambientes distorcidos por alguns segundos antes de estabilizar completamente.

### PLAYER\_CONSUME

* Info: Ativador que é acionado quando o jogador come/consome com sucesso um item.\
  Cuidado, funciona apenas para itens do Minecraft que são comestíveis ou aqueles transformados em itens comestíveis usando as [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CONSUME\_THE\_EI

* Info: Ativador que é acionado quando o jogador come/consome com sucesso o próprio ExecutableItem.\
  Cuidado, funciona apenas para ExecutableItems que são comestíveis ou aqueles transformados em itens comestíveis usando as [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures).

### PLAYER\_CUSTOM\_LAUNCH

* Info: Ativador que é acionado quando o jogador lança um projétil com um comando do SCore como:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (neste ativador a entidade é o projétil)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (para colocar em lista de permissão/bloqueio alguns projéteis)

### PLAYER\_DEATH

* Info: Ativador que é acionado quando o jogador morre.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador desseleciona o ExecutableItem.
  * Isso acontece quando o ExecutableItem está na mão principal, e então você troca o item que está segurando, ou seja, "desselecionando-o".

### PLAYER\_DISABLE\_FLY

* Info: Ativador que é acionado quando o jogador para de voar.
  * A ação de voar significa literalmente voar, não é planar nem estar no ar devido a uma queda.

### PLAYER\_DISABLE\_GLIDE

* Info: Ativador que é acionado quando o jogador para de planar.

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador para de ficar agachado.

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador para de correr.

### PLAYER\_DISABLE\_SWIM

* Info: Ativador que é acionado quando o jogador para de nadar (natação da 1.13).
* 
### PLAYER\_DISCONNECT

* Info: Ativador que é acionado quando o jogador sai do servidor.

### PLAYER\_DISMOUNT

* Info: Ativador que é acionado quando o jogador desmonta / sai de uma entidade em que estava montado.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Ativador que é acionado quando o jogador descarta um item.

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador descarta o ExecutableItem.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador faz alterações no livro e pena e pressiona concluir ou assina o livro.

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador quebra o ExecutableItem devido à perda vanilla de durabilidade.

### PLAYER\_EMPTY\_BUCKET

* Info: Ativador que é acionado quando o jogador esvazia um balde do ExecutableItem. Também é acionado quando você coloca água em um bloco (waterlog) ou enche um caldeirão com o referido líquido, por exemplo.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Quando este ativador é ativado, o bloco target é a localização onde a água deveria ser colocada. Com essa informação, você pode usar SETBLOCK para substituir a água por outra coisa, se quiser.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador **começa** a voar. Este ativador é acionado pela ação de "pressionar a barra de espaço duas vezes tendo a permissão de voar".
  * Isso significa que ele não é acionado se você já estiver voando; é acionado pela ação de mudar o estado de voo pelo "duplo pressionar da barra de espaço".
* Exemplos:
  * Lightning Takeoff: quando o voo é ativado, um pequeno raio sem dano atinge a posição do jogador para efeito dramático.
  * Aerial Boost: ao começar a voar, o jogador recebe um efeito temporário de Speed III por 5 segundos para simular uma decolagem poderosa.
  * Gale Force Wings: ao começar a voar, um forte efeito de vento empurra todas as entidades ao redor do jogador.

### PLAYER\_ENABLE\_GLIDE

* Info: Ativador que é acionado quando o jogador começa a planar.

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador começa a ficar agachado.

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador começa a correr.

### PLAYER\_ENABLE\_SWIM

* Info: Ativador que é acionado quando o jogador começa a nadar (natação da 1.13).

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Ativador que é acionado se você entrar na sua land ou em uma land onde você é confiável.
  * Plugins suportados:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Ativador que é acionado se você entrar em um plot.
  * Plugins suportados:
    * PlotSquared

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado se você vestir/colocar a peça de armadura no slot de armadura.
  * `detailedSlots` pode restringi-lo a um slot de armadura: 36 botas, 37 calças, 38 peitoral, 39 elmo (o slot em que a peça entra), além de -1 para a mão de onde veio.
  * Cuidado! O plugin CMI pode fazer com que este ativador não funcione devido à permissão cmi.inventoryhat definida como true. Se você quiser que este ativador funcione, defina essa permissão como false.
  * Addons do Fabric podem contornar este ativador.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Ativador que é acionado quando a experiência do jogador muda naturalmente.
  * Isso significa que este ativador não é acionado por mudanças de experiência por meio de comandos. Exceto se esses comandos forem o surgimento de um orbe de experiência, o que faria a experiência mudar "naturalmente".

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Ativador que é acionado se o jogador fertilizar um bloco com farinha de osso.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Ativador que é acionado quando o jogador enche o balde com água ou lava.
  * Cuidado! Quando um ExecutableItem enche um balde e ele se transforma em "water\_bucket" ou "lava\_bucket", ele deixa de ser um ExecutableItem, transformando-se em um item vanilla, e isso não pode ser revertido.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica com o botão direito na vara de pescar quando a boia da vara está em um bloco.
  * Não é acionado quando não está em um bloco; se você quiser que seja acionado no ar, use o ativador [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Ativa quando o jogador clica com o botão direito na vara de pescar quando a boia captura uma entidade ou um NPC do Citizens.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica com o botão direito na vara de pescar quando a boia captura um item na água devido ao sistema de loot de pesca.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
A entidade visada por `entityCommands` é o **item capturado**. Use o comando de entidade [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item) para transformar a captura em um item vanilla ou em um ExecutableItem, veja o guia [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador pesca nada, ou seja, a boia não estava em um bloco, entidade ou jogador.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica com o botão direito na vara de pescar quando a boia captura outro jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador captura algo com sucesso usando o plugin CustomFishing (anteriormente conhecido como Xiaomomi Fish). Este ativador requer que o [plugin CustomFishing](https://modrinth.com/plugin/customfishing) esteja instalado no seu servidor.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Placeholders disponíveis:
  * `%result%`: o resultado da pesca (por exemplo, SUCCESS, FAILURE, etc.)
  * `%fish_hook%`: o nome do anzol de pesca usado
  * `%loot%`: o ID do loot capturado
* Exemplos:
  * Custom Fishing Rewards: ao capturar um peixe raro com o CustomFishing, conceda ao jogador experiência bônus ou uma recompensa especial em moeda.
  * Lucky Catch: ao pescar com sucesso com uma vara específica, há uma chance de receber itens de loot personalizados adicionais do plugin CustomFishing.
  * Fishing Skill Progression: acompanhe capturas bem-sucedidas e aumente os níveis de habilidade de pesca do jogador com base na raridade dos peixes capturados.

:::info
Este ativador só funciona se você tiver o plugin **CustomFishing** instalado. Ele se integra ao FishingResultEvent do CustomFishing para oferecer mecânicas de pesca aprimoradas.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Ativador que é acionado quando o jogador colhe um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Exemplos:
  * Ao clicar com o botão direito em uma moita de amoras para colhê-la, há 10% de chance de a moita retaliar, causando metade de um coração de dano, mas concedendo ao jogador Strength I por 5 segundos como um efeito de "gosto por sangue".
  * Bountiful Touch: ao colher plantações, há 15% de chance de replantá-las instantaneamente em crescimento total, permitindo cultivo contínuo.
  * Mystic Bloom: ao colher uma flor, há 5% de chance de ela soltar um item encantado aleatório imbuído da energia da natureza.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador acerta uma entidade.
  * Este ativador só funciona quando há dano envolvido, ou seja, o jogador realmente acertou a entidade. Se você quiser que funcione ao clicar na entidade, use [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Ativador que é acionado quando o jogador acerta outro jogador (geralmente chamado de target).
  * Este ativador só funciona quando há dano envolvido, ou seja, o jogador realmente acertou o outro jogador. Se você quiser que funcione ao clicar no jogador, use [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Ativador que é acionado quando o jogador pressiona uma tecla. (frente, trás, esquerda, direita, pular, correr, agachar)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador quebra o ExecutableItem ao fazê-lo perder toda a sua durabilidade.

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador pula.
  * <CustomTag type="version" version="1.21.2" /> pode ser acionado mesmo se o jogador tentou pular no meio do ar.

### PLAYER\_KICK

* Info: Ativador que é acionado quando o jogador é expulso (kicked).

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador mata uma entidade ou um NPC do Citizens.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador mata um jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Ativador que é acionado quando o jogador lança um projétil.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Ativador que é acionado se você sair da sua land ou de uma land onde você é confiável.
  * Plugins suportados:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Ativador que é acionado se você sair de um plot.
  * Plugins suportados:
    * PlotSquared

### PLAYER\_LEFT\_CLICK

* Info: Ativador que é acionado quando o jogador clica com o botão esquerdo no item.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Se typeTarget: ONLY\_BLOCK, estas funcionalidades estarão disponíveis.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands): para escrever [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Ativador que é acionado quando o jogador repara o ExecutableItem pelo encantamento de reparo (mending).

### PLAYER\_OPEN\_INVENTORY

* Info: Ativador que é acionado quando o jogador abre inventários, mas **NÃO o seu próprio inventário**.

:::info
Atualmente não é possível detectar quando o jogador abre **seu próprio** inventário porque isso é apenas do lado do cliente.

O evento só é acionado quando alguém força o jogador a abrir seu inventário ou quando o jogador abre inventários personalizados, de blocos ou de mercador.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador pega o ExecutableItem.

### PLAYER\_PORTAL

* Info: Ativador que é acionado quando o jogador usa um portal.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador recebe um efeito de poção.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador é atingido por uma entidade.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador é atingido por outro jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador é atingido.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Ativador que é acionado quando o jogador recupera vida naturalmente.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador renasce.
  * Como de costume, todo ativador do ExecutableItem funciona quando o jogador tem o item no inventário, então se o jogador renascer sem o item no inventário, este ativador não será acionado.

### PLAYER\_RIGHT\_CLICK

* Info: Ativador que é acionado quando o jogador clica com o botão direito no item.
  * Devido a limitações do Spigot, este ativador só será acionado se você tiver um item (qualquer) na mão.
* Custom Features deste ativador:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget): para especificar o tipo do clique (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Se typeTarget: ONLY\_BLOCK, estas funcionalidades estarão disponíveis:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands): para escrever [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks): para especificar quais tipos de bloco são válidos

### PLAYER\_RIPTIDE

* Info: Ativador que é acionado quando o jogador usa riptide.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador seleciona o ExecutableItem na hotbar, ou seja, começa a segurá-lo na mão principal.

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador tosqueia uma entidade.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Ativador que é acionado quando o escudo do jogador é quebrado por outro jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Ativador que é acionado quando o ponto de spawn do jogador é alterado.

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Ativador que é acionado quando o jogador troca de mão o ExecutableItem. Isso significa o atalho da mão principal para a mão secundária e vice-versa.

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando uma entidade tem o jogador como alvo.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Ativador que é acionado quando o jogador pisoteia uma plantação.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador desequipa o ExecutableItem.
  * `detailedSlots` pode restringi-lo a um slot de armadura: 36 botas, 37 calças, 38 peitoral, 39 elmo (o slot de onde a peça saiu).
  * Cuidado! O plugin CMI pode fazer com que este ativador não funcione devido à permissão cmi.inventoryhat definida como true. Se você quiser que este ativador funcione, defina essa permissão como false.
  * Addons do Fabric podem contornar este ativador.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador caminha.
  * Este ativador é acionado a cada tick em que o jogador caminha, então é muito custoso em desempenho, use-o com cuidado. Você pode usar a funcionalidade de cooldown para diminuir o impacto.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador digita/insere um comando.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Ativador que é acionado quando um projétil lançado pelo jogador entra na água.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Ativador que é acionado quando um projétil lançado por um jogador acerta um bloco.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Ativador que é acionado quando um projétil lançado por um jogador acerta uma entidade.\
  Cuidado, não é acionado quando o projétil acerta um jogador (para isso use PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Ativador que é acionado quando um projétil lançado por um jogador acerta outro jogador (geralmente chamado de target).
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Ativador que pode ser executado ao rodar um comando, ou pode ser agendado.
  * Este ativador é para todos os plugins, por isso é explicado em [Custom triggers](/tools-for-all-plugins-score/custom-triggers)

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Ativador que é acionado quando o ExecutableItem é colocado sobre outro item no inventário.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Ativador que é acionado quando um item é colocado sobre o ExecutableItem no inventário.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o ExecutableItem entra no inventário do jogador.
  * Se você estiver usando outro plugin que gerencia a entrega de itens e um ExecutableItem for entregue e este ativador não for acionado, entre em contato com o suporte deles e peça que chamem este método.
  * Movimentos dentro do inventário também contam: troca para a mão secundária (tecla F), troca por tecla numérica e, em servidores Paper, pick block / pick item (clique do meio). Para esses movimentos, EI\_LEAVE\_THE\_PLAYER\_INVENTORY sempre é executado antes deste ativador.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Ativador que é acionado quando o item sai do inventário do jogador.
  * Requer o ProtocolLib para que este ativador funcione corretamente.

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Ativador que é acionado quando o jogador clica no item no seu inventário.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Ativador que é acionado repetidamente enquanto o item estiver no inventário do jogador. É basicamente um ciclo, executando os comandos a cada \<delay> \<seconds/ticks> dependendo da configuração deste ativador.
* Quando uma condição de um LOOP não é válida, a mensagem de erro padrão (`You can't activate this item > invalid condition`) não é enviada: o jogador não ativou nada. Uma mensagem personalizada (`{theCondition}Msg`) ainda é enviada.
* Para um bônus enquanto várias peças são vestidas, use os [sets](/executableitems/configurations/sets-configuration) em vez de um LOOP.
* activatorFeatures: Normalmente todos os ativadores compartilham funcionalidades, mas existem algumas exclusivas de certos ativadores; se for o caso, a(s) funcionalidade(s) serão listadas aqui.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
