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
		.setURL('https://discord.js.org/')
		.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		.setImage('https://i.imgur.com/AfFp7pu.png')
		.setTimestamp()
		.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        interaction.reply({embeds: [embed]});

    }
});



// inside a command, event listener, etc.
