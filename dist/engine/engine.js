"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = require("../machines/generic");
class Engine {
    constructor() {
        this.machines = [];
        console.log('site created');
    }
    registerMachine(machine) {
        console.log(this.machines);
        this.machines.push(machine);
        console.log(this.machines);
    }
    run() {
        setInterval(this.tick.bind(this), 1000);
    }
    tick() {
        console.log('tick');
        console.log(this.machines);
        for (let machine of this.machines) {
            machine.phaseOut();
        }
        for (let machine of this.machines) {
            machine.phaseIn();
        }
        for (let machine of this.machines) {
            machine.phaseProcess();
        }
    }
}
const site = new Engine();
const waterSource = new generic_1.GenericMachine();
site.registerMachine(waterSource);
site.run();
//# sourceMappingURL=engine.js.map