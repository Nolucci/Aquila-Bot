import { Command } from "../../structures/Command";
import { EmbedBuilder, messageLink } from "discord.js";

export default new Command({
    name: "sales",
    description: "Replied : Aquila Studio sales.",

    run: async ({ interaction }) => {
		
		const user = interaction.user;

		const embed = new EmbedBuilder()
		.setColor('Green')
		.setTitle('Aquila Studio : Ventes')
		.setURL('https://github.com/Nolucci/Aquila-Bot/tree/master')
		.setDescription('Le nombre de jeux vendus en temps réel')
		.setThumbnail('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.addFields(
			{ name: 'Ventes :', value: '\u2000' },
			{ name: '- AmmA : Souls of the Kingdom', value: '0', inline: true},
		)
		.setURL('https://github.com/Nolucci/Aquila-Bot/tree/')
		//.setImage('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.setTimestamp()
		.setFooter({ text : 'Aquila Bot', iconURL: user.avatarURL()});

        interaction.reply({embeds: [embed]});

    }
});