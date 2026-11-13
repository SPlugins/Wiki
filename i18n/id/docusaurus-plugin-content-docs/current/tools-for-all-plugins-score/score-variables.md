---
description: >-
  Pelajari SCore Variables: simpan string, angka, dan list secara global atau
  per pemain, lengkap dengan perintah dan placeholder untuk SCore dan SPlugins.
source_hash: 03903712f9f8f788
translated_at: '2026-11-13T17:55:58.958Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# 🧮   SCore Variables

## SCore variables

Score memiliki integrasi variabel yang memungkinkan Anda menyimpan string/angka dalam variabel secara global atau per pemain. Variabel ini tidak terintegrasi di EI atau EB, tetapi terintegrasi sebagai perintah (sehingga dapat digunakan bersama EI / EB)

Variabel disimpan di `plugins/Score/variables`

### Tipe Variabel

| Tipe       | Penjelasan                                  |
| ---------- | ------------------------------------------- |
| **STRING** | Memungkinkan Anda menyimpan teks            |
| **NUMBER** | Memungkinkan Anda menyimpan angka           |
| LIST       | Memungkinkan Anda menyimpan beberapa nilai  |

### Cakupan Variabel (For)

| Tipe       | Penjelasan                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GLOBAL** | Variabel yang disimpan secara global berarti hanya ada satu nilai dan nilainya sama untuk semua orang                                                              |
| **PLAYER** | Variabel yang disimpan untuk setiap pemain berarti nilainya independen untuk setiap pemain. Jadi nilai dari dua pemain yang berbeda bisa saja tidak sama.          |

### Tipe Modifikasi

| Tipe             | Penjelasan                                                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **SET**          | Anda mengatur nilai statis pada variabel                                                                                                |
| **MODIFICATION** | Anda memodifikasi variabel (berguna untuk variabel INT, untuk menambah nilai pada nilai integer, atau mengurangi nilai tertentu)        |
| **LIST-ADD**     | Khusus untuk LIST, menambahkan nilai baru ke dalam list                                                                                 |
| **LIST-REMOVE**  | Khusus untuk LIST, menghapus nilai dari list                                                                                            |

:::danger
ID variabel tidak boleh mengandung garis bawah, titik, atau spasi, tetapi - diperbolehkan
:::

## Alat variabel

* /score variables list
  * Menampilkan semua ID variabel yang ada
* /score variables info \{variable-id\} \[player]
  * Menampilkan nilai dari variabel tertentu (Opsional: untuk pemain tertentu)
* /score variables-create \{variable-id\}
  * Membuat variabel baru dengan id yang disebutkan dan membuka editor in-game
* /score variables-define  \{variable-id\} \{type\_of\_variable\} \{for\} \[material\_icon] \[default\_values...]
  * Memungkinkan Anda membuat variabel baru menggunakan perintah
* /score variables-delete \{variable-id\}
  * Menghapus variabel dengan id yang disebutkan
* /score variables
  * Membuka editor in-game untuk variabel
* /score variables clear \{type\_of\_variable\} \{variable-id\} \[player]
  * Menghapus nilai variabel (Opsional: untuk pemain tertentu)
  * Jika Anda mengganti \[player] dengan **all,** nilai akan dihapus untuk semua pemain
* /score variables set-default \{variable-id\} \{value\}
  * Mengubah nilai default variabel (satu kata, tanpa spasi). Nilai ini disimpan di file variabel, sehingga tetap ada setelah reload
* /score variables \{modification\_type\} \{variable\_scope\} \{variable-id\} \{value\} \[player]
  * Memungkinkan Anda memodifikasi nilai variabel yang sudah ada.
  * Contoh:
    * **Variabel GLOBAL**:
      * /score variables SET GLOBAL exemple1 100
        * Mengatur nilai 100 pada variabel global exemple1
      * /score variables MODIFICATION GLOBAL plop 100
        * Menaikkan variabel global plop sebesar +100
      * /score variables MODIFICATION GLOBAL plop -50
        * Menurunkan variabel global plop sebesar -50
    * **Variabel PLAYER**
      * /score variables SET PLAYER my-variable -20 Ssomar
        * Mengatur nilai -20 pada variabel my-variable untuk pemain Ssomar
      * /score variables MODIFICATION PLAYER my-variable -50 Ssomar
        * Menurunkan variabel pemain my-variable sebesar -50 untuk Ssomar
    * **Contoh khusus untuk tipe LIST**
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT1 Ssomar
        * Menambahkan nilai ke dalam list
      * /score variables list-add PLAYER ThisIsTheNameOfMyVariable TEXT3 Ssomar index:0
        * Untuk menentukan posisi penambahan nilai ke dalam list, gunakan fitur index (0 adalah elemen pertama dari list, sehingga TEXT3 akan ditambahkan di awal list)
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar
        * Menghapus nilai terakhir
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar index:0
        * Menghapus index tertentu
      * /score variables list-remove PLAYER ThisIsTheNameOfMyVariable Ssomar value\:Test
        * Menghapus nilai tertentu

:::info
Variable-list juga berfungsi dengan variabel GLOBAL, tetapi Anda perlu mengganti PLAYER -> GLOBAL dan menghapus pemain dari perintah
:::

## Placeholder variabel

Ini membutuhkan [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).

* %score\_variables\_\<variable-id>%
* %score\_variables\_\<variable-id>\_int%

:::info
Karena placeholder variabel SCore didukung oleh PlaceholderAPI, Anda dapat menggunakan variabel SCore seperti ini:

