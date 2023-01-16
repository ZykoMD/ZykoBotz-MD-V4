let handler = async(m, { conn, text }) => {
let tetete = `https://web-production-3ae2.up.railway.app/api/wallpaper/jeni?apikey=APIKEY`
conn.sendButtonImg(m.chat, tetete, `Nih`, botdate, 'Thanks', 'thanks', m) 
}
handler.help = ['wallpaperjeni']
handler.tags = ['logo','maker']
handler.command = /^(wallpaperjeni)$/i

export default handler 