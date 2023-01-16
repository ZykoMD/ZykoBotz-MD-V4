import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

    if (!text) throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} car`
    let res = await fetch(`https://api.yayimages.com/search/ea990627-3429-4819-bfe7-9ba03a0c0f71/${text}`)
    let f = await res.json()
let str = f.images.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
id: ${v.id}
description: ${v.description}
thumb_url: ${v.thumb_url}
username: ${v.username}
width: ${v.width}
height: ${v.height}
model_count: ${v.model_count}
vector: ${v.vector}
category: ${v.category}
`.trim()
    }).join(`\n\n ${htki} YAY ${htka} \n\n`)
    await conn.sendButton(m.chat, str, wm, f.images[0].thumb_url, [
                ['PINTEREST', '/pinterest ' + text],
                ['\n\n\n Subscribe FangzXD', 'Huuu']
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc,
     }}
  })
}
handler.help = ['yay <teks>']
handler.tags = ['internet']
handler.command = /^(yay)$/i

handler.limit = false

export default handler