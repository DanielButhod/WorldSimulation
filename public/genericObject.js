const c_waterstorage 	= 0;
const c_petrol 			= 1;
const c_field		 	= 2;
const c_wood            = 3;

const c_empty           = 99;

class genericObject {
	
	#type;	//object type
	#x;		// horizontal position in map
	#y;		//vertical position in map
	#color;	// color
	
	static get WATERSTORAGE(){
		return c_waterstorage;
	}

	static get PETROL(){
		return c_petrol;
	}
	
	static get FIELD(){
		return c_field;
	}

	static get WOOD(){
		return c_wood;
	}

	static get EMPTY(){
		return c_empty;
	}

	constructor(i_type){
		this.#type = i_type;
		console.log("creation of object of type " + i_type);
	}
	
	getType(){
		return this.#type;
	}
	
	setX(i_x){
		this.#x = i_x;
	}
	
	getX(){
		return this.#x;
	}
		
	setY(i_y){
		this.#y = i_y;
	}
	
	getY(){
		return this.#y;
	}
	
	setColor(i_value){
		this.#color = i_value;
	}
	
	getColor(){
		return this.#color;
	}
		
}