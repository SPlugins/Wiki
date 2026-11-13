---
description: >-
  Pelajari opsi aktivator di ExecutableItems: nama tampilan, cooldown, kebutuhan
  (required), cancelEvent, silenceOutput, dan modifikasi variabel.
source_hash: a103e5315ef03316
translated_at: '2026-11-13T17:57:29.310Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
import CustomTag from '@site/src/components/CustomTag';

### Display name of the activator

* Info: Nilai string dari nama tampilan aktivator. Nilai ini tidak terlalu berguna, hanya digunakan oleh developer untuk membedakan satu aktivator dari aktivator lainnya. Nilai ini juga muncul pada pesan default "timeLeft" di dalam file locale.yml.
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Usage modification of the activator <CustomTag type="premium" />

* Info: Fitur yang sangat penting, nilai usage dari item akan dimodifikasi oleh nilai integer ini. Artinya, jika nilai ini positif maka usage akan bertambah, dan jika nilai ini negatif maka usage akan berkurang.
* Contoh: (Menambah nilai usage sebanyak 1 setiap kali aktivator ini dipicu)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Variables modification

* Info: Daftar modifikasi variabel yang diterapkan pada variabel di dalam item Anda. Berguna, misalnya, untuk menambah nilai sebuah variabel, menimpa nilai lama sebuah variabel dengan nilai lain, dan sebagainya.
  * `variableName`: Nama variabel yang menjadi target variableModification
  * `type`: Tipe variableModification yang Anda gunakan
    * SET: Menimpa nilai lama variabel dan menetapkan nilai modifikasi.
    * ADD: Menerapkan operasi matematika pada nilai variabel saat ini menggunakan nilai modifikasi. Variabel harus bertipe NUMBER. Jika nilai modifikasi positif maka nilai variabel akan bertambah, jika negatif maka akan berkurang.
    * LIST\_ADD: Diterapkan pada variabel bertipe LIST, menambahkan nilai modifikasi ke daftar variabel.
    * LIST\_CLEAR: Diterapkan pada variabel bertipe LIST, mengosongkan daftar variabel.
    * LIST\_REMOVE: Diterapkan pada variabel bertipe LIST, menghapus nilai modifikasi dari daftar variabel.
  * `modification`: Nilai modifikasi. Nilai ini diterapkan pada variabel sesuai tipe modifikasi.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Hati-hati saat menggunakan placeholder di sini! Tidak ada masalah dengan hal itu, pastikan saja hasil yang dikembalikan adalah NUMBER, jika tidak, Anda perlu menggunakan fitur STRING. Misalnya, mari kita perbarui sebuah variableModification dengan variabel lain yang kita tahu mengembalikan NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### cancelEvent

* Info: Nilai boolean yang menunjukkan apakah event yang terkait dengan aktivator akan dibatalkan atau tidak.
  * Ini bisa sulit dipahami, saya rasa ini salah satu hal yang paling sering tidak dipahami orang. Untuk menjelaskannya, Anda perlu tahu bahwa setiap ACTIVATOR terkait dengan sebuah event Minecraft. Mengikuti ide ini, event tersebut terjadi lalu ACTIVATOR dipicu. Jika kita mengaktifkan cancelEvent, yang merupakan fitur dari aktivator, artinya event terjadi, lalu hampir bersamaan aktivator dipicu dan membatalkan event tersebut. Jadi aktivator tetap menjalankan semua fitur yang diaktifkan, tetapi event-nya tidak benar-benar terjadi karena dibatalkan. Contohnya:
    * Jika aktivatornya PLAYER\_HIT\_PLAYER dan kita mengaktifkan cancelEvent, maka pemain tidak akan bisa memukul pemain lain karena semua pukulan dibatalkan/diabaikan.
    * Jika aktivatornya PLAYER\_BLOCK\_BREAK dan kita mengaktifkan cancelEvent, maka pemain tidak akan bisa menghancurkan blok karena event-nya dibatalkan/diabaikan. 
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### noActivatorRunIfTheEventIsCancelled

* Info: Nilai boolean yang, jika diaktifkan, mencegah aktivator berjalan jika plugin lain sudah membatalkan event yang memicunya.
  * Ini berguna jika Anda memiliki plugin seperti WorldGuard yang membatalkan event damage (misalnya di zona non-PvP) atau ExecutableItems lain yang membatalkan event damage (misalnya sepatu bot dengan PLAYER\_RECEIVE\_HIT\_GLOBAL + cancelEvent). Tanpa fitur ini, aktivator seperti PLAYER\_BEFORE\_DEATH tetap akan terpicu meskipun damage dibatalkan, karena aktivator tersebut bereaksi terhadap perhitungan damage mentah, bukan hasil akhirnya.
  * Kasus penggunaan yang umum adalah item Totem of Undying kustom yang menggunakan PLAYER\_BEFORE\_DEATH. Tanpa fitur ini diaktifkan, totem akan aktif dan habis terpakai bahkan saat pemain berada di zona yang dilindungi WorldGuard di mana damage dibatalkan, sehingga item terbuang sia-sia. Mengaktifkan fitur ini memastikan totem hanya aktif pada damage mematikan yang sebenarnya.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BEFORE_DEATH
    noActivatorRunIfTheEventIsCancelled: true
