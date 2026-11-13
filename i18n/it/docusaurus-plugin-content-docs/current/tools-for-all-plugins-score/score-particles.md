---
description: >-
  Scopri come mostrare e rimuovere le particelle di SCore, configurare colore,
  offset e posizione e usare tutte le forme disponibili.
source_hash: ed81d3ba4c1a5e8c
translated_at: '2026-11-13T17:44:49.141Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# ✨    Particelle di SCore

<iframe width="560" height="315" src="https://www.youtube.com/embed/_GavkHnQcvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Score include molte forme di particelle già pronte dalla libreria XParticle e alcune altre personalizzate. 

## Come mostrare le particelle

Il comando per mostrare le particelle è `/score particles`

Dovrai selezionare una forma e configurare correttamente il comando per ottenere ciò che vuoi.

### Come rimuovere le particelle mostrate

Il comando per cancellare le particelle mostrate è `/score clear {player} PARTICLES` 

## Impostazioni generali per tutte le forme

### Definire il punto di spawn

Per definire dove verrà mostrata la forma hai due possibilità: indicare direttamente la posizione oppure impostare l'UUID di un'entità. 

#### Usare l'UUID di un Player/Entity

Quando decidi di usare l'UUID dell'entità, **la forma seguirà il Player/Entity se si muove**. Può quindi deformare la forma o creare un bell'effetto.

```css
target:{uuid of the target}
/* Example using flat UUID */
target:b33183ad-e9c0-4d48-8eea-f8c9358d3568
/* Example using a placeholder */
target:%player_uuid%
```

:::danger
Devi specificare l'UUID di un player o di un'entità. Il nome del player non funziona !
:::

#### Usare una posizione specifica

Usando una posizione hai la certezza che la forma non verrà deformata e resterà statica.

```css
location:{world},{x},{y},{z}
/* Example using flat location */
location:world,100,50,500
/* Example using placeholders */
location:%player_world%,%player_x%,%player_y%,%player_z%
```

### Definizione delle particelle

#### Tipo di particella

Definisce la particella usata dalla forma. Per impostazione predefinita sarà la particella FLAME

```css
particle:{the particle type}
/* Example */
particle:CLOUD
```

