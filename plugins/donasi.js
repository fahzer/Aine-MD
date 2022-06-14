let handler = async m => m.reply(`
╭─「 Gopay•Dana•Pulsa 」
│ •  [0857-5418-0729]
│ •  [0857-5418-0729]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
