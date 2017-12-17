function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked');
}

// keyword 'new' is javascript operator
/**
 * 'new' operator creates an empty object and then calls the 'Person' function on that object.
 * 	Sice the 'Person' function is called by the newly created Object,
 *  This keyword points to that object and sets its 'firstname' and 'lastname' values.
 *  However if the 'Person' function returns anything using 'return' keyword.
 *  This behavior would change.
 */
var john = new Person('John', 'Doe');

console.log(john);

var jane = new Person('Jane', 'Doe');

console.log(jane);

/***********************
 *  	FUNCTION CONSTRUCTOR:
 * We are constructing an Object via a functtion.
 * A function that is used specifically to construct
 * an oject is called a function constructor.
 ***********************/
