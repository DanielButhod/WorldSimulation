/**
 * 
 */

 /*----------------------------------------------------------------*/
/*--- Class handling the scroller                               ---*/
  var _map;         

/*
* Retourne une référence à l'objet canvas
*/
function getCanvas(){
    return document.getElementById("worldmap");    
}

/*
* Retourne le contexte d'exécution 2d du canvas
*/
function getContext(){
    return {"context": getCanvas().getContext("2d"),"width": getCanvas().width, "height": getCanvas().height};
}

/*----------------------------------------------------------------*/
/* M�thode de gestion des r�ponses aux �v�nements clavier         */
function handleKeyPress(e){
  
}

function handleKeyRelease(e){
	console.log("key " + e.keyCode);
 	//_scroller.handleKey(e.keyCode);
}


/* Point d'entr�e de l'application                                */
function draw(){
  window.addEventListener('keydown',handleKeyPress,false);
  window.addEventListener('keyup',handleKeyRelease,false);
  Animate();  
  
  window.requestAnimationFrame(draw);
}

function Animate(){
	var _context = getContext();	
	
	if (typeof _map == 'undefined'){
		_map = new map(50,50);
		_map.setPixelWidth(_context.height);
		_map.setPixelHeight(_context.height);
		_map.initialize();
	}	

	_map.runCycle();
	_map.render(_context.context);
}

