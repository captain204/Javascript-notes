var arr = [
    1,
    false,
    {
        name:'Tony Picasso',
        address:'Unilag admin block',
    },
    function(name){
        var greeting = "hello ";
        console.log(greeting  +  name);
    },
    "Hello"
];

console.log(arr);

arr[3](arr[2].name);
arr[3]("Mike");



