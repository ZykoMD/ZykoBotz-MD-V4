let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, text, args, usedPrefix, DevMode }) => {
if (!text) return m.reply('Maaf Format Anda Salah\n\nContoh:\n.bugcata 62××××')
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `*➳😈⛓⚔w̆̈e̶ 𝐙𝐘𝐊𝐎̶᭄𝐋𝐈𝐒𝐀𝐀𝐌𝐄𝐋𝐈𝐀࿐ꪶ😈💯☚༻*    🦟 ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  *꧁ᱝ✞☛͜⧼🥶⃟⚔w̆̈e̶ ă̈r̶e̶⧽͜🥵͜🔥☚✞ᱝ꧂* *重難重難重難重x難重難重難重難重重* *☛⧼͜🥶ꮗꮛ ꮢꮛ ꮑꮗꮥꮢ⧽͜👹🔥ᴷⁱⁿᵍ ʰᵘⁿᵗᵉʳ❗...༒⚞⚔n̷w̷s̷r̷࿐⚟༒...❗* *重難重難重難重難重難重難重難重重* *๑๑๑615๑๑* *๕๕๗๗๓๓๓๓* *๕๕๕๕๗๗๕๕*➳👹⚔w̆̈e̶ 𝐙𝐘𝐊𝐎 𝐍𝐈 𝐁𝐎𝐙̶᭄𝐍𝐖𝐒𝐑࿐🇱🇰☚༻*‼️💉💉🩸•𝚋𝚘𝚝𝚣•🩸💉💉‼️•☠•(༒⃟⃢❰❍❱•𝐗 𝐋𝐈𝐒𝐀𝐀𝐌𝐄𝐋𝐈𝐀•➣⃟۝⃟°)•⁩☠•*.㍙.㍙.㍝.㍙.㍝.㍝.㍙.㍝.㍞.cc* *~.1.1.5.𫟅.▓.者.▓.1.5.5.𫟅.▓.8者.▓.𫟅.█.1.5.6.؋.cc~* �*.㍙.㍙.㍝.㍙.㍝.㍝.㍙.㍝.㍞.cc* *~.1.1.5.𫟅.▓.者.▓.1.5.5.𫟅.▓.者.▓.𫟅.█.1.5.6.؋.cc~*    ۦོ͢✘ ✘͢͢ۦོ͢✘⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ ✘͢͢ ✘͢͢ ⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ᡃ⃟  ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ`
const sections = [
   {
	title: `:  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  *꧁ᱝ✞☛͜⧼🥶⃟⚔w̆̈e̶ ă̈r̶e̶⧽͜🥵͜🔥☚✞ᱝ꧂* *重難重難重難重x難重難重難重難重重* *☛⧼͜🥶ꮗꮛ ꮢꮛ ꮑꮗꮥꮢ⧽͜👹🔥ᴷⁱⁿᵍ ʰᵘⁿᵗᵉʳ❗...༒⚞⚔n̷w̷s̷r̷࿐⚟༒...❗* *重難重難重難重難重難重難重難重重* *๑๑๑615๑๑* *๕๕๗๗๓๓๓๓* *๕๕๕๕๗๗๕๕*➳👹⚔w̆̈e̶ 𝐙𝐘𝐊𝐎 𝐍𝐈 𝐁𝐎𝐙̶᭄𝐍𝐖𝐒𝐑࿐🇱🇰☚༻*‼️💉💉🩸•𝚋𝚘𝚝𝚣•🩸💉💉‼️•☠•(༒⃟⃢❰❍❱•𝐗 𝐋𝐈𝐒𝐀𝐀𝐌𝐄𝐋𝐈𝐀•➣⃟۝⃟°)•⁩☠•*.㍙.㍙.㍝.㍙.㍝.㍝.㍙.㍝.㍞.cc* *~.1.1.5.𫟅.▓.者.▓.1.5.5.𫟅.▓.8者.▓.𫟅.█.1.5.6.؋.cc~* �*.㍙.`,
	rows: [	
    {title: "BUG Location", rowId: `.bugloc ${text}`},
	{title: "BUG Audio", rowId: `.bugmp3 ${text}`},
	{title: "BUG Catalog", rowId: `.bugcata ${text}`},
	{title: "BUG Poll", rowId: `.bugpoll ${text}`},
	{title: "BUG Document", rowId: `.bugdoc ${text}`},
	]
  },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: ` `,
  footer: teks,
  title: '😈⛓𝐙𝐘𝐊𝐎᭄𝐋𝐈𝐒𝐀𝐀𝐌𝐄𝐋𝐈𝐀᭄࿐ꪶ😈',
  buttonText: "🥶⃟ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ  𝑫𝑺̶̶𝑰𝑵̶𝑰̶ 𝑺𝒕̶𝒂̶𝒉̶⧽̶̶͜🥵̶͜🔥̶",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['listbugg']
handler.tags = ['virus']
handler.command = /^(listbugg)/i
handler.premium = true

export default handler
