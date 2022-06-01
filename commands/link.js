const {MessageEmbed} = require('discord.js');
const embed = new MessageEmbed()


const hari = (i) => {
    switch (i){
        case 'senin':
            return 1
        case 'selasa':
            return 2
        case 'rabu':
            return 3
        case 'kamis':
            return 4
        case 'jumat':
            return 5
    }
}
                    
const Matkul = require('../models/matkul.model.js')

module.exports = {
    name : 'link',
    description : "Link Gmeet Sisfo 3",
    execute: async (msg, args) =>  {
        embed.color =   "0x"+Math.floor(Math.random()*16777215).toString(16)    
        
        if(args[1] == "update"){
            Matkul.update(
                { 
                    link: args[4] 
                },
                {   where: {
                        hari: hari(args[2]),
                        sesi: args[3],
                    }
            }).then(() => {
                msg.reply("Link berhasil diupdate")
            }).catch(err => {
                msg.reply("Mohon masukan sesuai ketentuan")
            })
        }else{
            embed.fields = []
            const matkul = await Matkul.findAll({
                attributes: ['hari', 'matkul', 'jam', 'link', 'sesi'],
                where: {
                    hari: hari(args[1].toLowerCase()),
                    sesi: args[2],
                }
            })
    
                // console.log(matkul)
            if(matkul.length > 0){
                embed.setTitle("Link Mata Kuliah")
                for(let i = 0; i < matkul.length; i++){
                    embed.addField(matkul[i].matkul, matkul[i].jam)
                    embed.addField("Link", matkul[i].link)
                }
                msg.channel.send(embed)
            }else{
                embed.fields = []
                embed.setTitle("Mohon masukan hari dan sesi yang benar")
                msg.channel.send(embed)
            }
        }
    }
}
