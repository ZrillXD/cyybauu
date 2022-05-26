/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6282332222307','6282332222307','6282332222307'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6282332222307'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6282332222307' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝙲𝚈𝚈 𝙰𝙻𝙻𝚆𝙰𝚈𝚂' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '𝚉𝚁𝙸𝙻𝙻𝙱𝙾𝚃𝚉' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '2022 || 𝚉𝚁𝙸𝙻𝙻𝙱𝙾𝚃𝚉.com' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCAXHJebpkyPVs20poWdo_Zw'
global.ig = 'https://instagram.com/xyyz_nomercy'
global.mygc = 'https://chat.whatsapp.com/LjK0gR347JcEkZt2LEiOoj'
global.myweb = 'https://s.id/ZrillAPIs'
global.email = '𝙲𝚈𝚈𝙱𝙰𝚄𝚄@gmail.com'
global.region = '𝙹𝙴𝙿𝙰𝙽𝙶'

//—————「 Set Wm 」—————//
global.packname = '𝙲𝚈𝚈𝙱𝙰𝚄𝚄' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = '𝚉𝚁𝙸𝙻𝙻𝚇𝙳l' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'Zrill'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_𝙳𝙾𝙽𝙴 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙸𝙽𝙶_',
admin: '_𝙰𝙳𝙼𝙸𝙽 𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈_',
botAdmin: '_𝙱𝙾𝚃 𝙽𝙾𝚃 𝙰𝙳𝙼𝙸𝙽_',
owner: '_𝙾𝚆𝙽𝙴𝚁 𝙾𝙽𝙻𝚈_',
group: '_𝙶𝚁𝙾𝚄𝙿 𝙲𝙷𝙰𝚃 𝙾𝙽𝙻𝚈_',
private: '_𝙿𝚁𝙸𝙱𝙰𝙳𝙸 𝙲𝙷𝙰𝚃 𝙾𝙽𝙻𝚈_',
bot: '_𝙱𝙾𝚃 𝙾𝙽𝙻𝚈_',
wait: '_𝙻𝙾𝙰𝙳 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙸𝙽𝙶_',
error: '_𝙵𝙸𝚃𝚄𝚁 𝙴𝚁𝚁𝙾𝚁!_',
endLimit: '_𝚈𝙾𝚄𝚁 𝙻𝙸𝙼𝙸𝚃 𝙸𝚂 𝚄𝙿_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})