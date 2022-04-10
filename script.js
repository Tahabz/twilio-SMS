const accountSid =
	process.env.TWILIO_ACCOUNT_SID;
const authToken =
	process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.FROM;

const { appendFile, readFileSync } = require("fs");

const client = require("twilio")(accountSid, authToken)

const message = readFileSync("./message.txt")

readFileSync('./numbers.txt', { encoding: "utf-8" })
	.split('\n')
	.forEach(sendMessage)

function sendMessage(number) {
	client.messages
		.create({
			body: message,
			from: fromNumber,
			to: number,
		})
		.then((res) => {
			appendFile("./success-logs", JSON.stringify(res, null, 2) + '\n', logError)
		})
		.catch(logError);
}

function logError(err) {
	if (err) {
		console.error(err)
		appendFile("./error-logs", err + '\n', logError);
	}
}