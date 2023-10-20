const Discord = require('discord.js');
var lotto = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49']
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    var numbers = 'Numere: '
    var winner = 'Daca te simti castigator contacteaza un administrator!'
    var noadminperm = 'Nu ai permisiunea la aceasta comanda!'
    var needidtoexeccommand = "Am nevoie de un id valid pentru a executa aceasta comanda!"
}
if (lang.lang === 'en') 
{
    
    var numbers = 'Numbers: '
    var winner = "If you feel winner, contact an administrator!"
    var noadminperm = "You don\'t have the permission for that command!"
    var needidtoexeccommand = "I need a valid id to execute that command!"
}
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(noadminperm);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    let tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!tagged) {
        message.channel.send(needidtoexeccommand)
        return;
    }
    var Lotto = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setColor('0x00FFFF')
        .setAuthor("User: [ " + user.username + "#" + user.discriminator + " ]")
        .addField(numbers + lotto[Math.floor(Math.random() * lotto.length)] + ', ' + lotto[Math.floor(Math.random() * lotto.length)] + ', ' + lotto[Math.floor(Math.random() * lotto.length)] + ', ' + lotto[Math.floor(Math.random() * lotto.length)] + ', ' + lotto[Math.floor(Math.random() * lotto.length)] + ', ' + lotto[Math.floor(Math.random() * lotto.length)] + '.' , winner)
    message.channel.sendEmbed(Lotto);
}