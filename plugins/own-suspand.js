let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let suspand = global.db.data.users[ban].suspand
        if (suspand < 2) {
            global.db.data.users[ban].warning += 2
            m.reply(`*berhasil Suspand!*`)
            conn.sendButton(ban, hiasan, '*Kamu di Suspand oleh moderator*\n*Kamu tidak di izinkan untuk menggunakan Bot ini!*', thumbBanned, [['Customer Service', usedPrefix + 'report'],['Oke', 'Ok']] null)
        } else if (suspand == 2) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].suspand = 1
            m.reply('*Dia sudah Di suspand*')
            conn.sendButton(ban, hiasan, '*Kamu di Suspand dan tidak bisa menggunakan Bot ini Oleh!*', thumbBanned, [['Owner', usedPrefix + 'owner']], null)
        }
    } else conn.reply(m.chat, '*Siapa yang mau di banned?\nTag orangnya*', m)
}
handler.help = ['suspand @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^suspand$/i
handler.mods = true

export default handler
 