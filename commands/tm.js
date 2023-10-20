const Discord = require('discord.js');
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
const prefix = "=";
const figlet = require('figlet');
//const trollChannel = message.guild.channels.find("name", "troll-msg");
if (lang.lang === 'ro') 
{
    
    needmsg = "Pentru a trimite un mesaj trebuie sa introduci un mesaj sau sa fii pe canalul \"troll-msg\" !"
    wrongchannel = "Canal gresit!"
    nopermadmin = "Nu ai permisiunea de a executa aceasta comanda!"
}
if (lang.lang === 'en') 
{
    
    needmsg = "To send a message, you need to send a message or to be in \"troll-msg\" channel!"
    wrongchannel = "Wrong channel!"
    nopermadmin = "You don\'t have the permission to execute that command!"
}

exports.run = async (client, message, args) => {
    var argm = message.content.substring(prefix.length).split(" ");
   // if (!trollChannel) {
   //     return trollChannel.send(wrongchannel);
   // }
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(nopermadmin);
    if (!argm[1]) {
        message.guild.channels.find("name", "troll-msg").send(needmsg);
        return;
    }

    message.guild.channels.find("name", "general").send(args.slice(0).join(' '));
}