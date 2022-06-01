const {MessageEmbed} = require('discord.js');
const tanggal = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Jakarta' }).split('/')
let tg = tanggal.join('-')

const embed = new MessageEmbed();

const Tugas = require('../models/tugas.model.js')

module.exports = {
    name : "deadline",
    description : "Tugas cok",
    execute: async (msg, args) => {
            const now = tg.split('-').reverse().join("-")
            if(args == "sekarang"){
                embed.fields = []
                embed.setTitle("Deadline Hari Ini")
                const tugas = await Tugas.findAll({
                    attributes: ['nama', 'tanggal', 'jam'],
                    where: {
                        tanggal: now
                    }
                })
                console.log(tugas)
                if(tugas.length == 0){
                    embed.setTitle("Tidak ada tugas yang harus dikerjakan")
                }else{
                    for(let i = 0; i < tugas.length; i++){
                        if(tugas[i].tanggal == now){
                            embed.addField("=====", "=====")
                            embed.addField("Nama Tugas", tugas[i].nama)
                            embed.addField("Tanggal", tugas[i].tanggal.split('-').reverse().join("-"))
                            embed.addField("Jam", tugas[i].jam)
                        }
                    }
                }
                embed.color = 0XFF0000
                msg.reply(embed)
            }else{
                const tugas = await Tugas.findAll({
                    order: [
                        ["tanggal", 'ASC']
                    ],
                    attributes: ['nama', 'tanggal', 'jam'],
                })
                embed.setTitle('Tugas yang Harus Dikerjakan')
                embed.fields = []
                if(tugas.length == 0){
                    embed.setTitle("Tidak ada tugas minggu ini")
                }else{
                    for(let i = 0; i < tugas.length; i++){
                        embed.addField("=====", "=====")
                        embed.addField("Nama Tugas", tugas[i].nama)
                        embed.addField("Tanggal", tugas[i].tanggal)
                        embed.addField("Jam", tugas[i].jam)
                    }
                }
                embed.color = 0x00ff00
                msg.reply(embed)
            }
        }
}