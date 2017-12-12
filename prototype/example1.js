var person = {
	firstname: 'Deafult',
	lastname: 'Default',
	getFullName: function(){
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};

// Never use this technique in real life. For Demo purpose only!!

john.__proto__ = person;

console.log(john.firstname);
console.log(john.lastname);
console.log(john.getFullName());


var jane = {
	firstname: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName());