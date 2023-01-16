import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	 key: { 
          fromMe: false,
	      participant: `6285736178354@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285736178354-1610340626@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
conn.sendMessage(m.chat,{ text: wm}, {quoted: anu})
}


handler.tags = ['nocategory']
handler.help = ['tod', 'fvn']
handler.command = /^tod|fvn$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

handler.fail = null
handler.exp = 3

export default handler
