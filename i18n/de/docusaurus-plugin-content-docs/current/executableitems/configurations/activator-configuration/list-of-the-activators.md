---
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
description: >-
  Liste aller Aktivatoren von ExecutableItems mit Beschreibung,
  Aktivator-Features und Beispielen, um Befehle und Aktionen für Custom Items
  auszulösen.
source_hash: 7a0c050ed0ea5e9b
translated_at: '2026-11-13T17:25:55.517Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# Liste der Aktivatoren

## Aktivatoren von ExecutableItems

Hier findest du die Liste der verfügbaren Aktivatoren mit ihrer Beschreibung und einigen Beispielen. Mit Aktivatoren kannst du eigene Aktionen ausführen; sie können Bedingungen haben, Befehle ausführen, einen Cooldown besitzen usw.

:::warning
Ein Aktivator, dessen `option:` nicht in dieser Liste steht (Tippfehler, Aktivator eines anderen Plugins …), ist **deaktiviert**: Er wird nie ausgeführt, und die Konsole zeigt beim Laden des Items einen Fehler mit den ähnlichsten Optionsnamen an.
:::

Premium-Aktivatoren sind mit dem Tag gekennzeichnet: <CustomTag type="premium" />

Aktivator-Features sind Features, die exklusiv für den jeweiligen Aktivator gelten.

