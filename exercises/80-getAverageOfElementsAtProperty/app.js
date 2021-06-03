// Write your function here

function getAverageOfElementsAtProperty(object, key) {
    if (object.hasOwnProperty(key)) { //Verifico si existe KEY en el OBJECT
        if (Array.isArray(object[key]) && object[key].length > 0) { //SI existe KEY. Verifico si es un Array y que no esté vacío
            // es un array
	        var suma = object[key].reduce(function(a, b){return a + b;}, 0); //lo sumo
            var average = suma / (object[key].length); //Saco su promedio
            
	        }
	        else { //NO es un array
	            var cero = 0;
                console.log(cero); //retorno cero
                return parseInt(cero, 10);
            }
            
	        console.log(average); //retorno el promedio
	        return average;
        }
    else { //NO existe KEY en OBJETO
        var cero = 0;
        console.log(0); //retorno 0
        console.log(typeof cero); //indico el tipo de variable
        return cero;
        
    }
    
}

var objeto = {
   propiedad: []
};

getAverageOfElementsAtProperty(objeto, "propiedad")