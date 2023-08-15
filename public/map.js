class map {
		
	#objects = [];	// list all objects
	#width; 
	#height;
	#pixelWidth;
	#pixelHeight;
	
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
						this.#objects[abs + ord * this.#height] = new petrolStorage();
						break;
					case 2:
						this.#objects[abs + ord * this.#height] = new field();
						break;
						default:
				}
				
			}
		}
	}
	
	setPixelWidth(i_value){
		this.#pixelWidth = i_value;
		console.log("Width in pixels is defined with " + i_value);
	}
	
	setPixelHeight(i_value){
		this.#pixelHeight = i_value;
		console.log("Height in pixels is defined with " + i_value);
	}
	
	render(i_context){
		var l_countObjects = this.#objects.length;
		console.log("count is : " + l_countObjects);
		
		var l_abs;
		var l_ord;
		var l_sizex = Math.floor(this.#pixelWidth / this.#width);
		var l_sizey = Math.floor(this.#pixelHeight / this.#height);
		var l_object;
		
		for (var abs = 0; abs < this.#width; abs++){
			for (var ord = 0; ord < this.#height; ord++){
				l_abs = abs * l_sizex;
				l_ord = ord * l_sizey;
				l_object = this.#objects[ord * this.#height + abs];
				
				if (typeof l_object != 'undefined'){
					i_context.fillStyle = l_object.getColor();			
					i_context.fillRect(l_abs, l_ord, l_sizex, l_sizey);	
				}		
			}		
		}
		
	}
}