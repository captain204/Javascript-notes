var Tony = {
    firstname:'Tony',
    lastname:'Hysie',
    address:{
        street:'111 Main Street.',
        city:'Newyork',
        state:'NY'
    }
};

//Passing object literals to functions
function greet(person)
{
    console.log('Hi '+person.firstname);
}

greet(Tony);

greet(
    {firstname:'Mary',
    lastname:'Doe'
});//You can pass object literals directly to functions

Tony.address2 = {
        street:'Kings Palace Hotel',
        city:'Baku',
        country:'Indonesia'
};

console.log(Tony);

