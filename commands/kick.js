const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    nokickperm = "Nu ai permisiunea sa dai membri afara!";
    needidtokick = "Am nevoie de un id valid pentru a da kick cuiva!";
    kickerror = "Imi pare rau dar nu am putut da kick acestei persoane! Eroare: ${error}";
    kickdescription = " a primit kick.Motivul: ";
    roletoohighertokick = 'Nu pot da kick unei persoane cu un rol mai mare sau egal cu al meu!'
}
if (lang.lang === 'en') 
{
    
    nokickperm = "You don\'t have the permission to kick members!";
    needidtokick = "I need a valid id to kick it!";
    kickerror = "I\'m sorry, but i cannot kick that person! Error: ${error}";
    kickdescription = " has been kicked.Reason: ";
    roletoohighertokick = "I can\'t kick a member with a role higher or equal than mine!"
}
exports.run = async (client, message, args) => {
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(nokickperm);
    if (!member) return message.channel.send(needidtokick)
    if (!member.kickable) return message.channel.send(roletoohighertokick)

    let reason = args.slice(1).join (' ');

    await member.kick(reason)
    .catch(error => message.channel.send(kickerror));

    let kickEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTitle('Kicked!')
    .setDescription(member.user.tag + kickdescription + reason )
    .setColor('yellow')
    message.channel.send(kickEmbed)
}