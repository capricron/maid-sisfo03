const Tugas = require('../models/tugas.model.js')

module.exports = {
    name: "tugas",
    description : "no ingpo",
    execute(msg, args, user){
        if(args[1] == 'tambah'){
            const tanggal = args[3].split('-').reverse().join("-")
            Tugas.create({ 
                    nama: args[2],
                    tanggal,
                    jam: args[4],
                    updateBy: user
            }).then(() => {
                msg.reply("Tugas berhasil ditambahkan")
            }).catch(err => {
                msg.reply("Mohon masukan sesuai ketentuan")
            })
        }
    }
}

