import axios from 'axios';

export default class SlackMessageTinyBot {
  private _slackWebhooks: string[] = [];
  private _telegramBots: {
    botToken: string;
    chatId: string;
  }[] = [];

  appendBot(bot: {
    slackWebhookUrl?: string;
    telegramBot?: {
      botToken: string;
      chatId: string;
    };
  }) {
    this._slackWebhooks.push(bot.slackWebhookUrl || '');
    this._telegramBots.push(
      bot.telegramBot || {
        botToken: '',
        chatId: '',
      },
    );
  }

  async sendMessage(options: { botIndex: number; message: string }) {
    const promises: Promise<any>[] = [];

    // for slack
    if (this._slackWebhooks[options.botIndex]) {
      promises.push(
        axios.post(this._slackWebhooks[options.botIndex], {
          text: options.message,
        }),
      );
    }

    // for telegram
    if (
      this._telegramBots[options.botIndex].botToken &&
      this._telegramBots[options.botIndex].chatId
    ) {
      promises.push(
        axios.get(
          `https://api.telegram.org/bot${
            this._telegramBots[options.botIndex].botToken
          }/sendMessage`,
          {
            params: {
              chat_id: this._telegramBots[options.botIndex].chatId,
              parse_mode: 'markdown',
              text: options.message,
            },
          },
        ),
      );
    }

    try {
      await Promise.all(promises);
    } catch {
      // do not anythings
    }
  }
}
