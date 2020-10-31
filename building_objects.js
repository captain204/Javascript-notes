function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is been invoked');
}

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('Kelvin','Karem');

console.log(john);

var jane = new Person('Donald','Rumsfield');

console.log(jane);


Person.prototype.getFormalFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

console.log(john.getFormalFullName());
