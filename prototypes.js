var person = {
    firstname:'Default',
    lastname:'Default',
    getFullName:function(){
        return this.firstname + ' ' + this.lastname;
    }

}

var john = {

    firstname:'John',
    lastname:'Doe',
}

john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    
    firstname:'Jane',
    
}

jane.__proto__ = person;

console.log(jane.getFullName());


for (var prop in john){
    if (john.hasOwnProperty(prop)){
        console.log(prop + ':' + john[prop]);
    }
}

var jane = {
    address:'112 B block Kaduna',
    getFormalFullName:function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var jim ={
    getFirstname:function(){
        return this.firstname;
    }
}


.__proto__extends(john,jane,jim);

console.log(john);