### PLAYER\_ALL\_CLICK

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Item entweder einen Links- oder Rechtsklick ausführt. 
  * Du kannst die Klicks nicht unterscheiden. Verwende dafür separate Aktivatoren wie PLAYER\_RIGHT\_CLICK oder PLAYER\_LEFT\_CLICK.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Wenn typeTarget: ONLY\_BLOCK gesetzt ist, sind diese Features verfügbar.
    * [Block commands
      ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Beispiele: 
  * Warping Stone – Teleportiert den Spieler sofort 5 Blöcke in seine Blickrichtung. Cooldown: 10 Sekunden.
  * Healing Totem – Beim Klicken heilt er den Spieler um 4 Herzen und gewährt Regeneration I für 5 Sekunden.
  * Thunder Rod – Lässt einen Blitz auf den nächsten Gegner im Umkreis von 10 Blöcken einschlagen.
  * Gravity Boots – Schleudert den Spieler 3 Blöcke in die Luft und hebt den Fallschaden für 5 Sekunden auf.
  * Explosive Rune – Erzeugt an der Position des Spielers eine kleine Explosion, die Mobs in der Nähe zurückstößt, aber das Gelände nicht beschädigt.

### PLAYER\_BED\_ENTER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler ein Bett per Rechtsklick benutzt und sich hineinlegt. Legt sich der Spieler nicht hinein, wird dieser Aktivator nicht ausgelöst. Er wird auch nicht ausgelöst, wenn der Spieler schläft, sondern nur durch die Aktion des Hineinlegens ins Bett.
* Beispiele:
  * Void Sleep – Beim Hineinlegen ins Bett wird der Spieler in eine selbstgebaute Traumdimension zum Erkunden teleportiert.
  * Lunar Shield – Gewährt Absorption IV für 5 Minuten, wenn der Spieler im Bett schläft, und sorgt so für temporäre Bonus-Lebenspunkte.
  * Nightmare Curse – Lässt ein feindliches Phantom über dem Bett spawnen, wenn der Spieler sich hineinlegt, sodass er kämpfen muss, bevor er in Ruhe schlafen kann.
  * Dreamwalker’s Blessing – Beim Hineinlegen ins Bett erhält der Spieler Regeneration II, bis er aufwacht (die Aktion des Aufwachens wäre der Aktivator PLAYER\_BED\_LEAVE).

### PLAYER\_BED\_LEAVE <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das Bett verlässt. Vorsicht! Dieser Aktivator wird ausgelöst, wenn der Spieler schläft und es Tag wird, sodass er das Bett verlässt. Er wird aber auch ausgelöst, wenn der Spieler das Bett mitten im Schlaf verlässt, denn es zählt nur die Aktion des Verlassens des Betts.
  * Wenn du ihn nur auslösen möchtest, wenn der Spieler tatsächlich schläft, kannst du diesen Aktivator zusammen mit worldCondition -> ifWorldTime verwenden, um zu prüfen, ob es wirklich Tag ist.
* Beispiele:
  * Morning Boost – Beim Verlassen des Betts erhält der Spieler für 60 Sekunden Speed II und Haste II, um energiegeladen in den Tag zu starten.
  * Phantom's Warning – Verlässt der Spieler das Bett, bevor er vollständig geschlafen hat, spawnt als Konsequenz ein Phantom in der Nähe.
  * Dream Collector – Beim Aufwachen erhält der Spieler ein zufälliges verzaubertes Buch als „Traumerinnerung“.
  * Energy Surge – Beim Verlassen des Betts wird die Hungerleiste des Spielers vollständig aufgefüllt, als hätte er eine erholsame Nacht gehabt.

### PLAYER\_BEFORE\_DEATH

* Info: Aktivator, der ausgelöst wird, wenn der Spieler stirbt. Der Unterschied zum Aktivator PLAYER\_DEATH ist, dass dieser Aktivator zuerst ausgelöst wird und dir so die Möglichkeit bietet, den Spieler zu retten, bevor er stirbt.
  * Zum besseren Verständnis: Die Vanilla-Totems der Unsterblichkeit werden über diesen Aktivator ausgelöst, um ihre Effekte anzuwenden.
* Beispiele:
  * Soulbound Amulet – Wenn der Spieler kurz vor dem Tod steht, wird er stattdessen mit 2 Herzen und temporärer Regeneration II zu seinem Spawnpunkt teleportiert.
  * Last Stand Shield – Kurz vor dem Tod erhält der Spieler für 5 Sekunden Resistance III und Absorption, was ihm die Chance gibt, zurückzuschlagen.
  * Phoenix Blessing – Wenn der Tod unmittelbar bevorsteht, geht der Spieler in Flammen auf, verursacht Feuerschaden bei Gegnern und wird mit halber Gesundheit wiederbelebt.
  * Undead Pact – Wenn der Spieler sterben würde, wird er stattdessen mit 3 Herzen wiederbelebt, kann aber 10 Sekunden lang keine Waffen benutzen.

### PLAYER\_BLOCK\_BREAK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Block abbaut.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Beispiele:
  * Ore Booster Pickaxe – Beim Abbauen eines Erzblocks besteht eine Chance von 20 %, dass sich der Drop verdoppelt.
  * Nature’s Wrath Axe – Beim Abbauen eines Baumstamms besteht eine Chance von 10 %, einen feindlichen Baumgeist (Custom-Mob) zu beschwören.
  * Cursed Excavation – Beim Abbauen von Stein besteht eine Chance von 5 %, Silberfischchen spawnen zu lassen oder Mining Fatigue für 5 Sekunden anzuwenden.
  * Explosive Demolition Hammer – Beim Abbauen von Blöcken werden auch die umliegenden Blöcke abgebaut, sodass du in 3x3 abbauen kannst.

### PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Schild einen Treffer blockt, der von einer Entity stammt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Beispiele:
  * Thorned Shield – Beim Blocken eines Angriffs erleidet der Angreifer 3 Herzen Schaden.
  * Shockwave Defense – Ein erfolgreich geblockter Angriff stößt alle Gegner im Umkreis von 5 Blöcken zurück.
  * Energy Absorption – Beim Blocken eines Angriffs regeneriert der Spieler 1 Herz und erhält für 3 Sekunden Resistance I.
  * Frozen Guard – Wird ein Angriff geblockt, wird der Angreifer für 2 Sekunden festgefroren (Slowness IV).
  * Blazing Counter – Das Blocken eines Angriffs setzt den Angreifer für 4 Sekunden in Brand.

### PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Schild einen Treffer blockt, der von einem Spieler stammt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
* Beispiele:
  * Retribution Shield – Beim Blocken eines Angriffs von einem Spieler wird der Angreifer sofort entwaffnet und lässt seine Waffe auf den Boden fallen.
  * Vampiric Guard – Beim erfolgreichen Blocken eines Angriffs entzieht der Spieler dem Angreifer einen Teil seiner Gesundheit (heilt 2 Herzen).
  * Dimensional Rift – Wird der Angriff eines Spielers geblockt, besteht eine Chance von 20 %, dass er 10 Blöcke weit in eine zufällige Richtung teleportiert wird.
  * Adrenaline Block – Beim Blocken eines Angriffs erhält der Spieler sofort für 5 Sekunden Speed II und Strength I, was einen schnellen Gegenangriff ermöglicht.

### PLAYER\_BLOCK\_PLACE <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Block platziert.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Beispiele:
  * Living Roots – Beim Platzieren eines Setzlings besteht eine Chance von 10 %, dass er sofort zu einem Baum heranwächst.
  * Runic Inscription – Beim Platzieren eines Steinblocks besteht eine Chance von 5 %, dass er zu einem Runed Stone wird, Partikel ausstößt und Spielern in der Nähe für 10 Sekunden Haste I gewährt.
  * Beim Platzieren von TNT besteht eine geringe Chance (5 %), dass es sofort gezündet wird und eine unerwartete Explosion verursacht.

### PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler den Schild eines anderen Spielers (meist Target genannt) zerstört.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Beispiele:
  * Shatter Strike – Beim Zerstören des Schilds eines Spielers erhält der Angreifer für 5 Sekunden Strength I, was seinen nächsten Angriff verstärkt.
  * Wird ein Schild zerstört, entsteht an der Position des Targets eine kleine Explosion, die es 5 Blöcke weit zurückstößt.
  * Wird ein Schild zerschmettert, erhält das Target für **5 Sekunden** **Wither I**, wodurch seine Gesundheit langsam sinkt.
  * Dimensional Fracture – Beim Zerstören des Schilds eines Spielers wird das Target kurz 5 Blöcke nach oben teleportiert und desorientiert, bevor es wieder herunterfällt.

### PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Block bürstet.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Beispiele:
  * Cursed Dust – Bürstet der Spieler einen verdächtigen Block, besteht eine Chance von 10 %, dass er vorübergehend geblendet wird, während um ihn herum eine Wolke aus verfluchtem Staub aufsteigt.
  * Buried Riches – Das Bürsten eines Blocks hat eine geringe Chance, den Spieler mit einem Goldnugget oder Smaragd zu belohnen, als hätte er einen verlorenen Schatz entdeckt.
  * Temporal Echoes – Beim Bürsten eines Artefaktblocks hört der Spieler leise Stimmen aus der Vergangenheit, die auf Lore-Geheimnisse in der Nähe hindeuten.

### PLAYER\_BUCKET\_ENTITY

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit einem Eimer eine Entity in den Eimer aufnimmt.
  * Ein Beispiel ist, wie du einen Fisch in einem Eimer mit Wasser aufbewahrst.
  * Wenn du etwas ausführen willst, wenn der Spieler „versucht“, eine Entity aufzunehmen, die nicht in einen Eimer passt, wird dieser Aktivator nicht ausgeführt. Verwende dafür PLAYER\_CLICK\_ON\_ENTITY.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Beispiele:
  * Instant Fillet – Anstatt einen Fisch im Eimer zu fangen, erhält der Spieler sofort rohen Fisch in sein Inventar, als hätte er ihn gekonnt an Ort und Stelle filetiert.
  * Essence Extraction – Beim Benutzen eines Eimers an einem Axolotl erhält der Spieler, anstatt ihn zu fangen, einen „Axolotl Mucus“-Trank, der für 10 Sekunden Regeneration I gewährt.

### PLAYER\_CHANGE\_WORLD

* Info: Aktivator, der ausgelöst wird, wenn der Spieler in eine andere Welt wechselt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
* Beispiele:
  * Dimensional Adaptation – Betritt der Spieler eine neue Welt, erhält er einen zufälligen temporären Buff (Speed, Strength oder Night Vision für 30 Sekunden), während sich sein Körper an die neue Umgebung anpasst.
  * Weight of Realms – Betritt ein Spieler den Nether oder das End, erhält er für 10 Sekunden temporär Slowness II, um den plötzlichen Wechsel der Schwerkraft zu simulieren.
  * Forgotten Memories – Beim Wechsel der Welten besteht eine geringe Chance (5 %), dass der Spieler ein zufälliges Item aus dem Inventar verliert, als würde eine „Erinnerung“ vergessen.
  * Realmwalker’s Favor – Das Betreten einer neuen Welt gewährt ein geheimnisvolles Loot-Item passend zur Dimension (z. B. gibt der Nether einen zufälligen Goldbarren, das End eine Enderperle usw.), als wäre es ein Geschenk einer unbekannten Macht.

### PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler auf eine Entity und Citizen-NPC(s) klickt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Beispiele:
  * Beast Tamer’s Bond – Ein Klick auf einen Wolf, eine Katze oder ein Pferd mit einem speziellen Item in der Hand (z. B. einem Goldenen Apfel) gewährt dem Tier für 60 Sekunden temporär Speed II und Regeneration.
  * Hidden Pocket – Ein Klick auf einen Zombie Piglin mit Goldbarren hat eine Chance von 5 %, sofort ein zufälliges Nether-Loot-Item zu erhalten, anstatt tauschen zu müssen.
  * Gourmet’s Choice – Ein Klick auf eine Kuh, ein Schwein oder ein Huhn mit einem Messer (Custom Item) in der Hand liefert sofort einen hochwertigeren Fleisch-Drop (z. B. gebratenes Steak statt rohem Rindfleisch).
  * Battle Focus – Ein Klick auf einen Eisengolem mit einem Schild in der Hand gewährt ihm für 30 Sekunden temporär Resistance II und Knockback-Resistenz, sodass er mehr Schaden einstecken kann.
  * Final Tribute – Ein Klick auf ein Skelett oder Wither-Skelett mit Knochenblöcken in der Hand verleiht dem Spieler kurz einen Speed-II-Schub, als würde er die Energie uralter Krieger absorbieren.

### PLAYER\_CLICK\_ON\_PLAYER

* Info: Aktivator, der ausgelöst wird, wenn der Spieler auf einen Spieler (meist Target genannt) klickt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
* Beispiele:
  * Shared Fortune – Ein Klick auf einen Spieler mit einem Smaragdblock in der Hand halbiert deine XP-Level und gibt dem anderen Spieler die verlorenen XP sofort.
  * Ein Klick auf einen Teamkollegen mit einem Trank der Heilung in der Hand überträgt sofort die Hälfte deiner Gesundheit auf ihn und wird so zum strategischen Lebensretter in letzter Sekunde.
  * Tactical Mark – Ein Klick auf einen anderen Spieler im Schleichen versieht ihn für 10 Sekunden mit einem Leuchteffekt, sodass er für Teamkollegen in einem PvP-Kampf sichtbar ist.
  * Oath of Protection – Ein Klick auf einen Spieler mit einem Schild in der Hand gewährt ihm für 30 Sekunden Resistance I und wirkt wie ein temporärer Beschützereffekt.

### PLAYER\_CONNECTION <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler sich auf dem Server anmeldet.
* Beispiele:
  * Realm’s Welcome – Beim Anmelden erhält der Spieler für 30 Sekunden temporär Speed I und Haste I, um einen Energieschub beim Betreten der Welt zu simulieren.
  * Echo of the Past – Die erste Nachricht, die der Spieler im Chat sieht, ist eine individuelle „Erinnerungs“-Nachricht.
  * Daily Fortune – Beim Anmelden erhält der Spieler für 10 Minuten einen zufälligen kleinen Buff oder Debuff (z. B. Luck I, Speed I oder Slowness I), sodass jede Sitzung etwas anders ist.
  * Dimensional Echo – Meldet sich der Spieler aus einer anderen Welt (Nether oder End) an, erlebt er kurz einen wirbelnden Partikeleffekt und hört einige Sekunden lang verzerrte Umgebungsgeräusche, bevor er sich vollständig stabilisiert.

### PLAYER\_CONSUME

* Info: Aktivator, der ausgelöst wird, wenn der Spieler erfolgreich ein Item isst oder konsumiert.\
  Vorsicht: Er funktioniert nur für Minecraft-Items, die essbar sind, oder für solche, die mit den [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures) in ein essbares Item umgewandelt werden.

### PLAYER\_CONSUME\_THE\_EI

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem selbst erfolgreich isst oder konsumiert. \
  Vorsicht: Er funktioniert nur für ExecutableItems, die essbar sind, oder für solche, die mit den [Consumable Features](/executableitems/configurations/item-configuration/item-features#consumablefeatures) in ein essbares Item umgewandelt werden.

### PLAYER\_CUSTOM\_LAUNCH

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit einem SCore-Befehl ein Projektil abfeuert, wie zum Beispiel:
  * [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
  * [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch)
  * [LAUNCH\_ENTITY](/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity#launchentity)
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [entityCommands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands) (In diesem Aktivator ist die Entity das Projektil)
  * [Projectile placeholders](/tools-for-all-plugins-score/placeholders#projectile-placeholders)
  * [detailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities) (Um einige Projektile auf die Whitelist/Blacklist zu setzen)

### PLAYER\_DEATH

* Info: Aktivator, der ausgelöst wird, wenn der Spieler stirbt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet. 
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_DESELECT\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem abwählt.
  * Das passiert, wenn sich das ExecutableItem in der Haupthand befindet und du dann das Item wechselst, das du hältst, es also „abwählst“. 

### PLAYER\_DISABLE\_FLY

* Info: Aktivator, der ausgelöst wird, wenn der Spieler aufhört zu fliegen. 
  * Fliegen bedeutet tatsächlich zu fliegen, nicht zu gleiten oder wegen eines Sturzes in der Luft zu sein.

### PLAYER\_DISABLE\_GLIDE

* Info: Aktivator, der ausgelöst wird, wenn der Spieler aufhört zu gleiten. 

### PLAYER\_DISABLE\_SNEAK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler aufhört zu schleichen. 

### PLAYER\_DISABLE\_SPRINT <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler aufhört zu sprinten. 

### PLAYER\_DISABLE\_SWIM

* Info: Aktivator, der ausgelöst wird, wenn der Spieler aufhört zu schwimmen (Schwimmen ab 1.13)
* 
### PLAYER\_DISCONNECT

* Info: Aktivator, der ausgelöst wird, wenn der Spieler sich vom Server abmeldet.

### PLAYER\_DISMOUNT

* Info: Aktivator, der ausgelöst wird, wenn der Spieler von einer Entity absteigt, auf der er geritten ist. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_DROP\_ITEM

* Info: Aktivator, der ausgelöst wird, wenn der Spieler ein Item fallen lässt. 

### PLAYER\_DROP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem fallen lässt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_EDIT\_BOOK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler Änderungen am Buch mit Feder vorgenommen und auf „Fertig“ geklickt oder das Buch signiert hat. 

### PLAYER\_EI\_BREAK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem durch den Vanilla-Haltbarkeitsverlust zerbricht.

### PLAYER\_EMPTY\_BUCKET

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen ExecutableItem-Eimer leert. Er wird zum Beispiel auch ausgelöst, wenn du einen Block mit Wasser flutest oder einen Kessel mit dieser Flüssigkeit füllst.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Wenn dieser Aktivator aktiviert wird, ist der Zielblock die Position, an der das Wasser platziert werden soll. Mit dieser Information kannst du SETBLOCK verwenden, um das Wasser bei Bedarf durch etwas anderes zu ersetzen.

### PLAYER\_ENABLE\_FLY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler **anfängt** zu fliegen. Dieser Aktivator wird durch die Aktion „zweimal die Leertaste drücken, während man die Berechtigung zum Fliegen hat“ ausgelöst.
  * Das bedeutet, dass er nicht ausgelöst wird, wenn du bereits fliegst. Er wird durch den Wechsel des Flugzustands per „doppeltem Drücken der Leertaste“ ausgelöst.
* Beispiele:
  * Lightning Takeoff – Wird der Flug aktiviert, schlägt für einen dramatischen Effekt ein kleiner Blitz ohne Schaden an der Position des Spielers ein.
  * Aerial Boost – Beim Start des Flugs erhält der Spieler für 5 Sekunden temporär Speed III, um einen kraftvollen Abheber zu simulieren.
  * Gale Force Wings – Beginnt der Spieler zu fliegen, stößt ein starker Windeffekt alle Entities um den Spieler herum weg.

### PLAYER\_ENABLE\_GLIDE

* Info: Aktivator, der ausgelöst wird, wenn der Spieler anfängt zu gleiten. 

### PLAYER\_ENABLE\_SNEAK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler anfängt zu schleichen. 

### PLAYER\_ENABLE\_SPRINT <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler anfängt zu sprinten.

### PLAYER\_ENABLE\_SWIM

* Info: Aktivator, der ausgelöst wird, wenn der Spieler anfängt zu schwimmen (Schwimmen ab 1.13)

### PLAYER\_ENTER\_IN\_THEIR\_LAND <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn du dein eigenes Land oder ein Land betrittst, in dem dir vertraut wird. 
  * Unterstützte Plugins:
    * Lands

### PLAYER\_ENTER\_IN\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn du ein Plot betrittst.
  * Unterstützte Plugins:
    * PlotSquared 

### PLAYER\_EQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn du das Rüstungsteil anlegst bzw. in den Rüstungsslot legst.
  * `detailedSlots` kann ihn auf einen Rüstungsslot beschränken: 36 Stiefel, 37 Hose, 38 Brustpanzer, 39 Helm (der Slot, in den das Teil kommt), zusätzlich -1 für die Hand, aus der es kam.
  * <CustomTag type="version" version="1.21.3" /> Ein Item mit [Equippable-Features](/executableitems/configurations/item-configuration/item-features#equippable-features-) kommt in den `slot` dieser Features, auch wenn dies nicht der Slot seines Materials ist: Ein auf den Beinen tragbarer geschnitzter Kürbis zählt als Hose (37). Bei einem Rechtsklick wird es nur angelegt, wenn sein `swappable` true ist.
  * Vorsicht! Das Plugin CMI kann dazu führen, dass dieser Aktivator nicht funktioniert, wenn die Berechtigung cmi.inventoryhat auf true steht. Wenn du willst, dass dieser Aktivator funktioniert, setze die Berechtigung auf false. 
  * Fabric-Addons können diesen Aktivator umgehen.

### PLAYER\_EXPERIENCE\_CHANGE

* Info: Aktivator, der ausgelöst wird, wenn sich die Erfahrung des Spielers auf natürliche Weise ändert. 
  * Das bedeutet, dass dieser Aktivator nicht durch Erfahrungsänderungen per Befehl ausgelöst wird. Ausnahme sind Befehle, die einen Erfahrungsorb spawnen lassen, denn dadurch ändert sich die Erfahrung „natürlich“.

### PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Block mit Knochenmehl düngt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FILL\_BUCKET

* Info: Aktivator, der ausgelöst wird, wenn der Spieler den Eimer entweder mit Wasser oder Lava füllt. 
  * Vorsicht! Wenn ein ExecutableItem einen Eimer füllt und dieser zu „water\_bucket“ oder „lava\_bucket“ wird, ist er kein ExecutableItem mehr, sondern wird zu einem Vanilla-Item und kann nicht zurückverwandelt werden.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_BLOCK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit der Angel einen Rechtsklick ausführt, während sich der Schwimmer der Angel auf einem Block befindet. 
  * Er wird nicht ausgelöst, wenn der Schwimmer nicht auf einem Block ist. Wenn du ihn in der Luft auslösen willst, verwende den Aktivator [PLAYER_FISH_NOTHING](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_fish_nothing)
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_FISH\_ENTITY <CustomTag type="premium" />

* Wird aktiviert, wenn der Spieler mit der Angel einen Rechtsklick ausführt, während der Schwimmer der Angel eine Entity oder einen Citizens-NPC fängt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet. 
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_FISH <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit der Angel einen Rechtsklick ausführt, während der Schwimmer der Angel durch das Fisch-Loot-System ein Item im Wasser fängt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

:::tip
Die Entity, auf die `entityCommands` zielt, ist das **gefangene Item**. Verwende den Entity-Befehl [CHANGE\_INTO\_ITEM](/tools-for-all-plugins-score/custom-commands/entity-commands#change_into_item), um den Fang in ein Vanilla-Item oder ein ExecutableItem zu verwandeln, siehe die Anleitung [Custom fishing loot](/executableitems/questions-or-guides/methods-or-template/custom-fishing-loot).
:::

### PLAYER\_FISH\_NOTHING <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler nichts fischt, das heißt, der Schwimmer war weder auf einem Block noch auf einer Entity noch auf einem Spieler.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_FISH\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit der Angel einen Rechtsklick ausführt, während der Schwimmer der Angel einen anderen Spieler (meist Target genannt) fängt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_FISH\_XIAOMOMI\_FISH <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Plugin CustomFishing (früher bekannt als Xiaomomi Fish) erfolgreich etwas fängt. Dieser Aktivator erfordert, dass das [CustomFishing-Plugin](https://modrinth.com/plugin/customfishing) auf deinem Server installiert ist.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
* Verfügbare Platzhalter:
  * `%result%` - Das Angelergebnis (z. B. SUCCESS, FAILURE usw.)
  * `%fish_hook%` - Der Name des verwendeten Angelhakens
  * `%loot%` - Die ID des gefangenen Loots
* Beispiele:
  * Custom Fishing Rewards – Beim Fangen eines seltenen Fisches mit CustomFishing erhält der Spieler Bonuserfahrung oder eine spezielle Währungsbelohnung.
  * Lucky Catch – Beim erfolgreichen Angeln mit einer bestimmten Angel besteht die Chance, zusätzliche Custom-Loot-Items aus dem Plugin CustomFishing zu erhalten.
  * Fishing Skill Progression – Verfolge erfolgreiche Fänge und erhöhe die Angel-Skill-Level der Spieler anhand der Seltenheit der gefangenen Fische.

:::info
Dieser Aktivator funktioniert nur, wenn das Plugin **CustomFishing** installiert ist. Er lässt sich in das FishingResultEvent von CustomFishing integrieren, um erweiterte Angelmechaniken bereitzustellen.
:::

### PLAYER\_HARVEST\_BLOCK

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Block erntet
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet. 
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
* Beispiele:
  * Beim Rechtsklick auf einen Süßbeerenstrauch zum Ernten besteht eine Chance von 10 %, dass der Strauch zurückbeißt, einen halben Herz Schaden verursacht, dem Spieler aber als „Geschmack für Blut“-Effekt für 5 Sekunden Strength I gewährt.
  * Bountiful Touch – Beim Ernten von Nutzpflanzen besteht eine Chance von 15 %, sie sofort voll ausgewachsen neu zu pflanzen, was kontinuierliches Farmen ermöglicht.
  * Mystic Bloom – Beim Ernten einer Blume besteht eine Chance von 5 %, dass sie ein zufälliges verzaubertes Item droppt, das mit der Energie der Natur erfüllt ist.

### PLAYER\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler eine Entity trifft.
  * Dieser Aktivator funktioniert nur, wenn Schaden im Spiel ist, das heißt, der Spieler hat die Entity tatsächlich getroffen. Wenn er auch beim Anklicken der Entity funktionieren soll, verwende [PLAYER_CLICK_ON_ENTITY](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_entity)
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_HIT\_PLAYER

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen anderen Spieler (meist Target genannt) trifft.
  * Dieser Aktivator funktioniert nur, wenn Schaden im Spiel ist, das heißt, der Spieler hat den anderen Spieler tatsächlich getroffen. Wenn er auch beim Anklicken des Spielers funktionieren soll, verwende [PLAYER_CLICK_ON_PLAYER](/executableitems/configurations/activator-configuration/list-of-the-activators-for-executableitems#player_click_on_player)
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_INPUT <CustomTag type="premium" /> <CustomTag type="version" version="1.21.3" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler eine Taste drückt. (forward, backward, left, right, jump, sprint, sneak)

### PLAYER\_ITEM\_BREAK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem zerbricht, indem es seine gesamte Haltbarkeit verliert. 

### PLAYER\_JUMP <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler springt.
  * <CustomTag type="version" version="1.21.2" /> er kann auch dann ausgelöst werden, wenn der Spieler versucht hat, mitten in der Luft zu springen.

### PLAYER\_KICK

* Info: Aktivator, der ausgelöst wird, wenn der Spieler gekickt wird 

### PLAYER\_KILL\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler eine Entity oder einen Citizens-NPC tötet. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)

### PLAYER\_KILL\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Spieler (meist Target genannt) tötet.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Disable Drops](/executableitems/configurations/activator-configuration/activators-features#s_a_l-desactivedrops)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_LAUNCH\_PROJECTILE

* Info: Aktivator, der ausgelöst wird, wenn der Spieler ein Projektil abschießt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_LEAVE\_THEIR\_LAND

* Info: Aktivator, der ausgelöst wird, wenn du dein eigenes Land oder ein Land verlässt, in dem dir vertraut wird. 
  * Unterstützte Plugins:
    * Lands

### PLAYER\_LEAVE\_THEIR\_PLOT <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn du ein Plot verlässt.
  * Unterstützte Plugins:
    * PlotSquared 

### PLAYER\_LEFT\_CLICK

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Item einen Linksklick ausführt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [TypeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget)
  * Wenn typeTarget: ONLY\_BLOCK gesetzt ist, sind diese Features verfügbar.
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Zum Schreiben von [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_MEND\_THE\_EI

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem durch die Verzauberung Reparatur (Mending) repariert. 

### PLAYER\_OPEN\_INVENTORY

* Info: Aktivator, der ausgelöst wird, wenn der Spieler Inventare öffnet, aber **NICHT sein eigenes Inventar**. 

:::info
Derzeit ist es nicht möglich zu erkennen, wenn der Spieler **sein eigenes** Inventar öffnet, da dies nur clientseitig geschieht. 

Das Event wird nur ausgelöst, wenn jemand den Spieler zwingt, sein Inventar zu öffnen, oder wenn der Spieler benutzerdefinierte Inventare, Blockinventare oder Händlerinventare öffnet.
:::

### PLAYER\_PICKUP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem aufhebt. 

### PLAYER\_PORTAL

* Info: Aktivator, der ausgelöst wird, wenn der Spieler ein Portal benutzt.

### PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Trankeffekt erhält. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedEffects](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedeffects)

### PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler von einer Entity getroffen wird. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler von einem anderen Spieler (meist Target genannt) getroffen wird.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler getroffen wird. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedDamageCauses](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detaileddamagecauses)

### PLAYER\_REGAIN\_HEALTH

* Info: Aktivator, der ausgelöst wird, wenn der Spieler auf natürliche Weise Gesundheit zurückgewinnt.

### PLAYER\_RESPAWN <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler respawnt.
  * Wie üblich funktionieren alle ExecutableItem-Aktivatoren, wenn der Spieler das Item im Inventar hat. Respawnt der Spieler also ohne das Item im Inventar, wird dieser Aktivator nicht ausgelöst.

### PLAYER\_RIGHT\_CLICK

* Info: Aktivator, der ausgelöst wird, wenn der Spieler mit dem Item einen Rechtsklick ausführt. 
  * Aufgrund von Spigot-Einschränkungen wird dieser Aktivator nur ausgelöst, wenn du ein (beliebiges) Item in der Hand hältst.
* Spezielle Features dieses Aktivators:
  * [typeTarget](/executableitems/configurations/activator-configuration/activators-features#s_a_l-typetarget) : Um den Typ des Klicks festzulegen (ONLY\_AIR, ONLY\_BLOCK, NO\_TYPE\_TARGET)
  * Wenn typeTarget: ONLY\_BLOCK gesetzt ist, sind diese Features verfügbar:
    * [blockCommands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands) : Zum Schreiben von [block commands](../../../tools-for-all-plugins-score/custom-commands/block-commands.md)
    * [detailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks) : Um festzulegen, welche Blocktypen gültig sind

### PLAYER\_RIPTIDE

* Info: Aktivator, der ausgelöst wird, wenn der Spieler Riptide (Sog) verwendet.

### PLAYER\_SELECT\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem in der Hotbar auswählt, also anfängt, es in der Haupthand zu halten. 

### PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler eine Entity schert. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Schild des Spielers von einem anderen Spieler (meist Target genannt) zerstört wird.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)

### PLAYER\_SPAWN\_CHANGE

* Info: Aktivator, der ausgelöst wird, wenn sich der Spawnpunkt des Spielers ändert. 

### PLAYER\_SWAPHAND\_THE\_EI

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem per Swaphand tauscht. Gemeint ist die Tastenkombination zum Tauschen von Haupthand und Nebenhand und umgekehrt. 

### PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn eine Entity den Spieler ins Visier nimmt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)

### PLAYER\_TRAMPLE\_CROP

* Info: Aktivator, der ausgelöst wird, wenn der Spieler eine Nutzpflanze zertrampelt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands
    ](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

### PLAYER\_UNEQUIP\_THE\_EI <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler das ExecutableItem ablegt. 
  * `detailedSlots` kann ihn auf einen Rüstungsslot beschränken: 36 Stiefel, 37 Hose, 38 Brustpanzer, 39 Helm (der Slot, aus dem das Teil kommt).
  * Vorsicht! Das Plugin CMI kann dazu führen, dass dieser Aktivator nicht funktioniert, wenn die Berechtigung cmi.inventoryhat auf true steht. Wenn du willst, dass dieser Aktivator funktioniert, setze die Berechtigung auf false.
  * Fabric-Addons können diesen Aktivator umgehen.

### PLAYER\_WALK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler läuft. 
  * Dieser Aktivator wird bei jedem Tick ausgelöst, in dem der Spieler läuft, und ist daher sehr leistungsintensiv. Verwende ihn mit Vorsicht. Du kannst die Cooldown-Funktion hinzufügen, um die Auswirkungen zu verringern.

### PLAYER\_WRITE\_COMMAND <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler einen Befehl eingibt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedCommands](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedcommands)

### PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn ein vom Spieler abgefeuertes Projektil ins Wasser gelangt.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn ein von einem Spieler abgefeuertes Projektil einen Block trifft. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Block commands](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [DetailedBlocks](/executableitems/configurations/activator-configuration/activators-features#p_b-blockcommands/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn ein von einem Spieler abgefeuertes Projektil eine Entity trifft. \
  Vorsicht: Er wird nicht ausgelöst, wenn das Projektil einen Spieler trifft (verwende dafür PROJECTILE\_HIT\_PLAYER).
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Entity commands](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [DetailedEntities](/executableitems/configurations/activator-configuration/activators-features#p_e-entitycommands/executableitems/configurations/activator-configuration/activators-features#p_e-detailedentities)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### PROJECTILE\_HIT\_PLAYER

* Info: Aktivator, der ausgelöst wird, wenn ein von einem Spieler abgefeuertes Projektil einen anderen Spieler (meist Target genannt) trifft.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Target commands](/executableitems/configurations/activator-configuration/activators-features#p_t-targetcommands)
  * [Must Be A Projectile Launch With The Same EI](/executableitems/configurations/activator-configuration/activators-features#s_a_l-mustbeaprojectilelaunchwiththesameei)

### CUSTOM\_TRIGGER

* Info: Aktivator, der durch einen Befehl ausgeführt oder zeitlich geplant werden kann. 
  * Dieser Aktivator gilt für alle Plugins, daher wird er unter [Custom triggers](/tools-for-all-plugins-score/custom-triggers) erklärt

### EI\_CLICK\_ON\_ANOTHER\_INVENTORY\_ITEM 

* Info: Aktivator, der ausgelöst wird, wenn das ExecutableItem im Inventar auf ein anderes Item gelegt wird.

### EI\_CLICKED\_BY\_ANOTHER\_INVENTORY\_ITEM

* Info: Aktivator, der ausgelöst wird, wenn ein Item im Inventar auf das ExecutableItem gelegt wird.

### EI\_ENTER\_IN\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn das ExecutableItem in das Inventar des Spielers gelangt.
  * Wenn du ein anderes Plugin verwendest, das das Geben von Items verwaltet, und ein ExecutableItem gegeben wird, dieser Aktivator aber nicht ausgeführt wird, wende dich an deren Support und bitte darum, diese Methode aufzurufen.
  * Verschiebungen innerhalb des Inventars zählen ebenfalls: Tausch mit der Nebenhand (F-Taste), Tausch per Zifferntaste und, auf Paper-Servern, Pick Block / Pick Item (mittlerer Mausklick). Bei diesen Verschiebungen wird EI\_LEAVE\_THE\_PLAYER\_INVENTORY immer vor diesem Aktivator ausgeführt.

### EI\_LEAVE\_THE\_PLAYER\_INVENTORY <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn das Item das Inventar des Spielers verlässt.
  * Erfordert ProtocolLib, damit dieser Aktivator richtig funktioniert. 

### INVENTORY\_CLICK <CustomTag type="premium" />

* Info: Aktivator, der ausgelöst wird, wenn der Spieler in seinem Inventar auf das Item klickt. 
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [DetailedClick](/executableitems/configurations/activator-configuration/activators-features#s_a_l-detailedclick)

### LOOP <CustomTag type="premium" />

* Info: Aktivator, der wiederholt ausgelöst wird, solange sich das Item im Inventar des Spielers befindet. Im Grunde ist es ein Zyklus: Er führt die Befehle je nach Konfiguration dieses Aktivators alle \<delay> \<seconds/ticks> aus.
* Wenn eine Bedingung eines LOOP nicht erfüllt ist, wird die standardmäßige Fehlermeldung (`You can't activate this item > invalid condition`) nicht gesendet: Der Spieler hat nichts aktiviert. Eine benutzerdefinierte Meldung (`{theCondition}Msg`) wird weiterhin gesendet.
* Für einen Bonus, solange mehrere Teile getragen werden, verwende die [Sets](/executableitems/configurations/sets-configuration) anstelle eines LOOP.
* activatorFeatures: Normalerweise teilen sich alle Aktivatoren ihre Features, aber einige sind exklusiv für bestimmte Aktivatoren. In diesem Fall werden die Features hier aufgelistet.
  * [Delay](/executableitems/configurations/activator-configuration/activators-features#s_a_l-delay-and-delaytick)
