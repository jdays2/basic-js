const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 *
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 * [  [ 1, 2, 0 ],
 *    [ 2, 1, 1 ],
 *    [ 0, 1, 0 ]
 * ]
 */
let matrix = [
	[true, false, false],
	[false, true, false],
	[false, false, false],
	[true, false, false],
];
function minesweeper(matrix) {
	const rows = matrix.length;
	const cols = matrix[0].length;
	let myMatrix = [];

	for (let i = 0; i < rows; i++) {
		myMatrix.push([]);
		for (let j = 0; j < cols; j++) {
			let counter = 0;
			//top
			if (i > 0 && matrix[i - 1][j]) {
				counter++;
			}
			//bottom
			if (i < rows - 1 && matrix[i + 1][j]) {
				//bottom
				counter++;
			}
			//left
			if (j > 0 && matrix[i][j - 1]) {
				counter++;
			}
			//right
			if (j < cols - 1 && matrix[i][j + 1]) {
				counter++;
			}
			//top-left
			if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
				counter++;
			}
			//top-right
			if (i > 0 && j < cols - 1 && matrix[i - 1][j + 1]) {
				counter++;
			}
			//bottom-left
			if (i < rows - 1 && j > 0 && matrix[i + 1][j - 1]) {
				counter++;
			}
			//bottom-right
			if (i < rows - 1 && j < cols - 1 && matrix[i + 1][j + 1]) {
				counter++;
			}
			myMatrix[i][j] = counter;
		}
	}

	return myMatrix;
}
console.log(minesweeper(matrix));

module.exports = {
	minesweeper,
};
