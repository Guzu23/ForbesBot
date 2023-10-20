const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    yn = ["Da","Nu"];
}
if (lang.lang === 'en') 
{
    
    yn = ["Yes","No"];
}
exports.run = async (client, message, args) => {
    message.channel.send(yn[Math.floor(Math.random() * yn.length)]);
}