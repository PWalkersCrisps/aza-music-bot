import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

module.exports = {
    name: 'nowplaying',
    description: 'veiw what is playing!',
    voiceChannel: true,

    execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        const track = queue.current;

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.createProgressBar();


        const embed = new EmbedBuilder()
            .setAuthor({ name: track.title, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
            .setThumbnail(track.thumbnail)
            .setDescription(`Volume **${queue.volume}**%\nDuration **${trackDuration}**\nProgress ${progress}\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}`)
            .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: interaction.member.avatarURL({ dynamic: true }) })
            .setColor(0xff0000)
            .setTimestamp();

        const saveButton = new ButtonBuilder()
            .setLabel('Save this track')
            .setCustomId('savetrack')
            .setStyle(ButtonStyle.Danger);

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

        const resumepause = new ButtonBuilder()
            .setLabel('Resume & Pause')
            .setCustomId('resume&pause')
            .setStyle(ButtonStyle.Success);


        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

        interaction.reply({ embeds: [embed], components: [row] });
    },
};