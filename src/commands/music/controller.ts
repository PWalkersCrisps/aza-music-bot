import { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } from 'discord.js';

module.exports = {
    name: 'controller',
    description: 'set controller channel ',
    async execute(client: any, interaction: any, player: any) {
        const Channel = interaction.options.getChannel('channel');
        if (Channel.type !== 0) return interaction.reply({ content: 'you have to send it to a text channel.. ❌', ephemeral: true });


        const embed = new EmbedBuilder()
            .setTitle('control your music from the buttons below')
            .setImage(interaction.guild.iconURL({ size: 4096, dynamic: true }))
            .setColor('#36393e')
            .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: interaction.member.avatarURL({ dynamic: true }) });


        interaction.reply({ content: `sending controller to ${Channel}... ✅`, ephemeral: true });

        const back = new ButtonBuilder()
            .setLabel('Back')
            .setCustomId('back')
            .setStyle(ButtonStyle.Primary);

        const skip = new ButtonBuilder()
            .setLabel('Skip')
            .setCustomId('skip')
            .setStyle(ButtonStyle.Primary);

        const resumepause = new ButtonBuilder()
            .setLabel('Resume & Pause')
            .setCustomId('resume&pause')
            .setStyle(ButtonStyle.Danger);

        const save = new ButtonBuilder()
            .setLabel('Save')
            .setCustomId('savetrack')
            .setStyle(ButtonStyle.Success);

        const volumeup = new ButtonBuilder()
            .setLabel('Volume up')
            .setCustomId('volumeup')
            .setStyle(ButtonStyle.Primary);

        const volumedown = new ButtonBuilder()
            .setLabel('Volume Down')
            .setCustomId('volumedown')
            .setStyle(ButtonStyle.Primary);

        const loop = new ButtonBuilder()
            .setLabel('Loop')
            .setCustomId('loop')
            .setStyle(ButtonStyle.Danger);

        const nowplaying = new ButtonBuilder()
            .setLabel('Now Playing')
            .setCustomId('nowplaying')
            .setStyle(ButtonStyle.Secondary);

        const queuebutton = new ButtonBuilder()
            .setLabel('Queue')
            .setCustomId('queue')
            .setStyle(ButtonStyle.Secondary);


        const row1 = new ActionRowBuilder().addComponents(back, queuebutton, resumepause, nowplaying, skip);
        const row2 = new ActionRowBuilder().addComponents(volumedown, loop, save, volumeup);


        Channel.send({ embeds: [embed], components: [row1, row2] });

    },
};
