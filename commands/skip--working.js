const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var server = servers[message.guild.id];

    var servers = {};
    
    if (server.dispatcher) server.dispatcher.end();
}