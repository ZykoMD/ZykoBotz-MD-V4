/*let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.vietnam', m)
}
handler.help = ['vietnam']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/vietnam'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(vietnam)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['vietnam']
handler.limit = false
export default handler


