---
description: >-
  Scopri come creare un'armatura Ninja con schivata casuale usando l'attivatore
  RNG Chance, PlaceholderAPI e RNG Expansion in ExecutableItems.
source_hash: e2c9077e189d3702
translated_at: '2026-11-13T12:07:48.601Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Attivatore RNG Chance

Qualche tempo fa volevo una Ninja Armor e l'idea era: ok, alcuni colpi vengono schivati e altri no, ma come si fa questa "schivata"? Dopo averci pensato a lungo è venuto fuori questo metodo, vediamo come funziona.

:::info
Questo tutorial farà riferimento all'esempio citato sopra, ma l'idea è che tu capisca l'essenza del metodo e lo applichi come preferisci.
:::

### Creiamo l'item

:::info
L'**item** stesso richiede la versione premium + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Dopo aver aggiunto nome, lore e materiale..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Creiamo l'attivatore che farà la magia

* Per prima cosa, l'idea è creare un RECEIVE\_HIT\_BY\_GLOBAL e annullare l'evento.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Ora quindi annulla OGNI colpo ricevuto. Per fare in modo che a volte lo annulli e a volte no, dobbiamo far sì che l'attivatore stesso venga eseguito solo qualche volta, quindi aggiungeremo una condizione legata a RNG. In sintesi: un numero casuale tra 1 e 4, se corrisponde a 1 l'attivatore viene eseguito, con una probabilità del 25% -> è la probabilità che vogliamo, aggiungiamola.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

E nella prima parte aggiungeremo "%rng\_1,4%" (richiede PlaceholderAPI e RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (perché vogliamo che scatti solo se il numero casuale tra 1 e 4 corrisponde a 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

E l'item è pronto

:::info
A SCOPO DI DEBUG AGGIUNGERÒ che l'attivatore dice "dodge" E, SE IL PLACEHOLDER NON CORRISPONDE, dice "didn't dodge".\
\
Così, una volta fatto il test, sapremo se funziona correttamente.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

E ha funzionato, l'attivatore viene eseguito solo 1 volta su 4.

Se hai domande, chiedile pure nel Discord di EI, buona giornata :P

## Come impostare i valori corretti per ottenere la percentuale che vuoi

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
