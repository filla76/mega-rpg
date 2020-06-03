module.exports = {
	// Bronze
	["bronze sword"]: {
		name: "bronze sword",
		cost: {
			gold: 5,
			["bronze bar"]: 2,
		},
		requirement: {
			building: "blacksmith",
			level: 0,
		},
		stats: {
			at: 15,
		},
	},
	["oak shortbow"]: {
		name: "oak shortbow",
		cost: {
			gold: 5,
			oak: 5,
		},
		requirement: {
			building: "blacksmith",
			level: 0,
		},
		stats: {
			at: 20,
		},
	},
	["bronze helmet"]: {
		name: "bronze helmet",
		cost: {
			gold: 4,
			["bronze bar"]: 1,
		},
		requirement: {
			building: "blacksmith",
			level: 0,
		},
		stats: {
			hp: 8,
		},
	},
	["bronze platemail"]: {
		name: "bronze platemail",
		cost: {
			gold: 10,
			["bronze bar"]: 2,
		},
		requirement: {
			building: "blacksmith",
			level: 0,
		},
		stats: {
			hp: 15,
		},
	},
	["bronze leggings"]: {
		name: "bronze leggings",
		cost: {
			gold: 5,
			["bronze bar"]: 1,
		},
		requirement: {
			building: "blacksmith",
			level: 0,
		},
		stats: {
			hp: 10,
		},
	},

	// Iron
	["iron sword"]: {
		name: "iron sword",
		cost: {
			gold: 30,
			["iron bar"]: 5,
		},
		requirement: {
			building: "blacksmith",
			level: 1,
		},
		stats: {
			at: 35,
		},
	},
	["yew shortbow"]: {
		name: "yew shortbow",
		cost: {
			gold: 30,
			["yew"]: 10,
		},
		requirement: {
			building: "blacksmith",
			level: 1,
		},
		stats: {
			at: 43,
		},
	},
	["iron helmet"]: {
		name: "iron helmet",
		cost: {
			gold: 13,
			["iron bar"]: 2,
		},
		requirement: {
			building: "blacksmith",
			level: 1,
		},
		stats: {
			hp: 15,
		},
	},
	["iron platemail"]: {
		name: "iron platemail",
		cost: {
			gold: 15,
			["iron bar"]: 3,
		},
		requirement: {
			building: "blacksmith",
			level: 1,
		},
		stats: {
			hp: 22,
		},
	},
	["iron leggings"]: {
		name: "iron leggings",
		cost: {
			gold: 15,
			["iron bar"]: 2,
		},
		requirement: {
			building: "blacksmith",
			level: 1,
		},
		stats: {
			hp: 17,
		},
	},

	// Steel
	["steel sword"]: {
		name: "steel sword",
		cost: {
			gold: 60,
			["steel bar"]: 7,
		},
		requirement: {
			building: "blacksmith",
			level: 2,
		},
		stats: {
			at: 50,
		},
	},
	["northern shortbow"]: {
		name: "northern shortbow",
		cost: {
			gold: 60,
			yew: 15,
			oak: 15,
		},
		requirement: {
			building: "blacksmith",
			level: 2,
		},
		stats: {
			at: 60,
		},
	},
	["steel helmet"]: {
		name: "steel helmet",
		cost: {
			gold: 20,
			["steel bar"]: 3,
		},
		requirement: {
			building: "blacksmith",
			level: 2,
		},
		stats: {
			hp: 25,
		},
	},
	["steel platemail"]: {
		name: "steel platemail",
		cost: {
			gold: 30,
			["steel bar"]: 5,
		},
		requirement: {
			building: "blacksmith",
			level: 2,
		},
		stats: {
			hp: 35,
		},
	},
	["steel leggings"]: {
		name: "steel leggings",
		cost: {
			gold: 20,
			["steel bar"]: 2,
		},
		requirement: {
			building: "blacksmith",
			level: 2,
		},
		stats: {
			hp: 23,
		},
	},
};