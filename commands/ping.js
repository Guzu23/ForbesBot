const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    message.channel.send('Pong! ' + (Date.now() - message.createdTimestamp) + ' ms')
}