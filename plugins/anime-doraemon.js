import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/doraemon?apikey=APIKEY'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(doraemon)$/i
handler.tags = ['anime']
handler.help = ['doraemon']
handler.premium = false
handler.limit = true

export default handler