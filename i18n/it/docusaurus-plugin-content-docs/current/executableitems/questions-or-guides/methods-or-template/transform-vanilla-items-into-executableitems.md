---
description: >-
  Scopri come trasformare gli item vanilla in ExecutableItems con la versione
  PREMIUM: guida passo passo per ExecutableItems, dal setup al test in game.
source_hash: b79db1c5ed1a524c
translated_at: '2026-11-13T12:07:33.512Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Trasformare gli item vanilla in ExecutableItems

:::info
Prima di tutto devi sapere che questo metodo è disponibile solo nella VERSIONE PREMIUM
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Creiamolo: prima decidi quale item vanilla vuoi trasformare.

* Per questo tutorial sarà la **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Poi dobbiamo creare l'item che lo sostituirà**

* Per creare un item scrivi il comando `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Cambia il Material dell'item con l'item vanilla che vuoi modificare (in questo caso diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Creiamo un attivatore

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Per questo esempio sarà `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Imposta Detailed click su left, in modo che funzioni solo quando colpisci

![](https://media.ssomar.com/m/docs-img-image-272.png)

* E nei comandi metterò questo:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Quindi, quando colpisci, la spada dirà _**This is not a normal sword**_ e l'entità brucerà per 4 secondi
* OK! Abbiamo l'item pronto, puoi provarlo se vuoi (per essere sicuro che l'item EI funzioni bene). Ora dobbiamo fare la... trasformazione 😈😈

### Trasformare l'item vanilla nell'EI creato

* Per farlo, prima devi modificare il file yml del tuo item.

:::info
Si trova in plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Aprilo e aggiungi queste righe (devono essere senza indentazione/spazi sul lato sinistro)

```yaml
recognitions:
- MATERIAL
```

* Ora ExecutableItems considererà come item EI (quello che abbiamo appena creato) qualsiasi item che abbia lo stesso material.
* Salva il file \<item>.yml, entra in game e scrivi `/ei reload`

### Proviamolo

* Se abbiamo eseguito bene ogni passaggio, ora dobbiamo prendere una diamond\_sword vanilla, avvicinarci a una mucca e colpirla -> Dovrebbe bruciare per 4 secondi, appariranno delle particelle e riceverai un messaggio.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Provato e funziona! Sì!!

:::info
Per qualsiasi domanda puoi chiedere su Discord ^^

Metodo di Special70
:::
