function greet(firstname,lastname,language='en')
{
    if(language === 'en'){
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es'){
        console.log('Hola ' + firstname + ' ' + lastname);
    }

}

greet('John','Doe','en');

function greetSpanish(firstname,lastname)
{
    return greet(firstname,lastname,'es');   
}

function greetEnglish(firstname,lastname)
{
    return greet(firstname,lastname,'en');
    
}

greetSpanish('Pauline','Miguel')
greetEnglish('Max','Weber')
