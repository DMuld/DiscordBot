const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '-'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);

}

client.once('ready', () => 
{
    console.log('Devskin ready to serve!');
});

client.on('message', message => 
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/); //This is for the space after -play
    const command = args.shift().toLocaleLowerCase();

    if (command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    }
    else if (command === '')
    {
        message.channel.send('Enter something dumbass!');
    }
    else if (command === 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    }
    else if (command === 'play')
    {
        client.commands.get('play').execute(message, args);
    }
    else
    {
        message.channel.send('Not a command!');
    }
});








//This uses the token. Makes sure that it is at the very end of the file.
client.login('*Enter Client Token*');
