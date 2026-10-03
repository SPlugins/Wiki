---
description: >-
  Entenda como usar delay e delayTick para ajustar o intervalo de repetição do
  activator no plugin SPlugins.
source_hash: 492c3c387bf91ea2
translated_at: '2026-10-03T10:48:33.252Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay e delayTick

* Info: Funcionalidades do activator que alteram o tempo de intervalo em que esse activator é acionado, afetando o comportamento das repetições do loop do activator.
  * delay: Valor inteiro que representa quantos segundos terá o loop. Isso significa que, a cada \<delay> \[time], o loop será acionado novamente. Ex.: (Se o delay for 30 segundos, então a cada 30 segundos o activator será acionado)
  * delayTick: Valor booleano para definir o tempo de delay em ticks, caso contrário ele é em segundos. (20 ticks = 1 segundo)
* Exemplo: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
