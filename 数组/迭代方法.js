/*
*  5个迭代方法都接收两个参数：
*       在每一项运行的函数和（可选）运行该函数的作用域对象--影响this的值
*     运行函数的参数：item,index,arr(本身)
*    是否修改原数组的值：否
* 1) every
*   定义：对数组的每一项运行给定的函数,每一项都要满足要求则为true
*   返回值：true/false
* 2) some
*   定义：对数组的每一项运行给定的函数,有一项都要满足要求则为true
*   返回值：true/false
* 3) foreEach
*   定义：对数组的每一项运行给定的函数，遍历数组
*   返回值：无
* 4）map
*   定义：对数组的每一项运行给定的函数看,对每一项进行操作
*   返回值：返回每次函数调用结果组成的数组
* 5) filter
*   定义：过滤掉不想要的数据
*   返回值：返回该函数返回true的项组成的数组
* */

let arr = [1,2,3,4,5];

let result = arr.every((item) =>{
    return item > 9;
});
console.log(result); //false

result = arr.some((item) => {
    return item > 3;
});
console.log(result);//true

let filterArr = arr.filter((item) => {
    return item > 2
});
console.log(filterArr);//[3,4,5]

let mapArr = arr.map((item) => {
    return item > 2;
    // return item+2;
});
console.log(mapArr);//[ false, false, true, true, true ]
// console.log(mapArr);//[ 3, 4, 5, 6, 7 ]

arr.forEach((item) => {
    console.log(item + 3)
});