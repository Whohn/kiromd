global.owner = ['6285372384519']  
global.mods = ['6285372384519'] 
global.prems = ['6285372384519']
global.nameowner = 'Kiroo'
global.numberowner = '6285372384519'
global.mail = 'xhanzhelo@gmail.com' 
global.gc = ''
global.instagram = 'https://instagram.com/hanurboyy'
global.wm = '© Kiroo'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Dibuat Oleh'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'gCh9Peao' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'ehlWwSc4'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'gCh9Peao', 
  'https://api.botcahx.eu.org': 'ehlWwSc4'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
