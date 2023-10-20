const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    purgeperm = 'Nu ai permisiunea sa stergi mesaje!';
    purgenan = 'Te rog pune un numar valid pentru a sterge mesaje!';
    purgenumbertoohigher = "Te rog pune un numar mai mic decat 100!"
    purgedeleted = 'Au fost sterse '
    purgemessages = ' de mesaje!'
}
if (lang.lang === 'en') 
{
    
    purgeperm = "You don\'t have the permission to delete messages!";
    purgenan = "Please put a valid number to delete messages!"
    purgenumbertoohigher = "Please put a number lower than 100!"
    purgedeleted = 'Has beed deleted '
    purgemessages = " messages!"
}
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(purgeperm);
    if(isNaN(args[0])) return message.channel.send(purgenan)
    if (args[0] > 100) return message.channel.send(purgenumbertoohigher)

    message.channel.bulkDelete(args[0])
    message.channel.send(purgedeleted + args[0] + purgemessages)
}