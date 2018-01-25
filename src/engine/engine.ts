import {GenericMachine} from '../machines/generic'

class Engine{

    machines: Array<GenericMachine>

    constructor(){
        this.machines = []
        console.log('site created')
    }

    public registerMachine(machine: GenericMachine){
        console.log(this.machines)
        this.machines.push(machine)
        console.log(this.machines)
    }

    public run(): void{

        setInterval(this.tick.bind(this), 1000)
    }

    private tick(): void{

        console.log('tick')

        console.log(this.machines)
        for(let machine of this.machines){
            machine.phaseOut()
        }

        for(let machine of this.machines){
            machine.phaseIn()
        }

        for(let machine of this.machines){
            machine.phaseProcess()
        }


    }
}

const site = new Engine()

const waterSource = new GenericMachine()

site.registerMachine(waterSource)

site.run()


