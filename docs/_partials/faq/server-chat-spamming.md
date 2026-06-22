## First type of spam

First of all we have to explain that inside the activator you create for your ExecutableItems, in the commands section, as long as the command you write isn't one of the Custom Commands of EI, it will be run by the console, so, if its the case you use a vanilla command, such as:

* execute...
* effect give...
* particle...
* playsound....
* etc

The server will output in your chat what you are doing and will look like this:

![\[Server: \<action>\]](https://media.ssomar.com/m/docs-img-image-150.png)

If you want to disable this, you have to **set broadcast-console-to-ops to false in your server.properties file.**

:::info
The file "server.properties" is in inside the server folder.
:::

:::danger
****broadcast-console-to-ops**** IS NOT THE SAME THAN **broadcast-rcon-to-ops**
:::

## Second type of spam

If you are having the type of spam that looks in the photo, is because you are using SUDOOP command, **don't use it.**

:::tip
Check FAQ -> How to use vanilla commands and use the commands correctly.
:::

## Third type of spam

If the spam is on your console, just enable silenceOutput on your activator where your command is

## Other Kinds of Spam

For information's sake, if you don't know how to make LuckPerms not display logs for opped players or players who have the logging perms, run `/lp log notify off`

(Credits to: @dragonfeel.)