module.exports = {
    name: 'shuffle',
    description: 'shuffle the track',
    voiceChannel: true,

    async execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return interaction.reply({ content: `No music in the queue after the current one ${interaction.member}... try again ? ❌`, ephemeral: true });

        await queue.shuffle();

        return interaction.reply({ content:`Queue shuffled **${queue.tracks.length}** song(s) ! ✅` });
    },
};