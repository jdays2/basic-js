const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(data = true) {
		this.data = data;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}

		message = message.toUpperCase();
		key = key.toUpperCase();

		const messageLength = message.length;
		const keyLength = key.length;
		let result = "";

		for (let i = 0, j = 0; i < messageLength; i++) {
			const currentSymbol = message.charCodeAt(i);
			if (currentSymbol >= 65 && currentSymbol <= 90) {
				const keySymbol = key.charCodeAt(j % keyLength) - 65;
				result += String.fromCharCode(
					((currentSymbol - 65 + keySymbol) % 26) + 65
				);
				j++;
			} else {
				result += message[i];
			}
		}

		return this.data ? result : result.split("").reverse().join("");
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error("Incorrect arguments!");
		}

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		const encryptedMessageLength = encryptedMessage.length;
		const keyLength = key.length;
		let result = "";

		for (let i = 0, j = 0; i < encryptedMessageLength; i++) {
			const currentSymbol = encryptedMessage.charCodeAt(i);
			if (currentSymbol >= 65 && currentSymbol <= 90) {
				const keySymbol = key.charCodeAt(j % keyLength) - 65;
				result += String.fromCharCode(
					((currentSymbol - 65 - keySymbol + 26) % 26) + 65
				);
				j++;
			} else {
				result += encryptedMessage[i];
			}
		}

		return this.data ? result : result.split("").reverse().join("");
	}
}

module.exports = {
	VigenereCipheringMachine,
};
