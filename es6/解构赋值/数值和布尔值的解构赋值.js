/*
* 解构赋值时,如果等号右边是数值和布尔值,则会先转化成对象
* */
let {toString : s} = 123;
console.log(s === Number.prototype.toString); //true

let {toString:ss} = true;
console.log(ss === Boolean.prototype.toString);//true

let {toString:sss} = [];
console.log(sss===Array.prototype.toString); //true

let {toString : ssss} = '12';
console.log(ssss===String.prototype.toString);//true
let{toString:sssss} = new Set([1,2]);
console.log(sssss === Set.prototype.toString);//true

//以下两种会报错,原因是undefined和null无法转化成对象
// let {prop:x} = undefined;
// console.log(x);
// let {prop:y} = null;
// console.log(y);
//TypeError: Cannot destructure property `prop` of 'undefined' or 'null'.
