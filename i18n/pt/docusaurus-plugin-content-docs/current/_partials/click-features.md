---
description: >-
  Veja como usar o recurso detailedClick do SPlugins para restringir ativadores
  ao tipo de clique (direito ou esquerdo) no evento.
source_hash: cbb8e21c8345cc14
translated_at: '2026-10-03T10:48:15.168Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedClick

* Info: Feature que restringe os triggers do ativador apenas se o clique correto estiver envolvido no evento.
  * detailedClick
    * RIGHT: Restringe o ativador para funcionar apenas quando o evento ocorrer com o clique direito
    * LEFT: Restringe o ativador para funcionar apenas quando o evento ocorrer com o clique esquerdo
    * RIGHT\_OR\_LEFT: Não restringe o tipo de clique para esse ativador, permitirá clique direito e esquerdo.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```
