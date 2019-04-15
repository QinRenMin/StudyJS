function *setGenerator(x,y) {
    let z = yield x+y;
    let result = yield z*x;
    return result;
}

let g = setGenerator(5,6);
console.log(g);//Object [Generator] {}
console.log(g.next()); //{ value: 11, done: false }

console.log(g.next(11)); //{ value: 55, done: false }
