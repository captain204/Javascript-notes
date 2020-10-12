var person = {
    firstname:'John',
    lastname:'Doe',
    getFullName:function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }

}

var logName = function(lang1,lang2){

    console.log('Logged:' + this.getFullName());
    console.log('Arguments:'+ lang1 + ' ' + lang2);
    console.log('----------------------');
}

//Bind function allows you to modify the global this variable
var logPersonName = logName.bind(person);

logPersonName('en','German');

logName.call(person,'English','French');

//Call function takes parameters

(function(lang1,lang2){

    console.log('Logged:' + this.getFullName());
    console.log('Arguments:'+ lang1 + ' ' + lang2);
    console.log('----------------------');
}).apply(person,['en','french'])

/*Using any of call,apply or bind allows you to modify the global this variable to make a
call to a function in another object scope*/


//Fucntion borrowing
var person2 ={
    firstname:'John',
    lastname:'Amaka'
}

//getFullName was borrowed from person object
console.log(person.getFullName.apply(person2))


//Function Currying
function multiply(a,b){
    return a*b; 
}

//Copy of the multiply function
var multiplyByTwo = multiply.bind(this,2);

console.log(multiplyByTwo(5))

var multiplyByTen = multiply.bind(this,10);
console.log(multiplyByTen(100))


