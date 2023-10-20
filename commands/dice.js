const Discord = require('discord.js');
var dice = ['1','2','3','4','5','6']
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    var numbers = 'Numere: '
}
if (lang.lang === 'en') 
{
    
    var numbers = 'Numbers: '
}
exports.run = async (client, message, args) => {
    message.channel.send()
    var Dice = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor('0xFF0000')
        .setAuthor(message.author.username + "#" + message.author.discriminator)
        .addField(numbers + dice[Math.floor(Math.random() * dice.length)] + ' ' + dice[Math.floor(Math.random() * dice.length)], "  -dice")
    message.channel.sendEmbed(Dice);
}