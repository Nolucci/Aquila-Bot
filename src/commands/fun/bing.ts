import { Command } from "../../structures/Command";

export default new Command({
    name: "bing", 
    description: "Replied : chilling.",
    run: async ({ interaction }) => {
        interaction.reply("Chilling");
    }
});
