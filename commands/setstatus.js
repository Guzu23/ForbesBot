const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    setstatusnoperm = 'Nu ai permisiunea la aceasta comanda!'
}
if (lang.lang === 'en') 
{
    
    setstatusnoperm = "You don\'t have the permission for that command!"
}
exports.run = async (client, message, args) => {
    var argresult = args.join(' ');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(setstatusnoperm);
    if (!argresult) argresult = 'online';
    client.user.setStatus(argresult);
}