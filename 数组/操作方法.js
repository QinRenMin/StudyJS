/*
* 1）concat
*   参数：多个，要连接的数值（如果没有参数，则是复制当前数组并返回副本）
*   定义：基于当前数组中的所有项创建一个新的数组
*   返回值：数组
*   是否改变原数组：否
* 2）slice
*   参数：一个或者两个（返回项的起始位置和结束位置）
*   定义：基于当前数组创建一个或者多个项创建一个新数组
 *  返回值：数组
 *      1个参数：返回指定位置到当前数组末尾的所有项
*       2个参数：返回起始位置到结束位置（不包括结束位置）的所有项数据
*       如果结束位置小于起始位置，返回空数组
*       当参数是负值时，用数组长度加上该数，返回对应的数据值
*   是否改变原数组：否
*3）splice
*   作用：
*   删除：
*       定义：删除数组中任意数量的项
*       参数：2个，要删除的第一项的位置和要删除的项数
*              如：arr.splice(1,2);删除数组的第2,3个数
*   插入：
*       定义：向指定位置插入任意数量的项
*       参数：3个，起始位置，0（要删除的项数），插入的项（可以是多个）
*               如：arr.splice(2,0,'a','b');从位置2插入a,b
*
*   替换：
*       定义：向指定位置插入任意数量的项，同时删除任意数量的项数
*       参数：3个，起始位置、要删除的项数、要插入的任意数量的项。（插入的项数不必与删除的项数相等）
*           如：arr.splice(2,1,'c','d');删除当前数组第二项，再从位置为2开始插入c,d
*
*    返回值：数组（如果没有参数。返回空数组）
*    是否改变原数组：是
*
* */


let arr = ["q","a"];
let arr1 = arr.concat();
console.log("没有参数  "+arr1); //[q,a]
arr1 = arr.concat('s',['d','f']);
console.log("连接多个数据  "+arr1); //[q,a,s,d,f]
console.log("原数组  "+arr); // [q,a]
let value = ['a','s','d','e'];
console.log(value.slice(1)); //[ 's', 'd', 'e' ]
console.log(value.slice(1,3));//[ 's', 'd' ]
console.log(value.slice(-2,-4));//[]
console.log(value.slice());//[ 'a', 's', 'd', 'e' ]
console.log(value.slice(3,1));//[]
console.log("原数组 "+value); //a,s,d,e

let arr2 = ['f','g','h','k'];
console.log(arr2.splice()); //[]
let removed = arr2.splice(1,2);
console.log(removed); //['g',h]
console.log(arr2); //['f','k']

arr2 = ['f','g','h','k'];
let insert = arr2.splice(2,0,'q','j');
console.log(insert); //[]
console.log(arr2); //[ 'f', 'g', 'h', 'j', 'h', 'k' ]

arr2 = ['f','g','h','k'];
 insert = arr2.splice(2,1,'q','j');
console.log(insert); //[ 'h' ]
console.log(arr2); //[ 'f', 'g', 'h', 'j', 'k' ]

