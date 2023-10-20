const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    reload = "Robotul s-a restartat cu succes!";
}
if (lang.lang === 'en') 
{
    
    reload = "The bot restarted successfully!";
}

exports.run = async (client, message, args) => {
    console.clear();
    console.refresh;
    message.channel.send(reload);
}