/**
 * Created by Yura on 18.03.2017.
 */
function MyClass() {};
MyClass.prototype.addProp = function(key, value){
    Object.defineProperty(this, key,{
        value: value,
        configurable:true,
        enumerable:true,
        writable:true
    })

};
MyClass.prototype.constProp = function(key, value){
    Object.defineProperty(this, key,{
        value: value,
        configurable:false,
        enumerable:true,
        writable:false
    })

};
MyClass.prototype.hidenProp = function(key){
    Object.defineProperty(this, key,{
    set:function (value) {
       this.key= value
        },
    get:function () {
          return this.value
        },
        configurable:false,
        enumerable:false,

    })
};
MyClass.prototype.getPropVal = function () {
    var prop = [];
    for(var key in this){
        if(obj.hasOwnProperty(key)){
            prop.push(obj[key])
        }
    }
    return prop;
};

var obj = new MyClass();

obj.addProp("prop",{});
obj.constProp("prop2","Bla-bla-lend");
obj.prop2="dsfdsf";
obj.hidenProp("prop3","Wazzup");
for(var k in obj){
    if(obj.hasOwnProperty(k)) {
        console.log(k)

    }
}
console.log(obj);
console.log(obj.getPropVal());