// Long running function
function waitThreeSeconds()
{
    var ms = 3000 + new Date.getTime();
    while (new Date() < ms){
        console.log('finished function');
    }
}

function clickHandler()
{
    console.log('Click Event!');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();

console.log('Finished execution');