module.exports = async (client: any, interaction: any, player: any, queue: any) => {
    if (!queue || !queue.playing) return interaction.reply({ content: 'No music currently playing... try again ? ❌', ephemeral: true });

    const success = queue.skip();

    return interaction.reply({ content: success ? `Current music ${queue.current.title} skipped ✅` : `Something went wrong ${interaction.member}... try again ? ❌`, ephemeral: true });
};