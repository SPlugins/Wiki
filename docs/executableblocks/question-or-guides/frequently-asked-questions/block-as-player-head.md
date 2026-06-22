# Block as player head

* If you'd like your ExecutableBlock to be a player head you need to first:
* Create an EI Item (ExecutableItem) /ei create \<id>
  * ![](https://media.ssomar.com/m/docs-img-image-346.png)
  * Set the material to PLAYER\_HEAD
  * Use the features related to it to add a texture to it (link below)

[Head Settings](/executableitems/configurations/item-configuration/item-features#head-settings)

* And once the EI Item is ready, create your EB Block. And inside the MAIN GUI
* On CreationType select IMPORT\_FROM\_EXECUTABLE\_ITEMS
![](https://media.ssomar.com/m/docs-img-image-365.png)
* And select the EI you created
    
* Then save and that's it, now your EB is a custom texture PLAYER\_HEAD