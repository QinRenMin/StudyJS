/*
* 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
* 例如：[1, 2, 3, 4, 2], 2 ---> [1,3,4]
* */

function remove(arr, item) {
    let result =[];
    arr.map(function(x){
        if(x !== item){
            result.push(x);
        }
    });
    return result;
}

function remove1(arr,item) {
    return arr.filter(x => x!==item);
}

console.log(remove([1,2,3,4,2],2));
console.log(remove1([1,2,3,4,2],2));

/*
* 移除数组 arr 中的所有值与 item 相等的元素。直接修改数组 arr，返回结果
* 例如：[1, 2, 3, 4, 2], 2 ---> [1,3,4]
* */
function removeWithoutCopy(arr, item) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item){
            arr.splice(i,1);
            i--;} }
    return arr;
}
console.log(removeWithoutCopy([1,2,3,4,2],2));