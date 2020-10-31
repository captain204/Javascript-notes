var person = {

    firstname:'Default',
    lastname:'Default',
    greet : function(){
        return ' Hi ' + this.firstname + ' ' + this.lastname
    }
}

var john = Object.create(person);
//Create the new objects value

john.firstname = "John";

john.lastname = "William";

console.log(john);