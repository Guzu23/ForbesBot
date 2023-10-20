const Discord = require('discord.js');
const YTDL = require("ytdl-core");
const prefix = "=";
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    needlinktoplay = "Pentru a pune muzica ai nevoie de un link!"
    needconnected = "Trebuie sa fii conectat(a) intr-un Voice Channel!"
}
if (lang.lang === 'en') 
{
    
    needlinktoplay = "To play music, you need a link!"
    needconnected = "You need to be connected in a Voice Channel!"
}

exports.run = async (client, message, args) => {

    var servers = {};

    var argm = message.content.substring(prefix.length).split(" ");

    function play(connection, message) {
        var server= servers[message.guild.id];
    
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
        server.queue.shift();
    
        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    }

    if (!argm[1]) {
        message.channel.send(needlinktoplay);
        return;
    }

    if (!message.member.voiceChannel) {
        message.channel.send(needconnected);
        return;
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }

    var server = servers[message.guild.id];

    server.queue.push(argm[1]);

    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    });
}