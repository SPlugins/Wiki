---
description: >-
  detailedCommands und registerCommand erklärt: Befehle für Aktivatoren wählen
  und auf dem Server registrieren (ExecutableItems, ExecutableEvents).
source_hash: dd51810cf51b3bae
translated_at: '2026-11-13T17:34:28.612Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
### detailedCommands

* Info: Feature für Aktivatoren, die Befehle betreffen. Hier kannst du als Bedingung den Befehl auswählen, mit dem der Aktivator ausgeführt werden soll.
* Beispiel:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: Boolean-Wert, standardmäßig `false`. Nur für `PLAYER_WRITE_COMMAND`. Ohne diese Option wird der Aktivator zwar ausgeführt, aber der Befehl existiert für den Server nicht: Die Chatleiste zeigt ihn rot an und der Server antwortet mit "Unknown command". Mit `registerCommand: true` werden die Befehle von `detailedCommands` auf dem Server registriert:
  * Kein "Unknown command" mehr, und ab 1.13+ zeigt die Chatleiste den Befehl nicht mehr rot an.
  * Tab-Vervollständigung des Befehlsnamens und der Wörter, die danach in `detailedCommands` stehen (`/promo summer` und `/promo winter` schlagen `summer` und `winter` vor).
  * Der registrierte Befehl tut von sich aus nichts: Der Aktivator wird weiterhin nur einmal ausgeführt, wie zuvor.
  * Er ersetzt nie einen bestehenden Befehl (einen Befehl von Minecraft oder eines anderen Plugins): In der Konsole wird eine Warnung angezeigt, für diesen Befehl wird nichts registriert, und der Aktivator wird weiterhin ausgeführt, wenn der Befehl eingegeben wird.
  * Mehrere Aktivatoren (oder ExecutableItems und ExecutableEvents) können denselben Befehl verwenden: Er wird nur einmal registriert.
  * Die registrierten Befehle folgen den Configs: Sie werden nach einem Reload, einem Speichern im Editor oder einem Löschen aktualisiert und beim Deaktivieren des Plugins entfernt.
  * Ein Aktivator mit `registerCommand: true`, aber ohne `detailedCommands` registriert nichts.
* Beispiel:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
