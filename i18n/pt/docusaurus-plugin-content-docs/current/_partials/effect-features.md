---
description: >-
  Entenda a funcionalidade detailedEffects do ExecutableItems para configurar
  condições de efeitos nos ativadores.
source_hash: 064a6b682a182425
translated_at: '2026-10-03T10:48:40.351Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedEffects

* Informação: Funcionalidade para ativadores que envolve efeitos, aqui você pode selecionar como condição o tipo de efeito envolvido para acionar o ativador.
* Exemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_EFFECT # replace that with the correct activator name
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&cYou cant use the activator since you dont meet the effect
        condition'
```
