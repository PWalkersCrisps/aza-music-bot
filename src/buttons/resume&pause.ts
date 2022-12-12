module.exports = async (client: any, interaction: any, player: any, queue: any) => {
    if (!queue || !queue.playing) return interaction.reply({ content: 'No music currently playing... try again ? ❌', ephemeral: true });

    const success = queue.setPaused(false);

    if (!success) queue.setPaused(true);


    return interaction.reply({ content: `${success ? `Current music ${queue.current.title} paused ✅` : `Current music ${queue.current.title} resumed ✅`}`, ephemeral: true });
};