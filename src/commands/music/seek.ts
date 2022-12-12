import ms from 'ms';

module.exports = {
    name: 'seek',
    description: 'skip back or foward in a song',
    async execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.reply}... try again ? ❌`, ephemeral: true });

        const timeToMS: string = ms(interaction.options.getString('time'));

        if (timeToMS >= queue.current.durationMS) return interaction.reply({ content:`The indicated time is higher than the total time of the current song ${interaction.member}... try again ? ❌\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`, ephemeral: true });

        await queue.seek(timeToMS);

        interaction.reply({ content: `Time set on the current song **${ms(parseFloat(timeToMS), { long: true })}** ✅` });
    },
};