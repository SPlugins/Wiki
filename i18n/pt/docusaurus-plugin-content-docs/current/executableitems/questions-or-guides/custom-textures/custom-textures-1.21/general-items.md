---
description: >-
  Guia completo do plugin SPlugins para criar texturas personalizadas de itens
  com Custom Model Data e resource packs no Minecraft.
source_hash: 0009e0522a21f996
translated_at: '2026-10-03T10:28:34.536Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Texturas Personalizadas de Itens (Minecraft 1.13 - 1.21.3)

Este guia completo vai te ensinar a criar texturas personalizadas para itens nas versões 1.13 a 1.21.3 do Minecraft usando Custom Model Data e resource packs.

:::warning Texturas de Armadura
Este tutorial **não** cobre a retextura de armaduras. Para armaduras, você vai precisar usar o OptiFine CIT (Custom Item Textures). Procure por "OptiFine armor retexturing" para tutoriais sobre esse método.
:::

:::danger Regras Importantes de Nomenclatura
**TODOS os nomes de arquivos e pastas DEVEM estar em minúsculas.**

Usar caracteres em maiúsculas vai fazer as texturas falharem ao carregar. Sempre use `custom_sword` em vez de `CustomSword`.
:::

## Tutorial em Vídeo

Se você preferir o formato vídeo, este tutorial é baseado no seguinte vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/y-t1YMslFLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pré-requisitos

- **Editor de Texto**: Use o Notepad++, VS Code, ou similar (NÃO o Bloco de Notas comum)
- **Editor de Imagem**: Photoshop, Paint.NET, GIMP, ou Paint 3D
- **Ferramenta de Compressão**: WinRAR, 7-Zip, ou a compressão nativa do sistema operacional
- **Conhecimento básico de JSON** (útil, mas não obrigatório)

:::tip Extensões de Arquivo
Nenhum dos arquivos que você cria é um arquivo `.txt`. Certifique-se de que seu editor consiga salvar tipos de arquivo específicos como `.json`, `.mcmeta`, e `.png`.
:::

## Parte 1: Configurando seu ExecutableItem

### Passo 1: Crie seu Item

Primeiro, crie o ExecutableItem que vai usar a textura personalizada:

```
/ei create my_custom_pickaxe
```

### Passo 2: Configure as Propriedades Básicas

Configure o nome de exibição do item, a lore e qualquer outra feature que você queira:

```
/ei edit my_custom_pickaxe
```

Exemplo de configuração:
- **Nome**: `&b&lCustom Pickaxe`
- **Material**: `DIAMOND_PICKAXE`
- **Lore**: Adicione qualquer texto descritivo

## Parte 2: Criando sua Textura

### Passo 3: Desenhe sua Imagem de Textura

Crie sua textura personalizada usando um editor de imagem:

**Requisitos:**
- **Formato**: PNG com suporte a transparência
- **Resolução**: 16x16 pixels (ou potência de 2: 32x32, 64x64, 128x128, etc.)
- **Nome do arquivo**: Use minúsculas com underscores (ex.: `custom_pickaxe.png`)

:::tip Resolução da Imagem
Embora 16x16 seja o padrão, você pode usar resoluções maiores como 32x32 ou 64x64 para texturas mais detalhadas. Apenas mantenha como uma potência de 2.
:::

Salve seu arquivo de textura, você vai precisar dele na próxima seção.

## Parte 3: Montando o Resource Pack

### Passo 4: Crie a Estrutura de Pastas

Crie a seguinte estrutura de pastas:

```
ExecutableItemsTexturePack/
├── pack.mcmeta
├── pack.png (optional)
└── assets/
    └── minecraft/
        ├── textures/
        │   └── item/
        │       └── custom_textures/
        │           └── custom_pickaxe.png
        └── models/
            └── item/
                ├── diamond_pickaxe/
                │   └── 1.json
                └── diamond_pickaxe.json
```

### Passo 5: Crie o pack.mcmeta

Na pasta raiz, crie `pack.mcmeta`:

```json
{
  "pack": {
    "pack_format": 15,
    "description": "§eExecutableItems Custom Textures"
  }
}
```

