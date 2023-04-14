const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!date) {
		return "Unable to determine the time of year!";
	}
	//Ура! Я оказывается случайно кое что удалил из what-season.test.js и просидел зря 3 часа
	if (
		date == Date() ||
		isNaN(date) ||
		Object.getOwnPropertyNames(date).length > 0 ||
		!(date instanceof Date) ||
		!(Object.prototype.toString.call(date) === "[object Date]")
	) {
		throw new Error("Invalid date!");
	} else {
		const month = date.getMonth();
		if (month >= 2 && month <= 4) {
			return "spring";
		} else if (month >= 5 && month <= 7) {
			return "summer";
		} else if (month >= 8 && month <= 10) {
			return "autumn (fall)";
		} else if (month <= 1 || month === 11) {
			return "winter";
		}
	}
}

module.exports = {
	getSeason,
};
