---
description: >-
  Pelajari cara kerja delay dan delayTick pada aktivator untuk mengatur interval
  pengulangan loop dalam detik atau tick di plugin ExecutableItems.
source_hash: 492c3c387bf91ea2
translated_at: '2026-11-13T17:56:33.398Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### delay dan delayTick

* Info: Fitur aktivator yang mengubah waktu interval saat aktivator ini dipicu, dan memengaruhi perilaku pengulangan loop dari aktivator tersebut.
  * delay: Nilai integer yang menunjukkan berapa detik durasi loop. Artinya, setiap \<delay> \[time] loop akan dipicu lagi. Contoh: (Jika delay adalah 30 detik, maka aktivator akan dipicu setiap 30 detik)
  * delayTick: Nilai boolean untuk mengatur waktu delay dalam satuan tick, jika tidak maka dalam satuan detik. (20 tick = 1 detik)
* Contoh: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
