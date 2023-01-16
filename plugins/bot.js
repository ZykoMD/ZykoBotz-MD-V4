import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/Bot.opus')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: `iya kenpa ${name}`,
    body: bottime,
    thumbnail: await(await fetch("https://telegra.ph/file/c9f056f4ffcbc79a2db3a.jpg")).buffer(),
    sourceUrl: syt
  }
  } }) 
          }
handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler
