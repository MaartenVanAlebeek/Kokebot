export class CommandHandler {
    // Forwards a command to the appropriate class
    forwardCommand(prefix: string, message: any){

        let result; // TODO: result = result from function calls

        const messageArray = message.content.split(' ');
        let cmd = messageArray[0].replace(prefix, '').toLowerCase();
        let args = messageArray.slice(1);

        if(cmd === 'hello') return message.channel.send('Hello!');

        // TODO: return message.channel.send(result);
    }
}

