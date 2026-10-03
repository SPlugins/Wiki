---
description: >-
  Explica a feature typeTarget do SPlugins, que restringe ativadores conforme o
  tipo de clique: no ar, em bloco ou sem restrição.
source_hash: d1859a42c6017172
translated_at: '2026-10-03T10:49:58.570Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### typeTarget

* Info: Feature que restringe o ativador para que ele só seja ativado/disparado quando o evento ocorrer com um certo tipo de clique
  * typeTarget
    * ONLY\_AIR: Restringe o ativador para que ele só seja ativado/disparado quando o evento ocorrer ao clicar apenas no ar, ou seja, se você clicou em um bloco o ativador não será disparado. Não se confunda! Você pode pensar: o que acontece se eu clicar em um player? que não vai ser um bloco então está no "ar", bem... isso mesmo está fora da instância de ativadores do tipo PLAYER\_(CLICK), esse evento é uma instância de PLAYER\_CLICK\_ON\_PLAYER, então o ativador também não vai disparar, ele precisa ser uma instância de PLAYER\_(CLICK).
    * ONLY\_BLOCK: Restringe o ativador para que ele só seja ativado/disparado quando o evento ocorrer ao clicar apenas em um bloco. Isso significa que se você clicou no ar o ativador não será disparado.
      * Essa feature torna o ativador uma instância de ativador de bloco, então ele terá blockCommands.
    * NO\_TYPE\_TARGET: Não restringe o ativador quanto ao tipo de clique, ambos os tipos serão aceitos, cliques no ar e cliques em bloco.
* Exemplo: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```
