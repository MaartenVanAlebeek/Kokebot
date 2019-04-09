export abstract class Command {
    protected cmd: string;
    protected args: string;
    constructor(cmd: string, args: string){
        this.cmd = cmd;
        this.args = args;
    }
    abstract executeCommand(): string;
}