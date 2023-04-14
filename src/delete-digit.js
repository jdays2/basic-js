const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let string = n.toString().split("");
	let currentValue = 0;
	for (let i = 0; i < string.length; i++) {
		const newOne = [];
		newOne.push(...string.slice(0, i));
		newOne.push(...string.slice(i + 1));
		let newNumber = +newOne.join("");
		if (newNumber > currentValue) {
			currentValue = newNumber;
		}
	}
	return currentValue;
}

module.exports = {
	deleteDigit,
};
