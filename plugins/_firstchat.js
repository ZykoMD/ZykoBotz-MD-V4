export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let kabul = '𝗭𝘆𝗸𝗼𝗕𝗼𝘁𝘇-𝗠𝗗'
    let caption = `Halo ${name}, Saya Adalah ${namebot}, ${user.banned ? 'kamu dibanned' : `Ada yang bisa ${namebot}, ʙᴀɴᴛᴜ?\nᴋᴇᴛɪᴋ *.ᴍᴇɴᴜ* ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ғɪᴛᴜʀ ʙᴏᴛ.`}
`.trim()
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Owner' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1
 }