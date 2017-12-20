/**
 * The prototype on a  function is NOT the prototype of THE function.
 * 
 * It's the protype of the Object created, if you are using the function
 * as a function constructor.
 */

 function Person(firstname,	lastname){
	this.firstname	=	firstname;
	this.lastname	=	lastname;
 }

 /**
  * Every function that we create in javascript, gets this special prototype '.prototype'.
  * It starts its life as an empty object.
  * It's always there, you can add on it. e.g.,
  */
Person.prototype.getFullName = function(){
	return this.firstname + ' ' + this.lastname;
};

/**
 * The neat thing is that, we can add something to my prototype,
 * on the fly, later, just like we did just now because the prototype
 * chain is just looking at this object at the moment you try to
 * access any one of their methods and properties.
 */

var john = new Person('John', 'Doe');
// console.log(john.getFullName());

var jane = new Person('Jane', 'Doe');
// console.log(jane.getFullName());

Person.prototype.getFormalFullName = function(){
	return this.lastname + ', ' + this.firstname;
}
// console.log(john.getFormalFullName());

/**
 * ========
 *   NOTE:
 * ========
 * 
 * From efficiency standpoint, it's better to put your methods
 * on the prototype because they only need one copy to be used.
 */