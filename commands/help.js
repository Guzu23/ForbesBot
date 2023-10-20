const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    help = "Comenzi: = help, mention, info, kick, ban, avatar, 8ball, play, profile, purge, stop, yn, ascii, ping, setgame, setstatus, language, coinflip, dice, lotto, lottocheck.";
}
if (lang.lang === 'en') 
{
    help = 'Commands: = help, mention, info, kick, ban, avatar, 8ball, play, profile, purge, stop, yn, ascii, ping, setgame, setstatus, language, coinflip, dice, lotto, lottocheck.';
}
exports.run = async (client, message, args) => {
    message.channel.send(help);
}