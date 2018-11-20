/*
* 在Number对象上增加一个极小常量---Number.EPSILON
* 目的:为浮点运算设置一个误差范围
*
* */

console.log(0.1+0.2===0.3); //false

if((0.1+0.2)-0.3<Number.EPSILON){
    console.log('消除误差成功');
}