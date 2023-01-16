/*import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  let wm = global.wm
ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Random Megumin', 
    orderTitle: `▮Menu ▸`,
    thumbnail: 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg'
    }
    }
    } 
  conn.sendFile(m.chat, json.url, '', 'Istri Watashi', wm, botdate, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['megumin1']
handler.tags = ['anime']
handler.command = /^(megumin1)$/i

handler.limit = true

export default handler */
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/megumin')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Istri Watashi', author, json.url, [['megumin1', `${usedPrefix}megumin1`]], m)
}
handler.help = ['megumin1']
handler.tags = ['anime', 'kabul']
handler.command = /^(megumin1)$/i

export default handler

