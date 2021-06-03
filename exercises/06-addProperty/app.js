var myObj = {};


addProperty(myObj, 'myProperty');

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
