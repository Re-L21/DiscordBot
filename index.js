const {Client, Intents, Collection } = require('discord.js');
const fs = require('fs');

const {
    prefix,
    token,
    botName
} = require('./config.json');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const client = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//check if the bot is ready or not
client.once('ready', () => {
    console.log(botName + ' is on standby');
});

//command section
client.on('message', message => {

    //check message for bot
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //bot commands
    if(command === 'summon')
        client.commands.get('summon').execute(message, args);

    else if(command === 'ping')
        client.commands.get('ping').execute(message, args);

    else if(command === 'stop')
        client.commands.get('stop').execute(message, args);

    else if(command === 'play')
        client.commands.get('play').execute(message, args);

    else if(command === 'leave')
        client.commands.get('leave').execute(message, args);

    else
        message.channel.send('the f!ck are you typin ? lol learn to type bitch ');
    
})

//bot login using the oauth2
client.login(token);