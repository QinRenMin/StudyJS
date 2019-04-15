function *setGenerator(x,y) {
    let z = yield x+y;
    let result = yield z*x;
    return result;
}

let g = setGenerator(5,6);
console.log(g);//Object [Generator] {}
let i = g.next();

console.log(i); //{ value: 11, done: false }
console.log(g.next(i.value));//{ value: 55, done: false }