---
description: >-
  Описание параметров delay и delayTick активатора в плагине SPlugins: настройка
  интервала срабатывания триггера.
source_hash: 492c3c387bf91ea2
translated_at: '2026-10-03T10:36:02.116Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay и delayTick

* Информация: Функции активатора, изменяющие интервал времени, через который этот активатор срабатывает, это влияет на поведение повторений цикла активатора.
  * delay: Целочисленное значение, представляющее количество секунд цикла. Это означает, что каждые \<delay> \[время] цикл снова сработает. Например (если delay равен 30 секундам, то каждые 30 секунд активатор будет срабатывать)
  * delayTick: Булево значение для установки времени задержки в тиках, иначе оно указывается в секундах. (20 тиков = 1 секунда)
* Пример: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
