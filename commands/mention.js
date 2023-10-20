const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    needidtomention = "Am nevoie de un id valid pentru a mentiona pe cineva!"
    hellomention = "Salutare, "
    searchedby = ", esti cautat(a) de "
    
}
if (lang.lang === 'en') 
{
    needidtomention = "I need a valid id to mention someone!"
    hellomention = "Hello, "
    searchedby = ", you are searched by "
    
}
exports.run = async (client, message, args) => {
    let tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!tagged) {
        message.channel.send(needidtomention)
        return;
    }
    message.channel.send(hellomention + tagged + searchedby + message.author.toString() + ".")
}