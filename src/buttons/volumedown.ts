import { max_volume } from '../data/config.json';
module.exports = async (client: any, interaction: any, player: any, queue: any) => {
    if (!queue || !queue.playing) return interaction.reply({ content: 'No music currently playing... try again ? ❌', ephemeral: true });

    const vol = Math.floor(queue.volume - 5);

    if (vol < 0) return interaction.reply({ content: `I can not move the volume down any more ${interaction.member}... try again ? ❌`, ephemeral: true });

    if (queue.volume === vol) return interaction.reply({ content: `The volume you want to change is already the current one ${interaction.member}... try again ? ❌`, ephemeral: true });

    const success = queue.setVolume(vol);

    return interaction.reply({ content:success ? `The volume has been modified to **${vol}**/**${max_volume}**% 🔊` : `Something went wrong ${interaction.member}... try again ? ❌`, ephemeral: true });
};