`%math_{score_variables_userLevel}*10%`
:::

#### Placeholder khusus untuk LIST

* %score\_variables\_\<variable-id>\_\<index>%
  * Mengembalikan nilai pada index tertentu dari list
  * Index dapat berasal dari placeholder lain yang ditulis dalam tanda kurung, placeholder tersebut diurai terlebih dahulu: `%score_variables_myList_{score_variables_myIndex_int}%`
* %score\_variables\_\<variable-id>%
  * Mengembalikan semua elemen dari list
* %score\_variables-contains\_\<variable-name>\_\<value>%
  * Mengembalikan boolean untuk melihat apakah list berisi suatu nilai (true atau false)
* %score\_variables-size\_\<variable-name>%
  * Mengembalikan ukuran list

Yang dapat Anda lakukan dengan fitur ini -> Item yang dibuat oleh Ssomar

<details>

<summary>Terminator<br /><br />Ability : <br />- RIGHT CLICK to select entities<br />- SHIFT+RIGHT CLICK to explode them<br /><br />Anda harus membuat variabel terlebih dahulu, Anda dapat menggunakan perintah ini:<br />/score variables-define myList LIST PLAYER<br /></summary>


```yaml
# Le nom ou nom d'affichage
name: '&6&l>> &7Terminator stick &6&l<<'
# La description de l'item
lore:
- '&7Select entites by right'
- '&7clicking on them !'
- '&eLimit: &63 entities'
- '&e'
- '&7Then shift + right click'
- '&7to make them explode !'
# Le matériau
material: STICK
usage: 1
usageLimit: -1
config_5: true
config_update: true
# Fonctionnalités de nourriture
foodFeatures:
  # La nutrition de la nourriture
  nutrition: 1
  # La saturation de la nourriture
  saturation: 1
  # La nourriture est-elle de la viande?
  isMeat: false
  # Le joueur peut-il toujours manger cette nourriture?
  canAlwaysEat: false
# Les fonctionnalités de masquage
# Masquer:
# Attributs, Enchantements, ...
hiders:
  # Masquer l'utilisation
  hideUsage: true
# Les activateurs / déclencheurs
activators:
  activator0:
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - SWING_MAIN_HAND
    - LAUNCH DEFAULT_INVISIBLE_ARROW_NO_GRAVITY_SPEED
  activator5:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SENDMESSAGE &7You &cunselected &7the entity: &e%entity_name%'
    - score variables list-remove player myList %player% value:%entity_uuid%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'true'
    detailedEntities: []
    entityCommands: []
  activator2:
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% JUMP 1
    - END_FOR for1
    - DELAYTICK 5
    - FOR %score_variables_myList% > for1
    - score run-entity-command entity:%for1% DAMAGE 100
    - END_FOR for1
    - execute at %player% run playsound minecraft:entity.ender_dragon.death master
      @a
    - score variables clear player myList %player%
    - SEND_MESSAGE &7You &cpulverized &7the selected entities &7but you can do many
      other things let's talk your imagination
    #
    playerConditions:
      ifSneaking: true
      # The message displayed
      # when the condition is not met
      ifSneakingMsg: ''
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '0'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&7To execute the ability you must to &cselect at least
          1 entity'
  activator1:
    option: PROJECTILE_HIT_ENTITY
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands:
    - 'SEND_MESSAGE &7You &aselected &7the entity: &e%entity_name%'
    - score variables list-add player myList %entity_uuid% %player%
    # Les conditions placeholders
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        # La première partie de la condition
        part1: '%score_variables-contains_myList_%entity_uuid%%'
        # La deuxième partie de la condition
        part2: 'false'
      plchCdt1:
        type: PLAYER_NUMBER
        comparator: INFERIOR
        # La première partie de la condition
        part1: '%score_variables-size_myList%'
        # La deuxième partie de la condition
        part2: '3'
        # Message si la condition n'est pas valide?
        messageIfNotValid: '&4&l>> &7&oYou can''t select more than 3 entities'
    detailedEntities: []
    entityCommands: []
  activator3:
    # Le nom ou nom d'affichage
    name: cancelProjectileSelection
    option: PROJECTILE_HIT_ENTITY
    # Annuler l'événement vanilla
    cancelEvent: true
    # Les emplacements où
    # l'activateur fonctionnera
    detailedSlots:
    - -1
    playerCommands: []
    detailedEntities: []
    entityCommands: []
```


</details>

## ExecutableItems (Variabel item)

ExecutableItems memiliki integrasi variabel yang memungkinkan Anda menyimpan string/angka/list dalam variabel **di dalam** item. Dengan variabel ini Anda dapat membuat berbagai mekanik pada item Anda.

:::info
Ada cara untuk mengubah variabel di luar item, dengan menggunakan metode berikut:\
\

#### Memodifikasi variabel

* VIA KONSOL
  * Perintah: 
    * /ei console-modification \{set/modification\} variable \{player\} \{slot\} \{variableName\} \{value\}
* VIA dalam game
  * Perintah:
    * /ei modification \{set/modification\} variable \{slot\} \{variableName\} \{value\}
:::

Untuk melihat placeholder dari "Internal item variables", lihat di sini

## ExecutableBlocks (Variabel blok)

ExecutableBlocks memiliki integrasi variabel yang memungkinkan Anda menyimpan string/angka/list dalam variabel **di dalam** blok. Dengan variabel ini Anda dapat membuat berbagai mekanik pada blok Anda.

Untuk melihat placeholder dari "Internal item/block variables", lihat di sini
