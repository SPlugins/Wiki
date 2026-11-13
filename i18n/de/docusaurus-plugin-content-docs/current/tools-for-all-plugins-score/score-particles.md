---
description: >-
  Erfahre, wie Du in SCore Partikelformen wie Kreis, Herz oder Helix anzeigst,
  konfigurierst und wieder entfernst. Teil des Plugins SCore von SPlugins.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-11-13T17:33:08.418Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    SCore Partikel

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

SCore enthält viele vorgefertigte Partikelformen aus der XParticle-Bibliothek sowie einige eigene Formen.

## So zeigst Du die Partikel an

Der Befehl zum Anzeigen der Partikel lautet `/score particles`

Du musst eine Form auswählen und den Befehl korrekt konfigurieren, um das gewünschte Ergebnis zu erzielen.

### So entfernst Du angezeigte Partikel

Der Befehl zum Entfernen angezeigter Partikel lautet `/score clear {player} PARTICLES` 

## Allgemeine Einstellungen für alle Formen

### Den Spawnpunkt festlegen

Um festzulegen, wo die Form angezeigt wird, hast Du zwei Möglichkeiten: Du gibst direkt die Position an oder legst eine Entity-UUID fest.

#### Player-/Entity-UUID verwenden

Wenn Du die Entity-UUID verwendest, **folgt die Form dem Spieler bzw. der Entity, wenn er sich bewegt**. Dadurch kann sich die Form verformen oder einen coolen Effekt erzeugen.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Du musst die UUID eines Spielers oder einer Entity angeben. Der Spielername funktioniert nicht!
:::

#### Eine bestimmte Position verwenden

Mit einer Position stellst Du sicher, dass die Form nicht verformt wird und statisch bleibt.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Partikeldefinition

#### Partikeltyp

