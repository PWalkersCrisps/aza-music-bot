/* eslint-disable no-shadow */
import { Client, Collection, GatewayIntentBits } from 'discord.js'; // Import the Client, Collection, and Intents modules from discord.js

declare module 'discord.js' {
    export interface Client {
        commands: Collection<unknown, any>,
        categories: string[],
        data: any[]
    }
}
