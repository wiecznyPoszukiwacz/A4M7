"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Engine {
    constructor() {
        this.tickObservers = [];
        this.machines = [];
    }
    on(event, callback) {
        if (event == 'tick') {
            this.tickObservers.push(callback);
        }
    }
    registerMachine(machine) {
        this.machines.push(machine);
    }
    run() {
        setInterval(this.tick.bind(this), 1000);
    }
    tick() {
        for (let machine of this.machines) {
            machine.phaseOut();
        }
        for (let machine of this.machines) {
            machine.phaseIn();
        }
        for (let machine of this.machines) {
            machine.phaseProcess();
        }
        let status = [];
        for (let machine of this.machines) {
            status.push(machine.status());
        }
        for (let cbk of this.tickObservers) {
            cbk(status);
        }
    }
}
exports.Engine = Engine;
//# sourceMappingURL=engine.js.map