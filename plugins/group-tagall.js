let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *Pesan dari Admin Group* ⋘
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `\nbukan elyas`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['t <pesan>']
handler.tags = ['group']
handler.command = /^(t)$/i

handler.group = true
handler.admin = true

module.exports = handler
