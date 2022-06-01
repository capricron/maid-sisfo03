const {MessageEmbed} = require('discord.js');
const embed = new MessageEmbed();
module.exports = {
    name : "intro",
    description : "Salam Kenal",
    execute(msg){
        embed.fields = []
        embed.setTitle('Hai Aku Maid Sisfo');
        embed.setDescription(`Aku diciptakan sebagai reminder jadwal dan tugas sisfo 03\nJadi nanti lima menit sebelum mata kuliah dimulai aku akan mengabari kalian\nDan juga saat mata kuliah dimulai aku akan mengabari kalian juga jadi tenang saja :)\nOh iya aku juga akan mengingatkan deadline hari ini saat pukul 6 pagi dan pukul 6 sore\nBerikut Command yang bisa aku lakukan \n `);
        embed.addField('intro', "Aku akan memperkenalkan diriku >//<")
        embed.addField('ingpo', 'No ingpo');
        embed.addField('jadwal', 'Memberikan seluruh jadwal mata kuliah');
        embed.addField('jadwal {hari}', 'Memberikan jadwal sesuai hari yang di berikan contoh jadwal senin');
        embed.addField('deadline', 'Menampilkan seluruh deadline yang ada di database');
        embed.addField('deadline sekarang', "Menampilkan deadline pada hari ini")
        embed.addField('link {hari} {no}', "Menampilkan Link Gmeet")
        embed.addField('link update {hari} {no} {link pake https}', "Update Link")
        embed.addField('tambah tugas {nama tugas} (tidak boleh ada spasi) {tanggal} (16-03-2022) {jam} (23:59:00)', "Menambahkan tugas")
        msg.channel.send(embed)
    }
}