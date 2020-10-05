function makeGreet(language){

    return function(firstname, lastname){
        if (language ==='en'){
            console.log('Hello ' + firstname + ' ' + lastname)
        }

        if (language ==='es'){
            console.log('Hola ' + firstname + ' ' + lastname)
        }

    }


}

var GreetEnglish = makeGreet('en');
var GreetSpanish = makeGreet('es');

GreetEnglish('Doris','Monday')
GreetSpanish('Doris','Monday')