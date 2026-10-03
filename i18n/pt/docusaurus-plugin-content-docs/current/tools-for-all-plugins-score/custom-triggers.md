---
description: >-
  Aprenda a criar e agendar Custom Triggers para executar comandos
  automaticamente nos plugins SPlugins.
source_hash: 2eab89bbd32500f6
translated_at: '2026-10-03T10:34:35.763Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🔘 Custom Triggers

Custom Triggers são uma forma poderosa de armazenar e executar listas de comandos, seja manualmente através de comandos, seja automaticamente via um sistema de agendamento.

## Visão Geral

**Custom Triggers** permitem que você:
- ✅ Armazene sequências de comandos reutilizáveis
- ✅ Execute comandos manualmente com um comando de trigger simples
- ✅ Agende execução automática em horários específicos
- ✅ Passe argumentos para personalizar o comportamento
- ✅ Organize configurações complexas de comandos

## Início Rápido

### Passo 1: Crie o Ativador

1. Abra o editor do seu plugin (`/ei`, `/eb` ou `/ee`)
2. Crie um novo ativador
3. Selecione **CUSTOM_TRIGGER** como a opção
4. Adicione seus comandos na seção de comandos

### Passo 2: Execute o Trigger

Use o comando apropriado para o seu plugin:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Contexto de Comandos por Plugin

Cada plugin fornece contextos diferentes para a execução de comandos:

### 🗡️ ExecutableItems
- **Requisito:** O item deve estar no inventário do jogador
- **playerCommands disponíveis:** Comandos de jogador
- **Placeholders:** Placeholders baseados no jogador (`%player%`, etc.)

### 🧱 ExecutableBlocks
- **Requisito:** O bloco deve estar colocado
- **playerCommands disponíveis:** Comandos de bloco, comandos de dono (se habilitado)
- **Placeholders:** Placeholders de bloco e de dono

### 🎯 ExecutableEvents
- **Requisito:** Nenhum (dispara globalmente)
- **playerCommands disponíveis:** Apenas comandos de console
- **Placeholders:** Limitados (use argumentos para direcionar jogadores)

## Tipos de Trigger

### 1. Callable Triggers
Executados apenas via comando:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "say Hello World!"
```

### 2. Scheduled Triggers
Executados automaticamente em horários específicos:
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

## Sintaxe de Comandos

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parâmetro | Descrição | Obrigatório |
|-----------|-------------|----------|
| `trigger` | ID do ativador | ✅ Sim |
| `player` | Nome do jogador alvo | ❌ Não (atinge todos se omitido) |
| `slot` | Slot do inventário (-1 para mainhand) | ❌ Não |
| `args...` | Argumentos adicionais acessíveis via %arg0%, %arg1%, etc. | ❌ Não |

**Exemplos:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parâmetro | Descrição | Obrigatório |
|-----------|-------------|----------|
| `trigger` | ID do ativador | ✅ Sim |
| `block` | Localização do bloco (world,x,y,z) | ❌ Não (atinge todos se omitido) |
| `args...` | Argumentos adicionais | ❌ Não |

**Exemplos:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parâmetro | Descrição | Obrigatório |
|-----------|-------------|----------|
| `trigger` | ID do ativador | ✅ Sim |
| `args...` | Argumentos adicionais | ❌ Não |

**Exemplos:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Sistema de Agendamento

### Formato do Agendamento

O sistema de agendamento usa dois formatos para a temporização:

#### Formato 1: Baseado em Data/Hora
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Use `%%%%` para qualquer ano
- Use `%%` para qualquer mês/dia/hora/minuto
- Use `XX` para qualquer segundo
- Use `[value1,value2]` para múltiplos valores

#### Formato 2: Baseado em Semana
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` pode ser: MONDAY, TUESDAY, etc.

### Exemplos Comuns de Agendamento

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

## Exemplos Práticos

### Exemplo 1: Item de Recompensas Diárias

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

### Exemplo 2: Trigger de Evento do Servidor

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

### Exemplo 3: Sistema de Colheita de Bloco

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    playerCommands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Exemplo 4: Comandos de Jogador a partir de Eventos

Como os ExecutableEvents não têm um contexto de jogador, use argumentos:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Execute com: `/ee run-custom-trigger trigger:player_boost Steve`

## Boas Práticas

### ✅ FAÇA
- Use IDs de ativador únicos para evitar conflitos
- Teste os triggers manualmente antes de agendá-los
- Use argumentos para triggers flexíveis e reutilizáveis
- Organize sequências complexas de comandos em triggers

### ❌ NÃO FAÇA
- Usar IDs de ativador duplicados (todos serão disparados simultaneamente)
- Esquecer de verificar os contextos do plugin (comandos de jogador/bloco/console)
- Complicar demais configurações simples que não precisam de triggers

## Solução de Problemas

### O Trigger Não Está Executando
- ✅ Verifique se o ID do ativador corresponde exatamente
- ✅ Confira se o item/bloco/evento existe e está configurado corretamente
- ✅ Garanta as permissões corretas para a execução de comandos

### O Agendamento Não Está Funcionando
- ✅ Confira a sintaxe do formato de agendamento
- ✅ Verifique se o horário do servidor corresponde ao agendamento esperado
- ✅ Garanta que o intervalo de startDate/endDate inclua o horário atual

### Os Comandos Não Estão Executando
- ✅ Verifique o contexto do comando (jogador/bloco/console)
- ✅ Confira a disponibilidade de placeholders no contexto
- ✅ Teste os comandos manualmente primeiro

## Dicas Avançadas

### Encadeando Triggers
Crie sequências complexas fazendo com que triggers chamem outros triggers:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  playerCommands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Eventos Globais
Combine triggers de ExecutableEvents com triggers de outros plugins para eventos em todo o servidor:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Documentação Relacionada

- [Placeholders](/tools-for-all-plugins-score/placeholders)
