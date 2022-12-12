/* eslint-disable @typescript-eslint/no-var-requires */
import { client_id, testing_guild_id } from '../data/config.json';
import { REST, Routes } from 'discord.js';
import commands from '../data/interactionCommands';
import { config } from 'dotenv';
config();

const args = process.argv.slice(2);

module.exports = {
    name: 'ready',
    once: true,
    async execute(client: any) {
        try {
            console.log(`${ client.user.tag } is online, hopefully it works`);

            const rest = new REST({
                version: '9',
            }).setToken(process.env.BOT_TOKEN as string);

            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationCommands(client_id),
                { body: commands },
            );

            console.log('Successfully reloaded application (/) commands.');
        }
        catch (error) {
            console.error(error);
        }
    },
};