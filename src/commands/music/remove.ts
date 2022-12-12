module.exports = {
    name: 'remove',
    description: 'remove a song from the queue',
    async execute(client: any, interaction: any, player: any) {
        const number = interaction.options.getNumber('number');
        const track = interaction.options.getString('song');

        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });
        if (!track && !number) interaction.reply({ content: `You have to use one of the options to remove a song ${interaction.member}... try again ? ❌`, ephemeral: true });

        if (track) {

            for (const song of queue.tracks) {
                if (song.title === track || song.url === track) {
                    queue.remove(song);
                    return interaction.reply({ content: `removed ${track} from the queue ✅` });
                }

            }

            return interaction.reply({ content: `could not find ${track} ${interaction.member}... try using the url or the full name of the song ? ❌`, ephemeral: true });
        }

        if (number) {

            const trackIndex = number - 1;
            const trackname = queue.tracks[trackIndex].title;

            if (!trackname) return interaction.reply({ content: `This track dose not seem to exist ${interaction.member}...  try again ?❌`, ephemeral: true });

            queue.remove(trackIndex);

            return interaction.reply({ content: `removed ${trackname} from the queue ✅` });
        }


    },
};