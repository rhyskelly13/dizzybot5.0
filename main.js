const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

const fs = require('fs');

const moment = require('moment')

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is online!');
    memberCounter(client)
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(client, message, args, Discord, moment);


    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(client, message, args, Discord, moment);


    } else if (command === 'help') {
        client.commands.get('help').execute(client, message, args, Discord, moment);


    } else if (command === 'clear') {
        client.commands.get('clear').execute(client, message, args, Discord, moment);


    } else if (command === 'kick') {
        client.commands.get('kick').execute(client, message, args, Discord, moment);


    } else if (command === 'ban') {
        client.commands.get('ban').execute(client, message, args, Discord, moment);


    } else if (command === 'mute') {
        client.commands.get('mute').execute(client, message, args, Discord, moment);


    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(client, message, args, Discord, moment);

    } else if(command == 'whois') {
        client.commands.get('whois').execute(client, message, args, Discord, moment);
    }
});

client.login(process.env.token);
