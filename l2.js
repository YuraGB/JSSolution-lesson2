 /* Method 1*/
function pen(value){
    var z = [],
        ar = [].join.call(arguments).split("");
    ar.sort(function(a,b){return a<b});
    while(value<=+(ar.join(""))){
        z.push(value++);
    }
    for (var i = 0; i < ar.length; i++) {
        z = cb(z, ar[i]);
    }
    return z[1]? z[1]: z[0];
}

function cb(arr, elem){
    var f= arr.filter(function(el){
        var r= el+"";
        return!!(~r.indexOf(elem))
    });
    return f;
}
console.log(pen(751));



/* method2*/
 function pen2(value){
     var z = [],
         ar = [].join.call(arguments).split("");
     ar.sort(function(a,b){return a<b});
     z.push(value);

     while(value<=+(ar.join(""))){
         z.push(++value);
         for(var i = 0; i < ar.length; i++){
           z = cb2(z,ar[i]);
         }
     }
     return z[1]? z[1]: z[0];
 }
 function cb2(arr, elem){
     var f= arr.filter(function(el){
         var r= el+"";
         return!!(~r.indexOf(elem))
     });
     return f;
 }
 console.log(pen2(751));


 /*Method 3 */
 function pen3(value){
     var z = [],
         ar = [].join.call(arguments).split("");
     ar.sort(function(a,b){return a<b});
     z.push(value);
     while(value<=+(ar.join(""))){
         z.push(++value);
         }
     return {
         arNumb:z,
         arFiltr:ar
     };


 }
 function cb3(fn) {
     return function () {
         var result = fn.apply(this, arguments),
          f = [],
          filtrArray = result.arFiltr,
          filtrNunmbs = result.arNumb;
          filtrArray.forEach(function(e){
              f = filtrNunmbs.filter(function (el) {
                 var r = el + "";
                 return !!~r.indexOf(e);
             });
             filtrNunmbs=f;
         });
          return f[1]? f[1]: f[0];
     }
 }
 pen3 = cb3(pen3);
 console.log(pen3(751));

