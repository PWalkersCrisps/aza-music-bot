import { GatewayIntentBits } from 'discord.js';
export const djsClient = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
};
export const discordPlayer = {
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25,
    },
};