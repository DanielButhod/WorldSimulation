/*------------------------------------------------------------------------------*/
/* Class water storage                                                          */
class waterStorage extends genericObject {
	
	#max; 		// Maximum water in m3
	#volume; 	// Remaining volume in m3
	#recharge;	// percent of refill per year
	
	constructor(){
		super(genericObject.WATERSTORAGE);
		this.setColor("lightblue");
		this.#max = 0;
		this.#volume = 0;
		this.#recharge = 100;		
	}
	
	initialize(){
		this.#volume = this.#max;
	}
	
	setMaxCapacity(i_value){
		if (i_value < 0) throw Error("The water storage capacity must be positive.");
		this.#max = i_value;
	}
	
	getMaxCapacity(){
		return this.#max;
	}
	
	getVolume(){
		return this.#volume;
	}
	
	increaseVolume(i_value){
		if (i_value < 0) throw Error("The volume increase must be positive.");
		this.#volume = this.#volume + i_value;
		if (this.#volume > this.#max){
			this.#volume = this.#max;
		}
	}

	decreaseVolume(i_value){
		if (i_value < 0) throw Error("The volume decrease must be positive.");
		this.#volume = this.#volume - i_value;
		if (this.#volume < 0){
			this.#volume = 0;
		}
	}
}

/*------------------------------------------------------------------------------*/
/* Class defining a petrol storage                                                */
class petrolStorage extends genericObject {

	constructor(){
		super(genericObject.PETROL);
		this.setColor("black");	
	}
	
	initialize(){		
	}	
}


/*------------------------------------------------------------------------------*/
/* Class for field                                                                  */
class field extends genericObject {

	constructor(){
		super(genericObject.FIELD);		
		this.setColor("green");
	}
	
	initialize(){		
	}	
}

/*------------------------------------------------------------------------------*/
/* Class for wood                                                                  */
class wood extends genericObject {

	constructor(){
		super(genericObject.WOOD);		
		this.setColor("brown");
	}
	
	initialize(){		
	}	
}

/*------------------------------------------------------------------------------*/
/* Class for empty                                                                  */
class empty extends genericObject {

	constructor(){
		super(genericObject.EMPTY);		
		this.setColor("gray");
	}
	
	initialize(){		
	}	
}
