/*
* 构造一个函数func(arr,x),使用sort()函数将给定的数组arr随机排序,
* 并打印出该数组,以及变量x在该数组中的下标
* 例如: func([1,2,3,4,5,6],5)
* 输出:
* arr : [1,4,5,3,2,6] (随机排序)
* index : 2
* */

function  fun(arr,x) {
    let a = arr.sort(() => Math.random() > 0.5 ? -1: 1);
    console.log( `arr : ${a} index : ${arr.indexOf(x)} `);
}
fun([1,2,3,4],2); 