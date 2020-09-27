//By Value (primitive types) Primitive types a set by value
var a = 9;

var b;

b = a;

a = 2;

console.log(a);
console.log(b);

//By reference(all objects(including objects))
var c = {greeting:'hi'};
var d;
d = c;
console.log(c)
console.log(d);

c.greeting ='Hello';

console.log(c);
console.log(d);

//By Reference as objects

function changeGreeting(obj)
{
    obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operator sets up an object in a new memory space or location
c = {greeting:'howdy'}
console.log(c);
console.log(d);


