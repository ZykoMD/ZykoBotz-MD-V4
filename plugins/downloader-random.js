const CLIENT_ID = 'zZeR6I5DM5NMAYEhk7J9vveMqZzpCIym'
import soundcloud from 'soundcloud-downloader'
import util from 'util'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!args[0]) throw `Use example ${usedPrefix}${command} link`
await soundcloud.download(args[0], CLIENT_ID).then(async (buff) => {
            let hasil = await fetch(buff)
        await conn.sendFile(m.chat, hasil, command + '.mp3', '', m, null, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: hasil
     }}
  })
  }
    }
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^s(oundcloud(d(own|l)2|2)|cd(own|l)2)$/i

export default handler

const isUrl = function (url) {
     return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
