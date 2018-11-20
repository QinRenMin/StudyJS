/*
* Math.trunc()
* Math.sign()
* Math.cbrt()
* Math.clz32()
* Math.imul()
* Math.found()
* Math.hypot()
* */

//Math.trunc():去除一个数的小数部分,返回整数部分
let a = 4.1;
console.log(Math.trunc(a)); //4

//对于非数值,转化为数值
console.log(Math.trunc('13.43')); //13

//对于空值和无法截取的数值,返回NaN
console.log(Math.trunc('a')); //NaN
console.log(Math.trunc());
console.log(Math.trunc(NaN));//NaN


//Math.sign():判断一个数是正数,负数还是0
//返回值5个,正数:1,负数:-1,0,:0,-0:-0,其他值:NaN
console.log(Math.sign(a)); //1

//Math.cbrt():计算一个数的立方根
console.log(Math.cbrt(-1)); //-1

//Math.clz32():找出32位无符号整数有多少个前导0
console.log(Math.clz32(a));//29 ,小数只考虑整数部分
console.log(Math.clz32(1));//31

//Math.imul():返回32位带符号数相乘的结果
console.log(Math.imul(-2,2)); //-4

//Math.hypot():返回所有参数平方和的平方根
console.log(Math.hypot(3,4)); //5
function f(...arg){
    console.log(Math.hypot(arg[0],arg[1])%1===0);
}
f(3,4);