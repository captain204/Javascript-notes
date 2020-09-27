greet();

//Statement because its just saved in memory 
function greet()
{
    console.log("Greet");
}

greet.language = 'English';
console.log(greet.language);

var anonymousGreet = function(){// Expression because it returns a function object
    console.log('hi');
}

anonymousGreet();

function log(a){
    console.log(a);
}

function log_two(a){
    a();
}


log(3);

log("Hello");

//Passing objects to functions

log({
    greeting:'hi'
});

//Creating functions on the fly

log_two(function(){
        console.log('Log two');
    }
);

