/*
* 默认值产生的条件:对象的属性值严格等于undefined
* */
let {b} ={};
console.log(b); //undefined

let {a = 3}= {}; //相当于let {a = 3} ={ a : undefined}
console.log(a);//3

let {x = 3} = {x:5};
console.log(x);//5

let {m : n = 3} ={};
console.log(n); //3

let {j:k = 3} = {j:5};
console.log(k); //5

//undefined !== null

let {zz = 3}={zz:undefined};
console.log(zz); //3

let {zzz = 3} = {zzz:null};
console.log(zzz); //null