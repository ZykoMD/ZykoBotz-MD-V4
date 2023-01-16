 import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'Nih PP Yg Cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'Dan Ni PP YgCewe', m)
}
handler.help = ['ppcouple2', 'ppcp']
handler.tags = ['internet','premium']
handler.command = /^(pp(cp|couple2))$/i
handler.owner = true

export default handler 
