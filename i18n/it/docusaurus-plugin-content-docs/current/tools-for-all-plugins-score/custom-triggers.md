---
description: >-
  Scopri come usare i Custom Triggers in ExecutableItems, ExecutableBlocks ed
  ExecutableEvents: comandi richiamabili, programmazione ed esempi pratici.
source_hash: 2eab89bbd32500f6
translated_at: '2026-11-13T17:44:11.133Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

I Custom Triggers sono un modo potente per salvare ed eseguire elenchi di comandi, sia manualmente tramite comandi sia automaticamente grazie a un sistema di programmazione.

## Panoramica

I **Custom Triggers** ti permettono di:
- ✅ Salvare sequenze di comandi riutilizzabili
- ✅ Eseguire i comandi manualmente con un semplice comando di trigger
- ✅ Programmare l'esecuzione automatica a orari specifici
- ✅ Passare argomenti per personalizzare il comportamento
- ✅ Organizzare configurazioni di comandi complesse

## Guida rapida

### Passaggio 1: crea l'attivatore

1. Apri l'editor del tuo plugin (`/ei`, `/eb` o `/ee`)
2. Crea un nuovo attivatore
3. Seleziona **CUSTOM_TRIGGER** come opzione
4. Aggiungi i tuoi comandi alla sezione dei comandi

### Passaggio 2: esegui il trigger

Usa il comando appropriato per il tuo plugin:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Contesto dei comandi per plugin

Ogni plugin offre contesti diversi per l'esecuzione dei comandi:

### 🗡️ ExecutableItems
- **Requisito:** l'item deve trovarsi nell'inventario del giocatore
- **playerCommands disponibili:** comandi del giocatore
- **Placeholder:** placeholder basati sul giocatore (`%player%`, ecc.)

### 🧱 ExecutableBlocks
- **Requisito:** il blocco deve essere piazzato
- **playerCommands disponibili:** comandi del blocco, comandi del proprietario (se abilitati)
- **Placeholder:** placeholder del blocco e del proprietario

### 🎯 ExecutableEvents
- **Requisito:** nessuno (si attiva a livello globale)
- **playerCommands disponibili:** solo comandi della console
- **Placeholder:** limitati (usa gli argomenti per indicare il giocatore)

## Tipi di trigger

### 1. Trigger richiamabili
Eseguiti solo tramite comando:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Trigger programmati
Si eseguono automaticamente a orari specifici:
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    playerCommands:
    - "say It's 10 PM!"
```

## Sintassi dei comandi

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parametro | Descrizione | Obbligatorio |
|-----------|-------------|----------|
| `trigger` | ID dell'attivatore | ✅ Sì |
| `player` | Nome del giocatore bersaglio | ❌ No (se omesso, si applica a tutti) |
| `slot` | Slot dell'inventario (-1 per la mano principale) | ❌ No |
| `args...` | Argomenti aggiuntivi accessibili tramite %arg0%, %arg1%, ecc. | ❌ No |

**Esempi:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parametro | Descrizione | Obbligatorio |
|-----------|-------------|----------|
| `trigger` | ID dell'attivatore | ✅ Sì |
| `block` | Posizione del blocco (world,x,y,z) | ❌ No (se omesso, si applica a tutti) |
| `args...` | Argomenti aggiuntivi | ❌ No |

**Esempi:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parametro | Descrizione | Obbligatorio |
|-----------|-------------|----------|
| `trigger` | ID dell'attivatore | ✅ Sì |
| `args...` | Argomenti aggiuntivi | ❌ No |

**Esempi:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Sistema di programmazione

### Formato di programmazione

Il sistema di programmazione usa due formati per gestire i tempi:

#### Formato 1: basato su data/ora
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Usa `%%%%` per qualsiasi anno
- Usa `%%` per qualsiasi mese/giorno/ora/minuto
- Usa `XX` per qualsiasi secondo
- Usa `[value1,value2]` per più valori

#### Formato 2: basato sulla settimana
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` può essere: MONDAY, TUESDAY, ecc.

### Esempi comuni di programmazione

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Esempi pratici

### Esempio 1: item per le ricompense giornaliere

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    playerCommands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Esempio 2: trigger per un evento del server

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Esempio 3: sistema di raccolta con i blocchi

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Esempio 4: comandi del giocatore dagli eventi

Poiché ExecutableEvents non ha un contesto giocatore, usa gli argomenti:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Esegui con: `/ee run-custom-trigger trigger:player_boost Steve`

## Buone pratiche

### ✅ DA FARE
- Usa ID di attivatore univoci per evitare conflitti
- Prova i trigger manualmente prima di programmarli
- Usa gli argomenti per trigger flessibili e riutilizzabili
- Organizza le sequenze di comandi complesse in trigger

### ❌ DA NON FARE
- Non usare ID di attivatore duplicati (si attiveranno tutti contemporaneamente)
- Non dimenticare di controllare i contesti dei plugin (comandi del giocatore/blocco/console)
- Non complicare configurazioni semplici che non richiedono trigger

## Risoluzione dei problemi

### Il trigger non viene eseguito
- ✅ Verifica che l'ID dell'attivatore corrisponda esattamente
- ✅ Controlla che l'item/blocco/evento esista e sia configurato correttamente
- ✅ Assicurati di avere i permessi corretti per l'esecuzione dei comandi

### La programmazione non funziona
- ✅ Controlla la sintassi del formato di programmazione
- ✅ Verifica che l'ora del server corrisponda alla programmazione prevista
- ✅ Assicurati che l'intervallo startDate/endDate comprenda l'ora attuale

### I comandi non vengono eseguiti
- ✅ Verifica il contesto del comando (giocatore/blocco/console)
- ✅ Controlla la disponibilità dei placeholder nel contesto
- ✅ Prova prima i comandi manualmente

## Consigli avanzati

### Concatenare i trigger
Crea sequenze complesse facendo in modo che i trigger richiamino altri trigger:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Eventi globali
Combina i trigger di ExecutableEvents con i trigger di altri plugin per eventi a livello di server:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Documentazione correlata

- [Placeholder](/tools-for-all-plugins-score/placeholders)
