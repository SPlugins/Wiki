---
description: >-
  Daftar perintah campuran SCore yang berfungsi untuk pemain maupun entitas,
  seperti AROUND, DAMAGE, TELEPORT, dan PARTICLE, lengkap dengan contohnya.
source_hash: 8e288b53710ee67c
translated_at: '2026-11-13T17:54:02.208Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Perintah Campuran (Pemain & Entitas)

:::info
Perintah kustom ini berfungsi untuk Player, tetapi juga untuk Entity

Jadi di:
* playerCommands
* targetCommands
* entityCommands
* ownerCommands
* ...
:::

_Diurutkan secara alfabetis_

### ADD\_TEMPORARY\_ATTRIBUTE

* Info: Menambahkan atribut sementara ke pemain/entitas
* Pengaturan perintah:
    * `{attribute}` : [Daftar atribut](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html#field-summary)
    * `{amount}` : Nilai double yang akan dimiliki atribut sementara
    * `{operation}` : [Daftar operasi](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html#enum-constant-summary)
    * `{time in ticks}` : Lama waktu sebelum atribut berakhir
* Contoh:
  * `ADD_TEMPORARY_ATTRIBUTE GRAVITY 2 ADD_NUMBER 5`
  * `ADD_TEMPORARY_ATTRIBUTE attribute:SCALE amount:1.2 operation:ADD_NUMBER timeinticks:120`

### ALL\_PLAYERS

* Info: Menargetkan semua pemain.
* Pengaturan perintah: 
  * `{command}`: Perintah yang akan dijalankan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS SEND_MESSAGE Hello %parseother_`{%around_target%}`_`{player_name}`%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS SEND_MESSAGE %target% has been hit by %player%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS SEND_MESSAGE %entity% has been hit by %player%
```

Menjalankan beberapa perintah: berikan item acak ke semua pemain, setiap pemain tidak akan mendapat item yang sama.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_PLAYERS RANDOM_RUN selectionCount:1 <+> ei give %around_target% candy1 1 <+> ei give %around_target% candy2 1 <+> ei give %around_target% candy3 1 <+> RANDOM_END
```

### ALL\_MOBS

* Info: Menargetkan semua pemain.
* Pengaturan perintah: 
    * `{command(s)}`: Perintah yang akan dijalankan
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5
    - ALL_MOBS BLACKLIST(ZOMBIE,ARMORSTAND) DAMAGE 20
    - ALL_MOBS WHITELIST(ZOMBIE) DAMAGE 20

```

Menjalankan beberapa playerCommands:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - ALL_MOBS DAMAGE 5 <+> effect give %around_target_uuid% strength 10 1

```

:::info
Mendukung blacklist dan whitelist
:::

### AROUND

* Info: Menargetkan pemain dalam radius tertentu dan membuat mereka menjalankan perintah
* Pengaturan perintah:
  * `{distance}`: Seberapa jauh radius perintah ini memilih pemain (Default 3)
  * `{displayMsgIfNoPlayer}`: (true atau false) Untuk memberi tahu pengguna item apakah berhasil menargetkan pemain atau tidak (Default true)
  * `{throughBlocks}`: Menentukan apakah pemain yang berada di balik blok terpengaruh atau tidak (Default true)
  * `{safeDistance}`: Jika jarak antara target dan peluncur kurang dari atau sama dengan nilai safeDistance, maka target tidak akan terpengaruh. (Default 0)
  * `{offsetYaw}`: Arah yaw yang Anda inginkan untuk offset (Tidak bergantung pada nilai yaw origin)
  * `{offsetPitch}`: Arah pitch yang Anda inginkan untuk offset (Tidak bergantung pada nilai yaw origin)
  * `{offsetDistance}`: Setelah menghitung offsetYaw dan offsetPitch, dengan menggunakan nilai ini, posisi/titik pusat perintah AROUND akan dipindahkan dari lokasi xyz origin.
  * `{limit}`: Jumlah target yang dapat terpengaruh 
  * `{sort}`: Berguna untuk opsi limit. 
    * NEAREST : Memilih entitas yang paling dekat dengan origin.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
  * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar diperiksa dengan plugin claim lainnya)
  * `{commands}`: Perintah yang akan dijalankan untuk para pemain target.

:::tip
Anda dapat menambahkan **beberapa perintah** ! Gunakan pemisah `<+>`

Contoh: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholder:** Placeholder-nya sama dengan [Player Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#player-placeholders), tetapi Anda perlu mengganti "player" dengan "around\_target"

Contoh: %around\_target%, %around\_target\_uuid%
:::

:::info
**Jumlah target:** `%around_target_count%` memberikan jumlah pemain yang dipilih oleh perintah. Nilainya sama untuk setiap target, dan menghitung target yang tersisa setelah `distance`, `safeDistance`, `throughBlocks` dan `regionCheck` dan `limit`. `CONDITIONS(...)` yang diperiksa pada setiap target tidak diperhitungkan. Mendukung singkatan `+N` / `-N`: `%around_target_count%-1`.

Contoh: `AROUND distance:10 displayMsgIfNoPlayer:false SEND_MESSAGE &eYou are one of the %around_target_count% players hit !`
:::

* Contoh:

Ini memunculkan petir pada pemain dalam radius 20 blok

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:20 displayMsgIfNoPlayer:false execute at %around_target% run summon lightning_bolt
```

Mengirim pesan ke pemain pada jarak antara 5 dan 10 blok

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:true throughBlocks:true safeDistance:5 SENDMESSAGE &eIt is a test !
```

:::warning
Anda dapat menumpuk (nest) AROUND dengan perintah: AROUND, IF, NEAREST, ALL\_PLAYERS

Jika Anda melakukannya, pemisah dan placeholder akan berubah sesuai tingkat penumpukan.

pemisah perintah dasar : `<+>`

perintah tumpuk pertama : `<+::step1>`

... : `<+::step2>`; , `<+::step3>`, ...

placeholder dasar : %around\_target%

perintah tumpuk pertama : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:5 displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% <+::step1> DELAY 3 <+::step1> AROUND distance:5 displayMsgIfNoPlayer:false say &a(2)&e%around_target::step2%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND say &a(0)&e%around_target% <+> DELAY 3 <+> NEAREST 10 say &a(1)&e%around_target::step1%
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 throughBlocks:false displayMsgIfNoPlayer:false say &a(0)&e%around_target% <+> DELAY 3 <+> AROUND distance:5 displayMsgIfNoPlayer:false say &a(1)&e%around_target::step1% and x &c%around_target_x::step1% <+::step1> IF %around_target_x::step1%>10 say &aThe target &e%around_target_x::step2% <+::step2> effect give %around_target::step2% slowness 20
```

:::info
Anda dapat menambahkan **kondisi** placeholder kustom untuk menyesuaikan pemain yang ditargetkan

Format:  AROUND \<settings> CONDITIONS(\<conditions>) \<command>

     \<settings>  adalah pengaturan perintah

     \<conditions> adalah kondisi

Format kondisi:  CONDITIONS(%::\<my\_placeholder\_name>::%\<comparator>\<value>)

      \<my\_placeholder\_name> adalah nama placeholder

      \<comparator> Pembanding: "`<`", "`<=`", "`=`", "`>`", "`>=`"

      \<value> nilainya

 Anda dapat menambahkan beberapa kondisi dengan pemisah "&&"
:::

* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:10 CONDITIONS(%::player_health::%>10&#x26;&#x26;%::player_name::%=2Ssomar) SEND_MESSAGE &#x26;eclick'
```

:::info
Perlu diingat bahwa bagian CONDITIONS() mengurai placeholder di dalamnya dengan pemain yang dipilih oleh perintah AROUND. Jadi yang sebenarnya terjadi pada placeholder di atas adalah memeriksa apakah health target lebih besar dari 10 dan apakah pemain yang dipilih oleh perintah AROUND bernama "2Ssomar"
:::

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - AROUND distance:10 displayMsgIfNoPlayer:false CONDITIONS(%::parseother_`{%player%}`_`{betterteams_name}`::%!=%::betterteams_name::%) effect give %around_target% weakness 10 10 true
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'AROUND distance:2 CONDITIONS(%::player_name::%!=%player%) DAMAGE 15'
```

:::info
Placeholder yang berasal dari plugin seperti ExecutableItems, ExecutableBlocks tidak akan diurai oleh pemain yang terpengaruh oleh perintah AROUND.

Misalnya, dengan ExecutableBlocks, CONDITIONS(%var\_faction%=%::factionsuuid\_faction\_name::%) bekerja dengan memeriksa apakah nilai variabel factions milik blok sama dengan faction pemain yang ditargetkan\
Sumber placeholder: [PlaceholderAPI](https://factions.support/placeholderapi/))
:::

### BACK\_DASH

* Info: Meluncurkan pemain/target ke arah berlawanan dari arah yang sedang dihadapinya **(ANDA TIDAK BISA DILUNCURKAN DI UDARA)**
* Pengaturan perintah:
  * `{amount}`: Nilai yang menentukan seberapa kuat peluncurannya
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BACK_DASH 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BACK_DASH 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BACK_DASH 5
```

### BURN

* Info: Membakar pemain/target
* Pengaturan perintah:
 * `{timeinsecs}`: Lama pembakaran dalam detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - BURN 200
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - BURN 200
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - BURN 200
```

### CONSOLE\_MESSAGE

* Info: Mengirim pesan ke konsol
* Pengaturan perintah:
  * `{text}`: Teks yang akan dikirim ke konsol
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player%
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %target%
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CONSOLE_MESSAGE This is a debug message sent to the %player% triggered by %entity%
```

### COPY\_EFFECTS

* Info: Menyalin efek dari target
* Pengaturan perintah:
  * `[limitDuration]`: (Opsional) (default = tanpa batas) artinya jika target memiliki, misalnya, efek poison selama 3 menit, dan Anda membatasinya ke 5 detik, Anda hanya akan menerima efek poison selama 5 detik
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - COPY_EFFECTS 5 # Using this will copy the player's own effects
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - COPY_EFFECTS 5 # Using this will copy the target effects into the player
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - COPY_EFFECTS 5 # Using this will copy the entity effects into the player 
```

### CUSTOMDASH1

* Info: Meluncurkan Anda ke lokasi tertentu
* Pengaturan perintah:
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{fallDamage}`: true atau false. Menentukan apakah pemain akan menerima fall damage atau tidak setelah diluncurkan olehnya.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH1 %target_x% %target_y%+5 %target_z% true # This will dash up the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true # This will dash up the entity
```

Jika Anda memiliki aktivator yang terkait antara dua jenis target, Anda dapat melakukan ini

* Contoh 1 | Instance pemain - entitas | Melontarkan pemain ke arah entitas

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% true
    entityCommands: []
```

* Contoh 2 | Instance pemain - entitas | Melontarkan entitas ke arah pemain

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% true
```

* Contoh 3 | Instance pemain - blok | Melontarkan pemain ke arah blok

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% true
    blockCommands: []
```

Anda dapat meningkatkan kekuatan perintah dengan menjalankannya berkali-kali (tetapi tidak pada tick yang sama, harus dibedakan waktunya, jika tidak maka tidak masuk akal karena Anda membuat pemain melontar dari posisi yang sama menuju lokasi tersebut), contoh:

* Menjalankannya berkali-kali secara manual

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
```

* Menggunakan perintah utilitas LOOP START

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - 'LOOP START: 3'
    - CUSTOMDASH1 %player_x% %player_y%+5 %player_z% true # This will dash up the player
    - DELAYTICK 1
    - LOOP END
```

### CUSTOMDASH2

* Info: Meluncurkan Anda menjauh dari lokasi tertentu
* Pengaturan perintah:
  * `{x}`: Koordinat X
  * `{y}`: Koordinat Y
  * `{z}`: Koordinat Z
  * `{strength}`: Kekuatan dash
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH2 %player_x% %player_y%+5 %player_z% 5 # This will dash down the player with strength 5
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH2 %target_x% %target_y%+5 %target_z% 5 # This will dash down the target with strength 5
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH2 %entity_x% %entity_y% %entity_z% 5 # This will dash down the entity with strength 5
```

Jika Anda memiliki aktivator yang terkait antara dua jenis target, Anda dapat melakukan ini

* Contoh 1 | Instance pemain - entitas | Melontarkan pemain menjauh dari entitas

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands:
    - CUSTOMDASH1 %entity_x% %entity_y% %entity_z% 5
    entityCommands: []
```

* Contoh 2 | Instance pemain - entitas | Melontarkan entitas menjauh dari pemain

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and entity
    playerCommands: []
    entityCommands: 
    - CUSTOMDASH1 %player_x% %player_y% %player_z% 5
```

* Contoh 3 | Instance pemain - blok | Melontarkan pemain menjauh dari blok

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Activator instance of player and block
    playerCommands: 
    - CUSTOMDASH1 %block_x% %block_y% %block_z% 5
    blockCommands: []
```

### CUSTOMDASH3

* Info: Melontarkan target mengikuti fungsi matematika tertentu
* Pengaturan perintah:
  * `{function}`: Fungsi matematika yang diikuti. [Situs kalkulator fungsi](https://www.geogebra.org/calculator)
  * `{max x value}`: Nilai x maksimum dari fungsi
  * `{front z}`: Apakah dash ke depan atau ke belakang
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - CUSTOMDASH3 cosx 10 true
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - CUSTOMDASH3 cosx 10 true
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - CUSTOMDASH3 cosx 10 true
```

### DAMAGE

* Info: Memberi damage kepada pemain dengan jumlah tertentu. (Damage yang diberikan melalui perintah ini dihitung sebagai damage pemain)
  * Perintah ini memicu aktivator yang terkait dengan damage pada ExecutableItems dan ExecutableEvents
  *   Tipe damage Spigot adalah ENTITY\_ATTACK jika ada pemain yang terlibat pada aktivator.

      Jika tidak, tipe damage Spigot adalah CUSTOM
* Pengaturan perintah:
  * `{amount}`: Jumlah damage dalam hitpoint (Bukan dalam hati)
  * `{amplified If Strength Effect}`: true atau false, Strength 1 -> + 1.5 damage, ....
  * `{amplified with attack attribute}`: true atau false, akan mengambil jumlah semua atribut ATTACK_DAMAGE yang Anda miliki dengan operator `MULTIPLY_SCALAR_1`, mengalikannya berdasarkan attack damage Anda saat ini (termasuk efek strength jika diaktifkan)
  <br/>
  :::info
  Rumus:  
  `total damage` = (`amount` * `strength effect`) * (`sum of all of your attack damage attributes with the operator (add_multiplied_total/MULTIPLY_SCALAR_1)`+1) 
  :::
  * `{damageType}`: Tipe damage -> [Daftar DamageType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/damage/DamageType.html)
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE 25% # Will apply 25% of the max health of the entity as damage
```

:::info
Untuk memberikan damage sungguhan, Anda dapat menggunakan:\
\- 1.20.5++ gunakan perintah /minecraft\:damage, misalnya\
minecraft\:damage %target% 10 by %player%\
\
\- 1.20.5-- gunakan perintah REGAIN HEALTH, ini bukan cara terbaik tetapi merupakan solusi sementara.
:::

### DAMAGE\_NO\_KNOCKBACK

* Info: Memberi damage kepada pemain dengan jumlah tertentu tanpa menerapkan knockback. (Damage yang diberikan melalui perintah ini tidak dihitung sebagai damage pemain, melainkan lebih sebagai damage tidak langsung)
  * Perintah ini memicu aktivator yang terkait dengan damage pada ExecutableItems dan ExecutableEvents
  *   Tipe damage Spigot adalah ENTITY\_ATTACK jika ada pemain yang terlibat pada aktivator.

      Jika tidak, tipe damage Spigot adalah CUSTOM
* Pengaturan perintah:
  * `{amount}`: Jumlah damage dalam hitpoint (Bukan dalam hati)
  * `{amplified If Strength Effect}`: true atau false, Strength 1 -> + 1.5 damage, ....
  * `{amplified with attack attribute}`: true atau false, pemain dengan bonus damage 500%, perintah akan memberi 5 x "\<damage>".
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 20 true true # Apply 20 of damage to the entity 
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the player as damage
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the target as damage
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_NO_KNOCKBACK 25% # Will apply 25% of the max health of the entity as damage
```

### DAMAGE\_BOOST

* Info: Memungkinkan Anda memberi diri sendiri damage boost kustom
  * Perintah ini juga meningkatkan damage dari perintah kustom, misalnya (DAMAGE, DAMAGE\_NO\_KNOCKBACK)
  * Perintah ini tidak meningkatkan damage untuk projectile
* Pengaturan perintah:
  * `{modification in percentage example 100}`: Besar boost. Contoh di bawah:
    * 50 = Membuat Anda memberi damage +50%
    * -80 = Membuat Anda memberi damage -80%
  * `{timeinticks}`: Durasi damage boost kustom
* Contoh: (Perintah di bawah memberi Anda damage +50% selama 10 detik)

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player
  activator1: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of target
    targetCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the target
  activator2: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of entity
    entityCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the entity

```

Perintah ini dapat digunakan berkali-kali dan boost akan bertumpuk. Pada contoh ini Anda akan melihat bahwa pada \[0-10] detik pemain akan memberi damage 50% lebih besar, kemudian pada \[10-20] detik akan memberi damage 100% lebih besar, lalu pada \[20-30] detik damage 50% lebih besar, karena pada \[10-20] dua perintah DAMAGE\_BOOST saling bertumpuk.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
    - DELAY 10 # Delay of 10 seconds
    - DAMAGE_BOOST 50 200 # This will boost the damage of the player by 50% for 200 ticks (10 seconds)
```

### DAMAGE\_RESISTANCE

* Info: Memungkinkan Anda memberi diri sendiri damage resistance kustom dengan memberikan pengali damage yang diterima secara kustom
* Pengaturan perintah:
  * `{modification in percentage example 100}`: Besar pengali. Contoh di bawah:
    * 50 = Membuat Anda menerima damage +50%\
      -80 = Membuat Anda menerima damage -80%
  * `{timeinticks}`: Durasi damage resistance kustom
* Contoh: (Perintah di bawah membuat Anda menerima damage +50% selama 10 detik)

```yaml
- DAMAGE_RESISTANCE 50 200
```

### EQUIPMENT\_VISUAL\_REPLACE

* Info: Mengganti SECARA VISUAL (tidak ada risiko kehilangan item) sebuah slot equipment dengan material tertentu
  * Memerlukan [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
  * Visual ini ditampilkan kepada pemain yang melihat pemain / entitas tersebut (dan kepada pemain itu sendiri). Pemain yang mendekat belakangan juga akan melihatnya.
  * Sebuah entitas memiliki satu visual per slot: EQUIPMENT\_VISUAL\_REPLACE baru pada slot yang sama menggantikan yang sebelumnya, dengan waktu barunya. Visual berakhir setelah `{timeinticks}`, dengan EQUIPMENT\_VISUAL\_CANCEL, atau saat entitas mati, despawn atau pemain keluar.
* Pengaturan perintah:
  * `{EquipmentSlot}`: Slot
    * Opsi:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
  * `{material}`: ID item dari material yang ingin Anda gunakan sebagai pengganti atau ID EI
  * `{amount}`: Jumlah stack 
  * `{timeinticks}`: Berapa lama penyamaran ini berlangsung. (20 tick = 1 detik)
*   Contoh: 

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 CARVED_PUMPKIN 1 100
```

```yaml
- EQUIPMENT_VISUAL_REPLACE 39 EI:test 1 100
```

### EQUIPMENT\_VISUAL\_CANCEL

* Info: Membatalkan perintah EQUIPMENT\_VISUAL\_REPLACE
  * Berfungsi pada pemain dan mob: pemain yang melihat entitas tersebut akan mendapatkan kembali item aslinya di slot ini.
* Pengaturan perintah:
  * `{EquipmentSlot}`: Slot
    * Opsi:
      * -1
      * 40
      * 36
      * 37
      * 38
      * 39
* Contoh:

```yaml
- EQUIPMENT_VISUAL_CANCEL 39
```

### FORCE\_DROP

* Alias: `FORCEDROP`, `DROPSPECIFICEI`
* Info: Memaksa pemain/entitas menjatuhkan sebuah item. Mendukung dua mode:
  * **Mode slot**: menjatuhkan item di slot inventaris yang ditentukan
  * **Mode EI ID**: menjatuhkan semua item yang cocok dengan ID ExecutableItem yang diberikan dari inventaris (hanya untuk pemain)
* Pengaturan perintah:
  * `slot:`: angka, -1 untuk tangan utama (default: -1). Lihat gambar referensi slot di bawah.
  * `ei_id:`: ID dari ExecutableItem yang akan dijatuhkan (menggantikan mode slot jika diberikan)

![](https://media.ssomar.com/m/docs-img-slots-info.png)

* Contoh:

```yaml
# Drop the item in main hand
- FORCE_DROP slot:-1

# Drop the item in slot 5
- FORCE_DROP slot:5

# Drop all items with the EI id "excalibursword" from the player's inventory
- FORCE_DROP ei_id:excalibursword
```

### FRONTDASH

* Info: Meluncurkan pemain/target ke arah yang sedang dihadapinya
* Pengaturan perintah:
  * `{number}`: Nilai yang menentukan seberapa kuat peluncurannya
  * `{custom_y}` : Untuk mengatur dorongan vertikal (saya sarankan menggunakan nilai kecil seperti 0.5 - 1 jika Anda tidak ingin lompatan yang tinggi.)
  * `{falldamage}`: diatur untuk mengaktifkan atau menonaktifkan fall damage
* Contoh:

```yaml
- FRONTDASH 5 0.5 false
```

### GLACIAL\_FREEZE

* Info: Menerapkan efek freeze dari snow di Minecraft 1.18
* Pengaturan perintah:
 * `{time in ticks}`: Lama freeze dalam tick. (20 tick = 1 detik)
* Contoh:

```yaml
- GLACIAL_FREEZE 160
```

### GLOWING

* Info: Menerapkan efek glowing pada pemain
* Pengaturan perintah:
  * `{time in ticks}`: Durasi glow dalam tick
  * `{color}`: Warna yang akan dimiliki glow. [Referensi warna](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)
* Contoh:

```yaml
- GLOWING 100 BLUE
```

### HITSCAN\_ENTITIES

* Info: Memungkinkan menjalankan perintah ke entitas pada arah tertentu
* Pengaturan perintah:
  * `{range}`: seberapa jauh sebuah entitas boleh berada agar dapat ditargetkan oleh perintah HITSCAN
  * `{radiusOfHitscan}`: Seberapa LEBAR silindernya. Pada dasarnya ini adalah perbedaan antara menembakkan peluru dan menembakkan bola meriam.
  * `{pitch}`: Ke arah mana menembak, relatif terhadap pitch pemain
  * `{yaw}`: Sama seperti Pitch tetapi untuk yaw
  * `{leftRightShift}`:
    * -5 = hitscan DIMULAI dari 5 blok ke kiri.
    * 0 = Hitscan berpusat di tempat pemain berada.
    * 5 = hitscan DIMULAI dari 5 blok ke kanan pemain. 
  * `{yShift}`: Sama seperti kiri, kanan, tetapi dengan sumbu yang berbeda. 
  * `{throughEntities}`: Boolean: Apakah HITSCAN dapat menembus entitas atau tidak.
  * `{throughBlocks}`: Boolean: Apakah HITSCAN dapat menembus blok atau tidak.
  * `{limit}`: Jumlah target yang dapat terpengaruh
  * `{sort}`: Berguna untuk opsi limit.
    * NEAREST : Memilih entitas yang paling dekat dengan origin.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
  * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar diperiksa dengan plugin claim lainnya)
  * `{command(s)}`: Sama seperti perintah AROUND, Anda dapat mengetik `command1 <+> command2` ... dan menggunakan placeholder %around\_target%
* Contoh:

```yaml
HITSCAN_ENTITIES range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true HEAL 10 <+> BACKDASH 5
```

:::info
Perintah setelah `HITSCAN_ENTITIES` (dan setelah setiap `<+>`) dijalankan pada **setiap entitas yang terkena**, seperti perintah entitas: `REGAIN_HEALTH 4` memulihkan entitas yang terkena, bukan caster. Untuk memengaruhi caster, gunakan perintah vanilla dengan `%player%`, misalnya `HITSCAN_ENTITIES range:8 DAMAGE 4 <+> effect give %player% instant_health 1 0 true`.
:::
* Gambar untuk memahami:
![](https://media.ssomar.com/m/docs-img-hitscan-entities.png)

### HITSCAN\_PLAYERS

* Info: Memungkinkan menjalankan perintah ke pemain pada arah tertentu
* Pengaturan perintah:
  * `{range}`: seberapa jauh sebuah entitas boleh berada agar dapat ditargetkan oleh perintah HITSCAN
  * `{radiusOfHitscan}`: Seberapa LEBAR silindernya. Pada dasarnya ini adalah perbedaan antara menembakkan peluru dan menembakkan bola meriam.
  * `{pitch}`: Ke arah mana menembak, relatif terhadap pitch pemain
  * `{yaw}`: Sama seperti Pitch tetapi untuk yaw
  * `{leftRightShift}`:
    * -5 = hitscan DIMULAI dari 5 blok ke kiri.
    * 0 = Hitscan berpusat di tempat pemain berada.
    * 5 = hitscan DIMULAI dari 5 blok ke kanan pemain.
  * `{yShift}`: Sama seperti kiri, kanan, tetapi dengan sumbu yang berbeda.
  * `{throughEntities}`: Boolean: Apakah HITSCAN dapat menembus entitas atau tidak.
  * `{throughBlocks}`: Boolean: Apakah HITSCAN dapat menembus blok atau tidak.
  * `{limit}`: Jumlah target yang dapat terpengaruh
  * `{sort}`: Berguna untuk opsi limit.
    * NEAREST : Memilih entitas yang paling dekat dengan origin.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
  * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar diperiksa dengan plugin claim lainnya)
  * `{command(s)}`: Sama seperti perintah AROUND, Anda dapat mengetik `command1 <+> command2` ... dan menggunakan placeholder %around\_target%
* Contoh:

```yaml
- HITSCAN_PLAYERS range:5 radius:0 pitch:0 yaw:0 leftRightShift:0 yShift:0 throughBlocks:true throughEntities:true DAMAGE 5 <+> JUMP 5
```
* Gambar untuk memahami:
  ![](https://media.ssomar.com/m/docs-img-hitscan-players.png)

### INVULNERABILITY

* Info: Membuat pemain kebal untuk jangka waktu tertentu
* Pengaturan perintah:
 * `{ticks}`: Lama invulnerability dalam tick. (20 tick = 1 detik)
  * Mendukung nilai negatif untuk mengurangi waktu invulnerability, seperti yang didapat setelah terkena serangan.
* Contoh:

```yaml
- INVULNERABILITY 60
```

### JUMP

* Info: Meluncurkan pemain ke udara
* Pengaturan perintah:
  * `{number}`: Seberapa kuat peluncurannya
  * `{fall damage}`: (Opsional) (default = false) Pilih apakah perintah ini akan menyebabkan fall damage.
* Contoh:

```yaml
- JUMP 20
```

### LAUNCH\_ENTITY

* Info: Meluncurkan sebuah entitas ke arah Anda
* Pengaturan perintah:
  * `{entityType}`: ID mob dari entitas yang diluncurkan (HURUF KAPITAL SEMUA) [Daftar EntityType](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)
  * `{speed}`: (angka, Double) Menentukan kecepatan entitas
  * `[angle rotation y]`: (hanya untuk 1.14 ke atas) (Opsional) (default = 0) (dalam derajat) Menentukan arah peluncuran entitas
* Contoh:

```yaml
- LAUNCH_ENTITY PIG 2
```

* Contoh untuk membuat tri-shoot:

```yaml
- LAUNCH_ENTITY PIG 2
- LAUNCH_ENTITY PIG 2 15
- LAUNCH_ENTITY PIG 2 -15
```

### MLIB\_DAMAGE

* Info: Memberi damage ke target dengan tipe damage yang terutama berasal dari plugin MythicLib
* Pengaturan perintah:
  * `{number}`: Damage yang diberikan ke target (default: 10)
  * `{damage_type}`: Tipe damage yang ditimbulkan (default: PHYSICAL)
    * Contoh: MAGIC, PHYSICAL, WEAPON, SKILL, PROJECTILE, UNARMED, ON\_HIT, MINION, DOT;
  * `{knockback}`: true/false apakah target terkena knockback (default: false)
  * `{element}`: Menentukan jenis elemen serangan (default: FIRE)
    * Referensi: [Daftar elemen MythicLib](https://gitlab.com/phoenix-dvpmt/mythiclib/-/blob/master/mythiclib-plugin/src/main/resources/default/elements.yml?ref_type=heads)
  * `{crit}`: true/false apakah `CRITICAL_STRIKE_POWER` penyerang ditambahkan ke persamaan damage atau tidak (default: false)
    * Persamaan: `number * (number * (total critical_strike_power/100))`
* Contoh:

```yaml
- MLIB_DAMAGE 10 PHYSICAL false FIRE true
```

### MOB\_AROUND

* Info: Menargetkan entitas dalam radius tertentu dan membuat mereka menjalankan perintah
  * Entitas yang tersedia -> [Daftar LivingEntity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
* Pengaturan perintah:
  * `{distance}`: Seberapa jauh radius perintah ini memilih entitas
  * `{displayMsgIfNoEntity}`: (true atau false) Untuk memberi tahu pengguna item jika tidak berhasil menargetkan mob mana pun.
    * **Atur ke false untuk menyembunyikan pesan**
  * `{throughBlocks}`: Menentukan apakah mob yang berada di balik blok terpengaruh atau tidak
  * `{safeDistance}`: Jika jarak antara target dan peluncur kurang dari atau sama dengan nilai safeDistance, maka target tidak akan terpengaruh.
  * `{offsetYaw}`: Arah yaw yang Anda inginkan untuk offset (Tidak bergantung pada nilai yaw origin)
  * `{offsetPitch}`: Arah pitch yang Anda inginkan untuk offset (Tidak bergantung pada nilai yaw origin)
  * `{offsetDistance}`: Setelah menghitung offsetYaw dan offsetPitch, dengan menggunakan nilai ini, posisi/titik pusat perintah AROUND akan dipindahkan dari lokasi xyz origin.
  * `{limit}`: Jumlah target yang dapat terpengaruh
  * `{sort}`: Berguna untuk opsi limit.
    * NEAREST : Memilih entitas yang paling dekat dengan origin.
    * RANDOM : Memilih entitas mana pun secara acak dalam jangkauan perintah.
  * `{regionCheck}`: true/false. Jika true, perintah AROUND akan memeriksa apakah target berada di wilderness atau di claim milik caster (dalam konteks plugin GriefPrevention) (Akan segera diperbarui agar diperiksa dengan plugin claim lainnya)
  * `{nonliving}`: true/false. Jika true, perintah akan menargetkan entitas lain seperti Arrow dan Armor Stand. Bug apa pun yang terjadi saat menjalankan perintah entitas dengan argumen ini aktif kemungkinan besar akan diabaikan karena scope creep.
  * Anda dapat melakukan BLACKLIST atau WHITELIST entitas dengan menambahkan salah satu dari ini di mana saja pada perintah:
    * BLACKLIST(ZOMBIE,ARMOR\_STAND)
    * WHITELIST(CHICKEN)

:::tip
Anda dapat menambahkan **beberapa perintah** ! Gunakan pemisah `<+>`

Contoh: `minecraft:effect give .. <+> DELAY 5 <+>  DAMAGE 5`
:::

:::info
**Placeholder:** Placeholder-nya sama dengan [Entity Placeholders](https://splugins.net/docs/tools-for-all-plugins-score/placeholders#entity-placeholders), tetapi Anda perlu mengganti "player" dengan "around\_target"

Contoh: %around\_target%, %around\_target\_uuid%
:::

:::info
**Jumlah target:** `%around_target_count%` memberikan jumlah entitas yang dipilih oleh perintah. Nilainya sama untuk setiap target, dan menghitung target yang tersisa setelah `distance`, `safeDistance`, `throughBlocks`, `regionCheck` dan `WHITELIST(...)` / `BLACKLIST(...)` dan `limit`. `CONDITIONS(...)` yang diperiksa pada setiap target tidak diperhitungkan. Mendukung singkatan `+N` / `-N`: `%around_target_count%-1`.

Contoh: `MOB_AROUND distance:8 WHITELIST(ZOMBIE) DAMAGE %around_target_count%`
:::

* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:3 displayMsgIfNoEntity:true throughBlocks:true safeDistance:0 [conditions] COMMAND1 <+> COMMAND2 <+> ...
    - MOB_AROUND distance:3 displayMsgIfNoEntity:false BURN 10
    - MOB_AROUND distance:5 execute at %around_target_uuid% run summon lightning_bolt
    - MOB_AROUND distance:5 BLACKLIST(ZOMBIE,ARMOR_STAND) DAMAGE 20
    - MOB_AROUND distance:5 displayMsgIfNoEntity:false effect give %around_target_uuid% poison 10 10
    - MOB_AROUND distance:10 WHITELIST(ZOMBIE`{CustomName:"*"}`) say HELLO
```

Untuk menggunakan NBT entitas pada kolom WHITELIST/BLACKLIST, Anda perlu memasang plugin [NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

Mendukung [NBT Tags](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities) sehingga Anda dapat menambahkan, misalnya, sesuatu seperti: `ZOMBIE{IsBaby:1}` 

Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    option: # Here goes an activator that is at least instance of player
    playerCommands:
    - MOB_AROUND distance:7 BLACKLIST(ZOMBIE`{CustomName:"Test Test"}`,ZOMBIE`{CustomName:"Miyamoto"}`) false BURN 3
    - MOB_AROUND distance:5 WHITELIST(ZOMBIE`{IsBaby:1}`) DAMAGE 20
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:"%player%"}`) HEAL 5
    - MOB_AROUND distance:9 WHITELIST(WOLF`{Owner:%player_uuid%}`) HEAL 5
```

:::warning
Anda dapat menumpuk (nest) MOB\_AROUND dengan perintah: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Jika Anda melakukannya, pemisah dan placeholder akan berubah sesuai tingkat penumpukan.\

pemisah perintah dasar : `<+>`

perintah tumpuk pertama : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder dasar : %around\_target%

perintah tumpuk pertama : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### MOB\_NEAREST

* Info: Menargetkan mob terdekat dari pemain/target.
* Pengaturan perintah:
    * `{max accepted distance}`:  Jarak maksimum yang diterima untuk "entity".
    * `{command(s)}`: Perintah yang akan dijalankan

:::tip
Anda dapat menambahkan **beberapa perintah** ! Gunakan pemisah `<+>`

Contoh: `minecraft:effect give .. <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholder:** Placeholder-nya sama dengan [Entity Placeholders](/tools-for-all-plugins-score/placeholders#entity-placeholders), tetapi Anda perlu mengganti "player" dengan "around\_target"

Contoh: %around\_target%, %around\_target\_uuid%
:::

* Contoh:

Memberi damage kepada pemain terdekat

```yaml
- MOB_NEAREST 10 DAMAGE 5
```

:::warning
Anda dapat menumpuk (nest) MOB\_NEAREST dengan perintah: MOB\_AROUND, IF, MOB\_NEAREST, ALL\_MOBS

Jika Anda melakukannya, pemisah dan placeholder akan berubah sesuai tingkat penumpukan.\

pemisah perintah dasar : `<+>`

perintah tumpuk pertama : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder dasar : %around\_target%

perintah tumpuk pertama : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### NEAREST

* Info: Menargetkan pemain terdekat dari pemain/target.
* Pengaturan perintah:
    * `{max accepted distance}`: Jarak maksimum yang diterima untuk "target".
    * `{command}`: Perintah yang akan dijalankan

:::tip
Anda dapat menambahkan **beberapa perintah** ! Gunakan pemisah `<+>`

Contoh: `SEND_MESSAGE &cYou will be damaged in 5 seconds <+> DELAY 5 <+> DAMAGE 5`
:::

:::info
**Placeholder:** Placeholder-nya sama dengan [Player Placeholders](/tools-for-all-plugins-score/placeholders#player-placeholders), tetapi Anda perlu mengganti "player" dengan "around\_target"

Contoh: %around\_target%, %around\_target\_uuid%
:::

* Contoh:

Memberi damage kepada pemain terdekat

```yaml
- NEAREST 8 DAMAGE 5
```

:::warning
Anda dapat menumpuk (nest) NEAREST dengan perintah: AROUND, IF, NEAREST, ALL\_PLAYERS

Jika Anda melakukannya, pemisah dan placeholder akan berubah sesuai tingkat penumpukan.\

pemisah perintah dasar : `<+>`

perintah tumpuk pertama : `<+::step1>`

... : `<+::step2>` , `<+::step3>`, ...

\
placeholder dasar : %around\_target%

perintah tumpuk pertama : %around\_target::step1%

... : %around\_target::step2%, %around\_target::step3%, ...
:::

### OPMESSAGE

* Info: Mengirim pesan ke pemain OP yang sedang online dan ke konsol
* Pengaturan perintah:
  * `{text}`: Teks yang akan dikirim
* Contoh:

```yaml
- OPMESSAGE This is my debug message
```

### PARTICLE

* Info: Memunculkan partikel di lokasi pemain/target. [Daftar partikel](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)

* Pengaturan perintah:
  * `{type}`: Jenis partikel (HURUF KAPITAL SEMUA)
  * `{quantity}`: Jumlah partikel yang akan muncul
  * `{offset}`: Radius area tempat partikel dapat muncul di lokasi pemain/target
  * `{speed}`: Seberapa cepat atau seberapa besar partikelnya
* Contoh:

```yaml
- PARTICLE FIREWORKS_SPARK 10 0.1 0.5
```

### REGAIN\_HEALTH

* Info: Memberi Anda sejumlah HP tertentu
* Pengaturan perintah:
  * `{amount}`: Jumlah HP yang ingin Anda dapatkan
   * Mendukung nilai negatif jika Anda ingin memberikan "true damage". 
* Contoh:

```yaml
- REGAIN_HEALTH 10
- REGAIN_HEALTH -5
```

### REMOVE\_BURN

* Info: Memadamkan api yang membakar Anda
* Tanpa pengaturan perintah
* Contoh:

```yaml
- REMOVE_BURN
```

### REMOVE\_GLOW

* Info: Menghapus efek glowing dengan warna tertentu dari pemain | target.
* Pengaturan perintah:
 * `[color]`: (Opsional) (default = WHITE) Warna yang akan dihapus. [Referensi warna](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Contoh:

```yaml
- REMOVE_GLOW BLACK
```

### SET\_GLOW

* Info: Menambahkan efek glowing dengan warna tertentu ke pemain | target.
* Pengaturan perintah:
 * `[color]`: (Opsional) (default = WHITE) Warna yang akan dihapus. [Referensi warna](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/ChatColor.html)
* Contoh:

```yaml
- SET_GLOW BLACK
```

:::info
Kompatibel dengan plugin TAB menggunakan -> %score\_cmd-glow%
:::

### SET\_HEALTH

* Info: Mengatur health Anda ke jumlah tertentu
* Pengaturan perintah:
  * `{amount}`: Jumlah health yang ingin Anda atur
* Contoh:

```yaml
SET_HEALTH 10
```

### SET\_PITCH

* Info: Memaksa pemain menatap ke posisi pitch tertentu (-90/90 derajat, arah atas bawah)
* Pengaturan perintah:
  * `{pitch_number}`: Angka yang ingin Anda masukkan. Placeholder juga berfungsi
  * `{keepVelocity}`: Memungkinkan mempertahankan velocity pemain
* Contoh:

```yaml
- SET_PITCH 0 false
- SET_PITCH %target_pitch% false
```

### SET\_YAW

* Info: Memaksa pemain menatap ke posisi yaw tertentu (360 derajat, arah kiri kanan)
* Pengaturan perintah:
  * `{yaw_number}`: Angka yang ingin Anda masukkan. Placeholder juga berfungsi
  * `{keepVelocity}`: Memungkinkan mempertahankan velocity pemain
* Contoh:

```yaml
- SET_YAW 10 false
```

### SPIN

* Info: Memutar target
* Pengaturan perintah:
  * `{duration ticks}`: Durasi putaran
  * `{velocity}`: Kecepatan putaran
* Contoh:

```yaml
- SPIN 20 1
```

:::info
T: Bagaimana cara membekukan target/pemain/mob ?

J: jalankan **`SPIN {duration} 0`** sebagai contoh
:::

### STEAL

* Info: Mencuri item dari inventaris target
* Pengaturan perintah:
  * `{slot}`: -1 untuk tangan utama. Periksa referensi slot di bawah.
  * `[remove item]`: (Opsional) (default = true)
* Contoh:

```yaml
- STEAL 10
```

![](https://media.ssomar.com/m/docs-img-slots-info.png)

### STRIKELIGHTNING

* Info: Menyambar petir tanpa damage kepada pihak yang menjalankan perintah
* Tanpa pengaturan perintah 
* Contoh:

```yaml
- STRIKELIGHTNING
```

:::info
Ini tidak sama dengan perintah smite milik Essentials. Jika Anda ingin menyambar target Anda dengan petir, letakkan pada target commands atau entity commands bersama aktivator yang sesuai seperti `PLAYER_CLICK_ON_PLAYER`, misalnya.
:::

### STUN ENABLE/DISABLE

* Info: Mengaktifkan atau menonaktifkan stun untuk pemain (membuat Anda terbaring dan mencegah Anda menggerakkan kamera
* Perintah:
  * STUN\_ENABLE
  * STUN\_DISABLE
* Contoh:

```yaml
- STUN_ENABLE
- DELAY 5
- STUN_DISABLE
```

### TELEPORT

* Info: Memindahkan pemain/entitas ke lokasi tersebut
* Pengaturan perintah:
  * `{world}`: Dunia dari lokasi tujuan teleportasi
  * `{x}`: Koordinat x dari lokasi tujuan teleportasi.
  * `{y}`: Koordinat y dari lokasi tujuan teleportasi.
  * `{z}`: Koordinat z dari lokasi tujuan teleportasi.
  * `[pitch]`: (Opsional) (default = mempertahankan pitch pemain) pitch dari lokasi teleportasi
  * `[yaw]`: (Opsional) (default = mempertahankan yaw pemain) yaw dari lokasi teleportasi
  * `[keepVelocity]`: (Opsional) (default = true) Memungkinkan agar velocity pemain tidak dihentikan.
* Contoh:

```yaml
- TELEPORT ApocalypseWorld 70 70 70
```

### TELEPORT\_ON\_CURSOR

* Info: Memindahkan Anda ke posisi kursor Anda
* Pengaturan perintah:
  * `{range}`: Seberapa jauh Anda ingin berteleportasi
  * `{acceptAir}`: Agar dapat berteleportasi bahkan di udara, Anda perlu mengatur ini ke true
* Contoh:

```yaml
- TELEPORT_ON_CURSOR 8 true
```

### TRANSFER\_ITEM

* Info: Memindahkan sebuah item di dalam inventaris
* Pengaturan perintah:
  * `{slot of launcher}`: Slot item yang akan dipindahkan
  * `{slot of receiver}`: Slot tempat item akan mendarat
  ![](https://media.ssomar.com/m/docs-img-slots-info.png)
* Contoh:

```yaml
- TRANSFER_ITEM 38 40
```

### UNSAFE\_TELEPORT\_ON\_CURSOR

* Info: Memindahkan Anda ke posisi kursor Anda tanpa mempertimbangkan bahwa Anda mungkin berakhir di tempat yang mustahil
* Pengaturan perintah:
  * `[maxRange]`: (Opsional) (default = 200) Seberapa jauh Anda ingin berteleportasi
* Contoh:

```yaml
UNSAFE_TELEPORT_ON_CURSOR 20
```

### WORLD\_TELEPORT

* Info: Berteleportasi ke sebuah dunia pada lokasi yang sama
* Pengaturan perintah:
 * `{world}`: Nama dunia tempat Anda ingin memindahkan pemain/target.
* Contoh:

```yaml
- WORLD_TELEPORT spawn_end
```

## Perintah Animasi

* BREAK\_BOOTS\_ANIMATION
* BREAK\_CHESTPLATE\_ANIMATION
* BREAK\_HELMET\_ANIMATION
* BREAK\_LEGGINGS\_ANIMATION
* BREAK\_MAIN\_HAND\_ANIMATION
* BREAK\_OFF\_HAND\_ANIMATION
* HURT\_ANIMATION
* SWING\_MAIN\_HAND
* SWING\_OFF\_HAND
* TELEPORT\_ENDER\_ANIMATION
* TOTEM\_ANIMATION
