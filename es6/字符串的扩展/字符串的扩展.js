// 字符串的扩展
/*
* includes
* startsWith
* endsWith
* repeat
* padStart
* padEnd
* */

//includes('str'):判断指定位置有没有字符,返回值是布尔值

let ss = 'asd';
console.log(ss.includes('a'));//true
console.log(ss.includes('e'));//false

//startsWith('str',index)```:判断字符串是不是以指定字符作为开头,index表示查找的结束下标`
let str = 'aasderst';
console.log(str.startsWith('sd',2)); //true
console.log(str.startsWith('sder',3));//false
console.log(str.startsWith('a'));//true

//endsWith('str',num)```:判断字符串是不是以指定字符作为结尾,num表示查找的个数

let s3 = 'weasfer';
console.log(s3.endsWith('r')); //true
console.log(s3.endsWith('as',3));//true
console.log(s3.endsWith('a',2));//false

//repeat(num):将字符串重复几次,num不可以是负数和Infitnity

let s4 = 'asd';
console.log(s4.repeat(2));//asdasd
console.log(s4.repeat(0));console.log(s4.repeat(-0)); //空串
console.log(s4.repeat(0.9));console.log(s4.repeat(-0.5));//空串

//padStart('指定字符串长度',补全的字符串)```:在头部补全字符串
//如果省略第二个参数,用空格来补全

let s5 = 'llo';
console.log(s5.padStart(2,'he'));//llo
console.log(s5.padStart(9));//     llo
console.log(s5.padStart(3,'he'));//llo
console.log(s5.padStart(5,'he'));//hello
console.log(s5.padStart(7,'he'));//hehello
console.log(s5.padStart(8,'he'));//hehehllo

// padEnd('指定字符串长度',补全的字符串)```:在末尾部补全字符串
let s6 = 'llo';
console.log(s6.padEnd(2,'ed'));//llo
console.log(s6.padEnd(3,'ed'));//llo
console.log(s6.padEnd(5,'ed'));//lloed
console.log(s6.padEnd(7,'ed'));//lloeded
console.log(s6.padEnd(8,'ed'));//lloedede
//注意:原字符串的长度大于或者等于指定的最小字符串长度,返回原字符串