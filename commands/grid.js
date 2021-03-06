const createGridCanvas = require("../game/grid/create-grid-canvas");

module.exports = {
	name: "grid",
	aliases: ["empire"],
	description: "Displays the building grid and all the buildings.",
	async execute(message, args, user) {
		const gridImage = await createGridCanvas(user);
		message.channel.send(`<@${message.author.id}>'s Empire:`, gridImage);
	},
};