function greet(whattosay){

    return function(name){
        console.log(whattosay + name)
    }
}

sayhi = greet('Hello ');

sayhi('Judith');


