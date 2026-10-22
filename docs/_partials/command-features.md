### detailedCommands

* Info: Feature for activators that involves commands, here you can select as condition the command the activator should run with.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    playerCommands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### registerCommand

* Info: Boolean value, `false` by default. Only for `PLAYER_WRITE_COMMAND`. Without it, the activator runs but the command does not exist for the server: the chat bar shows it in red and the server answers "Unknown command". With `registerCommand: true`, the commands of `detailedCommands` are registered on the server:
  * No more "Unknown command", and on 1.13+ the chat bar no longer shows the command in red.
  * Tab completion of the command name and of the words written after it in `detailedCommands` (`/promo summer` and `/promo winter` suggest `summer` and `winter`).
  * The registered command does nothing by itself: the activator still runs only once, like before.
  * It never replaces an existing command (a command of Minecraft or of another plugin): a warning is shown in the console, nothing is registered for this command, and the activator still runs when the command is written.
  * Several activators (or ExecutableItems and ExecutableEvents) can use the same command: it is registered once.
  * The registered commands follow the configs: they are updated after a reload, an editor save or a deletion, and removed when the plugin is disabled.
  * An activator with `registerCommand: true` but no `detailedCommands` registers nothing.
* Example:

```yaml
activators:
  activator1:
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - promo summer
    - promo winter
    registerCommand: true
    playerCommands:
    - SEND_MESSAGE &aPromo: %arg1%
```
