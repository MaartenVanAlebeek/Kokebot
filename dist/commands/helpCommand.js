"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class HelpCommand extends command_1.Command {
    executeCommand() {
        const result = '```'
            + '>Hello - Lets the bot say "Hello!"'
            + '```';
        return result;
    }
}
exports.HelpCommand = HelpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvaGVscENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFFcEMsTUFBYSxXQUFZLFNBQVEsaUJBQU87SUFDcEMsY0FBYztRQUVWLE1BQU0sTUFBTSxHQUFHLEtBQUs7Y0FDZCxvQ0FBb0M7Y0FDcEMsS0FBSyxDQUFDO1FBRVosT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBVEQsa0NBU0MifQ==