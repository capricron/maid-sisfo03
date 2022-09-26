const cron = require('node-cron');

const {Client, Collection} = require('discord.js');
const dc = new Client();
const conf = require('./config.json');

const kasar = ['ajg', 'anjing','babi','kontol','kntl', 'bajingan', 'bjg', 'anjiiing', 'anjiing',
'asw', 'asu', 'bangsad', 'bgsd', 'bngsd','goblok', 'blok', 'blog', 'memek', 'mmk', 'ngentod', 'bacot','jingan',
'bajingan', 'fuck','jmbt','jembut','ngentot','tolol','ngntd','nghentot','kntd','anjinh','anj','kenthu','pepek',
'puki','kanjut','kimak','contol','bangsat','bego','kentot','ngentot'
]

const fs  = require('fs')
const reminder = require('./commands/reminder.js');
const greetings = require('./commands/greetings.js');
const perintah = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of files){
    const kongkon = require(`./commands/${file}`);
    perintah.set(kongkon.name, kongkon)
}
    
dc.on('ready', () => {
        console.log('Bot Berjalan');
        cron.schedule('* * * * *', () => {
            reminder(dc);
            greetings(dc);
        })
        dc.user.setActivity('', {
        type : "PLAYING"
    })
})

dc.on('message', (msg) => {
    console.log(msg.content);
    let user = msg.author.username
    let args = msg.content.split(' ')
    let input = []
    
    for(let i = 0; i <= args.length; i++){
        try{
            let arg = args[i].toLocaleLowerCase()
            input.push(arg)
        }catch{
            break;
        }
    }
    
    for(let i = 0; i < input.length; i++){
        if(kasar.includes(input[i])){
            msg.reply("Kok kamu kasar bang")
            msg.react('😡');
        }
    }

    switch(input[0]){
        case "ingpo":
            perintah.get('ingpo').execute(msg)
            break;
            
        case "jadwal":
            perintah.get("jadwal").execute(msg, input[1])
            break;
                
        case "intro":
            perintah.get("intro").execute(msg)
            break;

        case "tugas":
            perintah.get("tugas").execute(msg, input,user)
            break;
                    
        case "deadline":
            perintah.get('deadline').execute(msg, input[1])
            break;
        
        // case "link":
        //     perintah.get('link').execute(msg , input)
        //     break;
        
        case "send":
            perintah.get('haram').execute(msg , input[1])

        case "tes":
            greetings(dc);

        case "hai":
            perintah.get('halu').execute(msg, input)
            
        default:
            input = []
            break;
        }
})
                    
dc.login(conf.token)