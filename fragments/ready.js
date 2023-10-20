module.exports = client => {
    client.on("ready", function() {
        client.user.setStatus('dnd');
        client.user.setActivity('Among Us!');    /*client.users.size*/
        console.log("\x1b[36m", "\x1b[40m", "Ready!");
        console.log( "  Robotul a pornit cu numele: " + "\x1b[31m", client.user.tag);
        console.log("\x1b[36m", '  pentru' + "\x1b[31m", client.users.size + "\x1b[36m", 'useri, in' + "\x1b[31m", client.channels.size + "\x1b[36m", 'channel-uri de pe' + "\x1b[31m", client.guilds.size + "\x1b[36m", 'servere.'); 
    });
}