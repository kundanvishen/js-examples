var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird
console.log(Object.prototype.toString.call(d)); // better

function Person(name) {
	this.name = name;
}

var e = new Person("John");
console.log(typeof e);
console.log(e instanceof Person);