```

### silenceOutput

* Info: Nilai boolean yang membuat semua perintah yang dijalankan dari fitur commands seperti (playerCommands, blockCommands, entityCommands dan targetCommands) tidak menghasilkan output di **console**.
  * Misalnya, menggunakan perintah vanilla Minecraft effect give \[...] biasanya menghasilkan output di console dengan format: "Applied effect strength to \<playerName>". Untuk menonaktifkan output ini, Anda dapat mengaktifkan fitur ini.    
* Contoh: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    playerCommands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Penting untuk dipahami bahwa fitur ini dibuat untuk menonaktifkan output perintah vanilla. Jika Anda menggunakan perintah dari plugin lain dan perintah itu memiliki output di console, itu bukan tanggung jawab kami untuk memperbaikinya, plugin lain tersebutlah yang seharusnya menyediakan cara untuk menyembunyikan pesan-pesan itu. Meski begitu, karena kami baik hati, Anda memiliki cara untuk menyesuaikan pesan yang disembunyikan, sehingga Anda dapat memiliki pesan default yang dibungkam oleh silenceOutput + pesan kustom yang ingin Anda tambahkan. Proses ini ditangani oleh file config Score, informasi lebih lanjut di sini dan cara melakukannya di sini [General config](/tools-for-all-plugins-score/score/general-config).

## Cooldown

### Player cooldown

* Info: Opsi cooldown adalah cooldown yang diterapkan pada pemain yang memicu aktivator ini, khusus untuk aktivator ini.
* Jika aktivatornya PLAYER\_RIGHT\_CLICK, memiliki beberapa commands \[] dan cooldown-nya 30 detik, maka jika pemain memicu aktivator ini, ia harus menunggu 30 detik sebelum dapat memicunya lagi. Hal ini tidak mencegah pemain lain menjalankannya dalam rentang 30 detik tersebut, selama pemain itu juga tidak sedang dalam cooldown. Ini adalah fitur per pemain.
  * `cooldown`: Nilai integer yang menunjukkan lama waktu cooldown untuk aktivator ini.
  * `isCooldownInTicks`: Nilai boolean yang menetapkan waktu cooldown dalam satuan tick (20 tick = 1 detik)
  * `cooldownMsg`: Nilai string yang ditampilkan saat pemain mencoba memicu aktivator ketika sedang dalam cooldown
  * `displayCooldownMessage`: Nilai boolean untuk mengizinkan atau mencegah pesan cooldownMsg ditampilkan jika pemain mencoba memicu aktivator saat sedang dalam cooldown.
    * Placeholder yang dapat digunakan:
      * %time% -> seluruh cooldown dalam detik
      * %time\_H% -> bagian jam dari cooldown
      * %time\_M% -> bagian menit dari cooldown
      * %time\_S% -> bagian detik dari cooldown 
  * `cancelEventIfInCooldown`: Nilai boolean yang membatalkan event aktivator jika pemain sedang dalam cooldown. Artinya, jika aktivatornya PLAYER\_HIT\_ENTITY, selama pemain dalam cooldown semua event PLAYER\_HIT\_ENTITY dari pemain tersebut akan dibatalkan sehingga diabaikan, dan pemain tidak dapat menyerang entitas (pengingat: aktivator tersebut menargetkan semua entitas kecuali pemain)
  * `pauseWhenOffline`: Nilai boolean yang menjeda cooldown jika pemain sedang offline. Agar lebih jelas, jika nilainya false, waktu cooldown tidak berhenti sehingga pemain dapat keluar dari server, menunggu cooldown selesai, lalu bergabung kembali dan dapat memicu aktivator lagi. Namun jika fitur ini diaktifkan dan pemain keluar dari server saat dalam cooldown, ketika bergabung kembali ia akan memiliki sisa waktu cooldown yang sama seperti saat ia keluar.
  * `pausePlaceholdersConditions`: Mirip dengan pauseWhenOffline, tetapi hanya menjeda berdasarkan placeholdersConditions tertentu. Contoh penggunaannya adalah menjeda cooldown jika pemain memiliki rank VIP, sehingga rank VIP memiliki akses ke fitur tersebut.
  * `enableVisualCooldown`: Mengaktifkan cooldown visual untuk item.
* Contoh: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Global cooldown

* Info: Idenya sama seperti cooldown, tetapi alih-alih diterapkan pada pemain, ini adalah cooldown global yang diterapkan pada semua pemain. Artinya, jika seseorang memicu aktivator dan aktivator tersebut memiliki global cooldown 30 detik, maka tidak ada yang dapat menggunakannya sampai 30 detik itu berlalu. Fitur ini memiliki fitur yang sama dengan cooldown.
  * `cooldown`: Nilai integer yang menunjukkan lama waktu cooldown untuk aktivator ini.
  * `isCooldownInTicks`: Nilai boolean yang menetapkan waktu cooldown dalam satuan tick (20 tick = 1 detik)
  * `cooldownMsg`: Nilai string yang ditampilkan saat pemain mencoba memicu aktivator ini ketika sedang dalam cooldown
  * `displayCooldownMessage`: Nilai boolean untuk mengizinkan atau mencegah pesan cooldownMsg ditampilkan jika pemain mencoba memicu aktivator saat sedang dalam cooldown.
    * Placeholder yang dapat digunakan:
      * %time% -> seluruh cooldown dalam detik
      * %time\_H% -> bagian jam dari cooldown
      * %time\_M% -> bagian menit dari cooldown
      * %time\_S% -> bagian detik dari cooldown 
  * `cancelEventIfInCooldown`: Nilai boolean yang membatalkan event aktivator jika pemain sedang dalam cooldown. Artinya, jika aktivatornya PLAYER\_HIT\_ENTITY, selama pemain dalam cooldown semua event PLAYER\_HIT\_ENTITY dari pemain tersebut akan dibatalkan sehingga diabaikan, dan pemain tidak dapat menyerang entitas (pengingat: aktivator tersebut menargetkan semua entitas kecuali pemain)
  * `enableVisualCooldown`: Mengaktifkan cooldown visual untuk item.
* Contoh:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

## Required features <CustomTag type="premium" />

Bagian ini digunakan untuk mengatur fitur yang terkait dengan hal-hal yang dibutuhkan agar aktivator dapat dipicu. Artinya, jika event terjadi, aktivator hanya akan berjalan jika pemain memenuhi pengaturan kebutuhan ini. Item akan dikonsumsi dalam prosesnya.

* Jika Anda tidak ingin item dikonsumsi, jangan gunakan fitur "required", tetapi gunakan kondisi yang hanya berupa kondisi dan tidak mengonsumsi.

### requiredExecutableItems <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki ExecutableItem sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan.
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `executableItem`: ID ExecutableItem yang dibutuhkan sebagai syarat
  * `amount`: Integer jumlah item yang dibutuhkan sebagai syarat.
  * `usageConditions`: Kondisi string opsional dengan format `(==, !=, >, <, >=, <=){number}` untuk kondisi usage dari ExecutableItem.
    * Artinya, jika kondisinya >=5, maka syaratnya adalah ExecutableItem yang dipilih harus ada di inventaris pemain sebagai syarat, tetapi juga harus memiliki usage lebih dari atau sama dengan 5.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki item vanilla sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan.
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `material`: MATERIAL vanilla yang dibutuhkan sebagai syarat.
  * `amount`: Integer jumlah item yang dibutuhkan sebagai syarat.
  * `notExecutableItem`: Nilai boolean untuk menentukan apakah syarat dapat berupa ExecutableItem atau tidak.
    * Artinya, jika syaratnya adalah STONE, dan fitur ini tidak diaktifkan, maka syarat akan terpenuhi oleh STONE vanilla maupun ExecutableItem dengan material STONE, dan keduanya akan dikonsumsi. Jika Anda tidak ingin hal ini terjadi, aktifkan fitur ini.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: Fitur ini membutuhkan plugin bernama "Vault". Fitur ini memungkinkan aktivator memiliki uang dari Vault sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan.
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `requiredMoney`: Nilai float yang menunjukkan jumlah uang yang dibutuhkan sebagai syarat.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki level pengalaman vanilla sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan. Jangan bingungkan level pengalaman dengan pengalaman, informasi lebih lanjut di sini [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `requiredLevel`: Nilai integer yang menunjukkan jumlah level pengalaman vanilla Minecraft yang dibutuhkan sebagai syarat.
* Contoh:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki pengalaman vanilla Minecraft sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan. Jangan bingungkan pengalaman dengan level pengalaman, keduanya berbeda, informasi lebih lanjut di [Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `requiredExperience`: Nilai integer yang menunjukkan jumlah pengalaman yang dibutuhkan sebagai syarat.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki mana dari [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) dan [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/) sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan.
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `requiredMana`: Nilai integer yang menunjukkan jumlah mana yang dibutuhkan sebagai syarat.
* Contoh:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Kompatibel dengan AureliumSkills, MMOCore dan AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: Fitur ini memungkinkan aktivator memiliki magic dari [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/) sebagai syarat. Jika pemain memenuhi syarat ini, syarat tersebut akan dikonsumsi dan aktivator akan berjalan.
  * `cancelEventIfError`: Nilai boolean yang menunjukkan apakah event akan dibatalkan jika pemain tidak memenuhi syarat.
    * Artinya, misalnya ada event PLAYER\_HIT\_ENTITY, dan event tersebut terjadi tetapi pemain tidak memenuhi syarat untuk memicu aktivator. Jika fitur ini diaktifkan, event PLAYER\_HIT\_ENTITY akan dibatalkan sehingga meskipun pemain mengklik/memukul entitas, entitas tersebut tidak menerima damage karena sebenarnya event tidak terjadi akibat dibatalkan.
  * `errorMessage`: Pesan string yang akan dikirim ke pemain jika pemain tidak memenuhi syarat.
  * `magicID`: ID magic di EcoSkills.
  * `amount`: Jumlah magic dari magicID yang dibutuhkan sebagai syarat.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```
