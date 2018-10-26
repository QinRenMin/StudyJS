/*
* 1）reverse
*      参数：无
*      定义：使数组倒顺序
*      返回值：经过排序后的数组
*      是否改变原数组：是
* 2）sort
*       参数：一个比较函数
*       定义：比较字符串大小
*       返回值：经过排序后的数组
*       是否改变原数组：是
*
*       比较函数：
*       参数：两个
*       返回：-1 1 0（也可一简化成两个数字相减）
* */
let arr = [10,2,5,9,13];
arr.reverse();
console.log(arr); //[13,9,5,2,10]
let values = [0,1,5,20,10,15];
values.sort(compare);
function compare(values1,values2) {
    return  values2 - values1;
}
console.log(values); //[ 20, 15, 10, 5, 1, 0 ]