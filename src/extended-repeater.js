const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
	const repeatTimes =
		options.repeatTimes !== undefined ? options.repeatTimes : 1;
	const separator = options.separator !== undefined ? options.separator : "+";
	let addition = options.addition !== undefined ? options.addition : "";
	const additionRepeatTimes =
		options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
	const additionSeparator =
		options.additionSeparator !== undefined ? options.additionSeparator : "|";

	str = String(str);
	addition = String(addition);

	let result = "";

	for (let i = 0; i < repeatTimes; i++) {
		result += str;
		for (let j = 0; j < additionRepeatTimes; j++) {
			result += addition;
			if (j !== additionRepeatTimes - 1) {
				result += additionSeparator;
			}
		}
		if (i !== repeatTimes - 1) {
			result += separator;
		}
	}
	return result;
}

module.exports = {
	repeater,
};
