/**
 *  Classes in Javascript is just a 'SYNTACTIC SUGAR'
 * 
 * 'Syntactic Sugar' : A different way to type something that
 * doesn't change how it works under the hood.
 * Just a different way to type your code.
 */


/**
 * Example of a class (function constructor)
 */
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet() {
		return 'Hi ' + this.firstname;
	}
}

var john = new Person('John', 'Doe');
console.log(john.greet());


/**
 * Setting up prototype (extending)
 */

class InformalPerson extends Person {
	constructor(firstname, lastname) {
		super(firstname, lastname);
	}
	greet() {
		return 'Yo ' + this.firstname;
	}
}
var jane = new InformalPerson('Jane', 'Doe');
console.log(jane.greet());