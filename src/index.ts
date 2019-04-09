import * as Discord from 'discord.js';
import * as ConfigFile from './config';
import { CommandHandler } from './handlers/commandHandler';

export class Main {
    private bot: Discord.Client;
    private prefix: string;
    private commandHandler: CommandHandler;

    constructor(){
        this.bot = new Discord.Client();
        this.prefix = ConfigFile.config.prefix;
        this.commandHandler = new CommandHandler();
    }

    getPrefix(){
        return this.prefix;
    }

    getBot(){
        return this.bot;
    }

    getCommandHandler(){
        return this.commandHandler;
    }
}

const application: Main = new Main();
const bot = application.getBot();
const prefix = application.getPrefix();
const commandHandler = application.getCommandHandler();

// Login
bot.login(ConfigFile.config.token);

// Discord Events
// Bot Ready
bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`);
});

// Message
bot.on('message', async message => {
    // Ignore useless messages
    if(message.author.bot) return;
    if(!message.content.startsWith(ConfigFile.config.prefix)) return;
    if(message.channel.type == 'dm') return;

    // Send Result
    // TODO: SendMessage method with channel parameter input
    return message.channel.send(commandHandler.forwardCommand(prefix, message));
});