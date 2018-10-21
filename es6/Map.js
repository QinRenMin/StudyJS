/*
* Map：一组键值对的结构，具有极快查找速度
*has（判断是否有该键值对）
*get（得到对应键值）
*set（设置键值对）
*delete（删除键值对） 方法
*clear()，清空键值对
*keys() values() entries()
**/
let m = new Map();
let o = {p:'hello world'};
m.set(o,'content');
console.log(m.get(o)); // 'content'
console.log(m.has(o)); // 'true'
console.log(m.delete(o)); // 'true'
console.log(m.has(o)); // 'false'


let map = new Map([
    ['name','zxw'],
    ['title','author']
]);

console.log(map.size);
console.log(map.has('name'));