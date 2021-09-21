module.exports = {
    name : 'ping',
    description : "This is ping command",
    execute(message, args, cmd, client, Discord) {
        message.channel.send('Pong!');
    } 
}