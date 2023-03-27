function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
console.log("add.js is successfully imported in first.js");
console.log(add(1,2));
console.log(subtract(6-3));
module.exports.add=add;
module.exports.subtract=subtract;