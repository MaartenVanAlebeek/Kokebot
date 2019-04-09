"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandHandler {
    forwardCommand(prefix, message) {
        let result;
        const messageArray = message.content.split(' ');
        let cmd = messageArray[0].replace(prefix, '').toLowerCase();
        let args = messageArray.slice(1);
        if (cmd === 'hello')
            return message.channel.send('Hello!');
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvY29tbWFuZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLGNBQWM7SUFFdkIsY0FBYyxDQUFDLE1BQWMsRUFBRSxPQUFZO1FBRXZDLElBQUksTUFBTSxDQUFDO1FBRVgsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUQsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFHLEdBQUcsS0FBSyxPQUFPO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUc5RCxDQUFDO0NBQ0o7QUFkRCx3Q0FjQyJ9