const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arrays) {
		let counter = 1;
		let maxDepth = 1;
		for (let i = 0; i < arrays.length; i++) {
			if (Array.isArray(arrays[i])) {
				counter = this.calculateDepth(arrays[i]) + 1;
				if (counter > maxDepth) {
					maxDepth = counter;
				}
			}
		}
		return maxDepth;
	}
}
module.exports = {
	DepthCalculator,
};
