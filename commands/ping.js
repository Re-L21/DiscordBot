module.exports = {
    name : 'ping',
    description : "This is ping command",
    execute(message, args) {
        message.channel.send('Pong!');
    } 
}