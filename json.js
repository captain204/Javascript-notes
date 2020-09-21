var objectLiteral ={
    'firstname':'Musiliu',
    'isAProgrammer':true
}


//Converting Javascript object literals to json
console.log(JSON.stringify(objectLiteral));

//Converting Json to Javascript object literals
var jsonValue=JSON.parse('{ "firstname":"mary","isAProgrammer":true}');


console.log(jsonValue);