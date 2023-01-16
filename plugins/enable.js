let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${htki} OPTIONS ${htka}`,
	rows: [
	    {title: "⦅✨⦆ ✦ Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "⦅🚫⦆ ✦ Delete", rowId: `${usedPrefix + command} delete`},
	    {title: "⦅🌏⦆ ✦ Public", rowId: `${usedPrefix + command} public`},
	{title: "️⦅🗣️⦆ ✦ Simi", rowId: `${usedPrefix + command} simi`},
	{title: "⦅🔞⦆ ✦ Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "⦅🌟⦆ ✦ PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "⦅🔗⦆ ✦ Antilinkgc", rowId: `${usedPrefix + command} antilinkgc`},
	{title: "⦅🔗⦆ ✦ Antilinktik", rowId: `${usedPrefix + command} antilinktik`},
	{title: "⦅🔗⦆ ✦ Antilinktel", rowId: `${usedPrefix + command} antilinktel`},
	{title: "⦅🔗⦆ ✦ Antilinkyt", rowId: `${usedPrefix + command} antilinkyt`},
	{title: "⦅🔗⦆ ✦ Antilinkig", rowId: `${usedPrefix + command} antilinkig`},
	{title: "⦅🔗⦆ ✦ Antilinkfb", rowId: `${usedPrefix + command} antilinkfb`},
	{title: "⦅🔗⦆ ✦ Antilinkhttp", rowId: `${usedPrefix + command} antilinkhttp`},
	{title: "️⦅🖼️⦆ ✦ Antisticker", rowId: `${usedPrefix + command} antisticker`},
	{title: "⦅⛔⦆ ✦ Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "⦅📛⦆ ✦ Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
    {title: "⦅📛⦆ ✦ Antivirtex", rowId: `${usedPrefix + command} antivirtex`},
	{title: "⦅⬆️⦆ ✦ Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "⦅🎶⦆ ✦ Autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	{title: "⦅🎨⦆ ✦ Autosticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "⦅🔎⦆ ✦ Detect", rowId: `${usedPrefix + command} detect`},
	{title: "⦅🔕⦆ ✦ Anti spam", rowId: `${usedPrefix + command} antispam`},
	{title: "⦅📂⦆ ✦ Document", rowId: `${usedPrefix + command} document`},
	{title: "⦅👤⦆ ✦ WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "⦅❗⦆ ✦ Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "⦅😴⦆ ✦ Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "⦅🔇⦆ ✦ Anti Call", rowId: `${usedPrefix + command} anticall`},
	{title: "⦅☑️⦆ ✦ Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "⦅💬⦆ ✦ PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "⦅🏢⦆ ✦ GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "⦅📷⦆ ✦ SwOnly", rowId: `${usedPrefix + command} swonly`},
	]
    },
]
 
const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
     case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break
    case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
  /*    chat.antiLinkBitly = isEnable
     break
     case 'antiLinkWa':
     if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
     break
     case 'antiLinkBitly':
     if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      */
      chat.antiVirtex = isEnable
      break
    case 'antispam':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.antispam = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.anticall = isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilinkgc':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkGc = isEnable
      break
    case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
    case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
    case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
    case 'antilinkhttp':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
    case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
    case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    // case 'autolevelup':
    //   isUser = true
    //   user.autolevelup = isEnable
    //   break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
     case 'autolevelup': 
     case 'levelup': 
       isUser = true 
       user.autolevelup = isEnable 
       break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
        default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `
╭───═[ STATUS ]═─── 
│⩽⩾ Type: *${type}*
│⩽⩾ Status: Succes!
│⩽⩾ Options: *${isEnable ? 'On' : 'Off'}*
│⩽⩾ For: *${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}*
┗─────────────···
`,wm, null, [[`${isEnable ? ' Off' : '️ On'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['Owner', '.owner']],m)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
