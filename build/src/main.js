"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = require("axios");
class SlackMessageTinyBot {
    constructor() {
        this._slackWebhooks = [];
        this._telegramBots = [];
    }
    appendBot(bot) {
        this._slackWebhooks.push(bot.slackWebhookUrl || '');
        this._telegramBots.push(bot.telegramBot || {
            botToken: '',
            chatId: '',
        });
    }
    sendMessage(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const promises = [];
            if (this._slackWebhooks[options.botIndex]) {
                promises.push(axios_1.default.post(this._slackWebhooks[options.botIndex], {
                    text: options.message,
                }));
            }
            if (this._telegramBots[options.botIndex].botToken &&
                this._telegramBots[options.botIndex].chatId) {
                promises.push(axios_1.default.get(`https://api.telegram.org/bot${this._telegramBots[options.botIndex].botToken}/sendMessage`, {
                    params: {
                        chat_id: this._telegramBots[options.botIndex].chatId,
                        parse_mode: 'markdown',
                        text: options.message,
                    },
                }));
            }
            try {
                yield Promise.all(promises);
            }
            catch (_a) {
            }
        });
    }
}
exports.default = SlackMessageTinyBot;
