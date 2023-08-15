class map {
		
	#objects = [];	// list all objects
	#width; 
	#height;
	
	constructor(i_width, i_height){
		this.#width = i_width;
		this.#height = i_height;
		console.log("Creation of the map with " + i_width + " columns & " + i_height + " rows");
	}
	
	initialize(){
		for (var abs = 0; abs < this.#width; abs++){
			for (var ord = 0; ord < this.#height; ord++){
				var l_type = Math.floor(Math.random() * 5 );
				switch(l_type){
					case 0:
						this.#objects[abs + ord * this.#height] = new waterStorage();
						break;
					case 1:
						this.#objects[abs + ord * this.#height] = new field();
						break;
						default:
				}
				
			}
		}
	}
	
	render(i_context){
		var l_countObjects = this.#objects.length;
		console.log("count is : " + l_countObjects);
		
		
		
	}
}