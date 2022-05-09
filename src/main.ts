import axios from 'axios';

export default class SlackMessageTinyBot {
  private _webhooks: string[] = [];

  appendWebhooks(webhookUrl: string) {
    this._webhooks.push(webhookUrl);
  }

  async sendMessage(options: {
    webhookIndexOrUrl: number | string;
    message: string;
  }) {
    const url =
      typeof options.webhookIndexOrUrl === 'number'
        ? this._webhooks[options.webhookIndexOrUrl]
        : options.webhookIndexOrUrl;

    return await axios.post(url, {
      text: options.message,
    });
  }
}
