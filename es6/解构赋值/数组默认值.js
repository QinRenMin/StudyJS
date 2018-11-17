/*
* 解构赋值允许指定默认值
*
* */

let [foo = 1] = [];
console.log(foo);//1

let [x,y = 'b'] = ['a'];
console.log(x,y);//a b

let [d,e='b']=['a',undefined];
console.log(d,e); //a b

//如果一个数组成员值不严格等于undefined,默认值是不会生效的
let [z = 1] =[undefined];
let [k = 1]=[null];
console.log(z,k); //1 null
//因为null!==undefined
console.log(null===undefined); //false

//默认值可以引用解构赋值的其他变量,但变量必须已经声明
let [m = 1,n = m] =[];
console.log(m,n);//1 1

[m = 1,n = m] =[2];
console.log(m,n);//2 2

[m = 1,n = m] =[1,2];
console.log(m,n);//1 2
// let [f = v ,v =1] =[];
// console.log(f,v);//1 1 //ReferenceError: v is not defined

