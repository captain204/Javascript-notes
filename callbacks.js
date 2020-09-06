// Long running function
function waitThreeSeconds()
{
    var ms = 3000 + new Date.getTime();
    while (new Date() < ms){}

}

function clickHandler()
{
    console.log('Click Event')
}