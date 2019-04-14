'use strict'

class Chamber{
	constructor(capacity, quantity){
		this.capacity = capacity
		this.quantity = quantity
	}

	accept(qty){

		let availableSpace = this.capacity - this.quantity

		if(qty <= availableSpace){
			this.quantity += qty
			return qty
		}else{
			this.quantity += availableSpace
			return availableSpace
		}

	}

	dispense(qty){

		if(qty <= this.quantity){
			this.quantity -= qty
			return qty
		}else{
			qty = this.quantity
			this.quantity = 0
			return qty
		}
	}

	renderMeter(){
		return `[${this.quantity}/${this.capacity}]`
	}
}

module.exports = Chamber