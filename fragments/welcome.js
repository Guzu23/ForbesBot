const lang = require('C:/Users/SmoTHy/ForbesBot/lang.json');
if (lang.lang === 'ro') 
{
    
    welcomewelcome = "Bun venit, "
    onserver = " pe server!"
    leftserver = ", a parasit acest server!"
}
if (lang.lang === 'en') 
{
    
    welcomewelcome = "Welcome, "
    onserver = " on server!"
    leftserver = ", left that server!"
}
module.exports = client => {
   //const joinchannel = member.guild.channels.find('name', 'botspam')
   //joinchannel.send('Un nou membru s-a alaturat!')

    var roles = Boolean(roles)

    function generateHex() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    
    client.on("guildMemberAdd", function(member) {
        member.guild.channels.find("name", "welcome").send(welcomewelcome + member.toString() + onserver);
    
        member.addRole(member.guild.roles.find("name", "Verified"));
    
        member.guild.createRole({
            name: member.user.username,
            color: generateHex(),
            permissions: []
        }).then(function(role) {
            member.addRole(role);
        });
    });

    client.on("guildMemberRemove", function(member) {
        member.guild.channels.find("name", "general").send(member.toString() + leftserver);
    });
};