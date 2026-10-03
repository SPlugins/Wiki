---
description: >-
  Entenda a função detailedCommands do SPlugins, usada em activators para
  definir o comando como condição de execução.
source_hash: 81cd8e66ccc35e49
translated_at: '2026-10-03T10:48:22.977Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Funcionalidade para ativadores que envolve comandos, aqui você pode selecionar como condição o comando que o ativador deve executar.
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
