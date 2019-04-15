function *setGenerator(x,y) {
    let z = yield x+y;
    let result = yield z*x;
    return result;
}

let g = setGenerator(5,6);
console.log(g);//Object [Generator] {}
console.log(g.next()); //{ value: 11, done: false }
console.log(g.next());//{ value: NaN, done: false }
console.log(g.next());//{ value: undefined, done: true }
//1、第一执行next()，运行"yield x+y"，并返回x+y的运算结果11；

// 2、第二次执行next()，运行"yield z*x",此时是z为11，x为5，运算结果为55才对，为何是NaN呢？
// 前一次运行yield x+y的值并没有保存，let z=yield x+y，结果是let z=undefined，所以运算z*x的结果是NaN。
