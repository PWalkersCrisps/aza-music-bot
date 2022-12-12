import { QueryType } from 'discord-player';

module.exports = {
    name: 'playnext',
    description: 'song you want to playnext',
    async execute(client: any, interaction: any, player: any) {
        await interaction.deferReply();
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.editReply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        const song = interaction.options.getString('song');

        const res = await client.player.search(song, {
            requestedBy: interaction.member,
            searchEngine: QueryType.AUTO,
        });

        if (!res || !res.tracks.length) return interaction.editReply({ content: `No results found ${interaction.member}... try again ? ❌`, ephemeral: true });

        if (res.playlist) return interaction.editReply({ content: `This command dose not support playlist's ${interaction.member}... try again ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0);

        await interaction.editReply({ content:'Track has been inserted into the queue... it will play next 🎧' });

    },
};
