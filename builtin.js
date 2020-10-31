//Adding to javascript builtin objects


//All strings will have acces to this new method
String.prototype.isLengthGreaterThan = function(limit)
{
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
    return this > 0;
}

