/*
* 1) indexOf
*      定义：找寻数据在数组中的位置（从前向后查找）
*      参数：2个，要查询的值和查找起点（可选）
*      返回值：没有找到返回-1,找到返回对应位置数组的下标
*2）lastIndexOf
*      定义： 从末尾向前查找
*      其他一样
* 注意：在比较每一个数值时，使用全等操作
* */
let arr= [1,2,3,4,4,3,2];
console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(5)); //-1
console.log(arr.lastIndexOf(2)); //6
console.log(arr.lastIndexOf(5)); //-1
