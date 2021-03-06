const calculateStats = require("./calculate-stats");

// Takes the user and the npc and battles the npc with only the hero at a 50-100% modifier
// Returns win (bolean), lossPercentage (1 = 100% loss of hero hp), and the combat modifier
const pveHero = async (user, npc) => {
	const { heroStats } = calculateStats(user);
	const combatModifier = (1 - Math.random() / 2);
	const userHp = heroStats.currentHealth * combatModifier;
	const userAt = heroStats.attack * combatModifier;
	const { health: oppHp, attack: oppAt } = npc.stats;

	const losses = (userHp + userAt) - (oppHp + oppAt);
	const win = losses > 0 ? true : false;
	let lossPercentage = ((userHp + userAt) - (oppHp + oppAt)) / (userHp + userAt);
	lossPercentage = lossPercentage < 0 ? 0 : lossPercentage;

	await user.heroHpLoss(lossPercentage);

	return { win, lossPercentage: 1 - lossPercentage, combatModifier };
};

// Takes the user and the npc and battles the npc with the full army at a 50-100% modifier
// Returns win (bolean), lossPercentage (1 = 100% loss of units), and the combat modifier
const pveFullArmy = async (user, npc) => {
	const { totalStats } = calculateStats(user);
	const combatModifier = (1 - Math.random() / 2);
	const userHp = totalStats.health * combatModifier;
	const userAt = totalStats.attack * combatModifier;
	const { health: oppHp, attack: oppAt } = npc.stats;

	const losses = (userHp + userAt) - (oppHp + oppAt);
	const win = losses > 0 ? true : false;
	let lossPercentage = ((userHp + userAt) - (oppHp + oppAt)) / (userHp + userAt);
	lossPercentage = lossPercentage < 0 ? 0 : lossPercentage;

	await user.unitLoss(lossPercentage);

	return { win, lossPercentage: 1 - lossPercentage, combatModifier };
};

// user vs opponent duel with full army (units + hero), returns an object with the winner and loser
const pvpFullArmy = async (user, opp) => {
	const { totalStats: userStats } = calculateStats(user);
	const { health: userHp, attack: userAt } = userStats;
	const { totalStats: oppStats } = calculateStats(opp);
	const { health: oppHp, attack: oppAt } = oppStats;

	const losses = (userHp + userAt) - (oppHp + oppAt);

	// Determine winner
	let loser;
	let winner;

	// User won
	if(losses > 0) {
		let lossPercentage = ((userHp + userAt) - (oppHp + oppAt)) / (userHp + userAt);
		if(!lossPercentage) lossPercentage = 0;
		winner = await user.unitLoss(lossPercentage);
		loser = await opp.unitLoss(0);

	}
	// Opponent won
	else {
		let lossPercentage = ((oppHp + oppAt) - (userHp + userAt)) / (oppHp + oppAt);
		if(!lossPercentage) lossPercentage = 0;
		winner = await opp.unitLoss(lossPercentage);
		loser = await user.unitLoss(0);
	}

	return { winner, loser };
};


module.exports = { pveFullArmy, pveHero, pvpFullArmy };
