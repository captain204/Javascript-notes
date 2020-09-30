function greet(name){
    console.log('Hello ' + name);
}

greet('John')

var greetFunction = function(name){
    console.log('Hello ' + name);
}

greetFunction('Mark Anthony');



















var firstname='John';

//Parenthesis can be used to create annonymous function expressions on the fly in javascript
(function(global,name){
    global.greeting = 'Hello';
    console.log(greeting +' ' + name);
}(window,firstname));



console.log(greeting);





