function a(){
    console.log(this);
    this.newVariable = "Hello";
}

var b = function(){
    console.log(this);
}
a();
b();
console.log(newVariable);

var c = {
    name:'The  c object',
    log:function(){
        var self = this;
        self.name = "Updated c object";
        console.log(self);

        var setname = function(newname){
            self.name = newname;
        }
        setname('Update the c object again make we see');
        console.log(self);
    }
}

c.log();
