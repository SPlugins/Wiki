---
description: >-
  Scopri come usare delay e delayTick per cambiare l'intervallo di ripetizione
  del loop di un attivatore, in secondi o in tick, nei plugin SPlugins.
source_hash: 492c3c387bf91ea2
translated_at: '2026-11-13T17:45:42.248Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay e delayTick

* Info: Funzionalità dell'attivatore che modifica l'intervallo di tempo in cui questo attivatore scatta, influenzando il comportamento delle ripetizioni del loop dell'attivatore.
  * delay: Valore intero che rappresenta quanti secondi dura il loop. Significa che ogni \<delay> \[time] il loop scatterà di nuovo. es. (Se il delay è di 30 secondi, l'attivatore scatterà ogni 30 secondi)
  * delayTick: Valore booleano per impostare il tempo di delay in tick, altrimenti è espresso in secondi. (20 tick = 1 secondo)
* Esempio: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
