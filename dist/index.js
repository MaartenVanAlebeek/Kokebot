"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const commandHandler_1 = require("./handlers/commandHandler");
class Main {
    constructor() {
        this.bot = new Discord.Client();
        this.prefix = ConfigFile.config.prefix;
        this.commandHandler = new commandHandler_1.CommandHandler();
    }
    getPrefix() {
        return this.prefix;
    }
    getBot() {
        return this.bot;
    }
    getCommandHandler() {
        return this.commandHandler;
    }
}
exports.Main = Main;
const application = new Main();
const bot = application.getBot();
const prefix = application.getPrefix();
const commandHandler = application.getCommandHandler();
bot.login(ConfigFile.config.token);
bot.on('ready', () => __awaiter(this, void 0, void 0, function* () {
    console.log(`${bot.user.username} is online`);
}));
bot.on('message', (message) => __awaiter(this, void 0, void 0, function* () {
    if (message.author.bot)
        return;
    if (!message.content.startsWith(ConfigFile.config.prefix))
        return;
    if (message.channel.type == 'dm')
        return;
    commandHandler.forwardCommand(prefix, message);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkMsOERBQTJEO0FBRTNELE1BQWEsSUFBSTtJQUtiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUF0QkQsb0JBc0JDO0FBRUQsTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNyQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZDLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBR3ZELEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUduQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxZQUFZLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBTSxPQUFPLEVBQUMsRUFBRTtJQUU5QixJQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRztRQUFFLE9BQU87SUFDOUIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQUUsT0FBTztJQUNqRSxJQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPO0lBR3hDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==