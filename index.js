const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const fs = require('node:fs');
const { waitForDebugger } = require('node:inspector');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '954905453597437983';
const guildId = '927766185255247933';

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken('OTU0OTA1NDUzNTk3NDM3OTgz.YjZ7AQ.PkmJE5cNjz1RKNJzodMwohdEIbs');

(async () => {
	try {
    console.log('Refreshing The Client....')
    console.log('Refreshed Client. Code has been updated therefore bot has also.')
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

client.login('OTU0OTA1NDUzNTk3NDM3OTgz.YjZ7AQ.PkmJE5cNjz1RKNJzodMwohdEIbs')
