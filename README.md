# install
`npm install slack-message-tiny-bot --save`

# usages
```javascript
const _bot = new SlackMessageTinyBot();

_bot.appendBot({
slackWebhookUrl: 'https://hooks.slack.com/services/MY_SLACK_WEBHOOK_URL',
telegramBot: {
    botToken: 'my telegram bot token',
    chatId: 'my chat id',
},
});

_bot.sendMessage({
botIndex: 1,
message: 'test',
}).catch(() => {});
```