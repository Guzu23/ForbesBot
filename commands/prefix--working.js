const db = require('quick.db');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Nu ai permisiunea pentru aceasta comanda!');
    if (!args.join) return message.channel.send('Te rog pune un prefix pentru a seta prefixul serverului!');
    let fetched = await db.fetch('prefix_${message.guild.id}');
    if (fetched === null) prefix = '=';
    else prefix = fetched;

    db.set('serverPrefix_${message.guild.id}', args.join(' ')).then(serverPrefix => {
        message.channel.send('Prefixul serverului a fost setat la ${serverPrefix}');
    });
};