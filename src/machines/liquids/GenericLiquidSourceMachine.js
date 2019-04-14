'use strict'

const Generic3ChambersMachine = require('../Generic3ChambersMachine')

class GenericLiquidSourceMachine extends Generic3ChambersMachine{

	phaseOut(){

		if(this.fill === undefined){
			this.fill = true
		}

		if(this.fill === true){
			let i = this.outChamber.accept(1)

			if(i === 0){
				this.fill = false
			}
		}else{
			let i = this.outChamber.dispense(1)
			if(i === 0){
				this.fill = true
			}
		}
	}

}

module.exports = GenericLiquidSourceMachine