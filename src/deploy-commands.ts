/* eslint-disable @typescript-eslint/no-var-requires */
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { client_id, testing_guild_id } from './data/config.json'; // Import the client ID and guild ID from the config file
import { readdirSync } from 'fs'; // Import the file system module

import index from './index'; // Import the client from the index file
const commands = index.client.data;

import { config } from 'dotenv';
config(); // Loads the .env file

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('')); // Get all files in commands folder

for (const file of commandFiles) { // Loop through all files in the commands folder
    const command = require(`./commands/${file}`); // Current file
    commands.push(command.data.toJSON()); // Add the command to the commands array
}

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN as string); // Set's rest client to use the bot's token
rest.put(Routes.applicationGuildCommands(client_id, testing_guild_id), { body: commands }) // Push the commands to the guild
    .then(() => console.log('Successfully registered application commands.')) // Log success
    .catch(console.error); // Log error
