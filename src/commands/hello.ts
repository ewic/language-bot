import { SlashCommandBuilder } from "discord.js";

export default () => ({
    data: new SlashCommandBuilder()
    .setName('Hello')
    .setDescription('Replies with Hello World!'),
    async execute(interaction) {
        await interaction.reply('Hello World!');
    }
})
