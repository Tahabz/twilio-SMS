const { appendFile } = require("fs").promises;
const { readFileSync } = require('fs');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.FROM;

const client = require("twilio")(accountSid, authToken);
const message = readFileSync("./message.txt");
const numbers = readFileSync("./numbers.txt", { encoding: "utf-8" })
	.split("\n")
	.filter(Boolean);

Promise.all(numbers.map(sendMessage))
	.then(logRes)
	.catch(logError);

function sendMessage(number) {
	return client.messages.create({
		body: message,
		from: fromNumber,
		to: number,
	});
}

function logRes(res) {
	return appendFile("./success-logs", JSON.stringify(res, null, 2) + "\n")
};

function logError(err) {
	if (err) {
		console.error(err);
		appendFile("./error-logs", err + "\n");
	}
}
