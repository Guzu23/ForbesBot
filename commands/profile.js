const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    needidtoshowprofile = "Am nevoie de un id valid pentru a afisa profilul cuiva!"
}
if (lang.lang === 'en') 
{
    
    needidtoshowprofile = "I need a valid id to show someone\'s profile!"
}
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let tagmention = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!tagmention) {
        message.channel.send(needidtoshowprofile)
        return;
    }
    var status = user.presence.status;
    var game = user.presence.game;
   // var rol = undefined;
    var embed = new Discord.RichEmbed()
        .addField("User: [ " + user.username + "#" + user.discriminator + " ]", "UserID: [ " + user.id + " ]")
        .addField("Status: ", status, true)
        .addField("Playing: ", game, true)
        //.addField("Roles: ", rol , true)
        .addField("Bot?", user.bot, true)
        .setColor('RANDOM')
        .setThumbnail(user.avatarURL)
    message.channel.sendEmbed(embed)
}