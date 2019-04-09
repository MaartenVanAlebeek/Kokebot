"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpCommand_1 = require("../commands/helpCommand");
const unrecognizedCommand_1 = require("../commands/unrecognizedCommand");
const helloCommand_1 = require("../commands/helloCommand");
class CommandHandler {
    forwardCommand(prefix, message) {
        let result;
        const messageArray = message.content.split(' ');
        let cmd = messageArray[0].replace(prefix, '').toLowerCase();
        let args = messageArray.slice(1);
        let command;
        switch (cmd) {
            case 'help':
                command = new helpCommand_1.HelpCommand(cmd, args);
                break;
            case 'hello':
                command = new helloCommand_1.HelloCommand(cmd, args);
                break;
            default:
                command = new unrecognizedCommand_1.UnrecognizedCommand(cmd, args, prefix);
                break;
        }
        return command.executeCommand();
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvY29tbWFuZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBc0Q7QUFFdEQseUVBQXNFO0FBQ3RFLDJEQUF3RDtBQUV4RCxNQUFhLGNBQWM7SUFFdkIsY0FBYyxDQUFDLE1BQWMsRUFBRSxPQUFZO1FBRXZDLElBQUksTUFBYyxDQUFDO1FBRW5CLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVELElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsSUFBSSxPQUFnQixDQUFDO1FBRXJCLFFBQU8sR0FBRyxFQUFDO1lBQ1AsS0FBSyxNQUFNO2dCQUNQLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLE9BQU8sR0FBRyxJQUFJLDJCQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTyxHQUFHLElBQUkseUNBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckQsTUFBTTtTQUNiO1FBRUQsT0FBTyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBMUJELHdDQTBCQyJ9