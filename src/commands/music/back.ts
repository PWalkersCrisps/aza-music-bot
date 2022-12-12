module.exports = {
    name: 'back',
    description: 'Go back the song before',
    async execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        if (!queue.previousTracks[1]) return interaction.reply({ content: `There was no music played before ${interaction.member}... try again ? ❌`, ephemeral: true });

        await queue.back();

        interaction.reply({ content:'Playing the **previous** track ✅' });
    },
};