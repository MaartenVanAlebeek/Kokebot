import { Command } from "./command";

export class HelpCommand extends Command {
    executeCommand(): string {
        // TODO: Expand Help list
        const result = '```'
            + '>Hello - Lets the bot say "Hello!"'
            + '```';

        return result;
    }
}