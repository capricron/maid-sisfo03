module.exports = {
    name: "halu",
    description : "",
    execute: async (msg, halu) => {

        if (halu[1] == 'istriku'){
            if(halu[2] != "<@943950766652137503>"){
                msg.reply("Apaan sih lu jelek tau gak")
            }else{
                msg.reply("Hai juga sayang")
            }
        }
    }
}