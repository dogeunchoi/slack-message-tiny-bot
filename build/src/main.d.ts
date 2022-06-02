export default class SlackMessageTinyBot {
    private _slackWebhooks;
    private _telegramBots;
    appendBot(bot: {
        slackWebhookUrl?: string;
        telegramBot?: {
            botToken: string;
            chatId: string;
        };
    }): void;
    sendMessage(options: {
        botIndex: number;
        message: string;
    }): Promise<void>;
}
