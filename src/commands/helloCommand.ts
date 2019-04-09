import { Command } from "./command";

export class HelloCommand extends Command {
    executeCommand(): string {
        return 'Hello!';
    }
}