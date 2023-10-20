const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    var coinflip = ['Cap','Pajura']
}
if (lang.lang === 'en') 
{
    
    var coinflip = ['Head','Tail']
}
exports.run = async (client, message, args) => {
    var CoinFlip = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setColor('0x00FF00')
        .setAuthor(message.author.username + "#" + message.author.discriminator)
        .addField(coinflip[Math.floor(Math.random() * coinflip.length)], "  -coinflip")
    message.channel.sendEmbed(CoinFlip);
}