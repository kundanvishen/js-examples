/**
 * Pure Prototypal Inheritance using Object.create
 */


/**
 * The browsers which don't support 'Object.create()' method would require pollyfill.
 * 
 * POLLYFILL: is a code that adds a feature which the engine may lack.
 * There are different versions and engines for javascript. We can have some code
 * that checks to see if the engine has a feature, and if it doesn't, we write
 * some code that does the same thing that that new feature would do in the
 * newer browsers.
 */


// Pollyfill:
if(!Object.create) {
	Object.create = function(o){
		if(arguments.length > 1) {
			throw new Error('Object.create implementation only accepts the first parameter');
		}
		// Create an empty function constructor
		function F(){}
		// set the object passed into parameter as its prototype
		F.prototype = o;
		// return new Object created with F() function constructor
		// with 'o' parameter passed as it's prototype.
		return new F();
	}
}

 var person = {
	 firstname: 'Default',
	 lastname: 'Default',
	 greet: function(){
		 return 'Hi ' + this.firstname;
	 }
 }

var john = Object.create(person);

console.log(john.__proto__);

john.firstname = 'John';
john.lastname = 'Doe';

console.log(john.greet());
console.log(john);
