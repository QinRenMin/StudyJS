/*
* 1）push
*   参数：添加的值
*   定义：向数组中添加元素（可以添加多个元素）
*   返回值：修改后数组的长度
*   是否修改元数组：是
*
* 2）pop
*   参数：无
*   定义：删除数组中的最后一项，减少数组的length
*   返回值：删除的元素
*   是否修改元数组：是
*
* */
let arr = new Array("yellow");
console.log("原数组长度 "+arr.length); //1
let count  = arr.push("red","blue","green");//4
console.log("push返回值  "+count);//4
console.log("添加元素后数组的长度"+arr.length);//4

let item = arr.pop();
console.log("pop返回值  "+item); //green
console.log("删除元素后的数组长度 "+arr.length); //3