class map {
		
	#objects = [];	// list all objects
	#width; 		// width in number of elements
	#height;		// height in number of elements
	#pixelWidth;
	#pixelHeight;
	#sizeX;			// pixels size of an element
	#sizeY; 		// pixels size of an element
	
	// KPIs we want to calculate
	#date = {};
	#waterVolume;	// Total available water volume in m3
	
	constructor(i_width, i_height){
		this.#width = i_width;
		this.#height = i_height;
		console.log("Creation of the map with " + i_width + " columns & " + i_height + " rows");
	}
	
	initialize(){
		var l_object;

		var l_abs;
		var l_ord;

// initial date is 1900 
		this.#date.year  = 1900;
		this.#date.month = 1;
		this.#date.day   = 1;
		
		
		
		for (var abs = 0; abs < this.#width; abs++){
			for (var ord = 0; ord < this.#height; ord++){
				var l_type = Math.floor(Math.random() * 5 );
				var l_index = abs + ord * this.#height;
				
				l_abs = this.#sizeX * abs;
				l_ord = this.#sizeY * ord;
				
				switch(l_type){
					case genericObject.WATERSTORAGE:
						this.#objects[l_index] = new waterStorage();
						l_object = this.#objects[l_index];
						l_object.setX(l_abs);
						l_object.setY(l_ord);
						l_object.setMaxCapacity(20000000000);
						l_object.initialize();
						break;
					case genericObject.PETROL:
						this.#objects[l_index] = new petrolStorage();
						l_object = this.#objects[l_index];
						l_object.setX(l_abs);
						l_object.setY(l_ord);
						break;
					case genericObject.FIELD:
						this.#objects[l_index] = new field();
						l_object = this.#objects[l_index];
						l_object.setX(l_abs);
						l_object.setY(l_ord);
						break;
					case genericObject.WOOD:
						this.#objects[l_index] = new wood();
						l_object = this.#objects[l_index];
						l_object.setX(l_abs);
						l_object.setY(l_ord);
						break;
					default:
						this.#objects[l_index] = new empty();
						l_object = this.#objects[l_index];
						l_object.setX(l_abs);
						l_object.setY(l_ord);	
				}				
			}
		}
	}
	
	setPixelWidth(i_value){
		this.#pixelWidth = i_value;
		this.#sizeX = Math.floor(this.#pixelWidth / this.#width);
		console.log("Width in pixels is defined with " + i_value);
	}
	
	setPixelHeight(i_value){
		this.#pixelHeight = i_value;
		this.#sizeY = Math.floor(this.#pixelHeight / this.#height);
		console.log("Height in pixels is defined with " + i_value);
	}

/*-----------------------------------------------------------------------------*/
/* Evolution cycle algorithm                                                   */
	#buildNextDay(){
		var l_date = new Date();
		l_date.setFullYear(this.#date.year);
		l_date.setMonth(this.#date.month);
		l_date.setDate(this.#date.day);
		
		l_date.setDate(l_date.getDate()+1);
		
		this.#date.year = l_date.getFullYear();
		this.#date.month = l_date.getMonth();
		this.#date.day = l_date.getDate();
	}



	#runEvolution(){
// first calculate next day
		this.#buildNextDay();
	}


	runCycle(){
		var l_countObjects = this.#objects.length;
		var l_object;

// evolution to be calculated
		this.#runEvolution();

// First initialize KPIs
		this.#waterVolume = 0;
		

// then calculate		
		for (var i = 0; i < l_countObjects; i++){
			l_object = this.#objects[i];
			
			if (l_object.getType() == genericObject.WATERSTORAGE){
				l_object.decreaseVolume(1000000);
				this.#waterVolume = this.#waterVolume + l_object.getVolume();
			}
		}
	}
/*----------------------------------------------------------------------------*/
	
/*----------------------------------------------------------------------------*/
/* Rendering methods                                                          */
	#renderTheMap(i_context){
		var l_countObjects = this.#objects.length;
		console.log("count is : " + l_countObjects);
		
		var l_object;
		
		for (var abs = 0; abs < this.#width; abs++){
			for (var ord = 0; ord < this.#height; ord++){
				l_object = this.#objects[ord * this.#height + abs];
				
				if (typeof l_object != 'undefined'){
					i_context.fillStyle = l_object.getColor();			
					i_context.fillRect(l_object.getX(), l_object.getY(), this.#sizeX, this.#sizeY);	
				}	
			}		
		}
	}

	#renderKPIs(i_context){
		i_context.fillStyle = "white";
		i_context.fillRect(1024,0,500,this.#height);
		
		var l_abs = this.#pixelWidth + 16;
		var l_ord = 16;
		const l_step = 20;
	
		i_context.font = "16px serif";
		i_context.fillStyle = "black";

		i_context.fillText("Date is :" + this.#date.year+'.'+this.#date.month+'.'+this.#date.day,l_abs, l_ord);
		l_ord=l_ord+l_step;
		i_context.fillText("Total water volume (m3): " + this.#waterVolume, l_abs, l_ord );
	}

	render(i_context){

		this.#renderTheMap(i_context);
		this.#renderKPIs(i_context);
		
	}
}