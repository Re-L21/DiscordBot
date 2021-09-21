module.exports = {
    name : 'leave',
    description : "Disconnect Exusiai from voice channel",
    async execute(message, args, cmd, client, Discord)
    {
        const voiceCh = message.member.voice.channel;
        
        if(!voiceCh)
            return message.channel.send('You need to be in the voice channel to do this command!!!');

        await message.channel.send('**Bye as!hole!!**');
        await voiceCh.leave();
    }
}