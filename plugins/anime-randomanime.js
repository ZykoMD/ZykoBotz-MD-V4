import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let zyko-md = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendButton(m.chat, `Nihh ${command}nya @${m.sender.split('@')[0]}`, wm, zyko-md, [[`🔁Next🔁`, `${usedPrefix}${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(zyko-md)).buffer()})
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i

handler.register = false
handler.limit = false

export default handler