const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
   
 *
 * The result should be 9
 */
let matrix = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3],
];
function getMatrixElementsSum(matrix) {
	let counter = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i - 1] && matrix[i - 1][j] !== 0) {
				counter += matrix[i][j];
			}
			if (!matrix[i - 1]) {
				counter += matrix[i][j];
			}
		}
	}
	return counter;
}

console.log(getMatrixElementsSum(matrix));

module.exports = {
	getMatrixElementsSum,
};
