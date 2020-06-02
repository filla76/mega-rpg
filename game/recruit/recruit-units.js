const allUnits = require("./all-units");

const recruitUnits = async (user, unit, amount) => {
	unit = allUnits[unit];

	const canBeRecuited = checkIfPossibleToRecruit(user, unit, amount);
	if(!canBeRecuited.response) return canBeRecuited.message;

	await user.recruitUnits(unit, amount);
	return canBeRecuited.message;
};

const checkIfPossibleToRecruit = (user, unit, amount) =>{
	// Is there any unit at all or invalid number, or was it an invalid arg?
	if(!unit || amount < 1) return { response: false, message: "invalid unit name or amount" };

	// Is barracks on sufficient level?
	const { building:reqBuilding, level:reqLevel } = unit.requirement;
	if(!user.empire.find(building => building.name === reqBuilding && building.level >= reqLevel)) return { response: false, message: `Your barracks needs to be level ${reqLevel}` };

	// Check if you are population capped
	const popFromBuildings = Object.values(user.army.units.toJSON()).map(unitBuilding => Object.values(unitBuilding).reduce((accUnit, curUnit) => {return accUnit + curUnit;}, 0));
	const currentPop = popFromBuildings.reduce((accUnit, curUnit) => accUnit + curUnit);
	if(user.maxPop < currentPop + amount) return { response: false, message: `You need ${currentPop + amount - user.maxPop} more population` };


	// Sufficient resources?
	for(const resource in unit.cost) {
		if(user.resources[resource] < unit.cost[resource] * amount) return { response: false, message: `You are missing ${user.resources[resource] - unit.cost[resource]} of ${resource}` };
	}

	return { response: true, message: "success" };
};

module.exports = recruitUnits;