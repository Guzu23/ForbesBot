//----------RequireStart----------//
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const prefix = "=";
const secret = require('./secret.json');
const fs = require("fs")
require('./fragments/welcome.js')(client);
require('./fragments/ready.js')(client);
//const userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
//----------RequireStart----------//

//----------Music----------//
client.on('guildMemberSpeaking', (member, speaking) => {
    if(member.speaking) {
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    var servers = {};
    const YTDL = require("ytdl-core");
    var server = servers[message.guild.id];
        dispatcher.setVolume(0.5);
    }
});
//----------Music----------//

//----------Language----------//
var l = 'en';
let lang = JSON.parse(fs.readFileSync("./lang.json", "utf8"));
//----------Language----------//

//----------CommandsStart----------//
client.on ('message', async message => {

    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    if (command == 'lang#ro')
    { 
        lang = {
            lang: "ro"
        };
        fs.writeFile("./lang.json", JSON.stringify(lang), (err) => {
            if (err) console.error(err)
        });
        console.clear();
        client.exit
        client.login(secret.token);
        message.channel.send("Limba a fost schimbata in romana!");
    }
    if (command == 'lang#en')
    {
        lang = {
            lang: "en"
        };
        fs.writeFile("./lang.json", JSON.stringify(lang), (err) => {
            if (err) console.error(err)
        });
        console.clear();
        client.exit
        client.login(secret.token);
        message.channel.send("Limba a fost schimbata in engleza!");
    }
    try {
        if (command === 'lang#ro') return;
        if (command === 'lang#en') return;
        let commands = require('./commands/' + command + '.js');
        commands.run(client, message, args);
    }   catch (e) {
        if (e) {
            console.log(e.stack)
            message.channel.send('Aceasta comanda nu exista!')
        }
    }   finally {
        console.log(message.author.username + ':' + command)
    }
});
//----------CommandsStart----------//

client.login(secret.token);

//----------CommandsStart----------//


//Cod absolut necesar pentru pornirea robotului
 //const Discord = require("discord.js");
 //const bot = new Discord.Client();
 //bot.login(secret.token);
//Cod absolut necesar pentru pornirea robotului

//Cod cu diferite functii
 //bot.on('ready', function (evt) {
 //    logger.info('Conectat');
  //   logger.info('Logat ca: ' + bot.username + ' - (' + bot.id + ')');
 //});
 //bot.on('message', function (user, userID, channelID, message, evt, VoiceChannelID) {
    // if (message.substring(0, 1) == '_') {
       //  var args = message.substring(1).split(' ');
       //  var cmd = args[0];
        // args = args.splice(1);
         //switch(cmd) {
           //  case 'exemplu':
             //    bot.sendMessage({
               //      to: channelID,
                //     message: 'Exemplu de mesaj pe canalul de discord'
               //  });
               //  break;
        // }
    // }
 //});
//Cod cu diferite functii