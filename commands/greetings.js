// const {Client} = require('discord.js');
// const dc = new Client();
const {MessageEmbed, Collection} = require('discord.js');  
const Tugas = require('../models/tugas.model.js')
const Matkul = require('../models/matkul.model.js')

module.exports =  ('ready', async (dc) => {
    const embed = new MessageEmbed()
        
    const jam = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta' }).slice(0, 5)
    const id = "888243729209638932"
    

    const libur = [5,6]

    const tanggal = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Jakarta' }).split('/')
    let tg = tanggal.join('-')

    const d = new Date();
    let day = d.getDay()

    if((jam == "06:00") && libur.includes(day)){
        embed.setTitle('Selamat Pagi Onichan');
        embed.setDescription("Sekarang hari libur yuk kita bersantai")
        dc.channels.cache.get(id).send(embed)
        dc.channels.cache.get(id).send('@everyone')

    }
    else if(jam == "06:00"){
        const matkulHariIni = await Matkul.findAll({
            attributes : ['hari', 'sesi', 'jam', 'link', 'matkul'],
            where: {
                hari: day+1
            }
        })

        embed.setTitle('Selamat Pagi Onichan');
        embed.setDescription("Jalani hari ini dengan Penuh Semangat Belajar ya Onichan >//<")
        embed.addField("Jadwal Hari Ini", "...")

        embed.setColor("eb4034")

        for(let j = 0; j < matkulHariIni.length; j++){
            embed.addField(matkulHariIni[j].dataValues.matkul,matkulHariIni[j].dataValues.jam)
        }

        dc.channels.cache.get(id).send(embed)
        
        dc.channels.cache.get(id).send('@everyone')

    }else if(jam == "18:00"){
        embed.setTitle('Selamat Malam Onichan');
        embed.setDescription("Gimana Hari mu genki deska?")
        embed.addField('Jangan Lupa dengan Tugas nya ya', '===')

        const tugasHariIni = await Tugas.findAll({
            attributes : ['nama', 'jam'],
            where: {
                tanggal: tg
            }
        })

        if(tugasHariIni.length > 0){
            for(let i = 0; i < tugasHariIni.length; i++){
                embed.addField("Nama Tugas", tugasHariIni[i].nama)
                embed.addField("Jam", tugasHariIni[i].jam)
            }
        }else{
            embed.addField("Tidak Ada Tugas Hari Ini", "...")
        }


        dc.channels.cache.get(id).send(embed)
        dc.channels.cache.get(id).send('@everyone')

    }else if(jam == "23:59"){
        await Tugas.destroy({
            where: {
                tanggal: tg
            }
        })
    }
})



