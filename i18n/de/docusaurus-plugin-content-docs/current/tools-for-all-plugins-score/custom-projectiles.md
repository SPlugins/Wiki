---
description: >-
  Erfahre, wie Du in SCore Custom Projectiles erstellst, im Editor konfigurierst
  und mit den Befehlen LAUNCH und LOCATED_LAUNCH abfeuerst.
source_hash: 6fa479a1613c4cb0
translated_at: '2026-11-13T17:32:09.105Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

# 🏹 Custom Projectiles

Diese Seite hilft Dir dabei, Custom Projectiles zu erstellen und abzufeuern.\
Wir haben für Dich einen In-Game-Editor entwickelt, der die Bearbeitung einfach macht. **Nutze ihn.**

:::info 
Zum Abfeuern verwendest Du ganz einfach die Befehle [LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch) oder [LOCATED\_LAUNCH](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#located_launch). Diese Projectiles können nicht an Spieler vergeben werden.
:::

### Befehle:

| Befehl                          | Funktion                                                                 |
| ------------------------------- | ------------------------------------------------------------------------ |
| /score projectiles              | Zeigt Dir alle Projectiles an und lässt Dich sie bearbeiten              |
| /score projectiles-create \<id> | Öffnet den Editor, um ein neues Projectile zu erstellen                  |
| /score projectiles-delete \<id> | Aktion zum Löschen eines Projectiles (Bestätigung erforderlich)          |
| /score reload                   | Lädt das Plugin neu (nützlich, wenn Du ein Projectile in der .yml bearbeitest) |

## **Grundlegende Informationen**

### Type

Das ist das Erste, was Du festlegen musst: den Typ des Projectiles, das Du erstellen möchtest. Score unterstützt:

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

Beispiel:

```yaml
type: ARROW
```

### Custom name visible

* Damit kannst Du den Custom Name über dem Projectile anzeigen
* Optionen:
  * true
  * false
* Beispiel:

```yaml
customNameVisible: true
```

### Custom Name

* Das ist der NAME des Projectiles, nützlich für customNameVisible und Platzhalter.
* Beispiel:

```yaml
customName: '&eBullet'
```

### Visual fire

* Option, um visuelles Feuer am Projectile zu erlauben
* Beispiel:

```yaml
visualFire: true
```

### Invisible

* Legt fest, ob das Projectile unsichtbar ist oder nicht. Erfordert [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
```yaml
invisible: false
```

### Pickup status

* Option, um zu konfigurieren, ob das Projectile aufgehoben werden kann
* Optionen: [Pickup status](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/AbstractArrow.PickupStatus.html)
* Beispiel:

```yaml
pickupStatus: CREATIVE_ONLY # DISALLOWED, ALLOWED
```

### Glowing

* Legt fest, ob das Projectile den Leuchteffekt hat oder nicht
* Optionen:
  * true
  * false
* Beispiel:

```yaml
glowing: true
```

### Bounce

* Legt fest, ob das Projectile während seines unverwundbaren Zustands von der Entität abprallt.
* Optionen:
  * true
  * false
* Beispiel:

```yaml
bounce: true
```

### Gravity

* Legt fest, ob das Projectile von der Schwerkraft beeinflusst wird oder nicht
* Optionen:
  * true
  * false
* Beispiel:

```yaml
gravity: true
```

### Velocity

* Wie schnell das Projectile sein wird
  * <CustomTag type="version" version="1.20.5" /> Es funktioniert auch bei FIREBALL, WITHER\_SKULL und DRAGON\_FIREBALL: `2.0` fliegt doppelt so schnell, `1` behält die Vanilla-Geschwindigkeit bei. Vor 1.20.5 behalten sie ihre Vanilla-Geschwindigkeit.
* Beispiel:

```yaml
velocity: 2.0
```

:::danger
DER SCHADEN DES **ARROW** WIRD VON DIESER OPTION BEEINFLUSST

Formel: `velocity x 1 = Arrow Damage`
:::

### Particles

* Damit kannst Du bearbeiten, welche Partikel um das Projectile herum angezeigt werden.
 * `particlesType`: Partikeltyp 
 * `particlesAmount`: Wie viele Partikel jedes Mal ausgestoßen werden                                                                 
 * `particlesOffSet`: Wie nah am Projectile die Partikel erscheinen                                                                
 * `particlesSpeed`: Wie schnell sich die Partikel bewegen                                                                 
 * `redstoneColor`: Ändert die Farbe des Redstone-Partikels. [Farben](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)
 * `blockType`: Welcher Block für den Partikel verwendet wird. Nur für: BLOCK\_CRACK, BLOCK\_DUST, BLOCK\_MARKER
 * `particleDensity`: Dichte der Partikel, nützlich, wenn Du eine saubere Spur hinter Deinem Projectile möchtest

* Beispiel:

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

### Despawn delay

* Wie lange das Projectile in Sekunden existiert. (Dezimalzahlen werden unterstützt)
* Beispiel:

```yaml
despawnDelay: 10
```

### Knockback strength

* Wie stark der Rückstoß ist, den das Projectile bei seinen Zielen verursacht
* Formel:

`Knockback strength x 3` = Anzahl der Blöcke, um die das Ziel zurückgestoßen wird
```yaml
knockbackStrengt: 1
```

### Remove when hit block

* Legt fest, ob das Projectile verschwindet, wenn es einen Block trifft
* Optionen:
  * true
  * false
* Beispiel:

```yaml
removeWhenHitBlock: true
```

## **Custom-Informationen**

* Alle folgenden Informationen sind auf den jeweiligen Projectile-Typ beschränkt.

### Visual item:

* Damit kannst Du ein Projectile als Item tarnen
* Verfügbare Projectiles:
* **EGG**
* **ENDER\_PEARL**
* **SNOWBALL**

Beispiel:

```yaml
visualItem: diamond_sword
```

:::info
visualItem ist kompatibel mit Custom Heads und dem Hinzufügen von Texturen zu diesem Kopf
:::

#### Custom model data

* Visual item unterstützt auch Custom Model Data des Items.

```yaml
customModelData: 37
```

#### Item Model

* Seit 1.21.2 kannst Du das Item Model des Projectiles bearbeiten.

```yaml
itemModel: mypack:mymodel
```

### Arrow

#### Critical

* Legt fest, ob das **ARROW**-Projectile eine Spur aus Crit-Partikeln hinterlässt
* Optionen:
  * true
  * false
* Beispiel:

```yaml
critical: true
```

:::info
Nur für das ARROW-Projectile
:::

#### Damage

* Wie viel Schaden der Pfeil verursacht
* Formel:

`<Damage> x 3` = Pfeilschaden 

* Standard: -1
* Beispiel:

```yaml
damage: 10.0
```

:::info
Verwende keine negativen Werte, es ändert sich nichts.
:::

#### Pierce level

* Wie viele Mobs von einem einzelnen Projectile getroffen werden, bevor es verschwindet
* Formel:

`<PierceLevel> + 1` = Anzahl der Mobs, die getroffen werden

* Wenn der Wert auf -1 gesetzt ist, verschwindet es nach dem Treffen von 1 Mob.
* Beispiel:

```yaml
pierceLevel: 4
```

#### Active color | Color

* **Active color** auf **true** erlaubt die Bearbeitung von Color. [Farben](https://helpch.at/docs/1.12.2/org/bukkit/Color.html)

```yaml
activeColor: true
```

* Das ist die Farbe, die der Pfeil ausstrahlt

```yaml
color: AQUA
```

#### Silent

* Legt fest, ob der Pfeil Geräusche macht
* Optionen:
  * true
  * false
* Beispiel:

```yaml
silent: true
```

#### Hit sound

<CustomTag type="paper" />
* Konfiguriere den Sound, den der Pfeil abgibt, wenn er etwas trifft. [Sounds](https://jd.papermc.io/paper/1.21.8/org/bukkit/Sound.html)
* Funktioniert bei ARROW, TRIDENT und SPECTRAL\_ARROW

* Beispiel:

```yaml
hitSound: BLOCK_BELL_USE
```

### Wither skull

#### Charged

* Legt fest, ob der wither\_skull aufgeladen ist oder nicht
* Optionen:
  * true
  * false
* Beispiel:

```yaml
charged: true
```

### Fireball

#### Radius

* Radius der Explosion
* Beispiel

```yaml
radius: 3
```

#### Incendiary

* Legt fest, ob das FIREBALL-Projectile beim Treffen von etwas Feuer verursacht oder nicht
* Optionen:
  * true
  * false
* Beispiel:

```yaml
incendiary: true
```

### Firework

**Lifetime**

* Wie lange das Feuerwerk hält, bevor es verschwindet (wie viele Schwarzpulver verwendet wurden)
* Beispiel:

```yaml
lifeTime: 3
```

**fireworkExplosions:**

* Die Einstellungen für die Farben der Feuerwerksexplosion
* Beispiel:

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

Für die Farben kannst Du entweder die regulären [Farbnamen](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html) oder `RGB-<0-255>-<0-255>-<0-255>` verwenden

## YML-Config

* Einige Funktionen sind noch nicht im Spiel bearbeitbar

### Enchantments (TRIDENT)

<CustomTag type="version" version="1.16.4" />
* Ermöglicht es, Tridents zu verzaubern.

```yaml
enchantments:
 enchantment1:
   enchantment: unbreaking
   level: 1
 enchantment3:
   enchantment: mending
   level: 1
```

### Potion effects (Splash potion)

* Ermöglicht es, die Effekte des Splash-Tranks zu bearbeiten. [Potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)

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

## Vollständige YAML-Config

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
