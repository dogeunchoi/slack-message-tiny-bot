# install
`npm install slack-message-tiny-bot --save`

# usages
```javascript
const bot = new SlackMessageTinyBot();
bot.appendWebhooks("WEBHOOKS=https://hooks.slack.com/services/MY_SLACK_WEBHOOK_URL");
bot.sendMessage({ webhookIndexOrUrl: 0, message: 'test' }).then(result => {});
```