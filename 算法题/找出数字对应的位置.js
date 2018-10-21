/*
*找出元素 item 在给定数组 arr 中的位置，如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
*例如： [ 1, 2, 3, 4 ], 3 ---> 2
*  */

function indexOf(arr,item) {
    let result = -1;
    arr.map(function (x,index) {
        if(item === x) {result=index; return result;}
    });
    return result;
}

function indexOf1(arr, item) {
    return(arr.findIndex( x => item === x));
}

function indexOf2(arr, item) {
    return arr.indexOf(item);
}
console.log(indexOf([1,2,3,4],3));
console.log(indexOf1([1,2,3,4],3));
console.log(indexOf2([1,2,3,4],3));