import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/kpop?apikey=APIKEY'
	conn.sendButton(m.chat, '© nih kpop jangan lupa subscribe channel ZYKOBOTZ-MD OFFICIAL 👍', botdate, await(await fetch(url)).buffer(), [[' Next ',`.${command}`]],m)
}
handler.command = /^(kpop)$/i
handler.tags = ['internet']
handler.help = ['kpop']
handler.premium = false
handler.limit = true

export default handler