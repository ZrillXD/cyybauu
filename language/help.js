/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _𝚂𝙴𝙻𝙰𝙼𝙰𝚃 ${salam} 𝙱𝚁𝙾 ${pushname}_

  *⏰ 𝚃𝙸𝙼𝙴 𝚂𝙴𝚁𝚅𝙴𝚁 : ${time}*
  *📚 𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄 : ${botname}*

  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  
  *TELE STICK MENU*
  *≻* ${prefix}gurastick
  *≻* ${prefix}dogestick
  *≻* ${prefix}bucinstick
  *≻* ${prefix}patrick
  
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  *≻* ${prefix}darkjokes
  
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak [option]
  *≻* ${prefix}math [mode]
  *≻* ${prefix}suitpvp [@tag]

  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio

  *CERPEN MENU*
  *≻* ${prefix}cerpen anak
  *≻* ${prefix}cerpen bahasa daerah
  *≻* ${prefix}cerpen bahasa inggris
  *≻* ${prefix}cerpen bahasa jawa
  *≻* ${prefix}cerpen bahasa sunda
  *≻* ${prefix}cerpen budaya
  *≻* ${prefix}cerpen cinta
  *≻* ${prefix}cerpen cinta islami
  *≻* ${prefix}cerpen cinta pertama
  *≻* ${prefix}cerpen cinta romantis
  *≻* ${prefix}cerpen cinta sedih
  *≻* ${prefix}cerpen cinta segitiga
  *≻* ${prefix}cerpen cinta sejati
  *≻* ${prefix}cerpen galau
  *≻* ${prefix}cerpen gokil
  *≻* ${prefix}cerpen inspiratif
  *≻* ${prefix}cerpen jepang
  *≻* ${prefix}cerpen kehidupan
  *≻* ${prefix}cerpen keluarga
  *≻* ${prefix}cerpen kisah nyata
  *≻* ${prefix}cerpen korea
  *≻* ${prefix}cerpen kristen
  *≻* ${prefix}cerpen liburan
  *≻* ${prefix}cerpen lingkungan
  *≻* ${prefix}cerpen lucu
  *≻* ${prefix}cerpen malaysia
  *≻* ${prefix}cerpen mengharukan
  *≻* ${prefix}cerpen misteri
  *≻* ${prefix}cerpen motivasi
  *≻* ${prefix}cerpen nasihat
  *≻* ${prefix}cerpen nasionalisme
  *≻* ${prefix}cerpen olahraga
  *≻* ${prefix}cerpen patah hati
  *≻* ${prefix}cerpen penantian
  *≻* ${prefix}cerpen pendidikan
  *≻* ${prefix}cerpen pengalaman pribadi
  *≻* ${prefix}cerpen pengorbanan
  *≻* ${prefix}cerpen penyesalan
  *≻* ${prefix}cerpen perjuangan
  *≻* ${prefix}cerpen perpisahan
  *≻* ${prefix}cerpen persahabatan
  *≻* ${prefix}cerpen petualangan
  *≻* ${prefix}cerpen ramadhan
  *≻* ${prefix}cerpen remaja
  *≻* ${prefix}cerpen renungan
  *≻* ${prefix}cerpen rindu
  *≻* ${prefix}cerpen rohani
  *≻* ${prefix}cerpen romantis
  *≻* ${prefix}cerpen sastra
  *≻* ${prefix}cerpen sedih
  *≻* ${prefix}cerpen sejarah
  *≻* ${prefix}cerpen slice of life
  *≻* ${prefix}cerpen terjemahan
  *≻* ${prefix}cerpen thriller
  
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  *≻* ${prefix}smeme

  *INFORMATION MENU*
  *≻* ${prefix}merdeka-news 
  *≻* ${prefix}kontan-news 
  *≻* ${prefix}cnbc-news 
  *≻* ${prefix}tribun-news 
  *≻* ${prefix}indozone-news 
  *≻* ${prefix}kompas-news 
  *≻* ${prefix}detik-news 
  *≻* ${prefix}daily-news 
  *≻* ${prefix}inews-news 
  *≻* ${prefix}okezone-news 
  *≻* ${prefix}sindo-news 
  *≻* ${prefix}tempo-news 
  *≻* ${prefix}antara-news 
  *≻* ${prefix}cnn-news 
  *≻* ${prefix}fajar-news 
  
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}runtime
  *≻* ${prefix}speed
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
  
  *ANONYMOUS MENU*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  
  *OWNER MENU*
  *≻* ${prefix}react [emoji]
  *≻* ${prefix}chat [option]
  *≻* ${prefix}join [link]
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot  
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu
  *≻* ${prefix}setallmenu
  
  *THANKS TO*
  *≻* DikaArdnt
  *≻* ZeeoneOfc
  *≻* FatihArridho
  *≻* Yoga
  *≻* Riy
  *≻* Deff
  *≻* Sanzy
  *≻* Nekel
  *≻* Bagas Prdn
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`𝚆𝙴𝙻𝙲𝙾𝙼𝙴
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`𝙱𝚈𝙴𝙴
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *𝙳𝙾𝙽𝙰𝚃𝙴* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

—————「 *𝚂𝙴𝚆𝙰 | 𝚁𝚄𝙽 𝙱𝙾𝚃* 」—————

  *_SEWA BOT_* 
  *≻* Sewa Bot 2.000 (1 𝙼𝙸𝙽𝙶𝙶𝚄)
  *≻* Sewa Bot 5.000 (1 𝙱𝚄𝙻𝙰𝙽)
  *≻* Sewa Bot 10.000 (𝙿𝙴𝚁𝙼𝙰𝙽𝙴𝙽𝚃)

  *JADI BOT* 
  *≻* Jadi Bot 15k Tidak Owner (1 minggu)
  *≻* Jadi Bot + Owner 20k (1 bulan)
  *≻* Jadi Bot + Owner 25k (Permanen)

  *JASA RUN BOT*
  *≻* Run Bot 15k (1 minggu)
  *≻* Run Bot 20k (1 bulan)
  *≻* Run Bot 25k (Permanen)

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc  
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  `
}

exports.telestickmenu = (prefix) => {
	return`
  *TELE STICK MENU*
  *≻* ${prefix}gurastick
  *≻* ${prefix}dogestick
  *≻* ${prefix}bucinstick
  *≻* ${prefix}patrick
