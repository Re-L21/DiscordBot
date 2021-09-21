module.exports = {
    name : 'summon',
    description : "Summon the almighty Exusiai",
    execute(message, args, cmd, client, Discord)
    {
        const voiceCh = message.member.voice.channel;
        
        if(!voiceCh)
            return message.channel.send('You need to be in the voice channel to do this command!!!');

        message.channel.send('I\'m on my way sir');

        voiceCh.join();
    } 
}