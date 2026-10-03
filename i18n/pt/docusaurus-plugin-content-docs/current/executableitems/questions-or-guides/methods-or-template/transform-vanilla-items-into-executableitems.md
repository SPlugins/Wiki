---
description: >-
  Veja como transformar itens vanilla em ExecutableItems no plugin
  ExecutableItems, com configuração do yml e testes no servidor.
source_hash: b79db1c5ed1a524c
translated_at: '2026-10-03T10:36:16.623Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Transformar Itens Vanilla em ExecutableItems

:::info
Antes de tudo, você precisa saber que esse método está disponível apenas na PREMIUM VERSION
:::

![](https://media.ssomar.com/m/docs-img-executable-items-color3.png)

### Vamos criá-lo, primeiro decida qual item vanilla você quer transformar.

* Para este tutorial será a **diamond\_sword**

![](https://media.ssomar.com/m/docs-img-image-96.png)

### **Agora, temos que criar o item que vai substituí-lo**

* Para criar um item, digite o comando `/ei create <id>`

![](https://media.ssomar.com/m/docs-img-image-194.png)

* Altere o Material do item para o item vanilla que você vai mudar (nesse caso, diamond\_sword)

![](https://media.ssomar.com/m/docs-img-image-168.png)

* Vamos criar um ativador

![](https://media.ssomar.com/m/docs-img-image-92.png)

* Para este exemplo será `PLAYER_CLICK_ON_ENTITY`

![](https://media.ssomar.com/m/docs-img-image-213.png)

* Clique detalhado para esquerda, para funcionar apenas ao acertar

![](https://media.ssomar.com/m/docs-img-image-272.png)

* E nos comandos eu vou colocar isso:

```yaml
playerCommands:
- SENDMESSAGE §6This is not a normal sword..
- PARTICLE FLAME 50 0.5 0
entityCommands:
- BURN 4
```

* Então, ao acertar, as espadas vão dizer _**This is not a normal sword**_ e a entidade vai queimar por 4 segundos
* OK! Temos o item pronto, você pode testá-lo se quiser (para ter certeza de que o Item EI funciona corretamente). Agora temos que fazer a... transformação 😈😈

### Transformando o item vanilla no EI Criado

* Para fazer isso, primeiro você precisa editar o yml do seu item.

:::info
Ele está em plugins/ExecutableItems/items/\<itemID>.yml
:::

![](https://media.ssomar.com/m/docs-img-image-195.png)

* Abra-o e adicione estas linhas (elas devem ficar sem identação/espaços do lado esquerdo)

```yaml
recognitions:
- MATERIAL
```

* Agora o ExecutableItems vai considerar que qualquer item que tenha o mesmo material do Item EI (que acabamos de criar) será o Item EI.
* Salve o \<item>.yml, entre no jogo e digite `/ei reload`

### Vamos testar

* Se fizemos cada etapa corretamente, agora temos que pegar uma diamond\_sword vanilla, se aproximar de uma vaca e acertá-la -> Ela deve queimar por 4 segundos, uma partícula vai aparecer e você vai receber uma mensagem.

![](https://media.ssomar.com/m/docs-img-image-245.png)

![](https://media.ssomar.com/m/docs-img-image-105.png)

![](https://media.ssomar.com/m/docs-img-image-73.png)![](https://media.ssomar.com/m/docs-img-image-181.png)

* Testado e funciona! Isso aí!!

:::info
Qualquer dúvida, você pode perguntar no Discord ^^

Método por Special70
:::
