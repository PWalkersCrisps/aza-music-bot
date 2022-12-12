module.exports = async (client: any, interaction: any, player: any, queue: any) => {
    if (!queue || !queue.playing) return interaction.reply({ content: 'No music currently playing... try again ? ❌', ephemeral: true });

    if (!queue.previousTracks[1]) return interaction.reply({ content: `There was no music played before ${interaction.member}... try again ? ❌`, ephemeral: true });

    await queue.back();

    interaction.reply({ content:'Playing the **previous** track ✅', ephemeral: true });
};
