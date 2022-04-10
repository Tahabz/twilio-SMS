# twilio-script
A twilio script that automates SMS sending.

# Usage:

### 1- Export your {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM} environment variables:
```
export TWILIO_ACCOUNT_SID={accountSid}
export TWILIO_AUTH_TOKEN={authToken}
export FROM={fromNumber}
```

### 2- Write your message in message.txt

### 3- Write/upload your numbers in numbers.txt

*The numbers should be separated by a new line:*

`numbers.txt: `
```
+447830365069
+447897017184
+18162724976
+14195065216
+13195004480
....
```
## Response Logs:

Each time you execute the script, if there are any errors, they will be printed in the console and two files will automatically be created:
1. success-logs
   - This is where all your successful requests will be logged in the JSON format
2. error-logs
   - This is where all your errors will be logged

