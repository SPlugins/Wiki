---
description: >-
  Veja como criar um ativador baseado em chance aleatória (RNG) no
  ExecutableItems, plugin da SPlugins, para simular esquiva de golpes.
source_hash: e2c9077e189d3702
translated_at: '2026-10-03T10:35:49.164Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Ativador RNG Chance

Bom, bom, há algum tempo eu queria uma Armadura NINJA e a ideia era.. ok, alguns golpes são esquivados e outros não, mas.. esse "esquivar" como fazer?, bem, depois de um bom tempo pensando, esse método surgiu, vamos explicar.

:::info
Este tutorial vai se basear no exemplo citado acima, mas a ideia é você entender a essência do método e aplicá-lo como quiser.
:::

### Vamos criar o item

:::info
O **item** em si precisa da versão premium + PlaceholderAPI + RNG Expansion
:::

![](https://media.ssomar.com/m/docs-img-image-204.png)

* Depois de adicionar o nome, a lore e o material..

![](https://media.ssomar.com/m/docs-img-image-237.png)

### Vamos criar o activator que vai fazer a mágica

* Então primeiro, a ideia é criar um RECEIVE_HIT_BY_GLOBAL e cancelar o evento.

<img src="https://media.ssomar.com/m/docs-img-imgur-ywpudsl.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-qj9rwav.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-tpgpdss.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-yi878ll.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-4wtkxti.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-bw6zczo.png" alt="" />

* Então agora, ele está cancelando TODO golpe recebido, para fazer com que às vezes cancele e às vezes não cancele, temos que fazer com que o próprio activator rode apenas algumas vezes, então, vamos adicionar uma condição relacionada com RNG, a essência é, um número aleatório entre 1 e 4, se der 1, o activator vai rodar, isso tem uma probabilidade de 25% (que é a probabilidade que queremos), vamos adicionar.
*

    <img src="https://media.ssomar.com/m/docs-img-imgur-riqfiao.png" alt="" />

<img src="https://media.ssomar.com/m/docs-img-imgur-6q81hpl.png" alt="" />

PLAYER_NUMBER

![](https://media.ssomar.com/m/docs-img-image-178.png)

E na primeira parte vamos adicionar "%rng_1,4%" (isso requer PlaceholderAPI e RNG Expansion)

![](https://media.ssomar.com/m/docs-img-image-111.png)

EQUALS

![](https://media.ssomar.com/m/docs-img-image-175.png)

"1" (porque queremos que ele dispare apenas se o número aleatório entre 1 e 4 der 1)

![](https://media.ssomar.com/m/docs-img-image-224.png)

E o item está pronto

:::info
PARA FINS DE DEBUG VOU ADICIONAR QUE O ACTIVATOR DIZ "dodge" E SE O PLACEHOLDER NÃO CORRESPONDER DIZ "didn't dodge".\
\
Assim, ao testarmos, vamos saber se está funcionando corretamente.
:::

![](https://media.ssomar.com/m/docs-img-image-378.png)

E funcionou, o activator só roda 1 a cada 4 vezes.

Se tiver alguma dúvida, sinta-se livre para perguntar no discord do EI, tenha um bom dia :P

## Como definir os valores corretos para obter a porcentagem que você quer

<iframe width="560" height="315" src="https://www.youtube.com/embed/jXTDlqoE8dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
