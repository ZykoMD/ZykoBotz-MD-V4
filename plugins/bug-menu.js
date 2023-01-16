import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let bugmenu = ` 
█❏ *Name:* ${name}
█❏ *Tag:* ${tag}
█❏ *Status:* ${premiumTime > 0 ? 'Premium' : 'Free user' }
█❏ *Limit:* ${limit}
█❏ *Role:* ${role}
█❏ *Level:* ${level}
█❏ *Xp:* ${exp}
█▓▒░►─═❏
         
╔════ ≪ °*Bug Emot*° ≫ ════╗
║❏➣ ${usedPrefix}🌹 628xxxx
║❏➣ ${usedPrefix}🌻 628xxxx
║❏➣ ${usedPrefix}😎 628xxxx
║❏➣ ${usedPrefix}👽 628xxxx
║❏➣ ${usedPrefix}🗿 628xxxx
║❏➣ ${usedPrefix}😃 628xxxx
║❏➣ ${usedPrefix}💀 628xxxx
║❏➣ ${usedPrefix}😅 628xxxx
║❏➣ ${usedPrefix}🥶 628xxxx
║❏➣ ${usedPrefix}®️ 628xxxx
║❏➣ ${usedPrefix}🐓 628xxxx
╚════ ≪ °${nameown}° ≫ ════╝`
  let flaa = pickRandom(global.flaaaaa)
await conn.sendButton(m.chat, `${bugmenu}\n`,wm + '\n\n' + botdate, `${flaa}bugmenu`, [['NEXT','.bugmenu']], m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtube.com/@zykobotz',
                        mediaType: 2,
                        description: `anu`,
                        title: `${ucapan()} ${name}`,
                        body: `${bottime}`,          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        mediaUrl: 'https://youtube.com/@zykobotz'
                        
                      }}
})
}
handler.help = ['bugmenu']
handler.tags = ['virus']
handler.command = /^(bugmenu)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.flaaaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}