---
description: >-
  Scopri come creare proiettili personalizzati con l'editor in game di SCore e
  lanciarli con i comandi LAUNCH e LOCATED_LAUNCH.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T17:43:31.117Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Questa pagina ti aiuterà a scoprire come creare proiettili personalizzati e lanciarli.\
Abbiamo creato per te un editor in game per rendere la modifica semplice. **Usalo.**

:::info 
Per lanciarli è facile: usa i comandi [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) o [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Questi proiettili non possono essere dati ai giocatori.
:::

### Comandi:

| Comando                         | Funzione                                                              |
| ------------------------------- | --------------------------------------------------------------------- |
| /score projectiles              | Mostra tutti i proiettili e ti permette di modificarli                |
| /score projectiles-create \<id> | Apre l'editor per creare un nuovo proiettile                          |
| /score projectiles-delete \<id> | Azione per eliminare un proiettile (richiede conferma)                |
| /score reload                   | Ricarica il plugin (utile se modifichi un proiettile nel file .yml)   |

## **Informazioni di base**

### Tipo

Questa è la prima cosa da impostare: il tipo di proiettile che vuoi creare. Score supporta:

* ARROW
* SPECTRAL\_ARROW
* EGG
* ENDER\_PEARL
* FIREBALL
* SPLASH\_POTION
* SHULKER\_BULLET
* SNOWBALL
* TRIDENT
* WITHER\_SKULL
* DRAGON\_FIREBALL
* THROWNEXPBOTTLE
* WIND\_CHARGE
* LLAMASPIT
* FISHHOOK
* FIREWORK

Esempio:

```yaml
type: ARROW
```

### Nome personalizzato visibile

* Ti permette di mostrare il nome personalizzato sopra il proiettile
* Opzioni:
  * true
  * false
* Esempio:

```yaml
customNameVisible: true
```

### Nome personalizzato

* Questo è il NOME del proiettile, utile per customNameVisible e per i placeholder.
* Esempio:

```yaml
customName: '&eBullet'
```

### Fuoco visivo

* Opzione per permettere il fuoco visivo sul proiettile
* Esempio:

```yaml
visualFire: true
```

### Invisibile

* Indica se il proiettile sarà invisibile o meno. Richiede [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Stato di raccolta

* Opzione per configurare se il proiettile può essere raccolto
* Opzioni: [Stato di raccolta](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Esempio:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Bagliore

* Indica se il proiettile avrà l'effetto di bagliore o meno
* Opzioni:
  * true
  * false
* Esempio:

```yaml
glowing: true
```

### Rimbalzo

* Indica se il proiettile rimbalzerà sull'entità durante il suo stato di invulnerabilità.
* Opzioni:
  * true
  * false
* Esempio:

```yaml
bounce: true
```

### Gravità

* Indica se il proiettile sarà influenzato dalla gravità o meno
* Opzioni:
  * true
  * false
* Esempio:

```yaml
gravity: true
```

### Velocità

* Quanto sarà veloce il proiettile
  * <CustomTag type="version" version="1.20.5" /> Funziona anche su FIREBALL, WITHER\_SKULL e DRAGON\_FIREBALL: `2.0` vola al doppio della velocità, `1` mantiene la velocità vanilla. Prima della 1.20.5 mantengono la loro velocità vanilla.
* Esempio:

```yaml
velocity: 2.0
```

:::danger
IL DANNO DELL'**ARROW** SARÀ INFLUENZATO DA QUESTA OPZIONE

Equazione: `velocity x 1 = Arrow Damage`
:::

### Particelle

* Permette di modificare quali particelle verranno mostrate attorno al proiettile.
 * `particlesType`: Tipo di particella 
 * `particlesAmount`: Quante particelle emette ogni volta                                                                 
 * `particlesOffSet`: Quanto vicino al proiettile compariranno le particelle                                                                
 * `particlesSpeed`: Quanto velocemente si muoveranno le particelle                                                                 
 * `redstoneColor`: Cambia il colore della particella redstone. [Colori](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Quale blocco usa la particella. Solo per: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Densità delle particelle, utile quando vuoi una scia pulita del tuo proiettile

* Esempio:

```yaml
particles:
  1:
    particlesType: FLAME
    particlesAmount: 10
    particlesOffSet: 1
    particlesSpeed: 2
  2:
    particlesType: REDSTONE
    particlesAmount: 10
    particlesOffSet: 0.2
    particlesSpeed: 0.5
    redstoneColor: GRAY
  3:
    particlesType: BLOCK_DUST
    particlesAmount: 10
    particlesOffSet: 1.0
    particlesSpeed: 1.0
    particlesDelay: 1
    blockType: SPONGE
```

### Ritardo di despawn

* Quanto durerà la vita del proiettile, in secondi. (Supporta i decimali)
* Esempio:

```yaml
despawnDelay: 10
```

### Forza del knockback

* Quanto sarà forte il knockback che il proiettile infligge ai suoi bersagli
* Equazione:

`Knockback strength x 3` = Quantità di blocchi di cui il bersaglio viene respinto
```yaml
knockbackStrengt: 1
```

### Rimuovi quando colpisce un blocco

* Indica se il proiettile scompare quando colpisce un blocco
* Opzioni:
  * true
  * false
* Esempio:

```yaml
removeWhenHitBlock: true
```

## **Informazioni personalizzate**

* Tutte le informazioni seguenti sono limitate dal tipo di proiettile.

### Item visivo:

* Ti dà la possibilità di camuffare un proiettile con un item
* Proiettili disponibili:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Esempio:

```yaml
visualItem: diamond_sword
```

:::info
visualItem è compatibile con le teste personalizzate e con l'aggiunta di texture a quella testa
:::

#### Custom model data

* Anche visual item supporta il custom model data dell'item.

```yaml
customModelData: 37
```

#### Item Model

* Dalla 1.21.2 puoi modificare l'item model del proiettile.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critico

* Indica se il proiettile **ARROW** lascerà una scia di particelle critiche
* Opzioni:
  * true
  * false
* Esempio:

```yaml
critical: true
```

:::info
Solo per il proiettile ARROW
:::

#### Danno

* Quanto danno infliggerà la freccia
* Equazione:

`<Damage> x 3` = Danno della freccia 

* Predefinito: -1
* Esempio:

```yaml
damage: 10.0
```

:::info
Non usare valori negativi, non cambierà nulla.
:::

#### Livello di perforazione

* Quanti mob verranno colpiti da un singolo proiettile prima che scompaia
* Equazione:

`<PierceLevel> + 1` = Quantità di mob che verranno colpiti

* Se il valore è impostato a -1, scomparirà dopo aver colpito 1 mob.
* Esempio:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** impostato su **true** permette la modifica di Color. [Colori](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* È il colore che la freccia emetterà

```yaml
color: AQUA
```

#### Silenzioso

* Indica se la freccia emetterà rumore
* Opzioni:
  * true
  * false
* Esempio:

```yaml
silent: true
```

#### Suono d'impatto

<CustomTag type="paper" />
* Configura il suono che emetterà quando la freccia colpisce qualcosa. [Suoni](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funziona per ARROW, TRIDENT e SPECTRAL\_ARROW

* Esempio:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Carico

* Indica se il wither\_skull è carico o meno
* Opzioni:
  * true
  * false
* Esempio:

```yaml
charged: true
```

### Fireball

#### Raggio

* Raggio dell'esplosione
* Esempio

```yaml
radius: 3
```

#### Incendiario

* Indica se il proiettile fireball causerà fuoco o meno quando colpisce qualcosa
* Opzioni:
  * true
  * false
* Esempio:

```yaml
incendiary: true
```

### Firework

**Durata**

* Per quanto tempo il firework può durare prima di svanire (come il numero di polveri da sparo usate)
* Esempio:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Le impostazioni dei colori dell'esplosione del firework
* Esempio:

```yaml
fireworkExplosions:
    explosion_0:
      colors:
      - RGB-94-84-214
      fadeColors:
      - RGB-1-2-33
      type: BALL_LARGE
      hasTrail: true
      hasTwinkle: true
```

Per i colori puoi usare i normali [nomi dei colori](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) oppure `RGB-<0-255>-<0-255>-<0-255>`

## Configurazione YML

* Ci sono alcune funzionalità che per ora non sono modificabili in game

### Incantesimi (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Permette di incantare i tridenti.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Effetti di pozione (Splash potion)

* Permette di modificare gli effetti della splash potion. [Effetti di pozione](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

```yaml
potionEffects:
 1:
  potionEffectType: SPEED
  duration: 20
  amplifier: 2
 2:
  potionEffectType: INCREASE_DAMAGE
  duration: 10
  amplifier: 4
```

## Configurazione YAML completa

```yaml
type: TRIDENT
customNameVisible: false
customName: "Trident2"
visualFire: true
invisible: false
pickupStatus: DISALLOWED
glowing: true
critical: false
bounce: true
gravity: true
damage: -1
velocity: 1
knockbackStrength: -1
pierceLevel: -1
despawnDelay: 3
removeWhenHitBlock: false
enchantments:
  enchantment1:
    enchantment: unbreaking
    level: 1
  enchantment3:
    enchantment: mending
    level: 1
particles:
  1:
    particlesType: WATER_BUBBLE
    particlesAmount: 10
    particlesOffSet: 0.5
    particlesSpeed: 0.3
    particlesDelay: 1
#visualItem: DIAMOND_SWORD
#customModelData: 5
#critical: true
#charged: true
#radius: 3
#incendiary: true
#lifeTime: 3
#fireworkExplosions:
#    explosion_0:
#      colors:
#      - RGB-94-84-214
#      fadeColors:
#      - RGB-1-2-33
#      type: BALL_LARGE
#      hasTrail: true
#      hasTwinkle: true
```
