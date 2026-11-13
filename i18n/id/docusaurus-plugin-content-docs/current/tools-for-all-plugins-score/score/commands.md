---
description: >-
  Perintah SCore untuk menghapus cooldown dan proses berjalan, memeriksa loop,
  mengirim webhook Discord, dan menjalankan perintah secara manual.
source_hash: efcb318717cf1c47
translated_at: '2026-11-13T17:56:14.840Z'
translator: claude sonnet (SPluginsWebsite/scripts/i18n/translate-docs.mjs)
---
# Perintah

## Menghapus konten dari SCore

* Perintah ini memungkinkan Anda menghapus sebagian besar konten SCore yang sedang berjalan
* Anda dapat menghapus:
  * [ACTIONBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#actionbar)
  * COOLDOWNS
  * DELAYED_COMMANDS (perintah SCore yang dijalankan dengan delay)
  * [WHILE](/tools-for-all-plugins-score/custom-commands/utility-commands#while)
  * [BOSSBARS](/tools-for-all-plugins-score/custom-commands/player-and-target-commands#bossbar)
  * [PARTICLES](/tools-for-all-plugins-score/score-particles)
  * ALL
* Perintah: /score clear \{player\} \{WHAT_YOU_WANT_TO_CLEAR\}

## Menghapus cooldown 

* Perintah untuk menghapus cooldown tertentu (untuk pemain / entitas tertentu)
* Perintah: /score cooldowns clear \{cooldown\_id\} \[UUID]
  * `{cooldown_id}`: Contoh -> EI\:myitem\:myactivator
  * `[UUID]`: (Opsional) UUID dari pemain / entitas

## Memeriksa loop, berguna untuk debug

* Perintah: /score inspect-loop

Muat ulang konfigurasi variabel, projectile, dan hardness SCore

* Perintah: /score reload

## Webhook Discord
Kirim pesan ke Discord melalui webhook

* /score webhook \{url\} \{debug\} [allowed_mentions] \{message...\}
  * `{url}`: url untuk webhook
  * `{debug}`: menentukan apakah pelaksana diberi tahu atau tidak ketika pesan webhook akan dikirim
  * `[allowed_mentions]`: dapat berupa users\:id\[,id,...\] atau roles\:id\[,id,...\] atau dikosongkan
  * `{message...}`: pesan yang akan dikirim oleh webhook target


## Perintah Particles

Lihat [SCore Particles](/tools-for-all-plugins-score/score-particles)

## Perintah Variables

Lihat [SCore Variables](/tools-for-all-plugins-score/score-variables)

## Menjalankan perintah SCore secara manual

### Perintah pemain

* Info: Perintah yang memungkinkan dari luar maupun dari dalam Ssomar Plugins untuk menjalankan perintah kustom dari SCore pada pemain tertentu.
* Saat menggunakan perintah ini, seluruh baris perintah diproses melalui PlaceholdersAPI sehingga Anda dapat menambahkan placeholder di dalamnya.

* Perintah: /score run-player-command player:\{player\} \{command\}
  * `player`: Nama pemain yang ditargetkan
  * `command`: Perintah pemain SCore yang akan diterapkan pada \{player\}

* Contoh:
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello player\:Ssomar +++ DELAY 10 +++ SWING_MAIN_HAND
  * /score run-player-command player\:SsomarPluginsPlayer SENDMESSAGE &eHello my name is %player% and my life is %player_health%

### Perintah blok

* Info: Perintah yang memungkinkan dari luar maupun dari dalam Ssomar Plugins untuk menjalankan perintah kustom dari SCore pada blok tertentu.

* Perintah: /score run-block-command \[player:\{player\}\] block:\{world\},\{x\},\{y\},\{z\} \{command\}
  * `player`: Pemain yang terlibat dalam aktivator ini
    * Bersifat opsional karena beberapa perintah membutuhkannya, misalnya

                MOB_AROUND: Siapa yang memberikan damage? Perintah ini memberikan damage ke mob di sekitar, tetapi damage tersebut dihitung sebagai damage yang diberikan oleh \{player\}, sehingga sistem memeriksa apakah pemain benar-benar dapat memberikan damage ke mob tersebut, damage dan kill dihitung untuknya, dan seterusnya.

                VEIN_BREAKER: Siapa yang menghancurkan blok? Perintah ini menghancurkan blok dalam bentuk vein, tetapi blok tersebut dihitung sebagai dihancurkan oleh \{player\}, sehingga sistem memeriksa apakah pemain benar-benar dapat menghancurkan blok tersebut, blok yang dihancurkan dihitung untuknya, dan seterusnya.

  * `block`
      * `world`: Dunia tempat blok berada
      * `x`: Koordinat X dari blok
      * `y`: Koordinat Y dari blok
      * `z`: Koordinat Z dari blok
  * `command`: Perintah blok yang akan dijalankan pada blok tersebut dan, jika ada, oleh pemain.
    * [Placeholder blok](/tools-for-all-plugins-score/placeholders#block-placeholders) (`%block%`, `%block_lower%`, `%block_x%`...) pada perintah adalah placeholder milik blok ini.

* Contoh:
  * /score run-block-command block\:world,-23,-61,27 BREAK
  * /score run-block-command player\:SsomarPluginsPlayer block\:world,-23,-61,27 MINEINCUBE 1 false

### Perintah entitas

* Info: Perintah yang memungkinkan dari luar maupun dari dalam Ssomar Plugins untuk menjalankan perintah kustom dari SCore pada entitas tertentu

* Perintah: /score run-entity-command \[player:\{player\}\] entity:\{entityUUID\} \{command\}
  * `player`: (Opsional) nama atau UUID pemain yang terlibat: placeholder pemain (`%player%`, `%player_health%`...) kemudian dapat digunakan dalam perintah, misalnya dalam `IF`.
  * `entityUUID`: UUID dari entitas yang ditargetkan
  * `command`: Perintah entitas yang akan dijalankan pada entitas tersebut.
* Contoh:
  * /score run-entity-command entity\:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity_uuid% JUMP 1
  * /score run-entity-command player:Steve entity:%entity_uuid% IF %player_health%>10 SET_ENTITY_NAME name:&cTamed

### Perintah item

* Info: Perintah yang memungkinkan dari luar maupun dari dalam Ssomar Plugins untuk menjalankan [perintah item](/tools-for-all-plugins-score/custom-commands/item-commands) kustom pada item di inventaris pemain.

* Perintah: /score run-item-command player:\{player\} slot:\{slot\} \{command\}
  * `player`: nama atau UUID pemain yang memiliki item
  * `slot`: slot item di inventaris pemain: `0` sampai `8` untuk hotbar, `9` sampai `35` untuk sisa inventaris, `36` sampai `39` untuk armor (sepatu sampai helm), `40` untuk off hand
  * `command`: Perintah item yang akan dijalankan pada item ini. Placeholder pemain dapat digunakan di dalamnya.
  * Tidak terjadi apa pun ketika pemain sedang offline atau ketika slot kosong.
* Contoh:
  * /score run-item-command player:Steve slot:0 SET_ITEM_NAME name:&6Excalibur
  * /score run-item-command player:Steve slot:0 IF %player_health%>=20 ADD_ITEM_ENCHANTMENT enchantment:sharpness level:5
