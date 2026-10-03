---
description: >-
  Confira como configurar ativadores, cooldowns e requisitos (itens, dinheiro,
  nível, experiência e mana) no plugin ExecutableItems.
source_hash: a103e5315ef03316
translated_at: '2026-10-03T10:49:49.068Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Nome de exibição do ativador

* Info: Valor em String do nome de exibição do ativador, ele não tem muita utilidade, é usado para o desenvolvedor reconhecer um ativador de outro. Também aparece na mensagem padrão "timeLeft" dentro do arquivo locale.yml.
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Modificação de usage do ativador <CustomTag type="premium" />

* Info: Funcionalidade muito importante, o valor de usage do item será modificado por esse valor inteiro. Isso significa que, se esse valor for positivo então o usage vai aumentar e se esse valor for negativo então o usage vai diminuir.
* Exemplo: (Aumentando o valor do usage em 1 toda vez que esse ativador é acionado)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Modificação de variáveis

* Info: É uma lista de modificações de variáveis para aplicar nas variáveis dentro do seu item. É útil, por exemplo, para aumentar o valor de uma variável, para sobrescrever um valor antigo de uma variável por outro valor, etc.
  * `variableName`: Nome da variável que a variableModification está direcionando
  * `type`: Tipo de variableModification que você está usando
    * SET: Sobrescreve o valor antigo da variável e define o valor de modificação.
    * ADD: Aplica matemática ao valor atual da variável usando o valor de modificação. Precisa que a variável seja do tipo NUMBER. Se o valor de modificação for positivo então vai aumentar, se for negativo então vai diminuir.
    * LIST\_ADD: Aplicado a variável do tipo LIST, adiciona o valor de modificação à lista da variável.
    * LIST\_CLEAR: Aplicado a variável do tipo LIST, limpa a lista da variável.
    * LIST\_REMOVE: Aplicado a variável do tipo LIST, remove o valor de modificação da lista da variável.
  * `modification`: Valor da modificação. É aplicado à variável usando os tipos de modificação.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Tenha cuidado ao usar placeholders aqui! Não há problema nisso, apenas certifique-se de que a saída retornada seja um NUMBER, caso contrário você precisará usar as funcionalidades de STRING. Por exemplo, vamos atualizar uma variableModification por outra variável que sabemos que retorna um NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Valor booleano que representa se o evento relacionado ao ativador será cancelado ou não.
  * Isso pode ser difícil de entender, acho que é uma das coisas que a maioria das pessoas não entende, mas para explicar você precisa saber que cada ACTIVATOR está relacionado a um evento do Minecraft, seguindo a ideia de que esse evento ocorre e então o ACTIVATOR é acionado. Se habilitarmos o cancelEvent, que é uma funcionalidade do ativador, isso significa que o evento ocorre, então quase ao mesmo tempo o ativador é acionado e ele cancela o evento, então o ativador continua executando todas as suas funcionalidades habilitadas, mas o evento não aconteceu, sendo cancelado. Por exemplo:
    * Se o ativador for PLAYER\_HIT\_PLAYER e habilitarmos o cancelEvent então o jogador não vai conseguir bater no jogador pois todos os hits são cancelados/ignorados.
    * Se o ativador for PLAYER\_BLOCK\_BREAK e habilitarmos o cancelEvent então o jogador não vai conseguir quebrar blocos pois o evento é cancelado/ignorado. 
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Valor booleano que, se habilitado, impede o ativador de ser executado se outro plugin já tiver cancelado o evento que o aciona.
  * Isso é útil quando você tem plugins como o WorldGuard que cancelam eventos de dano (por exemplo, em zonas sem PvP) ou outros ExecutableItems que cancelam eventos de dano (por exemplo, botas com PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Sem essa funcionalidade, ativadores como PLAYER\_BEFORE\_DEATH ainda seriam acionados mesmo que o dano tivesse sido cancelado, pois eles reagem ao cálculo bruto do dano em vez do resultado final.
  * Um caso de uso comum é um item personalizado de Totem of Undying usando PLAYER\_BEFORE\_DEATH. Sem essa funcionalidade habilitada, o totem seria ativado e consumido mesmo quando o jogador estiver em uma zona protegida pelo WorldGuard onde o dano é cancelado, desperdiçando o item. Habilitar essa funcionalidade garante que o totem só ative em dano letal real.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Valor booleano que faz com que todos os comandos executados a partir das funcionalidades de comandos, como (playerCommands, blockCommands, entityCommands e targetCommands), não tenham uma saída no **console**.
  * Por exemplo, usando o comando vanilla do minecraft effect give \[...] normalmente tem uma saída no console com esse formato: "Applied effect strength to \<playerName>", bom, para desabilitar essa saída você pode habilitar essa funcionalidade    
* Exemplo: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* É importante entender que essa funcionalidade foi feita para desabilitar a saída de comandos vanilla, se você usar um comando de outro plugin e ele tiver uma saída no console, não é da nossa responsabilidade corrigir isso, o outro plugin deve fornecer uma forma de ocultar essas mensagens. De qualquer forma, como somos gentis, você tem uma forma de personalizar mensagens para serem ocultadas, assim você pode ter as mensagens padrão silenciadas pelo silenceOutput + mensagens personalizadas que você gostaria de adicionar. Esse processo é gerenciado pelo arquivo de config do Score, mais informações aqui e como fazer isso aqui [Configuração geral](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Cooldown do jogador

* Info: As opções de cooldown são o cooldown aplicado ao jogador que acionou esse ativador para esse ativador.
* Se o ativador for PLAYER\_RIGHT\_CLICK, tiver alguns comandos \[] e o cooldown for de 30 segundos, se o jogador acionar esse ativador ele vai precisar esperar 30 segundos para conseguir acioná-lo novamente. Isso não impede que outro jogador o execute dentro desses 30 segundos, desde que aquele jogador também não esteja em cooldown. Essa é uma funcionalidade por jogador
  * `cooldown`: Valor inteiro que representa a quantidade de tempo que o cooldown vai durar para esse ativador.
  * `isCooldownInTicks`: Valor booleano que define o tempo de cooldown para ser em ticks (20 ticks = 1 segundo)
  * `cooldownMsg`: Valor em String a ser exibido quando o jogador tentar acionar o ativador enquanto estiver em cooldown
  * `displayCooldownMessage`: Valor booleano para permitir ou impedir que a mensagem de cooldownMsg seja exibida se o jogador tentar acionar o ativador enquanto estiver em cooldown.
    * Placeholders que podem ser usados:
      * %time% -> o cooldown inteiro em segundos
      * %time\_H% -> a parte em horas do cooldown
      * %time\_M% -> a parte em minutos do cooldown
      * %time\_S% -> a parte em segundos do cooldown 
  * `cancelEventIfInCooldown`: Valor booleano que cancela o evento do ativador se o jogador estiver em cooldown. Isso significa que, se o ativador for PLAYER\_HIT\_ENTITY, enquanto ele estiver em cooldown todos os eventos de PLAYER\_HIT\_ENTITY do jogador serão cancelados e, portanto, ignorados, desabilitando a capacidade do jogador de atacar entidades (lembrete: esse ativador tem como alvo todas as entidades exceto jogadores)
  * `pauseWhenOffline`: Valor booleano que pausa o cooldown se o jogador estiver offline. Para entender melhor, se for false, o tempo de cooldown não para, então ele pode sair do servidor, esperar o cooldown e entrar novamente e vai conseguir acionar o ativador de novo. Mas se essa funcionalidade estiver habilitada e ele sair do servidor enquanto estiver em cooldown, quando ele entrar novamente vai ter o mesmo tempo de cooldown restante que tinha quando saiu.
  * `pausePlaceholdersConditions`: É parecido com o pauseWhenOffline, mas só pausa dependendo de certas placeholdersConditions. Um exemplo de uso seria pausar o cooldown se o jogador for de rank VIP. Assim, o rank VIP tem acesso a essa funcionalidade.
  * `enableVisualCooldown`: Habilita um cooldown visual para o item.
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Cooldown global

* Info: É a mesma ideia do cooldown, mas em vez de ser o cooldown aplicado ao jogador, é um cooldown global aplicado a todos os jogadores. Isso significa que, se alguém acionar o ativador e ele tiver 30 segundos de cooldown global, então ninguém vai conseguir usá-lo depois que esses 30 segundos tiverem passado. Ele tem as mesmas funcionalidades do cooldown.
  * `cooldown`: Valor inteiro que representa a quantidade de tempo que o cooldown vai durar para esse ativador.
  * `isCooldownInTicks`: Valor booleano que define o tempo de cooldown para ser em ticks (20 ticks = 1 segundo)
  * `cooldownMsg`: Valor em String a ser exibido quando um jogador tentar acionar esse ativador enquanto estiver em cooldown
  * `displayCooldownMessage`: Valor booleano para permitir ou impedir que a mensagem de cooldownMsg seja exibida se o jogador tentar acionar o ativador enquanto estiver em cooldown.
    * Placeholders que podem ser usados:
      * %time% -> o cooldown inteiro em segundos
      * %time\_H% -> a parte em horas do cooldown
      * %time\_M% -> a parte em minutos do cooldown
      * %time\_S% -> a parte em segundos do cooldown 
  * `cancelEventIfInCooldown`: Valor booleano que cancela o evento do ativador se o jogador estiver em cooldown. Isso significa que, se o ativador for PLAYER\_HIT\_ENTITY, enquanto ele estiver em cooldown todos os eventos de PLAYER\_HIT\_ENTITY do jogador serão cancelados e, portanto, ignorados, desabilitando a capacidade do jogador de atacar entidades (lembrete: esse ativador tem como alvo todas as entidades exceto jogadores)
  * `enableVisualCooldown`: Habilita um cooldown visual para o item.
* Exemplo:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Funcionalidades obrigatórias <CustomTag type="premium" />

Essa seção serve para configurar funcionalidades relacionadas a coisas obrigatórias para conseguir acionar o ativador. Isso significa que, se o evento acontecer, o ativador só vai rodar se o jogador atender a essa configuração obrigatória. Os itens serão consumidos no processo.

* Se você quiser que os itens não sejam consumidos, então não use a funcionalidade "required", mas use condições, que são apenas condições e não consomem.

### requiredExecutableItems <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito um ou mais ExecutableItem(s). Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar.
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `executableItem`: ID do ExecutableItem necessário como requisito
  * `amount`: Valor inteiro da quantidade de itens necessários como requisito.
  * `usageConditions`: Condição em String opcional no formato `(==, !=, >, <, >=, <=){number}` para a condição de usage do ExecutableItem.
    * Isso significa que, se a condição for >=5, então o requisito é que o ExecutableItem escolhido precisa estar no inventário do jogador, já que é um requisito, mas também precisa ter usage maior ou igual a um valor de 5.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito item(ns) vanilla. Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar.
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `material`: MATERIAL vanilla necessário como requisito.
  * `amount`: Valor inteiro da quantidade de itens necessários como requisito.
  * `notExecutableItem`: Valor booleano para fazer com que o requisito possa ser um ExecutableItem ou não.
    * Isso significa que, se o requisito for STONE, e essa funcionalidade não estiver habilitada, então o requisito será atendido tanto por STONE(s) vanilla quanto por ExecutableItem(s) com material STONE, sendo consumidos. Se você não quiser que isso aconteça, habilite essa funcionalidade.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: Essa funcionalidade precisa do plugin chamado "Vault". Ela permite que o ativador tenha como requisito dinheiro do Vault. Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar.
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `requiredMoney`: Valor float que representa a quantidade de dinheiro necessária como requisito.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito níveis de experiência vanilla. Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar. Não confunda níveis de experiência com experiência, mais informações aqui [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `requiredLevel`: Valor inteiro que representa a quantidade de nível(is) de experiência vanilla do Minecraft necessário(s) como requisito.
* Exemplo:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito experiência vanilla do minecraft. Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar. Não confunda experiência com níveis de experiência, são coisas diferentes, mais informações em [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `requiredExperience`: Valor inteiro que representa a quantidade de experiência necessária como requisito.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito mana do [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) e [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar.
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `requiredMana`: Valor inteiro que representa a quantidade de mana necessária como requisito.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatível com AureliumSkills, MMOCore e AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: Essa funcionalidade permite que o ativador tenha como requisito magic do [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). Se o jogador atender a esse requisito, o requisito será consumido e o ativador vai rodar.
  * `cancelEventIfError`: Valor booleano que representa se o evento será cancelado caso o jogador não tenha o requisito.
    * Isso significa, por exemplo, digamos que haja um evento de PLAYER\_HIT\_ENTITY, e ele ocorre, mas o jogador não tem os requisitos para acionar o ativador, se essa funcionalidade estiver habilitada o evento de PLAYER\_HIT\_ENTITY será cancelado, então o jogador, mesmo clicando/acertando a entidade, a entidade não vai receber dano porque, na realidade, o evento não está ocorrendo pois foi cancelado.
  * `errorMessage`: Mensagem em String que será enviada ao jogador caso ele não atenda ao requisito.
  * `magicID`: O ID do magic no EcoSkills.
  * `amount`: Quantidade de magic do magicID necessária como requisito.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
