"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class UnrecognizedCommand extends command_1.Command {
    constructor(cmd, args, prefix) {
        super(cmd, args);
        this.prefix = prefix;
    }
    executeCommand() {
        return 'Error: Command not recognized, type "' + this.prefix + 'help" for a list of commands.';
    }
}
exports.UnrecognizedCommand = UnrecognizedCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5yZWNvZ25pemVkQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy91bnJlY29nbml6ZWRDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQW9DO0FBRXBDLE1BQWEsbUJBQW9CLFNBQVEsaUJBQU87SUFFNUMsWUFBWSxHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFDakQsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0QsY0FBYztRQUNWLE9BQU8sdUNBQXVDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRywrQkFBK0IsQ0FBQztJQUNsRyxDQUFDO0NBQ0o7QUFURCxrREFTQyJ9