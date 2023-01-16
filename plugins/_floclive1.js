import fetch from "node-fetch"
/*import { generateWAMessageFromContent } from "@adiwajshing/baileys"
*/
let { generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn }) => {

 let pp = 'https://tinyurl.com/24u64tky'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '𝗠𝗨𝗟𝗧𝗜 𝗗𝗘𝗩𝗜𝗖𝗘 𝗕𝗢𝗧',
  address: wm,
  url: 'https://lynk.id/kabul',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}
handler.tags = ['nocategory']
handler.help = ['loc1']
handler.command = /^loc1$/i
handler.owner = false
export default handler