Elenco delle particelle disponibili qui: [Elenco delle particelle di Spigot ](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

#### Colore

**Invece** di usare `particle:{particle name}`, se vuoi usare le particelle REDSTONE / DUST puoi usare direttamente l'impostazione color con un [colore personalizzato](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html).

Puoi impostare due colori separati da una , per ottenere una transizione di colore.

```css
color:{color Name}
/* Example one color */
color:RED
/* Example two colors with transition */
color:AQUA,BLUE
```

Puoi anche usare valori RGB per usare colori personalizzati nelle tue particelle SCore (0-255).

Esempio: `color:RGB-156-82-84`

#### Particelle di blocco

**Invece** di usare `particle:{particle name}`, se vuoi usare le particelle BLOCK\_CRACK / BLOCK puoi usare direttamente l'impostazione blockdata con un [materiale](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
blockdata:{material}
/* Example */
blockdata:LAVA
```

#### Particelle di item

**Invece** di usare `particle:{particle name}`, se vuoi usare le particelle ITEM\_CRACK/ ITEM puoi usare direttamente l'impostazione itemstack con un [materiale](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```css
itemstack:{material}
/* Example */
itemstack:DIAMOND_SHOVEL
```

### Offset / Spostare il punto di spawn della forma 

Puoi definire un offset in una direzione specifica, il che ti permette ad esempio di mostrare la forma attorno al player / all'entità, senza dover fare calcoli complessi.

* offsetPitch: la direzione pitch verso cui sarà orientato l'offset
* offsetYaw: la direzione yaw verso cui sarà orientato l'offset
* offsetSitance: la distanza dell'offset
* offsetX: aumenta l'offset sulla posizione X
* offsetY: aumenta l'offset sulla posizione Y
* offsetZ: aumenta l'offset sulla posizione Z

Per impostazione predefinita queste impostazioni valgono 0

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

## Impostazioni delle forme

### Atom

Crea un insieme di orbite ellittiche con una piccola sfera di particelle al centro, simile a un atomo.

* `orbits`: numero di orbite ellittiche.
* `radius`: raggio delle orbite in blocchi
* `rate`: numero di particelle per orbita.

```yaml
# Examples that you can run manually in-game
/score particles shape:atom color:BLUE,YELLOW orbits:4 radius:5.0 rate:100 offsetY:1
/score particles shape:atom particle:CLOUD orbits:10 radius:20.5 rate:100 offsetY:1
# Examples that you can include into your commands

```

### Atomic

Versione animata di `atom` con particelle in orbita.

* `orbits`: numero di percorsi orbitali.
* `radius`: raggio dell'orbita in blocchi.
* `rate`: velocità dell'orbita.
* `time`: durata in tick.

```yaml
# Examples that you can run manually in-game**
/score particles shape:atomic orbits:15 radius:5 rate:100 offsetY:1 time:200

# Examples that you can include into your commands
```

### BlackSun

Più cerchi concentrici di dimensione crescente.

* `radius`: raggio massimo in blocchi.
* `radiusRate`: differenza di raggio tra ogni cerchio.
* `rate`: densità delle particelle.
* `rateChange`: variazione della velocità per livello.

```yaml
# Examples that you can run manually in-game
/score particles shape:blacksun radius:10 radiusRate:0.5 rate:200 rateChange:10

# Examples that you can include into your commands
```

### BlackHole

Un effetto dinamico a vortice di particelle.

* `points`: numero di bracci a spirale.
* `radius`: distanza dal centro.
* `rate`: velocità di rotazione.
* `mode`: da 0 a 4 per diversi stili di vortice.
* `time`: durata in tick.

```yaml
# Examples that you can run manually in-game**
/score particles particle:SMOKE shape:blackhole points:30 radius:2.5 rate:1 mode:2 time:50

# Examples that you can include into your commands
```

### ChaoticDoublePendulum

Simula l'effetto di un doppio pendolo caotico.

* `radius`: raggio di oscillazione.
* `gravity`: forza di gravità (tipicamente -1).
* `length`, `length2`: lunghezze dei pendoli.
* `mass1`, `mass2`: massa di ciascun pendolo.
* `dimension3`: se usare la rotazione 3D.
* `speed`: velocità dell'animazione.
* `time`: durata in tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:chaoticDoublePendulum radius:2 gravity:-1 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
/score particles shape:chaoticDoublePendulum color:RED,YELLOW radius:1 gravity:-1 length:200 length2:2000 mass1:50 mass2:50 dimension3:true speed:2 time:200
/score particles shape:chaoticDoublePendulum particle:FLAME radius:2 gravity:5 length:200 length2:200 mass1:50 mass2:50 dimension3:false speed:2 time:200
# Examples that you can include into your commands
```

### Circle

Mostra un cerchio di particelle.

* `radius`: raggio del cerchio
* `density`: numero di particelle per blocco (più alto = più denso).
* `drawMode`: clockWise, counterClockWise, random
* `fillMode`: disk, spiral, ring
* `time`: tempo in tick per animare l'intera visualizzazione. (0 = istantaneo)
* `directionPitch`: direzione pitch del cerchio
* `directionYaw`: direzione yaw del cerchio

Esempi:

```yaml
# Examples that you can include into your commands
# Display multiple Green circles in front the player
playerCommands:
- FOR [+20,-20,+40,-40,+60,-60,+80,-80,+100,-100] > for3
- score particles shape:circle location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:3 density:100 time:10 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% fillMode:disk directionPitch:-90 offsetY:-1
- END_FOR for3
```

### CircularBeam

Raggio animato con cerchi la cui dimensione cambia nel tempo.

* `maxRadius`: raggio massimo del cerchio in blocchi.
* `rate`: frequenza dei punti per cerchio.
* `radiusRate`: variazione del raggio.
* `extend`: distanza di estensione in blocchi.
* `time`: durata in tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:circularBeam color:PURPLE maxRadius:5 rate:500 radiusRate:15 extend:1 time:100

# Examples that you can include into your commands
```

### Cone

Cono formato da cerchi impilati.

* `height`: altezza del cono.
* `radius`: raggio della base.
* `rate`: spaziatura tra i cerchi.
* `circleRate`: densità dei punti.
* `fillMode`: la modalità di riempimento "disk", "ring", "spiral", per impostazione predefinita è disk

```yaml
# Examples that you can run manually in-game
/score particles shape:cone color:GREEN,YELLOW height:3 radius:2 rate:0.4 circleRate:40 fillMode:ring

# Examples that you can include into your commands
```

### Crescent

Disegna una luna crescente usando due cerchi sovrapposti.

* `radius`: dimensione dell'arco esterno.
* `rate`: risoluzione della curva.
* `directionYaw`: direzione della mezzaluna in gradi

```yaml
# Examples that you can run manually in-game
/score particles shape:crescent radius:3 rate:100 directionYaw:90 color:RED,YELLOW

# Examples that you can include into your commands
```

### Cylinder

* `radius`: raggio del cilindro
* `height`: altezza del cilindro
* `density`: numero di particelle per blocco (più alto = più denso).
* `drawMode`: clockWise, counterClockWise, random
* `timeToDisplay`: tempo in tick per animare l'intera visualizzazione.
* `directionPitch`: direzione pitch del quadrato
* `directionYaw`: direzione yaw del quadrato

Esempi:

```yaml
# Examples that you can include into your commands
# Display two green cylinder in front of the player
- FOR [+20,-20] > for3
- score particles shape:cylinder location:%player_world_initial%,%player_x_initial%,%player_y_initial%,%player_z_initial% color:GREEN,WHITE radius:1 density:100 timeToDisplay:5 drawMode:clockwise offsetDistance:8 offsetPitch:0 offsetYaw:%player_yaw_initial%%for3%  directionYaw:%player_yaw_initial%%for3% directionPitch:-90 offsetY:-1 height:3
- END_FOR for3
```

### Diamond

Crea una forma a diamante (rombo) in 2D o 3D.

* `radiusRate`: controlla la larghezza.
* `rate`: spaziatura tra i punti.
* `height`: altezza totale.

```yaml
# Examples that you can run manually in-game
/score particles shape:diamond color:BLUE,AQUA radiusRate:0.6 rate:0.4 height:3

# Examples that you can include into your commands
```

### DNA

Mostra una doppia elica di DNA con legami a idrogeno.

* `radius`: raggio delle eliche.
* `rate`: spaziatura tra i punti.
* `extension`: fattore di allungamento dell'elica.
* `height`: altezza totale.

```yaml
# Examples that you can run manually in-game
/score particles shape:dna color:BLUE,AQUA radius:10 rate:0.1 height:4 extension:15

# Examples that you can include into your commands
```

### DNA Replication

Simula la replicazione del DNA con legami e colori.

* `radius`, `rate`, `extension`, `height`: come per `DNA`.
* `speed`: velocità dell'animazione.
* `hydrogenBondDist`: distanza tra i legami.

```yaml
# Examples that you can run manually in-game
/score particles shape:dnaReplication color:BLUE,AQUA radius:4 rate:0.2 height:3 extension:5 hydrogenBondDist:1 speed:1

# Examples that you can include into your commands
```

### Ellipse

* `start`, `end`: angoli di inizio e di fine.
* `rate`: spaziatura angolare.
* `radius`, `otherRadius`: raggi X e Y.

```yaml
# Examples that you can run manually in-game
/score particles shape:ellipse color:BLUE,AQUA radius:3 rate:0.8 otherRadius:2 start:50 end:200 offsetY:1

# Examples that you can include into your commands
```

### ExplosionWave

Animazione ondulata che rappresenta l'onda d'urto di un'esplosione.

* `rate`: densità delle particelle all'interno dell'onda.
* `start`: la distanza iniziale dal centro da cui parte l'onda.
* `height`: l'ampiezza verticale dell'onda.

```yaml
# Examples that you can run manually in-game
/score particles shape:explosionWave rate:5 start:-3 height:3
/score particles shape:explosionWave rate:5 height:1 offsetY:-1
/score particles shape:explosionWave rate:10
# Examples that you can include into your commands
```

### Eye

Disegna una forma ovale simile a un occhio.

* `radius`, `radius2`: raggi principali.
* `rate`: risoluzione.
* `extension`: fattore di allungamento
* `directionPitch`: direzione pitch dell'occhio
* `directionYaw`: direzione yaw dell'occhio

```yaml
# Examples that you can run manually in-game
/score particles shape:eye particle:INFESTED radius:2 radius2:2 extension:1 rate:100 directionYaw:-164

# Examples that you can include into your commands
```

### Heart

Disegna un cuore usando una curva polare.

* `cut`, `cutAngle`: regolano i lobi del cuore.
* `depth`: profondità dell'incavo centrale.
* `compressHeight`: compressione verticale.
* `rate`: risoluzione.
* `directionPitch`: direzione pitch del cuore
* `directionYaw`: direzione yaw del cuore

```yaml
# Examples that you can run manually in-game
/score particles shape:heart particle:HEART cut:4 cutAngle:2 depth:2 compressHeight:1 rate:100 offsetY:-1 directionYaw:-75

# Examples that you can include into your commands
```

### Helix

Disegna eliche 3D animate.

* `strings`: numero di eliche.
* `radius`: raggio dell'elica.
* `rate`, `extension`: spaziatura e intensità della spirale.
* `height`: altezza totale.
* `speed`: velocità dell'animazione.
* `fadeUp`, `fadeDown`: variazione graduale del raggio.

```yaml
# Examples that you can run manually in-game
/score particles shape:helix particle:TOTEM_OF_UNDYING strings:3 radius:2.5 rate:0.1 extension:2 height:3 speed:2 fadeUp:true fadeDown:true

# Examples that you can include into your commands
```

### Illuminati

Crea una forma 3D a simbolo di infinito.

* `size`: dimensione della forma.
* `extension`: l'estensione dell'occhio degli illuminati.

```yaml
# Examples that you can run manually in-game
/score particles shape:illuminati particle:SCULK_SOUL size:5 extension:15

# Examples that you can include into your commands
```

### Infinity

### MagicCircles

Mostra anelli in espansione simili a glifi magici.

* `radius`: raggio iniziale.
* `rate`: spaziatura dei punti.
* `radiusRate`: velocità di crescita.
* `distance`: spaziatura tra gli anelli.
* `time`: durata in tick.

```yaml
# Examples that you can run manually in-game
/score particles shape:magicCircles radius:1 rate:3 radiusRate:1 time:20

# Examples that you can include into your command
```

### MeguminExplosion

Effetto di esplosione magica stilizzata.

* `size`: dimensione complessiva dell'esplosione.

```yaml
# Examples that you can run manually in-game
/score particles shape:meguminExplosion color:RED size:5

# Examples that you can include into your commands
```

### Polygon

Disegna un poligono con connessioni interne opzionali

* `points`: numero di angoli.
* `connection`: quanti angoli collegare.
* `size`: raggio del poligono.
* `rate`: risoluzione.
* `extend`: fattore di estensione delle connessioni.

```yaml
# Examples that you can run manually in-game
/score particles shape:polygon points:5 connection:5 size:5 rate:1 extend:1

# Examples that you can include into your commands
```

### Rainbow

Mostra archi di arcobaleno impilati con livelli colorati.

* `radius`: raggio dell'arcobaleno
* `rate`: frequenza dei punti, più alto = più punti
* `curve`: curva, 1 verso l'alto e -1 verso il basso
* `layers`: numero di archi.
* `compact`: riduce la spaziatura tra gli archi.

```yaml
# Examples that you can run manually in-game
/score particles shape:rainbow radius:3 rate:100 curve:2 layers:1 compact:1

# Examples that you can include into your commands
```

### Ring

Disegna un anello piatto (corona circolare).

* `radius`: raggio dell'anello.
* `density`: densità delle particelle.
* `time`: durata della visualizzazione in tick.
* `drawMode`: ordine di disegno: clockWise, counterClockWise o random
* `directionPitch`: direzione pitch del cerchio
* `directionYaw`: direzione yaw del cerchio

```yaml
# Examples that you can run manually in-game
/score particles particle:SONIC_BOOM shape:ring radius:5 density:100 time:0

# Examples that you can include into your commands
```

### Sphere

Disegna una sfera 3D piena.

* `radius`: raggio della sfera.
* `rate`: densità dei punti

```yaml
# Examples that you can run manually in-game
/score particles particle:SNEEZE shape:sphere radius:5 rate:30

# Examples that you can include into your commands
```

### SpikeSphere

Disegna una sfera con spuntoni casuali.

* `radius`, `rate`: parametri della sfera di base.
* `chance`: probabilità di spuntone.
* `minRandomDistance`, `maxRandomDistance`: intervallo di lunghezza degli spuntoni.

```yaml
# Examples that you can run manually in-game
/score particles particle:GLOW shape:spikeSphere radius:4 rate:20 chance:30 minRandomDistance:2 maxRandomDistance:4

# Examples that you can include into your commands
```

### Square

* `height`: altezza in blocchi lungo l'asse verticale.
* `length`: lunghezza in blocchi lungo il vettore di direzione.
* `width`: larghezza in blocchi perpendicolare alla direzione del muro.
* `density`: numero di particelle per blocco (più alto = più denso).
* `timeToDisplay`: tempo in tick per animare l'intera visualizzazione.
* `drawMode`: "vertical" o "horizontal", controlla l'ordine di iterazione.
* `verticalOrder`: "up" o "down", ordine lungo l'altezza.
* `horizontalOrder`: "near" o "far", ordine lungo la lunghezza.
* `directionPitch`: direzione pitch del quadrato
* `directionYaw`: direzione yaw del quadrato

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

Crea una stella 3D con punte animate.

* `points`: numero di lati della base.
* `spikes`: numero di punte della stella.
* `rate`: quante visualizzazioni di punti
* `spikeLength`: lunghezza delle punte.
* `coreRadius`: raggio del nucleo.
* `neuron`: curvatura delle punte.
* `prototype`: usa eliche invece di linee.
* `speed`: velocità dell'animazione.

```yaml
# Examples that you can run manually in-game
/score particles shape:star points:5 spikes:5 rate:20 spikeLength:20 coreRadius:4 speed:1 neuron:3

# Examples that you can include into your commands
```

### Tesseract

Disegna un tesseract

* `size`: dimensione complessiva.
* `rate`: densità.
* `speed`: velocità.
* `time`: tempo di visualizzazione.

```yaml
# Examples that you can run manually in-game
/score particles shape:tesseract size:3 rate:100 speed:2 time:200 offsetY:2 particle:END_ROD

# Examples that you can include into your commands
```

### Vortex

Effetto a spirale simile a una galassia o a un tornado.

* `points`: numero di bracci a spirale.
* `rate`: velocità di rotazione.
* `time`: durata.

```yaml
# Examples that you can run manually in-game
/score particles shape:vortex particle:ENCHANT points:5 rate:25 time:100 offsetY:2

# Examples that you can include into your commands
```
