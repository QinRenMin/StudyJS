// var str = 'abc123cba456aaa789';
// var reg = /\d+/;
// console.log(reg.exec(str))//[ '123', index: 3, input: 'abc123cba456aaa789' ]
// console.log(reg.lastIndex)// lastIndex : 0

// lastIndex ：这个属性记录的就是下一次捕获从哪个索引开始。
// 当未开始捕获时，这个值为0。
// 如果当前次捕获结果为null。那么lastIndex的值会被修改为0.下次从头开始捕获。
// 而且这个lastIndex属性还支持人为赋值。
let str = 'abc123cba456aaa789';
let reg = /\d+/g;  //此时加了标识符g
console.log(reg.lastIndex); //未捕获
// lastIndex : 0

console.log(reg.exec(str));
//  ["123", index: 3, input: "abc123cba456aaa789"];
console.log(reg.lastIndex);
// lastIndex : 6
//reg.lastIndex = 18; 修改lastIndex值，可以更改下一次匹配的位置
console.log(reg.exec(str)); //[ '456', index: 9, input: 'abc123cba456aaa789' ]
console.log(reg.lastIndex); //12

console.log(reg.exec(str)); //[ '789', index: 15, input: 'abc123cba456aaa789' ]
console.log(reg.lastIndex); //18

console.log(reg.exec(str)); //null
console.log(reg.lastIndex); //0

console.log(reg.exec(str)); //[ '123', index: 3, input: 'abc123cba456aaa789' ]
console.log(reg.lastIndex); //6
