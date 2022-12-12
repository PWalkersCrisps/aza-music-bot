module.exports = {
    name: 'filter',
    description: 'add a filter to your track',
    async execute(client: any, interaction: any, player: any) {
        const queue = client.player.getQueue(interaction.guildId);

        if (!queue || !queue.playing) return interaction.reply({ content: `No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        const actualFilter = queue.getFiltersEnabled()[0];

        const infilter = interaction.options.getString('filter');

        const filters: string[] = [];

        queue.getFiltersEnabled().map((x: string) => filters.push(x));
        queue.getFiltersDisabled().map((x: string) => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === infilter.toLowerCase());

        if (!filter) return interaction.reply({ content: `This filter doesn't exist ${interaction.member}... try again ? ❌\n${actualFilter ? `Filter currently active ${actualFilter}.\n` : ''}List of available filters ${filters.map(x => `**${x}**`).join(', ')}.`, ephemeral: true });

        const filtersUpdated: Record<string, boolean> = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        interaction.reply({ content: `The filter ${filter} is now **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Reminder the longer the music is, the longer this will take.*` });
    },
};