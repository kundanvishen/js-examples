// Everything in JS is an object or a primitive
// All objects have prototype except the base object (built in object).

var a = {}; // empty array
var b = function() {}; // empty function
var c = []; // empty array


// Everything leads to base object
// And the base object have various properties and methods. Such as .apply(), .bind(), .call()
console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);

// The prototype of prototype would also be the base prototype object
// e.g.,
console.log(a.__proto__.__proto__);