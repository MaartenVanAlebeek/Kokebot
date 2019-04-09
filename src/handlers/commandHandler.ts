import { HelpCommand } from "../commands/helpCommand";
import { Command } from "../commands/command";
import { UnrecognizedCommand } from "../commands/unrecognizedCommand";
import { HelloCommand } from "../commands/helloCommand";

export class CommandHandler {
    // Forwards a command to the appropriate class
    forwardCommand(prefix: string, message: any){

        let result: string; // TODO: result = result from function calls

        const messageArray = message.content.split(' ');
        let cmd = messageArray[0].replace(prefix, '').toLowerCase();
        let args = messageArray.slice(1);

        let command: Command;
        
        switch(cmd){
            case 'help':
                command = new HelpCommand(cmd, args);
                break;
            case 'hello':
                command = new HelloCommand(cmd, args);
                break;
            default: 
                command = new UnrecognizedCommand(cmd, args, prefix);
                break;
        }
        
        return command.executeCommand();
    }
}