:::info Pack Format por Versão
Escolha o `pack_format` correto para sua versão do Minecraft:
- **15** = 1.20.5 - 1.21.1
- **34** = 1.20.2 - 1.20.4
- **18** = 1.20 - 1.20.1
- **15** = 1.19.4
- **13** = 1.19.3
- **12** = 1.19 - 1.19.2
- **9** = 1.18 - 1.18.2
- **8** = 1.17 - 1.17.1
- **6** = 1.16.2 - 1.16.5

Veja a [lista completa de pack format](https://minecraft.wiki/w/Pack_format) para todas as versões.
:::

### Passo 6: Adicione seu Arquivo de Textura

1. Navegue até `assets/minecraft/textures/item/custom_textures/`
2. Coloque seu arquivo PNG de textura aqui (ex.: `custom_pickaxe.png`)

### Passo 7: Identifique o Material do Item Base

Você precisa saber o ID do Minecraft do item base:

1. Pressione **F3 + H** no Minecraft para ativar os Advanced Tooltips
2. Passe o mouse sobre o item para ver seu ID (ex.: `minecraft:diamond_pickaxe`)
3. Use a parte depois dos dois pontos para os nomes de arquivo (ex.: `diamond_pickaxe`)

![ID do item mostrado com Advanced Tooltips](https://media.ssomar.com/m/docs-img-image-185.png)

:::warning Crítico: Use o ID do Minecraft
O nome do arquivo DEVE corresponder ao ID do item do Minecraft, não:
- ❌ O nome de exibição do seu item
- ❌ O nome do seu arquivo de textura
- ❌ O ID do seu ExecutableItem
- ✅ O ID do material do Minecraft (ex.: `diamond_pickaxe`)
:::

### Passo 8: Crie o Arquivo de Modelo Base

Em `assets/minecraft/models/item/`, crie `diamond_pickaxe.json`:

```json
{
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": "minecraft:item/diamond_pickaxe"
    },
    "overrides": [
        {
            "predicate": {
                "custom_model_data": 1
            },
            "model": "item/diamond_pickaxe/1"
        }
    ]
}
```

**Entendendo os campos:**

- `"parent"`: Tipo de modelo base
  - Use `"generated"` para a maioria dos itens
  - Use `"handheld"` se o item parecer errado quando segurado
- `"layer0"`: Textura padrão do vanilla
- `"overrides"`: Array de mapeamentos de custom model data
- `"custom_model_data"`: O número que você vai definir no ExecutableItems
- `"model"`: Caminho para o seu arquivo de modelo personalizado

:::tip Múltiplas Texturas Personalizadas
Para adicionar mais texturas personalizadas para o mesmo item, adicione mais entradas de override:

```json
"overrides": [
    {
        "predicate": {
            "custom_model_data": 1
        },
        "model": "item/diamond_pickaxe/1"
    },
    {
        "predicate": {
            "custom_model_data": 2
        },
        "model": "item/diamond_pickaxe/2"
    },
    {
        "predicate": {
            "custom_model_data": 3
        },
        "model": "item/diamond_pickaxe/3"
    }
]
```
:::

### Passo 9: Crie o Arquivo de Modelo Personalizado

1. Crie a pasta: `assets/minecraft/models/item/diamond_pickaxe/`
2. Crie o arquivo: `1.json` dentro dessa pasta

Conteúdo de `1.json`:

```json
{
    "parent": "item/handheld",
    "textures": {
        "layer0": "item/custom_textures/custom_pickaxe"
    }
}
```

**Entendendo o caminho da textura:**

O valor de `"layer0"` é um caminho relativo a `assets/minecraft/textures/`:
- Caminho: `item/custom_textures/custom_pickaxe`
- Caminho completo: `assets/minecraft/textures/item/custom_textures/custom_pickaxe.png`

:::danger Erro Comum: Caminho de Textura Incorreto
O erro mais comum é configurar o caminho errado em `layer0`. Verifique novamente se:
1. O caminho corresponde à sua estrutura de pastas
2. Você não incluiu a extensão `.png`
3. O caminho começa de dentro da pasta `textures/`
:::

### Passo 10: Empacote o Resource Pack

#### Para Windows (WinRAR/7-Zip):
1. Selecione `pack.mcmeta` e a pasta `assets`
2. Clique com o botão direito → Adicionar ao arquivo / Compactar
3. Escolha o formato `.zip`
4. Nomeie como `ExecutableItemsTexturePack.zip`

#### Para Mac/Linux:
1. Selecione `pack.mcmeta` e a pasta `assets`
2. Compacte em ZIP usando a compressão nativa
3. Ou coloque em uma pasta e use assim mesmo para testes locais

![Criando arquivo ZIP](https://media.ssomar.com/m/docs-img-image-244.png)

![Mudar para o formato .ZIP](https://media.ssomar.com/m/docs-img-image-158.png)

### Passo 11: Instale o Resource Pack

1. Coloque o arquivo `.zip` em `.minecraft/resourcepacks/`
2. Abra o Minecraft
3. Vá em Options → Resource Packs
4. Ative seu pack clicando na seta

## Parte 4: Conectando o ExecutableItems à Textura

### Passo 12: Defina o Custom Model Data

Edite seu ExecutableItem:

```
/ei edit my_custom_pickaxe
```

Navegue até a configuração de `customModelData` e defina para corresponder ao seu override:

![Configuração de Custom Model Data](https://media.ssomar.com/m/docs-img-image-163.png)

Defina o valor como `1` (ou qualquer número que você tenha usado no override):

![Definindo valor como 1](https://media.ssomar.com/m/docs-img-image-61.png)

**No arquivo de config, fica assim:**

```yaml
customModelData: 1
```

### Passo 13: Teste sua Textura Personalizada

Dê o item para você mesmo:

```
/ei give my_custom_pickaxe
```

Agora você deve ver sua textura personalizada!

![Textura personalizada no inventário](https://media.ssomar.com/m/docs-img-image-364.png)

![Textura personalizada quando segurado](https://media.ssomar.com/m/docs-img-image-392.png)

## Resolução de Problemas

| Problema | Solução |
|---------|----------|
| **Textura não aparece** | Verifique se todos os nomes de arquivo estão em minúsculas |
| **Textura roxa/preta** | Verifique se o caminho de `layer0` corresponde à localização da sua textura |
| **Pack não carrega** | Verifique se `pack_format` corresponde à sua versão do Minecraft |
| **Aparência errada do item** | Mude `"generated"` para `"handheld"` no parent do modelo |
| **Item parece vanilla** | Verifique se `customModelData` no EI corresponde ao número do seu override |

## Dicas Avançadas

### Organizando Múltiplas Texturas

Crie subpastas para diferentes tipos de item:

```
custom_textures/
├── weapons/
│   ├── sword_fire.png
│   └── sword_ice.png
├── tools/
│   └── pickaxe_emerald.png
└── misc/
    └── wand_magic.png
```

Atualize seus caminhos de acordo:
```json
"layer0": "item/custom_textures/weapons/sword_fire"
```

### Usando Modelos 3D

Para modelos 3D criados no [Blockbench](https://www.blockbench.net/):

1. Crie seu modelo no Blockbench
2. Exporte como "Java Block/Item"
3. Substitua o conteúdo do seu `1.json` pelo modelo exportado
4. Certifique-se de que os caminhos de textura correspondem à estrutura do seu pack

### Implantação no Servidor

Para usar texturas personalizadas em um servidor, você vai precisar hospedar o resource pack online. Veja nosso [Guia de Upload do Texture Pack](./uploading-texture-pack.md) para instruções.

## Baixar Pack de Exemplo

Se você estiver com dificuldade para seguir os passos, baixe este pack de exemplo para ver a estrutura correta:

[Baixar ExecutableItemsTexturePackExample.zip](/img/ExecutableItemsTexturePackExample.zip)

## Recursos Adicionais

- [Minecraft Wiki: Resource Pack](https://minecraft.wiki/w/Resource_pack)
- [Minecraft Wiki: Model Format](https://minecraft.wiki/w/Model)
- [Histórico de Versões do Pack Format](https://minecraft.wiki/w/Pack_format)
- [Blockbench, Editor de Modelos 3D Gratuito](https://www.blockbench.net/)

---

Precisa de ajuda? Entre na nossa [comunidade do Discord](https://discord.gg/ExecutableItems) e pergunte nos canais de suporte!