`
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  *≻* ${prefix}darkjokes
  `
}

exports.randomanimemenu = (prefix) => {
	return`
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  `
}

exports.textpromenu = (prefix) => {
	return`
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak
  *≻* ${prefix}math
  *≻* ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio
  `
}

exports.cerpenmenu = (prefix) => {
	return`
  *CERPEN MENU*
  *≻* ${prefix}cerpen anak
  *≻* ${prefix}cerpen bahasa daerah
  *≻* ${prefix}cerpen bahasa inggris
  *≻* ${prefix}cerpen bahasa jawa
  *≻* ${prefix}cerpen bahasa sunda
  *≻* ${prefix}cerpen budaya
  *≻* ${prefix}cerpen cinta
  *≻* ${prefix}cerpen cinta islami
  *≻* ${prefix}cerpen cinta pertama
  *≻* ${prefix}cerpen cinta romantis
  *≻* ${prefix}cerpen cinta sedih
  *≻* ${prefix}cerpen cinta segitiga
  *≻* ${prefix}cerpen cinta sejati
  *≻* ${prefix}cerpen galau
  *≻* ${prefix}cerpen gokil
  *≻* ${prefix}cerpen inspiratif
  *≻* ${prefix}cerpen jepang
  *≻* ${prefix}cerpen kehidupan
  *≻* ${prefix}cerpen keluarga
  *≻* ${prefix}cerpen kisah nyata
  *≻* ${prefix}cerpen korea
  *≻* ${prefix}cerpen kristen
  *≻* ${prefix}cerpen liburan
  *≻* ${prefix}cerpen lingkungan
  *≻* ${prefix}cerpen lucu
  *≻* ${prefix}cerpen malaysia
  *≻* ${prefix}cerpen mengharukan
  *≻* ${prefix}cerpen misteri
  *≻* ${prefix}cerpen motivasi
  *≻* ${prefix}cerpen nasihat
  *≻* ${prefix}cerpen nasionalisme
  *≻* ${prefix}cerpen olahraga
  *≻* ${prefix}cerpen patah hati
  *≻* ${prefix}cerpen penantian
  *≻* ${prefix}cerpen pendidikan
  *≻* ${prefix}cerpen pengalaman pribadi
  *≻* ${prefix}cerpen pengorbanan
  *≻* ${prefix}cerpen penyesalan
  *≻* ${prefix}cerpen perjuangan
  *≻* ${prefix}cerpen perpisahan
  *≻* ${prefix}cerpen persahabatan
  *≻* ${prefix}cerpen petualangan
  *≻* ${prefix}cerpen ramadhan
  *≻* ${prefix}cerpen remaja
  *≻* ${prefix}cerpen renungan
  *≻* ${prefix}cerpen rindu
  *≻* ${prefix}cerpen rohani
  *≻* ${prefix}cerpen romantis
  *≻* ${prefix}cerpen sastra
  *≻* ${prefix}cerpen sedih
  *≻* ${prefix}cerpen sejarah
  *≻* ${prefix}cerpen slice of life
  *≻* ${prefix}cerpen terjemahan
  *≻* ${prefix}cerpen thriller
`
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  `
}

exports.informationmenu = (prefix) => {
	return`
  *INFORMATION MENU*
  *≻* ${prefix}merdeka-news 
  *≻* ${prefix}kontan-news 
  *≻* ${prefix}cnbc-news 
  *≻* ${prefix}tribun-news 
  *≻* ${prefix}indozone-news 
  *≻* ${prefix}kompas-news 
  *≻* ${prefix}detik-news 
  *≻* ${prefix}daily-news 
  *≻* ${prefix}inews-news 
  *≻* ${prefix}okezone-news 
  *≻* ${prefix}sindo-news 
  *≻* ${prefix}tempo-news 
  *≻* ${prefix}antara-news 
  *≻* ${prefix}cnn-news 
  *≻* ${prefix}fajar-news
`
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}runtime
  *≻* ${prefix}speed
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  *≻* ${prefix}react
  *≻* ${prefix}chat
  *≻* ${prefix}join
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu 
  *≻* ${prefix}setallmenu 
  `
}

//tqto gsh di hps y :) kalau mai tmbhin aja nama kalian!
exports.thanksto = () => {
	return`
  *𝚃𝙷𝙰𝙽𝙺𝚂 𝚃𝙾*
  *>* 𝙳𝙸𝙺𝙰 𝙰𝚁𝙳𝙽𝚃
  *>* 𝚉𝙴𝙴𝙾𝙽𝙴 𝙾𝙵𝙲
  *>* 𝙵𝙰𝚃𝙸𝙷 𝙰𝚁𝚁𝙸𝙳𝙳𝙾
  *>* 𝚈𝙾𝙶𝙰
  *>* 𝚁𝙸𝚈
  *>* 𝙳𝙴𝙵𝙵
  *>* 𝚂𝙰𝙽𝚉𝚈
  *>* 𝙽𝙴𝙺𝙴𝙻
  *>* 𝙱𝙰𝙶𝙰𝚂 𝙿𝚁𝙳𝙽
  *>* 𝚉𝚁𝙸𝙻𝙻/𝙸𝙼
`
}