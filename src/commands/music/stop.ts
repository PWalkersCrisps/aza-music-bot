module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content:`No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        queue.destroy();

        interaction.reply({ content: 'Music stopped intero this server, see you next time ✅' });
    },
};