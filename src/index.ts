/* eslint-disable @typescript-eslint/no-var-requires */
import { Client, Collection, GatewayIntentBits } from 'discord.js'; // Import the Client, Collection, and Intents modules from discord.js
import { readdirSync } from 'fs'; // Import the readdirSync module from fs
import { resolve } from 'path'; // Import the resolve module from path
import { Player } from 'discord-player';
import { djsClient, discordPlayer } from './data/clientOptions';

import { config } from 'dotenv';
config();

const client = new Client(djsClient);
const player = new Player(client, discordPlayer);

client.commands = new Collection<string, any>(); // Create a new Collection for the commands
client.categories = readdirSync(resolve('./build/commands')); // Makes the sub-directories in ./commands/* into their own categories
['command', 'event'].forEach((handler) => {
    require(resolve(`./build/handlers/${handler}`))(client); // For each of the two handlers, require the handler file and run it
});

client.login(process.env.BOT_TOKEN); // Discord Client Login
export default { client, player };