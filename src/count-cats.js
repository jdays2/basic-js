const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

let backYard = [
	[0, 1, "^^"],
	[0, "^^", 2],
	["^^", 1, 2],
];

function countCats(backYard) {
	let counter = 0;
	for (let i = 0; i < backYard.length; i++) {
		for (let j = 0; j < backYard[i].length; j++) {
			if (backYard[i][j] === "^^") {
				counter++;
			} else continue;
		}
	}
	return counter;
}

console.log(countCats(backYard));

module.exports = {
	countCats,
};
