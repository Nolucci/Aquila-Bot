import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Replied : pong.",
    run: async ({ interaction }) => {
        interaction.reply("Pong");
    }
});
