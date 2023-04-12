const {NotImplementedError} = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const sample = "1";

function dateSample(sample) {
	// console.log(
	// 	isNaN(+sample) + " " + (+sample <= 0) + " " + (+sample > MODERN_ACTIVITY)
	// );
	const number = Number(sample);
	if (
		isNaN(number) ||
		number <= 0 ||
		number > MODERN_ACTIVITY ||
		typeof sample !== "string"
	) {
		return false;
	}

	const y = 0.693 / HALF_LIFE_PERIOD;

	const result = Math.ceil(Math.log(MODERN_ACTIVITY / number) / y);
	return result;
}

console.log(dateSample(sample));

module.exports = {
	dateSample,
};
