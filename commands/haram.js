const {MessageEmbed} = require('discord.js');

module.exports = {
    name : "haram",
    description : "request nya mupid karena mupid wota sangean",
    execute(msg, args){
            if(args == "nudes"){
                msg.reply("Silahkan ngocok", {files: [
                    "commands/porno/turu.png"
                ]})
            }
        }
}

