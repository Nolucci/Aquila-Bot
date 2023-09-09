import { Command } from "../../structures/Command";

export default new Command({
    name: "bing",
    description: "replies with chilling",
    run: async ({ interaction }) => {
        interaction.reply("Chilling");
    }
});
