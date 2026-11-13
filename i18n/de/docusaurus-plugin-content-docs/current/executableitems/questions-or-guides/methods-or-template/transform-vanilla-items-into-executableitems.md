---
description: >-
  Lerne, wie Du Vanilla Items in Custom Items von ExecutableItems umwandelst:
  Item erstellen, Aktivator einrichten und die Umwandlung in der Premium-Version
  testen.
source_hash: b79db1c5ed1a524c
translated_at: '2026-11-13T12:05:51.074Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Vanilla Items in ExecutableItems umwandeln

:::info
Zuerst solltest Du wissen, dass diese Methode nur in der PREMIUM-VERSION verfügbar ist.
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Legen wir los: Entscheide zuerst, welches Vanilla Item Du umwandeln möchtest.

* Für dieses Tutorial ist es das **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Dann müssen wir das Item erstellen, durch das es ersetzt werden soll**

* Um ein Item zu erstellen, gib den Befehl `/ei create <id>` ein

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Ändere das Material des Items auf das Vanilla Item, das Du ersetzen möchtest (in diesem Fall diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Erstellen wir einen Aktivator

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Für dieses Beispiel ist es `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Detailed click auf left setzen, damit er nur beim Schlagen funktioniert

![](https://media.ssomar.com/m/docs-img-image-272.png)

* Und bei den Befehlen trage ich Folgendes ein:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Beim Schlagen sagt das Schwert also _**This is not a normal sword**_ und die Entität brennt für 4 Sekunden.
* OK! Wir haben das Item fertig, Du kannst es testen, wenn Du möchtest (um sicherzugehen, dass das EI Item richtig funktioniert). Jetzt müssen wir die... Umwandlung durchführen 😈😈

### Das Vanilla Item in das erstellte EI Item umwandeln

* Dazu musst Du zuerst die yml-Datei Deines Items bearbeiten.

:::info
Sie befindet sich unter plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Öffne sie und füge diese Zeilen hinzu. (Sie müssen ohne Einrückung/Leerzeichen auf der linken Seite stehen.)

```yaml
recognitions:
- MATERIAL
```

* Jetzt hält ExecutableItems jedes Item, das dasselbe Material wie das EI Item hat (das wir gerade erstellt haben), für das EI Item.
* Speichere die \<item>.yml, gehe ins Spiel und gib `/ei reload` ein

### Testen wir es

* Wenn wir alle Schritte richtig ausgeführt haben, müssen wir jetzt ein diamond\_sword aus Vanilla nehmen, in die Nähe einer Kuh gehen und sie schlagen -> Sie sollte für 4 Sekunden brennen, einige Partikel erscheinen und Du erhältst eine Nachricht.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Getestet und funktioniert! Jawohl!!

:::info
Wenn Du Fragen hast, kannst Du sie auf Discord stellen ^^

Methode von Special70
:::
