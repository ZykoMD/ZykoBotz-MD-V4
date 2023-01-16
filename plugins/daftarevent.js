// By Jarot
// • thank you jarot offc 
// • mau ubah script cjs ke esm tapi tidak bisa 
// • sinih sama gw bisa hubungi gw whatsapp : Wa.me/6282124690625
// • jangan lupa bawa rokok sama kopi 🗿
// •  BY ZYKO-MD
let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan isi nama, alasan mengikuti event'
        if (text.length > 100) throw 'Maaf Teks Terlalu Panjang, Maksimal 100 Teks!'
            const alasan = `*「 Daftar 」* _Event_ \nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
                for (let jid of global.rowner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
                    m.reply(alasan, jid)
                        m.reply('✔️Permintaan Telah Dikirim ke Owner, Silahkan tunggu') 
                        }
                        handler.help = ['daftarevent'].map(v => v + ' <alasan>')
                        handler.tags = ['exp', 'rpg']
                        handler.command = /^(daftarevent)$/i
                        handler.premium = false
                        
                        export default handler
                        
                        