const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw Error("'arr' parameter must be an instance of the Array!");
	}

	let array = [];
	let lastDiscarded = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "--double-next") {
			if (arr[i + 1] !== undefined) {
				array.push(arr[i + 1]);
			}
		} else if (arr[i] === "--discard-prev") {
			if (!lastDiscarded && array.length > 0) {
				array.pop();
			}
			lastDiscarded = false;
		} else if (arr[i] === "--double-prev") {
			if (!lastDiscarded && i > 0 && array.length > 0) {
				array.push(array[array.length - 1]);
			}
			lastDiscarded = false;
		} else if (arr[i] === "--discard-next") {
			i++;
			lastDiscarded = true;
		} else {
			array.push(arr[i]);
			lastDiscarded = false;
		}
	}

	return array;
}
console.log([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]);
console.log(
	transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
module.exports = {
	transform,
};
