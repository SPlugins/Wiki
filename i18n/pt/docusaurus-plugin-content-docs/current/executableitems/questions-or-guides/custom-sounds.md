---
description: >-
  Guia do plugin ExecutableItems para criar e usar sons personalizados via
  resource pack no Minecraft.
source_hash: 66cf4b862fca2e2f
translated_at: '2026-10-03T10:35:33.944Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Sons Personalizados

:::info
Este método adiciona novos sons personalizados **sem** substituir nenhum som vanilla existente.
:::

Sons personalizados no Minecraft são gerenciados através de resource packs.

## Visão Geral

Para adicionar sons personalizados aos seus ExecutableItems, você vai precisar:
1. Criar um resource pack com seus arquivos de som personalizados
2. Configurar o arquivo sounds.json para registrar seus sons
3. Usar o comando /playsound no ExecutableItems para reproduzi-los

## Guia Passo a Passo

### Passo 1: Criar a Estrutura Básica do Resource Pack

Primeiro, crie a estrutura básica de pastas do resource pack:

```
RESOURCE_PACK/
  ├── assets/
  ├── pack.mcmeta
  └── pack.png
```

- `pack.mcmeta` (Contém os metadados do resource pack: versão, descrição)
- `pack.png` (O ícone do resource pack, opcional, mas recomendado)

### Passo 2: Adicionar a Pasta de Namespace Personalizado

Dentro da pasta `assets`, crie sua pasta de namespace personalizado. Deve ser um nome único para evitar conflitos:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/    # Your custom namespace
  ├── pack.mcmeta
  └── pack.png
```

:::tip Nomenclatura do Namespace
Escolha um namespace descritivo, como o nome do seu servidor ou plugin. Exemplos: `myserver`, `customitems`, `epicrpg`
:::

### Passo 3: Criar o sounds.json

Dentro da sua pasta de namespace personalizado, crie um arquivo `sounds.json`:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       └── sounds.json
  ├── pack.mcmeta
  └── pack.png
```

### Passo 4: Configurar o sounds.json

Edite `sounds.json` para registrar seus sons personalizados:

```json
{
  "epic_sword_slash": {
    "subtitle": "Epic Sword Slash",
    "sounds": [
      "customsounds:sword_slash1"
    ]
  },
  "magic_spell_cast": {
    "subtitle": "Magic Spell Cast",
    "sounds": [
      "customsounds:spell_cast1",
      "customsounds:spell_cast2"
    ]
  },
  "boss_roar": {
    "sounds": [
      "customsounds:dragon_roar"
    ]
  }
}
```

#### Estrutura do sounds.json Explicada

- **Sound ID** (ex.: `epic_sword_slash`): O nome que você vai usar nos comandos
- **subtitle**: Texto opcional exibido quando as legendas estão ativadas
- **sounds**: Array com os caminhos dos arquivos de som (sem a extensão .ogg)

:::info Caminhos dos Sons
`"customsounds:sword_slash1"` significa que o arquivo está localizado em:
`assets/customsounds/sounds/sword_slash1.ogg`

O formato é: `namespace:path_inside_sounds_folder`
:::

### Passo 5: Adicionar Seus Arquivos de Som

Crie uma pasta `sounds` dentro do seu namespace e adicione seus arquivos de som .ogg:

```
RESOURCE_PACK/
  ├── assets/
  │   ├── minecraft/
  │   └── customsounds/
  │       ├── sounds.json
  │       └── sounds/
  │           ├── sword_slash1.ogg
  │           ├── spell_cast1.ogg
  │           ├── spell_cast2.ogg
  │           └── dragon_roar.ogg
  ├── pack.mcmeta
  └── pack.png
```

:::warning Requisitos dos Arquivos de Som
- **Formato**: Deve ser formato .ogg (Ogg Vorbis)
- **Mono recomendado**: Stereo funciona, mas mono é melhor para áudio posicional
- **Taxa de amostragem**: 44.1 kHz ou 48 kHz recomendado
- **Tamanho do arquivo**: Mantenha os arquivos pequenos para downloads mais rápidos
:::

### Passo 6: Criar o pack.mcmeta

