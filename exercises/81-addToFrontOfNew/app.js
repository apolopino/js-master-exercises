var input = [1, 2];


function addToFrontOfNew(a, b) {
    let bArr = [b];
    var output = bArr.concat(a);
    return output;
}
console.log(input);
console.log(addToFrontOfNew(input, 3));

