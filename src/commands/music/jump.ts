module.exports = {
    name: 'jump',
    description: 'Jumps to particular track in queue',
    async execute(client: any, interaction: any, player: any) {
        const track = interaction.options.getString('song');
        const number = interaction.options.getNumber('number');

        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });
        if (!track && !number) interaction.reply({ content: `You have to use one of the options to jump to a song ${interaction.member}... try again ? ❌`, ephemeral: true });

        if (track) {
            for (const song of queue.tracks) {
                if (song.title === track || song.url === track) {
                    queue.skipTo(song);
                    return interaction.reply({ content: `skiped to ${track} ✅` });
                }
            }
            return interaction.reply({ content: `could not find ${track} ${interaction.member}... try using the url or the full name of the song ? ❌`, ephemeral: true });
        }
        if (number) {
            const trackIndex = number - 1;
            const trackname = queue.tracks[trackIndex].title;
            if (!trackname) return interaction.reply({ content: `This track dose not seem to exist ${interaction.member}...  try again ?❌`, ephemeral: true });
            queue.skipTo(trackIndex);
            return interaction.reply({ content: `Jumped to ${trackname}  ✅` });
        }

    },
};