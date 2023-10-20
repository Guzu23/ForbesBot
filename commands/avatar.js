const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setAuthor(user.username + "#" + user.discriminator )
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed);
}