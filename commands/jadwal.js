const {MessageEmbed} = require('discord.js');
const Matkul =  require('../models/matkul.model.js')

function hari(i){
    switch (i){
        case 1:
            return "Senin"
        case 2:
            return "Selasa"
        case 3:
            return "Rabu"
        case 4:
            return "Kamis"
        case 5:
            return "Jumat"
        case 6:
            return "Sabtu"
    }
}

function kulawik(i){
    switch(i){
        case "senin":
            return 1
        case "selasa":
            return 2
        case "rabu":
            return 3
        case "kamis":
            return 4
        case "jumat":
            return 5
    }
}

module.exports = {
    name : 'jadwal',
    description : "Jadwal Sisfo 3",
    execute: async (msg, args) => {
        const embed = new MessageEmbed()
        embed.setTitle("Jadwal Mata Kuliah Sisfo 03")
        embed.setColor("eb4034")
        let ulang = true
        
        const libur = ["minggu"]

        const matkul = await Matkul.findAll({
            attributes: ['hari', 'matkul', 'jam', 'ruang']
        })

        if(args){
            if(libur.includes(args)){
                msg.channel.send("Libur mas :v")
            }
            embed.color =   "0x"+Math.floor(Math.random()*16777215).toString(16)
            console.log(args)
            const matkul = await Matkul.findAll({
                attributes: ['hari', 'matkul', 'jam', 'ruang'],
                where: {
                    hari: kulawik(args.toLowerCase())
                }
            })
            embed.setTitle("Jadwal Mata Kuliah Hari"+hari(kulawik(args)))   
            
            for(i = 0; i < matkul.length; i++){
                embed.addField(matkul[i].matkul, matkul[i].jam)
            }

            msg.channel.send(embed)
        }else{
            embed.fields = []
            embed.color =   "0x"+Math.floor(Math.random()*16777215).toString(16)
            let w = 0
            for(let i = 0; i < matkul.length; i++){
                console.log("matkul",matkul[i].hari)
                console.log("w",w+1)
                if( matkul[i].hari == w+1){
                    embed.addField("---"+hari(w+1)+"---", "===============")
                    if((w+1) == 3){
                        w = w + 1
                    }
                    w++
                }
                embed.addField(matkul[i].matkul, matkul[i].jam)
                if(i == matkul.length-1){
                    // embed.setImage("https://blogger.googleusercontent.com/img/a/AVvXsEi4heX945F9mnnXQD8SjP0J_HxzHGnJeT8abPEXVfw4x9mVQrasV-bGeIYIfcEejsv23udGsN8XTHecFNKNTJfytHbT_kdiA5xYdE2B113rxYYlAWzPMaJJFHy_WkH8sY1_SB6WXTfvhCFzXmQbKobNq-jjfI7xKEh4snY4jkz7F1XAf-mjkYpVYEPT");
                    embed.setFooter('Jangan Sampai Melewatkan Kelas Ya')
                    msg.channel.send(embed)
                }
    
            }
        }

    }
}
