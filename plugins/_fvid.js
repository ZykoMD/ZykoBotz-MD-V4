import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "17608914335-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"Haii Kak",
                 "h": `Hmm`,
                 'seconds': '182', 
                 'caption': 'Nothing ^^',
                 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                        }
                       }
	                  }
conn.sendMessage(m.chat, { text: wm }, { quoted: anu })
}


handler.tags = ['nocategory']
handler.help = ['vid']
handler.command = /^vid$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

export default handler
