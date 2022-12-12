/* eslint-disable @typescript-eslint/no-var-requires */
import index from '../index'; // Import the client from the index file

module.exports = {
    name: 'interactionCreate',
    async execute(interaction: any) {
        try {
            if (interaction.isCommand()) {
                const command = index.client.commands.get(interaction.commandName); // Get the command from the client's commands collection

                if (!command) return; // If the command is not found, return

                try {
                    await command.execute(index.client, interaction, index.player); // Execute the command
                }
                catch (error) {
                    console.error(error); // If there is an error, log it
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }
            }
            else if (interaction.isButton()) {
                const button = interaction.customId;

                const buttonFile = require(`../buttons/${button}`);

                try {
                    await buttonFile.execute(index.client, interaction, index.player);
                }
                catch (error) {
                    console.error(error);
                    await interaction.reply({ content: 'There was an error while executing this button!', ephemeral: true });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    },
};