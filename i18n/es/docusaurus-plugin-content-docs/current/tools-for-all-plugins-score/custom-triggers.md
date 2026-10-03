---
description: >-
  Guía de SPlugins sobre Custom Triggers: cómo almacenar, ejecutar y programar
  comandos en ExecutableItems, ExecutableBlocks y ExecutableEvents.
source_hash: 2eab89bbd32500f6
translated_at: '2026-10-03T10:32:49.946Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Los Custom Triggers son una forma potente de almacenar y ejecutar listas de comandos, ya sea manualmente mediante comandos o automáticamente a través de un sistema de programación.

## Descripción general

Los **Custom Triggers** te permiten:
- ✅ Almacenar secuencias de comandos reutilizables
- ✅ Ejecutar comandos manualmente con un comando trigger sencillo
- ✅ Programar la ejecución automática en momentos específicos
- ✅ Pasar argumentos para personalizar el comportamiento
- ✅ Organizar configuraciones de comandos complejas

## Inicio rápido

### Paso 1: Crea el activador

1. Abre el editor de tu plugin (`/ei`, `/eb` o `/ee`)
2. Crea un nuevo activador
3. Selecciona **CUSTOM_TRIGGER** como opción
4. Añade tus comandos en la sección de comandos

### Paso 2: Ejecuta el trigger

Usa el comando adecuado para tu plugin:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Contexto de comandos según el plugin

Cada plugin ofrece contextos diferentes para la ejecución de comandos:

### 🗡️ ExecutableItems
- **Requisito:** el ítem debe estar en el inventario del jugador
- **playerCommands disponibles:** comandos de jugador
- **Placeholders:** placeholders basados en el jugador (`%player%`, etc.)

### 🧱 ExecutableBlocks
- **Requisito:** el bloque debe estar colocado
- **playerCommands disponibles:** comandos de bloque, comandos de propietario (si está habilitado)
- **Placeholders:** placeholders de bloque y de propietario

### 🎯 ExecutableEvents
- **Requisito:** ninguno (se activa globalmente)
- **playerCommands disponibles:** solo comandos de consola
- **Placeholders:** limitados (usa argumentos para apuntar a jugadores)

## Tipos de trigger

### 1. Callable Triggers
Se ejecutan solo mediante comando:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Scheduled Triggers
Se ejecutan automáticamente en momentos específicos:
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

## Sintaxis de comandos

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|----------|
| `trigger` | ID del activador | ✅ Sí |
| `player` | Nombre del jugador objetivo | ❌ No (si se omite, apunta a todos) |
| `slot` | Slot del inventario (-1 para la mano principal) | ❌ No |
| `args...` | Argumentos adicionales accesibles mediante %arg0%, %arg1%, etc. | ❌ No |

**Ejemplos:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|----------|
| `trigger` | ID del activador | ✅ Sí |
| `block` | Ubicación del bloque (world,x,y,z) | ❌ No (si se omite, apunta a todos) |
| `args...` | Argumentos adicionales | ❌ No |

**Ejemplos:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|----------|
| `trigger` | ID del activador | ✅ Sí |
| `args...` | Argumentos adicionales | ❌ No |

**Ejemplos:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Sistema de programación

### Formato de programación

El sistema de programación usa dos formatos para la temporización:

#### Formato 1: basado en fecha y hora
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Usa `%%%%` para cualquier año
- Usa `%%` para cualquier mes/día/hora/minuto
- Usa `XX` para cualquier segundo
- Usa `[value1,value2]` para varios valores

#### Formato 2: basado en la semana
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` puede ser: MONDAY, TUESDAY, etc.

### Ejemplos de programación comunes

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

## Ejemplos prácticos

### Ejemplo 1: ítem de recompensas diarias

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

### Ejemplo 2: trigger de evento de servidor

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

### Ejemplo 3: sistema de cosecha de bloques

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Ejemplo 4: comandos de jugador desde eventos

Como ExecutableEvents no tiene contexto de jugador, usa argumentos:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Ejecútalo con: `/ee run-custom-trigger trigger:player_boost Steve`

## Buenas prácticas

### ✅ Haz esto
- Usa IDs de activador únicos para evitar conflictos
- Prueba los triggers manualmente antes de programarlos
- Usa argumentos para triggers flexibles y reutilizables
- Organiza secuencias de comandos complejas en triggers

### ❌ No hagas esto
- Usar IDs de activador duplicados (se activarán todos simultáneamente)
- Olvidar comprobar los contextos del plugin (comandos de jugador, bloque o consola)
- Complicar configuraciones simples que no necesitan triggers

## Solución de problemas

### El trigger no se ejecuta
- ✅ Verifica que el ID del activador coincida exactamente
- ✅ Comprueba que el ítem, bloque o evento exista y esté configurado correctamente
- ✅ Asegúrate de tener los permisos adecuados para ejecutar comandos

### La programación no funciona
- ✅ Comprueba la sintaxis del formato de programación
- ✅ Verifica que la hora del servidor coincida con la programación esperada
- ✅ Asegúrate de que el rango startDate/endDate incluya la hora actual

### Los comandos no se ejecutan
- ✅ Verifica el contexto del comando (jugador, bloque o consola)
- ✅ Comprueba la disponibilidad de placeholders en ese contexto
- ✅ Prueba los comandos manualmente primero

## Consejos avanzados

### Encadenar triggers
Crea secuencias complejas haciendo que unos triggers llamen a otros triggers:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Eventos globales
Combina triggers de ExecutableEvents con triggers de otros plugins para eventos a nivel de servidor:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Documentación relacionada

- [Placeholders](/tools-for-all-plugins-score/placeholders)
