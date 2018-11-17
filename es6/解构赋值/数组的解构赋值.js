/*
* 解构赋值:按照一定模式从数组或者对象中提取值,然后对变量进行赋值(某种数据需要具备Iterator接口)
* 等号两边模式相同即可
* */

let [a,b,c] = [1,2,3];
console.log(a,b,c); //1 2 3

let [foo,[[d],e]]=[1,[[2],3]];
console.log(foo,d,e); //1 2 3

let [,,three] = ['a','b','c'];
console.log(three); //c

let [head,...tail] = [1,2,3,4];
console.log(head); //1
console.log(tail); //[2,3,4]

let [x,y,...z] = ['a'];
console.log(x); //a
console.log(y); //undefined
console.log(z); //[]

let [f] = [];
console.log(f);//undefined
let [g,h] = [1];
console.log(g ,h); //1 undefined


//如果等号右边不是数组(严格模式下不是可遍历的结构),将会报错
// let [i,j] = null;
// console.log(i,j); //TypeError: null is not iterable
