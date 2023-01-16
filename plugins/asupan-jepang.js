/*let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/japan'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(jepang)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['jepang']
handler.limit = false
export default handler

