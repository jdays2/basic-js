const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

let domains = ["epam.com"];
function getDNSStats(domains) {
	if (!domains.length) {
		return {};
	}
	let result = {};
	for (let element of domains) {
		const lilOne = element.split(".").reverse();
		let thisElement = ``;
		lilOne.map((e) => {
			thisElement = `${thisElement}.${e}`;
			if (result[thisElement]) {
				result[thisElement] = (result[thisElement] || 0) + 1;
			} else {
				result[thisElement] = 1;
			}
		});
	}
	return result;
}

console.log(getDNSStats(domains));

module.exports = {
	getDNSStats,
};
