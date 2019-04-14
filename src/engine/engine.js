const EventEmitter = require('events')

class Engine extends EventEmitter{

    constructor(){
        super()
        this.machines = []
        this.tickCnt = 0
    }

    registerMachine(machine){
        this.machines.push(machine)
    }

    run(){
        setInterval(this.tick.bind(this), 1000)
    }

    tick(){

        this.tickCnt ++

        console.log('tick ' + this.tickCnt + ' ')

        for(let machine of this.machines){
            machine.phaseOut()
        }

        for(let machine of this.machines){
            machine.phaseIn()
        }

        for(let machine of this.machines){
            machine.phaseProcess()

            this.emit('machineStatus', {
                machine: 'AA',
                status: machine.status()
            })

        }

    }
}

module.exports = Engine
