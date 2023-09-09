// at the top of your file
import { Command } from "../../structures/Command";
import { EmbedBuilder, messageLink } from "discord.js";

export default new Command({
    name: "aquila",
    description: "replies with presentation of Aquila Studio",

    run: async ({ interaction }) => {

		const embed = new EmbedBuilder()
		.setColor('White')
		.setTitle('Aquila Studio')
		.setURL('https://github.com/Nolucci/Aquila-Bot/tree/master')
		.setAuthor({ name: 'Aquila Bot', url: 'https://github.com/Nolucci/Aquila-Bot/tree/master' })
		.setDescription('Studio créé en 2023 par des étudiants en informatique intéressés par la création de jeux vidéos.')
		.setThumbnail('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.addFields(
			{ name: 'Adhérents au Studio :', value: '\u2000' },
			{ name: 'Franceskin Nathan', value: 'Dev', inline: true},
			{ name: 'Dumeniaud Kilian', value: 'Dev', inline: true },
		)
		//.setImage('https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/Aquila_Logo_grand.png')
		.setTimestamp()
		.setFooter({ text: 'Nolucci', iconURL: 'https://raw.githubusercontent.com/Nolucci/Aquila-Bot/master/Ressources/nolucci_pp.png'});

        interaction.reply({embeds: [embed]});

    }
});



// inside a command, event listener, etc.
