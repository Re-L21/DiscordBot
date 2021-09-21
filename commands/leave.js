module.exports = {
    name : 'leave',
    description : "Disconnect Exusiai from voice channel",
    execute(message, args)
    {
        const voiceCh = message.member.voice.channel;
        
        if(!voiceCh)
            return message.channel.send('You need to be in the voice channel to do this command!!!');

        message.channel.send('**Bye as!hole!!**');

        voiceCh.leave();
    } 
}