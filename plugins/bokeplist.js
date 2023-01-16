
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
	
let bokep = `
${htki} BOKEP ${htka}
HYO MAU NGAPAIN
`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} ✨LOGO KEREN✦-------`,
	rows: [
        {title: "BOKEP", rowId: `.viral`, description: 'COLMEK IN GURU FULL' },
	{title: "Anak SMA Colmek mirror", rowId: `.viral1`, description: 'Awas Nanti Col lagi🗿' },
      
        {title: "SELEBGRAM YG SEDANG PANAS", rowId: `.viral2`, description: 'Awas Nanti Col lagi🗿' },
        {title: "DI SEPONGIN", rowId: `.viral3`, description: 'Awas Nanti Col lagi🗿' },                       
    ]
    },
]

const listMessage = {
  text: bokep,
  footer: botdate,
  title: wm,
  buttonText: "HYO🗿",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(bokep), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['bokelist']
handler.tags = ['nsfw']
handler.command = /^(bokelist)$/i
handler.premium = true
export default handler
