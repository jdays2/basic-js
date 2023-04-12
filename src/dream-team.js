const {NotImplementedError} = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const names = [
	["David Abram"],
	["Robin Attfield"],
	"Thomas Berry",
	["Paul R.Ehrlich"],
	"donna Haraway",
	" BrIaN_gOodWiN  ",
	{
		0: "Serenella Iovino",
	},
	"Erazim Kohak",
	"  val_plumwood",
];
function createDreamTeam(names) {
	if (!Array.isArray(names)) {
		return false;
	}
	let resultArray = [];
	for (let i = 0; i < names.length; i++) {
		if (typeof names[i] === "string" && names[i] !== " ") {
			resultArray.push(
				names[i]
					.split("")
					.find((e) => e !== " ")
					.toUpperCase()
			);
		}
	}
	const sorting = (a, b) => {
		return (
			a.toLowerCase().charCodeAt(0) - 96 - (b.toLowerCase().charCodeAt(0) - 96)
		);
	};
	return resultArray.sort(sorting).join("");
}

console.log(createDreamTeam(names));

module.exports = {
	createDreamTeam,
};