Crie seu arquivo `pack.mcmeta` com a formatação de versão correta:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "Custom sounds for MyServer"
  }
}
```

#### Versões do Pack Format

| Versão do Minecraft | pack_format |
|-------------------|-------------|
| 1.20.2 - 1.20.4   | 18          |
| 1.20 - 1.20.1     | 15          |
| 1.19.4            | 13          |
| 1.19 - 1.19.3     | 12          |
| 1.18 - 1.18.2     | 9           |

Verifique no google as outras versões

## Usando Sons Personalizados no ExecutableItems

Depois que seu resource pack for criado e aplicado, use o comando PLAYSOUND:

### Uso Básico

```yaml
activators:
  sword_attack:
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "minecraft:playsound customsounds:epic_sword_slash master @a"
```


### Som Posicional

```yaml
activators:
  boss_spawn:
    option: PROJECTILE_HIT_BLOCK
    blockCommands:
    - "minecraft:playsound customsounds:boss_roar master @a %block_x% %block_y% %block_z% %world%"
    # Plays at specific coordinates
```

## Convertendo Arquivos de Áudio para OGG

Se você tem arquivos em MP3, WAV ou outros formatos de áudio, você precisa convertê-los para OGG:

### Usando o Audacity (Gratuito)

1. Baixe o Audacity: https://www.audacityteam.org/
2. Abra seu arquivo de áudio
3. Opcional: Converta para mono (Tracks → Mix → Mix Stereo down to Mono)
4. File → Export → Export as OGG
5. Escolha as configurações de qualidade (qualidade 5-7 é um bom equilíbrio)

### Usando Conversores Online

- CloudConvert: https://cloudconvert.com/mp3-to-ogg
- Online-Convert: https://audio.online-convert.com/convert-to-ogg

## Implantando Seu Resource Pack

### Método 1: Resource Pack do Servidor (Recomendado)

Envie seu resource pack e configure em `server.properties`:

```properties
resource-pack=https://your-url.com/resourcepack.zip
resource-pack-sha1=<SHA1 hash>
require-resource-pack=true
```

:::tip Opções de Hospedagem
- Dropbox (obtenha o link direto)
- Google Drive (use um conversor de link de download)
- Servidor web próprio
- GitHub releases
:::

## Solução de Problemas

### Sons Não Reproduzem

**Problema**: Os comandos são executados, mas nenhum som é reproduzido

**Soluções**:
1. ✅ Verifique se o resource pack está aplicado (`/playsound` teste com um som vanilla)
2. ✅ Verifique se o arquivo de som está em formato .ogg (não .mp3, .wav, etc.)
3. ✅ Verifique a sintaxe do sounds.json (use um validador JSON)
4. ✅ Verifique se o caminho do arquivo corresponde exatamente (diferencia maiúsculas de minúsculas)
5. ✅ Teste com `/playsound customsounds:your_sound master @s`

### Resource Pack Não Carrega

**Problema**: O resource pack do servidor não é baixado pelos jogadores

**Soluções**:
1. ✅ Verifique se a URL do resource pack é um link de download direto
2. ✅ Verifique se a versão do pack.mcmeta corresponde à versão do servidor
3. ✅ Garanta que o tamanho do pack esteja abaixo de 100MB (limite do cliente)
4. ✅ Verifique se o hash SHA1 no server.properties corresponde ao arquivo

### Som Errado É Reproduzido

**Problema**: Um som diferente do esperado é reproduzido

**Soluções**:
1. ✅ Verifique se há IDs de som duplicados no sounds.json
2. ✅ Verifique se o namespace está correto e em minúsculas (customsounds: vs minecraft:)
3. ✅ Verifique se há erros de digitação nos nomes dos arquivos de som


## Documentação Relacionada

- [Resource Pack Format (Minecraft Wiki)](https://minecraft.wiki/w/Resource_Pack)
- [Lista de Ativadores](/executableitems/configurations/activator-configuration/list-of-the-activators)

## Recursos Adicionais

- **Download do Audacity**: https://www.audacityteam.org/
- **Efeitos Sonoros Gratuitos**:
  - Freesound: https://freesound.org/
  - Zapsplat: https://www.zapsplat.com/
- **Conversores OGG**: https://cloudconvert.com/mp3-to-ogg
- **Validador JSON**: https://jsonlint.com/
