const figlet = require('figlet')
const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    pleasetext = 'Te rog pune un text!'
    
}
if (lang.lang === 'en') 
{
    
    pleasetext = 'Please put a text!'
}

exports.run = async (client, message, args) => {
    if (!args.join(' ')) return message.channel.send(pleasetext);
    figlet(args.join(' '), (err, data) => {
        message.channel.send(data, {
            code: 'ascii'
        });
    });
};