const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    var fortunes = ["Adevarat","Fals"];
}
if (lang.lang === 'en') 
{
    
    var fortunes = ["True","False"];
}
exports.run = async (client, message, args) => {
    message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
}