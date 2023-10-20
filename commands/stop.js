const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var servers = {};

    var server = servers[message.guild.id];

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}