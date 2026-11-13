---
description: >-
  Lerne, wie du mit einem RNG-Chance-Aktivator und PlaceholderAPI zufällige
  Ausweich-Effekte für Custom Items erstellst. Tutorial für ExecutableItems.
source_hash: e2c9077e189d3702
translated_at: '2026-11-13T12:06:07.412Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# RNG Chance Aktivator

Vor einiger Zeit wollte ich eine NINJA-Rüstung, und die Idee war: Okay, manche Treffer werden ausgewichen und manche nicht, aber wie setzt man dieses „Ausweichen“ um? Nach langem Nachdenken ist diese Methode entstanden, lass sie uns erklären.

:::info
Dieses Tutorial bezieht sich auf das oben genannte Beispiel, aber die Idee ist, dass du das Prinzip der Methode verstehst und sie nach Belieben anwendest.
:::

### Erstellen wir das Item

:::info
Das **Item** selbst benötigt die Premium-Version + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Nachdem du Name, Lore und Material hinzugefügt hast..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Erstellen wir den Aktivator, der die Magie bewirkt

* Zuerst besteht die Idee darin, einen RECEIVE\_HIT\_BY\_GLOBAL zu erstellen und das Event abzubrechen.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Jetzt wird JEDER erhaltene Treffer abgebrochen. Damit er manchmal abgebrochen wird und manchmal nicht, müssen wir dafür sorgen, dass der Aktivator selbst nur manchmal ausgeführt wird. Dafür fügen wir eine Bedingung mit RNG hinzu. Das Prinzip: eine Zufallszahl zwischen 1 und 4. Wenn sie 1 entspricht, wird der Aktivator ausgeführt, was einer Wahrscheinlichkeit von 25% entspricht -> das ist die Wahrscheinlichkeit, die wir wollen. Fügen wir sie hinzu.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER\_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

Und im ersten Teil fügen wir "%rng\_1,4%" hinzu (dafür werden PlaceholderAPI und die RNG Expansion benötigt)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (weil der Aktivator nur ausgelöst werden soll, wenn die Zufallszahl zwischen 1 und 4 gleich 1 ist)

![](https://media.ssomar.com/m/docs-img-image-224.png)

Und das Item ist fertig

:::info
ZU DEBUG-ZWECKEN FÜGE ICH HINZU, DASS DER AKTIVATOR "dodge" SAGT UND, WENN DER PLATZHALTER NICHT ÜBEREINSTIMMT, "didn't dodge" SAGT.\
\
Sobald wir es testen, wissen wir also, ob alles richtig funktioniert.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

Und es hat funktioniert: Der Aktivator wird nur 1 von 4 Mal ausgeführt.

Wenn du Fragen hast, stelle sie gerne im Discord von EI. Hab einen schönen Tag :P

## So legst du die richtigen Werte fest, um den gewünschten Prozentsatz zu erhalten

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
