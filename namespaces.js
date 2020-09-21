/*Javascript doesnt have namespaces
  Objects are used to fake namespaces
*/

var greet = 'Hello';

var greet = 'Hola';

english = {greetings:{basic:'Say Hello'}};
spanish = {};

english.greet = 'Hello';
spanish.greet = 'Hola';

console.log(english.greetings);
console.log(english.greet,spanish.greet);