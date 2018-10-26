/*
* Array.of()
* Array.form()
* copyWithin()
* fill()
* find()和findIndex()
* includes()
* reduceRight()和reduce()
* keys()
* */

// Aaary类是一个函数，返回数组
    
let a = Array(1,2,3);
console.log(a); //[1,2,3]

let b =Array(6);
console.log(b); // 六个空位的数组
//Array.of()

console.log(Array.of(2,3,4)); //[2,3,4]
console.log(Array.of(6)); //[6]

// Array.form(数组/类数组)，返回一个数组

console.log(Array.from([1,2,3])); //[1,2,3]
console.log(Array.from('123')); //[ '1', '2', '3' ]

/* 在原型上的扩展
1.copyWithin()
作用：从原数组读取内容，替换指定位置内容，修改了原数组内容，但是长度不会发生改变
参数（替换目标的起始位置，查找的起始位置，查找的二结束位置），如果有超出部分，自动截取。*/

let arr1 = [1,2,3,4,5];
console.log(arr1.copyWithin(4,2,4)); //[ 1, 2, 3, 4, 3 ]
console.log(arr1 .copyWithin(3,2,4)); // [1, 2, 3, 3, 4 ]

//2.fill()
//作用：按照指定字符填充，数组每一项都会发生改变，以下例子请分别测试，数组内容会发生改变

let arr2 = [1,2,3,4,5];
console.log(arr2.fill('a')); //[ 'a', 'a', 'a', 'a', 'a' ]
console.log(arr2.fill('a',3)); //[ 1, 2, 3, 'a', 'a' ]
console.log(arr2.fill('a',1,4)); //[ 1, 'a', 'a', 'a', 5 ]

/*3.find()和findIndex()
*前者返回对应的值，后者返回找到的对应下标
*如果没找到，前者返回undefined，后者返回-1
*/
 let arr3 = [1,2,3,3,4,5,2];
 console.log(arr3.find((item) => {return item === 2;}));//2
 console.log(arr3.find((item) => {return item === 6;}));//undefined

console.log(arr3.findIndex((item) => {return item === 2;}));//1
console.log(arr3.findIndex((item) => {return item === 6;}));//-1

/*4.includes()
作用：判断数组有没有某一项
返回值：布尔值
  */
let arr7 = [1,2,3,3,4,5,2];
console.log(arr7.includes(5)); //true
console.log(arr7.includes(6)); //false

/*5.reduceRight()和reduce()
作用：数组迭代((prev,curr),初始值（用于reduce()）)
*/

let arr4 = [1,2,3,4];
console.log(arr4.reduce((prev,curr) =>{ return prev+curr})); //10
console.log(arr4.reduceRight((prev,curr) =>{ return prev+curr})); //10
console.log(arr4.reduce((prev,curr) =>{ return prev+curr},30)); //40

/*6.keys()
作用：遍历每一项的接口
使用for-of遍历
keys() :返回索引
entries():返回键值对
  */
let arr5 = [1,2,3,4];
for(let key of arr5.keys()){
    console.log(key); //0 1 2 3
}
for(let item of arr5){
    console.log(item); //1 2 3 4
}

for(let key of arr5.entries()){
    console.log(key); //[ 0, 1 ] [ 1, 2 ]  [ 2, 3 ]  [ 3, 4 ]
}

