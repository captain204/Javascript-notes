var person = new Object();
//Computed member access symbol []
person["firstname"] = "Tony";
person["lastname"] = "Hyise";

var FirstNameProperty ="firstname";

console.log(person[FirstNameProperty]);
console.log(person);
console.log(person["firstname"]);

console.log(person.firstname);

console.log(person.lastname);


//Example of child object to person object

person.address = new Object();
person.address.street = "Opposite university of lacanstar";
person.address.city = "Lacanster";
person.address.country ="United Kingdom";

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address)