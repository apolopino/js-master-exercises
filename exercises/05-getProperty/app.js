var car = {
  model: 'Alex'
};

function getProperty(obj, key) {
    return obj[key];
}


var output = getProperty(car, 'model');
console.log(output); // --> 'value'

