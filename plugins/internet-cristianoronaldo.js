import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo|ronaldo)$/i
handler.limit = false
export default handler
