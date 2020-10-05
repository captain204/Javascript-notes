function greet(firstname,lastname,language='en')
{
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg : ' +arguments[1]);
    console.log('---------------');
}

greet();
greet('John');
greet('Lola','Akindele','Yoruba');





