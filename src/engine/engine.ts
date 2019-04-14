import {GenericMachine} from '../machines/generic'

export class Engine{

    machines: Array<GenericMachine>
    tickObservers: Array<Function> = []

    constructor(){
        this.machines = []
    }

    public on(event: string, callback: Function){
        if(event == 'tick'){
            this.tickObservers.push(callback)
        }
    }

    public registerMachine(machine: GenericMachine){
        this.machines.push(machine)
    }

    public run(): void{
        setInterval(this.tick.bind(this), 1000)
    }

    private tick(): void{

        for(let machine of this.machines){
            machine.phaseOut()
        }

        for(let machine of this.machines){
            machine.phaseIn()
        }

        for(let machine of this.machines){
            machine.phaseProcess()
        }

        let status: Array<Object> = []
        for(let machine of this.machines){
            status.push(machine.status())
        }

        for(let cbk of this.tickObservers){
            cbk(status)
        }

    }
}



