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
	const isInvalidDate = (d) => {
		return !(d instanceof Date) || isNaN(d.getTime());
	};

	if (!date) {
		return "Unable to determine the time of year!";
	}

	if (isInvalidDate(date)) {
		throw new Error("Invalid date!");
	}

	if (isInvalidDate(new Date(date))) {
		throw new Error("Invalid date!");
	}

	const month = date.getMonth();

	if (typeof month !== "undefined") {
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
