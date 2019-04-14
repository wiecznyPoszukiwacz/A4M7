'use strict'

const GenericMachine = require('./generic')
const Chamber = require('./helpers/Chamber')

class Generic3ChambersMachine extends GenericMachine{

	constructor(){

		super()

		this.inChamber = new Chamber(10, 0)
		this.processChamber = new Chamber(10, 0)
		this.outChamber = new Chamber(10, 0)
	}

	status(){
		return {
			inChamber: this.inChamber,
			processChamber: this.processChamber,
			outChamber: this.outChamber
		}
	}

}

module.exports = Generic3ChambersMachine