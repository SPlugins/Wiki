---
description: >-
  Saiba como usar detailedCommands e registerCommand nos ativadores de comando
  do ExecutableItems, incluindo o registro de comandos no servidor.
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T18:12:09.605Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Recurso para ativadores que envolvem comandos. Aqui você pode selecionar como condição o comando com o qual o ativador deve ser executado.
* Exemplo:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: Valor booleano, `false` por padrão. Somente para `PLAYER_WRITE_COMMAND`. Sem ele, o ativador é executado, mas o comando não existe para o servidor: a barra de chat o mostra em vermelho e o servidor responde "Unknown command". Com `registerCommand: true`, os comandos de `detailedCommands` são registrados no servidor:
  * Chega de "Unknown command" e, na 1.13+, a barra de chat não mostra mais o comando em vermelho.
  * Tab completion do nome do comando e das palavras escritas depois dele em `detailedCommands` (`/promo summer` e `/promo winter` sugerem `summer` e `winter`).
  * O comando registrado não faz nada por si só: o ativador continua sendo executado apenas uma vez, como antes.
  * Ele nunca substitui um comando existente (um comando do Minecraft ou de outro plugin): um aviso é exibido no console, nada é registrado para esse comando, e o ativador continua sendo executado quando o comando é escrito.
  * Vários ativadores (ou ExecutableItems e ExecutableEvents) podem usar o mesmo comando: ele é registrado uma única vez.
  * Os comandos registrados acompanham as configs: eles são atualizados após um reload, um salvamento no editor ou uma exclusão, e removidos quando o plugin é desativado.
  * Um ativador com `registerCommand: true` mas sem `detailedCommands` não registra nada.
* Exemplo:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
