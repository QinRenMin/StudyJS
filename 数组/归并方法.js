/*
*作用：迭代数组中的所有项，返回一个数值
* 参数：2个，在每一项上的调用函数和（可选）迭代初始值
*       调用函数的参数：4个
*           pre:前一个值
*           cur:当前值
*           index:索引
*           arr:数组本身
*  是否改变原数组的值：否
* 1）reduce
*    定义：从数组中的第一项开始
* 2）reduceRight
*   定义：从数组中的最后一项开始
*
* */
let arr = [2,4,6,7];
let result = arr.reduce(function (pre,cur,index,arr) {
    // console.log(pre);1,3,7,13,20
    return pre+cur;
},1);
console.log(result); //20
//reduceRight()和上面方法相似，操作顺序不同