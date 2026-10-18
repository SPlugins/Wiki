---
description: Here you can read about the commands usage and its permissions
---

# ⌨️ Commands & Permissions

:::info
To give the permissions of all commands, I advice you to download a permission plugin like [**Luckperms**](https://www.spigotmc.org/resources/luckperms.28140/), once you have a perm plugin you just need to give the permission **`ec.*`**, for Luckperm the command is  **`/lp group default permission set ec.* true`**
:::

## Commands

#### Reload the plugin

* Command: **/ec reload**
* Permission: `ec.cmd.reload`

#### Create a new ExecutableCrafting recipe

* Command: **/ec create \<id>**
* Permission: `ec.cmd.create`

#### Edit a specific recipe

* Command: **/ec edit \<id>**
* Permission: `ec.cmd.edit`

#### Delete a ExecutableCrafting recipe

* Command: **/ec delete \<id>**
* Permission: `ec.cmd.delete`

#### Open the GUI Editor to create new ExecutableCraftings

* Command: **/ec show or /ec editor**
* Permission: `ec.cmd.show`

#### Create a new ExecutableCrafting recipe group

* Command: **/ec groups-create \<id>**
* Permission: `ec.cmd.groups-create`

#### Create a ExecutableCrafting recipe group

* Command: **/ec groups-delete \<id>**
* Permission: `ec.cmd.groups-delete`

#### Open a recipe book

* Command: **/ec book \<player> \<book>**
* Permission: `ec.cmd.book`

#### Activate the debug mode for yourself

* Command: **/ec debug** (run it again to turn it off)
* While it is on, each time you put items in a crafting grid (crafting table or inventory), you get an `[EC debug]` line in the chat:
  * `recipe matched`: the EC recipe that matches the grid, or `none`
  * `result now`: what is in the result slot after every plugin, or `empty`
  * `plugins after EC`: the plugins that act on the craft after ExecutableCrafting. If an EC recipe matched but the result is empty, its conditions failed or one of these plugins emptied the result.
  * `recipe book`: the state sent to the vanilla recipe book, see [accurateRecipeBook](/executablecrafting/configurations/general-configuration#accurate-vanilla-recipe-book)
* Permission: `ec.cmd.debug`
