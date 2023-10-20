const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    info = "Pregatit pentru mai mult!";
}
if (lang.lang === 'en') 
{
    
    info = "Ready for more!";
}
exports.run = async (client, message, args) => {
    message.channel.send(info);
}