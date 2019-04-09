import { Command } from "./command";

export class UnrecognizedCommand extends Command {
    private prefix:string;
    constructor(cmd: string, args: string, prefix: string){
        super(cmd, args);
        this.prefix = prefix;
    }
    executeCommand(): string {
        return 'Error: Command not recognized, type "'+ this.prefix + 'help" for a list of commands.';
    }
}