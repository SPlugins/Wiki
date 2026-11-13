---
description: >-
  Erfahre, wie Du mit einem LOOP-Aktivator und bedingten Items einen
  Rüstungsset-Bonus erstellst. Anleitung für ExecutableItems auf Deinem
  Minecraft-Server.
source_hash: 6cf2ef4cf39ef5e2
translated_at: '2026-11-13T17:27:22.936Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Rüstungsset-Bonus

:::tip Neu: native Sets
ExecutableItems hat jetzt native [Sets](/executableitems/configurations/sets-configuration): eine Datei pro Set, mehrere Stufen (2 Teile, 4 Teile...), Effekte und Attribute werden sauber entfernt, sobald ein Teil abgelegt wird, und es läuft kein LOOP mehr dauerhaft. Nutze sie für neue Sets. Die folgende Methode funktioniert weiterhin.
:::

## Los geht's!

### Zuerst müssen wir die Teile des Rüstungssets erstellen

* In diesem Beispiel lauten die Namen der Items:\
  Helm = **nameofhelmet.yml**\
  Brustplatte = **nameofchestplate.yml**\
  Beinschutz = **nameofleggings.yml**\
  Stiefel = **nameofboots.yml**

![](https://media.ssomar.com/m/docs-img-image-145.png)

* Um sie zu erstellen:
  * /ei create nameofhelmet -> Save
  * /ei create nameofchestplate -> Save
  * /ei create nameofleggings -> Save
  * /ei create nameofboots -> Save

### Nun erstellen wir den Aktivator, der aktiv sein soll, wenn man das ganze Set trägt

:::info
In diesem Beispiel erstellen wir eine Rüstung, die Dir immer Stärke gibt, solange Du das ganze Set trägst. Dafür brauchen wir einen LOOP-Aktivator. Außerdem musst Du festlegen, welches Rüstungsteil das "Haupt-Teil" ist, von dem aus alle Befehle ausgeführt werden. In diesem Fall ist das "Haupt-Teil" der **Helm**.
:::

* Wie bereits erwähnt, ist der Aktivator also **LOOP**

![](https://media.ssomar.com/m/docs-img-image-399.png)

* Das soll nur funktionieren, wenn das Item getragen wird. Deshalb stellen wir in **detailedSlots** ein, dass es nur im **Kopf-Slot** funktioniert.

![](https://media.ssomar.com/m/docs-img-image-189.png)

* Für den Bonus-Effekt verwenden wir den Vanilla-Effektbefehl:

```
minecraft:effect give %player% strength 10 0
```

### Bedingung für das ganze Set

Genau! Wir haben gerade die "Fähigkeit" erstellt, die das ganze Set besitzt, aber wir müssen noch die **Bedingung** hinzufügen, dass man das ganze Set trägt!

* Gehe zu Player conditions->ifHasExecutableItems

![](https://media.ssomar.com/m/docs-img-image-193.png)

![](https://media.ssomar.com/m/docs-img-image-172.png)

![](https://media.ssomar.com/m/docs-img-image-332.png)

Füge dann 3 IfHasExecutableItem-Bedingungen für die anderen 3 Rüstungsteile hinzu. Da ich den Helm als Haupt-Teil gewählt habe, muss ich also Brustplatte, Beinschutz und Stiefel hinzufügen.

Ich erkläre zuerst, wie man die Brustplatte als Bedingung hinzufügt:

* Füge im Bild oben eine Bedingung hinzu, dann siehst Du Folgendes
* ![](https://media.ssomar.com/m/docs-img-image-176.png)
* Die erste Option ist das benötigte EI. In diesem Fall scrolle ich nach unten, bis ich die Brustplatte finde
* ![](https://media.ssomar.com/m/docs-img-image-389.png)
* Sobald wir sie haben, gehen wir zur nächsten Option -> "Amount", sie wird 1 sein
* ![](https://media.ssomar.com/m/docs-img-image-258.png)
* Danach folgt der Slot, in dem sich dieses ExecutableItem befinden soll, bei der Brustplatte also der Brustplatten-Slot.
* ![](https://media.ssomar.com/m/docs-img-image-179.png)
* ![](https://media.ssomar.com/m/docs-img-image-427.png)

:::info
Denke daran, die Haupthand zu deaktivieren und nur 1 Slot zu aktivieren, nämlich den gewünschten.
:::

* **Und in diesem Fall verwenden wir die Usage-Bedingung nicht, also fasse sie nicht an.**
* Und speichere.

Dasselbe musst Du für die anderen 2 Teile tun. Wenn Du fertig bist, haben wir insgesamt 3 Bedingungen

![](https://media.ssomar.com/m/docs-img-image-249.png)

* Das war's! **Speichere das Item** und teste es!

![](https://media.ssomar.com/m/docs-img-image-348.png)

Es funktioniert! Wenn Du nun eine der Rüstungen nicht trägst, teilt Dir die Bedingung das mit.. 

![](https://media.ssomar.com/m/docs-img-image-384.png)

Um das zu deaktivieren, müssen wir den Bedingungs-Editor erneut öffnen und hier klicken

![](https://media.ssomar.com/m/docs-img-image-153.png)

Und es auf NO VALUE setzen

![](https://media.ssomar.com/m/docs-img-image-120.png)

Das war's, jetzt speichern, und es erscheint keine Bedingungsmeldung mehr.

Und nun.. ist alles geschafft!! 😁😁😎

:::info
Wenn Du Fragen hast, kannst Du sie auf **Discord** stellen ^^

Methode von Special70
:::

Beispiele:


```yaml
name: '&bHelmet'
material: DIAMOND_HELMET
lore:
  - '&7Wearing the full set grants Regeneration'
activators:
  fullSetBonus:
    name: Full Set Bonus
    option: LOOP
    delay: 1 # One second delay
    delayInTick: false # To specify that the delay need to be in seconds
    detailedSlots:
      - 39
    playerCommands:
      - minecraft:effect give %player% minecraft:regeneration 1 0
    playerConditions:
      ifHasExecutableItems:
        condition1_for_checking_chestplate: # 
          executableItem: CustomChestplate
          amount: 1
          detailedSlots:
            - 38
        condition2_for_checking_leggings:
          executableItem: CustomLeggings
          amount: 1
          detailedSlots:
            - 37
        condition3_for_checking_boots:
          executableItem: CustomBoots
          amount: 1
          detailedSlots:
            - 36
```


```yaml
name: '&bChestplate'
material: DIAMOND_CHESTPLATE
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bLeggings'
material: DIAMOND_LEGGINGS
lore:
  - '&7Wearing the full set grants Regeneration'
```


```yaml
name: '&bBoots'
material: DIAMOND_BOOTS
lore:
  - '&7Wearing the full set grants Regeneration'
```
