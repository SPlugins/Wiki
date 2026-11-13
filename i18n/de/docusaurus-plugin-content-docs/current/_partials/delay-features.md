---
description: >-
  Erfahre, wie du mit delay und delayTick das Intervall eines Aktivators in
  Sekunden oder Ticks festlegst. Gilt für Aktivatoren in ExecutableItems.
source_hash: 492c3c387bf91ea2
translated_at: '2026-11-13T17:34:38.450Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay und delayTick

* Info: Funktionen des Aktivators, die das Intervall ändern, in dem dieser Aktivator ausgelöst wird. Sie beeinflussen das Verhalten der Schleifenwiederholungen des Aktivators.
  * delay: Ganzzahl, die angibt, wie viele Sekunden die Schleife dauert. Das heißt, alle \<delay> \[Zeit] wird die Schleife erneut ausgelöst. z. B. (Wenn der delay 30 Sekunden beträgt, wird der Aktivator alle 30 Sekunden ausgelöst)
  * delayTick: Boolescher Wert, der die Delay-Zeit in Ticks festlegt, andernfalls in Sekunden. (20 Ticks = 1 Sekunde)
* Beispiel: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
