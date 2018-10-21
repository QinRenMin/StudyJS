/*
* Set的四种遍历方法：
*   keys():返回键名的遍历器
*   values():返回键值的遍历器
*   entries():返回键值对的遍历器
*   forEach():使用回调函数遍历每个成员
*
* Set的遍历顺序就是插入顺序。
* 这个特性有时非常有用，
* 比如使用 Set 保存一个回调函数列表，
* 调用时就能保证按照添加顺序调用。
*
*   keys(),values(),entries()返回都是遍历器对象
*   由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值）
*   所以keys方法和values方法的行为完全一致。
* */

let set = new Set(['li','han','lucy']);
console.log(set);

for (let i of set.keys()){
    console.log(i);
}

for (let i of set.values()){
    console.log(i);
}

for (let i of set.entries()){
    console.log(i)
}

for (let i of set){
    console.log(i)
}

// forEach
set.forEach((index,item)=>{
    console.log(index,item)
});