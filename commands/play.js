const ytdl = require('ytdl-core');
const ytSearch = require('yt-search'); 

module.exports = {
    name : 'play',
    description : 'play some music',
    async execute(message, args)
    {
        const voiceCh = message.member.voice.channel;
        
        if(!voiceCh)
            return message.channel.send('You need to be in the voice channel to do this command!!!');

        const permission = voiceCh.permissionsFor(message.client.user);
        
        if(!permission.has('CONNECT'))
            return message.channel.send('You dont have the correct permission');
        
        if(!permission.has('SPEAK'))
            return message.channel.send('You dont have the correct permission');

        if(!args.length)
            return message.channel.send('What should I play? dumbass!');
        
        const connection = await voiceCh.join();

        const videoFinder = async (query) => {
            const videoRes = await ytSearch(query);

            return (videoRes.videos.length > 1 ) ? videoRes.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        if(video)
        {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream,{seek:0, volume : 1}).on('finish', () => {
                voiceCh.leave();
            });

            await message.reply(`:thumbsup: Now Playing **${video.title}**`);

        } else {
            message.channel.send('No video result found');
        }

               
        
    }
}