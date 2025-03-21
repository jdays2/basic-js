const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let result = arr;
	const sorted = (a, b) => {
		return +a - +b;
	};
	const filtSort = arr
		.filter((e) => {
			return e !== -1;
		})
		.sort(sorted);
	let count = 0;
	for (let i = 0; i < result.length; i++) {
		if (result[i] === -1) {
			continue;
		}
		result[i] = filtSort[count];
		count++;
	}
	return result;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
	sortByHeight,
};
