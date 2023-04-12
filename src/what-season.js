const {NotImplementedError} = require("../extensions/index.js");

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
const date = new Date(2020, 02, 31);
function getSeason(date) {
	if (isNaN(Date.parse(yourData))) {
		return false;
	}
	const currentMonth = date.getMonth();
	if (currentMonth > 1 && currentMonth <= 4) {
		return "spring";
	} else if (currentMonth > 4 && currentMonth <= 7) {
		return "summer";
	} else if (currentMonth > 8 && currentMonth <= 11) {
		return "autumn (fall)";
	} else if (currentMonth === 11 || currentMonth <= 1) {
		return "winter";
	}
}

getSeason();
getSeason(date);
module.exports = {
	getSeason,
};
