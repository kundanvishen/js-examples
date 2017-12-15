/**
 * REFLECTION: An object can look at itself, listing and changing its properties and methods.
 * 
 * We can use it to implement very useful pattern called 'extend'
 */
 
 
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

for(var prop in john) {
    console.log(prop + ': ' + john[prop]);
    if(john.hasOwnProperty(prop)){
        console.log('Meta property: ' + prop + ': ' + john[prop]);
    }
}