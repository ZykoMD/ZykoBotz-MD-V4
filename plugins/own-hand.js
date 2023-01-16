import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Sedang mengambil file sesi mu')
    let sesi = await fs.readFileSync('./handler.js')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'handler.js' }, { quoted: m })
}
handler.help = ['gethandler']
handler.tags = ['owner']
handler.command = /^(gethandler)$/i

handler.rowner = true

export default handler
