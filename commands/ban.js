const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    nopermban = 'Nu ai permisiunea sa banezi membri!';
    needidtoban = 'Am nevoie de un id valid pentru a-l bana!';
    roletoohighertoban = 'Nu pot bana membri daca au un rol mai mare sau egal cu al meu!';
    banned = "Banat!";
    bandescription = " a fost banat.Motivul: ";
}
if (lang.lang === 'en') 
{
    
    nopermban = 'You don\'t have the permission to ban members!' 
    needidtoban = 'I need a valid id to ban it!'
    roletoohighertoban = 'I can\'t ban members if the have a role higher or equal than mine!'
    baned = "Banned!"
    bandescription = " has been banned.Reason: "
}
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(nopermban);

    let member = message.mentions.members.first();
    if (!member) return message.channel.send(needidtoban);
    if (!member.bannable) return message.channel.send(roletoohighertoban);

    let reason = args.slice(1).join(' ');

    await member.ban(reason)
    .catch(e => console.log("\x1b[33m", e));

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTitle(banned)
    .setDescription(member.user.tag + bandescription + reason)
    .setColor(0xFF0000)
    message.channel.send(embed)
}