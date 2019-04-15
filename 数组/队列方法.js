/*
* 1）unshift
*       参数：要添加的数值
*       定义：在数组前添加任意多个字符
*       返回值：返回添加后新数组的长度
*       是否修改原数组：是
*2）shift
*       参数：无
*       定义：删除数组第一项
*       返回值：返回删除的项
*       是否修改原数组：是
* */

let arr = new Array('yellow');
console.log("原数组长度: "+arr.length+arr);//1yellow
let count = arr.unshift("blue","green");
console.log("添加数据后数组长度： "+arr.length+arr); //3blue,green,yellow

let item = arr.shift();
console.log("删除的数据信息： "+item); // blue
console.log("删除后组长度 ："+arr.length+arr );//2green,yellow
console.log(item,count);
