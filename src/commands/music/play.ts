import { QueryType } from 'discord-player';

module.exports = {
    name: 'play',
    description: 'play a song!',
    async execute(client: any, interaction: any, player: any) {
        await interaction.deferReply();
        const song = interaction.options.getString('song');
        const res = await client.player.search(song, {
            requestedBy: interaction.member,
            searchEngine: QueryType.AUTO,
        });

        if (!res || !res.tracks.length) return interaction.editReply({ content: `No results found ${interaction.member}... try again ? ❌`, ephemeral: true });

        const queue = await client.player.createQueue(interaction.guild, {
            metadata: interaction.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultvolume,
            leaveOnEnd: client.config.opt.leaveOnEnd,
        });

        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        }
        catch {
            await client.player.deleteQueue(interaction.guildId);
            return interaction.editReply({ content: `I can't join the voice channel ${interaction.member}... try again ? ❌`, ephemeral: true });
        }

        await interaction.editReply({ content:`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧` });

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