Legt das Partikel fest, das von der Form verwendet wird. Standardmäßig ist das der Partikel FLAME.

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Liste der verfügbaren Partikel findest Du hier: [Liste der Spigot-Partikel](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Farbe

**Anstatt** `particle:{particle name}` zu verwenden, kannst Du für REDSTONE- / DUST-Partikel direkt die Einstellung color mit einer [benutzerdefinierten Farbe](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html) nutzen.

Du kannst zwei durch , getrennte Farben angeben, um einen Farbverlauf zu erhalten.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Du kannst auch RGB-Werte (0-255) verwenden, um benutzerdefinierte Farben in Deinem SCore-Partikel einzusetzen.

Beispiel: `color:RGB-156-82-84`

#### Block-Partikel

**Anstatt** `particle:{particle name}` zu verwenden, kannst Du für BLOCK\_CRACK- / BLOCK-Partikel direkt die Einstellung blockdata mit einem [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) nutzen.

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Item-Partikel

**Anstatt** `particle:{particle name}` zu verwenden, kannst Du für ITEM\_CRACK- / ITEM-Partikel direkt die Einstellung itemstack mit einem [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) nutzen.

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Offset / Verschiebung des Spawnpunkts der Form

Du kannst einen Offset in eine bestimmte Richtung festlegen. So kannst Du die Form zum Beispiel rund um den Spieler bzw. die Entity anzeigen, ohne komplizierte Berechnungen durchführen zu müssen.

* offsetPitch: die Pitch-Richtung, in die der Offset zeigt
* offsetYaw: die Yaw-Richtung, in die der Offset zeigt
* offsetSitance: die Distanz des Offsets
* offsetX: erhöht den Offset der X-Position
* offsetY: erhöht den Offset der Y-Position
* offsetZ: erhöht den Offset der Z-Position

Standardmäßig sind diese Einstellungen auf 0 gesetzt.

```css
offsetPitch:{the pitch direction}
offsetYaw:{the yaw direction}
offsetDistance:{the distance}
offsetX:{x bonus}
offsetY:{y bonus}
offsetZ:{z bonus}
/* Example with flat values */
offsetPitch:0
offsetYaw:-90
offsetDistance:5
offsetY:-1
/* Example with placeholders */
offsetPitch:%player_pitch_initial%+30
offsetYaw:%player_yaw_initial%
offsetDistance:%var_myvar%
```

## Einstellungen der Formen

### Atom

Erzeugt eine Reihe elliptischer Umlaufbahnen mit einer kleinen Partikelkugel in der Mitte, ähnlich einem Atom.

* `orbits`: Anzahl der elliptischen Umlaufbahnen.
* `radius`: Radius der Umlaufbahnen in Blöcken.
* `rate`: Anzahl der Partikel pro Umlaufbahn.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Animierte Version von `atom` mit kreisenden Partikeln.

* `orbits`: Anzahl der Umlaufbahnen.
* `radius`: Radius der Umlaufbahn in Blöcken.
* `rate`: Umlaufgeschwindigkeit.
* `time`: Dauer in Ticks.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Mehrere konzentrische Kreise, die immer größer werden.

* `radius`: Maximaler Radius in Blöcken.
* `radiusRate`: Radiusunterschied zwischen den einzelnen Kreisen.
* `rate`: Partikeldichte.
* `rateChange`: Änderung der Geschwindigkeit pro Ebene.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Ein dynamischer Partikelwirbel-Effekt.

* `points`: Anzahl der Spiralarme.
* `radius`: Abstand zum Zentrum.
* `rate`: Rotationsgeschwindigkeit.
* `mode`: 0 bis 4 für verschiedene Wirbelstile.
* `time`: Dauer in Ticks.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Simuliert den Effekt eines chaotischen Doppelpendels.

* `radius`: Schwingungsradius.
* `gravity`: Schwerkraft (typischerweise -1).
* `length`, `length2`: Längen der Pendel.
* `mass1`, `mass2`: Masse der einzelnen Pendel.
* `dimension3`: Ob eine 3D-Rotation verwendet werden soll.
* `speed`: Animationsgeschwindigkeit.
* `time`: Dauer in Ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Zeigt einen Kreis aus Partikeln an.

* `radius`: Radius des Kreises
* `density`: Anzahl der Partikel pro Block (höher = dichter).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: Zeit in Ticks, in der die gesamte Darstellung animiert wird. (0 = sofort)
* `directionPitch`: Pitch-Richtung des Kreises
* `directionYaw`: Yaw-Richtung des Kreises

Beispiele:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Animierter Strahl, dessen Kreisgrößen sich im Laufe der Zeit ändern.

* `maxRadius`: Maximaler Kreisradius in Blöcken.
* `rate`: Punktrate pro Kreis.
* `radiusRate`: Änderung des Radius.
* `extend`: Ausdehnungsdistanz in Blöcken.
* `time`: Dauer in Ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Kegel aus gestapelten Kreisen.

* `height`: Höhe des Kegels.
* `radius`: Basisradius.
* `rate`: Abstand zwischen den Kreisen.
* `circleRate`: Punktdichte.
* `fillMode`: der Füllmodus "disk", "ring", "spiral", standardmäßig disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Stellt mithilfe zweier sich überlappender Kreise eine Mondsichel dar.

* `radius`: Größe des äußeren Bogens.
* `rate`: Auflösung der Kurve.
* `directionYaw`: Richtung der Mondsichel in Grad

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: Radius des Zylinders
* `height`: die Höhe des Zylinders
* `density`: Anzahl der Partikel pro Block (höher = dichter).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: Zeit in Ticks, in der die gesamte Darstellung animiert wird.
* `directionPitch`: Pitch-Richtung des Quadrats
* `directionYaw`: Yaw-Richtung des Quadrats

Beispiele:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Erzeugt eine Diamantform (Raute) in 2D oder 3D.

* `radiusRate`: Steuert die Breite.
* `rate`: Abstand zwischen den Punkten.
* `height`: Gesamthöhe.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Zeigt eine DNA-Doppelhelix mit Wasserstoffbrücken an.

* `radius`: Radius der Helices.
* `rate`: Abstand zwischen den Punkten.
* `extension`: Streckungsfaktor der Helix.
* `height`: Gesamthöhe.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Simuliert die DNA-Replikation mit Bindungen und Farben.

* `radius`, `rate`, `extension`, `height`: Wie bei `DNA`.
* `speed`: Animationsgeschwindigkeit.
* `hydrogenBondDist`: Abstand zwischen den Bindungen.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: Start- und Endwinkel.
* `rate`: Winkelabstand.
* `radius`, `otherRadius`: X- und Y-Radius.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Wellenförmige Animation, die die Druckwelle einer Explosion darstellt.

* `rate`: Partikeldichte innerhalb der Welle.
* `start`: der Anfangsabstand vom Zentrum, ab dem die Welle startet.
* `height`: die vertikale Amplitude der Welle.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Zeichnet eine ovale, augenähnliche Form.

* `radius`, `radius2`: Hauptradien.
* `rate`: Auflösung.
* `extension`: Dehnungsfaktor
* `directionPitch`: Pitch-Richtung des Auges
* `directionYaw`: Yaw-Richtung des Auges

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Zeichnet ein Herz mithilfe einer Polarkurve.

* `cut`, `cutAngle`: Passen die Wölbungen des Herzens an.
* `depth`: Tiefe der mittleren Einkerbung.
* `compressHeight`: Vertikale Stauchung.
* `rate`: Auflösung.
* `directionPitch`: Pitch-Richtung des Herzens
* `directionYaw`: Yaw-Richtung des Herzens

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Zeichnet animierte 3D-Helices.

* `strings`: Anzahl der Helices.
* `radius`: Helixradius.
* `rate`, `extension`: Abstand und Spiralstärke.
* `height`: Gesamthöhe.
* `speed`: Animationsgeschwindigkeit.
* `fadeUp`, `fadeDown`: Allmähliche Änderung des Radius.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Erzeugt ein 3D-Unendlichkeitssymbol.

* `size`: Größe der Form.
* `extension`: Die Ausdehnung des Illuminati-Auges.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Zeigt sich ausdehnende Ringe wie magische Glyphen an.

* `radius`: Anfangsradius.
* `rate`: Punktabstand.
* `radiusRate`: Wachstumsgeschwindigkeit.
* `distance`: Abstand zwischen den Ringen.
* `time`: Dauer in Ticks.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Stilisierter magischer Explosionseffekt.

* `size`: Gesamtgröße der Explosion.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Zeichnet ein Polygon mit optionalen inneren Verbindungen

* `points`: Anzahl der Ecken.
* `connection`: Wie viele Ecken verbunden werden.
* `size`: Radius des Polygons.
* `rate`: Auflösung.
* `extend`: Erweiterungsfaktor der Verbindungen.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Zeigt gestapelte Regenbogenbögen mit farbigen Ebenen an.

* `radius`: Radius des Regenbogens
* `rate`: Punktrate, mehr = mehr Punkte
* `curve`: Krümmung, 1 für nach oben und -1 für nach unten
* `layers`: Anzahl der Bögen.
* `compact`: Verringert den Abstand zwischen den Bögen.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Zeichnet einen flachen Ring (Kreisring).

* `radius`: Radius des Rings.
* `density`: Partikeldichte.
* `time`: Anzeigedauer in Ticks.
* `drawMode`: Zeichenreihenfolge: clockWise, counterClockWise oder random
* `directionPitch`: Pitch-Richtung des Kreises
* `directionYaw`: Yaw-Richtung des Kreises

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Zeichnet eine vollständige 3D-Kugel.

* `radius`: Kugelradius.
* `rate`: Punktdichte

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Zeichnet eine Kugel mit zufälligen Stacheln.

* `radius`, `rate`: Parameter der Basiskugel.
* `chance`: Wahrscheinlichkeit für einen Stachel.
* `minRandomDistance`, `maxRandomDistance`: Bereich der Stachellänge.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: Höhe in Blöcken entlang der vertikalen Achse.
* `length`: Länge in Blöcken entlang des Richtungsvektors.
* `width`: Breite in Blöcken senkrecht zur Wandrichtung.
* `density`: Anzahl der Partikel pro Block (höher = dichter).
* `timeToDisplay`: Zeit in Ticks, in der die gesamte Darstellung animiert wird.
* `drawMode`: "vertical" oder "horizontal": steuert die Iterationsreihenfolge.
* `verticalOrder`: "up" oder "down": Reihenfolge entlang der Höhe.
* `horizontalOrder`: "near" oder "far": Reihenfolge entlang der Länge.
* `directionPitch`: Pitch-Richtung des Quadrats
* `directionYaw`: Yaw-Richtung des Quadrats

```yaml
# Examples that you can run manually in-game
...

# Examples that you can include into your commands
playerCommands:
# A line of explosion
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% particle:EXPLOSION height:1 length:30 timeToDisplay:20 density:1 directionYaw:%player_yaw_initial% directionPitch:%player_pitch_initial% verticalOrder:up horizontalOrder:near offsetY:-1
# A wall of flame
- score particles shape:square location:%player_world_initial%,%player_x_initial%,%player_y
```

### Star

Erzeugt einen 3D-Stern mit animierten Spitzen.

* `points`: Anzahl der Basisseiten.
* `spikes`: Anzahl der Sternspitzen.
* `rate`: Wie oft die Punkte angezeigt werden
* `spikeLength`: Länge der Spitzen.
* `coreRadius`: Kernradius.
* `neuron`: Krümmung der Spitzen.
* `prototype`: Verwendet Helices statt Linien.
* `speed`: Animationsgeschwindigkeit.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Zeichnet einen Tesserakt

* `size`: Gesamtgröße.
* `rate`: Dichte.
* `speed`: Geschwindigkeit.
* `time`: Anzeigedauer.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Spiraleffekt wie eine Galaxie oder ein Tornado.

* `points`: Anzahl der Spiralarme.
* `rate`: Rotationsgeschwindigkeit.
* `time`: Dauer.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
