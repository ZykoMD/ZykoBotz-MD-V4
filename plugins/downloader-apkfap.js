import fetch from 'node-fetch'

let handler = async (m, {text, usedPrefix, command, conn}) => {
let noteks = 'Kosong'
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Free Fire`
  
  if (command == 'apkdone') {
  let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '❏ ' + v.apps_name,
		description: '\n⋗ Versi: ' + v.apps_version + '\n⋗ Rate: ' + v.apps_rate + '\n⋗️ Tags: ' + v.apps_tag + '\n\n❏ Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `𝍤 ${command} Search!`,
		description: `Silakan pilih list Search di bawah\n\n*❏Search:* ${text}\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkgoogle') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '❏ ' + v.apps_name,
		description: '\n⋗ Versi: ' + noteks + '\n⋗ Rate: ' + noteks + '\n⋗️ Tags: ' + v.apps_tag + '\n\n⋗ Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `𝍤 ${command} Search!`,
		description: `Silakan pilih list Search di bawah\n\n*❏Search:* ${text}\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkmody') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Version: ' + noteks + '\n⏲️ Rate: ' + noteks + '\n👁️ Desc: ' + v.desc + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkshub') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Version: ' + noteks + '\n⏲️ Rate: ' + noteks + '\n👁️ View: ' + v.apps_views + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'happymod') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Version: ' + noteks + '\n⏲️ Rate: ' + v.apps_rate + '\n👁️ View: ' + v.apps_views + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'hostapk') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Released: ' + v.apps_released + '\n⏲️ Author: ' + v.apps_author + '\n👁️ Desc: ' + v.apps_desc + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'revdl') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Released: ' + noteks + '\n⏲️ Author: ' + noteks + '\n👁️ Desc: ' + noteks + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'toraccino') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Released: ' + v.apps_upload + '\n⏲️ Author: ' + v.apps_author + '\n⚡ Desc: ' + v.apps_desc + '\n👁️ Tag: ' + v.apps_tag + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'uapkpro') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.apps_name,
		description: '\n⌚ Version: ' + noteks + '\n⏲️ Rate: ' + v.apps_rate + '\n👁️ View: ' + v.apps_views + '\n📎 Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro'].map(v => v + ' <app>')
handler.command = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['random','downloader']

export default handler