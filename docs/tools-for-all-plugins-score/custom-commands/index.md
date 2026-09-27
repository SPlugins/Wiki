# Custom Commands

Documentation for all custom commands available in the plugins.

:::warning Vanilla commands with a `#` tag
In YAML, a space followed by `#` starts a comment, even inside a command. `- execute if block ~ ~-1 ~ #minecraft:sand run say hi` is cut at `#` by the YAML reader before the plugin sees it. Put the line between quotes: `- 'execute if block ~ ~-1 ~ #minecraft:sand run say hi'`. (`@e[type=#minecraft:undead]` is fine: there is no space before the `#`.)
:::

import DocCardList from '@theme/DocCardList';

<DocCardList />