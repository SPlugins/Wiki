---
description: >-
  Entenda a condição detailedDamageCauses para ativadores de dano no SPlugins,
  usada para filtrar tipos de dano recebidos ou causados.
source_hash: 2b07f0e42975b7ba
translated_at: '2026-10-03T10:48:33.047Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedDamageCauses

* Informação: Feature para ativadores que envolvem dano, aqui você pode selecionar como condição o tipo de dano que é recebido ou causado, dependendo do ativador que você está usando.
* Exemplo:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```
