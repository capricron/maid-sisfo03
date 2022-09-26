// const {Client} = require('discord.js');
// const dc = new Client();
const {MessageEmbed} = require('discord.js');

module.exports = ('ready', (dc) => {
    const embed = new MessageEmbed()
    const d = new Date();
    let day = d.getDay()
    // let day = 4
    
    const jamSekarang = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta' }).slice(0, 5)
    const id = "888011036840579078"


    const jadwal = require('./jadwal.json');
    let j = 1;

    for (let i = 0; i < jadwal.length; i++){
        if(j == day){
            for(let k = 0; k < jadwal[i].jam.length; k++){
                let limaMenit = (parseInt(jadwal[i].jam[k].slice(3, 5)) - 30)
                limaMenit = limaMenit.toString()
                
                if(limaMenit < 0){
                    let tambahJam = (parseInt(jadwal[i].jam[k].slice(0,2))-1)
                    waktu =  tambahJam+':'+ (parseInt(limaMenit) + 60).toString()
                }else{
                    waktu = jadwal[i].jam[k].slice(0, 3)+limaMenit
                }

                if(jamSekarang == waktu){
                    embed.setTitle(`Mata Kuliah`)
                    embed.setDescription('30 menit lagi akan dimulai')
                    embed.addField(jadwal[i].matkul[k], jadwal[i].jam[k])
                    dc.channels.cache.get(id).send(embed)
                    dc.channels.cache.get(id).send('@everyone')
                }else if(jamSekarang == jadwal[i].jam[k].slice(0, 5)){
                    embed.setTitle(`Mata Kuliah`)
                    embed.setDescription('Semangat Belajar Onichan >//<')
                    embed.addField(jadwal[i].matkul[k], jadwal[i].jam[k])
                    dc.channels.cache.get(id).send(embed)
                    dc.channels.cache.get(id).send('@everyone')
                }
            }
        }
        j++
    }
    
})

