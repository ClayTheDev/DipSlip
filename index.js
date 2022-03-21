const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const fs = require('fs');
const Discord = require('discord.js');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
const prefix = '!'
client.on('message', message => {

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.legnth).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'suggestions'){
		client.commands.get('suggestions').execute(message, args, command, client, discord);
	}
	
})

console.log('Refreshing The Client....')
console.log('Refreshed Client. Code has been updated therefore bot has also.')


client.login('OTU0OTA1NDUzNTk3NDM3OTgz.YjZ7AQ.QG4VxmegCxyca5EOe9hqO1Nm4xk');
