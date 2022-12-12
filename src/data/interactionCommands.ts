import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default [
    new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Replies with the bot info!'),
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with the help info!')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The command to get help for')),
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the server latency!'),
    new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Replies with the bot uptime!'),
    new SlashCommandBuilder()
        .setName('back')
        .setDescription('Go to the previous song in the queue'),
    new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear the queue'),
    new SlashCommandBuilder()
        .setName('controller')
        .setDescription('set controller channel')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to send the controller to')
                .setRequired(true)),
    new SlashCommandBuilder()
        .setName('jump')
        .setDescription('Jump to a specific song in the queue')
        .addIntegerOption(option =>
            option.setName('position')
                .setDescription('The position of the song in the queue')
                .setRequired(true)),
    new SlashCommandBuilder()
        .setName('loop')
        .setDescription('Loop the current song'),
    new SlashCommandBuilder()
        .setName('nowplaying')
        .setDescription('Get the current song info'),
    new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pause the current song'),
    new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song')
        .addStringOption(option =>
            option.setName('song')
                .setDescription('The song to play')
                .setRequired(true)),
    new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Get the current queue'),
    new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Remove a song from the queue')
        .addIntegerOption(option =>
            option.setName('position')
                .setDescription('The position of the song in the queue')
                .setRequired(true)),
    new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resume the current song'),
    new SlashCommandBuilder()
        .setName('save')
        .setDescription('Save the current song'),
    new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skip the current song'),
    new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the current song'),
    new SlashCommandBuilder()
        .setName('volume')
        .setDescription('Set the volume')
        .addIntegerOption(option =>
            option.setName('volume')
                .setDescription('The volume to set')
                .setRequired(true)),
];