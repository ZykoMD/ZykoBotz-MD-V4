import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.help = ['henstick2', 'tic2']
handler.tags = ['nsfw','premium']
handler.command = /^(henstick2|tic2)$/i
handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [

"https://telegra.ph/file/868898dbc252a57bbcb72.mp4",
"https://telegra.ph/file/e10f7a0506620739b5cd6.mp4",
"https://telegra.ph/file/2693c52edb0513c85034c.mp4",
"https://telegra.ph/file/9bd07ee5c02d40b686c44.mp4",
"https://telegra.ph/file/db51417deee8d3a979fde.mp4",
]
