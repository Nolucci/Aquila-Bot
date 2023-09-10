// at the top of your file
import { Command } from "../../structures/Command";
import { EmbedBuilder, messageLink } from "discord.js";

export default new Command({
    name: "projects",
    description: "Replied : Aquila Studios current projects.",

    run: async ({ interaction }) => {

		const user = interaction.user;

		const embed = new EmbedBuilder()
		.setColor('Blue')
		.setTitle('Aquila Studio : Projets')
		.setURL('https://github.com/Nolucci/Aquila-Bot/tree/master')
		.setDescription('Studio créé en 2023 par des étudiants passionés jeux vidéos.')
		.setThumbnail('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.addFields(
			{ name: 'Projets Actuels :', value: '\u2000' },
			{ name: 'AmmA : Souls of the Kingdom', value: 'https://github.com/Nolucci/AmmA', inline: true},
		)
        .addFields(
            { name: 'Projets Finis :', value: '\u2000' },
        )
        .addFields(
            { name: 'Projets Futurs :', value: '\u200b' },
        )
		//.setImage('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.setTimestamp()
		.setFooter({ text : 'Aquila Bot', iconURL: user.avatarURL()});

        interaction.reply({embeds: [embed]});

    }
});
