edad = window.prompt('introduce tu edad');
var output = isOldEnoughToDrink(edad)
console.log(output);

function isOldEnoughToDrink(a){
  let resp = a >= 21 ? true : false;
  return resp;
}