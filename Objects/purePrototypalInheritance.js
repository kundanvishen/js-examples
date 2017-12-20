/**
 * Pure Prototypal Inheritance using Object.create
 */


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
