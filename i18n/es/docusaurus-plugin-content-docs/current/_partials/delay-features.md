---
description: >-
  Explica las propiedades delay y delayTick del activador en SPlugins, que
  controlan el intervalo entre repeticiones del trigger.
source_hash: 492c3c387bf91ea2
translated_at: '2026-10-03T10:35:58.949Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay y delayTick

* Info: Características del activador que cambian el intervalo de tiempo en el que este activador se dispara, afecta al comportamiento de las repeticiones del bucle del activador.
  * delay: Valor entero que representa cuántos segundos durará el bucle. Esto significa que cada \<delay> \[time] el bucle se activará de nuevo. Por ejemplo (Si el delay es de 30 segundos, entonces cada 30 segundos el activador se activará)
  * delayTick: Valor booleano para establecer el tiempo del delay en ticks, de lo contrario está en segundos. (20 ticks = 1 segundo)
* Ejemplo: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
